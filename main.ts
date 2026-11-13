// Entry: copies the generated entry.png to /output/entry.png.
// The image is the entry; the program is a one-line copy.
// Image: November 13 2026 in one frame — a glowing green GPU chip over
// a headquarters at dusk, a red falling stock arrow (Nvidia CEO Jensen
// Huang resigned, shares -14%), and a French warship at sea (first
// French warship visit to Syria, Latakia). Editorial illustration.
// Output is a whole PNG under 1 MiB.
// Repo makefun-news-image-v2: created AFTER news-image-01 opened (03:00 WIB
// 14 Nov 2026) — the first repo was created before open and was refused.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
