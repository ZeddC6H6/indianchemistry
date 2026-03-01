import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/explorer", label: "Reaction Explorer" },
  { href: "/library", label: "Book Library" },
  { href: "/mcq", label: "MCQ Zone" },
  { href: "/problem-solver", label: "Problem Solver" },
  { href: "/admin/login", label: "Admin" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-matte/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="text-lg font-bold text-neonPink">
          IndianChem Intelligence
        </Link>
        <div className="hidden gap-5 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/75 transition hover:text-neonBlue"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
