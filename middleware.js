export default function middleware(request) {
  const accept = request.headers.get('accept') || ''

  if (accept.includes('text/markdown')) {
    const url = new URL(request.url)
    url.pathname = '/index.md'
    return Response.redirect(url.toString(), 302)
  }
}

export const config = {
  matcher: ['/'],
}
