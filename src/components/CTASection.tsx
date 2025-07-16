const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-h2 font-serif text-white mb-8">
            Ready to Begin Your Journey?
          </h2>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-button-lg font-sans hover:bg-accent-hover hover:scale-105 transition-all duration-300 shadow-lg">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;