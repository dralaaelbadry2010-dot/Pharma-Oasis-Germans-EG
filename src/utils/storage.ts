import { UserSubscription, MedicalSpecialty, MedicalRole } from '../types';

const STORAGE_KEY = 'pharmapulse_user_state_v1';

export const getDefaultSubscription = (): UserSubscription => {
  const now = new Date();
  const trialEnd = new Date();
  trialEnd.setDate(now.getDate() + 30); // 30 days free trial (First month free)
  
  const nextBilling = new Date(trialEnd);
  nextBilling.setDate(nextBilling.getDate() + 30);

  return {
    status: 'trial',
    planPriceUSD: 1.0,
    trialStartDate: now.toISOString(),
    trialEndsDate: trialEnd.toISOString(),
    nextBillingDate: nextBilling.toISOString(),
    email: 'dralaaelbadry2010@gmail.com',
    emailUpdatesEnabled: true,
    frequency: 'daily',
    selectedSpecialty: 'all',
    role: 'pharmacist',
    fullName: 'د. علاء البدري',
    savedDrugs: ['semaglutide', 'sacubitril_valsartan'],
    lastEmailSentDate: undefined
  };
};

export const loadUserState = (): UserSubscription => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to load user state from localStorage', e);
  }
  const defaultState = getDefaultSubscription();
  saveUserState(defaultState);
  return defaultState;
};

export const saveUserState = (state: UserSubscription): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save user state to localStorage', e);
  }
};

export const calculateTrialDaysRemaining = (trialEndsDate: string): number => {
  const end = new Date(trialEndsDate).getTime();
  const now = new Date().getTime();
  const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
};

export const SPECIALTY_LABELS: Record<MedicalSpecialty, { ar: string; en: string; icon: string }> = {
  all: { ar: 'كافة التخصصات الطبية', en: 'All Specialties', icon: 'stethoscope' },
  pharmacy: { ar: 'الصيدلة السريرية والعامة', en: 'Clinical Pharmacy', icon: 'pill' },
  cardiology: { ar: 'أمراض القلب والأوعية', en: 'Cardiology', icon: 'heart-pulse' },
  pediatrics: { ar: 'طب الأطفال وحديثي الولادة', en: 'Pediatrics', icon: 'baby' },
  icu_emergency: { ar: 'العناية المركزة والطوارئ', en: 'ICU & Emergency', icon: 'activity' },
  internal_medicine: { ar: 'الباطنة العامة والغدد الصماء', en: 'Internal Medicine', icon: 'clipboard-list' },
  nursing: { ar: 'التمريض السريري والرعاية', en: 'Clinical Nursing', icon: 'shield-check' },
  oncology: { ar: 'الأورام وعلم الأدوية السرطانية', en: 'Oncology', icon: 'dna' },
  infectious_diseases: { ar: 'الأمراض المعدية والمضادات', en: 'Infectious Diseases', icon: 'shield-alert' }
};

export const ROLE_LABELS: Record<MedicalRole, { ar: string; en: string }> = {
  pharmacist: { ar: 'صيدلي / صيدلاني سريري', en: 'Pharmacist' },
  doctor: { ar: 'طبيب / استشاري / أخصائي', en: 'Physician / Doctor' },
  nurse: { ar: 'أخصائي تمريض / رعاية حرجة', en: 'Registered Nurse' },
  student: { ar: 'طالب طب / صيدلة / تمريض', en: 'Healthcare Student' },
  specialist: { ar: 'أخصائي رعاية صحية', en: 'Healthcare Specialist' }
};
