"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
]

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/SameerChn",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/sameer-kumar-profile",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:chauhan.sameer3101@gmail.com",
    label: "Email",
  },
]

export function Sidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen bg-background border-r border-border p-8 sticky top-0">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-2xl font-bold text-foreground mb-1">Sameer Kumar</h1>
        <p className="text-sm text-muted-foreground">CS Student | MERN Developer</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 mb-12">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-sm text-muted-foreground hover:text-primary transition-colors py-2 pl-4 border-l-2 border-transparent hover:border-primary"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Social Links */}
      <div className="flex gap-4">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <Icon size={20} />
            </a>
          )
        })}
      </div>
    </aside>
  )
}
