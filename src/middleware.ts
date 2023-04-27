import { NextMiddleware, NextResponse } from 'next/server'

export const middleware: NextMiddleware = async req => {
  if (!req.cookies.get('vividus.token')) return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
  matcher: ['/:path*/home', '/dashboard', '/financial/:path*']
}
