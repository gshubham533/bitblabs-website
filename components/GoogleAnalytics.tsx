import Script from 'next/script'

const RAW_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || 'G-4DJJR5N6RE'
const MEASUREMENT_ID = /^G-[A-Z0-9]+$/.test(RAW_MEASUREMENT_ID)
  ? RAW_MEASUREMENT_ID
  : 'G-4DJJR5N6RE'

/** GA4 tag. Book clicks are sent separately from trackEvent. */
export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}
