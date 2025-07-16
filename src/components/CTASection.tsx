const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-h2 font-serif text-foreground mb-8">
          Ready to Begin Your Journey?
        </h2>
        
        <button className="bg-black text-white px-8 py-4 rounded-lg text-button-lg font-sans hover:opacity-90 transition-opacity">
          Schedule Free Consultation
        </button>
      </div>
    </section>
  );
};

export default CTASection;