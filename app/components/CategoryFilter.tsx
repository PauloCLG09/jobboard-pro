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
        className="w-full p-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
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