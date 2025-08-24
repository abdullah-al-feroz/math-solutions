"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, BookOpen, Calculator, Languages, FileText } from "lucide-react"
import Link from "next/link"
import MathSolutionssData from "@/data/math-solutionss.json"

interface Chapter {
  id: number
  name: string
  problems: Array<{
    id: number
    question: string
    solution: string
    bangla: boolean
  }>
}

interface ClassData {
  class: number
  className: string
  chapters: Chapter[]
}

export default function ClassMathPage() {
  const params = useParams()
  const [language, setLanguage] = useState<"bangla" | "english">("bangla")
  const [classData, setClassData] = useState<ClassData | null>(null)

  const classNumber = Number.parseInt(params.classNumber as string)

  useEffect(() => {
    const data = MathSolutionssData.find((item) => item.class === classNumber)
    if (data) {
      setClassData(data)
    }
  }, [classNumber])

  if (!classData) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Class data not found</h1>
            <Link href="/math-solutions">
              <Button>Back to Math Solutions</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const getClassNameByLanguage = () => {
    const classNames: { [key: number]: { bangla: string; english: string } } = {
      1: { bangla: "প্রথম শ্রেণি", english: "Class 1" },
      2: { bangla: "দ্বিতীয় শ্রেণি", english: "Class 2" },
      3: { bangla: "তৃতীয় শ্রেণি", english: "Class 3" },
      4: { bangla: "চতুর্থ শ্রেণি", english: "Class 4" },
      5: { bangla: "পঞ্চম শ্রেণি", english: "Class 5" },
      6: { bangla: "ষষ্ঠ শ্রেণি", english: "Class 6" },
      7: { bangla: "সপ্তম শ্রেণি", english: "Class 7" },
      8: { bangla: "অষ্টম শ্রেণি", english: "Class 8" },
      9: { bangla: "নবম শ্রেণি", english: "Class 9" },
      10: { bangla: "দশম শ্রেণি", english: "Class 10" },
    }
    return classNames[classNumber]?.[language] || `Class ${classNumber}`
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/math-solutions">
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              {language === "bangla" ? "ফিরে যান" : "Back"}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <Calculator className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">{getClassNameByLanguage()}</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            {language === "bangla" ? "অধ্যায় নির্বাচন করুন এবং গণিত সমাধান দেখুন" : "Select a chapter and view math solutions"}
          </p>

          {/* Language Toggle */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Languages className="h-5 w-5 text-muted-foreground" />
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

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {classData.chapters.map((chapter, index) => (
            <Link key={chapter.id} href={`/math-solutions/class-${classNumber}/chapter-${chapter.id}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">
                      {language === "bangla" ? `অধ্যায় ${chapter.id}` : `Chapter ${chapter.id}`}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{chapter.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      {chapter.problems.length} {language === "bangla" ? "টি সমস্যা" : "Problems"}
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      {language === "bangla" ? "দেখুন" : "View"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {classData.chapters.length === 0 && (
          <Card className="text-center p-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {language === "bangla" ? "কোন অধ্যায় পাওয়া যায়নি" : "No Chapters Found"}
            </h3>
            <p className="text-muted-foreground">
              {language === "bangla"
                ? "এই ক্লাসের জন্য এখনো কোন অধ্যায় যোগ করা হয়নি।"
                : "No chapters have been added for this class yet."}
            </p>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  )
}
