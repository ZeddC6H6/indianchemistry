import { SearchBar } from "@/components/search-bar";
import { FilterChips } from "@/components/filter-chips";

const modes = [
  { title: "Explain like Class 10", detail: "Basic analogy + simple Hindi" },
  { title: "Explain like NEET", detail: "Exam-focused quick points" },
  { title: "Explain deeply", detail: "Mechanism + conceptual depth" }
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-5 rounded-3xl border border-neonPurple/40 bg-black/35 p-6 shadow-blueGlow md:grid-cols-[2fr,1fr] md:p-8">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-neonBlue">Chemistry Reaction Intelligence Platform</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
            Indian syllabus chemistry ko smart, searchable aur <span className="text-neonPink">Hinglish-friendly</span> banao.
          </h1>
          <p className="mt-3 text-white/75">
            NCERT, MS Chauhan, Vlayden sab ek jagah. Reaction name, reagent, mechanism ya conversion se instant result.
          </p>
        </div>
        <div className="glass-card rounded-2xl p-4">
          <p className="text-sm text-white/70">Quick Stats (scalable design)</p>
          <div className="mt-4 space-y-2 text-sm">
            <p>Books Supported: 3+</p>
            <p>Reaction Categories: Name + Mechanism + Conversion</p>
            <p>Practice Modes: MCQ, PYQ, Concept Drill</p>
          </div>
        </div>
      </section>

      <SearchBar />

      <section className="grid gap-4 md:grid-cols-3">
        {modes.map((mode) => (
          <article key={mode.title} className="glass-card rounded-2xl p-4 transition hover:border-neonBlue/60 hover:shadow-blueGlow">
            <h3 className="font-semibold text-neonPink">{mode.title}</h3>
            <p className="mt-2 text-sm text-white/75">{mode.detail}</p>
          </article>
        ))}
      </section>

      <FilterChips />
    </div>
  );
}
