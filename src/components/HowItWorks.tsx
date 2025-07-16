const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Book A Free Consultation",
      description: "Fill out our short survey and schedule a first free consultation with us."
    },
    {
      number: "2", 
      title: "Tell us About Yourself",
      description: "Tell us about who you are and your aspirations so that we better understand your needs and goals."
    },
    {
      number: "3",
      title: "Get Matched with an Expert", 
      description: "We will match you with the right coach with the right subject area expertise and university affiliation."
    },
    {
      number: "4",
      title: "Get Coached",
      description: "Begin your admissions journey with our coach and get into your dream university and program."
    }
  ];

  return (
    <section className="relative py-20 bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-h2 font-serif text-foreground mb-4">
            It has never been easier to get help from an expert
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-fade-in-up group hover:scale-105 transition-transform duration-300 relative" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-h4 font-serif font-bold mb-6 mx-auto shadow-md group-hover:shadow-lg transition-shadow duration-300">
                {step.number}
              </div>
              <h3 className="text-h4 font-serif text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-body font-sans text-muted-foreground">
                {step.description}
              </p>
              
              {/* Connection line to next step (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent transform translate-x-4 z-0"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-button-lg font-sans hover:bg-accent-hover hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
            Start Your Admissions Journey Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;