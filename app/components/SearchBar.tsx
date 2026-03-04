"use client"

interface Props {
  search: string
  setSearch: (value: string) => void
}

export default function SearchBar({ search, setSearch }: Props) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-10 border border-gray-300 px-4 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
      />
    </div>
  )
}