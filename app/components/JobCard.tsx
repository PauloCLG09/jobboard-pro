"use client"

import Link from "next/link"
import { IJob } from "@/types"
import { useJobs } from "@/context/JobContext"

interface Props {
  job: IJob
}

export default function JobCard({ job }: Props) {
  const { saveJob, removeJob, isSaved } = useJobs()
  const saved = isSaved(job.id)

  return (
    <div className="border rounded-xl p-5 shadow-sm hover:shadow-md transition bg-white">
      <h2 className="text-xl font-semibold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>

      <div className="flex gap-3 mt-2 text-sm text-gray-500">
        <span>{job.location}</span>
        <span>•</span>
        <span>{job.category}</span>
      </div>

      <p className="mt-3 font-medium text-blue-600">{job.salary}</p>

      <Link
        href={`/jobs/${job.id}`}
        className="inline-block mt-4 text-sm text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        View Details
      </Link>

      <button
        onClick={() => saved ? removeJob(job.id) : saveJob(job)}
        className={`mt-2 px-4 py-2 rounded-lg text-sm transition ${
          saved
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-green-500 text-white hover:bg-green-600"
        }`}
      >
        {saved ? "Remove" : "Save Job"}
      </button>
    </div>
  )
}