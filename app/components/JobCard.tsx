"use client"

import Link from "next/link"
import { IJob } from "@/types"
import { useJobContext } from "@/context/JobContext"
import { motion } from "framer-motion"

interface Props {
  job: IJob
}

export default function JobCard({ job }: Props) {
  const { toggleSaveJob, isSaved } = useJobContext()
  const saved = isSaved(job.id)

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="group bg-white/5 backdrop-blur-xl border border-white/10 hover:border-indigo-400/40 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      {/* TOP */}
      <div className="flex items-start justify-between mb-4">

        <div>
          <h2 className="text-lg font-semibold text-white group-hover:text-indigo-400 transition">
            {job.title}
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            {job.company} • {job.location}
          </p>
        </div>

        {/* Logo fake */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
          {job.company.charAt(0)}
        </div>
      </div>

      {/* CATEGORY */}
      <span className="inline-block text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full mb-4">
        {job.category}
      </span>

      {/* SALARY */}
      <p className="text-lg font-semibold text-green-400 mb-4">
        {job.salary}
      </p>

      {/* ACTIONS */}
      <div className="flex items-center justify-between mt-4">

        <Link
          href={`/jobs/${job.id}`}
          className="text-sm font-medium text-white bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
        >
          View →
        </Link>

        <button
          onClick={() => toggleSaveJob(job)}
          className={`text-xs px-3 py-2 rounded-lg font-medium transition-all duration-200 ${saved
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
        >
          {saved ? "Saved" : "Save"}
        </button>

      </div>
    </motion.div>
  )
}