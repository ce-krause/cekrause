import Link from 'next/link'

const NotFound = () => (
  <div className='flex min-h-screen items-center justify-center'>
    <span>Page not found,&nbsp;</span>
    <Link
      href='/'
      className='link font-medium'
    >
      head back home
    </Link>
  </div>
)

export default NotFound
