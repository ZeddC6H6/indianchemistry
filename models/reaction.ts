import { Schema, model, models } from "mongoose";

const ReactionSchema = new Schema(
  {
    bookName: { type: String, required: true, index: true },
    chapterName: { type: String, required: true, index: true },
    category: { type: String, required: true, index: true },
    reactionName: { type: String, required: true, index: true },
    slug: { type: String, required: true, unique: true, index: true },
    reactionEquation: {
      text: { type: String, required: true },
      svgUrl: String,
      imageUrl: String
    },
    mechanismSteps: [
      {
        step: Number,
        description: String,
        arrowHint: String
      }
    ],
    conditionsAndReagents: [String],
    shortTrick: String,
    commonMistakes: [String],
    pyqConceptualProblems: [String],
    solvedQuestions: [String],
    mcqs: [
      {
        level: { type: String, enum: ["easy", "moderate", "tough"] },
        question: String,
        options: [String],
        answer: String,
        explanationHinglish: String
      }
    ],
    explanationModes: {
      class10: String,
      neet: String,
      deep: String
    },
    tags: [String],
    searchableText: { type: String, index: "text" },
    createdBy: String,
    updatedBy: String
  },
  { timestamps: true }
);

export const Reaction = models.Reaction || model("Reaction", ReactionSchema);
