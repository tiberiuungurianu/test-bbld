import { Award, Users, Globe, Shield, CheckCircle, TrendingUp } from "lucide-react"

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "1000+", label: "Students Placed", color: "text-success" },
    { icon: <Globe className="w-6 h-6" />, number: "25+", label: "Countries", color: "text-primary" },
    { icon: <Award className="w-6 h-6" />, number: "95%", label: "Success Rate", color: "text-accent" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "5+", label: "Years Experience", color: "text-secondary" }
  ]

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Transparency",
      description: "No hidden fees, clear pricing, and honest guidance throughout your journey."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Expert Counselors",
      description: "Our team consists of certified counselors with international education experience."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "Over 1000 successful applications and 95% visa approval rate speaks for itself."
    }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              Why Choose Bubbled
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Your Trusted Study Abroad Partner
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to making your dreams of studying abroad a reality with expert guidance, transparent processes, and personalized support.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-muted flex items-center justify-center ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Making Global Education Accessible for Every Indian Student
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Bubbled, we understand that studying abroad is more than just getting an admission – it's about transforming your future. That's why we've helped over 1000 students navigate the complex journey from application to settlement.
                </p>
                <p>
                  Our comprehensive approach covers everything from test preparation to visa guidance, ensuring you have the support you need at every step. We believe in transparency, which is why our pricing is clear and our processes are fully explained.
                </p>
                <p>
                  With offices across India and partnerships with universities worldwide, we're uniquely positioned to guide you toward the right program in the right country for your career goals.
                </p>
              </div>
            </div>

            {/* Right Content - Visual Timeline */}
            <div className="relative">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-success-light rounded-lg">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-success-foreground text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Initial Consultation</h4>
                    <p className="text-sm text-muted-foreground">Free assessment of your profile and goals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-primary-light rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Strategic Planning</h4>
                    <p className="text-sm text-muted-foreground">Customized roadmap based on your preferences</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-accent-light rounded-lg">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Application & Support</h4>
                    <p className="text-sm text-muted-foreground">Complete assistance through to visa approval</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About