"use client"

// import { useState, useEffect } from "react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { X } from "lucide-react"
// import Link from "next/link"

// interface Notice {
//   id: number
//   title: string
//   content: string
//   date: string
//   priority: "high" | "medium" | "low"
// }

// interface NoticeBannerProps {
//   notices: Notice[]
// }

// export default function NoticeBanner({ notices }: NoticeBannerProps) {
//   const [currentNotice, setCurrentNotice] = useState(0)
//   const [isVisible, setIsVisible] = useState(true)

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentNotice((prev) => (prev + 1) % notices.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [notices.length])

//   if (!notices.length || !isVisible) return null

//   const notice = notices[currentNotice]

//   return (
//     <Card className="bg-blue-600 text-white border-0 shadow-sm">
//       <div className="flex items-center justify-between px-4 py-1.5">
//         <div className="flex items-center gap-3 min-w-0 flex-1">
//           <div className="bg-white text-blue-600 px-2 py-0.5 rounded text-xs font-medium">{notice.date}</div>
//           <div className="min-w-0 flex-1">
//             <Link href="/notice" className="hover:underline">
//               <span className="text-sm font-medium cursor-pointer">{notice.title}</span>
//             </Link>
//           </div>
//         </div>
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => setIsVisible(false)}
//           className="text-white hover:bg-white/20 h-6 w-6 p-0 ml-2"
//         >
//           <X className="h-4 w-4" />
//         </Button>
//       </div>
//     </Card>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import notices from "@/data/notices.json"

export default function NoticeBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentNotice, setCurrentNotice] = useState(0)

  const recentNotices = notices.filter((notice) => notice.isRecent)

  useEffect(() => {
    if (recentNotices.length > 1) {
      const interval = setInterval(() => {
        setCurrentNotice((prev) => (prev + 1) % recentNotices.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [recentNotices.length])

  if (!isVisible || recentNotices.length === 0) return null

  const notice = recentNotices[currentNotice]

  return (
    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="flex-shrink-0 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium animate-pulse">
              {new Date(notice.date).toLocaleDateString("en-GB")}
            </div>

            <div className="min-w-0 flex-1 overflow-hidden">
              <p className="text-sm font-medium text-foreground animate-slide-in truncate">{notice.title}</p>
            </div>
          </div>

          <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)} className="flex-shrink-0 h-6 w-6 p-0">
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}
