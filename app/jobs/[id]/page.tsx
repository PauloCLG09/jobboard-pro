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
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600 mt-2">{job.company}</p>

      <div className="flex gap-4 mt-4 text-sm text-gray-500">
        <span>{job.location}</span>
        <span>•</span>
        <span>{job.category}</span>
      </div>

      <p className="mt-4 font-semibold text-blue-600">{job.salary}</p>

      <div className="mt-6 border-t pt-6">
        <h2 className="text-xl font-semibold mb-3">Job Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {job.description}
        </p>
      </div>
    </main>
  )
}