"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Calculator,
  BookOpen,
  Users,
  Globe,
  Baby,
  Smile,
  Heart,
  Star,
  Zap,
  Crown,
  Trophy,
  Rocket,
  Diamond,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import contentData from "@/data/content.json"

export default function MathSolutionClient() {
  debugger
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const classes = contentData.mathSolutions.classes

  const classIcons = [
    { icon: Baby, color: "bg-pink-100 text-pink-600", hoverColor: "hover:bg-pink-200" },
    { icon: Smile, color: "bg-blue-100 text-blue-600", hoverColor: "hover:bg-blue-200" },
    { icon: Heart, color: "bg-red-100 text-red-600", hoverColor: "hover:bg-red-200" },
    { icon: Star, color: "bg-yellow-100 text-yellow-600", hoverColor: "hover:bg-yellow-200" },
    { icon: Zap, color: "bg-purple-100 text-purple-600", hoverColor: "hover:bg-purple-200" },
    { icon: Crown, color: "bg-indigo-100 text-indigo-600", hoverColor: "hover:bg-indigo-200" },
    { icon: Trophy, color: "bg-green-100 text-green-600", hoverColor: "hover:bg-green-200" },
    { icon: Rocket, color: "bg-orange-100 text-orange-600", hoverColor: "hover:bg-orange-200" },
    { icon: Diamond, color: "bg-cyan-100 text-cyan-600", hoverColor: "hover:bg-cyan-200" },
    { icon: Sparkles, color: "bg-emerald-100 text-emerald-600", hoverColor: "hover:bg-emerald-200" },
  ]

  // Language Selection Section
  if (!selectedLanguage) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
          <section className="bg-gradient-to-br from-blue-100/50 via-white to-yellow-100/50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce shadow-lg">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
                Choose Your{" "}
                <span className="bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
                  Language
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in-up">
                Select your preferred language to access math solutions tailored for you
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <Card
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer border-2 hover:border-blue-300 animate-fade-in-up bg-gradient-to-br from-blue-50 to-white"
                  onClick={() => setSelectedLanguage("bangla")}
                >
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl font-bold text-white">বাং</span>
                    </div>
                    <CardTitle className="text-2xl text-gray-800 group-hover:text-blue-600 transition-colors">
                      বাংলা ভার্সন
                    </CardTitle>
                    <p className="text-gray-600">Bangla Version</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6">বাংলা ভাষায় গণিতের সমাধান দেখুন</p>
                    <Button className="w-full group-hover:scale-105 transition-transform bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
                      বাংলা নির্বাচন করুন
                    </Button>
                  </CardContent>
                </Card>

                <Card
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer border-2 hover:border-yellow-300 animate-fade-in-up bg-gradient-to-br from-yellow-50 to-white"
                  onClick={() => setSelectedLanguage("english")}
                >
                  <CardHeader className="text-center pb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl font-bold text-white">EN</span>
                    </div>
                    <CardTitle className="text-2xl text-gray-800 group-hover:text-yellow-600 transition-colors">
                      English Version
                    </CardTitle>
                    <p className="text-gray-600">ইংরেজি ভার্সন</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6">Access math solutions in English language</p>
                    <Button className="w-full group-hover:scale-105 transition-transform bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white">
                      Select English
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12 flex justify-center gap-8 text-center animate-fade-in-up">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Calculator className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">1000+ Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">All Chapters</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">Expert Solutions</span>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <section className="bg-gradient-to-br from-blue-100/30 via-white to-yellow-100/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            {/* Language Indicator and Back Button */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <Badge
                className={`text-sm ${selectedLanguage === "bangla" ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white" : "bg-gradient-to-r from-yellow-500 to-yellow-600 text-white"}`}
              >
                {selectedLanguage === "bangla" ? "🇧🇩 বাংলা ভার্সন" : "🇺🇸 English Version"}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedLanguage(null)}
                className="text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              >
                Change Language
              </Button>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              {selectedLanguage === "bangla" ? (
                <>
                  গণিত{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
                    সমাধান
                  </span>
                </>
              ) : (
                <>
                  Math{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-yellow-600 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up">
              {selectedLanguage === "bangla"
                ? "সকল শ্রেণির জন্য ধাপে ধাপে গণিতের সমাধান। আপনার শ্রেণি নির্বাচন করুন এবং অধ্যায়ভিত্তিক সমাধান দেখুন।"
                : "Comprehensive step-by-step math solutions for all classes. Choose your class to explore chapter-wise solutions."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {classes.map((classItem, index) => {
                const IconComponent = classIcons[index]?.icon || Calculator
                const iconColor = classIcons[index]?.color || "bg-blue-100 text-blue-600"
                const hoverColor = classIcons[index]?.hoverColor || "hover:bg-blue-200"

                return (
                  <Link key={classItem.id} href={`/math-solution/${classItem.id}?lang=${selectedLanguage}`}>
                    <Card
                      className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-0 bg-white/80 backdrop-blur-sm h-full ${hoverColor}`}
                    >
                      <CardHeader className="text-center pb-4">
                        <div
                          className={`w-16 h-16 ${iconColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-xl text-gray-800 group-hover:text-gray-900 transition-colors">
                          {selectedLanguage === "bangla" ? `শ্রেণি ${classItem.id}` : classItem.name}
                        </CardTitle>
                        <Badge variant="secondary" className="w-fit mx-auto bg-gray-100 text-gray-700">
                          {selectedLanguage === "bangla"
                            ? `${classItem.totalChapters} টি অধ্যায়`
                            : `${classItem.totalChapters} Chapters`}
                        </Badge>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {selectedLanguage === "bangla" ? `শ্রেণি ${classItem.id} এর গণিত সমাধান` : classItem.description}
                        </p>
                        <div className="text-xs text-gray-500 font-medium">
                          {classItem.chapters.reduce((total, chapter) => total + chapter.problems.length, 0)}
                          {selectedLanguage === "bangla" ? " টি সমস্যা উপলব্ধ" : " Problems Available"}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50/50 to-yellow-50/50">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {selectedLanguage === "bangla" ? "কেন আমাদের গণিত সমাধান বেছে নিবেন?" : "Why Choose Our Math Solutions?"}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {selectedLanguage === "bangla"
                  ? "আমাদের সমাধানগুলি শিক্ষার্থীদের ধারণা স্পষ্টভাবে বুঝতে এবং আত্মবিশ্বাসের সাথে সমস্যা সমাধান করতে সাহায্য করার জন্য ডিজাইন করা হয়েছে।"
                  : "Our solutions are designed to help students understand concepts clearly and solve problems confidently."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Calculator className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {selectedLanguage === "bangla" ? "ধাপে ধাপে সমাধান" : "Step-by-Step Solutions"}
                </h3>
                <p className="text-gray-600">
                  {selectedLanguage === "bangla"
                    ? "প্রতিটি সমস্যার বিস্তারিত ধাপে ধাপে সমাধান প্রদান করা হয়।"
                    : "Every problem is solved with detailed steps to help you understand the process."}
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {selectedLanguage === "bangla" ? "কারিকুলাম অনুযায়ী" : "Curriculum Aligned"}
                </h3>
                <p className="text-gray-600">
                  {selectedLanguage === "bangla"
                    ? "বাংলাদেশের সর্বশেষ শিক্ষা কারিকুলাম অনুসরণ করে প্রস্তুত।"
                    : "All solutions follow the latest Bangladesh education curriculum and syllabus."}
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {selectedLanguage === "bangla" ? "বিশেষজ্ঞ যাচাইকৃত" : "Expert Verified"}
                </h3>
                <p className="text-gray-600">
                  {selectedLanguage === "bangla"
                    ? "অভিজ্ঞ গণিত শিক্ষকদের দ্বারা প্রস্তুত ও যাচাইকৃত সমাধান।"
                    : "All solutions are prepared and verified by experienced mathematics teachers."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
