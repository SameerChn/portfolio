export function About() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 lg:px-16 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-foreground mb-12">About Me</h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I'm a Computer Science Engineering student at Rungta College of Engineering and Technology with a strong
            passion for building scalable web applications. My expertise lies in the MERN stack, combined with hands-on
            experience in cloud technologies and AI integration.
          </p>

          <p>
            As a member of the Google Developer Students Club, I've had the opportunity to mentor peers and work on
            impactful projects. I completed an AICTE-Edunet Foundation Front-End Web Development internship under IBM
            SkillsBuild, where I gained practical experience in real-world project development.
          </p>

          <p>
            My interests span across MERN stack development, industry networking, teaching others, learning finance, and
            staying updated with the latest tech trends through blogs and continuous learning. I'm driven by
            problem-solving and delivering high-quality solutions that make a difference.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
            <div className="bg-card p-4 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="text-foreground font-semibold">Bhilai, CG</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">Graduation</p>
              <p className="text-foreground font-semibold">July 2027</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
