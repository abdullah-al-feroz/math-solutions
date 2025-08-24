"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Bell, Calendar, ChevronDown, ChevronUp, AlertCircle, Info, CheckCircle } from "lucide-react"
import Link from "next/link"
import noticesData from "@/data/notices.json"

interface Notice {
  id: number
  title: string
  content: string
  date: string
  priority: "high" | "medium" | "low"
}

export default function NoticePage() {
  const [expandedNotices, setExpandedNotices] = useState<Set<number>>(new Set())

  const toggleNotice = (noticeId: number) => {
    const newExpanded = new Set(expandedNotices)
    if (newExpanded.has(noticeId)) {
      newExpanded.delete(noticeId)
    } else {
      newExpanded.add(noticeId)
    }
    setExpandedNotices(newExpanded)
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      case "medium":
        return <Info className="h-5 w-5 text-yellow-500" />
      case "low":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return <Bell className="h-5 w-5 text-muted-foreground" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-200 bg-red-50"
      case "medium":
        return "border-yellow-200 bg-yellow-50"
      case "low":
        return "border-green-200 bg-green-50"
      default:
        return "border-border bg-background"
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">জরুরি</Badge>
      case "medium":
        return <Badge className="bg-yellow-500 text-white">গুরুত্বপূর্ণ</Badge>
      case "low":
        return <Badge variant="secondary">সাধারণ</Badge>
      default:
        return <Badge variant="outline">নোটিশ</Badge>
    }
  }

  // Sort notices by priority and date
  const sortedNotices = [...noticesData].sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 }
    const priorityDiff =
      priorityOrder[b.priority as keyof typeof priorityOrder] - priorityOrder[a.priority as keyof typeof priorityOrder]
    if (priorityDiff !== 0) return priorityDiff
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <Bell className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">নোটিশ বোর্ড</h1>
          </div>
          <p className="text-lg text-gray-600 mb-6">সর্বশেষ নোটিশ এবং ঘোষণা দেখুন। গুরুত্বপূর্ণ তথ্য মিস করবেন না।</p>
        </div>

        {/* Advertisement Space */}
        <div className="mb-6">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardContent className="p-4 text-center">
              <p className="text-gray-500 mb-2 text-sm">Advertisement Space</p>
              <div className="h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-sm text-gray-400">728x90 Banner Ad</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notices List */}
        <div className="space-y-4 mb-8">
          {sortedNotices.map((notice, index) => {
            const isExpanded = expandedNotices.has(notice.id)
            const previewText = notice.content.split("\n").slice(0, 2).join("\n")
            const hasMoreContent = notice.content.length > previewText.length

            return (
              <Card
                key={notice.id}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      {getPriorityIcon(notice.priority)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {getPriorityBadge(notice.priority)}
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Calendar className="h-4 w-4" />
                            {notice.date}
                          </div>
                        </div>
                        <CardTitle className="text-lg mb-1 text-gray-900">{notice.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-gray-600 leading-relaxed mb-3">
                    {isExpanded ? (
                      <p className="whitespace-pre-line">{notice.content}</p>
                    ) : (
                      <p className="whitespace-pre-line">
                        {previewText}
                        {hasMoreContent && "..."}
                      </p>
                    )}
                  </div>

                  {hasMoreContent && (
                    <div className="flex justify-between items-center">
                      <Button
                        variant="ghost"
                        onClick={() => toggleNotice(notice.id)}
                        className="gap-2 text-blue-600 hover:text-white hover:bg-blue-600"
                      >
                        {isExpanded ? (
                          <>
                            কম দেখুন
                            <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            আরো দেখুন
                            <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <Link href={`/notice/${notice.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent"
                        >
                          বিস্তারিত দেখুন
                        </Button>
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Empty State */}
        {sortedNotices.length === 0 && (
          <Card className="text-center p-8 bg-white border border-gray-200">
            <Bell className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">কোন নোটিশ নেই</h3>
            <p className="text-gray-600">এই মুহূর্তে কোন নোটিশ উপলব্ধ নেই।</p>
          </Card>
        )}

        {/* Advertisement Space */}
        <div className="mb-6">
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardContent className="p-4 text-center">
              <p className="text-gray-500 mb-2 text-sm">Advertisement Space</p>
              <div className="h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-sm text-gray-400">300x250 Rectangle Ad</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
