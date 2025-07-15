import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Users, Globe, TrendingUp } from "lucide-react"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-background via-primary-light/20 to-accent-light/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-success-light text-success px-4 py-2 rounded-full text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Trusted by 1000+ Students
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Dream
                  <span className="text-transparent bg-gradient-primary bg-clip-text"> University </span>
                  Awaits
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Expert guidance for studying abroad. From application to visa - we handle everything so you can focus on your dreams.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success-light rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">1000+</div>
                    <div className="text-sm text-muted-foreground">Students Placed</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">25+</div>
                    <div className="text-sm text-muted-foreground">Countries</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">95%</div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="cta" 
                  size="xl"
                  onClick={() => scrollToSection('contact')}
                  className="group"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="cta-outline" 
                  size="xl"
                  onClick={() => scrollToSection('services')}
                >
                  View Services
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Expert Counselors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>100% Transparency</span>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative lg:pl-8 animate-slide-up">
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative bg-gradient-hero rounded-2xl p-8 shadow-strong">
                  <div className="bg-background/90 backdrop-blur rounded-xl p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">Application Progress</h3>
                      <span className="text-success text-sm font-medium">95% Complete</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Profile Review</span>
                        <CheckCircle className="w-4 h-4 text-success" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">University Selection</span>
                        <CheckCircle className="w-4 h-4 text-success" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">SOP Review</span>
                        <CheckCircle className="w-4 h-4 text-success" />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Application Submission</span>
                        <div className="w-4 h-4 border-2 border-accent rounded-full border-t-transparent animate-spin"></div>
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <div className="text-xs text-muted-foreground mb-2">Next: Visa Application</div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-accent h-2 rounded-full w-[95%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-medium animate-bounce">
                  Visa Approved! 🎉
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-background border border-border px-4 py-3 rounded-lg shadow-medium">
                  <div className="text-xs text-muted-foreground">University Response</div>
                  <div className="text-sm font-medium text-foreground">Admission Confirmed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero