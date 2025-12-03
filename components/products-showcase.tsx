import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
}

export function ProductsShowcase() {
  const products: Product[] = [
    {
      id: 1,
      name: "Royal Silk Kurta Set",
      category: "Traditional Wear",
      price: 18999,
      originalPrice: 24999,
      rating: 5,
      reviews: 127,
      image: "/luxury-indian-silk-kurta-purple.jpg",
    },
    {
      id: 2,
      name: "Designer Lehenga Choli",
      category: "Bridal Collection",
      price: 89999,
      originalPrice: 119999,
      rating: 5,
      reviews: 89,
      image: "/luxury-indian-lehenga-emerald-gold.jpg",
    },
    {
      id: 3,
      name: "Premium Sherwani",
      category: "Wedding Collection",
      price: 45999,
      rating: 5,
      reviews: 156,
      image: "/luxury-indian-sherwani-gold-embroidery.jpg",
    },
    {
      id: 4,
      name: "Embroidered Saree",
      category: "Designer Collection",
      price: 32999,
      originalPrice: 42999,
      rating: 5,
      reviews: 203,
      image: "/luxury-silk-saree-traditional-purple-gold.jpg",
    },
  ]

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Signature Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Timeless pieces that celebrate India's rich textile heritage
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex" aria-label={`${product.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < product.rating ? "fill-accent text-accent" : "text-muted"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary">₹{product.price.toLocaleString("en-IN")}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString("en-IN")}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-cta hover:bg-cta/90 text-cta-foreground">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
