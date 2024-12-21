import { Inflectors } from 'en-inflectors';
import posTagger from 'wink-pos-tagger';

const tagger = posTagger();

const auxiliaryVerbs = new Set([
  'will', 'would', 'may', 'might', 'can', 'could', 'shall', 'should',
  'must', 'ought', 'be', 'am', 'is', 'are', 'was', 'were',
  'do', 'does', 'did', 'have', 'has', 'had'
]);

function toPastParticiple(word: string): string {
  if (word.toLowerCase().endsWith('ed')) return word;
  return new Inflectors(word.toLowerCase()).toPastParticiple();
}

// flip the comparison if it is more than or less than
function handleMoreLess(tokens: any[]): string | null {
  if (tokens.length < 3) return null;
  
  const firstWord = tokens[0].value.toLowerCase();
  const lastWord = tokens[tokens.length - 1].value.toLowerCase();
  
  if (lastWord !== 'than') return null;
  
  if (firstWord === 'more') {
    const middle = tokens.slice(1, -1).map(t => t.value).join(' ');
    return `less ${middle} than`;
  }
  
  if (firstWord === 'less') {
    const middle = tokens.slice(1, -1).map(t => t.value).join(' ');
    return `more ${middle} than`;
  }
  
  return null;
}

export function guessInverse(relation: string): string {
  relation = relation.trim();
  const lowerRelation = relation.toLowerCase();
  
  // handle "is " prefix
  if (lowerRelation.startsWith('is ')) {
    relation = relation.slice(3);
  }

  if (lowerRelation.startsWith('has been ')) {
    relation = relation.slice(9);
  } else if (lowerRelation.startsWith('have been ')) {
    relation = relation.slice(10);
  }
  
  // check if relation is "X of" or "X by" and return X
  if (lowerRelation.endsWith(' of') || lowerRelation.endsWith(' by')) {
    return relation.slice(0, relation.length - 3).trim();
  }

  const tokens = tagger.tagRawTokens(relation.split(' '));
  
  const comparisonResult = handleMoreLess(tokens);
  if (comparisonResult) return comparisonResult;

  const verbToken = tokens.find((t: any) => t.pos?.startsWith('V'));

  if (tokens.length === 1) {
    const token = tokens[0];
    if (!token.pos) return `${relation} of`;
    
    if (token.pos.startsWith('V')) {
      return `${toPastParticiple(token.value)} by`;
    }
    return `${token.value} of`;
  }

  if (verbToken) {
    const relationWords = relation.split(' ');
    const verbIndex = relationWords.findIndex(word => 
      word.toLowerCase() === verbToken.value.toLowerCase()
    );
    
    // check for auxiliary verb before the main verb
    const hasAuxiliary = verbIndex > 0 && 
      auxiliaryVerbs.has(relationWords[verbIndex - 1].toLowerCase());

    relationWords[verbIndex] = toPastParticiple(verbToken.value);
    
    // insert 'be' after auxiliary if present
    if (hasAuxiliary) {
      relationWords.splice(verbIndex, 0, 'be');
    }
    
    return `${relationWords.join(' ')} by`;
  }

  return `${relation} of`;
}
