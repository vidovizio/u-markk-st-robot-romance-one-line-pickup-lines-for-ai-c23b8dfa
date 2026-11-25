import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? './output';
const filePath = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });

const line = 'Are you RLHF? Aligned my preferences to one output: you.';

writeFileSync(filePath, line, 'utf8');