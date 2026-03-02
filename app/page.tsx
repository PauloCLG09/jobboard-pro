"use client"

import JobCard from "./components/JobCard"
import SearchBar from "./components/SearchBar"
import CategoryFilter from "./components/CategoryFilter"
import { useJobsFilter } from "@/hooks/useJobsFilter"
import SkeletonCard from "./components/SkeletonCard"

export default function Home() {
  const {
    loading,
    search,
    setSearch,
    category,
    setCategory,
    filteredJobs,
    categories,
  } = useJobsFilter()

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Find Your Next Job</h1>

      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}
      {!loading && filteredJobs.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}


      {!loading && filteredJobs.length === 0 && (
        <p className="text-gray-500 mt-6">No jobs found.</p>
      )}
    </main>
  )
}