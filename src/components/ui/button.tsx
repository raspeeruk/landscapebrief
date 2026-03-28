import { clsx } from 'clsx'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
          'inline-flex items-center justify-center font-medium transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C1440E] focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-[#1B2A4A] text-white hover:bg-[#0F1A2E] active:bg-[#080F1C]': variant === 'primary',
            'bg-white text-[#1B2A4A] border border-[#E2E1DE] hover:bg-[#F0EFF5] active:bg-[#E8E7EF]': variant === 'secondary',
            'text-[#9BA8B4] hover:text-[#1B2A4A] hover:bg-[#F0EFF5]': variant === 'ghost',
          },
          {
            'text-sm px-3 py-1.5 rounded': size === 'sm',
            'text-sm px-5 py-2.5 rounded': size === 'md',
            'text-base px-7 py-3.5 rounded': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
