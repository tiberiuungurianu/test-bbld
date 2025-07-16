const About = () => {
  return (
    <section className="relative py-20 bg-gradient-section">
      {/* Curved top divider */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-hero transform -skew-y-1 origin-top-left"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-h2 font-serif text-foreground mb-16">
            Get set up for admissions success.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>
            <div className="bg-gradient-accent w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-accent-foreground font-bold text-xl">⚡</span>
            </div>
            <h3 className="text-h4 font-serif text-foreground mb-4">
              High Quality Service & Advice
            </h3>
            <p className="text-body font-sans text-muted-foreground">
              Receive personalized, expert guidance tailored to your specific goals and circumstances. 
              Our proven methodology has helped hundreds of students achieve their dreams.
            </p>
          </div>

          <div className="text-center animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-primary w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-primary-foreground font-bold text-xl">🎯</span>
            </div>
            <h3 className="text-h4 font-serif text-foreground mb-4">
              Deep Insider Knowledge
            </h3>
            <p className="text-body font-sans text-muted-foreground">
              Benefit from coaches who have successfully navigated the UK university admission process themselves. 
              Get access to insider tips and strategies that only come from real experience.
            </p>
          </div>

          <div className="text-center animate-fade-in-up group hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.3s' }}>
            <div className="bg-gradient-to-br from-success to-success-light w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-success-foreground font-bold text-xl">💰</span>
            </div>
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