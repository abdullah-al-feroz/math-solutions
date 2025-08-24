"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ShoppingCart, Search, Star, ExternalLink, Filter, Heart, Eye, Package, Truck, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import productsData from "@/data/products.json"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["সব", "লেখার সামগ্রী", "গণিত সামগ্রী", "স্টেশনারি", "খাতা ও বই", "পড়ার সামগ্রী"]

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || selectedCategory === "সব" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleBuyNow = (product: any) => {
    window.open(product.fbPageLink, "_blank")
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-primary text-primary-foreground p-4 rounded-full">
              <ShoppingCart className="h-10 w-10" />
            </div>
            <h1 className="text-5xl font-bold text-foreground">শিক্ষা পণ্য</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            শিক্ষার্থীদের জন্য প্রয়োজনীয় সকল পণ্য। উন্নত মানের পণ্য, সাশ্রয়ী দাম এবং দ্রুত ডেলিভারি।
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2 mb-4">
              <Input
                type="text"
                placeholder="পণ্য খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-lg py-3"
              />
              <Button size="lg" className="px-8">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category === "সব" ? null : category)}
                  className="bg-transparent"
                >
                  <Filter className="h-4 w-4 mr-1" />
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center p-4">
            <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">দ্রুত ডেলিভারি</h3>
          </Card>
          <Card className="text-center p-4">
            <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">গুণগত মান</h3>
          </Card>
          <Card className="text-center p-4">
            <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">সাশ্রয়ী দাম</h3>
          </Card>
          <Card className="text-center p-4">
            <Package className="h-8 w-8 text-primary mx-auto mb-2" />
            <h3 className="font-semibold text-sm">নিরাপদ প্যাকেজিং</h3>
          </Card>
        </div>

        {/* Advertisement Space */}
        <div className="mb-12">
          <Card className="bg-muted/30 border-dashed border-2 border-muted-foreground/20">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-2">Advertisement Space</p>
              <div className="h-20 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-sm text-muted-foreground">728x90 Banner Ad</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount > 0 && (
                  <Badge className="absolute top-2 left-2 bg-red-500 text-white">-{product.discount}%</Badge>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      স্টক নেই
                    </Badge>
                  </div>
                )}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
                <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">৳{product.discountedPrice}</span>
                    {product.originalPrice > product.discountedPrice && (
                      <span className="text-sm text-muted-foreground line-through">৳{product.originalPrice}</span>
                    )}
                  </div>
                  {product.discount > 0 && (
                    <p className="text-xs text-green-600">৳{product.originalPrice - product.discountedPrice} সাশ্রয়!</p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleBuyNow(product)}
                    disabled={!product.inStock}
                    className="flex-1 gap-2"
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {product.inStock ? "কিনুন" : "স্টক নেই"}
                  </Button>
                  <Link href={`/products/${product.id}`}>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <Card className="text-center p-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">কোন পণ্য পাওয়া যায়নি</h3>
            <p className="text-muted-foreground">আপনার অনুসন্ধানের জন্য কোন পণ্য পাওয়া যায়নি।</p>
          </Card>
        )}

        {/* Advertisement Space */}
        <div className="mb-8">
          <Card className="bg-muted/30 border-dashed border-2 border-muted-foreground/20">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-2">Advertisement Space</p>
              <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-sm text-muted-foreground">300x250 Rectangle Ad</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground text-center p-8">
          <h2 className="text-3xl font-bold mb-4">আপনার প্রয়োজনীয় পণ্য খুঁজে নিন</h2>
          <p className="text-lg mb-6 opacity-90">শিক্ষার্থীদের জন্য সেরা মানের পণ্য। Facebook পেজে যোগাযোগ করে অর্ডার করুন।</p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => window.open("https://facebook.com/MathSolutionsbd", "_blank")}
            className="gap-2"
          >
            <ExternalLink className="h-5 w-5" />
            Facebook পেজ দেখুন
          </Button>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
