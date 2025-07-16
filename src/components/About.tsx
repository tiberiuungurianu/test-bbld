const About = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-h2 font-serif text-foreground mb-16">
          Get set up for admissions success.
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <h3 className="text-h4 font-serif text-foreground mb-4">
              High Quality Service & Advice
            </h3>
            <p className="text-body font-sans text-muted-foreground">
              Receive personalized, expert guidance tailored to your specific goals and circumstances. 
              Our proven methodology has helped hundreds of students achieve their dreams.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-h4 font-serif text-foreground mb-4">
              Deep Insider Knowledge
            </h3>
            <p className="text-body font-sans text-muted-foreground">
              Benefit from coaches who have successfully navigated the UK university admission process themselves. 
              Get access to insider tips and strategies that only come from real experience.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-h4 font-serif text-foreground mb-4">
              Fair & Competitive Pricing
            </h3>
            <p className="text-body font-sans text-muted-foreground">
              Transparent pricing with no hidden fees. We believe everyone deserves access to quality 
              admissions guidance without breaking the bank.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About