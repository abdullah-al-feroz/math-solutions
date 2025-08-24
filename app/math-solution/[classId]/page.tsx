import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, FileText } from "lucide-react"
import Link from "next/link"
import contentData from "@/data/content.json"

interface PageProps {
  params: {
    classId: string
  }
  searchParams: {
    lang?: string
  }
}

export function generateStaticParams() {
  return contentData.mathSolutions.classes.map((classItem) => ({
    classId: classItem.id.toString(),
  }))
}

export function generateMetadata({ params }: PageProps) {
  const classItem = contentData.mathSolutions.classes.find((c) => c.id.toString() === params.classId)
  if (!classItem) return { title: "Class Not Found" }

  return {
    title: `${classItem.name} Math Solutions - MathMentorBD`,
    description: `${classItem.description}. Access chapter-wise math solutions with step-by-step explanations.`,
  }
}

export default function ClassPage({ params, searchParams }: PageProps) {
  const classItem = contentData.mathSolutions.classes.find((c) => c.id.toString() === params.classId)
  const language = searchParams.lang || "english"

  if (!classItem) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Breadcrumb and Header */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8">
              <Button asChild variant="ghost" size="sm" className="mb-4">
                <Link href="/math-solution">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {language === "bangla" ? "সকল শ্রেণিতে ফিরে যান" : "Back to All Classes"}
                </Link>
              </Button>
            </div>
            <div className="text-center animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <Badge variant="outline" className="text-sm">
                  {language === "bangla" ? "🇧🇩 বাংলা ভার্সন" : "🇺🇸 English Version"}
                </Badge>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                {language === "bangla" ? (
                  <>
                    শ্রেণি {classItem.id} <span className="text-primary">সমাধান</span>
                  </>
                ) : (
                  <>
                    {classItem.name} <span className="text-primary">Solutions</span>
                  </>
                )}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
                {language === "bangla"
                  ? `শ্রেণি ${classItem.id} এর সম্পূর্ণ গণিত সমাধান এবং অধ্যায়ভিত্তিক ব্যাখ্যা`
                  : classItem.description}
              </p>
              <div className="flex justify-center gap-4">
                <Badge variant="secondary" className="text-sm">
                  {language === "bangla"
                    ? `${classItem.chapters.length} টি অধ্যায় উপলব্ধ`
                    : `${classItem.chapters.length} Chapters Available`}
                </Badge>
                <Badge variant="outline" className="text-sm">
                  {language === "bangla"
                    ? `মোট ${classItem.chapters.reduce((total, chapter) => total + chapter.problems.length, 0)} টি সমস্যা`
                    : `${classItem.chapters.reduce((total, chapter) => total + chapter.problems.length, 0)} Total Problems`}
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Chapters Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {classItem.chapters.map((chapter, index) => (
                <Link key={chapter.id} href={`/math-solution/${params.classId}/${chapter.id}?lang=${language}`}>
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-0 bg-card/50 backdrop-blur-sm h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {language === "bangla" ? `অধ্যায় ${chapter.id}` : `Chapter ${chapter.id}`}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors leading-tight">
                        {language === "bangla" ? `অধ্যায় ${chapter.id}: ${chapter.name}` : chapter.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {language === "bangla"
                          ? `এই অধ্যায়ে ${chapter.problems.length} টি সমস্যার সমাধান রয়েছে`
                          : chapter.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          <span>
                            {language === "bangla"
                              ? `${chapter.problems.length} টি সমস্যা`
                              : `${chapter.problems.length} Problems`}
                          </span>
                        </div>
                        <div className="flex gap-1">
                          {chapter.problems.map((problem) => (
                            <div
                              key={problem.id}
                              className={`w-2 h-2 rounded-full ${problem.difficulty === "easy"
                                  ? "bg-green-500"
                                  : problem.difficulty === "medium"
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Coming Soon Chapters */}
            {classItem.totalChapters > classItem.chapters.length && (
              <div className="mt-12 text-center">
                <div className="bg-muted/50 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {language === "bangla" ? "আরও অধ্যায় শীঘ্রই আসছে!" : "More Chapters Coming Soon!"}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {language === "bangla"
                      ? `আমরা শ্রেণি ${classItem.id} এর জন্য আরও ${classItem.totalChapters - classItem.chapters.length} টি অধ্যায় যোগ করার কাজ করছি।`
                      : `We're working on adding ${classItem.totalChapters - classItem.chapters.length} more chapters for ${classItem.name}.`}
                  </p>
                  <Badge variant="outline">
                    {language === "bangla"
                      ? `${classItem.chapters.length} টি অধ্যায় ${classItem.totalChapters} টির মধ্যে উপলব্ধ`
                      : `${classItem.chapters.length} of ${classItem.totalChapters} chapters available`}
                  </Badge>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
