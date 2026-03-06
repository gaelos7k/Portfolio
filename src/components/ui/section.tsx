import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** ID da seção (para navegação) */
  id?: string
  /** Adiciona padding vertical padrão */
  withPadding?: boolean
}

/**
 * Section - Wrapper semântico para seções da página
 * 
 * Usa tag <section> para melhor semântica HTML.
 * 
 * @example
 * ```tsx
 * <Section id="about" withPadding>
 *   <Container>
 *     <h2>Sobre</h2>
 *   </Container>
 * </Section>
 * ```
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, id, withPadding = true, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          withPadding && "py-16 md:py-20",
          className
        )}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
