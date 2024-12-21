import { guessInverse } from './morphology.js';
import defaultDictionary from '../assets/dictionary.json';

export function getInverseRelation(relation: string, dictionary: Record<string, string> = defaultDictionary): string {
  const trimmedRelation = relation.trim();
  
  if (dictionary[trimmedRelation]) {
    return dictionary[trimmedRelation];
  }
  return guessInverse(trimmedRelation);
}
