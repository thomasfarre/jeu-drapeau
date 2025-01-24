import { ReactNode } from 'react'
import clsx from 'clsx'

interface BodyTextProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function BodyText({ children, className, size = 'md' }: BodyTextProps) {
  return (
    <p
      className={clsx(
        'text-gray-700',
        {
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-lg': size === 'lg',
        },
        className
      )}
    >
      {children}
    </p>
  )
}
