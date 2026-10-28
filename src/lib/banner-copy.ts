import type { Locale } from './i18n/config';
import type { BannerCloudReason, BannerCloudStatus } from './types';

const BADGE: Record<BannerCloudStatus, Record<Locale, string>> = {
  seen: {
    en: 'Banner seen',
    de: 'Fahne sichtbar',
    fr: 'Bannière vue',
    it: 'Bandiera vista',
    es: 'Bandera vista',
    pt: 'Bandeira vista',
    ja: '旗雲を確認',
    ko: '깃발구름 확인',
    zh: '已见旗云',
    'zh-tw': '已見旗雲',
  },
  likely: {
    en: 'Banner likely',
    de: 'Fahne möglich',
    fr: 'Bannière probable',
    it: 'Bandiera probabile',
    es: 'Bandera probable',
    pt: 'Bandeira provável',
    ja: '旗雲の可能性',
    ko: '깃발구름 가능',
    zh: '旗云可能',
    'zh-tw': '旗雲可能',
  },
  none: {
    en: 'No banner',
    de: 'Keine Fahne',
    fr: 'Pas de bannière',
    it: 'Nessuna bandiera',
    es: 'Sin bandera',
    pt: 'Sem bandeira',
    ja: '旗雲なし',
    ko: '깃발구름 없음',
    zh: '无旗云',
    'zh-tw': '無旗雲',
  },
};

const DETAIL: Record<BannerCloudReason, Record<Locale, string>> = {
  seen: {
    en: 'The Hotel Schönegg camera shows a plume streaming off the summit.',
    de: 'Die Kamera am Hotel Schönegg zeigt eine Fahne an der Gipfelkante.',
    fr: 'La caméra de l’Hotel Schönegg montre un panache au sommet.',
    it: 'La webcam dell’Hotel Schönegg mostra un pennacchio sulla vetta.',
    es: 'La cámara del Hotel Schönegg muestra un penacho en la cumbre.',
    pt: 'A câmara do Hotel Schönegg mostra um penacho no cume.',
    ja: 'ホテル・シェネックのカメラが山頂から流れる旗雲を捉えています。',
    ko: '호텔 쇠네크 카메라에 정상에서 흐르는 깃발 구름이 보입니다.',
    zh: '舍内格酒店摄像头显示有云带从峰顶飘出。',
    'zh-tw': '舍內格酒店攝影機顯示有雲帶從峰頂飄出。',
  },
  likely: {
    en: 'Summit wind is southerly and moist enough to condense. The camera has not confirmed a plume.',
    de: 'Am Gipfel weht feuchter Südwind. Die Kamera hat eine Fahne noch nicht bestätigt.',
    fr: 'Le vent au sommet est sud et assez humide. La caméra n’a pas confirmé de panache.',
    it: 'In vetta il vento è da sud e abbastanza umido. La webcam non ha confermato il pennacchio.',
    es: 'En la cumbre el viento es del sur y hay humedad suficiente. La cámara no ha confirmado el penacho.',
    pt: 'No cume o vento é de sul e há humidade suficiente. A câmara não confirmou o penacho.',
    ja: '山頂は南風で湿っています。カメラでは旗雲をまだ確認できていません。',
    ko: '정상은 습한 남풍입니다. 카메라로는 깃발 구름이 아직 확인되지 않았습니다.',
    zh: '峰顶为偏南湿风，具备凝结条件。摄像头尚未确认旗云。',
    'zh-tw': '峰頂為偏南濕風，具備凝結條件。攝影機尚未確認旗雲。',
  },
  clear: {
    en: 'The Zermatt camera shows a clear summit with no plume.',
    de: 'Die Zermatt-Kamera zeigt einen freien Gipfel ohne Fahne.',
    fr: 'La caméra de Zermatt montre un sommet dégagé, sans panache.',
    it: 'La webcam di Zermatt mostra la vetta libera, senza pennacchio.',
    es: 'La cámara de Zermatt muestra la cumbre despejada, sin penacho.',
    pt: 'A câmara de Zermatt mostra o cume limpo, sem penacho.',
    ja: 'ツェルマットのカメラでは山頂は晴れており、旗雲はありません。',
    ko: '체르마트 카메라에는 깃발 구름 없이 맑은 정상이 보입니다.',
    zh: '采尔马特摄像头显示峰顶清晰，没有旗云。',
    'zh-tw': '采爾馬特攝影機顯示峰頂清晰，沒有旗雲。',
  },
  dry: {
    en: 'Southerly summit wind is above 30 km/h, but the air is too dry to form a banner.',
    de: 'Südwind am Gipfel über 30 km/h, die Luft ist aber zu trocken für eine Fahne.',
    fr: 'Vent de sud au sommet au-dessus de 30 km/h, mais l’air est trop sec pour une bannière.',
    it: 'Vento da sud in vetta oltre 30 km/h, ma l’aria è troppo secca per una bandiera.',
    es: 'Viento del sur en la cumbre por encima de 30 km/h, pero el aire es demasiado seco para una bandera.',
    pt: 'Vento de sul no cume acima de 30 km/h, mas o ar está seco demais para uma bandeira.',
    ja: '山頂は30 km/h超の南風ですが、空気が乾いていて旗雲にはなりません。',
    ko: '정상 남풍이 30 km/h를 넘지만 공기가 건조해 깃발 구름은 생기지 않습니다.',
    zh: '峰顶偏南风超过30公里/小时，但空气太干，形不成旗云。',
    'zh-tw': '峰頂偏南風超過30公里/小時，但空氣太乾，形不成旗雲。',
  },
  overcast: {
    en: 'The summit is already in cloud. That is a whiteout, not a banner.',
    de: 'Der Gipfel steckt bereits in Wolken. Das ist eine Whiteout-Lage, keine Fahne.',
    fr: 'Le sommet est déjà dans le nuage. C’est un blanc total, pas une bannière.',
    it: 'La vetta è già nella nuvola. È un muro bianco, non una bandiera.',
    es: 'La cumbre ya está dentro de la nube. Es un blanco total, no una bandera.',
    pt: 'O cume já está dentro da nuvem. É um branco total, não uma bandeira.',
    ja: '山頂はすでに雲の中です。旗雲ではなく、ガスに包まれています。',
    ko: '정상이 이미 구름 속입니다. 깃발 구름이 아니라 백아웃입니다.',
    zh: '峰顶已经在云里。这是白茫茫一片，不是旗云。',
    'zh-tw': '峰頂已經在雲裡。這是一片白茫茫，不是旗雲。',
  },
  socked: {
    en: 'The summit camera is in cloud. That is a whiteout, not a banner.',
    de: 'Die Gipfelkamera steht in der Wolke. Das ist eine Whiteout-Lage, keine Fahne.',
    fr: 'La caméra du sommet est dans le nuage. C’est un blanc total, pas une bannière.',
    it: 'La webcam della vetta è nella nuvola. È un muro bianco, non una bandiera.',
    es: 'La cámara de la cumbre está dentro de la nube. Es un blanco total, no una bandera.',
    pt: 'A câmara do cume está dentro da nuvem. É um branco total, não uma bandeira.',
    ja: '山頂カメラは雲の中です。旗雲ではなく、ガスに包まれています。',
    ko: '정상 카메라가 구름 속입니다. 깃발 구름이 아니라 백아웃입니다.',
    zh: '峰顶摄像头在云里。这是白茫茫一片，不是旗云。',
    'zh-tw': '峰頂攝影機在雲裡。這是一片白茫茫，不是旗雲。',
  },
  unavailable: {
    en: 'No banner setup at the summit right now.',
    de: 'Am Gipfel fehlt gerade die Lage für eine Fahnenwolke.',
    fr: 'Pas de situation de bannière au sommet pour le moment.',
    it: 'In questo momento in vetta non c’è una situazione da nube a bandiera.',
    es: 'Ahora mismo en la cumbre no hay situación de nube en bandera.',
    pt: 'Neste momento não há condições de nuvem em bandeira no cume.',
    ja: 'いま山頂に旗雲ができやすい条件はありません。',
    ko: '지금 정상에 깃발 구름이 생길 조건은 없습니다.',
    zh: '眼下峰顶没有形成旗云的条件。',
    'zh-tw': '眼下峰頂沒有形成旗雲的條件。',
  },
};

const SEEN_ADVICE: Record<Locale, (vp: string, score: number) => string> = {
  en: (vp, score) =>
    `Prime viewing at ${vp} (${score}/10). The Zermatt camera shows a banner cloud streaming off the summit.`,
  de: (vp, score) =>
    `Beste Sicht am ${vp} (${score}/10). Die Zermatt-Kamera zeigt eine Fahnenwolke am Gipfel.`,
  fr: (vp, score) =>
    `Conditions idéales à ${vp} (${score}/10). La caméra de Zermatt montre un nuage en bannière au sommet.`,
  it: (vp, score) =>
    `Condizioni ideali al ${vp} (${score}/10). La webcam di Zermatt mostra una nube a bandiera sulla vetta.`,
  es: (vp, score) =>
    `Condiciones óptimas en ${vp} (${score}/10). La cámara de Zermatt muestra una nube en bandera en la cumbre.`,
  pt: (vp, score) =>
    `Condições excelentes em ${vp} (${score}/10). A câmara de Zermatt mostra uma nuvem em bandeira no cume.`,
  ja: (vp, score) =>
    `${vp}（${score}/10）は最高の観賞コンディションです。ツェルマットのカメラが山頂の旗雲を捉えています。`,
  ko: (vp, score) =>
    `${vp}(${score}/10) 전망이 최고조입니다. 체르마트 카메라에 정상 깃발 구름이 보입니다.`,
  zh: (vp, score) =>
    `${vp} 处于绝佳观赏窗口（${score}/10）。采尔马特摄像头显示峰顶有旗状云。`,
  'zh-tw': (vp, score) =>
    `${vp} 處於絕佳觀賞窗口（${score}/10）。采爾馬特攝影機顯示峰頂有旗狀雲。`,
};

const LIKELY_ADVICE: Record<Locale, (vp: string, score: number) => string> = {
  en: (vp, score) =>
    `Prime viewing at ${vp} (${score}/10). Summit wind and humidity favor a banner cloud. The Zermatt camera has not confirmed a plume.`,
  de: (vp, score) =>
    `Beste Sicht am ${vp} (${score}/10). Wind und Feuchte am Gipfel begünstigen eine Fahne. Die Kamera hat sie noch nicht bestätigt.`,
  fr: (vp, score) =>
    `Conditions idéales à ${vp} (${score}/10). Le vent et l’humidité au sommet favorisent une bannière. La caméra ne l’a pas encore confirmée.`,
  it: (vp, score) =>
    `Condizioni ideali al ${vp} (${score}/10). Vento e umidità in vetta favoriscono una bandiera. La webcam non l’ha ancora confermata.`,
  es: (vp, score) =>
    `Condiciones óptimas en ${vp} (${score}/10). El viento y la humedad en la cumbre favorecen una bandera. La cámara aún no la confirma.`,
  pt: (vp, score) =>
    `Condições excelentes em ${vp} (${score}/10). Vento e humidade no cume favorecem uma bandeira. A câmara ainda não a confirmou.`,
  ja: (vp, score) =>
    `${vp}（${score}/10）は最高の観賞コンディションです。山頂の風と湿度は旗雲が起きやすい状態ですが、カメラではまだ確認できていません。`,
  ko: (vp, score) =>
    `${vp}(${score}/10) 전망이 최고조입니다. 정상 바람과 습도는 깃발 구름에 유리하지만, 카메라로는 아직 확인되지 않았습니다.`,
  zh: (vp, score) =>
    `${vp} 处于绝佳观赏窗口（${score}/10）。峰顶风向与湿度有利于旗状云，摄像头尚未确认。`,
  'zh-tw': (vp, score) =>
    `${vp} 處於絕佳觀賞窗口（${score}/10）。峰頂風向與濕度有利於旗狀雲，攝影機尚未確認。`,
};

export function bannerBadgeLabel(status: BannerCloudStatus, locale: Locale): string {
  return BADGE[status][locale];
}

export function bannerDetail(reason: BannerCloudReason, locale: Locale): string {
  return DETAIL[reason][locale];
}

export function bannerViewingAdvice(
  locale: Locale,
  viewpointLabel: string,
  score: number,
  status: Extract<BannerCloudStatus, 'seen' | 'likely'>
): string {
  const table = status === 'seen' ? SEEN_ADVICE : LIKELY_ADVICE;
  return table[locale](viewpointLabel, score);
}
