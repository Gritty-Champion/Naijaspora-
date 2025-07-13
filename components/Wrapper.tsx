import { cn } from '@/libs/cn'
import React from 'react'

interface WrapperProps {
  children: React.ReactNode
  className?: string
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={cn(
        "container mx-auto px-[10px] md:px-[20px] lg:px-[100px] h-full flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  )
}

export default Wrapper