import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    ...components,
    a: (properties) => (
      <Link
        {...properties}
        target='_blank'
        className='link'
      />
    )
  }
}
