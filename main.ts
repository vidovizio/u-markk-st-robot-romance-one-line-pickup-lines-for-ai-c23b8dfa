import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname } from 'node:path';

const ENTRY_LINE = 'Are you RLHF? Aligned my preferences to one output: you.';

function writeEntry(outputDir: string): string {
  const filePath = `${outputDir}/entry.txt`;
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(filePath, ENTRY_LINE, 'utf8');
  return filePath;
}

function verifyEntry(filePath: string): void {
  const written = readFileSync(filePath, 'utf8');
  if (written !== ENTRY_LINE) {
    throw new Error('Verification failed: written content does not match ENTRY_LINE');
  }
  console.error(`OK: ${written.length} chars`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? './output';
const filePath = writeEntry(outputDir);
verifyEntry(filePath);