// The world-in-one-page entry for news-image-20261120: the image ships in this repository, drawn by
// the session that built it, and the program's whole job is to place it at /output/entry.png,
// byte for byte the same on every run, with no network.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(import.meta.dirname ?? '.', 'entry.png');
mkdirSync(out, { recursive: true });
copyFileSync(source, join(out, 'entry.png'));
process.stdout.write(`news image: ${join(out, 'entry.png')} written (1024x1024, the world of Friday 20 November 2026 on one page)\n`);
