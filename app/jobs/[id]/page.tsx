import { jobs } from "@/data/jobs"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{
    id: string
  }>
}

export default async function JobDetail({ params }: Props) {
  const { id } = await params

  const job = jobs.find((job) => job.id === id)

  if (!job) return notFound()

  return (
  <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
    <div className="max-w-4xl mx-auto px-6">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">

        {/* HEADER */}
        <div className="flex items-center gap-4 mb-6">
          {/* Logo fake */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
            {job.company.charAt(0)}
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              {job.title}
            </h1>
            <p className="text-gray-400">
              {job.company}
            </p>
          </div>
        </div>

        {/* META */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-6">
          <span>{job.location}</span>
          <span>•</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">
            {job.category}
          </span>
        </div>

        {/* SALARY */}
        <p className="text-2xl font-semibold text-green-400 mb-6">
          {job.salary}
        </p>

        {/* DESCRIPTION */}
        <div className="border-t border-white/10 pt-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            Job Description
          </h2>

          <p className="text-gray-300 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4">
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-600 transition">
            Apply Now
          </button>

          <button className="bg-white/10 text-gray-300 px-6 py-3 rounded-xl hover:bg-white/20 transition">
            Save Job
          </button>
        </div>

      </div>

    </div>
  </main>
)
}