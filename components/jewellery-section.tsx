import { Star, Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Jewellery {
  id: number
  name: string
  material: string
  purity: string
  price: number
  rating: number
  reviews: number
  image: string
}

export function JewellerySection() {
  const jewelleryItems: Jewellery[] = [
    {
      id: 1,
      name: "Kundan Polki Necklace",
      material: "22K Gold",
      purity: "916 Hallmark",
      price: 189999,
      rating: 5,
      reviews: 45,
      image: "/traditional-indian-kundan-polki-gold-necklace-luxu.jpg",
    },
    {
      id: 2,
      name: "Emerald Diamond Earrings",
      material: "18K White Gold",
      purity: "Natural Emerald",
      price: 124999,
      rating: 5,
      reviews: 32,
      image: "/luxury-emerald-diamond-earrings-white-gold-jewelle.jpg",
    },
    {
      id: 3,
      name: "Temple Jewellery Set",
      material: "22K Gold",
      purity: "916 Hallmark",
      price: 299999,
      rating: 5,
      reviews: 28,
      image: "/south-indian-temple-jewellery-gold-necklace-set-tr.jpg",
    },
    {
      id: 4,
      name: "Ruby Kada Bracelet",
      material: "22K Gold",
      purity: "Burmese Ruby",
      price: 79999,
      rating: 5,
      reviews: 56,
      image: "/luxury-ruby-gold-kada-bracelet-traditional-indian-.jpg",
    },
    {
      id: 5,
      name: "Diamond Choker",
      material: "Platinum",
      purity: "VVS1 Diamonds",
      price: 349999,
      rating: 5,
      reviews: 19,
      image: "/platinum-diamond-choker-necklace-luxury-high-end-j.jpg",
    },
    {
      id: 6,
      name: "Pearl Jhumka Earrings",
      material: "18K Gold",
      purity: "South Sea Pearls",
      price: 45999,
      rating: 5,
      reviews: 78,
      image: "/traditional-indian-gold-jhumka-earrings-with-south.jpg",
    },
    {
      id: 7,
      name: "Meenakari Bangles Set",
      material: "22K Gold",
      purity: "Enamel Work",
      price: 67999,
      rating: 5,
      reviews: 41,
      image: "/traditional-indian-meenakari-gold-bangles-set-colo.jpg",
    },
    {
      id: 8,
      name: "Sapphire Ring",
      material: "Platinum",
      purity: "Ceylon Sapphire",
      price: 159999,
      rating: 5,
      reviews: 23,
      image: "/luxury-ceylon-sapphire-platinum-ring-high-end-jewe.jpg",
    },
  ]

  return (
    <section id="jewellery" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Fine Jewellery Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Exquisite pieces crafted with precious metals and authentic gemstones
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jewelleryItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden bg-card border-border hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground font-semibold">{item.purity}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm text-muted-foreground font-medium">{item.material}</p>
                  <Info className="h-4 w-4 text-muted-foreground" aria-label="More information" />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{item.name}</h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex" aria-label={`${item.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < item.rating ? "fill-accent text-accent" : "text-muted"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({item.reviews})</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">₹{item.price.toLocaleString("en-IN")}</span>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {["BIS Hallmarked", "Certified Gemstones", "Lifetime Exchange", "Insured Delivery"].map((badge, index) => (
            <div key={index} className="text-center p-4 bg-card rounded-lg border border-border">
              <p className="font-semibold text-sm text-card-foreground">{badge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
