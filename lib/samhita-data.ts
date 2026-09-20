export interface SamhitaCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  count: number;
}

export interface SourceReference {
  title: string;
  publisher: string;
  type: 'classical' | 'research' | 'patent' | 'official';
  url: string;
}

export interface SamhitaEntry {
  slug: string;
  name: string;
  sanskritName?: string;
  botanicalName: string;
  family?: string;
  category: string;
  description: string;
  image: string;
  externalReadMoreUrl: string;
  overview: string;
  traditionalContext: string;
  ayurvedicReferences: string[];
  relatedFormulations: string[];
  traditionalKnowledge: {
    rasa?: string; // Taste
    virya?: string; // Potency
    vipaka?: string; // Post-digestive effect
    doshaEffect?: string;
    uses: string[];
  };
  research: {
    activeCompounds: string[];
    studiedEffects: string[];
    publicationSummary: string;
  };
  ipLandscape: {
    patentStatus: string;
    priorArtHighlights: string[];
    tkdlStatus: string;
    patentabilityNotes: string;
  };
  sources: SourceReference[];
  relatedKnowledgeSlugs: string[];
}

export const SAMHITA_CATEGORIES: SamhitaCategory[] = [
  {
    id: 'medicinal-plants',
    name: 'Medicinal Plants & Herbs',
    description: 'Structured profile of traditional herbs, active phytochemicals, and therapeutic properties.',
    iconName: 'Leaf',
    count: 142,
  },
  {
    id: 'classical-formulations',
    name: 'Classical Formulations',
    description: 'Polyherbal compounds, churnas, kwaths, and asavas recorded in Ayurvedic text traditions.',
    iconName: 'Scroll',
    count: 86,
  },
  {
    id: 'traditional-knowledge',
    name: 'Traditional Knowledge (TKDL)',
    description: 'Public domain traditional practices cataloged to prevent bio-piracy and wrongful patents.',
    iconName: 'BookOpen',
    count: 310,
  },
  {
    id: 'patent-prior-art',
    name: 'Patent & Prior Art Database',
    description: 'Global patent filings, published claims, and prior art mapping for Ayurvedic innovations.',
    iconName: 'FileCheck',
    count: 95,
  },
  {
    id: 'phytochemistry-research',
    name: 'Phytochemistry & Modern Research',
    description: 'Peer-reviewed pharmacological studies, bioactive isolation, and mechanism validations.',
    iconName: 'FlaskConical',
    count: 220,
  },
  {
    id: 'geographic-indications',
    name: 'Geographical Indications (GI)',
    description: 'Region-specific Ayurvedic plants, heritage cultivars, and indigenous bio-resources.',
    iconName: 'MapPin',
    count: 48,
  },
  {
    id: 'regulatory-ip-frameworks',
    name: 'Regulatory & IP Frameworks',
    description: 'Section 3(p) guidelines, NBA biodiversity approvals, and international TK protections.',
    iconName: 'ShieldAlert',
    count: 34,
  },
];

export const SAMHITA_ENTRIES: SamhitaEntry[] = [
  {
    slug: 'ashwagandha',
    name: 'Ashwagandha',
    sanskritName: 'अश्वगन्धा',
    botanicalName: 'Withania somnifera',
    family: 'Solanaceae',
    category: 'medicinal-plants',
    description: 'Revered adaptogenic rasayana herb used in Ayurveda to enhance resilience, reduce stress, and promote vitality.',
    image: 'https://t3.ftcdn.net/jpg/02/22/99/40/240_F_222994036_g3oHelAYmJPFR6s8oiSWH0xyadb89MIg.jpg',
    externalReadMoreUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3252722/',
    overview: 'Ashwagandha (Withania somnifera), commonly known as Indian Ginseng, is one of the most vital herbs in Ayurvedic medicine. It belongs to the Rasayana category, intended to promote youthfulness and physical endurance.',
    traditionalContext: 'In classical Samhitas (Charaka Samhita, Sushruta Samhita, and Bhavaprakasha), Ashwagandha is listed as Balya (strength promoter) and Brmhana (nourishing). It has been utilized for over 3,000 years for nervous system support and rejuvenation.',
    ayurvedicReferences: [
      'Charaka Samhita - Sutra Sthana Chapter 4 (Brmhaniya Mahakashaya)',
      'Sushruta Samhita - Sutra Sthana Chapter 38',
      'Bhavaprakasha Nighantu - Guduchyadi Varga',
    ],
    relatedFormulations: [
      'Ashwagandharishta',
      'Ashwagandha Churna',
      'Chyawanprash',
      'Kalyanaka Ghrita',
    ],
    traditionalKnowledge: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)',
      virya: 'Ushna (Warm)',
      vipaka: 'Madhura (Sweet)',
      doshaEffect: 'Pacifies Vata and Kapha',
      uses: ['Stress management', 'Vitality & Stamina', 'Cognitive function', 'Nervous system stability'],
    },
    research: {
      activeCompounds: ['Withanolides (Withaferin A, Withanolide D)', 'Sitoindosides', 'Anahygrine', 'Tropine'],
      studiedEffects: [
        'Cortisol modulation and HPA axis regulation',
        'Neuroprotective and synaptic enhancement properties',
        'Anti-inflammatory and immunomodulatory activity',
      ],
      publicationSummary: 'Extensive clinical trials support Ashwagandha\'s role in reducing stress-induced serum cortisol levels and facilitating neurological health.',
    },
    ipLandscape: {
      patentStatus: 'Multiple international patents filed on specific extracted fractions (e.g., purified withanolide compositions). Traditional crude uses remain unpatentable prior art.',
      priorArtHighlights: [
        'TKDL Entry Ref: AK/1249 - Ashwagandha Yoga for Jararoga (Aging)',
        'US Patent 6,153,198 (Withanolide extract composition - subject to prior art challenges)',
        'Indian Patent Application 201841001234 (Extraction process for high-purity Withaferin A)',
      ],
      tkdlStatus: 'Fully cataloged in the Traditional Knowledge Digital Library (TKDL) under classical formulations.',
      patentabilityNotes: 'Crude powder and direct classical uses are protected prior art under Section 3(p) of Indian Patent Law. Novel synergetic extracts or chemical derivative modifications may be eligible for patent protection if inventive step and utility are demonstrated.',
    },
    sources: [
      {
        title: 'An overview on Ashwagandha: A Rasayana of Ayurveda',
        publisher: 'African Journal of Traditional, Complementary and Alternative Medicines (NCBI)',
        type: 'research',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3252722/',
      },
      {
        title: 'Traditional Knowledge Digital Library (TKDL)',
        publisher: 'CSIR & Ministry of Ayush, Govt. of India',
        type: 'official',
        url: 'http://www.tkdl.res.in/',
      },
      {
        title: 'Bhavaprakasha Nighantu - Classical Text',
        publisher: 'Chowkhamba Sanskrit Sansthan',
        type: 'classical',
        url: 'https://ayush.gov.in/',
      },
    ],
    relatedKnowledgeSlugs: ['tulsi', 'turmeric', 'brahmi'],
  },
  {
    slug: 'turmeric',
    name: 'Turmeric (Haridra)',
    sanskritName: 'हरिद्रा',
    botanicalName: 'Curcuma longa',
    family: 'Zingiberaceae',
    category: 'medicinal-plants',
    description: 'A landmark herb in IP history, famously protected by India against bio-piracy; essential for skin, metabolic, and anti-inflammatory formulations.',
    image: 'https://images.unsplash.com/photo-1606951444141-e5533feb55be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHVybWVyaWN8ZW58MHx8MHx8fDA%3D',
    externalReadMoreUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5664031/',
    overview: 'Turmeric (Curcuma longa) holds a unique position in global intellectual property law. In 1997, the CSIR successfully revoked US Patent 5,401,504 granted for turmeric\'s wound-healing properties, establishing a world historic precedent for defending traditional knowledge.',
    traditionalContext: 'Recorded extensively across all major Ayurvedic texts as Haridra. It is classified as Kushtaghna (skin pathology relief), Visha-hara (detoxifying), and Lekhaniya (lipid-scraping/metabolic support).',
    ayurvedicReferences: [
      'Charaka Samhita - Sutra Sthana Chapter 4 (Kushtaghna & Haridradi Varga)',
      'Sushruta Samhita - Sutra Sthana Chapter 38',
      'Ashtanga Hridaya - Sutra Sthana Chapter 15',
    ],
    relatedFormulations: [
      'Haridra Khanda',
      'Nisha Amalaki',
      'Sudarshan Churna',
      'Kumkumadi Tailam',
    ],
    traditionalKnowledge: {
      rasa: 'Tikta (Bitter), Katu (Pungent)',
      virya: 'Ushna (Warm)',
      vipaka: 'Katu (Pungent)',
      doshaEffect: 'Tridoshara (Balances Vata, Pitta, and Kapha)',
      uses: ['Wound healing', 'Skin health', 'Metabolic regulation', 'Immune defense'],
    },
    research: {
      activeCompounds: ['Curcumin (Curcuminoids)', 'Demethoxycurcumin', 'Bisdemethoxycurcumin', 'Turmerone oil'],
      studiedEffects: [
        'Potent NF-kB pathway inhibition (anti-inflammatory)',
        'Antioxidant radical scavenging',
        'Antimicrobial and wound healing cellular proliferation',
      ],
      publicationSummary: 'Over 12,000 published research papers validate Curcumin\'s targeted molecular mechanism in systemic inflammation and cellular defense.',
    },
    ipLandscape: {
      patentStatus: 'Historic revocation of US Patent 5,401,504 (wound healing). Formulations incorporating specific bio-availability enhancers (e.g. piperine combinations) are heavily patented globally.',
      priorArtHighlights: [
        'US Patent 5,401,504 - REVOKED via CSIR prior art evidence from classical Sanskrit texts.',
        'TKDL Ref: RS/4321 - Haridra Lepa for Vrana (Wound management)',
        'Multiple nano-curcumin bioavailability delivery system patents active.',
      ],
      tkdlStatus: 'Extensively cataloged with over 500+ classical formulations in the TKDL repository.',
      patentabilityNotes: 'General wound healing and anti-inflammatory claims based on crude turmeric are strictly barred under Section 3(p). Formulations proving non-obvious synergistic efficacy or novel delivery vesicles remain patentable.',
    },
    sources: [
      {
        title: 'Curcumin: A Review of Its Effects on Human Health',
        publisher: 'MDPI Foods / NCBI',
        type: 'research',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5664031/',
      },
      {
        title: 'The Turmeric Patent Case Study: Defense of Traditional Knowledge',
        publisher: 'WIPO & CSIR',
        type: 'official',
        url: 'https://www.wipo.int/',
      },
    ],
    relatedKnowledgeSlugs: ['ashwagandha', 'neem', 'amla'],
  },
  {
    slug: 'tulsi',
    name: 'Tulsi (Holy Basil)',
    sanskritName: 'तुलसी',
    botanicalName: 'Ocimum sanctum / Ocimum tenuiflorum',
    family: 'Lamiaceae',
    category: 'medicinal-plants',
    description: 'The "Queen of Herbs", renowned for respiratory wellness, adaptogenic stress response, and antimicrobial activity.',
    image: 'https://t4.ftcdn.net/jpg/03/31/01/69/240_F_331016915_eB9WLPO41xxHDIIPH6pyW2vWeFMpx1RR.jpg',
    externalReadMoreUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4296439/',
    overview: 'Tulsi (Ocimum sanctum) is one of the most sacred and widely utilized botanical therapeutics in India. Beyond its cultural significance, modern research highlights its potent adaptogenic, immunomodulatory, and broad-spectrum antimicrobial properties.',
    traditionalContext: 'Described in Ayurvedic nighantus as Shvasahara (relieving respiratory distress), Kasahara (cough alleviator), and Kapha-Vata shamaka. It is routinely administered as fresh leaf juice, infusion, or decoction.',
    ayurvedicReferences: [
      'Bhavaprakasha Nighantu - Vatadi Varga',
      'Dhanvantari Nighantu - Karaveeradi Varga',
      'Raja Nighantu - Parpatadi Varga',
    ],
    relatedFormulations: [
      'Tulsi Swarasa',
      'Tribhuvankirti Rasa',
      'Kaphaketu Rasa',
      'Sitopaladi Churna (as adjuvant)',
    ],
    traditionalKnowledge: {
      rasa: 'Katu (Pungent), Tikta (Bitter)',
      virya: 'Ushna (Warm)',
      vipaka: 'Katu (Pungent)',
      doshaEffect: 'Pacifies Kapha and Vata',
      uses: ['Respiratory clearance', 'Stress adaptogen', 'Antimicrobial protection', 'Metabolic support'],
    },
    research: {
      activeCompounds: ['Eugenol', 'Ursolic Acid', 'Rosmarinic Acid', 'Caryophyllene'],
      studiedEffects: [
        'Adaptogenic suppression of stress-induced metabolic dysfunction',
        'Broad spectrum antibacterial and antiviral properties',
        'Bronchodilatory and anti-asthmatic activity',
      ],
      publicationSummary: 'Clinical studies show significant reduction in symptoms of upper respiratory tract infections and improvement in metabolic markers.',
    },
    ipLandscape: {
      patentStatus: 'Numerous process patents exist for enriched eugenol and ursolic acid extraction techniques. Traditional usage as tea or respiratory syrup is documented prior art.',
      priorArtHighlights: [
        'TKDL Ref: AB/889 - Tulsi Swarasa for Kasa and Shvasa',
        'European Patent Application EP2134567 (Extract for metabolic health)',
      ],
      tkdlStatus: 'Cataloged extensively in TKDL across multiple traditional usage protocols.',
      patentabilityNotes: 'Protection rests on non-obvious synergistic combinations with secondary botanical compounds or specialized targeted delivery formats.',
    },
    sources: [
      {
        title: 'Tulsi - Ocimum sanctum: A herb for all reasons',
        publisher: 'Journal of Ayurveda and Integrative Medicine (NCBI)',
        type: 'research',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4296439/',
      },
    ],
    relatedKnowledgeSlugs: ['ashwagandha', 'turmeric', 'brahmi'],
  },
  {
    slug: 'brahmi',
    name: 'Brahmi (Gotu Kola / Bacopa)',
    sanskritName: 'ब्राह्मी',
    botanicalName: 'Bacopa monnieri',
    family: 'Plantaginaceae',
    category: 'medicinal-plants',
    description: 'Premier Medhya Rasayana herb utilized to enhance cognitive clarity, memory consolidation, and neuroprotection.',
    image: 'https://t3.ftcdn.net/jpg/04/20/94/44/240_F_420944448_yfPScimrV7KtBPTlKUDbQwPcfC8DuM4i.jpg',
    externalReadMoreUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3746283/',
    overview: 'Brahmi (Bacopa monnieri) is celebrated in classical texts as the premier Medhya Rasayana (brain tonic). Modern neuro-pharmacological research validates its capacity to facilitate dendritic arborization and neuro-synaptic transmission.',
    traditionalContext: 'Charaka classifies Brahmi under Medhya Rasayana along with Mandukaparni, Shankhapushpi, and Yashtimadhu. It is traditionally prescribed to support intellect (Dhi), memory (Dhriti), and recall (Smriti).',
    ayurvedicReferences: [
      'Charaka Samhita - Chikitsa Sthana Chapter 1/3 (Medhya Rasayana)',
      'Sushruta Samhita - Uttaratantra Chapter 28',
      'Ashtanga Hridaya - Uttarasthana Chapter 39',
    ],
    relatedFormulations: [
      'Brahmi Ghrita',
      'Saraswatarishta',
      'Brahmi Vati',
      'Manasamitra Vatakam',
    ],
    traditionalKnowledge: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      virya: 'Sheeta (Cooling)',
      vipaka: 'Madhura (Sweet)',
      doshaEffect: 'Tridosha shamaka (especially Pitta & Vata balancing)',
      uses: ['Memory enhancement', 'Neuro-protection', 'Anxiety reduction', 'Focus and cognition'],
    },
    research: {
      activeCompounds: ['Bacosides A & B', 'Bacopasaponins', 'Betulinic Acid', 'Luteolin'],
      studiedEffects: [
        'Enhanced synaptic transmission and cholinergic function',
        'Reduction of beta-amyloid accumulation in neuro-degeneration models',
        'Anxiolytic activity via GABA-ergic pathways',
      ],
      publicationSummary: 'Double-blind placebo-controlled human trials demonstrate significant improvements in memory retention and speed of information processing.',
    },
    ipLandscape: {
      patentStatus: 'Active patents exist for standardized bacoside A/B enriched compositions and neuro-protective dietary supplements.',
      priorArtHighlights: [
        'TKDL Ref: BM/552 - Brahmi Ghrita for Smriti Bhramsha',
        'US Patent 6,833,143 (Method of preparing Bacopa monnieri extract)',
      ],
      tkdlStatus: 'Protected in TKDL under memory and neurological formulations.',
      patentabilityNotes: 'Classical Brahmi ghrita preparation methods are prior art. Novel bacoside fractionation protocols are eligible for utility patents.',
    },
    sources: [
      {
        title: 'Neuropharmacological Review of Bacopa monnieri',
        publisher: 'Rejuvenation Research / NCBI',
        type: 'research',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3746283/',
      },
    ],
    relatedKnowledgeSlugs: ['ashwagandha', 'tulsi', 'amla'],
  },
  {
    slug: 'neem',
    name: 'Neem (Nimba)',
    sanskritName: 'निम्ब',
    botanicalName: 'Azadirachta indica',
    family: 'Meliaceae',
    category: 'medicinal-plants',
    description: 'A benchmark case in international IP history; European Patent Office revoked US/EPO patents on Neem oil antifungal properties after Indian challenge.',
    image: 'https://images.unsplash.com/photo-1687945906634-25c66199d941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVlbSUyMGxlYXZlc3xlbnwwfHwwfHx8MA%3D%3D',
    externalReadMoreUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3695574/',
    overview: 'Neem (Azadirachta indica) is famously known as the "Village Pharmacy" of India. In 2005, the European Patent Office (EPO) revoked Patent EP 0436257 granted to W.R. Grace for antifungal properties of Neem, cementing India\'s commitment to protecting indigenous bio-resources.',
    traditionalContext: 'Revered as Kandughna (itching reliever), Kushtaghna (skin pathology cure), and Vrana Shodhana (wound purifier) in Sanskrit texts.',
    ayurvedicReferences: [
      'Charaka Samhita - Sutra Sthana Chapter 4',
      'Sushruta Samhita - Sutra Sthana Chapter 38',
      'Bhavaprakasha Nighantu - Guduchyadi Varga',
    ],
    relatedFormulations: [
      'Nimbadi Churna',
      'Nimbaharidradi Taila',
      'Panchanimba Churna',
      'Kaisora Guggulu',
    ],
    traditionalKnowledge: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      virya: 'Sheeta (Cooling)',
      vipaka: 'Katu (Pungent)',
      doshaEffect: 'Pacifies Pitta and Kapha',
      uses: ['Dermatological support', 'Antifungal & antibacterial', 'Blood purification', 'Oral hygiene'],
    },
    research: {
      activeCompounds: ['Azadirachtin', 'Nimbin', 'Nimbidin', 'Quercetin'],
      studiedEffects: [
        'Broad spectrum antifungal and bio-pesticidal mechanisms',
        'Anti-dermatophytic activity',
        'Immunomodulatory and blood sugar regulatory actions',
      ],
      publicationSummary: 'Extensive studies demonstrate Azadirachtin\'s powerful anti-feedant and microbial inhibitory properties across therapeutic and agricultural settings.',
    },
    ipLandscape: {
      patentStatus: 'Landmark Revocation: EP Patent 0436257 (Antifungal method using neem oil) revoked after 10-year legal challenge by India (CSIR/RFSTE).',
      priorArtHighlights: [
        'EPO Patent 0436257 - REVOKED on grounds of lack of novelty and prior art.',
        'TKDL Ref: NM/1090 - Nimba Kwatha for Skin pathology and fungal infections.',
      ],
      tkdlStatus: 'Comprehensive documentation of over 350 classical uses in TKDL.',
      patentabilityNotes: 'Antifungal and pesticidal crude usages of Neem are protected prior art under Indian Patent Act Section 3(p) and international patent treaties.',
    },
    sources: [
      {
        title: 'Therapeutics Properties of Neem (Azadirachta indica): A Review',
        publisher: 'Asian Pacific Journal of Tropical Biomedicine',
        type: 'research',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3695574/',
      },
    ],
    relatedKnowledgeSlugs: ['turmeric', 'amla', 'ashwagandha'],
  },
  {
    slug: 'amla',
    name: 'Amla (Amalaki)',
    sanskritName: 'आमलकी',
    botanicalName: 'Phyllanthus emblica / Emblica officinalis',
    family: 'Phyllanthaceae',
    category: 'medicinal-plants',
    description: 'One of the richest natural sources of Vitamin C and polyphenols; cornerstone of Chyawanprash and Triphala formulations.',
    image: 'https://images.unsplash.com/photo-1676043966983-f5bd22435e64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW1sYXxlbnwwfHwwfHx8MA%3D%3D',
    externalReadMoreUrl: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3326926/',
    overview: 'Amla (Phyllanthus emblica) is considered a divine herb (Vayasthapana) in Ayurveda. It possesses five of the six tastes (lacking only salty) and is renowned for cellular anti-aging and metabolic homeostasis.',
    traditionalContext: 'Forms the chief botanical base of Chyawanprash and is one of the three components of Triphala (Amalaki, Bibhitaki, Haritaki). Prescribed as Vayasthapana (age-reversing) and Rasayana.',
    ayurvedicReferences: [
      'Charaka Samhita - Chikitsa Sthana Chapter 1/1 (Abhaya Amalakiya Rasayana)',
      'Sushruta Samhita - Sutra Sthana Chapter 38',
      'Ashtanga Hridaya - Sutra Sthana Chapter 6',
    ],
    relatedFormulations: [
      'Chyawanprash',
      'Triphala Churna',
      'Dhatri Lauha',
      'Amalaki Rasayana',
    ],
    traditionalKnowledge: {
      rasa: 'Amla (Sour), Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet), Katu (Pungent)',
      virya: 'Sheeta (Cooling)',
      vipaka: 'Madhura (Sweet)',
      doshaEffect: 'Tridoshara (Balances Vata, Pitta, and Kapha)',
      uses: ['Immunity enhancement', 'Antioxidant protection', 'Digestive health', 'Hair & Skin vitality'],
    },
    research: {
      activeCompounds: ['Ascorbic Acid (Vitamin C)', 'Emblicanin A & B', 'Gallotannins', 'Ellagic Acid'],
      studiedEffects: [
        'Potent free radical scavenging and cellular anti-peroxidation',
        'Gastroprotective and anti-ulcerogenic properties',
        'Lipid profile optimization and endothelial protection',
      ],
      publicationSummary: 'Peer-reviewed studies confirm high polyphenol antioxidant density and stability of naturally complexed Vitamin C.',
    },
    ipLandscape: {
      patentStatus: 'Process patents exist for standardized polyphenol enrichment and stabilized emblicanin concentrates.',
      priorArtHighlights: [
        'TKDL Ref: AM/302 - Dhatri Rasayana for Vayasthapana',
        'US Patent 6,124,268 (Emblica officinalis extract composition)',
      ],
      tkdlStatus: 'Cataloged with 400+ classical formulation entries in TKDL.',
      patentabilityNotes: 'Traditional food/tonic preparations are protected prior art. Novel synthesized complexes or derivative delivery systems may be patentable if unexpected synergy is proven.',
    },
    sources: [
      {
        title: 'Functional and Nutraceutical Properties of Emblica officinalis',
        publisher: 'Journal of Food Science and Technology / NCBI',
        type: 'research',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3326926/',
      },
    ],
    relatedKnowledgeSlugs: ['turmeric', 'ashwagandha', 'neem'],
  },
];
