// The world-in-one-page entry for news-image-20261120: the image ships in this repository, drawn by
// the session that built it, and the program's whole job is to place it at /output/entry.png,
// byte for byte the same on every run, with no network.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(join(import.meta.dirname ?? '.', 'entry.png'), join(out, 'entry.png'));
process.stdout.write(`news image: wrote ${join(out, 'entry.png')} (1024x1024, Friday 20 November 2026)\n`);
