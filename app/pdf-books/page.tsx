"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { FileText, BookOpen, Download, Users } from "lucide-react"
import Link from "next/link"
import pdfBooksData from "@/data/pdf-books.json"

export default function PDFBooksPage() {
  const classes = [
    { number: 1, name: "প্রথম শ্রেণি", color: "bg-red-500", books: 0 },
    { number: 2, name: "দ্বিতীয় শ্রেণি", color: "bg-orange-500", books: 0 },
    { number: 3, name: "তৃতীয় শ্রেণি", color: "bg-yellow-500", books: 0 },
    { number: 4, name: "চতুর্থ শ্রেণি", color: "bg-green-500", books: 0 },
    { number: 5, name: "পঞ্চম শ্রেণি", color: "bg-blue-500", books: 0 },
    { number: 6, name: "ষষ্ঠ শ্রেণি", color: "bg-indigo-500", books: 0 },
    { number: 7, name: "সপ্তম শ্রেণি", color: "bg-purple-500", books: 0 },
    { number: 8, name: "অষ্টম শ্রেণি", color: "bg-pink-500", books: 0 },
    { number: 9, name: "নবম শ্রেণি", color: "bg-teal-500", books: 0 },
    { number: 10, name: "দশম শ্রেণি", color: "bg-cyan-500", books: 0 },
  ]

  // Update book counts from JSON data
  const classesWithBooks = classes.map((classItem) => {
    const classData = pdfBooksData.find((data) => data.class === classItem.number)
    return {
      ...classItem,
      books: classData ? classData.books.length : 0,
    }
  })

  const totalBooks = pdfBooksData.reduce((total, classData) => total + classData.books.length, 0)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">PDF বই ডাউনলোড</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            সকল ক্লাসের জন্য বিনামূল্যে PDF বই ডাউনলোড করুন। উচ্চ মানের বই এবং দ্রুত ডাউনলোড সুবিধা।
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{totalBooks}+</div>
              <div className="text-sm text-muted-foreground">মোট বই</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10</div>
              <div className="text-sm text-muted-foreground">ক্লাস</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">বিনামূল্যে</div>
            </div>
          </div>
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

        {/* Class Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {classesWithBooks.map((classItem) => (
            <Link key={classItem.number} href={`/pdf-books/class-${classItem.number}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 ${classItem.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <span className="text-xl font-bold text-white">{classItem.number}</span>
                  </div>
                  <CardTitle className="text-base">{classItem.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Badge variant="secondary" className="mb-2">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {classItem.books} টি বই
                  </Badge>
                  <p className="text-xs text-muted-foreground">{classItem.books > 0 ? "ডাউনলোড করুন" : "শীঘ্রই আসছে"}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">দ্রুত ডাউনলোড</h3>
            <p className="text-sm text-muted-foreground">Google Drive এর মাধ্যমে দ্রুত এবং নিরাপদ ডাউনলোড</p>
          </Card>

          <Card className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">উচ্চ মানের PDF</h3>
            <p className="text-sm text-muted-foreground">স্পষ্ট এবং পড়ার উপযোগী উচ্চ মানের PDF ফাইল</p>
          </Card>

          <Card className="text-center p-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">সকল শিক্ষার্থীর জন্য</h3>
            <p className="text-sm text-muted-foreground">১ম থেকে ১০ম শ্রেণি পর্যন্ত সকল শিক্ষার্থীর জন্য</p>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-primary text-primary-foreground text-center p-8">
          <h2 className="text-2xl font-bold mb-4">আপনার প্রয়োজনীয় বই খুঁজে নিন</h2>
          <p className="text-lg mb-6 opacity-90">উপরের ক্লাস তালিকা থেকে আপনার ক্লাস নির্বাচন করুন এবং সকল বই দেখুন</p>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
