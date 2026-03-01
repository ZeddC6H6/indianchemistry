"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const mockSuggestions = ["Aldol", "Cannizzaro", "SN1", "Phenol + Zn", "Haloalkane reactions"];

export function SearchBar() {
  const [query, setQuery] = useState("");

  const suggestions = useMemo(
    () => mockSuggestions.filter((item) => item.toLowerCase().includes(query.toLowerCase())).slice(0, 5),
    [query]
  );

  return (
    <div className="glass-card neon-border rounded-2xl p-4 md:p-6">
      <label htmlFor="chem-search" className="mb-2 block text-sm text-white/80">
        Reaction, reagent, mechanism ya compound search karo
      </label>
      <input
        id="chem-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Ex: Aldol / Cannizzaro / SN1 / Phenol + Zn"
        className="w-full rounded-xl border border-neonBlue/60 bg-black/40 px-4 py-3 text-white outline-none ring-neonBlue/40 transition focus:ring-2"
      />
      {query && (
        <div className="mt-3 rounded-xl border border-white/10 bg-black/45 p-2">
          {suggestions.length ? (
            suggestions.map((item) => (
              <Link
                href={`/reactions/${item.toLowerCase().replaceAll(" ", "-")}`}
                key={item}
                className="block rounded-lg px-3 py-2 text-sm text-white/85 transition hover:bg-white/10"
              >
                {item}
              </Link>
            ))
          ) : (
            <p className="px-3 py-2 text-sm text-white/60">No suggestion. Try reaction name ya reagent.</p>
          )}
        </div>
      )}
    </div>
  );
}
