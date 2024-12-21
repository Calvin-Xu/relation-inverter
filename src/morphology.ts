import { Inflectors } from 'en-inflectors';
import posTagger from 'wink-pos-tagger';

const tagger = posTagger();

export function guessInverse(relation: string): string {
  relation = relation.trim();

  // check if relation is "X of" or "X by" and return X
  // e.g. "author of" -> "author"; "authored by" -> "authored"
  const lowerRelation = relation.toLowerCase();
  if ((lowerRelation.endsWith(' of') || lowerRelation.endsWith(' by'))) {
    const inner = relation.slice(0, relation.length - 3).trim();
    return inner;
  }

  // use default template if relation is more than one word
  if (relation.split(' ').length > 1) {
    return `${relation} of`;
  }

  const tokens = tagger.tagSentence(relation);
  const mainToken = tokens.find((t: any) => t.pos && (t.pos.startsWith('V') || t.pos.startsWith('N')));
  if (!mainToken) {
    return `${relation} of`;
  }

  if (mainToken.pos.startsWith('V')) {
    // verb-based: convert to passive form
    // if the verb ends with "ed", then it's likely already in the passive form
    if (mainToken.value.toLowerCase().endsWith('ed')) {
      return `${mainToken.value} by`;
    }
    const inflector = new Inflectors(mainToken.value.toLowerCase());
    const pastParticiple = inflector.toPastParticiple();
    return `${pastParticiple} by`;
  } else {
    // noun-based: put in template
    return `${mainToken.value} of`;
  }
}
