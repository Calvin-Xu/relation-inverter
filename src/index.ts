import { loadDictionary } from './dictionary';
import { guessInverse } from './morphology';

export function getInverseRelation(relation: string): string {
  const dict = loadDictionary();
  const trimmedRelation = relation.trim();
  
  if (dict[trimmedRelation]) {
    return dict[trimmedRelation];
  }
  return guessInverse(trimmedRelation);
}
