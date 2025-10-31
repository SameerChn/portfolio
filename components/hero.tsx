"use client"

import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20 bg-gradient-to-br from-background via-card to-background">
      <div className="max-w-2xl w-full">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              I build scalable web experiences with MERN
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Computer Science student passionate about full-stack development, AI integration, and creating impactful
              solutions using modern web technologies.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://samportfolio.blob.core.windows.net/samportfolio/Sameer Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                <Download size={18} />
                Download Resume
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="gap-2 bg-transparent">
                <ExternalLink size={18} />
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
