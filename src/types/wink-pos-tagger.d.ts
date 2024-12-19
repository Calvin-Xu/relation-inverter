declare module 'wink-pos-tagger' {
  function posTagger(): {
    tagSentence(text: string): Array<{
      value: string;
      pos: string;
    }>;
  };
  export default posTagger;
} 