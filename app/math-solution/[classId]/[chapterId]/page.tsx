import { notFound } from "next/navigation"
import Header from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Clock, AlertCircle, BookOpen } from "lucide-react"
import Link from "next/link"
import { promises as fs } from "fs"
import path from "path"

interface PageProps {
  params: {
    classId: string
    chapterId: string
  }
}

async function getChapterData(classId: string, chapterId: string) {
  try {
    const filePath = path.join(process.cwd(), "data", "math", `class${classId}-chapter${chapterId}.json`)
    const fileContents = await fs.readFile(filePath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    return null
  }
}

export async function generateStaticParams() {
  const params: { classId: string; chapterId: string }[] = []

  const knownChapters = [
    { classId: "1", chapterId: "1" },
    { classId: "6", chapterId: "1" },
    { classId: "8", chapterId: "2" },
  ]

  return knownChapters
}

export async function generateMetadata({ params }: PageProps) {
  const chapterData = await getChapterData(params.classId, params.chapterId)

  if (!chapterData) return { title: "Chapter Not Found" }

  return {
    title: `${chapterData.chapterName} - ${chapterData.className} - MathMentorBD`,
    description: `${chapterData.description}. Step-by-step solutions for real-world math problems.`,
  }
}

export default async function ChapterPage({ params }: PageProps) {
  const chapterData = await getChapterData(params.classId, params.chapterId)

  if (!chapterData) {
    notFound()
  }

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "medium":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "hard":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800 border-green-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "hard":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-green-100 text-green-800 border-green-200"
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb and Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <Button asChild variant="ghost" size="sm" className="mb-2">
                <Link href={`/math-solution/${params.classId}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to {chapterData.className}
                </Link>
              </Button>
              <div className="text-sm text-muted-foreground">
                <Link href="/math-solution" className="hover:text-primary">
                  Math Solutions
                </Link>{" "}
                /{" "}
                <Link href={`/math-solution/${params.classId}`} className="hover:text-primary">
                  {chapterData.className}
                </Link>{" "}
                / {chapterData.chapterName}
              </div>
            </div>
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{chapterData.chapterName}</h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">{chapterData.description}</p>
              <Badge variant="secondary" className="text-sm">
                {chapterData.problems.length} Real-World Problems with Solutions
              </Badge>
            </div>
          </div>
        </section>

        {/* Problems and Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {chapterData.problems.map((problem: any, index: number) => (
                <Card
                  key={problem.id}
                  className="animate-fade-in-up border-l-4 border-l-primary hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl text-foreground flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-lg font-bold">Problem {problem.id}</div>
                          <div className="text-sm text-muted-foreground font-normal">Math Number: {problem.id}</div>
                        </div>
                      </CardTitle>
                      <Badge className={`${getDifficultyColor(problem.difficulty)} border`}>
                        <div className="flex items-center gap-1">
                          {getDifficultyIcon(problem.difficulty)}
                          <span className="capitalize">{problem.difficulty}</span>
                        </div>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Question */}
                    <div className="bg-muted/30 rounded-lg p-6 border-l-4 border-l-blue-500">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs font-bold text-blue-600">
                          Q
                        </span>
                        Question:
                      </h4>
                      <p className="text-foreground text-lg leading-relaxed">{problem.question}</p>
                    </div>

                    {/* Solution Section */}
                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs font-bold text-green-600">
                          S
                        </span>
                        [Solution]
                      </h4>

                      {/* Step-by-Step Solution */}
                      <div className="space-y-4 mb-4">
                        {problem.steps.map((step: string, stepIndex: number) => (
                          <div key={stepIndex} className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center text-sm font-bold text-accent mt-0.5 flex-shrink-0">
                              {stepIndex + 1}
                            </div>
                            <p className="text-muted-foreground flex-1 leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>

                      {/* Final Answer */}
                      <div className="bg-white rounded-lg p-4 border border-green-300 mt-4">
                        <h5 className="font-semibold text-green-800 mb-2">Answer:</h5>
                        <p className="text-green-700 font-medium">{problem.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation */}
            <div className="mt-12 flex justify-between">
              <Button asChild variant="outline">
                <Link href={`/math-solution/${params.classId}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Chapters
                </Link>
              </Button>
              <Button asChild>
                <Link href="/math-solution">View All Classes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
