export const mainNavigationET = [
  {
    id: 'conversations',
    label: 'Vestlus',
    path: '/vestlus',
    children: [],
  },
  {
    id: 'training',
    label: 'Treening',
    path: '/treening',
    children: [
      {
        label: 'Treening',
        path: '/treening/treening',
        children: [
          {
            label: 'Teemad',
            path: '/treening/treening/teemad',
          },
          {
            label: 'Avalikud teemad',
            path: '/treening/treening/avalikud-teemad',
          },
          {
            label: 'Teemade järeltreenimine',
            path: '/treening/treening/teemade-jareltreenimine',
          },
          {
            label: 'Vastused',
            path: '/treening/treening/vastused',
          },
          {
            label: 'Kasutuslood',
            path: '/treening/treening/kasutuslood',
          },
          {
            label: 'Konfiguratsioon',
            path: '/treening/treening/konfiguratsioon',
          },
          {
            label: 'Vormid',
            path: '/treening/treening/vormid',
          },
          {
            label: 'Mälukohad',
            path: '/treening/treening/malukohad',
          },
        ],
      },
      {
        label: 'Ajaloolised vestlused',
        path: '/treening/ajaloolised-vestlused',
        children: [
          {
            label: 'Ajalugu',
            path: '/treening/ajaloolised-vestlused/ajalugu',
          },
          {
            label: 'Pöördumised',
            path: '/treening/ajaloolised-vestlused/poordumised',
          },
        ],
      },
      {
        label: 'Mudelipank ja analüütika',
        path: '/treening/mudelipank-ja-analuutika',
        children: [
          {
            label: 'Teemade ülevaade',
            path: '/treening/mudelipank-ja-analuutika/teemade-ulevaade',
          },
          {
            label: 'Mudelite võrdlus',
            path: '/treening/mudelipank-ja-analuutika/mudelite-vordlus',
          },
          {
            label: 'Testlood',
            path: '/treening/mudelipank-ja-analuutika/testlood',
          },
        ],
      },
      {
        label: 'Treeni uus mudel',
        path: '/treening/treeni-uus-mudel',
      },
    ],
  },
  {
    id: 'settings',
    label: 'Haldus',
    path: '/haldus',
    children: [],
  },
  {
    id: 'monitoring',
    label: 'Seire',
    path: '/seire',
    children: [],
  },
];

export const mainNavigationEN = [
  {
    id: 'conversations',
    label: 'Conversations',
    path: '/conversations',
    children: [],
  },
  {
    id: 'training',
    label: 'Training',
    path: '/training',
    children: [
      {
        label: 'Training',
        path: '/training/training',
        children: [
          {
            label: 'Intents',
            path: '/training/training/intents',
          },
          {
            label: 'Common intents',
            path: '/training/training/common-intents',
          },
          {
            label: 'Intents follow-up training',
            path: '/training/training/intents-follow-up-training',
          },
          {
            label: 'Responses',
            path: '/training/training/responses',
          },
          {
            label: 'Stories',
            path: '/training/training/stories',
          },
          {
            label: 'Configuration',
            path: '/training/training/configuration',
          },
          {
            label: 'Forms',
            path: '/training/training/forms',
          },
          {
            label: 'Slots',
            path: '/training/training/slots',
          },
        ],
      },
      {
        label: 'Historical conversations',
        path: '/training/historical-conversations',
        children: [
          {
            label: 'History',
            path: '/training/historical-conversations/history',
          },
          {
            label: 'Appeals',
            path: '/training/historical-conversations/appeals',
          },
        ],
      },
      {
        label: 'Model bank and analytics',
        path: '/training/model-bank-and-analytics',
        children: [
          {
            label: 'Intents overview',
            path: '/training/model-bank-and-analytics/intents-overview',
          },
          {
            label: 'Model comparison',
            path: '/training/model-bank-and-analytics/model-comparison',
          },
          {
            label: 'Testcases',
            path: '/training/model-bank-and-analytics/testcases',
          },
        ],
      },
      {
        label: 'Train new model',
        path: '/training/train-new-model',
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    children: [],
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    path: '/monitoring',
    children: [],
  },
];
