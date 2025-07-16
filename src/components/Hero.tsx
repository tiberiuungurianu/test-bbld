const Hero = () => {
  // Generate placeholder profile images with different background colors
  const profileColors = [
    'bg-pink-200', 'bg-green-500', 'bg-pink-400', 'bg-yellow-400', 'bg-red-500',
    'bg-green-600', 'bg-pink-300', 'bg-yellow-500', 'bg-red-600', 'bg-gray-400',
    'bg-pink-300', 'bg-yellow-600', 'bg-red-400', 'bg-green-600', 'bg-pink-400',
    'bg-yellow-400', 'bg-red-500', 'bg-green-500', 'bg-pink-500', 'bg-gray-500'
  ];

  return (
    <section className="bg-background py-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-foreground leading-tight">
          Get into your dream university in the UK.
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-muted-foreground leading-tight">
          With the help of those who have done it.
        </h2>
        
        <p className="text-lg md:text-xl mb-10 text-foreground max-w-4xl mx-auto leading-relaxed">
          We connect Indian students with the right expert admissions coaches for tailored high-quality 
          application support. Benefit from deep insider knowledge by those who have succeeded before you.
        </p>
        
        <button className="bg-foreground text-background px-8 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity mb-16">
          Book Free Consultation
        </button>

        {/* Animated profile circles */}
        <div className="space-y-4 overflow-hidden">
          {/* First row */}
          <div className="flex justify-center items-center space-x-4 animate-slide-left">
            {profileColors.slice(0, 10).map((color, index) => (
              <div key={index} className={`w-20 h-20 ${color} rounded-full flex-shrink-0 flex items-center justify-center`}>
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              </div>
            ))}
          </div>
          
          {/* Second row */}
          <div className="flex justify-center items-center space-x-4 animate-slide-right">
            {profileColors.slice(10, 20).map((color, index) => (
              <div key={index} className={`w-20 h-20 ${color} rounded-full flex-shrink-0 flex items-center justify-center`}>
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