export type Difficulty = "easy" | "moderate" | "tough";

export interface MechanismStep {
  step: number;
  description: string;
  arrowHint?: string;
}

export interface McqItem {
  level: Difficulty;
  question: string;
  options: string[];
  answer: string;
  explanationHinglish: string;
}

export interface ReactionDocument {
  bookName: "NCERT" | "MS Chauhan" | "Vlayden" | string;
  chapterName: string;
  category: "Name Reactions" | "Mechanism" | "Conversions" | string;
  reactionName: string;
  slug: string;
  reactionEquation: {
    text: string;
    svgUrl?: string;
    imageUrl?: string;
  };
  mechanismSteps: MechanismStep[];
  conditionsAndReagents: string[];
  shortTrick: string;
  commonMistakes: string[];
  pyqConceptualProblems: string[];
  solvedQuestions: string[];
  mcqs: McqItem[];
  explanationModes: {
    class10: string;
    neet: string;
    deep: string;
  };
  tags: string[];
  searchableText: string;
  createdBy?: string;
  updatedBy?: string;
}
