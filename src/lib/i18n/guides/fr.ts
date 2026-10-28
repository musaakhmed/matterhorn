import { GuideTranslation } from '../guides';

export const frGuides: Record<string, GuideTranslation> = {
  'gornergrat-vs-glacier-paradise': {
    title: 'Gornergrat vs Matterhorn Glacier Paradise : Quel est le meilleur point de vue sur le Cervin ?',
    shortTitle: 'Gornergrat vs Glacier Paradise',
    description: 'Altitude, train à crémaillère contre téléphérique, angle de vue et météo : le comparatif complet entre les deux sommets emblématiques de Zermatt.',
    category: 'Viewpoints',
    heroStat: {
      label: 'Dénivelé',
      value: '794 m',
      detail: 'Gornergrat (3 089 m) vs Petit Cervin (3 883 m)',
    },
    keyTakeaways: [
      'Le Gornergrat (3 089 m) offre la silhouette pyramidale légendaire de la face Est (le profil "Toblerone") et résiste bien mieux aux tempêtes de vent.',
      'Le Matterhorn Glacier Paradise (3 883 m) vous élève près de 800 mètres plus haut sur le plateau glaciaire et révèle la face Sud/Ouest plus abrupte.',
      'En raison des effets de Fœhn et des ondes orographiques, un sommet affiche souvent 8/10 de visibilité pendant que l’autre est à 4/10 : comparez toujours les deux scores avant d’acheter vos billets.',
      'Si vous ne devez choisir qu’une seule excursion pour admirer la forme classique du Cervin, privilégiez le Gornergrat par le train à crémaillère.',
    ],
    comparisonTable: {
      caption: 'Comparatif direct : Gornergrat vs Matterhorn Glacier Paradise',
      headers: ['Critère', 'Gornergrat (3 089 m)', 'Matterhorn Glacier Paradise (3 883 m)'],
      rows: [
        [
          'Angle sur le Cervin',
          'Face Est classique et arête du Hörnli (silhouette "Toblerone")',
          'Faces Sud et Ouest abruptes à la frontière italienne',
        ],
        [
          'Mode de transport',
          'Train à crémaillère panoramique (33 min depuis Zermatt)',
          'Télécabines 3S et téléphériques via Furi / Trockener Steg (45 min)',
        ],
        [
          'Résistance au vent',
          'Excellente — Le train à crémaillère circule même par vents forts',
          'Modérée — Les câbles à 3 883 m ferment dès que le Fœhn dépasse 50 km/h',
        ],
        [
          'Meilleure lumière',
          '06:00–11:00 CET (Matin et soleil direct sur la face Est)',
          '11:00–16:00 CET (Soleil zénithal et illumination de l’après-midi)',
        ],
        [
          'Reflet dans un lac',
          'Oui — Lac de Riffelsee (arrêt Rotenboden, de juin à octobre)',
          'Détour possible via Schwarzsee (2 583 m)',
        ],
        [
          'Sensibilité à l’altitude',
          'Risque faible à modéré (3 089 m)',
          'Air raréfié très perceptible lors d’une montée rapide (3 883 m)',
        ],
      ],
    },
    sections: [
      {
        id: 'matterhorn-angle',
        heading: '1. La silhouette du Cervin : Pyramide classique contre falaise haute-alpine',
        paragraphs: [
          'Les voyageurs qui découvrent Zermatt sont souvent surpris : depuis le Glacier Paradise (Petit Cervin), la montagne présente un aspect totalement différent de celui visible depuis le village ou le Gornergrat.',
          'Depuis le Gornergrat à 3 089 mètres, votre regard plonge au-dessus du glacier du Gorner vers les faces Est et Nord divisées par l’arête acérée du Hörnli. C’est la célèbre pyramide connue dans le monde entier. Depuis le Glacier Paradise à 3 883 mètres, situé contre la frontière italienne, vous contemplez le flanc méridional : la montagne paraît plus trapue, massive et austère.',
        ],
        proTip: {
          label: 'Avis du photographe',
          text: 'Pour le cliché postal classique — particulièrement avec le reflet miroir du lac Riffelsee à Rotenboden — le Gornergrat est sans égal.',
        },
      },
      {
        id: 'weather-differences',
        heading: '2. Pourquoi les scores de visibilité divergent entre 3 089 m et 3 883 m',
        paragraphs: [
          'La raison pour laquelle isthematterhornvisible.com calcule deux scores distincts tient aux microclimats contrastés entre les deux belvédères.',
          'Lorsque le Fœhn humide remonte d’Italie par le Val Tournenche, les nuages franchissent le col du Théodule (3 300 m) et enveloppent d’abord le Petit Cervin (3 883 m), alors que le Gornergrat, abrité plus à l’Est, bénéficie souvent de 2 à 3 heures de plein soleil supplémentaires. À l’inverse, en hiver lors d’inversions thermiques sous 3 000 m, le Glacier Paradise s’élève au-dessus d’une mer de nuages immaculée.',
        ],
        bulletPoints: [
          {
            bold: 'Nuages d’altitude moyenne (3 000 m–4 000 m) :',
            text: 'Traversent directement la ligne de mire et comptent pour 60 % de notre score de visibilité.',
          },
          {
            bold: 'Fermetures dues au vent :',
            text: 'Des rafales de Fœhn supérieures à 50 km/h interrompent souvent les câbles de Trockener Steg, tandis que le train du Gornergrat continue d’opérer sur ses rails.',
          },
        ],
      },
      {
        id: 'ticket-strategy',
        heading: '3. Stratégie billetterie : Ne réservez jamais des semaines à l’avance',
        paragraphs: [
          'Les forfaits d’excursion en haute montagne à Zermatt sont chers (de 90 à plus de 220 CHF selon la saison et les réductions Swiss Travel Pass / Demi-tarif), mais les capacités ne sont jamais saturées pour les piétons.',
          'Attendez la veille au soir ou le matin même de votre montée : consultez notre indice de visibilité AM/PM en direct et nos webcams Roundshot. N’achetez vos billets que si le score atteint 7/10 ou plus.',
        ],
      },
    ],
    faqs: [
      {
        question: 'De quel côté s’asseoir dans le train du Gornergrat ?',
        answer:
          'Placez-vous du côté droit dans le sens de la montée depuis Zermatt. Le Cervin reste visible au premier plan pendant la quasi-totalité des 33 minutes de trajet.',
      },
      {
        question: 'Peut-on combiner le Gornergrat et le Glacier Paradise le même jour ?',
        answer:
          'Oui, grâce au Zermatt Peak Pass, mais uniquement par journée notée 9/10 ou 10/10 sans nuages. Commencez par le Gornergrat à 08:00 pour la lumière matinale, puis rejoignez le Glacier Paradise vers midi.',
      },
      {
        question: 'Quel sommet choisir par temps mitigé ?',
        answer:
          'Si les deux scores sont inférieurs à 4/10, restez dans la vallée et gardez votre budget. S’il s’agit d’une nappe de stratus bas (< 2 800 m), le Glacier Paradise (3 883 m) émergera plus sûrement au-dessus de la couche.',
      },
    ],
  },

  'best-time-to-see-matterhorn': {
    title: 'Météo de Zermatt par mois | Meilleur moment pour le Cervin',
    shortTitle: 'Meilleur mois et heure',
    description: 'Statistiques météorologiques complètes : pourquoi décembre et janvier affichent 88%+ de ciel pur tandis que les après-midis d’été se couvrent de cumulus.',
    category: 'Climatology',
    heroStat: {
      label: 'Fenêtre idéale',
      value: '06:00–10:30',
      detail: 'Le matin (AM) surpasse l’après-midi (PM) 78 % de l’année',
    },
    keyTakeaways: [
      'Décembre (89 %) et janvier (88 %) enregistrent les probabilités quotidiennes les plus fortes de sommet parfaitement dégagé.',
      'Juin (48 %) et juillet (52 %) affichent la visibilité continue la plus basse en raison des cumulus de convection thermique d’après-midi.',
      'Quelle que soit la saison, la plage matinale (06:00–11:00 CET) est considérablement plus limpide que l’après-midi (12:00–18:00 CET).',
      'Septembre et octobre ("l’automne doré") réunissent sentiers de randonnée déneigés et 72 à 79 % de ciel immaculé.',
    ],
    sections: [
      {
        id: 'morning-vs-afternoon',
        heading: '1. La règle d’or à Zermatt : Le matin l’emporte toujours sur l’après-midi',
        paragraphs: [
          'S’il n’y avait qu’une consigne à retenir : réglez votre réveil tôt. Au printemps, en été et au début de l’automne, le Cervin s’éveille souvent sous un ciel d’azur limpide à 06:30, pour finir entièrement masqué par des cumulus bourgeonnants vers 13:30.',
          'Dès que le soleil échauffe les parois sombres du Mattertal, l’air chaud remonte les pentes (brises anabatiques). En dépassant l’isotherme 0 °C vers 3 000 mètres, l’humidité se condense directement sur les crêtes. Notre tableau de bord scinde chaque journée en deux plages pour que vous ne manquiez pas la clarté de l’aube.',
        ],
        proTip: {
          label: 'Stratégie premier train',
          text: 'Prenez le train du Gornergrat de 07:00 ou 07:36 en été pour atteindre le lac Riffelsee avant que la brise diurne ne trouble le miroir d’eau.',
        },
      },
      {
        id: 'seasonal-breakdown',
        heading: '2. Bilan de la visibilité saison par saison',
        paragraphs: [
          'On imagine souvent l’été comme la saison la plus propice. Or, en haute montagne, l’air froid contient beaucoup moins d’humidité et supprime la turbulence convective.',
        ],
        bulletPoints: [
          {
            bold: 'Hiver (nov–fév • 84 %–89 % de clarté) :',
            text: 'Anticyclones froids et stables procurant une netteté cristalline sans nuages de chaleur, souvent jusqu’au coucher du soleil.',
          },
          {
            bold: 'Fin de printemps & début d’été (mai–juil • 48 %–58 % de clarté) :',
            text: 'La fonte des neiges humidifie la vallée et génère des nuages dès la mi-journée. Sorties matinales impératives.',
          },
          {
            bold: 'Automne (sept–oct • 72 %–79 % de clarté) :',
            text: 'Les nuits fraîches calment la convection tandis que les mélèzes dorent la vallée : la période royale pour la photographie.',
          },
        ],
      },
      {
        id: 'zermatt-weather-december',
        heading: 'Météo de Zermatt en décembre',
        paragraphs: [
          'Décembre est le mois le plus clair sur 30 ans, avec 89 % de chances de voir le sommet du Cervin un jour donné. L’air froid et stable ne forme presque pas de cumulus l’après-midi.',
          'Le village est sous la neige et les lacs sont gelés : c’est un mois pour regarder et skier, pas pour les reflets. Pour la semaine de Noël, voir le [guide de Noël à Zermatt](/guides/christmas-in-zermatt-matterhorn). La page du mois est [Météo de Zermatt en décembre](/guides/zermatt-weather-december).',
        ],
      },
      {
        id: 'zermatt-weather-september',
        heading: 'Météo de Zermatt en septembre',
        paragraphs: [
          'Septembre est clair environ 72 % des jours. Les nuits plus fraîches coupent les thermiques de l’après-midi qui gâchent juin et juillet, et les mélèzes dorent autour de la face est.',
          'Les sentiers sont encore sans neige et le Riffelsee est liquide. C’est le mois du reflet du Cervin depuis Sunnegga ou Rotenboden. Partez au lever du soleil. La page du mois est [Météo de Zermatt en septembre](/guides/zermatt-weather-september).',
        ],
      },
      {
        id: 'zermatt-weather-may',
        heading: 'Météo de Zermatt en mai',
        paragraphs: [
          'Mai est un mois de transition. La probabilité de ciel clair reste dans la fourchette de fin de printemps, 48–58 %, et la seule fenêtre fiable est le matin. L’humidité de la fonte nourrit les cumulus dès le début d’après-midi.',
          'Le Riffelsee est encore gelé en mai. Gardez la photo miroir pour fin juin. Un matin clair sert au Gornergrat ou au pont du village ; l’après-midi se passe dans la vallée. La page du mois est [Météo de Zermatt en mai](/guides/zermatt-weather-may).',
        ],
      },
      {
        id: 'how-many-days',
        heading: '3. Combien de jours prévoir à Zermatt pour garantir la vue ?',
        paragraphs: [
          'Sur la base des courbes de probabilité sur 30 ans, une seule nuit en juillet n’offre qu’une chance sur deux d’apercevoir le sommet. Prévoir 3 matinées complètes élève la probabilité d’au moins une fenêtre à score ≥ 8/10 à plus de 88 % en été et 98 % en automne/hiver.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quel est le mois idéal pour contempler le Cervin sans nuages ?',
        answer:
          'Décembre (89 %) et janvier (88 %) caracolent en tête. Pour randonner sans neige avec une excellente visibilité, visez la fin septembre et octobre (72 %–79 %).',
      },
      {
        question: 'À quelle heure le soleil éclaire-t-il le sommet à l’aube ?',
        answer:
          'La pointe de la face Est s’embrase 5 à 10 minutes avant le lever officiel dans la vallée : vers 05:30 en juin, 06:50 en septembre et 08:00 en décembre.',
      },
    ],
  },

  'zermatt-cloudy-rainy-day-guide': {
    title: 'Que faire à Zermatt quand le Cervin est dans les nuages (Guide mauvais temps)',
    shortTitle: 'Guide jours de pluie et brouillard',
    description: 'Indice de visibilité inférieur à 4/10 ? Économisez vos 100+ CHF de téléphérique dans le brouillard et profitez des gorges, musées et spas de Zermatt.',
    category: 'Bad Weather',
    heroStat: {
      label: 'Économie réalisée',
      value: 'CHF 110+',
      detail: 'Par personne en évitant une montée blanche à 1/10',
    },
    keyTakeaways: [
      'N’achetez jamais de forfait pour les sommets si notre indice de visibilité est ≤ 4/10 : vous vous retrouveriez immergé dans un épais brouillard blanc.',
      'Vérifiez s’il s’agit d’une simple inversion thermique : parfois le village (1 608 m) est sous la grisaille tandis que les sommets à 3 089 m baignent dans le soleil.',
      'Les gorges de la Gorner (Gornerschlucht) sont encore plus spectaculaires sous un ciel couvert grâce aux chutes d’eau grondantes et à la roche serpentinite turquoise.',
      'Le musée Zermatlantis et les spas alpins du village transforment une journée pluvieuse en moment mémorable.',
    ],
    sections: [
      {
        id: 'check-inversion-first',
        heading: '1. Inversion ou vrai mauvais temps : vérifiez la couche nuageuse',
        paragraphs: [
          'Avant de renoncer aux sommets, observez la répartition des nuages sur notre tableau de bord. Si la couche basse (2 000 m) affiche 90 % mais que les étages moyen et haut restent sous 15 %, le village est prisonnier d’une inversion thermique.',
          'Dans ce cas précis, le train ou la télécabine crèvera le plafond cotonneux pour vous déposer en plein ciel bleu au-dessus d’une spectaculaire mer de brouillard. Jetez un coup d’œil aux webcams pour confirmer.',
        ],
        proTip: {
          label: 'Vérification webcam',
          text: 'Si les nuages moyens dépassent 75 % et que la webcam du Gornergrat est blanche, restez dans la vallée.',
        },
      },
      {
        id: 'valley-alternatives',
        heading: '2. Les meilleures activités dans la vallée avec un score de 1/10 à 4/10',
        paragraphs: [
          'Quand une perturbation synoptique s’abat sur les Alpes valaisannes, préservez votre budget pour les jours clairs et profitez du village :',
        ],
        bulletPoints: [
          {
            bold: 'Zermatlantis (Musée du Cervin) :',
            text: 'Sous la place de l’église, reconstitution du Zermatt d’antan et exposition de la corde brisée lors de la dramatique première ascension de 1865.',
          },
          {
            bold: 'Gorges de la Gorner (Gornerschlucht) :',
            text: 'À 20 minutes de marche du centre. Passerelles en bois suspendues au-dessus des eaux tumultueuses d’un vert émeraude saisissant.',
          },
          {
            bold: 'Vieux village du Hinterdorf :',
            text: 'Raccards et greniers en mélèze vieux de 500 ans montés sur piliers à rondelles de pierre : superbe rendu sous une lumière douce et pluvieuse.',
          },
          {
            bold: 'Spa thermal et fondue valaisanne :',
            text: 'Après-midi détente dans l’un des grands spas hôteliers du village, suivi d’une fondue au fromage d’alpage et aux truffes.',
          },
        ],
      },
      {
        id: 'day-trip-escape',
        heading: '3. L’échappée microclimatique en train dans la plaine du Rhône (45–70 min)',
        paragraphs: [
          'Comme les 4 000 bloquent l’humidité au Sud, la plaine du Rhône (Viège, Brigue, Sion) est fréquemment ensoleillée quand Zermatt essuie des averses. Avec le Swiss Travel Pass, rejoignez Brigue en 1 heure pour visiter le château Stockalper ou vous délasser aux thermes de Brigerbad.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Peut-on se faire rembourser un billet de remontée en cas de brouillard ?',
        answer:
          'Non. Les compagnies de Zermatt ne remboursent aucun billet pour cause de mauvaise visibilité une fois édité. Vérifiez toujours la météo en gare avant d’acheter.',
      },
      {
        question: 'Les gorges de la Gorner restent-elles ouvertes sous la pluie ?',
        answer:
          'Oui, durant toute la saison estivale (de mai à octobre). Prévoyez de bonnes chaussures et une veste imperméable en raison des embruns.',
      },
    ],
  },

  'best-matterhorn-photo-viewpoints': {
    title: 'Les meilleurs spots photo du Cervin et levers de soleil à Zermatt',
    shortTitle: 'Spots photo & levers de soleil',
    description: 'Emplacements exacts, temps de marche et angles d’éclairage : Kirchbrücke, Stellisee, Riffelsee, Findeln et Mürini passés au crible.',
    category: 'Photography',
    heroStat: {
      label: 'Lacs à reflets',
      value: '2 537 m & 2 757 m',
      detail: 'Stellisee (Blauherd) et Riffelsee (Rotenboden)',
    },
    keyTakeaways: [
      'Le pont de l’église (Kirchbrücke) est le spot gratuit n°1 pour immortaliser le sommet flamboyant à l’aube.',
      'Le lac Stellisee (2 537 m) intègre des rochers au premier plan ; le Riffelsee (2 757 m) offre le reflet miroir le plus grandiose.',
      'Pour un reflet parfait, le vent doit être inférieur à 12 km/h : vérifiez la vitesse du vent sur notre tableau de bord.',
      'Pour combiner les toits en bardeaux de mélèze et le Cervin, montez 10 minutes vers le belvédère de Mürini/Riedweg.',
    ],
    comparisonTable: {
      caption: 'Fiche repère des meilleurs spots photo de Zermatt',
      headers: ['Belvédère', 'Altitude', 'Accès depuis Zermatt', 'Meilleure lumière'],
      rows: [
        [
          'Kirchbrücke (Pont de l’église)',
          '1 615 m',
          '5 min à pied de la gare (Gratuit)',
          '15 min avant le lever du soleil (Alpenglow)',
        ],
        [
          'Mürini / Riedweg',
          '1 710 m',
          '12 min de montée à pied (Gratuit)',
          'Heure bleue et aurore (Chalets et mont)',
        ],
        [
          'Riffelsee (Rotenboden)',
          '2 757 m',
          '28 min de train Gornergrat + 5 min de marche',
          '07:30–10:00 CET (Miroir d’eau par vent calme)',
        ],
        [
          'Stellisee (Blauherd)',
          '2 537 m',
          'Funiculaire Sunnegga + télécabine Blauherd + 20 min',
          '08:30–11:00 CET ou coucher de soleil',
        ],
        [
          'Hameau de Findeln',
          '2 050 m',
          '35 min de descente depuis Sunnegga',
          'Milieu de matinée (Chalets séculaires et fleurs)',
        ],
      ],
    },
    sections: [
      {
        id: 'village-sunrise',
        heading: '1. Les spots gratuits du village : Kirchbrücke et Mürini',
        paragraphs: [
          'Nul besoin d’un titre de transport pour réussir vos clichés. Le soleil se levant à l’Est, ses premiers rayons enflamment le sommet tandis que le village sommeille encore dans une pénombre bleutée.',
          'Rendez-vous sur le Kirchbrücke au-dessus de la Mattervispa 20 minutes avant l’heure officielle. Pour fuir la cohue des trépieds sur le pont, empruntez le chemin goudronné montant vers le Riedweg (point de vue de Mürini), d’où les toitures traditionnelles guident le regard vers la cime.',
        ],
        proTip: {
          label: 'Alerte lever de soleil',
          text: 'Vérifiez à 05:30 notre score matinal : des cirrus fins (20–35 %) intensifient les teintes pourpres, alors que des nuages moyens au-delà de 50 % masquent l’embrasement.',
        },
      },
      {
        id: 'mirror-lakes',
        heading: '2. Stellisee contre Riffelsee : Quel lac alpin privilégier ?',
        paragraphs: [
          'Zermatt recèle deux lacs d’altitude célébrissimes pour leurs reflets. Deux conditions demeurent incontournables : le dégel du plan d’eau (mi-juin à mi-octobre) et un vent nul (< 12 km/h).',
        ],
        bulletPoints: [
          {
            bold: 'Riffelsee (2 757 m via Rotenboden) :',
            text: 'À 5 minutes à pied de la gare de Rotenboden. Le train circulant dès 07:00, vous y accédez avant la levée des brises thermiques. Astuce : marchez 100 m de plus vers le petit étang inférieur en cas de clapotis.',
          },
          {
            bold: 'Stellisee (2 537 m via Sunnegga–Blauherd) :',
            text: 'Reconnaissable à ses rochers affleurants au premier plan. Comme les télécabines ouvrent plus tard (vers 08:30), choisissez un jour où le vent est inférieur à 10 km/h.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'À quelle période les lacs Riffelsee et Stellisee sont-ils gelés ?',
        answer:
          'Situés au-dessus de 2 500 m, ils sont pris par les glaces de novembre à début juin. Les reflets liquides ne s’observent que de fin juin à octobre.',
      },
      {
        question: 'Pourquoi n’y avait-il aucun reflet malgré le ciel bleu ?',
        answer:
          'Une simple brise de 15 km/h suffit à rider la surface et dissoudre le miroir. Surveillez l’indicateur de vent sur notre site et rejoignez la berge abritée sous le vent.',
      },
    ],
  },

  'matterhorn-banner-cloud-fohn-wind': {
    title: 'Pourquoi le Cervin a-t-il souvent un nuage à son sommet ? (Physique du Fœhn)',
    shortTitle: 'Nuage en bannière & Fœhn',
    description: 'La physique atmosphérique derrière le célèbre panache sommital : comment le Fœhn du Sud crée ce drapeau blanc par ciel pur et comment nous le prévoyons.',
    category: 'Meteorology',
    heroStat: {
      label: 'Altitude sommet',
      value: '4 478 m',
      detail: 'La pyramide isolée provoque une dépression sous le vent',
    },
    keyTakeaways: [
      'La géométrie pyramidale du Cervin agit comme une aile d’avion face aux courants d’altitude, générant un vortex de basse pression sur sa face sous le vent.',
      'L’air aspiré vers le haut se refroidit par détente adiabatique et condense la vapeur en un nuage en bannière stationnaire rattaché à l’arête.',
      'Les applications météo classiques indiquent "Ensoleillé / 0 % pluie" à Zermatt (1 608 m) alors que les 500 derniers mètres de la pyramide sont masqués.',
      'Notre algorithme applique une pénalité dédiée sur l’humidité moyenne et les vecteurs de Fœhn du Sud (180°–270° ≥ 35 km/h) pour anticiper ces panaches.',
    ],
    sections: [
      {
        id: 'banner-cloud-physics',
        heading: '1. Les lois de la physique derrière le nuage en bannière du Cervin',
        paragraphs: [
          'Chaque voyageur à Zermatt assiste un jour à cette énigme : le ciel suisse est d’un bleu sans tâche, sauf au sommet du Cervin d’où s’étire un panache blanc semblable à la fumée d’un volcan.',
          'Contrairement aux nuages ordinaires qui défilent, la bannière se crée et se détruit continuellement sur place. La pyramide abrupte de 4 478 m oblige le flux d’air à la contourner vivement. Sur la face protégée sous le vent, le décrochage aérodynamique engendre une dépression marquée.',
          'L’air plus humide sous-jacent est aspiré vers le haut, se détend, passe sous le point de rosée et se transforme instantanément en gouttelettes. Quelques centaines de mètres plus loin, l’air redescend, se réchauffe et le nuage s’évapore aussitôt.',
        ],
        proTip: {
          label: 'Interpréter la bannière',
          text: 'Si le panache s’étire vers le nord en direction de Zermatt, le Fœhn d’Italie pousse en altitude et le temps se dégrade souvent sous 12 à 24 heures. S’il pointe au sud, l’air sec du nord résiste.',
        },
      },
      {
        id: 'fohn-wind-effect',
        heading: '2. Pourquoi les applications météo standard échouent à Zermatt',
        paragraphs: [
          'Les applications grand public sur smartphone modélisent les conditions pour le fond de vallée à 1 608 mètres, où l’air est doux, sec et abrité.',
          'Près de 3 000 mètres de dénivelé plus haut, les courants de la haute troposphère imposent leur loi. C’est pourquoi isthematterhornvisible.com interroge les couches atmosphériques directement à 3 089 m et 3 883 m avec un malus Fœhn au-delà de 35 km/h.',
        ],
        bulletPoints: [
          {
            bold: 'Nuages moyens (Pondération 60 %) :',
            text: 'Situés entre 3 000 et 4 000 m, ils coupent directement la vue entre les belvédères et le sommet.',
          },
          {
            bold: 'Nuages bas (Pondération 25 %) :',
            text: 'Affectent la vision depuis le village, mais sont souvent surmontés depuis le Gornergrat.',
          },
          {
            bold: 'Cirrus élevés (Pondération 15 %) :',
            text: 'Les voiles de cristaux de glace au-dessus de 5 000 m ne masquent que très rarement la silhouette.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Le Cervin est-il invisible en présence d’un nuage en bannière ?',
        answer:
          'En général non : la bannière ne flotte que d’un côté de l’arête, laissant 70 à 85 % de la pyramide parfaitement visible (score de 6/10 ou 7/10). Lors de violents épisodes de Fœhn, elle peut néanmoins épaissir en un véritable mur compact.',
      },
      {
        question: 'Pourquoi le nuage disparaît-il durant la nuit ?',
        answer:
          'L’arrêt de l’échauffement solaire interrompt les ascendances thermiques qui alimentent le vortex en humidité. C’est pourquoi le sommet est souvent limpide à l’aube et au crépuscule.',
      },
    ],
  },

  'zurich-geneva-to-zermatt-day-trip': {
    title: 'Train Zurich–Zermatt | Horaires, changement à Viège',
    shortTitle: 'Excursion depuis Zurich & Genève',
    description: 'Correspondances CFF à Viège, durées et règle de décision Go/No-Go pour votre excursion d’une journée depuis Zurich (3h 14m) ou Genève (3h 45m).',
    category: 'Day Trips',
    heroStat: {
      label: 'Temps de train A/R',
      value: '6,5 – 7,5 heures',
      detail: '3h 14m l’aller depuis Zurich HB • 3h 45m depuis Genève',
    },
    keyTakeaways: [
      'Une excursion à Zermatt depuis Zurich ou Genève impose 6,5 à 7,5 heures de train : inoubliable par score ≥ 8/10, mais un gouffre financier regrettable sous 4/10.',
      'Même en partant à 06:30, vous n’atteindrez Zermatt que vers 10:00 : votre créneau tombe en milieu de journée, surveillez donc à la fois les scores AM et PM.',
      'En été, les cumulus bourgeonnent dès 13:00 : dès la sortie du train, montez immédiatement au Gornergrat avant de visiter le village.',
      'Si le score matinal est ≤ 5/10, profitez de votre Swiss Travel Pass pour bifurquer vers Lucerne/Rigi ou Montreux et réservez Zermatt pour un jour limpide.',
    ],
    comparisonTable: {
      caption: 'Liaisons ferroviaires CFF vers Zermatt',
      headers: ['Gare de départ', 'Durée aller', 'Correspondance', 'Départ idéal', 'Arrivée Zermatt'],
      rows: [
        ['Zurich HB', '3h 14m', '1 changement à Viège/Visp (7–9 min quai à quai)', '06:02 ou 07:02 CET', '09:14 ou 10:14 CET'],
        ['Genève Cornavin', '3h 45m', '1 changement à Viège (IR90 vers train MGB)', '05:50 ou 06:24 CET', '09:51 ou 10:14 CET'],
        ['Berne', '2h 10m', '1 changement à Viège (via tunnel de base)', '07:07 ou 08:07 CET', '09:14 ou 10:14 CET'],
        ['Bâle CFF', '3h 12m', '1 changement à Viège', '06:03 ou 06:56 CET', '09:14 ou 10:14 CET'],
        ['Interlaken Est', '2h 18m', '2 changements à Spiez & Viège', '07:00 ou 08:00 CET', '09:14 ou 10:14 CET'],
      ],
    },
    sections: [
      {
        id: 'go-no-go-matrix',
        heading: '1. La règle de décision de 06:00 avant de monter à bord',
        paragraphs: [
          'La faute classique des visiteurs est de réserver à l’avance une excursion figée depuis Zurich ou Genève. Zermatt est lové dans une vallée alpine du Sud coupée de la météo du Plateau suisse : il peut pleuvoir à Zurich pendant que le Cervin brille sous un ciel pur — ou l’inverse.',
          'Consultez nos scores AM/PM à 06:00 avant de quitter l’hôtel :',
        ],
        bulletPoints: [
          {
            bold: 'GO — Scores AM & PM entre 8/10 et 10/10 :',
            text: 'Montez dans le train sans hésiter ! Un puissant anticyclone garantit une vue parfaite toute la journée.',
          },
          {
            bold: 'GO MATINAL — Score AM 8–10/10, puis baisse à 5–6/10 en PM :',
            text: 'Très fréquent de mai à août. Ne partez qu’avec le premier train (06:02 de Zurich / 06:24 de Genève) et grimpez au Gornergrat dès 09:30/10:15 AVANT de déjeuner.',
          },
          {
            bold: 'NO-GO — Scores AM & PM ≤ 4/10 :',
            text: 'Annulez ou reportez. Traverser la Suisse pendant 7 heures pour regarder une nappe blanche à 3 089 m n’en vaut jamais la peine.',
          },
        ],
        proTip: {
          label: 'Secret de correspondance à Viège',
          text: 'Aucune panique pour les 7 minutes à Viège : les trains rouges du Matterhorn Gotthard Bahn vous attendent juste en face. Prenez place à GAUCHE pour les vues les plus saisissantes sur les gorges.',
        },
      },
      {
        id: 'perfect-day-trip-itinerary',
        heading: '2. L’itinéraire parfait : Les sommets le matin, le village ensuite',
        paragraphs: [
          'Les nuages se formant presque toujours l’après-midi, inversez le programme touristique : ne gâchez pas la clarté matinale dans les boutiques de la Bahnhofstrasse.',
          'Dès votre arrivée à 09:14 ou 10:14, traversez l’esplanade (60 mètres) jusqu’à la gare du Gornergrat. En haut à 3 089 m, la face Est resplendit au soleil matinal. En redescendant vers midi, marquez l’arrêt à Rotenboden pour photographier le Cervin dans le lac Riffelsee. À 13:30, regagnez le village pour déjeuner, flâner sur le Kirchbrücke et admirer les raccards du Hinterdorf.',
        ],
      },
      {
        id: 'gornergrat-vs-glacier-daytrip',
        heading: '3. Gornergrat contre Glacier Paradise lors d’une journée chronométrée',
        paragraphs: [
          'Pour un aller-retour dans la journée, le Gornergrat surclasse systématiquement le Glacier Paradise (3 883 m). Sa gare est immédiatement en face de l’arrivée CFF, vous épargnant 15 minutes de marche ou de bus électrique jusqu’au fond du village.',
          'De plus, passer de Zurich (408 m) à 3 883 m en un matin inflige un saut barométrique violent souvent source de céphalées, tandis que le Gornergrat (3 089 m) s’avère bien plus tolérable tout en offrant le profil Toblerone tout au long du trajet.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Le Swiss Travel Pass est-il valable pour aller à Zermatt ?',
        answer:
          'Oui ! Le Swiss Travel Pass (et la carte journalière dégriffée CFF) couvre 100 % du trajet jusqu’à Zermatt (y compris la ligne à voie étroite depuis Viège). Il octroie également 50 % de rabais sur le Gornergrat et le Glacier Paradise.',
      },
      {
        question: 'Peut-on faire l’excursion d’une journée en hiver ?',
        answer:
          'Tout à fait : de novembre à février, la météo alpine offre la plus haute fréquence de ciel clair (84–89 %). N’oubliez pas que le soleil se couche vers 16:45 en décembre, d’où l’intérêt de partir à 06:02 ou 07:02.',
      },
      {
        question: 'Quel est le dernier train pour rentrer sur Zurich ou Genève ?',
        answer:
          'Les trains partent toutes les 30 à 60 minutes jusqu’à environ 20:37 (arrivée Zurich HB vers 00:05, Genève vers 00:20). La plupart des visiteurs repartent à 16:37, 17:37 ou 18:37 après l’alpenglow sur le Kirchbrücke.',
      },
    ],
  },
  'christmas-in-zermatt-matterhorn': {
    title: 'Noël à Zermatt : magie hivernale, chalets chaleureux et vue sur le Cervin',
    shortTitle: 'Guide de Noël à Zermatt',
    description: 'Tout pour fêter Noël à Zermatt : chalets en bois enneigés, 89 % de ciel clair en décembre, fondue au coin du feu, traîneaux et remontées ouvertes.',
    category: 'Hiver & Saisons',
    heroStat: {
      label: 'Ciel clair en décembre',
      value: '89 % Clarté',
      detail: 'La plus forte probabilité statistique de ciel dégagé de l’année au Cervin',
    },
    keyTakeaways: [
      'Décembre affiche 89 % de probabilité de ciel dégagé au sommet du Cervin grâce à l’air froid stable et l’absence de convection thermique.',
      'Zermatt est sans voiture : traîneaux à clochettes, illuminations féeriques et neige fraîche créent une ambiance de conte de fées.',
      'Les dîners de réveillon et du 25 décembre (fondue valaisanne, raclette) se réservent des semaines à l’avance.',
      'Le train du Gornergrat et le téléphérique du Glacier Paradise fonctionnent 365 jours par an pour admirer le sommet le matin de Noël.',
    ],
    comparisonTable: {
      caption: 'Excursions de Noël et temps forts de l’hiver à Zermatt',
      headers: [
        'Activité / tradition',
        'Lieu / parcours',
        'Meilleur moment',
        'Pourquoi c’est magique à Noël',
      ],
      rows: [
        [
          'Balade du réveillon et vin chaud',
          'Bahnhofstrasse et Kirchplatz',
          '17:00–19:30 CET (crépuscule)',
          'Sapin illuminé, chants près de l’église Saint-Maurice, marrons chauds.',
        ],
        [
          'Panorama hivernal du Gornergrat',
          'Train à crémaillère depuis Zermatt (33 min)',
          '09:00–14:00 CET',
          'Montée dans des forêts d’aroles enneigées jusqu’à 3 089 m, vue à 360° sur 29 sommets de 4 000 m.',
        ],
        [
          'Promenade des chalets du Hinterdorf',
          'Derrière l’hôtel Monte Rosa',
          'Heure bleue (16:30–17:30 CET)',
          'Granges en mélèze vieilles de 500 ans (Gädi), sous une épaisse neige poudreuse.',
        ],
        [
          'Fondue au coin du feu',
          'Stübli et chalets traditionnels de Zermatt',
          '19:00–22:00 CET',
          'Fromages AOP du Valais fondus à l’ail et au Fendant, près de l’âtre.',
        ],
        [
          'Palais de glace et ski',
          'Petit Cervin (3 883 m)',
          '10:00–14:30 CET',
          'Les pistes les plus hautes d’Europe et des tunnels de sculptures de glace à 15 m dans le glacier.',
        ],
      ],
    },
    sections: [
      {
        id: 'why-zermatt-christmas-is-magical',
        heading: '1. Pourquoi Zermatt est la destination alpine de Noël par excellence',
        image: {
          src: '/guides/zermatt-winter-chalets.jpg',
          alt: 'Chalets suisses en bois à Zermatt sous une épaisse neige d’hiver, avec le Cervin en arrière-plan',
          caption: 'Chalets historiques en mélèze patiné, drapés de neige poudreuse de décembre à Zermatt.',
        },
        paragraphs: [
          'Peu d’endroits incarnent l’esprit de conte de Noël comme Zermatt. Au fond d’une vallée, sous la pyramide abrupte du Cervin (4 478 m), ce village sans voitures devient chaque décembre une boule à neige vivante.',
          'Les moteurs à combustion y sont interdits depuis 1966. Pas de bruit de circulation ni de neige sale d’échappement : seulement le crissement de la neige fraîche, le bourdonnement discret des petits bus électriques et le tintement des clochettes de laiton sur les traîneaux devant des hôtels comme le Mont Cervin Palace et le Grand Hotel Zermatterhof.',
          'Le long de la Bahnhofstrasse et sur le Kirchplatz, des guirlandes dorées enveloppent les sapins chargés de neige. Les vitrines montrent des ornements en bois sculptés à la main, des chocolats artisanaux et des chaudrons de cuivre où mijotent le vin chaud (Glühwein) et les marrons grillés.',
        ],
        proTip: {
          label: 'Secret local',
          text: 'Glissez-vous dans le quartier du Hinterdorf, juste derrière la Bahnhofstrasse, au crépuscule (16:45 CET). Les ruelles entre les granges en mélèze du XVIe siècle semblent sortir d’une peinture d’hiver du XIXe siècle sous une neige lourde.',
        },
      },
      {
        id: 'december-weather-matterhorn-clarity',
        heading: '2. Météo de décembre : pourquoi Noël a le ciel le plus clair de l’année',
        paragraphs: [
          'On croit souvent que l’été offre le meilleur temps en montagne. Trente ans de mesures alpines suisses disent l’inverse. Décembre est statistiquement le mois le plus clair de l’année à Zermatt, avec 89 % de probabilité de ciel dégagé au sommet du Cervin.',
          'En hiver, l’atmosphère au-dessus des Alpes pennines est dominée par des anticyclones continentaux froids, stables et secs. Contrairement à juillet et août, où le soleil de vallée déclenche des brises anabatiques et d’épais cumulus vers 13:00 CET, l’air de décembre reste limpide toute la journée. À 10:00 CET comme à 15:00 CET, le Cervin se découpe nettement sur un ciel indigo.',
        ],
        bulletPoints: [
          {
            bold: 'Un air vif sous zéro garde la visibilité nette :',
            text: 'En décembre, le village oscille entre -6 °C et +1 °C, les terrasses d’altitude (3 089–3 883 m) entre -14 °C et -8 °C. L’air froid retient peu d’humidité, et le brouillard de sommet disparaît.',
          },
          {
            bold: 'Alpenglow tôt le soir (16:30–16:50 CET) :',
            text: 'Le soleil se couche tôt fin décembre : inutile d’attendre la nuit pour photographier la lueur rose et violette sur la face est du Cervin.',
          },
          {
            bold: 'Vérifiez la télémétrie en cas de Fœhn :',
            text: 'Même en hiver, un front de Fœhn du sud peut pousser des rafales au-delà de 45 km/h au Petit Cervin. Consultez chaque matin notre score de visibilité 1–10 (AM/PM) avant de monter.',
          },
        ],
      },
      {
        id: 'cozy-dining-fireside-fondue',
        heading: '3. Table alpine : fondue au feu, raclette et repas de Noël',
        image: {
          src: '/guides/zermatt-cozy-fondue-matterhorn-wide.jpg',
          alt: 'Caquelon de fondue au fromage suisse avec pain et vin, face au Cervin enneigé',
          caption: 'Rien ne vaut une fondue valaisanne et un verre de Fendant frais après une journée dans la neige.',
        },
        paragraphs: [
          'Après une matinée claire sur le Gornergrat ou sur les pistes vers Cervinia, rien ne réchauffe comme un caquelon de vraie fondue au fromage suisse.',
          'Les Stübli de Zermatt, Ferdinand by Cervo, Saycheese!, Chez Vrony et la Schäferstube, fondent des fromages AOP du Valais avec du vin blanc sec, de l’ail et un trait de kirsch. Racler du fromage chaud sur des pommes de terre au coin d’un âtre de pierre, pendant que la neige tombe dehors, c’est le confort de Noël.',
        ],
        proTip: {
          label: 'Stratégie pour le dîner de Noël',
          text: 'Les dîners du réveillon (24 décembre) et de Noël (25 décembre) se réservent des semaines, parfois des mois à l’avance. Beaucoup de restaurants proposent un menu de fête. Réservez dès octobre ou novembre.',
        },
      },
      {
        id: 'christmas-day-mountain-excursions',
        heading: '4. Excursions du jour de Noël : Gornergrat et Glacier Paradise',
        image: {
          src: '/guides/zermatt-winter-snow-village.jpg',
          alt: 'Pentes alpines enneigées au-dessus du village de Zermatt sous une neige poudreuse intacte',
          caption: 'Paysage d’hiver : les pentes au-dessus de Zermatt restent ouvertes le jour de Noël pour la crémaillère et la randonnée.',
        },
        paragraphs: [
          'Une question revient chez les primo-visiteurs : les trains de montagne circulent-ils le jour de Noël ? La réponse est oui, sans ambiguïté. Le train à crémaillère du Gornergrat et les remontées du Matterhorn Glacier Paradise fonctionnent 365 jours par an, si le temps le permet.',
          'Monter dans le train chauffé au départ de la gare de Zermatt le matin de Noël est un trajet qui reste. Le convoi rouge grimpe à travers des forêts de mélèzes et d’aroles chargées de neige, débouche sur les champs de neige du Riffelberg (2 582 m) et de Rotenboden (2 815 m), puis s’arrête à la terrasse du Gornergrat (3 089 m). De là, le regard traverse les langues gelées des glaciers du Gorner et de Findel vers les faces nord et est du Cervin, plâtrées de neige.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Neige-t-il toujours à Zermatt à Noël ?',
        answer:
          'Zermatt est à 1 608 mètres, et le domaine skiable monte jusqu’à 3 883 mètres : l’un des enneigements naturels les plus fiables des Alpes. Un Noël blanc dans le village est pratiquement assuré, et les pistes d’altitude restent entièrement enneigées tout décembre.',
      },
      {
        question: 'Les trains de montagne et les remontées sont-ils ouverts le jour de Noël à Zermatt ?',
        answer:
          'Oui. Le Gornergrat Bahn, le funiculaire de Sunnegga et les remontées du Matterhorn Glacier Paradise suivent leur horaire d’hiver les 24, 25 et 26 décembre. Consultez le matin le score de visibilité 1–10 (AM/PM) pour confirmer que le sommet est dégagé.',
      },
      {
        question: 'Les restaurants et les boutiques sont-ils ouverts pendant la semaine de Noël à Zermatt ?',
        answer:
          'Oui. De la semaine de Noël au Nouvel An, Zermatt est en pleine saison festive. Épiceries et magasins de location de ski restent ouverts, avec des horaires un peu réduits le soir du 24 décembre et le 25 décembre. Restaurants et bars tournent à plein. Une réservation est indispensable pour le réveillon et le jour de Noël.',
      },
      {
        question: 'Quelle est la meilleure façon de voir le Cervin le jour de Noël ?',
        answer:
          'Prenez le train à crémaillère du Gornergrat à 08:24 ou 09:00 CET depuis la gare de Zermatt. Asseyez-vous à droite dans le sens de la montée : la face est enneigée reste dans la fenêtre, sous la lumière dorée du matin, pendant presque toute la montée.',
      },
    ],
  },
  'gornergrat-railway-vs-glacier-express': {
    title:
      'Chemin de fer du Gornergrat vs Glacier Express : Comparatif des deux trains légendaires suisses',
    shortTitle: 'Gornergrat vs Glacier Express',
    description:
      'Comparez les deux voies ferrées mythiques de Zermatt : l’ascension à crémaillère à 3 089 m vs la traversée panoramique de 8 heures à travers les Alpes suisses. Réductions Swiss Travel Pass, réservations et suivi en direct.',
    category: 'Excursions',
    heroStat: {
      label: 'Différence de trajet',
      value: '33 min vs 7h 45m',
      detail:
        'Ascension verticale au sommet (3 089 m) vs grand voyage panoramique de 291 km',
    },
    keyTakeaways: [
      'Le Gornergrat Bahn (GGB) est un train à crémaillère d’altitude : 33 minutes suffisent pour grimper 1 485 m de dénivelé de Zermatt à 3 089 m face à la célèbre face Est du Cervin.',
      'Le Glacier Express (GEX) est un voyage panoramique de 8 heures reliant Zermatt à Saint-Moritz sur 291 km, 291 ponts et 91 tunnels.',
      'Swiss Travel Pass : 50 % de réduction pour le Gornergrat (sans réservation préalable requise) ; 100 % couvert pour le Glacier Express mais RÉSERVATION DE SIÈGE OBLIGATOIRE (39 à 49 CHF).',
      'Les deux trains se croisent sur la place de la gare de Zermatt, permettant d’enchaîner l’arrivée en Glacier Express et l’ascension au sommet le lendemain matin.',
      'Consultez notre [comparateur de trains suisses](/trains) pour vérifier la météo en direct au Gornergrat et les conditions de réservation.',
    ],
    comparisonTable: {
      caption: 'Gornergrat Bahn vs Glacier Express : caractéristiques et billets (2026)',
      headers: ['Critère', 'Chemin de fer du Gornergrat (GGB)', 'Glacier Express (GEX)'],
      rows: [
        [
          'But principal',
          'Excursion verticale au sommet et point de vue sur le Cervin',
          'Grand voyage panoramique transalpin',
        ],
        [
          'Parcours et terminus',
          'Zermatt (1 604 m) ↔ sommet du Gornergrat (3 089 m)',
          'Zermatt (Valais) ↔ Saint-Moritz / Davos (Grisons)',
        ],
        [
          'Durée',
          '33 minutes dans chaque sens',
          '7 heures 45 minutes (parcours complet de 291 km)',
        ],
        [
          'Voie et traction',
          'Crémaillère double système Abt (voie métrique, 1 000 mm)',
          'Adhérence et sections à crémaillère (Matterhorn Gotthard Bahn / RhB)',
        ],
        [
          'Dénivelé / point haut',
          '+1 485 m (point haut : sommet à 3 089 m)',
          'Point haut : col de l’Oberalp (2 033 m) / point bas : Coire (585 m)',
        ],
        [
          'Saison',
          '365 jours par an (aucune fermeture saisonnière)',
          'Début décembre à fin octobre (maintenance de novembre à début décembre)',
        ],
        [
          'Swiss Travel Pass',
          '50 % de réduction (aller-retour CHF 51–66)',
          'Billet 100 % inclus (frais de réservation de siège obligatoires)',
        ],
        [
          'Réservation de siège',
          'Pas nécessaire (montée libre, pass prioritaire optionnel CHF 7)',
          'OBLIGATOIRE (CHF 39 hors saison / CHF 49 en plein été)',
        ],
        [
          'Eurail / Interrail',
          'Aucune réduction (plein tarif)',
          'Billet 100 % inclus (frais de réservation de siège obligatoires)',
        ],
        [
          'Meilleur côté',
          'Côté droit en montant depuis Zermatt (vue sur le Cervin)',
          'Côté gauche au départ de Zermatt vers Disentis / les deux côtés dans les gorges du Rhin',
        ],
        [
          'Visibilité du Cervin',
          'Vue directe continue pendant tout le trajet et au sommet',
          'Visible seulement au départ ou à l’arrivée dans la vallée de Zermatt',
        ],
        [
          'Points forts',
          'Reflet du Riffelsee, glacier du Gorner, 29 sommets de 4 000 m',
          'Viaduc de la Landwasser, gorges du Rhin, lac du col de l’Oberalp',
        ],
      ],
    },
    sections: [
      {
        id: 'gornergrat-overview',
        heading: 'Gornergrat Bahn (GGB) : le plus haut chemin de fer à crémaillère à ciel ouvert d’Europe',
        image: {
          src: '/guides/gornergrat-bahn-cogwheel-train.jpg',
          alt: 'Train à crémaillère du Gornergrat gravissant la rampe alpine vers le sommet, avec le Cervin en arrière-plan',
          caption: 'Le train du Gornergrat monte à travers alpages et forêts de mélèzes vers la terrasse d’observation à 3 089 mètres.',
        },
        paragraphs: [
          'Ouvert en 1898 comme premier chemin de fer à crémaillère entièrement électrique de Suisse, le Gornergrat Bahn (GGB) est un exploit d’ingénierie. En 33 minutes, ses rames cramoisies et or gravissent 1 485 mètres de dénivelé, de Zermatt (1 604 m) jusqu’à l’arête rocheuse du Gornergrat (3 089 m).',
          'Contrairement aux trains panoramiques qui longent les vallées, le Gornergrat Bahn est une pure ascension verticale. Tandis que la crémaillère attaque des rampes à 20 %, la face est du Cervin s’élargit sous les yeux. Les arrêts intermédiaires sont Findelbach (sur un viaduc de pierre spectaculaire), Riffelalp (2 211 m), Riffelberg (2 582 m) et Rotenboden (2 815 m), départ de la marche célèbre de 10 minutes jusqu’au Riffelsee, où le Cervin se reflète dans l’eau alpine.',
          'Au terminus (3 089 m), vous sortez directement sur la terrasse du 3100 Kulmhotel Gornergrat. De là, un panorama à 360 degrés englobe le mont Rose (4 634 m, plus haut sommet de Suisse), la langue du glacier du Gorner et 29 sommets au-dessus de 4 000 mètres.',
          'Pour préparer la montée et la couverture nuageuse en temps réel, ouvrez le [guide du Gornergrat sur le hub des trains](/trains#gornergrat).',
        ],
        bulletPoints: [
          {
            bold: 'Vitesse et durée :',
            text: '33 minutes dans chaque sens sur 9,3 km de voie, toute l’année, avec des départs toutes les 24 à 48 minutes.',
          },
          {
            bold: 'Profil d’altitude :',
            text: 'De 1 604 m à Zermatt à 3 089 m au sommet du Gornergrat (+1 485 m de dénivelé).',
          },
          {
            bold: 'Montée sans réservation :',
            text: 'Aucune réservation de siège à l’avance. Scannez votre code QR ou votre Swiss Pass aux portiques et montez.',
          },
          {
            bold: 'Arrêts pour la marche :',
            text: 'Descendez à Rotenboden pour la balade du reflet au Riffelsee, ou à Riffelberg pour un déjeuner alpin face au Cervin.',
          },
        ],
        proTip: {
          label: 'Meilleur côté',
          text: 'Asseyez-vous toujours à DROITE dans le sens de la montée en partant de Zermatt. Les fenêtres de droite livrent une vue continue et grandissante sur la pyramide du Cervin dès que le train dépasse la limite des arbres.',
        },
      },
      {
        id: 'glacier-express-overview',
        heading: 'Glacier Express (GEX) : "le train express le plus lent du monde"',
        image: {
          src: '/guides/glacier-express-panoramic-train.jpg',
          alt: 'Train panoramique Glacier Express traversant les Alpes suisses, vitres en coupole sous un ciel bleu',
          caption: 'Le Glacier Express glisse à travers les Alpes suisses, avec des vitres panoramiques qui montent jusqu’au plafond.',
        },
        paragraphs: [
          'Si le Gornergrat Bahn est un ascenseur vertical vers le ciel alpin, le Glacier Express est l’odyssée lente et horizontale le long de l’épine dorsale des Alpes suisses. Il relie Zermatt, en Valais, à Saint-Moritz, dans la vallée de l’Engadine, et couvre 291 kilomètres (181 milles) en environ 7 heures et 45 minutes.',
          'En chemin, le train franchit 291 viaducs, traverse 91 tunnels alpins et gravit le col de l’Oberalp à 2 033 mètres (6 670 pieds), point culminant de la ligne et source du Rhin. Parmi les passages marquants : le viaduc de la Landwasser, un pont de calcaire courbe de 65 mètres de haut qui plonge droit dans un tunnel de falaise, et les gorges du Rhin (Ruinaulta), souvent appelées le Grand Canyon suisse.',
          'Les voitures sont des panoramiques aux vastes vitres courbes qui montent jusqu’au plafond. Un repas de trois services est cuisiné à bord et servi à votre place pendant que le paysage défile.',
          'Plans de sièges, menus et stratégies de réservation sont dans le [guide du parcours et des places du Glacier Express](/trains#glacier-express).',
        ],
        bulletPoints: [
          {
            bold: 'Parcours et durée :',
            text: '291 km entre Zermatt et Saint-Moritz, environ 7 heures et 45 minutes.',
          },
          {
            bold: 'Prouesses d’ingénierie :',
            text: '291 viaducs de pierre et 91 tunnels, dont les tunnels hélicoïdaux de la ligne de l’Albula, au patrimoine mondial de l’UNESCO.',
          },
          {
            bold: 'Excellence Class :',
            text: 'Classe premium avec siège fenêtre individuel garanti, concierge dédié, Glacier Bar privée et menu régional de cinq services avec accords de vins.',
          },
          {
            bold: 'Fermeture saisonnière :',
            text: 'Contrairement au Gornergrat, qui roule 365 jours, le Glacier Express s’arrête pour maintenance de fin octobre à mi-décembre.',
          },
        ],
        proTip: {
          label: 'Réservation de siège obligatoire',
          text: 'Contrairement aux trains suisses ordinaires, vous ne pouvez PAS monter dans le Glacier Express sans siège réservé, même avec un Swiss Travel Pass 1re classe illimité. La réservation ouvre exactement 93 jours à l’avance sur le portail officiel. Mettez une alerte : les places panoramiques des pics d’été et de ski partent en quelques heures.',
        },
      },
      {
        id: 'pass-rules-pricing',
        heading: 'Prix du Glacier Express, réservation de siège et Swiss Travel Pass',
        paragraphs: [
          'Beaucoup pensent qu’un Swiss Travel Pass permet de monter gratuitement dans n’importe quel train de Suisse. Le réseau est intégré, mais le Gornergrat Bahn et le Glacier Express relèvent de tarifs entièrement différents.',
          'Connaître ces règles à l’avance évite les suppléments au guichet et les refus à l’embarquement.',
        ],
        bulletPoints: [
          {
            bold: 'Gornergrat Bahn avec le Swiss Travel Pass :',
            text: 'Vous avez 50 % de réduction sur le billet adulte standard (l’aller-retour d’été passe d’environ CHF 132 à CHF 66 ; l’hiver, d’environ CHF 102 à CHF 51). Ce n’est pas gratuit à 100 %, car la ligne est classée comme excursion de sommet. Aucune réservation de siège n’est nécessaire.',
          },
          {
            bold: 'Gornergrat avec la Swiss Half Fare Card :',
            text: 'La même réduction de 50 % que le Swiss Travel Pass. Les enfants de 6 à 15 ans titulaires d’une Swiss Family Card voyagent gratuitement s’ils sont accompagnés d’un parent payant.',
          },
          {
            bold: 'Glacier Express avec le Swiss Travel Pass :',
            text: 'Le trajet est COUVERT à 100 % par le Swiss Travel Pass (et par Eurail / Interrail). Vous devez toutefois payer la réservation de siège obligatoire : CHF 39 hors saison (printemps/automne) ou CHF 49 en plein été et en hiver. Sans le coupon de réservation, l’accès est refusé.',
          },
          {
            bold: 'Supplément Excellence Class du Glacier Express :',
            text: 'Il faut un billet de 1re classe valide (ou un Swiss Travel Pass 1re classe) plus un supplément Excellence Class non réductible de CHF 470 par personne.',
          },
        ],
        proTip: {
          label: 'Comparatif live des billets et des pass',
          text: 'Comparez tarifs, règles enfants et chiens sur notre [page de comparaison des trains de montagne suisses](/trains).',
        },
      },
      {
        id: 'which-train-to-choose',
        heading: 'Quel train prendre, ou comment combiner les deux',
        paragraphs: [
          'Les deux trains partent de la même place de la gare de Zermatt, face à face. Ils se complètent. Lequel privilégier dépend de la longueur du séjour et de ce que vous voulez voir :',
          '1. Si vous n’avez qu’un ou deux jours à Zermatt : prenez le Gornergrat Bahn. Le but est de voir et de photographier le Cervin, de marcher jusqu’au reflet du Riffelsee et d’atteindre 3 089 mètres. En un peu plus d’une demi-heure, le Gornergrat vous place devant la montagne.',
          '2. Si vous voyagez entre la Suisse orientale et Zermatt : prenez le Glacier Express comme trajet longue distance. Au lieu des trains régionaux par le long tunnel de base du Lötschberg, la journée de transit devient elle-même l’excursion.',
          '3. L’itinéraire alpin de 48 heures : arrivez à Zermatt par le Glacier Express en fin d’après-midi, face aux parois du Mattertal. Après la fondue au village, prenez le premier Gornergrat à 08:00 pour la lumière dorée sur le glacier du Gorner et le Cervin.',
          'Consultez les scores météo en direct et les itinéraires de repli avant de réserver sur le [tableau de visibilité du Cervin](/).',
        ],
      },
      {
        id: 'live-tracking-and-weather',
        heading: 'Météo du sommet en direct, et pourquoi l’heure du trajet compte',
        paragraphs: [
          'Une différence fondamentale entre les deux voyages est la dépendance à la météo. Le Glacier Express circule surtout dans des vallées profondes et sur des cols. Même sous un ciel couvert ou une pluie légère, brumes, cascades et gorges calcaires restent saisissants.',
          'Le Gornergrat Bahn, lui, est une montée à ciel ouvert jusqu’au sommet. Si un stratus bas ou une nuée de Fœhn du sud enveloppe l’arête à 3 089 m, la visibilité depuis la terrasse peut tomber à zéro et masquer à la fois le Cervin et le glacier du Gorner.',
          'Les billets du Gornergrat sont valables pour n’importe quel train du jour choisi. Ne les achetez pas plusieurs jours à l’avance sans vérifier le sommet. Avant de monter, consultez le [score de visibilité du Gornergrat sur le suivi des trains](/trains) : nuages d’altitude, webcams du sommet et cisaillement du vent y donnent un score 1–10, Go ou No-Go.',
        ],
        proTip: {
          label: 'Phénomène d’inversion',
          text: 'En fin d’automne et en hiver, Zermatt peut rester sous un brouillard épais (Nebeldecke) tandis que le Gornergrat, à 3 089 m, baigne dans un ciel bleu au-dessus d’une mer de nuages. Regardez les webcams d’altitude avant de conclure qu’un village gris signifie un mauvais temps au sommet.',
        },
      },
    ],
    faqs: [
      {
        question: 'Le Gornergrat Bahn et le Glacier Express partent-ils de la même gare à Zermatt ?',
        answer:
          'Oui, à une cinquantaine de mètres l’un de l’autre, à la gare de Zermatt. Le Glacier Express arrive et part sur les quais principaux du Matterhorn Gotthard Bahn (MGB) / CFF. Le Gornergrat Bahn a son propre bâtiment historique, juste en face, de l’autre côté de la place.',
      },
      {
        question: 'Le Gornergrat Bahn est-il 100 % gratuit avec le Swiss Travel Pass ?',
        answer:
          'Non. Il est classé comme chemin de fer d’excursion en haute altitude : le Swiss Travel Pass donne 50 % de réduction, pas la gratuité. En 2026, un aller-retour adulte coûte environ CHF 66 en été et CHF 51 en hiver avec le pass.',
      },
      {
        question: 'Puis-je ne faire qu’une partie du Glacier Express au lieu des 8 heures complètes ?',
        answer:
          'Oui. Les tronçons courts les plus prisés sont Zermatt–Brigue (1 h 20), Zermatt–Andermatt (3 h 15) et Coire–Saint-Moritz par le viaduc de la Landwasser (2 h). La réservation de siège reste obligatoire sur tous les segments.',
      },
      {
        question: 'Quel côté du train offre la meilleure vue sur le Gornergrat Bahn ?',
        answer:
          'Asseyez-vous toujours à droite en montant de Zermatt au Gornergrat, et à gauche en descendant. Les fenêtres de droite font face au Cervin pendant presque toute la montée de 33 minutes.',
      },
      {
        question: 'Que se passe-t-il si j’ai un billet Gornergrat et que le Cervin est dans les nuages ?',
        answer:
          'Les billets standard du Gornergrat Bahn valent pour n’importe quel train du jour calendaire choisi, mais ils ne sont en général pas remboursables une fois activés. Pour éviter la déception, vérifiez le score de visibilité 1–10 (AM/PM) et les webcams du sommet sur le [tableau de bord des trains](/trains) avant d’acheter au guichet.',
      },
    ],
  },
  'what-is-the-matterhorn': {
    title: 'Qu’est-ce que le Cervin ? | Hauteur, lieu et visibilité',
    shortTitle: 'Qu’est-ce que le Cervin ?',
    description:
      'Le Cervin est une pyramide de 4 478 m sur la frontière suisse-italienne au-dessus de Zermatt. Hauteur, lieu, et s’il est visible aujourd’hui.',
    category: 'Points de vue',
    heroStat: {
      label: 'Altitude du sommet',
      value: '4 478 m',
      detail: 'Zermatt, Valais, sur la frontière suisse-italienne',
    },
    keyTakeaways: [
      'Le Cervin est une pyramide à quatre faces. En italien il s’appelle Cervino, en allemand Matterhorn.',
      'Le sommet culmine à 4 478 m (14 692 pieds).',
      'Il domine Zermatt dans le Valais et Breuil-Cervinia dans le Val d’Aoste.',
      'Vérifiez le score en direct avant d’acheter un billet. Le Gornergrat voit la face est, le Klein Matterhorn la face sud.',
    ],
    sections: [
      {
        id: 'what-it-is',
        heading: 'Qu’est-ce que le Cervin ?',
        paragraphs: [
          'Le Cervin est une pyramide rocheuse à quatre faces dans les Alpes pennines. Depuis Zermatt, le sommet ressemble à une seule pointe, d’où le surnom Toblerone pour la face est.',
          'La montagne a trois noms. Allemand et anglais disent Matterhorn, italien Cervino, français Cervin. Il s’agit de ce sommet, pas de l’attraction de Disneyland ni d’un pipeline.',
        ],
      },
      {
        id: 'where-and-height',
        heading: 'Où se trouve le Cervin, et quelle est sa hauteur ?',
        paragraphs: [
          'Le sommet mesure 4 478 mètres, soit 14 692 pieds. Il se dresse sur la frontière entre la Suisse et l’Italie.',
          'Côté suisse, il domine Zermatt dans le canton du Valais. Côté italien, il domine Breuil-Cervinia dans le Val d’Aoste. Les faces est et nord sont la vue classique depuis le village, le Gornergrat et le Riffelsee. Les faces sud et ouest regardent l’Italie et se voient depuis Matterhorn Glacier Paradise.',
        ],
      },
      {
        id: 'how-to-see-it',
        heading: 'Comment voir le Cervin aujourd’hui',
        paragraphs: [
          'Le [score de visibilité en direct](/) se met à jour toutes les 15 minutes. 8–10 signifie une pyramide dégagée. 1–2 signifie des nuages. Les applis météo du village lisent Zermatt à 1 608 m et ratent le plafond nuageux autour du sommet.',
          'Le Gornergrat (3 089 m) montre la face est, par le train à crémaillère. Le Klein Matterhorn (3 883 m) est la télécabine vers la face sud. Le Kirchbrücke dans le village est gratuit. Regardez la webcam du Gornergrat et celle du Klein Matterhorn sur la page d’accueil avant d’acheter un billet.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Qu’est-ce que le Cervin ?',
        answer:
          'Une pyramide à quatre faces dans les Alpes pennines, appelée Matterhorn en allemand et Cervino en italien. Le sommet est à 4 478 m au-dessus de Zermatt.',
      },
      {
        question: 'Où se trouve le Cervin ?',
        answer:
          'Sur la frontière suisse-italienne. Le versant suisse est au-dessus de Zermatt, dans le Valais. Le versant italien est au-dessus de Breuil-Cervinia, dans le Val d’Aoste.',
      },
      {
        question: 'Quelle est la hauteur du Cervin ?',
        answer: '4 478 mètres (14 692 pieds).',
      },
    ],
  },
  'zermatt-weather-december': {
    title: 'Météo de Zermatt en décembre',
    shortTitle: 'Météo de décembre',
    description: 'Décembre est le mois le plus clair à Zermatt, avec 89 % de chances de voir le Cervin. Neige, lacs gelés et contrôle du jour.',
    category: 'Climatologie',
    heroStat: { label: 'Jours clairs', value: '89 %', detail: 'Mois le plus clair sur 30 ans' },
    keyTakeaways: [
      'Le sommet est dégagé 89 % des jours de décembre. Matin et après-midi restent ouverts.',
      'Le village est sous la neige et le Riffelsee est gelé.',
      'Vérifiez le score en direct avant un billet Gornergrat ou ski.',
    ],
    sections: [
      {
        id: 'december-clarity',
        heading: 'Météo de Zermatt en décembre',
        paragraphs: [
          'Décembre est le mois le plus clair sur 30 ans, avec 89 % de chances de voir le sommet un jour donné. L’air froid et stable ne forme presque pas de cumulus l’après-midi.',
          'Le village est sous la neige et les lacs sont gelés : un mois pour regarder et skier, pas pour les reflets. Pour Noël, voir le [guide de Noël à Zermatt](/guides/christmas-in-zermatt-matterhorn).',
          'Le [score en direct](/) vaut pour aujourd’hui. L’année est dans [la météo de Zermatt par mois](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quel temps fait-il à Zermatt en décembre ?',
        answer: 'Froid et exceptionnellement clair. Le Cervin est visible environ 89 % des jours, y compris l’après-midi.',
      },
      {
        question: 'Le Riffelsee reflète-t-il le Cervin en décembre ?',
        answer: 'Non. Le lac est gelé et sous la neige de novembre à début juin.',
      },
    ],
  },
  'zermatt-weather-september': {
    title: 'Météo de Zermatt en septembre',
    shortTitle: 'Météo de septembre',
    description: 'En septembre le sommet est clair environ 72 % des jours. Les sentiers sont ouverts et le Riffelsee est liquide.',
    category: 'Climatologie',
    heroStat: { label: 'Jours clairs', value: '72 %', detail: 'Nuits fraîches, mélèzes dorés, lacs ouverts' },
    keyTakeaways: [
      'Environ 72 % des jours de septembre sont clairs.',
      'Les sentiers sont sans neige et le Riffelsee peut refléter la face est.',
      'Partez au lever du soleil. Le vent ride souvent le lac en début d’après-midi.',
    ],
    sections: [
      {
        id: 'september-clarity',
        heading: 'Météo de Zermatt en septembre',
        paragraphs: [
          'Septembre est clair environ 72 % des jours. Les nuits plus fraîches coupent les thermiques de juin et juillet, et les mélèzes dorent autour de la face est.',
          'Les sentiers sont encore sans neige et le Riffelsee est liquide. C’est le mois du reflet depuis Sunnegga ou Rotenboden. Partez au lever du soleil.',
          'Contrôlez le [score en direct](/) le matin. L’année est dans [la météo de Zermatt par mois](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quel temps fait-il à Zermatt en septembre ?',
        answer: 'Clair environ 72 % des jours. Les nuits sont assez fraîches pour calmer les cumulus du plein été.',
      },
      {
        question: 'Le Riffelsee est-il liquide en septembre ?',
        answer: 'Oui. La fenêtre de reflet va de fin juin à fin octobre. Septembre est dedans. Partez à l’aube.',
      },
    ],
  },
  'zermatt-weather-may': {
    title: 'Météo de Zermatt en mai',
    shortTitle: 'Météo de mai',
    description: 'En mai, Zermatt est clair 48 à 58 % des matins. Les nuages montent l’après-midi et le Riffelsee est encore gelé.',
    category: 'Climatologie',
    heroStat: { label: 'Jours clairs', value: '48–58 %', detail: 'Fiable seulement avant midi' },
    keyTakeaways: [
      'Mai reste dans la fourchette de 48–58 % de jours clairs.',
      'La fenêtre utile est le matin. La fonte nourrit les cumulus.',
      'Le Riffelsee est encore gelé. Le reflet attend fin juin.',
    ],
    sections: [
      {
        id: 'may-clarity',
        heading: 'Météo de Zermatt en mai',
        paragraphs: [
          'Mai est un mois de transition. La probabilité de ciel clair est de 48–58 %, et la seule fenêtre fiable est le matin. L’humidité de la fonte nourrit les cumulus dès le début d’après-midi.',
          'Le Riffelsee est encore gelé. Un matin clair sert au Gornergrat ou au pont du village ; l’après-midi se passe dans la vallée.',
          'Vérifiez le [score en direct](/) avant de partir. Les autres mois sont dans [la météo de Zermatt par mois](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quel temps fait-il à Zermatt en mai ?',
        answer: 'Un mois charnière. Environ la moitié des jours sont clairs le matin, puis les cumulus montent en début d’après-midi.',
      },
      {
        question: 'Peut-on photographier le Riffelsee en mai ?',
        answer: 'Le lac est encore gelé en mai. Les reflets liquides commencent fin juin.',
      },
    ],
  },
  'glacier-express': {
    title: 'Prix, trajet et réservation du Glacier Express',
    shortTitle: 'Glacier Express',
    description: 'Prix des billets, réservation obligatoire, trajet Zermatt–Saint-Moritz, et différence avec le Bernina Express.',
    category: 'Excursions',
    heroStat: { label: 'Réservation', value: 'CHF 39–49', detail: 'Obligatoire, en plus du billet' },
    keyTakeaways: [
      'Aller simple : environ CHF 159 en 2e classe, CHF 272 en 1re. La réservation s’ajoute.',
      'La réservation coûte CHF 39 hors saison et CHF 49 en plein été. Elle ouvre 93 jours avant.',
      'L’Excellence Class ajoute CHF 470 à un billet de 1re. Il y a 20 places.',
      'Le Bernina Express est la même famille ferroviaire dans une autre vallée. Il ne va pas à Zermatt.',
    ],
    sections: [
      {
        id: 'glacier-express-price',
        heading: 'Prix du Glacier Express',
        paragraphs: [
          'Un aller adulte coûte environ CHF 159 en 2e classe ou CHF 272 en 1re, sans le siège. Le Swiss Travel Pass et Eurail couvrent le billet, pas la réservation.',
          'L’Excellence Class est une voiture panoramique de 20 places en 1+1. Le supplément est de CHF 470 sur un billet de 1re et comprend un accueil et un déjeuner en cinq services.',
        ],
      },
      {
        id: 'seat-reservation',
        heading: 'Réservation de siège',
        paragraphs: [
          'Chaque passager a besoin d’une réservation : CHF 39 hors saison, CHF 49 en plein été. Les enfants qui voyagent gratuitement la paient aussi. Les places ouvrent 93 jours avant le départ.',
          'Le train panoramique s’arrête environ de mi-octobre à mi-décembre. Les trains régionaux du Matterhorn Gotthard Bahn et des RhB continuent sur les mêmes voies, sans réservation Glacier Express ni wagon-restaurant.',
        ],
      },
      {
        id: 'route',
        heading: 'Trajet de Zermatt à Saint-Moritz',
        paragraphs: [
          'Le parcours complet dure environ huit heures, de Zermatt (1 604 m) à Saint-Moritz (1 775 m), par le col de l’Oberalp à 2 033 m. Certains trains continuent vers Davos. Les gorges du Rhin et le viaduc de Landwasser à Filisur sont les passages connus.',
          'Depuis Zurich ou Genève, on change à Viège pour le Matterhorn Gotthard Bahn jusqu’à Zermatt, puis on monte dans le Glacier Express. Les tronçons plus courts, Zermatt–Brigue ou Zermatt–Andermatt, exigent aussi une réservation.',
        ],
      },
      {
        id: 'bernina-express',
        heading: 'Glacier Express ou Bernina Express',
        paragraphs: [
          'Les deux sont des trains panoramiques des RhB et du Matterhorn Gotthard Bahn, et ils ne se remplacent pas. Le Glacier Express traverse les Alpes de Zermatt à Saint-Moritz. Le Bernina Express va de Coire ou Saint-Moritz au col de la Bernina, puis à Tirano en Italie.',
          'Prenez le Glacier Express pour le Cervin, l’Oberalp et Zermatt. Prenez le Bernina Express pour les glaciers de la Bernina et la descente vers l’Italie. Saint-Moritz est le seul point commun.',
        ],
      },
      {
        id: 'today',
        heading: 'Faut-il monter aujourd’hui ?',
        paragraphs: [
          'La [page des trains](/trains) indique si le Glacier Express suit son horaire de saison ou s’il est en pause d’automne, plus le score du Gornergrat. Un score élevé veut dire un Cervin dégagé à Zermatt. Il ne décrit pas le temps à l’Oberalp.',
          'Le Gornergrat est un autre train : 33 minutes de crémaillère jusqu’à 3 089 m, sans réservation obligatoire. La comparaison est dans le [guide Gornergrat contre Glacier Express](/guides/gornergrat-railway-vs-glacier-express).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Combien coûte le Glacier Express ?',
        answer: 'Environ CHF 159 l’aller en 2e classe ou CHF 272 en 1re, plus une réservation obligatoire de CHF 39 ou CHF 49. Le Swiss Travel Pass couvre le billet, pas la réservation.',
      },
      {
        question: 'Faut-il réserver un siège ?',
        answer: 'Oui. L’accès est refusé sans réservation. Réservez à l’ouverture, 93 jours avant. L’Excellence Class coûte CHF 470 de plus et compte 20 places.',
      },
      {
        question: 'Quel est le trajet du Glacier Express ?',
        answer: 'Zermatt–Saint-Moritz en huit heures environ, via Viège, Brigue, Andermatt et l’Oberalp, certains trains vers Davos. Le Bernina Express est une autre ligne, de Saint-Moritz à Tirano.',
      },
    ],
  },
  'hotels-with-matterhorn-view': {
    title: 'Hôtels avec vue sur le Cervin',
    shortTitle: 'Hôtels avec vue',
    description: 'Quelles chambres voient la face est, lesquelles sont sur le chemin du reflet, et lesquelles restent au-dessus du brouillard de vallée.',
    category: 'Points de vue',
    heroStat: { label: 'Vue qui lâche d’abord', value: 'Village', detail: 'Les chambres à 1 620 m perdent le sommet dans le brouillard' },
    keyTakeaways: [
      'Les chambres du village voient la face est et perdent le sommet en premier quand la base des nuages descend.',
      'Le Riffelalp Resort est sur le chemin du Riffelsee. Sunnegga est une terrasse de jour, pas un hôtel.',
      'Le Riffelhaus et le Kulmhotel Gornergrat restent au-dessus du brouillard qui cache le village.',
    ],
    sections: [
      {
        id: 'village-east-face',
        heading: 'Face est depuis le village',
        paragraphs: [
          'Les chambres du village regardent la face est. The Omnia est sur la colline au-dessus de l’église, et le Mont Cervin Palace fait face au sommet depuis le village. Les deux sont à pied du Kirchbrücke.',
          'C’est la vue qui disparaît en premier. Un plafond vers 2 000–2 500 m cache le sommet au village alors que le Gornergrat, à 3 089 m, est encore dégagé. Vérifiez le [score en direct](/) et le [point de vue du village](/viewpoints/zermatt-village).',
        ],
      },
      {
        id: 'riffelsee-and-sunnegga',
        heading: 'Sunnegga et Riffelsee',
        paragraphs: [
          'Le reflet est la face est dans le Riffelsee, à cinq minutes sous Rotenboden, et dans le Stellisee au-dessus de Sunnegga. Sunnegga est une terrasse de funiculaire pour la journée. Il n’y a pas d’hôtel au bord du lac.',
          'Le Riffelalp Resort 2222 est l’hôtel de ce chemin, sur le train du Gornergrat, sous Rotenboden, avec la face est devant l’établissement. L’eau ne reflète que de fin juin à octobre, et seulement si le vent reste sous environ 12 km/h. Le contrôle du jour est la [page Riffelsee](/viewpoints/riffelsee). [Sunnegga](/viewpoints/sunnegga) est la terrasse basse.',
        ],
      },
      {
        id: 'gornergrat-side',
        heading: 'Côté Gornergrat',
        paragraphs: [
          'Deux hôtels sont au-dessus du brouillard qui remplit Zermatt. Le Riffelhaus 1853 est à Riffelberg, 2 582 m, un arrêt sous Rotenboden. Le Kulmhotel Gornergrat est à la gare sommitale, 3 089 m.',
          'Ces chambres gardent la face est quand le village est dans les nuages, et la perdent quand le sommet lui-même est coiffé. Le score de cette altitude est sur la [page Gornergrat](/viewpoints/gornergrat).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quels hôtels ont une vue sur le Cervin ?',
        answer: 'Au village, The Omnia et le Mont Cervin Palace font face à la face est. Sur la ligne, le Riffelalp Resort 2222 voit le même sommet plus près du Riffelsee. Le Riffelhaus 1853 et le Kulmhotel Gornergrat sont au-dessus du brouillard.',
      },
      {
        question: 'Quelle vue disparaît en premier ?',
        answer: 'Celle du village. Une base nuageuse vers 2 000 m cache le sommet au Kirchbrücke alors que les hôtels du Gornergrat sont encore au-dessus.',
      },
    ],
  },
};
