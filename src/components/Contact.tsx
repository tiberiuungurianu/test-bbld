import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    country: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add actual form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      color: "text-success"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["info@bubbled.in", "support@bubbled.in"],
      color: "text-primary"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office",
      details: ["Delhi, Mumbai, Bangalore", "Pune, Hyderabad, Chennai"],
      color: "text-accent"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Hours",
      details: ["Mon-Fri: 9AM-7PM", "Sat-Sun: 10AM-5PM"],
      color: "text-secondary"
    }
  ]

  const benefits = [
    "Free initial consultation call",
    "Personalized university shortlist",
    "Expert counselor assigned",
    "No obligation to proceed"
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-primary-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-accent-light text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Phone className="w-4 h-4" />
              Get Started Today
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Book Your Free Consultation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take the first step toward your study abroad dreams. Our expert counselors are here to guide you every step of the way.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 shadow-medium">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Start Your Journey Today
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-success" />
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number *
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Country
                        </label>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a country</option>
                          <option value="canada">Canada</option>
                          <option value="australia">Australia</option>
                          <option value="uk">United Kingdom</option>
                          <option value="usa">United States</option>
                          <option value="germany">Germany</option>
                          <option value="newzealand">New Zealand</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Course of Interest
                      </label>
                      <Input
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        placeholder="e.g., Computer Science, Business, Engineering"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tell us about your goals
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share your study abroad goals, timeline, or any specific questions..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" variant="cta" size="xl" className="w-full">
                      Book Free Consultation
                    </Button>
                  </form>
                </div>
              </Card>
            </div>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg bg-muted ${info.color}`}>
                        {info.icon}
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.title}</div>
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="p-6 bg-gradient-primary text-white">
                <h3 className="text-xl font-bold mb-4">Why Students Choose Us</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Success Rate</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Students Placed</span>
                    <span className="font-bold">1000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Countries</span>
                    <span className="font-bold">25+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Response</span>
                    <span className="font-bold">24 hrs</span>
                  </div>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 bg-accent-light">
                <h3 className="text-lg font-bold text-foreground mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent queries, call our helpline directly
                </p>
                <Button variant="professional" size="lg" className="w-full">
                  Call Now: +91 98765 43210
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact