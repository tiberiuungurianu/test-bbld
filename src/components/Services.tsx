import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Star, Crown, Sparkles } from "lucide-react"

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      name: "Basic Guidance",
      price: "₹0 - ₹10,000",
      usdPrice: "$0 - $120",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-secondary-light to-muted",
      popular: false,
      features: [
        "Introductory consultation call",
        "University shortlist guidance",
        "Basic personal statement review",
        "Application timeline planning",
        "Email support for 30 days"
      ],
      limitations: [
        "Limited to 2 consultation calls",
        "Basic document review only",
        "No test preparation guidance"
      ]
    },
    {
      name: "Complete Support",
      price: "₹30,000 - ₹1,00,000",
      usdPrice: "$360 - $1,200",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-primary-light to-primary",
      popular: true,
      features: [
        "Full application assistance",
        "SOP and LOR editing & review",
        "Visa application support",
        "University application tracking",
        "Interview preparation sessions",
        "Scholarship guidance",
        "Document verification",
        "Priority email & phone support"
      ],
      limitations: []
    },
    {
      name: "Premium End-to-End",
      price: "₹1,00,000 - ₹2,00,000",
      usdPrice: "$1,200 - $2,400",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-accent-light to-accent",
      popular: false,
      features: [
        "Complete test preparation (IELTS/TOEFL/GRE/GMAT)",
        "End-to-end application management",
        "Advanced SOP & essay writing",
        "Mock interview sessions",
        "Visa interview preparation",
        "Post-arrival support",
        "Accommodation assistance",
        "Bank loan guidance",
        "24/7 dedicated support",
        "Success guarantee"
      ],
      limitations: []
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-light text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              Transparent Pricing
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Choose Your Success Path
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From basic guidance to complete end-to-end support, we have the perfect package for your study abroad journey.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`relative p-8 h-full transition-all duration-300 hover:shadow-strong hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-accent shadow-strong scale-105' : 'hover:shadow-medium'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{service.name}</h3>
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-foreground">{service.price}</div>
                        <div className="text-sm text-muted-foreground">{service.usdPrice}</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">What's Included:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  {service.limitations.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-border">
                      <h4 className="font-semibold text-muted-foreground text-sm uppercase tracking-wide">Limitations:</h4>
                      {service.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Button */}
                  <div className="pt-6">
                    <Button 
                      variant={service.popular ? "cta" : "professional"}
                      size="lg"
                      className="w-full"
                      onClick={scrollToContact}
                    >
                      {service.popular ? "Get Started Now" : "Learn More"}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center space-y-6 p-8 bg-gradient-primary rounded-2xl text-white">
            <h3 className="text-2xl font-bold">Not Sure Which Package Is Right for You?</h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Book a free consultation with our experts to discuss your goals and get personalized recommendations.
            </p>
            <Button 
              variant="secondary" 
              size="xl"
              onClick={scrollToContact}
              className="text-primary hover:text-primary-dark"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services