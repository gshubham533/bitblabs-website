'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion, setupGsap } from '@/lib/gsap';

/**
 * Hero WebGL layer: a point-cloud sculpture of the BitBLabs mark (the B with
 * its slash), sampled from /brand/mark.png, with an orbiting particle ring
 * that echoes the badge circle. The canvas covers the whole hero; the mark is
 * anchored to the right-hand column (.hero__visual), and dust fills the rest.
 *  - load:   dust from across the whole hero converges into the mark
 *  - idle:   the mark breathes and turns in 3D; ambient dust drifts everywhere
 *  - cursor: points (mark and dust) are pushed aside and spring back
 *  - scroll: the mark dissolves back out across the entire canvas
 */

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uMorph;
  uniform float uScatter;
  uniform vec2 uMouse;
  uniform float uMouseForce;
  uniform float uSize;
  uniform float uPR;
  uniform float uSpin;
  uniform mat3 uRot;
  attribute vec3 aTarget;
  attribute vec3 aStart;
  attribute float aSeed;
  attribute float aKind; // 1 contour, 0.5 ring, 0 fill, -1 dust
  varying float vT;
  varying float vAlpha;

  void main() {
    bool dust = aKind < -0.5;
    bool ring = aKind > 0.25 && aKind < 0.75;

    // every particle has a "free" position somewhere across the canvas that slowly wanders
    float t = uTime;
    vec3 drift = vec3(
      sin(t * 0.13 + aSeed * 40.0) + sin(t * 0.07 + aSeed * 13.0),
      cos(t * 0.11 + aSeed * 23.0) + cos(t * 0.05 + aSeed * 7.0),
      sin(t * 0.09 + aSeed * 31.0)
    ) * 0.035;
    vec3 free = aStart + drift;

    // the formed position: ring orbits, then the whole mark turns in 3D
    vec3 tgt = aTarget;
    if (ring) {
      float a = t * uSpin;
      float c = cos(a), s = sin(a);
      tgt.xy = mat2(c, -s, s, c) * tgt.xy;
      float tilt = 1.12;
      tgt = vec3(tgt.x, tgt.y * cos(tilt), tgt.y * sin(tilt));
      float rz = -0.35;
      tgt.xy = mat2(cos(rz), -sin(rz), sin(rz), cos(rz)) * tgt.xy;
    }
    float bt = t * 0.7 + aSeed * 6.2831;
    tgt += vec3(sin(bt) * 0.004, cos(bt * 1.3) * 0.004, sin(bt * 0.7) * 0.02);
    tgt = uRot * tgt;

    // load: free → formed (staggered); scroll: formed → free again (staggered)
    float form = clamp((uMorph - aSeed * 0.45) / 0.55, 0.0, 1.0);
    form = form * form * (3.0 - 2.0 * form);
    float un = clamp(uScatter * 1.7 - aSeed * 0.7, 0.0, 1.0);
    un = un * un * (3.0 - 2.0 * un);
    float amount = dust ? 0.0 : form * (1.0 - un);
    vec3 p = mix(free, tgt, amount);
    // a little depth flourish while particles are in flight
    p.z += sin(amount * 3.14159) * (0.25 + aSeed * 0.35);

    // pointer: points are pushed aside and toward the viewer
    vec2 d = p.xy - uMouse;
    float len = length(d);
    float f = smoothstep(dust ? 0.24 : 0.17, 0.0, len) * uMouseForce;
    p.xy += normalize(d + 1e-5) * f * (dust ? 0.12 : 0.075);
    p.z += f * 0.18;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float kindSize = aKind > 0.75 ? 1.0 : (ring ? 0.85 : (dust ? 0.8 : 0.75));
    gl_PointSize = min(uSize * uPR * (10.0 / -mv.z) * (0.6 + aSeed * 0.7) * kindSize, 7.0 * uPR);

    vT = dust ? clamp(aStart.x * 0.12 + 0.5, 0.0, 1.0) : clamp(aTarget.x * 0.9 + 0.5 - aTarget.y * 0.25, 0.0, 1.0);
    float formedAlpha = aKind > 0.75 ? 0.95 : (ring ? 0.6 : 0.26);
    float freeAlpha = 0.34;
    float a = dust ? freeAlpha : mix(freeAlpha, formedAlpha, amount);
    float nearFade = smoothstep(3.5, 7.0, -mv.z);
    vAlpha = a * (0.55 + 0.45 * aSeed) * nearFade;
  }
`;

const FRAG = /* glsl */ `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vT;
  varying float vAlpha;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float r = length(c);
    if (r > 0.5) discard;
    float a = smoothstep(0.5, 0.15, r) * vAlpha;
    gl_FragColor = vec4(mix(uColorA, uColorB, vT), a);
  }
`;

type Sample = { contour: Float32Array; fill: Float32Array; aspect: number };

/**
 * Samples the white B (with its slash) out of the mark. Most points sit on
 * the contour so the slash and the gaps stay legible; a lighter set fills it.
 * Coordinates are normalised to the mark's height, centred, y up.
 */
async function sampleMark(src: string, nContour: number, nFill: number): Promise<Sample | null> {
  const img = new Image();
  img.src = src;
  await img.decode();
  const N = 256;
  const c = document.createElement('canvas');
  c.width = N;
  c.height = N;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  if (!ctx) return null;
  ctx.drawImage(img, 0, 0, N, N);
  const { data } = ctx.getImageData(0, 0, N, N);
  const white = new Uint8Array(N * N);
  for (let i = 0; i < N * N; i++) {
    const o = i * 4;
    white[i] = data[o + 3] > 200 && data[o] > 225 && data[o + 1] > 225 && data[o + 2] > 225 ? 1 : 0;
  }
  const edges: number[] = [];
  const inner: number[] = [];
  let minX = N;
  let maxX = 0;
  let minY = N;
  let maxY = 0;
  for (let y = 1; y < N - 1; y++) {
    for (let x = 1; x < N - 1; x++) {
      if (!white[y * N + x]) continue;
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
      const edge =
        !white[y * N + x - 1] || !white[y * N + x + 1] || !white[(y - 1) * N + x] || !white[(y + 1) * N + x];
      (edge ? edges : inner).push(x, y);
    }
  }
  if (!edges.length || !inner.length) return null;
  const h = maxY - minY;
  const cx = (minX + maxX) / 2;
  const cy = (minY + maxY) / 2;
  const pick = (from: number[], n: number, jitter: number) => {
    const out = new Float32Array(n * 2);
    for (let k = 0; k < n; k++) {
      const j = Math.floor(Math.random() * (from.length / 2)) * 2;
      out[k * 2] = (from[j] + 0.5 + (Math.random() - 0.5) * jitter - cx) / h;
      out[k * 2 + 1] = -(from[j + 1] + 0.5 + (Math.random() - 0.5) * jitter - cy) / h;
    }
    return out;
  };
  return { contour: pick(edges, nContour, 0.9), fill: pick(inner, nFill, 1), aspect: (maxX - minX) / h };
}

export function HeroScene() {
  const host = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import('three');
      if (disposed) return;
      const reduce = prefersReducedMotion();
      const mobile = window.matchMedia('(max-width: 720px)').matches;
      const N_CONTOUR = mobile ? 4200 : 7200;
      const N_FILL = mobile ? 1600 : 2800;
      const N_RING = mobile ? 1100 : 1900;
      const N_DUST = mobile ? 900 : 1900;
      const COUNT = N_CONTOUR + N_FILL + N_RING + N_DUST;

      const sample = await sampleMark('/brand/mark.png', N_CONTOUR, N_FILL);
      if (!sample || disposed) return;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, powerPreference: 'high-performance' });
      } catch {
        return; // no WebGL: the hero stands on its own
      }
      const pr = Math.min(window.devicePixelRatio || 1, 2);
      renderer.setPixelRatio(pr);
      renderer.setClearColor(0x000000, 0);
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.set(0, 0, 10);
      const group = new THREE.Group();
      scene.add(group);

      const target = new Float32Array(COUNT * 3);
      const start = new Float32Array(COUNT * 3);
      const seed = new Float32Array(COUNT);
      const kind = new Float32Array(COUNT);
      let i = 0;
      // contour: two layers (front / back) so the turn reveals thickness
      for (let k = 0; k < N_CONTOUR; k++, i++) {
        target[i * 3] = sample.contour[k * 2];
        target[i * 3 + 1] = sample.contour[k * 2 + 1];
        target[i * 3 + 2] = (k % 2 ? 1 : -1) * 0.035 + (Math.random() - 0.5) * 0.006;
        kind[i] = 1;
      }
      for (let k = 0; k < N_FILL; k++, i++) {
        target[i * 3] = sample.fill[k * 2];
        target[i * 3 + 1] = sample.fill[k * 2 + 1];
        target[i * 3 + 2] = (Math.random() - 0.5) * 0.07;
        kind[i] = 0;
      }
      // orbit ring, echoing the badge circle
      for (let k = 0; k < N_RING; k++, i++) {
        const a = Math.random() * Math.PI * 2;
        const spread = Math.random() < 0.1 ? (Math.random() - 0.5) * 0.09 : (Math.random() - 0.5) * 0.016;
        const r = 0.7 + spread;
        target[i * 3] = Math.cos(a) * r;
        target[i * 3 + 1] = Math.sin(a) * r;
        target[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
        kind[i] = 0.5;
      }
      // ambient dust: lives at its free position across the whole canvas
      for (let k = 0; k < N_DUST; k++, i++) kind[i] = -1;
      for (let k = 0; k < COUNT; k++) seed[k] = Math.random();

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(target.slice(), 3));
      geo.setAttribute('aTarget', new THREE.BufferAttribute(target, 3));
      geo.setAttribute('aStart', new THREE.BufferAttribute(start, 3));
      geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
      geo.setAttribute('aKind', new THREE.BufferAttribute(kind, 1));

      const uniforms = {
        uTime: { value: 0 },
        uMorph: { value: reduce ? 1 : 0 },
        uScatter: { value: 0 },
        uMouse: { value: new THREE.Vector2(99, 99) },
        uMouseForce: { value: 0 },
        uSize: { value: mobile ? 2.2 : 2.6 },
        uPR: { value: pr },
        uSpin: { value: reduce ? 0 : 0.12 },
        uRot: { value: new THREE.Matrix3() },
        uColorA: { value: new THREE.Color('#7a45ff') },
        uColorB: { value: new THREE.Color('#13b9d1') },
      };
      const mat = new THREE.ShaderMaterial({
        uniforms,
        vertexShader: VERT,
        fragmentShader: FRAG,
        transparent: true,
        depthWrite: false,
      });
      const points = new THREE.Points(geo, mat);
      points.frustumCulled = false;
      group.add(points);

      // Layout: the canvas covers the whole hero; the mark is anchored to the
      // right-hand column (.hero__visual) and sized to it.
      let view = { w: 1, h: 1 };
      let scale = 1;
      const aStart = geo.getAttribute('aStart') as InstanceType<typeof THREE.BufferAttribute>;
      const anchor = el.parentElement?.querySelector<HTMLElement>('.hero__visual') ?? null;
      const layout = () => {
        const w = el.clientWidth;
        const h = el.clientHeight;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const vh = 2 * camera.position.z * Math.tan((camera.fov * Math.PI) / 360);
        view = { w: vh * camera.aspect, h: vh };
        let gx = 0;
        let gy = 0;
        let aw = view.w;
        let ah = view.h;
        if (anchor) {
          const er = el.getBoundingClientRect();
          const ar = anchor.getBoundingClientRect();
          gx = ((ar.left - er.left + ar.width / 2) / w - 0.5) * view.w;
          gy = (0.5 - (ar.top - er.top + ar.height / 2) / h) * view.h;
          aw = (ar.width / w) * view.w;
          ah = (ar.height / h) * view.h;
        }
        // the ring spans 1.4 units, so size the whole piece by it
        scale = Math.min(ah * 0.8, (aw * 1.05) / 1.45);
        group.scale.setScalar(scale);
        group.position.set(gx, gy, 0);
        // free positions: spread across the entire canvas (in the group's local space)
        for (let k = 0; k < COUNT; k++) {
          aStart.setXYZ(
            k,
            ((Math.random() - 0.5) * view.w * 1.04 - gx) / scale,
            ((Math.random() - 0.5) * view.h * 1.04 - gy) / scale,
            ((Math.random() - 0.5) * 2.4) / scale,
          );
        }
        aStart.needsUpdate = true;
      };
      layout();

      // Pointer in normalised device coords of the hero.
      const pointer = { x: 0, y: 0, active: false };
      const tilt = { x: 0, y: 0 };
      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
        pointer.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
        pointer.active = pointer.y > -1 && pointer.y < 1 && e.pointerType !== 'touch';
      };
      const onLeave = () => (pointer.active = false);
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('pointerleave', onLeave);

      const { gsap, ScrollTrigger } = setupGsap();
      const kills: Array<() => void> = [];
      if (!reduce) {
        const tw = gsap.to(uniforms.uMorph, { value: 1, duration: 2.8, ease: 'power3.inOut', delay: 0.15 });
        const st = ScrollTrigger.create({
          trigger: el.closest('section') || el,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
          onUpdate: (self) => (uniforms.uScatter.value = self.progress),
        });
        kills.push(() => tw.kill(), () => st.kill());
      }

      const clock = new THREE.Clock();
      const euler = new THREE.Euler();
      const rot4 = new THREE.Matrix4();
      let raf = 0;
      let visible = true;
      const tick = () => {
        raf = 0;
        if (!visible || disposed) return;
        const t = clock.getElapsedTime();
        uniforms.uTime.value = t;

        // pointer → the group's local plane
        const wx = (pointer.x * view.w) / 2 - group.position.x;
        const wy = (pointer.y * view.h) / 2 - group.position.y;
        const m = uniforms.uMouse.value;
        m.x += (wx / scale - m.x) * 0.2;
        m.y += (wy / scale - m.y) * 0.2;
        const f = uniforms.uMouseForce;
        f.value += ((pointer.active ? 1 : 0) - f.value) * 0.06;

        // the mark turns in 3D (applied in the shader, so free dust stays canvas-aligned)
        tilt.x += ((pointer.active ? pointer.y : 0) * 0.18 - tilt.x) * 0.04;
        tilt.y += ((pointer.active ? pointer.x : 0) * 0.3 - tilt.y) * 0.04;
        const idle = reduce ? 0 : 1;
        euler.set(Math.sin(t * 0.27) * 0.07 * idle - tilt.x, Math.sin(t * 0.35) * 0.28 * idle + tilt.y, 0);
        rot4.makeRotationFromEuler(euler);
        uniforms.uRot.value.setFromMatrix4(rot4);

        renderer.render(scene, camera);
        if (!reduce) raf = requestAnimationFrame(tick);
      };

      const io = new IntersectionObserver(([e]) => {
        visible = e.isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(tick);
      });
      io.observe(el);

      const ro = new ResizeObserver(() => {
        layout();
        if (reduce && !raf) raf = requestAnimationFrame(tick);
      });
      ro.observe(el);
      raf = requestAnimationFrame(tick);
      gsap.to(renderer.domElement, { opacity: 1, duration: 1.2, ease: 'soft' });

      cleanup = () => {
        cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        kills.forEach((k) => k());
        window.removeEventListener('pointermove', onMove);
        document.removeEventListener('pointerleave', onLeave);
        geo.dispose();
        mat.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={host} className="hero__scene" aria-hidden="true" />;
}
