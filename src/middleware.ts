import { notFound } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import { PATHNAMES_FLAG } from './utils/flags'
import { localesSchema, pathnamesSchema } from './utils/schemas'

export const middleware = async (request: NextRequest) => {
  const cookie = request.cookies.get('LOCALE')
  const response = NextResponse.next()

  if (!cookie?.value) {
    const header = request.headers.get('accept-language')
    const sliced = header?.slice(0, 2)
    const parsed = localesSchema.safeParse(sliced)

    response.cookies.set('LOCALE', parsed.success ? parsed.data : 'en')
  }

  const parsed = pathnamesSchema.safeParse(request.nextUrl.pathname)

  if (parsed.success) {
    const flag = PATHNAMES_FLAG[parsed.data]

    if (flag) {
      const enabled = await flag()

      if (!enabled) notFound()
    }
  }

  return response
}

export const config = {
  matcher: '/((?!_next).*)'
}
