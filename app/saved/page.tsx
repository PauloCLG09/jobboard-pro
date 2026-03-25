"use client"

import { useJobContext } from "@/context/JobContext"
import JobCard from "../components/JobCard"

export default function SavedJobs() {
  const { savedJobs } = useJobContext()

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Saved Jobs</h1>

      {savedJobs.length === 0 ? (
        <p className="text-gray-500">No saved jobs yet.</p>
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