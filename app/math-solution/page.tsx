"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calculator, BookOpen, Languages } from "lucide-react"
import Link from "next/link"
import { Globe } from "lucide-react"

export default function MathSolutionsPage() {
  const [language, setLanguage] = useState<"bangla" | "english">("bangla")

  const classes = [
    { number: 1, name: "প্রথম শ্রেণি", englishName: "Class 1", color: "bg-red-500" },
    { number: 2, name: "দ্বিতীয় শ্রেণি", englishName: "Class 2", color: "bg-orange-500" },
    { number: 3, name: "তৃতীয় শ্রেণি", englishName: "Class 3", color: "bg-yellow-500" },
    { number: 4, name: "চতুর্থ শ্রেণি", englishName: "Class 4", color: "bg-green-500" },
    { number: 5, name: "পঞ্চম শ্রেণি", englishName: "Class 5", color: "bg-blue-500" },
    { number: 6, name: "ষষ্ঠ শ্রেণি", englishName: "Class 6", color: "bg-indigo-500" },
    { number: 7, name: "সপ্তম শ্রেণি", englishName: "Class 7", color: "bg-purple-500" },
    { number: 8, name: "অষ্টম শ্রেণি", englishName: "Class 8", color: "bg-pink-500" },
    { number: 9, name: "নবম শ্রেণি", englishName: "Class 9", color: "bg-teal-500" },
    { number: 10, name: "দশম শ্রেণি", englishName: "Class 10", color: "bg-cyan-500" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <Calculator className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              {language === "bangla" ? "গণিত সমাধান" : "Math Solutions"}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            {language === "bangla"
              ? "আপনার পছন্দের ক্লাস নির্বাচন করুন এবং গণিতের সম্পূর্ণ সমাধান পান"
              : "Select your class and get complete math solutions"}
          </p>

          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {/* <Languages className="h-5 w-5 text-muted-foreground" /> */}
            <Globe className="w-5 h-5 text-muted-foreground" />
            <Button
              variant={language === "bangla" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("bangla")}
            >
              বাংলা
            </Button>
            <Button
              variant={language === "english" ? "default" : "outline"}
              size="sm"
              onClick={() => setLanguage("english")}
            >
              English
            </Button>
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {classes.map((classItem) => (
            <Link key={classItem.number} href={`/math-solutions/class-${classItem.number}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 ${classItem.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <span className="text-2xl font-bold text-white">{classItem.number}</span>
                  </div>
                  <CardTitle className="text-lg">
                    {language === "bangla" ? classItem.name : classItem.englishName}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Badge variant="secondary" className="mb-2">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {language === "bangla" ? "অধ্যায় দেখুন" : "View Chapters"}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {language === "bangla" ? "সম্পূর্ণ গণিত সমাধান পান" : "Get complete math solutions"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">{language === "bangla" ? "ধাপে ধাপে সমাধান" : "Step-by-Step Solutions"}</h3>
            <p className="text-sm text-muted-foreground">
              {language === "bangla" ? "প্রতিটি গণিত সমস্যার বিস্তারিত সমাধান" : "Detailed solutions for every math problem"}
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Languages className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">{language === "bangla" ? "দ্বিভাষিক সাপোর্ট" : "Bilingual Support"}</h3>
            <p className="text-sm text-muted-foreground">
              {language === "bangla" ? "বাংলা এবং ইংরেজি উভয় ভাষায় সমাধান" : "Solutions available in both Bangla and English"}
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">{language === "bangla" ? "সম্পূর্ণ পাঠ্যক্রম" : "Complete Curriculum"}</h3>
            <p className="text-sm text-muted-foreground">
              {language === "bangla" ? "১ম থেকে ১০ম শ্রেণি পর্যন্ত সব বিষয়" : "All subjects from Class 1 to Class 10"}
            </p>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
