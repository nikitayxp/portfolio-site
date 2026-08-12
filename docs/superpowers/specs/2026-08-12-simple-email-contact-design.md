# Simple Email Contact Design

## Goal

Remove the backend contact form and replace it with a direct, bilingual email contact experience that requires no API, server action, external email service, or environment variable. Update both CV PDFs and project documentation so all public descriptions match the implementation and current stack.

## Scope

### Portfolio contact section

- Remove the existing form from the contact section.
- Display `nikitayxp@gmail.com` as the contact address.
- Add a localized “Send email” action using `mailto:nikitayxp@gmail.com`.
- Add a localized “Copy email” action using the Clipboard API.
- Show short, temporary localized confirmation after a successful copy.
- Preserve the current contact section styling and responsive behavior.
- If clipboard access fails, keep the email visible and leave the `mailto:` action available; do not introduce a backend fallback.

### Technical cleanup

- Remove the contact server action.
- Remove the current form component and replace it with a small client component responsible only for the copy interaction.
- Remove `resend` and `zod` if repository-wide search confirms they have no remaining consumers.
- Regenerate the lockfile through the package manager rather than editing it manually.
- Update the README to describe direct email contact instead of form delivery and validation.

### Portfolio copy

- Remove references to Zod, Resend, form validation, and rate limiting from both Portuguese and English project summaries.
- Replace them with a concise description of direct email contact.
- Harmonize the project-positioning copy so deployed personal and school projects are not described inconsistently.

### CV PDFs

Update both Portuguese and English PDFs while preserving the current one-page layout as closely as possible:

- Replace Next.js 15 with Next.js 16.
- Replace `portfolio-nikita-slobodeniuc.vercel.app` with the canonical `nikitayxp.is-a.dev` domain.
- Remove references to the contact form, Zod, Resend, client/server validation, and rate limiting.
- Describe the direct email contact action without overstating its technical complexity.
- Harmonize “projects in production” wording with the portfolio’s description of deployed personal and school work.
- Preserve all unrelated experience, education, skills, project details, and contact information.

Because editable CV sources are not present, PDF edits may use PyMuPDF. The final PDFs must remain readable, selectable, and limited to one page each.

## Component design

A localized contact-actions client component receives:

- `email`: the displayed and copied address.
- `locale`: selects button labels and copy status text.

It renders:

1. The visible email address.
2. A regular anchor with a `mailto:` URL.
3. A button that invokes `navigator.clipboard.writeText(email)`.
4. An accessible status message for successful copying.

The component owns only temporary copy-feedback state. No application-wide state or new dependency is needed.

## Error handling and accessibility

- The email remains visible and selectable at all times.
- The send action remains a standard link and works without JavaScript.
- Copy feedback uses an `aria-live` status region.
- Clipboard failure must not report success.
- Buttons retain visible focus states and adequate touch targets.

## Validation

The repository has no automated test runner. Adding one solely for this small interaction is outside scope. Validation will consist of:

1. Repository search proving removed form/backend terms and dependencies have no remaining consumers.
2. ESLint.
3. Production build.
4. Browser verification in Portuguese and English for the `mailto:` target, copy interaction, responsive presentation, and console errors.
5. PDF text extraction confirming updated versions, canonical URL, and absence of removed form/backend claims.
6. PDF metadata/page-count and rendered visual checks confirming one readable page per language.

## Non-goals

- Sending email inside the website.
- Collecting or storing messages.
- Analytics for contact actions.
- Adding a third-party form or email provider.
- Redesigning unrelated portfolio sections.
