import { ReactionDocument } from "@/lib/types";

export const sampleReaction: ReactionDocument = {
  bookName: "NCERT",
  chapterName: "Aldehydes, Ketones and Carboxylic Acids",
  category: "Name Reactions",
  reactionName: "Cannizzaro Reaction",
  slug: "cannizzaro-reaction",
  reactionEquation: {
    text: "2 RCHO + OH-  → RCOO- + RCH2OH",
    svgUrl: "/equations/cannizzaro.svg"
  },
  mechanismSteps: [
    { step: 1, description: "OH- aldehyde carbonyl par attack karta hai." },
    { step: 2, description: "Hydride transfer second aldehyde ko hota hai." },
    { step: 3, description: "Ek molecule alcohol aur doosra carboxylate me convert hota hai." }
  ],
  conditionsAndReagents: ["Concentrated NaOH / KOH", "Aldehyde without alpha hydrogen"],
  shortTrick: "No alpha-H = Cannizzaro pakka.",
  commonMistakes: ["Alpha-H wale aldehyde ko include kar dena.", "Aldol aur Cannizzaro mix kar dena."],
  pyqConceptualProblems: ["Benzaldehyde ka disproportionation explain karo.", "Kyun formaldehyde fastest Cannizzaro deta hai?"],
  solvedQuestions: ["Q: 2 molecules benzaldehyde + KOH product? A: Benzyl alcohol + potassium benzoate."],
  mcqs: [
    {
      level: "easy",
      question: "Cannizzaro reaction kis substrate pe hoti hai?",
      options: ["Aldehyde with alpha-H", "Aldehyde without alpha-H", "Any ketone", "Any alcohol"],
      answer: "Aldehyde without alpha-H",
      explanationHinglish: "Agar alpha-H present hai to base me aldol preference aa jata hai."
    },
    {
      level: "tough",
      question: "Formaldehyde + benzaldehyde cross Cannizzaro me kaun oxidize hota hai?",
      options: ["Benzaldehyde", "Formaldehyde", "Dono", "Koi nahi"],
      answer: "Formaldehyde",
      explanationHinglish: "Formaldehyde sabse easily oxidize hota hai aur benzaldehyde reduce hota hai."
    }
  ],
  explanationModes: {
    class10: "Ye reaction me ek aldehyde oxidize hota hai aur dusra reduce, dono ek sath base me.",
    neet: "Strong base me non-enolizable aldehyde disproportionate karta hai giving alcohol + carboxylate.",
    deep: "Nucleophilic addition ke baad intramolecular hydride transfer hota hai jo key step hai."
  },
  tags: ["aldehyde", "disproportionation", "base", "name reaction"],
  searchableText: "cannizzaro aldehyde base no alpha hydrogen disproportionation benzaldehyde"
};
