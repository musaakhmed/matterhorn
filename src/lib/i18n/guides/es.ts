import { GuideTranslation } from '../guides';

export const esGuides: Record<string, GuideTranslation> = {
  'gornergrat-vs-glacier-paradise': {
    title: 'Gornergrat vs. Matterhorn Glacier Paradise: ¿Cuál es el mejor mirador del Cervino?',
    shortTitle: 'Gornergrat vs. Glacier Paradise',
    description: 'Altitud, tren cremallera vs. teleférico, perspectivas y clima comparados para los dos grandes miradores de Zermatt.',
    category: 'Viewpoints',
    heroStat: {
      label: 'Diferencia de altitud',
      value: '794 m',
      detail: 'Gornergrat (3.089 m) vs. Klein Matterhorn (3.883 m)',
    },
    keyTakeaways: [
      'Gornergrat (3.089 m) ofrece la icónica silueta piramidal de la cara Este (la forma de Toblerone) y es mucho más resistente a cierres por viento.',
      'Matterhorn Glacier Paradise (3.883 m) le eleva casi 800 metros más sobre el glaciar, mostrando la dramática e imponente cara Sur/Oeste.',
      'Debido a vientos Föhn y nubes orográficas, un mirador suele marcar 8/10 mientras el otro está en 4/10: compare siempre ambos índices antes de pagar su billete.',
      'Si solo realiza una excursión de montaña para fotografiar la forma clásica del Cervino, elija Gornergrat en el histórico tren cremallera.',
    ],
    comparisonTable: {
      caption: 'Comparativa directa: Gornergrat vs. Matterhorn Glacier Paradise',
      headers: ['Característica', 'Gornergrat (3.089 m)', 'Matterhorn Glacier Paradise (3.883 m)'],
      rows: [
        [
          'Perspectiva del Cervino',
          'Cara Este clásica y arista Hörnli (silueta "Toblerone")',
          'Paredes Sur y Oeste escarpadas en la frontera italiana',
        ],
        [
          'Transporte',
          'Tren cremallera panorámico al aire libre (33 min desde Zermatt)',
          'Teleféricos y telecabinas 3S vía Furi / Trockener Steg (45 min)',
        ],
        [
          'Resistencia a temporales',
          'Muy alta — El tren sobre raíles opera incluso con vientos intensos',
          'Moderada — Los cables a 3.883 m cierran ante rachas Föhn (>50 km/h)',
        ],
        [
          'Mejor luz',
          '06:00–11:00 CET (Amanecer y sol directo en la cara Este)',
          '11:00–16:00 CET (Sol alto e iluminación de tarde desde el Oeste)',
        ],
        [
          'Reflejo en lago',
          'Sí — Lago Riffelsee (estación Rotenboden, junio a octubre)',
          'Desvío opcional por Schwarzsee (2.583 m)',
        ],
        [
          'Riesgo de mal de altura',
          'Bajo o moderado (3.089 m)',
          'Sensiblemente mayor por la rápida ascensión a 3.883 m',
        ],
      ],
    },
    sections: [
      {
        id: 'matterhorn-angle',
        heading: '1. La silueta del Cervino: Pirámide clásica vs. muralla de alta montaña',
        paragraphs: [
          'Los viajeros que visitan Zermatt por primera vez se sorprenden: desde Glacier Paradise (Klein Matterhorn), la montaña luce totalmente distinta a como se ve desde el pueblo o desde Gornergrat.',
          'Desde Gornergrat a 3.089 metros, se contempla el glaciar Gorner con las caras Este y Norte divididas por la afilada arista Hörnli. Es la inconfundible pirámide de la marca Toblerone. Desde Glacier Paradise a 3.883 metros, junto a Italia, se observa de lado: más ancha, maciza y menos curvada.',
        ],
        proTip: {
          label: 'Veredicto fotográfico',
          text: 'Para la foto de postal clásica —especialmente con el reflejo de espejo en el lago Riffelsee en Rotenboden— Gornergrat es el ganador indiscutible.',
        },
      },
      {
        id: 'weather-differences',
        heading: '2. Por qué los índices de visibilidad varían entre 3.089 m y 3.883 m',
        paragraphs: [
          'La razón por la que generamos dos índices independientes en isthematterhornvisible.com es que Gornergrat y Glacier Paradise pertenecen a microclimas diferentes.',
          'Cuando el aire húmedo de Föhn asciende desde Italia por el Val Tournenche, supera el paso Theodul (3.300 m) y envuelve primero a Klein Matterhorn (3.883 m), mientras Gornergrat, resguardado al este, disfruta de 2 a 3 horas más de sol radiante. En invierno, durante inversiones térmicas bajo 2.800 metros, Glacier Paradise emerge sobre un mar blanco de nubes.',
        ],
        bulletPoints: [
          {
            bold: 'Capa de nubes medias (3.000 m–4.000 m):',
            text: 'Cruza directamente la línea visual entre los miradores y la cima (pesa un 60% en nuestro índice).',
          },
          {
            bold: 'Cierres por viento Föhn:',
            text: 'Rachas del sur superiores a 50 km/h paralizan el teleférico a Klein Matterhorn, mientras el tren de Gornergrat sigue rodando sobre raíles.',
          },
        ],
      },
      {
        id: 'ticket-strategy',
        heading: '3. Estrategia de billetes: Nunca reserve con semanas de antelación',
        paragraphs: [
          'Los billetes para las cumbres en Zermatt son costosos (de 90 a más de 220 CHF según la época y los descuentos del Swiss Travel Pass / Medio Precio), pero la capacidad nunca se agota para viajeros individuales.',
          'Espere a la tarde anterior o a la mañana de su ascenso: consulte nuestro índice de visibilidad AM/PM en vivo y las webcams Roundshot. Compre su billete solo si el pronóstico marca 7/10 o más.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿En qué lado conviene sentarse en el tren de Gornergrat?',
        answer:
          'Siéntese en el lado derecho en el sentido de subida desde Zermatt. El Cervino permanece a la vista durante casi los 33 minutos de ascenso por Riffelalp y Rotenboden.',
      },
      {
        question: '¿Se pueden visitar Gornergrat y Glacier Paradise en un mismo día?',
        answer:
          'Sí, con el Zermatt Peak Pass, pero solo es recomendable en días con puntuación de 9/10 o 10/10 despejada todo el día. Comience en Gornergrat a las 08:00 para la luz matutina y suba a Glacier Paradise hacia mediodía.',
      },
      {
        question: '¿Qué mirador es mejor con nubes?',
        answer:
          'Si ambos marcan 4/10 o menos, quédese en el pueblo y ahorre su dinero. Si solo se trata de niebla baja por inversión (< 2.800 m), Glacier Paradise (3.883 m) tiene más opciones de sobresalir por encima.',
      },
    ],
  },

  'best-time-to-see-matterhorn': {
    title: 'Tiempo en Zermatt por mes | Mejor momento para el Matterhorn',
    shortTitle: 'Mejor mes y hora',
    description: 'Estadísticas históricas de visibilidad: por qué diciembre y enero superan el 88% de cielo despejado mientras las tardes de verano se cubren de nubes.',
    category: 'Climatology',
    heroStat: {
      label: 'Franja más despejada',
      value: '06:00–10:30',
      detail: 'La mañana (AM) supera a la tarde (PM) en el 78% del año',
    },
    keyTakeaways: [
      'Diciembre (89%) y enero (88%) ofrecen estadísticamente la probabilidad más alta de cumbre completamente despejada.',
      'Junio (48%) y julio (52%) registran la menor visibilidad continua debido a las nubes de desarrollo convectivo por el calor de la tarde.',
      'En cualquier estación, la franja de mañana (06:00–11:00 CET) es mucho más nítida que el bloque de tarde (12:00–18:00 CET).',
      'Septiembre y octubre ("otoño dorado") aúnan senderos sin nieve y una fiabilidad de cielos claros del 72% al 79%.',
    ],
    sections: [
      {
        id: 'morning-vs-afternoon',
        heading: '1. La regla de oro en Zermatt: Por qué la mañana siempre gana a la tarde',
        paragraphs: [
          'Si solo puede seguir un consejo en su viaje a Zermatt, elija este: madrugue. En primavera, verano y principios de otoño, el Cervino amanece frecuentemente recortado contra un cielo azul limpio a las 06:30, para quedar totalmente oculto por nubes de desarrollo hacia las 13:30.',
          'En cuanto el sol calienta las paredes oscuras de roca del valle, el aire asciende por las laderas (brisas anabáticas). Al superar la cota de 3.000 metros, la humedad se condensa directamente en las aristas. Nuestro panel divide el día en notas de mañana y tarde para que no desperdicie las mañanas claras.',
        ],
        proTip: {
          label: 'Táctica del primer tren',
          text: 'Tome el tren de Gornergrat de las 07:00 o 07:36 en verano para llegar a Riffelsee antes de que la brise diurna comience a rizar el agua.',
        },
      },
      {
        id: 'seasonal-breakdown',
        heading: '2. Análisis de visibilidad estación por estación',
        paragraphs: [
          'Muchos viajeros creen que el pleno verano ofrece el "mejor tiempo". En meteorología alpina, sin embargo, el aire frío contiene mucha menos humedad y no genera nubes de calor.',
        ],
        bulletPoints: [
          {
            bold: 'Invierno (nov–feb • 84%–89% de claridad):',
            text: 'Anticiclones fríos y estables brindan una nitidez cristalina sin nubes térmicas, a menudo hasta la puesta de sol.',
          },
          {
            bold: 'Finales de primavera y principios de verano (may–jul • 48%–58%):',
            text: 'El deshielo nutre de humedad el valle, creando torres nubosas ya a mediodía. Madrugar es obligatorio.',
          },
          {
            bold: 'Otoño (sep–oct • 72%–79% de claridad):',
            text: 'Noches frescas que frenan las térmicas y alerces dorados en el valle: la mejor época fotográfica.',
          },
        ],
      },
      {
        id: 'zermatt-weather-december',
        heading: 'Tiempo en Zermatt en diciembre',
        paragraphs: [
          'Diciembre es el mes más despejado del registro de 30 años, con un 89% de probabilidad de ver la cumbre del Matterhorn un día cualquiera. El aire frío y estable casi no forma cúmulos por la tarde.',
          'El pueblo está nevado y los lagos helados: es un mes para mirar y esquiar, no para reflejos. Para la semana de Navidad, consulta la [guía de Navidad en Zermatt](/guides/christmas-in-zermatt-matterhorn).',
        ],
      },
      {
        id: 'zermatt-weather-september',
        heading: 'Tiempo en Zermatt en septiembre',
        paragraphs: [
          'En septiembre la cumbre está despejada cerca del 72% de los días. Las noches más frescas cortan las térmicas de la tarde que estropean junio y julio, y los alerces se vuelven dorados.',
          'Los senderos siguen sin nieve y el Riffelsee está líquido. Es el mes del reflejo del Matterhorn desde Sunnegga o Rotenboden. Sal al amanecer.',
        ],
      },
      {
        id: 'zermatt-weather-may',
        heading: 'Tiempo en Zermatt en mayo',
        paragraphs: [
          'Mayo es un mes de transición. La probabilidad de cielo despejado queda en el rango de finales de primavera, 48–58%, y la ventana fiable es la mañana. La humedad del deshielo alimenta cúmulos a primera hora de la tarde.',
          'El Riffelsee sigue helado en mayo. Deja la foto del reflejo para finales de junio. Usa una mañana clara para Gornergrat o el puente del pueblo y deja la tarde en el valle.',
        ],
      },
      {
        id: 'how-many-days',
        heading: '3. ¿Cuántos días reservar en Zermatt para garantizar la vista?',
        paragraphs: [
          'Según los registros de 30 años, pasar solo 1 noche en julio otorga aproximadamente un 50% de probabilidad de verlo despejado. Pasar 3 mañanas completas eleva la probabilidad de tener al menos una ventana ≥ 8/10 a más del 88% en verano y al 98% en otoño/invierno.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cuál es el mejor mes para ver el Cervino sin nubes?',
        answer:
          'Diciembre (89%) y enero (88%) lideran las estadísticas. Para senderismo sin nieve y gran visibilidad, finales de septiembre y octubre (72%–79%) son ideales.',
      },
      {
        question: '¿A qué hora golpea el primer rayo de sol la cumbre?',
        answer:
          'La punta de la cara Este se ilumina unos 5 a 10 minutos antes del amanecer oficial en el valle: sobre las 05:30 en junio, 06:50 en septiembre y 08:00 en diciembre.',
      },
    ],
  },

  'zermatt-cloudy-rainy-day-guide': {
    title: 'Qué hacer en Zermatt cuando el Cervino está nublado (Guía para mal tiempo)',
    shortTitle: 'Guía de lluvia y niebla',
    description: '¿Índice de visibilidad en 4/10 o menos? Ahorre sus más de 100 CHF de teleférico en la niebla y explore las mejores alternativas en el valle, cañones y spas.',
    category: 'Bad Weather',
    heroStat: {
      label: 'Ahorro en billete',
      value: 'CHF 110+',
      detail: 'Por persona evitando subir a cumbres con niebla total',
    },
    keyTakeaways: [
      'No compre billetes para Gornergrat o Glacier Paradise cuando el índice es ≤ 4/10: se encontrará dentro de una espesa nube blanca.',
      'Compruebe si se trata de una simple inversión térmica: a veces el pueblo (1.608 m) está cubierto mientras a más de 3.000 m reina el sol.',
      'El cañón del Gorner (Gornerschlucht) resulta aún más impactante con nubes gracias a las cascadas turquesas y la roca de serpentinita verde.',
      'El museo subterráneo Zermatlantis y los spas alpinos del pueblo convierten un día nublado en un grato recuerdo.',
    ],
    sections: [
      {
        id: 'check-inversion-first',
        heading: '1. Inversión o mal tiempo real: compruebe las capas de nubes',
        paragraphs: [
          'Antes de cancelar sus planes, revise el desglose de nubes en nuestro panel. Si la capa baja (2.000 m) está al 90% pero la media y alta no superan el 15%, el pueblo se encuentra bajo una niebla de inversión térmica.',
          'En este caso, subir en tren o telecabina le permitirá perforar la capa de niebla para salir a un cielo azul radiante sobre un mar de nubes. Confírmelo en las webcams antes de subir.',
        ],
        proTip: {
          label: 'Verificación en webcams',
          text: 'Si las nubes medias superan el 75% y la cámara de Gornergrat está en blanco, quédese en el valle.',
        },
      },
      {
        id: 'valley-alternatives',
        heading: '2. Mejores actividades en el valle con visibilidad de 1/10 a 4/10',
        paragraphs: [
          'Cuando un temporal atlántico cubre los Alpes valesanos, reserve su presupuesto de montaña para un día claro y aproveche el pueblo:',
        ],
        bulletPoints: [
          {
            bold: 'Zermatlantis (Museo del Matterhorn):',
            text: 'Bajo la plaza de la iglesia. Exhibe la cuerda rota original de la primera ascensión de 1865 y recreaciones históricas.',
          },
          {
            bold: 'Cañón del Gorner (Gornerschlucht):',
            text: 'A 20 minutos a pie del centro. Pasarelas de madera suspendidas sobre aguas glaciares rugientes de color esmeralda.',
          },
          {
            bold: 'Barrio histórico de Hinterdorf:',
            text: 'Graneros de alerce de más de 500 años sobre ruedas de piedra contra roedores: muy fotogénicos bajo la luz suave de lluvia.',
          },
          {
            bold: 'Spa alpino y fondue suiza:',
            text: 'Tarde de relax en los spas y piscinas climatizadas de los hoteles del pueblo seguida de una fondue tradicional de queso con trufa.',
          },
        ],
      },
      {
        id: 'day-trip-escape',
        heading: '3. La escapada en tren hacia el microclima del valle del Ródano (45–70 min)',
        paragraphs: [
          'Como los picos de 4.000 metros retienen la humedad al sur, el valle del Ródano (Visp, Brig, Sion) suele estar seco y soleado aunque en Zermatt llueva. Con el Swiss Travel Pass puede llegar a Brig en 1 hora para visitar el palacio Stockalper o bañarse en las termas de Brigerbad.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Se devuelven los billetes de teleférico en caso de niebla?',
        answer:
          'No. Las compañías de remontes de Zermatt no reembolsan billetes emitidos por mala visibilidad. Verifique siempre los datos antes de comprar en taquilla.',
      },
      {
        question: '¿Abre el cañón del Gorner con lluvia?',
        answer:
          'Sí, durante toda la temporada de verano (de mayo a octubre). Lleve calzado con buen agarre y chubasquero.',
      },
    ],
  },

  'best-matterhorn-photo-viewpoints': {
    title: 'Mejores puntos fotográficos del Cervino y amaneceres en Zermatt',
    shortTitle: 'Puntos fotográficos & amanecer',
    description: 'Ubicaciones exactas, tiempos a pie y ángulos de luz: Kirchbrücke, Stellisee, Riffelsee, Findeln y Mürini analizados al detalle.',
    category: 'Photography',
    heroStat: {
      label: 'Lagos con reflejo',
      value: '2.537 m & 2.757 m',
      detail: 'Stellisee (Blauherd) y Riffelsee (Rotenboden)',
    },
    keyTakeaways: [
      'El puente de la iglesia (Kirchbrücke) es el mirador gratuito n.º 1 para captar el alpenglow dorado de la cumbre.',
      'El lago Stellisee (2.537 m) encuadra el Cervino con rocas en primer plano; Riffelsee (2.757 m) ofrece el reflejo de espejo más impactante.',
      'Para que el lago actúe como un espejo, el viento debe estar por debajo de 12 km/h: compruebe la velocidad del viento en nuestro panel.',
      'Para combinar tejados tradicionales de Zermatt con el Cervino, camine 10 minutos cuesta arriba hasta el mirador de Mürini / Riedweg.',
    ],
    comparisonTable: {
      caption: 'Guía rápida de los mejores miradores para fotografía en Zermatt',
      headers: ['Mirador', 'Altitud', 'Acceso desde Zermatt', 'Mejor momento de luz'],
      rows: [
        [
          'Kirchbrücke (Puente de la iglesia)',
          '1.615 m',
          '5 min a pie desde la estación (Gratis)',
          '15 min antes del amanecer (Alpenglow dorado)',
        ],
        [
          'Mürini / Riedweg',
          '1.710 m',
          '12 min de subida a pie (Gratis)',
          'Hora azul y amanecer (Chalets y cima)',
        ],
        [
          'Riffelsee (Rotenboden)',
          '2.757 m',
          '28 min en tren de Gornergrat + 5 min a pie',
          '07:30–10:00 CET (Agua en calma y reflejo)',
        ],
        [
          'Stellisee (Blauherd)',
          '2.537 m',
          'Funicular Sunnegga + telecabina Blauherd + 20 min',
          '08:30–11:00 CET o atardecer',
        ],
        [
          'Aldea de Findeln',
          '2.050 m',
          '35 min de bajada a pie desde Sunnegga',
          'Media mañana (Chalets de madera y prados)',
        ],
      ],
    },
    sections: [
      {
        id: 'village-sunrise',
        heading: '1. Miradores gratuitos en el pueblo: Kirchbrücke y Mürini',
        paragraphs: [
          'No necesita gastar en remontes para conseguir fotografías de concurso. Como el sol sale por el Este, los primeros rayos tiñen la cumbre mientras el pueblo de Zermatt descansa aún en sombras azuladas.',
          'Sitúese en el puente Kirchbrücke sobre el río Mattervispa 20 minutos antes del amanecer. Si prefiere evitar la hilera de trípodes, camine 10 minutos por la rampa asfaltada hacia Riedweg (mirador de Mürini), donde los tejados de madera dirigen la mirada directo hacia la cima.',
        ],
        proTip: {
          label: 'Aviso de amanecer',
          text: 'A las 05:30 consulte nuestro pronóstico matinal: cirros altos finos (20–35%) intensifican los tonos rojizos; nubes medias por encima del 50% taparán el amanecer.',
        },
      },
      {
        id: 'mirror-lakes',
        heading: '2. Stellisee vs. Riffelsee: ¿Cuál de los dos lagos elegir?',
        paragraphs: [
          'Zermatt cuenta con dos lagos alpinos reconocidos en todo el mundo por reflejar el Cervino. Deben cumplirse dos premisas: que no haya hielo (mediados de junio a mediados de octubre) y que no sople viento (< 12 km/h).',
        ],
        bulletPoints: [
          {
            bold: 'Riffelsee (2.757 m vía Rotenboden):',
            text: 'A solo 5 minutos a pie de la estación de Rotenboden. Al salir el tren desde las 07:00, puede llegar antes de que comiencen las brisas diurnas. Consejo: si el agua ondea, camine 100 m más al pequeño estanque inferior.',
          },
          {
            bold: 'Stellisee (2.537 m vía Sunnegga–Blauherd):',
            text: 'Destaca por las rocas que sobresalen en primer plano y una vista más abierta del valle. Como abre algo más tarde (sobre las 08:30), elija días con viento inferior a 10 km/h.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cuándo están congelados Riffelsee y Stellisee?',
        answer:
          'Por encima de 2.500 m, permanecen helados y nevados de noviembre a principios de junio. Los reflejos en agua limpia solo son posibles de finales de junio a octubre.',
      },
      {
        question: '¿Por qué no había reflejo si el día estaba despejado?',
        answer:
          'Una brisa de solo 15 km/h basta para rizar la lámina de agua y desdibujar el reflejo. Compruebe la velocidad del viento en nuestro panel y camine hacia la orilla protegida del viento.',
      },
    ],
  },

  'matterhorn-banner-cloud-fohn-wind': {
    title: '¿Por qué el Cervino suele tener una nube en la cumbre? (Física del Föhn)',
    shortTitle: 'Nube en bandera & Föhn',
    description: 'La física atmosférica detrás de la célebre nube en bandera: cómo los vientos de Föhn forman el penacho con cielo despejado y cómo lo pronosticamos.',
    category: 'Meteorology',
    heroStat: {
      label: 'Altitud de la cumbre',
      value: '4.478 m',
      detail: 'La pirámide aislada genera vórtice de baja presión a sotavento',
    },
    keyTakeaways: [
      'La silueta piramidal aislada del Cervino actúa como el ala de un avión ante vientos de altura, generando una zona de baja presión a sotavento.',
      'El aire aspirado se enfría de forma adiabática, condensando el vapor en una nube en bandera estacionaria anclada a la arista.',
      'Las aplicaciones móviles normales marcan "Soleado / 0% lluvia" en Zermatt (1.608 m) aunque los últimos 500 metros del pico estén ocultos.',
      'Nuestro algoritmo penaliza la humedad en capas medias y vientos de Föhn del sur (180°–270° ≥ 35 km/h) para predecir nubes en bandera.',
    ],
    sections: [
      {
        id: 'banner-cloud-physics',
        heading: '1. Las leyes de la física tras la nube en bandera del Cervino',
        paragraphs: [
          'Prácticamente cualquier visitante en Zermatt presencia alguna vez este dilema: el cielo de Suiza es azul impecable, pero de la cumbre del Cervino brota una densa humareda blanca similar a la de un volcán.',
          'A diferencia de las nubes habituales que viajan por el cielo, la nube en bandera nace y muere continuamente en el mismo lugar. Al chocar los vientos de altura con la cara de barlovento del gigante de 4.478 m, el aire es obligado a rodear las aristas. En la cara resguardada de sotavento, el desprendimiento aerodinámico genera una notable bolsa de bajas presiones.',
          'El aire más húmedo de cotas inferiores es succionado hacia arriba, se expande, desciende bajo el punto de rocío y condensa gotas de nube al instante. Unos cientos de metros más allá, el aire desciende, se calienta y la nube vuelve a evaporarse.',
        ],
        proTip: {
          label: 'Interpretar la bandera',
          text: 'Si el penacho apunta al norte hacia Zermatt, el Föhn del sur desde Italia está activo y el tiempo suele empeorar en 12–24 horas. Si apunta al sur, domina el aire seco del norte.',
        },
      },
      {
        id: 'fohn-wind-effect',
        heading: '2. Por qué las aplicaciones del móvil fallan en Zermatt',
        paragraphs: [
          'Las apps generalistas calculan las previsiones para el fondo del valle a 1.608 metros, donde el aire es templado, seco y está resguardado.',
          'Casi 3.000 metros de desnivel más arriba en la cumbre, la atmósfera superior y la humedad media marcan las reglas. Por eso isthematterhornvisible.com consulta las capas directamente a 3.089 m y 3.883 m e impone penalizaciones por viento Föhn a partir de 35 km/h.',
        ],
        bulletPoints: [
          {
            bold: 'Nubes de cota media (Peso del 60%):',
            text: 'Entre 3.000 y 4.000 m cortan directamente la línea de visión hacia la cumbre de 4.478 m.',
          },
          {
            bold: 'Nubes bajas (Peso del 25%):',
            text: 'Dificultan la vista desde el pueblo, pero desde Gornergrat a menudo se aprecian por encima.',
          },
          {
            bold: 'Cirros altos (Peso del 15%):',
            text: 'Nubes de cristales de hielo por encima de 5.000 m que casi nunca tapan la silueta de la roca.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: '¿Impide la nube en bandera ver el Cervino?',
        answer:
          'Por lo general no: la bandera solo ondea hacia un lado de la arista, dejando visible el 70%–85% de la pirámide (índice 6/10 o 7/10). Con vientos de Föhn muy violentos, sin embargo, puede engrosar en un muro compacto.',
      },
      {
        question: '¿Por qué desaparece la nube en bandera por la noche?',
        answer:
          'Sin calentamiento solar cesan las corrientes ascendentes que nutren de humedad el vórtice. Por ello, la cumbre suele amanecer limpia y despejada.',
      },
    ],
  },

  'zurich-geneva-to-zermatt-day-trip': {
    title: 'Tren Zúrich–Zermatt | Horarios, cambio en Visp',
    shortTitle: 'Excursión desde Zúrich & Ginebra',
    description: 'Transbordos en Visp con SBB, tiempos y regla Go/No-Go para planificar su excursión de 1 día desde Zúrich (3h 14m) o Ginebra (3h 45m).',
    category: 'Day Trips',
    heroStat: {
      label: 'Tiempo en tren ida/vuelta',
      value: '6,5 – 7,5 horas',
      detail: '3h 14m por trayecto desde Zúrich HB • 3h 45m desde Ginebra',
    },
    keyTakeaways: [
      'Una excursión de un día a Zermatt desde Zúrich o Ginebra supone de 6,5 a 7,5 horas totales de tren: inolvidable con nota ≥ 8/10, pero un gasto decepcionante con nota ≤ 4/10.',
      'Saliendo a las 06:30 no llegará a Zermatt antes de las 10:00: su estancia coincide con el mediodía, compruebe las notas de AM y PM antes de subir al tren.',
      'En verano los cúmulos surgen a menudo a partir de las 13:00: al llegar suba de inmediato a Gornergrat antes de pasear por el pueblo.',
      'Si el índice de mañana es ≤ 5/10, utilice su Swiss Travel Pass en zonas más despejadas (Lucerna/Rigi, Oberland bernés o Montreux) y deje Zermatt para un día radiante.',
    ],
    comparisonTable: {
      caption: 'Conexiones de tren SBB hacia Zermatt',
      headers: ['Estación de origen', 'Tiempo de trayecto', 'Transbordo', 'Salida recomendada', 'Llegada a Zermatt'],
      rows: [
        ['Zúrich HB', '3h 14m', '1 cambio en Visp (7–9 min en el mismo andén)', '06:02 o 07:02 CET', '09:14 o 10:14 CET'],
        ['Ginebra Cornavin', '3h 45m', '1 cambio en Visp (IR90 a tren MGB)', '05:50 o 06:24 CET', '09:51 o 10:14 CET'],
        ['Berna', '2h 10m', '1 cambio en Visp (túnel de base)', '07:07 o 08:07 CET', '09:14 o 10:14 CET'],
        ['Basilea SBB', '3h 12m', '1 cambio en Visp', '06:03 o 06:56 CET', '09:14 o 10:14 CET'],
        ['Interlaken Ost', '2h 18m', '2 cambios en Spiez y Visp', '07:00 o 08:00 CET', '09:14 o 10:14 CET'],
      ],
    },
    sections: [
      {
        id: 'go-no-go-matrix',
        heading: '1. La regla de decisión de las 06:00 antes de subir al tren',
        paragraphs: [
          'El error más habitual es comprar con semanas de antelación billetes fijos para Zermatt desde Zúrich o Ginebra. Zermatt está encajonado en un valle del sur en la frontera italiana, con un clima desvinculado de la llanura suiza: puede llover torrencialmente en Zúrich mientras el Cervino luce un cielo azul 10/10 — o al revés.',
          'Consulte nuestros índices de AM y PM a las 06:00 antes de salir del hotel:',
        ],
        bulletPoints: [
          {
            bold: 'GO — Notas de AM y PM entre 8/10 y 10/10:',
            text: '¡Suba al tren de inmediato! Un anticiclón estable garantiza panorámicas perfectas durante todo el día.',
          },
          {
            bold: 'GO MADRUGADOR — AM entre 8–10/10, pero PM baja a 5–6/10:',
            text: 'Muy habitual de mayo a agosto. Solo compensa si toma el primer tren (06:02 de Zúrich / 06:24 de Ginebra) y sube a Gornergrat nada más llegar a las 09:30/10:15 ANTES de comer.',
          },
          {
            bold: 'NO-GO — Ambas notas en ≤ 4/10:',
            text: 'Cancele o aplace la excursión. Invertir 7 horas de viaje y más de 200 CHF para contemplar niebla a 3.089 m nunca compensa.',
          },
        ],
        proTip: {
          label: 'Truco en el transbordo de Visp',
          text: 'No tema a los 7 minutos de enlace en Visp: los trenes rojos de la Matterhorn Gotthard Bahn esperan frente a su vía. Siéntese en el lado IZQUIERDO en el sentido de subida para contemplar los cañones más espectaculares.',
        },
      },
      {
        id: 'perfect-day-trip-itinerary',
        heading: '2. El itinerario ideal de 1 día: Cumbre primero, pueblo después',
        paragraphs: [
          'Como las nubes casi siempre se forman por la tarde, altere la rutina del turista: no malgaste la claridad de la mañana en las tiendas de la calle principal.',
          'Al llegar a las 09:14 o 10:14, cruce la explanada (60 metros) a la estación de Gornergrat. A 3.089 m la cara Este resplandece con la luz matutina. Al bajar hacia mediodía, pare en Rotenboden para fotografiar el reflejo en el lago Riffelsee. Hacia las 13:30 regrese al pueblo para almorzar, caminar por Kirchbrücke y recorrer los antiguos graneros de Hinterdorf.',
        ],
      },
      {
        id: 'gornergrat-vs-glacier-daytrip',
        heading: '3. Gornergrat vs. Glacier Paradise con el tiempo medido',
        paragraphs: [
          'Para una excursión de un día, Gornergrat supera a Glacier Paradise (3.883 m). La estación del tren cremallera está justo frente a la llegada del SBB, ahorrándole los 15 minutos de caminata o autobús eléctrico hasta el extremo sur del pueblo.',
          'Además, ascender desde Zúrich (408 m) a 3.883 m en una mañana supone un salto de altitud de unos 3.500 metros que a menudo causa mareos, mientras que Gornergrat (3.089 m) es mucho más amable para el cuerpo y regala la silueta Toblerone durante todo el trayecto.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cubre el Swiss Travel Pass el viaje a Zermatt?',
        answer:
          '¡Sí! El Swiss Travel Pass (y la tarjeta de ahorro SBB) cubre el 100% del viaje hasta el pueblo de Zermatt (incluido el tren de montaña desde Visp). Ofrece además un 50% de descuento en el tren de Gornergrat y en Glacier Paradise.',
      },
      {
        question: '¿Se puede hacer la excursión de un día en invierno?',
        answer:
          'Por supuesto: de noviembre a febrero se registran los cielos más limpios del año (84%–89%). Recuerde que en diciembre anochece hacia las 16:45, por lo que viajar a las 06:02 o 07:02 es clave.',
      },
      {
        question: '¿A qué hora sale el último tren de regreso?',
        answer:
          'Salen trenes cada 30 o 60 minutos hasta cerca de las 20:37 (llegada a Zúrich HB hacia las 00:05 y a Ginebra hacia las 00:20). La mayoría de excursionistas regresa en los trenes de las 16:37, 17:37 o 18:37 tras el atardecer.',
      },
    ],
  },
};
