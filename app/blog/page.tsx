"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Newspaper, Search, Calendar, Clock, User, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import blogPostsData from "@/data/blog-posts.json"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ["সব", "গণিত টিপস", "ভর্তি গাইড", "ক্যারিয়ার গাইড", "পড়াশোনা"]

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || selectedCategory === "সব" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-primary text-primary-foreground p-4 rounded-full">
              <Newspaper className="h-10 w-10" />
            </div>
            <h1 className="text-5xl font-bold text-foreground">শিক্ষা ব্লগ</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            শিক্ষা, ক্যারিয়ার এবং পড়াশোনা সংক্রান্ত সর্বশেষ তথ্য এবং গাইড পান আমাদের ব্লগে
          </p>

          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2 mb-4">
              <Input
                type="text"
                placeholder="ব্লগ পোস্ট খুঁজুন..."
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
                  {category}
                </Button>
              ))}
            </div>
          </div>
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

        {/* Featured Post */}
        {filteredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">ফিচার্ড পোস্ট</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={filteredPosts[0].image || "/placeholder.svg"}
                    alt={filteredPosts[0].title}
                    width={600}
                    height={400}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-4">{filteredPosts[0].category}</Badge>
                  <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                    <Link href={`/blog/${filteredPosts[0].id}`}>{filteredPosts[0].title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {filteredPosts[0].author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {filteredPosts[0].date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {filteredPosts[0].readTime}
                    </div>
                  </div>

                  <Link href={`/blog/${filteredPosts[0].id}`}>
                    <Button className="gap-2">
                      পড়ুন
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">সর্বশেষ পোস্ট</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">{post.category}</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-1 group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        পড়ুন
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <Card className="text-center p-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">কোন পোস্ট পাওয়া যায়নি</h3>
            <p className="text-muted-foreground">আপনার অনুসন্ধানের জন্য কোন ব্লগ পোস্ট পাওয়া যায়নি।</p>
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
      </main>

      <Footer />
    </div>
  )
}
