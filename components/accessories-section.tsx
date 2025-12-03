import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Accessory {
  id: number
  name: string
  category: string
  price: number
  rating: number
  image: string
}

export function AccessoriesSection() {
  const accessories: Accessory[] = [
    {
      id: 1,
      name: "Embroidered Silk Clutch",
      category: "Handbags",
      price: 4999,
      rating: 5,
      image: "/luxury-silk-clutch-purple-gold-embroidery.jpg",
    },
    {
      id: 2,
      name: "Designer Potli Bag",
      category: "Handbags",
      price: 3499,
      rating: 5,
      image: "/traditional-potli-bag-gold-beads.jpg",
    },
    {
      id: 3,
      name: "Handwoven Silk Stole",
      category: "Scarves & Stoles",
      price: 5999,
      rating: 5,
      image: "/silk-stole-purple-traditional-pattern.jpg",
    },
    {
      id: 4,
      name: "Premium Leather Belt",
      category: "Belts",
      price: 2999,
      rating: 5,
      image: "/luxury-leather-belt-gold-buckle.jpg",
    },
    {
      id: 5,
      name: "Embossed Leather Wallet",
      category: "Wallets",
      price: 3999,
      rating: 5,
      image: "/premium-leather-wallet-brown.jpg",
    },
    {
      id: 6,
      name: "Silk Pocket Square Set",
      category: "Accessories",
      price: 1999,
      rating: 5,
      image: "/silk-pocket-square-purple-gold.jpg",
    },
    {
      id: 7,
      name: "Designer Brooch",
      category: "Jewelry",
      price: 2499,
      rating: 5,
      image: "/luxury-brooch-gold-gemstones.jpg",
    },
    {
      id: 8,
      name: "Handcrafted Cufflinks",
      category: "Accessories",
      price: 3499,
      rating: 5,
      image: "/luxury-cufflinks-gold-traditional.jpg",
    },
  ]

  return (
    <section id="accessories" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-secondary mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Luxury Accessories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Complete your ensemble with our curated collection of premium accessories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {accessories.map((accessory) => (
            <Card
              key={accessory.id}
              className="group overflow-hidden bg-card border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <CardContent className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{accessory.category}</p>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-card-foreground line-clamp-1">
                  {accessory.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <div className="flex" aria-label={`${accessory.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < accessory.rating ? "fill-accent text-accent" : "text-muted"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-lg md:text-xl font-bold text-primary">
                    ₹{accessory.price.toLocaleString("en-IN")}
                  </span>
                  <Button size="sm" className="bg-cta hover:bg-cta/90 text-cta-foreground text-xs">
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
