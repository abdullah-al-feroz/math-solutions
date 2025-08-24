"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import {
  GraduationCap,
  Search,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  DollarSign,
  ExternalLink,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  Building,
} from "lucide-react"
import Link from "next/link"
import collegesData from "@/data/colleges.json"

export default function CollegeAdmissionPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  const types = ["সব", "সরকারি", "বেসরকারি"]
  const locations = ["সব", "ঢাকা", "রাজশাহী", "চট্টগ্রাম", "সিলেট"]

  const filteredColleges = collegesData.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      college.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = !selectedType || selectedType === "সব" || college.type === selectedType
    const matchesLocation = !selectedLocation || selectedLocation === "সব" || college.location === selectedLocation
    return matchesSearch && matchesType && matchesLocation
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-primary text-primary-foreground p-4 rounded-full">
              <GraduationCap className="h-10 w-10" />
            </div>
            <h1 className="text-5xl font-bold text-foreground">কলেজ ভর্তি গাইড</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            বাংলাদেশের সেরা কলেজগুলোতে ভর্তির সম্পূর্ণ গাইড। ভর্তির প্রয়োজনীয় তথ্য, প্রক্রিয়া এবং প্রস্তুতির টিপস পান।
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex gap-2 mb-4">
              <Input
                type="text"
                placeholder="কলেজ খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-lg py-3"
              />
              <Button size="lg" className="px-8">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex gap-2">
                <span className="text-sm font-medium text-muted-foreground self-center">ধরন:</span>
                {types.map((type) => (
                  <Button
                    key={type}
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type === "সব" ? null : type)}
                    className="bg-transparent"
                  >
                    {type}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <span className="text-sm font-medium text-muted-foreground self-center">এলাকা:</span>
                {locations.map((location) => (
                  <Button
                    key={location}
                    variant={selectedLocation === location ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedLocation(location === "সব" ? null : location)}
                    className="bg-transparent"
                  >
                    {location}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Admission Timeline */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6" />
              ভর্তির সময়সূচি ২০২৪
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="font-semibold">আবেদন শুরু</h3>
                <p className="text-sm text-muted-foreground">জুন ১৫, ২০২৪</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold">ভর্তি পরীক্ষা</h3>
                <p className="text-sm text-muted-foreground">জুলাই ২০-৩০, ২০২৪</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Users className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                <h3 className="font-semibold">ফলাফল প্রকাশ</h3>
                <p className="text-sm text-muted-foreground">আগস্ট ১০, ২০২৪</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="font-semibold">ভর্তি সম্পন্ন</h3>
                <p className="text-sm text-muted-foreground">আগস্ট ৩১, ২০২৪</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advertisement Space */}
        <div className="mb-12">
          <Card className="bg-muted/30 border-dashed border-2 border-muted-foreground/20">
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground mb-2">Advertisement Space</p>
              <div className="h-20 bg-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-sm text-muted-foreground">728x90 Banner Ad</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredColleges.map((college) => (
            <Card key={college.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-xl mb-2">{college.name}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge variant={college.type === "সরকারি" ? "default" : "secondary"}>{college.type}</Badge>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {college.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        প্রতিষ্ঠিত {college.established}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{college.description}</p>
              </CardHeader>

              <CardContent>
                {/* Subjects */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">বিভাগসমূহ:</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.subjects.map((subject) => (
                      <Badge key={subject} variant="outline">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Admission Requirements */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">ভর্তির যোগ্যতা:</h4>
                  <div className="space-y-1 text-sm">
                    <p>• বিজ্ঞান: {college.admissionRequirements.science}</p>
                    <p>• মানবিক: {college.admissionRequirements.humanities}</p>
                    <p>• ব্যবসায়: {college.admissionRequirements.business}</p>
                  </div>
                </div>

                {/* Fees */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">ফি:</h4>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      ভর্তি: ৳{college.fees.admission}
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      মাসিক: ৳{college.fees.monthly}
                    </div>
                  </div>
                </div>

                {/* Contact & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {college.contact.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {college.contact.email}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(college.website, "_blank")}
                      className="bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      ওয়েবসাইট
                    </Button>
                    <Link href={`/college-admission/${college.id}`}>
                      <Button size="sm">বিস্তারিত</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredColleges.length === 0 && (
          <Card className="text-center p-12">
            <Building className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">কোন কলেজ পাওয়া যায়নি</h3>
            <p className="text-muted-foreground">আপনার অনুসন্ধানের জন্য কোন কলেজ পাওয়া যায়নি।</p>
          </Card>
        )}

        {/* Preparation Tips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>ভর্তি পরীক্ষার প্রস্তুতি</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">প্রস্তুতির কৌশল:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    এইচএসসি সিলেবাস ভালোভাবে পড়ুন
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    পূর্ববর্তী বছরের প্রশ্ন সমাধান করুন
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    নিয়মিত মডেল টেস্ট দিন
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    সময় ব্যবস্থাপনা অনুশীলন করুন
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">গুরুত্বপূর্ণ বিষয়:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                    গণিত ও ইংরেজিতে বেশি গুরুত্ব দিন
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                    সাধারণ জ্ঞান নিয়মিত পড়ুন
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                    বাংলা ব্যাকরণ ও সাহিত্য পড়ুন
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                    বিজ্ঞানের মূল বিষয়গুলো আয়ত্ত করুন
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
