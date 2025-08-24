"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Navigation from "@/components/navigation"
import {
  Search,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  DollarSign,
  ExternalLink,
  Phone,
  Mail,
  Building2,
  Award,
  Target,
} from "lucide-react"
import Link from "next/link"
import universitiesData from "@/data/universities.json"

export default function UniversityAdmissionPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const types = ["সব", "সরকারি", "বেসরকারি"]

  const filteredUniversities = universitiesData.filter((university) => {
    const matchesSearch =
      university.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      university.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = !selectedType || selectedType === "সব" || university.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-primary text-primary-foreground p-4 rounded-full">
              <Building2 className="h-10 w-10" />
            </div>
            <h1 className="text-5xl font-bold text-foreground">বিশ্ববিদ্যালয় ভর্তি গাইড</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            বাংলাদেশের শীর্ষ বিশ্ববিদ্যালয়গুলোতে ভর্তির সম্পূর্ণ গাইড। ভর্তি প্রক্রিয়া, প্রয়োজনীয় যোগ্যতা এবং
            প্রস্তুতির কৌশল জানুন।
          </p>

          {/* Search and Filter */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex gap-2 mb-4">
              <Input
                type="text"
                placeholder="বিশ্ববিদ্যালয় খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="text-lg py-3"
              />
              <Button size="lg" className="px-8">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            {/* Type Filter */}
            <div className="flex gap-2 justify-center">
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
          </div>
        </div>

        {/* University Admission Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary">৫০+</h3>
            <p className="text-sm text-muted-foreground">সরকারি বিশ্ববিদ্যালয়</p>
          </Card>
          <Card className="text-center p-6">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary">১০ লক্ষ+</h3>
            <p className="text-sm text-muted-foreground">আবেদনকারী</p>
          </Card>
          <Card className="text-center p-6">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary">৮%</h3>
            <p className="text-sm text-muted-foreground">গড় সফলতার হার</p>
          </Card>
          <Card className="text-center p-6">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary">৯৫%</h3>
            <p className="text-sm text-muted-foreground">চাকরির হার</p>
          </Card>
        </div>

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

        {/* Universities Grid */}
        <div className="space-y-8 mb-12">
          {filteredUniversities.map((university) => (
            <Card key={university.id} className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">{university.name}</CardTitle>
                      <Badge variant={university.type === "সরকারি" ? "default" : "secondary"}>
                        {university.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {university.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        প্রতিষ্ঠিত {university.established}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{university.description}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    {/* Faculties */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        অনুষদসমূহ:
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {university.faculties.map((faculty) => (
                          <Badge key={faculty} variant="outline" className="justify-start">
                            {faculty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Admission Requirements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">ভর্তির যোগ্যতা:</h4>
                      <div className="space-y-2 text-sm">
                        {Object.entries(university.admissionRequirements).map(([key, value]) => (
                          <p key={key}>
                            • <span className="font-medium">{key === "general" ? "সাধারণ" : key}:</span> {value}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    {/* Admission Process */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">ভর্তি প্রক্রিয়া:</h4>
                      <div className="space-y-2">
                        {university.admissionProcess.map((step, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </div>
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fees */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <DollarSign className="h-5 w-5" />
                        ফি:
                      </h4>
                      <div className="space-y-1 text-sm">
                        <p>• ভর্তি ফি: ৳{university.fees.admission}</p>
                        <p>• সেমিস্টার ফি: ৳{university.fees.semester}</p>
                        <p>• আবাসিক ফি: ৳{university.fees.residential}</p>
                      </div>
                    </div>

                    {/* Facilities */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">সুবিধাসমূহ:</h4>
                      <div className="flex flex-wrap gap-2">
                        {university.facilities.map((facility) => (
                          <Badge key={facility} variant="secondary">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact & Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {university.contact.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      {university.contact.email}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(university.website, "_blank")}
                      className="bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      ওয়েবসাইট
                    </Button>
                    <Link href={`/university-admission/${university.id}`}>
                      <Button size="sm">বিস্তারিত</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {/* {filteredUniversities.length === 0 && (
          <Card className="text-center p-12">
            <Building2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">কোন বিশ্ববিদ্যালয় পাওয়া যায়নি</h3>
            <p className="text-muted-foreground">আপন </p>
          </Card> */}
      </main>
    </div>)};
