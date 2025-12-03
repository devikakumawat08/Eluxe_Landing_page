import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  image: string
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "The craftsmanship of my bridal lehenga was absolutely stunning. Every detail was perfect, and I felt like royalty on my wedding day. Highly recommend Eluxe!",
      image: "/priya-sharma-portrait.jpg",
    },
    {
      id: 2,
      name: "Rajesh Malhotra",
      location: "Delhi",
      rating: 5,
      text: "Purchased a kundan necklace for my wife. The quality is exceptional and the design is truly unique. The hallmark certification gave us complete confidence.",
      image: "/rajesh-malhotra-portrait.jpg",
    },
    {
      id: 3,
      name: "Ananya Reddy",
      location: "Bangalore",
      rating: 5,
      text: "I have been shopping with Eluxe for years. Their attention to detail and customer service is unmatched. Every piece in my collection is a masterpiece.",
      image: "/ananya-reddy-portrait.jpg",
    },
    {
      id: 4,
      name: "Vikram Singh",
      location: "Jaipur",
      rating: 5,
      text: "The sherwani I ordered exceeded all expectations. The fabric quality and embroidery work showcase true Indian craftsmanship at its finest.",
      image: "/vikram-singh-portrait.jpg",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What Our Patrons Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Trusted by thousands of discerning customers across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-accent mb-4" aria-hidden="true" />

                {/* Rating */}
                <div className="flex mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.text}</p>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
