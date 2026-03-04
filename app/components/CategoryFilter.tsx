"use client"

interface Props {
  category: string
  setCategory: (value: string) => void
  categories: string[]
}

export default function CategoryFilter({
  category,
  setCategory,
  categories,
}: Props) {
  return (
    <div className="mb-6">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="h-10 border border-gray-300 px-4 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
      >
        <option value="">All Categories</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}