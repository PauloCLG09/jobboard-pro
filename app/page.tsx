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
    sort,
    setSort,
  } = useJobsFilter()

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Find Your <span className="text-black">Dream Job</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Discover top remote and on-site opportunities from leading companies around the world.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mb-6">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-10 border border-gray-300 px-3 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black"
        >
          <option value="">Sort By</option>
          <option value="title-asc">Title A-Z</option>
          <option value="title-desc">Title Z-A</option>
          <option value="salary-asc">Salary Low-High</option>
          <option value="salary-desc">Salary High-Low</option>
        </select>
      </div>

      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      )}
      {!loading && (
        <p className="text-sm text-gray-600 mb-4">
          {filteredJobs.length} jobs found
        </p>
      )}


      {!loading && filteredJobs.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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