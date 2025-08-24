"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, Calculator, Languages, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"
import MathSolutionssData from "@/data/math-solutions.json"

interface Problem {
  id: number
  question: string
  solution: string
  bangla: boolean
}

interface Chapter {
  id: number
  name: string
  problems: Problem[]
}

export default function ChapterMathPage() {
  const params = useParams()
  const [language, setLanguage] = useState<"bangla" | "english">("bangla")
  const [chapter, setChapter] = useState<Chapter | null>(null)
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null)

  const classNumber = Number.parseInt(params.classNumber as string)
  const chapterId = Number.parseInt(params.chapterId as string)

  useEffect(() => {
    const classData = MathSolutionssData.find((item) => item.class === classNumber)
    if (classData) {
      const chapterData = classData.chapters.find((ch) => ch.id === chapterId)
      if (chapterData) {
        setChapter(chapterData)
      }
    }
  }, [classNumber, chapterId])

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

  const filteredProblems =
    chapter?.problems.filter((problem) => (language === "bangla" ? problem.bangla : !problem.bangla)) || []

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Chapter not found</h1>
            <Link href="/math-solutions">
              <Button>Back to Math Solutions</Button>
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
          <Link href={`/math-solutions/class-${classNumber}`}>
            <Button variant="outline" className="gap-2 bg-transparent">
              <ArrowLeft className="h-4 w-4" />
              {language === "bangla" ? "ফিরে যান" : "Back to Chapters"}
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <Calculator className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-foreground">{chapter.name}</h1>
              <p className="text-lg text-muted-foreground mt-2">{getClassNameByLanguage()}</p>
            </div>
          </div>

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Problems List */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {language === "bangla" ? "সমস্যা তালিকা" : "Problem List"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {filteredProblems.map((problem) => (
                  <Button
                    key={problem.id}
                    variant={selectedProblem === problem.id ? "default" : "outline"}
                    className="w-full justify-start text-left h-auto p-4"
                    onClick={() => setSelectedProblem(problem.id)}
                  >
                    <div className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1">
                        {problem.id}
                      </Badge>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{problem.question}</p>
                      </div>
                      {selectedProblem === problem.id && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Advertisement Space */}
            <Card className="mt-6 bg-muted/30 border-dashed border-2 border-muted-foreground/20">
              <CardContent className="p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">Advertisement</p>
                <div className="h-32 bg-muted/50 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">300x250 Ad</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Solution Display */}
          <div className="lg:col-span-2">
            {selectedProblem ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default">
                      {language === "bangla" ? `সমস্যা ${selectedProblem}` : `Problem ${selectedProblem}`}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">
                    {language === "bangla" ? "প্রশ্ন ও সমাধান" : "Question & Solution"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {(() => {
                    const problem = filteredProblems.find((p) => p.id === selectedProblem)
                    if (!problem) return null

                    return (
                      <>
                        {/* Question */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-primary">
                            {language === "bangla" ? "প্রশ্ন:" : "Question:"}
                          </h3>
                          <Card className="bg-muted/30">
                            <CardContent className="p-4">
                              <p className="text-lg">{problem.question}</p>
                            </CardContent>
                          </Card>
                        </div>

                        {/* Solution */}
                        <div>
                          <h3 className="font-semibold text-lg mb-3 text-green-600">
                            {language === "bangla" ? "সমাধান:" : "Solution:"}
                          </h3>
                          <Card className="bg-green-50 border-green-200">
                            <CardContent className="p-4">
                              <p className="text-lg whitespace-pre-line">{problem.solution}</p>
                            </CardContent>
                          </Card>
                        </div>
                      </>
                    )
                  })()}
                </CardContent>
              </Card>
            ) : (
              <Card className="text-center p-12">
                <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {language === "bangla" ? "একটি সমস্যা নির্বাচন করুন" : "Select a Problem"}
                </h3>
                <p className="text-muted-foreground">
                  {language === "bangla"
                    ? "বাম দিক থেকে একটি সমস্যা নির্বাচন করুন এবং সমাধান দেখুন"
                    : "Choose a problem from the left to view its solution"}
                </p>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
