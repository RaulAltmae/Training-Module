export const intentsReportData = {
  common_vaimne_tervis: {
    precision: 0.9545454545454546,
    recall: 0.75,
    'f1-score': 0.84,
    support: 28,
    confused_with: {
      common_mis_keeles: 1,
      'common_covid_küsimused': 1,
    },
  },
  common_mis_keeles: {
    precision: 0.9487179487179487,
    recall: 0.8809523809523809,
    'f1-score': 0.9135802469135802,
    support: 42,
    confused_with: {
      common_mida_teha_oskad: 2,
      common_vaimne_tervis: 1,
    },
  },
  common_kas_oled_robot: {
    precision: 0.9047619047619048,
    recall: 0.8382352941176471,
    'f1-score': 0.8702290076335878,
    support: 68,
    confused_with: {
      common_mida_teha_oskad: 5,
      'common_tänamine': 2,
    },
  },
  'common_covid_küsimused': {
    precision: 0.96,
    recall: 0.8888888888888888,
    'f1-score': 0.923076923076923,
    support: 27,
    confused_with: {
      common_mida_teha_oskad: 2,
      common_kelle_loodud: 1,
    },
  },
  'common_hüvasti_jätmine': {
    precision: 0.9230769230769231,
    recall: 0.8571428571428571,
    'f1-score': 0.888888888888889,
    support: 28,
    confused_with: {
      common_kinnitamine: 1,
      common_teenus_ilm: 1,
    },
  },
  'common_abi_küsimine': {
    precision: 0.85,
    recall: 0.7727272727272727,
    'f1-score': 0.8095238095238095,
    support: 44,
    confused_with: {
      common_eitamine: 3,
      common_mida_teha_oskad: 3,
    },
  },
  common_kelle_loodud: {
    precision: 0.8235294117647058,
    recall: 0.8,
    'f1-score': 0.8115942028985507,
    support: 35,
    confused_with: {
      common_kompliment_botile: 2,
      common_mida_teha_oskad: 2,
    },
  },
  common_kui_vana_oled: {
    precision: 0.8571428571428571,
    recall: 0.75,
    'f1-score': 0.7999999999999999,
    support: 16,
    confused_with: {
      common_mida_teha_oskad: 2,
      common_kompliment_botile: 1,
    },
  },
  'common_hädaabi_number': {
    precision: 0.9655172413793104,
    recall: 0.875,
    'f1-score': 0.9180327868852458,
    support: 32,
    confused_with: {
      'common_abi_küsimine': 1,
      common_mis_keeles: 1,
    },
  },
  common_tervitus: {
    precision: 0.8636363636363636,
    recall: 0.8260869565217391,
    'f1-score': 0.29999,
    support: 23,
    confused_with: {
      common_kompliment_botile: 1,
      common_eitamine: 1,
    },
  },
  common_roppused: {
    precision: 0.8765432098765432,
    recall: 0.8987341772151899,
    'f1-score': 0.8875,
    support: 79,
    confused_with: {
      common_kinnitamine: 7,
      'common_hüvasti_jätmine': 1,
    },
  },
  'common_kuidas_läheb': {
    precision: 1,
    recall: 0.75,
    'f1-score': 0.8571428571428571,
    support: 16,
    confused_with: {
      common_mida_teha_oskad: 2,
      common_teenus_ilm: 1,
    },
  },
  common_mida_teha_oskad: {
    precision: 0.7159090909090909,
    recall: 0.984375,
    'f1-score': 0.8289473684210527,
    support: 64,
    confused_with: {
      'common_abi_küsimine': 1,
    },
  },
  common_klienditeenindajale_suunamine: {
    precision: 0.8235294117647058,
    recall: 0.9655172413793104,
    'f1-score': 0.888888888888889,
    support: 29,
    confused_with: {
      'common_abi_küsimine': 1,
    },
  },
  common_eitamine: {
    precision: 0.8596491228070176,
    recall: 0.8166666666666667,
    'f1-score': 0.8376068376068376,
    support: 60,
    confused_with: {
      common_roppused: 3,
      common_mida_teha_oskad: 2,
    },
  },
  'common_tänamine': {
    precision: 0.8604651162790697,
    recall: 0.7551020408163265,
    'f1-score': 0.8043478260869564,
    support: 49,
    confused_with: {
      common_roppused: 3,
      common_kompliment_botile: 2,
    },
  },
  common_kompliment_botile: {
    precision: 0.8,
    recall: 0.851063829787234,
    'f1-score': 0.8247422680412372,
    support: 47,
    confused_with: {
      common_kas_oled_robot: 4,
      common_mida_teha_oskad: 1,
    },
  },
  common_teenus_ilm: {
    precision: 0.9178082191780822,
    recall: 1,
    'f1-score': 0.9571428571428571,
    support: 67,
    confused_with: {},
  },
  common_kinnitamine: {
    precision: 0.863013698630137,
    recall: 0.8873239436619719,
    'f1-score': 0.875,
    support: 71,
    confused_with: {
      common_roppused: 3,
      common_eitamine: 2,
    },
  },
};
