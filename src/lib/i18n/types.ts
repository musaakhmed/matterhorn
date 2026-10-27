export interface Dictionary {
  common: {
    siteName: string;
    siteTagline: string;
    liveScore: string;
    zermattTime: string;
    switchViewpoint: string;
    selectLanguage: string;
    allViewpoints: string;
    guides: string;
    widgetApi: string;
    refresh: string;
    loading: string;
    updatedJustNow: string;
    updatedMinutesAgo: string;
    wordmarkShort: string;
    today: string;
    ski: string;
    trains: string;
    updating: string;
    themeAppearance: string;
    howThisScoreWorks: string;
    backToTop: string;
  };
  navigation: {
    gornergratTitle: string;
    gornergratElevation: string;
    gornergratAspect: string;
    gornergratTransport: string;
    glacierTitle: string;
    glacierElevation: string;
    glacierAspect: string;
    glacierTransport: string;
    sunneggaTitle: string;
    sunneggaPlaceTitle: string;
    sunneggaElevation: string;
    sunneggaAspect: string;
    sunneggaFace: string;
    sunneggaTransport: string;
    riffelseeTitle: string;
    riffelseeElevation: string;
    riffelseeFace: string;
    riffelseeTransport: string;
    zermattVillageTitle?: string;
    zermattVillageElevation?: string;
    zermattVillageAspect?: string;
    villageTransport: string;
    sameForecast: string;
    scenicTrains: string;
  };
  hero: {
    verdictAria: string;
    visibilityIndex: string;
    activeNow: string;
    morningLabel: string;
    afternoonLabel: string;
    midCloudLabel: string;
    guideDispatchTitle: string;
    bestUpcomingBlock: string;
    answerWords: {
      emerald: string;
      amber: string;
      orange: string;
      rose: string;
    };
    statuses: {
      visible: string;
      partiallyVisible: string;
      barelyVisible: string;
      notVisible: string;
    };
  };
  viewpointSwitcher: {
    title: string;
    subtitle: string;
    selectVantagePoint: string;
  };
  contingency: {
    title: string;
    subtitle: string;
    badge: string;
    museumTitle: string;
    museumBadge: string;
    museumDesc: string;
    gorgeTitle: string;
    gorgeBadge: string;
    gorgeDesc: string;
    spaTitle: string;
    spaBadge: string;
    spaDesc: string;
  };
  timeline: {
    title: string;
    subtitle: string;
    dayCol: string;
    morningCol: string;
    afternoonCol: string;
    peakCol: string;
    cloudsCol: string;
    today: string;
    tomorrow: string;
    daysOfWeek: string[]; // Sun, Mon, Tue, Wed, Thu, Fri, Sat
  };
  metrics: {
    title: string;
    subtitle: string;
    weighting: string;
    midCloud: {
      title: string;
      layer: string;
      desc: string;
      warning: string;
    };
    wind: {
      title: string;
      layer: string;
      desc: string;
      calm: string;
      gale: string;
    };
    freezing: {
      title: string;
      layer: string;
      desc: string;
    };
    humidity: {
      title: string;
      layer: string;
      desc: string;
      warning: string;
    };
  };
  webcams: {
    title: string;
    subtitle: string;
    badge: string;
    tabs: {
      gornergrat: string;
      rothorn: string;
      trockenerSteg: string;
      kirchbruecke: string;
    };
    fullScreen: string;
    refreshFeed: string;
    opticalSensorNote: string;
    seePeak: string;
    looksRight: string;
    looksWrong: string;
  };
  historical: {
    title: string;
    subtitle: string;
    monthCol: string;
    clarityCol: string;
    seasonCol: string;
    months: string[];
    insightTitle: string;
    insightDesc: string;
    seasonTags: {
      winter: string;
      shoulder: string;
      summer: string;
    };
  };
  sectorGuide: {
    title: string;
    subtitle: string;
    bestFor: string;
    elevation: string;
    transport: string;
  };
  scoring: {
    title: string;
    description: string;
    bannerCloudLink: string;
    tiers: {
      crisp: { range: string; label: string; caption: string };
      partial: { range: string; label: string; caption: string };
      barely: { range: string; label: string; caption: string };
      sockedIn: { range: string; label: string; caption: string };
    };
  };
  faq: {
    title: string;
    badge: string;
  };
  guidesPromo: {
    title: string;
    desc: string;
    cta: string;
  };
  widgetPromo: {
    title: string;
    desc: string;
    cta: string;
  };
  footer: {
    tagline: string;
    dataSource: string;
    copyright: string;
    privacy: string;
    terms: string;
    updatedEvery: string;
    viewpointsColumn: string;
    allViewpointsHub: string;
    travelColumn: string;
    guidesColumn: string;
    developersColumn: string;
  };
  homeStatus: {
    webcam: string;
    cervinia: string;
    trainsRunning: string;
    trainsPaused: string;
  };
  skiPage: {
    h1: string;
    snowEyebrow: string;
    snowTitle: string;
    snowNote: string;
    passEyebrow: string;
    passTitle: string;
  };
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}
