"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Crown } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-secondary to-cta relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/20 backdrop-blur-sm mb-6">
            <Crown className="h-8 w-8 text-accent" aria-hidden="true" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Join the VIP Circle
          </h2>

          <p className="text-xl text-primary-foreground/90 mb-8 text-pretty leading-relaxed">
            Be the first to discover new collections, exclusive offers, and special events. Plus, get ₹5,000 off your
            first purchase above ₹50,000
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-card/90 backdrop-blur-sm border-primary-foreground/20 text-card-foreground placeholder:text-muted-foreground h-12"
              aria-label="Email address"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-primary-foreground/70">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
