import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, FileText, Award, Calendar } from "lucide-react"
import Advertisement from "@/components/advertisement"

export const metadata: Metadata = {
  title: "Results - HSC, SSC, JSC Results Bangladesh - MathSolutions",
  description: "Check HSC, SSC, JSC, and other examination results in Bangladesh. Get your results quickly and easily.",
  keywords: "HSC result, SSC result, JSC result, Bangladesh education board results, exam results BD",
}

export default function ResultPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Examination Results</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check your HSC, SSC, JSC, and other examination results from all education boards in Bangladesh
          </p>
        </div>

        <Advertisement size="leaderboard" className="mb-8" />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600 flex items-center gap-2">
                <Search className="h-6 w-6" />
                Check Your Result
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Examination</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select examination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hsc">HSC</SelectItem>
                        <SelectItem value="ssc">SSC</SelectItem>
                        <SelectItem value="jsc">JSC</SelectItem>
                        <SelectItem value="psc">PSC</SelectItem>
                        <SelectItem value="dakhil">Dakhil</SelectItem>
                        <SelectItem value="alim">Alim</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Year</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Board</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select board" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dhaka">Dhaka</SelectItem>
                        <SelectItem value="chittagong">Chittagong</SelectItem>
                        <SelectItem value="rajshahi">Rajshahi</SelectItem>
                        <SelectItem value="sylhet">Sylhet</SelectItem>
                        <SelectItem value="barisal">Barisal</SelectItem>
                        <SelectItem value="comilla">Comilla</SelectItem>
                        <SelectItem value="jessore">Jessore</SelectItem>
                        <SelectItem value="dinajpur">Dinajpur</SelectItem>
                        <SelectItem value="mymensingh">Mymensingh</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Roll Number</label>
                    <Input placeholder="Enter your roll number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Registration Number</label>
                    <Input placeholder="Enter your registration number" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
                    <Search className="h-4 w-4 mr-2" />
                    Get Result
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Advertisement size="banner" className="my-8" />

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-green-600 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  HSC Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Higher Secondary Certificate examination results from all boards</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Check HSC Result
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-blue-600 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  SSC Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Secondary School Certificate examination results</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Check SSC Result
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-purple-600 flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  JSC Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Junior School Certificate examination results</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Check JSC Result
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-600">Result Statistics 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">85.2%</div>
                  <div className="text-sm text-gray-600">HSC Pass Rate</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">89.1%</div>
                  <div className="text-sm text-gray-600">SSC Pass Rate</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">91.5%</div>
                  <div className="text-sm text-gray-600">JSC Pass Rate</div>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">1.2M+</div>
                  <div className="text-sm text-gray-600">Total Examinees</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 text-gray-600">
          <p>
            Developed by <span className="font-semibold text-blue-600">ZenByte Solutions</span>
          </p>
        </div>
      </div>
    </div>
  )
}
