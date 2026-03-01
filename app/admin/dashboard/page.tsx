import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-5">
      <section className="glass-card rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-neonPink">Admin Panel</h1>
        <p className="mt-2 text-white/75">Yahan se reaction add/edit, MCQ upload, aur chapter-wise data updates kiye jayenge.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <AdminCard title="Add Reaction" href="/api/admin/reactions" detail="Structured payload se new reaction create karo." />
        <AdminCard title="Edit Reaction" href="/api/admin/reactions/:id" detail="Versioning-safe partial update." />
        <AdminCard title="Upload MCQ Set" href="/api/admin/reactions/:id" detail="MCQ aur explanation chapter-wise append karo." />
      </section>
    </div>
  );
}

function AdminCard({ title, href, detail }: { title: string; href: string; detail: string }) {
  return (
    <article className="glass-card rounded-xl p-4">
      <h2 className="font-semibold text-neonBlue">{title}</h2>
      <p className="mt-1 text-sm text-white/70">{detail}</p>
      <Link href={href} className="mt-3 inline-block text-sm text-neonPink">{href}</Link>
    </article>
  );
}
