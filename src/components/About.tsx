const About = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
          Benefits
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
          Get set up for success.
        </h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          <div className="text-left">
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
              Insights
            </p>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Deep Insider Knowledge
            </h3>
            <p className="text-lg text-muted-foreground">
              Benefit from coaches who have successfully navigated the UK university admission process themselves. 
              Get access to insider tips and strategies that only come from real experience.
            </p>
          </div>

          <div className="text-left">
            <p className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
              Quality
            </p>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              High-Quality Service & Advice
            </h3>
            <p className="text-lg text-muted-foreground">
              Receive personalized, expert guidance tailored to your specific goals and circumstances. 
              Our proven methodology has helped hundreds of students achieve their dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About