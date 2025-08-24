// import type { Metadata } from "next"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Mail, Phone, MapPin, Clock } from "lucide-react"
// import Advertisement from "@/components/advertisement"

// export const metadata: Metadata = {
//   title: "Contact Us - MathSolutions",
//   description: "Get in touch with MathSolutions for educational support, feedback, or inquiries about our services.",
//   keywords: "contact MathSolutions, educational support, student help, feedback",
// }

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             We're here to help you with your educational journey. Reach out to us anytime!
//           </p>
//         </div>

//         <Advertisement size="leaderboard" className="mb-8" />

//         <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           <Card className="shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl text-blue-600">Send us a Message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Name</label>
//                     <Input placeholder="Your full name" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2">Email</label>
//                     <Input type="email" placeholder="your@email.com" />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Subject</label>
//                   <Input placeholder="What's this about?" />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium mb-2">Message</label>
//                   <Textarea placeholder="Tell us how we can help you..." rows={6} />
//                 </div>
//                 <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
//               </form>
//             </CardContent>
//           </Card>

//           <div className="space-y-6">
//             <Card className="shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-2xl text-green-600">Get in Touch</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-center space-x-3">
//                   <Mail className="h-5 w-5 text-blue-600" />
//                   <span>support@MathSolutions.com</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Phone className="h-5 w-5 text-blue-600" />
//                   <span>+880 1XXX-XXXXXX</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <MapPin className="h-5 w-5 text-blue-600" />
//                   <span>Dhaka, Bangladesh</span>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Clock className="h-5 w-5 text-blue-600" />
//                   <span>24/7 Online Support</span>
//                 </div>
//               </CardContent>
//             </Card>

//             <Advertisement size="square" />

//             <Card className="shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-xl text-purple-600">Follow Us</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex space-x-4">
//                   <Button variant="outline" size="sm">
//                     Facebook
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     YouTube
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     Telegram
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         <div className="text-center mt-12 text-gray-600">
//           <p>
//             Developed by <span className="font-semibold text-blue-600">ZenByte Solutions</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

import Navigation from "@/components/navigation"
import NoticeBanner from "@/components/notice-banner"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <NoticeBanner />
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Get in{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our educational resources? Need help with your studies? We're here to support your
              learning journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h2 className="font-heading font-bold text-2xl mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-muted-foreground">+880 1234-567890</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">info@MathSolutions.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Support Hours</h3>
                        <p className="text-muted-foreground">9:00 AM - 6:00 PM (Sat-Thu)</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

