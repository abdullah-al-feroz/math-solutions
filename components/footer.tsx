import Link from "next/link"
import { Calculator, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <Calculator className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">MathSolutions</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your ultimate educational companion for Bangladeshi students. Complete solutions for math, books, and
              academic guidance.
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/math-solutions"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Math Solutions
              </Link>
              <Link
                href="/pdf-books"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                PDF Books
              </Link>
              <Link
                href="/college-admission"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                College Admission
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          {/* Academic Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Academic Resources</h3>
            <div className="space-y-2">
              <Link
                href="/result"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Results
              </Link>
              <Link
                href="/university-admission"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                University Admission
              </Link>
              <Link
                href="/notice"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Notices
              </Link>
              <Link
                href="/products"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Educational Products
              </Link>
              <Link
                href="/contact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get the latest educational content and updates.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" className="bg-background" />
              <Button className="w-full">Subscribe</Button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                info@MathSolutions.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                +880 1234-567890
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Dhaka, Bangladesh
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 MathSolutions. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <p className="text-sm text-muted-foreground">
              Developed by <span className="font-medium text-primary">ZenByte Solutions</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
