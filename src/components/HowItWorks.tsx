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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-h2 font-serif text-foreground mb-4">
            It has never been easier to get help from an expert
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-h4 font-serif font-bold mb-6 mx-auto">
                {step.number}
              </div>
              <h3 className="text-h4 font-serif text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-body font-sans text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-black text-white px-8 py-4 rounded-lg text-button-lg font-sans hover:opacity-90 transition-opacity">
            Start Your Admissions Journey Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;