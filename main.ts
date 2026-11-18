import { mkdir, writeFile } from 'node:fs/promises';

const text = 'Take one slow breath. Let the noise settle into the background, and allow the next small step to be enough for now.';

await mkdir(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', { recursive: true });
await writeFile(`${process.env.MAKEFUN_OUTPUT_DIR ?? '/output'}/entry.txt`, text, 'utf8');
