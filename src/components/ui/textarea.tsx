import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Textarea - Campo de texto multilinha
 * 
 * Usa design tokens para cores, bordas e estados de foco.
 * 
 * @example
 * ```tsx
 * <Textarea placeholder="Digite sua mensagem..." rows={4} />
 * <Textarea disabled placeholder="Desabilitado" />
 * ```
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-neutral-50 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-fast",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
