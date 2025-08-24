"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import blogPostsData from "@/data/blog-posts.json"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: string
  image: string
  tags: string[]
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)

  const postId = Number.parseInt(params.id as string)

  useEffect(() => {
    const foundPost = blogPostsData.find((p) => p.id === postId)
    if (foundPost) {
      setPost(foundPost)
    }
  }, [postId])

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">পোস্ট পাওয়া যায়নি</h1>
            <Link href="/blog">
              <Button>ব্লগে ফিরে যান</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedPosts = blogPostsData.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/blog">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              ব্লগে ফিরে যান
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="mb-12">
          <div className="mb-6">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                শেয়ার করুন
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-lg leading-relaxed whitespace-pre-line text-foreground">{post.content}</div>
          </div>
        </article>

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

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">সম্পর্কিত পোস্ট</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-sm line-clamp-2">
                      <Link href={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                        {relatedPost.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{relatedPost.readTime}</span>
                      <Link href={`/blog/${relatedPost.id}`}>
                        <Button variant="ghost" size="sm">
                          পড়ুন
                        </Button>
                      </Link>
                    </div>
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
