"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import NoticeBanner from "@/components/notice-banner"
import Loader from "@/components/loader"
import { Calculator, GraduationCap, FileText, TrendingUp, BookOpen, ShoppingCart, Bell, PenTool } from "lucide-react"
import Link from "next/link"

// Import JSON data
import noticesData from "@/data/notices.json"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  const features = [
    {
      icon: Calculator,
      title: "Math Solutions",
      description: "Step-by-step solutions for all classes",
      href: "/math-solution",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: FileText,
      title: "PDF Books",
      description: "Comprehensive book collection",
      href: "/pdf-books",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: GraduationCap,
      title: "Admissions",
      description: "College & university guidance",
      href: "/college-admission",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "Track your academic progress",
      href: "/result",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ]

  const quickAccessFeatures = [
    {
      icon: Calculator,
      title: "Math Solutions",
      description: "Solve problems step by step",
      href: "/math-solution",
      bgColor: "bg-blue-500",
      iconColor: "text-white",
    },
    {
      icon: BookOpen,
      title: "PDF Books",
      description: "Download study materials",
      href: "/pdf-books",
      bgColor: "bg-green-500",
      iconColor: "text-white",
    },
    {
      icon: GraduationCap,
      title: "College Admission",
      description: "Get admission guidance",
      href: "/college-admission",
      bgColor: "bg-purple-500",
      iconColor: "text-white",
    },
    {
      icon: PenTool,
      title: "University Admission",
      description: "University preparation",
      href: "/university-admission",
      bgColor: "bg-orange-500",
      iconColor: "text-white",
    },
    {
      icon: TrendingUp,
      title: "Results",
      description: "Check exam results",
      href: "/result",
      bgColor: "bg-pink-500",
      iconColor: "text-white",
    },
    {
      icon: FileText,
      title: "Blog",
      description: "Educational articles",
      href: "/blog",
      bgColor: "bg-blue-600",
      iconColor: "text-white",
    },
    {
      icon: ShoppingCart,
      title: "Products",
      description: "Educational materials",
      href: "/products",
      bgColor: "bg-teal-500",
      iconColor: "text-white",
    },
    {
      icon: Bell,
      title: "Notices",
      description: "Important announcements",
      href: "/notice",
      bgColor: "bg-orange-600",
      iconColor: "text-white",
    },
  ]

  const stats = [
    { label: "Classes Covered", value: "10+", color: "text-blue-600" },
    { label: "PDF Books", value: "500+", color: "text-orange-500" },
    { label: "Solutions", value: "1000+", color: "text-blue-600" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notice Banner */}
        <div className="py-2">
          <NoticeBanner notices={noticesData} />
        </div>

        {/* Hero Section */}
        <section className="py-16 animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Your Ultimate</h1>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-blue-600">Study </span>
                <span className="text-gray-500">Companion</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Master mathematics, access thousands of PDF books, get admission guidance, and excel in your academic
                journey with MathSolutions.
              </p>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-12">
                <Button asChild size="lg" className="font-medium animate-bounce-gentle bg-blue-600 hover:bg-blue-700" >
                  <Link href="/math-solution">Start Learning Math</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-medium bg-transparent">
                  <Link href="/pdf-books">Browse Books</Link>
                </Button>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-medium animate-bounce-gentle">
                <Link href="/math-solution">Start Learning Math</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-medium bg-transparent">
                <Link href="/pdf-books">Browse Books</Link>
              </Button>
            </div> */}

              {/* Stats Section */}
              <div className="flex gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <Link key={index} href={feature.href}>
                    <Card
                      className={`${feature.bgColor} border-0 hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full`}
                    >
                      <CardContent className="p-6">
                        <div
                          className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}
                        >
                          <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                        </div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Advertisement Space */}
        <div className="mb-12">
          <Card className="bg-muted/30 border-dashed border-2 border-muted-foreground/20">
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Advertisement Space - AdSense Integration</p>
              <div className="h-24 bg-muted/50 rounded-lg mt-4 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">728x90 Banner Ad</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="py-16 bg-gray-50 rounded-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Quick Access to <span className="text-gray-500">Everything</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access all educational resources, tools, and guidance you need for academic success in one place.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {quickAccessFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link key={index} href={feature.href}>
                  <Card className="bg-white border-0 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`h-8 w-8 ${feature.iconColor}`} />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Explore
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        {/* Advertisement Space */}
        <div className="mb-12">
          <Card className="bg-muted/30 border-dashed border-2 border-muted-foreground/20">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-4">Advertisement Space - AdSense Integration</p>
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
