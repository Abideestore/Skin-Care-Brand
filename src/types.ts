export interface BotanicalAccord {
  label: string;
  percentage: number;
}

export interface Formulation {
  id: string;
  sku: string;
  batchNumber: string;
  name: string;
  scientificExtract: string;
  collection: 'Cellular Phyto-Elixirs' | 'Rare Resins & Balms' | 'Cold-Pressed Lipids' | 'Fermented Floral Waters' | 'Aromatic Essences';
  subtitle: string;
  volume: string;
  price: number;
  image: string;
  secondaryImage?: string;
  origin: string;
  altitude: string;
  harvestDate: string;
  description: string;
  tactileRitual: string;
  sensoryNotes: {
    top: string;
    heart: string;
    base: string;
  };
  accords: BotanicalAccord[];
  phytochemicalFocus: string[];
  inci: string[];
  inStock: boolean;
  batchRemaining: number;
  totalBatchSize: number;
}

export interface BotanicalMonograph {
  id: string;
  commonName: string;
  scientificBinomial: string;
  family: string;
  originRegion: string;
  harvestElevation: string;
  extractionTechnique: string;
  primaryActiveConstituents: string[];
  clinicalEfficacy: string;
  sensoryProfile: string;
  image: string;
  associatedFormulationIds: string[];
}

export interface CartItem {
  formulation: Formulation;
  quantity: number;
  isBespoke?: boolean;
  bespokeDetails?: {
    clientName: string;
    prescriptionCode: string;
    targetAccord: string;
  };
}

export interface BespokeQuestion {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  options: {
    id: string;
    title: string;
    scientificTerm: string;
    description: string;
    phytochemicals: string[];
  }[];
}

export interface CertificateData {
  certificateId: string;
  batchNumber: string;
  clientName: string;
  date: string;
  formulationNames: string[];
  totalVolume: string;
  purityIndex: string;
  leadBotanist: string;
  signatureCoordinates: string;
}
