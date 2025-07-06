import clsx from 'clsx'
import React from 'react'

export const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, ...props }) => (
  <textarea className={clsx('w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none resize-none', className)} {...props} />
)
