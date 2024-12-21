import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { guessInverse } from '../morphology.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface DictionaryEntry {
  [key: string]: string;
}

function validateInverses(): void {
  const dictionaryPath = join(__dirname, '../../assets/dictionary.json');
  const dictionary: DictionaryEntry = JSON.parse(
    readFileSync(dictionaryPath, 'utf-8')
  );

  // test each entry and collect failures
  const failures: DictionaryEntry = {};
  Object.entries(dictionary).forEach(([relation, expectedInverse]) => {
    const guessed = guessInverse(relation);
    if (guessed !== expectedInverse) {
      failures[relation] = expectedInverse;
    }
  });

  // write failures to a new file
  const failuresPath = join(__dirname, '../../assets/inverse-failures.json');
  writeFileSync(
    failuresPath, 
    JSON.stringify(failures, null, 2),
    'utf-8'
  );

  console.log(`Found ${Object.keys(failures).length} failures out of ${Object.keys(dictionary).length} entries`);
  console.log('Failures have been written to assets/inverse-failures.json');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  validateInverses();
} 