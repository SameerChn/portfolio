import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold text-foreground mb-8">Let's Connect</h2>

        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to
          collaborate or just say hello!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <a href="mailto:chauhan.sameer3101@gmail.com">
            <Card className="p-6 hover:border-primary/50 hover:bg-card/50 transition-all cursor-pointer h-full">
              <Mail className="text-primary mb-3" size={24} />
              <h3 className="text-foreground font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">chauhan.sameer3101@gmail.com</p>
            </Card>
          </a>

          <a href="tel:+917739297848">
            <Card className="p-6 hover:border-primary/50 hover:bg-card/50 transition-all cursor-pointer h-full">
              <Phone className="text-primary mb-3" size={24} />
              <h3 className="text-foreground font-semibold mb-1">Phone</h3>
              <p className="text-muted-foreground text-sm">+91 7739297848</p>
            </Card>
          </a>

          <a href="https://github.com/SameerChn" target="_blank" rel="noopener noreferrer">
            <Card className="p-6 hover:border-primary/50 hover:bg-card/50 transition-all cursor-pointer h-full">
              <Github className="text-primary mb-3" size={24} />
              <h3 className="text-foreground font-semibold mb-1">GitHub</h3>
              <p className="text-muted-foreground text-sm">@SameerChn</p>
            </Card>
          </a>

          <a href="https://www.linkedin.com/in/sameer-kumar-profile" target="_blank" rel="noopener noreferrer">
            <Card className="p-6 hover:border-primary/50 hover:bg-card/50 transition-all cursor-pointer h-full">
              <Linkedin className="text-primary mb-3" size={24} />
              <h3 className="text-foreground font-semibold mb-1">LinkedIn</h3>
              <p className="text-muted-foreground text-sm">Sameer Kumar</p>
            </Card>
          </a>
        </div>

        <div className="bg-card border border-border p-6 rounded-lg flex items-center gap-4">
          <MapPin className="text-primary flex-shrink-0" size={24} />
          <div>
            <h3 className="text-foreground font-semibold">Location</h3>
            <p className="text-muted-foreground">Bhilai, Chhattisgarh, India</p>
          </div>
        </div>
      </div>
    </div>
  )
}
