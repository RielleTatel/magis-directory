# AdZU College Student Handbook — Categorized Markdown

**Source Document:** Ateneo de Zamboanga University College Student Handbook, 2025–2026 Edition (146 pages)

This directory contains the full handbook split into topic-based markdown files, optimized for use as RAG (Retrieval-Augmented Generation) context for a chatbot.

## File Index

### Foundational
- **`00-introduction.md`** — Vision, Mission, Goals (A–D), University Seal
- **`01-schools-and-colleges.md`** — SLA, SED, SMA, CSITE, CON (objectives, mission, vision)

### Academic Regulations (Chapter 2)
- **`admissions.md`** — General policy, CET, transfer students, transfer credits, cross-enrollment (to/from), shifting, re-admission, grade equivalency table
- **`enrollment.md`** — General guidelines, academic calendar, registration process, validation, consultations, add/drop, overload, LOA, WP
- **`attendance.md`** — Attendance rules, absence-hour table, tardiness, bell system, prayer, make-up classes, spiritual formation
- **`examinations.md`** — Admit-to-exam slips, midterm/final rules, delayed exams, exemption privileges
- **`grading.md`** — Grade table, GPA computation, change of grade rules, Dean's List, Latin honors, graduation awards (Outstanding Graduate, Class Valedictorian)
- **`graduation-and-retention.md`** — Diploma eligibility, clearance (moving up vs. graduation), academic probation tiers, Academic Standards Committee

### Discipline & Conduct
- **`discipline.md`** — Penalties (suspension/dismissal/expulsion), minor violations C.1.1–C.1.14, major violations C.3.1–C.3.54, Board of Discipline, due process
- **`uniform-and-dress-code.md`** — Uniform days, male/female/Muslim female specs, niqab rule, prohibited attire, gender-affirming clothing process, exemptions, PATHFIT, violation slip procedure, ID rules

### Student Life
- **`student-services.md`** — OAA, CRO, CMO (mass schedule, recollection, retreat), CGCO (counseling, FFP, Career Dev, Peers' Circle, CAS), Library (hours, loan limits, fines), Infirmary (mental health, awareness programs, Health-Help Desk), OSA (AMDG, Conversación, Dialogo, Ignatian Leadership Camp, OrSem), CDBL (AI ethics), CITS (CAL Program), GPI (international exchange)
- **`organizations.md`** — Authority, recognition (15-member min), Greek-lettered ban, renewal, dissolution, membership (GPA 1.5 min; officers 2.0), reporting, moderators, postings, funds, fundraising, in-campus/off-campus/out-of-town activity guidelines, facility reservations, complete accredited org list SY 2024–2025

### Legal & Safety (Appendices)
- **`data-privacy.md`** — Full Data Privacy Act (DPA) compliance, data collection, uses, sharing, retention, rights, DPO contact info
- **`evacuation-procedures.md`** — General procedure, earthquake (6 phases), fire (4 assembly points), injury, bomb threat, full hotline numbers
- **`codi-protection-of-minors.md`** — CODI composition, offenses (Verbal/Visual/Dismissal/Expulsion), due process for Student-vs-Student and Faculty/Staff cases, appeals, preventive measures
- **`drug-testing.md`** — CHED CMO No. 18 s. 2018 implementing guidelines, DOH-accredited facilities, consultation requirements, conditions for admission/retention
- **`anti-hazing.md`** — RA 11053 (2018): definitions, prohibition, regulation of initiation rites, faculty adviser rules, registration, penalties (reclusion perpetua to prision correccional, ₱1M–₱3M fines)
- **`campus-journalism.md`** — RA 7079 (1991): student publication definition, funding, publication adviser role, security of tenure, press conferences, IRR, tax exemption

## Total Files: 18

## Suggested Use

For RAG ingestion, chunk each file independently. Topic-level granularity is preserved so the chatbot can retrieve focused, relevant context for queries like:

- "How many absences can I have in a 3-unit subject?" → `attendance.md`
- "What's the GPA requirement for Cum Laude?" → `grading.md`
- "What clubs can I join at AdZU?" → `organizations.md`
- "What happens if I commit a 4th minor violation?" → `discipline.md`
- "How do I report sexual harassment?" → `codi-protection-of-minors.md`
- "What are the penalties for hazing?" → `anti-hazing.md`
