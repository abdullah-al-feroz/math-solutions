"use client"

// export default function Loader() {
//   return (
//     <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
//       <div className="text-center">
//         <div className="loader mx-auto mb-4"></div>
//         <p className="text-lg font-medium text-foreground">Loading MathSolutions...</p>
//       </div>
//     </div>
//   )
// }

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-4 h-4 bg-primary rounded-full animate-bounce-gentle"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-heading font-bold text-primary animate-pulse">∑</span>
          </div>
        </div>
        <div className="text-center">
          <h3 className="font-heading font-semibold text-lg text-foreground">MathSolutions</h3>
          <p className="text-sm text-muted-foreground animate-pulse">Loading your study companion...</p>
        </div>
      </div>
    </div>
  )
}

