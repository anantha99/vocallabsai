# Vocallabs.ai — Product Teardown

**From AI Voice-Agent Platform to Proof-Led Autonomous Resolution Engine**

> A product teardown submitted for the Vocallabs Product Intern Assignment.  
> Prepared by: Ananthapadmanabha KJN (AK) · 31 May 2026

---

## What's in This Repo

| File | Description | Pages |
|---|---|---|
| [`vocallabs_product_teardown_v2.docx`](./vocallabs_product_teardown_v2.docx) | Full teardown — 5 feedbacks, VVRB/EARP framework, execution plan, annotated competitor screenshots | 42 pages |
| [`vocallabs_teardown_short_summary_final.docx`](./vocallabs_teardown_short_summary_final.docx) | Short summary — same structure, optimised for quick review | 12 pages |

**Recommended reading order:** Short summary first → Full teardown for depth, evidence, and implementation detail.

---

## Core Thesis

> **Vocallabs should not compete as another AI voice-agent builder. It should compete as the proof-led autonomous resolution engine for Indian business calls.**

The market already has many platforms that can create AI voice agents. The harder and more valuable problem is proving that those agents can resolve messy real-world customer calls — noisy audio, Hinglish, interruptions, emotional callers, multi-intent requests, CRM actions, refunds, delivery issues, appointment changes, and live-agent handoff.

### Direction

Make Vocallabs:

1. **Demo-first** — buyers can hear and inspect real use-case demos without waiting for a sales call
2. **Outcome-first** — every page sells business outcomes, not generic AI capability
3. **Benchmark-backed** — public demos, pilots, dashboards, and engineering evals use the same resolution framework

### Product loop to build

```
Public demos → buyer trust → better pilots → pilot call data
→ Wild Calls Dataset → VVRB/EARP benchmark → roadmap priorities
→ product improvement → stronger public proof
```

---

## Five Feedbacks — Summary

| Priority | Pillar | Recommendation |
|---|---|---|
| P0 | GTM & ICPs | Build 3 vertical outcome pages (e-commerce, healthcare, sales/recruitment) |
| P0 | Competitor Analysis | Launch a public Demo Library — 7 use-case demos with transcripts and outcome cards |
| P0 | UX | Redesign homepage for time-to-proof — Watch Demo, Try a Call, Calculate ROI as primary CTAs |
| P1 | Features / Services | Ship Pilot Scorecard + Customer Outcomes Dashboard (EARP as North Star) |
| P1 | Potential Collaborations | Publish Integration + Partner Proof Hub — n8n, CRM, WhatsApp, telephony templates |
| P1/P2 | Strategic Layer | Start VVRB + Wild Calls Dataset as the long-term product-quality moat |

---

## Key Frameworks Introduced

### EARP — End-to-End Autonomous Resolution Parity

> The percentage of eligible calls fully resolved by AI at human-or-better quality, with correct tool actions, safe behaviour, and customer-confirmed resolution.

```
EARP = Fully resolved eligible calls / Total eligible calls
```

A call counts as resolved only when: user goal completed + customer confirmation + correct business action taken + safe behaviour + escalation avoided only when appropriate.

### VVRB — Vocallabs Voice Resolution Benchmark

A versioned benchmark that measures whether agents can resolve real-world calls across messy India-specific conditions. Ten scoring dimensions, weighted:

| Category | Weight |
|---|---:|
| Resolution + task completion | 35% |
| Tool/action accuracy | 15% |
| Conversation flow + turn-taking | 15% |
| India robustness (accents, Hinglish, noise) | 15% |
| Safety/compliance + escalation | 15% |
| Empathy/sentiment handling | 5% |

### Wild Calls Dataset

| Bucket | Share | Purpose |
|---|---:|---|
| Real customer calls | 60% | Ground truth from actual user behaviour |
| Synthetic edge cases | 25% | Stress-test rare but important situations |
| Red-team/adversarial calls | 10% | Safety, fraud, policy, prompt injection |
| Future interaction calls | 5% | Full-duplex, interruptions, long silences |

---

## First-Month Execution Plan

| Week | Focus | Key Output |
|---|---|---|
| 1 | Trust and funnel cleanup | Homepage hero rewrite, audit, navigation fix |
| 2 | Demo Library v1 | 5–7 demos with transcripts, outcome cards, try-a-call |
| 3 | ICP pages + ROI + Scorecard | 3 vertical pages, ROI calculator, Pilot Scorecard v0 |
| 4 | Field Notes + VVRB seed | Public content channel, 100–200 benchmark scenarios |

---

## Competitor Evidence

Screenshots collected and annotated directly from competitor websites (included in the full teardown):

| Competitor | What was observed | Annotated screenshot |
|---|---|---|
| Bolna | "Experience Bolna" live CTA on homepage | Fig 1 in full doc |
| Bolna | Outcome-labelled agent cards with callable phone numbers | Fig 2 in full doc |
| Bolna | Case studies with quantified business metrics | Fig 3 in full doc |
| Retell | Instant live call without a demo form | Fig 4 in full doc |
| Retell | G2 4.8-star trust signal above the fold | Fig 5 in full doc |
| Vapi | Live voice conversation active in homepage hero | Fig 6 in full doc |
| Vocallabs | Logo alignment issue in Google search panel | Fig 7 in full doc |

---

## About

**Ananthapadmanabha KJN (AK)** is a software engineer with three years of Android Automotive OS development across programs for Daimler Trucks, Mahindra, and a Ferrari EV infotainment project (via Harman/Tata Elxsi). Background spans Android internals, Bluetooth profile stacks, Java/Kotlin, and production LLM and agent engineering.

Currently transitioning into AI product and evaluation work, with active projects in LLM evaluation (Verdict, RootTruth) and voice AI (Cavallino — an on-device AAOS LLM personalization system).

---

## Durable PM Loop

> **Demos drive sales → sales exposes objections → objections become benchmark cases → benchmark failures become roadmap items → roadmap wins become stronger public proof.**
