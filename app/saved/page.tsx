"use client"

import { useJobContext } from "@/context/JobContext"
import JobCard from "../components/JobCard"

export default function SavedJobsPage() {
  const { savedJobs } = useJobContext()

  if (savedJobs.length === 0) {
    return (
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Saved Jobs</h1>
        <p className="text-gray-600">You haven’t saved any jobs yet.</p>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Saved Jobs</h1>
      <div className="grid gap-6">
        {savedJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  )
}