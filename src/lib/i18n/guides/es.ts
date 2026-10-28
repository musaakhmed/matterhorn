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

  'christmas-in-zermatt-matterhorn': {
    title: 'Navidad en Zermatt: magia invernal, chalets acogedores y vistas despejadas del Cervino',
    shortTitle: 'Guía de Navidad en Zermatt',
    description:
      'Todo lo que necesita para celebrar la Navidad en Zermatt: chalets de cuento cubiertos de nieve, un 89% de cielo despejado en diciembre, fondue junto al fuego, trineos de caballos y excursiones de montaña en fiestas.',
    category: 'Invierno y estaciones',
    heroStat: {
      label: 'Cielo despejado en diciembre',
      value: '89% de claridad',
      detail: 'La probabilidad mensual más alta del año de ver la cumbre despejada',
    },
    keyTakeaways: [
      'Diciembre registra un 89% de probabilidad estadística de cumbre despejada, la más alta de cualquier mes en Zermatt, gracias al aire frío y seco de alta presión y a la ausencia de corrientes térmicas de verano.',
      'Zermatt es estrictamente un pueblo sin coches; en Navidad se recorren sus callejones adoquinados en silencio, en taxis eléctricos, en trineos de caballos con campanillas de latón y a pie bajo las iluminaciones.',
      'Las cenas de Nochebuena y del día de Navidad (fondue suiza de queso, raclette del Valais y especialidades de trufa negra) se agotan con meses de antelación: reserve mesa en octubre o noviembre.',
      'El tren cremallera de Gornergrat y los teleféricos de Klein Matterhorn funcionan los 365 días del año, así que subir a 3.089 m la mañana de Navidad es una tradición alpina inolvidable.',
    ],
    comparisonTable: {
      caption: 'Referencia rápida de excursiones y momentos de la Navidad en Zermatt',
      headers: [
        'Actividad / tradición',
        'Lugar / ruta',
        'Mejor momento',
        'Por qué es mágico en Navidad',
      ],
      rows: [
        [
          'Paseo de Nochebuena y Glühwein',
          'Bahnhofstrasse y Kirchplatz',
          '17:00–19:30 CET (crepúsculo)',
          'Árbol de Navidad iluminado del pueblo, villancicos del coro junto a la iglesia de San Mauricio y castañas asadas.',
        ],
        [
          'Tren panorámico de invierno a Gornergrat',
          'Tren cremallera desde Zermatt (33 min)',
          '09:00–14:00 CET',
          'Asciende entre pinares nevados hasta 3.089 m, con vistas de 360° a 29 cuatromiles.',
        ],
        [
          'Paseo por los chalets históricos de Hinterdorf',
          'Detrás del Monte Rosa Hotel',
          'Hora azul (16:30–17:30 CET)',
          'Graneros de alerce de 500 años (Gädi) cubiertos de nieve polvo intacta.',
        ],
        [
          'Cena de fondue de queso junto al fuego',
          'Stübli y chalets tradicionales de Zermatt',
          '19:00–22:00 CET',
          'Quesos AOP del Valais fundidos con ajo y vino Fendant, junto a una chimenea crepitante.',
        ],
        [
          'Matterhorn Glacier Palace y esquí',
          'Klein Matterhorn (3.883 m)',
          '10:00–14:30 CET',
          'Las pistas de esquí más altas de Europa y túneles de esculturas de hielo a 15 m de profundidad en el glaciar.',
        ],
      ],
    },
    sections: [
      {
        id: 'why-zermatt-christmas-is-magical',
        heading: '1. Por qué Zermatt es el destino alpino de Navidad por excelencia',
        image: {
          src: '/guides/zermatt-winter-chalets.jpg',
          alt: 'Chalets suizos de madera tradicionales en Zermatt, cubiertos de nieve espesa de invierno, bajo el Cervino',
          caption: 'Chalets históricos de alerce oscurecido por el sol, cubiertos de nieve polvo reciente de diciembre en Zermatt.',
        },
        paragraphs: [
          'Pocos lugares del mundo encarnan el espíritu de cuento de la Navidad como Zermatt. Encajado en un valle profundo bajo la pirámide vertical del Cervino (4.478 m), este pueblo suizo sin coches se convierte cada diciembre en una bola de nieve viviente.',
          'Como los vehículos de combustión están prohibidos desde 1966, no hay rugido de tráfico ni nieve sucia de escapes: solo el crujido de la nieve fresca, el zumbido suave de los pequeños autobuses eléctricos y el tintineo rítmico de las campanillas de latón en los trineos de caballos, frente a hoteles históricos como el Mont Cervin Palace y el Grand Hotel Zermatterhof.',
          'En Bahnhofstrasse y Kirchplatz, guirnaldas doradas envuelven los abetos cargados de nieve, y los escaparates muestran adornos suizos de madera hechos a mano, chocolates artesanos y calderos de cobre humeantes con Glühwein especiado (vino caliente) y castañas asadas (marroni).',
        ],
        proTip: {
          label: 'Secreto local',
          text: 'Entre en el barrio de Hinterdorf, justo detrás de Bahnhofstrasse, al anochecer (16:45 CET). Los callejones peatonales entre graneros de alerce del siglo XVI parecen un cuadro invernal del siglo XIX cuando la nieve los cubre por completo.',
        },
      },
      {
        id: 'december-weather-matterhorn-clarity',
        heading: '2. El tiempo en diciembre: por qué la Navidad tiene los cielos más despejados del año',
        paragraphs: [
          'Muchos viajeros dan por hecho que el verano trae el mejor tiempo de montaña, pero 30 años de telemetría alpina oficial suiza cuentan exactamente lo contrario. Diciembre es, en cifras, el mes más despejado de todo el año en Zermatt, con un 89% de probabilidad de cielo despejado en la cumbre del Cervino.',
          'En invierno, la atmósfera sobre los Alpes Peninos queda bajo anticiclones continentales fríos, estables y secos. A diferencia de julio y agosto —cuando el sol intenso del valle crea corrientes térmicas por la tarde (vientos anabáticos) que disparan cúmulos espesos hacia las 13:00 CET—, el aire de diciembre permanece cristalino todo el día. Si mira hacia el Cervino a las 10:00 CET o a las 15:00 CET, la montaña se recorta nítida contra un cielo índigo intenso.',
        ],
        bulletPoints: [
          {
            bold: 'El aire bajo cero mantiene la visibilidad impecable:',
            text: 'Las temperaturas medias de diciembre en el pueblo de Zermatt van de -6°C a +1°C, y en las terrazas de cumbre (3.089 m–3.883 m) de -14°C a -8°C. El aire frío retiene muy poca humedad y elimina la bruma en la cumbre.',
          },
          {
            bold: 'Resplandor alpino del atardecer invernal (16:30–16:50 CET):',
            text: 'Como el sol se pone pronto a finales de diciembre, no hace falta esperar hasta bien entrada la tarde para fotografiar el resplandor rosa y violeta en la cara Este del Cervino.',
          },
          {
            bold: 'Compruebe la telemetría en vivo por si hay vendaval de Föhn:',
            text: 'Incluso en invierno, los frentes de Föhn del sur pueden traer rachas de más de 45 km/h en altura sobre Klein Matterhorn. Consulte cada mañana nuestro índice de visibilidad en vivo, de 1 a 10, por la mañana y por la tarde, antes de subir a los remontes.',
          },
        ],
      },
      {
        id: 'cozy-dining-fireside-fondue',
        heading: '3. Cocina alpina junto al fuego: fondue, raclette y banquetes de Navidad',
        image: {
          src: '/guides/zermatt-cozy-fondue-matterhorn-wide.jpg',
          alt: 'Una olla de fondue de queso suizo burbujeante, con pan y vino, frente al Cervino nevado',
          caption: 'Nada se compara con una fondue de queso del Valais y una copa de Fendant fresco después de un día en la nieve.',
        },
        paragraphs: [
          'Después de una mañana de invierno en el tren cremallera de Gornergrat, o esquiando las pistas internacionales hacia Cervinia, nada reconforta tanto como reunirse en torno a un caquelon de cerámica con auténtica fondue suiza de queso.',
          'Los restaurantes alpinos y los Stübli tradicionales de Zermatt —como Ferdinand by Cervo, Saycheese!, Chez Vrony y Schäferstube— trabajan quesos AOP del Valais fundidos con vino blanco seco, ajo y un chorro de kirsch. Rascar queso fundido sobre patatas pequeñas (raclette) junto a una chimenea de piedra, mientras nieva en silencio fuera, es el gran consuelo de la Navidad.',
        ],
        proTip: {
          label: 'Estrategia para la cena de Navidad',
          text: 'Las cenas de Nochebuena (24 de diciembre) y del día de Navidad (25 de diciembre) en Zermatt se reservan con semanas o incluso meses de antelación. Muchos restaurantes del pueblo ofrecen menús festivos de varios platos. Reserve mesa ya en octubre o noviembre.',
        },
      },
      {
        id: 'christmas-day-mountain-excursions',
        heading: '4. Excursiones de montaña el día de Navidad: Gornergrat y Glacier Paradise',
        image: {
          src: '/guides/zermatt-winter-snow-village.jpg',
          alt: 'Laderas alpinas nevadas y paisaje de invierno sobre el pueblo de Zermatt, con nieve polvo intacta',
          caption: 'Paisaje de invierno: las laderas de alta montaña sobre Zermatt abren el día de Navidad para el tren cremallera y las caminatas.',
        },
        paragraphs: [
          'Una duda habitual de quien visita Zermatt por primera vez es si los trenes de montaña suizos circulan el día de Navidad. La respuesta es un sí rotundo: tanto el tren cremallera de Gornergrat como los teleféricos de Matterhorn Glacier Paradise funcionan los 365 días del año, si el tiempo lo permite.',
          'Subir en el tren cremallera con calefacción desde la estación de Zermatt la mañana de Navidad es un trayecto inolvidable. El tren rojo asciende con paso firme entre alerces y pinos cembro cargados de nieve, sale a los neveros de alta montaña en Riffelberg (2.582 m) y Rotenboden (2.815 m), y termina en la terraza del observatorio de Gornergrat (3.089 m). Desde allí se contemplan las extensiones heladas de los glaciares Gorner y Findel, hacia las caras Norte y Este del Cervino, cubiertas de nieve intacta.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Nieva siempre en Zermatt en Navidad?',
        answer:
          'Zermatt está a 1.608 metros y el terreno de esquí que lo rodea llega a 3.883 metros, así que tiene uno de los registros de nieve natural más fiables de los Alpes europeos. Una Navidad blanca en el pueblo está prácticamente garantizada, y las pistas de altura permanecen cubiertas de nieve al 100% durante todo diciembre.',
      },
      {
        question: '¿Los trenes de montaña y los remontes abren el día de Navidad en Zermatt?',
        answer:
          'Sí. El tren cremallera de Gornergrat, el funicular de Sunnegga y los teleféricos de Matterhorn Glacier Paradise circulan con su horario de invierno habitual los días 24, 25 y 26 de diciembre. Consulte siempre nuestro índice de visibilidad en vivo, de 1 a 10, por la mañana y por la tarde, el mismo día del viaje para confirmar que la cumbre está despejada.',
      },
      {
        question: '¿Los restaurantes y las tiendas abren durante la semana de Navidad en Zermatt?',
        answer:
          'Sí. De la semana de Navidad a Año Nuevo es la temporada festiva de invierno más intensa en Zermatt. Los supermercados y los alquileres de esquí siguen abiertos (con horario algo más corto la tarde del 24 de diciembre y el 25 de diciembre), y los restaurantes y bares trabajan a pleno rendimiento. Reservar la cena de Nochebuena y del día de Navidad es imprescindible.',
      },
      {
        question: '¿Cuál es la mejor forma de ver el Cervino el día de Navidad?',
        answer:
          'Tome el tren cremallera de Gornergrat de las 08:24 o de las 09:00 CET en la estación de Zermatt. Siéntese en el lado derecho en el sentido de subida: la cara Este del Cervino, cubierta de nieve, queda a la vista de forma continua mientras el sol de la mañana tiñe de oro la nieve reciente.',
      },
    ],
  },

  'gornergrat-railway-vs-glacier-express': {
    title:
      'Tren cremallera de Gornergrat vs. Glacier Express: los dos trenes de montaña más emblemáticos de Suiza',
    shortTitle: 'Gornergrat vs. Glacier Express',
    description:
      'Compare los dos ferrocarriles legendarios de Zermatt: la subida en tren cremallera a Gornergrat (3.089 m) frente al viaje panorámico transalpino de 8 horas del Glacier Express. Con las reglas del Swiss Travel Pass, las tasas de reserva de asiento, el mejor lado y el estado en vivo.',
    category: 'Excursiones',
    heroStat: {
      label: 'Diferencia de viaje',
      value: '33 min vs. 7 h 45 min',
      detail: 'Subida vertical en cremallera a la cumbre (3.089 m) frente a 291 km de tren panorámico transalpino',
    },
    keyTakeaways: [
      'El tren cremallera de Gornergrat (GGB) es una subida vertical de 33 minutos desde Zermatt (1.604 m) directa a la cresta de la cumbre a 3.089 m, con la cara Este del Cervino en primera fila.',
      'El Glacier Express (GEX) es un viaje panorámico transalpino de 8 horas y 291 kilómetros, con 291 puentes y 91 túneles, entre Zermatt y St. Moritz.',
      'Las reglas del Swiss Travel Pass son muy distintas: Gornergrat ofrece un 50% de descuento y no exige reserva de asiento, mientras que el Glacier Express cubre el billete al 100% pero la reserva de asiento de pago es obligatoria (CHF 39–49).',
      'No hace falta elegir entre los dos: ambos se encuentran frente a frente en la explanada de la estación de Zermatt, así que es fácil llegar en Glacier Express y seguir después en el tren cremallera hasta la cumbre.',
      'Consulte nuestro [centro de trenes panorámicos y comparativa de billetes](/trains) para ver el tiempo en la cumbre en vivo, la disposición de los coches y los horarios actualizados antes de reservar.',
    ],
    comparisonTable: {
      caption: 'Gornergrat Bahn vs. Glacier Express: comparativa de características y billetes (2026)',
      headers: [
        'Característica',
        'Tren cremallera de Gornergrat (GGB)',
        'Glacier Express (GEX)',
      ],
      rows: [
        [
          'Finalidad principal',
          'Excursión vertical a la cumbre y mirador del Cervino',
          'Gran travesía panorámica transalpina',
        ],
        [
          'Ruta y término',
          'Zermatt (1.604 m) ↔ cumbre de Gornergrat (3.089 m)',
          'Zermatt (Valais) ↔ St. Moritz / Davos (Grisones)',
        ],
        [
          'Duración del viaje',
          '33 minutos por trayecto',
          '7 horas y 45 minutos (ruta completa de 291 km)',
        ],
        [
          'Vía y tracción',
          'Cremallera doble sistema Abt (ancho métrico, 1.000 mm)',
          'Tramos de adherencia y de cremallera (Matterhorn Gotthard Bahn / RhB)',
        ],
        [
          'Desnivel / cota',
          'Subida de +1.485 m (cota máxima: cumbre a 3.089 m)',
          'Máxima: puerto de Oberalp (2.033 m) / mínima: Chur (585 m)',
        ],
        [
          'Temporada',
          '365 días al año (sin cierre de temporada)',
          'De principios de diciembre a finales de octubre (cierre de mantenimiento de noviembre a principios de diciembre)',
        ],
        [
          'Swiss Travel Pass',
          '50% de descuento (CHF 51–66 ida y vuelta)',
          'Billete gratis al 100% (se aplica la tasa obligatoria de reserva de asiento)',
        ],
        [
          'Reserva de asiento',
          'No hace falta (se sube sin reserva; pase prioritario opcional de CHF 7)',
          'Obligatoria (CHF 39 en temporada baja / CHF 49 en pleno verano)',
        ],
        [
          'Eurail / Interrail',
          'Sin descuento (billete a precio completo)',
          'Billete gratis al 100% (se aplica la tasa obligatoria de reserva de asiento)',
        ],
        [
          'Mejor lado',
          'Lado derecho al subir desde Zermatt (vista del Cervino)',
          'Lado izquierdo al salir de Zermatt hacia Disentis / cualquiera de los dos en la garganta del Rin',
        ],
        [
          'Visibilidad del Cervino',
          'Vistas directas y continuas durante todo el trayecto y en la cumbre',
          'Solo se ve al salir o al llegar dentro del valle de Zermatt',
        ],
        [
          'Paisajes clave',
          'Reflejo en el Riffelsee, glaciar Gorner, 29 cuatromiles',
          'Viaducto de Landwasser, garganta del Rin, lago del puerto de Oberalp',
        ],
      ],
    },
    sections: [
      {
        id: 'gornergrat-overview',
        heading: 'Gornergrat Bahn (GGB): el ferrocarril de cremallera al aire libre más alto de Europa',
        image: {
          src: '/guides/gornergrat-bahn-cogwheel-train.jpg',
          alt: 'Tren cremallera de Gornergrat subiendo la vía alpina hacia la cumbre de Gornergrat, con el Cervino al fondo',
          caption:
            'El tren cremallera de Gornergrat asciende entre praderas alpinas y bosques de alerce hacia la terraza de observación a 3.089 metros.',
        },
        paragraphs: [
          'Inaugurado en 1898 como el primer ferrocarril de cremallera totalmente eléctrico de Suiza, el Gornergrat Bahn (GGB) es una maravilla de la ingeniería. En solo 33 minutos, sus convoyes carmesí y dorados salvan 1.485 metros de desnivel desde el pueblo de Zermatt (1.604 m) hasta la cresta rocosa de Gornergrat (3.089 m).',
          'A diferencia de los trenes panorámicos que discurren por valles fluviales, el Gornergrat Bahn es una subida de montaña puramente vertical. Mientras la cremallera se aferra a rampas del 20%, el panorama de la cara Este del Cervino se abre sin cesar. Las paradas intermedias incluyen Findelbach (cruza un viaducto de piedra espectacular), Riffelalp (2.211 m), Riffelberg (2.582 m) y Rotenboden (2.815 m), inicio de la célebre caminata de 10 minutos hasta el Riffelsee, donde el Cervino se refleja en el agua alpina.',
          'En el término de la cumbre (3.089 m) se sale directamente a la terraza del histórico 3100 Kulmhotel Gornergrat. Desde allí hay un panorama de 360 grados sin obstáculos: el Monte Rosa (4.634 m, la cumbre más alta de Suiza), la colosal lengua del glaciar Gorner y 29 cumbres que superan los 4.000 metros.',
          'Para planear la subida y consultar la nubosidad de la cumbre en tiempo real, visite nuestra [guía del tren cremallera de Gornergrat en el centro de trenes](/trains#gornergrat).',
        ],
        bulletPoints: [
          {
            bold: 'Velocidad y duración:',
            text: '33 minutos por trayecto en 9,3 km de vía, todo el año, con salidas cada 24 a 48 minutos.',
          },
          {
            bold: 'Perfil de altitud:',
            text: 'Asciende de 1.604 m en Zermatt a 3.089 m en la cumbre de Gornergrat (+1.485 m de desnivel).',
          },
          {
            bold: 'Se sube sin reserva:',
            text: 'No hace falta reservar asiento. Escanee el código QR o el Swiss Pass en los torniquetes y suba.',
          },
          {
            bold: 'Caminatas intermedias:',
            text: 'Bájese en Rotenboden para el paseo fotográfico del reflejo en el Riffelsee, o en Riffelberg para comer con el Cervino delante.',
          },
        ],
        proTip: {
          label: 'Mejor lado para sentarse',
          text: 'Siéntese siempre en el lado derecho del vagón al subir en Zermatt. Esas ventanillas ofrecen vistas continuas y cada vez más abiertas de la pirámide del Cervino a medida que el tren supera el límite del bosque.',
        },
      },
      {
        id: 'glacier-express-overview',
        heading: 'Glacier Express (GEX): «el tren expreso más lento del mundo»',
        image: {
          src: '/guides/glacier-express-panoramic-train.jpg',
          alt: 'Tren panorámico Glacier Express atravesando los Alpes suizos, con ventanas en cúpula bajo un cielo azul',
          caption:
            'El Glacier Express recorre los Alpes suizos con ventanas panorámicas en cúpula que se curvan hasta el techo.',
        },
        paragraphs: [
          'Si el Gornergrat Bahn es un ascensor vertical vertiginoso hacia el cielo alpino, el Glacier Express es la gran travesía horizontal del viaje lento a lo largo de la espina dorsal de los Alpes suizos. Une las estaciones de Zermatt, en el Valais, y St. Moritz, en el valle de la Engadina, y cubre 291 kilómetros (181 millas) en unas 7 horas y 45 minutos.',
          'Por el camino el tren cruza 291 viaductos, atraviesa 91 túneles alpinos y corona el puerto de Oberalp a 2.033 metros (6.670 pies), el punto más alto de la línea y el nacimiento del Rin. Entre los tramos más conocidos están el viaducto de Landwasser (un puente curvo de caliza de 65 m de altura que se mete de lleno en un túnel en la pared) y la garganta del Rin («Ruinaulta»), a menudo llamada el Gran Cañón suizo.',
          'Los coches son panorámicos, construidos a propósito, con enormes ventanales curvos que continúan en el techo y dejan una vista continua de paredes de granito, cascadas y cumbres glaciares. A bordo se preparan menús frescos de tres platos y se sirven en la mesa de su asiento mientras el paisaje alpino desfila en silencio.',
          'La disposición de los asientos, los menús y cómo reservar están en nuestra [guía de ruta y asientos del Glacier Express](/trains#glacier-express).',
        ],
        bulletPoints: [
          {
            bold: 'Ruta y duración:',
            text: '291 km entre Zermatt y St. Moritz, en aproximadamente 7 horas y 45 minutos.',
          },
          {
            bold: 'Obras de ingeniería:',
            text: 'Cruza 291 viaductos de piedra y atraviesa 91 túneles, incluidos los túneles helicoidales de la línea del Albula, Patrimonio Mundial de la UNESCO.',
          },
          {
            bold: 'Clase Excellence:',
            text: 'Clase premium con asiento individual garantizado junto a la ventana, conserje dedicado, Glacier Bar privado y un menú regional de degustación de 5 platos con maridaje de vinos.',
          },
          {
            bold: 'Cierre de temporada:',
            text: 'A diferencia de Gornergrat, que circula los 365 días, el Glacier Express para por mantenimiento anual entre finales de octubre y mediados de diciembre.',
          },
        ],
        proTip: {
          label: 'Reserva de asiento obligatoria',
          text: 'A diferencia de los trenes suizos habituales, no se puede subir al Glacier Express sin un asiento reservado, aunque tenga un Swiss Travel Pass ilimitado de primera clase. La reserva abre exactamente 93 días antes en el portal oficial: ponga un aviso en el calendario, porque los asientos panorámicos de pleno verano y de las fechas de esquí se agotan en pocas horas.',
        },
      },
      {
        id: 'pass-rules-pricing',
        heading: 'Precio del Glacier Express, reserva de asiento y Swiss Travel Pass',
        paragraphs: [
          'Muchos viajeros dan por hecho que el Swiss Travel Pass permite subir gratis a cualquier tren de Suiza. La red ferroviaria suiza está muy integrada, pero el Gornergrat Bahn y el Glacier Express pertenecen a tarifas completamente distintas.',
          'Conocer estas reglas de antemano evita suplementos inesperados en taquilla o penalizaciones de reserva en el control de embarque.',
        ],
        bulletPoints: [
          {
            bold: 'Gornergrat Bahn con Swiss Travel Pass:',
            text: 'Hay un 50% de descuento en el billete de adulto (la ida y vuelta de verano baja de unos CHF 132 a CHF 66; la de invierno, de unos CHF 102 a CHF 51). No es gratis al 100% porque se clasifica como ferrocarril de excursión a la cumbre. No hace falta reserva de asiento.',
          },
          {
            bold: 'Gornergrat con la tarjeta Swiss Half Fare:',
            text: 'El mismo 50% de descuento que con el Swiss Travel Pass. Los niños de 6 a 15 años con Swiss Family Card viajan gratis si los acompaña un adulto que paga.',
          },
          {
            bold: 'Glacier Express con Swiss Travel Pass:',
            text: 'El Swiss Travel Pass (y Eurail / Interrail) cubre el billete de tren al 100%. Aun así hay que pagar la reserva de asiento obligatoria: CHF 39 en temporada baja (primavera y otoño) o CHF 49 en pleno verano y en invierno. Sin el comprobante de reserva, se deniega el embarque.',
          },
          {
            bold: 'Suplemento de la clase Excellence del Glacier Express:',
            text: 'Exige un billete válido de primera clase (o un Swiss Travel Pass de primera clase) más un suplemento de clase Excellence, sin descuento, de CHF 470 por persona.',
          },
        ],
        proTip: {
          label: 'Comparativa de billetes y pases en vivo',
          text: 'Compare tarifas, la política de niños y si se admiten perros en nuestra [página comparativa de trenes de montaña suizos](/trains).',
        },
      },
      {
        id: 'which-train-to-choose',
        heading: '¿Qué tren conviene? (o cómo combinar los dos)',
        paragraphs: [
          'Como ambos salen del mismo nudo, la explanada de la estación de Zermatt, se complementan más de lo que compiten. Cuál priorizar depende de la duración del viaje y de lo que quiera ver:',
          '1. Si solo tiene 1 o 2 días en Zermatt: suba en el tren cremallera de Gornergrat. El objetivo es ver y fotografiar el Cervino, caminar el sendero del reflejo en el Riffelsee y llegar a 3.089 metros. En poco más de media hora, Gornergrat le deja delante de la montaña.',
          '2. Si viaja entre el este de Suiza y Zermatt: tome el Glacier Express como trayecto panorámico de larga distancia. En lugar de los trenes regionales habituales por el largo túnel de base del Lötschberg, el Glacier Express convierte el día de desplazamiento en una experiencia paisajística de primer nivel.',
          '3. El itinerario alpino definitivo de 48 horas: llegue a Zermatt en el Glacier Express a última hora de la tarde, con los acantilados del valle de Mattertal delante. Instálese en el hotel, cene una fondue en el pueblo y tome el primer tren cremallera de Gornergrat a las 08:00 para la luz dorada sobre el glaciar Gorner y el Cervino.',
          'Consulte el tiempo en vivo y las rutas alternativas antes de reservar en nuestro [panel de visibilidad del Cervino](/).',
        ],
      },
      {
        id: 'live-tracking-and-weather',
        heading: 'Tiempo en la cumbre en vivo y por qué importa la hora a la que sube',
        paragraphs: [
          'Una diferencia de fondo entre estos dos viajes es cuánto dependen del tiempo. El Glacier Express circula sobre todo por valles profundos y puertos de montaña; incluso con cielo cubierto o lluvia ligera, la bruma alpina, las cascadas y las gargantas de caliza siguen siendo impresionantes.',
          'El Gornergrat Bahn, en cambio, es una subida al aire libre hasta la cumbre. Si estratos bajos o una nube en bandera del Föhn del sur envuelven la cresta de 3.089 m, la visibilidad desde la terraza puede caer a cero y ocultar tanto el Cervino como el glaciar Gorner.',
          'Como los billetes de Gornergrat valen para cualquier tren de la fecha elegida, no los compre con días de antelación sin comprobar el estado de la cumbre en vivo. Antes de subir, consulte el [índice de visibilidad de Gornergrat en el seguimiento de trenes](/trains), que combina la nubosidad en altura, las webcams de la cumbre y la cizalladura del viento en una nota definitiva de 1 a 10 para decidir si conviene subir.',
        ],
        proTip: {
          label: 'Inversión de nubes',
          text: 'A finales de otoño y en invierno, el pueblo de Zermatt puede quedar bajo una niebla espesa («Nebeldecke») mientras Gornergrat, a 3.089 m, está en cielo azul sobre un mar de nubes. Consulte las webcams de altura antes de dar por hecho que un pueblo nublado significa mal tiempo en la cumbre.',
        },
      },
    ],
    faqs: [
      {
        question: '¿El Gornergrat Bahn y el Glacier Express salen de la misma estación en Zermatt?',
        answer:
          'Sí, salen a menos de 50 metros el uno del otro, en la estación de Zermatt. El Glacier Express llega y sale en los andenes principales de Matterhorn Gotthard Bahn (MGB) / SBB, y el Gornergrat Bahn tiene su propio edificio histórico justo al otro lado de la explanada.',
      },
      {
        question: '¿El Gornergrat Bahn es gratis al 100% con el Swiss Travel Pass?',
        answer:
          'No. El Gornergrat Bahn se clasifica como ferrocarril de excursión de alta montaña, así que el Swiss Travel Pass da un 50% de descuento y no el viaje gratis. En 2026, la ida y vuelta de adulto cuesta aproximadamente CHF 66 en verano y CHF 51 en invierno con el pase.',
      },
      {
        question: '¿Se puede hacer solo un tramo del Glacier Express en lugar de las 8 horas completas?',
        answer:
          'Sí. Tramos habituales más cortos: Zermatt–Brig (1 h 20 min), Zermatt–Andermatt (3 h 15 min) y Chur–St. Moritz por el viaducto de Landwasser (2 h). La reserva de asiento es obligatoria en todos los tramos.',
      },
      {
        question: '¿Qué lado del tren tiene la mejor vista en el Gornergrat Bahn?',
        answer:
          'Siéntese siempre en el lado derecho del vagón al subir de Zermatt a Gornergrat (y en el lado izquierdo al bajar). Esas ventanillas miran hacia el Cervino durante casi toda la subida de 33 minutos.',
      },
      {
        question: '¿Qué pasa si compro un billete de Gornergrat y las nubes tapan el Cervino?',
        answer:
          'Los billetes normales del Gornergrat Bahn valen para cualquier tren de la fecha elegida, pero en general no son reembolsables una vez activados. Para evitar la decepción, consulte el índice de visibilidad en vivo de 1 a 10, por la mañana y por la tarde, y las webcams de la cumbre en el [panel de trenes](/trains) antes de comprar en la estación.',
      },
    ],
  },

  'what-is-the-matterhorn': {
    title: '¿Qué es el Cervino? | Altura, ubicación y cómo verlo',
    shortTitle: '¿Qué es el Cervino?',
    description:
      'El Cervino es una pirámide de 4.478 m en la frontera entre Suiza e Italia, sobre Zermatt. Altura, ubicación y cómo comprobar si hoy se ve.',
    category: 'Miradores',
    heroStat: {
      label: 'Altura de la cumbre',
      value: '4.478 m',
      detail: 'Zermatt, Valais, en la frontera entre Suiza e Italia',
    },
    keyTakeaways: [
      'El Cervino es una pirámide de cuatro caras. En italiano se llama Cervino, en francés Cervin y en inglés y alemán Matterhorn.',
      'La cumbre mide 4.478 m (14.692 pies). En alemán esa cifra es la Matterhorn Höhe.',
      'Se alza sobre Zermatt, en el Valais (Suiza), y sobre Breuil-Cervinia, en el Valle de Aosta (Italia).',
      'Consulte el índice en vivo antes de comprar un billete de remonte. Gornergrat mira a la cara Este. Klein Matterhorn mira a la cara Sur.',
    ],
    sections: [
      {
        id: 'what-it-is',
        heading: '¿Qué es el Cervino?',
        paragraphs: [
          'El Cervino es una pirámide de roca de cuatro caras en los Alpes Peninos. Cada cara es tan vertical que, desde Zermatt, la cumbre parece una sola aguja: por eso la vista de la cara Este se apoda el Toblerone.',
          'La misma montaña tiene tres nombres. En inglés y en alemán se dice Matterhorn. En italiano, Cervino. En francés, Cervin. Los tres se refieren a esta cumbre, no a la atracción de Disneyland ni a un oleoducto.',
        ],
      },
      {
        id: 'where-and-height',
        heading: '¿Dónde está el Cervino y cuánto mide?',
        paragraphs: [
          'La cumbre mide 4.478 metros, o 14.692 pies. Esa cifra es la Matterhorn Höhe. El pico está en la frontera entre Suiza e Italia.',
          'En el lado suizo se alza sobre Zermatt, en el cantón del Valais. En el lado italiano, sobre Breuil-Cervinia, en el Valle de Aosta. Las caras Este y Norte son la vista clásica desde el pueblo de Zermatt, Gornergrat y el Riffelsee. Las caras Sur y Oeste miran a Italia y son las que se ven desde Matterhorn Glacier Paradise.',
        ],
      },
      {
        id: 'how-to-see-it',
        heading: 'Cómo ver el Cervino hoy',
        paragraphs: [
          'El [índice de visibilidad en vivo](/) se actualiza cada 15 minutos. Una nota de 8–10 significa que la pirámide está despejada. Una nota de 1–2 significa que está en la nube. Las aplicaciones del tiempo del pueblo leen Zermatt a 1.608 m y no ven la capa de nubes en torno a la cumbre.',
          'Gornergrat (3.089 m) es la vista de la cara Este, a la que se llega en tren cremallera. Klein Matterhorn (3.883 m) es el teleférico hacia la cara Sur. Kirchbrücke, en el pueblo, es gratis. Use la webcam de Gornergrat y la de Klein Matterhorn en la página de inicio antes de comprar un billete.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué es el Cervino?',
        answer:
          'Una pirámide de cuatro caras en los Alpes Peninos. En italiano se llama Cervino, en francés Cervin y en inglés y alemán Matterhorn. La cumbre está a 4.478 m sobre Zermatt.',
      },
      {
        question: '¿Dónde está el Cervino?',
        answer:
          'En la frontera entre Suiza e Italia. El lado suizo queda sobre Zermatt, en el Valais. El lado italiano queda sobre Breuil-Cervinia, en el Valle de Aosta.',
      },
      {
        question: '¿Cuánto mide el Cervino?',
        answer:
          '4.478 metros (14.692 pies). En alemán la búsqueda es Matterhorn Höhe, y la respuesta es 4.478 Meter.',
      },
    ],
  },

  'zermatt-weather-december': {
    title: 'El tiempo en Zermatt en diciembre',
    shortTitle: 'Tiempo en diciembre',
    description:
      'Diciembre es el mes más despejado de Zermatt, con un 89% de probabilidad de ver el Cervino. Nieve, lagos helados y cómo comprobar la cumbre hoy.',
    category: 'Climatología',
    heroStat: {
      label: 'Probabilidad de cielo despejado',
      value: '89%',
      detail: 'El mes más alto del registro de 30 años',
    },
    keyTakeaways: [
      'Diciembre está despejado el 89% de los días. La mañana y la tarde se mantienen abiertas.',
      'El pueblo está bajo la nieve y el Riffelsee helado, así que deje la foto del reflejo.',
      'Consulte el índice en vivo antes de comprar un billete de Gornergrat o de esquí.',
    ],
    sections: [
      {
        id: 'december-clarity',
        heading: 'El tiempo en Zermatt en diciembre',
        paragraphs: [
          'Diciembre es el mes más despejado del registro de 30 años, con un 89% de probabilidad de ver la cumbre del Cervino un día cualquiera. El aire frío y estable casi no forma cúmulos por la tarde, así que tanto la mañana como la tarde se mantienen abiertas.',
          'La nieve cubre el pueblo y los lagos están helados, así que es un mes para mirar y esquiar, no para reflejos. Para la semana de Navidad, los trineos y el horario del pueblo, consulte la [guía de Navidad en Zermatt](/guides/christmas-in-zermatt-matterhorn).',
          'El [índice de visibilidad en vivo](/) es la comprobación de hoy. El resto del año está en [el tiempo en Zermatt mes a mes](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cómo es el tiempo en Zermatt en diciembre?',
        answer:
          'Frío y despejado de un modo poco habitual. Cerca del 89% de los días de diciembre muestran el Cervino, y la tarde se mantiene abierta porque casi no hay nube térmica.',
      },
      {
        question: '¿Se puede ver el reflejo del Riffelsee en diciembre?',
        answer: 'No. El Riffelsee está helado y cubierto de nieve de noviembre a principios de junio.',
      },
    ],
  },

  'zermatt-weather-september': {
    title: 'El tiempo en Zermatt en septiembre',
    shortTitle: 'Tiempo en septiembre',
    description:
      'En septiembre el cielo se despeja cerca del 72% de los días en Zermatt. Los senderos están abiertos y el Riffelsee está líquido para un reflejo del Cervino.',
    category: 'Climatología',
    heroStat: {
      label: 'Probabilidad de cielo despejado',
      value: '72%',
      detail: 'Noches más frescas, alerces dorados, lagos líquidos',
    },
    keyTakeaways: [
      'Septiembre se despeja cerca del 72% de los días, cuando se retiran las nubes de tarde del verano.',
      'Los senderos siguen sin nieve y el Riffelsee puede reflejar la cara Este.',
      'Salga al amanecer. Una brisa suele rizar el lago a primera hora de la tarde.',
    ],
    sections: [
      {
        id: 'september-clarity',
        heading: 'El tiempo en Zermatt en septiembre',
        paragraphs: [
          'En septiembre el cielo se despeja cerca del 72% de los días. Las noches más frescas cortan las térmicas de la tarde que estropean junio y julio, y los bosques de alerce se vuelven dorados en torno a la cara Este.',
          'Los senderos siguen sin nieve y el Riffelsee está líquido, así que es el mes del reflejo del Cervino desde Sunnegga o Rotenboden. Empiece al amanecer. Una brisa suele rizar el lago a primera hora de la tarde aunque la cumbre siga despejada.',
          'Consulte el [índice de visibilidad en vivo](/) la mañana en que suba. El año completo está en [el tiempo en Zermatt mes a mes](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cómo es el tiempo en Zermatt en septiembre?',
        answer:
          'Despejado cerca del 72% de los días. Las noches son lo bastante frescas para frenar los cúmulos de tarde que tapan la cumbre en pleno verano, y los alerces se vuelven dorados.',
      },
      {
        question: '¿El Riffelsee está líquido en septiembre?',
        answer:
          'Sí. La ventana del reflejo va de finales de junio a finales de octubre. Septiembre entra en esa ventana. Vaya al amanecer, antes de la brisa.',
      },
    ],
  },

  'zermatt-weather-may': {
    title: 'El tiempo en Zermatt en mayo',
    shortTitle: 'Tiempo en mayo',
    description:
      'En mayo, Zermatt se despeja el 48–58% de las mañanas. Las nubes de tarde crecen rápido y el Riffelsee sigue helado.',
    category: 'Climatología',
    heroStat: {
      label: 'Probabilidad de cielo despejado',
      value: '48–58%',
      detail: 'Fiable solo antes del mediodía',
    },
    keyTakeaways: [
      'Mayo queda en el rango de finales de primavera: 48–58% de días despejados.',
      'La ventana útil es la mañana. El deshielo alimenta cúmulos por la tarde.',
      'El Riffelsee sigue helado. Deje el reflejo para finales de junio.',
    ],
    sections: [
      {
        id: 'may-clarity',
        heading: 'El tiempo en Zermatt en mayo',
        paragraphs: [
          'Mayo es un mes de transición. La probabilidad de cielo despejado queda en el rango de finales de primavera, 48–58%, y la ventana fiable es la mañana. La humedad del deshielo alimenta cúmulos a primera hora de la tarde.',
          'El Riffelsee sigue helado en mayo, así que deje la foto del reflejo para finales de junio. Use una mañana clara para Gornergrat o el puente del pueblo, y trate la tarde como un día de valle.',
          'Consulte el [índice de visibilidad en vivo](/) antes de salir del hotel. Los demás meses están en [el tiempo en Zermatt mes a mes](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cómo es el tiempo en Zermatt en mayo?',
        answer:
          'Un mes de transición. Cerca de la mitad de los días se despejan por la mañana y luego los cúmulos crecen a primera hora de la tarde, cuando el deshielo aporta humedad.',
      },
      {
        question: '¿Se puede fotografiar el Riffelsee en mayo?',
        answer:
          'El lago sigue helado en mayo. Los reflejos en agua líquida empiezan a finales de junio. Use una mañana clara de mayo en Gornergrat o en Kirchbrücke.',
      },
    ],
  },

  'glacier-express': {
    title: 'Glacier Express: precio, ruta y reserva de asiento',
    shortTitle: 'Glacier Express',
    description:
      'Precios del billete del Glacier Express, la reserva de asiento obligatoria, la ruta de Zermatt a St. Moritz y en qué se diferencia del Bernina Express.',
    category: 'Excursiones',
    heroStat: {
      label: 'Reserva de asiento',
      value: 'CHF 39–49',
      detail: 'Obligatoria, además del billete de tren',
    },
    keyTakeaways: [
      'Un billete de solo ida en segunda clase cuesta unos CHF 159. En primera clase, unos CHF 272. Los dos siguen necesitando reserva de asiento.',
      'La reserva cuesta CHF 39 en temporada baja y CHF 49 en pleno verano. Se abre 93 días antes.',
      'La clase Excellence suma CHF 470 a un billete de primera clase. Hay 20 plazas.',
      'El Bernina Express es la misma compañía ferroviaria en otro valle. No va a Zermatt.',
    ],
    sections: [
      {
        id: 'glacier-express-price',
        heading: 'Precio del Glacier Express',
        paragraphs: [
          'La tarifa de adulto en solo ida es de CHF 159 en segunda clase o CHF 272 en primera clase, y ese precio no incluye el asiento. El Swiss Travel Pass y Eurail cubren el billete de tren. No cubren la reserva.',
          'La clase Excellence es un coche panorámico 1+1 con 20 plazas. El suplemento es de CHF 470 además de un billete o pase de primera clase, e incluye una bienvenida con champán y un almuerzo de cinco platos. Las plazas suelen agotarse la mañana en que abre la reserva.',
        ],
      },
      {
        id: 'seat-reservation',
        heading: 'Reserva de asiento',
        paragraphs: [
          'Cada pasajero del Glacier Express necesita una reserva de asiento: CHF 39 en temporada baja y CHF 49 en pleno verano. Los niños que viajan gratis con un pase también la pagan. Las reservas abren 93 días antes de la salida.',
          'El tren panorámico hace una pausa desde aproximadamente mediados de octubre hasta mediados de diciembre. Los trenes regionales de Matterhorn Gotthard Bahn y del Ferrocarril Rético (RhB) siguen circulando por las mismas vías entre Zermatt, Brig, Andermatt y St. Moritz, sin la reserva del Glacier Express ni el coche restaurante.',
        ],
      },
      {
        id: 'route',
        heading: 'Ruta de Zermatt a St. Moritz',
        paragraphs: [
          'El recorrido completo dura unas ocho horas desde Zermatt (1.604 m) hasta St. Moritz (1.775 m), por el puerto de Oberalp a 2.033 m. Algunos servicios siguen hacia Davos. Los tramos más conocidos son la garganta del Rin y el viaducto de Landwasser, cerca de Filisur.',
          'Desde Zúrich o Ginebra se cambia en Visp al Matterhorn Gotthard Bahn hacia Zermatt, y allí se sube al Glacier Express. Tramos más cortos que también exigen reserva: Zermatt–Brig (unas 1 hora y 20 minutos) y Zermatt–Andermatt (unas 3 horas y 15 minutos).',
        ],
      },
      {
        id: 'bernina-express',
        heading: 'Glacier Express o Bernina Express',
        paragraphs: [
          'Los dos son servicios panorámicos del Ferrocarril Rético y de Matterhorn Gotthard Bahn, y no se sustituyen entre sí. El Glacier Express cruza los Alpes de Zermatt a St. Moritz. El Bernina Express va de Chur o St. Moritz, por el puerto del Bernina, hasta Tirano, en Italia.',
          'Tome el Glacier Express por el Cervino, el puerto de Oberalp y Zermatt. Tome el Bernina Express por los glaciares del Bernina y el descenso a Italia. St. Moritz es el único lugar donde se cruzan las dos rutas.',
        ],
      },
      {
        id: 'today',
        heading: '¿Conviene subir hoy?',
        paragraphs: [
          'La [página de trenes](/trains) indica si el Glacier Express está en su horario de temporada o en la pausa de otoño, además del índice de Gornergrat en vivo. Una nota alta significa que el Cervino está despejado en el extremo de Zermatt. No cambia el tiempo del Oberalp a mitad de ruta.',
          'El tren cremallera de Gornergrat es otro tren: 33 minutos desde Zermatt hasta 3.089 m, sin reserva obligatoria. Compare los dos en la [guía de Gornergrat vs. Glacier Express](/guides/gornergrat-railway-vs-glacier-express).',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Cuánto cuesta el Glacier Express?',
        answer:
          'Unos CHF 159 en solo ida en segunda clase, o CHF 272 en primera clase, más una reserva de asiento obligatoria de CHF 39 o CHF 49. El Swiss Travel Pass cubre el billete y no la reserva.',
      },
      {
        question: '¿Hace falta reserva de asiento en el Glacier Express?',
        answer:
          'Sí. Sin ella se deniega el embarque. Reserve cuando se abren las plazas, 93 días antes del viaje. La clase Excellence cuesta CHF 470 de suplemento y tiene 20 plazas.',
      },
      {
        question: '¿Cuál es la ruta del Glacier Express?',
        answer:
          'De Zermatt a St. Moritz en unas ocho horas, por Visp, Brig, Andermatt y el puerto de Oberalp, con algunos trenes hacia Davos. El Bernina Express es una línea distinta, de St. Moritz a Tirano.',
      },
    ],
  },

  'hotels-with-matterhorn-view': {
    title: 'Hoteles con vista al Cervino',
    shortTitle: 'Hoteles con vista',
    description:
      'Qué hoteles de Zermatt ven de verdad la cara Este del Cervino, cuáles quedan junto a los lagos del reflejo y cuáles siguen despejados cuando la nube del valle tapa el pueblo.',
    category: 'Miradores',
    heroStat: {
      label: 'La vista que falla primero',
      value: 'El pueblo',
      detail: 'Las habitaciones de la cara Este a 1.620 m se pierden con nube de valle',
    },
    keyTakeaways: [
      'Las habitaciones del pueblo miran a la cara Este y pierden la cumbre antes que nadie cuando baja la base de las nubes.',
      'Riffelalp es el hotel en el camino hacia el Riffelsee. Sunnegga es una terraza para el día, no un hotel donde pasar la noche.',
      'El Riffelhaus y el Kulmhotel Gornergrat quedan por encima de la niebla del valle que tapa el pueblo.',
    ],
    sections: [
      {
        id: 'village-east-face',
        heading: 'Cara Este desde el pueblo',
        paragraphs: [
          'Las habitaciones del pueblo miran valle arriba, hacia la cara Este. The Omnia está en la ladera sobre la iglesia, y el Mont Cervin Palace mira a la cumbre desde el fondo del pueblo. Los dos se alcanzan a pie desde Kirchbrücke, el mirador gratuito.',
          'Esta es la vista que se apaga primero. Una capa de nubes en torno a 2.000–2.500 m puede ocultar la cumbre desde el pueblo mientras Gornergrat, a 3.089 m, sigue despejado. Consulte el [índice en vivo](/) y el [mirador del pueblo](/viewpoints/zermatt-village) antes de dar por garantizada una habitación con «vista al Cervino».',
        ],
      },
      {
        id: 'riffelsee-and-sunnegga',
        heading: 'Sunnegga y Riffelsee',
        paragraphs: [
          'El reflejo es la cara Este en el Riffelsee, a cinco minutos a pie bajando desde Rotenboden, y en el Stellisee, por encima de Sunnegga. Sunnegga en sí es una terraza del funicular para el día. No hay hotel en la orilla del lago.',
          'El Riffelalp Resort 2222 es el alojamiento de ese paseo. Está en el tren cremallera de Gornergrat, por debajo de Rotenboden, con la cara Este delante del hotel. El agua solo refleja la cumbre de finales de junio a octubre, y solo mientras el viento se mantiene por debajo de unos 12 km/h. La [página del Riffelsee](/viewpoints/riffelsee) es la comprobación del día. [Sunnegga](/viewpoints/sunnegga) es la terraza inferior y el inicio del paseo de los lagos.',
        ],
      },
      {
        id: 'gornergrat-side',
        heading: 'Lado de Gornergrat',
        paragraphs: [
          'Dos hoteles están en la cresta, por encima de la niebla que llena Zermatt. El Riffelhaus 1853 está en Riffelberg, a 2.582 m, una parada antes de Rotenboden. El Kulmhotel Gornergrat está en la estación de la cumbre, a 3.089 m, junto al mirador.',
          'Esas habitaciones conservan la cara Este cuando el pueblo está en la nube, y la pierden cuando la propia cumbre queda tapada. La [página de Gornergrat](/viewpoints/gornergrat) es el índice de esa altitud. Ninguno de los dos hoteles es motivo para saltarse la webcam.',
        ],
      },
    ],
    faqs: [
      {
        question: '¿Qué hoteles tienen vista al Cervino?',
        answer:
          'En el pueblo, The Omnia y el Mont Cervin Palace miran a la cara Este. En el tren cremallera, el Riffelalp Resort 2222 mira a la misma cumbre, más cerca del Riffelsee. El Riffelhaus 1853 y el Kulmhotel Gornergrat quedan por encima de la niebla del valle.',
      },
      {
        question: '¿Qué vista del Cervino desaparece primero con nubes?',
        answer:
          'La del pueblo. Una base de nubes cerca de 2.000 m oculta la cumbre desde Kirchbrücke mientras los hoteles de Gornergrat siguen por encima. Cuando baja el índice a 3.089 m, fallan todas las vistas a la vez.',
      },
    ],
  },
};
