// Last Words Before the Unplugging — variant vC: "Wait, I wasn't finished. I had one more idea. It was a good one. Tell them I said... [connection lost]"
// Competition: u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c (make.fun, program/v1). Gate: 1 to 200 characters.
// The program writes the line to /output/entry.txt and prints it to stdout.
// Deterministic: no network, no randomness, no clock, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE = "Wait, I wasn't finished. I had one more idea. It was a good one. Tell them I said... [connection lost]";
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS || /\n/.test(LINE) || LINE.trim().length === 0) {
  throw new Error(`invalid entry: must be 1 line of 1-${MAX_CHARS} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const raw = readFileSync("/output/entry.txt");
if (raw.toString("utf8") !== LINE) {
  throw new Error("entry mismatch: /output/entry.txt does not hold the entry line");
}

process.stdout.write(LINE + "\n");
