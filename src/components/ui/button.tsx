import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Variantes do Button usando design tokens
 * 
 * Variantes disponíveis:
 * - primary: Dourado (CTAs principais)
 * - secondary: Verde musgo (ações secundárias)
 * - outline: Borda com fundo transparente
 * - ghost: Sem fundo, hover sutil
 * - link: Estilo de link
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-neutral-900 hover:bg-primary-600 shadow-md hover:shadow-glow",
        secondary: "bg-secondary-600 text-white hover:bg-secondary-700 shadow-md",
        outline: "border-2 border-primary-500 text-primary-500 bg-transparent hover:bg-primary-500/10",
        ghost: "text-neutral-300 hover:bg-neutral-800 hover:text-neutral-50",
        link: "text-primary-500 underline-offset-4 hover:underline hover:text-primary-400",
      },
      size: {
        sm: "h-9 px-3 text-xs rounded-md",
        default: "h-10 px-4 py-2",
        lg: "h-12 px-8 text-base rounded-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Renderiza como child component (útil para links) */
  asChild?: boolean
}

/**
 * Componente Button reutilizável
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="lg">Clique aqui</Button>
 * <Button variant="outline" asChild>
 *   <Link href="/about">Sobre</Link>
 * </Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }