import type { Locale } from './config';
import type { ResortStationId, SnowBandId, SnowLine } from '../snow-data';

export interface SnowCopy {
  reportEyebrow: string;
  reportTitle: string;
  reportNote: string;
  viewSource: string;
  updated: (when: string) => string;
  depth: string;
  lastSnowfall: (when: string) => string;
  lastSnowfallMissing: string;
  notReported: string;
  reportUnavailable: string;
  stationName: Record<ResortStationId, string>;
  stationMeta: Record<ResortStationId, string>;
  forecastEyebrow: string;
  forecastTitle: string;
  forecastNote: string;
  trendNote: string;
  weekTotal: (village: number, mid: number, glacier: number) => string;
  weekDry: string;
  newSnow: string;
  freezingLevel: string;
  forecastUnavailable: string;
  snowLine: Record<SnowLine, string>;
  firm: string;
  trend: string;
  band: Record<SnowBandId, string>;
  bandElev: Record<SnowBandId, string>;
  climateEyebrow: string;
  climateTitle: string;
  climateNote: string;
  staysFrozen: string;
  staysFrozenHelp: string;
  meanTemp: string;
  glacierNote: string;
  monthSummary: (
    month: string,
    villageCm: number,
    villageFrozen: number,
    midCm: number,
    midFrozen: number,
  ) => string;
  guideLink: string;
  months: string[];
  monthsShort: string[];
}

const EN: SnowCopy = {
  reportEyebrow: 'Zermatt Bergbahnen',
  reportTitle: 'Snow report',
  reportNote:
    'Depths published by the resort. If a sector has no number, Zermatt Bergbahnen did not report one today.',
  viewSource: 'Open the resort snow report',
  updated: (when) => `Updated ${when}`,
  depth: 'Base',
  lastSnowfall: (when) => `Last snowfall ${when}`,
  lastSnowfallMissing: 'Last snowfall not listed',
  notReported: 'Not reported',
  reportUnavailable: 'The resort snow report is not available right now.',
  stationName: {
    zermatt: 'Zermatt',
    'sunnegga-rothorn': 'Sunnegga–Rothorn',
    'glacier-paradise': 'Matterhorn Glacier Paradise',
  },
  stationMeta: {
    zermatt: 'Village',
    'sunnegga-rothorn': 'Sector report',
    'glacier-paradise': 'Glacier',
  },
  forecastEyebrow: 'Open-Meteo',
  forecastTitle: 'New snow and freezing level, 10 days',
  forecastNote:
    'New snow at 1,620 m, 2,580 m, and 3,883 m, and the lowest freezing level that day. Days 8–10 are a trend, so the amounts often move.',
  trendNote: 'Trend',
  weekTotal: (village, mid, glacier) =>
    `Next 7 days: ${village} cm in the village, ${mid} cm at 2,580 m, ${glacier} cm on the glacier.`,
  weekDry: 'Next 7 days: no new snow in the forecast at these elevations.',
  newSnow: 'New snow',
  freezingLevel: 'Freezing level',
  forecastUnavailable: 'The 10-day snow forecast is not available right now.',
  snowLine: {
    village: 'Snow can settle in the village',
    mid: 'Snow line above the village',
    glacier: 'New snow stays on the glacier',
    above: 'Freezing level above the ski area',
  },
  firm: 'Forecast',
  trend: 'Trend',
  band: {
    village: 'Village',
    mid: 'Mid-mountain',
    glacier: 'Glacier',
  },
  bandElev: {
    village: '1,620 m',
    mid: '2,580 m',
    glacier: '3,883 m',
  },
  climateEyebrow: '1996–2025',
  climateTitle: 'Typical new snow by month',
  climateNote:
    'Average new snow that falls in each month, and the share of days that stay at or below 0°C. This is the 30-year pattern near Zermatt, not the depth on the piste today. Open-Meteo, ERA5-Land.',
  staysFrozen: 'Days below freezing',
  staysFrozenHelp: 'Share of days whose high stays at or below 0°C, so snow can stay on the ground.',
  meanTemp: 'Mean temperature',
  glacierNote:
    'The Theodul Glacier keeps a snowpack through summer, including months when little new snow falls.',
  monthSummary: (month, villageCm, villageFrozen, midCm, midFrozen) =>
    `${month}: the village averages ${villageCm} cm of new snow, and ${villageFrozen}% of days stay below freezing. At 2,580 m, ${midCm} cm falls and ${midFrozen}% of days stay frozen.`,
  guideLink: 'Zermatt weather by month',
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

const DE: SnowCopy = {
  reportEyebrow: 'Zermatt Bergbahnen',
  reportTitle: 'Schneebericht',
  reportNote:
    'Schneehöhen, wie sie das Resort veröffentlicht. Fehlt eine Zahl, haben die Zermatt Bergbahnen sie heute nicht gemeldet.',
  viewSource: 'Schneebericht des Resorts öffnen',
  updated: (when) => `Aktualisiert ${when}`,
  depth: 'Schneehöhe',
  lastSnowfall: (when) => `Letzter Schneefall ${when}`,
  lastSnowfallMissing: 'Letzter Schneefall nicht angegeben',
  notReported: 'Nicht gemeldet',
  reportUnavailable: 'Der Schneebericht des Resorts ist gerade nicht verfügbar.',
  stationName: {
    zermatt: 'Zermatt',
    'sunnegga-rothorn': 'Sunnegga–Rothorn',
    'glacier-paradise': 'Matterhorn Glacier Paradise',
  },
  stationMeta: {
    zermatt: 'Dorf',
    'sunnegga-rothorn': 'Sektorbericht',
    'glacier-paradise': 'Gletscher',
  },
  forecastEyebrow: 'Open-Meteo',
  forecastTitle: 'Neuschnee und Frostgrenze, 10 Tage',
  forecastNote:
    'Neuschnee auf 1’620 m, 2’580 m und 3’883 m, dazu die tiefste Frostgrenze des Tages. Tag 8 bis 10 ist ein Trend, die Mengen verschieben sich oft.',
  trendNote: 'Trend',
  weekTotal: (village, mid, glacier) =>
    `Nächste 7 Tage: ${village} cm im Dorf, ${mid} cm auf 2’580 m, ${glacier} cm am Gletscher.`,
  weekDry: 'Nächste 7 Tage: kein Neuschnee in der Prognose auf diesen Höhen.',
  newSnow: 'Neuschnee',
  freezingLevel: 'Frostgrenze',
  forecastUnavailable: 'Die 10-Tage-Schneeprognose ist gerade nicht verfügbar.',
  snowLine: {
    village: 'Schnee kann im Dorf liegen bleiben',
    mid: 'Schneefallgrenze über dem Dorf',
    glacier: 'Neuschnee bleibt auf dem Gletscher',
    above: 'Frostgrenze über dem Skigebiet',
  },
  firm: 'Prognose',
  trend: 'Trend',
  band: {
    village: 'Dorf',
    mid: 'Mittlere Lage',
    glacier: 'Gletscher',
  },
  bandElev: {
    village: '1’620 m',
    mid: '2’580 m',
    glacier: '3’883 m',
  },
  climateEyebrow: '1996–2025',
  climateTitle: 'Typischer Neuschnee nach Monat',
  climateNote:
    'Mittlerer Neuschnee pro Monat und der Anteil der Tage, die bei 0 °C oder darunter bleiben. Das ist das 30-jährige Muster bei Zermatt, nicht die Pistenhöhe von heute. Open-Meteo, ERA5-Land.',
  staysFrozen: 'Tage unter null',
  staysFrozenHelp: 'Anteil der Tage, deren Maximum bei 0 °C oder darunter bleibt, sodass Schnee liegen bleiben kann.',
  meanTemp: 'Mitteltemperatur',
  glacierNote:
    'Auf dem Theodulgletscher liegt auch im Sommer Schnee, auch in Monaten mit wenig Neuschnee.',
  monthSummary: (month, villageCm, villageFrozen, midCm, midFrozen) =>
    `${month}: im Dorf fallen im Mittel ${villageCm} cm Neuschnee, und an ${villageFrozen} % der Tage bleibt es unter null. Auf 2’580 m sind es ${midCm} cm, und ${midFrozen} % der Tage bleiben gefroren.`,
  guideLink: 'Zermatt-Wetter nach Monat',
  months: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  monthsShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
};

const FR: SnowCopy = {
  reportEyebrow: 'Zermatt Bergbahnen',
  reportTitle: 'Bulletin d’enneigement',
  reportNote:
    'Hauteurs publiées par la station. Si un secteur n’a pas de chiffre, les Zermatt Bergbahnen ne l’ont pas communiqué aujourd’hui.',
  viewSource: 'Ouvrir le bulletin de la station',
  updated: (when) => `Mis à jour ${when}`,
  depth: 'Hauteur',
  lastSnowfall: (when) => `Dernière chute de neige ${when}`,
  lastSnowfallMissing: 'Dernière chute de neige non indiquée',
  notReported: 'Non communiqué',
  reportUnavailable: 'Le bulletin d’enneigement de la station est indisponible pour le moment.',
  stationName: {
    zermatt: 'Zermatt',
    'sunnegga-rothorn': 'Sunnegga–Rothorn',
    'glacier-paradise': 'Matterhorn Glacier Paradise',
  },
  stationMeta: {
    zermatt: 'Village',
    'sunnegga-rothorn': 'Bulletin du secteur',
    'glacier-paradise': 'Glacier',
  },
  forecastEyebrow: 'Open-Meteo',
  forecastTitle: 'Neige fraîche et limite du gel, 10 jours',
  forecastNote:
    'Neige fraîche à 1 620 m, 2 580 m et 3 883 m, et la limite du gel la plus basse du jour. Les jours 8 à 10 sont une tendance : les quantités bougent souvent.',
  trendNote: 'Tendance',
  weekTotal: (village, mid, glacier) =>
    `7 prochains jours : ${village} cm au village, ${mid} cm à 2 580 m, ${glacier} cm sur le glacier.`,
  weekDry: '7 prochains jours : pas de neige fraîche prévue à ces altitudes.',
  newSnow: 'Neige fraîche',
  freezingLevel: 'Limite du gel',
  forecastUnavailable: 'La prévision de neige à 10 jours est indisponible pour le moment.',
  snowLine: {
    village: 'La neige peut tenir au village',
    mid: 'Limite de la neige au-dessus du village',
    glacier: 'La neige fraîche reste sur le glacier',
    above: 'Limite du gel au-dessus du domaine',
  },
  firm: 'Prévision',
  trend: 'Tendance',
  band: {
    village: 'Village',
    mid: 'Mi-montagne',
    glacier: 'Glacier',
  },
  bandElev: {
    village: '1 620 m',
    mid: '2 580 m',
    glacier: '3 883 m',
  },
  climateEyebrow: '1996–2025',
  climateTitle: 'Neige fraîche habituelle par mois',
  climateNote:
    'Neige fraîche moyenne tombée chaque mois, et part des jours qui restent à 0 °C ou en dessous. C’est le régime de 30 ans près de Zermatt, pas la hauteur de piste d’aujourd’hui. Open-Meteo, ERA5-Land.',
  staysFrozen: 'Jours sous le gel',
  staysFrozenHelp:
    'Part des jours dont le maximum reste à 0 °C ou en dessous, de sorte que la neige peut tenir.',
  meanTemp: 'Température moyenne',
  glacierNote:
    'Le glacier du Théodule garde un manteau neigeux en été, y compris les mois où il tombe peu de neige fraîche.',
  monthSummary: (month, villageCm, villageFrozen, midCm, midFrozen) =>
    `${month} : le village reçoit en moyenne ${villageCm} cm de neige fraîche, et ${villageFrozen} % des jours restent sous le gel. À 2 580 m, il tombe ${midCm} cm et ${midFrozen} % des jours restent gelés.`,
  guideLink: 'Météo de Zermatt par mois',
  months: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthsShort: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
};

const IT: SnowCopy = {
  reportEyebrow: 'Zermatt Bergbahnen',
  reportTitle: 'Bollettino neve',
  reportNote:
    'Spessori pubblicati dal comprensorio. Se un settore non ha un numero, le Zermatt Bergbahnen non lo hanno comunicato oggi.',
  viewSource: 'Apri il bollettino del comprensorio',
  updated: (when) => `Aggiornato ${when}`,
  depth: 'Spessore',
  lastSnowfall: (when) => `Ultima nevicata ${when}`,
  lastSnowfallMissing: 'Ultima nevicata non indicata',
  notReported: 'Non comunicato',
  reportUnavailable: 'Il bollettino neve del comprensorio non è disponibile in questo momento.',
  stationName: {
    zermatt: 'Zermatt',
    'sunnegga-rothorn': 'Sunnegga–Rothorn',
    'glacier-paradise': 'Matterhorn Glacier Paradise',
  },
  stationMeta: {
    zermatt: 'Paese',
    'sunnegga-rothorn': 'Bollettino di settore',
    'glacier-paradise': 'Ghiacciaio',
  },
  forecastEyebrow: 'Open-Meteo',
  forecastTitle: 'Neve fresca e limite del gelo, 10 giorni',
  forecastNote:
    'Neve fresca a 1.620 m, 2.580 m e 3.883 m, e il limite del gelo più basso del giorno. I giorni 8–10 sono una tendenza: le quantità si spostano spesso.',
  trendNote: 'Tendenza',
  weekTotal: (village, mid, glacier) =>
    `Prossimi 7 giorni: ${village} cm in paese, ${mid} cm a 2.580 m, ${glacier} cm sul ghiacciaio.`,
  weekDry: 'Prossimi 7 giorni: nessuna neve fresca prevista a queste quote.',
  newSnow: 'Neve fresca',
  freezingLevel: 'Limite del gelo',
  forecastUnavailable: 'La previsione neve a 10 giorni non è disponibile in questo momento.',
  snowLine: {
    village: 'La neve può tenere in paese',
    mid: 'Limite della neve sopra il paese',
    glacier: 'La neve fresca resta sul ghiacciaio',
    above: 'Limite del gelo sopra il comprensorio',
  },
  firm: 'Previsione',
  trend: 'Tendenza',
  band: {
    village: 'Paese',
    mid: 'Media montagna',
    glacier: 'Ghiacciaio',
  },
  bandElev: {
    village: '1.620 m',
    mid: '2.580 m',
    glacier: '3.883 m',
  },
  climateEyebrow: '1996–2025',
  climateTitle: 'Neve fresca tipica per mese',
  climateNote:
    'Neve fresca media che cade in ogni mese, e quota di giorni che restano a 0 °C o sotto. È l’andamento di 30 anni vicino a Zermatt, non lo spessore in pista oggi. Open-Meteo, ERA5-Land.',
  staysFrozen: 'Giorni sotto zero',
  staysFrozenHelp:
    'Quota di giorni la cui massima resta a 0 °C o sotto, così la neve può rimanere al suolo.',
  meanTemp: 'Temperatura media',
  glacierNote:
    'Il ghiacciaio del Teodulo mantiene un manto anche in estate, compresi i mesi con poca neve fresca.',
  monthSummary: (month, villageCm, villageFrozen, midCm, midFrozen) =>
    `${month}: in paese cadono in media ${villageCm} cm di neve fresca, e il ${villageFrozen}% dei giorni resta sotto zero. A 2.580 m ne cadono ${midCm} cm e il ${midFrozen}% dei giorni resta gelato.`,
  guideLink: 'Meteo di Zermatt per mese',
  months: [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre',
  ],
  monthsShort: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'],
};

const ES: SnowCopy = {
  ...EN,
  reportTitle: 'Parte de nieve',
  reportNote:
    'Espesores publicados por la estación. Si un sector no tiene cifra, Zermatt Bergbahnen no la ha dado hoy.',
  viewSource: 'Abrir el parte de la estación',
  updated: (when) => `Actualizado ${when}`,
  depth: 'Espesor',
  lastSnowfall: (when) => `Última nevada ${when}`,
  lastSnowfallMissing: 'Última nevada no indicada',
  notReported: 'No publicado',
  reportUnavailable: 'El parte de nieve de la estación no está disponible ahora.',
  stationMeta: {
    zermatt: 'Pueblo',
    'sunnegga-rothorn': 'Parte del sector',
    'glacier-paradise': 'Glaciar',
  },
  forecastTitle: 'Nieve reciente y cota de nieve, 10 días',
  forecastNote:
    'Nieve reciente a 1.620 m, 2.580 m y 3.883 m, y la cota de congelación más baja del día. Los días 8 a 10 son una tendencia: las cantidades suelen moverse.',
  trendNote: 'Tendencia',
  weekTotal: (village, mid, glacier) =>
    `Próximos 7 días: ${village} cm en el pueblo, ${mid} cm a 2.580 m, ${glacier} cm en el glaciar.`,
  weekDry: 'Próximos 7 días: no hay nieve reciente prevista en estas cotas.',
  newSnow: 'Nieve reciente',
  freezingLevel: 'Cota de congelación',
  forecastUnavailable: 'La previsión de nieve a 10 días no está disponible ahora.',
  snowLine: {
    village: 'La nieve puede cuajar en el pueblo',
    mid: 'Cota de nieve por encima del pueblo',
    glacier: 'La nieve reciente se queda en el glaciar',
    above: 'Cota de congelación por encima del dominio',
  },
  firm: 'Previsión',
  trend: 'Tendencia',
  band: { village: 'Pueblo', mid: 'Media montaña', glacier: 'Glaciar' },
  bandElev: { village: '1.620 m', mid: '2.580 m', glacier: '3.883 m' },
  climateTitle: 'Nieve reciente habitual por mes',
  climateNote:
    'Nieve reciente media que cae cada mes, y el porcentaje de días que se quedan en 0 °C o por debajo. Es el patrón de 30 años cerca de Zermatt, no el espesor de pista de hoy. Open-Meteo, ERA5-Land.',
  staysFrozen: 'Días bajo cero',
  staysFrozenHelp: 'Porcentaje de días cuya máxima se queda en 0 °C o por debajo, de modo que la nieve puede aguantar.',
  meanTemp: 'Temperatura media',
  glacierNote:
    'El glaciar de Theodul mantiene nieve en verano, también en los meses con poca nieve reciente.',
  monthSummary: (month, villageCm, villageFrozen, midCm, midFrozen) =>
    `${month}: el pueblo recibe de media ${villageCm} cm de nieve reciente, y el ${villageFrozen} % de los días se queda bajo cero. A 2.580 m caen ${midCm} cm y el ${midFrozen} % de los días sigue helado.`,
  guideLink: 'Tiempo en Zermatt por mes',
  months: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
  monthsShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
};

const PT: SnowCopy = {
  ...EN,
  reportTitle: 'Boletim de neve',
  reportNote:
    'Alturas publicadas pela estância. Se um setor não tem número, as Zermatt Bergbahnen não o comunicaram hoje.',
  viewSource: 'Abrir o boletim da estância',
  updated: (when) => `Atualizado ${when}`,
  depth: 'Altura',
  lastSnowfall: (when) => `Última nevada ${when}`,
  lastSnowfallMissing: 'Última nevada não indicada',
  notReported: 'Não comunicado',
  reportUnavailable: 'O boletim de neve da estância não está disponível agora.',
  stationMeta: {
    zermatt: 'Aldeia',
    'sunnegga-rothorn': 'Boletim do setor',
    'glacier-paradise': 'Glaciar',
  },
  forecastTitle: 'Neve fresca e cota de congelação, 10 dias',
  forecastNote:
    'Neve fresca a 1.620 m, 2.580 m e 3.883 m, e a cota de congelação mais baixa do dia. Os dias 8 a 10 são uma tendência: as quantidades costumam mudar.',
  trendNote: 'Tendência',
  weekTotal: (village, mid, glacier) =>
    `Próximos 7 dias: ${village} cm na aldeia, ${mid} cm a 2.580 m, ${glacier} cm no glaciar.`,
  weekDry: 'Próximos 7 dias: sem neve fresca prevista nestas altitudes.',
  newSnow: 'Neve fresca',
  freezingLevel: 'Cota de congelação',
  forecastUnavailable: 'A previsão de neve a 10 dias não está disponível agora.',
  snowLine: {
    village: 'A neve pode ficar na aldeia',
    mid: 'Cota de neve acima da aldeia',
    glacier: 'A neve fresca fica no glaciar',
    above: 'Cota de congelação acima do domínio',
  },
  firm: 'Previsão',
  trend: 'Tendência',
  band: { village: 'Aldeia', mid: 'Meia encosta', glacier: 'Glaciar' },
  bandElev: { village: '1.620 m', mid: '2.580 m', glacier: '3.883 m' },
  climateTitle: 'Neve fresca habitual por mês',
  climateNote:
    'Neve fresca média que cai em cada mês, e a parte dos dias que ficam a 0 °C ou abaixo. É o padrão de 30 anos perto de Zermatt, não a altura da pista hoje. Open-Meteo, ERA5-Land.',
  staysFrozen: 'Dias abaixo de zero',
  staysFrozenHelp: 'Parte dos dias cuja máxima fica a 0 °C ou abaixo, para a neve poder permanecer.',
  meanTemp: 'Temperatura média',
  glacierNote:
    'O glaciar Theodul mantém neve no verão, também nos meses em que cai pouca neve fresca.',
  monthSummary: (month, villageCm, villageFrozen, midCm, midFrozen) =>
    `${month}: a aldeia recebe em média ${villageCm} cm de neve fresca, e ${villageFrozen}% dos dias ficam abaixo de zero. A 2.580 m caem ${midCm} cm e ${midFrozen}% dos dias ficam gelados.`,
  guideLink: 'Tempo em Zermatt por mês',
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthsShort: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
};

const KO: SnowCopy = {
  ...EN,
  reportTitle: '적설 리포트',
  reportNote: '리조트가 발표한 적설입니다. 숫자가 없으면 체르마트 베르크바넨이 오늘 그 구역을 발표하지 않은 것입니다.',
  viewSource: '리조트 적설 리포트 열기',
  updated: (when) => `${when} 업데이트`,
  depth: '적설',
  lastSnowfall: (when) => `마지막 강설 ${when}`,
  lastSnowfallMissing: '마지막 강설일 없음',
  notReported: '미발표',
  reportUnavailable: '리조트 적설 리포트를 지금 불러올 수 없습니다.',
  stationMeta: {
    zermatt: '마을',
    'sunnegga-rothorn': '구역 리포트',
    'glacier-paradise': '빙하',
  },
  forecastTitle: '신설과 동결 고도, 10일',
  forecastNote:
    '1,620 m, 2,580 m, 3,883 m의 신설과 그날의 가장 낮은 동결 고도입니다. 8–10일째는 추세이며 양은 자주 바뀝니다.',
  trendNote: '추세',
  weekTotal: (village, mid, glacier) =>
    `앞으로 7일: 마을 ${village} cm, 2,580 m ${mid} cm, 빙하 ${glacier} cm.`,
  weekDry: '앞으로 7일: 이 고도에는 예보된 신설이 없습니다.',
  newSnow: '신설',
  freezingLevel: '동결 고도',
  forecastUnavailable: '10일 적설 예보를 지금 불러올 수 없습니다.',
  snowLine: {
    village: '마을에도 눈이 쌓일 수 있음',
    mid: '눈선은 마을보다 위',
    glacier: '신설은 빙하에 남음',
    above: '동결 고도가 스키장보다 높음',
  },
  firm: '예보',
  trend: '추세',
  band: { village: '마을', mid: '중산간', glacier: '빙하' },
  climateTitle: '월별 평균 신설',
  climateNote:
    '매달 내리는 평균 신설과, 최고 기온이 0°C 이하로 유지되는 날의 비율입니다. 체르마트 근처 30년 패턴이며 오늘 슬로프 적설이 아닙니다. Open-Meteo, ERA5-Land.',
  staysFrozen: '영하로 유지된 날',
  staysFrozenHelp: '최고 기온이 0°C 이하라 눈이 남을 수 있는 날의 비율입니다.',
  meanTemp: '평균 기온',
  glacierNote: '테오둘 빙하는 신설이 적은 달을 포함해 여름에도 적설을 유지합니다.',
  monthSummary: (month, villageCm, villageFrozen, midCm, midFrozen) =>
    `${month}: 마을은 평균 신설 ${villageCm} cm, 영하로 유지된 날이 ${villageFrozen}%입니다. 2,580 m에서는 ${midCm} cm가 내리고 ${midFrozen}%의 날이 영하로 유지됩니다.`,
  guideLink: '체르마트 월별 날씨',
  months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthsShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
};

const JA: SnowCopy = {
  ...EN,
  reportTitle: '積雪レポート',
  reportNote: 'リゾートが発表した積雪です。数字がない区画は、ツェルマット・ベルクバーネンが今日は発表していません。',
  viewSource: 'リゾートの積雪レポートを開く',
  updated: (when) => `${when} 更新`,
  depth: '積雪',
  lastSnowfall: (when) => `最後の降雪 ${when}`,
  lastSnowfallMissing: '最後の降雪日は未記載',
  notReported: '未発表',
  reportUnavailable: 'リゾートの積雪レポートは現在取得できません。',
  stationMeta: {
    zermatt: '村',
    'sunnegga-rothorn': 'エリアの発表',
    'glacier-paradise': '氷河',
  },
  forecastTitle: '新雪と凍結高度、10日間',
  forecastNote:
    '1,620 m、2,580 m、3,883 mの新雪と、その日の最も低い凍結高度です。8–10日目は傾向で、量はよく動きます。',
  trendNote: '傾向',
  weekTotal: (village, mid, glacier) =>
    `これから7日間: 村 ${village} cm、2,580 m ${mid} cm、氷河 ${glacier} cm。`,
  weekDry: 'これから7日間: これらの標高に新雪の予報はありません。',
  newSnow: '新雪',
  freezingLevel: '凍結高度',
  forecastUnavailable: '10日間の積雪予報は現在取得できません。',
  snowLine: {
    village: '村でも雪が残る高さ',
    mid: '雪線は村より上',
    glacier: '新雪は氷河に残る',
    above: '凍結高度はスキー場より上',
  },
  firm: '予報',
  trend: '傾向',
  band: { village: '村', mid: '中腹', glacier: '氷河' },
  climateTitle: '月ごとの平均新雪',
  climateNote:
    '各月に降る平均新雪と、最高気温が0°C以下のままの日の割合です。ツェルマット付近の30年の傾向で、今日のゲレンデ積雪ではありません。Open-Meteo、ERA5-Land。',
  staysFrozen: '氷点下の日',
  staysFrozenHelp: '最高気温が0°C以下で、雪が残りうる日の割合です。',
  meanTemp: '平均気温',
  glacierNote: 'テオドゥル氷河は、新雪が少ない月を含めて夏も積雪を保ちます。',
  monthSummary: (month, villageCm, villageFrozen, midCm, midFrozen) =>
    `${month}: 村の平均新雪は ${villageCm} cm、氷点下のままの日は ${villageFrozen}% です。2,580 mでは ${midCm} cm降り、${midFrozen}% の日が氷点下のままです。`,
  guideLink: 'ツェルマットの月別天気',
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
};

const ZH: SnowCopy = {
  ...EN,
  reportTitle: '雪情报告',
  reportNote: '雪深来自滑雪场公布的数字。某个雪区没有数字，表示采尔马特登山铁路今天没有公布。',
  viewSource: '打开滑雪场雪情报告',
  updated: (when) => `${when} 更新`,
  depth: '雪深',
  lastSnowfall: (when) => `最近一次降雪 ${when}`,
  lastSnowfallMissing: '未列出最近降雪',
  notReported: '未公布',
  reportUnavailable: '滑雪场雪情报告暂时无法获取。',
  stationMeta: {
    zermatt: '村镇',
    'sunnegga-rothorn': '雪区报告',
    'glacier-paradise': '冰川',
  },
  forecastTitle: '新雪与冻结高度，10 天',
  forecastNote: '1,620 米、2,580 米和 3,883 米的新雪，以及当天最低冻结高度。第 8 到第 10 天是趋势，雪量经常会变。',
  trendNote: '趋势',
  weekTotal: (village, mid, glacier) =>
    `未来 7 天：村镇 ${village} 厘米，2,580 米 ${mid} 厘米，冰川 ${glacier} 厘米。`,
  weekDry: '未来 7 天：这些海拔没有预报新雪。',
  newSnow: '新雪',
  freezingLevel: '冻结高度',
  forecastUnavailable: '10 天降雪预报暂时无法获取。',
  snowLine: {
    village: '雪可以在村里留住',
    mid: '雪线在村子以上',
    glacier: '新雪留在冰川上',
    above: '冻结高度在滑雪场之上',
  },
  firm: '预报',
  trend: '趋势',
  band: { village: '村镇', mid: '山腰', glacier: '冰川' },
  climateTitle: '各月典型新雪',
  climateNote:
    '每个月平均降下的新雪，以及全天维持在 0°C 或以下的天数比例。这是采尔马特附近 30 年的规律，不是今天雪道上的雪深。Open-Meteo，ERA5-Land。',
  staysFrozen: '维持冰点以下的天数',
  staysFrozenHelp: '最高气温维持在 0°C 或以下、雪可以留住的天数比例。',
  meanTemp: '平均气温',
  glacierNote: '特奥杜尔冰川在夏天也保持积雪，包括新雪很少的月份。',
  monthSummary: (month, villageCm, villageFrozen, midCm, midFrozen) =>
    `${month}：村镇平均新雪 ${villageCm} 厘米，${villageFrozen}% 的日子维持在冰点以下。2,580 米为 ${midCm} 厘米，${midFrozen}% 的日子维持冰冻。`,
  guideLink: '采尔马特逐月天气',
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
};

const ZH_TW: SnowCopy = {
  ...EN,
  reportTitle: '雪況報告',
  reportNote: '雪深來自滑雪場公布的數字。某個雪區沒有數字，表示策馬特登山鐵路今天沒有公布。',
  viewSource: '打開滑雪場雪況報告',
  updated: (when) => `${when} 更新`,
  depth: '雪深',
  lastSnowfall: (when) => `最近一次降雪 ${when}`,
  lastSnowfallMissing: '未列出最近降雪',
  notReported: '未公布',
  reportUnavailable: '滑雪場雪況報告暫時無法取得。',
  stationMeta: {
    zermatt: '村鎮',
    'sunnegga-rothorn': '雪區報告',
    'glacier-paradise': '冰川',
  },
  forecastTitle: '新雪與凍結高度，10 天',
  forecastNote: '1,620 公尺、2,580 公尺和 3,883 公尺的新雪，以及當天最低凍結高度。第 8 到第 10 天是趨勢，雪量常常會變。',
  trendNote: '趨勢',
  weekTotal: (village, mid, glacier) =>
    `未來 7 天：村鎮 ${village} 公分，2,580 公尺 ${mid} 公分，冰川 ${glacier} 公分。`,
  weekDry: '未來 7 天：這些海拔沒有預報新雪。',
  newSnow: '新雪',
  freezingLevel: '凍結高度',
  forecastUnavailable: '10 天降雪預報暫時無法取得。',
  snowLine: {
    village: '雪可以在村裡留住',
    mid: '雪線在村子以上',
    glacier: '新雪留在冰川上',
    above: '凍結高度在滑雪場之上',
  },
  firm: '預報',
  trend: '趨勢',
  band: { village: '村鎮', mid: '山腰', glacier: '冰川' },
  climateTitle: '各月典型新雪',
  climateNote:
    '每個月平均降下的新雪，以及全天維持在 0°C 或以下的天數比例。這是策馬特附近 30 年的規律，不是今天雪道上的雪深。Open-Meteo，ERA5-Land。',
  staysFrozen: '維持冰點以下的天數',
  staysFrozenHelp: '最高氣溫維持在 0°C 或以下、雪可以留住的天數比例。',
  meanTemp: '平均氣溫',
  glacierNote: '特奧杜爾冰川在夏天也保持積雪，包括新雪很少的月份。',
  monthSummary: (month, villageCm, villageFrozen, midCm, midFrozen) =>
    `${month}：村鎮平均新雪 ${villageCm} 公分，${villageFrozen}% 的日子維持在冰點以下。2,580 公尺為 ${midCm} 公分，${midFrozen}% 的日子維持冰凍。`,
  guideLink: '策馬特逐月天氣',
  months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
};

const COPY: Record<Locale, SnowCopy> = {
  en: EN,
  de: DE,
  fr: FR,
  it: IT,
  es: ES,
  pt: PT,
  ko: KO,
  ja: JA,
  zh: ZH,
  'zh-tw': ZH_TW,
};

export function getSnowCopy(locale: Locale): SnowCopy {
  return COPY[locale] ?? EN;
}
