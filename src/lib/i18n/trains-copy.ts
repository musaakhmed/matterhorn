import type { Locale } from './config';
import {
  TRAINS,
  TRAINS_FAQS,
  getTrainsLiveStatus,
  type TrainFaq,
  type TrainOverview,
} from '../trains';

type NonEn = Exclude<Locale, 'en'>;
type TrainId = 'gornergrat' | 'glacier-express';

interface StationText {
  name?: string;
  highlight: string;
}

interface TrainText {
  name: string;
  tagline: string;
  type: string;
  route: string;
  distance: string;
  duration: string;
  peakPointName: string;
  highlights: string[];
  swissStatus: string;
  swissBadge: string;
  swissDescription: string;
  eurailStatus: string;
  eurailDescription: string;
  seatCost: string;
  seatAdvance: string;
  seatNote: string;
  standardAdultReturn: string;
  swissPassPrice: string;
  halfFarePrice: string;
  childrenPolicy: string;
  sitDirection: string;
  sitSide: string;
  sitReason: string;
  dogDetails: string;
  luggagePolicy: string;
  dining: string;
  schedule: string;
  annualMaintenance: string;
  bestMonths: string;
  stations: StationText[];
  seoKeywords: string[];
}

interface FaqText {
  question: string;
  answer: string;
}

interface PhraseMap {
  [english: string]: string;
}

function applyTrain(base: TrainOverview, text: TrainText): TrainOverview {
  return {
    ...base,
    name: text.name,
    tagline: text.tagline,
    type: text.type,
    route: text.route,
    distance: text.distance,
    duration: text.duration,
    peakPointName: text.peakPointName,
    highlights: text.highlights,
    swissPassCoverage: {
      status: text.swissStatus as TrainOverview['swissPassCoverage']['status'],
      shortBadge: text.swissBadge,
      description: text.swissDescription,
    },
    eurailCoverage: {
      status: text.eurailStatus,
      description: text.eurailDescription,
    },
    seatReservation: {
      required: base.seatReservation.required,
      cost: text.seatCost,
      advanceBooking: text.seatAdvance,
      note: text.seatNote,
    },
    ticketPricing2026: {
      standardAdultReturn: text.standardAdultReturn,
      swissPassPrice: text.swissPassPrice,
      halfFarePrice: text.halfFarePrice,
      childrenPolicy: text.childrenPolicy,
    },
    bestSideToSit: {
      direction: text.sitDirection,
      side: text.sitSide,
      reason: text.sitReason,
    },
    dogPolicy: {
      allowed: base.dogPolicy.allowed,
      details: text.dogDetails,
    },
    luggagePolicy: text.luggagePolicy,
    dining: text.dining,
    seasonality: {
      schedule: text.schedule,
      annualMaintenance: text.annualMaintenance,
      bestMonths: text.bestMonths,
    },
    topStations: base.topStations.map((station, index) => ({
      name: text.stations[index]?.name ?? station.name,
      elevation: station.elevation,
      highlight: text.stations[index]?.highlight ?? station.highlight,
    })),
    seoKeywords: text.seoKeywords,
  };
}

const GORNER_EN = TRAINS.gornergrat;
const GEX_EN = TRAINS['glacier-express'];

function keepSeo(id: TrainId): string[] {
  return id === 'gornergrat' ? GORNER_EN.seoKeywords : GEX_EN.seoKeywords;
}

const TRAIN_TEXT: Record<NonEn, Record<TrainId, TrainText>> = {
  de: {
    gornergrat: {
      name: 'Gornergratbahn',
      tagline: 'Europas höchste offene Zahnradbahn',
      type: 'Elektrische alpine Zahnradbahn',
      route: 'Zermatt (1,604 m) ↔ Gornergrat-Gipfel (3,089 m)',
      distance: '9.3 km (5.8 Meilen)',
      duration: '33 Minuten pro Richtung',
      peakPointName: 'Aussichtsterrasse Gornergrat (3,089 m)',
      highlights: [
        'Freier Blick in erster Reihe auf die Ostwand des Matterhorns (Toblerone-Profil)',
        'Ausstieg in Rotenboden (2,815 m) für den berühmten 10-Minuten-Weg zum Spiegel des Riffelsees',
        'Panorama über den Gornergletscher und 29 Gipfel über 4,000 Meter',
        'Standort des 3100 Kulmhotel Gornergrat, Europas höchstes Hotel, mit Sternwarten',
        'Fährt an 365 Tagen, in der Hochsaison alle 24 Minuten',
      ],
      swissStatus: '50% Ermässigung',
      swissBadge: '50% mit Swiss Travel Pass',
      swissDescription:
        'Swiss Travel Pass und Swiss Half Fare Card geben 50% auf einfache und retour Gornergrat-Billette. Mit dem Pass ist die Fahrt NICHT gratis.',
      eurailStatus: 'Kein Rabatt',
      eurailDescription: 'Eurail und Interrail geben KEINEN Rabatt auf die Gornergrat Bahn. Es braucht ein normales Billett.',
      seatCost: 'Freie Platzwahl (optionaler Priority-Boarding-Pass CHF 7)',
      seatAdvance: 'Billette gelten für jede Abfahrt am gewählten Kalendertag',
      seatNote:
        'Eine Sitzreservation ist nicht nötig. Die Züge fahren alle 24–48 Minuten. Priority Boarding sichert die erste Wahl am Fenster.',
      standardAdultReturn: 'CHF 132 (Hochsommer) / CHF 102 (Winter)',
      swissPassPrice: 'CHF 66 (Hochsommer) / CHF 51 (Winter)',
      halfFarePrice: 'CHF 66 (Hochsommer) / CHF 51 (Winter)',
      childrenPolicy:
        'Kinder unter 6 fahren gratis. 6–15 Jahre fahren gratis, wenn die Eltern eine Swiss Family Card haben (sonst 50% Rabatt).',
      sitDirection: 'Bergfahrt von Zermatt zum Gornergrat',
      sitSide: 'Rechte Seite des Wagens',
      sitReason:
        'Rechts auf der Bergfahrt bleibt die Matterhorn-Pyramide im Blick, während die Zahnradbahn durch Lärchenwald und Alpwiesen steigt.',
      dogDetails:
        'Hunde jeder Grösse sind willkommen. Kleine Hunde (bis 30 cm Schulterhöhe) in einer Box fahren gratis; grössere Hunde zum halben Erwachsenenpreis.',
      luggagePolicy:
        'Normale Rucksäcke, Skiausrüstung und Gepäck sind gratis an Bord. In jedem Wagen gibt es Ski- und Gepäckhalter.',
      dining:
        'Essen im 3100 Kulmhotel Gornergrat (Panoramarestaurant vis-à-vis und Selbstbedienung), dazu Bergrestaurants in Riffelberg, Riffelalp und Rotenboden.',
      schedule: 'Fährt an 365 Tagen im Jahr',
      annualMaintenance: 'Ganzjähriger Betrieb (keine lange Saisonsperre)',
      bestMonths: 'Juli–September für schneefreie Riffelsee-Spiegelungen; Dezember–März für Ski und Schneeschuh mit Panorama',
      stations: [
        { highlight: 'Talendstation gegenüber dem SBB-Bahnhof' },
        { highlight: 'Hoher Steinviadukt über die Findelbachschlucht' },
        { highlight: 'Zugang zum Fünfsterne-Resort Riffelalp und zur historischen Sommertram' },
        { highlight: 'Winter-Skihub, historisches Berghotel und Terrasse mit direktem Matterhornblick' },
        { highlight: 'Start für den berühmten 10-Minuten-Weg zum Spiegel des Riffelsees' },
        { name: 'Gornergrat-Gipfel', highlight: '3100 Kulmhotel, Sternwarten, Kapelle St. Bernhard und 360°-Gletscherterrasse' },
      ],
      seoKeywords: keepSeo('gornergrat'),
    },
    'glacier-express': {
      name: 'Glacier Express',
      tagline: 'Der langsamste Expresszug der Welt',
      type: 'Transalpine Panorama-Bahn',
      route: 'Zermatt (Wallis) ↔ St. Moritz / Davos (Graubünden)',
      distance: '291 km (181 Meilen) über 291 Brücken und durch 91 Tunnel',
      duration: 'Etwa 7 Stunden 45 Minuten',
      peakPointName: 'Oberalppass (2,033 m / 6,670 ft)',
      highlights: [
        'Fahrt über 291 Viadukte und durch 91 Alpentunnel',
        'Überquerung des Landwasserviadukts (65 m hohe Kalksteinbrücke, die direkt in einen Felstunnel führt)',
        'Fahrt durch die Rheinschlucht (Ruinaulta), den Schweizer Grand Canyon',
        'Höchster Punkt am Oberalppass (2,033 m), der Quelle des Rheins',
        'Grosse gebogene Panoramafenster bis ins Dach',
        'Excellence Class mit Concierge, garantiertem Fensterplatz und 5-Gang-Menü',
      ],
      swissStatus: 'Billett 100% inklusive (Reservation nötig)',
      swissBadge: 'Billett zu 100% mit Swiss Travel Pass',
      swissDescription:
        'Das Fahrbillett ist mit Swiss Travel Pass und Eurail zu 100% gedeckt. Eine SITZRESERVATION ist für alle Pflicht und kostet extra.',
      eurailStatus: 'Billett zu 100% gedeckt (Reservation nötig)',
      eurailDescription:
        'Eurail und Interrail decken das Billett in der 1. oder 2. Klasse. Die Pflicht-Sitzreservation kommt dazu.',
      seatCost: 'CHF 39 (Nebensaison) / CHF 49 (Hochsommer) für 1./2. Klasse; Excellence-Zuschlag CHF 470',
      seatAdvance: 'Reservationen öffnen 93 Tage im Voraus (an Stossdaten am Tag 93 buchen)',
      seatNote:
        'Die Reservation ist Pflicht. Auch mit unlimitiertem Swiss Travel Pass darf man ohne bestätigten Sitz nicht einsteigen.',
      standardAdultReturn: 'CHF 159 (2. Klasse einfach) / CHF 272 (1. Klasse einfach) + Sitzreservation',
      swissPassPrice: 'CHF 0 für das Billett + CHF 39–49 Sitzreservation',
      halfFarePrice: '50% auf das normale Billett + volle Sitzreservation',
      childrenPolicy:
        'Kinder unter 6 fahren ohne Sitz gratis. 6–15 Jahre fahren mit Swiss Family Card gratis, müssen aber die Pflicht-Sitzreservation zahlen.',
      sitDirection: 'Zermatt nach St. Moritz (ostwärts)',
      sitSide: 'Links für die Rheinschlucht, rechts für die Auffahrt zum Oberalppass',
      sitReason:
        'Ostwärts ist die Rheinschlucht links am besten, der Oberalppass rechts. Die Wagen haben 360°-Panoramaglas, jeder Sitz hat Aussicht.',
      dogDetails:
        'Hunde und Haustiere sind in den Panoramawagen des Glacier Express NICHT erlaubt (anders als in normalen Schweizer Regionalzügen), wegen Verpflegung und Komfort.',
      luggagePolicy:
        'Grosse Gepäckablagen am Wagenende und Ablagen über den Sitzen. Gepäckversand zwischen Zermatt und St. Moritz über die SBB ist möglich.',
      dining:
        'Mehrgängige Bergmenüs frisch am Platz (Vorbestellung empfohlen). In der Excellence Class sind Champagner, ein 5-Gang-Menü mit Wein, Tee und Snacks inklusive.',
      schedule: 'Winter- und Sommerfahrplan (etwa 15. Dezember bis Mitte Oktober)',
      annualMaintenance: 'Jährliche Pause von Mitte Oktober bis Anfang Dezember (kein Glacier Express)',
      bestMonths: 'Januar–März für Tiefschnee über dem Oberalppass; Juni–September für Blumenwiesen und Bergseen',
      stations: [
        { highlight: 'Alpines Ende am Fusse des Matterhorns' },
        { highlight: 'Historischer Bahnknoten im Rhonetal mit dem Stockalperpalast' },
        { highlight: 'Herz der Schweizer Alpen, Verbindung ins Urserental' },
        { name: 'Oberalppass', highlight: 'Höchster Punkt der Linie, vorbei am Oberalp-Leuchtturm' },
        { highlight: 'Historisches Benediktinerkloster und Lokwechsel' },
        { highlight: 'Älteste Stadt der Schweiz, Tor zur Rheinschlucht' },
        { highlight: 'Überquerung des weltberühmten Landwasserviadukts (65 Meter)' },
        { highlight: 'Glamouröses Engadiner Ferienort am St. Moritzersee' },
      ],
      seoKeywords: keepSeo('glacier-express'),
    },
  },
  es: {
    gornergrat: {
      name: 'Ferrocarril del Gornergrat',
      tagline: 'El tren cremallera al aire libre más alto de Europa',
      type: 'Ferrocarril eléctrico de montaña de cremallera',
      route: 'Zermatt (1,604 m) ↔ cima del Gornergrat (3,089 m)',
      distance: '9.3 km (5.8 millas)',
      duration: '33 minutos por trayecto',
      peakPointName: 'Terraza panorámica del Gornergrat (3,089 m)',
      highlights: [
        'Vista de primera fila de la cara este del Matterhorn (perfil Toblerone)',
        'Bajada en Rotenboden (2,815 m) para el paseo de 10 minutos al espejo del Riffelsee',
        'Mirador de la cumbre sobre el glaciar Gorner y 29 picos de más de 4,000 metros',
        'Sede del 3100 Kulmhotel Gornergrat, el hotel más alto de Europa, con observatorios',
        'Circula los 365 días, cada 24 minutos en temporada alta',
      ],
      swissStatus: '50% de descuento',
      swissBadge: '50% con Swiss Travel Pass',
      swissDescription:
        'El Swiss Travel Pass y la Swiss Half Fare Card dan un 50% en billetes sencillos y de ida y vuelta del Gornergrat. Con el pase NO es gratis.',
      eurailStatus: 'Sin descuento',
      eurailDescription: 'Eurail e Interrail NO descuentan el Gornergrat Bahn. Hay que comprar el billete normal.',
      seatCost: 'Asiento libre (pase opcional de embarque prioritario CHF 7)',
      seatAdvance: 'Los billetes valen para cualquier salida del día elegido',
      seatNote:
        'No hace falta reservar asiento. Los trenes salen cada 24–48 minutos. El embarque prioritario asegura la primera elección de ventanilla.',
      standardAdultReturn: 'CHF 132 (pleno verano) / CHF 102 (invierno)',
      swissPassPrice: 'CHF 66 (pleno verano) / CHF 51 (invierno)',
      halfFarePrice: 'CHF 66 (pleno verano) / CHF 51 (invierno)',
      childrenPolicy:
        'Los menores de 6 viajan gratis. De 6 a 15 años viajan gratis si los padres tienen Swiss Family Card (si no, 50% de descuento).',
      sitDirection: 'Subida de Zermatt al Gornergrat',
      sitSide: 'Lado derecho del vagón',
      sitReason:
        'A la derecha en la subida, la pirámide del Matterhorn queda a la vista mientras el cremallera atraviesa alerces y praderas.',
      dogDetails:
        'Se admiten perros de cualquier tamaño. Los pequeños (hasta 30 cm a la cruz) en transportín viajan gratis; los grandes, a media tarifa de adulto.',
      luggagePolicy:
        'Mochilas, equipo de esquí y equipaje suben gratis. Cada vagón tiene soportes para esquís y maletas.',
      dining:
        'Comida en el 3100 Kulmhotel Gornergrat (restaurante panorámico vis-à-vis y autoservicio), y restaurantes de montaña en Riffelberg, Riffelalp y Rotenboden.',
      schedule: 'Funciona los 365 días del año',
      annualMaintenance: 'Servicio continuo todo el año (sin cierre de temporada largo)',
      bestMonths: 'Julio–septiembre para el espejo del Riffelsee sin nieve; diciembre–marzo para esquí y raquetas con panorama',
      stations: [
        { highlight: 'Terminal del valle, frente a la estación principal de SBB' },
        { highlight: 'Alto viaducto de piedra sobre la garganta del Findelbach' },
        { highlight: 'Acceso al resort de cinco estrellas Riffelalp y al tranvía histórico de verano' },
        { highlight: 'Nudo de esquí de invierno, hotel histórico y terraza con el Matterhorn de frente' },
        { highlight: 'Inicio del famoso paseo de 10 minutos al lago espejo Riffelsee' },
        { name: 'Cima del Gornergrat', highlight: '3100 Kulmhotel, cúpulas astronómicas, capilla de San Bernardo y terraza glaciar de 360°' },
      ],
      seoKeywords: keepSeo('gornergrat'),
    },
    'glacier-express': {
      name: 'Glacier Express',
      tagline: 'El expreso más lento del mundo',
      type: 'Ferrocarril panorámico transalpino',
      route: 'Zermatt (Valais) ↔ St. Moritz / Davos (Grisones)',
      distance: '291 km (181 millas) por 291 puentes y 91 túneles',
      duration: 'Unas 7 horas y 45 minutos',
      peakPointName: 'Puerto de Oberalp (2,033 m / 6,670 ft)',
      highlights: [
        'Recorre 291 viaductos y 91 túneles alpinos',
        'Cruce del viaducto de Landwasser (puente de caliza de 65 m que entra directo en un túnel en el acantilado)',
        'Paso por la garganta del Rin (Ruinaulta), el gran cañón suizo',
        'Punto más alto en el puerto de Oberalp (2,033 m), nacimiento del Rin',
        'Grandes ventanales panorámicos curvados que llegan al techo',
        'Excellence Class con conserje, ventanilla garantizada y menú de 5 platos',
      ],
      swissStatus: 'Billete 100% incluido (reserva obligatoria)',
      swissBadge: 'Billete 100% cubierto por el Swiss Travel Pass',
      swissDescription:
        'El billete del viaje está cubierto al 100% por el Swiss Travel Pass y por Eurail. La RESERVA DE ASIENTO es obligatoria para todos y se paga aparte.',
      eurailStatus: 'Billete cubierto al 100% (reserva obligatoria)',
      eurailDescription: 'Eurail e Interrail cubren el billete en 1.ª o 2.ª clase. Se suma la reserva de asiento obligatoria.',
      seatCost: 'CHF 39 (temporada baja) / CHF 49 (pleno verano) en 1.ª/2.ª; suplemento Excellence Class CHF 470',
      seatAdvance: 'Las reservas abren 93 días antes (en fechas punta hay que reservar el día 93)',
      seatNote:
        'La reserva es obligatoria. Ni con un Swiss Travel Pass ilimitado se puede subir sin un asiento confirmado.',
      standardAdultReturn: 'CHF 159 (2.ª clase, solo ida) / CHF 272 (1.ª clase, solo ida) + reserva de asiento',
      swissPassPrice: 'CHF 0 por el billete + CHF 39–49 de reserva',
      halfFarePrice: '50% del billete normal + la reserva de asiento completa',
      childrenPolicy:
        'Los menores de 6 viajan gratis sin asiento. De 6 a 15 años viajan gratis con Swiss Family Card, pero deben pagar la reserva obligatoria.',
      sitDirection: 'De Zermatt a St. Moritz (hacia el este)',
      sitSide: 'Izquierda para la garganta del Rin, derecha para la subida al Oberalp',
      sitReason:
        'Hacia el este, la garganta del Rin se ve mejor a la izquierda y el puerto de Oberalp a la derecha. Los vagones tienen cristal panorámico de 360°, así que hay vista desde cualquier asiento.',
      dogDetails:
        'No se admiten perros ni mascotas en los vagones panorámicos del Glacier Express (a diferencia de los regionales suizos), por el servicio de comidas y la comodidad.',
      luggagePolicy:
        'Maleteros grandes al final de cada coche y bandejas superiores. Hay envío de equipaje SBB entre Zermatt y St. Moritz.',
      dining:
        'Menús alpinos de varios platos servidos en el asiento (conviene reservar). En Excellence Class van incluidos el champán, un menú regional de 5 platos con vinos, el té y los aperitivos.',
      schedule: 'Horarios de invierno y verano (aprox. del 15 de diciembre a mediados de octubre)',
      annualMaintenance: 'Pausa anual de mediados de octubre a principios de diciembre (no circula el Glacier Express)',
      bestMonths: 'Enero–marzo para la nieve profunda del Oberalp; junio–septiembre para prados y lagos alpinos',
      stations: [
        { highlight: 'Terminal alpina al pie del Matterhorn' },
        { highlight: 'Nudo ferroviario histórico del valle del Ródano, con el palacio Stockalper' },
        { highlight: 'Corazón de los Alpes suizos, enlace con el valle de Urseren' },
        { name: 'Puerto de Oberalp', highlight: 'Punto más alto de la línea, junto al faro de Oberalp' },
        { highlight: 'Monasterio benedictino histórico y cambio de locomotora' },
        { highlight: 'La ciudad más antigua de Suiza, puerta de la garganta del Rin' },
        { highlight: 'Cruce del viaducto de Landwasser, de 65 metros' },
        { highlight: 'Estación de Engadina a orillas del lago de St. Moritz' },
      ],
      seoKeywords: keepSeo('glacier-express'),
    },
  },
  fr: {
    gornergrat: {
      name: 'Chemin de fer du Gornergrat',
      tagline: 'Le plus haut chemin de fer à crémaillère à ciel ouvert d’Europe',
      type: 'Chemin de fer électrique de montagne à crémaillère',
      route: 'Zermatt (1,604 m) ↔ sommet du Gornergrat (3,089 m)',
      distance: '9.3 km (5.8 miles)',
      duration: '33 minutes par trajet',
      peakPointName: 'Terrasse d’observation du Gornergrat (3,089 m)',
      highlights: [
        'Vue de premier rang sur la face est du Cervin (profil Toblerone)',
        'Arrêt à Rotenboden (2,815 m) pour la marche de 10 minutes vers le miroir du Riffelsee',
        'Panorama sur le glacier du Gorner et 29 sommets de plus de 4,000 mètres',
        'Siège du 3100 Kulmhotel Gornergrat, l’hôtel le plus haut d’Europe, avec observatoires',
        'Circule 365 jours par an, toutes les 24 minutes en haute saison',
      ],
      swissStatus: 'Réduction de 50 %',
      swissBadge: '50 % avec le Swiss Travel Pass',
      swissDescription:
        'Le Swiss Travel Pass et la Swiss Half Fare Card donnent 50 % sur les billets simples et aller-retour du Gornergrat. Le trajet n’est PAS gratuit avec le pass.',
      eurailStatus: 'Aucune réduction',
      eurailDescription: 'Eurail et Interrail ne donnent AUCUNE réduction sur le Gornergrat Bahn. Il faut un billet plein tarif.',
      seatCost: 'Placement libre (pass d’embarquement prioritaire en option, CHF 7)',
      seatAdvance: 'Billets valables pour n’importe quel départ du jour choisi',
      seatNote:
        'La réservation de place n’est pas nécessaire. Les trains partent toutes les 24 à 48 minutes. L’embarquement prioritaire garantit le premier choix côté fenêtre.',
      standardAdultReturn: 'CHF 132 (plein été) / CHF 102 (hiver)',
      swissPassPrice: 'CHF 66 (plein été) / CHF 51 (hiver)',
      halfFarePrice: 'CHF 66 (plein été) / CHF 51 (hiver)',
      childrenPolicy:
        'Les moins de 6 ans voyagent gratuitement. De 6 à 15 ans, gratuit avec des parents titulaires d’une Swiss Family Card (sinon 50 % de réduction).',
      sitDirection: 'Montée de Zermatt vers le Gornergrat',
      sitSide: 'Côté droit de la voiture',
      sitReason:
        'À droite en montant, la pyramide du Cervin reste en vue pendant que la crémaillère traverse mélèzes et alpages.',
      dogDetails:
        'Les chiens de toute taille sont acceptés. Les petits (jusqu’à 30 cm au garrot) en caisse voyagent gratuitement ; les plus grands paient le demi-tarif adulte.',
      luggagePolicy:
        'Sacs à dos, matériel de ski et bagages sont acceptés gratuitement. Chaque voiture a des supports à skis et à bagages.',
      dining:
        'Table au 3100 Kulmhotel Gornergrat (restaurant panoramique vis-à-vis et libre-service), plus des restaurants d’altitude à Riffelberg, Riffelalp et Rotenboden.',
      schedule: 'Circule 365 jours par an',
      annualMaintenance: 'Service continu toute l’année (pas de long arrêt saisonnier)',
      bestMonths: 'Juillet–septembre pour le miroir du Riffelsee sans neige ; décembre–mars pour le ski et les raquettes avec panorama',
      stations: [
        { highlight: 'Terminus de la vallée, en face de la gare CFF' },
        { highlight: 'Haut viaduc de pierre au-dessus des gorges du Findelbach' },
        { highlight: 'Accès au resort cinq étoiles Riffelalp et au tramway historique d’été' },
        { highlight: 'Pôle ski d’hiver, hôtel historique et terrasse face au Cervin' },
        { highlight: 'Départ de la célèbre marche de 10 minutes vers le lac miroir du Riffelsee' },
        { name: 'Sommet du Gornergrat', highlight: '3100 Kulmhotel, coupoles astronomiques, chapelle Saint-Bernard et terrasse glaciaire à 360°' },
      ],
      seoKeywords: keepSeo('gornergrat'),
    },
    'glacier-express': {
      name: 'Glacier Express',
      tagline: 'L’express le plus lent du monde',
      type: 'Chemin de fer panoramique transalpin',
      route: 'Zermatt (Valais) ↔ St. Moritz / Davos (Grisons)',
      distance: '291 km (181 miles) sur 291 ponts et dans 91 tunnels',
      duration: 'Environ 7 heures 45 minutes',
      peakPointName: 'Col de l’Oberalp (2,033 m / 6,670 ft)',
      highlights: [
        'Traverse 291 viaducs et 91 tunnels alpins',
        'Passage du viaduc de la Landwasser (pont calcaire de 65 m qui entre droit dans un tunnel de falaise)',
        'Traversée des gorges du Rhin (Ruinaulta), le grand canyon suisse',
        'Point haut au col de l’Oberalp (2,033 m), source du Rhin',
        'Grandes vitres panoramiques courbes jusqu’au toit',
        'Excellence Class avec concierge, place fenêtre garantie et menu en 5 services',
      ],
      swissStatus: 'Billet 100 % inclus (réservation obligatoire)',
      swissBadge: 'Billet couvert à 100 % par le Swiss Travel Pass',
      swissDescription:
        'Le billet de parcours est couvert à 100 % par le Swiss Travel Pass et Eurail. Une RÉSERVATION DE PLACE est obligatoire pour tous et se paie à part.',
      eurailStatus: 'Billet couvert à 100 % (réservation obligatoire)',
      eurailDescription: 'Eurail et Interrail couvrent le billet en 1re ou 2e classe. Les frais de réservation obligatoire s’ajoutent.',
      seatCost: 'CHF 39 (basse saison) / CHF 49 (plein été) en 1re/2e ; supplément Excellence Class CHF 470',
      seatAdvance: 'Les réservations ouvrent 93 jours à l’avance (aux dates de pointe, réserver le jour même de l’ouverture)',
      seatNote:
        'La réservation est obligatoire. Même avec un Swiss Travel Pass illimité, on ne monte pas sans place confirmée.',
      standardAdultReturn: 'CHF 159 (2e classe, aller simple) / CHF 272 (1re classe, aller simple) + réservation',
      swissPassPrice: 'CHF 0 pour le billet + CHF 39–49 de réservation',
      halfFarePrice: '50 % du billet plein tarif + réservation de place entière',
      childrenPolicy:
        'Les moins de 6 ans voyagent gratuitement sans place. De 6 à 15 ans, gratuit avec Swiss Family Card, mais la réservation obligatoire reste due.',
      sitDirection: 'De Zermatt à St. Moritz (vers l’est)',
      sitSide: 'À gauche pour les gorges du Rhin, à droite pour la montée de l’Oberalp',
      sitReason:
        'Vers l’est, les gorges du Rhin se voient mieux à gauche, et le col de l’Oberalp à droite. Les voitures ont un vitrage panoramique à 360°, donc une vue depuis chaque place.',
      dogDetails:
        'Les chiens et animaux ne sont PAS admis dans les voitures panoramiques du Glacier Express (contrairement aux trains régionaux suisses), pour la restauration et le confort.',
      luggagePolicy:
        'Grands porte-bagages en bout de voiture et filets au-dessus des sièges. Acheminement de bagages SBB possible entre Zermatt et St. Moritz.',
      dining:
        'Menus alpins en plusieurs services servis à la place (réservation conseillée). En Excellence Class : champagne, menu régional en 5 services avec vins, thé et collations inclus.',
      schedule: 'Horaires d’hiver et d’été (environ du 15 décembre à la mi-octobre)',
      annualMaintenance: 'Pause annuelle de la mi-octobre au début décembre (aucun Glacier Express)',
      bestMonths: 'Janvier–mars pour la neige profonde de l’Oberalp ; juin–septembre pour les prairies et les lacs',
      stations: [
        { highlight: 'Terminus alpin au pied du Cervin' },
        { highlight: 'Nœud ferroviaire historique de la vallée du Rhône, avec le palais Stockalper' },
        { highlight: 'Cœur des Alpes suisses, liaison avec la vallée d’Urseren' },
        { name: 'Col de l’Oberalp', highlight: 'Point le plus haut de la ligne, devant le phare de l’Oberalp' },
        { highlight: 'Monastère bénédictin historique et changement de locomotive' },
        { highlight: 'Plus ancienne ville de Suisse, porte des gorges du Rhin' },
        { highlight: 'Franchissement du viaduc de la Landwasser, haut de 65 mètres' },
        { highlight: 'Station d’Engadine au bord du lac de St. Moritz' },
      ],
      seoKeywords: keepSeo('glacier-express'),
    },
  },
  it: {
    gornergrat: {
      name: 'Ferrovia del Gornergrat',
      tagline: 'La cremagliera a cielo aperto più alta d’Europa',
      type: 'Ferrovia elettrica di montagna a cremagliera',
      route: 'Zermatt (1,604 m) ↔ vetta del Gornergrat (3,089 m)',
      distance: '9.3 km (5.8 miglia)',
      duration: '33 minuti per tratta',
      peakPointName: 'Terrazza panoramica del Gornergrat (3,089 m)',
      highlights: [
        'Vista in prima fila sulla parete est del Cervino (profilo Toblerone)',
        'Discesa a Rotenboden (2,815 m) per la camminata di 10 minuti allo specchio del Riffelsee',
        'Panorama sul ghiacciaio del Gorner e su 29 vette oltre i 4,000 metri',
        'Sede del 3100 Kulmhotel Gornergrat, l’hotel più alto d’Europa, con osservatori',
        'Circola 365 giorni, ogni 24 minuti in alta stagione',
      ],
      swissStatus: 'Sconto del 50%',
      swissBadge: '50% con Swiss Travel Pass',
      swissDescription:
        'Swiss Travel Pass e Swiss Half Fare Card danno il 50% sui biglietti di andata e andata-ritorno del Gornergrat. Con il pass il viaggio NON è gratis.',
      eurailStatus: 'Nessuno sconto',
      eurailDescription: 'Eurail e Interrail NON scontano la Gornergrat Bahn. Serve il biglietto intero.',
      seatCost: 'Posto libero (pass facoltativo di imbarco prioritario CHF 7)',
      seatAdvance: 'I biglietti valgono per qualsiasi partenza del giorno scelto',
      seatNote:
        'La prenotazione del posto non serve. I treni partono ogni 24–48 minuti. L’imbarco prioritario garantisce la prima scelta al finestrino.',
      standardAdultReturn: 'CHF 132 (piena estate) / CHF 102 (inverno)',
      swissPassPrice: 'CHF 66 (piena estate) / CHF 51 (inverno)',
      halfFarePrice: 'CHF 66 (piena estate) / CHF 51 (inverno)',
      childrenPolicy:
        'I bambini sotto i 6 anni viaggiano gratis. Dai 6 ai 15 anni gratis se i genitori hanno la Swiss Family Card (altrimenti sconto del 50%).',
      sitDirection: 'Salita da Zermatt al Gornergrat',
      sitSide: 'Lato destro della carrozza',
      sitReason:
        'A destra in salita la piramide del Cervino resta in vista mentre la cremagliera attraversa larici e alpeggi.',
      dogDetails:
        'I cani di ogni taglia sono ammessi. I piccoli (fino a 30 cm al garrese) nel trasportino viaggiano gratis; i grandi a metà tariffa adulto.',
      luggagePolicy:
        'Zaini, attrezzatura da sci e bagagli salgono gratis. Ogni carrozza ha portasci e portabagagli.',
      dining:
        'Tavola al 3100 Kulmhotel Gornergrat (ristorante panoramico vis-à-vis e self-service), più ristoranti di quota a Riffelberg, Riffelalp e Rotenboden.',
      schedule: 'Circola 365 giorni l’anno',
      annualMaintenance: 'Servizio continuo tutto l’anno (nessuna lunga pausa stagionale)',
      bestMonths: 'Luglio–settembre per lo specchio del Riffelsee senza neve; dicembre–marzo per sci e ciaspole con panorama',
      stations: [
        { highlight: 'Capolinea di valle di fronte alla stazione FFS' },
        { highlight: 'Alto viadotto in pietra sulla gola del Findelbach' },
        { highlight: 'Accesso al resort a cinque stelle Riffelalp e al tram storico estivo' },
        { highlight: 'Hub sciistico invernale, hotel storico e terrazza sul Cervino' },
        { highlight: 'Partenza della famosa camminata di 10 minuti al lago specchio del Riffelsee' },
        { name: 'Vetta del Gornergrat', highlight: '3100 Kulmhotel, cupole astronomiche, cappella di San Bernardo e terrazza glaciale a 360°' },
      ],
      seoKeywords: keepSeo('gornergrat'),
    },
    'glacier-express': {
      name: 'Glacier Express',
      tagline: 'L’espresso più lento del mondo',
      type: 'Ferrovia panoramica transalpina',
      route: 'Zermatt (Vallese) ↔ St. Moritz / Davos (Grigioni)',
      distance: '291 km (181 miglia) su 291 ponti e in 91 gallerie',
      duration: 'Circa 7 ore e 45 minuti',
      peakPointName: 'Passo dell’Oberalp (2,033 m / 6,670 ft)',
      highlights: [
        'Attraversa 291 viadotti e 91 gallerie alpine',
        'Passaggio del viadotto della Landwasser (ponte in calcare di 65 m che entra diretto in una galleria nella roccia)',
        'Attraverso la gola del Reno (Ruinaulta), il grand canyon svizzero',
        'Punto più alto al passo dell’Oberalp (2,033 m), sorgente del Reno',
        'Grandi finestrini panoramici curvi fino al tetto',
        'Excellence Class con concierge, finestrino garantito e menu di 5 portate',
      ],
      swissStatus: 'Biglietto 100% incluso (prenotazione obbligatoria)',
      swissBadge: 'Biglietto coperto al 100% dallo Swiss Travel Pass',
      swissDescription:
        'Il biglietto di viaggio è coperto al 100% da Swiss Travel Pass ed Eurail. La PRENOTAZIONE DEL POSTO è obbligatoria per tutti e si paga a parte.',
      eurailStatus: 'Biglietto coperto al 100% (prenotazione obbligatoria)',
      eurailDescription: 'Eurail e Interrail coprono il biglietto in 1ª o 2ª classe. Si aggiunge la prenotazione obbligatoria.',
      seatCost: 'CHF 39 (bassa stagione) / CHF 49 (piena estate) in 1ª/2ª; supplemento Excellence Class CHF 470',
      seatAdvance: 'Le prenotazioni aprono 93 giorni prima (nelle date di punta, prenotare il giorno 93)',
      seatNote:
        'La prenotazione è obbligatoria. Anche con uno Swiss Travel Pass illimitato non si sale senza posto confermato.',
      standardAdultReturn: 'CHF 159 (2ª classe, solo andata) / CHF 272 (1ª classe, solo andata) + prenotazione',
      swissPassPrice: 'CHF 0 per il biglietto + CHF 39–49 di prenotazione',
      halfFarePrice: '50% del biglietto intero + prenotazione del posto per intero',
      childrenPolicy:
        'I bambini sotto i 6 anni viaggiano gratis senza posto. Dai 6 ai 15 anni gratis con Swiss Family Card, ma la prenotazione obbligatoria si paga.',
      sitDirection: 'Da Zermatt a St. Moritz (verso est)',
      sitSide: 'A sinistra per la gola del Reno, a destra per la salita dell’Oberalp',
      sitReason:
        'Verso est la gola del Reno si vede meglio a sinistra e il passo dell’Oberalp a destra. Le carrozze hanno vetri panoramici a 360°, quindi vista da ogni posto.',
      dogDetails:
        'Cani e animali NON sono ammessi nelle carrozze panoramiche del Glacier Express (a differenza dei regionali svizzeri), per il servizio di bordo e il comfort.',
      luggagePolicy:
        'Grandi portabagagli in fondo a ogni carrozza e cappelliere. Spedizione bagagli SBB tra Zermatt e St. Moritz.',
      dining:
        'Menu alpini di più portate serviti al posto (meglio prenotare). In Excellence Class: champagne, menu regionale di 5 portate con vini, tè e snack inclusi.',
      schedule: 'Orari invernali ed estivi (circa dal 15 dicembre a metà ottobre)',
      annualMaintenance: 'Pausa annuale da metà ottobre a inizio dicembre (nessun Glacier Express)',
      bestMonths: 'Gennaio–marzo per la neve alta dell’Oberalp; giugno–settembre per prati e laghi',
      stations: [
        { highlight: 'Capolinea alpino ai piedi del Cervino' },
        { highlight: 'Nodo ferroviario storico della valle del Rodano, con il palazzo Stockalper' },
        { highlight: 'Cuore delle Alpi svizzere, collegamento con la valle di Urseren' },
        { name: 'Passo dell’Oberalp', highlight: 'Punto più alto della linea, davanti al faro dell’Oberalp' },
        { highlight: 'Monastero benedettino storico e cambio locomotiva' },
        { highlight: 'La città più antica della Svizzera, porta della gola del Reno' },
        { highlight: 'Attraversamento del viadotto della Landwasser, alto 65 metri' },
        { highlight: 'Località dell’Engadina sulla riva del lago di St. Moritz' },
      ],
      seoKeywords: keepSeo('glacier-express'),
    },
  },
  pt: {
    gornergrat: {
      name: 'Comboio do Gornergrat',
      tagline: 'O comboio de cremalheira a céu aberto mais alto da Europa',
      type: 'Comboio elétrico de montanha de cremalheira',
      route: 'Zermatt (1,604 m) ↔ cume do Gornergrat (3,089 m)',
      distance: '9.3 km (5.8 milhas)',
      duration: '33 minutos em cada sentido',
      peakPointName: 'Terraço de observação do Gornergrat (3,089 m)',
      highlights: [
        'Vista de primeira fila da face leste do Matterhorn (perfil Toblerone)',
        'Paragem em Rotenboden (2,815 m) para a caminhada de 10 minutos até ao espelho do Riffelsee',
        'Panorama sobre o glaciar Gorner e 29 cumes acima de 4,000 metros',
        'Sede do 3100 Kulmhotel Gornergrat, o hotel mais alto da Europa, com observatórios',
        'Circula 365 dias por ano, de 24 em 24 minutos na época alta',
      ],
      swissStatus: 'Desconto de 50%',
      swissBadge: '50% com o Swiss Travel Pass',
      swissDescription:
        'O Swiss Travel Pass e o Swiss Half Fare Card dão 50% nos bilhetes simples e de ida e volta do Gornergrat. Com o passe a viagem NÃO é gratuita.',
      eurailStatus: 'Sem desconto',
      eurailDescription: 'O Eurail e o Interrail NÃO dão desconto no Gornergrat Bahn. É preciso o bilhete normal.',
      seatCost: 'Lugar livre (passe facultativo de embarque prioritário CHF 7)',
      seatAdvance: 'Os bilhetes são válidos para qualquer partida do dia escolhido',
      seatNote:
        'Não é precisa reserva de lugar. Os comboios partem de 24 em 24 ou de 48 em 48 minutos. O embarque prioritário garante a primeira escolha à janela.',
      standardAdultReturn: 'CHF 132 (pleno verão) / CHF 102 (inverno)',
      swissPassPrice: 'CHF 66 (pleno verão) / CHF 51 (inverno)',
      halfFarePrice: 'CHF 66 (pleno verão) / CHF 51 (inverno)',
      childrenPolicy:
        'Crianças com menos de 6 anos viajam grátis. Dos 6 aos 15 anos viajam grátis se os pais tiverem Swiss Family Card (caso contrário, 50% de desconto).',
      sitDirection: 'Subida de Zermatt para o Gornergrat',
      sitSide: 'Lado direito da carruagem',
      sitReason:
        'À direita na subida, a pirâmide do Matterhorn mantém-se à vista enquanto o comboio de cremalheira atravessa lariços e pastagens.',
      dogDetails:
        'Cães de qualquer tamanho são bem-vindos. Os pequenos (até 30 cm ao garrote) em caixa viajam grátis; os maiores pagam metade do bilhete de adulto.',
      luggagePolicy:
        'Mochilas, material de esqui e bagagem seguem a bordo sem custo. Cada carruagem tem suportes para esquis e malas.',
      dining:
        'Refeições no 3100 Kulmhotel Gornergrat (restaurante panorâmico vis-à-vis e self-service), e restaurantes de montanha em Riffelberg, Riffelalp e Rotenboden.',
      schedule: 'Circula 365 dias por ano',
      annualMaintenance: 'Serviço contínuo todo o ano (sem paragem sazonal prolongada)',
      bestMonths: 'Julho–setembro para o espelho do Riffelsee sem neve; dezembro–março para esqui e raquetes de neve com panorama',
      stations: [
        { highlight: 'Término do vale, em frente à estação principal dos CFF' },
        { highlight: 'Viaduto alto de pedra sobre a garganta do Findelbach' },
        { highlight: 'Acesso ao resort de cinco estrelas Riffelalp e ao elétrico histórico de verão' },
        { highlight: 'Nó de esqui de inverno, hotel histórico e terraço com vista direta para o Matterhorn' },
        { highlight: 'Início da famosa caminhada de 10 minutos até ao lago-espelho Riffelsee' },
        { name: 'Cume do Gornergrat', highlight: '3100 Kulmhotel, cúpulas astronómicas, capela de São Bernardo e terraço glaciar de 360°' },
      ],
      seoKeywords: keepSeo('gornergrat'),
    },
    'glacier-express': {
      name: 'Glacier Express',
      tagline: 'O expresso mais lento do mundo',
      type: 'Comboio panorâmico transalpino',
      route: 'Zermatt (Valais) ↔ St. Moritz / Davos (Grisões)',
      distance: '291 km (181 milhas) por 291 pontes e 91 túneis',
      duration: 'Cerca de 7 horas e 45 minutos',
      peakPointName: 'Passo do Oberalp (2,033 m / 6,670 ft)',
      highlights: [
        'Percorre 291 viadutos e 91 túneis alpinos',
        'Travessia do viaduto de Landwasser (ponte de calcário de 65 m que entra direto num túnel na escarpa)',
        'Passagem pela garganta do Reno (Ruinaulta), o grande desfiladeiro suíço',
        'Ponto mais alto no passo do Oberalp (2,033 m), nascente do Reno',
        'Grandes vidros panorâmicos curvos até ao teto',
        'Excellence Class com concierge, lugar à janela garantido e menu de 5 pratos',
      ],
      swissStatus: 'Bilhete 100% incluído (reserva obrigatória)',
      swissBadge: 'Bilhete coberto a 100% pelo Swiss Travel Pass',
      swissDescription:
        'O bilhete da viagem está coberto a 100% pelo Swiss Travel Pass e pelo Eurail. A RESERVA DE LUGAR é obrigatória para todos e paga-se à parte.',
      eurailStatus: 'Bilhete coberto a 100% (reserva obrigatória)',
      eurailDescription: 'O Eurail e o Interrail cobrem o bilhete em 1.ª ou 2.ª classe. Acrescenta-se a reserva de lugar obrigatória.',
      seatCost: 'CHF 39 (época baixa) / CHF 49 (pleno verão) em 1.ª/2.ª; suplemento Excellence Class CHF 470',
      seatAdvance: 'As reservas abrem 93 dias antes (nas datas de pico, reserve no próprio dia 93)',
      seatNote:
        'A reserva é obrigatória. Mesmo com um Swiss Travel Pass ilimitado não se entra sem lugar confirmado.',
      standardAdultReturn: 'CHF 159 (2.ª classe, só ida) / CHF 272 (1.ª classe, só ida) + reserva de lugar',
      swissPassPrice: 'CHF 0 pelo bilhete + CHF 39–49 de reserva',
      halfFarePrice: '50% do bilhete normal + a reserva de lugar por inteiro',
      childrenPolicy:
        'Crianças com menos de 6 anos viajam grátis sem lugar. Dos 6 aos 15 anos viajam grátis com Swiss Family Card, mas têm de pagar a reserva obrigatória.',
      sitDirection: 'De Zermatt para St. Moritz (para leste)',
      sitSide: 'À esquerda para a garganta do Reno, à direita para a subida do Oberalp',
      sitReason:
        'Para leste, a garganta do Reno vê-se melhor à esquerda e o passo do Oberalp à direita. As carruagens têm vidro panorâmico a 360°, por isso há vista de qualquer lugar.',
      dogDetails:
        'Cães e animais de estimação NÃO são admitidos nas carruagens panorâmicas do Glacier Express (ao contrário dos comboios regionais suíços), por causa do serviço de refeições e do conforto.',
      luggagePolicy:
        'Porta-bagagens grandes no fundo de cada carruagem e prateleiras por cima dos lugares. Há expedição de bagagem CFF entre Zermatt e St. Moritz.',
      dining:
        'Menus alpinos de vários pratos servidos no lugar (convém reservar). Na Excellence Class estão incluídos champanhe, menu regional de 5 pratos com vinhos, chá e petiscos.',
      schedule: 'Horários de inverno e de verão (cerca de 15 de dezembro a meados de outubro)',
      annualMaintenance: 'Pausa anual de meados de outubro ao início de dezembro (não circula o Glacier Express)',
      bestMonths: 'Janeiro–março para a neve funda do Oberalp; junho–setembro para prados e lagos alpinos',
      stations: [
        { highlight: 'Término alpino no sopé do Matterhorn' },
        { highlight: 'Nó ferroviário histórico do vale do Ródano, com o palácio Stockalper' },
        { highlight: 'Coração dos Alpes suíços, ligação ao vale de Urseren' },
        { name: 'Passo do Oberalp', highlight: 'Ponto mais alto da linha, junto ao farol do Oberalp' },
        { highlight: 'Mosteiro beneditino histórico e mudança de locomotiva' },
        { highlight: 'A cidade mais antiga da Suíça, porta da garganta do Reno' },
        { highlight: 'Travessia do viaduto de Landwasser, com 65 metros de altura' },
        { highlight: 'Estância da Engadina à beira do lago de St. Moritz' },
      ],
      seoKeywords: keepSeo('glacier-express'),
    },
  },
  ko: {
    gornergrat: {
      name: '고르너그라트 철도',
      tagline: '유럽에서 가장 높은 야외 톱니바퀴 열차',
      type: '알파인 전기 톱니바퀴 산악 철도',
      route: '체르마트 (1,604 m) ↔ 고르너그라트 정상 (3,089 m)',
      distance: '9.3 km (5.8마일)',
      duration: '편도 33분',
      peakPointName: '고르너그라트 전망 테라스 (3,089 m)',
      highlights: [
        '마터호른 동벽(토블론 실루엣)을 맨 앞줄에서 보는 전망',
        '로텐보덴(2,815 m)에서 내려 리펠제 거울 호수까지 10분 산책',
        '고르너 빙하와 4,000 m가 넘는 봉우리 29개의 정상 전망',
        '유럽에서 가장 높은 호텔 3100 Kulmhotel Gornergrat과 천문대',
        '연중 365일 운행, 성수기에는 24분 간격',
      ],
      swissStatus: '50% 할인',
      swissBadge: 'Swiss Travel Pass 50% 할인',
      swissDescription:
        'Swiss Travel Pass와 Swiss Half Fare Card는 고르너그라트 편도·왕복 일반 요금의 50%를 할인합니다. 패스로 100% 무료는 아닙니다.',
      eurailStatus: '할인 없음',
      eurailDescription: '유레일과 인터레일은 고르너그라트 철도에 할인을 주지 않습니다. 일반 승차권을 사야 합니다.',
      seatCost: '자유석 (선택 CHF 7 우선 탑승 패스)',
      seatAdvance: '선택한 날짜의 어느 출발이든 유효한 승차권',
      seatNote: '좌석 예약은 필요 없습니다. 24–48분마다 운행합니다. 우선 탑승은 창가 자리를 먼저 고를 수 있습니다.',
      standardAdultReturn: 'CHF 132 (한여름) / CHF 102 (겨울)',
      swissPassPrice: 'CHF 66 (한여름) / CHF 51 (겨울)',
      halfFarePrice: 'CHF 66 (한여름) / CHF 51 (겨울)',
      childrenPolicy: '6세 미만은 무료입니다. 6–15세는 부모가 Swiss Family Card를 가지면 무료이고, 그렇지 않으면 50% 할인입니다.',
      sitDirection: '체르마트에서 고르너그라트로 오르는 방향',
      sitSide: '객차 오른쪽',
      sitReason: '오르막에서 오른쪽에 앉으면 낙엽송 숲과 고산 초지를 지나며 마터호른 피라미드가 계속 보입니다.',
      dogDetails: '크기와 관계없이 개를 태웁니다. 어깨 높이 30 cm 이하의 작은 개는 이동장 안이면 무료, 큰 개는 성인 요금의 절반입니다.',
      luggagePolicy: '일반 배낭, 스키 장비, 짐은 무료로 실을 수 있습니다. 각 객차에 스키·짐 거치대가 있습니다.',
      dining: '3100 Kulmhotel Gornergrat의 파노라마 식당 vis-à-vis와 셀프서비스, 그리고 Riffelberg, Riffelalp, Rotenboden의 산장 식당.',
      schedule: '연중 365일 운행',
      annualMaintenance: '연중 운행 (긴 계절 휴지 없음)',
      bestMonths: '7–9월은 눈이 걷힌 리펠제 거울, 12–3월은 스키와 스노슈 파노라마',
      stations: [
        { highlight: '스위스 연방철도 SBB 역 맞은편의 계곡 종점' },
        { highlight: '핀델바흐 협곡을 넘는 높은 석조 고가교' },
        { highlight: '5성급 Riffelalp Resort와 역사적인 여름 트램의 관문' },
        { highlight: '겨울 스키 거점, 역사적인 산장 호텔, 마터호른이 바로 보이는 테라스' },
        { highlight: '리펠제 거울 호수까지 유명한 10분 산책의 출발점' },
        { name: '고르너그라트 정상', highlight: '3100 Kulmhotel, 천문 돔, 성 베른하르트 예배당, 360° 빙하 데크' },
      ],
      seoKeywords: keepSeo('gornergrat'),
    },
    'glacier-express': {
      name: 'Glacier Express',
      tagline: '세상에서 가장 느린 급행열차',
      type: '알프스를 가로지르는 파노라마 관광 열차',
      route: '체르마트(발레) ↔ 장크트모리츠 / 다보스(그라우뷘덴)',
      distance: '291개 다리와 91개 터널을 지나는 291 km (181마일)',
      duration: '약 7시간 45분',
      peakPointName: '오버알프 고개 (2,033 m / 6,670 ft)',
      highlights: [
        '291개의 고가교와 91개의 알파인 터널',
        '절벽 터널로 바로 들어가는 높이 65 m 석회암 다리, 란트바서 고가교',
        '스위스의 그랜드 캐니언이라 불리는 라인 협곡(Ruinaulta)',
        '라인강의 발원지인 오버알프 고개(2,033 m)가 최고점',
        '지붕까지 이어지는 곡면 파노라마 유리',
        '전용 컨시어지, 창가 좌석 보장, 5코스 메뉴의 Excellence Class',
      ],
      swissStatus: '승차권 100% 포함 (예약 필수)',
      swissBadge: 'Swiss Travel Pass로 승차권 100%',
      swissDescription: '여행 승차권은 Swiss Travel Pass와 유레일로 100% 포함됩니다. 좌석 예약은 모든 승객에게 필수이며 별도 요금입니다.',
      eurailStatus: '승차권 100% 포함 (예약 필수)',
      eurailDescription: '유레일과 인터레일은 1등 또는 2등 승차권을 완전히 포함합니다. 필수 좌석 예약료는 별도입니다.',
      seatCost: '1등/2등 CHF 39(비수기) / CHF 49(한여름); Excellence Class 추가 CHF 470',
      seatAdvance: '예약은 93일 전에 열립니다 (성수일은 93일째 당일에 예약)',
      seatNote: '예약은 필수입니다. 무제한 Swiss Travel Pass가 있어도 확정 좌석 없이는 탈 수 없습니다.',
      standardAdultReturn: 'CHF 159 (2등 편도) / CHF 272 (1등 편도) + 좌석 예약',
      swissPassPrice: '승차권 CHF 0 + 좌석 예약 CHF 39–49',
      halfFarePrice: '일반 승차권 50% + 좌석 예약료 전액',
      childrenPolicy: '6세 미만은 좌석 없이 무료입니다. 6–15세는 Swiss Family Card가 있으면 무료이지만 필수 좌석 예약료는 내야 합니다.',
      sitDirection: '체르마트에서 장크트모리츠 (동쪽)',
      sitSide: '라인 협곡은 왼쪽, 오버알프 오르막은 오른쪽',
      sitReason: '동행 열차는 라인 협곡이 왼쪽, 오버알프 고개가 오른쪽에서 더 좋습니다. 객차는 360° 파노라마 유리라 어느 좌석이든 경치가 있습니다.',
      dogDetails: '기내 식사와 승객 편의 규정 때문에 Glacier Express 파노라마 객차에는 개와 반려동물이 허용되지 않습니다. 일반 스위스 지역 열차와는 다릅니다.',
      luggagePolicy: '각 객차 끝의 큰 짐칸과 머리 위 선반이 있습니다. 체르마트와 장크트모리츠 사이 SBB 수하물 탁송도 가능합니다.',
      dining: '자리에서 나오는 신선한 알파인 코스 (사전 주문을 권합니다). Excellence Class는 샴페인, 와인 페어링 5코스, 애프터눈 티와 간식이 포함됩니다.',
      schedule: '겨울·여름 시각표 (대략 12월 15일부터 10월 중순)',
      annualMaintenance: '매년 10월 중순부터 12월 초까지 정비 휴지 (Glacier Express 운휴)',
      bestMonths: '1–3월은 오버알프의 깊은 눈, 6–9월은 고산 초원과 호수',
      stations: [
        { highlight: '마터호른 기슭의 알파인 종점' },
        { highlight: '론 계곡의 역사적인 철도 분기점, 슈토칼퍼 궁전' },
        { highlight: '스위스 알프스의 중심, 우르제렌 계곡 연결' },
        { name: '오버알프 고개', highlight: '노선의 최고점, 오버알프 등대를 지남' },
        { highlight: '역사적인 베네딕토회 수도원과 기관차 교체' },
        { highlight: '스위스에서 가장 오래된 도시, 라인 협곡의 관문' },
        { highlight: '높이 65 m의 란트바서 고가교를 건넘' },
        { highlight: '장크트모리츠 호숫가의 화려한 엥가딘 리조트' },
      ],
      seoKeywords: keepSeo('glacier-express'),
    },
  },
  ja: {
    gornergrat: {
      name: 'ゴルナーグラート鉄道',
      tagline: 'ヨーロッパで最も高い屋外のラック式鉄道',
      type: '電気式の高山ラック式鉄道',
      route: 'ツェルマット（1,604 m）↔ ゴルナーグラート山頂（3,089 m）',
      distance: '9.3 km（5.8マイル）',
      duration: '片道33分',
      peakPointName: 'ゴルナーグラート展望テラス（3,089 m）',
      highlights: [
        'マッターホルン東壁（トブラローネの輪郭）を最前列で見る景色',
        'ローテンボーデン（2,815 m）で降り、リッフェルゼーの鏡まで10分の散歩',
        'ゴルナー氷河と4,000 mを超える29の峰を見渡す山頂',
        'ヨーロッパ最高所のホテル 3100 Kulmhotel Gornergrat と天文台',
        '年中無休。繁忙期は24分間隔',
      ],
      swissStatus: '50%割引',
      swissBadge: 'Swiss Travel Passで50%',
      swissDescription:
        'Swiss Travel Pass と Swiss Half Fare Card は、ゴルナーグラートの片道・往復の通常運賃を50%引きにします。パスだけで無料にはなりません。',
      eurailStatus: '割引なし',
      eurailDescription: 'ユーレイルとインターレイルはゴルナーグラート鉄道を割り引きません。通常の乗車券が必要です。',
      seatCost: '自由席（任意の優先乗車パス CHF 7）',
      seatAdvance: '選んだ日のどの出発でも有効な切符',
      seatNote: '座席予約は不要です。24〜48分間隔で走ります。優先乗車は窓側を先に選べます。',
      standardAdultReturn: 'CHF 132（盛夏）／CHF 102（冬）',
      swissPassPrice: 'CHF 66（盛夏）／CHF 51（冬）',
      halfFarePrice: 'CHF 66（盛夏）／CHF 51（冬）',
      childrenPolicy: '6歳未満は無料です。6〜15歳は、親が Swiss Family Card を持っていれば無料、なければ50%引きです。',
      sitDirection: 'ツェルマットからゴルナーグラートへの上り',
      sitSide: '車両の右側',
      sitReason: '上りで右側に座ると、カラマツ林と高山の草地を抜けながらマッターホルンのピラミッドが見え続けます。',
      dogDetails: '大きさにかかわらず犬は乗車できます。肩までの高さ30 cmまでの小型犬はケージなら無料、大型犬は大人料金の半額です。',
      luggagePolicy: '通常のリュック、スキー用具、荷物は無料で持ち込めます。各車両にスキーと荷物のラックがあります。',
      dining: '3100 Kulmhotel Gornergrat のパノラマレストラン vis-à-vis とセルフサービス、それに Riffelberg、Riffelalp、Rotenboden の山のレストラン。',
      schedule: '年中無休',
      annualMaintenance: '通年運行（長い季節休止なし）',
      bestMonths: '7〜9月は雪のないリッフェルゼーの鏡。12〜3月はスキーとスノーシューのパノラマ',
      stations: [
        { highlight: 'スイス連邦鉄道 SBB の駅の向かいにある谷の終点' },
        { highlight: 'フィンデルバッハの峡谷を渡る高い石の高架橋' },
        { highlight: '五つ星 Riffelalp Resort と歴史ある夏のトラムへの入口' },
        { highlight: '冬のスキー拠点、歴史ある山のホテル、マッターホルンが正面のテラス' },
        { highlight: 'リッフェルゼーの鏡の湖まで、有名な10分の散歩の起点' },
        { name: 'ゴルナーグラート山頂', highlight: '3100 Kulmhotel、天文ドーム、聖ベルンハルト礼拝堂、360°の氷河デッキ' },
      ],
      seoKeywords: keepSeo('gornergrat'),
    },
    'glacier-express': {
      name: 'Glacier Express',
      tagline: '世界で最も遅い急行列車',
      type: 'アルプスを横断するパノラマ鉄道',
      route: 'ツェルマット（ヴァレー）↔ サンモリッツ／ダボス（グラウビュンデン）',
      distance: '291の橋と91のトンネルを越える 291 km（181マイル）',
      duration: '約7時間45分',
      peakPointName: 'オーバーアルプ峠（2,033 m／6,670 ft）',
      highlights: [
        '291の高架橋と91のアルプストンネル',
        '高さ65 mの石灰岩の橋が崖のトンネルへ直結するラントヴァッサー高架橋',
        'スイスのグランドキャニオンと呼ばれるライン峡谷（Ruinaulta）',
        'ライン川の源流、オーバーアルプ峠（2,033 m）が最高点',
        '屋根まで届く大きな曲面パノラマ窓',
        '専任コンシェルジュ、窓側確約、5品のメニューがある Excellence Class',
      ],
      swissStatus: '乗車券100%込み（予約必須）',
      swissBadge: 'Swiss Travel Passで乗車券100%',
      swissDescription: '旅行の乗車券は Swiss Travel Pass とユーレイルで100%カバーされます。座席予約は全員必須で、別料金です。',
      eurailStatus: '乗車券100%カバー（予約必須）',
      eurailDescription: 'ユーレイルとインターレイルは1等または2等の乗車券を全額カバーします。必須の座席予約料は別です。',
      seatCost: '1等／2等 CHF 39（閑散期）／CHF 49（盛夏）。Excellence Class 追加 CHF 470',
      seatAdvance: '予約は93日前に開始（繁忙日は93日目の当日に予約）',
      seatNote: '予約は必須です。無制限の Swiss Travel Pass でも、確定した座席がなければ乗車できません。',
      standardAdultReturn: 'CHF 159（2等片道）／CHF 272（1等片道）＋座席予約',
      swissPassPrice: '乗車券 CHF 0 ＋座席予約 CHF 39–49',
      halfFarePrice: '通常乗車券の50%＋座席予約料は全額',
      childrenPolicy: '6歳未満は座席なしで無料です。6〜15歳は Swiss Family Card があれば無料ですが、必須の座席予約料は払います。',
      sitDirection: 'ツェルマットからサンモリッツ（東行き）',
      sitSide: 'ライン峡谷は左側、オーバーアルプの上りは右側',
      sitReason: '東行きはライン峡谷が左側、オーバーアルプ峠が右側からよく見えます。車両は360°のパノラマガラスなので、どの席からも景色があります。',
      dogDetails: '車内食と乗客の快適さのため、Glacier Express のパノラマ車両に犬やペットは乗れません。通常のスイスの地域列車とは違います。',
      luggagePolicy: '各車両の端に大きな荷物棚、頭上に棚があります。ツェルマットとサンモリッツの間は SBB の荷物転送も使えます。',
      dining: '席で出る出来たてのアルパインのコース（事前予約がおすすめ）。Excellence Class はシャンパン、ワイン付き5品、アフタヌーンティーと軽食が込みです。',
      schedule: '冬と夏のダイヤ（おおよそ12月15日から10月中旬）',
      annualMaintenance: '毎年10月中旬から12月上旬まで整備休止（Glacier Express は走りません）',
      bestMonths: '1〜3月はオーバーアルプの深い雪。6〜9月は高山の草地と湖',
      stations: [
        { highlight: 'マッターホルンのふもとのアルプスの終点' },
        { highlight: 'ローヌ渓谷の歴史ある鉄道の分岐点。シュトカルパー宮殿' },
        { highlight: 'スイスアルプスの中心。ウルゼレン渓谷へつながる' },
        { name: 'オーバーアルプ峠', highlight: '路線の最高点。オーバーアルプの灯台のそば' },
        { highlight: '歴史あるベネディクト会修道院と機関車の付け替え' },
        { highlight: 'スイス最古の町。ライン峡谷への入口' },
        { highlight: '高さ65メートルのラントヴァッサー高架橋を渡る' },
        { highlight: 'サンモリッツ湖畔の華やかなエンガディンのリゾート' },
      ],
      seoKeywords: keepSeo('glacier-express'),
    },
  },
  zh: {
    gornergrat: {
      name: '戈尔内格拉特铁路',
      tagline: '欧洲最高的露天齿轨铁路',
      type: '高山电力齿轨铁路',
      route: '采尔马特（1,604 米）↔ 戈尔内格拉特峰顶（3,089 米）',
      distance: '9.3 公里（5.8 英里）',
      duration: '单程 33 分钟',
      peakPointName: '戈尔内格拉特观景台（3,089 米）',
      highlights: [
        '第一排看马特洪峰东壁（三角巧克力轮廓）',
        '在 Rotenboden（2,815 米）下车，步行 10 分钟到 Riffelsee 镜面倒影',
        '俯瞰戈尔内冰川和 29 座超过 4,000 米的山峰',
        '欧洲海拔最高的酒店 3100 Kulmhotel Gornergrat，以及天文台',
        '全年 365 天运行，旺季每 24 分钟一班',
      ],
      swissStatus: '五折',
      swissBadge: 'Swiss Travel Pass 五折',
      swissDescription: 'Swiss Travel Pass 和 Swiss Half Fare Card 对戈尔内格拉特单程和往返普通票打五折。持通票并不是免费。',
      eurailStatus: '无折扣',
      eurailDescription: '欧铁通票和 Interrail 对戈尔内格拉特铁路没有折扣，需要购买普通车票。',
      seatCost: '自由座（可选优先上车证 CHF 7）',
      seatAdvance: '车票在所选日期的任意班次有效',
      seatNote: '不必订座。列车每 24–48 分钟一班。优先上车可以先选靠窗座位。',
      standardAdultReturn: 'CHF 132（盛夏）／CHF 102（冬季）',
      swissPassPrice: 'CHF 66（盛夏）／CHF 51（冬季）',
      halfFarePrice: 'CHF 66（盛夏）／CHF 51（冬季）',
      childrenPolicy: '6 岁以下免费。6–15 岁在父母持有 Swiss Family Card 时免费，否则五折。',
      sitDirection: '从采尔马特上行到戈尔内格拉特',
      sitSide: '车厢右侧',
      sitReason: '上山时坐在右侧，齿轨穿过落叶松林和高山草甸时，马特洪峰金字塔一直在视野里。',
      dogDetails: '各种体型的狗都可以上车。肩高 30 厘米以内、放在箱内的小狗免费；较大的狗按成人票半价。',
      luggagePolicy: '普通背包、滑雪装备和行李可免费携带。每节车厢都有滑雪和行李架。',
      dining: '3100 Kulmhotel Gornergrat 的全景餐厅 vis-à-vis 和自助餐，以及 Riffelberg、Riffelalp、Rotenboden 的山地餐厅。',
      schedule: '全年 365 天运行',
      annualMaintenance: '全年连续服务（没有长时间的季节停运）',
      bestMonths: '7–9 月适合没有积雪的 Riffelsee 倒影；12–3 月适合滑雪和雪鞋全景',
      stations: [
        { highlight: '山谷终点，正对瑞士联邦铁路 SBB 车站' },
        { highlight: '跨越芬德尔巴赫峡谷的高石拱桥' },
        { highlight: '五星级 Riffelalp Resort 和历史夏季有轨电车的入口' },
        { highlight: '冬季滑雪枢纽、历史山地酒店，以及正对马特洪峰的露台' },
        { highlight: '著名的 10 分钟步行前往 Riffelsee 镜湖的起点' },
        { name: '戈尔内格拉特峰顶', highlight: '3100 Kulmhotel、天文圆顶、圣伯尔纳小教堂和 360° 冰川平台' },
      ],
      seoKeywords: keepSeo('gornergrat'),
    },
    'glacier-express': {
      name: '冰河列车',
      tagline: '世界上最慢的快车',
      type: '横贯阿尔卑斯的全景铁路',
      route: '采尔马特（瓦莱）↔ 圣莫里茨／达沃斯（格劳宾登）',
      distance: '291 公里（181 英里），经过 291 座桥和 91 条隧道',
      duration: '大约 7 小时 45 分钟',
      peakPointName: '上阿尔卑山口（2,033 米／6,670 英尺）',
      highlights: [
        '驶过 291 座高架桥和 91 条高山隧道',
        '兰德瓦瑟高架桥：65 米高的石灰岩桥，直接驶入悬崖隧道',
        '穿过莱茵峡谷（Ruinaulta），被称为瑞士的大峡谷',
        '最高点在上阿尔卑山口（2,033 米），莱茵河的源头',
        '弯曲的全景玻璃一直延伸到车顶',
        'Excellence Class 有专属礼宾、靠窗座位保证和五道菜菜单',
      ],
      swissStatus: '车票 100% 包含（必须订座）',
      swissBadge: 'Swiss Travel Pass 全额覆盖车票',
      swissDescription: '旅程车票由 Swiss Travel Pass 和欧铁通票 100% 覆盖。所有乘客必须另付座位预订费。',
      eurailStatus: '车票 100% 覆盖（必须订座）',
      eurailDescription: '欧铁通票和 Interrail 全额覆盖一等或二等车票。必须另付订座费。',
      seatCost: '一等／二等 CHF 39（淡季）／CHF 49（盛夏）；Excellence Class 加价 CHF 470',
      seatAdvance: '预订在出发前 93 天开放（旺季日期要在第 93 天当天订）',
      seatNote: '订座是强制的。即使持有不限次 Swiss Travel Pass，没有确认座位也不能上车。',
      standardAdultReturn: 'CHF 159（二等单程）／CHF 272（一等单程）＋订座',
      swissPassPrice: '车票 CHF 0 ＋订座 CHF 39–49',
      halfFarePrice: '普通车票五折＋订座费全额',
      childrenPolicy: '6 岁以下不占座免费。6–15 岁持 Swiss Family Card 免费，但仍须支付强制订座费。',
      sitDirection: '从采尔马特到圣莫里茨（向东）',
      sitSide: '莱茵峡谷坐左侧，上阿尔卑山口上坡坐右侧',
      sitReason: '向东行驶时，莱茵峡谷在左侧更好，上阿尔卑山口在右侧更开阔。车厢是 360° 全景玻璃，每个座位都有景色。',
      dogDetails: '由于餐饮和乘客舒适规定，冰河列车全景车厢不允许狗和其他宠物，这与普通瑞士区域列车不同。',
      luggagePolicy: '每节车厢端部有大行李架，座位上方有搁板。采尔马特与圣莫里茨之间可用 SBB 行李托运。',
      dining: '座位上供应现做的高山多道菜（建议预订）。Excellence Class 包含香槟、配酒的五道地方菜、下午茶和小食。',
      schedule: '冬夏时刻表（大约 12 月 15 日至 10 月中旬）',
      annualMaintenance: '每年 10 月中旬至 12 月初停运检修（冰河列车不开行）',
      bestMonths: '1–3 月看上阿尔卑山口的深雪；6–9 月看高山花甸和湖泊',
      stations: [
        { highlight: '马特洪峰脚下的高山终点' },
        { highlight: '罗讷河谷的历史铁路枢纽，有施托卡尔珀宫' },
        { highlight: '瑞士阿尔卑斯的中心，连接乌尔塞伦谷' },
        { name: '上阿尔卑山口', highlight: '全线最高点，经过上阿尔卑灯塔' },
        { highlight: '历史本笃会修道院和机车换挂' },
        { highlight: '瑞士最古老的城市，莱茵峡谷的门户' },
        { highlight: '驶过世界著名的 65 米兰德瓦瑟高架桥' },
        { highlight: '圣莫里茨湖畔华丽的恩加丁度假地' },
      ],
      seoKeywords: keepSeo('glacier-express'),
    },
  },
  'zh-tw': {
    gornergrat: {
      name: '戈爾內格拉特鐵路',
      tagline: '歐洲最高的露天齒軌鐵路',
      type: '高山電力齒軌鐵路',
      route: '策馬特（1,604 公尺）↔ 戈爾內格拉特峰頂（3,089 公尺）',
      distance: '9.3 公里（5.8 英里）',
      duration: '單程 33 分鐘',
      peakPointName: '戈爾內格拉特觀景臺（3,089 公尺）',
      highlights: [
        '第一排看馬特洪峰東壁（三角巧克力的輪廓）',
        '在 Rotenboden（2,815 公尺）下車，步行 10 分鐘到 Riffelsee 的鏡面倒影',
        '俯瞰戈爾內冰川，以及 29 座超過 4,000 公尺的山峰',
        '歐洲海拔最高的旅館 3100 Kulmhotel Gornergrat，還有天文臺',
        '全年 365 天行駛，旺季每 24 分鐘一班',
      ],
      swissStatus: '五折',
      swissBadge: 'Swiss Travel Pass 五折',
      swissDescription: 'Swiss Travel Pass 和 Swiss Half Fare Card 對戈爾內格拉特單程與往返的普通票打五折。持通票並不是免費。',
      eurailStatus: '沒有折扣',
      eurailDescription: '歐鐵通票和 Interrail 對戈爾內格拉特鐵路沒有折扣，得買普通車票。',
      seatCost: '自由座（可另買優先上車證 CHF 7）',
      seatAdvance: '車票在所選日期的任何班次都有效',
      seatNote: '不必訂位。列車每 24–48 分鐘一班。優先上車可以先挑靠窗的位子。',
      standardAdultReturn: 'CHF 132（盛夏）／CHF 102（冬季）',
      swissPassPrice: 'CHF 66（盛夏）／CHF 51（冬季）',
      halfFarePrice: 'CHF 66（盛夏）／CHF 51（冬季）',
      childrenPolicy: '未滿 6 歲免費。6–15 歲若父母持有 Swiss Family Card 就免費，否則打五折。',
      sitDirection: '從策馬特上行到戈爾內格拉特',
      sitSide: '車廂右側',
      sitReason: '上山時坐右側，齒軌穿過落葉松林和高山地草地時，馬特洪峰的金字塔會一直留在眼前。',
      dogDetails: '各種體型的狗都能上車。肩高 30 公分以內、放在箱裡的小狗免費；比較大的狗按成人票半價。',
      luggagePolicy: '一般背包、滑雪裝備和行李都可以免費帶上車。每節車廂都有滑雪架和行李架。',
      dining: '3100 Kulmhotel Gornergrat 的全景餐廳 vis-à-vis 和自助餐，以及 Riffelberg、Riffelalp、Rotenboden 的山地餐廳。',
      schedule: '全年 365 天行駛',
      annualMaintenance: '全年連續服務（沒有長時間的季節停駛）',
      bestMonths: '7–9 月適合沒有積雪的 Riffelsee 倒影；12–3 月適合滑雪和雪鞋的全景',
      stations: [
        { highlight: '山谷終點，正對著瑞士聯邦鐵路 SBB 車站' },
        { highlight: '跨越芬德爾巴赫峽谷的高石拱橋' },
        { highlight: '五星級 Riffelalp Resort，以及歷史悠久的夏季有軌電車入口' },
        { highlight: '冬季滑雪據點、歷史山地旅館，還有正對馬特洪峰的露臺' },
        { highlight: '著名的 10 分鐘步行，前往 Riffelsee 鏡湖的起點' },
        { name: '戈爾內格拉特峰頂', highlight: '3100 Kulmhotel、天文圓頂、聖伯爾納小教堂，以及 360° 冰川平臺' },
      ],
      seoKeywords: keepSeo('gornergrat'),
    },
    'glacier-express': {
      name: '冰河列車',
      tagline: '世界上最慢的快車',
      type: '橫貫阿爾卑斯的全景鐵路',
      route: '策馬特（瓦萊）↔ 聖莫里茨／達佛斯（格勞賓登）',
      distance: '291 公里（181 英里），經過 291 座橋和 91 條隧道',
      duration: '大約 7 小時 45 分鐘',
      peakPointName: '上阿爾卑山口（2,033 公尺／6,670 英尺）',
      highlights: [
        '駛過 291 座高架橋和 91 條高山隧道',
        '蘭德瓦瑟高架橋：65 公尺高的石灰岩橋，直接駛進懸崖隧道',
        '穿過萊茵峽谷（Ruinaulta），被人稱作瑞士的大峽谷',
        '最高點在上阿爾卑山口（2,033 公尺），也是萊茵河的源頭',
        '彎曲的全景玻璃一直延伸到車頂',
        'Excellence Class 有專屬禮賓、保證靠窗，以及五道菜的菜單',
      ],
      swissStatus: '車票 100% 包含（必須訂位）',
      swissBadge: 'Swiss Travel Pass 全額涵蓋車票',
      swissDescription: '這趟的車票由 Swiss Travel Pass 和歐鐵通票 100% 涵蓋。所有乘客都必須另外付座位預訂費。',
      eurailStatus: '車票 100% 涵蓋（必須訂位）',
      eurailDescription: '歐鐵通票和 Interrail 全額涵蓋一等或二等車票。強制訂位費要另外付。',
      seatCost: '一等／二等 CHF 39（淡季）／CHF 49（盛夏）；Excellence Class 加價 CHF 470',
      seatAdvance: '預訂在出發前 93 天開放（旺季日期要在第 93 天當天就訂）',
      seatNote: '訂位是強制的。就算持有不限次數的 Swiss Travel Pass，沒有確認座位也不能上車。',
      standardAdultReturn: 'CHF 159（二等單程）／CHF 272（一等單程）＋訂位',
      swissPassPrice: '車票 CHF 0 ＋訂位 CHF 39–49',
      halfFarePrice: '普通車票五折＋訂位費全額',
      childrenPolicy: '未滿 6 歲、不占座位免費。6–15 歲持 Swiss Family Card 免費，但仍要付強制訂位費。',
      sitDirection: '從策馬特到聖莫里茨（往東）',
      sitSide: '萊茵峽谷坐左側，上阿爾卑山口的上坡坐右側',
      sitReason: '往東走時，萊茵峽谷在左側比較好看，上阿爾卑山口在右側比較開闊。車廂是 360° 全景玻璃，每個位子都有風景。',
      dogDetails: '因為車上供餐和乘客舒適的規定，冰河列車的全景車廂不允許狗和其他寵物。這和一般的瑞士區間列車不一樣。',
      luggagePolicy: '每節車廂端部有大行李架，座位上方有置物架。策馬特和聖莫里茨之間可以用 SBB 行李託運。',
      dining: '座位上供應現做的高山多道菜（建議事先預訂）。Excellence Class 包含香檳、配酒的五道地方菜、下午茶和小點。',
      schedule: '冬夏時刻表（大約 12 月 15 日到 10 月中旬）',
      annualMaintenance: '每年 10 月中旬到 12 月初停駛檢修（冰河列車不開）',
      bestMonths: '1–3 月看上阿爾卑山口的深雪；6–9 月看高山花甸和湖泊',
      stations: [
        { highlight: '馬特洪峰腳下的高山終點' },
        { highlight: '隆河河谷的歷史鐵路樞紐，有施托卡爾珀宮' },
        { highlight: '瑞士阿爾卑斯的中心，連接烏爾塞倫谷' },
        { name: '上阿爾卑山口', highlight: '全線最高點，經過上阿爾卑燈塔' },
        { highlight: '歷史悠久的本篤會修道院，以及機車換掛' },
        { highlight: '瑞士最古老的城市，萊茵峽谷的門戶' },
        { highlight: '駛過世界知名、高 65 公尺的蘭德瓦瑟高架橋' },
        { highlight: '聖莫里茨湖畔華麗的恩加丁度假地' },
      ],
      seoKeywords: keepSeo('glacier-express'),
    },
  },
};

const FAQ_TEXT: Record<NonEn, FaqText[]> = {
  de: [
    { question: 'Ist die Gornergratbahn mit dem Swiss Travel Pass gratis?', answer: 'Nein. Der Swiss Travel Pass macht die Gornergrat Bahn nicht gratis. Inhaber erhalten 50% auf einfache und retour Vollpreisbillette (im Sommer z. B. etwa CHF 66 statt CHF 132). Die Swiss Half Fare Card gibt ebenfalls 50%.' },
    { question: 'Deckt der Swiss Travel Pass den Glacier Express?', answer: 'Ja, das Fahrbillett selbst ist mit gültigem Swiss Travel Pass oder Eurail in der entsprechenden Klasse zu 100% gratis. Eine SITZRESERVATION ist aber für alle Pflicht und kostet in der Nebensaison CHF 39, im Hochsommer CHF 49. Diese Reservation muss vor der Fahrt gebucht sein.' },
    { question: 'Kann ich Glacier Express und Gornergratbahn in einer Reise kombinieren?', answer: 'Ja, sie schliessen nahtlos an. Beide enden am Bahnhof Zermatt. Beliebt ist der Glacier Express am Nachmittag von St. Moritz oder Chur nach Zermatt, eine Nacht im Dorf und am nächsten Morgen die Zahnradbahn auf 3,089 m, wenn die Sicht und die Spiegelung am Riffelsee am klarsten sind.' },
    { question: 'Brauche ich eine Sitzreservation für die Gornergratbahn?', answer: 'Nein. Auf der Gornergrat Bahn ist keine Sitzreservation nötig. Normale Billette sind flexibel und gelten den ganzen gebuchten Tag. Abfahrten gibt es von früh bis abends alle 24 bis 48 Minuten. Ein optionales Priority Boarding kostet CHF 7, wenn man als Erster einsteigen will.' },
    { question: 'Wie früh soll ich den Glacier Express buchen?', answer: 'Sitzreservationen öffnen genau 93 Tage im Voraus. Im Hochsommer (Juli–August) und in den Winterferien sind Panoramafensterplätze und vor allem die Excellence Class (nur 20 Sitze pro Zug) oft innert Stunden weg. Am besten am Tag der Öffnung buchen.' },
    { question: 'Was ist die Excellence Class im Glacier Express, und lohnt sie sich?', answer: 'Die Excellence Class gehört zu den luxuriösesten Bahnfahrten der Welt. Sitzordnung 1+1, jeder Platz am Panoramafenster, dazu Zug-Concierge, Champagnerempfang, 5-Gang-Menü mit Schweizer Weinen, Tee, exklusive Glacier Bar und ein iPad-Guide. Der Sitzzuschlag beträgt CHF 470 zusätzlich zum Billett oder Pass 1. Klasse.' },
    { question: 'Welche Seite hat im Gornergrat-Zug die beste Aussicht?', answer: 'Bergauf von Zermatt zum Gornergrat immer RECHTS sitzen (talwärts dann LINKS). Wenn der Zug durch den Wald und an Riffelalp vorbeifährt, zeigen die rechten Fenster die Matterhorn-Pyramide ohne Unterbruch.' },
    { question: 'Sind Hunde im Glacier Express erlaubt?', answer: 'Nein. Hunde und andere Tiere sind in den Panoramawagen streng verboten (ausser zertifizierten Blindenhunden), wegen der Bordverpflegung und der rund 8 Stunden Fahrt. Auf der Gornergrat Bahn sind Hunde willkommen.' },
    { question: 'Kann ich mit einem Gornergrat-Billett an Zwischenstationen wie dem Riffelsee aussteigen?', answer: 'Ja. Ein normales Retourbillett erlaubt Ausstieg an jeder Zwischenstation (Findelbach, Riffelalp, Riffelberg oder Rotenboden) und Weiterfahrt mit einem späteren Zug in derselben Richtung. Der bekannteste Halt ist Rotenboden (2,815 m): 10 Minuten sanft bergab zum Riffelsee, wo sich das Matterhorn im ruhigen Wasser spiegelt.' },
    { question: 'Fährt der Glacier Express das ganze Jahr?', answer: 'Nein. Die Gornergrat Bahn fährt an 365 Tagen, der Glacier Express pausiert jeden Herbst für Unterhalt von etwa Mitte Oktober bis Mitte Dezember (Wintersaison ab Mitte Dezember). In dieser Zeit fahren normale Regionalzüge auf denselben Gleisen zwischen Zermatt, Brig, Andermatt und St. Moritz.' },
  ],
  es: [
    { question: '¿El ferrocarril del Gornergrat es gratis con el Swiss Travel Pass?', answer: 'No. El Swiss Travel Pass no da viaje gratis en el Gornergrat Bahn. Los titulares reciben un 50% sobre el billete de ida o ida y vuelta a tarifa completa (en verano, unos CHF 66 en lugar de CHF 132). La Swiss Half Fare Card también da el 50%.' },
    { question: '¿El Swiss Travel Pass cubre el Glacier Express?', answer: 'Sí: el billete del trayecto es 100% gratis con un Swiss Travel Pass o Eurail válido de la clase correspondiente. Pero la RESERVA DE ASIENTO es obligatoria para todos y cuesta CHF 39 en temporada baja o CHF 49 en pleno verano. Hay que reservarla antes de subir.' },
    { question: '¿Puedo hacer el Glacier Express y el Gornergrat en el mismo viaje?', answer: 'Sí, enlazan sin problema. Los dos terminan en la estación de Zermatt. Lo más habitual es llegar en Glacier Express por la tarde desde St. Moritz o Chur, dormir en el pueblo y subir al día siguiente en el cremallera hasta 3,089 m, cuando la visibilidad y el reflejo del Riffelsee están más claros.' },
    { question: '¿Hace falta reservar asiento en el Gornergrat?', answer: 'No. En el Gornergrat Bahn no hace falta reserva. Los billetes normales son flexibles y valen todo el día reservado. Hay salidas cada 24 a 48 minutos desde primera hora hasta la tarde. Un embarque prioritario opcional cuesta CHF 7 si quiere entrar el primero.' },
    { question: '¿Con cuánta antelación debo reservar el Glacier Express?', answer: 'Las reservas de asiento abren exactamente 93 días antes. En julio y agosto y en las vacaciones de invierno, los asientos de ventanilla y sobre todo la Excellence Class (solo 20 plazas por tren) se agotan a menudo en horas. Conviene reservar el mismo día en que abre el plazo.' },
    { question: '¿Qué es la Excellence Class del Glacier Express y merece la pena?', answer: 'Es una de las experiencias ferroviarias más lujosas del mundo. Distribución 1+1, cada asiento junto a la ventanilla panorámica, conserje, recepción con champán, menú regional de 5 platos con vinos suizos, té, Glacier Bar exclusiva y guía en iPad. El suplemento del asiento es CHF 470 además del billete o pase de 1.ª clase.' },
    { question: '¿Qué lado del tren del Gornergrat tiene mejor vista?', answer: 'Siéntese siempre a la DERECHA subiendo de Zermatt al Gornergrat (y a la IZQUIERDA al bajar). Cuando el tren atraviesa el bosque y pasa Riffelalp, las ventanillas derechas muestran la pirámide del Matterhorn sin interrupción.' },
    { question: '¿Se admiten perros en el Glacier Express?', answer: 'No. Los perros y otras mascotas están prohibidos en los vagones panorámicos (salvo perros guía certificados), por el servicio de comidas y las cerca de 8 horas de viaje. En el Gornergrat Bahn los perros sí son bienvenidos.' },
    { question: '¿Puedo bajar en estaciones intermedias como el Riffelsee con un billete del Gornergrat?', answer: 'Sí. Un billete de ida y vuelta permite bajar en cualquier estación intermedia (Findelbach, Riffelalp, Riffelberg o Rotenboden) y volver a subir en un tren posterior en la misma dirección. La parada más famosa es Rotenboden (2,815 m): 10 minutos cuesta abajo hasta el Riffelsee, donde el Matterhorn se refleja en el agua en calma.' },
    { question: '¿El Glacier Express circula todo el año?', answer: 'No. El Gornergrat Bahn circula los 365 días, pero el Glacier Express para cada otoño por mantenimiento, aproximadamente de mediados de octubre a mediados de diciembre (la temporada de invierno empieza a mediados de diciembre). En ese periodo los regionales siguen los mismos raíles entre Zermatt, Brig, Andermatt y St. Moritz.' },
  ],
  fr: [
    { question: 'Le Gornergrat est-il gratuit avec le Swiss Travel Pass ?', answer: 'Non. Le Swiss Travel Pass ne rend pas le Gornergrat Bahn gratuit. Les titulaires ont 50 % sur les billets aller ou aller-retour plein tarif (en été, environ CHF 66 au lieu de CHF 132). La Swiss Half Fare Card donne aussi 50 %.' },
    { question: 'Le Swiss Travel Pass couvre-t-il le Glacier Express ?', answer: 'Oui : le billet de parcours est 100 % gratuit avec un Swiss Travel Pass ou un Eurail valable dans la classe correspondante. Mais une RÉSERVATION DE PLACE est obligatoire pour tous et coûte CHF 39 en basse saison ou CHF 49 en plein été. Il faut la réserver avant de monter.' },
    { question: 'Puis-je faire le Glacier Express et le Gornergrat dans le même voyage ?', answer: 'Oui, ils se rejoignent. Les deux arrivent à la gare de Zermatt. L’itinéraire le plus courant : Glacier Express l’après-midi depuis St. Moritz ou Coire, une nuit au village, puis la crémaillère le lendemain matin jusqu’à 3,089 m, quand la visibilité et le reflet du Riffelsee sont les plus nets.' },
    { question: 'Faut-il réserver une place pour le Gornergrat ?', answer: 'Non. Aucune réservation n’est nécessaire sur le Gornergrat Bahn. Les billets ordinaires sont souples et valables toute la journée réservée. Les départs ont lieu toutes les 24 à 48 minutes, du matin au soir. Un embarquement prioritaire facultatif coûte CHF 7 pour entrer en premier.' },
    { question: 'Combien de temps à l’avance réserver le Glacier Express ?', answer: 'Les réservations ouvrent exactement 93 jours à l’avance. En juillet-août et pendant les vacances d’hiver, les places fenêtre et surtout l’Excellence Class (20 places seulement par train) partent souvent en quelques heures. Mieux vaut réserver le jour même de l’ouverture.' },
    { question: 'Qu’est-ce que l’Excellence Class du Glacier Express, et cela vaut-il le coup ?', answer: 'C’est l’une des expériences ferroviaires les plus luxueuses au monde. Disposition 1+1, chaque place à la fenêtre panoramique, concierge, accueil au champagne, menu régional en 5 services avec vins suisses, thé, Glacier Bar exclusive et guide sur iPad. Le supplément de place est de CHF 470 en plus du billet ou pass 1re classe.' },
    { question: 'Quel côté du train du Gornergrat offre la meilleure vue ?', answer: 'Asseyez-vous toujours à DROITE en montant de Zermatt au Gornergrat (et à GAUCHE en descendant). Quand le train traverse la forêt et passe Riffelalp, les fenêtres de droite montrent la pyramide du Cervin sans interruption.' },
    { question: 'Les chiens sont-ils admis dans le Glacier Express ?', answer: 'Non. Les chiens et autres animaux sont strictement interdits dans les voitures panoramiques (sauf chiens guides certifiés), à cause de la restauration à bord et des quelque 8 heures de trajet. Sur le Gornergrat Bahn, les chiens sont les bienvenus.' },
    { question: 'Puis-je descendre à des arrêts intermédiaires comme le Riffelsee avec un billet Gornergrat ?', answer: 'Oui. Un aller-retour ordinaire permet de descendre à n’importe quel arrêt intermédiaire (Findelbach, Riffelalp, Riffelberg ou Rotenboden) et de reprendre un train plus tard dans le même sens. L’arrêt le plus connu est Rotenboden (2,815 m) : 10 minutes en descente douce jusqu’au Riffelsee, où le Cervin se reflète dans l’eau calme.' },
    { question: 'Le Glacier Express circule-t-il toute l’année ?', answer: 'Non. Le Gornergrat Bahn circule 365 jours, mais le Glacier Express s’arrête chaque automne pour l’entretien, environ de la mi-octobre à la mi-décembre (la saison d’hiver commence mi-décembre). Pendant cette période, les trains régionaux empruntent les mêmes voies entre Zermatt, Brigue, Andermatt et St. Moritz.' },
  ],
  it: [
    { question: 'La ferrovia del Gornergrat è gratuita con lo Swiss Travel Pass?', answer: 'No. Lo Swiss Travel Pass non rende gratuita la Gornergrat Bahn. I titolari hanno il 50% sui biglietti di andata o andata e ritorno a tariffa intera (in estate circa CHF 66 invece di CHF 132). Anche la Swiss Half Fare Card dà il 50%.' },
    { question: 'Lo Swiss Travel Pass copre il Glacier Express?', answer: 'Sì: il biglietto di viaggio è gratis al 100% con uno Swiss Travel Pass o Eurail valido nella classe corrispondente. La PRENOTAZIONE DEL POSTO è però obbligatoria per tutti e costa CHF 39 in bassa stagione o CHF 49 in piena estate. Va prenotata prima di salire.' },
    { question: 'Posso fare Glacier Express e Gornergrat nello stesso viaggio?', answer: 'Sì, si collegano. Entrambi arrivano alla stazione di Zermatt. L’itinerario più diffuso: Glacier Express nel pomeriggio da St. Moritz o Coira, una notte in paese e la cremagliera il mattino dopo fino a 3,089 m, quando visibilità e riflesso del Riffelsee sono più nitidi.' },
    { question: 'Serve la prenotazione del posto per il Gornergrat?', answer: 'No. Sulla Gornergrat Bahn non serve prenotare. I biglietti normali sono flessibili e validi per tutta la giornata prenotata. Le partenze sono ogni 24–48 minuti, dal mattino presto alla sera. Un imbarco prioritario facoltativo costa CHF 7 per salire per primi.' },
    { question: 'Con quanto anticipo prenotare il Glacier Express?', answer: 'Le prenotazioni aprono esattamente 93 giorni prima. In luglio-agosto e nelle vacanze invernali i posti finestrino e soprattutto l’Excellence Class (solo 20 posti a treno) spesso finiscono in poche ore. Meglio prenotare il giorno stesso dell’apertura.' },
    { question: 'Cos’è l’Excellence Class del Glacier Express e ne vale la pena?', answer: 'È una delle esperienze ferroviarie più lussuose al mondo. Disposizione 1+1, ogni posto al finestrino panoramico, concierge, accoglienza con champagne, menu regionale di 5 portate con vini svizzeri, tè, Glacier Bar esclusiva e guida su iPad. Il supplemento del posto è CHF 470 oltre al biglietto o pass di 1ª classe.' },
    { question: 'Quale lato del treno del Gornergrat ha la vista migliore?', answer: 'In salita da Zermatt al Gornergrat sedete sempre a DESTRA (e a SINISTRA in discesa). Quando il treno attraversa il bosco e passa Riffelalp, i finestrini di destra mostrano la piramide del Cervino senza interruzione.' },
    { question: 'I cani sono ammessi sul Glacier Express?', answer: 'No. Cani e altri animali sono vietati nelle carrozze panoramiche (salvo cani guida certificati), per il servizio di bordo e le circa 8 ore di viaggio. Sulla Gornergrat Bahn i cani sono i benvenuti.' },
    { question: 'Con un biglietto Gornergrat posso scendere a fermate intermedie come il Riffelsee?', answer: 'Sì. Un andata e ritorno normale consente di scendere a qualsiasi fermata intermedia (Findelbach, Riffelalp, Riffelberg o Rotenboden) e di riprendere un treno successivo nella stessa direzione. La fermata più nota è Rotenboden (2,815 m): 10 minuti in leggera discesa fino al Riffelsee, dove il Cervino si specchia nell’acqua calma.' },
    { question: 'Il Glacier Express circola tutto l’anno?', answer: 'No. La Gornergrat Bahn circola 365 giorni, ma il Glacier Express si ferma ogni autunno per la manutenzione, circa da metà ottobre a metà dicembre (la stagione invernale inizia a metà dicembre). In quel periodo i regionali percorrono gli stessi binari tra Zermatt, Briga, Andermatt e St. Moritz.' },
  ],
  pt: [
    { question: 'O comboio do Gornergrat é grátis com o Swiss Travel Pass?', answer: 'Não. O Swiss Travel Pass não torna a Gornergrat Bahn gratuita. Os titulares têm 50% nos bilhetes de ida ou de ida e volta a preço inteiro (no verão, cerca de CHF 66 em vez de CHF 132). O Swiss Half Fare Card também dá 50%.' },
    { question: 'O Swiss Travel Pass cobre o Glacier Express?', answer: 'Sim: o bilhete da viagem é 100% grátis com um Swiss Travel Pass ou Eurail válido na classe correspondente. Mas a RESERVA DE LUGAR é obrigatória para todos e custa CHF 39 na época baixa ou CHF 49 no pleno verão. Tem de ser feita antes de embarcar.' },
    { question: 'Posso fazer o Glacier Express e o Gornergrat na mesma viagem?', answer: 'Sim, ligam-se sem falhas. Os dois terminam na estação de Zermatt. O percurso mais habitual é o Glacier Express à tarde a partir de St. Moritz ou Chur, uma noite na aldeia e, na manhã seguinte, o comboio de cremalheira até 3,089 m, quando a visibilidade e o reflexo do Riffelsee estão mais nítidos.' },
    { question: 'Preciso de reserva de lugar no Gornergrat?', answer: 'Não. Na Gornergrat Bahn não é precisa reserva. Os bilhetes normais são flexíveis e válidos durante todo o dia reservado. Há partidas de 24 em 24 ou de 48 em 48 minutos, de manhã cedo até à noite. Um embarque prioritário facultativo custa CHF 7 para entrar primeiro.' },
    { question: 'Com que antecedência devo reservar o Glacier Express?', answer: 'As reservas de lugar abrem exatamente 93 dias antes. Em julho e agosto e nas férias de inverno, os lugares à janela e sobretudo a Excellence Class (apenas 20 lugares por comboio) esgotam muitas vezes em poucas horas. O melhor é reservar no próprio dia em que a janela abre.' },
    { question: 'O que é a Excellence Class do Glacier Express e vale a pena?', answer: 'É uma das experiências ferroviárias mais luxuosas do mundo. Disposição 1+1, cada lugar à janela panorâmica, concierge, receção com champanhe, menu regional de 5 pratos com vinhos suíços, chá, Glacier Bar exclusiva e guia em iPad. O suplemento do lugar é CHF 470 para além do bilhete ou passe de 1.ª classe.' },
    { question: 'De que lado do comboio do Gornergrat se vê melhor?', answer: 'Sente-se sempre à DIREITA a subir de Zermatt para o Gornergrat (e à ESQUERDA a descer). Quando o comboio atravessa a floresta e passa Riffelalp, as janelas da direita mostram a pirâmide do Matterhorn sem interrupção.' },
    { question: 'São permitidos cães no Glacier Express?', answer: 'Não. Cães e outros animais estão estritamente proibidos nas carruagens panorâmicas (exceto cães-guia certificados), por causa das refeições a bordo e das cerca de 8 horas de viagem. No comboio do Gornergrat os cães são bem-vindos.' },
    { question: 'Com um bilhete do Gornergrat posso sair em estações intermédias como o Riffelsee?', answer: 'Sim. Um bilhete de ida e volta normal permite sair em qualquer estação intermédia (Findelbach, Riffelalp, Riffelberg ou Rotenboden) e voltar a entrar num comboio posterior no mesmo sentido. A paragem mais conhecida é Rotenboden (2,815 m): 10 minutos a descer suavemente até ao Riffelsee, onde o Matterhorn se reflete na água calma.' },
    { question: 'O Glacier Express circula todo o ano?', answer: 'Não. O comboio do Gornergrat circula 365 dias, mas o Glacier Express para todos os outonos para manutenção, aproximadamente de meados de outubro a meados de dezembro (a época de inverno começa a meados de dezembro). Nesse período, os comboios regionais percorrem os mesmos carris entre Zermatt, Brig, Andermatt e St. Moritz.' },
  ],
  ko: [
    { question: '고르너그라트 철도는 Swiss Travel Pass로 무료인가요?', answer: '아닙니다. Swiss Travel Pass는 고르너그라트 철도를 무료로 해주지 않습니다. 소지자는 일반 왕복·편도 요금의 50%를 할인받습니다 (여름에는 CHF 132 대신 약 CHF 66). Swiss Half Fare Card도 50%입니다.' },
    { question: 'Glacier Express는 Swiss Travel Pass에 포함되나요?', answer: '승차권 자체는 해당 등급의 Swiss Travel Pass 또는 유레일로 100% 무료입니다. 다만 좌석 예약은 모든 승객에게 필수이며 비수기 CHF 39, 한여름 CHF 49입니다. 탑승 전에 미리 예약해야 합니다.' },
    { question: '한 여행에서 Glacier Express와 고르너그라트 철도를 모두 탈 수 있나요?', answer: '가능합니다. 둘 다 체르마트 역에서 끝납니다. 오후에 장크트모리츠나 쿠어에서 Glacier Express로 들어와 마을에서 하룻밤을 자고, 다음 날 아침 시야와 리펠제 반영이 가장 맑을 때 톱니바퀴 열차로 3,089 m까지 올라가는 일정이 가장 흔합니다.' },
    { question: '고르너그라트 철도에 좌석 예약이 필요한가요?', answer: '필요 없습니다. 일반 승차권은 예약한 날 아무 열차나 탈 수 있습니다. 이른 아침부터 저녁까지 24–48분마다 출발합니다. 먼저 타고 싶으면 선택 사항인 우선 탑승 패스를 CHF 7에 살 수 있습니다.' },
    { question: 'Glacier Express는 얼마나 미리 예약해야 하나요?', answer: '좌석 예약은 정확히 93일 전에 열립니다. 한여름(7–8월)과 겨울 휴일에는 파노라마 창가, 특히 열차당 20석뿐인 Excellence Class가 몇 시간 안에 매진되는 일이 많습니다. 93일째 당일에 예약하는 것이 좋습니다.' },
    { question: 'Glacier Express Excellence Class는 무엇이고 가치가 있나요?', answer: '세계에서 가장 호화로운 열차 경험 중 하나입니다. 1+1 좌석으로 모든 자리가 파노라마 창가이고, 전용 컨시어지, 샴페인, 스위스 와인과 함께하는 지역 5코스, 티타임, 전용 Glacier Bar, iPad 가이드가 있습니다. 좌석 할증은 1등 승차권이나 패스에 더해 CHF 470입니다.' },
    { question: '고르너그라트 열차는 어느 쪽이 경치가 좋나요?', answer: '체르마트에서 고르너그라트로 올라갈 때는 항상 오른쪽, 내려올 때는 왼쪽에 앉으세요. 소나무 숲을 지나 Riffelalp를 지날 때 오른쪽 창으로 마터호른 피라미드가 끊기지 않고 보입니다.' },
    { question: 'Glacier Express에 개를 태울 수 있나요?', answer: '없습니다. 기내 식사 규정과 약 8시간의 연속 운행 때문에 파노라마 객차에는 개와 다른 반려동물이 엄격히 금지됩니다 (시각장애인 안내견은 예외). 고르너그라트 철도에서는 개를 태웁니다.' },
    { question: '고르너그라트 승차권으로 리펠제 같은 중간 역에서 내릴 수 있나요?', answer: '가능합니다. 일반 왕복권은 Findelbach, Riffelalp, Riffelberg, Rotenboden 중 어디서든 내려 같은 방향의 나중 열차에 다시 탈 수 있습니다. 가장 유명한 정차는 Rotenboden(2,815 m)으로, 완만한 내리막 10분이면 잔잔한 물에 마터호른이 비치는 리펠제입니다.' },
    { question: 'Glacier Express는 연중 운행하나요?', answer: '아닙니다. 고르너그라트 철도는 365일이지만 Glacier Express는 매년 가을, 대략 10월 중순부터 12월 중순까지 정비로 쉽니다 (겨울 시즌은 12월 중순 시작). 그 기간에도 체르마트, 브리크, 안더마트, 장크트모리츠 사이 같은 선로로 지역 열차는 다닙니다.' },
  ],
  ja: [
    { question: 'ゴルナーグラート鉄道は Swiss Travel Pass で無料ですか？', answer: 'いいえ。Swiss Travel Pass ではゴルナーグラート鉄道は無料になりません。所持者は通常の片道・往復運賃が50%引きです（夏は CHF 132 のところが約 CHF 66）。Swiss Half Fare Card も50%です。' },
    { question: 'Glacier Express は Swiss Travel Pass に含まれますか？', answer: '乗車券そのものは、対応する等級の有効な Swiss Travel Pass またはユーレイルで100%無料です。ただし座席予約は全員必須で、閑散期 CHF 39、盛夏 CHF 49 です。乗車前に予約してください。' },
    { question: 'Glacier Express とゴルナーグラート鉄道を同じ旅で両方乗れますか？', answer: 'はい、つながっています。どちらもツェルマット駅が終点です。午後にサンモリッツかクールから Glacier Express で入り、村で一泊し、翌日の朝、視界とリッフェルゼーの映りが最もよい時間にラック式鉄道で 3,089 m まで上がるのが定番です。' },
    { question: 'ゴルナーグラート鉄道に座席予約は必要ですか？', answer: '不要です。通常の切符は予約した日のどの列車でも乗れます。早朝から夕方まで 24〜48 分間隔です。先に乗りたい場合は、任意の優先乗車パスが CHF 7 です。' },
    { question: 'Glacier Express はどれくらい前に予約すべきですか？', answer: '座席予約はちょうど 93 日前に始まります。盛夏（7〜8月）と冬の休暇は、パノラマの窓側、とりわけ1列車20席だけの Excellence Class が数時間で埋まることが多いです。93日目の当日に予約するのが確実です。' },
    { question: 'Glacier Express の Excellence Class とは何で、価値はありますか？', answer: '世界でも最も贅沢な鉄道体験の一つです。1+1 配置で全席がパノラマの窓側、専任コンシェルジュ、シャンパン、スイスワイン付きの地域料理5品、ティータイム、専用の Glacier Bar、iPad ガイドがあります。座席の追加料金は1等の切符またはパスに加えて CHF 470 です。' },
    { question: 'ゴルナーグラート鉄道はどちら側がよく見えますか？', answer: 'ツェルマットからゴルナーグラートへ上るときは必ず右側、下りは左側です。松林を抜け Riffelalp を過ぎると、右側の窓からマッターホルンのピラミッドが途切れません。' },
    { question: 'Glacier Express に犬は乗れますか？', answer: '乗れません。車内食の規定と約8時間の連続運行のため、パノラマ車両では犬や他のペットは厳禁です（認定された盲導犬は除く）。ゴルナーグラート鉄道では犬は歓迎されます。' },
    { question: 'ゴルナーグラートの切符で、リッフェルゼーのような途中駅で降りられますか？', answer: 'はい。通常の往復切符なら Findelbach、Riffelalp、Riffelberg、Rotenboden のどこでも降りて、同じ方向の後の列車に乗れます。最も有名なのは Rotenboden（2,815 m）で、ゆるい下りを10分歩くと、静かな水面にマッターホルンが映るリッフェルゼーです。' },
    { question: 'Glacier Express は一年中走りますか？', answer: '走りません。ゴルナーグラート鉄道は365日ですが、Glacier Express は毎年秋、おおよそ10月中旬から12月中旬まで整備で止まります（冬の季節は12月中旬開始）。その間も、ツェルマット、ブリーク、アンデルマット、サンモリッツの間は同じ線路を地域列車が走ります。' },
  ],
  zh: [
    { question: '戈尔内格拉特铁路持 Swiss Travel Pass 免费吗？', answer: '不免费。Swiss Travel Pass 不能让戈尔内格拉特铁路免费乘坐。持票人可在单程和往返全价票上享受五折（夏天大约付 CHF 66 而不是 CHF 132）。Swiss Half Fare Card 同样五折。' },
    { question: '冰河列车包含在 Swiss Travel Pass 里吗？', answer: '旅程车票本身凭对应等级的有效 Swiss Travel Pass 或欧铁通票 100% 免费。但所有乘客必须订座，淡季 CHF 39，盛夏 CHF 49。上车前必须订好。' },
    { question: '一次旅行能既坐冰河列车又坐戈尔内格拉特铁路吗？', answer: '可以，两趟都在采尔马特车站结束。最常见的安排是下午从圣莫里茨或库尔乘冰河列车到采尔马特，在村里住一晚，第二天早上能见度和 Riffelsee 倒影最清楚时，再乘齿轨列车上到 3,089 米。' },
    { question: '戈尔内格拉特铁路需要订座吗？', answer: '不需要。普通车票在所订当天的任意班次都有效。从清晨到傍晚每 24 到 48 分钟一班。如果想先上车，可选的优先上车证是 CHF 7。' },
    { question: '冰河列车要提前多久预订？', answer: '订座恰好在 93 天前开放。盛夏（7–8 月）和寒假，全景靠窗座位，尤其是每列车只有 20 个座位的 Excellence Class，常常几小时内售罄。最好在开放当天就订。' },
    { question: '冰河列车的 Excellence Class 是什么，值得吗？', answer: '这是世界上最豪华的铁路体验之一。1+1 布局，每个座位都靠全景窗，有专属礼宾、香槟、配瑞士葡萄酒的五道地方菜、茶点、专属 Glacier Bar 和 iPad 导览。座位加价 CHF 470，另加一等车票或通票。' },
    { question: '戈尔内格拉特列车哪一侧风景更好？', answer: '从采尔马特上山到戈尔内格拉特时始终坐右侧（下山坐左侧）。列车穿过松林、经过 Riffelalp 时，右侧车窗可以不间断地看到马特洪峰金字塔。' },
    { question: '冰河列车允许带狗吗？', answer: '不允许。由于车上用餐规定和大约 8 小时的连续行程，全景车厢严格禁止狗和其他宠物（持证导盲犬除外）。戈尔内格拉特铁路则欢迎狗。' },
    { question: '戈尔内格拉特车票可以在 Riffelsee 这样的中间站下车吗？', answer: '可以。普通往返票允许在任意中间站（Findelbach、Riffelalp、Riffelberg 或 Rotenboden）下车，再搭同一方向的后续列车。最有名的是 Rotenboden（2,815 米）：缓坡下行 10 分钟到 Riffelsee，平静的水面会映出马特洪峰。' },
    { question: '冰河列车全年运行吗？', answer: '不是。戈尔内格拉特铁路全年 365 天运行，冰河列车每年秋天大约从 10 月中旬停到 12 月中旬做检修（冬季季从 12 月中旬开始）。这段时间，采尔马特、布里格、安德马特和圣莫里茨之间仍有区域列车走同一条线路。' },
  ],
  'zh-tw': [
    { question: '戈爾內格拉特鐵路持 Swiss Travel Pass 可以免費坐嗎？', answer: '不能免費。Swiss Travel Pass 不會讓戈爾內格拉特鐵路免費。持票人可在單程和往返的全價票上打五折（夏天大約付 CHF 66，而不是 CHF 132）。Swiss Half Fare Card 同樣是五折。' },
    { question: '冰河列車有包含在 Swiss Travel Pass 裡嗎？', answer: '這趟的車票本身，憑對應等級的有效 Swiss Travel Pass 或歐鐵通票是 100% 免費。不過所有乘客都必須訂位，淡季 CHF 39，盛夏 CHF 49。上車之前一定要訂好。' },
    { question: '一次旅行可以既坐冰河列車，又坐戈爾內格拉特鐵路嗎？', answer: '可以，兩趟都在策馬特車站結束。最常見的安排是下午從聖莫里茨或庫爾搭冰河列車進策馬特，在村子住一晚，隔天早上能見度和 Riffelsee 倒影最清楚的時候，再搭齒軌列車上到 3,089 公尺。' },
    { question: '戈爾內格拉特鐵路需要訂位嗎？', answer: '不需要。普通車票在所訂當天的任何班次都有效。從清晨到傍晚，每 24 到 48 分鐘一班。如果想先上車，可以另買 CHF 7 的優先上車證。' },
    { question: '冰河列車要提早多久預訂？', answer: '訂位正好在 93 天前開放。盛夏（7–8 月）和寒假，全景靠窗的位子，尤其是每列車只有 20 個座位的 Excellence Class，常常幾個小時就賣完。最好在開放當天就訂。' },
    { question: '冰河列車的 Excellence Class 是什麼，值得嗎？', answer: '這是世界上最豪華的鐵路體驗之一。1+1 座位，每個位子都靠全景窗，有專屬禮賓、香檳、配瑞士葡萄酒的五道地方菜、茶點、專屬 Glacier Bar，以及 iPad 導覽。座位加價 CHF 470，另外還要一等車票或通票。' },
    { question: '戈爾內格拉特列車哪一側風景比較好？', answer: '從策馬特上山到戈爾內格拉特時，始終坐右側（下山坐左側）。列車穿過松林、經過 Riffelalp 時，右側車窗可以不間斷地看到馬特洪峰的金字塔。' },
    { question: '冰河列車可以帶狗嗎？', answer: '不行。因為車上供餐的規定，以及大約 8 小時的連續行程，全景車廂嚴格禁止狗和其他寵物（持證導盲犬除外）。戈爾內格拉特鐵路則歡迎狗上車。' },
    { question: '戈爾內格拉特的車票可以在 Riffelsee 這種中間站下車嗎？', answer: '可以。普通往返票允許在任何中間站（Findelbach、Riffelalp、Riffelberg 或 Rotenboden）下車，再搭同一方向的後續列車。最有名的是 Rotenboden（2,815 公尺）：緩坡下行 10 分鐘到 Riffelsee，平靜的水面會映出馬特洪峰。' },
    { question: '冰河列車全年都開嗎？', answer: '不是。戈爾內格拉特鐵路全年 365 天行駛，冰河列車每年秋天大約從 10 月中旬停到 12 月中旬做檢修（冬季季從 12 月中旬開始）。這段時間，策馬特、布里格、安德馬特和聖莫里茨之間，區間列車仍走同一條路線。' },
  ],
};

const LIVE_TEXT: Record<NonEn, { status: PhraseMap; verdict: PhraseMap; operating: PhraseMap; oberalp: PhraseMap; regional: PhraseMap; seat: PhraseMap }> = {
  de: {
    status: { Visible: 'Sichtbar', 'Partially Visible': 'Teilweise sichtbar', 'Barely Visible': 'Kaum sichtbar', 'Not Visible': 'Nicht sichtbar' },
    verdict: {
      'Exceptional visibility at 3,089 m: Clear view of Matterhorn & Riffelsee.': 'Aussergewöhnliche Sicht auf 3,089 m: freier Blick auf Matterhorn und Riffelsee.',
      'Good visibility with scattered ridge clouds. Great viewing windows.': 'Gute Sicht mit einzelnen Gratwolken. Gute Zeitfenster.',
      'Summit obscured by clouds. Consider checking webcams before departure.': 'Gipfel in Wolken. Vor der Abfahrt die Webcams prüfen.',
    },
    operating: { 'Annual Maintenance Pause': 'Jährliche Wartungspause', 'Normal Winter/Summer Schedule Active': 'Normaler Winter-/Sommerfahrplan aktiv' },
    oberalp: {
      'Oberalp Pass (2,033 m): Glacier Express paused until mid-December': 'Oberalppass (2,033 m): Glacier Express pausiert bis Mitte Dezember',
      'Oberalp Pass (2,033 m): Open and scenic rail corridor active': 'Oberalppass (2,033 m): offen, die Panoramastrecke läuft',
    },
    regional: {
      'Regional Matterhorn Gotthard Bahn & RhB trains run the identical scenic route daily.': 'Regionale Züge der Matterhorn Gotthard Bahn und der RhB fahren täglich dieselbe Panoramastrecke.',
      'Daily panoramic departures operating between Zermatt and St. Moritz.': 'Tägliche Panorama-Abfahrten zwischen Zermatt und St. Moritz.',
    },
    seat: { 'Reservations open 93 days in advance; high-demand dates require prompt booking.': 'Reservationen öffnen 93 Tage im Voraus; gefragte Daten schnell buchen.' },
  },
  es: {
    status: { Visible: 'Visible', 'Partially Visible': 'Parcialmente visible', 'Barely Visible': 'Apenas visible', 'Not Visible': 'No visible' },
    verdict: {
      'Exceptional visibility at 3,089 m: Clear view of Matterhorn & Riffelsee.': 'Visibilidad excepcional a 3,089 m: vista despejada del Matterhorn y del Riffelsee.',
      'Good visibility with scattered ridge clouds. Great viewing windows.': 'Buena visibilidad con nubes sueltas en la cresta. Buenos intervalos.',
      'Summit obscured by clouds. Consider checking webcams before departure.': 'Cumbre tapada por nubes. Mire las webcams antes de salir.',
    },
    operating: { 'Annual Maintenance Pause': 'Pausa anual de mantenimiento', 'Normal Winter/Summer Schedule Active': 'Horario normal de invierno/verano en vigor' },
    oberalp: {
      'Oberalp Pass (2,033 m): Glacier Express paused until mid-December': 'Puerto de Oberalp (2,033 m): Glacier Express en pausa hasta mediados de diciembre',
      'Oberalp Pass (2,033 m): Open and scenic rail corridor active': 'Puerto de Oberalp (2,033 m): abierto, el corredor panorámico circula',
    },
    regional: {
      'Regional Matterhorn Gotthard Bahn & RhB trains run the identical scenic route daily.': 'Los regionales de Matterhorn Gotthard Bahn y RhB hacen a diario el mismo recorrido panorámico.',
      'Daily panoramic departures operating between Zermatt and St. Moritz.': 'Salidas panorámicas diarias entre Zermatt y St. Moritz.',
    },
    seat: { 'Reservations open 93 days in advance; high-demand dates require prompt booking.': 'Las reservas abren 93 días antes; las fechas de mucha demanda hay que cerrarlas pronto.' },
  },
  fr: {
    status: { Visible: 'Visible', 'Partially Visible': 'Partiellement visible', 'Barely Visible': 'Peu visible', 'Not Visible': 'Non visible' },
    verdict: {
      'Exceptional visibility at 3,089 m: Clear view of Matterhorn & Riffelsee.': 'Visibilité exceptionnelle à 3,089 m : vue dégagée sur le Cervin et le Riffelsee.',
      'Good visibility with scattered ridge clouds. Great viewing windows.': 'Bonne visibilité avec quelques nuages de crête. Belles fenêtres.',
      'Summit obscured by clouds. Consider checking webcams before departure.': 'Sommet dans les nuages. Regardez les webcams avant de partir.',
    },
    operating: { 'Annual Maintenance Pause': 'Pause annuelle de maintenance', 'Normal Winter/Summer Schedule Active': 'Horaire normal hiver/été en vigueur' },
    oberalp: {
      'Oberalp Pass (2,033 m): Glacier Express paused until mid-December': 'Col de l’Oberalp (2,033 m) : Glacier Express en pause jusqu’à la mi-décembre',
      'Oberalp Pass (2,033 m): Open and scenic rail corridor active': 'Col de l’Oberalp (2,033 m) : ouvert, le corridor panoramique circule',
    },
    regional: {
      'Regional Matterhorn Gotthard Bahn & RhB trains run the identical scenic route daily.': 'Les trains régionaux Matterhorn Gotthard Bahn et RhB empruntent chaque jour le même parcours panoramique.',
      'Daily panoramic departures operating between Zermatt and St. Moritz.': 'Départs panoramiques quotidiens entre Zermatt et St. Moritz.',
    },
    seat: { 'Reservations open 93 days in advance; high-demand dates require prompt booking.': 'Les réservations ouvrent 93 jours à l’avance ; les dates très demandées partent vite.' },
  },
  it: {
    status: { Visible: 'Visibile', 'Partially Visible': 'Parzialmente visibile', 'Barely Visible': 'Appena visibile', 'Not Visible': 'Non visibile' },
    verdict: {
      'Exceptional visibility at 3,089 m: Clear view of Matterhorn & Riffelsee.': 'Visibilità eccezionale a 3,089 m: vista libera su Cervino e Riffelsee.',
      'Good visibility with scattered ridge clouds. Great viewing windows.': 'Buona visibilità con nubi sparse sulla cresta. Buone finestre.',
      'Summit obscured by clouds. Consider checking webcams before departure.': 'Vetta coperta dalle nubi. Controlli le webcam prima di partire.',
    },
    operating: { 'Annual Maintenance Pause': 'Pausa annuale di manutenzione', 'Normal Winter/Summer Schedule Active': 'Orario normale invernale/estivo attivo' },
    oberalp: {
      'Oberalp Pass (2,033 m): Glacier Express paused until mid-December': 'Passo dell’Oberalp (2,033 m): Glacier Express in pausa fino a metà dicembre',
      'Oberalp Pass (2,033 m): Open and scenic rail corridor active': 'Passo dell’Oberalp (2,033 m): aperto, il corridoio panoramico è attivo',
    },
    regional: {
      'Regional Matterhorn Gotthard Bahn & RhB trains run the identical scenic route daily.': 'I regionali Matterhorn Gotthard Bahn e RhB percorrono ogni giorno lo stesso tracciato panoramico.',
      'Daily panoramic departures operating between Zermatt and St. Moritz.': 'Partenze panoramiche quotidiane tra Zermatt e St. Moritz.',
    },
    seat: { 'Reservations open 93 days in advance; high-demand dates require prompt booking.': 'Le prenotazioni aprono 93 giorni prima; le date molto richieste vanno chiuse subito.' },
  },
  pt: {
    status: { Visible: 'Visível', 'Partially Visible': 'Parcialmente visível', 'Barely Visible': 'Mal visível', 'Not Visible': 'Não visível' },
    verdict: {
      'Exceptional visibility at 3,089 m: Clear view of Matterhorn & Riffelsee.': 'Visibilidade excecional a 3,089 m: vista limpa do Matterhorn e do Riffelsee.',
      'Good visibility with scattered ridge clouds. Great viewing windows.': 'Boa visibilidade com nuvens dispersas na crista. Boas janelas.',
      'Summit obscured by clouds. Consider checking webcams before departure.': 'Cume tapado por nuvens. Veja as webcams antes de partir.',
    },
    operating: { 'Annual Maintenance Pause': 'Pausa anual de manutenção', 'Normal Winter/Summer Schedule Active': 'Horário normal de inverno/verão ativo' },
    oberalp: {
      'Oberalp Pass (2,033 m): Glacier Express paused until mid-December': 'Passo do Oberalp (2,033 m): Glacier Express em pausa até meados de dezembro',
      'Oberalp Pass (2,033 m): Open and scenic rail corridor active': 'Passo do Oberalp (2,033 m): aberto, o corredor panorâmico circula',
    },
    regional: {
      'Regional Matterhorn Gotthard Bahn & RhB trains run the identical scenic route daily.': 'Os comboios regionais da Matterhorn Gotthard Bahn e da RhB fazem todos os dias o mesmo percurso panorâmico.',
      'Daily panoramic departures operating between Zermatt and St. Moritz.': 'Partidas panorâmicas diárias entre Zermatt e St. Moritz.',
    },
    seat: { 'Reservations open 93 days in advance; high-demand dates require prompt booking.': 'As reservas abrem 93 dias antes; as datas de muita procura exigem reserva rápida.' },
  },
  ko: {
    status: { Visible: '선명하게 보임', 'Partially Visible': '부분적으로 보임', 'Barely Visible': '희미하게 보임', 'Not Visible': '보이지 않음' },
    verdict: {
      'Exceptional visibility at 3,089 m: Clear view of Matterhorn & Riffelsee.': '3,089 m에서 시야가 뛰어납니다. 마터호른과 리펠제가 선명합니다.',
      'Good visibility with scattered ridge clouds. Great viewing windows.': '능선에 흩어진 구름이 있으나 시야는 좋습니다. 보기 좋은 시간대가 있습니다.',
      'Summit obscured by clouds. Consider checking webcams before departure.': '정상이 구름에 가렸습니다. 출발 전에 웹캠을 확인하세요.',
    },
    operating: { 'Annual Maintenance Pause': '연간 정비 휴지', 'Normal Winter/Summer Schedule Active': '일반 겨울/여름 시각표 운행 중' },
    oberalp: {
      'Oberalp Pass (2,033 m): Glacier Express paused until mid-December': '오버알프 고개 (2,033 m): Glacier Express는 12월 중순까지 운휴',
      'Oberalp Pass (2,033 m): Open and scenic rail corridor active': '오버알프 고개 (2,033 m): 개방, 전망 철도 구간 운행 중',
    },
    regional: {
      'Regional Matterhorn Gotthard Bahn & RhB trains run the identical scenic route daily.': '지역 열차 Matterhorn Gotthard Bahn과 RhB가 매일 같은 전망 노선을 달립니다.',
      'Daily panoramic departures operating between Zermatt and St. Moritz.': '체르마트와 장크트모리츠 사이 매일 파노라마 열차가 운행합니다.',
    },
    seat: { 'Reservations open 93 days in advance; high-demand dates require prompt booking.': '예약은 93일 전에 열립니다. 수요가 높은 날짜는 바로 예약하세요.' },
  },
  ja: {
    status: { Visible: '鮮明に見える', 'Partially Visible': '一部見える', 'Barely Visible': 'かすかに見える', 'Not Visible': '見えない' },
    verdict: {
      'Exceptional visibility at 3,089 m: Clear view of Matterhorn & Riffelsee.': '3,089 m の視界は格別です。マッターホルンとリッフェルゼーがはっきり見えます。',
      'Good visibility with scattered ridge clouds. Great viewing windows.': '稜線に雲が散っていますが視界は良好。見るのに良い時間帯があります。',
      'Summit obscured by clouds. Consider checking webcams before departure.': '山頂は雲に隠れています。出発前にウェブカメラを確認してください。',
    },
    operating: { 'Annual Maintenance Pause': '年次整備の休止', 'Normal Winter/Summer Schedule Active': '通常の冬／夏ダイヤで運行中' },
    oberalp: {
      'Oberalp Pass (2,033 m): Glacier Express paused until mid-December': 'オーバーアルプ峠（2,033 m）：Glacier Express は12月中旬まで運休',
      'Oberalp Pass (2,033 m): Open and scenic rail corridor active': 'オーバーアルプ峠（2,033 m）：開放、展望区間は運行中',
    },
    regional: {
      'Regional Matterhorn Gotthard Bahn & RhB trains run the identical scenic route daily.': '地域列車の Matterhorn Gotthard Bahn と RhB が、毎日同じ展望ルートを走ります。',
      'Daily panoramic departures operating between Zermatt and St. Moritz.': 'ツェルマットとサンモリッツの間で、毎日パノラマ列車が運行しています。',
    },
    seat: { 'Reservations open 93 days in advance; high-demand dates require prompt booking.': '予約は93日前に始まります。需要の高い日はすぐに押さえてください。' },
  },
  zh: {
    status: { Visible: '清晰可见', 'Partially Visible': '局部可见', 'Barely Visible': '若隐若现', 'Not Visible': '完全遮蔽' },
    verdict: {
      'Exceptional visibility at 3,089 m: Clear view of Matterhorn & Riffelsee.': '3,089 米能见度极佳：马特洪峰和 Riffelsee 清晰可见。',
      'Good visibility with scattered ridge clouds. Great viewing windows.': '能见度良好，山脊有零散云。有不错的观赏时段。',
      'Summit obscured by clouds. Consider checking webcams before departure.': '峰顶被云遮住。出发前请看摄像头。',
    },
    operating: { 'Annual Maintenance Pause': '年度检修停运', 'Normal Winter/Summer Schedule Active': '正常冬夏时刻表运行中' },
    oberalp: {
      'Oberalp Pass (2,033 m): Glacier Express paused until mid-December': '上阿尔卑山口（2,033 米）：冰河列车停运至 12 月中旬',
      'Oberalp Pass (2,033 m): Open and scenic rail corridor active': '上阿尔卑山口（2,033 米）：开放，全景线路运行中',
    },
    regional: {
      'Regional Matterhorn Gotthard Bahn & RhB trains run the identical scenic route daily.': '区域列车 Matterhorn Gotthard Bahn 与 RhB 每天走同一条全景线路。',
      'Daily panoramic departures operating between Zermatt and St. Moritz.': '采尔马特与圣莫里茨之间每天有全景班次。',
    },
    seat: { 'Reservations open 93 days in advance; high-demand dates require prompt booking.': '预订提前 93 天开放；热门日期需要尽快订。' },
  },
  'zh-tw': {
    status: { Visible: '清晰可見', 'Partially Visible': '局部可見', 'Barely Visible': '隱約可見', 'Not Visible': '完全遮蔽' },
    verdict: {
      'Exceptional visibility at 3,089 m: Clear view of Matterhorn & Riffelsee.': '3,089 公尺能見度極佳：馬特洪峰和 Riffelsee 都看得清楚。',
      'Good visibility with scattered ridge clouds. Great viewing windows.': '能見度不錯，地脊有零星的雲。有適合觀賞的時段。',
      'Summit obscured by clouds. Consider checking webcams before departure.': '峰頂被雲遮住了。出發前先看即時影像。',
    },
    operating: { 'Annual Maintenance Pause': '年度檢修停駛', 'Normal Winter/Summer Schedule Active': '正常冬夏時刻表行駛中' },
    oberalp: {
      'Oberalp Pass (2,033 m): Glacier Express paused until mid-December': '上阿爾卑山口（2,033 公尺）：冰河列車停駛到 12 月中旬',
      'Oberalp Pass (2,033 m): Open and scenic rail corridor active': '上阿爾卑山口（2,033 公尺）：開放，全景路段行駛中',
    },
    regional: {
      'Regional Matterhorn Gotthard Bahn & RhB trains run the identical scenic route daily.': '區間列車 Matterhorn Gotthard Bahn 與 RhB 每天走同一條全景路線。',
      'Daily panoramic departures operating between Zermatt and St. Moritz.': '策馬特和聖莫里茨之間，每天都有全景班次。',
    },
    seat: { 'Reservations open 93 days in advance; high-demand dates require prompt booking.': '預訂提前 93 天開放；熱門日期要盡快訂。' },
  },
};

function lookup(map: PhraseMap | undefined, value: string): string {
  return map?.[value] ?? value;
}

export interface TrainsComparisonUi {
  breadcrumbAria: string;
  home: string;
  breadcrumbCurrent: string;
  heroBadge: string;
  h1: string;
  heroLead: string;
  statGornerAlt: string;
  statGornerDetail: string;
  statGexRoute: string;
  statGexDetail: string;
  statSwissGorner: string;
  statSwissGornerValue: string;
  statSwissGornerDetail: string;
  statSwissGex: string;
  statSwissGexValue: string;
  statSwissGexDetail: string;
  liveAria: string;
  liveTitle: string;
  liveUpdated: string;
  gornerCardTitle: string;
  morning: string;
  afternoon: string;
  summit: string;
  midCloud: string;
  wind: string;
  ride: string;
  rideGorner: string;
  sitRight: string;
  gexCardTitle: string;
  running: string;
  paused: string;
  service: string;
  peakPass: string;
  rideGexShort: string;
  swissPass: string;
  seat: string;
  booking: string;
  inSeason: string;
  maintenance: string;
  rideGex: string;
  included: string;
  required: string;
  days93: string;
  navAria: string;
  navCompare: string;
  navGorner: string;
  navGex: string;
  navTickets: string;
  navFaq: string;
  compareTitle: string;
  compareIntro: string;
  colFeature: string;
  colGorner: string;
  colGex: string;
  rowPurpose: string;
  purposeGorner: string;
  purposeGex: string;
  rowRoute: string;
  rowTime: string;
  rowPeak: string;
  peakGorner: string;
  peakGex: string;
  rowSwiss: string;
  discount50: string;
  swissPrices: string;
  freeTicket: string;
  seatFee: string;
  rowEurail: string;
  eurailNone: string;
  eurailFull: string;
  rowSeats: string;
  notRequired: string;
  mandatory: string;
  rowSeason: string;
  seasonGorner: string;
  seasonGex: string;
  rowSide: string;
  sideGorner: string;
  sideGex: string;
  rowDogs: string;
  dogsYes: string;
  dogsNo: string;
  rowDining: string;
  diningGorner: string;
  diningGex: string;
  gornerEyebrow: string;
  gornerHeading: string;
  gornerLead: string;
  viewCam: string;
  gornerP1: string;
  gornerP2: string;
  stationStops: string;
  riffelTitle: string;
  riffelBody: string;
  telemetryTitle: string;
  returnPrice: string;
  withPass: string;
  frequency: string;
  frequencyValue: string;
  seating: string;
  pets: string;
  petsWelcome: string;
  officialTickets: string;
  halfFareHint: string;
  gexEyebrow: string;
  gexHeading: string;
  gexLead: string;
  roofWindows: string;
  gexP1: string;
  gexP2: string;
  classTitle: string;
  class2: string;
  class2Seats: string;
  class2Body: string;
  class1: string;
  class1Seats: string;
  class1Body: string;
  classEx: string;
  classExSeats: string;
  classExBody: string;
  alertTitle: string;
  alertBody: string;
  gexTelemetry: string;
  journeyDuration: string;
  durationValue: string;
  swissTicket: string;
  swissTicketValue: string;
  swissTicketNote: string;
  peakElevation: string;
  peakElevationValue: string;
  bestSideLabel: string;
  bestSideValue: string;
  dogsLabel: string;
  dogsStrict: string;
  pauseLabel: string;
  pauseValue: string;
  gexReserve: string;
  gexReserveHint: string;
  ticketsTitle: string;
  ticketsIntro: string;
  strategyGorner: string;
  strategyGex: string;
  gornerTips: { title: string; body: string }[];
  gexTips: { title: string; body: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faqIntro: string;
  badgeGorner: string;
  badgeGex: string;
  badgeBoth: string;
  relatedAria: string;
  relatedTitle: string;
  cardLive: string;
  cardGornerTitle: string;
  cardGornerBody: string;
  cardCompare: string;
  cardCompareTitle: string;
  cardCompareBody: string;
  cardClimate: string;
  cardClimateTitle: string;
  cardClimateBody: string;
}

const UI_EN: TrainsComparisonUi = {
  breadcrumbAria: 'Breadcrumb',
  home: 'Home',
  breadcrumbCurrent: 'Scenic Swiss Trains (Gornergrat & Glacier Express)',
  heroBadge: '2026 Swiss Scenic Railway Field Guide & Live Telemetry',
  h1: 'Gornergrat Timetable & Tickets | Glacier Express Price',
  heroLead:
    'Everything you need to know about Switzerland’s two most famous train experiences terminating in Zermatt: Europe’s highest open-air cogwheel railway to [[b|Gornergrat (3,089 m)]] and the legendary 8-hour trans-alpine [[b|Glacier Express]] to St. Moritz. Compare live summit visibility, Swiss Travel Pass coverage, ticket pricing, and insider seating strategies.',
  statGornerAlt: 'Gornergrat Altitude',
  statGornerDetail: '+1,485 m climb • 33 mins',
  statGexRoute: 'Glacier Express Route',
  statGexDetail: '291 bridges • 91 tunnels',
  statSwissGorner: 'Swiss Pass Gornergrat',
  statSwissGornerValue: '50% Off',
  statSwissGornerDetail: 'CHF 66 return (Summer)',
  statSwissGex: 'Swiss Pass Glacier Exp.',
  statSwissGexValue: '100% Free',
  statSwissGexDetail: 'Seat reservation req.',
  liveAria: 'Live Telemetry for Gornergrat and Glacier Express',
  liveTitle: 'Live Mountain Conditions & Rail Status Today',
  liveUpdated: 'Updated every 15 mins via Swiss High-Altitude Telemetry',
  gornerCardTitle: 'Gornergrat Bahn (3,089 m)',
  morning: 'This morning',
  afternoon: 'This afternoon',
  summit: 'Summit',
  midCloud: 'Mid-layer cloud',
  wind: 'Wind',
  ride: 'Ride',
  rideGorner: '33 min',
  sitRight: 'Sit on the right side going up.',
  gexCardTitle: 'Glacier Express Corridor',
  running: 'Running',
  paused: 'Paused',
  service: 'Service',
  peakPass: 'Peak pass',
  rideGexShort: 'Ride',
  swissPass: 'Swiss Pass',
  seat: 'Seat',
  booking: 'Booking',
  inSeason: 'In season',
  maintenance: 'Maintenance',
  rideGex: '7h 45m',
  included: 'Included',
  required: 'Required',
  days93: '93 days',
  navAria: 'Page Sections',
  navCompare: 'Side-by-Side Comparison Matrix',
  navGorner: 'Gornergrat Railway Guide',
  navGex: 'Glacier Express & Excellence Class',
  navTickets: 'Swiss Travel Pass & Ticket Rules',
  navFaq: 'Frequently Asked Questions',
  compareTitle: 'Side-by-Side Comparison Matrix',
  compareIntro: 'Direct telemetry, logistical differences, pass coverage, and seating guidance for both rail journeys.',
  colFeature: 'Feature',
  colGorner: 'Gornergrat Railway (Gornergrat Bahn)',
  colGex: 'Glacier Express',
  rowPurpose: 'Primary Purpose',
  purposeGorner: 'Mountain summit excursion to 3,089 m facing the Matterhorn East Face',
  purposeGex: 'All-day trans-alpine scenic transit connecting Valais and Engadin (St. Moritz)',
  rowRoute: 'Route & Termini',
  rowTime: 'Travel Time',
  rowPeak: 'Peak Elevation',
  peakGorner: '(Gornergrat Summit)',
  peakGex: '(Oberalp Pass)',
  rowSwiss: 'Swiss Travel Pass',
  discount50: '50% Discount',
  swissPrices: 'CHF 66 return summer / CHF 51 winter',
  freeTicket: '100% Free Ticket',
  seatFee: 'Seat reservation mandatory (CHF 39–49)',
  rowEurail: 'Eurail / Interrail',
  eurailNone: 'No discount (Full fare applies)',
  eurailFull: '100% Ticket covered + seat reservation',
  rowSeats: 'Seat Reservations',
  notRequired: '[[b|Not required]] (Free seating; optional CHF 7 priority boarding)',
  mandatory: '[[amber|MANDATORY]] for all passengers (Opens 93 days in advance)',
  rowSeason: 'Operating Season',
  seasonGorner: '365 days a year (Year-round operation)',
  seasonGex: 'Runs mid-Dec to mid-Oct (Annual pause mid-Oct to early Dec)',
  rowSide: 'Best Side to Sit',
  sideGorner: '[[b|Right side]] ascending from Zermatt for direct Matterhorn views',
  sideGex: '[[b|Left side]] for Rhine Gorge; panoramic glass covers whole carriage',
  rowDogs: 'Dogs & Pets Policy',
  dogsYes: '[[b|Dogs allowed]] (Small free in carrier; large 50% fare)',
  dogsNo: '[[b|Dogs NOT allowed]] in panoramic coaches',
  rowDining: 'Dining on Board',
  diningGorner: '3100 Kulmhotel restaurant & self-service summit buffet',
  diningGex: 'Fresh hot multi-course meals served at seat; 5-course in Excellence Class',
  gornerEyebrow: 'Summit Mountain Excursion',
  gornerHeading: 'Gornergrat Railway (Gornergrat Bahn)',
  gornerLead: 'Europe’s highest open-air cogwheel electric railway, operating continuously since 1898.',
  viewCam: 'View Gornergrat Live Cam & Score',
  gornerP1:
    'The [[b|Gornergrat Bahn (GGB)]] departs directly from Zermatt Bahnhofplatz (across the square from the Swiss Federal Railways SBB station) and climbs [[b|1,485 vertical meters in just 33 minutes]] to the Gornergrat observation ridge at 3,089 meters.',
  gornerP2:
    'As the train ascends, it offers unbroken views of the Matterhorn’s classic triangular East Face (the famous silhouette depicted on Swiss chocolate boxes). At the summit, passengers step out onto a 360-degree observation deck surrounded by [[b|29 four-thousand-meter peaks]]—including Monte Rosa (4,634m, Switzerland’s highest summit) and the dramatic ice tongues of the Gorner Glacier.',
  stationStops: 'Gornergrat Station Stops & Elevations:',
  riffelTitle: 'The Riffelsee Reflection Hack: Hop off at Rotenboden',
  riffelBody:
    'Your return ticket allows unlimited intermediate hop-offs. When traveling down from the summit, disembark at [[b|Rotenboden (2,815 m)]] and walk 10 minutes downhill to the [[b|Riffelsee]] alpine lake. On wind-still mornings before 11:00 AM, the Matterhorn reflects perfectly in the crystal water. You can then re-board the next train down to Zermatt at no extra charge.',
  telemetryTitle: 'Gornergrat Quick Telemetry',
  returnPrice: '2026 RETURN TICKET PRICE',
  withPass: 'WITH SWISS TRAVEL PASS',
  frequency: 'FREQUENCY',
  frequencyValue: 'Every 24 minutes (Peak) / 48 mins',
  seating: 'SEATING STRATEGY',
  pets: 'PETS',
  petsWelcome: 'Dogs welcome on all trains',
  officialTickets: 'Gornergrat Official Tickets',
  halfFareHint: 'Select Half-Fare option for 50% Swiss Travel Pass rate',
  gexEyebrow: 'World’s Slowest Express Train',
  gexHeading: 'Glacier Express (Zermatt ↔ St. Moritz)',
  gexLead: 'A 7.5 to 8-hour panoramic odyssey through the heart of the Swiss Alps across 291 bridges.',
  roofWindows: 'Panoramic Roof Windows',
  gexP1:
    'Known affectionally as the [[em|“slowest express train in the world”]], the [[b|Glacier Express]] connects two of Switzerland’s most prestigious alpine resorts: [[b|Zermatt]] (at the base of the Matterhorn in Valais) and [[b|St. Moritz]] (in the high Engadin valley of Graubünden).',
  gexP2:
    'During the nearly 8-hour journey, the train negotiates three cantons, scales the [[b|Oberalp Pass (2,033 m / 6,670 ft)]], plunges through the sheer limestone chasm of the [[b|Rhine Gorge (Ruinaulta)]], and traverses the breathtaking 65-meter-high stone arches of the [[b|Landwasser Viaduct]] near Filisur.',
  classTitle: 'Travel Classes on the Glacier Express:',
  class2: '2nd Class',
  class2Seats: '4 seats per row (2+2)',
  class2Body: 'Panoramic roof glass, fold-out tables, trolley snack cart & seat-delivered hot lunch options.',
  class1: '1st Class',
  class1Seats: '3 seats per row (2+1)',
  class1Body: 'Extra legroom, wider seats, quieter carriage ambiance, individual power sockets and audio guide.',
  classEx: 'Excellence Class',
  classExSeats: '1+1 layout (Window Guaranteed)',
  classExBody: 'Dedicated concierge, champagne bar, 5-course regional feast with paired Swiss wines, iPad guide & high tea.',
  alertTitle: 'Mandatory Seat Reservation Rule (93-Day Booking Window)',
  alertBody:
    'Even if you hold an unlimited [[b|Swiss Travel Pass]] or [[b|Eurail Pass]], you [[b|CANNOT]] board the Glacier Express without a reserved seat. Seat reservations cost CHF 39 (low season) to CHF 49 (summer) and open [[b|exactly 93 days in advance]]. Excellence Class (only 20 seats per train) frequently sells out within minutes of the 93-day window opening.',
  gexTelemetry: 'Glacier Express Telemetry',
  journeyDuration: 'JOURNEY DURATION',
  durationValue: '7 hours 45 minutes',
  swissTicket: 'SWISS TRAVEL PASS TICKET',
  swissTicketValue: '100% Free Rail Ticket',
  swissTicketNote: '+ mandatory CHF 39–49 reservation',
  peakElevation: 'PEAK ELEVATION PASS',
  peakElevationValue: 'Oberalp Pass (2,033 m / 6,670 ft)',
  bestSideLabel: 'BEST SIDE TO SIT',
  bestSideValue: 'Left side heading East (Rhine Gorge)',
  dogsLabel: 'DOGS / PETS',
  dogsStrict: 'Strictly not allowed in coaches',
  pauseLabel: 'ANNUAL MAINTENANCE PAUSE',
  pauseValue: 'Mid-October to Mid-December',
  gexReserve: 'Glacier Express Reservations',
  gexReserveHint: 'Mandatory seat bookings open 93 days in advance',
  ticketsTitle: 'Swiss Travel Pass & Ticket Booking Strategy (2026)',
  ticketsIntro: 'How to avoid overpaying or double-booking across both Swiss train systems.',
  strategyGorner: 'Gornergrat Bahn Ticket Strategy',
  strategyGex: 'Glacier Express Reservation Strategy',
  gornerTips: [
    { title: 'Swiss Travel Pass / Half Fare Card:', body: 'Always select the "50% Half-Fare" option when buying online to pay CHF 66 instead of CHF 132.' },
    { title: 'Flexible Timing:', body: 'Tickets are valid for any train all day; don’t stress about specific departure hours.' },
    { title: 'Swiss Family Card:', body: 'Children under 16 travel 100% free with their parents. Request the Family Card for free when buying your Swiss Travel Pass.' },
    { title: 'Check Live Clarity First:', body: 'Never buy non-refundable Gornergrat tickets weeks in advance. Check our live 1–10 AM/PM index on the morning of your ride.' },
  ],
  gexTips: [
    { title: 'Reserve First, Buy Pass Later:', body: 'You do NOT need your Swiss Travel Pass number to book your seat reservation 93 days ahead. Simply select "Seat Only / Swiss Pass" at checkout.' },
    { title: 'Budget Alternative (Regional Trains):', body: 'If the Glacier Express is fully booked or on maintenance pause, regional Matterhorn Gotthard Bahn & RhB trains run the identical tracks with free travel on the Swiss Travel Pass and zero seat reservations.' },
    { title: 'Pre-order Dining:', body: 'Standard class hot meals are cooked fresh in the galley. Pre-ordering online ensures your meal choice isn’t sold out on busy runs.' },
    { title: 'Luggage Forwarding:', body: 'If doing the 8-hour trip, use SBB Station-to-Station luggage dispatch so you don’t manage multiple suitcases in the train aisle.' },
  ],
  faqEyebrow: 'Traveller Knowledgebase',
  faqTitle: 'Frequently Asked Questions (Gornergrat & Glacier Express)',
  faqIntro: 'The most commonly searched questions regarding passes, pricing, seating, and live weather conditions.',
  badgeGorner: 'Gornergrat',
  badgeGex: 'Glacier Exp.',
  badgeBoth: 'Combined',
  relatedAria: 'Related Guides',
  relatedTitle: 'Related Zermatt Alpine Telemetry & Guides',
  cardLive: 'Live Vantage Point',
  cardGornerTitle: 'Gornergrat (3,089 m) Live Cams & Score →',
  cardGornerBody: 'Real-time Roundshot webcams and 10-day AM/PM summit clarity projections.',
  cardCompare: 'Comparison Guide',
  cardCompareTitle: 'Gornergrat vs. Glacier Paradise →',
  cardCompareBody: 'Compare Matterhorn view angles, altitude differences (794 m), and wind resilience.',
  cardClimate: 'Climatology Data',
  cardClimateTitle: 'Best Month & Time of Day to Visit →',
  cardClimateBody: '30-year historical visibility statistics: Why mornings beat afternoons 78% of the year.',
};

function localizeUi(base: TrainsComparisonUi, patch: Partial<TrainsComparisonUi>): TrainsComparisonUi {
  return { ...base, ...patch, gornerTips: patch.gornerTips ?? base.gornerTips, gexTips: patch.gexTips ?? base.gexTips };
}

const UI: Record<Locale, TrainsComparisonUi> = {
  en: UI_EN,
  de: localizeUi(UI_EN, {
    breadcrumbAria: 'Brotkrumen',
    home: 'Start',
    breadcrumbCurrent: 'Panoramazüge der Schweiz (Gornergrat & Glacier Express)',
    heroBadge: 'Feldguide 2026 zu den Panoramabahnen und Live-Telemetrie',
    h1: 'Gornergrat Fahrplan & Billette | Glacier Express Preis',
    heroLead:
      'Alles Wichtige zu den zwei berühmtesten Zügen, die in Zermatt enden: Europas höchste offene Zahnradbahn zum [[b|Gornergrat (3,089 m)]] und der legendäre 8-Stunden-Zug [[b|Glacier Express]] nach St. Moritz. Vergleichen Sie Live-Sicht, Swiss Travel Pass, Preise und die beste Sitzseite.',
    statGornerAlt: 'Höhe Gornergrat',
    statGornerDetail: '+1,485 m Aufstieg • 33 Min.',
    statGexRoute: 'Strecke Glacier Express',
    statGexDetail: '291 Brücken • 91 Tunnel',
    statSwissGorner: 'Swiss Pass Gornergrat',
    statSwissGornerValue: '50% Rabatt',
    statSwissGornerDetail: 'CHF 66 retour (Sommer)',
    statSwissGex: 'Swiss Pass Glacier Exp.',
    statSwissGexValue: '100% gratis',
    statSwissGexDetail: 'Sitzreservation nötig',
    liveAria: 'Live-Telemetrie für Gornergrat und Glacier Express',
    liveTitle: 'Live-Bergverhältnisse und Bahnstatus heute',
    liveUpdated: 'Alle 15 Minuten über die hochalpine Schweizer Telemetrie',
    gornerCardTitle: 'Gornergrat Bahn (3,089 m)',
    morning: 'Heute Vormittag',
    afternoon: 'Heute Nachmittag',
    summit: 'Gipfel',
    midCloud: 'Mittelhohe Wolken',
    wind: 'Wind',
    ride: 'Fahrt',
    rideGorner: '33 Min.',
    sitRight: 'Bergauf rechts sitzen.',
    gexCardTitle: 'Korridor Glacier Express',
    running: 'Fährt',
    paused: 'Pause',
    service: 'Betrieb',
    peakPass: 'Passhöhe',
    rideGexShort: 'Fahrt',
    swissPass: 'Swiss Pass',
    seat: 'Sitz',
    booking: 'Buchung',
    inSeason: 'In Saison',
    maintenance: 'Wartung',
    rideGex: '7 Std. 45',
    included: 'Inklusive',
    required: 'Pflicht',
    days93: '93 Tage',
    navAria: 'Abschnitte',
    navCompare: 'Vergleich nebeneinander',
    navGorner: 'Guide Gornergratbahn',
    navGex: 'Glacier Express & Excellence Class',
    navTickets: 'Swiss Travel Pass & Billettregeln',
    navFaq: 'Häufige Fragen',
    compareTitle: 'Vergleich nebeneinander',
    compareIntro: 'Telemetrie, Logistik, Passdeckung und Sitzhinweise für beide Fahrten.',
    colFeature: 'Merkmal',
    colGorner: 'Gornergratbahn (Gornergrat Bahn)',
    colGex: 'Glacier Express',
    rowPurpose: 'Hauptzweck',
    purposeGorner: 'Gipfelausflug auf 3,089 m mit Blick auf die Ostwand des Matterhorns',
    purposeGex: 'Ganztägige transalpine Panoramafahrt zwischen Wallis und Engadin (St. Moritz)',
    rowRoute: 'Strecke & Endpunkte',
    rowTime: 'Fahrzeit',
    rowPeak: 'Höchster Punkt',
    peakGorner: '(Gornergrat-Gipfel)',
    peakGex: '(Oberalppass)',
    rowSwiss: 'Swiss Travel Pass',
    discount50: '50% Rabatt',
    swissPrices: 'CHF 66 retour Sommer / CHF 51 Winter',
    freeTicket: 'Billett 100% gratis',
    seatFee: 'Sitzreservation Pflicht (CHF 39–49)',
    rowEurail: 'Eurail / Interrail',
    eurailNone: 'Kein Rabatt (voller Preis)',
    eurailFull: 'Billett 100% gedeckt + Sitzreservation',
    rowSeats: 'Sitzreservation',
    notRequired: '[[b|Nicht nötig]] (freie Platzwahl; optionales Priority Boarding CHF 7)',
    mandatory: '[[amber|PFLICHT]] für alle (öffnet 93 Tage im Voraus)',
    rowSeason: 'Betriebszeit',
    seasonGorner: '365 Tage im Jahr (Ganzjahresbetrieb)',
    seasonGex: 'Mitte Dezember bis Mitte Oktober (Pause Mitte Oktober bis Anfang Dezember)',
    rowSide: 'Beste Sitzseite',
    sideGorner: '[[b|Rechte Seite]] bergauf ab Zermatt, direkter Matterhornblick',
    sideGex: '[[b|Linke Seite]] für die Rheinschlucht; Panoramaglas im ganzen Wagen',
    rowDogs: 'Hunde & Haustiere',
    dogsYes: '[[b|Hunde erlaubt]] (klein in der Box gratis; gross 50% Tarif)',
    dogsNo: '[[b|Hunde NICHT erlaubt]] in den Panoramawagen',
    rowDining: 'Verpflegung',
    diningGorner: 'Restaurant 3100 Kulmhotel und Selbstbedienungsbuffet am Gipfel',
    diningGex: 'Warme Mehrgangmenüs am Platz; 5 Gänge in der Excellence Class',
    gornerEyebrow: 'Gipfelausflug',
    gornerHeading: 'Gornergratbahn (Gornergrat Bahn)',
    gornerLead: 'Europas höchste offene elektrische Zahnradbahn, durchgehend in Betrieb seit 1898.',
    viewCam: 'Live-Cam und Score Gornergrat',
    gornerP1:
      'Die [[b|Gornergrat Bahn (GGB)]] fährt direkt vom Zermatt Bahnhofplatz ab (gegenüber der SBB) und steigt in [[b|33 Minuten 1,485 Höhenmeter]] zum Aussichtsgrat Gornergrat auf 3,089 Meter.',
    gornerP2:
      'Unterwegs bleibt die klassische dreieckige Ostwand des Matterhorns im Blick, das Profil von den Schoggi-Schachteln. Oben steht man auf einer 360-Grad-Terrasse mit [[b|29 Viertausendern]], darunter Monte Rosa (4,634 m, höchster Gipfel der Schweiz) und die Eiszungen des Gornergletschers.',
    stationStops: 'Stationen und Höhen der Gornergratbahn:',
    riffelTitle: 'Der Riffelsee-Trick: in Rotenboden aussteigen',
    riffelBody:
      'Das Retourbillett erlaubt beliebig viele Zwischenhalte. Talwärts am Gipfel in [[b|Rotenboden (2,815 m)]] aussteigen und 10 Minuten hinunter zum [[b|Riffelsee]]. An windstillen Morgen vor 11:00 spiegelt sich das Matterhorn im Wasser. Danach einfach den nächsten Zug nach Zermatt nehmen, ohne Aufpreis.',
    telemetryTitle: 'Kurzdaten Gornergrat',
    returnPrice: 'RETOURPREIS 2026',
    withPass: 'MIT SWISS TRAVEL PASS',
    frequency: 'TAKT',
    frequencyValue: 'Alle 24 Minuten (Spitze) / 48 Min.',
    seating: 'SITZSTRATEGIE',
    pets: 'TIERE',
    petsWelcome: 'Hunde in allen Zügen willkommen',
    officialTickets: 'Offizielle Gornergrat-Billette',
    halfFareHint: 'Halbtax wählen für den 50%-Tarif mit Swiss Travel Pass',
    gexEyebrow: 'Der langsamste Express der Welt',
    gexHeading: 'Glacier Express (Zermatt ↔ St. Moritz)',
    gexLead: 'Eine 7.5- bis 8-stündige Panoramafahrt durch das Herz der Schweizer Alpen, über 291 Brücken.',
    roofWindows: 'Panoramafenster bis ins Dach',
    gexP1:
      'Liebevoll der [[em|«langsamste Expresszug der Welt»]] genannt, verbindet der [[b|Glacier Express]] zwei der angesehensten Alpenorte der Schweiz: [[b|Zermatt]] (am Fusse des Matterhorns im Wallis) und [[b|St. Moritz]] (im hohen Engadin in Graubünden).',
    gexP2:
      'In fast 8 Stunden durch drei Kantone, über den [[b|Oberalppass (2,033 m / 6,670 ft)]], durch die Kalkschlucht der [[b|Rheinschlucht (Ruinaulta)]] und über die 65 Meter hohen Bögen des [[b|Landwasserviadukts]] bei Filisur.',
    classTitle: 'Wagenklassen im Glacier Express:',
    class2: '2. Klasse',
    class2Seats: '4 Sitze pro Reihe (2+2)',
    class2Body: 'Panoramadach, Klapptische, Snackwagen und warme Menüs am Platz.',
    class1: '1. Klasse',
    class1Seats: '3 Sitze pro Reihe (2+1)',
    class1Body: 'Mehr Beinfreiheit, breitere Sitze, ruhiger Wagen, Steckdosen und Audioguide.',
    classEx: 'Excellence Class',
    classExSeats: '1+1 (Fenster garantiert)',
    classExBody: 'Concierge, Champagnerbar, 5-Gang-Menü mit Schweizer Weinen, iPad-Guide und Tee.',
    alertTitle: 'Pflicht-Sitzreservation (Buchungsfenster 93 Tage)',
    alertBody:
      'Auch mit unlimitiertem [[b|Swiss Travel Pass]] oder [[b|Eurail]] darf man [[b|NICHT]] ohne reservierten Sitz in den Glacier Express. Die Reservation kostet CHF 39 (Nebensaison) bis CHF 49 (Sommer) und öffnet [[b|genau 93 Tage im Voraus]]. Die Excellence Class (nur 20 Sitze) ist oft Minuten nach Öffnung weg.',
    gexTelemetry: 'Daten Glacier Express',
    journeyDuration: 'FAHRZEIT',
    durationValue: '7 Stunden 45 Minuten',
    swissTicket: 'BILLETT MIT SWISS TRAVEL PASS',
    swissTicketValue: 'Fahrbillett 100% gratis',
    swissTicketNote: '+ Pflichtreservation CHF 39–49',
    peakElevation: 'HÖCHSTER PASS',
    peakElevationValue: 'Oberalppass (2,033 m / 6,670 ft)',
    bestSideLabel: 'BESTE SITZSEITE',
    bestSideValue: 'Links ostwärts (Rheinschlucht)',
    dogsLabel: 'HUNDE / TIERE',
    dogsStrict: 'In den Wagen streng verboten',
    pauseLabel: 'JÄHRLICHE WARTUNG',
    pauseValue: 'Mitte Oktober bis Mitte Dezember',
    gexReserve: 'Reservation Glacier Express',
    gexReserveHint: 'Pflicht-Sitzreservation öffnet 93 Tage im Voraus',
    ticketsTitle: 'Swiss Travel Pass & Billettstrategie (2026)',
    ticketsIntro: 'So vermeiden Sie Doppelbuchungen und zu hohe Preise auf beiden Bahnen.',
    strategyGorner: 'Billettstrategie Gornergrat Bahn',
    strategyGex: 'Reservationsstrategie Glacier Express',
    gornerTips: [
      { title: 'Swiss Travel Pass / Halbtax:', body: 'Online immer «50% Halbtax» wählen, dann CHF 66 statt CHF 132.' },
      { title: 'Flexible Zeit:', body: 'Das Billett gilt den ganzen Tag für jeden Zug. Die genaue Abfahrt ist zweitrangig.' },
      { title: 'Swiss Family Card:', body: 'Kinder unter 16 fahren mit den Eltern zu 100% gratis. Die Family Card gibt es kostenlos zum Swiss Travel Pass.' },
      { title: 'Zuerst die Live-Sicht prüfen:', body: 'Keine unerstattbaren Gornergrat-Billette Wochen im Voraus kaufen. Am Morgen den Live-Index 1–10 (AM/PM) ansehen.' },
    ],
    gexTips: [
      { title: 'Zuerst reservieren, Pass später:', body: 'Für die Sitzreservation 93 Tage im Voraus braucht es keine Swiss-Travel-Pass-Nummer. An der Kasse «Nur Sitz / Swiss Pass» wählen.' },
      { title: 'Günstige Alternative (Regionalzüge):', body: 'Wenn der Glacier Express ausgebucht ist oder pausiert, fahren Matterhorn Gotthard Bahn und RhB dieselbe Strecke, mit Swiss Travel Pass gratis und ohne Sitzreservation.' },
      { title: 'Essen vorbestellen:', body: 'Warme Menüs der Standardklasse werden frisch gekocht. Online vorbestellen, damit die Wahl auf vollen Zügen nicht weg ist.' },
      { title: 'Gepäck voraus:', body: 'Auf der 8-Stunden-Fahrt das Gepäck mit dem SBB-Stationsversand schicken, statt mehrere Koffer im Gang zu stapeln.' },
    ],
    faqEyebrow: 'Wissen für Reisende',
    faqTitle: 'Häufige Fragen (Gornergrat & Glacier Express)',
    faqIntro: 'Die meistgesuchten Fragen zu Pässen, Preisen, Sitzen und Live-Wetter.',
    badgeGorner: 'Gornergrat',
    badgeGex: 'Glacier Exp.',
    badgeBoth: 'Beides',
    relatedAria: 'Verwandte Guides',
    relatedTitle: 'Weitere Matterhorn-Telemetrie und Guides',
    cardLive: 'Live-Aussicht',
    cardGornerTitle: 'Gornergrat (3,089 m) Live-Cams & Score →',
    cardGornerBody: 'Roundshot-Webcams in Echtzeit und 10-Tage-Klarheit am Gipfel, vormittags und nachmittags.',
    cardCompare: 'Vergleich',
    cardCompareTitle: 'Gornergrat vs. Glacier Paradise →',
    cardCompareBody: 'Blickwinkel aufs Matterhorn, Höhendifferenz (794 m) und Verhalten bei Wind.',
    cardClimate: 'Klimadaten',
    cardClimateTitle: 'Bester Monat und beste Tageszeit →',
    cardClimateBody: '30 Jahre Sichtstatistik: Warum der Morgen an 78% der Tage klarer ist als der Nachmittag.',
  }),
  es: localizeUi(UI_EN, {
    home: 'Inicio', breadcrumbCurrent: 'Trenes panorámicos suizos (Gornergrat y Glacier Express)',
    heroBadge: 'Guía 2026 de ferrocarriles panorámicos y telemetría en directo',
    h1: 'Horario y billetes del Gornergrat | Precio del Glacier Express',
    heroLead: 'Lo esencial de los dos trenes más famosos que terminan en Zermatt: el cremallera al aire libre más alto de Europa hasta [[b|Gornergrat (3,089 m)]] y el legendario [[b|Glacier Express]] de 8 horas hasta St. Moritz. Compare visibilidad en directo, Swiss Travel Pass, precios y el mejor lado para sentarse.',
    statGornerAlt: 'Altitud del Gornergrat', statGornerDetail: '+1,485 m de subida • 33 min',
    statGexRoute: 'Ruta del Glacier Express', statGexDetail: '291 puentes • 91 túneles',
    statSwissGorner: 'Swiss Pass Gornergrat', statSwissGornerValue: '50% dto.', statSwissGornerDetail: 'CHF 66 ida y vuelta (verano)',
    statSwissGex: 'Swiss Pass Glacier Exp.', statSwissGexValue: '100% gratis', statSwissGexDetail: 'Reserva de asiento obligatoria',
    liveAria: 'Telemetría en directo del Gornergrat y del Glacier Express',
    liveTitle: 'Condiciones de montaña y estado ferroviario de hoy',
    liveUpdated: 'Actualizado cada 15 min con telemetría suiza de alta montaña',
    morning: 'Esta mañana', afternoon: 'Esta tarde', summit: 'Cumbre', midCloud: 'Nube media', wind: 'Viento', ride: 'Trayecto', rideGorner: '33 min',
    sitRight: 'Siéntese a la derecha subiendo.',
    gexCardTitle: 'Corredor del Glacier Express', running: 'En marcha', paused: 'En pausa', service: 'Servicio', peakPass: 'Puerto', rideGexShort: 'Trayecto', swissPass: 'Swiss Pass', seat: 'Asiento', booking: 'Reserva', inSeason: 'En temporada', maintenance: 'Mantenimiento', rideGex: '7 h 45', included: 'Incluido', required: 'Obligatorio', days93: '93 días',
    navAria: 'Secciones', navCompare: 'Comparación lado a lado', navGorner: 'Guía del Gornergrat', navGex: 'Glacier Express y Excellence Class', navTickets: 'Swiss Travel Pass y billetes', navFaq: 'Preguntas frecuentes',
    compareTitle: 'Comparación lado a lado', compareIntro: 'Telemetría, logística, cobertura del pase y asientos de ambos trayectos.',
    colFeature: 'Dato', colGorner: 'Ferrocarril del Gornergrat (Gornergrat Bahn)', colGex: 'Glacier Express',
    rowPurpose: 'Propósito', purposeGorner: 'Excursión a la cumbre de 3,089 m frente a la cara este del Matterhorn', purposeGex: 'Tránsito panorámico transalpino de un día entre Valais y Engadina (St. Moritz)',
    rowRoute: 'Ruta y extremos', rowTime: 'Duración', rowPeak: 'Cota máxima', peakGorner: '(cima del Gornergrat)', peakGex: '(puerto de Oberalp)',
    rowSwiss: 'Swiss Travel Pass', discount50: '50% de descuento', swissPrices: 'CHF 66 ida y vuelta en verano / CHF 51 en invierno', freeTicket: 'Billete 100% gratis', seatFee: 'Reserva de asiento obligatoria (CHF 39–49)',
    rowEurail: 'Eurail / Interrail', eurailNone: 'Sin descuento (tarifa completa)', eurailFull: 'Billete cubierto al 100% + reserva de asiento',
    rowSeats: 'Reserva de asiento', notRequired: '[[b|No necesaria]] (asiento libre; embarque prioritario opcional CHF 7)', mandatory: '[[amber|OBLIGATORIA]] para todos (abre 93 días antes)',
    rowSeason: 'Temporada', seasonGorner: '365 días al año', seasonGex: 'De mediados de diciembre a mediados de octubre (pausa de mediados de octubre a principios de diciembre)',
    rowSide: 'Mejor lado', sideGorner: '[[b|Lado derecho]] subiendo desde Zermatt, vista directa al Matterhorn', sideGex: '[[b|Lado izquierdo]] para la garganta del Rin; cristal panorámico en todo el vagón',
    rowDogs: 'Perros y mascotas', dogsYes: '[[b|Perros permitidos]] (pequeños gratis en transportín; grandes al 50%)', dogsNo: '[[b|Perros NO permitidos]] en los vagones panorámicos',
    rowDining: 'Comida a bordo', diningGorner: 'Restaurante del 3100 Kulmhotel y bufé de autoservicio en la cumbre', diningGex: 'Menús calientes de varios platos en el asiento; 5 platos en Excellence Class',
    gornerEyebrow: 'Excursión a la cumbre', gornerHeading: 'Ferrocarril del Gornergrat (Gornergrat Bahn)', gornerLead: 'El cremallera eléctrico al aire libre más alto de Europa, en servicio continuo desde 1898.',
    viewCam: 'Ver cámara y puntuación del Gornergrat',
    gornerP1: 'El [[b|Gornergrat Bahn (GGB)]] sale de la plaza de la estación de Zermatt (frente a la SBB) y sube [[b|1,485 metros en solo 33 minutos]] hasta la cresta del Gornergrat, a 3,089 metros.',
    gornerP2: 'En la subida se ve sin cortes la cara este triangular del Matterhorn, la silueta de las cajas de chocolate suizo. En la cumbre hay una terraza de 360 grados rodeada de [[b|29 cuatromiles]], entre ellos el Monte Rosa (4,634 m, la cumbre más alta de Suiza) y las lenguas de hielo del glaciar Gorner.',
    stationStops: 'Paradas y altitudes del Gornergrat:',
    riffelTitle: 'El truco del Riffelsee: baje en Rotenboden',
    riffelBody: 'El billete de ida y vuelta permite bajar en paradas intermedias. Al bajar de la cumbre, descienda en [[b|Rotenboden (2,815 m)]] y camine 10 minutos hasta el lago [[b|Riffelsee]]. En mañanas sin viento, antes de las 11:00, el Matterhorn se refleja en el agua. Luego puede tomar el siguiente tren a Zermatt sin coste extra.',
    telemetryTitle: 'Datos rápidos del Gornergrat', returnPrice: 'PRECIO IDA Y VUELTA 2026', withPass: 'CON SWISS TRAVEL PASS', frequency: 'FRECUENCIA', frequencyValue: 'Cada 24 minutos (punta) / 48 min', seating: 'DÓNDE SENTARSE', pets: 'MASCOTAS', petsWelcome: 'Perros bienvenidos en todos los trenes', officialTickets: 'Billetes oficiales del Gornergrat', halfFareHint: 'Elija media tarifa para el 50% del Swiss Travel Pass',
    gexEyebrow: 'El expreso más lento del mundo', gexHeading: 'Glacier Express (Zermatt ↔ St. Moritz)', gexLead: 'Una odisea panorámica de 7.5 a 8 horas por el corazón de los Alpes suizos, a través de 291 puentes.', roofWindows: 'Ventanas panorámicas en el techo',
    gexP1: 'Conocido con cariño como el [[em|«expreso más lento del mundo»]], el [[b|Glacier Express]] une dos de los centros alpinos más prestigiosos de Suiza: [[b|Zermatt]] (al pie del Matterhorn, en Valais) y [[b|St. Moritz]] (en la alta Engadina, Grisones).',
    gexP2: 'En casi 8 horas cruza tres cantones, sube el [[b|puerto de Oberalp (2,033 m / 6,670 ft)]], baja por el desfiladero calcáreo de la [[b|garganta del Rin (Ruinaulta)]] y atraviesa los arcos de 65 metros del [[b|viaducto de Landwasser]], cerca de Filisur.',
    classTitle: 'Clases en el Glacier Express:', class2: '2.ª clase', class2Seats: '4 asientos por fila (2+2)', class2Body: 'Techo de cristal, mesas abatibles, carrito de snacks y almuerzo caliente en el asiento.', class1: '1.ª clase', class1Seats: '3 asientos por fila (2+1)', class1Body: 'Más espacio para las piernas, asientos más anchos, vagón más tranquilo, enchufes y audioguía.', classEx: 'Excellence Class', classExSeats: 'Distribución 1+1 (ventanilla garantizada)', classExBody: 'Conserje, bar de champán, menú regional de 5 platos con vinos suizos, guía en iPad y té.',
    alertTitle: 'Reserva de asiento obligatoria (ventana de 93 días)',
    alertBody: 'Aunque tenga un [[b|Swiss Travel Pass]] o un [[b|Eurail]] ilimitados, [[b|NO PUEDE]] subir al Glacier Express sin asiento reservado. La reserva cuesta de CHF 39 (temporada baja) a CHF 49 (verano) y abre [[b|exactamente 93 días antes]]. La Excellence Class (solo 20 plazas) suele agotarse en minutos.',
    gexTelemetry: 'Datos del Glacier Express', journeyDuration: 'DURACIÓN', durationValue: '7 horas 45 minutos', swissTicket: 'BILLETE CON SWISS TRAVEL PASS', swissTicketValue: 'Billete de tren 100% gratis', swissTicketNote: '+ reserva obligatoria CHF 39–49', peakElevation: 'PUERTO MÁS ALTO', peakElevationValue: 'Puerto de Oberalp (2,033 m / 6,670 ft)', bestSideLabel: 'MEJOR LADO', bestSideValue: 'Izquierda hacia el este (garganta del Rin)', dogsLabel: 'PERROS / MASCOTAS', dogsStrict: 'Estrictamente prohibidos en los vagones', pauseLabel: 'PAUSA ANUAL', pauseValue: 'De mediados de octubre a mediados de diciembre', gexReserve: 'Reservas del Glacier Express', gexReserveHint: 'La reserva obligatoria abre 93 días antes',
    ticketsTitle: 'Swiss Travel Pass y estrategia de billetes (2026)', ticketsIntro: 'Cómo no pagar de más ni reservar dos veces en los dos sistemas.',
    strategyGorner: 'Estrategia de billetes del Gornergrat', strategyGex: 'Estrategia de reserva del Glacier Express',
    gornerTips: [
      { title: 'Swiss Travel Pass / Half Fare:', body: 'Al comprar online elija siempre «50% Half-Fare» para pagar CHF 66 en lugar de CHF 132.' },
      { title: 'Horario flexible:', body: 'El billete vale para cualquier tren del día; no hace falta fijar la hora.' },
      { title: 'Swiss Family Card:', body: 'Los menores de 16 años viajan gratis con sus padres. Pida la Family Card gratis al comprar el Swiss Travel Pass.' },
      { title: 'Mire primero la claridad en directo:', body: 'No compre con semanas de antelación billetes del Gornergrat no reembolsables. El mismo día consulte el índice en vivo de 1 a 10, mañana y tarde.' },
    ],
    gexTips: [
      { title: 'Reserve primero, el pase después:', body: 'No necesita el número del Swiss Travel Pass para reservar el asiento 93 días antes. En el pago elija «Solo asiento / Swiss Pass».' },
      { title: 'Alternativa económica (regionales):', body: 'Si el Glacier Express está lleno o en pausa, los regionales de Matterhorn Gotthard Bahn y RhB hacen las mismas vías, gratis con Swiss Travel Pass y sin reserva de asiento.' },
      { title: 'Pida la comida antes:', body: 'Los platos calientes de clase estándar se cocinan a bordo. Pedirlos online evita que se agoten en trenes llenos.' },
      { title: 'Envío de equipaje:', body: 'En el trayecto de 8 horas, use el envío de maletas de estación a estación de SBB para no llevar varias maletas por el pasillo.' },
    ],
    faqEyebrow: 'Base para viajeros', faqTitle: 'Preguntas frecuentes (Gornergrat y Glacier Express)', faqIntro: 'Las dudas más buscadas sobre pases, precios, asientos y tiempo en directo.',
    badgeGorner: 'Gornergrat', badgeGex: 'Glacier Exp.', badgeBoth: 'Ambos',
    relatedAria: 'Guías relacionadas', relatedTitle: 'Más telemetría y guías del Matterhorn',
    cardLive: 'Mirador en directo', cardGornerTitle: 'Gornergrat (3,089 m): cámaras y puntuación →', cardGornerBody: 'Webcams Roundshot en tiempo real y claridad de cumbre mañana/tarde a 10 días.',
    cardCompare: 'Guía comparativa', cardCompareTitle: 'Gornergrat frente a Glacier Paradise →', cardCompareBody: 'Ángulos del Matterhorn, diferencia de altitud (794 m) y resistencia al viento.',
    cardClimate: 'Climatología', cardClimateTitle: 'Mejor mes y hora del día →', cardClimateBody: '30 años de visibilidad: por qué las mañanas ganan a las tardes el 78% del año.',
  }),
  fr: localizeUi(UI_EN, {
    breadcrumbAria: 'Fil d’Ariane', home: 'Accueil', breadcrumbCurrent: 'Trains panoramiques suisses (Gornergrat et Glacier Express)',
    heroBadge: 'Guide 2026 des trains panoramiques et télémétrie en direct',
    h1: 'Horaires et billets du Gornergrat | Prix du Glacier Express',
    heroLead: 'L’essentiel sur les deux trains les plus célèbres qui arrivent à Zermatt : la plus haute crémaillère à ciel ouvert d’Europe jusqu’au [[b|Gornergrat (3,089 m)]] et le légendaire [[b|Glacier Express]] de 8 heures vers St. Moritz. Comparez la visibilité en direct, le Swiss Travel Pass, les prix et le bon côté pour s’asseoir.',
    statGornerAlt: 'Altitude du Gornergrat', statGornerDetail: '+1,485 m de montée • 33 min',
    statGexRoute: 'Parcours du Glacier Express', statGexDetail: '291 ponts • 91 tunnels',
    statSwissGorner: 'Swiss Pass Gornergrat', statSwissGornerValue: '−50 %', statSwissGornerDetail: 'CHF 66 aller-retour (été)',
    statSwissGex: 'Swiss Pass Glacier Exp.', statSwissGexValue: '100 % gratuit', statSwissGexDetail: 'Réservation de place requise',
    liveAria: 'Télémétrie en direct du Gornergrat et du Glacier Express',
    liveTitle: 'Conditions en montagne et état des trains aujourd’hui',
    liveUpdated: 'Mis à jour toutes les 15 min par la télémétrie suisse de haute altitude',
    morning: 'Ce matin', afternoon: 'Cet après-midi', summit: 'Sommet', midCloud: 'Nuages moyens', wind: 'Vent', ride: 'Trajet', rideGorner: '33 min',
    sitRight: 'Asseyez-vous à droite en montant.',
    gexCardTitle: 'Corridor du Glacier Express', running: 'En service', paused: 'En pause', service: 'Service', peakPass: 'Col', rideGexShort: 'Trajet', swissPass: 'Swiss Pass', seat: 'Place', booking: 'Réservation', inSeason: 'En saison', maintenance: 'Maintenance', rideGex: '7 h 45', included: 'Inclus', required: 'Obligatoire', days93: '93 jours',
    navAria: 'Sections', navCompare: 'Comparaison côte à côte', navGorner: 'Guide du Gornergrat', navGex: 'Glacier Express et Excellence Class', navTickets: 'Swiss Travel Pass et billets', navFaq: 'Questions fréquentes',
    compareTitle: 'Comparaison côte à côte', compareIntro: 'Télémétrie, logistique, couverture du pass et conseils de place pour les deux trajets.',
    colFeature: 'Critère', colGorner: 'Chemin de fer du Gornergrat (Gornergrat Bahn)', colGex: 'Glacier Express',
    rowPurpose: 'Rôle principal', purposeGorner: 'Excursion au sommet à 3,089 m face à la face est du Cervin', purposeGex: 'Traversée panoramique transalpine d’une journée entre le Valais et l’Engadine (St. Moritz)',
    rowRoute: 'Parcours et terminus', rowTime: 'Durée', rowPeak: 'Point haut', peakGorner: '(sommet du Gornergrat)', peakGex: '(col de l’Oberalp)',
    rowSwiss: 'Swiss Travel Pass', discount50: 'Réduction de 50 %', swissPrices: 'CHF 66 aller-retour l’été / CHF 51 l’hiver', freeTicket: 'Billet 100 % gratuit', seatFee: 'Réservation de place obligatoire (CHF 39–49)',
    rowEurail: 'Eurail / Interrail', eurailNone: 'Aucune réduction (plein tarif)', eurailFull: 'Billet couvert à 100 % + réservation de place',
    rowSeats: 'Réservation de place', notRequired: '[[b|Pas nécessaire]] (placement libre ; embarquement prioritaire en option CHF 7)', mandatory: '[[amber|OBLIGATOIRE]] pour tous (ouvre 93 jours à l’avance)',
    rowSeason: 'Saison', seasonGorner: '365 jours par an', seasonGex: 'De mi-décembre à mi-octobre (pause de mi-octobre à début décembre)',
    rowSide: 'Meilleur côté', sideGorner: '[[b|Côté droit]] en montant depuis Zermatt, vue directe sur le Cervin', sideGex: '[[b|Côté gauche]] pour les gorges du Rhin ; verre panoramique dans toute la voiture',
    rowDogs: 'Chiens et animaux', dogsYes: '[[b|Chiens admis]] (petits gratuits en caisse ; grands à 50 %)', dogsNo: '[[b|Chiens NON admis]] dans les voitures panoramiques',
    rowDining: 'Restauration', diningGorner: 'Restaurant du 3100 Kulmhotel et buffet en libre-service au sommet', diningGex: 'Menus chauds en plusieurs services à la place ; 5 services en Excellence Class',
    gornerEyebrow: 'Excursion au sommet', gornerHeading: 'Chemin de fer du Gornergrat (Gornergrat Bahn)', gornerLead: 'La plus haute crémaillère électrique à ciel ouvert d’Europe, en service continu depuis 1898.',
    viewCam: 'Voir la webcam et le score du Gornergrat',
    gornerP1: 'Le [[b|Gornergrat Bahn (GGB)]] part de la place de la gare de Zermatt (en face des CFF) et grimpe [[b|1,485 mètres de dénivelé en 33 minutes]] jusqu’à la crête du Gornergrat, à 3,089 mètres.',
    gornerP2: 'À la montée, la face est triangulaire du Cervin reste en vue, la silhouette des boîtes de chocolat suisse. Au sommet, une terrasse à 360 degrés est entourée de [[b|29 sommets de plus de 4,000 mètres]], dont le mont Rose (4,634 m, plus haut sommet de Suisse) et les langues de glace du glacier du Gorner.',
    stationStops: 'Arrêts et altitudes du Gornergrat :',
    riffelTitle: 'L’astuce du Riffelsee : descendez à Rotenboden',
    riffelBody: 'L’aller-retour permet des arrêts intermédiaires illimités. En descendant du sommet, descendez à [[b|Rotenboden (2,815 m)]] et marchez 10 minutes jusqu’au lac [[b|Riffelsee]]. Les matins sans vent, avant 11:00, le Cervin se reflète dans l’eau. Vous reprenez ensuite le train suivant vers Zermatt sans supplément.',
    telemetryTitle: 'Repères Gornergrat', returnPrice: 'PRIX ALLER-RETOUR 2026', withPass: 'AVEC SWISS TRAVEL PASS', frequency: 'FRÉQUENCE', frequencyValue: 'Toutes les 24 minutes (pointe) / 48 min', seating: 'OÙ S’ASSEOIR', pets: 'ANIMAUX', petsWelcome: 'Chiens acceptés dans tous les trains', officialTickets: 'Billets officiels du Gornergrat', halfFareHint: 'Choisissez le demi-tarif pour les 50 % du Swiss Travel Pass',
    gexEyebrow: 'L’express le plus lent du monde', gexHeading: 'Glacier Express (Zermatt ↔ St. Moritz)', gexLead: 'Une odyssée panoramique de 7,5 à 8 heures au cœur des Alpes suisses, à travers 291 ponts.', roofWindows: 'Vitres panoramiques jusqu’au toit',
    gexP1: 'Surnommé avec affection [[em|« l’express le plus lent du monde »]], le [[b|Glacier Express]] relie deux des stations alpines les plus prestigieuses de Suisse : [[b|Zermatt]] (au pied du Cervin, en Valais) et [[b|St. Moritz]] (dans la haute Engadine, aux Grisons).',
    gexP2: 'En près de 8 heures, le train traverse trois cantons, franchit le [[b|col de l’Oberalp (2,033 m / 6,670 ft)]], descend les gorges calcaires du [[b|Rhin (Ruinaulta)]] et passe les arches de 65 mètres du [[b|viaduc de la Landwasser]] près de Filisur.',
    classTitle: 'Classes à bord du Glacier Express :', class2: '2e classe', class2Seats: '4 places par rangée (2+2)', class2Body: 'Toit vitré, tables rabattables, chariot snacks et déjeuner chaud à la place.', class1: '1re classe', class1Seats: '3 places par rangée (2+1)', class1Body: 'Plus d’espace pour les jambes, sièges plus larges, voiture plus calme, prises et audioguide.', classEx: 'Excellence Class', classExSeats: 'Disposition 1+1 (fenêtre garantie)', classExBody: 'Concierge, bar à champagne, menu régional en 5 services avec vins suisses, guide iPad et thé.',
    alertTitle: 'Réservation de place obligatoire (fenêtre de 93 jours)',
    alertBody: 'Même avec un [[b|Swiss Travel Pass]] ou un [[b|Eurail]] illimités, vous ne [[b|POUVEZ PAS]] monter dans le Glacier Express sans place réservée. La réservation coûte de CHF 39 (basse saison) à CHF 49 (été) et ouvre [[b|exactement 93 jours à l’avance]]. L’Excellence Class (20 places seulement) part souvent en quelques minutes.',
    gexTelemetry: 'Repères Glacier Express', journeyDuration: 'DURÉE', durationValue: '7 heures 45 minutes', swissTicket: 'BILLET AVEC SWISS TRAVEL PASS', swissTicketValue: 'Billet de train 100 % gratuit', swissTicketNote: '+ réservation obligatoire CHF 39–49', peakElevation: 'COL LE PLUS HAUT', peakElevationValue: 'Col de l’Oberalp (2,033 m / 6,670 ft)', bestSideLabel: 'MEILLEUR CÔTÉ', bestSideValue: 'À gauche vers l’est (gorges du Rhin)', dogsLabel: 'CHIENS / ANIMAUX', dogsStrict: 'Strictement interdits dans les voitures', pauseLabel: 'PAUSE ANNUELLE', pauseValue: 'De mi-octobre à mi-décembre', gexReserve: 'Réservations Glacier Express', gexReserveHint: 'La réservation obligatoire ouvre 93 jours à l’avance',
    ticketsTitle: 'Swiss Travel Pass et stratégie de billets (2026)', ticketsIntro: 'Comment éviter de payer trop cher ou de réserver deux fois sur les deux réseaux.',
    strategyGorner: 'Stratégie de billets Gornergrat Bahn', strategyGex: 'Stratégie de réservation Glacier Express',
    gornerTips: [
      { title: 'Swiss Travel Pass / demi-tarif :', body: 'En ligne, choisissez toujours l’option « 50 % demi-tarif » pour payer CHF 66 au lieu de CHF 132.' },
      { title: 'Horaire souple :', body: 'Le billet vaut pour n’importe quel train de la journée ; l’heure exacte n’est pas un stress.' },
      { title: 'Swiss Family Card :', body: 'Les moins de 16 ans voyagent gratuitement avec leurs parents. Demandez la Family Card gratuite en achetant le Swiss Travel Pass.' },
      { title: 'Vérifiez d’abord la clarté en direct :', body: 'N’achetez pas des semaines à l’avance des billets Gornergrat non remboursables. Le matin, consultez l’indice live de 1 à 10, matin et après-midi.' },
    ],
    gexTips: [
      { title: 'Réservez d’abord, le pass ensuite :', body: 'Vous n’avez PAS besoin du numéro de Swiss Travel Pass pour réserver la place 93 jours à l’avance. À la caisse, choisissez « Place seule / Swiss Pass ».' },
      { title: 'Alternative économique (trains régionaux) :', body: 'Si le Glacier Express est complet ou en pause, les régionaux Matterhorn Gotthard Bahn et RhB empruntent les mêmes voies, gratuits avec le Swiss Travel Pass et sans réservation de place.' },
      { title: 'Commandez le repas à l’avance :', body: 'Les plats chauds de classe standard sont cuisinés à bord. Les commander en ligne évite la rupture sur les trains chargés.' },
      { title: 'Acheminement des bagages :', body: 'Pour les 8 heures de trajet, utilisez l’envoi de bagages de gare à gare des CFF plutôt que plusieurs valises dans le couloir.' },
    ],
    faqEyebrow: 'Base voyageurs', faqTitle: 'Questions fréquentes (Gornergrat et Glacier Express)', faqIntro: 'Les questions les plus cherchées sur les pass, les prix, les places et la météo en direct.',
    badgeGorner: 'Gornergrat', badgeGex: 'Glacier Exp.', badgeBoth: 'Les deux',
    relatedAria: 'Guides liés', relatedTitle: 'Autres guides et télémétrie du Cervin',
    cardLive: 'Belvédère en direct', cardGornerTitle: 'Gornergrat (3,089 m) : webcams et score →', cardGornerBody: 'Webcams Roundshot en temps réel et clarté du sommet matin/après-midi sur 10 jours.',
    cardCompare: 'Comparaison', cardCompareTitle: 'Gornergrat ou Glacier Paradise →', cardCompareBody: 'Angles sur le Cervin, écart d’altitude (794 m) et tenue au vent.',
    cardClimate: 'Climatologie', cardClimateTitle: 'Meilleur mois et meilleur moment →', cardClimateBody: '30 ans de visibilité : pourquoi le matin bat l’après-midi 78 % de l’année.',
  }),
  it: localizeUi(UI_EN, {
    breadcrumbAria: 'Percorso', home: 'Home', breadcrumbCurrent: 'Treni panoramici svizzeri (Gornergrat e Glacier Express)',
    heroBadge: 'Guida 2026 ai treni panoramici e telemetria in diretta',
    h1: 'Orari e biglietti del Gornergrat | Prezzo del Glacier Express',
    heroLead: 'L’essenziale sui due treni più famosi che arrivano a Zermatt: la cremagliera a cielo aperto più alta d’Europa fino al [[b|Gornergrat (3,089 m)]] e il leggendario [[b|Glacier Express]] di 8 ore verso St. Moritz. Confronti visibilità in diretta, Swiss Travel Pass, prezzi e il lato migliore.',
    statGornerAlt: 'Quota del Gornergrat', statGornerDetail: '+1,485 m di salita • 33 min',
    statGexRoute: 'Percorso Glacier Express', statGexDetail: '291 ponti • 91 gallerie',
    statSwissGorner: 'Swiss Pass Gornergrat', statSwissGornerValue: '−50%', statSwissGornerDetail: 'CHF 66 andata e ritorno (estate)',
    statSwissGex: 'Swiss Pass Glacier Exp.', statSwissGexValue: '100% gratis', statSwissGexDetail: 'Prenotazione posto obbligatoria',
    liveAria: 'Telemetria in diretta di Gornergrat e Glacier Express',
    liveTitle: 'Condizioni in montagna e stato dei treni oggi',
    liveUpdated: 'Aggiornato ogni 15 min dalla telemetria svizzera d’alta quota',
    morning: 'Stamattina', afternoon: 'Questo pomeriggio', summit: 'Vetta', midCloud: 'Nubi medie', wind: 'Vento', ride: 'Corsa', rideGorner: '33 min',
    sitRight: 'In salita si sieda a destra.',
    gexCardTitle: 'Corridoio del Glacier Express', running: 'In servizio', paused: 'In pausa', service: 'Servizio', peakPass: 'Passo', rideGexShort: 'Corsa', swissPass: 'Swiss Pass', seat: 'Posto', booking: 'Prenotazione', inSeason: 'In stagione', maintenance: 'Manutenzione', rideGex: '7 h 45', included: 'Incluso', required: 'Obbligatorio', days93: '93 giorni',
    navAria: 'Sezioni', navCompare: 'Confronto affiancato', navGorner: 'Guida del Gornergrat', navGex: 'Glacier Express ed Excellence Class', navTickets: 'Swiss Travel Pass e biglietti', navFaq: 'Domande frequenti',
    compareTitle: 'Confronto affiancato', compareIntro: 'Telemetria, logistica, copertura del pass e posti per entrambi i viaggi.',
    colFeature: 'Voce', colGorner: 'Ferrovia del Gornergrat (Gornergrat Bahn)', colGex: 'Glacier Express',
    rowPurpose: 'Scopo', purposeGorner: 'Escursione in vetta a 3,089 m di fronte alla parete est del Cervino', purposeGex: 'Transito panoramico transalpino di un’intera giornata tra Vallese ed Engadina (St. Moritz)',
    rowRoute: 'Percorso e capolinea', rowTime: 'Durata', rowPeak: 'Quota massima', peakGorner: '(vetta del Gornergrat)', peakGex: '(passo dell’Oberalp)',
    rowSwiss: 'Swiss Travel Pass', discount50: 'Sconto del 50%', swissPrices: 'CHF 66 andata e ritorno in estate / CHF 51 in inverno', freeTicket: 'Biglietto 100% gratis', seatFee: 'Prenotazione posto obbligatoria (CHF 39–49)',
    rowEurail: 'Eurail / Interrail', eurailNone: 'Nessuno sconto (tariffa intera)', eurailFull: 'Biglietto coperto al 100% + prenotazione posto',
    rowSeats: 'Prenotazione posto', notRequired: '[[b|Non necessaria]] (posto libero; imbarco prioritario facoltativo CHF 7)', mandatory: '[[amber|OBBLIGATORIA]] per tutti (apre 93 giorni prima)',
    rowSeason: 'Stagione', seasonGorner: '365 giorni l’anno', seasonGex: 'Da metà dicembre a metà ottobre (pausa da metà ottobre a inizio dicembre)',
    rowSide: 'Lato migliore', sideGorner: '[[b|Lato destro]] in salita da Zermatt, vista diretta sul Cervino', sideGex: '[[b|Lato sinistro]] per la gola del Reno; vetro panoramico in tutta la carrozza',
    rowDogs: 'Cani e animali', dogsYes: '[[b|Cani ammessi]] (piccoli gratis nel trasportino; grandi al 50%)', dogsNo: '[[b|Cani NON ammessi]] nelle carrozze panoramiche',
    rowDining: 'Ristorazione', diningGorner: 'Ristorante del 3100 Kulmhotel e buffet self-service in vetta', diningGex: 'Menu caldi di più portate al posto; 5 portate in Excellence Class',
    gornerEyebrow: 'Escursione in vetta', gornerHeading: 'Ferrovia del Gornergrat (Gornergrat Bahn)', gornerLead: 'La cremagliera elettrica a cielo aperto più alta d’Europa, in servizio continuo dal 1898.',
    viewCam: 'Vedi webcam e punteggio del Gornergrat',
    gornerP1: 'La [[b|Gornergrat Bahn (GGB)]] parte dalla piazza della stazione di Zermatt (di fronte alle FFS) e sale di [[b|1,485 metri in soli 33 minuti]] fino alla cresta del Gornergrat, a 3,089 metri.',
    gornerP2: 'In salita resta in vista la classica parete est triangolare del Cervino, la silhouette delle scatole di cioccolato svizzero. In vetta c’è una terrazza a 360 gradi circondata da [[b|29 quattromila]], tra cui il Monte Rosa (4,634 m, la vetta più alta della Svizzera) e le lingue di ghiaccio del ghiacciaio del Gorner.',
    stationStops: 'Fermate e quote del Gornergrat:',
    riffelTitle: 'Il trucco del Riffelsee: scenda a Rotenboden',
    riffelBody: 'L’andata e ritorno consente fermate intermedie illimitate. Scendendo dalla vetta, scenda a [[b|Rotenboden (2,815 m)]] e cammini 10 minuti fino al lago [[b|Riffelsee]]. Nelle mattine senza vento, prima delle 11:00, il Cervino si specchia nell’acqua. Poi può prendere il treno successivo per Zermatt senza supplemento.',
    telemetryTitle: 'Dati rapidi Gornergrat', returnPrice: 'PREZZO ANDATA E RITORNO 2026', withPass: 'CON SWISS TRAVEL PASS', frequency: 'FREQUENZA', frequencyValue: 'Ogni 24 minuti (punta) / 48 min', seating: 'DOVE SEDERSI', pets: 'ANIMALI', petsWelcome: 'Cani benvenuti su tutti i treni', officialTickets: 'Biglietti ufficiali del Gornergrat', halfFareHint: 'Scelga la mezza tariffa per il 50% dello Swiss Travel Pass',
    gexEyebrow: 'L’espresso più lento del mondo', gexHeading: 'Glacier Express (Zermatt ↔ St. Moritz)', gexLead: 'Un’odissea panoramica di 7,5–8 ore nel cuore delle Alpi svizzere, attraverso 291 ponti.', roofWindows: 'Finestrini panoramici fino al tetto',
    gexP1: 'Chiamato con affetto [[em|«l’espresso più lento del mondo»]], il [[b|Glacier Express]] collega due delle località alpine più prestigiose della Svizzera: [[b|Zermatt]] (ai piedi del Cervino, in Vallese) e [[b|St. Moritz]] (nell’alta Engadina, Grigioni).',
    gexP2: 'In quasi 8 ore attraversa tre cantoni, sale il [[b|passo dell’Oberalp (2,033 m / 6,670 ft)]], scende nella gola calcarea del [[b|Reno (Ruinaulta)]] e passa gli archi di 65 metri del [[b|viadotto della Landwasser]] vicino a Filisur.',
    classTitle: 'Classi sul Glacier Express:', class2: '2ª classe', class2Seats: '4 posti per fila (2+2)', class2Body: 'Tetto panoramico, tavolini, carrello snack e pranzo caldo al posto.', class1: '1ª classe', class1Seats: '3 posti per fila (2+1)', class1Body: 'Più spazio per le gambe, sedili più larghi, carrozza più silenziosa, prese e audioguida.', classEx: 'Excellence Class', classExSeats: 'Disposizione 1+1 (finestrino garantito)', classExBody: 'Concierge, bar champagne, menu regionale di 5 portate con vini svizzeri, guida iPad e tè.',
    alertTitle: 'Prenotazione posto obbligatoria (finestra di 93 giorni)',
    alertBody: 'Anche con uno [[b|Swiss Travel Pass]] o un [[b|Eurail]] illimitati, [[b|NON SI PUÒ]] salire sul Glacier Express senza posto riservato. La prenotazione costa da CHF 39 (bassa stagione) a CHF 49 (estate) e apre [[b|esattamente 93 giorni prima]]. L’Excellence Class (solo 20 posti) spesso finisce in pochi minuti.',
    gexTelemetry: 'Dati Glacier Express', journeyDuration: 'DURATA', durationValue: '7 ore e 45 minuti', swissTicket: 'BIGLIETTO CON SWISS TRAVEL PASS', swissTicketValue: 'Biglietto ferroviario 100% gratis', swissTicketNote: '+ prenotazione obbligatoria CHF 39–49', peakElevation: 'PASSO PIÙ ALTO', peakElevationValue: 'Passo dell’Oberalp (2,033 m / 6,670 ft)', bestSideLabel: 'LATO MIGLIORE', bestSideValue: 'Sinistra verso est (gola del Reno)', dogsLabel: 'CANI / ANIMALI', dogsStrict: 'Severamente vietati nelle carrozze', pauseLabel: 'PAUSA ANNUALE', pauseValue: 'Da metà ottobre a metà dicembre', gexReserve: 'Prenotazioni Glacier Express', gexReserveHint: 'La prenotazione obbligatoria apre 93 giorni prima',
    ticketsTitle: 'Swiss Travel Pass e strategia biglietti (2026)', ticketsIntro: 'Come evitare di pagare troppo o di prenotare due volte sui due sistemi.',
    strategyGorner: 'Strategia biglietti Gornergrat Bahn', strategyGex: 'Strategia di prenotazione Glacier Express',
    gornerTips: [
      { title: 'Swiss Travel Pass / mezza tariffa:', body: 'Online scelga sempre «50% mezza tariffa» per pagare CHF 66 invece di CHF 132.' },
      { title: 'Orario flessibile:', body: 'Il biglietto vale per qualsiasi treno del giorno; l’ora esatta non è un problema.' },
      { title: 'Swiss Family Card:', body: 'I minori di 16 anni viaggiano gratis con i genitori. Chieda la Family Card gratis acquistando lo Swiss Travel Pass.' },
      { title: 'Prima controlli la visibilità in diretta:', body: 'Non compri settimane prima biglietti Gornergrat non rimborsabili. La mattina guardi l’indice live da 1 a 10, mattina e pomeriggio.' },
    ],
    gexTips: [
      { title: 'Prenoti prima, il pass dopo:', body: 'Non serve il numero dello Swiss Travel Pass per prenotare il posto 93 giorni prima. Alla cassa scelga «Solo posto / Swiss Pass».' },
      { title: 'Alternativa economica (regionali):', body: 'Se il Glacier Express è esaurito o in pausa, i regionali Matterhorn Gotthard Bahn e RhB percorrono gli stessi binari, gratis con lo Swiss Travel Pass e senza prenotazione.' },
      { title: 'Ordini il pasto prima:', body: 'I piatti caldi di classe standard sono cucinati a bordo. Ordinarli online evita che finiscano sui treni pieni.' },
      { title: 'Spedizione bagagli:', body: 'Nel viaggio di 8 ore usi la spedizione bagagli da stazione a stazione delle FFS, invece di più valigie nel corridoio.' },
    ],
    faqEyebrow: 'Base viaggiatori', faqTitle: 'Domande frequenti (Gornergrat e Glacier Express)', faqIntro: 'Le domande più cercate su pass, prezzi, posti e meteo in diretta.',
    badgeGorner: 'Gornergrat', badgeGex: 'Glacier Exp.', badgeBoth: 'Entrambi',
    relatedAria: 'Guide collegate', relatedTitle: 'Altra telemetria e guide del Cervino',
    cardLive: 'Belvedere in diretta', cardGornerTitle: 'Gornergrat (3,089 m): webcam e punteggio →', cardGornerBody: 'Webcam Roundshot in tempo reale e chiarezza di vetta mattina/pomeriggio su 10 giorni.',
    cardCompare: 'Confronto', cardCompareTitle: 'Gornergrat o Glacier Paradise →', cardCompareBody: 'Angoli sul Cervino, differenza di quota (794 m) e tenuta al vento.',
    cardClimate: 'Climatologia', cardClimateTitle: 'Mese e ora migliori →', cardClimateBody: '30 anni di visibilità: perché la mattina batte il pomeriggio il 78% dell’anno.',
  }),
  pt: localizeUi(UI_EN, {
    breadcrumbAria: 'Percurso', home: 'Início', breadcrumbCurrent: 'Comboios panorâmicos suíços (Gornergrat e Glacier Express)',
    heroBadge: 'Guia 2026 dos comboios panorâmicos e telemetria em direto',
    h1: 'Horários e bilhetes do Gornergrat | Preço do Glacier Express',
    heroLead: 'O essencial sobre as duas viagens de comboio mais famosas que terminam em Zermatt: o comboio de cremalheira a céu aberto mais alto da Europa até ao [[b|Gornergrat (3,089 m)]] e o lendário [[b|Glacier Express]] de 8 horas até St. Moritz. Compare a visibilidade em direto, o Swiss Travel Pass, os preços e o melhor lado para se sentar.',
    statGornerAlt: 'Altitude do Gornergrat', statGornerDetail: '+1,485 m de subida • 33 min',
    statGexRoute: 'Percurso do Glacier Express', statGexDetail: '291 pontes • 91 túneis',
    statSwissGorner: 'Swiss Pass Gornergrat', statSwissGornerValue: '50% de desconto', statSwissGornerDetail: 'CHF 66 ida e volta (verão)',
    statSwissGex: 'Swiss Pass Glacier Exp.', statSwissGexValue: '100% grátis', statSwissGexDetail: 'Reserva de lugar obrigatória',
    liveAria: 'Telemetria em direto do Gornergrat e do Glacier Express',
    liveTitle: 'Condições de montanha e estado dos comboios hoje',
    liveUpdated: 'Atualizado de 15 em 15 min pela telemetria suíça de alta montanha',
    morning: 'Esta manhã', afternoon: 'Esta tarde', summit: 'Cume', midCloud: 'Nuvem média', wind: 'Vento', ride: 'Viagem', rideGorner: '33 min',
    sitRight: 'Sente-se à direita a subir.',
    gexCardTitle: 'Corredor do Glacier Express', running: 'A circular', paused: 'Em pausa', service: 'Serviço', peakPass: 'Passo', rideGexShort: 'Viagem', swissPass: 'Swiss Pass', seat: 'Lugar', booking: 'Reserva', inSeason: 'Em época', maintenance: 'Manutenção', rideGex: '7 h 45', included: 'Incluído', required: 'Obrigatório', days93: '93 dias',
    navAria: 'Secções', navCompare: 'Comparação lado a lado', navGorner: 'Guia do comboio do Gornergrat', navGex: 'Glacier Express e Excellence Class', navTickets: 'Swiss Travel Pass e bilhetes', navFaq: 'Perguntas frequentes',
    compareTitle: 'Comparação lado a lado', compareIntro: 'Telemetria, logística, cobertura do passe e lugares nas duas viagens.',
    colFeature: 'Aspeto', colGorner: 'Comboio do Gornergrat (Gornergrat Bahn)', colGex: 'Glacier Express',
    rowPurpose: 'Finalidade', purposeGorner: 'Excursão ao cume a 3,089 m de frente para a face leste do Matterhorn', purposeGex: 'Travessia panorâmica transalpina de um dia entre o Valais e a Engadina (St. Moritz)',
    rowRoute: 'Percurso e extremos', rowTime: 'Duração', rowPeak: 'Ponto mais alto', peakGorner: '(cume do Gornergrat)', peakGex: '(passo do Oberalp)',
    rowSwiss: 'Swiss Travel Pass', discount50: 'Desconto de 50%', swissPrices: 'CHF 66 ida e volta no verão / CHF 51 no inverno', freeTicket: 'Bilhete 100% grátis', seatFee: 'Reserva de lugar obrigatória (CHF 39–49)',
    rowEurail: 'Eurail / Interrail', eurailNone: 'Sem desconto (preço inteiro)', eurailFull: 'Bilhete coberto a 100% + reserva de lugar',
    rowSeats: 'Reserva de lugar', notRequired: '[[b|Não é precisa]] (lugar livre; embarque prioritário facultativo CHF 7)', mandatory: '[[amber|OBRIGATÓRIA]] para todos (abre 93 dias antes)',
    rowSeason: 'Época', seasonGorner: '365 dias por ano', seasonGex: 'De meados de dezembro a meados de outubro (pausa de meados de outubro ao início de dezembro)',
    rowSide: 'Melhor lado', sideGorner: '[[b|Lado direito]] a subir desde Zermatt, vista direta para o Matterhorn', sideGex: '[[b|Lado esquerdo]] para a garganta do Reno; vidro panorâmico em toda a carruagem',
    rowDogs: 'Cães e animais', dogsYes: '[[b|Cães permitidos]] (pequenos grátis na caixa; grandes a 50%)', dogsNo: '[[b|Cães NÃO permitidos]] nas carruagens panorâmicas',
    rowDining: 'Refeições', diningGorner: 'Restaurante do 3100 Kulmhotel e bufete self-service no cume', diningGex: 'Menus quentes de vários pratos no lugar; 5 pratos na Excellence Class',
    gornerEyebrow: 'Excursão ao cume', gornerHeading: 'Comboio do Gornergrat (Gornergrat Bahn)', gornerLead: 'O comboio elétrico de cremalheira a céu aberto mais alto da Europa, em serviço contínuo desde 1898.',
    viewCam: 'Ver a câmara e a pontuação do Gornergrat',
    gornerP1: 'O [[b|Gornergrat Bahn (GGB)]] parte da praça da estação de Zermatt (em frente aos CFF) e sobe [[b|1,485 metros em apenas 33 minutos]] até à crista do Gornergrat, a 3,089 metros.',
    gornerP2: 'Na subida, a face leste triangular do Matterhorn mantém-se à vista, a silhueta das caixas de chocolate suíço. No cume há um terraço de 360 graus rodeado por [[b|29 cumes acima de 4,000 metros]], incluindo o Monte Rosa (4,634 m, o cume mais alto da Suíça) e as línguas de gelo do glaciar Gorner.',
    stationStops: 'Paragens e altitudes do Gornergrat:',
    riffelTitle: 'O truque do Riffelsee: saia em Rotenboden',
    riffelBody: 'O bilhete de ida e volta permite paragens intermédias ilimitadas. A descer do cume, saia em [[b|Rotenboden (2,815 m)]] e caminhe 10 minutos até ao lago [[b|Riffelsee]]. Nas manhãs sem vento, antes das 11:00, o Matterhorn reflete-se na água. Depois pode apanhar o comboio seguinte para Zermatt sem custo extra.',
    telemetryTitle: 'Dados rápidos do Gornergrat', returnPrice: 'PREÇO DE IDA E VOLTA 2026', withPass: 'COM SWISS TRAVEL PASS', frequency: 'FREQUÊNCIA', frequencyValue: 'De 24 em 24 minutos (ponta) / 48 min', seating: 'ONDE SE SENTAR', pets: 'ANIMAIS', petsWelcome: 'Cães bem-vindos em todos os comboios', officialTickets: 'Bilhetes oficiais do Gornergrat', halfFareHint: 'Escolha a meia tarifa para os 50% do Swiss Travel Pass',
    gexEyebrow: 'O expresso mais lento do mundo', gexHeading: 'Glacier Express (Zermatt ↔ St. Moritz)', gexLead: 'Uma odisseia panorâmica de 7,5 a 8 horas pelo coração dos Alpes suíços, por 291 pontes.', roofWindows: 'Vidros panorâmicos até ao teto',
    gexP1: 'Conhecido com afeto como o [[em|«expresso mais lento do mundo»]], o [[b|Glacier Express]] liga duas das estâncias alpinas mais prestigiadas da Suíça: [[b|Zermatt]] (no sopé do Matterhorn, no Valais) e [[b|St. Moritz]] (na alta Engadina, nos Grisões).',
    gexP2: 'Em quase 8 horas atravessa três cantões, sobe o [[b|passo do Oberalp (2,033 m / 6,670 ft)]], desce o desfiladeiro calcário da [[b|garganta do Reno (Ruinaulta)]] e passa os arcos de 65 metros do [[b|viaduto de Landwasser]], perto de Filisur.',
    classTitle: 'Classes no Glacier Express:', class2: '2.ª classe', class2Seats: '4 lugares por fila (2+2)', class2Body: 'Teto de vidro, mesas rebatíveis, carrinho de snacks e almoço quente no lugar.', class1: '1.ª classe', class1Seats: '3 lugares por fila (2+1)', class1Body: 'Mais espaço para as pernas, lugares mais largos, carruagem mais calma, tomadas e audioguia.', classEx: 'Excellence Class', classExSeats: 'Disposição 1+1 (janela garantida)', classExBody: 'Concierge, bar de champanhe, menu regional de 5 pratos com vinhos suíços, guia em iPad e chá.',
    alertTitle: 'Reserva de lugar obrigatória (janela de 93 dias)',
    alertBody: 'Mesmo com um [[b|Swiss Travel Pass]] ou um [[b|Eurail]] ilimitados, [[b|NÃO PODE]] entrar no Glacier Express sem lugar reservado. A reserva custa de CHF 39 (época baixa) a CHF 49 (verão) e abre [[b|exatamente 93 dias antes]]. A Excellence Class (apenas 20 lugares) esgota muitas vezes em minutos.',
    gexTelemetry: 'Dados do Glacier Express', journeyDuration: 'DURAÇÃO', durationValue: '7 horas e 45 minutos', swissTicket: 'BILHETE COM SWISS TRAVEL PASS', swissTicketValue: 'Bilhete de comboio 100% grátis', swissTicketNote: '+ reserva obrigatória CHF 39–49', peakElevation: 'PASSO MAIS ALTO', peakElevationValue: 'Passo do Oberalp (2,033 m / 6,670 ft)', bestSideLabel: 'MELHOR LADO', bestSideValue: 'Esquerda para leste (garganta do Reno)', dogsLabel: 'CÃES / ANIMAIS', dogsStrict: 'Estritamente proibidos nas carruagens', pauseLabel: 'PAUSA ANUAL', pauseValue: 'De meados de outubro a meados de dezembro', gexReserve: 'Reservas do Glacier Express', gexReserveHint: 'A reserva obrigatória abre 93 dias antes',
    ticketsTitle: 'Swiss Travel Pass e estratégia de bilhetes (2026)', ticketsIntro: 'Como evitar pagar a mais ou reservar duas vezes nos dois sistemas.',
    strategyGorner: 'Estratégia de bilhetes do comboio do Gornergrat', strategyGex: 'Estratégia de reserva do Glacier Express',
    gornerTips: [
      { title: 'Swiss Travel Pass / meia tarifa:', body: 'Online escolha sempre «50% meia tarifa» para pagar CHF 66 em vez de CHF 132.' },
      { title: 'Horário flexível:', body: 'O bilhete vale para qualquer comboio do dia; a hora exata não é um problema.' },
      { title: 'Swiss Family Card:', body: 'Crianças com menos de 16 anos viajam grátis com os pais. Peça a Family Card grátis ao comprar o Swiss Travel Pass.' },
      { title: 'Veja primeiro a nitidez em direto:', body: 'Não compre com semanas de antecedência bilhetes do Gornergrat não reembolsáveis. Na manhã da viagem consulte o índice em direto de 1 a 10, manhã e tarde.' },
    ],
    gexTips: [
      { title: 'Reserve primeiro, o passe depois:', body: 'Não precisa do número do Swiss Travel Pass para reservar o lugar 93 dias antes. No pagamento escolha «Só lugar / Swiss Pass».' },
      { title: 'Alternativa económica (comboios regionais):', body: 'Se o Glacier Express estiver esgotado ou em pausa, os regionais da Matterhorn Gotthard Bahn e da RhB percorrem os mesmos carris, grátis com o Swiss Travel Pass e sem reserva de lugar.' },
      { title: 'Encomende a refeição antes:', body: 'Os pratos quentes da classe normal são cozinhados a bordo. Encomendá-los online evita que esgotem nas viagens cheias.' },
      { title: 'Expedição de bagagem:', body: 'Na viagem de 8 horas use a expedição de bagagem de estação a estação dos CFF, em vez de várias malas no corredor.' },
    ],
    faqEyebrow: 'Base de viajantes', faqTitle: 'Perguntas frequentes (Gornergrat e Glacier Express)', faqIntro: 'As dúvidas mais procuradas sobre passes, preços, lugares e tempo em direto.',
    badgeGorner: 'Gornergrat', badgeGex: 'Glacier Exp.', badgeBoth: 'Ambos',
    relatedAria: 'Guias relacionados', relatedTitle: 'Mais telemetria e guias do Matterhorn',
    cardLive: 'Miradouro em direto', cardGornerTitle: 'Gornergrat (3,089 m): câmaras e pontuação →', cardGornerBody: 'Webcams Roundshot em tempo real e nitidez do cume de manhã e à tarde durante 10 dias.',
    cardCompare: 'Comparação', cardCompareTitle: 'Gornergrat ou Glacier Paradise →', cardCompareBody: 'Ângulos do Matterhorn, diferença de altitude (794 m) e resistência ao vento.',
    cardClimate: 'Climatologia', cardClimateTitle: 'Melhor mês e hora do dia →', cardClimateBody: '30 anos de visibilidade: porque as manhãs ganham às tardes em 78% do ano.',
  }),
  ko: localizeUi(UI_EN, {
    breadcrumbAria: '탐색 경로', home: '홈', breadcrumbCurrent: '스위스 관광 열차 (고르너그라트 & Glacier Express)',
    heroBadge: '2026 스위스 관광 철도 현장 안내와 실시간 관측',
    h1: '고르너그라트 시각표와 승차권 | Glacier Express 요금',
    heroLead: '체르마트에서 끝나는 가장 유명한 두 열차입니다. 유럽에서 가장 높은 야외 톱니바퀴 열차로 [[b|고르너그라트 (3,089 m)]]까지, 그리고 전설적인 8시간 횡단 열차 [[b|Glacier Express]]로 장크트모리츠까지. 실시간 정상 시야, Swiss Travel Pass, 요금, 앉는 쪽을 비교하세요.',
    statGornerAlt: '고르너그라트 고도', statGornerDetail: '+1,485 m 상승 • 33분',
    statGexRoute: 'Glacier Express 노선', statGexDetail: '다리 291개 • 터널 91개',
    statSwissGorner: 'Swiss Pass 고르너그라트', statSwissGornerValue: '50% 할인', statSwissGornerDetail: '왕복 CHF 66 (여름)',
    statSwissGex: 'Swiss Pass Glacier Exp.', statSwissGexValue: '100% 무료', statSwissGexDetail: '좌석 예약 필요',
    liveAria: '고르너그라트와 Glacier Express 실시간 관측',
    liveTitle: '오늘의 산악 상황과 열차 상태',
    liveUpdated: '스위스 고산 관측으로 15분마다 갱신',
    gornerCardTitle: 'Gornergrat Bahn (3,089 m)',
    morning: '오늘 오전', afternoon: '오늘 오후', summit: '정상', midCloud: '중층 구름', wind: '바람', ride: '운행', rideGorner: '33분',
    sitRight: '올라갈 때는 오른쪽에 앉으세요.',
    gexCardTitle: 'Glacier Express 구간', running: '운행', paused: '운휴', service: '운행', peakPass: '고개', rideGexShort: '소요', swissPass: 'Swiss Pass', seat: '좌석', booking: '예약', inSeason: '운행 시즌', maintenance: '정비', rideGex: '7시간 45분', included: '포함', required: '필수', days93: '93일',
    navAria: '페이지 구역', navCompare: '나란히 비교', navGorner: '고르너그라트 철도 안내', navGex: 'Glacier Express와 Excellence Class', navTickets: 'Swiss Travel Pass와 승차 규칙', navFaq: '자주 묻는 질문',
    compareTitle: '나란히 비교', compareIntro: '두 열차의 실시간 정보, 이동, 패스 적용, 좌석 안내입니다.',
    colFeature: '항목', colGorner: '고르너그라트 철도 (Gornergrat Bahn)', colGex: 'Glacier Express',
    rowPurpose: '주요 목적', purposeGorner: '마터호른 동벽을 보는 3,089 m 정상 나들이', purposeGex: '발레와 엥가딘(장크트모리츠)을 잇는 하루짜리 알프스 횡단',
    rowRoute: '노선과 종점', rowTime: '소요 시간', rowPeak: '최고 고도', peakGorner: '(고르너그라트 정상)', peakGex: '(오버알프 고개)',
    rowSwiss: 'Swiss Travel Pass', discount50: '50% 할인', swissPrices: '여름 왕복 CHF 66 / 겨울 CHF 51', freeTicket: '승차권 100% 무료', seatFee: '좌석 예약 필수 (CHF 39–49)',
    rowEurail: '유레일 / 인터레일', eurailNone: '할인 없음 (정가)', eurailFull: '승차권 100% + 좌석 예약',
    rowSeats: '좌석 예약', notRequired: '[[b|필요 없음]] (자유석, 선택 우선 탑승 CHF 7)', mandatory: '모든 승객 [[amber|필수]] (93일 전 오픈)',
    rowSeason: '운행 시기', seasonGorner: '연중 365일', seasonGex: '12월 중순–10월 중순 (10월 중순–12월 초 휴지)',
    rowSide: '앉기 좋은 쪽', sideGorner: '체르마트에서 오를 때 [[b|오른쪽]], 마터호른이 바로 보임', sideGex: '라인 협곡은 [[b|왼쪽]]. 객차 전체가 파노라마 유리',
    rowDogs: '개와 반려동물', dogsYes: '[[b|개 탑승 가능]] (작은 개는 이동장 무료, 큰 개는 50%)', dogsNo: '파노라마 객차에 [[b|개 탑승 불가]]',
    rowDining: '차내 식사', diningGorner: '3100 Kulmhotel 식당과 정상 셀프 뷔페', diningGex: '좌석에서 따뜻한 코스. Excellence Class는 5코스',
    gornerEyebrow: '정상 산악 나들이', gornerHeading: '고르너그라트 철도 (Gornergrat Bahn)', gornerLead: '1898년부터 계속 운행하는 유럽 최고 야외 전기 톱니바퀴 열차입니다.',
    viewCam: '고르너그라트 실시간 카메라와 점수',
    gornerP1: '[[b|Gornergrat Bahn (GGB)]]는 체르마트 역 광장(SBB 역 맞은편)에서 출발해 [[b|33분 동안 1,485 m]]를 올라 3,089 m 고르너그라트 능선에 닿습니다.',
    gornerP2: '오르는 동안 스위스 초콜릿 상자의 그 삼각 실루엣, 마터호른 동벽이 끊기지 않습니다. 정상 360도 전망대는 [[b|4,000 m가 넘는 봉우리 29개]]에 둘러싸여 있고, 그중에는 몬테로사(4,634 m, 스위스 최고봉)와 고르너 빙하의 얼음 혀가 있습니다.',
    stationStops: '고르너그라트 정차역과 고도:',
    riffelTitle: '리펠제 반영 요령: 로텐보덴에서 내리기',
    riffelBody: '왕복 승차권으로 중간 역에서 얼마든지 내릴 수 있습니다. 정상에서 내려올 때 [[b|Rotenboden (2,815 m)]]에서 내려 10분 걸으면 [[b|Riffelsee]]입니다. 바람 없는 오전 11시 전에는 마터호른이 물에 선명히 비칩니다. 그다음 체르마트행 열차를 추가 요금 없이 탑니다.',
    telemetryTitle: '고르너그라트 핵심 수치', returnPrice: '2026 왕복 요금', withPass: 'SWISS TRAVEL PASS 적용', frequency: '배차', frequencyValue: '24분 간격 (성수기) / 48분', seating: '좌석 전략', pets: '반려동물', petsWelcome: '모든 열차에 개 탑승 가능', officialTickets: '고르너그라트 공식 승차권', halfFareHint: 'Swiss Travel Pass 50%는 반액 옵션을 선택',
    gexEyebrow: '세상에서 가장 느린 급행', gexHeading: 'Glacier Express (체르마트 ↔ 장크트모리츠)', gexLead: '291개 다리를 건너 스위스 알프스 한가운데를 7.5–8시간 달리는 파노라마입니다.', roofWindows: '지붕까지 이어지는 파노라마 창',
    gexP1: '[[em|“세상에서 가장 느린 급행열차”]]로 불리는 [[b|Glacier Express]]는 스위스에서 가장 이름난 두 산악 리조트를 잇습니다. 발레의 마터호른 기슭 [[b|체르마트]]와 그라우뷘덴 고지 엥가딘의 [[b|장크트모리츠]]입니다.',
    gexP2: '거의 8시간 동안 세 칸톤을 지나 [[b|오버알프 고개 (2,033 m / 6,670 ft)]]를 넘고, 석회암 [[b|라인 협곡 (Ruinaulta)]]을 내려가며, 필리주르 근처 65 m 높이의 [[b|란트바서 고가교]]를 건넙니다.',
    classTitle: 'Glacier Express 등급:', class2: '2등', class2Seats: '한 줄 4석 (2+2)', class2Body: '파노라마 지붕 유리, 접이식 테이블, 간식 카트, 좌석 따뜻한 점심.', class1: '1등', class1Seats: '한 줄 3석 (2+1)', class1Body: '다리 공간, 넓은 좌석, 조용한 객차, 개별 콘센트와 오디오 가이드.', classEx: 'Excellence Class', classExSeats: '1+1 (창가 보장)', classExBody: '전용 컨시어지, 샴페인 바, 스위스 와인과 지역 5코스, iPad 가이드, 하이 티.',
    alertTitle: '좌석 예약 필수 (93일 예약 창)',
    alertBody: '무제한 [[b|Swiss Travel Pass]]나 [[b|유레일]]이 있어도 예약 좌석 없이는 Glacier Express에 [[b|탈 수 없습니다]]. 예약은 비수기 CHF 39에서 여름 CHF 49이며 [[b|정확히 93일 전]]에 열립니다. Excellence Class(열차당 20석)는 열리는 몇 분 안에 매진되는 일이 많습니다.',
    gexTelemetry: 'Glacier Express 수치', journeyDuration: '소요 시간', durationValue: '7시간 45분', swissTicket: 'SWISS TRAVEL PASS 승차권', swissTicketValue: '철도 승차권 100% 무료', swissTicketNote: '+ 필수 예약 CHF 39–49', peakElevation: '최고 고개', peakElevationValue: '오버알프 고개 (2,033 m / 6,670 ft)', bestSideLabel: '앉기 좋은 쪽', bestSideValue: '동행 시 왼쪽 (라인 협곡)', dogsLabel: '개 / 반려동물', dogsStrict: '객차 탑승 엄격히 불가', pauseLabel: '연간 정비 휴지', pauseValue: '10월 중순–12월 중순', gexReserve: 'Glacier Express 예약', gexReserveHint: '필수 좌석 예약은 93일 전에 열림',
    ticketsTitle: 'Swiss Travel Pass와 2026 승차 전략', ticketsIntro: '두 스위스 철도에서 중복 예약과 과다 지불을 피하는 방법입니다.',
    strategyGorner: '고르너그라트 승차권 전략', strategyGex: 'Glacier Express 예약 전략',
    gornerTips: [
      { title: 'Swiss Travel Pass / 반액 카드:', body: '온라인에서 항상 «50% Half-Fare»를 고르면 CHF 132 대신 CHF 66입니다.' },
      { title: '시간 유연:', body: '승차권은 그날 어느 열차나 유효합니다. 정확한 출발 시각에 매달릴 필요가 없습니다.' },
      { title: 'Swiss Family Card:', body: '16세 미만 어린이는 부모와 함께 100% 무료입니다. Swiss Travel Pass를 살 때 Family Card를 무료로 신청하세요.' },
      { title: '먼저 실시간 시야를 확인:', body: '환불 불가 고르너그라트 승차권을 몇 주 전에 사지 마세요. 당일 아침 실시간 1–10 오전/오후 지수를 보세요.' },
    ],
    gexTips: [
      { title: '좌석 먼저, 패스는 나중에:', body: '93일 전 좌석 예약에 Swiss Travel Pass 번호는 필요 없습니다. 결제에서 «좌석만 / Swiss Pass»를 고르세요.' },
      { title: '저렴한 대안 (지역 열차):', body: 'Glacier Express가 매진이거나 정비 중이면 Matterhorn Gotthard Bahn과 RhB 지역 열차가 같은 선로를 달립니다. Swiss Travel Pass로 무료이고 좌석 예약도 없습니다.' },
      { title: '식사 미리 주문:', body: '일반석 따뜻한 식사는 차내에서 바로 만듭니다. 온라인 예약이면 붐비는 열차에서 메뉴가 떨어지지 않습니다.' },
      { title: '수하물 탁송:', body: '8시간 여행이면 SBB 역 대 역 수하물 탁송을 써서 통로에 가방을 여러 개 두지 마세요.' },
    ],
    faqEyebrow: '여행자 지식', faqTitle: '자주 묻는 질문 (고르너그라트 & Glacier Express)', faqIntro: '패스, 요금, 좌석, 실시간 날씨에 대해 가장 많이 찾는 질문입니다.',
    badgeGorner: '고르너그라트', badgeGex: 'Glacier Exp.', badgeBoth: '둘 다',
    relatedAria: '관련 안내', relatedTitle: '체르마트 고산 관측과 관련 안내',
    cardLive: '실시간 전망', cardGornerTitle: '고르너그라트 (3,089 m) 라이브 캠과 점수 →', cardGornerBody: '실시간 Roundshot 웹캠과 10일 오전·오후 정상 시야.',
    cardCompare: '비교 안내', cardCompareTitle: '고르너그라트 vs. Glacier Paradise →', cardCompareBody: '마터호른 시야 각도, 고도 차 (794 m), 바람 대응.',
    cardClimate: '기후 자료', cardClimateTitle: '방문하기 좋은 달과 시간 →', cardClimateBody: '30년 시야 통계: 1년의 78%에서 오전이 오후보다 나은 이유.',
  }),
  ja: localizeUi(UI_EN, {
    breadcrumbAria: 'パンくず', home: 'ホーム', breadcrumbCurrent: 'スイスの展望列車（ゴルナーグラートと Glacier Express）',
    heroBadge: '2026年 スイス展望鉄道の現地ガイドとライブ観測',
    h1: 'ゴルナーグラートの時刻と切符 | Glacier Express の料金',
    heroLead: 'ツェルマットが終点の、スイスで最も有名な2つの列車です。ヨーロッパ最高所の屋外ラック式鉄道で [[b|ゴルナーグラート（3,089 m）]] へ。そして8時間の伝説の [[b|Glacier Express]] でサンモリッツへ。ライブの山頂の見え方、Swiss Travel Pass、料金、座る側を比べてください。',
    statGornerAlt: 'ゴルナーグラートの標高', statGornerDetail: '+1,485 m の上り • 33分',
    statGexRoute: 'Glacier Express の経路', statGexDetail: '橋291 • トンネル91',
    statSwissGorner: 'Swiss Pass ゴルナーグラート', statSwissGornerValue: '50%引き', statSwissGornerDetail: '往復 CHF 66（夏）',
    statSwissGex: 'Swiss Pass Glacier Exp.', statSwissGexValue: '100%無料', statSwissGexDetail: '座席予約が必要',
    liveAria: 'ゴルナーグラートと Glacier Express のライブ観測',
    liveTitle: '今日の山の状態と列車の運行',
    liveUpdated: 'スイス高山観測により15分ごとに更新',
    gornerCardTitle: 'Gornergrat Bahn（3,089 m）',
    morning: '今朝', afternoon: '今日の午後', summit: '山頂', midCloud: '中層の雲', wind: '風', ride: '所要', rideGorner: '33分',
    sitRight: '上りは右側に座ってください。',
    gexCardTitle: 'Glacier Express の区間', running: '運行中', paused: '休止', service: '運行', peakPass: '峠', rideGexShort: '所要', swissPass: 'Swiss Pass', seat: '座席', booking: '予約', inSeason: '運行期', maintenance: '整備', rideGex: '7時間45分', included: '込み', required: '必須', days93: '93日',
    navAria: 'ページの区切り', navCompare: '並べて比較', navGorner: 'ゴルナーグラート鉄道ガイド', navGex: 'Glacier Express と Excellence Class', navTickets: 'Swiss Travel Pass と切符のルール', navFaq: 'よくある質問',
    compareTitle: '並べて比較', compareIntro: '2つの列車の観測、移動、パスの適用、座席の目安です。',
    colFeature: '項目', colGorner: 'ゴルナーグラート鉄道（Gornergrat Bahn）', colGex: 'Glacier Express',
    rowPurpose: '主な目的', purposeGorner: 'マッターホルン東壁を望む 3,089 m への山頂行き', purposeGex: 'ヴァレーとエンガディン（サンモリッツ）を一日で結ぶアルプス横断',
    rowRoute: '経路と起終点', rowTime: '所要時間', rowPeak: '最高地点', peakGorner: '（ゴルナーグラート山頂）', peakGex: '（オーバーアルプ峠）',
    rowSwiss: 'Swiss Travel Pass', discount50: '50%割引', swissPrices: '夏の往復 CHF 66／冬 CHF 51', freeTicket: '乗車券100%無料', seatFee: '座席予約は必須（CHF 39–49）',
    rowEurail: 'ユーレイル／インターレイル', eurailNone: '割引なし（正規料金）', eurailFull: '乗車券100%＋座席予約',
    rowSeats: '座席予約', notRequired: '[[b|不要]]（自由席。任意の優先乗車 CHF 7）', mandatory: '全員 [[amber|必須]]（93日前に開始）',
    rowSeason: '運行時期', seasonGorner: '年中無休', seasonGex: '12月中旬から10月中旬（10月中旬から12月上旬は休止）',
    rowSide: '座る側', sideGorner: 'ツェルマットからの上りは [[b|右側]]。マッターホルンが正面', sideGex: 'ライン峡谷は [[b|左側]]。車両全体がパノラマガラス',
    rowDogs: '犬とペット', dogsYes: '[[b|犬は可]]（小型はケージで無料、大型は50%）', dogsNo: 'パノラマ車両では [[b|犬は不可]]',
    rowDining: '車内の食事', diningGorner: '3100 Kulmhotel のレストランと山頂のセルフビュッフェ', diningGex: '席で温かいコース。Excellence Class は5品',
    gornerEyebrow: '山頂への山岳小旅行', gornerHeading: 'ゴルナーグラート鉄道（Gornergrat Bahn）', gornerLead: '1898年から走り続ける、ヨーロッパ最高所の屋外電気ラック式鉄道です。',
    viewCam: 'ゴルナーグラートのライブカメラとスコア',
    gornerP1: '[[b|Gornergrat Bahn（GGB）]] はツェルマット駅前広場（SBB駅の向かいに）から出て、[[b|33分で標高差1,485 m]] を上り、3,089 m のゴルナーグラートの尾根に着きます。',
    gornerP2: '上るあいだ、スイスのチョコレートの箱にある三角の輪郭、マッターホルン東壁が途切れません。山頂の360度の展望台は [[b|4,000 m を超える29の峰]] に囲まれ、モンテローザ（4,634 m、スイス最高峰）とゴルナー氷河の氷舌も含みます。',
    stationStops: 'ゴルナーグラートの停車駅と標高：',
    riffelTitle: 'リッフェルゼーの映り込み：ローテンボーデンで降りる',
    riffelBody: '往復切符なら途中駅で何度でも降りられます。山頂から下りるとき [[b|Rotenboden（2,815 m）]] で降り、10分歩くと [[b|Riffelsee]] です。風のない午前11時前は、マッターホルンが水面にきれいに映ります。そのあと追加料金なしで次のツェルマット行きに乗れます。',
    telemetryTitle: 'ゴルナーグラートの要点', returnPrice: '2026年の往復料金', withPass: 'SWISS TRAVEL PASS 適用', frequency: '間隔', frequencyValue: '24分間隔（繁忙）／48分', seating: '座る位置', pets: 'ペット', petsWelcome: '全列車で犬は歓迎', officialTickets: 'ゴルナーグラート公式の切符', halfFareHint: 'Swiss Travel Pass の50%は半額を選択',
    gexEyebrow: '世界で最も遅い急行', gexHeading: 'Glacier Express（ツェルマット ↔ サンモリッツ）', gexLead: '291の橋を越え、スイスアルプスの真ん中を7.5〜8時間走るパノラマです。', roofWindows: '屋根まで届くパノラマ窓',
    gexP1: '[[em|「世界で最も遅い急行列車」]] と呼ばれる [[b|Glacier Express]] は、スイスで最も格式のある2つのアルペンリゾートを結びます。ヴァレー、マッターホルンのふもとの [[b|ツェルマット]] と、グラウビュンデン高地エンガディンの [[b|サンモリッツ]] です。',
    gexP2: 'およそ8時間で3つのカントンを通り、[[b|オーバーアルプ峠（2,033 m／6,670 ft）]] を越え、石灰岩の [[b|ライン峡谷（Ruinaulta）]] を下り、フィリズール近くの高さ65 m の [[b|ラントヴァッサー高架橋]] を渡ります。',
    classTitle: 'Glacier Express の等級：', class2: '2等', class2Seats: '1列4席（2+2）', class2Body: 'パノラマの屋根ガラス、折りたたみテーブル、軽食カート、席までの温かい昼食。', class1: '1等', class1Seats: '1列3席（2+1）', class1Body: '足元が広く、席も広く、静かな車両。個別のコンセントと音声ガイド。', classEx: 'Excellence Class', classExSeats: '1+1（窓側確約）', classExBody: '専任コンシェルジュ、シャンパンバー、スイスワイン付きの地域料理5品、iPadガイド、ハイティー。',
    alertTitle: '座席予約は必須（93日前から）',
    alertBody: '無制限の [[b|Swiss Travel Pass]] や [[b|ユーレイル]] があっても、予約した座席がなければ Glacier Express には [[b|乗れません]]。予約は閑散期 CHF 39 から夏 CHF 49 で、[[b|ちょうど93日前]] に始まります。Excellence Class（1列車20席）は開始から数分で埋まることが多いです。',
    gexTelemetry: 'Glacier Express の要点', journeyDuration: '所要時間', durationValue: '7時間45分', swissTicket: 'SWISS TRAVEL PASS の乗車券', swissTicketValue: '鉄道の乗車券は100%無料', swissTicketNote: '＋必須予約 CHF 39–49', peakElevation: '最高の峠', peakElevationValue: 'オーバーアルプ峠（2,033 m／6,670 ft）', bestSideLabel: '座る側', bestSideValue: '東行きは左側（ライン峡谷）', dogsLabel: '犬／ペット', dogsStrict: '車両への持ち込みは厳禁', pauseLabel: '年次整備の休止', pauseValue: '10月中旬から12月中旬', gexReserve: 'Glacier Express の予約', gexReserveHint: '必須の座席予約は93日前に開始',
    ticketsTitle: 'Swiss Travel Pass と2026年の切符の考え方', ticketsIntro: '2つのスイスの鉄道で、二重予約や払いすぎを避ける方法です。',
    strategyGorner: 'ゴルナーグラートの切符', strategyGex: 'Glacier Express の予約',
    gornerTips: [
      { title: 'Swiss Travel Pass／半額：', body: 'オンラインでは必ず「50%半額」を選ぶと、CHF 132 ではなく CHF 66 です。' },
      { title: '時刻は柔軟：', body: '切符はその日のどの列車でも有効です。出発時刻を細かく気にする必要はありません。' },
      { title: 'Swiss Family Card：', body: '16歳未満の子どもは親と一緒なら100%無料です。Swiss Travel Pass を買うときに Family Card を無料で申請してください。' },
      { title: '先にライブの見え方を確認：', body: '払い戻し不可のゴルナーグラートの切符を何週間も前に買わないでください。当日の朝、ライブの1〜10（午前／午後）を見てください。' },
    ],
    gexTips: [
      { title: '座席を先に、パスはあと：', body: '93日前の座席予約に Swiss Travel Pass の番号は不要です。支払いでは「座席のみ／Swiss Pass」を選んでください。' },
      { title: '手頃な代替（地域列車）：', body: 'Glacier Express が満席か整備休止なら、Matterhorn Gotthard Bahn と RhB の地域列車が同じ線路を走ります。Swiss Travel Pass で無料、座席予約も不要です。' },
      { title: '食事は事前注文：', body: '普通車の温かい食事は車内で作ります。オンラインで頼むと、混む列車で売り切れにくくなります。' },
      { title: '荷物の転送：', body: '8時間の旅では、通路にスーツケースを重ねず、SBB の駅から駅への荷物転送を使ってください。' },
    ],
    faqEyebrow: '旅の知識', faqTitle: 'よくある質問（ゴルナーグラートと Glacier Express）', faqIntro: 'パス、料金、座席、ライブの天気について、いちばん調べられる質問です。',
    badgeGorner: 'ゴルナーグラート', badgeGex: 'Glacier Exp.', badgeBoth: '両方',
    relatedAria: '関連ガイド', relatedTitle: 'ツェルマットの高山観測と関連ガイド',
    cardLive: 'ライブ展望', cardGornerTitle: 'ゴルナーグラート（3,089 m）ライブカメラとスコア →', cardGornerBody: 'リアルタイムの Roundshot と、10日間の午前・午後の山頂の見え方。',
    cardCompare: '比較ガイド', cardCompareTitle: 'ゴルナーグラートと Glacier Paradise →', cardCompareBody: 'マッターホルンの見る角度、標高差（794 m）、風への強さ。',
    cardClimate: '気候データ', cardClimateTitle: '訪れるのに良い月と時間 →', cardClimateBody: '30年の視界統計。1年の78%で朝が午後に勝つ理由。',
  }),
  zh: localizeUi(UI_EN, {
    breadcrumbAria: '面包屑', home: '首页', breadcrumbCurrent: '瑞士观光列车（戈尔内格拉特与冰河列车）',
    heroBadge: '2026 瑞士观光铁路实地指南与实时遥测',
    h1: '戈尔内格拉特时刻与车票 | 冰河列车票价',
    heroLead: '终点都在采尔马特的两趟最有名的列车：欧洲最高的露天齿轨铁路到 [[b|戈尔内格拉特（3,089 米）]]，以及传奇的 8 小时横贯列车 [[b|冰河列车]] 到圣莫里茨。比较实时峰顶能见度、Swiss Travel Pass、票价和该坐哪一侧。',
    statGornerAlt: '戈尔内格拉特海拔', statGornerDetail: '爬升 1,485 米 • 33 分钟',
    statGexRoute: '冰河列车路线', statGexDetail: '291 座桥 • 91 条隧道',
    statSwissGorner: 'Swiss Pass 戈尔内格拉特', statSwissGornerValue: '五折', statSwissGornerDetail: '往返 CHF 66（夏季）',
    statSwissGex: 'Swiss Pass 冰河列车', statSwissGexValue: '100% 免费', statSwissGexDetail: '必须订座',
    liveAria: '戈尔内格拉特与冰河列车的实时遥测',
    liveTitle: '今日山况与铁路状态',
    liveUpdated: '瑞士高海拔遥测每 15 分钟更新',
    gornerCardTitle: 'Gornergrat Bahn（3,089 米）',
    morning: '今天上午', afternoon: '今天下午', summit: '峰顶', midCloud: '中层云', wind: '风', ride: '车程', rideGorner: '33 分钟',
    sitRight: '上山时坐右侧。',
    gexCardTitle: '冰河列车走廊', running: '运行', paused: '停运', service: '班次', peakPass: '山口', rideGexShort: '车程', swissPass: 'Swiss Pass', seat: '座位', booking: '预订', inSeason: '运营季', maintenance: '检修', rideGex: '7 小时 45 分', included: '已含', required: '必须', days93: '93 天',
    navAria: '页面章节', navCompare: '并排比较', navGorner: '戈尔内格拉特铁路指南', navGex: '冰河列车与 Excellence Class', navTickets: 'Swiss Travel Pass 与购票规则', navFaq: '常见问题',
    compareTitle: '并排比较', compareIntro: '两趟铁路的遥测、行程差别、通票覆盖和座位建议。',
    colFeature: '项目', colGorner: '戈尔内格拉特铁路（Gornergrat Bahn）', colGex: '冰河列车',
    rowPurpose: '主要用途', purposeGorner: '面向马特洪峰东壁、登上 3,089 米的山顶行程', purposeGex: '连接瓦莱与恩加丁（圣莫里茨）的全日高山全景列车',
    rowRoute: '路线与终点', rowTime: '车程', rowPeak: '最高点', peakGorner: '（戈尔内格拉特峰顶）', peakGex: '（上阿尔卑山口）',
    rowSwiss: 'Swiss Travel Pass', discount50: '五折', swissPrices: '夏季往返 CHF 66／冬季 CHF 51', freeTicket: '车票 100% 免费', seatFee: '必须订座（CHF 39–49）',
    rowEurail: '欧铁 / Interrail', eurailNone: '无折扣（全价）', eurailFull: '车票 100% 覆盖＋订座',
    rowSeats: '订座', notRequired: '[[b|不必]]（自由座；可选优先上车 CHF 7）', mandatory: '所有乘客 [[amber|必须]]（提前 93 天开放）',
    rowSeason: '运营季节', seasonGorner: '全年 365 天', seasonGex: '12 月中旬至 10 月中旬（10 月中旬至 12 月初停运）',
    rowSide: '最佳一侧', sideGorner: '从采尔马特上山坐 [[b|右侧]]，正对马特洪峰', sideGex: '莱茵峡谷坐 [[b|左侧]]；整节车厢是全景玻璃',
    rowDogs: '狗与宠物', dogsYes: '[[b|可以带狗]]（小狗在箱内免费；大狗半价）', dogsNo: '全景车厢 [[b|不可带狗]]',
    rowDining: '车上餐饮', diningGorner: '3100 Kulmhotel 餐厅与峰顶自助', diningGex: '座位上的热多道菜；Excellence Class 为五道菜',
    gornerEyebrow: '山顶山岳行程', gornerHeading: '戈尔内格拉特铁路（Gornergrat Bahn）', gornerLead: '欧洲最高的露天电力齿轨铁路，自 1898 年连续运营。',
    viewCam: '查看戈尔内格拉特实时摄像头与评分',
    gornerP1: '[[b|Gornergrat Bahn（GGB）]] 从采尔马特车站广场出发（正对瑞士联邦铁路 SBB），[[b|33 分钟爬升 1,485 米]]，到达海拔 3,089 米的戈尔内格拉特观景山脊。',
    gornerP2: '上行时，瑞士巧克力盒上的三角轮廓、马特洪峰东壁一直在眼前。峰顶是 360 度观景台，周围有 [[b|29 座四千米级山峰]]，包括罗莎峰（4,634 米，瑞士最高峰）和戈尔内冰川的冰舌。',
    stationStops: '戈尔内格拉特车站与海拔：',
    riffelTitle: 'Riffelsee 倒影办法：在 Rotenboden 下车',
    riffelBody: '往返票可以在中间站任意下车。从峰顶下行时在 [[b|Rotenboden（2,815 米）]] 下车，步行 10 分钟到 [[b|Riffelsee]]。无风的上午 11 点前，马特洪峰会完整映在水里。之后可免费搭下一班返回采尔马特。',
    telemetryTitle: '戈尔内格拉特要点', returnPrice: '2026 往返票价', withPass: '持 SWISS TRAVEL PASS', frequency: '班次', frequencyValue: '每 24 分钟（旺季）／48 分钟', seating: '座位策略', pets: '宠物', petsWelcome: '各班列车都欢迎狗', officialTickets: '戈尔内格拉特官方车票', halfFareHint: '选择半价，即 Swiss Travel Pass 的五折',
    gexEyebrow: '世界上最慢的快车', gexHeading: '冰河列车（采尔马特 ↔ 圣莫里茨）', gexLead: '穿过 291 座桥、历时 7.5 到 8 小时的瑞士阿尔卑斯腹地全景旅程。', roofWindows: '延伸到车顶的全景窗',
    gexP1: '人们亲切地称它为 [[em|“世界上最慢的快车”]]。[[b|冰河列车]] 连接瑞士两处最受推崇的高山度假地：瓦莱州马特洪峰脚下的 [[b|采尔马特]]，以及格劳宾登高地恩加丁的 [[b|圣莫里茨]]。',
    gexP2: '近 8 小时的行程经过三个州，翻过 [[b|上阿尔卑山口（2,033 米／6,670 英尺）]]，穿过石灰岩 [[b|莱茵峡谷（Ruinaulta）]]，并驶过菲利苏尔附近 65 米高的 [[b|兰德瓦瑟高架桥]]。',
    classTitle: '冰河列车的车厢等级：', class2: '二等', class2Seats: '每排 4 座（2+2）', class2Body: '全景车顶玻璃、折叠桌、小食推车，以及送到座位的热午餐。', class1: '一等', class1Seats: '每排 3 座（2+1）', class1Body: '腿部空间更大、座位更宽、车厢更安静，有独立插座和语音导览。', classEx: 'Excellence Class', classExSeats: '1+1（保证靠窗）', classExBody: '专属礼宾、香槟吧、配瑞士葡萄酒的五道地方菜、iPad 导览和下午茶。',
    alertTitle: '必须订座（93 天预订窗口）',
    alertBody: '即使持有不限次 [[b|Swiss Travel Pass]] 或 [[b|欧铁通票]]，没有预订座位也 [[b|不能]] 登上冰河列车。订座费淡季 CHF 39 到夏季 CHF 49，并在 [[b|恰好提前 93 天]] 开放。Excellence Class（每列车仅 20 座）常常在开放后几分钟售罄。',
    gexTelemetry: '冰河列车要点', journeyDuration: '行程时长', durationValue: '7 小时 45 分钟', swissTicket: 'SWISS TRAVEL PASS 车票', swissTicketValue: '铁路车票 100% 免费', swissTicketNote: '＋必须订座 CHF 39–49', peakElevation: '最高山口', peakElevationValue: '上阿尔卑山口（2,033 米／6,670 英尺）', bestSideLabel: '最佳一侧', bestSideValue: '向东时坐左侧（莱茵峡谷）', dogsLabel: '狗／宠物', dogsStrict: '车厢内严格不允许', pauseLabel: '年度检修停运', pauseValue: '10 月中旬至 12 月中旬', gexReserve: '冰河列车预订', gexReserveHint: '强制订座提前 93 天开放',
    ticketsTitle: 'Swiss Travel Pass 与 2026 购票策略', ticketsIntro: '如何避免在两套瑞士铁路系统里重复预订或多付钱。',
    strategyGorner: '戈尔内格拉特购票策略', strategyGex: '冰河列车预订策略',
    gornerTips: [
      { title: 'Swiss Travel Pass／半价卡：', body: '网上购票始终选择“50% 半价”，付 CHF 66 而不是 CHF 132。' },
      { title: '时间灵活：', body: '车票当天任意班次有效，不必盯死某一班出发时间。' },
      { title: 'Swiss Family Card：', body: '16 岁以下儿童与父母同行完全免费。购买 Swiss Travel Pass 时免费申领 Family Card。' },
      { title: '先看实时能见度：', body: '不要提前几周购买不可退的戈尔内格拉特车票。出发当天早上查看实时 1–10 的上午／下午指数。' },
    ],
    gexTips: [
      { title: '先订座，通票以后再买：', body: '提前 93 天订座不需要 Swiss Travel Pass 号码。结账时选择“仅座位／Swiss Pass”。' },
      { title: '省钱替代（区域列车）：', body: '如果冰河列车订满或停运检修，Matterhorn Gotthard Bahn 与 RhB 区域列车走同一条线路，持 Swiss Travel Pass 免费，且不必订座。' },
      { title: '提前点餐：', body: '普通车厢的热餐在车上现做。网上预订可以避免繁忙班次售罄。' },
      { title: '行李托运：', body: '8 小时行程请用 SBB 站到站行李托运，不要在过道里拖好几只箱子。' },
    ],
    faqEyebrow: '旅客知识库', faqTitle: '常见问题（戈尔内格拉特与冰河列车）', faqIntro: '关于通票、票价、座位和实时天气，搜索最多的问题。',
    badgeGorner: '戈尔内格拉特', badgeGex: '冰河列车', badgeBoth: '两者',
    relatedAria: '相关指南', relatedTitle: '采尔马特高山遥测与相关指南',
    cardLive: '实时观景', cardGornerTitle: '戈尔内格拉特（3,089 米）实时摄像头与评分 →', cardGornerBody: '实时 Roundshot 摄像头，以及 10 天上午／下午的峰顶能见度。',
    cardCompare: '对照指南', cardCompareTitle: '戈尔内格拉特与冰川天堂 →', cardCompareBody: '比较马特洪峰视角、海拔差（794 米）以及抗风能力。',
    cardClimate: '气候资料', cardClimateTitle: '最适合的月份与一天中的时间 →', cardClimateBody: '30 年能见度统计：为什么一年中 78% 的日子上午胜过下午。',
  }),
  'zh-tw': localizeUi(UI_EN, {
    breadcrumbAria: '導覽路徑', home: '首頁', breadcrumbCurrent: '瑞士觀光列車（戈爾內格拉特與冰河列車）',
    heroBadge: '2026 瑞士觀光鐵路實地指南與即時觀測',
    h1: '戈爾內格拉特時刻與車票｜冰河列車票價',
    heroLead: '終點都在策馬特的兩趟最有名的列車：歐洲最高的露天齒軌鐵路到 [[b|戈爾內格拉特（3,089 公尺）]]，以及傳奇的 8 小時橫貫列車 [[b|冰河列車]] 到聖莫里茨。比較即時峰頂能見度、Swiss Travel Pass、票價，以及該坐哪一側。',
    statGornerAlt: '戈爾內格拉特海拔', statGornerDetail: '爬升 1,485 公尺 • 33 分鐘',
    statGexRoute: '冰河列車路線', statGexDetail: '291 座橋 • 91 條隧道',
    statSwissGorner: 'Swiss Pass 戈爾內格拉特', statSwissGornerValue: '五折', statSwissGornerDetail: '往返 CHF 66（夏季）',
    statSwissGex: 'Swiss Pass 冰河列車', statSwissGexValue: '100% 免費', statSwissGexDetail: '必須訂位',
    liveAria: '戈爾內格拉特與冰河列車的即時觀測',
    liveTitle: '今日山況與鐵路狀態',
    liveUpdated: '瑞士高海拔觀測每 15 分鐘更新',
    gornerCardTitle: 'Gornergrat Bahn（3,089 公尺）',
    morning: '今天上午', afternoon: '今天下午', summit: '峰頂', midCloud: '中層雲', wind: '風', ride: '車程', rideGorner: '33 分鐘',
    sitRight: '上山時坐右側。',
    gexCardTitle: '冰河列車走廊', running: '行駛中', paused: '停駛', service: '班次', peakPass: '山口', rideGexShort: '車程', swissPass: 'Swiss Pass', seat: '座位', booking: '預訂', inSeason: '營運季', maintenance: '檢修', rideGex: '7 小時 45 分', included: '已含', required: '必須', days93: '93 天',
    navAria: '頁面章節', navCompare: '並排比較', navGorner: '戈爾內格拉特鐵路指南', navGex: '冰河列車與 Excellence Class', navTickets: 'Swiss Travel Pass 與購票規則', navFaq: '常見問題',
    compareTitle: '並排比較', compareIntro: '兩趟鐵路的觀測、行程差別、通票涵蓋和座位建議。',
    colFeature: '項目', colGorner: '戈爾內格拉特鐵路（Gornergrat Bahn）', colGex: '冰河列車',
    rowPurpose: '主要用途', purposeGorner: '面向馬特洪峰東壁、登上 3,089 公尺的山頂行程', purposeGex: '連接瓦萊與恩加丁（聖莫里茨）的全日高山全景列車',
    rowRoute: '路線與終點', rowTime: '車程', rowPeak: '最高點', peakGorner: '（戈爾內格拉特峰頂）', peakGex: '（上阿爾卑山口）',
    rowSwiss: 'Swiss Travel Pass', discount50: '五折', swissPrices: '夏季往返 CHF 66／冬季 CHF 51', freeTicket: '車票 100% 免費', seatFee: '必須訂位（CHF 39–49）',
    rowEurail: '歐鐵／Interrail', eurailNone: '沒有折扣（全價）', eurailFull: '車票 100% 涵蓋＋訂位',
    rowSeats: '訂位', notRequired: '[[b|不必]]（自由座；可另買優先上車 CHF 7）', mandatory: '所有乘客 [[amber|必須]]（提前 93 天開放）',
    rowSeason: '營運季節', seasonGorner: '全年 365 天', seasonGex: '12 月中旬到 10 月中旬（10 月中旬到 12 月初停駛）',
    rowSide: '最好的一側', sideGorner: '從策馬特上山坐 [[b|右側]]，正對馬特洪峰', sideGex: '萊茵峽谷坐 [[b|左側]]；整節車廂都是全景玻璃',
    rowDogs: '狗與寵物', dogsYes: '[[b|可以帶狗]]（小狗放箱內免費；大狗半價）', dogsNo: '全景車廂 [[b|不可帶狗]]',
    rowDining: '車上餐飲', diningGorner: '3100 Kulmhotel 餐廳與峰頂自助', diningGex: '座位上的熱多道菜；Excellence Class 是五道菜',
    gornerEyebrow: '山頂的山岳行程', gornerHeading: '戈爾內格拉特鐵路（Gornergrat Bahn）', gornerLead: '歐洲最高的露天電力齒軌鐵路，自 1898 年連續行駛。',
    viewCam: '看戈爾內格拉特即時影像與評分',
    gornerP1: '[[b|Gornergrat Bahn（GGB）]] 從策馬特車站廣場出發（正對瑞士聯邦鐵路 SBB），[[b|33 分鐘爬升 1,485 公尺]]，抵達海拔 3,089 公尺的戈爾內格拉特觀景山脊。',
    gornerP2: '上行時，瑞士巧克力盒上的三角輪廓、馬特洪峰東壁會一直留在眼前。峰頂是 360 度觀景臺，周圍有 [[b|29 座四千公尺級山峰]]，包括羅莎峰（4,634 公尺，瑞士最高峰）和戈爾內冰川的冰舌。',
    stationStops: '戈爾內格拉特車站與海拔：',
    riffelTitle: 'Riffelsee 倒影的辦法：在 Rotenboden 下車',
    riffelBody: '往返票可以在中間站任意下車。從峰頂下行時在 [[b|Rotenboden（2,815 公尺）]] 下車，步行 10 分鐘到 [[b|Riffelsee]]。沒有風的上午 11 點前，馬特洪峰會完整映在水裡。之後可以免費搭下一班回策馬特。',
    telemetryTitle: '戈爾內格拉特要點', returnPrice: '2026 往返票價', withPass: '持 SWISS TRAVEL PASS', frequency: '班次', frequencyValue: '每 24 分鐘（旺季）／48 分鐘', seating: '座位策略', pets: '寵物', petsWelcome: '各班列車都歡迎狗', officialTickets: '戈爾內格拉特官方車票', halfFareHint: '選擇半價，就是 Swiss Travel Pass 的五折',
    gexEyebrow: '世界上最慢的快車', gexHeading: '冰河列車（策馬特 ↔ 聖莫里茨）', gexLead: '穿過 291 座橋、歷時 7.5 到 8 小時的瑞士阿爾卑斯腹地全景旅程。', roofWindows: '延伸到車頂的全景窗',
    gexP1: '大家親切地稱它 [[em|「世界上最慢的快車」]]。[[b|冰河列車]] 連接瑞士兩處最受看重的高山度假地：瓦萊州、馬特洪峰腳下的 [[b|策馬特]]，以及格勞賓登高地恩加丁的 [[b|聖莫里茨]]。',
    gexP2: '近 8 小時的行程經過三個州，翻過 [[b|上阿爾卑山口（2,033 公尺／6,670 英尺）]]，穿過石灰岩的 [[b|萊茵峽谷（Ruinaulta）]]，並駛過菲利蘇爾附近 65 公尺高的 [[b|蘭德瓦瑟高架橋]]。',
    classTitle: '冰河列車的車廂等級：', class2: '二等', class2Seats: '每排 4 座（2+2）', class2Body: '全景車頂玻璃、折疊桌、小食推車，以及送到座位的熱午餐。', class1: '一等', class1Seats: '每排 3 座（2+1）', class1Body: '腿部空間更大、座位更寬、車廂更安靜，有獨立插座和語音導覽。', classEx: 'Excellence Class', classExSeats: '1+1（保證靠窗）', classExBody: '專屬禮賓、香檳吧、配瑞士葡萄酒的五道地方菜、iPad 導覽和下午茶。',
    alertTitle: '必須訂位（93 天預訂窗口）',
    alertBody: '就算持有不限次數的 [[b|Swiss Travel Pass]] 或 [[b|歐鐵通票]]，沒有預訂座位也 [[b|不能]] 登上冰河列車。訂位費淡季 CHF 39 到夏季 CHF 49，並在 [[b|剛好提前 93 天]] 開放。Excellence Class（每列車只有 20 個位子）常常在開放後幾分鐘就賣完。',
    gexTelemetry: '冰河列車要點', journeyDuration: '行程時間', durationValue: '7 小時 45 分鐘', swissTicket: 'SWISS TRAVEL PASS 車票', swissTicketValue: '鐵路車票 100% 免費', swissTicketNote: '＋必須訂位 CHF 39–49', peakElevation: '最高山口', peakElevationValue: '上阿爾卑山口（2,033 公尺／6,670 英尺）', bestSideLabel: '最好的一側', bestSideValue: '往東時坐左側（萊茵峽谷）', dogsLabel: '狗／寵物', dogsStrict: '車廂內嚴格不允許', pauseLabel: '年度檢修停駛', pauseValue: '10 月中旬到 12 月中旬', gexReserve: '冰河列車預訂', gexReserveHint: '強制訂位提前 93 天開放',
    ticketsTitle: 'Swiss Travel Pass 與 2026 購票策略', ticketsIntro: '怎麼避免在兩套瑞士鐵路系統裡重複預訂，或是多付錢。',
    strategyGorner: '戈爾內格拉特購票策略', strategyGex: '冰河列車預訂策略',
    gornerTips: [
      { title: 'Swiss Travel Pass／半價卡：', body: '線上購票始終選擇「50% 半價」，付 CHF 66 而不是 CHF 132。' },
      { title: '時間很彈性：', body: '車票當天任何班次都有效，不必盯死某一班的出發時間。' },
      { title: 'Swiss Family Card：', body: '未滿 16 歲的孩童與父母同行完全免費。購買 Swiss Travel Pass 時可以免費申領 Family Card。' },
      { title: '先看即時能見度：', body: '不要提前幾週購買不能退的戈爾內格拉特車票。出發當天早上再看即時 1–10 的上午／下午指數。' },
    ],
    gexTips: [
      { title: '先訂位，通票以後再買：', body: '提前 93 天訂位不需要 Swiss Travel Pass 號碼。結帳時選擇「僅座位／Swiss Pass」。' },
      { title: '省錢的替代（區間列車）：', body: '如果冰河列車訂滿或停駛檢修，Matterhorn Gotthard Bahn 與 RhB 區間列車走同一條路線，持 Swiss Travel Pass 免費，而且不必訂位。' },
      { title: '餐點先預訂：', body: '普通車廂的熱餐是在車上現做的。線上預訂，比較不會在繁忙班次賣完。' },
      { title: '行李託運：', body: '8 小時的行程請用 SBB 站到站行李託運，不要在走道裡拖好幾只箱子。' },
    ],
    faqEyebrow: '旅客知識庫', faqTitle: '常見問題（戈爾內格拉特與冰河列車）', faqIntro: '關於通票、票價、座位和即時天氣，大家最常搜尋的問題。',
    badgeGorner: '戈爾內格拉特', badgeGex: '冰河列車', badgeBoth: '兩者',
    relatedAria: '相關指南', relatedTitle: '策馬特高山觀測與相關指南',
    cardLive: '即時觀景', cardGornerTitle: '戈爾內格拉特（3,089 公尺）即時影像與評分 →', cardGornerBody: '即時 Roundshot 影像，以及 10 天上午／下午的峰頂能見度。',
    cardCompare: '對照指南', cardCompareTitle: '戈爾內格拉特與冰川天堂 →', cardCompareBody: '比較馬特洪峰視角、海拔落差（794 公尺），以及抗風的程度。',
    cardClimate: '氣候資料', cardClimateTitle: '最合適的月份與一天中的時間 →', cardClimateBody: '30 年能見度統計：為什麼一年裡 78% 的日子，上午比下午好。',
  }),
};

export function getTrains(locale: Locale): typeof TRAINS {
  if (locale === 'en') return TRAINS;
  const pack = TRAIN_TEXT[locale];
  if (!pack) return TRAINS;
  return {
    gornergrat: applyTrain(TRAINS.gornergrat, pack.gornergrat),
    'glacier-express': applyTrain(TRAINS['glacier-express'], pack['glacier-express']),
  };
}

export function getTrainsFaqs(locale: Locale): TrainFaq[] {
  if (locale === 'en') return TRAINS_FAQS;
  const pack = FAQ_TEXT[locale];
  if (!pack) return TRAINS_FAQS;
  return TRAINS_FAQS.map((faq, index) => {
    const text = pack[index];
    if (!text) return faq;
    return { ...faq, question: text.question, answer: text.answer };
  });
}

export function getLocalizedTrainsLiveStatus(
  data: Parameters<typeof getTrainsLiveStatus>[0],
  locale: Locale,
): ReturnType<typeof getTrainsLiveStatus> {
  const result = getTrainsLiveStatus(data);
  if (locale === 'en') return result;
  const pack = LIVE_TEXT[locale];
  if (!pack) return result;
  return {
    ...result,
    gornergrat: {
      ...result.gornergrat,
      status: lookup(pack.status, result.gornergrat.status) as typeof result.gornergrat.status,
      verdictText: lookup(pack.verdict, result.gornergrat.verdictText),
    },
    glacierExpress: {
      ...result.glacierExpress,
      operatingStatusLabel: lookup(pack.operating, result.glacierExpress.operatingStatusLabel),
      oberalpPassStatus: lookup(pack.oberalp, result.glacierExpress.oberalpPassStatus),
      regionalAlternative: lookup(pack.regional, result.glacierExpress.regionalAlternative),
      seatAvailabilityNotice: lookup(pack.seat, result.glacierExpress.seatAvailabilityNotice),
    },
  };
}

export function getTrainsComparisonUi(locale: Locale): TrainsComparisonUi {
  return UI[locale] ?? UI_EN;
}
