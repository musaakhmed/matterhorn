import React from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Clock,
  Cloud,
  Compass,
  Eye,
  Radio,
  Sparkles,
  Sunrise,
  Sunset,
  Wind,
} from 'lucide-react';
import {
  BadgeColor,
  VisibilityApiResponse,
  VisibilityStatus,
} from '@/lib/types';
import { Locale } from '@/lib/i18n/config';
import VisibilityIcon from './VisibilityIcon';
import logoImg from '../../public/logo.jpeg';

export type WidgetViewpointOption = 'both' | 'gornergrat' | 'glacier-paradise';
export type WidgetThemeOption = 'light' | 'dark' | 'glass';
export type WidgetLayoutOption = 'card' | 'compact' | 'badge';
export type WidgetLangOption = Locale;

export interface PartnerWidgetConfig {
  viewpoint: WidgetViewpointOption;
  theme: WidgetThemeOption;
  layout: WidgetLayoutOption;
  lang: WidgetLangOption;
  partner?: string;
  showForecast?: boolean;
  showMetrics?: boolean;
}

interface PartnerWidgetCardProps extends PartnerWidgetConfig {
  data: VisibilityApiResponse;
}

const I18N: Record<
  WidgetLangOption,
  {
    title: string;
    subtitle: string;
    liveNow: string;
    morning: string;
    afternoon: string;
    midCloud: string;
    visibility: string;
    wind: string;
    bestWindow: string;
    threeDayHorizon: string;
    ctaFull: string;
    ctaShort: string;
    today: string;
    fohnActive: string;
    fohnCalm: string;
    status: Record<VisibilityStatus, string>;
    shortStatus: Record<VisibilityStatus, string>;
    verdictByScore: (score: number, viewpointName: string) => string;
  }
> = {
  en: {
    title: 'Is The Matterhorn Visible?',
    subtitle: 'Zermatt Summit Telemetry (4,478m)',
    liveNow: 'LIVE',
    morning: 'Morning (AM)',
    afternoon: 'Afternoon (PM)',
    midCloud: 'Mid-Cloud (3–5km)',
    visibility: 'Visibility',
    wind: 'Summit Wind',
    bestWindow: 'Best 48h Window',
    threeDayHorizon: '3-Day AM / PM Horizon',
    ctaFull: '10-Day Forecast & 4 Live Webcams',
    ctaShort: 'Live 10-Day Forecast',
    today: 'Today',
    fohnActive: 'Föhn Banner Risk',
    fohnCalm: 'No Föhn Penalty',
    status: {
      Visible: 'Visible',
      'Partially Visible': 'Partially Visible',
      'Barely Visible': 'Barely Visible',
      'Not Visible': 'Not Visible',
    },
    shortStatus: {
      Visible: 'Crisp View',
      'Partially Visible': 'Partial',
      'Barely Visible': 'Barely',
      'Not Visible': 'Socked In',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8)
        return `Crisp, unobstructed views of the Matterhorn pyramid from ${vp}.`;
      if (score >= 6)
        return `Good visibility from ${vp} with passing clouds or light ridge banner.`;
      if (score >= 3)
        return `Limited visibility at ${vp}; summit frequently veiled by mid-level clouds.`;
      return `Socked in at ${vp}; zero summit visibility due to thick cloud cover.`;
    },
  },
  de: {
    title: 'Ist das Matterhorn sichtbar?',
    subtitle: 'Zermatt Gipfel-Telemetrie (4.478m)',
    liveNow: 'LIVE',
    morning: 'Vormittag (AM)',
    afternoon: 'Nachmittag (PM)',
    midCloud: 'Mittelwolken',
    visibility: 'Sichtweite',
    wind: 'Gipfelwind',
    bestWindow: 'Bestes 48h-Fenster',
    threeDayHorizon: '3-Tage AM / PM Trend',
    ctaFull: '10-Tage-Prognose & 4 Live-Webcams',
    ctaShort: '10-Tage-Prognose',
    today: 'Heute',
    fohnActive: 'Föhn-Bannerwolke',
    fohnCalm: 'Kein Föhn-Risiko',
    status: {
      Visible: 'Sichtbar',
      'Partially Visible': 'Teilweise sichtbar',
      'Barely Visible': 'Kaum sichtbar',
      'Not Visible': 'Nicht sichtbar',
    },
    shortStatus: {
      Visible: 'Klare Sicht',
      'Partially Visible': 'Teilweise',
      'Barely Visible': 'Kaum',
      'Not Visible': 'In Wolken',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8)
        return `Glasklare, freie Sicht auf die Matterhorn-Pyramide ab ${vp}.`;
      if (score >= 6)
        return `Gute Sicht ab ${vp} mit durchziehenden Wolken oder leichter Fahnenwolke.`;
      if (score >= 3)
        return `Eingeschränkte Sicht (${vp}); Gipfel häufig in mittelhohen Wolken.`;
      return `Komplett in Wolken (${vp}); aktuell keine Gipfelsicht.`;
    },
  },
  fr: {
    title: 'Le Cervin est-il visible ?',
    subtitle: 'Télémétrie Sommet Zermatt (4 478m)',
    liveNow: 'DIRECT',
    morning: 'Matin (AM)',
    afternoon: 'Après-midi (PM)',
    midCloud: 'Nuages moyens',
    visibility: 'Visibilité',
    wind: 'Vent sommet',
    bestWindow: 'Meilleur créneau 48h',
    threeDayHorizon: 'Tendance 3 Jours AM / PM',
    ctaFull: 'Prévisions 10 Jours & 4 Webcams',
    ctaShort: 'Prévisions 10 Jours',
    today: 'Auj.',
    fohnActive: 'Risque Foehn',
    fohnCalm: 'Sans Foehn',
    status: {
      Visible: 'Visible',
      'Partially Visible': 'Partiellement visible',
      'Barely Visible': 'Peu visible',
      'Not Visible': 'Non visible',
    },
    shortStatus: {
      Visible: 'Vue dégagée',
      'Partially Visible': 'Partiel',
      'Barely Visible': 'Limité',
      'Not Visible': 'Bouché',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8)
        return `Vue cristalline et dégagée sur la pyramide du Cervin depuis ${vp}.`;
      if (score >= 6)
        return `Bonne visibilité depuis ${vp} avec quelques nuages passagers sur l'arête.`;
      if (score >= 3)
        return `Visibilité limitée (${vp}) ; sommet souvent masqué à moyenne altitude.`;
      return `Sommet bouché (${vp}) ; visibilité nulle en raison d'une épaisse couche nuageuse.`;
    },
  },
  it: {
    title: 'Il Cervino è visibile?',
    subtitle: 'Telemetria Sommità Zermatt (4.478m)',
    liveNow: 'LIVE',
    morning: 'Mattina (AM)',
    afternoon: 'Pomeriggio (PM)',
    midCloud: 'Nubi medie',
    visibility: 'Visibilità',
    wind: 'Vento vetta',
    bestWindow: 'Miglior finestra 48h',
    threeDayHorizon: 'Trend 3 Giorni AM / PM',
    ctaFull: 'Previsioni 10 Giorni & 4 Webcam',
    ctaShort: 'Previsioni 10 Giorni',
    today: 'Oggi',
    fohnActive: 'Rischio Föhn',
    fohnCalm: 'Senza Föhn',
    status: {
      Visible: 'Visibile',
      'Partially Visible': 'Parzialmente visibile',
      'Barely Visible': 'Appena visibile',
      'Not Visible': 'Non visibile',
    },
    shortStatus: {
      Visible: 'Vista limpida',
      'Partially Visible': 'Parziale',
      'Barely Visible': 'Appena',
      'Not Visible': 'Coperto',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8)
        return `Vista limpida e sgombra sulla piramide del Cervino da ${vp}.`;
      if (score >= 6)
        return `Buona visibilità da ${vp} con nubi passeggere sulla cresta.`;
      if (score >= 3)
        return `Visibilità ridotta a ${vp}; vetta spesso velata da nubi.`;
      return `Vetta completamente coperta a ${vp}; visibilità nulla.`;
    },
  },
  ru: {
    title: 'Виден ли Маттерхорн?',
    subtitle: 'Телеметрия вершины Церматта (4 478 м)',
    liveNow: 'ОНЛАЙН',
    morning: 'Утро (AM)',
    afternoon: 'День (PM)',
    midCloud: 'Средние облака',
    visibility: 'Видимость',
    wind: 'Ветер на пике',
    bestWindow: 'Лучшее окно 48ч',
    threeDayHorizon: 'Тренд на 3 дня AM / PM',
    ctaFull: 'Прогноз на 10 дней и 4 веб-камеры',
    ctaShort: 'Прогноз на 10 дней',
    today: 'Сегодня',
    fohnActive: 'Фён / Облачный флаг',
    fohnCalm: 'Без фёна',
    status: {
      Visible: 'Виден',
      'Partially Visible': 'Частично виден',
      'Barely Visible': 'Едва виден',
      'Not Visible': 'Не виден',
    },
    shortStatus: {
      Visible: 'Ясно',
      'Partially Visible': 'Частично',
      'Barely Visible': 'Едва',
      'Not Visible': 'В облаках',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8)
        return `Отличная, ясная видимость Маттерхорна со смотровой ${vp}.`;
      if (score >= 6)
        return `Хорошая видимость с ${vp}, переменная облачность над хребтом.`;
      if (score >= 3)
        return `Ограниченная видимость (${vp}); вершина часто скрыта облаками.`;
      return `Вершина скрыта (${vp}); плотная облачность, видимость нулевая.`;
    },
  },
  ja: {
    title: 'マッターホルンは今日見えますか？',
    subtitle: 'ツェルマット山頂テレメトリ (標高4,478m)',
    liveNow: 'LIVE',
    morning: '午前 (AM)',
    afternoon: '午後 (PM)',
    midCloud: '中層雲量',
    visibility: '視程',
    wind: '山頂風速',
    bestWindow: '48時間内の好機',
    threeDayHorizon: '3日間 AM/PM 予報',
    ctaFull: '10日間予報＆4台のライブカメラ',
    ctaShort: '10日間視界予報',
    today: '今日',
    fohnActive: '旗雲（フェーン現象）',
    fohnCalm: '旗雲リスクなし',
    status: {
      Visible: '鮮明に見える',
      'Partially Visible': '一部見える',
      'Barely Visible': 'かすかに見える',
      'Not Visible': '見えない',
    },
    shortStatus: {
      Visible: '鮮明',
      'Partially Visible': '一部',
      'Barely Visible': 'かすか',
      'Not Visible': '雲中',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8)
        return `${vp}からマッターホルン山頂までくっきりと美しく見えます。`;
      if (score >= 6)
        return `${vp}からの眺望は良好。時折雲が流れる程度です。`;
      if (score >= 3)
        return `${vp}からの視界は不良。中層雲が山頂を覆っています。`;
      return `${vp}周辺は濃い雲に覆われており、山頂は見えません。`;
    },
  },
  zh: {
    title: '今天能看到马特洪峰吗？',
    subtitle: '采尔马特峰顶气象遥测 (海拔4,478米)',
    liveNow: '实时',
    morning: '上午 (AM)',
    afternoon: '下午 (PM)',
    midCloud: '中层云量',
    visibility: '能见度',
    wind: '峰顶风速',
    bestWindow: '48小时最佳窗口',
    threeDayHorizon: '3天 AM/PM 趋势',
    ctaFull: '10天天气预报与4路高清摄像头',
    ctaShort: '10天高山视界预报',
    today: '今天',
    fohnActive: '焚风旗云风险',
    fohnCalm: '无焚风干扰',
    status: {
      Visible: '清晰可见',
      'Partially Visible': '局部可见',
      'Barely Visible': '若隐若现',
      'Not Visible': '完全遮蔽',
    },
    shortStatus: {
      Visible: '极佳',
      'Partially Visible': '局部',
      'Barely Visible': '微弱',
      'Not Visible': '遮蔽',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8)
        return `从${vp}遥望马特洪峰，视野清晰开阔无遮挡。`;
      if (score >= 6)
        return `从${vp}观察能见度尚可，偶有山脊流云或轻微旗云。`;
      if (score >= 3)
        return `在${vp}视界受限，中层云层频繁遮盖山顶金字塔。`;
      return `${vp}完全深陷云海或暴风雪中，峰顶当前不可见。`;
    },
  },
  ko: {
    title: '오늘 마터호른이 보이나요?',
    subtitle: '체르마트 정상 기상 관측 (해발 4,478m)',
    liveNow: 'LIVE',
    morning: '오전 (AM)',
    afternoon: '오후 (PM)',
    midCloud: '중층 구름량',
    visibility: '가시거리',
    wind: '정상 풍속',
    bestWindow: '48시간 내 최적 시간',
    threeDayHorizon: '3일간 AM/PM 전망',
    ctaFull: '10일 예보 & 4개 실시간 웹캠',
    ctaShort: '10일 가시성 예보',
    today: '오늘',
    fohnActive: '푄 깃발구름 발생',
    fohnCalm: '푄 영향 없음',
    status: {
      Visible: '선명하게 보임',
      'Partially Visible': '부분적으로 보임',
      'Barely Visible': '희미하게 보임',
      'Not Visible': '보이지 않음',
    },
    shortStatus: {
      Visible: '선명',
      'Partially Visible': '부분',
      'Barely Visible': '희미',
      'Not Visible': '흐림',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8)
        return `${vp}에서 마터호른 정상이 티 없이 선명하게 보입니다.`;
      if (score >= 6)
        return `${vp}에서 시야가 양호하며 가끔 지나가는 구름이 있습니다.`;
      if (score >= 3)
        return `${vp}에서 시야가 제한적이며 중층 구름에 정상이 자주 가립니다.`;
      return `${vp} 부근이 두터운 구름에 완전히 갇혀 정상이 보이지 않습니다.`;
    },
  },
  es: {
    title: '¿Es visible el Matterhorn?',
    subtitle: 'Telemetría de la cumbre en Zermatt (4.478m)',
    liveNow: 'EN VIVO',
    morning: 'Mañana (AM)',
    afternoon: 'Tarde (PM)',
    midCloud: 'Nubes medias (3–5km)',
    visibility: 'Visibilidad',
    wind: 'Viento en cumbre',
    bestWindow: 'Mejor ventana en 48h',
    threeDayHorizon: 'Tendencia 3 días AM / PM',
    ctaFull: 'Previsión a 10 días y 4 webcams',
    ctaShort: 'Previsión a 10 días',
    today: 'Hoy',
    fohnActive: 'Riesgo nube Föhn',
    fohnCalm: 'Sin efecto Föhn',
    status: {
      Visible: 'Visible',
      'Partially Visible': 'Parcialmente visible',
      'Barely Visible': 'Apenas visible',
      'Not Visible': 'No visible',
    },
    shortStatus: {
      Visible: 'Despejado',
      'Partially Visible': 'Parcial',
      'Barely Visible': 'Limitado',
      'Not Visible': 'Cubierto',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8) return `Vista nítida y despejada del Matterhorn desde ${vp}.`;
      if (score >= 6) return `Buena visibilidad desde ${vp} con nubes pasajeras.`;
      if (score >= 3) return `Visibilidad limitada en ${vp}; cumbre oculta por nubes medias.`;
      return `Cubierto en ${vp}; visibilidad nula por nubes densas.`;
    },
  },
  pt: {
    title: 'O Matterhorn está visível?',
    subtitle: 'Telemetria do cume em Zermatt (4.478m)',
    liveNow: 'AO VIVO',
    morning: 'Manhã (AM)',
    afternoon: 'Tarde (PM)',
    midCloud: 'Nuvens médias (3–5km)',
    visibility: 'Visibilidade',
    wind: 'Vento no cume',
    bestWindow: 'Melhor janela em 48h',
    threeDayHorizon: 'Tendência 3 dias AM / PM',
    ctaFull: 'Previsão de 10 dias e 4 webcams',
    ctaShort: 'Previsão de 10 dias',
    today: 'Hoje',
    fohnActive: 'Risco de nuvem Föhn',
    fohnCalm: 'Sem risco de Föhn',
    status: {
      Visible: 'Visível',
      'Partially Visible': 'Parcialmente visível',
      'Barely Visible': 'Mal visível',
      'Not Visible': 'Não visível',
    },
    shortStatus: {
      Visible: 'Nítido',
      'Partially Visible': 'Parcial',
      'Barely Visible': 'Limitado',
      'Not Visible': 'Encoberto',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8) return `Vista limpa e nítida do Matterhorn a partir de ${vp}.`;
      if (score >= 6) return `Boa visibilidade a partir de ${vp} com nuvens passageiras.`;
      if (score >= 3) return `Visibilidade reduzida em ${vp}; cume frequentemente coberto.`;
      return `Encoberto em ${vp}; visibilidade nula do cume.`;
    },
  },
  tr: {
    title: 'Matterhorn Görünüyor mu?',
    subtitle: 'Zermatt Zirve Telemetrisi (4.478m)',
    liveNow: 'CANLI',
    morning: 'Sabah (ÖÖ)',
    afternoon: 'Öğleden Sonra (ÖS)',
    midCloud: 'Orta Seviye Bulut',
    visibility: 'Görüş Mesafesi',
    wind: 'Zirve Rüzgarı',
    bestWindow: 'En İyi 48 Saatlik Zaman',
    threeDayHorizon: '3 Günlük AM / PM Eğilimi',
    ctaFull: '10 Günlük Tahmin & 4 Canlı Kamera',
    ctaShort: '10 Günlük Görüş Tahmini',
    today: 'Bugün',
    fohnActive: 'Föhn Bayrak Bulutu Riski',
    fohnCalm: 'Föhn Riski Yok',
    status: {
      Visible: 'Görünür',
      'Partially Visible': 'Kısmen Görünür',
      'Barely Visible': 'Zorlukla Görünür',
      'Not Visible': 'Görünmüyor',
    },
    shortStatus: {
      Visible: 'Net',
      'Partially Visible': 'Kısmi',
      'Barely Visible': 'Zayıf',
      'Not Visible': 'Kapalı',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8) return `${vp} noktasından Matterhorn piramidinin net ve berrak manzarası.`;
      if (score >= 6) return `${vp} noktasında iyi görüş; geçici bulutlar mevcut.`;
      if (score >= 3) return `${vp} noktasında sınırlı görüş; zirve sık sık bulutlar ardında.`;
      return `${vp} tamamen bulut içinde; zirve görünmüyor.`;
    },
  },
  az: {
    title: 'Matterhorn Görünürmü?',
    subtitle: 'Zermatt Zirvə Telemetriyası (4,478m)',
    liveNow: 'CANLI',
    morning: 'Səhər (AM)',
    afternoon: 'Günorta (PM)',
    midCloud: 'Orta Bulud (3–5km)',
    visibility: 'Görünüş',
    wind: 'Zirvə Küləyi',
    bestWindow: 'Ən Yaxşı 48 Saatlıq Vaxt',
    threeDayHorizon: '3 Günlük Səhər/Günorta Meyli',
    ctaFull: '10 Günlük Proqnoz & 4 Canlı Kamera',
    ctaShort: '10 Günlük Proqnoz',
    today: 'Bu gün',
    fohnActive: 'Föhn Bayraq Buludu Riski',
    fohnCalm: 'Föhn Riski Yoxdur',
    status: {
      Visible: 'Görünür',
      'Partially Visible': 'Qismən Görünür',
      'Barely Visible': 'Zəif Görünür',
      'Not Visible': 'Görünmür',
    },
    shortStatus: {
      Visible: 'Aydın',
      'Partially Visible': 'Qismən',
      'Barely Visible': 'Zəif',
      'Not Visible': 'Bağlı',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8) return `${vp} nöqtəsindən Matterhorn zirvəsi aydın və maneəsiz görünür.`;
      if (score >= 6) return `${vp} nöqtəsində yaxşı görünüş; keçici buludlar var.`;
      if (score >= 3) return `${vp} nöqtəsində məhdud görünüş; zirvə tez-tez buludla örtülür.`;
      return `${vp} tamamilə bulud içindədir; zirvə görünmür.`;
    },
  },
  id: {
    title: 'Apakah Matterhorn Terlihat?',
    subtitle: 'Telemetri Puncak Zermatt (4.478m)',
    liveNow: 'LANGSUNG',
    morning: 'Pagi (AM)',
    afternoon: 'Sore (PM)',
    midCloud: 'Awan Menengah (3–5km)',
    visibility: 'Visibilitas',
    wind: 'Angin Puncak',
    bestWindow: 'Jendela Terbaik 48 Jam',
    threeDayHorizon: 'Tren 3 Hari Pagi / Sore',
    ctaFull: 'Prakiraan 10 Hari & 4 Kamera Langsung',
    ctaShort: 'Prakiraan 10 Hari',
    today: 'Hari Ini',
    fohnActive: 'Risiko Awan Bendera Föhn',
    fohnCalm: 'Bebas Risiko Föhn',
    status: {
      Visible: 'Terlihat Jelas',
      'Partially Visible': 'Terlihat Sebagian',
      'Barely Visible': 'Hampir Tak Terlihat',
      'Not Visible': 'Tidak Terlihat',
    },
    shortStatus: {
      Visible: 'Jernih',
      'Partially Visible': 'Sebagian',
      'Barely Visible': 'Terbatas',
      'Not Visible': 'Tertutup',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8) return `Pemandangan Matterhorn sangat jernih dan bebas halangan dari ${vp}.`;
      if (score >= 6) return `Visibilitas bagus dari ${vp} dengan sedikit awan lewat.`;
      if (score >= 3) return `Visibilitas terbatas di ${vp}; puncak sering tertutup awan menengah.`;
      return `Tertutup kabut di ${vp}; puncak Matterhorn tidak terlihat sama sekali.`;
    },
  },
  ar: {
    title: 'هل قمة ماترهورن مرئية؟',
    subtitle: 'رصد قمة زيرمات المباشر (4,478 م)',
    liveNow: 'مباشر',
    morning: 'الصباح (AM)',
    afternoon: 'المساء (PM)',
    midCloud: 'سحب متوسطة (3–5 كم)',
    visibility: 'مدى الرؤية',
    wind: 'رياح القمة',
    bestWindow: 'أفضل وقت خلال 48 ساعة',
    threeDayHorizon: 'توقعات 3 أيام صباحاً / مساءً',
    ctaFull: 'توقعات 10 أيام و4 كاميرات مباشرة',
    ctaShort: 'توقعات 10 أيام',
    today: 'اليوم',
    fohnActive: 'خطر تشكل سحابة الراية',
    fohnCalm: 'أجواء مستقرة',
    status: {
      Visible: 'مرئي بوضوح',
      'Partially Visible': 'مرئي جزئياً',
      'Barely Visible': 'رؤية ضعيفة',
      'Not Visible': 'غير مرئي',
    },
    shortStatus: {
      Visible: 'ممتاز',
      'Partially Visible': 'جزئي',
      'Barely Visible': 'محدود',
      'Not Visible': 'محجوب',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8) return `رؤية نقية وواضحة تماماً لقمة ماترهورن من ${vp}.`;
      if (score >= 6) return `رؤية جيدة من ${vp} مع بعض السحب العابرة.`;
      if (score >= 3) return `رؤية محدودة عند ${vp}؛ القمة محجوبة جزئياً بالسحب المتوسطة.`;
      return `محجوب كلياً عند ${vp}؛ انعدام تام للرؤية بسبب الغيوم الكثيفة.`;
    },
  },
  hi: {
    title: 'क्या मैटरहॉर्न दिखाई दे रहा है?',
    subtitle: 'ज़ेरमैट शिखर टेलीमेट्री (4,478 मी)',
    liveNow: 'लाइव',
    morning: 'सुबह (AM)',
    afternoon: 'दोपहर (PM)',
    midCloud: 'मध्यम बादल (3–5 किमी)',
    visibility: 'दृश्यता' ,
    wind: 'शिखर हवा',
    bestWindow: '48 घंटे में सर्वश्रेष्ठ समय',
    threeDayHorizon: '3-दिन सुबह/दोपहर रुझान',
    ctaFull: '10-दिवसीय पूर्वानुमान और 4 लाइव कैमरे',
    ctaShort: '10-दिवसीय दृश्यता पूर्वानुमान',
    today: 'आज',
    fohnActive: 'फ़ॉन बैनर बादल का जोखिम',
    fohnCalm: 'कोई फ़ॉन प्रभाव नहीं',
    status: {
      Visible: 'स्पष्ट दिखाई दे रहा',
      'Partially Visible': 'आंशिक रूप से दिखाई दे रहा',
      'Barely Visible': 'धुंधला दिखाई दे रहा',
      'Not Visible': 'दिखाई नहीं दे रहा',
    },
    shortStatus: {
      Visible: 'साफ',
      'Partially Visible': 'आंशिक',
      'Barely Visible': 'सीमित',
      'Not Visible': 'ढका हुआ',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8) return `${vp} से मैटरहॉर्न का बिल्कुल साफ और स्पष्ट दृश्य।`;
      if (score >= 6) return `${vp} से अच्छी दृश्यता, बीच-बीच में हल्के बादल।`;
      if (score >= 3) return `${vp} पर सीमित दृश्यता; चोटी बार-बार बादलों में छिप रही है।`;
      return `${vp} पूरी तरह बादलों में घिरा हुआ है; चोटी दिखाई नहीं दे रही।`;
    },
  },
  th: {
    title: 'แมทเทอร์ฮอร์นมองเห็นได้หรือไม่?',
    subtitle: 'ข้อมูลสภาพอากาศยอดเขาเซอร์แมท (4,478 ม.)',
    liveNow: 'สด',
    morning: 'ช่วงเช้า (AM)',
    afternoon: 'ช่วงบ่าย (PM)',
    midCloud: 'เมฆระดับกลาง (3–5 กม.)',
    visibility: 'ทัศนวิสัย',
    wind: 'ความเร็วลมบนยอดเขา',
    bestWindow: 'เวลาที่ดีที่สุดใน 48 ชม.',
    threeDayHorizon: 'แนวโน้ม 3 วัน เช้า / บ่าย',
    ctaFull: 'พยากรณ์ 10 วัน & กล้องสด 4 ตัว',
    ctaShort: 'พยากรณ์ล่วงหน้า 10 วัน',
    today: 'วันนี้',
    fohnActive: 'มีความเสี่ยงเมฆธงเฟิน',
    fohnCalm: 'ไม่มีผลกระทบลมเฟิน',
    status: {
      Visible: 'มองเห็นได้ชัดเจน',
      'Partially Visible': 'มองเห็นได้บางส่วน',
      'Barely Visible': 'มองเห็นได้ยาก',
      'Not Visible': 'มองไม่เห็น',
    },
    shortStatus: {
      Visible: 'แจ่มใส',
      'Partially Visible': 'บางส่วน',
      'Barely Visible': 'จำกัด',
      'Not Visible': 'ปิดทึบ',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8) return `มองเห็นยอดเขาแมทเทอร์ฮอร์นได้อย่างคมชัดไร้สิ่งบดบังจาก ${vp}`;
      if (score >= 6) return `ทัศนวิสัยดีจาก ${vp} โดยมีเมฆบางส่วนลอยผ่าน`;
      if (score >= 3) return `ทัศนวิสัยจำกัดที่ ${vp} ยอดเขามักถูกเมฆระดับกลางบดบัง`;
      return `เมฆหมอกหนาทึบที่ ${vp} มองไม่เห็นยอดเขาโดยสิ้นเชิง`;
    },
  },
  'zh-tw': {
    title: '今天看得到馬特洪峰嗎？',
    subtitle: '策馬特峰頂即時氣象 (海拔4,478公尺)',
    liveNow: '即時',
    morning: '上午 (AM)',
    afternoon: '下午 (PM)',
    midCloud: '中層雲量 (3–5公里)',
    visibility: '能見度',
    wind: '頂峰風速',
    bestWindow: '未來48小時最佳時段',
    threeDayHorizon: '3天 AM / PM 趨勢',
    ctaFull: '10天天氣預報與4路高清即時影像',
    ctaShort: '10天能見度預報',
    today: '今天',
    fohnActive: '焚風旗狀雲風險',
    fohnCalm: '無焚風干擾',
    status: {
      Visible: '清晰可見',
      'Partially Visible': '局部可見',
      'Barely Visible': '隱約可見',
      'Not Visible': '完全遮蔽',
    },
    shortStatus: {
      Visible: '極佳',
      'Partially Visible': '局部',
      'Barely Visible': '微弱',
      'Not Visible': '遮蔽',
    },
    verdictByScore: (score, vp) => {
      if (score >= 8) return `從${vp}眺望馬特洪峰，視野清晰開闊無遮擋。`;
      if (score >= 6) return `從${vp}觀察能見度良好，偶有山脊浮雲或輕微旗狀雲。` ;
      if (score >= 3) return `在${vp}視界有限，中層雲層頻繁遮蔽頂峰金字塔。`;
      return `${vp}完全深陷雲海或風雪中，峰頂當前完全不可見。`;
    },
  },
};

const STATUS_BADGE_LIGHT: Record<
  BadgeColor,
  { pill: string; dot: string; score: string; border: string }
> = {
  emerald: {
    pill: 'bg-emerald-100/90 border-emerald-300 text-emerald-950',
    dot: 'bg-emerald-500',
    score: 'text-emerald-700',
    border: 'border-emerald-200/90',
  },
  amber: {
    pill: 'bg-amber-100/90 border-amber-300 text-amber-950',
    dot: 'bg-amber-500',
    score: 'text-amber-700',
    border: 'border-amber-200/90',
  },
  orange: {
    pill: 'bg-orange-100/90 border-orange-300 text-orange-950',
    dot: 'bg-orange-500',
    score: 'text-orange-700',
    border: 'border-orange-200/90',
  },
  rose: {
    pill: 'bg-rose-100/90 border-rose-300 text-rose-950',
    dot: 'bg-rose-500',
    score: 'text-rose-700',
    border: 'border-rose-200/90',
  },
};

const STATUS_BADGE_DARK: Record<
  BadgeColor,
  { pill: string; dot: string; score: string; border: string }
> = {
  emerald: {
    pill: 'bg-emerald-950/90 border-emerald-700/80 text-emerald-200',
    dot: 'bg-emerald-400',
    score: 'text-emerald-400',
    border: 'border-emerald-800/70',
  },
  amber: {
    pill: 'bg-amber-950/90 border-amber-700/80 text-amber-200',
    dot: 'bg-amber-400',
    score: 'text-amber-400',
    border: 'border-amber-800/70',
  },
  orange: {
    pill: 'bg-orange-950/90 border-orange-700/80 text-orange-200',
    dot: 'bg-orange-400',
    score: 'text-orange-400',
    border: 'border-orange-800/70',
  },
  rose: {
    pill: 'bg-rose-950/90 border-rose-700/80 text-rose-200',
    dot: 'bg-rose-400',
    score: 'text-rose-400',
    border: 'border-rose-800/70',
  },
};

export default function PartnerWidgetCard({
  data,
  viewpoint = 'both',
  theme = 'light',
  layout = 'card',
  lang = 'en',
  partner = '',
  showForecast = true,
  showMetrics = true,
}: PartnerWidgetCardProps) {
  const t = I18N[lang] || I18N.en;
  const isDark = theme === 'dark';
  const isGlass = theme === 'glass';

  const gornergrat = data.viewpoints.gornergrat;
  const glacier = data.viewpoints['glacier-paradise'];
  const primaryData =
    viewpoint === 'glacier-paradise' ? glacier : gornergrat;

  const badgePalette = isDark ? STATUS_BADGE_DARK : STATUS_BADGE_LIGHT;
  const primaryStyle = badgePalette[primaryData.currentBadgeColor];

  const cleanPartner = partner.trim().slice(0, 48);

  // Shell classes by theme
  const shellClass = isDark
    ? 'bg-slate-950 border-slate-800 text-slate-100 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.5)]'
    : isGlass
      ? 'bg-white/85 backdrop-blur-xl border-white/80 ring-1 ring-slate-900/10 text-slate-900 shadow-[0_12px_32px_-8px_rgba(15,23,42,0.1)]'
      : 'bg-white border-slate-200/95 text-slate-900 shadow-[0_10px_28px_-8px_rgba(15,23,42,0.08)]';

  const subCardClass = isDark
    ? 'bg-slate-900/90 border-slate-800/90 text-slate-200'
    : isGlass
      ? 'bg-slate-50/75 border-slate-200/80 text-slate-800'
      : 'bg-slate-50/90 border-slate-200/85 text-slate-800';

  const mutedTextClass = isDark ? 'text-slate-400' : 'text-slate-500';
  const headingTextClass = isDark ? 'text-white' : 'text-slate-900';

  // 1. MINIMAL NAVBAR PILL ('badge' layout)
  if (layout === 'badge') {
    return (
      <a
        href="https://isthematterhornvisible.com?utm_source=partner_widget&utm_medium=badge"
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex flex-wrap items-center gap-2.5 px-3.5 py-2 rounded-2xl border transition-all hover:-translate-y-0.5 cursor-pointer ${shellClass}`}
        aria-label={`${t.title} ${primaryData.currentScore}/10 ${t.status[primaryData.currentStatus]}`}
      >
        <VisibilityIcon
          badgeColor={primaryData.currentBadgeColor}
          size="xs"
        />

        <div className="flex items-center gap-2 text-xs">
          <span className={`font-extrabold tracking-tight ${headingTextClass}`}>
            Matterhorn:
          </span>

          {viewpoint === 'both' ? (
            <div className="flex items-center gap-1.5 font-mono font-bold">
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[11px] ${badgePalette[gornergrat.currentBadgeColor].pill}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${badgePalette[gornergrat.currentBadgeColor].dot}`}
                  aria-hidden="true"
                />
                <span>Gornergrat {gornergrat.currentScore}/10</span>
              </span>
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[11px] ${badgePalette[glacier.currentBadgeColor].pill}`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${badgePalette[glacier.currentBadgeColor].dot}`}
                  aria-hidden="true"
                />
                <span>Glacier {glacier.currentScore}/10</span>
              </span>
            </div>
          ) : (
            <span
              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border text-[11px] font-mono font-bold ${primaryStyle.pill}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${primaryStyle.dot}`}
                aria-hidden="true"
              />
              <span>
                {primaryData.currentScore}/10 •{' '}
                {t.shortStatus[primaryData.currentStatus]}
              </span>
            </span>
          )}
        </div>

        <span
          className={`inline-flex items-center gap-0.5 text-[11px] font-bold ${
            isDark
              ? 'text-sky-400 group-hover:text-sky-300'
              : 'text-sky-700 group-hover:text-sky-900'
          }`}
        >
          <span className="hidden sm:inline">{t.ctaShort}</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </span>
      </a>
    );
  }

  // 2. COMPACT HORIZONTAL BANNER ('compact' layout)
  if (layout === 'compact') {
    return (
      <div
        className={`w-full rounded-2xl border p-4 sm:p-5 transition-all ${shellClass}`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left: Brand + Primary Verdict */}
          <div className="flex items-center gap-3.5 min-w-0">
            <VisibilityIcon
              badgeColor={primaryData.currentBadgeColor}
              size="lg"
              decorative={false}
            />
            <div className="min-w-0 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-extrabold uppercase tracking-wider">
                  <Radio className="w-3 h-3 animate-pulse" aria-hidden="true" />
                  <span>
                    {t.liveNow} • {data.swissTimeFormatted}
                  </span>
                </span>
                {cleanPartner && (
                  <span
                    className={`text-[11px] font-mono font-bold truncate ${mutedTextClass}`}
                  >
                    • {cleanPartner}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <h3
                  className={`text-sm sm:text-base font-extrabold tracking-tight ${headingTextClass}`}
                >
                  {t.title}
                </h3>
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-bold ${primaryStyle.pill}`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${primaryStyle.dot}`}
                    aria-hidden="true"
                  />
                  <span>
                    {primaryData.currentScore}/10 —{' '}
                    {t.status[primaryData.currentStatus]}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Middle: Viewpoint / AM-PM Telemetry Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {viewpoint === 'both' ? (
              <>
                <div
                  className={`rounded-xl border px-3 py-2 text-xs ${subCardClass}`}
                >
                  <div className={`text-[10px] font-mono ${mutedTextClass}`}>
                    Gornergrat (3,089m)
                  </div>
                  <div className="font-mono font-extrabold flex items-center gap-2 mt-0.5">
                    <span
                      className={
                        badgePalette[gornergrat.currentBadgeColor].score
                      }
                    >
                      {gornergrat.currentScore}/10
                    </span>
                    <span className={`text-[11px] font-normal ${mutedTextClass}`}>
                      AM {gornergrat.today.morning.score} • PM{' '}
                      {gornergrat.today.afternoon.score}
                    </span>
                  </div>
                </div>

                <div
                  className={`rounded-xl border px-3 py-2 text-xs ${subCardClass}`}
                >
                  <div className={`text-[10px] font-mono ${mutedTextClass}`}>
                    Glacier Paradise (3,883m)
                  </div>
                  <div className="font-mono font-extrabold flex items-center gap-2 mt-0.5">
                    <span
                      className={badgePalette[glacier.currentBadgeColor].score}
                    >
                      {glacier.currentScore}/10
                    </span>
                    <span className={`text-[11px] font-normal ${mutedTextClass}`}>
                      AM {glacier.today.morning.score} • PM{' '}
                      {glacier.today.afternoon.score}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`rounded-xl border px-3 py-2 text-xs ${subCardClass}`}
                >
                  <div className={`text-[10px] font-mono ${mutedTextClass}`}>
                    {t.morning}
                  </div>
                  <div className="font-mono font-extrabold mt-0.5">
                    {primaryData.today.morning.score}/10 •{' '}
                    {t.shortStatus[primaryData.today.morning.status]}
                  </div>
                </div>
                <div
                  className={`rounded-xl border px-3 py-2 text-xs ${subCardClass}`}
                >
                  <div className={`text-[10px] font-mono ${mutedTextClass}`}>
                    {t.afternoon}
                  </div>
                  <div className="font-mono font-extrabold mt-0.5">
                    {primaryData.today.afternoon.score}/10 •{' '}
                    {t.shortStatus[primaryData.today.afternoon.status]}
                  </div>
                </div>
              </>
            )}

            <a
              href="https://isthematterhornvisible.com?utm_source=partner_widget&utm_medium=compact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-extrabold shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              <span>{t.ctaShort}</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  // 3. STANDARD CONCIERGE CARD ('card' layout — default)
  return (
    <div
      className={`w-full max-w-md rounded-3xl border p-5 sm:p-6 transition-all space-y-4 ${shellClass}`}
    >
      {/* Top Header Strip */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/60 dark:border-slate-800">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="relative inline-flex items-center justify-center overflow-hidden shrink-0 w-9 h-9 rounded-[20%] bg-slate-800 ring-1 ring-sky-500/35 shadow-2xs select-none">
            <Image
              src={logoImg}
              alt="Is The Matterhorn Visible? logo"
              width={96}
              height={96}
              unoptimized
              className="w-full h-full object-cover pointer-events-none"
            />
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span
                className={`text-xs font-extrabold uppercase tracking-tight truncate ${headingTextClass}`}
              >
                {cleanPartner || t.title}
              </span>
            </div>
            <p className={`text-[11px] font-mono truncate ${mutedTextClass}`}>
              {cleanPartner ? `${t.title} • 4,478m` : t.subtitle}
            </p>
          </div>
        </div>

        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-mono font-bold shrink-0 ${
            isDark
              ? 'bg-slate-900 border-slate-800 text-sky-300'
              : 'bg-sky-50 border-sky-200 text-sky-900'
          }`}
        >
          <span
            className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
            aria-hidden="true"
          />
          <Clock className="w-3 h-3 text-sky-500" aria-hidden="true" />
          <span>{data.swissTimeFormatted}</span>
        </div>
      </div>

      {/* Main Verdict Content */}
      {viewpoint === 'both' ? (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {[gornergrat, glacier].map((vpData) => {
              const vpStyle = badgePalette[vpData.currentBadgeColor];
              return (
                <div
                  key={vpData.viewpoint.id}
                  className={`rounded-2xl border p-3.5 space-y-2.5 ${subCardClass}`}
                >
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="text-[11px] font-extrabold tracking-tight truncate">
                      {vpData.viewpoint.id === 'gornergrat'
                        ? 'Gornergrat'
                        : 'Glacier Paradise'}
                    </span>
                    <span
                      className={`text-[10px] font-mono ${mutedTextClass}`}
                    >
                      {vpData.viewpoint.elevation.toLocaleString()}m
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <VisibilityIcon
                      badgeColor={vpData.currentBadgeColor}
                      size="md"
                    />
                    <div>
                      <div className="flex items-baseline gap-0.5 leading-none">
                        <span
                          className={`text-2xl font-extrabold font-mono ${vpStyle.score}`}
                        >
                          {vpData.currentScore}
                        </span>
                        <span
                          className={`text-xs font-bold ${mutedTextClass}`}
                        >
                          /10
                        </span>
                      </div>
                      <span
                        className={`inline-block mt-1 px-2 py-0.5 rounded-full border text-[10px] font-bold leading-tight ${vpStyle.pill}`}
                      >
                        {t.shortStatus[vpData.currentStatus]}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`pt-2 border-t ${
                      isDark ? 'border-slate-800' : 'border-slate-200/80'
                    } flex items-center justify-between text-[11px] font-mono`}
                  >
                    <span>
                      AM:{' '}
                      <strong className={headingTextClass}>
                        {vpData.today.morning.score}/10
                      </strong>
                    </span>
                    <span>
                      PM:{' '}
                      <strong className={headingTextClass}>
                        {vpData.today.afternoon.score}/10
                      </strong>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <p className={`text-xs leading-relaxed ${mutedTextClass}`}>
            {t.verdictByScore(
              primaryData.currentScore,
              primaryData.viewpoint.shortLabel
            )}
          </p>
        </div>
      ) : (
        <div className="space-y-3.5">
          {/* Single Viewpoint Hero Row */}
          <div
            className={`rounded-2xl border p-4 flex items-center justify-between gap-3 ${subCardClass}`}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <VisibilityIcon
                badgeColor={primaryData.currentBadgeColor}
                size="lg"
                decorative={false}
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-[11px] font-mono">
                  <Compass
                    className="w-3.5 h-3.5 text-sky-500 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="font-bold truncate">
                    {primaryData.viewpoint.shortLabel} (
                    {primaryData.viewpoint.elevation.toLocaleString()}m)
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mt-1">
                  <span
                    className={`text-3xl font-extrabold font-mono leading-none ${primaryStyle.score}`}
                  >
                    {primaryData.currentScore}
                    <span className={`text-sm font-bold ${mutedTextClass}`}>
                      /10
                    </span>
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-xs font-bold ${primaryStyle.pill}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${primaryStyle.dot}`}
                      aria-hidden="true"
                    />
                    <span>{t.status[primaryData.currentStatus]}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* AM / PM Split Row */}
          <div className="grid grid-cols-2 gap-2.5">
            {[primaryData.today.morning, primaryData.today.afternoon].map(
              (block) => {
                const bStyle = badgePalette[block.badgeColor];
                const isCurrent = primaryData.activePeriod === block.period;
                return (
                  <div
                    key={block.period}
                    className={`rounded-xl border p-3 ${subCardClass} ${
                      isCurrent ? 'ring-1 ring-sky-500/40' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className="inline-flex items-center gap-1">
                        {block.period === 'AM' ? (
                          <Sunrise
                            className="w-3.5 h-3.5 text-amber-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <Sunset
                            className="w-3.5 h-3.5 text-sky-500"
                            aria-hidden="true"
                          />
                        )}
                        <span>
                          {block.period === 'AM' ? t.morning : t.afternoon}
                        </span>
                      </span>
                    </div>
                    <div className="mt-1.5 flex items-baseline justify-between">
                      <span
                        className={`text-xl font-extrabold font-mono ${bStyle.score}`}
                      >
                        {block.score}
                        <span
                          className={`text-xs font-normal ${mutedTextClass}`}
                        >
                          /10
                        </span>
                      </span>
                      <span className={`text-[11px] font-mono ${mutedTextClass}`}>
                        {t.shortStatus[block.status]}
                      </span>
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <p className={`text-xs leading-relaxed ${mutedTextClass}`}>
            {t.verdictByScore(
              primaryData.currentScore,
              primaryData.viewpoint.shortLabel
            )}
          </p>
        </div>
      )}

      {/* Optional Atmospheric Diagnostics Bar */}
      {showMetrics && (
        <div
          className={`grid grid-cols-3 gap-2 rounded-2xl border p-3 text-center ${subCardClass}`}
        >
          <div>
            <div
              className={`inline-flex items-center gap-1 text-[10px] font-mono ${mutedTextClass}`}
            >
              <Cloud className="w-3 h-3 text-sky-500" aria-hidden="true" />
              <span>{t.midCloud}</span>
            </div>
            <div
              className={`text-xs sm:text-sm font-mono font-extrabold mt-0.5 ${headingTextClass}`}
            >
              {primaryData.metrics.cloudCoverMid}%
            </div>
          </div>

          <div
            className={`border-x ${
              isDark ? 'border-slate-800' : 'border-slate-200/80'
            }`}
          >
            <div
              className={`inline-flex items-center gap-1 text-[10px] font-mono ${mutedTextClass}`}
            >
              <Eye className="w-3 h-3 text-sky-500" aria-hidden="true" />
              <span>{t.visibility}</span>
            </div>
            <div
              className={`text-xs sm:text-sm font-mono font-extrabold mt-0.5 ${headingTextClass}`}
            >
              {primaryData.metrics.visibilityKm} km
            </div>
          </div>

          <div>
            <div
              className={`inline-flex items-center gap-1 text-[10px] font-mono ${mutedTextClass}`}
            >
              <Wind className="w-3 h-3 text-sky-500" aria-hidden="true" />
              <span>{t.wind}</span>
            </div>
            <div
              className={`text-xs sm:text-sm font-mono font-extrabold mt-0.5 ${headingTextClass}`}
            >
              {primaryData.metrics.windSpeedKmh} km/h{' '}
              {primaryData.metrics.windCardinal}
            </div>
          </div>
        </div>
      )}

      {/* Optional 3-Day Mini Horizon Strip */}
      {showForecast && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className={`font-bold uppercase tracking-wider ${mutedTextClass}`}>
              {t.threeDayHorizon}
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              <span>
                {t.bestWindow}: {primaryData.bestBlockNext48h.dayLabel}{' '}
                {primaryData.bestBlockNext48h.period} (
                {primaryData.bestBlockNext48h.score}/10)
              </span>
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {primaryData.days.slice(0, 3).map((day) => {
              const peakColor: BadgeColor =
                day.dailyPeakScore >= 8
                  ? 'emerald'
                  : day.dailyPeakScore >= 6
                    ? 'amber'
                    : day.dailyPeakScore >= 3
                      ? 'orange'
                      : 'rose';
              return (
                <div
                  key={day.dateIso}
                  className={`rounded-xl border px-2.5 py-2 flex items-center justify-between gap-1.5 ${subCardClass}`}
                >
                  <div className="min-w-0">
                    <div
                      className={`text-[11px] font-extrabold truncate ${headingTextClass}`}
                    >
                      {day.isToday ? t.today : day.dayOfWeek}
                    </div>
                    <div className={`text-[10px] font-mono ${mutedTextClass}`}>
                      AM {day.morning.score} • PM {day.afternoon.score}
                    </div>
                  </div>
                  <VisibilityIcon badgeColor={peakColor} size="xs" />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Attribution & Full Forecast CTA Footer */}
      <div
        className={`pt-3 border-t ${
          isDark ? 'border-slate-800' : 'border-slate-200/80'
        } flex items-center justify-between gap-2`}
      >
        <a
          href="https://isthematterhornvisible.com?utm_source=partner_widget&utm_medium=card"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-extrabold shadow-xs transition-colors cursor-pointer"
        >
          <span>{t.ctaFull}</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
