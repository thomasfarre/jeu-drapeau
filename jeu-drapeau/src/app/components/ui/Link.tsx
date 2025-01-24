import { AnchorHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  className?: string
}

export function Link({ children, className, ...props }: LinkProps) {
  return (
    <a
      className={clsx(
        'text-blue-600 hover:text-blue-800 hover:underline',
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}
