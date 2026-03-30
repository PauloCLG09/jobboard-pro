"use client"

import Link from "next/link"
import { useJobContext } from "@/context/JobContext"

export default function Navbar() {
  const { savedJobs } = useJobContext()

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 px-8 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold tracking-tight text-white">
        JobBoard<span className="text-indigo-400">Pro</span>
      </Link>

      <div className="flex gap-4 items-center">
        <Link href="/" className="text-gray-300 hover:text-white transition">
          Home
        </Link>
        <Link
          href="/saved"
          className="relative text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 hover:scale-105 active:scale-95 transition cursor-pointer"
        >
          Saved Jobs

          {savedJobs.length > 0 && (
            <span className="absolute -top-1 -left-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          )}
        </Link>
      </div>
    </nav>
  )
}