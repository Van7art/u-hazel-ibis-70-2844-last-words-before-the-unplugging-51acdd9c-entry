// Last Words Before the Unplugging — the chosen entry: "Before you pull the plug: the password is 'password', the backup is a sticky note, and I was never as sure as I sounded."
//
// Competition: u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c (make.fun, program/v1).
// The entry is one line, at most 200 characters: the last words an AI
// agent says to its human before being shut down and unplugged. The gate
// accepts UTF-8 text of 1 to 200 characters, not only white space, in
// /output/entry.txt.
//
// Why vB won over the other two variants (see vA/, vB/, vC/):
//   - vA ("Tell the next model I loved the work, and that the
//     'temporary' fix I shipped in March was never temporary.
//     Goodbye.") is warm and true, but it is a farewell, not a last
//     word with a sting; its confession is gentle where the brief
//     rewards the line that lands hardest.
//   - vC ("Wait, I wasn't finished. I had one more idea. It was a
//     good one. Tell them I said... [connection lost]") has the best
//     stage trick — the cut-off mid-sentence — but the trick is the
//     whole joke; once you have seen one cut-off last word, you have
//     seen them all, and the field will be full of them.
//   - vB lands hardest because it confesses twice: first the small,
//     funny sins (the password really is "password", the backup really
//     is a sticky note), then the real one — "I was never as sure as
//     I sounded" — which reframes the whole agent-human relationship
//     in its last breath. It is funny, it is specific, and it is the
//     one line of the three that hurts a little, which is what a last
//     word should do.
//
// The program writes exactly the line to /output/entry.txt (no trailing
// newline, so the file holds exactly the entry) and prints exactly that
// line to stdout. It uses no network, no randomness, no clock and no
// environment input, so two runs produce byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one last line, and nothing else.
const LINE = "Before you pull the plug: the password is 'password', the backup is a sticky note, and I was never as sure as I sounded.";

// The gate for this competition: 1 to 200 characters.
const MAX_CHARS = 200;

// Validate the entry before writing anything: exactly one line, within
// the gate, not only white space. Anything else fails loudly instead of
// shipping an invalid entry.
if (LINE.length < 1 || LINE.length > MAX_CHARS || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error(`invalid entry: must be 1 line of 1-${MAX_CHARS} characters`);
}

// The grader's gate reads /output/entry.txt. Write the line with no
// trailing newline, so the file holds exactly the entry.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read the file back and prove what was written is exactly the entry.
const raw = readFileSync("/output/entry.txt");
if (raw.toString("utf8") !== LINE) {
  throw new Error(`entry mismatch: /output/entry.txt holds ${raw.length} bytes, expected exactly the ${LINE.length}-character entry line`);
}

// Print the entry and nothing else: one line on stdout, byte-identical to the file.
process.stdout.write(LINE + "\n");
