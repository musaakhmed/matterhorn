import {
  GuideArticle,
  GuideCategory,
  GuideComparisonTable,
  GuideFaq,
  GuideSection,
  GUIDES,
} from '../guides';
import { Locale } from './config';
import { deGuides } from './guides/de';
import { frGuides } from './guides/fr';
import { itGuides } from './guides/it';
import { esGuides } from './guides/es';
import { zhGuides } from './guides/zh';
import { zhTwGuides } from './guides/zh-tw';
import { jaGuides } from './guides/ja';
import { koGuides } from './guides/ko';

export interface GuideTranslation {
  title?: string;
  shortTitle?: string;
  description?: string;
  category?: string;
  heroStat?: { label: string; value: string; detail: string };
  keyTakeaways?: string[];
  comparisonTable?: GuideComparisonTable;
  sections?: GuideSection[];
  faqs?: GuideFaq[];
}

const GUIDE_TRANSLATIONS: Partial<Record<Locale, Record<string, GuideTranslation>>> = {
  de: deGuides,
  fr: frGuides,
  it: itGuides,
  es: esGuides,
  zh: zhGuides,
  'zh-tw': zhTwGuides,
  ja: jaGuides,
  ko: koGuides,
  ru: {
    'gornergrat-vs-glacier-paradise': {
      title: 'Горнерграт против Glacier Paradise: с какой смотровой площадки Маттерхорн выглядит лучше?',
      shortTitle: 'Горнерграт или Glacier Paradise',
      description: 'Сравнение высоты, зубчатой железной дороги и канатной дороги, ракурсов и облачности двух главных смотровых площадок Церматта.',
      category: 'Смотровые площадки',
    },
    'best-time-to-see-matterhorn': {
      title: 'Погода в Церматте по месяцам | Когда видеть Маттерхорн',
      shortTitle: 'Лучшее время для визита',
      description: 'Анализ утренней и дневной видимости, сезонная вероятность ясного неба и золотые часы Церматта.',
      category: 'Климатология',
    },
    'zermatt-cloudy-rainy-day-guide': {
      title: 'Что делать в Церматте в туман и дождь: умный план на случай плохой погоды',
      shortTitle: 'План на случай непогоды',
      description: 'Ущелье Горнер, музей Маттерхорна, альпийские спа и защищенные прогулки среди лиственниц, когда вершина скрыта облаками.',
      category: 'Непогода',
    },
    'best-matterhorn-photo-viewpoints': {
      title: 'Лучшие фотолокации Маттерхорна и точки для съемки рассвета в Церматте',
      shortTitle: 'Фотолокации и рассвет',
      description: 'Точные координаты, время в пути и углы освещения: Кирхбрюкке, Риффельзее, Штеллизее и Мюрини.',
      category: 'Фотография',
    },
    'matterhorn-banner-cloud-fohn-wind': {
      title: 'Почему над вершиной Маттерхорна часто висит облако-флаг? Физика фена',
      shortTitle: 'Облако-флаг и фен',
      description: 'Атмосферная физика знаменитого подветренного облака-шлейфа, возникающего даже в идеально ясные дни.',
      category: 'Метеорология',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      title: 'Поезд Цюрих–Церматт | Время, пересадка в Фисп',
      shortTitle: 'Поездка из Цюриха и Женевы',
      description: 'Пересадки в Фисп, время в пути и золотое правило Go/No-Go перед посадкой на поезд SBB.',
      category: 'Однодневные туры',
    },
  },
  pt: {
    'gornergrat-vs-glacier-paradise': {
      title: 'Gornergrat vs. Glacier Paradise: Qual o melhor mirante para ver o Matterhorn?',
      shortTitle: 'Gornergrat vs Glacier Paradise',
      description: 'Altitude, trem de cremalheira vs teleférico, ângulos de visão e tempo nos dois mirantes icônicos de Zermatt.',
      category: 'Mirantes',
    },
    'best-time-to-see-matterhorn': {
      title: 'Tempo em Zermatt por mês | Melhor hora para ver o Matterhorn',
      shortTitle: 'Melhor época e hora',
      description: 'Por que dezembro e janeiro têm 88%+ de céu limpo, enquanto as tardes de verão acumulam nuvens convectivas.',
      category: 'Climatologia',
    },
    'zermatt-cloudy-rainy-day-guide': {
      title: 'O que fazer em Zermatt quando o Matterhorn está nublado (Guia de mau tempo)',
      shortTitle: 'Guia para dias nublados',
      description: 'Economize seus 100+ CHF de teleférico na neblina e explore desfiladeiros, museus e spas alpinos em Zermatt.',
      category: 'Mau tempo',
    },
    'best-matterhorn-photo-viewpoints': {
      title: 'Melhores pontos para fotografar o Matterhorn e o nascer do sol em Zermatt',
      shortTitle: 'Melhores fotos e alvorada',
      description: 'Localizações exatas, caminhadas e luz ideal: Kirchbrücke, Stellisee, Riffelsee e Mürini.',
      category: 'Fotografia',
    },
    'matterhorn-banner-cloud-fohn-wind': {
      title: 'Por que o Matterhorn quase sempre tem uma nuvem no topo? Física do Föhn',
      shortTitle: 'Nuvem em bandeira e Föhn',
      description: 'A física por trás da famosa nuvem orográfica que surge mesmo sob céu azul límpido.',
      category: 'Meteorologia',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      title: 'Trem Zurique–Zermatt | Horários, baldeação em Visp',
      shortTitle: 'Passeio de Zurique ou Genebra',
      description: 'Conexões em Visp, tempos de viagem e regra Go/No-Go para decidir antes de embarcar.',
      category: 'Passeios de 1 dia',
    },
  },
  id: {
    'gornergrat-vs-glacier-paradise': {
      title: 'Gornergrat vs. Glacier Paradise: Sudut Pandang Mana yang Terbaik untuk Matterhorn?',
      shortTitle: 'Gornergrat vs Glacier Paradise',
      description: 'Perbandingan ketinggian, kereta gerigi vs kereta gantung, sudut pandang, dan cuaca di dua gardu pandang utama Zermatt.',
      category: 'Gardu Pandang',
    },
    'best-time-to-see-matterhorn': {
      title: 'Cuaca Zermatt per bulan | Waktu terbaik melihat Matterhorn',
      shortTitle: 'Waktu Terbaik Berkunjung',
      description: 'Analisis visibilitas pagi vs sore dan probabilitas langit cerah sepanjang musim di Zermatt.',
      category: 'Klimatologi',
    },
    'zermatt-cloudy-rainy-day-guide': {
      title: 'Aktivitas di Zermatt Saat Matterhorn Tertutup Awan (Panduan Cuaca Buruk)',
      shortTitle: 'Panduan Cuaca Buruk',
      description: 'Hemat tiket kereta gantung 100+ CHF dan jelajahi ngarai Gornerschlucht, museum, serta spa alpine.',
      category: 'Rencana Alternatif',
    },
    'best-matterhorn-photo-viewpoints': {
      title: 'Spot Foto Matterhorn Terbaik & Lokasi Sunrise di Zermatt',
      shortTitle: 'Spot Foto & Sunrise',
      description: 'Lokasi persis, waktu jalan kaki, dan sudut cahaya terbaik: Kirchbrücke, Riffelsee, Stellisee, dan Mürini.',
      category: 'Fotografi',
    },
    'matterhorn-banner-cloud-fohn-wind': {
      title: 'Mengapa Puncak Matterhorn Selalu Dikelilingi Awan? Fisika Angin Föhn',
      shortTitle: 'Awan Bendera & Föhn',
      description: 'Fisika di balik awan bendera legendaris yang berkibar di puncak bahkan saat langit cerah tanpa awan.',
      category: 'Meteorologi',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      title: 'Kereta Zurich ke Zermatt | Jadwal dan ganti di Visp',
      shortTitle: 'Day Trip dari Zurich/Jenewa',
      description: 'Panduan transfer kereta di Visp dan aturan Go/No-Go sebelum Anda naik kereta SBB.',
      category: 'Day Trip',
    },
  },
  tr: {
    'gornergrat-vs-glacier-paradise': {
      title: 'Gornergrat ve Glacier Paradise Karşılaştırması: Matterhorn İçin Hangi Zirve Daha İyi?',
      shortTitle: 'Gornergrat vs Glacier Paradise',
      description: 'Rakım farkı, dişli tren ile teleferik karşılaştırması ve Zermatt’ın iki tepe noktasının hava dayanıklılığı.',
      category: 'Manzara Noktaları',
    },
    'best-time-to-see-matterhorn': {
      title: 'Zermatt hava durumu aya göre | Matterhorn’u görme zamanı',
      shortTitle: 'En İyi Ziyaret Zamanı',
      description: 'Aralık ve Ocak aylarının %88+ netliği ve yaz öğleden sonraları oluşan bulutların klimatolojik analizi.',
      category: 'Klimatoloji',
    },
    'zermatt-cloudy-rainy-day-guide': {
      title: 'Matterhorn Bulutluyken Zermatt’ta Ne Yapılır? (Kötü Hava Rehberi)',
      shortTitle: 'Kötü Hava Rehberi',
      description: 'Sis içinde 100+ CHF harcamak yerine Gorner Boğazı, Matterhorn Müzesi ve kaplıcaları keşfedin.',
      category: 'Kötü Hava',
    },
    'best-matterhorn-photo-viewpoints': {
      title: 'Zermatt’ta En İyi Matterhorn Fotoğraf Noktaları ve Gün Doğumu Konumları',
      shortTitle: 'Fotoğraf Noktaları & Gündoğumu',
      description: 'Kilise Köprüsü (Kirchbrücke), Riffelsee, Stellisee ve Mürini için en iyi çekim açıları.',
      category: 'Fotoğrafçılık',
    },
    'matterhorn-banner-cloud-fohn-wind': {
      title: 'Matterhorn Zirvesinde Neden Hep Bayrak Bulutu Var? Föhn Fiziği',
      shortTitle: 'Bayrak Bulutu ve Föhn',
      description: 'Güneşli günlerde bile zirvede oluşan aerodinamik bulut flamasının arkasındaki atmosfer fiziği.',
      category: 'Meteoroloji',
    },
    'zurich-geneva-to-zermatt-day-trip': {
      title: 'Zürih–Zermatt treni | Saatler, Visp aktarma',
      shortTitle: 'Günübirlik Gezi Rehberi',
      description: 'Visp aktarma ipuçları, seyahat süreleri ve trene binmeden önceki canlı Go/No-Go kuralı.',
      category: 'Günübirlik Geziler',
    },
  },
};

/**
 * Returns a localized guide article with fallback to English default.
 */
export function getLocalizedGuideArticle(
  slug: string,
  locale: Locale = 'en'
): GuideArticle {
  const base = GUIDES.find((g) => g.slug === slug) || GUIDES[0];
  if (locale === 'en') return base;

  const translation = GUIDE_TRANSLATIONS[locale]?.[slug];
  if (!translation) return base;

  return {
    ...base,
    title: translation.title || base.title,
    shortTitle: translation.shortTitle || base.shortTitle,
    description: translation.description || base.description,
    category: (translation.category as GuideCategory) || base.category,
    heroStat: translation.heroStat || base.heroStat,
    keyTakeaways: translation.keyTakeaways || base.keyTakeaways,
    comparisonTable: translation.comparisonTable || base.comparisonTable,
    sections: translation.sections || base.sections,
    faqs: translation.faqs || base.faqs,
  };
}
