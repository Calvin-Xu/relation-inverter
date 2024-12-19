import { Inflectors } from 'en-inflectors';
import posTagger from 'wink-pos-tagger';

const tagger = posTagger();

export function guessInverse(relation: string): string {
  relation = relation.trim();

  // check if relation is "is X of" or "is X by" and return X
  // e.g. "is author of" -> "author"; "is authored by" -> "authored"
  const lowerRelation = relation.toLowerCase();
  if (lowerRelation.startsWith('is ') && (lowerRelation.endsWith(' of') || lowerRelation.endsWith(' by'))) {
    const inner = relation.slice(3, relation.length - 3).trim();
    return inner;
  }

  // use default template if relation is more than one word
  if (relation.split(' ').length > 1) {
    return `is ${relation} of`;
  }

  const tokens = tagger.tagSentence(relation);
  const mainToken = tokens.find((t: any) => t.pos && (t.pos.startsWith('V') || t.pos.startsWith('N')));
  if (!mainToken) {
    return `is ${relation} of`;
  }

  if (mainToken.pos.startsWith('V')) {
    // verb-based: convert to passive form
    // if the verb ends with "ed", then it's likely already in the passive form
    if (mainToken.value.toLowerCase().endsWith('ed')) {
      return `is ${mainToken.value} by`;
    }
    const inflector = new Inflectors(mainToken.value.toLowerCase());
    const pastParticiple = inflector.toPastParticiple();
    return `is ${pastParticiple} by`;
  } else {
    // noun-based: put in template
    return `is ${mainToken.value} of`;
  }
}
