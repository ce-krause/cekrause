import { NextRequest, NextResponse } from 'next/server'
import { languagesSchema } from './utils/schemas'

export const middleware = (request: NextRequest) => {
  const cookie = request.cookies.get('LANGUAGE')
  const response = NextResponse.next()

  if (!cookie?.value) {
    const header = request.headers.get('accept-language')
    const sliced = header?.slice(0, 2)
    const parsed = languagesSchema.safeParse(sliced)

    response.cookies.set('LANGUAGE', parsed.success ? parsed.data : 'en')
  }

  return response
}

export const config = {
  matcher: '/((?!_next).*)'
}
