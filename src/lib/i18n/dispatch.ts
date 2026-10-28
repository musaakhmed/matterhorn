import { BadgeColor, ViewpointForecastData } from '../types';
import { Locale } from './config';
import { Dictionary } from './types';

const VERDICT_SUMMARIES: Record<BadgeColor, Record<Locale, string>> = {
  emerald: {
    en: 'Crisp, unobstructed views of the Matterhorn pyramid.',
    fr: 'Vue dégagée et limpide sur la pyramide du Cervin.',
    de: 'Kristallklare, ungetrübte Sicht auf die Matterhorn-Pyramide.',
    it: 'Vista limpida e senza ostacoli sulla piramide del Cervino.',
    es: 'Vistas nítidas y despejadas de la pirámide del Cervino.',
    pt: 'Vistas nítidas e desobstruídas da pirâmide do Matterhorn.',
    zh: '马特洪峰金字塔峰顶清晰可见，绝美无遮挡。',
    'zh-tw': '馬特洪峰金字塔峰頂清晰可見，絕美無遮擋。',
    ja: 'マッターホルンのピラミッドが遮るものなく鮮明に見渡せます。',
    ko: '마터호른 피라미드 정상이 가림 없이 선명하게 조망됩니다.',
  },
  amber: {
    en: 'Good visibility with passing clouds or light ridge banner.',
    fr: 'Bonne visibilité avec quelques nuages passagers ou légère bannière.',
    de: 'Gute Sicht mit vereinzelten Wolken oder leichter Gipfelfahne.',
    it: 'Buona visibilità con nubi passeggere o leggera bandiera di cresta.',
    es: 'Buena visibilidad con nubes pasajeras o ligera nube en cresta.',
    pt: 'Boa visibilidade com nuvens passageiras ou leve faixa na crista.',
    zh: '能见度良好，有少量过境浮云或山脊轻微旗云。',
    'zh-tw': '能見度良好，有少許過境浮雲或山脊輕微旗雲。',
    ja: '視界は良好ですが、流れる雲や尾根に薄い旗雲がかかることがあります。',
    ko: '가시성 양호, 간헐적인 구름이나 얇은 능선 깃발 구름이 있을 수 있습니다.',
  },
  orange: {
    en: 'Limited visibility; summit frequently obscured by mid-level cloud decks.',
    fr: 'Visibilité limitée ; sommet fréquemment masqué par des bancs de nuages moyens.',
    de: 'Eingeschränkte Sicht; der Gipfel wird oft von mittelhohen Wolken verdeckt.',
    it: 'Visibilità limitata; vetta frequentemente oscurata da nubi a media quota.',
    es: 'Visibilidad limitada; cumbre frecuentemente tapada por nubes medias.',
    pt: 'Visibilidade limitada; cume frequentemente encoberto por nuvens médias.',
    zh: '能见度有限，山顶常被中层云盖遮蔽。',
    'zh-tw': '能見度有限，山頂常被中層雲層遮蔽。',
    ja: '視界不良：中層の雲によって山頂が頻繁に隠れます。',
    ko: '시야 제한적, 중층 구름대로 인해 정상이 자주 가려집니다.',
  },
  rose: {
    en: 'Socked in; zero summit visibility due to thick clouds or precipitation.',
    fr: 'Bouché ; visibilité nulle au sommet en raison d’épais nuages ou de précipitations.',
    de: 'Dicht verhangen; keine Sicht auf den Gipfel wegen dichter Wolken oder Niederschlag.',
    it: 'Completamente coperto; visibilità zero sulla vetta per fitte nubi o precipitazioni.',
    es: 'Totalmente cubierto; visibilidad nula en la cumbre por nubes densas o lluvia/nieve.',
    pt: 'Encoberto; visibilidade zero no cume devido a nuvens densas ou precipitação.',
    zh: '完全被浓云笼罩；因厚重云雾或降水导致山顶能见度为零。',
    'zh-tw': '完全被濃雲籠罩；因厚重雲霧或降水導致山頂能見度為零。',
    ja: '完全な視界不良：厚い雲または降水のため山頂は全く見えません。',
    ko: '완전 폐쇄형 구름; 짙은 구름이나 강수로 인해 정상 시야가 전혀 없습니다.',
  },
};

export function getLocalizedVerdictSummary(
  badgeColor: BadgeColor,
  locale: Locale = 'en'
): string {
  return VERDICT_SUMMARIES[badgeColor]?.[locale] || VERDICT_SUMMARIES[badgeColor]?.en;
}

export function getLocalizedViewpointLabel(
  viewpointId: string,
  locale: Locale = 'en'
): { name: string; shortLabel: string } {
  const isGlacier = viewpointId === 'glacier-paradise';

  switch (locale) {
    case 'fr':
      return isGlacier
        ? { name: 'Matterhorn Glacier Paradise (3 883 m)', shortLabel: 'Glacier Paradise (Sud)' }
        : { name: 'Gornergrat & Sunnegga (3 089 m)', shortLabel: 'Gornergrat (Est)' };
    case 'de':
      return isGlacier
        ? { name: 'Matterhorn Glacier Paradise (3.883 m)', shortLabel: 'Glacier Paradise (Süd)' }
        : { name: 'Gornergrat & Sunnegga (3.089 m)', shortLabel: 'Gornergrat (Ost)' };
    case 'it':
      return isGlacier
        ? { name: 'Matterhorn Glacier Paradise (3.883 m)', shortLabel: 'Glacier Paradise (Sud)' }
        : { name: 'Gornergrat & Sunnegga (3.089 m)', shortLabel: 'Gornergrat (Est)' };
    case 'es':
      return isGlacier
        ? { name: 'Matterhorn Glacier Paradise (3.883 m)', shortLabel: 'Glacier Paradise (Sur)' }
        : { name: 'Gornergrat & Sunnegga (3.089 m)', shortLabel: 'Gornergrat (Este)' };
    case 'pt':
      return isGlacier
        ? { name: 'Matterhorn Glacier Paradise (3.883 m)', shortLabel: 'Glacier Paradise (Sul)' }
        : { name: 'Gornergrat e Sunnegga (3.089 m)', shortLabel: 'Gornergrat (Este)' };
    case 'zh':
      return isGlacier
        ? { name: '马特洪峰冰川天堂 (3,883米)', shortLabel: '冰川天堂 (南面)' }
        : { name: '戈尔内格拉特 & 罗特霍恩 (3,089米)', shortLabel: '戈尔内格拉特 (东面)' };
    case 'zh-tw':
      return isGlacier
        ? { name: '馬特洪峰冰川天堂 (3,883公尺)', shortLabel: '冰川天堂 (南面)' }
        : { name: '高納葛拉特 & 羅特洪峰 (3,089公尺)', shortLabel: '高納葛拉特 (東面)' };
    case 'ja':
      return isGlacier
        ? { name: 'マッターホルン・グレイシャー・パラダイス (3,883m)', shortLabel: 'グレイシャー (南壁)' }
        : { name: 'ゴルナーグラート＆スネガ (3,089m)', shortLabel: 'ゴルナーグラート (東壁)' };
    case 'ko':
      return isGlacier
        ? { name: '마터호른 글래시어 파라다이스 (3,883m)', shortLabel: '글래시어 (남벽)' }
        : { name: '고르너그라트 & 수네가 (3,089m)', shortLabel: '고르너그라트 (동벽)' };
    default:
      return isGlacier
        ? { name: 'Matterhorn Glacier Paradise (3,883m)', shortLabel: 'Glacier Paradise (South)' }
        : { name: 'Gornergrat & Sunnegga (3,089m)', shortLabel: 'Gornergrat (East)' };
  }
}

export function getLocalizedGuideAdvice(
  data: ViewpointForecastData,
  locale: Locale = 'en',
  dict: Dictionary
): string {
  const activeBlock = data.activePeriod === 'AM' ? data.today.morning : data.today.afternoon;
  const score = activeBlock.score;
  const metrics = activeBlock.metrics;
  const vpLabel = getLocalizedViewpointLabel(data.viewpoint.id, locale).shortLabel;

  const bestDay = data.bestBlockNext48h.dayLabel.toLowerCase().includes('today')
    ? dict.timeline.today
    : data.bestBlockNext48h.dayLabel.toLowerCase().includes('tomorrow')
    ? dict.timeline.tomorrow
    : data.bestBlockNext48h.dayLabel;
  const bestPeriod = data.bestBlockNext48h.period === 'AM' ? dict.hero.morningLabel : dict.hero.afternoonLabel;
  const bestScore = data.bestBlockNext48h.score;

  if (score >= 8) {
    if (metrics.isFohnRisk) {
      switch (locale) {
        case 'fr':
          return `Conditions idéales à ${vpLabel} (${score}/10). La pyramide se détache nettement dans le ciel, bien que des vents de Fœhn du sud à ${metrics.windSpeedKmh} km/h forment un panache nuageux spectaculaire sous le vent.`;
        case 'de':
          return `Beste Sicht am ${vpLabel} (${score}/10). Die Pyramide steht scharf am Himmel, während ${metrics.windSpeedKmh} km/h Südföhn eine eindrucksvolle Lee-Fahnenwolke formen.`;
        case 'it':
          return `Condizioni ideali al ${vpLabel} (${score}/10). La piramide si staglia nitida nel cielo, sebbene il Föhn da sud a ${metrics.windSpeedKmh} km/h stia sollevando una spettacolare nube a bandiera.`;
        case 'es':
          return `Condiciones óptimas en ${vpLabel} (${score}/10). La pirámide se recorta nítida en el cielo, aunque vientos Föhn del sur a ${metrics.windSpeedKmh} km/h forman una espectacular nube en bandera.`;
        case 'zh':
          return `${vpLabel} 处于绝佳观赏窗口（${score}/10）！峰体在天际中格外锐利，但南向 ${metrics.windSpeedKmh} 公里/小时的焚风正卷起壮观的背风旗状云。`;
        case 'zh-tw':
          return `${vpLabel} 處於絕佳觀賞窗口（${score}/10）！峰體在天際中格外銳利，但南向 ${metrics.windSpeedKmh} 公里/小時的焚風正捲起壯觀的背風旗狀雲。`
        case 'ja':
          return `${vpLabel}（${score}/10）は最高の観賞コンディションです。青空にピラミッドが鋭く際立っていますが、風速${metrics.windSpeedKmh}km/hの南風フェーンにより風下にドラマチックな旗雲が発生しています。`;
        case 'ko':
          return `${vpLabel}(${score}/10) 전망이 최고조에 달했습니다! 피라미드가 하늘을 배경으로 선명하지만, ${metrics.windSpeedKmh}km/h의 남풍 푄 현상으로 산 뒤편에 역동적인 깃발 구름이 피어오르고 있습니다.`;
        case 'pt':
          return `Condições excelentes em ${vpLabel} (${score}/10). A pirâmide está nítida no céu, embora um Föhn de sul a ${metrics.windSpeedKmh} km/h forme uma nuvem em bandeira a sotavento.`;
        default:
          return `Prime viewing at ${vpLabel} (${score}/10). The pyramid is sharp against the sky, though ${metrics.windSpeedKmh} km/h southerly Föhn winds are whipping up a dramatic leeward banner cloud.`;
      }
    }

    switch (locale) {
      case 'fr':
        return `Conditions alpines parfaites à ${vpLabel} (${score}/10) ! Prenez le premier train ou téléphérique — ${metrics.visibilityKm} km de visibilité horizontale sans aucune obstruction nuageuse sur les crêtes.`;
      case 'de':
        return `Traumhaftes Bergwetter am ${vpLabel} (${score}/10)! Nehmen Sie die erste Bahn — ${metrics.visibilityKm} km Fernsicht bei praktisch wolkenfreien Graten.`;
      case 'it':
        return `Condizioni alpine da favola al ${vpLabel} (${score}/10)! Prendete il primo treno o funivia — ${metrics.visibilityKm} km di visibilità orizzontale e creste senza nubi.`;
      case 'es':
        return `¡Ventana alpina de ensueño en ${vpLabel} (${score}/10)! Suba en el primer tren o teleférico: ${metrics.visibilityKm} km de visibilidad horizontal con crestas completamente despejadas.`;
      case 'zh':
        return `${vpLabel} 迎来万里无云的绝佳天气（${score}/10）！立即乘坐首班列车或缆车——水平能见度达 ${metrics.visibilityKm} 公里，山脊几无任何中层云阻挡。`;
      case 'zh-tw':
        return `${vpLabel} 迎來萬里無雲的絕佳天氣（${score}/10）！請立即搭乘首班列車或纜車——水平能見度達 ${metrics.visibilityKm} 公里，山脊完全無中層雲遮蔽。`;
      case 'ja':
        return `${vpLabel}（${score}/10）は雲ひとつない快晴！始発の列車やロープウェイに乗車をおすすめします。水平視程${metrics.visibilityKm}kmで稜線の遮りはほぼゼロです。`;
      case 'ko':
        return `${vpLabel}(${score}/10) 환상적인 쾌청 알프스 윈도우! 첫차나 케이블카에 탑승하세요 — 수평 가시거리 ${metrics.visibilityKm}km로 능선에 구름 걸림이 거의 없습니다.`;
      case 'pt':
        return `Janela alpina perfeita em ${vpLabel} (${score}/10)! Pegue o primeiro trem ou teleférico — ${metrics.visibilityKm} km de visibilidade horizontal sem obstrução nas cristas.`;
      default:
        return `Bluebird alpine window at ${vpLabel} (${score}/10)! Board the first train or gondola—${metrics.visibilityKm} km horizontal visibility with virtually zero mid-level ridge obstruction.`;
    }
  }

  if (score >= 6) {
    if (data.today.morning.score > data.today.afternoon.score + 1) {
      switch (locale) {
        case 'fr':
          return `Évolution diurne alpine classique à ${vpLabel} : le matin affiche un solide ${data.today.morning.score}/10 avant que les nuages de convection ne se forment l'après-midi (${data.today.afternoon.score}/10). Montez avant midi.`;
        case 'de':
          return `Klassischer Tagesgang am ${vpLabel}: Der Vormittag bietet solide ${data.today.morning.score}/10 Punkte, bevor am Nachmittag Quellwolken aufziehen (${data.today.afternoon.score}/10). Vor Mittag hochfahren.`;
        case 'it':
          return `Classica evoluzione diurna alpina al ${vpLabel}: il mattino registra un solido ${data.today.morning.score}/10 prima delle nubi pomeridiane (${data.today.afternoon.score}/10). Salite prima di mezzogiorno.`;
        case 'es':
          return `Evolución diurna típica en ${vpLabel}: la mañana ofrece un sólido ${data.today.morning.score}/10 antes de que surjan nubes por la tarde (${data.today.afternoon.score}/10). Suba antes de mediodía.`;
        case 'zh':
          return `${vpLabel} 呈现典型的高山日变化规律：上午评分达稳健的 ${data.today.morning.score}/10 分，午后热对流云将逐渐聚拢（${data.today.afternoon.score}/10 分）。建议在正午前登顶。`;
        case 'zh-tw':
          return `${vpLabel} 呈現典型高山日夜交替變化：上午評分達紮實的 ${data.today.morning.score}/10 分，午後熱對流雲將陸續生成（${data.today.afternoon.score}/10 分）。建議在中午前登頂。`;
        case 'ja':
          return `${vpLabel}の典型的な日中パターン：午前中は堅実な${data.today.morning.score}/10点ですが、午後は積雲が発達します（${data.today.afternoon.score}/10点）。正午前に登るのが得策です。`
        case 'ko':
          return `${vpLabel} 전형적인 고산 일교차 패턴: 오전에는 안정적인 ${data.today.morning.score}/10점이나 오후에는 대류운이 발달합니다(${data.today.afternoon.score}/10점). 정오 전에 오르세요.`;
        case 'pt':
          return `Padrão diurno alpino clássico em ${vpLabel}: a manhã marca ${data.today.morning.score}/10 antes das nuvens de convecção da tarde (${data.today.afternoon.score}/10). Suba antes do meio-dia.`;
        default:
          return `Classic alpine diurnal pattern at ${vpLabel}: Morning scores a solid ${data.today.morning.score}/10 before afternoon convective clouds build (${data.today.afternoon.score}/10). Go before noon CET.`;
      }
    }

    switch (locale) {
      case 'fr':
        return `Bonnes conditions d'observation (${score}/10) depuis ${vpLabel}. Des nuages passagers peuvent effleurer l'arête du Hörnli — gardez l'appareil prêt pour de superbes percées de lumière.`;
      case 'de':
        return `Gute Bedingungen (${score}/10) am ${vpLabel}. Vorüberziehende Wolken können den Hörnligrat kurz streifen – halten Sie die Kamera für dramatische Lichtstimmungen bereit.`;
      case 'it':
        return `Buone condizioni di vista (${score}/10) dal ${vpLabel}. Nubi passeggere potrebbero sfiorare la cresta dell'Hörnli — tenete pronta la fotocamera per suggestivi giochi di luce.`;
      case 'es':
        return `Buenas condiciones de observación (${score}/10) desde ${vpLabel}. Nubes pasajeras pueden rozar la arista Hörnli: mantenga la cámara lista para espectaculares rayos de luz.`;
      case 'zh':
        return `${vpLabel} 观赏条件良好（${score}/10）。偶尔有过境浮云轻掠赫恩利山脊——随时准备捕捉光影穿透云层的壮丽瞬间。`;
      case 'zh-tw':
        return `${vpLabel} 觀賞條件良好（${score}/10）。偶有浮雲輕掠赫恩利山脊——隨時準備捕捉光影穿透雲層的壯麗瞬間。`;
      case 'ja':
        return `${vpLabel}からの眺望は良好（${score}/10）。通り過ぎる雲がヘルンリ尾根をかすめることがありますが、ドラマチックな光の切れ目を狙うチャンスです。`;
      case 'ko':
        return `${vpLabel} 양호한 관람 조건(${score}/10). 지나가는 구름이 회른리 능선을 스칠 수 있으니, 구름 사이로 쏟아지는 빛줄기를 놓치지 마세요.`;
      case 'pt':
        return `Boas condições (${score}/10) a partir de ${vpLabel}. Nuvens passageiras podem roçar a aresta Hörnli — tenha a câmara pronta para aberturas de luz.`;
      default:
        return `Solid viewing conditions (${score}/10) from ${vpLabel}. Passing clouds may briefly kiss the Hörnli ridge—keep your shutter ready for dramatic light breaks.`;
    }
  }

  if (score >= 3) {
    if (data.viewpoint.id === 'gornergrat' && metrics.cloudCoverLow > 60 && metrics.cloudCoverMid < 35) {
      switch (locale) {
        case 'fr':
          return `Le brouillard de vallée bloque les basses altitudes (${score}/10). Envisagez de monter au Glacier Paradise (3 883 m) pour passer au-dessus de la mer de nuages.`;
        case 'de':
          return `Talnebel verhüllt tiefere Lagen (${score}/10). Ein Wechsel zum Glacier Paradise (3.883 m) lohnt sich oft, um über das Wolkenmeer zu gelangen.`;
        case 'it':
          return `La nebbia di valle blocca le basse quote (${score}/10). Valutate di salire al Glacier Paradise (3.883 m) per portarvi al di sopra dell'inversione termica.`;
        case 'es':
          return `La niebla del valle cubre cotas bajas (${score}/10). Considere subir a Glacier Paradise (3.883 m) para ascender por encima del mar de nubes.`;
        case 'zh':
          return `低海拔峡谷雾气弥漫（${score}/10）。建议考虑前往冰川天堂（3,883米）穿透逆温层，登上壮阔云海之上。`;
        case 'zh-tw':
          return `低海拔峽谷霧氣籠罩（${score}/10）。建議考慮前往冰川天堂（3,883公尺）穿越逆溫層，登上壯觀雲海之上。`;
        case 'ja':
          return `谷霧が低標高を覆っています（${score}/10）。逆転層の雲海の上に抜けるため、グレイシャー・パラダイス（3,883m）への変更をご検討ください。`;
        case 'ko':
          return `계곡 안개가 낮은 고도를 덮고 있습니다(${score}/10). 운해 위로 올라설 수 있는 글래시어 파라다이스(3,883m)로 일정을 전환해 보세요.`;
        case 'pt':
          return `O nevoeiro de vale tapa as cotas baixas (${score}/10). Vale a pena subir ao Glacier Paradise (3.883 m) para ficar acima do mar de nuvens.`;
        default:
          return `Valley fog is trapping lower elevations (${score}/10). Consider switching to Glacier Paradise (3,883m) to ascend above the inversion deck.`;
      }
    }

    switch (locale) {
      case 'fr':
        return `Visibilité difficile (${score}/10) à ${vpLabel} avec ${metrics.cloudCoverMid}% de nuages moyens. La meilleure fenêtre à venir est ${bestDay} ${bestPeriod} (${bestScore}/10).`;
      case 'de':
        return `Schwierige Sicht (${score}/10) am ${vpLabel} bei ${metrics.cloudCoverMid}% mittelhohen Wolken. Das beste kommende Zeitfenster ist ${bestDay} ${bestPeriod} (${bestScore}/10).`;
      case 'it':
        return `Visibilità complessa (${score}/10) al ${vpLabel} con il ${metrics.cloudCoverMid}% di nubi medie. La migliore finestra in arrivo è ${bestDay} ${bestPeriod} (${bestScore}/10).`;
      case 'es':
        return `Visibilidad complicada (${score}/10) en ${vpLabel} con un ${metrics.cloudCoverMid}% de nubes medias. La mejor ventana próxima es ${bestDay} ${bestPeriod} (${bestScore}/10).`;
      case 'zh':
        return `${vpLabel} 能见度受限（${score}/10），中层云量达 ${metrics.cloudCoverMid}%。下一个最佳晴空窗口为 ${bestDay} ${bestPeriod}（${bestScore}/10 分）。`;
      case 'zh-tw':
        return `${vpLabel} 能見度受限（${score}/10），中層雲量達 ${metrics.cloudCoverMid}%。下一個最佳晴空時段為 ${bestDay} ${bestPeriod}（${bestScore}/10 分）。`;
      case 'ja':
        return `${vpLabel}は中層雲が${metrics.cloudCoverMid}%あり視界不良気味（${score}/10）。次のベストなチャンスは${bestDay}の${bestPeriod}（${bestScore}/10）です。`;
      case 'ko':
        return `${vpLabel} 중층운 ${metrics.cloudCoverMid}%로 시야가 까다롭습니다(${score}/10). 다가오는 가장 좋은 관람 시간대는 ${bestDay} ${bestPeriod}(${bestScore}/10)입니다.`;
      case 'pt':
        return `Visibilidade difícil (${score}/10) em ${vpLabel}, com ${metrics.cloudCoverMid}% de nuvens médias. A melhor janela seguinte é ${bestDay} ${bestPeriod} (${bestScore}/10).`;
      default:
        return `Challenging visibility (${score}/10) at ${vpLabel} with ${metrics.cloudCoverMid}% mid-cloud cover. Best upcoming window is ${bestDay} ${bestPeriod} (${bestScore}/10).`;
    }
  }

  switch (locale) {
    case 'fr':
      return `Le Cervin est complètement bouché (${score}/10) depuis ${vpLabel}. Gardez votre forfait pour ${bestDay} ${bestPeriod} (${bestScore}/10) et profitez de nos activités par temps couvert dans le village ci-dessous.`;
    case 'de':
      return `Das Matterhorn ist vom ${vpLabel} aus komplett in Wolken gehüllt (${score}/10). Sparen Sie das Bergbahnticket für ${bestDay} ${bestPeriod} (${bestScore}/10) und nutzen Sie unsere Schlechtwetter-Tipps unten.`;
    case 'it':
      return `Il Cervino è completamente avvolto dalle nubi (${score}/10) dal ${vpLabel}. Conservate il biglietto per ${bestDay} ${bestPeriod} (${bestScore}/10) ed esplorate le nostre alternative per maltempo in paese.`;
    case 'es':
      return `El Cervino está totalmente cubierto (${score}/10) desde ${vpLabel}. Guarde su billete para ${bestDay} ${bestPeriod} (${bestScore}/10) y explore nuestros planes de mal tiempo en el valle más abajo.`;
    case 'zh':
      return `从 ${vpLabel} 看马特洪峰完全被厚云笼罩（${score}/10）。建议将登山票留到 ${bestDay} ${bestPeriod}（${bestScore}/10 分），今日不妨体验下方的雨天精选活动。`;
    case 'zh-tw':
      return `從 ${vpLabel} 望去馬特洪峰完全被厚雲遮蓋（${score}/10）。建議將登山票留至 ${bestDay} ${bestPeriod}（${bestScore}/10 分），今日不妨體驗下方的雨天精選備選行程。`;
    case 'ja':
      return `${vpLabel}からのマッターホルンは完全に濃い雲の中です（${score}/10）。登山チケットは${bestDay}の${bestPeriod}（${bestScore}/10）まで温存し、村内の雨天おすすめプランをお楽しみください。`;
    case 'ko':
      return `${vpLabel}에서 마터호른이 짙은 구름에 완전히 갇혀 있습니다(${score}/10). 산악 티켓은 ${bestDay} ${bestPeriod}(${bestScore}/10)로 아껴두시고 아래의 비 오는 날 추천 일정을 즐겨보세요.`;
    case 'pt':
      return `O Matterhorn está completamente tapado (${score}/10) a partir de ${vpLabel}. Guarde o bilhete para ${bestDay} ${bestPeriod} (${bestScore}/10) e use as alternativas de mau tempo na aldeia, mais abaixo.`;
    default:
      return `The Matterhorn is completely socked in (${score}/10) from ${vpLabel}. Save your mountain pass for ${bestDay} ${bestPeriod} (${bestScore}/10) and explore our rainy-day Zermatt contingency picks below.`;
  }
}
