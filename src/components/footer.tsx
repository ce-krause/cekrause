import { CONTACTS_FLAG } from '@/utils/flags'
import Link from 'next/link'

export const Footer = async () => {
  const enabled = await CONTACTS_FLAG()
  const href = enabled ? '/contact' : 'https://github.com/ce-krause'
  const target = enabled ? '_self' : '_blank'

  return (
    <footer className='flex justify-between pt-12 text-sm'>
      <span>2024</span>
      <div>
        <span>Developed by&nbsp;</span>
        <Link
          href={href}
          target={target}
          className='font-medium'
        >
          me
        </Link>
      </div>
    </footer>
  )
}
