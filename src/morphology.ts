import { Inflectors } from 'en-inflectors';
import posTagger from 'wink-pos-tagger';

const tagger = posTagger();

function toPastParticiple(word: string): string {
  if (word.toLowerCase().endsWith('ed')) return word;
  return new Inflectors(word.toLowerCase()).toPastParticiple();
}

export function guessInverse(relation: string): string {
  relation = relation.trim();
  
  // check if relation is "X of" or "X by" and return X
  const lowerRelation = relation.toLowerCase();
  if ((lowerRelation.endsWith(' of') || lowerRelation.endsWith(' by'))) {
    return relation.slice(0, relation.length - 3).trim();
  }

  const tokens = tagger.tagRawTokens(relation.split(' '));
  const verbToken = tokens.find((t: any) => t.pos?.startsWith('V'));

  // Single word handling remains the same
  if (tokens.length === 1) {
    const token = tokens[0];
    if (!token.pos) return `${relation} of`;
    
    if (token.pos.startsWith('V')) {
      return `${toPastParticiple(token.value)} by`;
    }
    return `${token.value} of`;
  }

  // Multi-word handling: replace verb if found, then append "of"
  if (verbToken) {
    const relationWords = relation.split(' ');
    const verbIndex = relationWords.findIndex(word => 
      word.toLowerCase() === verbToken.value.toLowerCase()
    );
    relationWords[verbIndex] = toPastParticiple(verbToken.value);
    return `${relationWords.join(' ')} of`;
  }

  return `${relation} of`;
}
