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
        className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  )
}