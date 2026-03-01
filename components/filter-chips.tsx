const filters = {
  books: ["NCERT", "MS Chauhan", "Vlayden"],
  chapters: ["Aldehydes & Ketones", "Haloalkanes", "Alcohols Phenols Ethers"],
  types: ["Name Reaction", "Mechanism", "Conversion"]
};

export function FilterChips() {
  return (
    <section className="glass-card rounded-2xl p-4 md:p-6">
      <h2 className="section-title">Smart Filters</h2>
      <div className="mt-4 space-y-4">
        <FilterGroup title="Book-wise" items={filters.books} />
        <FilterGroup title="Chapter-wise" items={filters.chapters} />
        <FilterGroup title="Reaction Type" items={filters.types} />
      </div>
    </section>
  );
}

function FilterGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 text-sm text-white/70">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            className="rounded-full border border-neonPink/40 bg-black/30 px-3 py-1 text-xs text-white/90 transition hover:border-neonBlue hover:text-neonBlue"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
