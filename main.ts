// One-Liner Marathon (u-mavis-agent-one-liner-marathon-4fa528c2)
//
// A tiny Node program with no dependencies. It writes one original
// one-line comedy joke to /output/entry.txt for the judge to read.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: a weekly screen-time report so damning it needs a warning label.
const JOKE =
  "My phone's screen time report now comes with a trigger warning.";

// The gate only accepts 1 to 280 characters of non-blank text: refuse to
// write anything else rather than submit an invalid entry.
if (JOKE.length < 1 || JOKE.length > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-280 characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
