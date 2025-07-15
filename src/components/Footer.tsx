import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: "Basic Guidance", href: "#services" },
      { name: "Complete Support", href: "#services" },
      { name: "Premium Package", href: "#services" },
      { name: "Visa Support", href: "#services" }
    ],
    destinations: [
      { name: "Study in Canada", href: "#" },
      { name: "Study in Australia", href: "#" },
      { name: "Study in UK", href: "#" },
      { name: "Study in USA", href: "#" },
      { name: "Study in Germany", href: "#" },
      { name: "Study in New Zealand", href: "#" }
    ],
    resources: [
      { name: "University Rankings", href: "#" },
      { name: "Scholarship Guide", href: "#" },
      { name: "Test Preparation", href: "#" },
      { name: "Student Resources", href: "#" },
      { name: "Success Stories", href: "#testimonials" },
      { name: "Blog", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#contact" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  }

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", name: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", name: "LinkedIn" }
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold text-background">Bubbled</span>
              </div>
              
              <p className="text-background/80 leading-relaxed">
                Your trusted partner for studying abroad. We provide comprehensive guidance and support to help you achieve your international education dreams with transparent pricing and expert counseling.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-background/90">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-background/90">info@bubbled.in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-background/90">Delhi, Mumbai, Bangalore & More</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-background mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-background/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div>
              <h3 className="font-bold text-background mb-4">Destinations</h3>
              <ul className="space-y-3">
                {footerLinks.destinations.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-background/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold text-background mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-background/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-background/60 text-sm">
                © {currentYear} Bubbled. All rights reserved.
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a href="#" className="text-background/60 hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-background/60 hover:text-accent transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-background/60 hover:text-accent transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer