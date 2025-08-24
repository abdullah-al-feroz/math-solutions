// import type { Metadata } from "next"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import Advertisement from "@/components/advertisement"

// export const metadata: Metadata = {
//   title: "Terms and Conditions - MathSolutionsBD",
//   description: "Read the terms and conditions for using MathSolutionsBD educational platform and services.",
//   keywords: "terms conditions MathSolutionsBD, privacy policy, user agreement",
// }

// export default function TermsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
//           <p className="text-xl text-gray-600">Last updated: January 2025</p>
//         </div>

//         <Advertisement size="leaderboard" className="mb-8" />

//         <div className="max-w-4xl mx-auto space-y-8">
//           <Card className="shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl text-blue-600">1. Acceptance of Terms</CardTitle>
//             </CardHeader>
//             <CardContent className="prose max-w-none">
//               <p>
//                 By accessing and using MathSolutionsBD, you accept and agree to be bound by the terms and provision of this
//                 agreement. If you do not agree to abide by the above, please do not use this service.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl text-green-600">2. Use License</CardTitle>
//             </CardHeader>
//             <CardContent className="prose max-w-none">
//               <p>
//                 Permission is granted to temporarily download one copy of the materials on MathSolutionsBD for personal,
//                 non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
//                 under this license you may not:
//               </p>
//               <ul className="list-disc pl-6 mt-4 space-y-2">
//                 <li>modify or copy the materials</li>
//                 <li>use the materials for any commercial purpose or for any public display</li>
//                 <li>attempt to reverse engineer any software contained on the website</li>
//                 <li>remove any copyright or other proprietary notations from the materials</li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Advertisement size="banner" className="my-8" />

//           <Card className="shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl text-purple-600">3. Educational Content</CardTitle>
//             </CardHeader>
//             <CardContent className="prose max-w-none">
//               <p>
//                 All educational materials, including math solutions, PDF books, and study guides, are provided for
//                 educational purposes only. While we strive for accuracy, we cannot guarantee that all content is
//                 error-free or up-to-date.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl text-orange-600">4. User Responsibilities</CardTitle>
//             </CardHeader>
//             <CardContent className="prose max-w-none">
//               <p>Users are responsible for:</p>
//               <ul className="list-disc pl-6 mt-4 space-y-2">
//                 <li>Using the platform responsibly and ethically</li>
//                 <li>Not sharing copyrighted materials without permission</li>
//                 <li>Respecting other users and maintaining appropriate conduct</li>
//                 <li>Providing accurate information when required</li>
//               </ul>
//             </CardContent>
//           </Card>

//           <Card className="shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl text-red-600">5. Privacy Policy</CardTitle>
//             </CardHeader>
//             <CardContent className="prose max-w-none">
//               <p>
//                 Your privacy is important to us. We collect minimal personal information and use it only to improve our
//                 services. We do not sell or share your personal information with third parties without your consent.
//               </p>
//             </CardContent>
//           </Card>

//           <Card className="shadow-lg">
//             <CardHeader>
//               <CardTitle className="text-2xl text-teal-600">6. Contact Information</CardTitle>
//             </CardHeader>
//             <CardContent className="prose max-w-none">
//               <p>
//                 If you have any questions about these Terms and Conditions, please contact us at
//                 support@MathSolutionsbd.com or visit our contact page.
//               </p>
//             </CardContent>
//           </Card>
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
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <NoticeBanner />
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Terms &{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our educational platform and services.
            </p>
          </div>

          <Card className="animate-fade-in-up">
            <CardContent className="p-8 space-y-8">
              <section className="space-y-4">
                <h2 className="font-heading font-bold text-2xl text-primary">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using MathSolutionsBD, you accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading font-bold text-2xl text-primary">2. Use License</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Permission is granted to temporarily download one copy of the materials on MathSolutionsBD's website for
                  personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                  title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading font-bold text-2xl text-primary">3. Educational Content</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All educational materials, including but not limited to math solutions, PDF books, study guides, and
                  practice problems, are provided for educational purposes only. While we strive for accuracy, we do not
                  guarantee that all content is error-free or complete.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading font-bold text-2xl text-primary">4. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">Users are responsible for:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Using the platform in accordance with applicable laws and regulations</li>
                  <li>Respecting intellectual property rights</li>
                  <li>Not sharing login credentials with others</li>
                  <li>Reporting any technical issues or content errors</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading font-bold text-2xl text-primary">5. Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. We collect and use personal information only as necessary to provide
                  our educational services. We do not sell, trade, or otherwise transfer your personal information to
                  third parties without your consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading font-bold text-2xl text-primary">6. Disclaimer</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The materials on MathSolutionsBD's website are provided on an 'as is' basis. MathSolutionsBD makes no
                  warranties, expressed or implied, and hereby disclaims and negates all other warranties including
                  without limitation, implied warranties or conditions of merchantability, fitness for a particular
                  purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading font-bold text-2xl text-primary">7. Limitations</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In no event shall MathSolutionsBD or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on MathSolutionsBD's website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading font-bold text-2xl text-primary">8. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Email:</strong> info@MathSolutionsbd.com
                    <br />
                    <strong>Phone:</strong> +880 1234-567890
                    <br />
                    <strong>Address:</strong> Dhaka, Bangladesh
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="font-heading font-bold text-2xl text-primary">9. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MathSolutionsBD reserves the right to revise these terms and conditions at any time without notice. By
                  using this website, you are agreeing to be bound by the then current version of these terms and
                  conditions.
                </p>
              </section>

              <div className="border-t border-border pt-6 mt-8">
                <p className="text-sm text-muted-foreground text-center">
                  Last updated: December 16, 2024
                  <br />
                  Developed by <span className="text-primary font-medium">ZenByteSolutions</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}

