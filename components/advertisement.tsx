import Image from "next/image"

interface AdProps {
  size: "banner" | "square" | "leaderboard" | "sidebar"
  className?: string
}

export default function Advertisement({ size, className = "" }: AdProps) {
  const adSizes = {
    banner: { width: 728, height: 90, label: "728x90 Banner" },
    square: { width: 300, height: 250, label: "300x250 Square" },
    leaderboard: { width: 970, height: 250, label: "970x250 Leaderboard" },
    sidebar: { width: 160, height: 600, label: "160x600 Sidebar" },
  }

  const { width, height, label } = adSizes[size]

  return (
    <div className={`flex items-center justify-center bg-gray-100 border border-gray-200 rounded-lg ${className}`}>
      <div className="text-center p-4">
        <Image
          src={`/generic-placeholder-icon.png?height=${height}&width=${width}&query=AdSense advertisement placeholder ${label}`}
          alt={`Advertisement ${label}`}
          width={width}
          height={height}
          className="mx-auto mb-2 rounded"
        />
        <p className="text-xs text-gray-500">Advertisement</p>
      </div>
    </div>
  )
}
