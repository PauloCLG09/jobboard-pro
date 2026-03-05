"use client"

import Link from "next/link"
import { IJob } from "@/types"
import { useJobContext } from "@/context/JobContext"

interface Props {
  job: IJob
}

export default function JobCard({ job }: Props) {
  const { toggleSaveJob, isSaved } = useJobContext()
  const saved = isSaved(job.id)

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-lg font-semibold text-gray-900">
        {job.title}
      </h2>
      <p className="text-sm text-gray-500 mt-1">
        {job.company}
      </p>
      <p className="text-gray-600">{job.company}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <span>{job.location}</span>
        <span>•</span>
        <span>{job.category}</span>
      </div>

      <p className="mt-4 inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
        {job.salary}
      </p>
      <Link
        href={`/jobs/${job.id}`}
        className="inline-block mt-5 text-sm font-medium text-white bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        View Details
      </Link>

      <button
        onClick={() => toggleSaveJob(job)}
        className={`mt-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${saved
          ? "bg-red-500 text-white hover:bg-red-600"
          : "bg-green-500 text-white hover:bg-green-600"
          }`}
      >
        {saved ? "Remove" : "Save Job"}
      </button>
    </div>
  )
}