'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'size'> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-ring disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group'
    
    const variants = {
      primary: 'bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 text-white hover:shadow-glow hover:scale-105 active:scale-95 before:absolute before:inset-0 before:bg-gradient-shimmer before:bg-[length:200%_100%] hover:before:animate-shimmer before:pointer-events-none',
      outline: 'border-2 border-brand-600 text-brand-700 hover:bg-gradient-to-r hover:from-brand-50 hover:to-brand-100 hover:border-brand-700 hover:scale-105 active:scale-95 hover:shadow-md',
      ghost: 'text-brand-700 hover:bg-gradient-to-r hover:from-brand-50 hover:to-brand-100 hover:scale-105 active:scale-95',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }
    
    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        <span className="relative z-10 inline-flex items-center justify-center">{children as React.ReactNode}</span>
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
