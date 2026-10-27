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
    title: 'Meilleur mois et heure pour voir le Cervin : Climatologie sur 30 ans',
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
    title: 'Excursion d’un jour à Zermatt depuis Zurich ou Genève : Le voyage en train vaut-il la peine aujourd’hui ?',
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
  },
};
