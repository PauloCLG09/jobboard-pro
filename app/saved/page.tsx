"use client"

import { useJobContext } from "@/context/JobContext"
import JobCard from "../components/JobCard"
import Link from "next/link"

export default function SavedJobs() {
  const { savedJobs } = useJobContext()

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-6 text-white">Saved Jobs</h1>

      {savedJobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <h2 className="text-2xl font-semibold text-white mb-2">
            No saved jobs yet
          </h2>

          <p className="text-gray-400 mb-6 max-w-md">
            Start exploring jobs and save the ones you like to see them here.
          </p>

          <Link
            href="/"
            className="bg-indigo-500 px-5 py-2.5 rounded-lg text-white hover:bg-indigo-600 transition hover:scale-105 active:scale-95"
          >
            Browse Jobs →
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {savedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </main>
  )
}