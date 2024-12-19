import * as fs from 'fs';
import * as path from 'path';

interface InverseDictionary {
    [key: string]: string;
}

let loadedDictionary: InverseDictionary = {};

let loaded = false;

export function loadDictionary(): InverseDictionary {
  if (loaded) {
    return loadedDictionary;
  }
  const dictionaryPath = path.join(__dirname, '../assets/dictionary.json');
  const rawData = fs.readFileSync(dictionaryPath, 'utf8');
  loadedDictionary = JSON.parse(rawData);

  loaded = true;
  return loadedDictionary;
}
