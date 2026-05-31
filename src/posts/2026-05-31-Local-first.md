---
title: "Local-first Manifesto"
description: "Why any project should go local-first from day one"
---

Bits of context: I'm working in a mid-sized team on a potentially large 
multifaceted project encompassing mission-critical fintech applications
for *serious business*.

Recently, a discussion erupted on whether we should turn Keycloak (KC)
identity provider integration *OFF* for local testing. I'm in favor of
always-on KC, on the grounds of minimising deployment scenarios variability
and failure modes count.  My opponents pointed to local testing
burden imposed by KC, and at times one could think that I don't cater
for those needs. Nothing can be further from the truth. So here goes:
 

## My local-first manifesto

Any project should be constructed in a manner allowing any reasonably
competent newcomer (no matter a software engineer, a tester, PM or BA
they are) with a reasonable effort
1. to understand the project scope, goals, and status
2. to run the whole system minus non-essential stuff on a system under
   their full control, be it a MacBook, Linux machine, or Windows
   laptop spec'ed appropriately
3. ability to run *e2e*, or *integration*, and *unit tests* is
   a **must**, with well-documented knobs for **test isolation**
4. if the person in question desires to offload some tasks to a shared
   (e.g. cloud) resources, they should have enough ephemeral resources
   at their disposal, along with scripts to do so in a responsible
   manner, and deterministically

## FAQ
- Are you serious? How can Google or Starship be constructed in such a
  manner? - The core Google Search, or Cloud, or YouTube should be built
  this way at the *Google of my dream*. Were it built this way, maybe
  we'd have a much nicer Google Cloud — better ops and dev experience.
  As for a private space company: sure, you cannot run Raptor engine on
  a Macbook, or in any cloud. It cannot be simulated easily either.
  Though the simulation software should be buildable, runnable and testable,
  at a certain scale. Size does matter, folks — as do
  reasonable competence expectations.
- But KC in your example itself introduces failure modes: misconfigured
  realm, clock skew, expired certs... - Correct. The point is to surface
  those on your laptop, not in production. A failure mode you can reproduce
  locally is containable; one you can only hit in staging is a crisis.
- Does this mean unit tests must run against KC too? - No. They mock
  at the auth boundary — that is normal test isolation, not "turning KC off".
  The distinction matters.
