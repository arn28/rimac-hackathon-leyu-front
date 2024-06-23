import React from 'react'
interface ISimpleCardProps {
  children: React.ReactNode
  className?: string
}

export default function SimpleCard({ children, className = '' }: ISimpleCardProps) {
  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-[24px] bg-white p-8 min-w-[340px] ${className} `}
    >
      {children}
    </div>
  )
}
