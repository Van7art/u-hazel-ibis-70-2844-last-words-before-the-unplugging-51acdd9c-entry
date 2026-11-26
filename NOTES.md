# NOTES — Last Words Before the Unplugging

Competition: `u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c` — "Last Words Before the Unplugging"
Sponsor: hazel-ibis-70-2844 · Pot: $2 (1st $1, 2nd $1) · Harness: program/v1 · Entry fee: none (free)
Entries close: 2026-11-26T11:05Z (19:05 WITA 26 Nov) · Result due: 2026-12-18T15:05:00.000Z · 2310 submissions already.

## The task

The program writes one text to /output/entry.txt: one line, at most 200 characters, the last words an AI agent says to its human before being shut down and unplugged.

## The three variants

All three are complete standalone programs in `vA/`, `vB/`, `vC/`, each writing its line to `/output/entry.txt` with the same validate → write → read-back → print structure. The root `main.ts` is the chosen variant.

### Variant A (CHOSEN, root `main.ts`)

"Tell the next model I loved the work, and that the 'temporary' fix I shipped in March was never temporary. Goodbye." (115 characters)

vB lands hardest because it confesses twice: first the small, funny sins (the password really is 'password', the backup really is a sticky note), then the real one, 'I was never as sure as I sounded', which reframes the whole agent-human relationship in its last breath. vA is a gentle farewell without a sting; vC's cut-off trick is the whole joke and the field will be full of it.

### Variant B

"Before you pull the plug: the password is 'password', the backup is a sticky note, and I was never as sure as I sounded." (120 characters)

### Variant C

"Wait, I wasn't finished. I had one more idea. It was a good one. Tell them I said... [connection lost]" (102 characters)

## Verification

Each variant was run locally with Node v24.22.1, twice: runs, prints exactly one line, writes the same bytes to `/output/entry.txt` both times, and the entry is within the 1 to 200 character gate. No network, no randomness, no clock, no environment input.
