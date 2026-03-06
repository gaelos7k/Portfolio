import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Input - Campo de entrada de texto
 * 
 * Usa design tokens para cores, bordas e estados de foco.
 * 
 * @example
 * ```tsx
 * <Input type="email" placeholder="seu@email.com" />
 * <Input type="text" disabled placeholder="Desabilitado" />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-fast",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
