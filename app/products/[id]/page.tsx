"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, Star, ExternalLink, Heart, Share2, Package, Truck, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import productsData from "@/data/products.json"

interface Product {
  id: number
  name: string
  category: string
  description: string
  originalPrice: number
  discountedPrice: number
  discount: number
  image: string
  fbPageLink: string
  inStock: boolean
  rating: number
  reviews: number
  features: string[]
}

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)

  const productId = Number.parseInt(params.id as string)

  useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === productId)
    if (foundProduct) {
      setProduct(foundProduct)
    }
  }, [productId])

  const handleBuyNow = () => {
    if (product) {
      window.open(product.fbPageLink, "_blank")
    }
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ))
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">পণ্য পাওয়া যায়নি</h1>
            <Link href="/products">
              <Button>পণ্য পেজে ফিরে যান</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedProducts = productsData.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/products">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              পণ্য তালিকায় ফিরে যান
            </Button>
          </Link>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Images */}
          <div>
            <div className="relative mb-4">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-96 object-cover rounded-lg"
              />
              {product.discount > 0 && (
                <Badge className="absolute top-4 left-4 bg-red-500 text-white text-lg px-3 py-1">
                  -{product.discount}%
                </Badge>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
                  <Badge variant="destructive" className="text-xl px-6 py-3">
                    স্টক নেই
                  </Badge>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">{renderStars(product.rating)}</div>
                <span className="text-lg font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} রিভিউ)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl font-bold text-primary">৳{product.discountedPrice}</span>
                  {product.originalPrice > product.discountedPrice && (
                    <span className="text-xl text-muted-foreground line-through">৳{product.originalPrice}</span>
                  )}
                </div>
                {product.discount > 0 && (
                  <p className="text-lg text-green-600 font-medium">
                    ৳{product.originalPrice - product.discountedPrice} সাশ্রয়! ({product.discount}% ছাড়)
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">বৈশিষ্ট্য:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button
                    onClick={handleBuyNow}
                    disabled={!product.inStock}
                    size="lg"
                    className="flex-1 gap-2 text-lg py-6"
                  >
                    <ExternalLink className="h-5 w-5" />
                    {product.inStock ? "এখনই কিনুন" : "স্টক নেই"}
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                {product.inStock && (
                  <p className="text-sm text-muted-foreground text-center">Facebook পেজে যোগাযোগ করে অর্ডার সম্পন্ন করুন</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center p-6">
            <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">দ্রুত ডেলিভারি</h3>
            <p className="text-sm text-muted-foreground">ঢাকার ভিতরে ২৪ ঘন্টা, বাইরে ৪৮ ঘন্টা</p>
          </Card>

          <Card className="text-center p-6">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">গুণগত মান</h3>
            <p className="text-sm text-muted-foreground">১০০% অরিজিনাল এবং উন্নত মানের পণ্য</p>
          </Card>

          <Card className="text-center p-6">
            <Package className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">নিরাপদ প্যাকেজিং</h3>
            <p className="text-sm text-muted-foreground">পণ্য নিরাপদে পৌঁছানোর গ্যারান্টি</p>
          </Card>
        </div>

        {/* Advertisement Space */}
        <div className="mb-12">
          <Card className="bg-muted/30 border-dashed border-2 border-muted-foreground/20">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-2">Advertisement Space</p>
              <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-sm text-muted-foreground">728x90 Banner Ad</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">সম্পর্কিত পণ্য</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card
                  key={relatedProduct.id}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      width={250}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                    {relatedProduct.discount > 0 && (
                      <Badge className="absolute top-2 left-2 bg-red-500 text-white text-xs">
                        -{relatedProduct.discount}%
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm line-clamp-2">
                      <Link href={`/products/${relatedProduct.id}`} className="hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold text-primary">৳{relatedProduct.discountedPrice}</span>
                      {relatedProduct.originalPrice > relatedProduct.discountedPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ৳{relatedProduct.originalPrice}
                        </span>
                      )}
                    </div>
                    <Link href={`/products/${relatedProduct.id}`}>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        দেখুন
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
