// Translation dictionary for Arabic / English bilingual support across pharma Oasis

export type Language = 'ar' | 'en';

export interface Translations {
  appName: string;
  appSubtitle: string;
  companyName: string;
  website: string;
  supportTitle: string;
  supportOfficer: string;
  supportPhone: string;
  rightsReserved: string;
  allSystemsOperational: string;
  
  // Navigation
  navDailyDrug: string;
  navInteractions: string;
  navDosageCalc: string;
  navAlerts: string;
  navDirectory: string;
  navDailyCase: string;
  navNewsletter: string;
  specialtyLabel: string;
  allSpecialties: string;
  
  // Header & Subscription
  trialBadge: string;
  subscribedBadge: string;
  daysRemaining: string;
  customizeContent: string;
  switchLang: string;
  installApp: string;
  apkDownloadModalTitle: string;
  standaloneDesc: string;

  // Daily Drug
  drugOfTheDay: string;
  germanPrecisionBadge: string;
  brandNames: string;
  routeOfAdmin: string;
  checkInteractionsBtn: string;
  calculateDoseBtn: string;
  copySummaryBtn: string;
  copiedBtn: string;
  saveBtn: string;
  savedBtn: string;
  boxedWarningTitle: string;
  tabDosing: string;
  tabSideEffects: string;
  tabRenal: string;
  tabSafety: string;
  tabPearls: string;
  offlineReadyBadge: string;
  adultDose: string;
  pediatricDose: string;
  mechanismTitle: string;
  crclAbove50: string;
  crcl10to50: string;
  crclBelow10: string;
  hemodialysis: string;
  hepaticImpairment: string;
  pregnancySafety: string;
  lactationSafety: string;
  contraindications: string;
  foodInstructions: string;
  monitoringParameters: string;
  clinicalPearlsTitle: string;

  // Interaction Checker
  interactionCheckerTitle: string;
  interactionCheckerSubtitle: string;
  selectTwoDrugsPrompt: string;
  severityCritical: string;
  severityMajor: string;
  severityModerate: string;
  severityMinor: string;
  clinicalEffect: string;
  managementPlan: string;
  evidenceLevel: string;
  addDrug: string;
  clearSelection: string;
  noInteractionsFound: string;

  // Dosage Calculator
  doseCalcTitle: string;
  doseCalcSubtitle: string;
  calcCrclTitle: string;
  calcPediatricTitle: string;
  calcInfusionTitle: string;
  calcSteroidTitle: string;
  patientWeight: string;
  patientAge: string;
  patientSerumCr: string;
  genderMale: string;
  genderFemale: string;
  calculateBtn: string;
  resultTitle: string;

  // Clinical Alerts
  alertsTitle: string;
  alertsSubtitle: string;
  unreadCount: string;
  markAllRead: string;
  urgentAlert: string;
  actionRequired: string;

  // Directory
  searchPlaceholder: string;
  advancedFilters: string;
  resetFilters: string;
  activeFilters: string;
  noResultsFound: string;
  viewMonograph: string;

  // Daily Case Quiz
  quizTitle: string;
  quizSubtitle: string;
  patientProfile: string;
  submitAnswer: string;
  correctAnswer: string;
  incorrectAnswer: string;
  explanation: string;
  nextCase: string;

  // Newsletter & Pricing
  monthlyPlanTitle: string;
  firstMonthFree: string;
  dollarPerMonth: string;
  subscribeNow: string;
}

export const translations: Record<Language, Translations> = {
  ar: {
    appName: 'pharma Oasis',
    appSubtitle: 'واحة الدواء والمنصة السريرية المعتمدة',
    companyName: 'pharma Oasis Germans EG',
    website: 'www.pharmaoasisgermans.com',
    supportTitle: 'الدعم الفني والاستفسارات',
    supportOfficer: 'Dr. Alaa Elbadry',
    supportPhone: '00201552881999',
    rightsReserved: 'جميع الحقوق محفوظة لشركة pharma Oasis Germans EG',
    allSystemsOperational: 'جميع الأنظمة السريرية تعمل بكفاءة',
    
    // Navigation
    navDailyDrug: 'دواء اليوم',
    navInteractions: 'فاحص التفاعلات',
    navDosageCalc: 'حاسبة الجرعات',
    navAlerts: 'التنبيهات السريرية',
    navDirectory: 'البحث والدليل الدوائي',
    navDailyCase: 'حالة اليوم',
    navNewsletter: 'النشرة البريدية ($1)',
    specialtyLabel: 'التخصص:',
    allSpecialties: 'كافة التخصصات الطبية',

    // Header & Subscription
    trialBadge: 'تجربة مجانية',
    subscribedBadge: 'مشترك (1$)',
    daysRemaining: 'يوم متبقٍ',
    customizeContent: 'تخصيص المحتوى والتنبيهات:',
    switchLang: 'English',
    installApp: 'تثبيت كـ تطبيق (APK / Standalone)',
    apkDownloadModalTitle: 'تشغيل pharma Oasis كتطبيق جوال مستقل بدون متصفح',
    standaloneDesc: 'يعمل بكامل وظائفه وشاشته كاملة على أجهزة أندرويد وiOS دون شريط المتصفح وبأعلى سرعة استجابة.',

    // Daily Drug
    drugOfTheDay: 'دواء اليوم السريري المعتمد (Drug of the Day)',
    germanPrecisionBadge: 'معايير الجودة الألمانية PharmaOasis Germans EG',
    brandNames: 'الأسماء التجارية الشائعة:',
    routeOfAdmin: 'طريقة الإعطاء المعتمدة:',
    checkInteractionsBtn: 'فحص التفاعلات الدوائية',
    calculateDoseBtn: 'حساب وتعديل الجرعة',
    copySummaryBtn: 'نسخ الملخص السريري',
    copiedBtn: 'تم النسخ بنجاح',
    saveBtn: 'حفظ بالمفضلة',
    savedBtn: 'محفوظ بالمفضلة',
    boxedWarningTitle: 'تحذير الصندوق الأسود الأشد خطورة (FDA Boxed Warning)',
    tabDosing: 'الجرعات والاستطبابات الموصى بها',
    tabSideEffects: 'الآثار الجانبية والتحذيرات',
    tabRenal: 'التعديلات الكلوية والكبدية',
    tabSafety: 'السلامة، الحمل، وموانع الاستعمال',
    tabPearls: 'نصائح إكلينيكية ذهبية (Pearls)',
    offlineReadyBadge: 'قاعدة بيانات مدمجة 100% تعمل بدون إنترنت',
    adultDose: 'جرعة البالغين:',
    pediatricDose: 'جرعة الأطفال:',
    mechanismTitle: 'آلية العمل الدوائي المحددة:',
    crclAbove50: 'تصفية الكرياتينين CrCl > 50 mL/min:',
    crcl10to50: 'تصفية الكرياتينين CrCl 10-50 mL/min:',
    crclBelow10: 'تصفية الكرياتينين CrCl < 10 mL/min:',
    hemodialysis: 'الغسيل الكلوي (Hemodialysis):',
    hepaticImpairment: 'القصور الكبدي (Hepatic Impairment):',
    pregnancySafety: 'فئة السلامة أثناء الحمل (Pregnancy):',
    lactationSafety: 'فئة السلامة أثناء الرضاعة (Lactation):',
    contraindications: 'موانع الاستعمال المطلقة (Contraindications):',
    foodInstructions: 'تعليمات الطعام والتغذية:',
    monitoringParameters: 'مؤشرات وفحوصات المتابعة الدورية (Monitoring Parameters):',
    clinicalPearlsTitle: 'نصائح إكلينيكية عملية للصيادلة والأطباء والتمريض:',

    // Interaction Checker
    interactionCheckerTitle: 'فاحص التفاعلات الدوائية والتداخلات الحيوية المتقدم',
    interactionCheckerSubtitle: 'تحقق فوري من التفاعلات بين الأدوية، تداخلات الإنزيمات CYP450، ومخاطر استطالة QT وتأثيرات مضادات التخثر.',
    selectTwoDrugsPrompt: 'اختر دواءين أو أكثر لفحص التفاعلات المحتملة وشدتها وتوصيات الإدارة السريرية.',
    severityCritical: 'حرج جداً (مضاد استطباب مطلق)',
    severityMajor: 'رئيسي (يتطلب تعديلاً أو مراقبة لصيقة)',
    severityModerate: 'متوسط (احتمالية تداخل تتطلب حذراً)',
    severityMinor: 'طفيف (تداخل محدود سريرياً)',
    clinicalEffect: 'التأثير السريري المتوقع:',
    managementPlan: 'خطة الإدارة السريرية والتوصية:',
    evidenceLevel: 'مستوى الدليل العلمي:',
    addDrug: 'إضافة دواء للمقارنة',
    clearSelection: 'مسح الأدوية المحددة',
    noInteractionsFound: 'لا توجد تفاعلات خطيرة معروفة مسجلة بين هذه الأدوية المحددة.',

    // Dosage Calculator
    doseCalcTitle: 'حاسبة الجرعات السريرية والمعادلات الطبية المعتمدة',
    doseCalcSubtitle: 'حساب دقيق لتصفية الكرياتينين (Cockcroft-Gault)، مساحة سطح الجسم (BSA)، تحويل الكورتيزون، ومعايرة المضادات الوريدية.',
    calcCrclTitle: 'تصفية الكرياتينين (Cockcroft-Gault CrCl)',
    calcPediatricTitle: 'جرعات الأطفال حسب الوزن والـ BSA',
    calcInfusionTitle: 'معدلات التنقيط والتسريب الوريدي (IV Infusion)',
    calcSteroidTitle: 'مكافئ الكورتيكوستيرويدات (Steroid Equivalence)',
    patientWeight: 'وزن المريض (kg):',
    patientAge: 'عمر المريض (سنوات):',
    patientSerumCr: 'الكرياتينين في المصل (mg/dL):',
    genderMale: 'ذكر (Male)',
    genderFemale: 'أنثى (Female)',
    calculateBtn: 'احسب النتيجة بدقة',
    resultTitle: 'النتيجة السريرية والتوصيات:',

    // Clinical Alerts
    alertsTitle: 'شريط التنبيهات السريرية وتحذيرات اليقظة الدوائية (Pharmacovigilance)',
    alertsSubtitle: 'موجز فوري بسحب الأدوية، تحديثات الصندوق الأسود، إرشادات الممارسة الحديثة ونقص الإمداد الدوائي.',
    unreadCount: 'تنبيه جديد',
    markAllRead: 'تحديد الكل كمقروء',
    urgentAlert: 'تنبيه عاجل ذو أولوية قصوى',
    actionRequired: 'الإجراء السريري الموصى به فوراً:',

    // Directory
    searchPlaceholder: 'ابحث بالاسم العلمي، التجاري، الاستخدام السريري، أو اسم دواء متفاعل...',
    advancedFilters: 'خيارات التصفية المتقدمة',
    resetFilters: 'إعادة ضبط الفلاتر',
    activeFilters: 'الفلاتر النشطة:',
    noResultsFound: 'لم يتم العثور على أدوية مطابقة لمعايير البحث الحالية.',
    viewMonograph: 'عرض البطاقة السريرية الكاملة',

    // Daily Case Quiz
    quizTitle: 'تحدي الحالة السريرية اليومية وتطوير المهارات الصيدلانية',
    quizSubtitle: 'حالات طبية واقعية تفاعلية تختبر قراراتك السريرية في اختيار الجرعات وتجنب التفاعلات الدوائية.',
    patientProfile: 'ملف المريض والبيانات الحيوية المخبرية:',
    submitAnswer: 'تأكيد الإجابة السريرية',
    correctAnswer: 'إجابة صحيحة وممتازة! 🎉',
    incorrectAnswer: 'إجابة غير دقيقة! راجع التعليل السريري ⚠️',
    explanation: 'التعليل الطبي والإكلينيكي:',
    nextCase: 'الانتقال للحالة التالية',

    // Newsletter & Pricing
    monthlyPlanTitle: 'النشرة السريرية اليومية والاشتراك المهني المعتمد',
    firstMonthFree: 'الشهر الأول مجاناً 100% بالكامل',
    dollarPerMonth: 'ثم 1.00 دولار أمريكي فقط شهرياً',
    subscribeNow: 'تأكيد الاشتراك وتفعيل الإشعارات'
  },
  en: {
    appName: 'pharma Oasis',
    appSubtitle: 'Clinical Oasis & Medical Reference Platform',
    companyName: 'pharma Oasis Germans EG',
    website: 'www.pharmaoasisgermans.com',
    supportTitle: 'Technical Support & Inquiries',
    supportOfficer: 'Dr. Alaa Elbadry',
    supportPhone: '00201552881999',
    rightsReserved: 'All rights reserved by pharma Oasis Germans EG',
    allSystemsOperational: 'All Clinical Systems Operational',
    
    // Navigation
    navDailyDrug: 'Drug of the Day',
    navInteractions: 'Interaction Checker',
    navDosageCalc: 'Dosage Calculator',
    navAlerts: 'Clinical Alerts',
    navDirectory: 'Search & Directory',
    navDailyCase: 'Daily Case Quiz',
    navNewsletter: 'Clinical Digest ($1)',
    specialtyLabel: 'Specialty:',
    allSpecialties: 'All Medical Specialties',

    // Header & Subscription
    trialBadge: 'Free Trial',
    subscribedBadge: 'Subscribed ($1)',
    daysRemaining: 'days left',
    customizeContent: 'Customize Clinical Content:',
    switchLang: 'العربية',
    installApp: 'Install App (APK / Standalone)',
    apkDownloadModalTitle: 'Run pharma Oasis as a Standalone Android App (APK / PWA)',
    standaloneDesc: 'Operates independently as a native full-screen app on Android & iOS devices without browser bars, featuring instant offline cache and high responsiveness.',

    // Daily Drug
    drugOfTheDay: 'Featured Clinical Drug of the Day',
    germanPrecisionBadge: 'German Quality Standards - PharmaOasis Germans EG',
    brandNames: 'Common Trade / Brand Names:',
    routeOfAdmin: 'Approved Route of Administration:',
    checkInteractionsBtn: 'Check Drug Interactions',
    calculateDoseBtn: 'Calculate & Adjust Dose',
    copySummaryBtn: 'Copy Clinical Summary',
    copiedBtn: 'Copied Successfully',
    saveBtn: 'Bookmark Drug',
    savedBtn: 'Bookmarked',
    boxedWarningTitle: 'FDA Boxed Warning (Highest Severity)',
    tabDosing: 'Dosage & Indications',
    tabSideEffects: 'Side Effects & Warnings',
    tabRenal: 'Renal & Hepatic Adjustments',
    tabSafety: 'Safety, Pregnancy & Contraindications',
    tabPearls: 'Clinical Pearls & Key Insights',
    offlineReadyBadge: '100% Offline Standalone Database Ready',
    adultDose: 'Adult Dosage:',
    pediatricDose: 'Pediatric Dosage:',
    mechanismTitle: 'Mechanism of Action:',
    crclAbove50: 'CrCl > 50 mL/min:',
    crcl10to50: 'CrCl 10-50 mL/min:',
    crclBelow10: 'CrCl < 10 mL/min:',
    hemodialysis: 'Hemodialysis:',
    hepaticImpairment: 'Hepatic Impairment:',
    pregnancySafety: 'Pregnancy Safety Category:',
    lactationSafety: 'Lactation Safety Category:',
    contraindications: 'Absolute Contraindications:',
    foodInstructions: 'Food & Nutrition Guidelines:',
    monitoringParameters: 'Monitoring Parameters & Labs:',
    clinicalPearlsTitle: 'Practical Clinical Pearls for Pharmacists & Physicians:',

    // Interaction Checker
    interactionCheckerTitle: 'Advanced Drug-Drug & Bio-Interaction Checker',
    interactionCheckerSubtitle: 'Real-time safety analysis for CYP450 enzymes, QT prolongation risks, and synergistic bleeding hazards.',
    selectTwoDrugsPrompt: 'Select 2 or more medications to analyze potential interactions, severity, and clinical management recommendations.',
    severityCritical: 'Critical (Absolute Contraindication)',
    severityMajor: 'Major (Requires Dose Adjustment / Strict Monitoring)',
    severityModerate: 'Moderate (Monitor for Clinical Relevance)',
    severityMinor: 'Minor (Limited Clinical Significance)',
    clinicalEffect: 'Anticipated Clinical Effect:',
    managementPlan: 'Clinical Management & Action Plan:',
    evidenceLevel: 'Level of Scientific Evidence:',
    addDrug: 'Add Drug to Compare',
    clearSelection: 'Clear Selected Drugs',
    noInteractionsFound: 'No severe or major interactions detected between selected agents.',

    // Dosage Calculator
    doseCalcTitle: 'Clinical Dosage Calculator & Medical Equations',
    doseCalcSubtitle: 'Accurate Cockcroft-Gault CrCl calculations, Body Surface Area (BSA), Corticosteroid equivalence, and IV infusion rates.',
    calcCrclTitle: 'Creatinine Clearance (Cockcroft-Gault CrCl)',
    calcPediatricTitle: 'Pediatric Weight-Based & BSA Dosing',
    calcInfusionTitle: 'IV Infusion & Drip Rate Calculations',
    calcSteroidTitle: 'Corticosteroid Equivalence Calculator',
    patientWeight: 'Patient Weight (kg):',
    patientAge: 'Patient Age (years):',
    patientSerumCr: 'Serum Creatinine (mg/dL):',
    genderMale: 'Male',
    genderFemale: 'Female',
    calculateBtn: 'Calculate Clinical Result',
    resultTitle: 'Clinical Result & Dose Recommendations:',

    // Clinical Alerts
    alertsTitle: 'Clinical Alerts Feed & Pharmacovigilance Updates',
    alertsSubtitle: 'Instant safety alerts, Black Box updates, practice guideline revisions, and drug shortage bulletins.',
    unreadCount: 'New Alert(s)',
    markAllRead: 'Mark All as Read',
    urgentAlert: 'Urgent Priority Warning',
    actionRequired: 'Recommended Immediate Clinical Action:',

    // Directory
    searchPlaceholder: 'Search by generic name, brand name, clinical indication, or interacting drug...',
    advancedFilters: 'Advanced Filter Options',
    resetFilters: 'Reset Filters',
    activeFilters: 'Active Filters:',
    noResultsFound: 'No drugs matched your active search and filter criteria.',
    viewMonograph: 'View Full Clinical Monograph',

    // Daily Case Quiz
    quizTitle: 'Daily Clinical Case Quiz & Skill Development',
    quizSubtitle: 'Interactive clinical scenarios testing your judgment on dosing, drug choices, and interaction management.',
    patientProfile: 'Patient Profile & Clinical Labs:',
    submitAnswer: 'Submit Clinical Decision',
    correctAnswer: 'Correct Decision! Excellent Clinical Logic 🎉',
    incorrectAnswer: 'Suboptimal Decision! Review Clinical Rationales ⚠️',
    explanation: 'Clinical Rationale & Evidence:',
    nextCase: 'Load Next Clinical Scenario',

    // Newsletter & Pricing
    monthlyPlanTitle: 'Daily Clinical Digest & Professional Subscription',
    firstMonthFree: 'First Month 100% Free Trial',
    dollarPerMonth: 'Then Only $1.00 USD / month',
    subscribeNow: 'Confirm Subscription & Enable Updates'
  }
};
