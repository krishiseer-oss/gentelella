import { NextResponse } from 'next/server'
import { updateSession } from './lib/supabase/proxy'

export async function proxy(request) {
  const response = await updateSession(request)
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith('/portal') && response.cookies.getAll().length === 0) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}
