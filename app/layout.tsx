import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "MathSolutions - Your Ultimate Educational Companion",
  description:
    "Complete educational solution for Bangladeshi students with math solutions, PDF books, college admission guidance, university admission, results, and educational products.",
  keywords:
    "math solutions Bangladesh, PDF books download, college admission BD, university admission, HSC results, SSC results, educational products, study materials Bangladesh, math mentor, online education BD",
  authors: [{ name: "ZenByte Solutions" }],
  creator: "ZenByte Solutions",
  publisher: "ZenByte Solutions",
  robots: "index, follow",
  metadataBase: new URL("https://mathsolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MathSolutions - Your Ultimate Educational Companion",
    description:
      "Complete educational solution for Bangladeshi students with math solutions, PDF books, college admission guidance, and more.",
    type: "website",
    locale: "en_US",
    url: "https://MathSolutions.com",
    siteName: "MathSolutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MathSolutions - Educational Platform for Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MathSolutions - Your Ultimate Educational Companion",
    description: "Complete educational solution for Bangladeshi students",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "MathSolutions",
              description: "Complete educational solution for Bangladeshi students",
              url: "https://MathSolutions.com",
              logo: "https://MathSolutions.com/logo.png",
              sameAs: ["https://facebook.com/MathSolutions", "https://twitter.com/MathSolutions"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "BD",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  )
}
