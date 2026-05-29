'use client'

import { useInView } from '@/lib/useInView'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimateIn({ children, className = '', delay = 0 }: Props) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
