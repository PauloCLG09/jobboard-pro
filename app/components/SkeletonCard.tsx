"use client"

export default function SkeletonCard() {
  return (
    <div className="border rounded-xl p-5 shadow-sm bg-white animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="flex gap-3 mb-2">
        <div className="h-3 bg-gray-300 rounded w-1/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/4"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mt-2"></div>
      <div className="mt-4 flex gap-2">
        <div className="h-8 bg-gray-300 rounded w-20"></div>
        <div className="h-8 bg-gray-300 rounded w-20"></div>
      </div>
    </div>
  )
}