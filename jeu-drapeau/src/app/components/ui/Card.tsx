import { ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-lg bg-white p-6 shadow-lg',
        className
      )}
    >
      {children}
    </div>
  )
}
