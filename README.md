# Indian Chemistry Reaction Intelligence Platform

Full-stack Next.js + MongoDB app inspired by ChemSpider, focused on Indian syllabus (NCERT, MS Chauhan, Vlayden) with Hindi + Hinglish explanations.

## 1) Database schema (scalable, content-first)

Core collection: `reactions`

```ts
{
  bookName: string;                 // NCERT | MS Chauhan | Vlayden | future books
  chapterName: string;
  category: string;                 // Name Reactions | Mechanism | Conversions
  reactionName: string;
  slug: string;                     // URL-friendly unique key

  reactionEquation: {
    text: string;
    svgUrl?: string;
    imageUrl?: string;
  };

  mechanismSteps: Array<{
    step: number;
    description: string;            // Hinglish step-by-step
    arrowHint?: string;
  }>;

  conditionsAndReagents: string[];
  shortTrick: string;
  commonMistakes: string[];
  pyqConceptualProblems: string[];
  solvedQuestions: string[];

  mcqs: Array<{
    level: "easy" | "moderate" | "tough";
    question: string;
    options: string[];
    answer: string;
    explanationHinglish: string;
  }>;

  explanationModes: {
    class10: string;
    neet: string;
    deep: string;
  };

  tags: string[];
  searchableText: string;           // combined text for indexed search
  createdBy?: string;
  updatedBy?: string;
  timestamps: true;
}
```

## 2) Folder structure

```txt
app/
  page.tsx                        # Home
  reactions/[slug]/page.tsx       # Reaction detail sample
  explorer/page.tsx
  library/page.tsx
  mcq/page.tsx
  problem-solver/page.tsx
  admin/login/page.tsx
  admin/dashboard/page.tsx
  api/
    search/route.ts
    reactions/route.ts
    reactions/[id]/route.ts
    admin/
      login/route.ts
      reactions/route.ts
      reactions/[id]/route.ts

components/
  navbar.tsx
  search-bar.tsx
  filter-chips.tsx

lib/
  db.ts
  auth.ts
  types.ts
  sample-data.ts

models/
  reaction.ts

docs/
  admin-panel-logic.md
```

## 3) Home page layout

- Search-first hero
- Matte black + neon pink/blue/purple theme
- Smart suggestion input
- AI explanation mode cards (Class 10 / NEET / Deep)
- Book/chapter/type quick filters

## 4) Reaction detail page sample

Sample route: `/reactions/cannizzaro-reaction`

Includes:
- Meta info: book + chapter + category
- Reaction equation
- Stepwise mechanism
- Conditions/reagents
- Trick + mistakes
- PYQ/concept questions
- MCQ levels with answers and Hinglish explanations

## 5) Admin panel logic

See: `docs/admin-panel-logic.md`

## Run locally

1. `npm install`
2. Create `.env.local`

```bash
MONGODB_URI=mongodb://127.0.0.1:27017
MONGODB_DB=indianchemistry
JWT_SECRET=change-this
ADMIN_USERNAME=admin
# generate with: node -e "console.log(require('bcryptjs').hashSync('your-password', 10))"
ADMIN_PASSWORD_HASH=$2a$10$...
```

3. `npm run dev`
