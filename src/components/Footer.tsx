const Footer = () => {
  return (
    <footer className="py-12 bg-muted border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-6 md:mb-0">
            <div className="font-serif font-bold text-xl text-black mb-4">
              Bubbled®
            </div>
          </div>
          
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#" className="text-small font-sans text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#" className="text-small font-sans text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <a href="#" className="text-small font-sans text-muted-foreground hover:text-foreground transition-colors">
              Become a Coach
            </a>
            <a href="#" className="text-small font-sans text-muted-foreground hover:text-foreground transition-colors">
              Mission
            </a>
            <a href="#" className="text-small font-sans text-muted-foreground hover:text-foreground transition-colors">
              Bubbled Insights
            </a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/10 text-center">
          <p className="text-caption font-sans text-muted-foreground">
            © 2024 Bubbled. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;