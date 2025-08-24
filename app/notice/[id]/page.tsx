"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, Calendar, Bell, AlertCircle, Info, CheckCircle, Share2 } from "lucide-react"
import Link from "next/link"
import noticesData from "@/data/notices.json"

interface Notice {
  id: number
  title: string
  content: string
  date: string
  priority: "high" | "medium" | "low"
}

export default function NoticeDetailPage() {
  const params = useParams()
  const [notice, setNotice] = useState<Notice | null>(null)

  const noticeId = Number.parseInt(params.id as string)

  useEffect(() => {
    const foundNotice = noticesData.find((n) => n.id === noticeId)
    if (foundNotice) {
      setNotice(foundNotice)
    }
  }, [noticeId])

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-6 w-6 text-red-500" />
      case "medium":
        return <Info className="h-6 w-6 text-yellow-500" />
      case "low":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      default:
        return <Bell className="h-6 w-6 text-muted-foreground" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <Badge variant="destructive" className="text-base px-4 py-2">
            জরুরি নোটিশ
          </Badge>
        )
      case "medium":
        return <Badge className="bg-yellow-500 text-white text-base px-4 py-2">গুরুত্বপূর্ণ নোটিশ</Badge>
      case "low":
        return (
          <Badge variant="secondary" className="text-base px-4 py-2">
            সাধারণ নোটিশ
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="text-base px-4 py-2">
            নোটিশ
          </Badge>
        )
    }
  }

  if (!notice) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">নোটিশ পাওয়া যায়নি</h1>
            <Link href="/notice">
              <Button>নোটিশ বোর্ডে ফিরে যান</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedNotices = noticesData.filter((n) => n.id !== notice.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/notice">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              নোটিশ বোর্ডে ফিরে যান
            </Button>
          </Link>
        </div>

        {/* Notice Detail */}
        <Card className="mb-12">
          <CardHeader className="pb-6">
            <div className="flex items-start gap-4 mb-4">
              {getPriorityIcon(notice.priority)}
              <div className="flex-1">
                {getPriorityBadge(notice.priority)}
                <div className="flex items-center gap-2 mt-3 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>প্রকাশিত: {notice.date}</span>
                </div>
              </div>
            </div>
            <CardTitle className="text-3xl font-bold leading-tight animate-slide-text">{notice.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="prose prose-lg max-w-none mb-8">
              <div className="text-lg leading-relaxed whitespace-pre-line text-foreground">{notice.content}</div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="text-sm text-muted-foreground">নোটিশ ID: #{notice.id}</div>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                <Share2 className="h-4 w-4" />
                শেয়ার করুন
              </Button>
            </div>
          </CardContent>
        </Card>

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

        {/* Related Notices */}
        {relatedNotices.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">অন্যান্য নোটিশ</h2>
            <div className="space-y-4">
              {relatedNotices.map((relatedNotice) => (
                <Card key={relatedNotice.id} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getPriorityIcon(relatedNotice.priority)}
                          {getPriorityBadge(relatedNotice.priority)}
                          <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
                            <Calendar className="h-4 w-4" />
                            {relatedNotice.date}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                          <Link href={`/notice/${relatedNotice.id}`}>{relatedNotice.title}</Link>
                        </h3>
                        <p className="text-muted-foreground line-clamp-2">{relatedNotice.content.split("\n")[0]}</p>
                      </div>
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
