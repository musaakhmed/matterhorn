import { GuideTranslation } from '../guides';

export const ptGuides: Record<string, GuideTranslation> = {
  'gornergrat-vs-glacier-paradise': {
    title: 'Gornergrat vs. Matterhorn Glacier Paradise: qual miradouro é melhor?',
    shortTitle: 'Gornergrat vs. Glacier Paradise',
    description:
      'Compare o Gornergrat (face leste, 3.089 m) e o Matterhorn Glacier Paradise (face sul e vertente do Breithorn, 3.883 m) pelo ângulo sobre o Matterhorn, a resistência às nuvens, o preço do bilhete e a altitude.',
    category: 'Miradouros',
    heroStat: {
      label: 'Diferença de altitude',
      value: '794 m',
      detail: 'Gornergrat (3.089 m) vs. Klein Matterhorn (3.883 m)',
    },
    keyTakeaways: [
      'O Gornergrat (3.089 m) oferece a silhueta piramidal icónica de leste/nordeste, a forma Toblerone, e está muito menos sujeito a encerramentos de teleférico por vento forte.',
      'O Matterhorn Glacier Paradise (3.883 m) coloca-o quase 800 m mais acima, no planalto glaciar, com o perfil sul/oeste, dramático e menos familiar.',
      'Por causa de nuvens de onda de sotavento e do vento Föhn, um miradouro marca muitas vezes 8/10 enquanto o outro fica em 4/10. Compare sempre as duas pontuações ao vivo antes de comprar bilhetes.',
      'Se só fizer uma excursão à montanha para fotografar a forma clássica do Matterhorn, escolha o Gornergrat no comboio de cremalheira.',
    ],
    comparisonTable: {
      caption: 'Telemetria e excursão lado a lado',
      headers: ['Critério', 'Gornergrat (3.089 m)', 'Matterhorn Glacier Paradise (3.883 m)'],
      rows: [
        [
          'Ângulo sobre o Matterhorn',
          'Face leste clássica e aresta de Hörnli (perfil «Toblerone»)',
          'Face íngreme de sul e oeste, italiana, a face de Furgg',
        ],
        [
          'Transporte',
          'Comboio de cremalheira com vista aberta (33 min desde Zermatt)',
          'Gôndola 3S e rede de teleféricos via Furi / Trockener Steg (45 min)',
        ],
        [
          'Resistência ao vento e à tempestade',
          'Alta — o comboio de cremalheira circula com vento forte',
          'Moderada — os cabos a 3.883 m fecham primeiro com rajadas de Föhn (>50 km/h)',
        ],
        [
          'Melhor janela de luz',
          '06:00–11:00 HEC (arrebol da manhã direto na face leste)',
          '11:00–16:00 HEC (sol alto ao meio-dia e luz de oeste à tarde)',
        ],
        [
          'Reflexos em lagos no percurso',
          'Sim — Riffelsee (paragem de Rotenboden, junho–outubro)',
          'Desvio opcional por Schwarzsee (2.583 m)',
        ],
        [
          'Risco de mal da altitude',
          'Baixo a moderado (3.089 m)',
          'Elevado em subidas rápidas (ar rarefeito a 3.883 m)',
        ],
      ],
    },
    sections: [
      {
        id: 'matterhorn-angle',
        heading: '1. A silhueta do Matterhorn: pirâmide clássica vs. parede de alta montanha',
        paragraphs: [
          'Quem visita Zermatt pela primeira vez surpreende-se muitas vezes: a partir do Matterhorn Glacier Paradise (Klein Matterhorn), a montanha parece completamente diferente do que se vê da aldeia ou do Gornergrat.',
          'Do Gornergrat, a 3.089 metros, olha-se em frente, por cima do glaciar de Gorner, para as faces leste e norte, separadas pela aresta de Hörnli, afiada como uma lâmina. É a pirâmide inconfundível, com o gancho famoso em todo o mundo. Do Glacier Paradise, a 3.883 metros, está-se muito mais perto da fronteira sul com Itália e vê-se o Matterhorn de lado, mais largo, mais maciço e menos curvo.',
        ],
        proTip: {
          label: 'Veredito do fotógrafo',
          text: 'Para o postal clássico, sobretudo com o reflexo espelhado no Riffelsee (estação de Rotenboden), o Gornergrat ganha sem discussão.',
        },
      },
      {
        id: 'weather-differences',
        heading: '2. Porque é que a pontuação de visibilidade difere entre 3.089 m e 3.883 m',
        paragraphs: [
          'Uma razão central para termos um motor de pontuação com dois miradouros em isthematterhornvisible.com é que o Gornergrat e o Glacier Paradise estão em regimes atmosféricos diferentes.',
          'Quando ar húmido de Föhn de sul sobe do Val Tournenche, em Itália, as nuvens transbordam pelo passo do Theodule (3.300 m) e envolvem primeiro o Klein Matterhorn (3.883 m), enquanto o Gornergrat, mais abrigado a leste, pode ficar ao sol forte mais 2 a 3 horas. No sentido inverso, nas inversões de inverno com estratos baixos no vale, abaixo de 3.200 metros, o Glacier Paradise fica por completo acima do mar de nevoeiro, enquanto os sectores mais baixos permanecem na bruma cinzenta.',
        ],
        bulletPoints: [
          {
            bold: 'Camada de nuvens médias (3.000 m–4.000 m):',
            text: 'Intersecta diretamente os dois cumes e pesa 60% na nossa pontuação de visibilidade de 1 a 10.',
          },
          {
            bold: 'Encerramentos por rajadas de Föhn:',
            text: 'Ventos de sul acima de 45–55 km/h param com frequência o teleférico Trockener Steg–Klein Matterhorn, ao passo que o comboio de cremalheira da Gornergrat Bahn segue sobre carris.',
          },
        ],
      },
      {
        id: 'ticket-strategy',
        heading: '3. Estratégia de bilhetes: nunca compre com semanas de antecedência um passe de cume não reembolsável',
        paragraphs: [
          'Os bilhetes dos comboios de montanha em Zermatt são caros (muitas vezes CHF 90 a mais de CHF 220, conforme a época e os descontos do Swiss Travel Pass ou do Half-Fare), e nenhum dos miradouros esgota a lotação normal de um dia.',
          'Espere pela véspera, ou pela manhã da subida, e consulte o nosso índice de visibilidade ao vivo de 1 a 10, de manhã (AM) e de tarde (PM), e as webcams Roundshot. Só compre o bilhete do Gornergrat ou do Glacier Paradise quando a pontuação for de 7/10 ou superior.',
        ],
      },
    ],
    faqs: [
      {
        question: 'De que lado do comboio do Gornergrat se vê melhor o Matterhorn?',
        answer:
          'Sente-se do lado direito, no sentido da marcha a subir desde Zermatt. O Matterhorn domina a janela direita quase toda a subida de 33 minutos, por Riffelalp e Rotenboden.',
      },
      {
        question: 'Dá para visitar o Gornergrat e o Glacier Paradise no mesmo dia?',
        answer:
          'Sim, com o Zermatt Peak Pass, mas só se recomenda em dias com previsão de visibilidade de 9/10 ou 10/10 o dia inteiro. Comece no Gornergrat às 08:00 HEC, com a luz da manhã na face leste, e suba ao Glacier Paradise depois das 11:30 HEC.',
      },
      {
        question: 'Com nuvens, é melhor o Gornergrat ou o Glacier Paradise?',
        answer:
          'Se os dois miradouros estiverem em 4/10 ou menos, poupe o dinheiro e fique no vale. Se as nuvens forem só nevoeiro baixo de vale (<2.800 m), o Glacier Paradise (3.883 m) tem mais hipóteses de furar a camada de inversão.',
      },
    ],
  },

  'best-time-to-see-matterhorn': {
    title: 'Tempo em Zermatt por mês | A melhor altura para ver o Matterhorn',
    shortTitle: 'Tempo em Zermatt por mês',
    description:
      'O tempo em Zermatt em dezembro, setembro e maio, e a melhor hora do dia para ver o Matterhorn. Dezembro chega aos 89% de céu limpo.',
    category: 'Climatologia',
    heroStat: {
      label: 'Janela de maior nitidez',
      value: '06:00–10:30',
      detail: 'O bloco da manhã (AM) ganha à tarde (PM) em 78% do ano',
    },
    keyTakeaways: [
      'Dezembro (89%) e janeiro (88%) oferecem, em termos estatísticos, a maior probabilidade diária de uma janela com o cume do Matterhorn cristalino.',
      'Junho (48%) e julho (52%) registam a menor visibilidade de dia inteiro, por causa do aquecimento solar da tarde e dos cúmulos convectivos.',
      'Em qualquer estação, a janela da manhã (AM), das 06:00 às 11:00 HEC, é drasticamente mais limpa do que o bloco da tarde (PM), das 12:00 às 18:00 HEC.',
      'Setembro e outubro («outono dourado») dão o melhor equilíbrio entre trilhos sem neve e 72%–79% de fiabilidade de céu limpo.',
    ],
    sections: [
      {
        id: 'morning-vs-afternoon',
        heading: '1. A regra de ouro de Zermatt: porque é que a manhã (AM) ganha sempre à tarde (PM)',
        paragraphs: [
          'Se só levar um conselho para Zermatt, que seja este: ponha o despertador cedo. Na primavera, no verão e no início do outono, o Matterhorn acorda muitas vezes contra um céu azul-cobalto impecável às 06:30 HEC, para ficar completamente engolido por cúmulos a ferver às 13:30 HEC.',
          'Assim que o sol aquece as paredes escuras de gnaisse e xisto do vale de Mattertal, o ar quente sobe pelas encostas (ventos térmicos anabáticos). Quando esse ar atravessa o nível de congelação dos 3.000 metros, a humidade condensa-se diretamente nas arestas do cume. O nosso painel separa cada dia numa pontuação de 6 horas de manhã (AM) e de tarde (PM) precisamente para não dormir uma manhã limpa.',
        ],
        proTip: {
          label: 'Estratégia do primeiro comboio',
          text: 'No verão, apanhe a partida de cremalheira do Gornergrat das 07:00 ou das 07:36 HEC para chegar ao Riffelsee antes de as nuvens térmicas e a brisa do dia encresparem a água.',
        },
      },
      {
        id: 'seasonal-breakdown',
        heading: '2. Visibilidade estação a estação',
        paragraphs: [
          'Muitos viajantes assumem que o verão tem o «melhor tempo», mas na meteorologia de altitude o ar frio retém muito menos humidade e produz turbulência convectiva mínima.',
        ],
        bulletPoints: [
          {
            bold: 'Inverno (nov.–fev. • 84%–89% de nitidez):',
            text: 'Cristas de alta pressão frias e estáveis criam uma visibilidade cortante e zero acumulação de nuvens térmicas. Mesmo à tarde, o céu fica muitas vezes 10/10 limpo.',
          },
          {
            bold: 'Fim da primavera e início do verão (maio–julho • 48%–58% de nitidez):',
            text: 'A fusão do manto de neve fornece humidade abundante ao vale, que alimenta torres de nuvens rápidas a meio do dia. Ver de manhã cedo é obrigatório.',
          },
          {
            bold: 'Meia-estação de outono (set.–out. • 72%–79% de nitidez):',
            text: 'Noites mais frescas travam as térmicas da tarde, enquanto os lariços dourados emolduram o vale. É, porventura, a melhor estação de fotografia no conjunto.',
          },
        ],
      },
      {
        id: 'zermatt-weather-december',
        heading: 'Tempo em Zermatt em dezembro',
        paragraphs: [
          'Dezembro é o mês mais limpo do registo de 30 anos, com 89% de hipóteses de o cume do Matterhorn estar limpo num dado dia. O ar frio e estável quase não produz cúmulos de tarde, por isso a manhã e a tarde ficam abertas.',
          'A neve cobre a aldeia e os lagos estão gelados, por isso é um mês para ver e esquiar, não para reflexos. Para a semana de Natal, os trenós e o horário da aldeia, veja o [guia de Natal em Zermatt](/guides/christmas-in-zermatt-matterhorn). O mês na página própria é [Tempo em Zermatt em dezembro](/guides/zermatt-weather-december).',
        ],
      },
      {
        id: 'zermatt-weather-september',
        heading: 'Tempo em Zermatt em setembro',
        paragraphs: [
          'Setembro fica limpo em cerca de 72% dos dias. Noites mais frescas desligam as térmicas da tarde que estragam junho e julho, e os lariços ficam dourados à volta da face leste.',
          'Os trilhos ainda estão sem neve e o Riffelsee está líquido, por isso é o mês do reflexo do Matterhorn a partir de Sunnegga ou de Rotenboden. Comece ao nascer do sol. Uma brisa encrespa muitas vezes o lago ao início da tarde, mesmo quando o cume se mantém limpo. O mês na página própria é [Tempo em Zermatt em setembro](/guides/zermatt-weather-september).',
        ],
      },
      {
        id: 'zermatt-weather-may',
        heading: 'Tempo em Zermatt em maio',
        paragraphs: [
          'Maio é um mês de meia-estação. A probabilidade de céu limpo fica na faixa de fim de primavera, 48–58%, e a janela fiável é a manhã. A humidade da neve a derreter alimenta cúmulos já ao início da tarde.',
          'O Riffelsee ainda está gelado em maio, por isso deixe o reflexo para o fim de junho. Use uma manhã limpa para o Gornergrat ou para a ponte da aldeia, e trate a tarde como um dia de vale. O mês na página própria é [Tempo em Zermatt em maio](/guides/zermatt-weather-may).',
        ],
      },
      {
        id: 'how-many-days',
        heading: '3. Quantos dias deve passar em Zermatt para garantir uma vista?',
        paragraphs: [
          'Com base nas curvas de probabilidade de 30 anos em Zermatt, uma estadia de 1 noite em julho dá-lhe aproximadamente uma hipótese de cara ou coroa de uma vista limpa. Ficar 3 manhãs completas sobe a probabilidade acumulada de apanhar pelo menos uma janela ≥8/10 para mais de 88% no verão e 98% no outono e no inverno.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Qual é o melhor mês, em absoluto, para ver o Matterhorn sem nuvens?',
        answer:
          'Dezembro (89%) e janeiro (88%) têm a maior probabilidade estatística de céu limpo. Para quem quer trilhos sem neve e muita nitidez, o fim de setembro e outubro (72%–79%) são os melhores.',
      },
      {
        question: 'A que horas o sol bate no Matterhorn ao nascer do sol?',
        answer:
          'A primeira luz toca a ponta da face leste, a 4.478 m, cerca de 5 a 10 minutos antes do nascer do sol oficial em Zermatt: por volta das 05:30 HECV em junho, das 06:50 HECV em setembro e das 08:00 HEC em dezembro.',
      },
    ],
  },

  'zermatt-cloudy-rainy-day-guide': {
    title: 'O que fazer em Zermatt quando o Matterhorn está escondido nas nuvens (guia de mau tempo)',
    shortTitle: 'Guia de dias nublados e de chuva',
    description:
      'A pontuação de visibilidade do Matterhorn está em 4/10 ou menos hoje? Evite o teleférico de mais de CHF 100 em branco total e explore os melhores planos de chuva em Zermatt: gargantas, museus e spas.',
    category: 'Mau tempo',
    heroStat: {
      label: 'Poupança no bilhete',
      value: 'CHF 110+',
      detail: 'Por pessoa, ao saltar uma subida ao cume em branco total de 1/10',
    },
    keyTakeaways: [
      'Nunca compre um passe de cume para o Gornergrat ou para o Glacier Paradise quando o nosso índice de visibilidade ao vivo está em ≤ 4/10. Só vai ver o interior de uma nuvem.',
      'Verifique se a cobertura é uma «inversão baixa de vale»: por vezes Zermatt (1.608 m) está encoberta enquanto acima de 3.089 m faz sol. Os cartões de camadas atmosféricas mostram isto de imediato.',
      'A garganta de Gorner (Gornerschlucht) fica ainda mais dramática com chuva fraca ou luz nublada, graças às cascatas glaciares a rugir e à serpentinite verde viva.',
      'O Zermatlantis (o Museu do Matterhorn, subterrâneo) e os spas alpinos da aldeia transformam um dia fechado num ponto alto.',
    ],
    sections: [
      {
        id: 'check-inversion-first',
        heading: '1. Espere: é mesmo um dia fechado, ou só uma inversão de nuvem baixa no vale?',
        paragraphs: [
          'Antes de descartar a montanha por completo, olhe para cima, ou consulte a divisão das nuvens em 3 camadas no painel principal. Se a nuvem baixa (2.000 m) estiver a 90%, mas a nuvem média (3.000 m) e a nuvem alta (5.000 m) estiverem abaixo de 15%, a aldeia de Zermatt está presa debaixo de uma inversão de temperatura.',
          'Nesse caso concreto, o comboio de cremalheira até ao Gornergrat (3.089 m) ou a gôndola até ao Glacier Paradise (3.883 m) atravessa o teto de nuvem e deixa-o em sol forte, por cima de um mar de nevoeiro branco. Confirme nas webcams Roundshot em direto antes de embarcar.',
        ],
        proTip: {
          label: 'Verificação na webcam',
          text: 'Cruze sempre a nossa percentagem de nuvens médias com a webcam ao vivo do Gornergrat a 3.100 m. Se as nuvens médias estiverem acima de 75% e a webcam estiver branca, fique no vale.',
        },
      },
      {
        id: 'valley-alternatives',
        heading: '2. As melhores experiências no vale quando a visibilidade está entre 1/10 e 4/10',
        paragraphs: [
          'Quando uma tempestade sinóptica verdadeira, ou uma camada densa de estratos a meia altitude, cobre os Alpes Peninos, guarde o orçamento de montanha para a janela limpa de amanhã e mude para estes planos de vale:',
        ],
        bulletPoints: [
          {
            bold: 'Zermatlantis (Museu do Matterhorn):',
            text: 'Fica debaixo da terra, sob a Kirchplatz. Guarda a corda original partida da trágica primeira ascensão de 1865 e casas alpinas do século XIX reconstruídas.',
          },
          {
            bold: 'Garganta de Gorner (Gornerschlucht):',
            text: 'Uma caminhada plana de 20 minutos a sul da aldeia. Passadiços de madeira agarram-se a falésias estreitas de serpentinite, por cima de água glaciar turquesa a revolver-se.',
          },
          {
            bold: 'Bairro histórico de madeira do Hinterdorf:',
            text: 'Percorra as ruelas atrás da Bahnhofstrasse para fotografar celeiros de lariço com 500 anos (Gädi), erguidos sobre lajes de pedra contra os ratos. A luz difusa de um dia encoberto é a melhor.',
          },
          {
            bold: 'Spas termais alpinos e um fondue longo ao almoço:',
            text: 'Reserve um passe de spa de dia (por exemplo o SchlossSpa ou as piscinas de vitalidade dos hotéis) e, a seguir, um fondue de trufa negra ou de queijo de ervas do Valais na aldeia.',
          },
        ],
      },
      {
        id: 'day-trip-escape',
        heading: '3. A «fuga de microclima» de comboio (a 45–70 minutos)',
        paragraphs: [
          'Como os cumes de 4.000 metros à volta de Zermatt retêm a humidade de sul, o vale principal do Ródano (Visp, Brig, Sion) está com frequência seco e soalheiro mesmo quando chove em Zermatt. Com um Swiss Travel Pass, desce-se até Brig em 1 hora para visitar o Palácio Stockalper ou mergulhar nas termas ao ar livre de Brigerbad.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Posso ter reembolso do bilhete do Gornergrat ou do Glacier Paradise se estiver nublado?',
        answer:
          'Não. A Zermatt Bergbahnen e a Gornergrat Bahn não reembolsam bilhetes por má visibilidade ou nuvens depois da compra. Por isso convém consultar a telemetria ao vivo imediatamente antes de comprar na estação.',
      },
      {
        question: 'A garganta de Gorner abre quando chove?',
        answer:
          'Sim, durante o verão e o outono (em regra de maio a outubro). Leve um casaco impermeável e calçado com boa aderência: o borrifo das cascatas deixa os passadiços de madeira húmidos.',
      },
    ],
  },

  'best-matterhorn-photo-viewpoints': {
    title: 'Melhores miradouros para fotografar o Matterhorn e o nascer do sol em Zermatt',
    shortTitle: 'Melhores fotos e nascer do sol',
    description:
      'Localizações exatas, tempos de caminhada e ângulos de sol ideais nos melhores pontos fotográficos do Matterhorn em Zermatt: nascer do sol na Kirchbrücke, Stellisee, Riffelsee, Findeln e Sunnegga.',
    category: 'Fotografia',
    heroStat: {
      label: 'Lagos de reflexo principais',
      value: '2.537 m e 2.757 m',
      detail: 'Stellisee (Sunnegga–Blauherd) e Riffelsee (Rotenboden)',
    },
    keyTakeaways: [
      'A Kirchbrücke (a ponte da aldeia sobre o rio Mattervispa) é o ponto n.º 1 de nascer do sol, sem custo, para apanhar a ponta em arrebol dourado.',
      'O Stellisee (2.537 m) enquadra o Matterhorn com rochas e margens de erva em primeiro plano. O Riffelsee (2.757 m) dá o reflexo espelhado mais próximo e mais dramático.',
      'Os reflexos espelhados pedem vento abaixo de 12 km/h. Consulte a métrica de vento à superfície no painel antes de caminhar até um lago.',
      'Para telhados da aldeia e o Matterhorn no mesmo enquadramento, suba 10 minutos a pé até ao miradouro de Riedweg / Mürini.',
    ],
    comparisonTable: {
      caption: 'Referência rápida dos miradouros fotográficos de Zermatt',
      headers: ['Miradouro', 'Altitude', 'Acesso desde Zermatt', 'Melhor hora e luz'],
      rows: [
        [
          'Kirchbrücke (ponte da igreja)',
          '1.615 m',
          '5 min a pé da estação (grátis)',
          '15 min antes do nascer do sol (arrebol dourado no cume)',
        ],
        [
          'Miradouro de Mürini / Riedweg',
          '1.710 m',
          '12 min a subir pela Riedstrasse (grátis)',
          'Hora azul e nascer do sol (chalés da aldeia e cume)',
        ],
        [
          'Riffelsee (Rotenboden)',
          '2.757 m',
          '28 min no comboio do Gornergrat até Rotenboden + 5 min a pé',
          '07:30–10:00 HEC (reflexo espelhado com água calma)',
        ],
        [
          'Stellisee (Blauherd)',
          '2.537 m',
          'Funicular de Sunnegga + gôndola de Blauherd + 20 min a pé',
          '08:30–11:00 HEC ou arrebol do pôr do sol',
        ],
        [
          'Findeln e trilho de Chez Vrony',
          '2.050 m',
          '35 min a descer a pé desde Sunnegga',
          'Meio da manhã (celeiros de madeira e prados alpinos)',
        ],
      ],
    },
    sections: [
      {
        id: 'village-sunrise',
        heading: '1. Melhores miradouros da aldeia sem bilhete: Kirchbrücke e Mürini',
        paragraphs: [
          'Não precisa de um passe de teleférico para fazer uma fotografia de primeiro nível do Matterhorn. Como o sol nasce a leste, os primeiros raios batem na ponta das faces de Hörnli e leste enquanto a aldeia de Zermatt ainda está na sombra azul e fresca.',
          'Fique na ponte Kirchbrücke, sobre o rio Mattervispa, 20 minutos antes do nascer do sol oficial, para ver o cume acender-se de rosa pálido a laranja vivo. Se quiser evitar a multidão de tripés na ponte, suba 10 minutos pelo caminho pavimentado em direção a Riedweg (miradouro de Mürini), onde os telhados de madeira dos chalés conduzem o olhar direto ao cume.',
        ],
        proTip: {
          label: 'Verificação do nascer do sol',
          text: 'Antes de sair do hotel às 05:30, olhe para a pontuação da manhã (AM) do Gornergrat e para a métrica de nuvem alta (5.000 m). Cirros altos e finos (20%–35%) até intensificam a cor do nascer do sol, enquanto nuvens médias acima de 50% bloqueiam o arrebol.',
        },
      },
      {
        id: 'mirror-lakes',
        heading: '2. Stellisee vs. Riffelsee: que lago espelho deve escolher?',
        image: {
          src: '/guides/riffelsee-matterhorn-reflection.jpg',
          alt: 'Reflexo espelhado do Matterhorn na água parada do Riffelsee, a 2.757 metros',
          caption:
            'Condições de vidro ao início da manhã no Riffelsee, antes de os ventos térmicos da montanha encresparem a superfície.',
        },
        paragraphs: [
          'Zermatt tem dois lagos alpinos famosos no mundo inteiro que refletem o Matterhorn como vidro, desde que se cumpram duas condições: o lago está descongelado (em regra de meados de junho a meados de outubro) e o vento à superfície está calmo (<12 km/h).',
        ],
        bulletPoints: [
          {
            bold: 'Riffelsee (2.757 m, via Rotenboden na linha do Gornergrat):',
            text: 'Exige só 5 minutos a pé desde a estação de Rotenboden. Como o comboio do Gornergrat começa a circular por volta das 07:00 HEC, chega-se ao Riffelsee muito mais cedo, antes do vento e das nuvens da tarde. Nota: caminhe mais 100 metros até ao segundo lago, mais pequeno («Lower Riffelsee»), para um reflexo sem perturbação se a margem principal estiver com brisa.',
          },
          {
            bold: 'Stellisee (2.537 m, via Sunnegga–Blauherd):',
            text: 'Tem rochas icónicas meio submersas em primeiro plano e uma perspetiva de vale um pouco mais larga. Como a gôndola de Blauherd abre mais tarde (em regra 08:00–08:30), aponte a dias em que o cartão de velocidade do vento mostre <10 km/h.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Quando é que o Riffelsee e o Stellisee estão gelados e cobertos de neve?',
        answer:
          'Os dois lagos ficam acima dos 2.500 metros e estão normalmente gelados, debaixo de neve, de novembro ao início de junho. Reflexos na água só são possíveis de meados ou do fim de junho até outubro.',
      },
      {
        question: 'Porque é que não houve reflexo no Stellisee mesmo num dia de sol?',
        answer:
          'Mesmo uma brisa de 15–20 km/h cria ondulação que desfoca o reflexo. Consulte sempre o cartão de velocidade do vento no painel e caminhe até à margem abrigada de sotavento, ou até ao lago secundário mais pequeno no Riffelsee.',
      },
    ],
  },

  'matterhorn-banner-cloud-fohn-wind': {
    title: 'Porque é que o Matterhorn tem quase sempre uma nuvem no topo? (Nuvens bandeira e ventos de Föhn)',
    shortTitle: 'Nuvem bandeira e física do Föhn',
    description:
      'A física atmosférica da famosa «nuvem bandeira» de sotavento do Matterhorn, a forma como o vento de Föhn de sul a cria em dias que de resto estão limpos, e a forma como a pontuamos.',
    category: 'Meteorologia',
    heroStat: {
      label: 'Altitude do cume',
      value: '4.478 m',
      detail: 'Uma pirâmide isolada de 4 faces dispara quedas de pressão no lado de sotavento',
    },
    keyTakeaways: [
      'A geometria piramidal isolada do Matterhorn funciona como uma asa aerodinâmica no fluxo de altitude e cria um vórtice de baixa pressão no lado de sotavento.',
      'O ar sugado para cima nesse vórtice arrefece de forma adiabática e condensa humidade invisível numa «nuvem bandeira» estacionária, colada ao cume.',
      'As aplicações meteorológicas habituais dizem «sol / 0% de chuva» em Zermatt (1.608 m) mesmo quando uma nuvem bandeira densa esconde os 500 m de cima do cume.',
      'O nosso algoritmo penaliza de propósito a humidade a nível médio (3.000 m) e os vetores de Föhn de sul (180°–270° a ≥ 35 km/h) para prever nuvens bandeira.',
    ],
    sections: [
      {
        id: 'banner-cloud-physics',
        heading: '1. A física da nuvem bandeira do Matterhorn',
        paragraphs: [
          'Qualquer visitante de Zermatt acaba por ver uma cena desconcertante: o céu sobre a Suíça está azul profundo, sem uma única nuvem, exceto um penacho branco e espesso a sair na horizontal do cume do Matterhorn, como fumo de um vulcão.',
          'Ao contrário das nuvens que derivam, uma nuvem bandeira nasce e dissolve-se continuamente no mesmo sítio. Como o Matterhorn é uma pirâmide isolada, de faces íngremes, que sobe até 4.478 metros, o vento que bate na face de barlavento é forçado a contornar e a passar por cima das arestas. Na face abrigada de sotavento, a separação aerodinâmica cria uma bolsa de pressão atmosférica nitidamente mais baixa.',
          'Ar húmido, 500 a 800 metros mais abaixo na montanha, é puxado depressa para cima, para esta esteira de baixa pressão. À medida que sobe e se expande, a temperatura cai abaixo do ponto de orvalho e o vapor de água passa a gotículas de nuvem mesmo contra a face de sotavento. Algumas centenas de metros a jusante do vento, o ar desce, aquece, e a nuvem desaparece de novo no ar limpo.',
        ],
        proTip: {
          label: 'Como ler uma nuvem bandeira',
          text: 'Se o penacho apontar para norte/nordeste, em direção a Zermatt, há vento de sul vindo de Itália e o tempo degrada-se muitas vezes em 12–24 horas. Se fluir para sul, em direção a Itália, está a aguentar-se ar mais seco de norte.',
        },
      },
      {
        id: 'fohn-wind-effect',
        heading: '2. Porque é que as aplicações meteorológicas habituais falham em Zermatt',
        paragraphs: [
          'As aplicações genéricas no telemóvel interpolam as condições da aldeia de Zermatt, no fundo do vale, a 1.608 metros. A 1.608 metros o ar é quente, seco e muitas vezes abrigado dos ventos de níveis altos.',
          'Entretanto, quase 3.000 metros verticais acima, no cume, os ventos da troposfera superior e a humidade a meia altitude decidem se o pico está limpo. É por isso que isthematterhornvisible.com consulta as camadas atmosféricas diretamente nas cotas dos miradouros de alta montanha (3.089 m e 3.883 m) e aplica uma penalização própria de risco de bandeira de Föhn sempre que ventos de sul ou sudoeste (180°–270°) passam de 35 km/h.',
        ],
        bulletPoints: [
          {
            bold: 'Cobertura de nuvens médias (peso de 60%):',
            text: 'Nuvens a cerca de 3.000 m–4.000 m ficam exatamente na linha de visão horizontal entre o Gornergrat ou o Glacier Paradise e o cume a 4.478 m.',
          },
          {
            bold: 'Cobertura de nuvens baixas (peso de 25%):',
            text: 'Afeta a vista a partir do vale, na Kirchbrücke (cerca de 2.000 m), embora os miradouros altos possam por vezes olhar por cima dela.',
          },
          {
            bold: 'Cirros altos (peso de 15%):',
            text: 'Nuvens altas de cristais de gelo, a 5.000 m ou mais, raramente tapam a silhueta do cume, por isso o motor só aplica uma penalização ligeira.',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Uma nuvem bandeira significa que o Matterhorn está completamente invisível?',
        answer:
          'Em regra, não. Uma nuvem bandeira clássica de onda de sotavento sai de um lado da aresta do cume como uma bandeira e deixa a face de barlavento e 70%–85% da pirâmide visíveis (tipicamente uma pontuação de 6/10 ou 7/10, «parcialmente visível»). Já um Föhn forte de sul pode engrossar até uma «muralha de Föhn» que esconde todo o cume superior.',
      },
      {
        question: 'Porque é que a nuvem bandeira desaparece de noite?',
        answer:
          'Quando o aquecimento solar do dia para, as correntes térmicas que alimentam a humidade do vale no vórtice de sotavento acalmam, e o cume limpa-se muitas vezes ao anoitecer e mantém-se nítido até ao início da manhã.',
      },
    ],
  },

  'zurich-geneva-to-zermatt-day-trip': {
    title: 'Comboio Zurique–Zermatt | Horários, mudança em Visp e decisão ao vivo de ir ou não ir',
    shortTitle: 'Comboio de Zurique a Zermatt',
    description:
      'Horários do comboio de Zurique a Zermatt (3 h 14 min), a mudança em Visp e uma decisão ao vivo, ir ou não ir, conforme o Matterhorn, antes de embarcar. Genebra fica a 3 h 45 min.',
    category: 'Passeios de um dia',
    heroStat: {
      label: 'Tempo de comboio ida e volta',
      value: '6,5–7,5 h',
      detail: '3 h 14 min em cada sentido desde Zurique HB • 3 h 45 min desde Genebra',
    },
    keyTakeaways: [
      'Um passeio de um dia a Zermatt desde Zurique ou Genebra exige 6,5 a 7,5 horas de comboio no total. Compensa a 100% num dia limpo de ≥8/10, e é um arrependimento caro num dia nublado de ≤4/10.',
      'Mesmo uma partida às 06:30 HEC de Zurique ou de Genebra só o põe em Zermatt por volta das 10:00 HEC. A janela no cume cai no fim da manhã e no início da tarde, por isso consulte as pontuações AM e PM antes de embarcar.',
      'No verão (junho–agosto), os cúmulos da tarde formam-se muitas vezes pelas 13:00 HEC. Quem vai e volta no dia tem de apanhar a ligação SBB mais cedo e subir direto ao Gornergrat à chegada, antes de explorar a aldeia.',
      'Se a pontuação ao vivo do Matterhorn estiver em ≤5/10 quando acorda em Zurique ou em Genebra, use o Swiss Travel Pass ou o Saver Day Pass numa região mais limpa (por exemplo Lucerna/Rigi, o Oberland bernês ou Montreux) e guarde Zermatt para um dia com pontuação mais alta.',
    ],
    comparisonTable: {
      caption: 'Logística ferroviária SBB para Zermatt a partir dos principais centros suíços',
      headers: [
        'Estação de origem',
        'Tempo de ida',
        'Transbordo',
        'Partida a apontar',
        'Chegada a Zermatt',
      ],
      rows: [
        [
          'Zurique HB',
          '3 h 14 min',
          '1 mudança em Visp (7–9 min, plataformas contíguas)',
          '06:02 ou 07:02 HEC',
          '09:14 ou 10:14 HEC',
        ],
        [
          'Aeroporto de Genebra / Cornavin',
          '3 h 45 min',
          '1 mudança em Visp (IR90 para a cremalheira MGB)',
          '05:50 ou 06:24 HEC',
          '09:51 ou 10:14 HEC',
        ],
        [
          'Berna',
          '2 h 10 min',
          '1 mudança em Visp (pelo túnel de base do Lötschberg)',
          '07:07 ou 08:07 HEC',
          '09:14 ou 10:14 HEC',
        ],
        [
          'Basileia SBB',
          '3 h 12 min',
          '1 mudança em Visp (ou Berna + Visp)',
          '06:03 ou 06:56 HEC',
          '09:14 ou 10:14 HEC',
        ],
        [
          'Interlaken Ost',
          '2 h 18 min',
          '2 mudanças, em Spiez e em Visp',
          '07:00 ou 08:00 HEC',
          '09:14 ou 10:14 HEC',
        ],
      ],
    },
    sections: [
      {
        id: 'go-no-go-matrix',
        heading: '1. A regra das 06:00 HEC: decidir ir ou não ir antes de embarcar',
        paragraphs: [
          'O maior erro de quem viaja na Suíça é reservar com semanas de antecedência excursões de montanha não reembolsáveis em Zermatt, presas a um único dia rígido desde Zurique ou Genebra. Zermatt fica numa bolsa alpina profunda, a sul, junto à fronteira italiana, e o tempo desliga-se por completo do norte da Suíça: pode chover a potes em Zurique com o Matterhorn a 10/10, cristalino, ou fazer sol em Genebra enquanto uma muralha de Föhn de sul esconde o Matterhorn por completo.',
          'Consulte as pontuações ao vivo de manhã (AM) e de tarde (PM) do Gornergrat e do Glacier Paradise, no topo desta página, antes de sair do hotel em Zurique ou em Genebra:',
        ],
        bulletPoints: [
          {
            bold: 'IR — as pontuações AM e PM estão entre 8/10 e 10/10:',
            text: 'Apanhe o comboio de imediato. Há alta pressão estável sobre os Alpes Peninos e vai ter vistas desimpedidas a tarde toda.',
          },
          {
            bold: 'IR CEDO — a manhã está a 8–10/10, mas a tarde cai para 5–6/10:',
            text: 'Muito comum de maio a agosto, por causa das nuvens térmicas da tarde. Só vá se apanhar o comboio das 06:02 (Zurique) ou das 05:50/06:24 (Genebra) e subir na linha do Gornergrat logo às 09:36/10:24 HEC, ANTES de almoçar ou de passear pela aldeia.',
          },
          {
            bold: 'NÃO IR — as pontuações AM e PM estão em ≤ 4/10:',
            text: 'Cancele ou remarque o passeio de um dia a Zermatt. Passar 7 horas num comboio e mais de CHF 200 a olhar para nevoeiro cinzento a 3.089 m nunca compensa. Use o seletor da previsão de 10 dias para escolher o dia com pontuação mais alta do itinerário.',
          },
        ],
        proTip: {
          label: 'O segredo da ligação em Visp',
          text: 'Não entre em pânico com o transbordo de 7 minutos em Visp. Os comboios de linha da SBB chegam mesmo ao lado das vias de bitola estreita, vermelhas, da Matterhorn Gotthard Bahn (MGB), nas plataformas de superfície 1–3. Sente-se do lado ESQUERDO do comboio MGB a subir de Visp para Zermatt, para o desfiladeiro mais fundo e as vistas dos glaciares.',
        },
      },
      {
        id: 'perfect-day-trip-itinerary',
        heading: '2. O horário ideal de um dia em Zermatt (primeiro o cume, depois a aldeia)',
        paragraphs: [
          'Como as nuvens quase sempre se acumulam mais tarde, inverta o programa turístico habitual. Nunca gaste um céu limpo de manhã nas lojas da Bahnhofstrasse ou num pequeno-almoço longo à chegada.',
          'Quando o comboio entrar na estação de Zermatt às 09:14 ou às 10:14 HEC, atravesse logo a praça da estação (60 metros) até ao terminal da Gornergrat Bahn. Suba 33 minutos de cremalheira até ao Gornergrat (3.089 m) enquanto a face leste ainda tem sol de manhã. Na descida, por volta do meio-dia, saia uma paragem abaixo do cume, em Rotenboden (2.757 m), para fotografar o reflexo do Matterhorn no Riffelsee, e volte à aldeia por volta das 13:30 HEC para um almoço sem pressa, uma passagem pela ponte Kirchbrücke e os celeiros de madeira históricos do Hinterdorf. Estas atividades continuam ótimas mesmo que apareçam nuvens bandeira à tarde.',
        ],
      },
      {
        id: 'gornergrat-vs-glacier-daytrip',
        heading: '3. Gornergrat vs. Glacier Paradise quando o relógio do dia é curto',
        paragraphs: [
          'Num passeio de um dia desde Zurique ou Genebra, o Gornergrat é quase sempre a escolha mais inteligente do que o Matterhorn Glacier Paradise (3.883 m). A estação de cremalheira do Gornergrat fica mesmo em frente da plataforma de chegada em Zermatt, e poupa a caminhada de 15 minutos, ou o autocarro elétrico, até à ponta sul da aldeia, onde começa a gôndola do Glacier Paradise.',
          'Ainda mais importante: subir de Zurique (408 m) ou de Genebra (375 m) direto aos 3.883 m do Glacier Paradise numa única manhã é um salto de altitude de 3.500 metros, que provoca dores de cabeça e tonturas com frequência. O Gornergrat (3.089 m) é mais suave e mostra a silhueta clássica Toblerone durante a subida inteira.',
        ],
      },
    ],
    faqs: [
      {
        question: 'O Swiss Travel Pass cobre o comboio de Zurique ou de Genebra até Zermatt?',
        answer:
          'Sim. O Swiss Travel Pass (e o Saver Day Pass da SBB) cobre 100% da viagem desde Zurique, Genebra, Basileia ou Berna até à aldeia de Zermatt, incluindo o troço da Matterhorn Gotthard Bahn de Visp a Zermatt. Dá ainda 50% de desconto na Gornergrat Bahn e nos teleféricos do Matterhorn Glacier Paradise.',
      },
      {
        question: 'Dá para fazer um passeio de um dia a Zermatt desde Zurique ou Genebra no inverno?',
        answer:
          'Sim. De facto, de novembro a fevereiro há as maiores probabilidades de céu limpo do ano (84%–89%). Lembre-se só de que o pôr do sol é por volta das 16:45 HEC em dezembro e janeiro, por isso apanhar um comboio da manhã às 06:02 ou às 07:02 HEC é essencial para aproveitar a luz do dia.',
      },
      {
        question: 'Qual é o último comboio de regresso de Zermatt para Zurique ou Genebra?',
        answer:
          'Há comboios de Zermatt a cada 30 a 60 minutos até cerca das 20:37 HEC (chegada a Zurique HB por volta das 00:05 e a Genebra por volta das 00:20). A maior parte de quem vai e volta no dia apanha a partida das 16:37, 17:37 ou 18:37 HEC, depois de ver o arrebol do pôr do sol na Kirchbrücke.',
      },
    ],
  },

  'christmas-in-zermatt-matterhorn': {
    title: 'Natal em Zermatt: magia de inverno, chalés aconchegantes e o Matterhorn com céu limpo',
    shortTitle: 'Guia de Natal em Zermatt',
    description:
      'Tudo o que precisa para celebrar o Natal em Zermatt: chalés de conto cobertos de neve, 89% de hipóteses de céu limpo em dezembro, fondue à lareira, trenós puxados por cavalos e excursões de montanha nas festas.',
    category: 'Inverno e estações',
    heroStat: {
      label: 'Taxa de céu limpo em dezembro',
      value: '89% de nitidez',
      detail: 'A maior probabilidade mensal de cume limpo de todo o ano',
    },
    keyTakeaways: [
      'Dezembro ostenta 89% de probabilidade estatística de cume com céu limpo, a mais alta de qualquer mês em Zermatt, graças a ar frio e seco de alta pressão e zero térmicas de verão.',
      'Zermatt é rigorosamente sem automóveis. No Natal, as ruelas empedradas e silenciosas percorrem-se de táxi elétrico, de trenó puxado por cavalos com sinos de latão, e a pé, debaixo das iluminações.',
      'Os jantares da véspera e do dia de Natal (fondue de queijo suíço, raclette do Valais e especialidades de trufa negra) esgotam com meses de antecedência. Garanta mesa em outubro ou novembro.',
      'O comboio de cremalheira do Gornergrat e os teleféricos do Klein Matterhorn circulam 365 dias por ano. Uma subida ao cume na manhã de Natal, até 3.089 m, é uma tradição alpina inesquecível.',
    ],
    comparisonTable: {
      caption: 'Referência rápida das excursões de Natal e dos pontos altos de inverno em Zermatt',
      headers: [
        'Atividade / tradição',
        'Local / percurso',
        'Melhor hora',
        'Porque é mágico no Natal',
      ],
      rows: [
        [
          'Passeio da véspera e Glühwein',
          'Bahnhofstrasse e Kirchplatz',
          '17:00–19:30 HEC (crepúsculo)',
          'Árvore de Natal iluminada da aldeia, cânticos do coro junto à igreja de St. Mauritius, castanhas assadas.',
        ],
        [
          'Comboio panorâmico de inverno do Gornergrat',
          'Comboio de cremalheira desde Zermatt (33 min)',
          '09:00–14:00 HEC',
          'Sobe por pinhais fundos e nevados até 3.089 m, com vista de 360° sobre 29 cumes de quatro mil metros.',
        ],
        [
          'Passeio pelos chalés históricos do Hinterdorf',
          'Atrás do Monte Rosa Hotel',
          'Hora azul (16:30–17:30 HEC)',
          'Celeiros de lariço com 500 anos (Gädi), cobertos por uma camada espessa de neve fofa.',
        ],
        [
          'Jantar de fondue de queijo à lareira',
          'Stübli e chalés tradicionais de Zermatt',
          '19:00–22:00 HEC',
          'Queijos AOP do Valais derretidos com alho e vinho Fendant, junto a uma lareira a crepitar.',
        ],
        [
          'Matterhorn Glacier Palace e esqui',
          'Klein Matterhorn (3.883 m)',
          '10:00–14:30 HEC',
          'As pistas de esqui mais altas da Europa e túneis de esculturas de gelo a 15 m de profundidade dentro do glaciar.',
        ],
      ],
    },
    sections: [
      {
        id: 'why-zermatt-christmas-is-magical',
        heading: '1. Porque é que Zermatt é o destino alpino de Natal por excelência',
        image: {
          src: '/guides/zermatt-winter-chalets.jpg',
          alt: 'Chalés suíços tradicionais de madeira em Zermatt, cobertos de neve espessa de inverno, sob o Matterhorn',
          caption: 'Chalés históricos de lariço escurecido pelo sol, vestidos de neve fresca de dezembro em Zermatt.',
        },
        paragraphs: [
          'Poucos lugares na Terra encarnam o espírito de conto de fadas do Natal como Zermatt. Aninhada numa bolsa funda de vale, debaixo da pirâmide vertical do Matterhorn (4.478 m), esta aldeia suíça sem automóveis transforma-se cada dezembro num globo de neve vivo.',
          'Como os veículos com motor de combustão estão proibidos desde 1966, não há rugido de trânsito nem lama de escape: só o estalar da neve fresca debaixo dos pés, o zumbido suave dos pequenos autocarros elétricos e o tilintar ritmado dos sinos de latão nos trenós puxados por cavalos, à porta de hotéis históricos como o Mont Cervin Palace e o Grand Hotel Zermatterhof.',
          'Ao longo da Bahnhofstrasse e da Kirchplatz, luzes douradas envolvem árvores de folha persistente carregadas de neve, enquanto as montras mostram ornamentos suíços de madeira feitos à mão, chocolates artesanais e caldeirões de cobre a fumegar com Glühwein (vinho quente de especiarias) e castanhas assadas (marroni).',
        ],
        proTip: {
          label: 'Segredo local',
          text: 'Entre no bairro do Hinterdorf, mesmo atrás da Bahnhofstrasse, ao anoitecer (16:45 HEC). As ruelas pedonais entre celeiros de lariço do século XVI parecem saídas de uma pintura de inverno do século XIX quando a neve as cobre.',
        },
      },
      {
        id: 'december-weather-matterhorn-clarity',
        heading: '2. Tempo em dezembro: porque é que o Natal tem os céus mais limpos do ano',
        paragraphs: [
          'Muitos viajantes assumem que o verão oferece o melhor tempo de montanha, mas 30 anos de telemetria alpina oficial suíça contam a história oposta. Dezembro é, em termos estatísticos, o mês mais limpo de todo o calendário em Zermatt, com uns espantosos 89% de probabilidade de céu limpo no cume do Matterhorn.',
          'No inverno, a atmosfera sobre os Alpes Peninos é dominada por sistemas de alta pressão continentais, frios, estáveis e secos. Ao contrário de julho e agosto, quando o aquecimento solar intenso do vale cria térmicas de tarde (ventos anabáticos) que disparam cúmulos espessos pelas 13:00 HEC, o ar de dezembro está cristalino o dia inteiro. Às 10:00 HEC ou às 15:00 HEC, o Matterhorn recorta-se com nitidez contra um céu índigo profundo.',
        ],
        bulletPoints: [
          {
            bold: 'O ar seco abaixo de zero mantém a visibilidade impecável:',
            text: 'As temperaturas médias de dezembro na aldeia de Zermatt vão de -6 °C a +1 °C, enquanto as plataformas do cume (3.089 m–3.883 m) vão de -14 °C a -8 °C. O ar frio retém pouquíssima humidade e elimina a bruma do cume.',
          },
          {
            bold: 'Arrebol cedo do pôr do sol de inverno (16:30–16:50 HEC):',
            text: 'Como o sol se põe cedo no fim de dezembro, não é preciso esperar pela noite para fotografar o arrebol rosa e violeta na face leste do Matterhorn.',
          },
          {
            bold: 'Consulte a telemetria ao vivo para rajadas de Föhn:',
            text: 'Mesmo no inverno, frentes periódicas de Föhn de sul podem trazer rajadas de altitude acima de 45 km/h no Klein Matterhorn. Veja a pontuação ao vivo de 1 a 10, de manhã (AM) e de tarde (PM), todas as manhãs antes de embarcar nos teleféricos.',
          },
        ],
      },
      {
        id: 'cozy-dining-fireside-fondue',
        heading: '3. Mesa alpina aconchegante: fondue à lareira, raclette e festins de Natal',
        image: {
          src: '/guides/zermatt-cozy-fondue-matterhorn-wide.jpg',
          alt: 'Um pote de fondue de queijo suíço a borbulhar, com pão e vinho, com o Matterhorn nevado ao fundo',
          caption:
            'Nada se compara a um fondue de queijo do Valais a borbulhar e a um copo de Fendant fresco, depois de um dia na neve.',
        },
        paragraphs: [
          'Depois de uma manhã de inverno nítida na Gornergrat Bahn, ou a esquiar nas pistas internacionais até Cervinia, nada aquece a alma alpina como reunir-se à volta de um caquelon de cerâmica a borbulhar, com fondue de queijo suíço autêntico.',
          'Os restaurantes alpinos aconchegantes de Zermatt e os Stübli tradicionais, como Ferdinand by Cervo, Saycheese!, Chez Vrony e Schäferstube, especializam-se em queijos AOP do Valais derretidos com vinho branco seco, alho e um golpe de aguardente de cereja Kirsch. Saborear queijo quente derretido raspado sobre batatas pequenas (raclette), junto a uma lareira de pedra a crepitar, enquanto a neve cai em silêncio lá fora, é o conforto máximo do Natal.',
        ],
        proTip: {
          label: 'Estratégia do jantar de Natal',
          text: 'Os jantares da véspera de Natal (24 de dezembro) e do dia de Natal (25 de dezembro) em Zermatt esgotam com semanas, ou mesmo meses, de antecedência. Muitos restaurantes da aldeia oferecem menus festivos de vários pratos. Faça a reserva de mesa já em outubro ou novembro.',
        },
      },
      {
        id: 'christmas-day-mountain-excursions',
        heading: '4. Excursões de montanha no dia de Natal: Gornergrat e Glacier Paradise',
        image: {
          src: '/guides/zermatt-winter-snow-village.jpg',
          alt: 'Encostas alpinas nevadas e paisagem de inverno acima da aldeia de Zermatt, com neve fofa imaculada',
          caption:
            'País das maravilhas de inverno: as encostas de alta montanha acima de Zermatt abrem para passeios de cremalheira e caminhadas de inverno no dia de Natal.',
        },
        paragraphs: [
          'Uma preocupação frequente de quem visita pela primeira vez é saber se os comboios de montanha suíços circulam no dia de Natal. A resposta é um sim enfático: tanto o comboio de cremalheira da Gornergrat Bahn como os teleféricos do Matterhorn Glacier Paradise funcionam 365 dias por ano, se o tempo deixar.',
          'Subir no comboio de cremalheira aquecido a partir da estação de Zermatt na manhã de Natal é uma viagem inesquecível. O comboio vermelho trepa com firmeza por florestas de lariço e pinheiro-cembro carregadas de neve, sai para os campos de neve de alta montanha em Riffelberg (2.582 m) e Rotenboden (2.815 m) e termina no terraço do observatório do Gornergrat (3.089 m). Dali olha-se, por cima das extensões geladas dos glaciares de Gorner e de Findel, para as faces norte e leste do Matterhorn, imaculadas e revestidas de neve.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Neva sempre em Zermatt no Natal?',
        answer:
          'Zermatt fica a 1.608 metros, com terreno de esqui à volta a subir até 3.883 metros, o que lhe dá um dos registos de neve natural mais fiáveis dos Alpes europeus. Um Natal branco na aldeia de Zermatt está praticamente garantido, e as pistas de alta altitude estão 100% cobertas de neve durante dezembro.',
      },
      {
        question: 'Os comboios de montanha e os teleféricos de esqui abrem no dia de Natal em Zermatt?',
        answer:
          'Sim. A Gornergrat Bahn, o funicular de Sunnegga e os teleféricos do Matterhorn Glacier Paradise seguem o horário normal de inverno a 24, 25 e 26 de dezembro. Consulte sempre a pontuação ao vivo de 1 a 10, de manhã (AM) e de tarde (PM), na manhã da viagem, para confirmar a nitidez do cume.',
      },
      {
        question: 'Os restaurantes e as lojas abrem durante a semana de Natal em Zermatt?',
        answer:
          'Sim. A semana de Natal até ao Ano Novo é o pico da época festiva de inverno em Zermatt. Mercearias e lojas de aluguer de esqui mantêm-se abertas (com horário um pouco reduzido na noite de 24 de dezembro e no dia 25), enquanto restaurantes e bares funcionam em pleno. A reserva de jantar para a véspera e para o dia de Natal é essencial.',
      },
      {
        question: 'Qual é a melhor forma de ver o Matterhorn no dia de Natal?',
        answer:
          'Apanhe o comboio de cremalheira do Gornergrat das 08:24 ou das 09:00 HEC na estação de Zermatt. Sente-se do lado direito, no sentido da subida, para vistas contínuas e de cortar a respiração da face leste do Matterhorn coberta de neve, enquanto o sol da manhã deita luz dourada e quente sobre a neve fresca.',
      },
    ],
  },

  'gornergrat-railway-vs-glacier-express': {
    title:
      'Comboio do Gornergrat vs. Glacier Express: os dois comboios de montanha mais icónicos da Suíça',
    shortTitle: 'Gornergrat vs. Glacier Express',
    description:
      'Compare os dois comboios lendários de Zermatt: a subida de cremalheira de 33 minutos até 3.089 m no Gornergrat e a viagem panorâmica transalpina de 8 horas do Glacier Express. Com regras do Swiss Travel Pass, taxa de reserva de lugar, melhor lado para sentar e estado ao vivo.',
    category: 'Passeios de um dia',
    heroStat: {
      label: 'Diferença de tipo de viagem',
      value: '33 min vs. 7 h 45 min',
      detail: 'Subida vertical de cremalheira ao cume (3.089 m) vs. 291 km de ferrovia panorâmica transalpina',
    },
    keyTakeaways: [
      'A Gornergrat Railway (GGB) é uma subida vertical de cremalheira: 33 minutos de Zermatt (1.604 m) direto à crista do cume a 3.089 m, com a vista icónica da face leste do Matterhorn em primeiro plano.',
      'O Glacier Express (GEX) é uma viagem cénica transalpina de 8 horas e 291 quilómetros, a cruzar 291 pontes e 91 túneis entre Zermatt e São Moritz.',
      'As regras do Swiss Travel Pass divergem com nitidez: no Gornergrat há 50% de desconto e não é precisa reserva de lugar; no Glacier Express o bilhete está 100% coberto, mas a reserva de lugar paga é OBRIGATÓRIA (CHF 39–49).',
      'Não tem de escolher entre os dois: os comboios encontram-se frente a frente na praça da estação de Zermatt. É simples chegar no Glacier Express e, a seguir, subir ao cume no Gornergrat.',
      'Consulte o nosso [portal ao vivo de comboios panorâmicos e comparação de bilhetes](/trains) para pontuações meteorológicas do cume, disposição das carruagens e atualizações de horário antes de reservar.',
    ],
    comparisonTable: {
      caption: 'Gornergrat Bahn vs. Glacier Express: comparação de características e bilhetes (2026)',
      headers: ['Característica', 'Comboio do Gornergrat (GGB)', 'Glacier Express (GEX)'],
      rows: [
        [
          'Finalidade principal',
          'Excursão vertical ao cume e miradouro do Matterhorn',
          'Grande travessia panorâmica transalpina',
        ],
        [
          'Rota e término',
          'Zermatt (1.604 m) ↔ cume do Gornergrat (3.089 m)',
          'Zermatt (Valais) ↔ São Moritz / Davos (Grisões)',
        ],
        [
          'Duração da viagem',
          '33 minutos em cada sentido',
          '7 horas e 45 minutos (rota completa de 291 km)',
        ],
        [
          'Via e tração',
          'Cremalheira dupla sistema Abt (bitola métrica, 1.000 mm)',
          'Troços de aderência e de cremalheira (Matterhorn Gotthard Bahn / RhB)',
        ],
        [
          'Desnível / ponto mais alto',
          'Subida de +1.485 m (cume: 3.089 m)',
          'Ponto mais alto: passo do Oberalp (2.033 m) / ponto mais baixo: Coira (585 m)',
        ],
        [
          'Época de circulação',
          '365 dias por ano (sem encerramento sazonal)',
          'Início de dezembro a finais de outubro (paragem anual de manutenção em novembro e início de dezembro)',
        ],
        [
          'Swiss Travel Pass',
          '50% de desconto (ida e volta CHF 51–66)',
          'Bilhete 100% gratuito (aplica-se a taxa obrigatória de reserva de lugar)',
        ],
        [
          'Reserva de lugar',
          'Não é necessária (embarque livre; passe prioritário opcional de CHF 7)',
          'OBRIGATÓRIA (CHF 39 na época baixa / CHF 49 no pico do verão)',
        ],
        [
          'Eurail / Interrail',
          'Sem desconto (bilhete a preço inteiro)',
          'Bilhete 100% gratuito (aplica-se a taxa obrigatória de reserva de lugar)',
        ],
        [
          'Melhor lado para sentar',
          'Lado direito na subida desde Zermatt (vista do Matterhorn)',
          'Lado esquerdo à saída de Zermatt para Disentis / qualquer lado na Garganta do Reno',
        ],
        [
          'Visibilidade do Matterhorn',
          'Vista direta contínua durante todo o percurso e no cume',
          'Só visível à partida ou à chegada, dentro do vale de Zermatt',
        ],
        [
          'Pontos cénicos principais',
          'Reflexo no Riffelsee, glaciar de Gorner, 29 cumes de quatro mil metros',
          'Viaduto de Landwasser, Garganta do Reno, lago do passo do Oberalp',
        ],
      ],
    },
    sections: [
      {
        id: 'gornergrat-overview',
        heading: 'Gornergrat Bahn (GGB): o caminho de ferro de cremalheira a céu aberto mais alto da Europa',
        image: {
          src: '/guides/gornergrat-bahn-cogwheel-train.jpg',
          alt: 'Comboio de cremalheira da Gornergrat Bahn a subir a via íngreme em direção ao cume do Gornergrat, com o Matterhorn ao fundo',
          caption:
            'O comboio de cremalheira da Gornergrat Bahn a subir por prados alpinos e florestas de lariço em direção ao terraço de observação dos 3.089 metros.',
        },
        paragraphs: [
          'Inaugurada em 1898 como o primeiro caminho de ferro de cremalheira totalmente elétrico da Suíça, a Gornergrat Bahn (GGB) é uma maravilha de engenharia. Em apenas 33 minutos, as composições carmesim e douradas vencem 1.485 metros verticais, da aldeia de Zermatt (1.604 m) direto à crista rochosa do Gornergrat (3.089 m).',
          'Ao contrário dos comboios panorâmicos comuns, que deslizam por vales de rio, a Gornergrat Bahn é uma subida de montanha puramente vertical. Enquanto a cremalheira se agarra a rampas de 20%, os passageiros vêem um panorama cada vez mais largo da face leste icónica do Matterhorn. As paragens intermédias incluem Findelbach (a cruzar um viaduto de pedra dramático), Riffelalp (2.211 m), Riffelberg (2.582 m) e Rotenboden (2.815 m), o início do trilho famoso de 10 minutos a pé até ao Riffelsee, onde o Matterhorn se espelha em água alpina imaculada.',
          'No término do cume (3.089 m), sai-se diretamente para o terraço de observação do histórico 3100 Kulmhotel Gornergrat. Dali há um panorama de 360 graus sem obstáculos: o Monte Rosa (4.634 m, o cume mais alto da Suíça), a língua colossal do glaciar de Gorner e 29 cumes individuais acima dos 4.000 metros.',
          'Para planear a subida e ver a cobertura de nuvens do cume em tempo real, visite o [guia do comboio do Gornergrat no portal de comboios](/trains#gornergrat).',
        ],
        bulletPoints: [
          {
            bold: 'Velocidade e duração:',
            text: '33 minutos em cada sentido, ao longo de 9,3 km de via, todo o ano, com partidas a cada 24 a 48 minutos.',
          },
          {
            bold: 'Perfil de altitude:',
            text: 'Sobe de 1.604 m em Zermatt para 3.089 m no cume do Gornergrat (+1.485 m de desnível).',
          },
          {
            bold: 'Embarque simples:',
            text: 'Não é precisa reserva de lugar antecipada. Basta ler o código QR ou o Swiss Travel Pass nos torniquetes e embarcar.',
          },
          {
            bold: 'Caminhadas intermédias:',
            text: 'Saia em Rotenboden para a caminhada do reflexo no Riffelsee, ou em Riffelberg para almoços alpinos com vista para o Matterhorn.',
          },
        ],
        proTip: {
          label: 'Melhor lado para sentar',
          text: 'Sente-se sempre do lado DIREITO da carruagem (estibordo) quando embarca em Zermatt. As janelas da direita dão vistas contínuas e crescentes da pirâmide do Matterhorn à medida que o comboio sobe acima da linha das árvores.',
        },
      },
      {
        id: 'glacier-express-overview',
        heading: 'Glacier Express (GEX): «o expresso mais lento do mundo»',
        image: {
          src: '/guides/glacier-express-panoramic-train.jpg',
          alt: 'Comboio panorâmico Glacier Express a atravessar os Alpes suíços, com janelas de cúpula sob um céu azul limpo',
          caption:
            'O Glacier Express a deslizar pelos Alpes suíços, com janelas panorâmicas em cúpula que se curvam até ao teto.',
        },
        paragraphs: [
          'Se a Gornergrat Bahn é um elevador vertical eletrizante até ao céu alpino, o Glacier Express é a odisseia horizontal definitiva de viagem lenta ao longo da espinha dorsal dos Alpes suíços. A ligar as estâncias de Zermatt, no Valais, e São Moritz, no vale da Engadina, o Glacier Express percorre 291 quilómetros (181 milhas) em cerca de 7 horas e 45 minutos.',
          'Pelo caminho, o comboio cruza 291 viadutos altivos, entra em 91 túneis alpinos e vence o passo do Oberalp a 2.033 metros (6.670 pés), o ponto mais alto da linha e a nascente do Reno. Os pontos altos incluem o vertiginoso viaduto de Landwasser (uma ponte curva de calcário com 65 metros de altura, que mergulha direto num túnel de falésia) e a Garganta do Reno («Ruinaulta»), muitas vezes celebrada como o Grand Canyon suíço.',
          'As carruagens são panorâmicas, construídas para o efeito, com vastas janelas curvas que sobem até ao teto e dão uma vista contínua de paredes de granito, cascatas e cumes glaciares. Refeições frescas de três pratos são preparadas a bordo e servidas à mesa, no lugar, enquanto a paisagem alpina passa em silêncio.',
          'Configurações de lugares, menus e estratégias de reserva estão no [guia de rota e lugares do Glacier Express](/trains#glacier-express).',
        ],
        bulletPoints: [
          {
            bold: 'Rota e duração:',
            text: '291 km entre Zermatt e São Moritz, em aproximadamente 7 horas e 45 minutos.',
          },
          {
            bold: 'Grandes obras de engenharia:',
            text: 'Cruza 291 viadutos de pedra e atravessa 91 túneis, incluindo os túneis helicoidais em espiral da linha do Albula, Património Mundial da UNESCO.',
          },
          {
            bold: 'Excellence Class:',
            text: 'Classe premium de luxo, com lugar individual garantido à janela, concierge dedicado, Glacier Bar privativo e um menu regional de degustação de 5 pratos com harmonização de vinhos.',
          },
          {
            bold: 'Encerramento sazonal:',
            text: 'Ao contrário do Gornergrat, que circula 365 dias, o Glacier Express faz uma pausa de manutenção anual entre finais de outubro e meados de dezembro.',
          },
        ],
        proTip: {
          label: 'Reserva de lugar obrigatória',
          text: 'Ao contrário dos comboios suíços normais, NÃO se pode embarcar no Glacier Express sem lugar reservado, mesmo com um Swiss Travel Pass ilimitado de 1.ª classe. A reserva abre exatamente 93 dias antes no portal oficial. Ponha um alerta no calendário: os lugares panorâmicos nas datas de pico de verão e de esqui esgotam em poucas horas.',
        },
      },
      {
        id: 'pass-rules-pricing',
        heading: 'Preço do Glacier Express, reserva de lugar e Swiss Travel Pass',
        paragraphs: [
          'Muitos viajantes assumem que um Swiss Travel Pass permite saltar para qualquer comboio na Suíça de graça. A rede ferroviária suíça é famosa pela integração, mas a Gornergrat Bahn e o Glacier Express caem em categorias tarifárias completamente diferentes.',
          'Perceber estas regras com antecedência evita suplementos inesperados na bilheteira ou penalizações de reserva nas portas de embarque.',
        ],
        bulletPoints: [
          {
            bold: 'Gornergrat Bahn com Swiss Travel Pass:',
            text: 'Recebe 50% de desconto nos bilhetes de adulto normais (a ida e volta de verão desce de cerca de CHF 132 para CHF 66; a de inverno desce de cerca de CHF 102 para CHF 51). NÃO é 100% gratuito, porque está classificado como comboio de excursão ao cume. Não é precisa reserva de lugar.',
          },
          {
            bold: 'Gornergrat com Swiss Half Fare Card:',
            text: 'O mesmo desconto de 50% do Swiss Travel Pass. Crianças dos 6 aos 15 anos com Swiss Family Card viajam de graça quando acompanhadas por um progenitor que paga.',
          },
          {
            bold: 'Glacier Express com Swiss Travel Pass:',
            text: 'O trajeto está 100% COBERTO pelo Swiss Travel Pass (e pelo Eurail / Interrail). Ainda assim, TEM de pagar a taxa obrigatória de reserva de lugar: CHF 39 na época baixa (primavera/outono) ou CHF 49 no pico do verão e no inverno. Sem o talão da reserva, o embarque é recusado.',
          },
          {
            bold: 'Suplemento Excellence Class do Glacier Express:',
            text: 'Exige um bilhete de 1.ª classe válido (ou Swiss Travel Pass de 1.ª classe) mais um suplemento Excellence Class não descontável de CHF 470 por pessoa.',
          },
        ],
        proTip: {
          label: 'Comparação ao vivo de bilhetes e passes',
          text: 'Compare tarifas lado a lado, regras para crianças e condições para cães na [página interativa de comparação dos comboios de montanha suíços](/trains).',
        },
      },
      {
        id: 'which-train-to-choose',
        heading: 'Que comboio deve apanhar? (Ou como combinar os dois)',
        paragraphs: [
          'Como os dois comboios partem do mesmo centro, a praça da estação de Zermatt, são companheiros naturais e não rivais diretos. A prioridade depende da duração do itinerário e do que quer ver:',
          '1. Se só tem 1 ou 2 dias em Zermatt: apanhe a Gornergrat Bahn. O objetivo principal é ver e fotografar o Matterhorn, caminhar no trilho do reflexo do Riffelsee e chegar aos 3.089 metros. Em pouco mais de meia hora, o Gornergrat põe-no mesmo em frente da montanha.',
          '2. Se viaja entre a Suíça oriental e Zermatt: tome o Glacier Express como trânsito de longo curso. Em vez dos comboios regionais normais pelo longo túnel de base do Lötschberg, o Glacier Express transforma o dia de deslocação numa experiência cénica de primeiro nível.',
          '3. O itinerário alpino definitivo de 48 horas: chegue a Zermatt no Glacier Express ao fim da tarde, a admirar as falésias do vale de Mattertal. Faça o check-in no hotel em Zermatt, jante um fondue na aldeia e apanhe o primeiro comboio da manhã do Gornergrat às 08:00, para a luz da hora dourada sobre o glaciar de Gorner e o Matterhorn.',
          'Veja as pontuações meteorológicas ao vivo e as rotas de contingência antes de reservar, no [painel ao vivo de visibilidade do Matterhorn](/).',
        ],
      },
      {
        id: 'live-tracking-and-weather',
        heading: 'Tempo ao vivo no cume e porque é que a hora da viagem importa',
        paragraphs: [
          'Uma diferença fundamental entre estas duas viagens é a dependência do tempo. O Glacier Express circula sobretudo por vales fundos e passos de montanha. Mesmo em dias encobertos ou de chuva fraca, a paisagem alpina enevoada, as cascatas e as gargantas de calcário continuam visualmente de cortar a respiração.',
          'A Gornergrat Bahn, porém, é uma subida a céu aberto até ao cume. Se estratos baixos localizados, ou uma nuvem bandeira de Föhn de sul, envolverem a crista dos 3.089 m, a visibilidade no terraço do cume pode cair a zero e esconder tanto o Matterhorn como o glaciar de Gorner.',
          'Como os bilhetes do Gornergrat são flexíveis na data, nunca os compre com dias de antecedência sem confirmar as condições ao vivo do cume. Antes de embarcar, consulte a [pontuação de visibilidade do Gornergrat no seguimento de comboios ao vivo](/trains), que combina cobertura de nuvens de altitude, webcams do cume e cisalhamento do vento numa pontuação definitiva de ir ou não ir, de 1 a 10.',
        ],
        proTip: {
          label: 'O fenómeno da inversão de nuvens',
          text: 'No fim do outono e no inverno, a aldeia de Zermatt pode ficar debaixo de nevoeiro espesso («Nebeldecke») enquanto o Gornergrat, a 3.089 m, está sob um céu azul cristalino, por cima de um mar de nuvens. Veja as webcams de altitude ao vivo antes de assumir que uma aldeia nublada significa mau tempo no cume.',
        },
      },
    ],
    faqs: [
      {
        question: 'A Gornergrat Bahn e o Glacier Express partem da mesma estação em Zermatt?',
        answer:
          'Sim, partem a menos de 50 metros uma da outra, na estação de Zermatt. O Glacier Express chega e parte nas plataformas principais da Matterhorn Gotthard Bahn (MGB) / SBB, enquanto a Gornergrat Bahn tem um edifício terminal histórico próprio, logo do outro lado da praça exterior da estação.',
      },
      {
        question: 'A Gornergrat Bahn é 100% gratuita com o Swiss Travel Pass?',
        answer:
          'Não. A Gornergrat Bahn está classificada como comboio de excursão de alta altitude, por isso o Swiss Travel Pass dá 50% de desconto e não a viagem grátis. Em 2026, um bilhete de ida e volta de adulto custa aproximadamente CHF 66 no verão e CHF 51 no inverno com o passe.',
      },
      {
        question: 'Posso fazer só um troço da rota do Glacier Express, em vez das 8 horas completas?',
        answer:
          'Sim. Troços mais curtos e populares incluem Zermatt–Brig (1 h 20 min), Zermatt–Andermatt (3 h 15 min) e Coira–São Moritz pelo viaduto de Landwasser (2 h). A reserva de lugar obrigatória aplica-se a todos os troços.',
      },
      {
        question: 'De que lado do comboio se vê melhor na Gornergrat Bahn?',
        answer:
          'Sente-se sempre do lado direito da carruagem na subida de Zermatt para o Gornergrat (e do lado esquerdo na descida). As janelas da direita ficam viradas para o Matterhorn durante quase toda a subida de 33 minutos.',
      },
      {
        question: 'O que acontece se eu comprar um bilhete do Gornergrat e o Matterhorn estiver escondido nas nuvens?',
        answer:
          'Os bilhetes normais da Gornergrat Bahn são válidos em qualquer comboio da data de calendário escolhida, mas em geral não são reembolsáveis depois de ativados. Para evitar a desilusão, consulte a pontuação ao vivo de 1 a 10, de manhã (AM) e de tarde (PM), e as webcams do cume no [painel de comboios](/trains) antes de comprar na estação.',
      },
    ],
  },

  'what-is-the-matterhorn': {
    title: 'O que é o Matterhorn? | Altura, localização e como o ver',
    shortTitle: 'O que é o Matterhorn?',
    description:
      'O Matterhorn é uma pirâmide de 4.478 m na fronteira suíço-italiana, acima de Zermatt. Altura, localização e como verificar se está visível hoje.',
    category: 'Miradouros',
    heroStat: {
      label: 'Altitude do cume',
      value: '4.478 m',
      detail: 'Zermatt, Valais, na fronteira suíço-italiana',
    },
    keyTakeaways: [
      'O Matterhorn é uma pirâmide de quatro faces. Em italiano chama-se Cervino e em francês Cervin.',
      'O cume está a 4.478 m (14.692 pés). Em alemão, esse valor procura-se como Matterhorn Höhe.',
      'Ergue-se acima de Zermatt, no Valais, na Suíça, e de Breuil-Cervinia, no Vale de Aosta, em Itália.',
      'Consulte a pontuação ao vivo antes de comprar um bilhete de teleférico. O Gornergrat fica virado para o lado leste. O Klein Matterhorn fica virado para o lado sul.',
    ],
    sections: [
      {
        id: 'what-it-is',
        heading: 'O que é o Matterhorn?',
        paragraphs: [
          'O Matterhorn é uma pirâmide de rocha de quatro faces nos Alpes Peninos. Cada face é tão íngreme que, a partir de Zermatt, o cume parece um único espigão. É por isso que a vista da face leste tem a alcunha de Toblerone.',
          'A mesma montanha tem três nomes. Em inglês e em alemão diz-se Matterhorn. Em italiano, Cervino. Em francês, Cervin. Os três referem-se a este cume, não à atração da Disneyland nem a uma conduta.',
        ],
      },
      {
        id: 'where-and-height',
        heading: 'Onde fica o Matterhorn e qual é a altura?',
        paragraphs: [
          'O cume está a 4.478 metros, ou 14.692 pés. Esse número é a Matterhorn Höhe. O pico fica na fronteira entre a Suíça e a Itália.',
          'Do lado suíço ergue-se acima de Zermatt, no cantão do Valais. Do lado italiano ergue-se acima de Breuil-Cervinia, no Vale de Aosta. As faces leste e norte são a vista clássica a partir da aldeia de Zermatt, do Gornergrat e do Riffelsee. As faces sul e oeste olham para Itália e são o que se vê do Matterhorn Glacier Paradise.',
        ],
      },
      {
        id: 'how-to-see-it',
        heading: 'Como ver o Matterhorn hoje',
        paragraphs: [
          'A [pontuação de visibilidade ao vivo](/) atualiza-se a cada 15 minutos. Uma pontuação de 8–10 significa que a pirâmide está limpa. Uma pontuação de 1–2 significa que está nas nuvens. As aplicações meteorológicas da aldeia leem Zermatt a 1.608 m e falham a camada de nuvens à volta do cume.',
          'O Gornergrat (3.089 m) é a vista da face leste, a que se chega de comboio de cremalheira. O Klein Matterhorn (3.883 m) é o teleférico para o lado sul. A Kirchbrücke, na aldeia, é gratuita. Use a webcam do Gornergrat e a webcam do Klein Matterhorn na página inicial antes de comprar um bilhete.',
        ],
      },
    ],
    faqs: [
      {
        question: 'O que é o Matterhorn?',
        answer:
          'Uma pirâmide de quatro faces nos Alpes Peninos, chamada Cervino em italiano e Cervin em francês. O cume está 4.478 m acima de Zermatt.',
      },
      {
        question: 'Onde fica o Matterhorn?',
        answer:
          'Na fronteira suíço-italiana. O lado suíço fica acima de Zermatt, no Valais. O lado italiano fica acima de Breuil-Cervinia, no Vale de Aosta.',
      },
      {
        question: 'Qual é a altura do Matterhorn?',
        answer:
          '4.478 metros (14.692 pés). Em alemão, a pesquisa é Matterhorn Höhe, e a resposta é 4.478 Meter.',
      },
    ],
  },

  'zermatt-weather-december': {
    title: 'Tempo em Zermatt em dezembro',
    shortTitle: 'Tempo em dezembro',
    description:
      'Dezembro é o mês mais limpo de Zermatt, com 89% de hipóteses de um Matterhorn limpo. Neve, lagos gelados e como verificar o cume hoje.',
    category: 'Climatologia',
    heroStat: {
      label: 'Hipóteses de céu limpo',
      value: '89%',
      detail: 'O mês mais alto do registo de 30 anos',
    },
    keyTakeaways: [
      'Dezembro fica limpo em 89% dos dias. A manhã e a tarde mantêm-se abertas.',
      'A aldeia está debaixo de neve e o Riffelsee está gelado, por isso salte o plano do reflexo.',
      'Consulte a pontuação ao vivo antes de comprar um bilhete do Gornergrat ou de esqui.',
    ],
    sections: [
      {
        id: 'december-clarity',
        heading: 'Tempo em Zermatt em dezembro',
        paragraphs: [
          'Dezembro é o mês mais limpo do registo de 30 anos, com 89% de hipóteses de o cume do Matterhorn estar limpo num dado dia. O ar frio e estável quase não produz cúmulos de tarde, por isso a manhã e a tarde ficam abertas.',
          'A neve cobre a aldeia e os lagos estão gelados, por isso é um mês para ver e esquiar, não para reflexos. Para a semana de Natal, os trenós e o horário da aldeia, veja o [guia de Natal em Zermatt](/guides/christmas-in-zermatt-matterhorn).',
          'A [pontuação de visibilidade ao vivo](/) é a verificação de hoje. O resto do ano está em [Tempo em Zermatt por mês](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Como é o tempo em Zermatt em dezembro?',
        answer:
          'Frio e invulgarmente limpo. Cerca de 89% dos dias de dezembro mostram o Matterhorn, e a tarde fica aberta porque quase não há nuvem térmica.',
      },
      {
        question: 'Dá para ver um reflexo no Riffelsee em dezembro?',
        answer: 'Não. O Riffelsee está gelado e coberto de neve de novembro ao início de junho.',
      },
    ],
  },

  'zermatt-weather-september': {
    title: 'Tempo em Zermatt em setembro',
    shortTitle: 'Tempo em setembro',
    description:
      'Setembro fica limpo em cerca de 72% dos dias em Zermatt. Os trilhos de caminhada estão abertos e o Riffelsee está líquido para um reflexo do Matterhorn.',
    category: 'Climatologia',
    heroStat: {
      label: 'Hipóteses de céu limpo',
      value: '72%',
      detail: 'Noites mais frescas, lariços dourados, lagos líquidos',
    },
    keyTakeaways: [
      'Setembro fica limpo em cerca de 72% dos dias, depois de as nuvens de tarde do verão abrandarem.',
      'Os trilhos ainda estão sem neve e o Riffelsee pode espelhar a face leste.',
      'Comece ao nascer do sol. Uma brisa encrespa muitas vezes o lago ao início da tarde.',
    ],
    sections: [
      {
        id: 'september-clarity',
        heading: 'Tempo em Zermatt em setembro',
        paragraphs: [
          'Setembro fica limpo em cerca de 72% dos dias. Noites mais frescas desligam as térmicas da tarde que estragam junho e julho, e os lariços ficam dourados à volta da face leste.',
          'Os trilhos ainda estão sem neve e o Riffelsee está líquido, por isso é o mês do reflexo do Matterhorn a partir de Sunnegga ou de Rotenboden. Comece ao nascer do sol. Uma brisa encrespa muitas vezes o lago ao início da tarde, mesmo quando o cume se mantém limpo.',
          'Consulte a [pontuação de visibilidade ao vivo](/) na manhã em que for. O ano completo está em [Tempo em Zermatt por mês](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Como é o tempo em Zermatt em setembro?',
        answer:
          'Limpo em cerca de 72% dos dias. As noites são frescas o suficiente para parar os cúmulos da tarde que cobrem o cume no meio do verão, e os lariços ficam dourados.',
      },
      {
        question: 'O Riffelsee está líquido em setembro?',
        answer:
          'Sim. A janela de reflexo vai do fim de junho ao fim de outubro. Setembro está dentro dessa janela. Vá ao nascer do sol, antes da brisa.',
      },
    ],
  },

  'zermatt-weather-may': {
    title: 'Tempo em Zermatt em maio',
    shortTitle: 'Tempo em maio',
    description:
      'Em maio, Zermatt fica limpo em 48–58% das manhãs. As nuvens da tarde acumulam-se depressa e o Riffelsee ainda está gelado.',
    category: 'Climatologia',
    heroStat: {
      label: 'Hipóteses de céu limpo',
      value: '48–58%',
      detail: 'Fiável só antes do meio-dia',
    },
    keyTakeaways: [
      'Maio fica na faixa de fim de primavera, com 48–58% de dias limpos.',
      'A janela útil é a manhã. A neve a derreter alimenta os cúmulos da tarde.',
      'O Riffelsee ainda está gelado. Deixe o reflexo para o fim de junho.',
    ],
    sections: [
      {
        id: 'may-clarity',
        heading: 'Tempo em Zermatt em maio',
        paragraphs: [
          'Maio é um mês de meia-estação. A probabilidade de céu limpo fica na faixa de fim de primavera, 48–58%, e a janela fiável é a manhã. A humidade da neve a derreter alimenta cúmulos já ao início da tarde.',
          'O Riffelsee ainda está gelado em maio, por isso deixe o reflexo para o fim de junho. Use uma manhã limpa para o Gornergrat ou para a ponte da aldeia, e trate a tarde como um dia de vale.',
          'Consulte a [pontuação de visibilidade ao vivo](/) antes de sair do hotel. Os outros meses estão em [Tempo em Zermatt por mês](/guides/best-time-to-see-matterhorn).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Como é o tempo em Zermatt em maio?',
        answer:
          'Um mês de meia-estação. Cerca de metade dos dias limpa de manhã e, ao início da tarde, os cúmulos acumulam-se à medida que a fusão da neve acrescenta humidade.',
      },
      {
        question: 'Dá para fotografar o Riffelsee em maio?',
        answer:
          'O lago ainda está gelado em maio. Os reflexos plenamente líquidos começam no fim de junho. Numa manhã limpa de maio, use antes o Gornergrat ou a Kirchbrücke.',
      },
    ],
  },

  'glacier-express': {
    title: 'Glacier Express: preço, rota e reserva de lugar',
    shortTitle: 'Glacier Express',
    description:
      'Preços do bilhete do Glacier Express, a reserva de lugar obrigatória, a rota de Zermatt a São Moritz e a diferença em relação ao Bernina Express.',
    category: 'Passeios de um dia',
    heroStat: {
      label: 'Reserva de lugar',
      value: 'CHF 39–49',
      detail: 'Obrigatória, por cima do bilhete de comboio',
    },
    keyTakeaways: [
      'Um bilhete de ida em 2.ª classe custa cerca de CHF 159. Em 1.ª classe, cerca de CHF 272. Os dois continuam a precisar de reserva de lugar.',
      'A reserva custa CHF 39 na época baixa e CHF 49 no pico do verão. Abre 93 dias antes.',
      'A Excellence Class acrescenta CHF 470 a um bilhete de 1.ª classe. Há 20 lugares.',
      'O Bernina Express é a mesma empresa ferroviária noutro vale. Não vai a Zermatt.',
    ],
    sections: [
      {
        id: 'glacier-express-price',
        heading: 'Preço do Glacier Express',
        paragraphs: [
          'A tarifa de ida de um adulto é CHF 159 em 2.ª classe ou CHF 272 em 1.ª classe, e essa tarifa não inclui o lugar. O Swiss Travel Pass e o Eurail cobrem o bilhete de comboio. Não cobrem a reserva.',
          'A Excellence Class é uma carruagem panorâmica 1+1 com 20 lugares. O suplemento é de CHF 470 por cima de um bilhete ou passe de 1.ª classe, e a tarifa inclui uma receção com champanhe e um almoço de cinco pratos. Os lugares esgotam muitas vezes na manhã em que as reservas abrem.',
        ],
      },
      {
        id: 'seat-reservation',
        heading: 'Reserva de lugar',
        paragraphs: [
          'Todos os passageiros do Glacier Express precisam de uma reserva de lugar: CHF 39 na época baixa e CHF 49 no pico do verão. As crianças que viajam de graça com um passe também a pagam. As reservas abrem 93 dias antes da partida.',
          'O comboio panorâmico faz uma pausa de cerca de meados de outubro a meados de dezembro. Os comboios regionais da Matterhorn Gotthard Bahn e da RhB continuam a circular nas mesmas vias entre Zermatt, Brig, Andermatt e São Moritz, sem a reserva do Glacier Express e sem a carruagem-restaurante.',
        ],
      },
      {
        id: 'route',
        heading: 'Rota de Zermatt a São Moritz',
        paragraphs: [
          'O percurso completo dura cerca de oito horas, de Zermatt (1.604 m) a São Moritz (1.775 m), pelo passo do Oberalp a 2.033 m. Alguns serviços seguem em direção a Davos. Os troços famosos são a Garganta do Reno e o viaduto de Landwasser, perto de Filisur.',
          'De Zurique ou de Genebra muda-se em Visp para a Matterhorn Gotthard Bahn até Zermatt e, aí, embarca-se no Glacier Express. Saltos mais curtos que também exigem reserva incluem Zermatt–Brig (cerca de 1 hora e 20 minutos) e Zermatt–Andermatt (cerca de 3 horas e 15 minutos).',
        ],
      },
      {
        id: 'bernina-express',
        heading: 'Glacier Express ou Bernina Express',
        paragraphs: [
          'Os dois comboios são serviços panorâmicos dos Caminhos de Ferro Réticos (RhB) e da Matterhorn Gotthard Bahn, e não se substituem. O Glacier Express atravessa os Alpes de Zermatt a São Moritz. O Bernina Express segue de Coira ou de São Moritz, pelo passo do Bernina, até Tirano, em Itália.',
          'Apanhe o Glacier Express pelo Matterhorn, pelo passo do Oberalp e por Zermatt. Apanhe o Bernina Express pelos glaciares do Bernina e pela descida até Itália. São Moritz é o único ponto em que as duas rotas se encontram.',
        ],
      },
      {
        id: 'today',
        heading: 'Vale a pena embarcar hoje?',
        paragraphs: [
          'A [página dos comboios](/trains) mostra se o Glacier Express está no horário de época ou na pausa de outono, mais a pontuação ao vivo do Gornergrat. Uma pontuação alta significa que o Matterhorn está limpo no extremo de Zermatt. Não altera o tempo no Oberalp, a meio da rota.',
          'O comboio do Gornergrat é outro comboio: 33 minutos de cremalheira de Zermatt até 3.089 m, sem reserva obrigatória. Compare os dois no [guia Gornergrat vs. Glacier Express](/guides/gornergrat-railway-vs-glacier-express).',
        ],
      },
    ],
    faqs: [
      {
        question: 'Quanto custa o Glacier Express?',
        answer:
          'Cerca de CHF 159 de ida em 2.ª classe ou CHF 272 em 1.ª classe, mais uma reserva de lugar obrigatória de CHF 39 ou CHF 49. Um Swiss Travel Pass cobre o bilhete e não a reserva.',
      },
      {
        question: 'Preciso de reserva de lugar no Glacier Express?',
        answer:
          'Sim. O embarque é recusado sem ela. Reserve quando as reservas abrem, 93 dias antes da viagem. A Excellence Class custa mais CHF 470 e tem 20 lugares.',
      },
      {
        question: 'Qual é a rota do Glacier Express?',
        answer:
          'De Zermatt a São Moritz em cerca de oito horas, por Visp, Brig, Andermatt e o passo do Oberalp, com alguns comboios em direção a Davos. O Bernina Express é uma linha à parte, de São Moritz a Tirano.',
      },
    ],
  },

  'hotels-with-matterhorn-view': {
    title: 'Hotéis com vista para o Matterhorn',
    shortTitle: 'Hotéis com vista',
    description:
      'Que hotéis de Zermatt vêem de facto a face leste do Matterhorn, quais ficam junto aos lagos de reflexo e quais se mantêm limpos quando a nuvem de vale esconde a aldeia.',
    category: 'Miradouros',
    heroStat: {
      label: 'A vista que falha primeiro',
      value: 'Aldeia',
      detail: 'Os quartos da face leste a 1.620 m desaparecem com nuvem de vale',
    },
    keyTakeaways: [
      'Os quartos da aldeia ficam virados para a face leste e perdem o cume primeiro quando a base das nuvens desce.',
      'O Riffelalp é o hotel no caminho para o Riffelsee. Sunnegga é um terraço de dia, não uma noite de hotel.',
      'O Riffelhaus e o Kulmhotel Gornergrat ficam acima do nevoeiro de vale que esconde a aldeia.',
    ],
    sections: [
      {
        id: 'village-east-face',
        heading: 'Face leste a partir da aldeia',
        paragraphs: [
          'Os quartos na aldeia olham vale acima, para a face leste. The Omnia fica na encosta acima da igreja, e o Mont Cervin Palace enfrenta o cume a partir do chão da aldeia. Os dois ficam a uma caminhada da Kirchbrücke, o miradouro gratuito.',
          'É a vista que morre primeiro. Uma camada de nuvens por volta de 2.000–2.500 m pode esconder o cume a partir da aldeia enquanto o Gornergrat, a 3.089 m, ainda está limpo. Consulte a [pontuação ao vivo](/) e o [miradouro da aldeia](/viewpoints/zermatt-village) antes de tratar um quarto com «vista Matterhorn» como garantido.',
        ],
      },
      {
        id: 'riffelsee-and-sunnegga',
        heading: 'Sunnegga e Riffelsee',
        paragraphs: [
          'O reflexo é a face leste no Riffelsee, a cinco minutos a pé a descer de Rotenboden, e no Stellisee acima de Sunnegga. Sunnegga em si é um terraço de funicular para o dia. Não há hotel na margem do lago.',
          'O Riffelalp Resort 2222 é o alojamento nesse caminho. Fica na linha do Gornergrat, abaixo de Rotenboden, com a face leste em frente do hotel. A água só espelha o cume do fim de junho a outubro, e só enquanto o vento se mantém abaixo de cerca de 12 km/h. A [página do Riffelsee](/viewpoints/riffelsee) é a verificação do dia. [Sunnegga](/viewpoints/sunnegga) é o terraço mais baixo e o início da caminhada dos lagos.',
        ],
      },
      {
        id: 'gornergrat-side',
        heading: 'Lado do Gornergrat',
        paragraphs: [
          'Dois hotéis ficam na crista, acima do nevoeiro que enche Zermatt. O Riffelhaus 1853 está em Riffelberg, a 2.582 m, uma paragem abaixo de Rotenboden. O Kulmhotel Gornergrat está na estação do cume, a 3.089 m, ao lado do miradouro.',
          'Estes quartos mantêm a face leste quando a aldeia está nas nuvens, e perdem-na quando o próprio cume está tapado. A [página do Gornergrat](/viewpoints/gornergrat) é a pontuação dessa altitude. Nenhum dos dois hotéis é razão para saltar a verificação na webcam.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Que hotéis têm vista para o Matterhorn?',
        answer:
          'Na aldeia, The Omnia e o Mont Cervin Palace ficam virados para a face leste. Na linha, o Riffelalp Resort 2222 enfrenta o mesmo cume, mais perto do Riffelsee. O Riffelhaus 1853 e o Kulmhotel Gornergrat estão acima do nevoeiro de vale.',
      },
      {
        question: 'Que vista do Matterhorn desaparece primeiro nas nuvens?',
        answer:
          'A da aldeia. Uma base de nuvens perto de 2.000 m esconde o cume a partir da Kirchbrücke, enquanto os hotéis do Gornergrat ainda estão por cima. Quando a pontuação a 3.089 m desce, todas as vistas falham em conjunto.',
      },
    ],
  },
};
