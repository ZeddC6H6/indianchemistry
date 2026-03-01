import { notFound } from "next/navigation";
import { sampleReaction } from "@/lib/sample-data";

export default function ReactionDetailPage({ params }: { params: { slug: string } }) {
  if (params.slug !== sampleReaction.slug) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <section className="glass-card neon-border rounded-2xl p-6">
        <p className="text-sm text-neonBlue">
          {sampleReaction.bookName} • {sampleReaction.chapterName} • {sampleReaction.category}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-neonPink">{sampleReaction.reactionName}</h1>
        <p className="mt-3 text-white/80">{sampleReaction.explanationModes.neet}</p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <Card title="Reaction Equation">
          <p>{sampleReaction.reactionEquation.text}</p>
          <p className="mt-2 text-xs text-white/60">SVG placeholder: {sampleReaction.reactionEquation.svgUrl}</p>
        </Card>

        <Card title="Conditions & Reagents">
          <ul className="list-disc space-y-1 pl-5 text-sm text-white/85">
            {sampleReaction.conditionsAndReagents.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        <Card title="Mechanism (Stepwise)">
          <ol className="list-decimal space-y-1 pl-5 text-sm text-white/85">
            {sampleReaction.mechanismSteps.map((step) => (
              <li key={step.step}>{step.step}. {step.description}</li>
            ))}
          </ol>
        </Card>

        <Card title="Short Trick + Common Mistakes">
          <p className="text-sm text-white/85">Yaad Rakhne Ka Tarika: {sampleReaction.shortTrick}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/75">
            {sampleReaction.commonMistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <Card title="PYQ / Conceptual Problems">
          <ul className="list-disc space-y-2 pl-5 text-sm text-white/85">
            {sampleReaction.pyqConceptualProblems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </Card>
        <Card title="MCQs (Easy → Tough)">
          {sampleReaction.mcqs.map((mcq) => (
            <div key={mcq.question} className="mb-4 rounded-xl border border-white/10 p-3">
              <p className="text-sm text-neonBlue">{mcq.level}</p>
              <p className="text-sm">{mcq.question}</p>
              <p className="mt-1 text-xs text-neonPink">Answer: {mcq.answer}</p>
              <p className="text-xs text-white/70">{mcq.explanationHinglish}</p>
            </div>
          ))}
        </Card>
      </section>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="glass-card rounded-2xl p-5">
      <h2 className="section-title">{title}</h2>
      <div className="mt-3">{children}</div>
    </article>
  );
}
