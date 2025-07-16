const Hero = () => {
  // Professional profile colors with subtle gradients
  const profileColors = [
    'bg-slate-600', 'bg-blue-600', 'bg-gray-600', 'bg-indigo-600', 'bg-cyan-600',
    'bg-blue-700', 'bg-slate-700', 'bg-gray-700', 'bg-indigo-700', 'bg-cyan-700',
    'bg-blue-500', 'bg-slate-500', 'bg-gray-500', 'bg-indigo-500', 'bg-cyan-500',
    'bg-blue-800', 'bg-slate-800', 'bg-gray-800', 'bg-indigo-800', 'bg-cyan-800'
  ];

  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center py-20 px-6 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-h1 md:text-6xl font-serif mb-4 text-white leading-tight max-w-5xl mx-auto">
            Get into your dream university in the UK.
          </h1>
          <h2 className="text-h1 md:text-6xl font-serif mb-8 text-white/80 leading-tight max-w-5xl mx-auto">
            With the help of those who have done it.
          </h2>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-body-lg font-sans mb-10 text-white/90 max-w-4xl mx-auto leading-relaxed">
            We connect Indian students with the right expert admissions coaches for tailored high-quality 
            application support. Benefit from deep insider knowledge by those who have succeeded before you.
          </p>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-button-lg font-sans hover:bg-accent-hover hover:scale-105 transition-all duration-300 mb-16 shadow-lg">
            Book Free Consultation
          </button>
        </div>

        {/* Professional animated profile circles */}
        <div className="space-y-6 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {/* First row */}
          <div className="flex justify-center items-center space-x-4 animate-slide-left">
            {profileColors.slice(0, 10).map((color, index) => (
              <div 
                key={index} 
                className={`w-20 h-20 ${color} rounded-full flex-shrink-0 flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300`}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              </div>
            ))}
          </div>
          
          {/* Second row */}
          <div className="flex justify-center items-center space-x-4 animate-slide-right">
            {profileColors.slice(10, 20).map((color, index) => (
              <div 
                key={index} 
                className={`w-20 h-20 ${color} rounded-full flex-shrink-0 flex items-center justify-center shadow-md hover:scale-105 transition-transform duration-300`}
              >
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero