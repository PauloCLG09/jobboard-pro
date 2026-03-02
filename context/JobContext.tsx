"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { IJob } from "@/types"

interface JobContextType {
  savedJobs: IJob[]
  toggleSaveJob: (job: IJob) => void
  isSaved: (id: string) => boolean
}

const JobContext = createContext<JobContextType | undefined>(undefined)

export function JobProvider({ children }: { children: React.ReactNode }) {
  const [savedJobs, setSavedJobs] = useState<IJob[]>([])

  // 🔥 1️⃣ Leer desde localStorage cuando carga la app
  useEffect(() => {
    const stored = localStorage.getItem("savedJobs")
    if (stored) {
      setSavedJobs(JSON.parse(stored))
    }
  }, [])

  // 🔥 2️⃣ Guardar en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs))
  }, [savedJobs])

  const toggleSaveJob = (job: IJob) => {
    setSavedJobs((prev) => {
      const exists = prev.find((j) => j.id === job.id)

      if (exists) {
        return prev.filter((j) => j.id !== job.id)
      } else {
        return [...prev, job]
      }
    })
  }

  const isSaved = (id: string) => {
    return savedJobs.some((job) => job.id === id)
  }

  return (
    <JobContext.Provider value={{ savedJobs, toggleSaveJob, isSaved }}>
      {children}
    </JobContext.Provider>
  )
}

export function useJobContext() {
  const context = useContext(JobContext)
  if (!context) {
    throw new Error("useJobContext must be used within JobProvider")
  }
  return context
}