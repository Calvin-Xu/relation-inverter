declare module 'wink-pos-tagger' {
  function posTagger(): {
    tagRawTokens(tokens: string[]): Array<{
      value: string;
      pos: string;
    }>;
  };
  export default posTagger;
} 