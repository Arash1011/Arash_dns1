import React from 'react'
import clsx from 'clsx'

export const Select: React.FC<{
  value: string
  onValueChange: (v: string) => void
  className?: string
  children: React.ReactNode
}> = ({ value, onValueChange, children, className }) => (
  <select value={value} onChange={(e) => onValueChange(e.target.value)} className={clsx('w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none', className)}>
    {children}
  </select>
)

export const SelectTrigger: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => <>{children}</>

export const SelectContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children }) => <>{children}</>

export const SelectValue: React.FC = () => null

export const SelectItem: React.FC<{ value: string; className?: string }> = ({ value, children, className }) => (
  <option value={value} className={className}>{children}</option>
)
