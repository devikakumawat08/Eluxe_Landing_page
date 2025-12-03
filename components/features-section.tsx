import { Sparkles, Award, Shield, Truck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Handcrafted Excellence",
      description:
        "Each piece is meticulously crafted by master artisans with decades of experience in traditional Indian craftsmanship",
    },
    {
      icon: Award,
      title: "Premium Materials",
      description:
        "Only the finest fabrics, precious metals, and authentic gemstones sourced from trusted suppliers across India",
    },
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description:
        "Every item comes with a certificate of authenticity and is backed by our lifetime quality guarantee",
    },
    {
      icon: Truck,
      title: "Pan-India Delivery",
      description:
        "Secure, insured shipping to all major cities with white-glove delivery service for high-value orders",
    },
  ]

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why Choose Eluxe
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the perfect blend of traditional craftsmanship and modern luxury
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-6">
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
