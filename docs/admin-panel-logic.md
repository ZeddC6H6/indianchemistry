# Admin Panel Logic (Secure + Scalable)

## Authentication
- Admin login API: `POST /api/admin/login`
- Validates `ADMIN_USERNAME` + bcrypt hash (`ADMIN_PASSWORD_HASH`)
- On success, sets httpOnly JWT cookie (`ic_admin_token`)
- Admin-only APIs check cookie via `ensureAdminSession()`

## Content operations
1. **Add Reaction**
   - API: `POST /api/admin/reactions`
   - Accepts full structured reaction payload
   - Auto-builds `searchableText` for fast search

2. **Edit Reaction**
   - API: `PATCH /api/admin/reactions/:id`
   - Partial updates supported
   - Sets `updatedBy` metadata

3. **MCQ / chapter-wise gradual upload**
   - Same update API supports appending `mcqs`, `solvedQuestions`, `pyqConceptualProblems`
   - Enables progressive data entry for MS Chauhan + Vlayden chapter by chapter

## Why this is future-ready
- Book names are dynamic strings (new books can be added without schema rewrite)
- Flexible arrays for mechanism, questions, and MCQs
- Search index (`text`) + regex fallback for reagent/name/class-based query
- Ready for future additions:
  - User roles (teacher/editor)
  - Audit logs
  - Version history
  - Bulk CSV/JSON import
