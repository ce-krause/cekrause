'use client'

import { motion } from 'framer-motion'
import { ReactNode, useMemo } from 'react'

type AnimatedContainerProperties = {
  children: ReactNode
  as?: 'div' | 'main'
  className?: string
}

export const AnimatedContainer = ({ as = 'div', ...properties }: AnimatedContainerProperties) => {
  const Container = useMemo(() => motion[as], [as])

  return (
    <Container
      {...properties}
      initial={{
        y: 5,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.1
      }}
    />
  )
}
