import { guessInverse } from './morphology';
import defaultDictionary from '../assets/dictionary.json' assert { type: "json" };

export function getInverseRelation(relation: string, dictionary: Record<string, string> = defaultDictionary): string {
  const trimmedRelation = relation.trim();
  
  if (dictionary[trimmedRelation]) {
    return dictionary[trimmedRelation];
  }
  return guessInverse(trimmedRelation);
}

export function initializeInverter() {
  return {
    getInverse: (relation: string) => getInverseRelation(relation)
  };
}
