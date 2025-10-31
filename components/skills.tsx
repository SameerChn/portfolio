import { Card } from "@/components/ui/card"

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    skills: ["Java", "JavaScript", "Python", "MERN Stack"],
  },
  {
    category: "Web Development",
    skills: ["React", "Node.js", "Express.js", "REST APIs", "Responsive UI", "Hosting (Vercel, Render, Netlify)"],
  },
  {
    category: "Database & Backend",
    skills: ["MongoDB", "Firebase", "SQL Basics"],
  },
  {
    category: "Cloud & AI",
    skills: ["Microsoft Azure", "Google Cloud", "Gemini AI", "AI/ML Basics"],
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "Looker Studio", "Streamlit", "Power BI"],
  },
  {
    category: "Data & Analytics",
    skills: ["Excel", "Power BI", "Data Visualization"],
  },
]

export function Skills() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-foreground mb-12">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 border-border hover:border-primary/30 transition-colors">
              <h3 className="text-lg font-semibold text-primary mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-card border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-4">Certifications & Badges</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Cloud Computing Fundamentals Badge - GDSC</li>
            <li>✓ Certificate of participation - AI Youth Bootcamp 7 (CV) - Intel Digital</li>
            <li>✓ Program Completion - Young Industry Enthusiast - Infosys Springboard</li>
            <li>✓ I.O.T Course Completion Certificate - Cisco Networking Academy</li>
            <li>✓ Certificate of Achievement (Communication Skills) - TCS iON</li>
            <li>✓ Certificate of Completion (Gen AI With Google Cloud) - Udacity</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
