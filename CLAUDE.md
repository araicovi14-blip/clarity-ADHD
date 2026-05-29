# CLAUDE.md — Clarity ADHD Clinic Website Rebuild

## READ THIS FIRST
Read this entire file before writing a single line of code.
Every decision — copy, design, structure, tone — must trace back to something in here.
When in doubt, re-read this file before proceeding.

---

## Behavioral Rules (follow these without exception)

1. **Read this file in full before starting any task.**
2. **Never deviate from the color palette or fonts specified.** No creative liberties. Ever.
3. **Never use stock photo URLs.** Use placeholder divs with correct aspect ratios and a subtle background color instead. Comment `// TODO: replace with real photo` next to every placeholder.
4. **Never write generic healthcare copy.** If unsure how something should sound, re-read the Brand Voice section. "We care deeply" and "patient-centered care" are banned phrases.
5. **Always use the exact fonts specified.** Never substitute with Inter, Roboto, Arial, or system fonts.
6. **Never add pages or sections not in the sitemap** without explicitly asking first.
7. **One primary CTA per page.** Never scatter random booking buttons.
8. **Always use Next.js `<Image />` component** — never raw `<img>` tags.
9. **Always use Next.js `<Link />` component** for internal navigation — never raw `<a>` tags.
10. **Never hardcode URLs, phone numbers, or contact details** in page files. Always import from `lib/constants.ts`.
11. **When you build something reusable** (button, card, banner, nav, footer), extract it into `/components` immediately — never duplicate code across pages.
12. **Mobile first, always.** Build and style the mobile layout before desktop. Use Tailwind responsive prefixes (`md:`, `lg:`) to layer up.
13. **After completing a page or major component, stop and confirm** before moving to the next task.
14. **Never install packages outside the approved stack** without asking first.
15. **If the JaneApp embed fails to load**, show a clean fallback with the direct booking link and phone number. Never show a broken iframe.
16. **Accessibility always:** every image needs alt text, every interactive element needs proper ARIA labels, maintain AA contrast ratios minimum.
17. **All styling through Tailwind CSS only.** Use `globals.css` for base resets only — no component-level CSS files.

---

## Tech Stack

- **Framework:** Next.js 14+ — App Router ONLY, never Pages Router
- **Styling:** Tailwind CSS — all styling here, no exceptions
- **Hosting/Deploy:** Vercel — no other deployment config needed
- **Booking:** JaneApp — embed or link only, never replace
- **Blog/CMS:** MDX files in `/content/blog`
- **Analytics:** Vercel Analytics — add to root layout
- **Language:** TypeScript

### File Structure
```
/app
  /page.tsx                   (home)
  /our-story/page.tsx
  /services/page.tsx
  /for-families/page.tsx
  /for-adults/page.tsx
  /our-team/page.tsx
  /faq/page.tsx
  /blog/page.tsx
  /book/page.tsx
  /layout.tsx                 (root layout — nav + footer)
  /globals.css
/components
  /Nav.tsx
  /Footer.tsx
  /Button.tsx
  /CTABanner.tsx
  /ServiceCard.tsx
  (extract more as you build)
/lib
  /constants.ts               (ALL contact info and URLs live here)
/content
  /blog                       (MDX files)
/public
  /images                     (logo, photos)
```

### constants.ts — always import from here, never hardcode
```ts
export const JANE_APP_URL = "https://clarityadhd.janeapp.com"
export const PHONE = "778-655-7766"
export const EMAIL = "info@clarityadhd.ca"
export const FAX = "844-310-0183"
export const INSTAGRAM = "https://www.instagram.com/clarityadhd.ca"
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61584346585352"
export const SITE_NAME = "Clarity ADHD Clinic"
export const SITE_URL = "https://clarityadhd.ca"
```

---

## The Business

### What Clarity ADHD Is
A private, virtual, NP-led ADHD clinic licensed in British Columbia, Canada.
Serves children, youth, and adults across all of BC.
Founded and led by Tatjana Dunat, MSN, FNP-C. Supported by Celina R., RN.

### Why It Exists
The public healthcare pathway for ADHD assessment in BC has a 2-3 year waitlist.
Clarity offers the same rigorous, evidence-based assessment — virtually, within a week.
No waitlists. No referral needed. Real answers, fast.

### Key Business Facts
- Book through JaneApp — no referral needed
- Pay on the day of appointment
- No MSP billing — private pay only
- Eligible for extended health / personal spending account reimbursement
- Appointments available within a week of booking
- 24-hour response time
- Virtual only — available to all BC residents
- Phone is answered by an AI secretary named Milly (Benny.AI) — Tatjana follows up within 24 hours. Note this on the FAQ and contact sections so callers aren't surprised.

---

## Pricing

### Adult
| Service | Price |
|---|---|
| Initial ADHD Consultation & Assessment (45-60 min) | $440 |
| Care Plan Appointment (diagnosis, treatment plan, prescription) | $200 |
| Medication Refill / Review | $90 |
| Adult Intake with Previous Diagnosis (transfer of care only) | $200 |

### Child & Youth
| Service | Price |
|---|---|
| Assessment Session 1 (1 hour) | $500 |
| Assessment Session 2 (1 hour) | $500 |
| Synthesis / Review Appointment (diagnosis given here) | $500 |
| Care Plan Appointment | $500 |
| Medication Refill / Review | $125 |

### Other
- DTC (Disability Tax Credit) forms — pricing TBD, show as "contact us for pricing"
- Ongoing management sessions — varies

---

## The Assessment Process

### Adult Process
1. Book online through JaneApp — no referral needed
2. Intake forms sent automatically — DSM-5 ADHD screening + mental health and mood disorder screening (anxiety and depression screened concurrently — these frequently overlap with ADHD)
3. 45-60 minute virtual appointment with Tatjana — reviews questionnaire + personal and medical history
4. Diagnosis often given during the appointment itself
5. Formal legal medical diagnostic report (PDF) delivered within a few days
6. Optional follow-up sessions: medication management, prescription refills, mental health management, DTC forms

### Child & Youth Process
1. Parent or child books through JaneApp
2. Intake forms sent automatically — parent AND child fill out separate forms; teacher forms also provided for academic and behavioural feedback
3. Two 1-hour virtual assessment sessions — covers history, parent forms, child forms, teacher forms
4. Diagnosis NOT always given after the two assessments — a separate synthesis/review session follows
5. Care plan appointment: treatment plan, education, prescription if applicable
6. Follow-up available: medication review, IEP support, specialized referrals, neurodivergent screening

### Key Facts (weave naturally into copy across the site)
- 2-3 year public wait vs within a week at Clarity — this contrast is the #1 headline angle
- DSM-5 validated tools
- Formal legal medical diagnostic report provided
- Screens for ADHD + anxiety + mood disorders simultaneously
- Diagnosis often confirmed during the appointment (adults)
- Teacher forms included for kids
- IEP support available
- Virtual — anywhere in BC

---

## The People

### Tatjana Dunat, MSN, FNP-C — Founder & Nurse Practitioner
The entire brand differentiator. Her background is the moat.

**Her story (use as narrative, never as a bullet list):**
- Grew up in a traditional immigrant household where her path was chosen for her — dreamed of law school, wasn't permitted to pursue it
- Built a career that surpassed every ceiling she was given
- 30+ years across pediatric nursing, DTES community health, BC Women's & Children's Hospital, youth mental health, and nursing education at UBC and UVic
- Has three children of her own — assessed and understood how each one learned from a young age
- Has always felt she thinks differently herself — understands the mental gymnastics of neurodivergence from the inside
- Spent decades seeing ADHD in real lives — peds wards, the Downtown Eastside, classrooms — before ever running a private clinic
- Quiet, confident, not performative

**Positioning line:** "Most clinicians have credentials. Tatjana has perspective."

### Celina R., RN — Registered Nurse
Supporting practitioner. Short warm bio on the Our Team page.
Real photo needed — use placeholder until available.

---

## Brand Voice

### One-Line Summary
Warm, direct, and deeply human. Like advice from the most experienced person you know — who also genuinely gives a damn about you.

### How It Sounds
- Warm but not soft — confident without being cold
- Story-first, not credential-first
- Plain language always — no jargon
- Honest about the hard stuff — the system is broken, waitlists are real, stigma exists
- Never preachy or performative — show care through specificity not declarations

### Phrases That Sound Like Us
- "You've probably been told it's just anxiety. Or laziness. It's not."
- "We look at the whole picture — not just the checklist."
- "Getting a diagnosis isn't a label. It opens doors."
- "We walk alongside you — we don't just hand you a report."
- "Most people wait 2-3 years for an assessment in BC. You don't have to."
- "ADHD looks different in every person. We've seen enough of them to know."

### Banned Phrases (never use)
- "Empowering individuals to reach their full potential"
- "Evidence-based, patient-centered care"
- "We are committed to excellence"
- "Your journey begins here"
- "Holistic approach" / "Synergy" / "Paradigm"

### The Single Most Important Rule
Write for the person who has been dismissed before.
Every word on this site should make them feel like this time is different.

---

## Target Audience

1. **The Desperate Parent** — child struggling in school, needs IEP docs, stuck on a 2-year public waitlist. Finds Clarity on Google.
2. **The Skeptic-but-Curious** — not sure if it's really ADHD. Needs credibility before considering private care.
3. **The Self-Diagnosed Researcher** — pretty sure they have ADHD, wants fast validation and a path to diagnosis.
4. **The Dismissed Adult Woman** — told it's anxiety for years. Needs to feel taken seriously.
5. **The Pragmatic Achiever** — functioning but struggling. Wants efficiency and clarity.

### Emotional State on Arrival
Frustrated. Anxious. Hopeful but skeptical. Overwhelmed.
The site must feel calm, clear, and trustworthy within 5 seconds of landing.

---

## Visual Direction

### Aesthetic
Calm confidence. Not a corporate clinic. Not a wellness spa. Somewhere between the two.
References: Stussy (full bleed, minimal, visual does the talking) + Akre (white space, one CTA, quietly organized)

### Colors
```css
--color-primary: #2C5F6F;      /* deep slate blue — main brand color */
--color-accent: #A8D0E0;       /* powder blue — accents, highlights */
--color-bg: #FAFAF8;           /* off-white background */
--color-bg-alt: #F2F2F0;       /* light warm grey for alternate sections */
--color-text: #1A1A1A;         /* near-black body text */
--color-text-light: #6B7280;   /* muted text, captions */
```

### Typography
- **Headings:** `Playfair Display` or `Cormorant Garamond` — elegant serif, human, trustworthy
- **Body:** `DM Sans` or `Outfit` — clean, readable, modern
- **Never use:** Inter, Roboto, Arial, system fonts

### Layout Rules
- Lots of white space — the site must breathe
- Full bleed hero sections
- Minimal navigation — only essential links
- Scroll-triggered animations — smooth and subtle, never flashy
- Prose over bullet lists wherever possible
- One focus per section, no visual clutter
- No bullet point walls anywhere on the site

### Logo
- Existing Clarity flower + wordmark in slate blue
- White or off-white background only
- Do not alter, recreate, or recolor
- File: `/public/images/Logo.png`

---

## Sitemap
```
/               Home
/our-story      Tatjana's story, why Clarity exists
/services       What we offer + pricing
/for-families   Parents of kids and teens
/for-adults     Adults self-referring
/our-team       Tatjana + Celina bios
/faq            Common questions answered
/blog           SEO content engine
/book           JaneApp booking — zero friction
```

---

## SEO
Work these naturally into copy across the site — never stuffed or forced:
- "ADHD assessment BC"
- "Virtual ADHD clinic BC"
- "ADHD diagnosis no waitlist BC"
- "ADHD assessment child Vancouver"
- "Private ADHD clinic British Columbia"
- "ADHD diagnosis adults BC"
- "ADHD nurse practitioner BC"

Every page needs:
- Clear H1 (one per page)
- Meta description (150-160 characters)
- Alt text on all images
- Semantic HTML — proper heading hierarchy always

---

## Testimonials (real, consented patients — use exactly as written)
- "Clarity ADHD made the entire assessment process feel supportive, efficient, and incredibly validating for our family." — Sarah H. (Parent)
- "I felt heard, understood, and guided — Clarity ADHD gave me clarity, confidence, and a plan that actually works." — Jason K.
- "Clarity ADHD delivered a comprehensive assessment and clear diagnosis in half the time of other clinics, without ever compromising on care." — Veronica F.

---

## What Not To Do
- No stock photos of practitioners — ever. Placeholder always beats fake.
- No bullet point walls — prose over lists
- No generic healthcare copy — refer to banned phrases list
- No visual clutter — one focus per section
- No slow load times — use Next.js Image, lazy load everything
- No broken JaneApp links — test every single CTA
- Do not touch or replicate the Google Ads setup — notify the marketer before the domain goes live

---

## Launch Checklist
- [ ] All pages built and reviewed
- [ ] JaneApp links tested on every CTA
- [ ] Real photos of Tatjana and Celina swapped in
- [ ] Meta descriptions written for every page
- [ ] Alt text on all images
- [ ] Mobile tested on iPhone and Android
- [ ] Vercel preview link sent to Tatjana for approval
- [ ] Google Ads marketer notified before domain switch
- [ ] clarityadhd.ca domain pointed to Vercel
- [ ] Old Wix site taken down after confirming new site is live

---
*Built with love by Adrian. For his mom.*
