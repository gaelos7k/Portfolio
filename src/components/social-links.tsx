import { Github, Linkedin, Mail, LucideIcon } from "lucide-react"
import { PERSONAL_INFO } from "@/lib/constants"

interface SocialLink {
  icon: LucideIcon
  href: string
  label: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Github,
    href: PERSONAL_INFO.github,
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: PERSONAL_INFO.linkedin,
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: `mailto:${PERSONAL_INFO.email}`,
    label: "Email"
  }
]

interface SocialLinksProps {
  className?: string
  iconSize?: number
}

export function SocialLinks({ className = "", iconSize = 24 }: SocialLinksProps) {
  return (
    <div className={`flex space-x-6 ${className}`}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('mailto') ? undefined : "_blank"}
          rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
          className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          aria-label={link.label}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  )
}
