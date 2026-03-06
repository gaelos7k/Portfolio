import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Variantes do Badge
 * 
 * - default: Dourado (tecnologias principais)
 * - secondary: Verde (tecnologias secundárias)
 * - outline: Borda apenas
 * - muted: Cinza (informativo)
 */
const badgeVariants = cva(
  "inline-flex items-center rounded-base px-2.5 py-0.5 text-xs font-medium transition-colors duration-fast",
  {
    variants: {
      variant: {
        default: "bg-primary-500/10 text-primary-400 border border-primary-500/30 hover:bg-primary-500/20",
        secondary: "bg-secondary-600/10 text-secondary-400 border border-secondary-600/30 hover:bg-secondary-600/20",
        outline: "border border-neutral-600 text-neutral-300 hover:bg-neutral-800",
        muted: "bg-neutral-800 text-neutral-400 border border-neutral-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Badge - Componente para tags/labels
 * 
 * Usado para mostrar tecnologias, status, categorias, etc.
 * 
 * @example
 * ```tsx
 * <Badge>TypeScript</Badge>
 * <Badge variant="secondary">Node.js</Badge>
 * <Badge variant="outline">Em progresso</Badge>
 * ```
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
