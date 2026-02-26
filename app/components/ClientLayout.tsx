"use client"

import { JobProvider } from "@/context/JobContext"
import Navbar from "./Navbar"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <JobProvider>
      <Navbar />
      {children}
    </JobProvider>
  )
}