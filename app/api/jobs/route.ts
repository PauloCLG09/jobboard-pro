import { jobs } from "@/data/jobs"
import { NextResponse } from "next/server"

export async function GET() {
  // simulamos delay real de backend
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return NextResponse.json(jobs)
}