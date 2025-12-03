import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-cta">
      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-6 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <span className="h-2 w-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent font-medium text-sm tracking-wide">LUXURY CRAFTED IN INDIA</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Elegance Redefined
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            Discover exquisite fashion, accessories, and jewellery crafted for the modern maharaja and maharani
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6 group font-semibold"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/95 backdrop-blur-sm border-2 border-accent text-primary hover:bg-accent hover:text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6 font-semibold"
            >
              View Jewellery
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
            {[
              { value: "10K+", label: "Happy Customers" },
              { value: "500+", label: "Luxury Products" },
              { value: "50+", label: "Master Artisans" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold text-accent mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
