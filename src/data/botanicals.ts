import { Formulation, BotanicalMonograph, BespokeQuestion } from '../types';

export const FORMULATIONS: Formulation[] = [
  {
    id: 'AB-001',
    sku: 'AUR-049C-50',
    batchNumber: 'BATCH 049-C',
    name: 'Cyclo-Botanical Cell Infusion',
    scientificExtract: 'Helichrysum Italicum & Alpine Rhodiola Callus',
    collection: 'Cellular Phyto-Elixirs',
    subtitle: 'High-altitude bio-active concentrate calibrated for mitochondrial cellular longevity and deep dermal repair.',
    volume: '50 ML / 1.69 FL.OZ',
    price: 185,
    image: 'https://images.unsplash.com/photo-1608248597359-0098e9863c0a?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=85',
    origin: 'Valais Alps, Switzerland',
    altitude: '2,420m Above Sea Level',
    harvestDate: 'August 2026',
    description: 'A multi-layered cellular matrix harvested at peak solar equinox from protected alpine slopes. Formulated via ultrasound-assisted cold extraction to preserve sensitive bio-active italidiones and salidrosides without synthetic solvents.',
    tactileRitual: 'Dispense precisely 4 to 5 drops into warm palms. Press firmly onto clean neck and facial contours using rhythmic upward decelerations.',
    sensoryNotes: {
      top: 'Wild Alpine Immortelle & Sun-Warmed Quartz',
      heart: 'Cold-Pressed Vetiver Root & Lichen',
      base: 'Dry Balsam Fir & Subtle Amber Resin'
    },
    accords: [
      { label: 'Cellular Longevity & Repair', percentage: 96 },
      { label: 'Transepidermal Fortification', percentage: 92 },
      { label: 'Free-Radical Quenching', percentage: 89 },
      { label: 'Lipidic Barrier Harmony', percentage: 94 }
    ],
    phytochemicalFocus: ['Italidione I & II', 'Salidroside (3.2%)', 'Rosavin', 'Phytosterols'],
    inci: [
      'Helichrysum Italicum Flower Water*',
      'Squalane (Olive-Derived)',
      'Rhodiola Rosea Root Extract',
      'Bakuchiol (Psoralea Corylifolia)',
      'Boswellia Serrata Resin Extract',
      'Tocopherol (Non-GMO Sunflower)'
    ],
    inStock: true,
    batchRemaining: 38,
    totalBatchSize: 500
  },
  {
    id: 'AB-002',
    sku: 'AUR-032R-60',
    batchNumber: 'BATCH 032-R',
    name: 'Nocturnal Resin Restorative Balsam',
    scientificExtract: 'Boswellia Carterii Oleoresin & Commiphora Myrrha',
    collection: 'Rare Resins & Balms',
    subtitle: 'Lipid-dense overnight restorative salve that melts on contact to seal compromised skin barriers.',
    volume: '60 ML / 2.02 FL.OZ',
    price: 210,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85',
    origin: 'Dhofar Escarpment, Oman',
    altitude: '1,150m High Plateau',
    harvestDate: 'June 2026',
    description: 'Slow-macerated green frankincense tears combined with wild harvested myrrh and mountain beeswax. Designed to soothe inflammatory cascades and facilitate nighttime tissue reconstruction during sleep.',
    tactileRitual: 'Warm an almond-sized portion between fingertips until it transforms into a silk-weight oil. Smooth evenly across face as the final twilight layer.',
    sensoryNotes: {
      top: 'Green Frankincense Tears & Pine Terpenes',
      heart: 'Ancient Dark Myrrh & Crushed Cardamom',
      base: 'Smoked Honeycomb & Pure Labdanum'
    },
    accords: [
      { label: 'Overnight Barrier Restoration', percentage: 98 },
      { label: 'Inhibition of Micro-Inflammation', percentage: 95 },
      { label: 'Transepidermal Water Retention', percentage: 97 },
      { label: 'Cutaneous Elasticity', percentage: 91 }
    ],
    phytochemicalFocus: ['Boswellic Acids (AKBA 14%)', 'Curzerene', 'Furanosesquiterpenes', 'Beeswax Esters'],
    inci: [
      'Butyrospermum Parkii Butter*',
      'Boswellia Carterii Resin Extract',
      'Commiphora Myrrha Oil',
      'Simmondsia Chinensis Seed Oil*',
      'Cera Alba (Organic Mountain Honeycomb)',
      'Vetiveria Zizanioides Root Oil'
    ],
    inStock: true,
    batchRemaining: 24,
    totalBatchSize: 350
  },
  {
    id: 'AB-003',
    sku: 'AUR-018L-30',
    batchNumber: 'BATCH 018-L',
    name: 'Phyto-Luminescent Cold-Pressed Lipid',
    scientificExtract: 'Nigella Sativa Seed & Hippophae Supercritical CO2',
    collection: 'Cold-Pressed Lipids',
    subtitle: 'Unrefined bio-active botanical nectar yielding immediate cellular radiance and antioxidant defense.',
    volume: '30 ML / 1.01 FL.OZ',
    price: 160,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=85',
    origin: 'Black Sea Coast, Anatolia',
    altitude: 'Sea Level Microclimate',
    harvestDate: 'September 2026',
    description: 'Raw, first-press black seed oil united with vibrant orange sea buckthorn berries extracted via supercritical carbon dioxide at room temperature. Packed with carotenoids, omega-7 palmitoleic acid, and thymoquinone.',
    tactileRitual: 'Gently pat 3 drops onto damp skin following hydrosol tonification. Delivers an immediate non-greasy golden luminescence.',
    sensoryNotes: {
      top: 'Fresh Black Cumin & Crushed Coriander',
      heart: 'Tart Mountain Berry & Sea Mist',
      base: 'Warm Earth & Cold-Pressed Hemp Seed'
    },
    accords: [
      { label: 'Cutaneous Radiance & Tone', percentage: 95 },
      { label: 'Lipid Peroxidation Defense', percentage: 97 },
      { label: 'Cell Membrane Fluidity', percentage: 93 },
      { label: 'Epithelial Clarification', percentage: 88 }
    ],
    phytochemicalFocus: ['Thymoquinone (2.4%)', 'Palmitoleic Acid (Omega-7)', 'Beta-Carotene', 'Phytosterols'],
    inci: [
      'Nigella Sativa (Black Cumin) Seed Oil*',
      'Hippophae Rhamnoides (Sea Buckthorn) Fruit Extract',
      'Rosa Canina (Rosehip) Seed Oil*',
      'Punica Granatum Seed Extract',
      'Rosmarinus Officinalis Leaf Extract'
    ],
    inStock: true,
    batchRemaining: 52,
    totalBatchSize: 400
  },
  {
    id: 'AB-004',
    sku: 'AUR-077H-100',
    batchNumber: 'BATCH 077-H',
    name: 'Hydrosol Mist of High-Alpine Elder & Damask Rose',
    scientificExtract: 'Rosa Damascena Mill & Sambucus Nigra Steam Distillate',
    collection: 'Fermented Floral Waters',
    subtitle: 'Copper-alembic distilled cellular dew calibrated to rebalance cutaneous pH and osmotic pressure.',
    volume: '100 ML / 3.38 FL.OZ',
    price: 95,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
    origin: 'Kazanlak Valley, Bulgaria',
    altitude: '650m Alpine Basin',
    harvestDate: 'May 2026',
    description: 'Pure floral water drawn during dawn condensation in artisanal copper alembics. Naturally holds the botanical essential oil fractions in micro-suspension without requiring emulsifying agents or alcohol.',
    tactileRitual: 'Hold 8 inches from face and close eyes. Disperse 3 to 4 fine vaporous mists over face, neck, and chest before applying elixirs.',
    sensoryNotes: {
      top: 'Green Morning Dew & Crushed Petals',
      heart: 'Velvety Damask Rose & Crisp Elderflower',
      base: 'Rain-Washed Limestone & Herbaceous Hay'
    },
    accords: [
      { label: 'Osmotic Hydration Depth', percentage: 98 },
      { label: 'pH Equilibrium Rebalancing', percentage: 96 },
      { label: 'Sensory De-Stressing', percentage: 94 },
      { label: 'Cellular Permeability Boost', percentage: 91 }
    ],
    phytochemicalFocus: ['Geraniol Hydrosol Complex', 'Rutin', 'Isoquercitrin', 'Naturally Occurring Rose Esters'],
    inci: [
      'Rosa Damascena Flower Distillate*',
      'Sambucus Nigra (Elderflower) Distillate*',
      'Lactobacillus Ferment Filtrate',
      'Aqua (Alpine Glacial Spring Water)'
    ],
    inStock: true,
    batchRemaining: 67,
    totalBatchSize: 600
  },
  {
    id: 'AB-005',
    sku: 'AUR-014P-75',
    batchNumber: 'BATCH 014-P',
    name: 'Petrified Glacial Clay & Bitter Orange Purifying Paste',
    scientificExtract: 'Glacial Marine Silt & Citrus Aurantium Flower Cell Water',
    collection: 'Rare Resins & Balms',
    subtitle: 'Sub-micron colloidal mineral paste drawing micro-impurities while nourishing intercellular lipids.',
    volume: '75 ML / 2.53 FL.OZ',
    price: 120,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=85',
    origin: 'Bella Coola Coastal Range, British Columbia',
    altitude: 'Glacial Runoff Bed',
    harvestDate: 'July 2026',
    description: 'Formed through geological millennia of tidal interaction and mountain sediment. Rich in over 60 oceanic trace elements that harmonize skin flora and clarify pore architecture without stripping moisture.',
    tactileRitual: 'Apply an opaque uniform veil across cleansed face using a botanical flat brush. Allow to cure for 10 minutes before rinsing with warm muslin.',
    sensoryNotes: {
      top: 'Bitter Petitgrain & Neroli Twig',
      heart: 'Oceanic Glacial Silt & Wet Granite',
      base: 'Wild Angelica Root & Mountain Cedar'
    },
    accords: [
      { label: 'Follicular Clarification', percentage: 97 },
      { label: 'Trace Mineral Remineralization', percentage: 93 },
      { label: 'Sebum Equilibrium Control', percentage: 92 },
      { label: 'Microbiome Preservation', percentage: 94 }
    ],
    phytochemicalFocus: ['Colloidal Silicates', 'Magnesium Chloride', 'Neroli Cell Bioflavonoids', 'Zinc PCA'],
    inci: [
      'Sea Silt (Glacial Marine Clay)',
      'Citrus Aurantium Amara Flower Water*',
      'Glycerin (Plant-Derived)',
      'Kaolin',
      'Zinc PCA',
      'Pelargonium Graveolens Leaf Oil'
    ],
    inStock: true,
    batchRemaining: 19,
    totalBatchSize: 250
  },
  {
    id: 'AB-006',
    sku: 'AUR-029E-50',
    batchNumber: 'BATCH 029-E',
    name: 'Vetiver Root & Cypress Concentrated Essence',
    scientificExtract: 'Vetiveria Zizanioides Bourbon & Cupressus Sempervirens',
    collection: 'Aromatic Essences',
    subtitle: 'Artisanal Extrait de Parfum and olfactory shield evoking ancient botanical archives and deep forests.',
    volume: '50 ML / 1.69 FL.OZ',
    price: 195,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1000&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1000&q=85',
    origin: 'Réunion Island & Tuscan Hills',
    altitude: '800m Hillside Terrace',
    harvestDate: 'October 2026',
    description: 'A 28% concentration botanical perfume extracted from three-year aged vetiver roots and needle-cut Italian cypress. Matured in glass carboys under controlled subterranean cellar temperatures for 180 days.',
    tactileRitual: 'Apply to pulse points at wrists, hollow of throat, and temples. Develops in intimate harmony with personal skin chemistry.',
    sensoryNotes: {
      top: 'Crisp Cypress Needles & Bitter Bergamot',
      heart: 'Smoked Bourbon Vetiver Root & Clary Sage',
      base: 'Ancient Cedar Wood & Damp Soil Petrichor'
    },
    accords: [
      { label: 'Olfactory Longevity & Sillage', percentage: 98 },
      { label: 'Neuro-Limbic Grounding', percentage: 96 },
      { label: 'Natural Extract Purity', percentage: 99 },
      { label: 'Complex Terpene Maturation', percentage: 92 }
    ],
    phytochemicalFocus: ['Khusimol', 'Isovalencenol', 'Alpha-Pinene', 'Cupressene'],
    inci: [
      'Alcohol Denat. (Organic Grape Alcohol)',
      'Parfum (100% Natural Botanical Isolate & Essential Oil Compound)',
      'Vetiveria Zizanioides Root Oil',
      'Cupressus Sempervirens Leaf Oil',
      'Limonene**',
      'Linalool**'
    ],
    inStock: true,
    batchRemaining: 41,
    totalBatchSize: 300
  }
];

export const BOTANICAL_MONOGRAPHS: BotanicalMonograph[] = [
  {
    id: 'MONO-01',
    commonName: 'Alpine Immortelle',
    scientificBinomial: 'Helichrysum italicum subsp. serotinum',
    family: 'Asteraceae',
    originRegion: 'Valais Alps & Corsican Maquis',
    harvestElevation: '1,800m – 2,400m',
    extractionTechnique: 'Supercritical CO2 & Steam Co-Distillation',
    primaryActiveConstituents: ['Italidiones I, II & III', 'Neryl Acetate', 'Curcumene', 'Alpha-Pinene'],
    clinicalEfficacy: 'Proven in cellular assays to stimulate microcirculation, accelerate tissue remodeling, and scavenge singlet oxygen with fourfold potency of alpha-tocopherol.',
    sensoryProfile: 'Intensely herbal, sun-baked dry hay, warm golden curry undertones with caramelized resinous depth.',
    image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80',
    associatedFormulationIds: ['AB-001']
  },
  {
    id: 'MONO-02',
    commonName: 'Golden Frankincense',
    scientificBinomial: 'Boswellia carterii Birdw.',
    family: 'Burseraceae',
    originRegion: 'Dhofar Mist Woodlands, Southern Oman',
    harvestElevation: '900m – 1,200m',
    extractionTechnique: 'Sub-Zero Cryogenic Grinding & Cold Lipid Maceration',
    primaryActiveConstituents: ['Acetyl-11-keto-beta-boswellic acid (AKBA)', 'Incensole Acetate', 'Beta-Caryophyllene'],
    clinicalEfficacy: 'Targets 5-lipoxygenase (5-LOX) pathways, suppressing enzymatic degradation of dermal collagen matrix while inducing parasympathetic neurological calm.',
    sensoryProfile: 'Balsamic, crystalline citrus pine, sacred church smoke, and warm ancient resins.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    associatedFormulationIds: ['AB-002', 'AB-001']
  },
  {
    id: 'MONO-03',
    commonName: 'Black Cumin Seed',
    scientificBinomial: 'Nigella sativa L.',
    family: 'Ranunculaceae',
    originRegion: 'Upper Anatolian Plateau, Turkey',
    harvestElevation: '450m',
    extractionTechnique: 'Hydraulic Cold-Screw Press (<38°C)',
    primaryActiveConstituents: ['Thymoquinone (2.4% w/w)', 'Nigellone', 'Linoleic Acid (Omega-6)', 'Thymol'],
    clinicalEfficacy: 'Potent immunomodulatory lipid providing broad-spectrum microbial balancing, anti-comedogenic properties, and reinforced barrier cohesion.',
    sensoryProfile: 'Pungent, herbaceous pepper, deeply roasted walnut note, spicy dry finish.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80',
    associatedFormulationIds: ['AB-003']
  },
  {
    id: 'MONO-04',
    commonName: 'Bourbon Vetiver',
    scientificBinomial: 'Vetiveria zizanioides (L.) Nash',
    family: 'Poaceae',
    originRegion: 'Volcanic Slopes, Réunion Island',
    harvestElevation: '600m – 1,000m',
    extractionTechnique: 'Low-Pressure Extended Hydro-Distillation (36 hours)',
    primaryActiveConstituents: ['Khusimol', 'Isovalencenol', 'Vetivone', 'Beta-Vetivenene'],
    clinicalEfficacy: 'Remarkable radical scavenging capability coupled with transdermal penetration enhancing effects for lipophilic compounds.',
    sensoryProfile: 'Dense damp loam, rooty woods, smoky fireplace embers, sweet wet soil and moss.',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80',
    associatedFormulationIds: ['AB-006', 'AB-001']
  }
];

export const BESPOKE_QUESTIONS: BespokeQuestion[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Epidermal Barrier Diagnostics',
    subtitle: 'Identify your skin’s current cellular homeostasis and reactivity pattern.',
    options: [
      {
        id: 'reactive',
        title: 'Sensitized & Reactive',
        scientificTerm: 'Impaired Stratum Corneum / Micro-Inflammation',
        description: 'Frequent erythema, stinging from water or weather changes, depleted ceramide levels.',
        phytochemicals: ['AKBA Boswellic Acids', 'Alpha-Bisabolol', 'High-Elevation Blue Tansy']
      },
      {
        id: 'depleted',
        title: 'Lipid-Depleted & Arid',
        scientificTerm: 'High Transepidermal Water Loss (TEWL)',
        description: 'Persistent tautness, flaking micro-textures, diminished lipid mantle defense.',
        phytochemicals: ['Omega-7 Palmitoleic Acid', 'Bio-Identical Olive Squalane', 'Cistus Resin']
      },
      {
        id: 'photo-aged',
        title: 'Oxidatively Stressed & Fatigued',
        scientificTerm: 'Photo-Induced Extracellular Matrix Degradation',
        description: 'Loss of rebound elasticity, uneven tone, compromised mitochondrial cellular vitality.',
        phytochemicals: ['Rhodiola Salidroside', 'Supercritical Astaxanthin', 'Italidione Immortelle']
      },
      {
        id: 'dynamic',
        title: 'Dynamic & Congested',
        scientificTerm: 'Follicular Hyperkeratinization / Sebum Imbalance',
        description: 'Excess sebum oxidation, localized blemishes, sluggish cellular turnover.',
        phytochemicals: ['Thymoquinone (Nigella Sativa)', 'Glacial Marine Trace Minerals', 'Pore-Refining Zinc']
      }
    ]
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Ecological & Geographic Exposure',
    subtitle: 'Calibrate the formulation to counteract your immediate atmospheric conditions.',
    options: [
      {
        id: 'metropolitan',
        title: 'Urban High-Density Atmosphere',
        scientificTerm: 'Particulate Matter (PM2.5) & Heavy Metal Scavenging',
        description: 'Exposure to combustion residues, ambient ozone, and airborne industrial oxidants.',
        phytochemicals: ['Moringa Seed Peptide Shield', 'Ferulic Acid Phyto-Complex', 'Chlorella Chlorophyll']
      },
      {
        id: 'alpine-arid',
        title: 'Alpine & High-Altitude Aridity',
        scientificTerm: 'High UV-B Index & Low Barometric Pressure',
        description: 'Intense seasonal freeze, low humidity, dry indoor radiant heating.',
        phytochemicals: ['Edelweiss Leontopodic Acid', 'Snow Algae Extremophile', 'Organic Honeycomb Wax']
      },
      {
        id: 'subtropical',
        title: 'Subtropical & Humid Maritime',
        scientificTerm: 'High Thermal Vapor & Accelerated Sebum Liquefaction',
        description: 'High heat, moisture saturation, and intense daily ultraviolet radiation.',
        phytochemicals: ['Green Tea EGCG', 'Damask Rose Hydrosol Fraction', 'Water Lily Root Stems']
      },
      {
        id: 'temperate',
        title: 'Variable Temperate Maritime',
        scientificTerm: 'Oscillating Barometric Gradient',
        description: 'Rapid shifts between coastal rainfall, windy conditions, and mild temperature swings.',
        phytochemicals: ['Sea Kelp Bio-Ferment', 'Sea Buckthorn Fruit Extract', 'Elderberry Polyphenols']
      }
    ]
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Primary Cellular Target',
    subtitle: 'Determine the focal biological pathway for prescriptive formulation.',
    options: [
      {
        id: 'mitochondrial',
        title: 'Mitochondrial Energy & Longevity',
        scientificTerm: 'Cellular ATP Generation & Sirtuin Activation',
        description: 'Stimulate natural cell regenerative capacity and postpone cellular senescence.',
        phytochemicals: ['Alpine Rhodiola Extract (3.5% Rosavin)', 'CoQ10 Ferment', 'Resveratrol Polyfraction']
      },
      {
        id: 'barrier-repair',
        title: 'Dense Lipid-Bilayer Rebuilding',
        scientificTerm: 'Ceramide 1, 3, 6-II Endogenous Synthesis',
        description: 'Cushion cellular matrix and construct an impenetrable lipid mantle.',
        phytochemicals: ['Oman Frankincense Oleoresin', 'Cold-Pressed Camelina Sativa', 'Oat Beta-Glucans']
      },
      {
        id: 'melanin-clarity',
        title: 'Melanin Harmony & Radiance',
        scientificTerm: 'Tyrosinase Inhibition & Stratum Corneum Luster',
        description: 'Disperse hyper-pigmented clusters and unveil natural radiant luminescence.',
        phytochemicals: ['Wild Bearberry Arbutin', 'Licorice Glabridin', 'Kakadu Plum Ascorbic Isolate']
      },
      {
        id: 'neuro-calm',
        title: 'Neuro-Cutaneous De-Stressing',
        scientificTerm: 'Substance P & Neuropeptide Mitigation',
        description: 'Down-regulate sensory nerve hyper-reactivity and soothe tactile flushing.',
        phytochemicals: ['German Chamomile Chamazulene', 'St. John’s Wort Hyperforin', 'Roman Chamomile Esters']
      }
    ]
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: 'Olfactory Affinity & Sensorial Accord',
    subtitle: 'Select the therapeutic natural aromatic profile to accompany your ritual.',
    options: [
      {
        id: 'sacred-resins',
        title: 'Sacred Resins & Ancient Loam',
        scientificTerm: 'Heavy Terpenoid Sesquiterpenes',
        description: 'Dhofar frankincense, dark myrrh, dry cedarwood and sun-cured hay.',
        phytochemicals: ['Incensole Acetate', 'Elemol', 'Alpha-Copaene']
      },
      {
        id: 'alpine-herbal',
        title: 'Alpine Flora & Crushed Immortelle',
        scientificTerm: 'Aromatic Herbaceous Monoterpenes',
        description: 'Mountain wild herbs, dried golden immortelle, bitter sage, and cold river quartz.',
        phytochemicals: ['Neryl Acetate', 'Camphor Isolate', 'Thymol Isomer']
      },
      {
        id: 'dewy-floral',
        title: 'Dawn Rose Dew & Green Wood',
        scientificTerm: 'Floral Phenylethanols & Linalool Esters',
        description: 'Fresh copper-distilled petals, bruised violet leaf, and crisp morning dampness.',
        phytochemicals: ['Citronellol', 'Geraniol Hydrosol', 'Violet Leaf Alpha-Ionone']
      },
      {
        id: 'unscented',
        title: 'Uncompromised Raw Extract (Zero Fragrance)',
        scientificTerm: 'Pure Phytochemical Intrinsic Aroma',
        description: 'Naturally neutral, carrying only the faint nutty nuance of raw cold-pressed seed oils.',
        phytochemicals: ['Zero Added Terpenes', 'Cold-Filtered Lipids Only']
      }
    ]
  }
];

export const EDITORIAL_ARTICLES = [
  {
    id: 'art-01',
    date: 'OCTOBER 2026',
    title: 'The Chronobiology of Alpine Immortelle: Solar Radiance and Cellular Resilience',
    excerpt: 'High above the treeline in the Swiss Valais, plants withstand extreme ultraviolet bombardment and sub-zero barometric shifts by synthesizing high-density flavonoids. An inquiry into the bio-preservation of italidiones.',
    author: 'Dr. Evelyn Vane-Chantelle, Chief Pharmacognocist',
    readTime: '6 MIN READ',
    image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'art-02',
    date: 'SEPTEMBER 2026',
    title: 'Against Mass Synthesis: Why Artisanal Small-Batch Distillation Protects Secondary Metabolites',
    excerpt: 'When botanical materials are processed in industrial hundred-ton steel tanks, the sheer heat and friction strip away delicate monoterpenes. In our copper alembics, temperature never exceeds gentle steam equilibrium.',
    author: 'Marc-Aurèle Thierry, Master Distiller',
    readTime: '4 MIN READ',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=900&q=80'
  }
];

export const COMPLIMENTARY_SAMPLES = [
  {
    id: 's-01',
    name: '5ml Cyclo-Botanical Infusion (Vial)',
    description: 'Cellular recovery concentrate in amber pipette dropper.'
  },
  {
    id: 's-02',
    name: '5ml Phyto-Luminescent Lipid (Vial)',
    description: 'Unrefined Anatolian black seed and sea buckthorn.'
  },
  {
    id: 's-03',
    name: '10ml Damask Rose Copper Distillate',
    description: 'Fresh artisanal hydrosol mist in sealed glass ampoule.'
  },
  {
    id: 's-04',
    name: '5g Nocturnal Resin Salve (Mini Jar)',
    description: 'Melt-in frankincense restorative balm sample.'
  }
];
