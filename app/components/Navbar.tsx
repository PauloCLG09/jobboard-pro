"use client"

import Link from "next/link"
import { useJobContext } from "@/context/JobContext"

export default function Navbar() {
  const { savedJobs } = useJobContext()

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold">
        JobBoard
      </Link>

      <div className="flex gap-4 items-center">
        <Link
          href="/"
          className="hover:text-gray-300 transition"
        >
          Home
        </Link>

        <Link
          href="/saved"
          className="relative bg-green-500 px-3 py-1 rounded-lg hover:bg-green-600 transition flex items-center"
        >
          Saved Jobs
          {savedJobs.length > 0 && (
            <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              {savedJobs.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  )
}