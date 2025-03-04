export type FilterOption = {
  id: string
  label: string
  value: string
}

type CollectionFilterProps = {
  options: FilterOption[]
  selectedFilter: string
  onFilterChange: (value: string) => void
}

export function CollectionFilter({
  options,
  selectedFilter,
  onFilterChange,
}: CollectionFilterProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onFilterChange(option.value)}
          className={`text-sm tracking-wide transition-colors
            ${selectedFilter === option.value 
              ? 'text-black' 
              : 'text-neutral-400 hover:text-neutral-600'
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}