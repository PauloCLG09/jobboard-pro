"use client"

import JobCard from "./components/JobCard"
import SearchBar from "./components/SearchBar"
import CategoryFilter from "./components/CategoryFilter"
import { useJobsFilter } from "@/hooks/useJobsFilter"
import SkeletonCard from "./components/SkeletonCard"
import { motion } from "framer-motion"

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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold tracking-tight text-white mb-4">
            Find Your <span className="text-indigo-400">Dream Job</span>
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover remote and on-site opportunities from top companies around the world.
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-4 mb-10 justify-center"
      >
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
      </motion.div>

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
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </motion.div>

      )}


      {!loading && filteredJobs.length === 0 && (
        <p className="text-gray-500 mt-6">No jobs found.</p>
      )}
    </main>
  )
}