import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  tags: string[]
  link?: string
  github?: string
  highlight?: boolean
}

const projects: Project[] = [
  {
    title: "CVision: Smart Job Finder",
    description:
      "An AI-powered application that analyzes your resume/CV and helps you find matching jobs based on your skills and experience. It uses natural language processing, OCR technology, and Google's Gemini AI to provide intelligent job matching and analysis.",
    tags: ["React", "Node.js", "Gemini AI", "OCR", "NLP"],
    highlight: true,
  },
  {
    title: "JobBuddy",
    description:
      "A comprehensive job board platform that allows users to post job listings and view available opportunities. Built with a clean, scalable stack combining modern front-end technologies with robust backend services.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    link: "https://jobbuddy-two.vercel.app",
  },
  {
    title: "ReWear – Community Clothing Exchange",
    description:
      "A web-based platform designed to encourage sustainable fashion by allowing users to exchange unused clothing. Features direct swaps and a point-based redemption system to reduce textile waste and promote circular economy.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    link: "https://rewear-beta.vercel.app",
  },
]

export function Projects() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-foreground mb-12">Projects</h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 border transition-all hover:shadow-lg hover:shadow-primary/20 ${
                project.highlight ? "border-primary/50 bg-gradient-to-br from-card to-card/50" : ""
              }`}
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {(project.link || project.github) && (
                  <div className="flex gap-2 pt-4">
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                          <ExternalLink size={16} />
                          View Live
                        </Button>
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                          <Github size={16} />
                          Code
                        </Button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
