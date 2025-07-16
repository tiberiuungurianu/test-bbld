const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-md py-6 border-b border-border/10 fixed top-0 z-50">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="font-serif font-bold text-xl text-primary animate-fade-in-left">
          Bubbled®
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-small text-muted-foreground hover:text-primary transition-colors font-sans hover:scale-105 transform duration-200">
            Home
          </a>
          <a href="#" className="text-small text-muted-foreground hover:text-primary transition-colors font-sans hover:scale-105 transform duration-200">
            How it Works
          </a>
          <a href="#" className="text-small text-muted-foreground hover:text-primary transition-colors font-sans hover:scale-105 transform duration-200">
            Become a Coach
          </a>
          <a href="#" className="text-small text-muted-foreground hover:text-primary transition-colors font-sans hover:scale-105 transform duration-200">
            Mission
          </a>
          <a href="#" className="text-small text-muted-foreground hover:text-primary transition-colors font-sans hover:scale-105 transform duration-200">
            Bubbled Insights
          </a>
        </nav>

        <button className="bg-gradient-accent text-accent-foreground px-6 py-3 rounded-lg text-button font-sans hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md">
          Book Free Consultation
        </button>
      </div>
    </header>
  )
}

export default Header