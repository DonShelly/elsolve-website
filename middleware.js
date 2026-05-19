export default async function middleware(request) {
  const accept = request.headers.get('accept') || ''

  if (accept.includes('text/markdown')) {
    const url = new URL(request.url)
    url.pathname = '/index.md'
    url.search = ''
    const upstream = await fetch(url.toString(), {
      headers: { 'cache-control': 'no-cache' },
    })
    return new Response(upstream.body, {
      status: 200,
      headers: {
        'content-type': 'text/markdown; charset=utf-8',
        'vary': 'accept',
        'cache-control': 'public, max-age=0, must-revalidate',
      },
    })
  }
}

export const config = {
  matcher: ['/'],
}
