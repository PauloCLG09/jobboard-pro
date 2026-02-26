"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { IJob } from "@/types"

interface JobContextType {
  savedJobs: IJob[]
  saveJob: (job: IJob) => void
  removeJob: (id: string) => void
  isSaved: (id: string) => boolean
}

const JobContext = createContext<JobContextType | undefined>(undefined)

export function JobProvider({ children }: { children: React.ReactNode }) {
  const [savedJobs, setSavedJobs] = useState<IJob[]>([])

  // Cargar desde LocalStorage al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("savedJobs")
    if (stored) {
      setSavedJobs(JSON.parse(stored))
    }
  }, [])

  // Guardar en LocalStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs))
  }, [savedJobs])

  const saveJob = (job: IJob) => {
    if (!savedJobs.find((j) => j.id === job.id)) {
      setSavedJobs([...savedJobs, job])
    }
  }

  const removeJob = (id: string) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id))
  }

  const isSaved = (id: string) => {
    return savedJobs.some((job) => job.id === id)
  }

  return (
    <JobContext.Provider
      value={{ savedJobs, saveJob, removeJob, isSaved }}
    >
      {children}
    </JobContext.Provider>
  )
}

export function useJobs() {
  const context = useContext(JobContext)
  if (!context) {
    throw new Error("useJobs must be used within JobProvider")
  }
  return context
}