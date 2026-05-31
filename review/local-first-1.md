# Review: `src/posts/2026-05-31-Local-first.md` (pass 1)

Reviewer: Claude Opus 4.7
Target: `src/posts/2026-05-31-Local-first.md`

Substantive issues first, polish below.

## Substantive

### 1. The title oversells
"Local-first Manifesto" sets up an Ink & Switch-level essay
([see below](#appendix-ink--switch-local-first-software)) — data ownership,
CRDTs, offline-first UX. The post is about *local development environments*.
Real topic, narrower scope, different audience. Compounding this: the earlier
`2026-05-29-lorem-ipsum.md` post uses "local-first" in its established sense
(learner's data on learner's device). Same blog, same term, two meanings.
The collision is the author's to resolve.

### 2. "Manifesto" is too heavy for what's on the page
A manifesto declares — boldly, quotably, absolutely. The bullets here are a
sensible engineering checklist hedged with "reasonable", "reasonably competent",
"non-essential". Either commit to manifesto energy and cut the hedges, or
rename it ("What I mean by local-first", "A local-first checklist").

### 3. Item 1 doesn't belong with the others
Items 2/3/4 are about *running and testing the system*. Item 1 ("understand
the project scope, goals, and status") is about *onboarding documentation* —
a different dimension entirely. It dilutes the thesis. Cut, or move to its
own framing.

### 4. "Non-essential stuff" smuggles the conclusion
The author's private justification — KC is essential for fintech, therefore
not excludable — is sound, but the *reader* doesn't have that context. They
see a phrase that lets anyone exclude anything they find inconvenient. The
opponents could use the same loophole. Either define the essentiality test
or drop the escape hatch.

### 5. Intro promises engagement with opponents, post doesn't deliver
Setup: "my opponents pointed to local testing burden imposed by KC". The
resource-overhead FAQ bullet (the one place that engaged this practical
objection) was dropped. The FAQ now addresses *philosophical* objections
(failure modes, unit tests) but not the *practical* one the intro raised.
A reader sympathetic to the opponents leaves unconvinced.

### 6. Item 3 is structurally broken
Items 1, 2, 4 are infinitive/conditional ("to understand…", "to run…", "if X
then Y"). Item 3 is declarative ("ability to run X is a must"). It also reads
"e2e, or integration, and unit tests" — the "or"/"and" mix is incongruent.
Use one connector throughout.

## Polish

### 7. The Google Cloud line is asserted, not argued
"Better ops and dev experience" assumes a causal chain (internal local-first
→ better external product) that isn't demonstrated. Google Cloud's DX problems
are usually attributed to organizational fragmentation, not absence of
local-first practices. The post would be tighter without the GCP aside —
keep the Search/YouTube point.

### 8. Tonal drift
The post veers between casual ("So here goes", "Size does matter, folks",
"me thinks") and bureaucratic ("any reasonably competent newcomer",
"deployment scenarios variability"). Pick a register or use the contrast
deliberately.

### 9. The closing "reasonable competence expectations" is defensive
Ending on a preempt against accusations of elitism is a weak landing. A
manifesto closes on what it stands *for*, not what it dismisses.

## Verdict
The bones are good — the argument is real, the structure works, the FAQ
format is appropriate. Issues 1, 3, 4, 5 are substantive and worth addressing
before publication. The rest is polish.

## Appendix: Ink & Switch local-first software

A 2019 essay by Martin Kleppmann, Adam Wiggins, Peter van Hardenberg, and
Mark McGranaghan, published by Ink & Switch — an industrial research lab
focused on tools for thought.

Full title: **"Local-first software: You own your data, in spite of the cloud."**

The essay argues that cloud apps gave us collaboration and sync at the cost
of data ownership, longevity, and offline use, and proposes "local-first
software" as a path that keeps both. It defines seven ideals:

1. No spinners — instant response to user input
2. Your work is not trapped on one device
3. The network is optional
4. Seamless collaboration with colleagues
5. The long now — data outlives the app and the company
6. Security and privacy by default
7. You retain ultimate ownership and control

Technically, it leans heavily on **CRDTs** (Conflict-free Replicated Data
Types) as the substrate that makes peer-to-peer collaboration possible
without a central server arbitrating writes. Ink & Switch's own Automerge
library is the canonical implementation.

It is the piece that established "local-first" as a term of art in the field.
When someone uses "local-first" today without further qualification, they
almost always mean this. That is why the post's title clashes — same flag,
different hill (local *development* environments, not local *user data*).

Reference: https://www.inkandswitch.com/local-first/
