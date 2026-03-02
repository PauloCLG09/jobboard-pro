"use client"

import { useEffect, useState } from "react"
import { IJob } from "@/types"
import { useDebounce } from "./useDebounce"

export function useJobsFilter() {
  const [loading, setLoading] = useState(true)
  const [jobList, setJobList] = useState<IJob[]>([])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)

        const res = await fetch("/api/jobs")
        const data = await res.json()

        setJobList(data)
      } catch (error) {
        console.error("Error fetching jobs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  const categories = Array.from(
    new Set(jobList.map((job) => job.category))
  )

  const debouncedSearch = useDebounce(search, 300)

  const filteredJobs = jobList.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      job.company.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      job.location.toLowerCase().includes(debouncedSearch.toLowerCase())

    const matchesCategory =
      category === "" || job.category === category

    return matchesSearch && matchesCategory
  })

  return {
    loading,
    search,
    setSearch,
    category,
    setCategory,
    filteredJobs,
    categories,
  }
}