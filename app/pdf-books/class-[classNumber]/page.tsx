"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, FileText, Download, Eye, ExternalLink, BookOpen, FileIcon } from "lucide-react"
import Link from "next/link"
import pdfBooksData from "@/data/pdf-books.json"

interface Book {
  id: number
  name: string
  subject: string
  downloadLink: string
  size: string
  pages: number
  description: string
}

interface ClassData {
  class: number
  className: string
  books: Book[]
}

export default function ClassPDFBooksPage() {
  const params = useParams()
  const [classData, setClassData] = useState<ClassData | null>(null)

  const classNumber = Number.parseInt(params.classNumber as string)

  useEffect(() => {
    const data = pdfBooksData.find((item) => item.class === classNumber)
    if (data) {
      setClassData(data)
    }
  }, [classNumber])

  const handleDownload = (book: Book) => {
    // Open Google Drive link in new tab
    window.open(book.downloadLink, "_blank")
  }

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      বাংলা: "bg-red-100 text-red-700",
      গণিত: "bg-blue-100 text-blue-700",
      ইংরেজি: "bg-green-100 text-green-700",
      বিজ্ঞান: "bg-purple-100 text-purple-700",
      "সামাজিক বিজ্ঞান": "bg-orange-100 text-orange-700",
      পদার্থবিজ্ঞান: "bg-indigo-100 text-indigo-700",
      রসায়ন: "bg-pink-100 text-pink-700",
      জীববিজ্ঞান: "bg-teal-100 text-teal-700",
    }
    return colors[subject] || "bg-gray-100 text-gray-700"
  }

  if (!classData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">এই ক্লাসের জন্য কোন বই পাওয়া যায়নি</h1>
            <p className="text-muted-foreground mb-6">দুঃখিত, এই ক্লাসের জন্য এখনো কোন PDF বই যোগ করা হয়নি।</p>
            <Link href="/pdf-books">
              <Button>PDF বই পেজে ফিরে যান</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/pdf-books">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              ফিরে যান
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">{classData.className}</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            {classData.className} এর সকল PDF বই ডাউনলোড করুন। মোট {classData.books.length} টি বই উপলব্ধ।
          </p>
        </div>

        {/* Advertisement Space */}
        <div className="mb-8">
          <Card className="bg-muted/30 border-dashed border-2 border-muted-foreground/20">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-2">Advertisement Space</p>
              <div className="h-20 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-sm text-muted-foreground">728x90 Banner Ad</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {classData.books.map((book) => (
            <Card key={book.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className={getSubjectColor(book.subject)}>{book.subject}</Badge>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <div>{book.size}</div>
                    <div>{book.pages} পৃষ্ঠা</div>
                  </div>
                </div>
                <CardTitle className="text-lg">{book.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{book.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <FileIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">PDF ফরম্যাট</span>
                </div>

                <div className="flex gap-2">
                  <Button onClick={() => handleDownload(book)} className="flex-1 gap-2">
                    <Download className="h-4 w-4" />
                    ডাউনলোড
                  </Button>
                  <Button variant="outline" onClick={() => handleDownload(book)} className="gap-2 bg-transparent">
                    <Eye className="h-4 w-4" />
                    দেখুন
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download Instructions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              ডাউনলোড নির্দেশনা
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <p>উপরের "ডাউনলোড" বাটনে ক্লিক করুন</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <p>Google Drive পেজ খুলে যাবে</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <p>Google Drive থেকে "Download" বাটনে ক্লিক করে ফাইল ডাউনলোড করুন</p>
              </div>
            </div>
          </CardContent>
        </Card>

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
