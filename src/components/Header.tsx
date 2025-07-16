const Header = () => {
  return (
    <header className="w-full bg-background py-6 border-b border-border/10">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="font-serif font-bold text-xl text-black">
          Bubbled®
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-small text-muted-foreground hover:text-foreground transition-colors font-sans">
            Home
          </a>
          <a href="#" className="text-small text-muted-foreground hover:text-foreground transition-colors font-sans">
            How it Works
          </a>
          <a href="#" className="text-small text-muted-foreground hover:text-foreground transition-colors font-sans">
            Become a Coach
          </a>
          <a href="#" className="text-small text-muted-foreground hover:text-foreground transition-colors font-sans">
            Mission
          </a>
          <a href="#" className="text-small text-muted-foreground hover:text-foreground transition-colors font-sans">
            Bubbled Insights
          </a>
        </nav>

        <button className="bg-black text-white px-6 py-3 rounded-lg text-button font-sans hover:opacity-90 transition-opacity">
          Book Free Consultation
        </button>
      </div>
    </header>
  )
}

export default Header