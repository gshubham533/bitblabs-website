/** Forward campaign query params from the current page onto a booking or apply URL. */
export function appendCampaignParams(baseUrl: string, search?: string): string {
  if (typeof window !== 'undefined' && search === undefined) {
    search = window.location.search
  }

  if (!search || search === '?') {
    return baseUrl
  }

  try {
    const origin =
      typeof window !== 'undefined' ? window.location.origin : 'https://bitblabs.com'
    const isAbsolute = /^https?:\/\//i.test(baseUrl)
    const url = isAbsolute ? new URL(baseUrl) : new URL(baseUrl, origin)
    const incoming = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)

    incoming.forEach((value, key) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value)
      }
    })

    if (isAbsolute) return url.toString()
    return `${url.pathname}${url.search}${url.hash}`
  } catch {
    return baseUrl
  }
}
