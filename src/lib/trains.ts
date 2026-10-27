import { VisibilityApiResponse } from './types';

export interface TrainOverview {
  id: 'gornergrat' | 'glacier-express';
  name: string;
  germanName: string;
  tagline: string;
  type: string;
  route: string;
  distance: string;
  duration: string;
  elevationLow: number; // in meters
  elevationHigh: number; // in meters
  peakPointName: string;
  highlights: string[];
  swissPassCoverage: {
    status: '50% Discount' | '100% Free Ticket (Reservation Required)';
    shortBadge: string;
    description: string;
  };
  eurailCoverage: {
    status: string;
    description: string;
  };
  seatReservation: {
    required: boolean;
    cost: string;
    advanceBooking: string;
    note: string;
  };
  ticketPricing2026: {
    standardAdultReturn: string;
    swissPassPrice: string;
    halfFarePrice: string;
    childrenPolicy: string;
  };
  bestSideToSit: {
    direction: string;
    side: string;
    reason: string;
  };
  dogPolicy: {
    allowed: boolean;
    details: string;
  };
  luggagePolicy: string;
  dining: string;
  seasonality: {
    schedule: string;
    annualMaintenance: string;
    bestMonths: string;
  };
  topStations: {
    name: string;
    elevation: string;
    highlight: string;
  }[];
  seoKeywords: string[];
}

export const TRAINS: Record<'gornergrat' | 'glacier-express', TrainOverview> = {
  gornergrat: {
    id: 'gornergrat',
    name: 'Gornergrat Railway',
    germanName: 'Gornergrat Bahn (GGB)',
    tagline: "Europe's Highest Open-Air Cogwheel Railway",
    type: 'Alpine Cogwheel Electric Mountain Rail',
    route: 'Zermatt (1,604 m) ↔ Gornergrat Summit (3,089 m)',
    distance: '9.3 km (5.8 miles)',
    duration: '33 minutes each way',
    elevationLow: 1604,
    elevationHigh: 3089,
    peakPointName: 'Gornergrat Observation Terrace (3,089 m)',
    highlights: [
      'Unobstructed front-row view of the iconic Matterhorn East Face ("Toblerone" profile)',
      'Hop-off access at Rotenboden (2,815 m) for the famous 10-minute Riffelsee mirror reflection walk',
      'Panoramic summit overlook across the Gorner Glacier and 29 peaks exceeding 4,000 meters',
      'Home to 3100 Kulmhotel Gornergrat, Europe’s highest-altitude hotel with astronomical observatories',
      'Runs 365 days a year with frequent 24-minute interval departures in peak seasons',
    ],
    swissPassCoverage: {
      status: '50% Discount',
      shortBadge: '50% Off with Swiss Travel Pass',
      description:
        'The Swiss Travel Pass and Swiss Half Fare Card grant a 50% discount on standard Gornergrat return and single tickets. It is NOT 100% free with the pass.',
    },
    eurailCoverage: {
      status: 'No Discount',
      description: 'Eurail and Interrail passes do NOT offer discounts on the Gornergrat Bahn. Standard tickets must be purchased.',
    },
    seatReservation: {
      required: false,
      cost: 'Free seating (Optional CHF 7 priority boarding pass)',
      advanceBooking: 'Tickets valid for any departure on the selected calendar date',
      note: 'Seat reservations are not required. Trains run frequently every 24–48 minutes. Optional priority boarding guarantees first choice of window seats.',
    },
    ticketPricing2026: {
      standardAdultReturn: 'CHF 132 (Peak Summer) / CHF 102 (Winter)',
      swissPassPrice: 'CHF 66 (Peak Summer) / CHF 51 (Winter)',
      halfFarePrice: 'CHF 66 (Peak Summer) / CHF 51 (Winter)',
      childrenPolicy:
        'Children under 6 travel free. Ages 6–15 travel free with parents holding a Swiss Family Card (otherwise 50% discount).',
    },
    bestSideToSit: {
      direction: 'Ascending from Zermatt to Gornergrat',
      side: 'Right side of the carriage (Starboard)',
      reason:
        'Sitting on the right side ascending delivers continuous, escalating views of the Matterhorn pyramid as the cogwheel climbs through the larch forests and alpine meadows.',
    },
    dogPolicy: {
      allowed: true,
      details:
        'Dogs of all sizes are welcome on board the Gornergrat Bahn. Small dogs (up to 30 cm shoulder height) in containers travel free; larger dogs travel at half adult fare.',
    },
    luggagePolicy:
      'Standard backpacks, ski gear, and luggage can be brought aboard free of charge. Dedicated ski and luggage racks are available in each carriage.',
    dining:
      'Sumptuous dining at 3100 Kulmhotel Gornergrat (panorama restaurant "vis-à-vis" & self-service), plus alpine restaurants at Riffelberg, Riffelalp, and Rotenboden.',
    seasonality: {
      schedule: 'Operates 365 days a year',
      annualMaintenance: 'Continuous year-round service (no prolonged seasonal shutdown)',
      bestMonths: 'July–September for snow-free Riffelsee mirror hikes; December–March for winter ski and snowshoeing panorama',
    },
    topStations: [
      { name: 'Zermatt Bahnhof', elevation: '1,604 m', highlight: 'Valley terminus opposite the main Swiss SBB railway station' },
      { name: 'Findelbach', elevation: '1,770 m', highlight: 'High stone viaduct crossing over the rushing Findelbach gorge' },
      { name: 'Riffelalp', elevation: '2,211 m', highlight: 'Gateway to five-star Riffelalp Resort and historic summer tramway' },
      { name: 'Riffelberg', elevation: '2,582 m', highlight: 'Winter ski hub, historic mountain hotel & direct Matterhorn view terrace' },
      { name: 'Rotenboden', elevation: '2,815 m', highlight: 'Starting point for the famous 10-minute walk to Riffelsee mirror lake' },
      { name: 'Gornergrat Summit', elevation: '3,089 m', highlight: '3100 Kulmhotel, astronomical domes, Chapel of St. Bernhard & 360° glacier deck' },
    ],
    seoKeywords: [
      'Gornergrat Bahn',
      'Gornergrat Railway',
      'Zermatt to Gornergrat train',
      'Gornergrat train tickets',
      'Gornergrat ticket price 2026',
      'Gornergrat Swiss Travel Pass discount',
      'Gornergrat timetable schedule',
      'Riffelsee train stop',
      'Gornergrat elevation altitude',
      'Gornergrat best side to sit',
    ],
  },
  'glacier-express': {
    id: 'glacier-express',
    name: 'Glacier Express',
    germanName: 'Glacier Express (GEX)',
    tagline: 'The World’s Slowest Express Train',
    type: 'Trans-Alpine Panoramic Scenic Railway',
    route: 'Zermatt (Valais) ↔ St. Moritz / Davos (Graubünden)',
    distance: '291 km (181 miles) across 291 bridges & 91 tunnels',
    duration: 'Approximately 7 hours 45 minutes',
    elevationLow: 585, // Chur (approx 585m)
    elevationHigh: 2033, // Oberalp Pass
    peakPointName: 'Oberalp Pass (2,033 m / 6,670 ft)',
    highlights: [
      'Travels across 291 soaring viaducts and through 91 alpine tunnels through the Swiss Alps',
      'Spectacular crossing of the Landwasser Viaduct (65m high limestone bridge leading directly into a cliff tunnel)',
      'Glides through the dramatic Rhine Gorge ("Ruinaulta"), known as the Swiss Grand Canyon',
      'Reaches its high point at Oberalp Pass (2,033 m), the headwaters of the Rhine River',
      'Large curved panoramic glass windows reaching into the roof for continuous alpine sky views',
      'Offers ultra-exclusive Excellence Class with dedicated concierge, guaranteed window seat & 5-course menu',
    ],
    swissPassCoverage: {
      status: '100% Free Ticket (Reservation Required)',
      shortBadge: '100% Ticket Covered by Swiss Travel Pass',
      description:
        'The journey ticket is 100% covered by the Swiss Travel Pass and Eurail Pass. However, a SEAT RESERVATION is MANDATORY for all passengers and requires a separate fee.',
    },
    eurailCoverage: {
      status: '100% Ticket Covered (Reservation Required)',
      description: 'Eurail and Interrail global passes fully cover the rail ticket for 1st or 2nd class. Mandatory seat reservation fee applies.',
    },
    seatReservation: {
      required: true,
      cost: 'CHF 39 (Low Season) / CHF 49 (Peak Summer) for 1st/2nd Class; Excellence Class supplement CHF 470',
      advanceBooking: 'Reservations open 93 days in advance (essential to book on day 93 for peak dates)',
      note: 'Reservations are mandatory. Even with an unlimited Swiss Travel Pass, you cannot board without a confirmed seat reservation ticket.',
    },
    ticketPricing2026: {
      standardAdultReturn: 'CHF 159 (2nd Class one-way) / CHF 272 (1st Class one-way) + seat reservation',
      swissPassPrice: 'CHF 0 for train ticket + CHF 39–49 seat reservation fee',
      halfFarePrice: '50% off standard ticket + full seat reservation fee',
      childrenPolicy:
        'Children under 6 travel free without a seat. Ages 6–15 travel free with Swiss Family Card but MUST pay the mandatory seat reservation fee.',
    },
    bestSideToSit: {
      direction: 'Zermatt to St. Moritz (Eastbound)',
      side: 'Left side for Rhine Gorge, Right side for Oberalp Pass ascent',
      reason:
        'Eastbound trains offer the best view of the Rhine Gorge from the left side, while ascending the Oberalp Pass affords grander panoramas from the right. Carriages have 360° panorama glass, ensuring views from every seat.',
    },
    dogPolicy: {
      allowed: false,
      details:
        'Dogs and pets are NOT permitted in the panoramic carriages of the Glacier Express (unlike regular Swiss regional trains), due to catering and passenger comfort regulations.',
    },
    luggagePolicy:
      'Large luggage racks located at the end of each coach and overhead racks for carry-on bags. Fast luggage forwarding between Zermatt and St. Moritz stations is available via SBB.',
    dining:
      'Freshly prepared multi-course alpine meals served directly at your seat (pre-booking recommended). In Excellence Class, a champagne welcome, 5-course regional gourmet lunch with wine pairings, afternoon tea, and snacks are fully included.',
    seasonality: {
      schedule: 'Winter and Summer season schedules (Runs roughly Dec 15 to mid-October)',
      annualMaintenance: 'Annual maintenance pause from mid-October to early December (no Glacier Express trains run)',
      bestMonths: 'January–March for deep snow wonderland over Oberalp Pass; June–September for wildflower meadows & alpine lakes',
    },
    topStations: [
      { name: 'Zermatt', elevation: '1,604 m', highlight: 'Alpine terminus at the foot of the Matterhorn' },
      { name: 'Brig', elevation: '678 m', highlight: 'Historic rail junction in the Rhone Valley with Stockalper Palace' },
      { name: 'Andermatt', elevation: '1,437 m', highlight: 'Heart of the Swiss Alps connecting the Urseren Valley' },
      { name: 'Oberalp Pass', elevation: '2,033 m', highlight: 'Highest point of the line, passing the Oberalp lighthouse' },
      { name: 'Disentis / Mustér', elevation: '1,130 m', highlight: 'Historic Benedictine monastery and locomotive switch' },
      { name: 'Chur', elevation: '585 m', highlight: 'Oldest city in Switzerland, gateway to the Rhine Gorge' },
      { name: 'Filisur', elevation: '1,080 m', highlight: 'Crossing the world-famous 65-meter Landwasser Viaduct' },
      { name: 'St. Moritz', elevation: '1,775 m', highlight: 'Glamorous Engadin resort on the shore of Lake St. Moritz' },
    ],
    seoKeywords: [
      'Glacier Express',
      'Glacier Express tickets 2026',
      'Glacier Express Swiss Travel Pass',
      'Glacier Express Excellence Class',
      'Glacier Express seat reservation fee',
      'Glacier Express route map',
      'Glacier Express duration timetable',
      'Zermatt to St Moritz train',
      'Landwasser Viaduct Glacier Express',
      'World slowest express train Switzerland',
    ],
  },
};

export interface TrainFaq {
  question: string;
  answer: string;
  train: 'gornergrat' | 'glacier-express' | 'both';
}

export const TRAINS_FAQS: TrainFaq[] = [
  {
    train: 'gornergrat',
    question: 'Is the Gornergrat Railway free with the Swiss Travel Pass?',
    answer:
      'No. The Swiss Travel Pass does not provide free travel on the Gornergrat Bahn. Instead, pass holders receive a generous 50% discount off standard full-fare return and one-way tickets (e.g. paying approx. CHF 66 instead of CHF 132 in summer). The Swiss Half Fare Card also gives 50% off.',
  },
  {
    train: 'glacier-express',
    question: 'Is the Glacier Express covered by the Swiss Travel Pass?',
    answer:
      'Yes, the rail journey ticket itself is 100% free with a valid Swiss Travel Pass or Eurail Pass (matching your class of travel). However, a SEAT RESERVATION is MANDATORY for all passengers and requires a separate fee of CHF 39 in low season or CHF 49 in high summer. You must book this reservation in advance before boarding.',
  },
  {
    train: 'both',
    question: 'Can I do both the Glacier Express and the Gornergrat Railway in one trip?',
    answer:
      'Yes, they connect seamlessly! Both trains terminate at Zermatt Bahnhof. The most popular itinerary is taking the Glacier Express from St. Moritz or Chur into Zermatt in the afternoon, spending the night in the village, and taking the Gornergrat Bahn cogwheel train up to 3,089m the following morning when visibility and Matterhorn reflections at Riffelsee are clearest.',
  },
  {
    train: 'gornergrat',
    question: 'Do I need a seat reservation for the Gornergrat Railway?',
    answer:
      'No, seat reservations are not required on the Gornergrat Bahn. Standard tickets are flexible and valid on any train throughout your booked day. Departures leave every 24 to 48 minutes from early morning until evening. An optional "Priority Boarding" pass can be purchased for CHF 7 if you want guaranteed first entry onto the train.',
  },
  {
    train: 'glacier-express',
    question: 'How far in advance should I book the Glacier Express?',
    answer:
      'Glacier Express seat reservations open exactly 93 days in advance. For peak summer months (July–August) and winter holiday seasons, panoramic window seats—and especially the ultra-exclusive Excellence Class (only 20 seats per train)—often sell out within hours of opening. It is strongly advised to book on the exact 93-day mark.',
  },
  {
    train: 'glacier-express',
    question: 'What is Glacier Express Excellence Class and is it worth it?',
    answer:
      'Excellence Class is one of the most luxurious rail experiences in the world. Configured with a 1+1 layout where every single seat is a panoramic window seat, it includes a dedicated train concierge, a champagne reception, a gourmet 5-course regional meal with paired Swiss wines, tea time, an exclusive Glacier Bar, and an interactive iPad guide. The seat surcharge is CHF 470 in addition to a 1st Class ticket or pass.',
  },
  {
    train: 'gornergrat',
    question: 'Which side of the Gornergrat train has the best view?',
    answer:
      'Always sit on the RIGHT side of the carriage when traveling uphill from Zermatt to Gornergrat (and on the LEFT side when descending back down). As the train winds through the pine forests and ascends past Riffelalp, the right-hand windows offer uninterrupted, ascending vistas of the Matterhorn pyramid.',
  },
  {
    train: 'glacier-express',
    question: 'Are dogs or pets allowed on the Glacier Express?',
    answer:
      'No. Dogs and other pets are strictly not permitted on the Glacier Express panoramic carriages (except certified guide dogs for blind passengers), due to onboard dining regulations and the 8-hour continuous travel time. In contrast, dogs are welcomed on the Gornergrat Bahn.',
  },
  {
    train: 'gornergrat',
    question: 'Can you hop off at intermediate stations like Riffelsee with a Gornergrat ticket?',
    answer:
      'Yes! A standard Gornergrat return ticket allows you to get off at any intermediate station (Findelbach, Riffelalp, Riffelberg, or Rotenboden) and re-board a later train in the same direction. The most famous stop is Rotenboden (2,815m), which is a gentle 10-minute downhill walk to the Riffelsee alpine lake where the Matterhorn is reflected in calm water.',
  },
  {
    train: 'glacier-express',
    question: 'Does the Glacier Express operate all year round?',
    answer:
      'No. While the Gornergrat Bahn operates 365 days a year, the Glacier Express pauses service every autumn for annual fleet and track maintenance from roughly mid-October until mid-December (winter season starts mid-December). During this period, regular regional trains still run the same tracks between Zermatt, Brig, Andermatt, and St. Moritz.',
  },
];

/**
 * Extracts live telemetry summary for the Gornergrat Bahn and Glacier Express
 */
export function getTrainsLiveStatus(data?: VisibilityApiResponse) {
  const gornergrat = data?.viewpoints.gornergrat;

  // Gornergrat live evaluation
  const gornergratScore = gornergrat?.currentScore ?? 9;
  const gornergratBadge = gornergrat?.currentBadgeColor ?? 'emerald';
  const gornergratStatus = gornergrat?.currentStatus ?? 'Visible';
  const gornergratTemp = gornergrat?.metrics ? `${Math.round(15 - (3089 / 1000) * 6.5)}°C` : '2°C';
  const gornergratCloudMid = gornergrat?.metrics.cloudCoverMid ?? 10;
  const gornergratWind = gornergrat?.metrics.windSpeedKmh ?? 12;

  // Glacier Express live operating context
  // The train runs roughly Dec 15 - Oct 15
  const now = new Date();
  const month = now.getMonth(); // 0 = Jan, 9 = Oct, 10 = Nov, 11 = Dec
  const date = now.getDate();
  const isMaintenancePeriod = (month === 9 && date >= 15) || month === 10 || (month === 11 && date < 15);

  return {
    gornergrat: {
      score: gornergratScore,
      badge: gornergratBadge,
      status: gornergratStatus,
      tempEstimated: gornergratTemp,
      cloudMid: gornergratCloudMid,
      windKmh: gornergratWind,
      todayAmScore: gornergrat?.today.morning.score ?? 9,
      todayPmScore: gornergrat?.today.afternoon.score ?? 8,
      isOptimalNow: gornergratScore >= 7,
      verdictText:
        gornergratScore >= 8
          ? 'Exceptional visibility at 3,089 m: Clear view of Matterhorn & Riffelsee.'
          : gornergratScore >= 6
          ? 'Good visibility with scattered ridge clouds. Great viewing windows.'
          : 'Summit obscured by clouds. Consider checking webcams before departure.',
    },
    glacierExpress: {
      isOperating: !isMaintenancePeriod,
      operatingStatusLabel: isMaintenancePeriod ? 'Annual Maintenance Pause' : 'Normal Winter/Summer Schedule Active',
      statusBadgeColor: isMaintenancePeriod ? 'amber' : 'emerald',
      oberalpPassStatus: 'Oberalp Pass (2,033 m): Open & Scenic Rail Corridor Active',
      regionalAlternative: isMaintenancePeriod
        ? 'Regional Matterhorn Gotthard Bahn & RhB trains run the identical scenic route daily.'
        : 'Daily panoramic departures operating between Zermatt and St. Moritz.',
      seatAvailabilityNotice: 'Reservations open 93 days in advance; high-demand dates require prompt booking.',
    },
  };
}
