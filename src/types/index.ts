export type MedicalRole = 'pharmacist' | 'doctor' | 'nurse' | 'student' | 'specialist';

export type MedicalSpecialty =
  | 'all'
  | 'pharmacy'
  | 'cardiology'
  | 'pediatrics'
  | 'icu_emergency'
  | 'internal_medicine'
  | 'nursing'
  | 'oncology'
  | 'infectious_diseases';

export type InteractionSeverity = 'critical' | 'major' | 'moderate' | 'minor';

export interface DosageIndication {
  indication: string;
  indicationAr: string;
  adultDose: string;
  adultDoseAr: string;
  pediatricDose?: string;
  pediatricDoseAr?: string;
  maxDose?: string;
  duration?: string;
  route: string;
}

export interface Drug {
  id: string;
  genericName: string;
  genericNameAr: string;
  brandNames: string[];
  drugClass: string;
  drugClassAr: string;
  category: 'Rx' | 'OTC' | 'Controlled';
  route: string[];
  indications: DosageIndication[];
  renalAdjustment: {
    crclAbove50: string;
    crcl10to50: string;
    crclBelow10: string;
    hemodialysis: string;
  };
  hepaticAdjustment: string;
  contraindications: string[];
  blackBoxWarning?: string;
  blackBoxWarningAr?: string;
  mechanismOfAction: string;
  mechanismOfActionAr: string;
  halfLife: string;
  monitoringParameters: string[];
  pregnancyCategory: 'A' | 'B' | 'C' | 'D' | 'X' | 'Compatible' | 'Contraindicated' | 'Use with Caution';
  lactationSafety: 'Safe' | 'Use with Caution' | 'Contraindicated' | 'Limited Data';
  foodInteractions: string[];
  adverseEffects?: string[];
  adverseEffectsAr?: string[];
  warnings?: string[];
  warningsAr?: string[];
  pearls: string[];
  isFeaturedToday: boolean;
  dateFeatured: string;
  targetSpecialties: MedicalSpecialty[];
  keyHighlights: string[];
}

export interface DrugInteraction {
  id: string;
  drug1Id: string;
  drug1Name: string;
  drug2Id: string;
  drug2Name: string;
  severity: InteractionSeverity;
  title: string;
  titleAr: string;
  mechanism: string;
  mechanismAr: string;
  clinicalEffect: string;
  clinicalEffectAr: string;
  management: string;
  managementAr: string;
  evidenceLevel: 'Established' | 'Probable' | 'Suspected' | 'Theoretical';
}

export interface SpecialtyAlert {
  id: string;
  title: string;
  titleAr: string;
  specialty: MedicalSpecialty;
  priority: 'urgent' | 'high' | 'normal';
  timestamp: string;
  dateStr: string;
  category: 'recall' | 'black_box' | 'new_approval' | 'guideline' | 'shortage' | 'interaction_alert';
  source: string;
  summaryAr: string;
  actionItemAr: string;
  detailedTextAr: string;
  readTime: string;
}

export interface ClinicalCase {
  id: string;
  title: string;
  specialty: MedicalSpecialty;
  patientProfile: {
    age: number;
    gender: 'M' | 'F';
    chiefComplaint: string;
    vitals: string;
    relevantLabs: string;
    currentMeds: string[];
  };
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
  clinicalPearl: string;
}

export interface UserSubscription {
  status: 'trial' | 'active' | 'expired' | 'canceled';
  planPriceUSD: number; // 1.00 USD
  trialStartDate: string;
  trialEndsDate: string;
  nextBillingDate: string;
  email: string;
  emailUpdatesEnabled: boolean;
  frequency: 'daily' | 'weekly';
  selectedSpecialty: MedicalSpecialty;
  role: MedicalRole;
  fullName: string;
  savedDrugs: string[];
  lastEmailSentDate?: string;
}
