import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      university: "University of Toronto",
      country: "Canada",
      program: "Computer Science",
      rating: 5,
      image: "PS",
      testimonial: "Bubbled made my dream of studying in Canada a reality. Their guidance was invaluable, especially with the visa process. I couldn't have done it without them!"
    },
    {
      name: "Rahul Patel",
      university: "University of Melbourne",
      country: "Australia", 
      program: "Business Administration",
      rating: 5,
      image: "RP",
      testimonial: "The team at Bubbled was incredibly supportive throughout my application journey. Their transparent approach and expert advice helped me secure admission to my dream university."
    },
    {
      name: "Anjali Kumar",
      university: "King's College London",
      country: "UK",
      program: "International Relations",
      rating: 5,
      image: "AK",
      testimonial: "From SOP writing to visa interview preparation, Bubbled was with me every step. Their success rate speaks for itself - highly recommended!"
    },
    {
      name: "Vikram Singh", 
      university: "Technical University of Munich",
      country: "Germany",
      program: "Mechanical Engineering",
      rating: 5,
      image: "VS",
      testimonial: "Bubbled's comprehensive support package was worth every penny. They helped me navigate the complex German application process with ease."
    },
    {
      name: "Sneha Gupta",
      university: "University of Sydney",
      country: "Australia",
      program: "Psychology",
      rating: 5,
      image: "SG",
      testimonial: "The counselors at Bubbled really understand what universities are looking for. Their guidance helped me craft the perfect application."
    },
    {
      name: "Arjun Menon",
      university: "University of California, Berkeley",
      country: "USA",
      program: "Data Science",
      rating: 5,
      image: "AM",
      testimonial: "Bubbled's premium package was exactly what I needed for my US applications. Their test prep and application support were outstanding."
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-success-light text-success px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              Success Stories
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              What Our Students Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our successful students have to say about their journey with Bubbled.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-accent opacity-60" />
                  
                  {/* Testimonial Text */}
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.testimonial}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-accent" />
                    ))}
                  </div>
                  
                  {/* Student Info */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.program}</div>
                      <div className="text-sm text-accent font-medium">{testimonial.university}, {testimonial.country}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="text-center space-y-6 p-8 bg-gradient-to-r from-primary-light/20 to-accent-light/20 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">98%</div>
                <div className="text-muted-foreground">Student Satisfaction</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-foreground">95%</div>
                <div className="text-muted-foreground">Visa Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials