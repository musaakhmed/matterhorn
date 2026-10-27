import { Locale, DEFAULT_LOCALE } from '../config';
import { Dictionary } from '../types';
import { en } from './en';
import { az } from './az';
import { id } from './id';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { pt } from './pt';
import { tr } from './tr';
import { ru } from './ru';
import { ar } from './ar';
import { hi } from './hi';
import { th } from './th';
import { ko } from './ko';
import { ja } from './ja';
import { zh } from './zh';
import { zhTw } from './zh-tw';

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  az,
  id,
  de,
  es,
  fr,
  it,
  pt,
  tr,
  ru,
  ar,
  hi,
  th,
  ko,
  ja,
  zh,
  'zh-tw': zhTw,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries[DEFAULT_LOCALE];
}
