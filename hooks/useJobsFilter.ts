"use client"

import { useEffect, useState, useMemo } from "react"
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
  const [sort, setSort] = useState("")
  const debouncedSearch = useDebounce(search, 300)

  const parseSalary = (salary: string) => {
    const min = salary.split("-")[0].replace(/\$|\s/g, "")
    return Number(min)
  }

  const filteredJobs = useMemo(() => {
  let filtered = jobList.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      job.company.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      job.location.toLowerCase().includes(debouncedSearch.toLowerCase())

    const matchesCategory =
      category === "" || job.category === category

    return matchesSearch && matchesCategory
  })

  if (sort === "title-asc") {
    filtered = [...filtered].sort((a, b) =>
      a.title.localeCompare(b.title)
    )
  }

  if (sort === "title-desc") {
    filtered = [...filtered].sort((a, b) =>
      b.title.localeCompare(a.title)
    )
  }

  if (sort === "salary-asc") {
    filtered = [...filtered].sort(
      (a, b) => parseSalary(a.salary) - parseSalary(b.salary)
    )
  }

  if (sort === "salary-desc") {
    filtered = [...filtered].sort(
      (a, b) => parseSalary(b.salary) - parseSalary(a.salary)
    )
  }

  return filtered
}, [jobList, debouncedSearch, category, sort])
  return {
    loading,
    search,
    setSearch,
    category,
    setCategory,
    filteredJobs,
    categories,
    sort,
    setSort,
  }
}