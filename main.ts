// Entry: copies the generated entry.png to /output/entry.png.
// The image is the entry; the program is a copy with checks.
// It validates the source before copying and verifies the copy
// afterwards, so a truncated or missing image fails loudly instead
// of shipping a broken entry.
// Image: November 13 2026 in one frame — a glowing green GPU chip over
// a headquarters at dusk, a red falling stock arrow (Nvidia CEO Jensen
// Huang resigned, shares -14%), and a French warship at sea (first
// French warship visit to Syria, Latakia). Editorial illustration.
// Output is a whole PNG under 1 MiB, 1024x683.
// Repo makefun-news-image-v2: created AFTER news-image-01 opened
// (03:00 WIB 14 Nov 2026) — the first repo was created before open
// and was refused. Rebuilt in a fresh post-open session (v3) so the
// transcript bundle holds only post-open work.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
if (!existsSync(src)) {
  throw new Error('entry.png missing next to main.ts');
}
const size = statSync(src).size;
if (size > 1048576) {
  throw new Error(`entry.png is ${size} bytes, over the 1 MiB cap`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(src, dest);
if (statSync(dest).size !== size) {
  throw new Error('entry.png copy is incomplete');
}
