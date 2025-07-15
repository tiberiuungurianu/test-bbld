import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-soft">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-xl font-bold text-foreground">Bubbled</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Success Stories
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            Book Free Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-medium">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </button>
            <div className="pt-4">
              <Button 
                variant="cta" 
                size="lg" 
                className="w-full"
                onClick={() => scrollToSection('contact')}
              >
                Book Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header