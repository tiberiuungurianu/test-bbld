const Hero = () => {
  // Generate vibrant profile colors inspired by Handshake's design
  const profileColors = [
    'bg-gradient-to-br from-purple-400 to-purple-600', 
    'bg-gradient-to-br from-green-400 to-green-600', 
    'bg-gradient-to-br from-blue-400 to-blue-600', 
    'bg-gradient-to-br from-pink-400 to-pink-600', 
    'bg-gradient-to-br from-yellow-400 to-yellow-600',
    'bg-gradient-to-br from-red-400 to-red-600', 
    'bg-gradient-to-br from-indigo-400 to-indigo-600', 
    'bg-gradient-to-br from-orange-400 to-orange-600', 
    'bg-gradient-to-br from-teal-400 to-teal-600', 
    'bg-gradient-to-br from-cyan-400 to-cyan-600',
    'bg-gradient-to-br from-emerald-400 to-emerald-600', 
    'bg-gradient-to-br from-violet-400 to-violet-600', 
    'bg-gradient-to-br from-rose-400 to-rose-600', 
    'bg-gradient-to-br from-lime-400 to-lime-600', 
    'bg-gradient-to-br from-amber-400 to-amber-600',
    'bg-gradient-to-br from-fuchsia-400 to-fuchsia-600', 
    'bg-gradient-to-br from-sky-400 to-sky-600', 
    'bg-gradient-to-br from-slate-400 to-slate-600', 
    'bg-gradient-to-br from-stone-400 to-stone-600', 
    'bg-gradient-to-br from-neutral-400 to-neutral-600'
  ];

  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center py-20 px-6 overflow-hidden">
      {/* Curved background accent */}
      <div className="absolute inset-0 bg-gradient-curved"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-bounce-subtle"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent/30 rounded-full animate-float"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-h1 md:text-6xl font-serif mb-4 text-white leading-tight max-w-5xl mx-auto drop-shadow-lg">
            Get into your dream university in the UK.
          </h1>
          <h2 className="text-h1 md:text-6xl font-serif mb-8 text-white/80 leading-tight max-w-5xl mx-auto drop-shadow-lg">
            With the help of those who have done it.
          </h2>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-body-lg font-sans mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            We connect Indian students with the right expert admissions coaches for tailored high-quality 
            application support. Benefit from deep insider knowledge by those who have succeeded before you.
          </p>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-button-lg font-sans hover:bg-accent-hover hover:scale-105 transition-all duration-300 mb-16 shadow-lg hover:shadow-xl animate-pulse-glow">
            Book Free Consultation
          </button>
        </div>

        {/* Enhanced animated profile circles */}
        <div className="space-y-6 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {/* First row */}
          <div className="flex justify-center items-center space-x-4 animate-slide-left">
            {profileColors.slice(0, 10).map((color, index) => (
              <div 
                key={index} 
                className={`w-20 h-20 ${color} rounded-full flex-shrink-0 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm"></div>
              </div>
            ))}
          </div>
          
          {/* Second row */}
          <div className="flex justify-center items-center space-x-4 animate-slide-right">
            {profileColors.slice(10, 20).map((color, index) => (
              <div 
                key={index} 
                className={`w-20 h-20 ${color} rounded-full flex-shrink-0 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero