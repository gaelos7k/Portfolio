import * as React from "react"
import { cn } from "@/lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tamanho máximo do container */
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

/**
 * Container - Wrapper para centralizar e limitar largura do conteúdo
 * 
 * Tamanhos disponíveis:
 * - sm: max-w-3xl (768px)
 * - md: max-w-5xl (1024px)
 * - lg: max-w-6xl (1152px)
 * - xl: max-w-7xl (1280px)
 * - full: w-full (sem limite)
 * 
 * @example
 * ```tsx
 * <Container size="lg">
 *   <h1>Conteúdo centralizado</h1>
 * </Container>
 * ```
 */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "xl", ...props }, ref) => {
    const sizeClasses = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "w-full",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto px-4 sm:px-6 lg:px-8",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container }
