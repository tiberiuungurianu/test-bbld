const Header = () => {
  return (
    <header className="w-full bg-background py-6">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="font-bold text-xl text-foreground">
          Bubbled®
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How it Works
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Become a Coach
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Mission
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Bubbled Insights
          </a>
        </nav>

        <button className="bg-foreground text-background px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
          Book Free Consultation
        </button>
      </div>
    </header>
  )
}

export default Header