import { Locale, DEFAULT_LOCALE } from '../config';
import { Dictionary } from '../types';
import { en } from './en';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { ko } from './ko';
import { ja } from './ja';
import { zh } from './zh';
import { zhTw } from './zh-tw';

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  de,
  es,
  fr,
  it,
  ko,
  ja,
  zh,
  'zh-tw': zhTw,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}
