import React from 'react'
import clsx from 'clsx'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'secondary'
}

export const Button: React.FC<Props> = ({ variant = 'default', className, ...props }) => {
  const base = 'rounded-xl px-4 py-2 font-medium transition'
  const variants = {
    default: 'bg-green-500 hover:bg-green-600 text-black',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white'
  }
  return <button className={clsx(base, variants[variant], className)} {...props} />
}
