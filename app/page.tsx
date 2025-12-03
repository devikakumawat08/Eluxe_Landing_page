import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsShowcase } from "@/components/products-showcase"
import { AccessoriesSection } from "@/components/accessories-section"
import { JewellerySection } from "@/components/jewellery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <ProductsShowcase />
      <AccessoriesSection />
      <JewellerySection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
