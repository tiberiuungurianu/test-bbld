const CTASection = () => {
  return (
    <section className="relative py-20 bg-gradient-purple text-white overflow-hidden">
      {/* Curved divider */}
      <div className="absolute top-0 left-0 w-full h-20 bg-background transform skew-y-1 origin-top-left"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary/20 rounded-full animate-bounce-subtle"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h2 className="text-h2 font-serif text-white mb-8 drop-shadow-lg">
            Ready to Begin Your Journey?
          </h2>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-button-lg font-sans hover:bg-accent-hover hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;