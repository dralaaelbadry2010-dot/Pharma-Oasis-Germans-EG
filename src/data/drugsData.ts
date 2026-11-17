import { Drug, DrugInteraction } from '../types';

export const INITIAL_DRUGS: Drug[] = [
  {
    id: 'semaglutide',
    genericName: 'Semaglutide',
    genericNameAr: 'سيماجلوتايد',
    brandNames: ['Ozempic', 'Wegovy', 'Rybelsus', 'أوزمبيك', 'ويجوفي', 'ريبيلسوس'],
    drugClass: 'GLP-1 Receptor Agonist',
    drugClassAr: 'محفز مستقبلات GLP-1',
    category: 'Rx',
    route: ['Subcutaneous (أسبوعياً)', 'Oral (يومياً)'],
    isFeaturedToday: true,
    dateFeatured: '2026-08-24',
    targetSpecialties: ['internal_medicine', 'cardiology', 'pharmacy', 'nursing'],
    keyHighlights: [
      'حماية قلبية كلوية مثبتة وخفض السكر التراكمي HbA1c',
      'تأخير إفراغ المعدة (يتطلب الصيام الحذر قبل التخدير والعمليات)',
      'بدء الجرعة تدريجياً لتجنب الغثيان والاضطرابات الهضمية'
    ],
    indications: [
      {
        indication: 'Type 2 Diabetes Mellitus',
        indicationAr: 'السكري من النوع الثاني',
        adultDose: '0.25 mg SC once weekly for 4 weeks, then increase to 0.5 mg once weekly. Max: 2 mg weekly.',
        adultDoseAr: '0.25 مجم تحت الجلد أسبوعياً لمدة 4 أسابيع، ثم ترفع إلى 0.5 مجم أسبوعياً. الحد الأقصى: 2 مجم أسبوعياً.',
        route: 'Subcutaneous'
      },
      {
        indication: 'Chronic Weight Management (Wegovy)',
        indicationAr: 'إدارة الوزن الزائد والسمنة',
        adultDose: 'Initiate at 0.25 mg SC weekly; escalate monthly (0.25 -> 0.5 -> 1.0 -> 1.7 -> 2.4 mg) maintenance.',
        adultDoseAr: 'البدء بـ 0.25 مجم أسبوعياً ثم التدرج شهرياً (0.25 ← 0.5 ← 1.0 ← 1.7 ← 2.4 مجم) كجرعة مداومة.',
        route: 'Subcutaneous'
      },
      {
        indication: 'Cardiovascular Risk Reduction',
        indicationAr: 'تقليل مخاطر الحوادث القلبية الوعائية الكبرى',
        adultDose: '0.5 mg to 1.0 mg SC once weekly.',
        adultDoseAr: '0.5 إلى 1.0 مجم حقن تحت الجلد مرة واحدة أسبوعياً.',
        route: 'Subcutaneous'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة في القصور الكلوي الخفيف أو المتوسط.',
      crcl10to50: 'يستخدم بحذر؛ مراقبة وظائف الكلى عند وجود جفاف شديد أو قيء مستمر.',
      crclBelow10: 'بيانات محدودة، يوصى بالمراقبة السريرية الحثيثة لسوائل الجسم.',
      hemodialysis: 'لا يلزم تعديل الجرعة، لكن يراقب تحمّل الجهاز الهضمي والترطيب.'
    },
    hepaticAdjustment: 'لا يلزم تعديل الجرعة في القصور الكبدي، لكن يوصى بالمراقبة العامة.',
    contraindications: [
      'تاريخ شخصي أو عائلي لسرطان الغدة الدرقية النخاعي (MTC)',
      'متلازمة الأورام الغدية الصماوية المتعددة النوع 2 (MEN 2)',
      'فرط الحساسية المعروف لسيماجلوتايد أو مكوناته',
      'تاريخ سابق للإصابة بالتهاب البنكرياس الحاد الناجم عن محفزات GLP-1'
    ],
    blackBoxWarning: 'Risk of Thyroid C-Cell Tumors (Medullary Thyroid Carcinoma in rodent studies).',
    blackBoxWarningAr: 'تحذير الصندوق الأسود: خطر أورام الخلايا C الدرقية (سرطان الغدة الدرقية النخاعي) الملاحظ في الدراسات الحيوانية.',
    mechanismOfAction: 'Selective GLP-1 receptor agonist that increases insulin secretion in a glucose-dependent manner, suppresses glucagon secretion, and slows gastric emptying.',
    mechanismOfActionAr: 'محفز انتقائي لمستقبلات GLP-1 يزيد من إفراز الإنسولين المعتمد على مستوى الجلوكوز، ويثبط إفراز الجلوكاجون، ويبطئ إفراغ المعدة مما يعزز الشبع.',
    halfLife: '~ 1 week (~ 168 hours)',
    monitoringParameters: [
      'مستوى السكر التراكمي (HbA1c) ومراقبة سكر الدم',
      'أعراض التهاب البنكرياس الحاد (ألم بطني حاد ينتشر إلى الظهر)',
      'وظائف الكلى (Creatinine, BUN) في حال حدوث قيء أو إسهال مستمر',
      'فحص الغدة الدرقية لأي كتل أو بحة بالصوت غير مبررة'
    ],
    pregnancyCategory: 'Contraindicated',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'الأقراص الفموية (Rybelsus): يجب تناولها صباحاً على معدة فارغة تماماً مع رشفة ماء لا تزيد عن 120 مل والانتظار 30 دقيقة قبل أي طعام أو دواء آخر.',
      'تجنب الوجبات الدسمة جداً لتقليل حدة الغثيان والشعور بالامتلاء.'
    ],
    pearls: [
      'تنبيه تخديري وتمريضي هام: أحدث توصيات جمعية التخدير (ASA) تنصح بإيقاف الحقن الأسبوعي قبل أسبوع من العمليات الجراحية المجدولة لتفادي ركود محتويات المعدة وخطر الاستنشاق الرئوي (Aspiration).',
      'إذا نسي المريض الجرعة الأسبوعية، يمكن أخذها خلال 5 أيام من الموعد الأصلي، وإذا تجاوزت 5 أيام يتخطى الجرعة ويستمر في الموعد القادم.',
      'لا يسبب هبوط السكر (Hypoglycemia) بمفرده، لكن ترتفع الخطورة إذا تزامن مع السلفونيل يوريا أو الإنسولين.'
    ]
  },
  {
    id: 'sacubitril_valsartan',
    genericName: 'Sacubitril / Valsartan',
    genericNameAr: 'ساكوبيتريل / فالسارتان',
    brandNames: ['Entresto', 'إنترستو'],
    drugClass: 'Angiotensin Receptor-Neprilysin Inhibitor (ARNI)',
    drugClassAr: 'مثبط النبريلايسين ومستقبلات الأنجيوتنسين (ARNI)',
    category: 'Rx',
    route: ['Oral Tablets (مرتين يومياً)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-23',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy', 'icu_emergency'],
    keyHighlights: [
      'حجر زاوية في علاج قصور القلب ذي الكسر القذفي المنخفض (HFrEF)',
      'فترة غسيل إجبارية 36 ساعة (Washout Period) بعد التوقف عن مثبطات ACEi',
      'مراقبة ضغط الدم، البوتاسيوم المصل، ووظائف الكلى بشكل دوري'
    ],
    indications: [
      {
        indication: 'Heart Failure with Reduced Ejection Fraction (HFrEF - NYHA II-IV)',
        indicationAr: 'قصور القلب مع انخفاض الكسر القذفي (HFrEF)',
        adultDose: 'Start: 49/51 mg BID. Target: Double every 2-4 weeks to 97/103 mg BID as tolerated.',
        adultDoseAr: 'البدء بـ 49/51 مجم مرتين يومياً. الجرعة المستهدفة: مضاعفة الجرعة كل 2-4 أسابيع للوصول إلى 97/103 مجم مرتين يومياً حسب التحمل.',
        route: 'Oral'
      },
      {
        indication: 'Pediatric Heart Failure (>= 1 year old)',
        indicationAr: 'قصور القلب لدى الأطفال (عمر سنة فما فوق)',
        adultDose: 'Weight-based dosing (tablets or oral suspension) twice daily.',
        adultDoseAr: 'جرعة محسوبة حسب الوزن (أقراص أو معلق فموي) مرتين يومياً.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يلزم تعديل الجرعة الابتدائية (49/51 مجم مرتين يومياً).',
      crcl10to50: 'إذا كان eGFR < 30 mL/min: البدء بجرعة مخفضة 24/26 مجم مرتين يومياً.',
      crclBelow10: 'البدء بجرعة 24/26 مجم مرتين يومياً مع مراقبة البوتاسيوم واليوريا.',
      hemodialysis: 'لا توجد بيانات كافية؛ يستخدم بحذر شديد مع مراقبة الضغط والشوارد.'
    },
    hepaticAdjustment: 'القصور الكبدي المعتدل (Child-Pugh B): البدء بـ 24/26 مجم مرتين يومياً. ممنوع في القصور الكبدي الشديد (Child-Pugh C).',
    contraindications: [
      'تزامن الاستخدام مع مثبطات الإنزيم المحول للأنجيوتنسين (ACE inhibitors) أو خلال 36 ساعة من آخر جرعة',
      'تاريخ وذمة وعائية عصبية (Angioedema) مرتبطة بمثبطات ACE أو ARBs',
      'التزامن مع أليسكيرين (Aliskiren) في مرضى السكري',
      'الحمل والإرضاع (سمية جنينية خطيرة)'
    ],
    blackBoxWarning: 'Fetal Toxicity: When pregnancy is detected, discontinue as soon as possible due to oligohydramnios and fetal injury.',
    blackBoxWarningAr: 'تحذير الصندوق الأسود: سمية جنينية - أوقف الدواء فور اكتشاف الحمل لتجنب تشوهات الجنين والقصور الكلوي الجنيني.',
    mechanismOfAction: 'Sacubitril inhibits neprilysin, increasing natriuretic peptides. Valsartan blocks AT1 receptors, inhibiting vasoconstriction and aldosterone.',
    mechanismOfActionAr: 'يثبط ساكوبيتريل إنزيم النبريلايسين مما يرفع الببتيدات المدرة للصوديوم، بينما يحجب فالسارتان مستقبلات AT1 لمنع تضيق الأوعية وإفراز الألدوستيرون.',
    halfLife: 'Sacubitril metabolite: ~11.5 hours, Valsartan: ~9.9 hours',
    monitoringParameters: [
      'ضغط الدم الموضعي (مراقبة هبوط الضغط الانتصابي)',
      'البوتاسيوم في الدم (مراقبة فرط بوتاسيوم الدم)',
      'الكرياتينين و eGFR بعد البدء وزيادة الجرعة',
      'ملاحظة حدوث وذمة وعائية بالوجه أو الحلق'
    ],
    pregnancyCategory: 'Contraindicated',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'تجنب بدائل الملح المحتوية على كلوريد البوتاسيوم.',
      'يمكن تناوله مع أو بدون الطعام.'
    ],
    pearls: [
      'قاعدة الـ 36 ساعة الذهبية: لا تبدأ إنترستو أبداً إلا بعد مرور 36 ساعة كاملة من إيقاف أي ACE inhibitor مثل راميبريل أو كابتوبريل لتفادي الوذمة الوعائية القاتلة.',
      'فحص BNP يرتفع صناعياً بسبب تثبيط النبريلايسين؛ لذلك يجب الاعتماد على NT-proBNP لتقييم تحسن قصور القلب بدقة.'
    ]
  },
  {
    id: 'empagliflozin',
    genericName: 'Empagliflozin',
    genericNameAr: 'إمباجليفلوزين',
    brandNames: ['Jardiance', 'جارديانس'],
    drugClass: 'SGLT2 Inhibitor',
    drugClassAr: 'مثبط الناقل المشترك صوديوم-جلوكوز 2 (SGLT2i)',
    category: 'Rx',
    route: ['Oral (صباحاً)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-22',
    targetSpecialties: ['internal_medicine', 'cardiology', 'pharmacy', 'nursing'],
    keyHighlights: [
      'حماية ثلاثية: خفض السكر، حماية عضلة القلب، وإبطاء تدهور القصور الكلوي',
      'زيادة إدرار البول الطفيف والمساعدة في إنقاص الضغط والوزن',
      'خطر الحماض الكيتوني السكري سوي السكر (Euglycemic DKA) عند الجفاف أو الجراحة'
    ],
    indications: [
      {
        indication: 'Type 2 Diabetes Mellitus',
        indicationAr: 'السكري النوع الثاني',
        adultDose: '10 mg once daily in the morning; may increase to 25 mg once daily.',
        adultDoseAr: '10 مجم مرة واحدة صباحاً، يمكن زيادتها إلى 25 مجم يومياً.',
        route: 'Oral'
      },
      {
        indication: 'Heart Failure (HFrEF & HFpEF)',
        indicationAr: 'قصور القلب (بجميع أنواعه مع نقص أو حفظ الكسر القذفي)',
        adultDose: '10 mg orally once daily.',
        adultDoseAr: '10 مجم فموياً مرة واحدة يومياً.',
        route: 'Oral'
      },
      {
        indication: 'Chronic Kidney Disease (CKD)',
        indicationAr: 'مرض الكلى المزمن لإبطاء التدهور الكلوي',
        adultDose: '10 mg orally once daily for eGFR >= 20 mL/min/1.73m2.',
        adultDoseAr: '10 مجم فموياً مرة واحدة يومياً للمرضى ذوي eGFR أعلى من 20 مل/دقيقة.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: '10 مجم إلى 25 مجم يومياً بدون تعديل.',
      crcl10to50: 'إذا كان eGFR 20 إلى 45: يستمر بجرعة 10 مجم يومياً لحماية القلب والكلى (فاعلية خفض السكر تنخفض).',
      crclBelow10: 'لا يُنصح بالبدء إذا كان eGFR < 20 mL/min، لكن يمكن استمراره حتى الدخول في الغسيل الكلوي.',
      hemodialysis: 'مضاد استطباب في الغسيل الكلوي الدائم.'
    },
    hepaticAdjustment: 'لا يتطلب تعديل الجرعة في القصور الكبدي الخفيف أو المتوسط.',
    contraindications: [
      'غسيل الكلى',
      'تاريخ حساسية مفرطة لإمباجليفلوزين',
      'مرضى السكري النوع الأول دون بروتوكول رقابة كيتونات دقيق'
    ],
    mechanismOfAction: 'Inhibits SGLT2 in the proximal renal tubules, reducing glucose and sodium reabsorption, promoting glycosuria and natriuresis.',
    mechanismOfActionAr: 'يثبط الناقل SGLT2 في الأنابيب الكلوية القريبة مما يمنع إعادة امتصاص السكر والصوديوم ويزيد طرحهما في البول، مما يخفف الحمل على القلب والكلى.',
    halfLife: '~ 12.4 hours',
    monitoringParameters: [
      'علامات الحماض الكيتوني (الغثيان والقيء والوهن حتى لو كان السكر < 200)',
      'العدوى البولية والتناسلية الفطرية (مراقبة النظافة الشخصية)',
      'ضغط الدم والترطيب (خطر انخفاض الضغط الحجمي مع المدرات)'
    ],
    pregnancyCategory: 'Contraindicated',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'يؤخذ مع أو بدون طعام، يفضل صباحاً.',
      'شرب كميات وفيرة من الماء على مدار اليوم لتفادي الجفاف.'
    ],
    pearls: [
      'تنبيه إيقاف قبل العمليات: يجب إيقاف الدواء قبل 3 إلى 4 أيام على الأقل من العمليات الجراحية الكبرى لتجنب حدوث الحماض الكيتوني سوي السكر (Euglycemic DKA).',
      'تثقيف المريض حول النظافة الموضعية الجيدة يقلل خطر الفطريات التناسلية بنسبة تفوق 80%.'
    ]
  },
  {
    id: 'paxlovid',
    genericName: 'Nirmatrelvir / Ritonavir',
    genericNameAr: 'نيرماتريلفير / ريتونافير',
    brandNames: ['Paxlovid', 'باكسلوفيد'],
    drugClass: 'Antiviral / SARS-CoV-2 Protease Inhibitor + CYP3A4 Booster',
    drugClassAr: 'مضاد فيروسات مثبط للبروتياز + معزز حيوي مثبط CYP3A4',
    category: 'Rx',
    route: ['Oral Tablets (صباحاً ومساءً لمدة 5 أيام)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-21',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine', 'icu_emergency'],
    keyHighlights: [
      'يجب البدء خلال 5 أيام من ظهور الأعراض لمرضى الخطورة العالية',
      'تفاعلات دوائية هائلة وحرجة بسبب التثبيط القوي لإنزيم كبدي CYP3A4',
      'حزمة كلوية خاصة لـ eGFR 30-60 مل/دقيقة (تخفيض جرعة نيرماتريلفير)'
    ],
    indications: [
      {
        indication: 'Mild-to-moderate COVID-19 in high-risk patients (>= 12 years)',
        indicationAr: 'علاج كورونا الخفيف إلى المتوسط لمرضى عوامل الخطورة',
        adultDose: '300 mg Nirmatrelvir (two 150 mg tabs) + 100 mg Ritonavir (one 100 mg tab) PO BID for 5 days.',
        adultDoseAr: '300 مجم نيرماتريلفير (قرصان 150 مجم) + 100 مجم ريتونافير (قرص 100 مجم) معاً فموياً مرتين يومياً لمدة 5 أيام.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'جرعة اعتيادية كاملة: قرصان نيرماتريلفير + قرص ريتونافير مرتين يومياً.',
      crcl10to50: 'eGFR 30 إلى 60: قرص واحد نيرماتريلفير (150 مجم) + قرص ريتونافير (100 مجم) مرتين يومياً لمدة 5 أيام.',
      crclBelow10: 'eGFR < 30 mL/min: غير موصى به ومضاد استطباب لعدم وجود جرعة آمنة معتمدة.',
      hemodialysis: 'مضاد استطباب.'
    },
    hepaticAdjustment: 'القصور الكبدي الخفيف/المتوسط: لا تعديل. القصور الكبدي الشديد (Child-Pugh C): مضاد استطباب تماماً.',
    contraindications: [
      'التزامن مع أدوية تعتمد بشدة على CYP3A في الاستقلاب (مثل: أميودارون، سيمفاستاتين، ريفامبيسين، كاربامازيبين، نبتة سانت جونز، ميدازولام فموي)',
      'القصور الكلوي أو الكبدي الشديد'
    ],
    blackBoxWarning: 'Significant, potentially life-threatening drug-drug interactions with CYP3A4 substrates.',
    blackBoxWarningAr: 'تحذير شديد: تفاعلات دوائية خطيرة تهدد الحياة مع الأدوية المستقلبة بـ CYP3A4.',
    mechanismOfAction: 'Nirmatrelvir inhibits SARS-CoV-2 main protease (Mpro/3CLpro); Ritonavir acts as a pharmacokinetic enhancer by strongly inhibiting CYP3A4 to boost Nirmatrelvir levels.',
    mechanismOfActionAr: 'يثبط نيرماتريلفير إنزيم البروتياز الرئيسي للفيروس، بينما يعمل ريتونافير كمعزز دوائي يثبط CYP3A4 لمنع تكسر نيرماتريلفير ورفع تركيزه العلاجي.',
    halfLife: 'Nirmatrelvir: ~6 hours, Ritonavir: ~6.1 hours',
    monitoringParameters: [
      'مراجعة شاملة لجميع الأدوية المزمنة والمكملات لمنع التفاعلات القاتلة',
      'وظائف الكلى قبل الصرف لتحديد نوع العبوة (عادية أم كلوية)',
      'الطعم المعدني المر في الفم (Dysgeusia - عرض جانبي شائع ومؤقت)'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يمكن تناوله مع أو بدون الطعام.',
      'يجب بلع الأقراص كاملة دون سحق أو مضغ.'
    ],
    pearls: [
      'تعديل الستاتين: عند بدء باكسلوفيد، يجب إيقاف سيمفاستاتين وأتورفاستاتين مؤقتاً خلال فترة العلاج و3 أيام بعدها لتفادي انحلال العضلات المخططة (Rhabdomyolysis).',
      'فاحص التفاعلات الدوائية إلزامي قبل كتابة وصرف هذه الوصفة.'
    ]
  },
  {
    id: 'apixaban',
    genericName: 'Apixaban',
    genericNameAr: 'أبيكسابان',
    brandNames: ['Eliquis', 'إليكويس'],
    drugClass: 'Direct Oral Anticoagulant (DOAC) / Factor Xa Inhibitor',
    drugClassAr: 'مضاد تخثر فموي مباشر / مثبط العامل العاشر المباشر',
    category: 'Rx',
    route: ['Oral (مرتين يومياً)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-20',
    targetSpecialties: ['cardiology', 'internal_medicine', 'icu_emergency', 'pharmacy', 'nursing'],
    keyHighlights: [
      'لا يتطلب مراقبة دورية لـ INR مقارنة بالوارفارين',
      'قاعدة المعايير الثلاثية لتخفيض الجرعة في الرجفان الأذيني (العمر، الوزن، الكرياتينين)',
      'مضاد الترياق النوعي متوفر: أنديكسانيل ألفا (Andexanet alfa)'
    ],
    indications: [
      {
        indication: 'Nonvalvular Atrial Fibrillation (Stroke Prevention)',
        indicationAr: 'الرجفان الأذيني غير الصمامي للوقاية من السكتة الدماغية',
        adultDose: '5 mg orally BID; reduce to 2.5 mg BID if patient meets >= 2 criteria: Age >= 80, Weight <= 60 kg, Serum Cr >= 1.5 mg/dL (133 umol/L).',
        adultDoseAr: '5 مجم فموياً مرتين يومياً؛ تخفض إلى 2.5 مجم مرتين يومياً إذا توافر معياران على الأقل: العمر ≥ 80 سنة، الوزن ≤ 60 كجم، كرياتينين المصل ≥ 1.5 مجم/ديسيلتر.',
        route: 'Oral'
      },
      {
        indication: 'DVT / Pulmonary Embolism Treatment',
        indicationAr: 'علاج الجلطة الوريدية العميقة والصمة الرئوية',
        adultDose: '10 mg orally BID for the first 7 days, followed by 5 mg orally BID.',
        adultDoseAr: '10 مجم فموياً مرتين يومياً لأول 7 أيام، ثم 5 مجم مرتين يومياً.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: '5 مجم مرتين يومياً (أو 2.5 مجم حسب معايير ABC الثلاثية).',
      crcl10to50: 'تطبق معايير تخفيض الجرعة المعتمدة.',
      crclBelow10: 'في مرضى الغسيل الكلوي: 5 مجم مرتين يومياً (تخفض إلى 2.5 مجم إذا كان العمر >= 80 أو الوزن <= 60 كجم).',
      hemodialysis: 'معتمد من FDA وفق ضوابط الجرعة المذكورة.'
    },
    hepaticAdjustment: 'القصور الكبدي الخفيف (Child-Pugh A): لا تعديل. المعتدل: يستخدم بحذر. الشديد: غير موصى به.',
    contraindications: [
      'النزيف المرضي النشط الحاد',
      'فرط الحساسية لأبيكسابان',
      'صمامات القلب الاصطناعية الميكانيكية'
    ],
    blackBoxWarning: 'Premature discontinuation increases the risk of thrombotic events. Epidural/spinal hematoma risk with neuraxial anesthesia.',
    blackBoxWarningAr: 'تحذير الصندوق الأسود: إيقاف الدواء المبكر يزيد خطر الجلطات. خطر ورم دموي نخاعي مع التخدير الشوكي/فوق الجافية.',
    mechanismOfAction: 'Potent, selective, reversible inhibitor of free and clot-bound factor Xa.',
    mechanismOfActionAr: 'مثبط مباشر وانتقائي وعكوس للعامل العاشر النشط (Factor Xa) الحر والمرتبط بالجلطة مما يمنع تكوين الثرومبين.',
    halfLife: '~ 12 hours',
    monitoringParameters: [
      'علامات النزيف الخفي والظاهر (الهيموغلوبين وضغط الدم والبراز الأسود)',
      'وظائف الكلى والوزن سنوياً على الأقل لإعادة تقييم معايير الجرعة'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'يمكن تناوله مع أو بدون طعام.',
      'يمكن سحق القرص وخلطه مع 30 مل ماء أو عصير تفاح للمرضى ذوي أنبوب التغذية.'
    ],
    pearls: [
      'تذكر قاعدة المعايير الثلاثية المشهورة (ABC criteria): Age >= 80, Body weight <= 60kg, Creatinine >= 1.5 mg/dL. إذا توافر 2 منها فقط يتم تخفيض الجرعة إلى 2.5 مجم مرتين يومياً.',
      'التوقف قبل الإجراءات الجراحية: يوقف قبل 24-48 ساعة من الجراحة حسب خطورة النزيف ووظائف الكلى.'
    ]
  },
  {
    id: 'dexmedetomidine',
    genericName: 'Dexmedetomidine',
    genericNameAr: 'ديكسميديتوميدين',
    brandNames: ['Precedex', 'بريسيدكس'],
    drugClass: 'Selective Alpha-2 Adrenergic Agonist / ICU Sedative',
    drugClassAr: 'محفز انتقائي لمستقبلات ألفا-2 الأدرينالية / مهدئ عناية مركزة',
    category: 'Controlled',
    route: ['IV Continuous Infusion'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-19',
    targetSpecialties: ['icu_emergency', 'nursing', 'cardiology'],
    keyHighlights: [
      'تهدئة تفاعلية واعية بدون تثبيط مركز التنفس (Conscious Sedation)',
      'تقليل مدة التهوية الميكانيكية ونسب الهذيان (Delirium) في العناية المركزة',
      'مراقبة بطء ضربات القلب (Bradycardia) وهبوط الضغط'
    ],
    indications: [
      {
        indication: 'ICU Sedation in Mechanically Ventilated Patients',
        indicationAr: 'تهدئة مرضى العناية المركزة الخاضعين للتنفس الصناعي',
        adultDose: 'Maintenance: 0.2 to 1.5 mcg/kg/hr IV continuous infusion (loading dose generally avoided to prevent severe hypotension/bradycardia).',
        adultDoseAr: 'جرعة الاستمرار: 0.2 إلى 1.5 ميكروجرام/كجم/ساعة تسريب وريدي مستمر (يتم تجنب جرعة التحميل لتفادي هبوط الضغط وبطء القلب).',
        route: 'Intravenous'
      },
      {
        indication: 'Procedural Sedation (Non-intubated)',
        indicationAr: 'التهدئة الإجرائية للعمليات والتشخيص لغير الخاضعين للتنفس',
        adultDose: 'Initiate loading 1 mcg/kg over 10 min, then 0.6 mcg/kg/hr titrated (range: 0.2-1 mcg/kg/hr).',
        adultDoseAr: 'تحميل 1 ميكروجرام/كجم على 10 دقائق ثم 0.6 ميكروجرام/كجم/ساعة معايرة.',
        route: 'Intravenous'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'لا تعديل، مراقبة التيقظ والآثار التسكينية.',
      crclBelow10: 'قد تتراكم النواتج الأيضية؛ المراقبة السريرية الحثيثة.',
      hemodialysis: 'لا يلزم جرعة إضافية.'
    },
    hepaticAdjustment: 'القصور الكبدي يتطلب تخفيض معدل التسريب لمعدل التصفية المنخفض.',
    contraindications: [
      'إحصار القلب المتقدم (Advanced Heart Block 2nd or 3rd degree) دون منظم ضربات',
      'الصدمة الإنتانية الشديدة مع انخفاض الضغط غير المعوض',
      'فرط الحساسية للدواء'
    ],
    mechanismOfAction: 'Centrally acting selective alpha-2 adrenergic agonist in locus coeruleus, inducing sedation and anxiolysis without respiratory depression.',
    mechanismOfActionAr: 'محفز انتقائي لمستقبلات ألفا-2 في الموضع الأزرق الدماغي (Locus Coeruleus)، يوفر تهدئة ونوماً يشبه النوم الطبيعي مع الحفاظ على التنفس التلقائي.',
    halfLife: '~ 2 hours (elimination terminal half-life)',
    monitoringParameters: [
      'تخطيط القلب المستمر (مراقبة ضربات القلب وتفادي Bradycardia < 50 bpm)',
      'ضغط الدم المستمر عبر الشريان أو القياس المتكرر',
      'مقياس التهدئة والهياج (RASS Score - الهدف المعتاد -1 إلى 0)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: ['لا ينطبق (تسريب وريدي حصرياً).'],
    pearls: [
      'جوهرة التمريض والعناية: المريض على البريسيدكس يمكن إيقاظه بسهولة والتواصل معه وإجراء التقييم العصبي دون الحاجة لإيقاف التسريب أو القلق من انسداد مجرى الهواء.',
      'تجنب إعطاء Loading Dose السريعة في العناية لأنها تسبب تقبض أوعية عابر مع ارتفاع ضغط يتبعه هبوط ضغط وبطء قلب حاد.'
    ]
  },
  {
    id: 'meropenem',
    genericName: 'Meropenem',
    genericNameAr: 'ميروبينيم',
    brandNames: ['Meronem', 'ميرونيم'],
    drugClass: 'Carbapenem Antibiotic',
    drugClassAr: 'مضاد حيوي واسع الطيف من زمرة الكاربابينيم',
    category: 'Rx',
    route: ['IV Injection / Infusion'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-18',
    targetSpecialties: ['infectious_diseases', 'icu_emergency', 'pediatrics', 'pharmacy', 'nursing'],
    keyHighlights: [
      'تغطية واسعة تشمل البكتيريا المنتجة للـ ESBL والزوائف الزنجارية (Pseudomonas)',
      'تفاعل حرج وممنوع تماماً مع حمض الفالبرويك (Valproic acid) يؤدي لتشنجات',
      'التسريب الممتد (Extended Infusion على 3-4 ساعات) يحسن الفعالية السريرية'
    ],
    indications: [
      {
        indication: 'Severe Hospital-Acquired Infections / Sepsis',
        indicationAr: 'الإنتانات الشديدة المكتسبة بالمستشفيات والإنتان الدموي',
        adultDose: '1 g to 2 g IV every 8 hours (infused over 30 min or 3-hour extended infusion).',
        adultDoseAr: '1 إلى 2 جرام وريدياً كل 8 ساعات (تسريب عادي 30 دقيقة أو ممتد على 3 ساعات).',
        route: 'Intravenous'
      },
      {
        indication: 'Bacterial Meningitis',
        indicationAr: 'التهاب السحايا الجرثومي',
        adultDose: '2 g IV every 8 hours infused over 30 minutes.',
        adultDoseAr: '2 جرام وريدياً كل 8 ساعات.',
        route: 'Intravenous'
      },
      {
        indication: 'Pediatric Complicated Infections (> 3 months)',
        indicationAr: 'العدوى المعقدة لدى الأطفال (أكبر من 3 شهور)',
        adultDose: '20 to 40 mg/kg/dose IV every 8 hours. Max 2 g per dose.',
        adultDoseAr: '20 إلى 40 مجم/كجم/جرعة وريدياً كل 8 ساعات. الحد الأقصى: 2 جرام للجرعة.',
        route: 'Intravenous'
      }
    ],
    renalAdjustment: {
      crclAbove50: '1 إلى 2 جرام كل 8 ساعات.',
      crcl10to50: 'CrCl 26-50: 1 جرام كل 12 ساعة. CrCl 10-25: 500 مجم كل 12 ساعة.',
      crclBelow10: 'CrCl < 10: 500 مجم كل 24 ساعة.',
      hemodialysis: '500 مجم بعد جلسة الغسيل الكلوي في أيام الغسيل.'
    },
    hepaticAdjustment: 'لا يتطلب تعديل الجرعة في القصور الكبدي.',
    contraindications: [
      'فرط الحساسية الشديدة الفورية (تأق Anaphylaxis) للبيتا لاكتام أو الكاربابينيم'
    ],
    mechanismOfAction: 'Binds to penicillin-binding proteins (PBPs), inhibiting bacterial cell wall synthesis.',
    mechanismOfActionAr: 'يرتبط بالبروتينات الرابطة للبنسلين (PBPs) مما يمنع تخليق الجدار الخلوي البكتيري ويؤدي لموت الخلية الجرثومية.',
    halfLife: '~ 1 hour in normal renal function',
    monitoringParameters: [
      'وظائف الكلى (Creatinine) لتعديل الفواصل الزمنية',
      'تعداد الدم الكامل (CBC) ونسبة الصفائح الدموية',
      'مراقبة التشنجات لمرضى القصور الكلوي أو آفات الجهاز العصبي'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Safe',
    foodInteractions: ['لا ينطبق (وريدي فقط).'],
    pearls: [
      'تفاعل مميت مع الفالبروات: ميروبينيم يخفض مستويات حمض الفالبرويك (Depakine) في الدم بنسبة 80-90% خلال ساعات، مما يسبب نوبات تشنجية متكررة (Status Epilepticus). هذا المزيج مضاد استطباب مطلق!',
      'التسريب الممتد على 3 ساعات (Extended Infusion) يحقق الزمن الأفضل فوق التركيز المثبط الأدنى (Time > MIC) للتعامل مع الميكروبات المقاومة.'
    ]
  },
  {
    id: 'sugammadex',
    genericName: 'Sugammadex',
    genericNameAr: 'سوجاماديكس',
    brandNames: ['Bridion', 'بريديون'],
    drugClass: 'Selective Relaxant Binding Agent (SRBA)',
    drugClassAr: 'عامل انتقائي رابط وناسخ للحصار العضلي العصبي',
    category: 'Rx',
    route: ['IV Bolus Push'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-17',
    targetSpecialties: ['icu_emergency', 'nursing', 'pharmacy'],
    keyHighlights: [
      'عكس فوري وآمن لحصار روكورونيوم (Rocuronium) وفيكورونيوم (Vecuronium)',
      'بدون تأثيرات كولينية جانبية مقارنة بالنيوستيجمين والأتروبين',
      'يبطل مفعول موانع الحمل الفموية الهرمونية لمدة 7 أيام'
    ],
    indications: [
      {
        indication: 'Routine Reversal of Neuromuscular Blockade (Moderate block: TOF >= 2)',
        indicationAr: 'العكس الروتيني للحصار العضلي المعتدل (TOF >= 2)',
        adultDose: '2 mg/kg IV single bolus injection.',
        adultDoseAr: '2 مجم/كجم حقنة وريدية سريعة لمرة واحدة.',
        route: 'Intravenous'
      },
      {
        indication: 'Deep Block Reversal (PTC 1-2 twitch)',
        indicationAr: 'عكس الحصار العضلي العميق',
        adultDose: '4 mg/kg IV single bolus injection.',
        adultDoseAr: '4 مجم/كجم حقنة وريدية سريعة لمرة واحدة.',
        route: 'Intravenous'
      },
      {
        indication: 'Immediate Urgent Reversal (Cannot Intubate / Cannot Oxygenate after 1.2 mg/kg Rocuronium)',
        indicationAr: 'العكس الطارئ الفوري لإنقاذ مجرى الهواء (CICO)',
        adultDose: '16 mg/kg IV single rapid bolus push.',
        adultDoseAr: '16 مجم/كجم حقنة وريدية سريعة وفورية لمرة واحدة.',
        route: 'Intravenous'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'CrCl 30-50: لا تعديل.',
      crclBelow10: 'CrCl < 30 أو الغسيل الكلوي: غير موصى به ومضاد استطباب للتراكم الطويل للمعقد.',
      hemodialysis: 'غير موصى به.'
    },
    hepaticAdjustment: 'لا يتطلب تعديل.',
    contraindications: [
      'فرط الحساسية لسوجاماديكس',
      'القصور الكلوي الشديد (CrCl < 30 mL/min)'
    ],
    mechanismOfAction: 'Modified gamma-cyclodextrin that encapsulates neuromuscular blockers (rocuronium > vecuronium), forming an inactive tight complex excreted in urine.',
    mechanismOfActionAr: 'مركب سيكلودكسترين معدل يقوم بتطويق وابتلاع جزيئات الباسط العضلي (روكورونيوم وفيكورونيوم) مشكلاً معقداً غير نشط يُطرح عبر البول.',
    halfLife: '~ 2 hours',
    monitoringParameters: [
      'مراقبة عودة قوة العضلات والتنفس التلقائي التام',
      'مراقبة تخطيط القلب لبطء ضربات القلب العابر بعد الحقن',
      'إعلام المريضات باستعمال وسيلة منع حمل إضافية'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Safe',
    foodInteractions: ['لا ينطبق.'],
    pearls: [
      'تحذير موانع الحمل: يرتبط سوجاماديكس بالبروجسترون أيضاً؛ لذلك يجب إبلاغ أي مريضة تستخدم حبوب منع حمل فموية باستعمال وسيلة مانعة غير هرمونية (مثل الواقي) لمدة 7 أيام بعد العملية.',
      'يحسب وزنه بناءً على الوزن الفعلي للمريض (Actual Body Weight).'
    ]
  },
  {
    id: 'augmentin',
    genericName: 'Amoxicillin / Clavulanate',
    genericNameAr: 'أموكسيسيلين / كلافولانات',
    brandNames: ['Augmentin', 'Curam', 'أوجمنتين', 'كيورام', 'ميجاموكس'],
    drugClass: 'Aminopenicillin + Beta-Lactamase Inhibitor',
    drugClassAr: 'بنسلين أميني + مثبط لإنزيم البيتا لاكتاماز',
    category: 'Rx',
    route: ['Oral', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-16',
    targetSpecialties: ['pediatrics', 'pharmacy', 'internal_medicine', 'nursing'],
    keyHighlights: [
      'المضاد الأكثر وصفاً في عيادات الأطفال والبالغين لالتهابات الجهاز التنفسي',
      'نسبة الأموكسيسيلين إلى الكلافولانات (مثل 7:1 أو 14:1) تحدد حدوث الإسهال',
      'يؤخذ مع بداية الوجبة لتقليل اضطرابات المعدة وتحسين الامتصاص'
    ],
    indications: [
      {
        indication: 'Acute Otitis Media (Pediatrics - High dose protocol)',
        indicationAr: 'التهاب الأذن الوسطى الحاد لدى الأطفال (بروتوكول الجرعة العالية)',
        adultDose: 'N/A (Pediatric indication)',
        adultDoseAr: 'خاص بالأطفال (لا ينطبق للبالغين)',
        pediatricDose: '80-90 mg/kg/day (based on amoxicillin component) divided every 12 hours (Augmentin ES-600 format).',
        pediatricDoseAr: '80 إلى 90 مجم/كجم/اليوم (محسوبة على مركب الأموكسيسيلين) مقسمة على جرعتين كل 12 ساعة.',
        route: 'Oral'
      },
      {
        indication: 'Community Acquired Sinusitis & Respiratory Infections (Adults)',
        indicationAr: 'التهاب الجيوب الأنفية والتهاب الرئة المكتسب بالمجتمع',
        adultDose: '1 g (875/125 mg or 1000 mg) PO BID for 5-7 days.',
        adultDoseAr: '1 جرام (أو 875/125 مجم) فموياً مرتين يومياً لمدة 5-7 أيام.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'CrCl 10-30: 500/125 مجم كل 12 ساعة (تجنب أقراص 875 مجم أو 1000 مجم).',
      crclBelow10: '500/125 مجم كل 24 ساعة.',
      hemodialysis: '500/125 مجم كل 24 ساعة + جرعة إضافية بعد الغسيل.'
    },
    hepaticAdjustment: 'يستخدم بحذر؛ مراقبة وظائف الكبد لتفادي اليرقان الركودي (Cholestatic Jaundice).',
    contraindications: [
      'حساسية مفرطة للبنسلين أو البيتا لاكتام',
      'تاريخ سابق ليرقان أو خلل كبدي مصاحب للأوجمنتين'
    ],
    mechanismOfAction: 'Amoxicillin inhibits bacterial cell wall synthesis; Clavulanate irreversibly inactivates beta-lactamase enzymes.',
    mechanismOfActionAr: 'يعمل الأموكسيسيلين على تثبيط جدار الخلية البكتيرية، بينما يحمي حمض الكلافولانيك الأموكسيسيلين من التكسر عبر تثبيط إنزيمات البيتا لاكتاماز.',
    halfLife: '~ 1 to 1.3 hours',
    monitoringParameters: [
      'مراقبة الإسهال والطفح الجلدي',
      'تحري وظائف الكبد في الدورات العلاجية الطويلة (> 14 يوم)'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Safe',
    foodInteractions: [
      'تناول الدواء مع اللقمة الأولى من الطعام يقلل بشدة من الغثيان والمغص المعوي ويزيد امتصاص الكلافولانات.'
    ],
    pearls: [
      'سر نسبة 14:1 في شراب الأطفال (Augmentin ES): تم تصميمه بجرعة أموكسيسيلين عالية (600 مجم/5 مل) مع كلافولانات منخفضة (42.9 مجم/5 مل) للقضاء على المكورات العقدية المقاومة دون مضاعفة الكلافولانات المسببة للإسهال.',
      'صلاحية الشراب بعد التحضير بالماء المقطر: 7 إلى 10 أيام فقط داخل الثلاجة (2-8 درجات مئوية).'
    ]
  },
  {
    id: 'warfarin',
    genericName: 'Warfarin',
    genericNameAr: 'وارفارين',
    brandNames: ['Coumadin', 'Marevan', 'كومادين', 'ماريفان'],
    drugClass: 'Vitamin K Antagonist (Anticoagulant)',
    drugClassAr: 'مضاد فيتامين ك / مضاد تخثر فموي كلاسيكي',
    category: 'Rx',
    route: ['Oral Tablets (يومياً مساءً)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-15',
    targetSpecialties: ['cardiology', 'pharmacy', 'internal_medicine', 'nursing'],
    keyHighlights: [
      'مراقبة إلزامية ودقيقة للـ INR (الهدف المعتاد 2.0 - 3.0، أو 2.5 - 3.5 للصمامات الميكانيكية)',
      'تفاعلات دوائية وغذائية واسعة مع الخضار الورقية الغنية بفيتامين K ومضادات الفطريات/الحيوية',
      'مضاد استطباب قطعي أثناء الحمل (تشوهات جنينية ونزيف جنيني)'
    ],
    indications: [
      {
        indication: 'Mechanical Heart Valves (Thromboembolism Prophylaxis)',
        indicationAr: 'صمامات القلب الميكانيكية للوقاية من التخثر والسكتة',
        adultDose: 'Individualized dosing titrated to target INR 2.5 - 3.5.',
        adultDoseAr: 'جرعة فردية يومية تعاير للوصول للهدف العلاجي INR 2.5 إلى 3.5.',
        route: 'Oral'
      },
      {
        indication: 'Atrial Fibrillation & DVT/PE Treatment',
        indicationAr: 'الرجفان الأذيني وعلاج/الوقاية من الجلطة الوريدية العميقة والصمة الرئوية',
        adultDose: 'Initiate 2.5 to 5 mg PO daily, titrate to target INR 2.0 - 3.0.',
        adultDoseAr: 'البدء بـ 2.5 إلى 5 مجم يومياً ثم المعايرة للوصول إلى INR 2.0 إلى 3.0.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يلزم تعديل الجرعة مباشرة، لكن تعاير حسب الـ INR.',
      crcl10to50: 'معايرة دقيقة للـ INR؛ يزداد خطر النزيف لدى مرضى الكلى المزمنين.',
      crclBelow10: 'خيار مفضل على بعض الـ DOACs في الصمامات الميكانيكية مع مراقبة INR أسبوعياً.',
      hemodialysis: 'يستخدم مع مراقبة وثيقة لـ INR.'
    },
    hepaticAdjustment: 'القصور الكبدي ينقص تصنيع عوامل التخثر ويزيد الحساسية للوارفارين؛ تخفيض الجرعة والبدء بجرعات منخفضة.',
    contraindications: [
      'الحمل (تشوهات جنينية واعتلال عظمي وغضروفي جنيني)',
      'النزيف النشط الحاد أو أهبة النزيف الشديدة',
      'الخضوع لجراحة كبرى حديثة في العين أو الدماغ'
    ],
    blackBoxWarning: 'Major or fatal bleeding risk. Perform regular INR monitoring and educate on signs of bleeding.',
    blackBoxWarningAr: 'تحذير الصندوق الأسود: خطر نزيف شديد أو قاتل. يجب إجراء فحص INR منتظم وتثقيف المريض حول علامات النزيف.',
    mechanismOfAction: 'Inhibits vitamin K epoxide reductase complex subunit 1 (VKORC1), depleting functional vitamin K-dependent clotting factors (II, VII, IX, X) and proteins C and S.',
    mechanismOfActionAr: 'يثبط إنزيم اختزال فيتامين K مما يمنع تنشيط عوامل التخثر المعتمدة على فيتامين K (العوامل 2 و 7 و 9 و 10) والبروتينين C و S.',
    halfLife: '~ 20 to 60 hours (mean: 40 hours)',
    monitoringParameters: [
      'النسبة المعيارية الدولية للسيولة (INR) بانتظام',
      'علامات النزيف (الكدمات غير المبررة، بيلة دموية، براز أسود)',
      'مراجعة أي أدوية جديدة أو مكملات عشبية'
    ],
    pregnancyCategory: 'Contraindicated',
    lactationSafety: 'Safe',
    foodInteractions: [
      'الأطعمة الغنية بفيتامين K (السبانخ، البروكلي، الكرنب، الخس) تنقص مفعول الوارفارين؛ يجب الحفاظ على كمية ثابتة يومياً دون تغييرات مفاجئة.',
      'الكحول والمكملات مثل الثوم والجينكو والزنجبيل تزيد خطر النزيف.'
    ],
    pearls: [
      'الترياق النوعي للوارفارين في حالات النزيف الحاد: مركب البروثرومبين المركز (4-Factor PCC / Kcentra) بالإضافة إلى فيتامين K وريدياً ببطء.',
      'تفاعل المضادات الحيوية: الكوتريموكسازول، السيبروفلوكساسين، والمترونيدازول ترفع الـ INR بشكل حاد ويجب تخفيض جرعة الوارفارين بنسبة 25-50% عند البدء بها.'
    ]
  },
  {
    id: 'atorvastatin',
    genericName: 'Atorvastatin',
    genericNameAr: 'أتورفاستاتين',
    brandNames: ['Lipitor', 'Ator', 'ليبيتور', 'أتور', 'ليبيماكس'],
    drugClass: 'HMG-CoA Reductase Inhibitor (Statin)',
    drugClassAr: 'مثبط إنزيم HMG-CoA المختزل / خافض كوليسترول عالي الفعالية',
    category: 'Rx',
    route: ['Oral Tablets (يومياً)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-14',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'علاج عالي الكثافة (High-Intensity Statin: 40-80 mg) يخفض كوليسترول LDL بأكثر من 50%',
      'يؤخذ في أي وقت من اليوم (له عمر نصفي طويل 14 ساعة مقارنة بالستاتينات القديمة)',
      'تفاعل دوائي هام مع مثبطات CYP3A4 القوية مثل باكسلوفيد وكلاريثروميسين'
    ],
    indications: [
      {
        indication: 'Hypercholesterolemia & Atherosclerotic Cardiovascular Disease (ASCVD)',
        indicationAr: 'فرط كوليسترول الدم والوقاية الثانوية من أمراض الشرايين التاجية والجلطات',
        adultDose: 'Moderate intensity: 10-20 mg PO daily. High intensity: 40-80 mg PO daily.',
        adultDoseAr: 'شدة متوسطة: 10-20 مجم يومياً. شدة عالية: 40-80 مجم فموياً مرة واحدة يومياً.',
        route: 'Oral'
      },
      {
        indication: 'Primary Prevention in Diabetic Patients (Age 40-75)',
        indicationAr: 'الوقاية الأولية لدى مرضى السكري (40-75 سنة)',
        adultDose: '20 to 40 mg PO once daily.',
        adultDoseAr: '20 إلى 40 مجم فموياً مرة واحدة يومياً.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'لا يتطلب تعديل الجرعة (إطراح كبدي في المقام الأول).',
      crclBelow10: 'لا يتطلب تعديل الجرعة، وهو من الخيارات المفضلة لمرضى الكلى.',
      hemodialysis: 'لا يلزم تعديل ولا يمكن إزالته بالغسيل.'
    },
    hepaticAdjustment: 'مضاد استطباب في أمراض الكبد النشطة أو الارتفاع المستمر غير المبرر لإنزيمات الكبد AST/ALT أكثر من 3 أضعاف الحد الأعلى.',
    contraindications: [
      'مرض كبدي نشط أو يرقان غير مفسر',
      'الحمل والإرضاع (ممنوع ومضاد استطباب لتثبيط تصنيع الكوليسترول الجنيني)',
      'التزامن مع مثبطات CYP3A4 الشديدة مثل باكسلوفيد'
    ],
    mechanismOfAction: 'Competitively inhibits HMG-CoA reductase, the rate-limiting enzyme in cholesterol biosynthesis, upregulating LDL receptors on hepatocytes.',
    mechanismOfActionAr: 'يثبط تنافسياً إنزيم HMG-CoA المختزل المحدد لمعدل تصنيع الكوليسترول في الكبد، مما يحفز التعبير عن مستقبلات LDL ويسرع تنقية الكوليسترول الضار من الدم.',
    halfLife: '~ 14 hours (active metabolites: 20-30 hours)',
    monitoringParameters: [
      'فحص الدهون المصلية (Lipid Panel) بعد 4-12 أسبوعاً من البدء',
      'إنزيمات الكبد (ALT/AST) قبل البدء وعند ظهور أعراض كبدية',
      'إنزيم العضلات (CK) عند شكوى المريض من آلام أو ضعف عضلي شديد'
    ],
    pregnancyCategory: 'Contraindicated',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'تجنب عصير الجريب فروت بكميات كبيرة (> 1 لتر/يوم) لتفادي تثبيط CYP3A4 وزيادة تراكم الدواء.',
      'يمكن تناوله في أي وقت من اليوم مع أو بدون طعام.'
    ],
    pearls: [
      'الجرعة عالية الكثافة (40 أو 80 مجم) إلزامية لجميع مرضى متلازمة الشريان التاجي الحادة (ACS) بغض النظر عن مستوى الكوليسترول الأولي في التحليل.',
      'إذا ظهرت آلام عضلية (Myalgia): يتم فحص مستوى CK وإيقاف الدواء مؤقتاً، ثم يمكن تجربة ستاتين آخر مثل روزوفاستاتين بجرعة منخفضة.'
    ]
  },
  {
    id: 'metformin',
    genericName: 'Metformin',
    genericNameAr: 'ميتفورمين',
    brandNames: ['Glucophage', 'Cidophage', 'جلوكوفاج', 'سيدوفاج'],
    drugClass: 'Biguanide (Antidiabetic)',
    drugClassAr: 'مركب بيجوانيد / خافض سكر فموي حجر الأساس',
    category: 'Rx',
    route: ['Oral (مع الوجبات)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-13',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'cardiology', 'nursing'],
    keyHighlights: [
      'الخط العلاجي الأول المعتمد في السكري من النوع الثاني',
      'لا يسبب هبوط السكر عند استخدامه بمفرده ولا يسبب زيادة الوزن',
      'يجب إيقافه قبل الصبغات الشعاعية المعالجة باليود لمرضى eGFR < 60'
    ],
    indications: [
      {
        indication: 'Type 2 Diabetes Mellitus',
        indicationAr: 'السكري من النوع الثاني',
        adultDose: 'Start: 500 mg PO once or twice daily with meals; titrate weekly up to 2000-2550 mg/day divided.',
        adultDoseAr: 'البدء بـ 500 مجم مرة أو مرتين يومياً مع الطعام، ثم التدرج أسبوعياً حتى 2000-2550 مجم يومياً مقسمة على جرعات.',
        route: 'Oral'
      },
      {
        indication: 'Polycystic Ovary Syndrome (PCOS - Off-label)',
        indicationAr: 'متلازمة تكيس المبايض ومقاومة الإنسولين',
        adultDose: '500 mg PO TID or 850 mg PO BID with meals.',
        adultDoseAr: '500 مجم 3 مرات يومياً أو 850 مجم مرتين يومياً مع الوجبات.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'eGFR >= 45: جرعة كاملة طبيعية (حتى 2000 مجم يومياً).',
      crcl10to50: 'eGFR 30-44: الحد الأقصى 1000 مجم يومياً؛ لا يُنصح ببدء علاج جديد.',
      crclBelow10: 'eGFR < 30 mL/min: مضاد استطباب قطعي لخطر الحماض اللبني.',
      hemodialysis: 'مضاد استطباب مطلق.'
    },
    hepaticAdjustment: 'تجنب الاستخدام في القصور الكبدي الشديد لزيادة خطر الحماض اللبني (Lactic Acidosis).',
    contraindications: [
      'القصور الكلوي الشديد (eGFR < 30 mL/min)',
      'الحماض الأيضي الحاد أو الحماض اللبني (Lactic acidosis)',
      'قصور القلب اللا تعويضي الحاد أو الصدمة الإنتانية أو نقص الأكسجة'
    ],
    blackBoxWarning: 'Lactic Acidosis: Rare but fatal accumulation risk in severe renal/hepatic impairment, sepsis, or contrast procedures.',
    blackBoxWarningAr: 'تحذير الصندوق الأسود: خطر الحماض اللبني (Lactic Acidosis) القاتل في القصور الكلوي الشديد أو الإنتان أو الصبغات الوريدية.',
    mechanismOfAction: 'Decreases hepatic glucose production (gluconeogenesis), decreases intestinal absorption of glucose, and improves insulin sensitivity by increasing peripheral glucose uptake.',
    mechanismOfActionAr: 'يقلل من إنتاج الكبد للجلوكوز، ويقلل امتصاص السكر المعوي، ويزيد من حساسية الأنسجة المحيطية للإنسولين واستهلاكها للجلوكوز.',
    halfLife: '~ 4 to 9 hours',
    monitoringParameters: [
      'معدل الترشيح الكبيبي (eGFR) سنوياً على الأقل',
      'فيتامين B12 دورياً كل 1-2 سنة (يقلل الميتفورمين امتصاصه مع الاستخدام المزمن)',
      'السكر التراكمي (HbA1c)'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يؤخذ دائماً مع الوجبات أو بعدها مباشرة للحد من الاضطرابات الهضمية والغثيان والإسهال.',
      'تجنب الإفراط في الكحول لتفادي الحماض اللبني.'
    ],
    pearls: [
      'قاعدة الصبغات المتباينة (Contrast Media): أوقف الميتفورمين قبل إجراء الأشعة المقطعية بالصبغة إذا كان eGFR بين 30-60 وأعد فحص وظائف الكلى بعد 48 ساعة قبل استئنافه.',
      'نقص فيتامين B12: قد يسبب اعتلالاً عصبياً مشابهاً لاعتلال السكري العصبي؛ افحص B12 عند ظهور خدر أو تنميل.'
    ]
  },
  {
    id: 'clopidogrel',
    genericName: 'Clopidogrel',
    genericNameAr: 'كلوبيدوجريل',
    brandNames: ['Plavix', 'بلافيكس', 'بلافوكس'],
    drugClass: 'P2Y12 Platelet Inhibitor (Thienopyridine)',
    drugClassAr: 'مثبط تجمع الصفائح الدموية / حاصب مستقبلات P2Y12',
    category: 'Rx',
    route: ['Oral (يومياً)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-12',
    targetSpecialties: ['cardiology', 'internal_medicine', 'icu_emergency', 'pharmacy'],
    keyHighlights: [
      'مضاد صفائح أساسي بعد تركيب الدعامات القلبية (DAPT مع الأسبرين)',
      'دواء أولي (Prodrug) يحتاج للتنشيط عبر إنزيم كبدي CYP2C19',
      'تفاعل سلبي خطير مع أوميبرازول (Omeprazole) ينقص فاعلية حماية القلب'
    ],
    indications: [
      {
        indication: 'Acute Coronary Syndrome (ACS) & Post-PCI Stenting (DAPT)',
        indicationAr: 'متلازمة الشريان التاجي الحادة وبعد زراعة الدعامات القلبية (علاج ثنائي)',
        adultDose: 'Loading: 300 to 600 mg PO once. Maintenance: 75 mg PO once daily (with Aspirin 81-100 mg).',
        adultDoseAr: 'جرعة تحميل: 300 إلى 600 مجم فموياً لمرة واحدة، ثم مداومة: 75 مجم فموياً مرة واحدة يومياً مع الأسبرين.',
        route: 'Oral'
      },
      {
        indication: 'Recent Stroke, Peripheral Arterial Disease (PAD)',
        indicationAr: 'السكتة الدماغية الإقفارية الحديثة ومرض الشرايين المحيطية',
        adultDose: '75 mg PO once daily.',
        adultDoseAr: '75 مجم فموياً مرة واحدة يومياً.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'لا يتطلب تعديل الجرعة؛ مراقبة أهبة النزيف.',
      crclBelow10: 'لا يتطلب تعديل الجرعة.',
      hemodialysis: 'لا يتطلب تعديل الجرعة.'
    },
    hepaticAdjustment: 'يستخدم بحذر في القصور الكبدي المعتدل؛ مضاد استطباب في القصور الكبدي الشديد مع أهبة النزيف.',
    contraindications: [
      'النزيف المرضي النشط (مثل القرحة الهضمية النازفة أو النزيف داخل القحف)',
      'فرط الحساسية للكلوبيدوجريل'
    ],
    blackBoxWarning: 'Diminished antiplatelet effect in CYP2C19 poor metabolizers (higher cardiovascular event rate).',
    blackBoxWarningAr: 'تحذير الصندوق الأسود: ضعف مفعول حماية القلب لدى المرضى ذوي الاستقلاب الضعيف لـ CYP2C19.',
    mechanismOfAction: 'Irreversibly binds to P2Y12 ADP receptors on platelets, inhibiting activation of the GPIIb/IIIa complex and platelet aggregation.',
    mechanismOfActionAr: 'يرتبط بشكل غير عكوس بمستقبلات P2Y12 على الصفائح الدموية مما يمنع تنشيط معقد GPIIb/IIIa ويثبط تراكم الصفائح طوال دورة حياتها (7-10 أيام).',
    halfLife: 'Parent: ~6 hours, Active metabolite: ~30 minutes',
    monitoringParameters: [
      'تعداد الصفائح الدموية والهيموغلوبين (CBC)',
      'علامات النزيف الخفي',
      'فحص النمط الجيني CYP2C19 عند المرضى المعرضين لانسداد الدعامة'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يمكن تناوله مع أو بدون الطعام.',
      'تجنب مضادات الالتهاب غير الستيرويدية (NSAIDs) دون استشارة لمنع النزيف الهضمي.'
    ],
    pearls: [
      'تفاعل أوميبرازول (Omeprazole): يثبط أوميبرازول إنزيم CYP2C19 ويمنع تحول كلوبيدوجريل لشكله الفعال، مما يزيد خطر انسداد الدعامة؛ إذا كان حامي المعدة ضرورياً، يفضل بانتوبرازول (Pantoprazole).',
      'التوقف قبل العمليات الجراحية: يجب إيقافه قبل 5 أيام على الأقل من العمليات الجراحية المجدولة.'
    ]
  },
  {
    id: 'vancomycin',
    genericName: 'Vancomycin',
    genericNameAr: 'فانكومايسين',
    brandNames: ['Vancocin', 'فانكوسين'],
    drugClass: 'Glycopeptide Antibiotic',
    drugClassAr: 'مضاد حيوي جلايكوببتيدي قاتل للبكتيريا إيجابية الجرام',
    category: 'Rx',
    route: ['IV Infusion (للعدوى الجهازية)', 'Oral (خاص بـ C. difficile فقط)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-11',
    targetSpecialties: ['infectious_diseases', 'icu_emergency', 'pharmacy', 'internal_medicine', 'pediatrics'],
    keyHighlights: [
      'المضاد المرجعي لمكورات المكورات العنقودية الذهبية المقاومة للميثيسيلين (MRSA)',
      'الفانكومايسين الفموي لا يُمتص جهازياً ومخصص فقط لعلاج بكتيريا المطثية العسيرة (C. diff)',
      'يتطلب مراقبة AUC/MIC (الهدف 400-600) والتركيز القاعي (Trough level) لتفادي الفشل الكلوي'
    ],
    indications: [
      {
        indication: 'MRSA Sepsis, Pneumonia, Bacteremia & Osteomyelitis (IV)',
        indicationAr: 'الإنتان الدموي، ذات الرئة، وعدوى العظام بالمكورات المقاومة MRSA (وريدياً)',
        adultDose: '15 to 20 mg/kg IV every 8 to 12 hours (target AUC/MIC: 400-600 mg*h/L). Max initial single dose: 2 g.',
        adultDoseAr: '15 إلى 20 مجم/كجم وريدياً كل 8 إلى 12 ساعة (معدل التسريب: لا يتجاوز 1 جم/ساعة).',
        route: 'Intravenous'
      },
      {
        indication: 'Clostridioides difficile Infection (Oral)',
        indicationAr: 'عدوى المطثية العسيرة والتهاب القولون الغشائي الكاذب (فموياً فقط)',
        adultDose: '125 mg PO QID for 10 days (severe/fulminant: 500 mg PO QID).',
        adultDoseAr: '125 مجم فموياً 4 مرات يومياً لمدة 10 أيام (الحالات الصاعقة: 500 مجم 4 مرات يومياً).',
        route: 'Oral'
      },
      {
        indication: 'Pediatric Severe Gram-Positive Infections',
        indicationAr: 'العدوى الشديدة لدى الأطفال بموجبات الجرام',
        adultDose: 'N/A',
        adultDoseAr: 'خاص بالأطفال',
        pediatricDose: '15 mg/kg IV every 6-8 hours.',
        pediatricDoseAr: '15 مجم/كجم وريدياً كل 6 إلى 8 ساعات.',
        route: 'Intravenous'
      }
    ],
    renalAdjustment: {
      crclAbove50: '15-20 مجم/كجم كل 8 إلى 12 ساعة.',
      crcl10to50: 'CrCl 30-49: 15 مجم/كجم كل 24 ساعة. CrCl 15-29: 15 مجم/كجم كل 24-48 ساعة.',
      crclBelow10: 'جرعة تحميل 20-25 مجم/كجم، ثم إعطاء جرعات إضافية بناءً على مستوى الدواء في الدم (Level-based).',
      hemodialysis: 'جرعة تحميل ثم جرعة صيانة (500-1000 مجم) بعد كل جلسة غسيل كلوي حسب التحليل.'
    },
    hepaticAdjustment: 'لا يتطلب تعديل الجرعة (إطراح كلوي بنسبة 80-90%).',
    contraindications: [
      'فرط الحساسية المعروف للفانكومايسين'
    ],
    mechanismOfAction: 'Inhibits bacterial cell wall synthesis by blocking glycopeptide polymerization through tight binding to D-alanyl-D-alanine portion of cell wall precursor.',
    mechanismOfActionAr: 'يثبط بناء جدار الخلية البكتيرية بالارتباط الوثيق بمركب D-alanyl-D-alanine مانعاً بلمرة الببتيدوجلايكان.',
    halfLife: '~ 4 to 6 hours in normal renal function (extended up to 7-10 days in anuria)',
    monitoringParameters: [
      'وظائف الكلى اليومية (Creatinine, eGFR) لتحري السمية الكلوية مبكراً',
      'المستوى العلاجي القاعي (Trough level: 10-15 or 15-20 mcg/mL) أو AUC/MIC',
      'فحص السمع في العلاج المطول وعند المشاركة مع الأمينوغليكوزيدات'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Safe',
    foodInteractions: ['لا ينطبق للحقن الوريدي.'],
    pearls: [
      'متلازمة الرجل الأحمر (Red Man Syndrome / RMS): ليست حساسية حقيقية بل تحرر هيستامين ناتج عن سرعة التسريب؛ علاجها بإبطاء معدل التسريب الوريدي (1 جرام على مدار 60-120 دقيقة) وإعطاء مضاد هيستامين.',
      'الفانكومايسين الوريدي لا يعالج التهاب القولون بـ C. diff لأنه لا يفرز في تجويف الأمعاء إطلاقاً، ويجب استخدام الكبسولات الفموية.'
    ]
  },
  {
    id: 'insulin_glargine',
    genericName: 'Insulin Glargine',
    genericNameAr: 'إنسولين جلارجين',
    brandNames: ['Lantus', 'Toujeo', 'Basaglar', 'Semglee', 'لانتوس', 'توجيو'],
    drugClass: 'Long-Acting Basal Insulin Analog',
    drugClassAr: 'إنسولين قاعدي طويل المفعول (نظير الإنسولين)',
    category: 'Rx',
    route: ['Subcutaneous (مرة يومياً)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-10',
    targetSpecialties: ['internal_medicine', 'icu_emergency', 'pharmacy', 'nursing'],
    keyHighlights: [
      'إنسولين قاعدي بدون قمة تأثير واضحة (Peakless) يغطي 24 ساعة تقريباً',
      'لا يُمزج أبداً في نفس المحقنة مع أنواع إنسولين أخرى',
      'تبديل نوع أو ماركة الإنسولين يتطلب مراقبة دقيقة للسكر لتفادي نقص أو ارتفاع السكر'
    ],
    indications: [
      {
        indication: 'Type 1 Diabetes Mellitus',
        indicationAr: 'السكري من النوع الأول',
        adultDose: 'Initiate 0.2-0.4 units/kg/day SC once daily as part of basal-bolus regimen; titrate per glucose readings.',
        adultDoseAr: 'البدء بـ 0.2-0.4 وحدة/كجم/يوم تحت الجلد مرة يومياً كجزء من نظام القاعدي-الوجبات، مع تعديل الجرعة حسب قراءات السكر.',
        route: 'Subcutaneous'
      },
      {
        indication: 'Type 2 Diabetes Mellitus (insulin-requiring)',
        indicationAr: 'السكري من النوع الثاني (المحتاج للإنسولين)',
        adultDose: 'Start 10 units or 0.1-0.2 units/kg SC once daily; titrate by 2-4 units every 3-4 days to reach fasting glucose goal.',
        adultDoseAr: 'البدء بـ 10 وحدات أو 0.1-0.2 وحدة/كجم تحت الجلد مرة يومياً، مع رفع الجرعة 2-4 وحدات كل 3-4 أيام للوصول لهدف سكر الصيام.',
        route: 'Subcutaneous'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل جرعة مبدئي، لكن يتابع السكر بحذر.',
      crcl10to50: 'قد يتراكم الإنسولين ويقل الاحتياج؛ يخفض الجرعة تدريجياً مع مراقبة لصيقة لنقص السكر.',
      crclBelow10: 'يقل إطراح الإنسولين الكلوي بشدة؛ يخفض الجرعة بنسبة قد تصل 25-50% مع مراقبة متكررة.',
      hemodialysis: 'تعديل فردي حسب نمط السكر حول جلسات الغسيل؛ خطر نقص السكر مرتفع خلال وبعد الجلسة.'
    },
    hepaticAdjustment: 'قد يقل تكسير الإنسولين في القصور الكبدي الشديد مما يزيد خطر نقص السكر؛ يبدأ بجرعة حذرة مع مراقبة لصيقة.',
    contraindications: [
      'نقص سكر الدم الحالي أو المتكرر غير المُسيطر عليه',
      'فرط الحساسية المعروف للإنسولين جلارجين أو أحد مكوناته'
    ],
    mechanismOfAction: 'Binds to insulin receptors, promoting peripheral glucose uptake and suppressing hepatic glucose production; forms microprecipitates at the injection site for a slow, prolonged, relatively flat absorption profile.',
    mechanismOfActionAr: 'يرتبط بمستقبلات الإنسولين فيعزز امتصاص الجلوكوز المحيطي ويثبط إنتاج الجلوكوز الكبدي؛ يترسب جزئياً تحت الجلد مما يعطي امتصاصاً بطيئاً وممتداً وثابتاً نسبياً طوال 24 ساعة.',
    halfLife: '~ 12 to 19 hours (duration of action up to 24 hours)',
    monitoringParameters: [
      'سكر الدم الصيامي والعشوائي (Self-Monitoring of Blood Glucose)',
      'مستوى السكر التراكمي HbA1c كل 3 أشهر',
      'أعراض نقص السكر (تعرق، رعشة، تسرع قلب، تشوش)',
      'موضع الحقن دورياً لتفادي الحثل الشحمي (Lipodystrophy)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا يرتبط بوجبة محددة لأنه إنسولين قاعدي، لكن يجب ثبات مواعيد ومحتوى الوجبات لتفادي تقلبات السكر.',
      'الكحول يزيد خطر نقص السكر المتأخر؛ يُنصح بالحذر الشديد.'
    ],
    pearls: [
      'لا يُخفف ولا يُمزج أبداً مع إنسولينات أخرى في نفس المحقنة أو المحلول الوريدي.',
      'القلم يُستخدم لمريض واحد فقط حتى مع تغيير الإبرة لتفادي انتقال العدوى.',
      'عند التبديل من NPH إلى جلارجين تقل الجرعة الكلية عادة بنسبة 20% لتفادي نقص السكر الليلي.'
    ]
  },
  {
    id: 'enoxaparin',
    genericName: 'Enoxaparin',
    genericNameAr: 'إينوكسابارين',
    brandNames: ['Clexane', 'Lovenox', 'كليكسان'],
    drugClass: 'Low Molecular Weight Heparin (LMWH)',
    drugClassAr: 'هيبارين منخفض الوزن الجزيئي',
    category: 'Rx',
    route: ['Subcutaneous', 'Intravenous (حالات محددة)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-09',
    targetSpecialties: ['internal_medicine', 'cardiology', 'icu_emergency', 'pharmacy', 'nursing'],
    keyHighlights: [
      'لا يحتاج مراقبة روتينية بـ aPTT بعكس الهيبارين غير المجزأ',
      'تعديل الجرعة إلزامي في القصور الكلوي الشديد (CrCl < 30)',
      'يُحقن تحت الجلد في الأنسجة الدهنية بالبطن مع عدم فرك الموضع بعد الحقن لتقليل الكدمات'
    ],
    indications: [
      {
        indication: 'VTE Prophylaxis (Medical/Surgical patients)',
        indicationAr: 'الوقاية من الجلطات الوريدية',
        adultDose: '40 mg SC once daily.',
        adultDoseAr: '40 مجم تحت الجلد مرة يومياً.',
        route: 'Subcutaneous'
      },
      {
        indication: 'Treatment of DVT/PE',
        indicationAr: 'علاج الجلطات الوريدية العميقة والانصمام الرئوي',
        adultDose: '1 mg/kg SC every 12 hours, or 1.5 mg/kg SC once daily.',
        adultDoseAr: '1 مجم/كجم تحت الجلد كل 12 ساعة، أو 1.5 مجم/كجم تحت الجلد مرة يومياً.',
        route: 'Subcutaneous'
      },
      {
        indication: 'ACS (STEMI/NSTEMI)',
        indicationAr: 'المتلازمة التاجية الحادة',
        adultDose: '1 mg/kg SC every 12 hours (with aspirin); first dose may be preceded by a 30 mg IV bolus in STEMI.',
        adultDoseAr: '1 مجم/كجم تحت الجلد كل 12 ساعة (مع الأسبرين)؛ قد تُسبق الجرعة الأولى بجرعة وريدية 30 مجم في حالات STEMI.',
        route: 'Subcutaneous/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'يستخدم بحذر مع مراقبة سريرية لعلامات النزيف؛ لا تعديل رسمي حتى CrCl 30.',
      crclBelow10: 'إذا CrCl < 30: تخفض جرعة العلاج إلى 1 مجم/كجم مرة يومياً (بدلاً من مرتين)، وجرعة الوقاية إلى 30 مجم مرة يومياً.',
      hemodialysis: 'يُفضل الهيبارين غير المجزأ لقصر مدة تأثيره القابلة للعكس؛ إن استُخدم الإينوكسابارين يُخفض الجرعة بشدة مع مراقبة لصيقة.'
    },
    hepaticAdjustment: 'لا توجد توصية رسمية لتعديل الجرعة، لكن يستخدم بحذر في تليف الكبد المتقدم مع خطر النزيف المرتفع أصلاً.',
    contraindications: [
      'نزيف نشط حاد أو خطر نزيف مرتفع غير مُسيطر عليه',
      'قلة الصفائح المحرّضة بالهيبارين (HIT) الحالية أو بالتاريخ المرضي',
      'حساسية مفرطة للهيبارين أو منتجات الخنازير'
    ],
    blackBoxWarning: 'Spinal/Epidural Hematoma risk with neuraxial anesthesia or spinal puncture in patients receiving LMWH, potentially causing long-term or permanent paralysis.',
    blackBoxWarningAr: 'تحذير الصندوق الأسود: خطر تكوّن ورم دموي فوق أو تحت الجافية عند إجراء تخدير نصفي أو بزل شوكي لمريض يتلقى هيبارين منخفض الوزن الجزيئي، وقد يؤدي لشلل طويل أو دائم.',
    mechanismOfAction: 'Potentiates antithrombin III, predominantly inhibiting Factor Xa (with lesser effect on thrombin/Factor IIa), interrupting the coagulation cascade.',
    mechanismOfActionAr: 'يُعزز نشاط الأنتيثرومبين III فيثبط بشكل أساسي عامل التخثر Xa (مع تأثير أقل على الثرومبين)، مما يقطع سلسلة التخثر.',
    halfLife: '~ 4.5 to 7 hours (SC)',
    monitoringParameters: [
      'علامات النزيف الظاهر والخفي (البراز، البول، موضع الحقن)',
      'تعداد الصفائح الدموية (خاصة بين اليوم 4-14 لاستبعاد HIT)',
      'وظائف الكلى (Creatinine Clearance) قبل البدء وعند أي تغير سريري',
      'مستوى Anti-Xa في حالات خاصة (سمنة شديدة، حمل، قصور كلوي)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية مباشرة مهمة.',
      'تجنب مكملات الأعشاب ذات التأثير المضاد للتخثر (الجنكة، الثوم المركّز) لتقليل خطر النزيف التراكمي.'
    ],
    pearls: [
      'لا يُعطى بالحقن العضلي أبداً بسبب خطر الورم الدموي العضلي.',
      'فقاعة الهواء الموجودة مسبقاً في المحقنة المعبأة جزء من آلية التجهيز ولا تُطرد قبل الحقن في حالة جرعة كاملة المحقنة.',
      'يُفضل التوقف 12 ساعة قبل التخدير النصفي للجرعة الوقائية، و24 ساعة للجرعة العلاجية.'
    ]
  },
  {
    id: 'levothyroxine',
    genericName: 'Levothyroxine',
    genericNameAr: 'ليفوثيروكسين',
    brandNames: ['Synthroid', 'Eltroxin', 'Euthyrox', 'يوثيروكس', 'إلتروكسين'],
    drugClass: 'Thyroid Hormone Replacement (T4)',
    drugClassAr: 'هرمون الغدة الدرقية البديل (T4)',
    category: 'Rx',
    route: ['Oral', 'Intravenous (حالات الغيبوبة المخاطية)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-08',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'يُؤخذ صباحاً على معدة فارغة قبل الطعام بـ 30-60 دقيقة لضمان امتصاص ثابت',
      'له نافذة علاجية ضيقة؛ التبديل بين الماركات التجارية قد يغير الفعالية السريرية',
      'التعديل في الجرعة يحتاج 6-8 أسابيع لتقييم مستوى TSH قبل أي تغيير جديد'
    ],
    indications: [
      {
        indication: 'Primary Hypothyroidism',
        indicationAr: 'قصور الغدة الدرقية الأولي',
        adultDose: '1.6 mcg/kg/day PO once daily; start lower (25-50 mcg) in elderly or cardiac patients.',
        adultDoseAr: '1.6 ميكروجرام/كجم/يوم فموياً مرة يومياً؛ يبدأ بجرعة أقل (25-50 ميكروجرام) لكبار السن أو مرضى القلب.',
        route: 'Oral'
      },
      {
        indication: 'Myxedema Coma',
        indicationAr: 'الغيبوبة المخاطية (نادرة وطارئة)',
        adultDose: '200-400 mcg IV loading dose, then 50-100 mcg IV once daily.',
        adultDoseAr: 'جرعة تحميل وريدية 200-400 ميكروجرام، ثم 50-100 ميكروجرام وريدياً مرة يومياً.',
        route: 'Intravenous'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'لا يتطلب تعديل روتيني؛ يتابع TSH حسب الاستجابة السريرية.',
      crclBelow10: 'لا يتطلب تعديل جرعة مرتبط بالكلى مباشرة؛ الفشل الكلوي المزمن قد يصاحبه قصور غدة درقية يحتاج جرعة معدلة سريرياً لا كلوياً.',
      hemodialysis: 'لا يُزال بالغسيل الكلوي بشكل مؤثر؛ لا حاجة لجرعة إضافية بعد الجلسة.'
    },
    hepaticAdjustment: 'يستخدم بحذر في القصور الكبدي الشديد لأن استقلاب الهرمون قد يتأثر؛ يُتابع سريرياً بدون تعديل جرعة ثابت.',
    contraindications: [
      'قصور كظري غير معالج (يجب تعويض الكورتيزون أولاً لتفادي أزمة كظرية)',
      'نوبة قلبية حادة غير مُستقرة',
      'فرط نشاط الغدة الدرقية غير المُعالج'
    ],
    mechanismOfAction: 'Synthetic T4 that is peripherally converted to active T3, binding nuclear thyroid hormone receptors to regulate metabolic rate, growth, and development.',
    mechanismOfActionAr: 'هرمون T4 مُصنّع يتحول محيطياً إلى الشكل الفعال T3، ويرتبط بمستقبلات الهرمون النووية لتنظيم معدل التمثيل الغذائي والنمو.',
    halfLife: '~ 6 to 7 days',
    monitoringParameters: [
      'مستوى TSH بعد 6-8 أسابيع من بدء أو تعديل الجرعة',
      'أعراض فرط النشاط الدرقي عند الجرعة الزائدة (خفقان، أرق، فقدان وزن)',
      'تخطيط القلب الكهربائي في مرضى القلب عند بدء العلاج'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يتفاعل بشدة مع الكالسيوم والحديد ومضادات الحموضة المحتوية على ألمنيوم/مغنيسيوم؛ يُفصل بينهما 4 ساعات على الأقل.',
      'القهوة ومنتجات الصويا قد تقلل الامتصاص إذا تم تناولها بالقرب من موعد الجرعة.',
      'يجب تناوله بثبات بالنسبة للوجبات؛ تغيير التوقيت يغير مستوى الامتصاص.'
    ],
    pearls: [
      'التبديل بين ماركة وأخرى (حتى لو نفس الجرعة الرقمية) قد يستدعي إعادة فحص TSH بعد 6 أسابيع.',
      'في كبار السن ومرضى القلب التاجي: البدء بجرعة منخفضة جداً (12.5-25 ميكروجرام) والتصعيد التدريجي لتفادي نوبة قلبية أو عدم انتظام ضربات.',
      'الحمل بوزن الجسم المثالي (لا الفعلي) هو الأساس لحساب الجرعة في السمنة لتفادي جرعة زائدة.'
    ]
  },
  {
    id: 'omeprazole',
    genericName: 'Omeprazole',
    genericNameAr: 'أوميبرازول',
    brandNames: ['Losec', 'Gasec', 'Omez', 'لوسيك', 'جاسيك'],
    drugClass: 'Proton Pump Inhibitor (PPI)',
    drugClassAr: 'مثبط مضخة البروتون',
    category: 'Rx',
    route: ['Oral', 'Intravenous'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-07',
    targetSpecialties: ['internal_medicine', 'cardiology', 'pharmacy', 'nursing'],
    keyHighlights: [
      'يُثبط بشدة إنزيم CYP2C19 الكبدي مما يقلل تفعيل الكلوبيدوجريل (تفاعل دوائي خطير)',
      'الاستخدام طويل المدى (> سنة) مرتبط بنقص فيتامين B12 والمغنيسيوم وزيادة خطر كسور العظام',
      'يُؤخذ قبل الطعام بـ 30-60 دقيقة لتحقيق أقصى تثبيط لإفراز الحمض'
    ],
    indications: [
      {
        indication: 'GERD / Peptic Ulcer Disease',
        indicationAr: 'الارتجاع المريئي والقرحة الهضمية',
        adultDose: '20-40 mg PO once daily for 4-8 weeks.',
        adultDoseAr: '20-40 مجم فموياً مرة يومياً لمدة 4-8 أسابيع.',
        route: 'Oral'
      },
      {
        indication: 'H. pylori Eradication (Triple Therapy)',
        indicationAr: 'علاج جرثومة المعدة (العلاج الثلاثي)',
        adultDose: '20 mg PO twice daily with Amoxicillin and Clarithromycin for 10-14 days.',
        adultDoseAr: '20 مجم فموياً مرتين يومياً مع أموكسيسيلين وكلاريثروميسين لمدة 10-14 يوم.',
        route: 'Oral'
      },
      {
        indication: 'Stress Ulcer Prophylaxis (ICU)',
        indicationAr: 'الوقاية من قرحة الإجهاد في العناية المركزة',
        adultDose: '40 mg IV once daily.',
        adultDoseAr: '40 مجم وريدياً مرة يومياً.',
        route: 'Intravenous'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'لا يتطلب تعديل الجرعة.',
      crclBelow10: 'لا يتطلب تعديل الجرعة (استقلاب كبدي بالأساس).',
      hemodialysis: 'لا يُزال بالغسيل الكلوي؛ لا حاجة لجرعة إضافية.'
    },
    hepaticAdjustment: 'في القصور الكبدي الشديد: لا تتجاوز الجرعة 20 مجم يومياً مع مراقبة سريرية.',
    contraindications: [
      'فرط الحساسية المعروف للأوميبرازول أو مثبطات مضخة البروتون الأخرى',
      'الاستخدام المتزامن مع ريلبيفيرين (Rilpivirine) بسبب نقص الامتصاص الحرج'
    ],
    mechanismOfAction: 'Irreversibly inhibits the H+/K+ ATPase pump on gastric parietal cells, blocking the final step of gastric acid secretion.',
    mechanismOfActionAr: 'يُثبط بشكل لا رجعي مضخة H+/K+ ATPase في خلايا جدار المعدة، فيوقف الخطوة الأخيرة لإفراز حمض المعدة.',
    halfLife: '~ 0.5 to 1 hour (duration of acid suppression up to 24-72 hours)',
    monitoringParameters: [
      'الأعراض الهضمية والاستجابة العلاجية',
      'مستوى المغنيسيوم وفيتامين B12 في الاستخدام طويل المدى',
      'مراجعة الكلوبيدوجريل أو أي أدوية تعتمد على CYP2C19 عند بدء العلاج'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'يُنصح بتناوله قبل أول وجبة في اليوم بـ 30-60 دقيقة لأقصى فعالية.',
      'لا توجد تفاعلات غذائية خطيرة مباشرة، لكن الاستخدام المزمن قد يقلل امتصاص الحديد وB12 من الطعام.'
    ],
    pearls: [
      'عند مرضى الدعامات القلبية الذين يحتاجون PPI: يُفضل Pantoprazole بدلاً من Omeprazole لتقليل التعارض مع الكلوبيدوجريل.',
      'التوقف المفاجئ بعد استخدام طويل قد يسبب فرط إفراز حمض ارتدادي (Rebound Acid Hypersecretion).'
    ]
  },
  {
    id: 'amiodarone',
    genericName: 'Amiodarone',
    genericNameAr: 'أميودارون',
    brandNames: ['Cordarone', 'Pacerone', 'كوردارون'],
    drugClass: 'Class III Antiarrhythmic',
    drugClassAr: 'مضاد لاضطراب نظم القلب - الفئة الثالثة',
    category: 'Rx',
    route: ['Oral', 'Intravenous'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-06',
    targetSpecialties: ['cardiology', 'icu_emergency', 'internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'نصف عمر طويل جداً (أسابيع) يستمر تأثيره وتفاعلاته لفترة طويلة بعد التوقف',
      'يحتاج جرعة تحميل عالية ثم جرعة صيانة منخفضة بسبب تراكمه الواسع في الأنسجة الدهنية',
      'متابعة وظائف الغدة الدرقية والكبد والرئة دورية إلزامية طوال فترة العلاج'
    ],
    indications: [
      {
        indication: 'Ventricular Fibrillation / Pulseless VT (ACLS)',
        indicationAr: 'الرجفان البطيني أو تسرع البطين بدون نبض (الإنعاش القلبي)',
        adultDose: '300 mg IV push, then 150 mg IV push if needed.',
        adultDoseAr: '300 مجم حقن وريدي سريع، ثم 150 مجم إضافية عند الحاجة.',
        route: 'Intravenous'
      },
      {
        indication: 'Atrial Fibrillation (Rhythm Control)',
        indicationAr: 'الرجفان الأذيني (ضبط النظم)',
        adultDose: 'Loading: 400 mg PO 2-3 times daily for 1-4 weeks, then taper to 200 mg once daily maintenance; or IV load 150 mg over 10 min then infusion.',
        adultDoseAr: 'جرعة تحميل: 400 مجم فموياً 2-3 مرات يومياً لمدة 1-4 أسابيع، ثم تخفف إلى 200 مجم يومياً للمداومة؛ أو تحميل وريدي 150 مجم خلال 10 دقائق ثم تسريب مستمر.',
        route: 'Oral/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة (استقلاب كبدي بالكامل تقريباً).',
      crcl10to50: 'لا يتطلب تعديل الجرعة.',
      crclBelow10: 'لا يتطلب تعديل الجرعة؛ يُتابع سريرياً.',
      hemodialysis: 'لا يُزال بالغسيل الكلوي؛ لا حاجة لجرعة إضافية.'
    },
    hepaticAdjustment: 'يستخدم بحذر شديد في أمراض الكبد؛ يُراقب إنزيمات الكبد قبل البدء وكل 6 أشهر لخطر التليف الكبدي الدوائي.',
    contraindications: [
      'بطء القلب الشديد أو إحصار القلب من الدرجة الثانية/الثالثة بدون جهاز تنظيم ضربات',
      'صدمة قلبية (Cardiogenic Shock)',
      'فرط حساسية معروف لليود (قد يسبب تفاعل تحسسي لاحتوائه على اليود)'
    ],
    blackBoxWarning: 'Pulmonary toxicity (interstitial pneumonitis/fibrosis), hepatotoxicity, and proarrhythmic effects including worsening of existing arrhythmias, particularly with IV use.',
    blackBoxWarningAr: 'تحذير الصندوق الأسود: سمية رئوية (التهاب أو تليف رئوي خلالي)، سمية كبدية، وتأثير مُحفّز لاضطراب النظم قد يُفاقم عدم انتظام ضربات القلب الموجود أصلاً، خصوصاً مع الاستخدام الوريدي.',
    mechanismOfAction: 'Blocks potassium channels (prolonging repolarization/QT), with additional sodium channel, beta-adrenergic, and calcium channel blocking properties (multi-channel antiarrhythmic).',
    mechanismOfActionAr: 'يُثبط قنوات البوتاسيوم (يُطيل إعادة الاستقطاب وفترة QT)، مع تأثيرات إضافية على قنوات الصوديوم ومستقبلات بيتا وقنوات الكالسيوم (مضاد نظم متعدد القنوات).',
    halfLife: '~ 20 to 100 days (extensive tissue accumulation)',
    monitoringParameters: [
      'تخطيط القلب الكهربائي (فترة QT) بشكل دوري',
      'وظائف الغدة الدرقية (TSH, Free T4) كل 6 أشهر',
      'وظائف الكبد (ALT/AST) كل 6 أشهر',
      'أشعة صدر سنوية ووظائف الرئة عند ظهور أي أعراض تنفسية',
      'فحص العين (ترسبات قرنية) عند الاستخدام طويل المدى'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'يتفاعل بشدة مع عصير الجريب فروت (Grapefruit) الذي يزيد تركيزه بالدم عبر تثبيط CYP3A4.',
      'يزيد تركيز الوارفارين والديجوكسين بشكل ملحوظ ويحتاج تقليل جرعتهما عند البدء المتزامن.'
    ],
    pearls: [
      'عند إضافته لمريض على وارفارين: تُخفض جرعة الوارفارين تلقائياً 30-50% عند البدء مع مراقبة لصيقة لـ INR.',
      'يحتوي على مكون اليود؛ قد يُسبب قصور أو فرط نشاط درقي حتى بعد التوقف عن الدواء بفترة طويلة.',
      'التسريب الوريدي السريع قد يسبب هبوط ضغط حاد؛ يُعطى ببطء عبر مضخة تسريب مع مراقبة الضغط المستمرة.'
    ]
  },
  {
    id: 'furosemide',
    genericName: 'Furosemide',
    genericNameAr: 'فوروسيميد',
    brandNames: ['Lasix', 'لازكس'],
    drugClass: 'Loop Diuretic',
    drugClassAr: 'مدر بول من فئة العروة',
    category: 'Rx',
    route: ['Oral', 'Intravenous'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-05',
    targetSpecialties: ['cardiology', 'internal_medicine', 'icu_emergency', 'nursing'],
    keyHighlights: [
      'الخط الأول لعلاج الاحتقان الحاد في قصور القلب والوذمة الرئوية',
      'الجرعة الوريدية تعادل تقريباً ضعف الفاعلية مقارنة بنفس الجرعة الفموية',
      'يسبب فقدان البوتاسيوم والمغنيسيوم، يحتاج تعويض دوري ومراقبة الشوارد'
    ],
    indications: [
      {
        indication: 'Edema (Heart Failure, Hepatic, Renal)',
        indicationAr: 'الوذمة الناتجة عن قصور القلب أو الكبد أو الكلى',
        adultDose: '20-80 mg PO/IV once or twice daily; titrate based on response.',
        adultDoseAr: '20-80 مجم فموياً أو وريدياً مرة أو مرتين يومياً، مع تعديل الجرعة حسب الاستجابة.',
        route: 'Oral/IV'
      },
      {
        indication: 'Acute Pulmonary Edema',
        indicationAr: 'الوذمة الرئوية الحادة',
        adultDose: '40-80 mg IV push, may repeat or double dose if inadequate response within 1-2 hours.',
        adultDoseAr: '40-80 مجم حقن وريدي سريع، ويمكن تكرار أو مضاعفة الجرعة إذا كانت الاستجابة غير كافية خلال 1-2 ساعة.',
        route: 'Intravenous'
      },
      {
        indication: 'Hypertension (adjunct)',
        indicationAr: 'ارتفاع ضغط الدم (كعلاج مساعد)',
        adultDose: '20-40 mg PO twice daily.',
        adultDoseAr: '20-40 مجم فموياً مرتين يومياً.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'قد يحتاج جرعات أعلى للوصول لنفس الفاعلية الإدرارية؛ يُعدّل حسب الاستجابة السريرية.',
      crclBelow10: 'يحتاج جرعات أعلى بكثير (قد تصل 160-200 مجم) مع مراقبة لصيقة للسوائل والشوارد.',
      hemodialysis: 'محدود الفائدة في المرضى عديمي البول (Anuric)؛ يُستخدم أحياناً للمساعدة في إزالة السوائل الزائدة بين الجلسات.'
    },
    hepaticAdjustment: 'يستخدم بحذر في تليف الكبد مع الاستسقاء؛ البدء بجرعة منخفضة لتفادي اعتلال الدماغ الكبدي الناتج عن اضطراب الشوارد.',
    contraindications: [
      'انقطاع البول التام (Anuria) غير المستجيب للعلاج',
      'فرط الحساسية المعروف للفوروسيميد أو السلفوناميدات (حساسية متصالبة نادرة)',
      'الجفاف الشديد أو نقص حجم الدم غير المصحح'
    ],
    mechanismOfAction: 'Inhibits the Na-K-2Cl cotransporter in the thick ascending loop of Henle, causing profound natriuresis and diuresis.',
    mechanismOfActionAr: 'يثبط ناقل الصوديوم-بوتاسيوم-كلوريد المشترك في الفرع الصاعد السميك من عروة هينلي، مسبباً إدراراً قوياً للصوديوم والماء.',
    halfLife: '~ 2 hours (prolonged in renal impairment)',
    monitoringParameters: [
      'الشوارد (البوتاسيوم، الصوديوم، المغنيسيوم) بشكل دوري',
      'وظائف الكلى (Creatinine, BUN)',
      'الوزن اليومي وعلامات الجفاف أو الاحتقان',
      'ضغط الدم عند الوقوف (Orthostatic hypotension)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُفضل تناوله صباحاً لتفادي كثرة التبول ليلاً.',
      'يُنصح بزيادة تناول الأطعمة الغنية بالبوتاسيوم (الموز) لتعويض الفقد ما لم يُمنع طبياً.'
    ],
    pearls: [
      'عند الإعطاء الوريدي السريع (خاصة بجرعات عالية) قد يسبب سمية أذنية عابرة (Ototoxicity)؛ يُعطى ببطء لا يتجاوز 4 مجم/دقيقة.',
      'مقاومة الفوروسيميد (Diuretic Resistance) تُعالج بإضافة مدر ثيازيدي (مثل ميتولازون) للحصول على حصار متسلسل للنيفرون (Sequential Nephron Blockade).',
      'مع مثبطات SGLT2 (إمباجليفلوزين): تأثير إدراري تراكمي يزيد خطر الجفاف وانخفاض الضغط الانتصابي لدى كبار السن.'
    ]
  },
  {
    id: 'ramipril_enalapril',
    genericName: 'Ramipril / Enalapril (ACE Inhibitors)',
    genericNameAr: 'راميبريل / إينالابريل (مثبطات الإنزيم المحول للأنجيوتنسين)',
    brandNames: ['Tritace', 'Renitec', 'Amprace', 'تريتاس', 'رينيتك'],
    drugClass: 'ACE Inhibitor',
    drugClassAr: 'مثبط الإنزيم المحول للأنجيوتنسين (ACEi)',
    category: 'Rx',
    route: ['Oral'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-04',
    targetSpecialties: ['cardiology', 'internal_medicine', 'nursing'],
    keyHighlights: [
      'حجر أساس في علاج ارتفاع ضغط الدم وقصور القلب وحماية الكلى لدى مرضى السكري',
      'يسبب سعالاً جافاً مزعجاً لدى 10-20% من المرضى بسبب تراكم البراديكينين',
      'يتطلب غسيل 36 ساعة قبل البدء بإنترستو (Sacubitril/Valsartan) لتفادي الوذمة الوعائية'
    ],
    indications: [
      {
        indication: 'Hypertension',
        indicationAr: 'ارتفاع ضغط الدم',
        adultDose: 'Ramipril: Start 2.5 mg PO once daily, titrate to 10 mg daily. Enalapril: Start 5 mg PO once/twice daily, titrate to 40 mg daily.',
        adultDoseAr: 'راميبريل: البدء بـ 2.5 مجم فموياً مرة يومياً، والتصعيد حتى 10 مجم يومياً. إينالابريل: البدء بـ 5 مجم مرة أو مرتين يومياً حتى 40 مجم يومياً.',
        route: 'Oral'
      },
      {
        indication: 'Heart Failure with Reduced Ejection Fraction',
        indicationAr: 'قصور القلب مع انخفاض الكسر القذفي',
        adultDose: 'Ramipril: Start 1.25-2.5 mg PO daily, target 5 mg BID or 10 mg daily.',
        adultDoseAr: 'راميبريل: البدء بـ 1.25-2.5 مجم يومياً، والوصول لجرعة مستهدفة 5 مجم مرتين يومياً أو 10 مجم يومياً.',
        route: 'Oral'
      },
      {
        indication: 'Diabetic Nephropathy / Renal Protection',
        indicationAr: 'الحماية الكلوية لدى مرضى السكري',
        adultDose: 'Ramipril 5-10 mg PO once daily.',
        adultDoseAr: 'راميبريل 5-10 مجم فموياً مرة يومياً.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة الابتدائية.',
      crcl10to50: 'يبدأ بنصف الجرعة الاعتيادية مع مراقبة لصيقة للبوتاسيوم ووظائف الكلى.',
      crclBelow10: 'يُستخدم بحذر شديد بجرعات منخفضة جداً؛ قد يُفضل تجنبه في الفشل الكلوي المتقدم غير المغسول.',
      hemodialysis: 'يُعطى بعد جلسة الغسيل (قابل للإزالة جزئياً بالغسيل)؛ جرعة مخفضة مع مراقبة الضغط.'
    },
    hepaticAdjustment: 'لا يتطلب تعديل جرعة روتيني، لكن يُراقب سريرياً في القصور الكبدي الشديد.',
    contraindications: [
      'تاريخ سابق للوذمة الوعائية المرتبطة بمثبطات ACE',
      'الحمل (مُشوّه للجنين في الثلثين الثاني والثالث)',
      'تضيق الشريان الكلوي الثنائي الشديد',
      'الاستخدام المتزامن مع Sacubitril/Valsartan أو خلال أقل من 36 ساعة من التحول بينهما'
    ],
    blackBoxWarning: 'Fetal toxicity: can cause injury and death to the developing fetus when used during pregnancy.',
    blackBoxWarningAr: 'تحذير الصندوق الأسود: سمية جنينية خطيرة قد تؤدي لإصابة الجنين أو وفاته عند الاستخدام أثناء الحمل.',
    mechanismOfAction: 'Inhibits angiotensin-converting enzyme, reducing angiotensin II formation and aldosterone secretion, while increasing bradykinin levels.',
    mechanismOfActionAr: 'يثبط إنزيم تحويل الأنجيوتنسين فيقلل تكوّن الأنجيوتنسين II وإفراز الألدوستيرون، مع ارتفاع مستوى البراديكينين المسبب للسعال والوذمة الوعائية.',
    halfLife: 'Ramipril (active metabolite ramiprilat): ~ 13-17 hours; Enalapril (active metabolite enalaprilat): ~ 11 hours',
    monitoringParameters: [
      'وظائف الكلى والبوتاسيوم خلال أسبوع إلى أسبوعين من البدء أو تعديل الجرعة',
      'ضغط الدم بشكل دوري',
      'ظهور السعال الجاف أو علامات الوذمة الوعائية (تورم الوجه/الشفاه/الحنجرة)'
    ],
    pregnancyCategory: 'X',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'تجنب بدائل الملح الغنية بالبوتاسيوم ومكملات البوتاسيوم لتفادي فرط بوتاسيوم الدم.',
      'لا يتأثر الامتصاص بشكل كبير بالطعام، يمكن تناوله مع أو بدون طعام.'
    ],
    pearls: [
      'السعال الجاف المرتبط بـ ACEi لا يستجيب لتغيير الجرعة؛ الحل الوحيد هو التحويل لحاصرات مستقبلات الأنجيوتنسين (ARBs).',
      'يجب فترة غسيل 36 ساعة كاملة عند التحويل من أو إلى إنترستو (Sacubitril/Valsartan) لتفادي الوذمة الوعائية القاتلة.',
      'الجمع مع مدرات بوتاسيوم أو مثبطات الألدوستيرون (سبيرونولاكتون) يحتاج مراقبة لصيقة لفرط بوتاسيوم الدم.'
    ]
  },
  {
    id: 'simvastatin_atorvastatin',
    genericName: 'Simvastatin / Atorvastatin (Statins)',
    genericNameAr: 'سيمفاستاتين / أتورفاستاتين (الستاتينات)',
    brandNames: ['Zocor', 'Lipitor', 'زوكور', 'ليبيتور'],
    drugClass: 'HMG-CoA Reductase Inhibitor',
    drugClassAr: 'مثبط إنزيم HMG-CoA Reductase',
    category: 'Rx',
    route: ['Oral (مساءً يُفضل للسيمفاستاتين)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-03',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'يُستقلب معظمها (خاصة سيمفاستاتين) عبر CYP3A4 مما يجعلها عرضة لتفاعلات خطيرة مع مثبطات هذا الإنزيم',
      'خطر الاعتلال العضلي وانحلال العضلات يزيد بشكل كبير مع الجرعات العالية أو التفاعلات الدوائية',
      'سيمفاستاتين يُفضل إعطاؤه مساءً لتزامنه مع ذروة تصنيع الكوليسترول الكبدي ليلاً'
    ],
    indications: [
      {
        indication: 'Primary Prevention of Cardiovascular Disease (Hyperlipidemia)',
        indicationAr: 'الوقاية الأولية من أمراض القلب (ارتفاع الدهون)',
        adultDose: 'Atorvastatin: 10-20 mg PO once daily. Simvastatin: 10-20 mg PO once daily (evening).',
        adultDoseAr: 'أتورفاستاتين: 10-20 مجم فموياً مرة يومياً. سيمفاستاتين: 10-20 مجم مرة يومياً مساءً.',
        route: 'Oral'
      },
      {
        indication: 'High-Intensity Statin Therapy (Post-ACS, High ASCVD Risk)',
        indicationAr: 'علاج ستاتيني عالي الكثافة (بعد متلازمة تاجية حادة)',
        adultDose: 'Atorvastatin 40-80 mg PO once daily.',
        adultDoseAr: 'أتورفاستاتين 40-80 مجم فموياً مرة يومياً.',
        route: 'Oral'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'لا يتطلب تعديل جرعة روتيني لأتورفاستاتين؛ يُحذر من جرعات سيمفاستاتين العالية.',
      crclBelow10: 'يُبدأ بجرعة منخفضة مع مراقبة لصيقة للأعراض العضلية.',
      hemodialysis: 'لا يُزال بالغسيل الكلوي؛ لا حاجة لجرعة إضافية.'
    },
    hepaticAdjustment: 'مضاد استطباب في أمراض الكبد النشطة أو الارتفاع غير المبرر لإنزيمات الكبد (> 3 أضعاف الحد الطبيعي).',
    contraindications: [
      'أمراض الكبد النشطة أو الحاد',
      'الحمل والرضاعة',
      'الاستخدام المتزامن مع مثبطات CYP3A4 القوية (مثل باكسلوفيد) خاصة مع سيمفاستاتين'
    ],
    mechanismOfAction: 'Competitively inhibits HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol synthesis, upregulating LDL receptors.',
    mechanismOfActionAr: 'يثبط تنافسياً إنزيم HMG-CoA reductase المحدد لسرعة تصنيع الكوليسترول الكبدي، مما يزيد التعبير عن مستقبلات LDL ويخفض مستواه بالدم.',
    halfLife: 'Atorvastatin: ~ 14 hours (active metabolites up to 20-30 hours); Simvastatin: ~ 2-3 hours',
    monitoringParameters: [
      'صورة الدهون (LDL, HDL, Triglycerides) بعد 4-12 أسبوع من بدء العلاج',
      'إنزيمات الكبد (ALT) عند وجود أعراض أو عوامل خطورة',
      'أعراض الاعتلال العضلي (ألم أو ضعف عضلي غير مبرر) وفحص CK عند الاشتباه'
    ],
    pregnancyCategory: 'X',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'عصير الجريب فروت (خاصة مع سيمفاستاتين) يثبط CYP3A4 المعوي ويرفع التركيز الدموي بشكل خطير؛ يُمنع تماماً.',
      'لا يتأثر الأتورفاستاتين بعصير الجريب فروت بنفس درجة السيمفاستاتين لكن يُنصح بالحذر.'
    ],
    pearls: [
      'مع باكسلوفيد (مضاد كورونا): يجب إيقاف سيمفاستاتين/لوفاستاتين تماماً، وإيقاف أتورفاستاتين مؤقتاً خلال وبعد العلاج بـ3-5 أيام.',
      'الاعتلال العضلي البسيط (ألم بدون ارتفاع CK كبير) لا يستدعي دائماً وقف الدواء؛ يمكن تجربة ستاتين آخر أو تقليل الجرعة.',
      'روزوفاستاتين وبرافاستاتين أقل اعتماداً على CYP3A4 ويُعتبران بديلاً أكثر أماناً عند وجود تفاعلات دوائية محتملة.'
    ]
  },
  {
    id: 'valproic_acid',
    genericName: 'Valproic Acid / Sodium Valproate',
    genericNameAr: 'حمض الفالبرويك / فالبروات الصوديوم',
    brandNames: ['Depakine', 'Depakote', 'ديباكين'],
    drugClass: 'Anticonvulsant / Mood Stabilizer',
    drugClassAr: 'مضاد صرع ومثبت مزاج',
    category: 'Rx',
    route: ['Oral', 'Intravenous'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-02',
    targetSpecialties: ['internal_medicine', 'icu_emergency', 'pharmacy', 'pediatrics'],
    keyHighlights: [
      'خطر كارثي من انخفاض مستواه الدموي بنسبة تصل 80-90% خلال 24 ساعة عند الجمع مع الكاربابينيمات',
      'مُشوّه للجنين بدرجة عالية (عيوب الأنبوب العصبي)؛ مضاد استطباب في الحمل لعلاج الصداع النصفي',
      'يحتاج مراقبة وظائف الكبد والصفائح الدموية دورياً خاصة في بداية العلاج'
    ],
    indications: [
      {
        indication: 'Epilepsy (Generalized & Focal Seizures)',
        indicationAr: 'الصرع (النوبات المعممة والبؤرية)',
        adultDose: '10-15 mg/kg/day PO in divided doses, titrate weekly to 1000-2000 mg/day (target level 50-100 mcg/mL).',
        adultDoseAr: '10-15 مجم/كجم/يوم فموياً مقسمة على جرعات، مع رفع الجرعة أسبوعياً حتى 1000-2000 مجم/يوم (المستوى المستهدف 50-100 ميكروجرام/مل).',
        route: 'Oral'
      },
      {
        indication: 'Bipolar Disorder (Acute Mania)',
        indicationAr: 'اضطراب ثنائي القطب (نوبة الهوس الحادة)',
        adultDose: '750 mg/day PO in divided doses, titrate to max 60 mg/kg/day.',
        adultDoseAr: '750 مجم/يوم فموياً مقسمة على جرعات، مع رفع الجرعة حتى الحد الأقصى 60 مجم/كجم/يوم.',
        route: 'Oral'
      },
      {
        indication: 'Status Epilepticus (IV)',
        indicationAr: 'الحالة الصرعية المستمرة (وريدياً)',
        adultDose: '20-40 mg/kg IV loading dose over 10 minutes, then maintenance infusion.',
        adultDoseAr: 'جرعة تحميل وريدية 20-40 مجم/كجم خلال 10 دقائق، ثم تسريب مستمر للمداومة.',
        route: 'Intravenous'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة.',
      crcl10to50: 'لا يتطلب تعديل جرعة روتيني؛ مراقبة المستوى الحر (Free level) إذا كان نقص الألبومين موجوداً.',
      crclBelow10: 'قد يحتاج تخفيض الجرعة مع مراقبة المستوى الحر للدواء وليس الكلي فقط.',
      hemodialysis: 'يُزال جزئياً بالغسيل الكلوي؛ قد يحتاج جرعة إضافية بعد الجلسة.'
    },
    hepaticAdjustment: 'مضاد استطباب في أمراض الكبد الحادة أو الشديدة؛ يُراقب ALT/AST قبل البدء وبشكل دوري خاصة في أول 6 أشهر.',
    contraindications: [
      'أمراض الكبد النشطة أو تاريخ سابق للسمية الكبدية مع فالبروات',
      'اضطرابات دورة اليوريا (Urea Cycle Disorders)',
      'الحمل لعلاج الصداع النصفي (مضاد استطباب قطعي)',
      'الاستخدام المتزامن مع الكاربابينيمات (ميروبينيم، إيميبينيم)'
    ],
    blackBoxWarning: 'Hepatotoxicity (fatal in rare cases), teratogenicity (neural tube defects), and pancreatitis.',
    blackBoxWarningAr: 'تحذير الصندوق الأسود: سمية كبدية (قد تكون قاتلة في حالات نادرة)، تشوهات جنينية (عيوب الأنبوب العصبي)، والتهاب البنكرياس الحاد.',
    mechanismOfAction: 'Increases GABAergic transmission and blocks voltage-gated sodium channels, stabilizing neuronal membranes and reducing seizure activity.',
    mechanismOfActionAr: 'يزيد النقل العصبي عبر GABA ويثبط قنوات الصوديوم المعتمدة على الفولتية، مما يثبط الغشاء العصبي ويقلل النشاط التشنجي.',
    halfLife: '~ 9 to 16 hours',
    monitoringParameters: [
      'المستوى الدموي العلاجي (50-100 mcg/mL) خاصة عند تغيير الجرعة أو إضافة أدوية متفاعلة',
      'وظائف الكبد (ALT, AST, Ammonia) خاصة في الأشهر الستة الأولى',
      'تعداد الصفائح الدموية (قد يسبب قلة الصفائح)',
      'علامات التهاب البنكرياس (ألم بطني حاد)'
    ],
    pregnancyCategory: 'X',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'لا توجد تفاعلات غذائية كبرى؛ يُفضل تناوله مع الطعام لتقليل اضطرابات المعدة.'
    ],
    pearls: [
      'تفاعل الكاربابينيمات (ميروبينيم) مع الفالبروات خطير جداً ولا يُعالج برفع الجرعة؛ يجب تبديل المضاد الحيوي أو مضاد الصرع.',
      'ارتفاع الأمونيا مع أعراض تخليط ذهني (حتى مع وظائف كبد طبيعية) قد يشير لاعتلال دماغي ناتج عن فرط الأمونيا ويستدعي التقييم الفوري.',
      'يُستخدم بحذر شديد في الأطفال أقل من سنتين لارتفاع خطر السمية الكبدية القاتلة.'
    ]
  },
  {
    id: 'ibuprofen_ketorolac',
    genericName: 'Ibuprofen / Ketorolac (NSAIDs)',
    genericNameAr: 'إيبوبروفين / كيتورولاك (مضادات الالتهاب غير الستيرويدية)',
    brandNames: ['Brufen', 'Toradol', 'بروفين', 'تورادول'],
    drugClass: 'Nonsteroidal Anti-Inflammatory Drug (NSAID)',
    drugClassAr: 'مضاد التهاب غير ستيرويدي',
    category: 'Rx',
    route: ['Oral', 'Intravenous/Intramuscular (كيتورولاك)'],
    isFeaturedToday: false,
    dateFeatured: '2026-08-01',
    targetSpecialties: ['internal_medicine', 'icu_emergency', 'pharmacy', 'nursing'],
    keyHighlights: [
      'كيتورولاك له حد أقصى صارم لمدة الاستخدام (5 أيام إجمالاً) لخطورة النزيف الهضمي والكلوي',
      'يرفع خطر النزيف بشدة عند الجمع مع مضادات التخثر (وارفارين، أبيكسابان)',
      'يُجنّب قدر الإمكان في المرضى كبار السن أو ذوي القصور الكلوي'
    ],
    indications: [
      {
        indication: 'Mild to Moderate Pain & Inflammation',
        indicationAr: 'الألم والالتهاب الخفيف إلى المتوسط',
        adultDose: 'Ibuprofen 400-800 mg PO every 6-8 hours (max 3200 mg/day).',
        adultDoseAr: 'إيبوبروفين 400-800 مجم فموياً كل 6-8 ساعات (الحد الأقصى 3200 مجم/يوم).',
        route: 'Oral'
      },
      {
        indication: 'Acute Moderate-Severe Pain (Postoperative)',
        indicationAr: 'الألم الحاد المتوسط إلى الشديد (بعد العمليات)',
        adultDose: 'Ketorolac 30 mg IV/IM every 6 hours (max 120 mg/day); max duration 5 days total.',
        adultDoseAr: 'كيتورولاك 30 مجم وريدياً أو عضلياً كل 6 ساعات (الحد الأقصى 120 مجم/يوم)؛ الحد الأقصى للاستخدام 5 أيام إجمالاً.',
        route: 'IV/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'لا يتطلب تعديل الجرعة، لكن يُستخدم بأقل جرعة فعالة ولأقصر مدة.',
      crcl10to50: 'يُجنّب قدر الإمكان؛ إن لزم الاستخدام، جرعات منخفضة مع مراقبة لصيقة لوظائف الكلى.',
      crclBelow10: 'مضاد استطباب نسبي؛ خطر مرتفع لتدهور وظائف الكلى الحاد.',
      hemodialysis: 'يُجنّب الاستخدام؛ خطر مرتفع للنزيف ولا يُزال بفعالية بالغسيل.'
    },
    hepaticAdjustment: 'يستخدم بحذر في القصور الكبدي؛ يُجنّب في أمراض الكبد المتقدمة لخطر النزيف واحتباس السوائل.',
    contraindications: [
      'قرحة هضمية نشطة أو نزيف هضمي حديث',
      'القصور الكلوي المتقدم أو الجفاف الشديد',
      'الاستخدام حول عملية جراحة المجازة التاجية (CABG)',
      'الثلث الثالث من الحمل (إغلاق مبكر للقناة الشريانية الجنينية)'
    ],
    mechanismOfAction: 'Nonselectively inhibits cyclooxygenase enzymes (COX-1 and COX-2), reducing prostaglandin synthesis responsible for pain, inflammation, and fever.',
    mechanismOfActionAr: 'يثبط إنزيمي الأكسدة الحلقية COX-1 وCOX-2 بشكل غير انتقائي، مما يقلل تصنيع البروستاجلاندين المسؤول عن الألم والالتهاب والحمى.',
    halfLife: 'Ibuprofen: ~ 2 hours; Ketorolac: ~ 5 hours',
    monitoringParameters: [
      'وظائف الكلى (Creatinine) خاصة قبل البدء وفي الاستخدام المطول',
      'علامات النزيف الهضمي (البراز الأسود، فقر الدم)',
      'ضغط الدم (قد يسبب احتباس سوائل وارتفاع ضغط)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُفضل تناوله مع الطعام لتقليل تهيج المعدة.',
      'تجنب الكحول لتقليل خطر النزيف الهضمي.'
    ],
    pearls: [
      'كيتورولاك ممنوع استخدامه لأكثر من 5 أيام إجمالاً (وريدي + فموي مجتمعين) بسبب التراكم السام.',
      'مع مضادات التخثر (أبيكسابان، وارفارين): خطر نزيف مضاعف؛ يُفضل الباراسيتامول كبديل آمن للألم.',
      'يُعتبر كيتورولاك مسكناً قوياً يعادل فاعلية بعض الأفيونيات دون آثارها الإدمانية، لكن مخاطره الهضمية والكلوية أعلى بكثير من NSAIDs الفموية الاعتيادية.'
    ]
  },
  {
    id: 'contrast_media',
    genericName: 'Iodinated Radiocontrast Media',
    genericNameAr: 'الصبغة الإشعاعية اليودية (صبغة الأشعة المقطعية)',
    brandNames: ['Omnipaque', 'Visipaque', 'أومنيباك', 'فيزيباك'],
    drugClass: 'Radiographic Contrast Agent',
    drugClassAr: 'عامل تباين إشعاعي',
    category: 'Rx',
    route: ['Intravenous'],
    isFeaturedToday: false,
    dateFeatured: '2026-07-31',
    targetSpecialties: ['internal_medicine', 'icu_emergency', 'cardiology', 'pharmacy'],
    keyHighlights: [
      'السبب الرئيسي الثالث للفشل الكلوي الحاد المكتسب داخل المستشفى',
      'يجب إيقاف الميتفورمين قبل أو عند إعطاء الصبغة في مرضى القصور الكلوي المتوسط',
      'الترطيب الوريدي قبل وبعد الإجراء هو أهم إجراء وقائي مثبت لتقليل الاعتلال الكلوي بالصبغة'
    ],
    indications: [
      {
        indication: 'Contrast-Enhanced CT / Angiography',
        indicationAr: 'التصوير المقطعي أو تصوير الأوعية بالصبغة',
        adultDose: 'Dose varies by study and body weight, typically 50-150 mL IV per procedure (per radiology protocol).',
        adultDoseAr: 'الجرعة تختلف حسب نوع الفحص ووزن الجسم، عادة 50-150 مل وريدياً حسب بروتوكول الأشعة.',
        route: 'Intravenous'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'خطر منخفض نسبياً؛ يُنصح بالترطيب الوقائي في المرضى ذوي عوامل الخطورة الإضافية.',
      crcl10to50: 'خطر مرتفع للاعتلال الكلوي بالصبغة؛ يتطلب ترطيب وريدي وقائي وإيقاف الميتفورمين والأدوية السامة كلوياً.',
      crclBelow10: 'يُجنّب إن أمكن أو يُستبدل بتصوير بديل لا يعتمد على اليود (مثل الرنين المغناطيسي)؛ إن لزم الأمر يُستخدم بأقل حجم ممكن.',
      hemodialysis: 'يمكن إزالته بالغسيل الكلوي إذا لزم بعد الإجراء مباشرة في حالات نادرة شديدة الخطورة.'
    },
    hepaticAdjustment: 'لا يتطلب تعديل جرعة كبدي؛ الإطراح كلوي بشكل أساسي.',
    contraindications: [
      'تاريخ سابق لتفاعل تحسسي شديد تجاه صبغة اليود',
      'فرط نشاط الغدة الدرقية غير المُعالج (خطر أزمة درقية)',
      'الفشل الكلوي الحاد غير المُقيّم'
    ],
    mechanismOfAction: 'Iodine-based molecules absorb X-rays, providing radiographic opacity to enhance visualization of blood vessels and organs; can cause direct renal tubular toxicity and medullary hypoxia.',
    mechanismOfActionAr: 'جزيئات تحتوي على اليود تمتص الأشعة السينية فتعطي تبايناً إشعاعياً يُحسّن رؤية الأوعية الدموية والأعضاء؛ وقد تسبب سمية مباشرة للنبيبات الكلوية ونقص أكسجين في لب الكلية.',
    halfLife: '~ 2 hours (renal elimination, prolonged in renal impairment)',
    monitoringParameters: [
      'وظائف الكلى (Creatinine, eGFR) قبل الإجراء وبعده بـ 48-72 ساعة في المرضى عاليي الخطورة',
      'حالة الترطيب قبل وبعد الإجراء',
      'أعراض التحسس الفوري (طفح، ضيق تنفس، هبوط ضغط) أثناء وبعد الحقن مباشرة'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية مباشرة؛ يُنصح بالصيام القصير قبل بعض الإجراءات حسب بروتوكول القسم.'
    ],
    pearls: [
      'إيقاف الميتفورمين وقت إعطاء الصبغة في مرضى eGFR بين 30-60، وعدم استئنافه إلا بعد تأكيد سلامة وظائف الكلى بعد 48 ساعة.',
      'الترطيب بمحلول ملحي طبيعي (0.9% NaCl) قبل وبعد الإجراء هو التدخل الوقائي الوحيد المثبت علمياً بشكل قوي ضد الاعتلال الكلوي بالصبغة.',
      'يُفرّق بين الحساسية الحقيقية لليود وبين كون المريض "حساساً من المأكولات البحرية" الذي لا يُعد مؤشراً موثوقاً لرد فعل تجاه الصبغة.'
    ]
  },
  {
    id: 'azithromycin',
    genericName: 'Azithromycin',
    genericNameAr: 'أزيثرومايسين',
    brandNames: ['Zithromax', 'Z-Pak', 'زيثروماكس'],
    drugClass: 'Macrolide Antibiotic',
    drugClassAr: 'مضاد حيوي ماكروليد',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pharmacy', 'infectious_diseases', 'internal_medicine'],
    keyHighlights: [
      'جرعة واحدة يومياً بسبب نصف العمر الطويل جداً (68 ساعة)',
      'يتراكم داخل الخلايا ويستمر تأثيره بعد إيقافه لعدة أيام',
      'يطيل فترة QT - احذر مع أدوية أخرى مطيلة لها'
    ],
    indications: [
      {
        indication: 'Community-acquired pneumonia / Upper respiratory infections',
        indicationAr: 'التهاب رئوي مكتسب من المجتمع / التهابات الجهاز التنفسي العلوي',
        adultDose: '500 mg PO on day 1, then 250 mg PO once daily on days 2-5',
        adultDoseAr: '500 مج فموياً يوم 1، ثم 250 مج يومياً من اليوم 2 إلى 5',
        pediatricDose: '10 mg/kg PO on day 1 (max 500 mg), then 5 mg/kg/day on days 2-5',
        pediatricDoseAr: '10 مج/كجم فموياً يوم 1 (حد أقصى 500 مج)، ثم 5 مج/كجم يومياً من اليوم 2 إلى 5',
        route: 'PO'
      },
      {
        indication: 'Chlamydia trachomatis infection',
        indicationAr: 'عدوى الكلاميديا التناسلية',
        adultDose: '1 g PO as a single dose',
        adultDoseAr: '1 جرام فموياً جرعة واحدة',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; use with caution',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution in hepatic impairment; discontinue if signs of hepatitis occur',
    contraindications: [
      'فرط الحساسية لأي ماكروليد',
      'تاريخ اليرقان الركودي الصفراوي أو خلل وظائف الكبد مع استخدام سابق للأزيثرومايسين',
      'إطالة QT الخلقية أو الحادة'
    ],
    mechanismOfAction: 'Binds to the 50S ribosomal subunit, inhibiting bacterial protein synthesis (bacteriostatic)',
    mechanismOfActionAr: 'يرتبط بالوحدة الريبوسومية 50S فيثبط تخليق البروتين البكتيري (مثبط للنمو)',
    halfLife: '68 hours (tissue half-life)',
    monitoringParameters: [
      'تخطيط القلب (ECG) في مرضى الخطورة العالية لإطالة QT',
      'وظائف الكبد عند الاستخدام المطول',
      'الاستجابة السريرية والأعراض'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'الطعام الدسم يقلل امتصاص الأقراص العادية قليلاً، لا يؤثر على الكبسولات المعوية',
      'مضادات الحموضة المحتوية على الألومنيوم أو المغنيسيوم تقلل الامتصاص - يفصل بساعتين'
    ],
    pearls: [
      'الدواء المفضل للمرضى الذين لا يتحملون البنسلين في عدوى الجهاز التنفسي',
      'لا يحتاج تعديل جرعة في القصور الكلوي - ميزة كبيرة مقارنة بالماكروليدات الأخرى',
      'كورس Z-Pak الشهير (5 أيام) يعطي تغطية علاجية تعادل 10 أيام بسبب التراكم النسيجي'
    ]
  },
  {
    id: 'ceftriaxone',
    genericName: 'Ceftriaxone',
    genericNameAr: 'سيفترياكسون',
    brandNames: ['Rocephin', 'روسيفين'],
    drugClass: 'Third-Generation Cephalosporin',
    drugClassAr: 'سيفالوسبورين من الجيل الثالث',
    category: 'Rx',
    route: ['IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'infectious_diseases', 'pediatrics', 'nursing'],
    keyHighlights: [
      'لا يُعطى مع محاليل الكالسيوم الوريدية في حديثي الولادة - خطر ترسب قاتل',
      'يفرز في الصفراء والبول - لا يحتاج تعديل كلوي في معظم الحالات',
      'جرعة واحدة يومياً تسهل العلاج خارج المستشفى (OPAT)'
    ],
    indications: [
      {
        indication: 'Meningitis (empiric therapy)',
        indicationAr: 'التهاب السحايا (علاج تجريبي)',
        adultDose: '2 g IV every 12 hours',
        adultDoseAr: '2 جرام وريدي كل 12 ساعة',
        pediatricDose: '100 mg/kg/day IV divided every 12-24 hours (max 4 g/day)',
        pediatricDoseAr: '100 مج/كجم/يوم وريدي مقسمة كل 12-24 ساعة (حد أقصى 4 جم/يوم)',
        route: 'IV'
      },
      {
        indication: 'Community-acquired pneumonia / Intra-abdominal infection',
        indicationAr: 'التهاب رئوي مكتسب من المجتمع / عدوى داخل البطن',
        adultDose: '1-2 g IV/IM once daily',
        adultDoseAr: '1-2 جرام وريدي/عضلي مرة يومياً',
        route: 'IV/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment typically needed; monitor levels if combined hepatic/renal failure',
      hemodialysis: 'Not significantly removed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Max 2 g/day if both hepatic and renal impairment present simultaneously',
    contraindications: [
      'فرط الحساسية للسيفالوسبورينات',
      'حديثو الولادة (خاصة الخدج) الذين يتلقون أو سيتلقون محاليل كالسيوم وريدية - خطر ترسب قاتل في الرئة والكلى',
      'حديثو الولادة المصابون بفرط بيليروبين الدم'
    ],
    blackBoxWarning: 'Fatal reactions with calcium-containing solutions in neonates: concomitant use of ceftriaxone and calcium-containing IV products can cause fatal calcium-ceftriaxone precipitates in neonatal lungs and kidneys',
    blackBoxWarningAr: 'تفاعلات قاتلة مع محاليل الكالسيوم في حديثي الولادة: الاستخدام المتزامن للسيفترياكسون مع محاليل الكالسيوم الوريدية قد يسبب ترسبات قاتلة في رئة وكلى حديثي الولادة',
    mechanismOfAction: 'Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins',
    mechanismOfActionAr: 'يثبط تخليق جدار الخلية البكتيرية عن طريق الارتباط ببروتينات ربط البنسلين',
    halfLife: '5.8-8.7 hours',
    monitoringParameters: [
      'علامات الحساسية المفرطة',
      'وظائف الكلى والكبد',
      'علامات التهاب الكيس الصفراوي الكاذب (pseudolithiasis)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية معروفة ذات أهمية سريرية'
    ],
    pearls: [
      'لا يُخلط أبداً مع محاليل تحتوي على كالسيوم (مثل رينجر لاكتات) في نفس الخط الوريدي حتى في البالغين',
      'يُستخدم على نطاق واسع في العلاج المنزلي بالمضادات الوريدية (OPAT) بسبب جرعته اليومية الواحدة',
      'قد يسبب ترسب حصوات صفراوية كاذبة قابلة للعكس عند إيقاف الدواء'
    ]
  },
  {
    id: 'prednisone',
    genericName: 'Prednisone',
    genericNameAr: 'بريدنيزون',
    brandNames: ['Deltasone', 'بريدنيزون'],
    drugClass: 'Systemic Corticosteroid',
    drugClassAr: 'كورتيكوستيرويد جهازي',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'يجب تدريج الإيقاف (tapering) عند الاستخدام لأكثر من 2-3 أسابيع لتجنب قصور الكظر',
      'يُعطى صباحاً لتقليد الإيقاع اليومي الطبيعي للكورتيزول',
      'يحتاج تحويل كبدي إلى الشكل الفعال بريدنيزولون'
    ],
    indications: [
      {
        indication: 'Anti-inflammatory / Immunosuppressive therapy (e.g., asthma exacerbation, autoimmune disease)',
        indicationAr: 'علاج مضاد للالتهاب / مثبط للمناعة (مثل نوبة الربو، أمراض المناعة الذاتية)',
        adultDose: '5-60 mg PO once daily, depending on indication and severity',
        adultDoseAr: '5-60 مج فموياً مرة يومياً حسب دواعي الاستعمال والشدة',
        pediatricDose: '0.5-2 mg/kg/day PO divided once or twice daily',
        pediatricDoseAr: '0.5-2 مج/كجم/يوم فموياً مرة أو مرتين يومياً',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'In severe hepatic impairment, consider prednisolone directly as prednisone requires hepatic activation',
    contraindications: [
      'العدوى الفطرية الجهازية النشطة',
      'فرط الحساسية للبريدنيزون',
      'استخدام لقاحات حية في المرضى على جرعات مثبطة للمناعة'
    ],
    mechanismOfAction: 'Binds to glucocorticoid receptors, suppressing inflammatory gene transcription and immune cell function',
    mechanismOfActionAr: 'يرتبط بمستقبلات الجلوكوكورتيكويد فيثبط نسخ الجينات الالتهابية ووظيفة الخلايا المناعية',
    halfLife: '2-3 hours (biological effect 18-36 hours)',
    monitoringParameters: [
      'سكر الدم',
      'ضغط الدم',
      'كثافة العظام عند الاستخدام المزمن',
      'علامات العدوى المقنعة',
      'الوزن والسوائل'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُفضل تناوله مع الطعام لتقليل تهيج المعدة',
      'يزيد الحاجة لمراقبة السكر مع الأطعمة عالية السكريات'
    ],
    pearls: [
      'لا يُوقف فجأة بعد استخدام أكثر من 3 أسابيع - يجب التدريج التدريجي لتجنب أزمة أديسون',
      'يزيد خطر هشاشة العظام والقرحة الهضمية والعدوى عند الاستخدام المزمن',
      'يُفضل إعطاؤه في الصباح الباكر لتقليل تثبيط محور الكظر النخامي'
    ]
  },
  {
    id: 'digoxin',
    genericName: 'Digoxin',
    genericNameAr: 'ديجوكسين',
    brandNames: ['Lanoxin', 'لانوكسين'],
    drugClass: 'Cardiac Glycoside',
    drugClassAr: 'جليكوسيد قلبي',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'icu_emergency', 'pharmacy'],
    keyHighlights: [
      'نطاق علاجي ضيق جداً - مراقبة المستوى الدموي ضرورية (0.5-0.9 ng/mL للفشل القلبي)',
      'نقص بوتاسيوم الدم يزيد خطر التسمم الديجوكسيني بشدة',
      'يوجد ترياق نوعي: Digoxin Immune Fab (DigiFab) للتسمم الحاد'
    ],
    indications: [
      {
        indication: 'Heart failure with reduced ejection fraction / Atrial fibrillation (rate control)',
        indicationAr: 'فشل القلب مع انخفاض الكسر القذفي / الرجفان الأذيني (للتحكم في المعدل)',
        adultDose: 'Loading: 0.25-0.5 mg IV/PO then 0.25 mg every 6-8h to total 0.75-1.5 mg; Maintenance: 0.125-0.25 mg once daily',
        adultDoseAr: 'جرعة تحميل: 0.25-0.5 مج وريدي/فموي ثم 0.25 مج كل 6-8 ساعات حتى إجمالي 0.75-1.5 مج؛ جرعة صيانة: 0.125-0.25 مج يومياً',
        maxDose: '1.5 mg loading dose total',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce maintenance dose by 25-50%; monitor levels closely',
      crclBelow10: 'Reduce maintenance dose by 50-75%; extend dosing interval; monitor levels closely',
      hemodialysis: 'Not significantly dialyzed (large volume of distribution); no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment; digoxin is primarily renally eliminated',
    contraindications: [
      'الرجفان البطيني',
      'اعتلال عضلة القلب الضخامي الانسدادي',
      'الحصار الأذيني البطيني من الدرجة الثانية أو الثالثة بدون جهاز تنظيم ضربات',
      'متلازمة وولف باركنسون وايت مع الرجفان الأذيني'
    ],
    mechanismOfAction: 'Inhibits Na+/K+-ATPase pump, increasing intracellular calcium and myocardial contractility (positive inotrope); also increases vagal tone slowing AV conduction',
    mechanismOfActionAr: 'يثبط مضخة Na+/K+-ATPase فيزيد الكالسيوم داخل الخلية وقوة انقباض عضلة القلب؛ كما يزيد النغمة المبهمية فيبطئ التوصيل الأذيني البطيني',
    halfLife: '36-48 hours (longer in renal impairment)',
    monitoringParameters: [
      'مستوى الديجوكسين الدموي (0.5-0.9 ng/mL)',
      'البوتاسيوم والمغنيسيوم والكالسيوم في الدم',
      'وظائف الكلى',
      'تخطيط القلب لعلامات التسمم (بطء القلب، اضطراب النظم)',
      'الأعراض: غثيان، تقيؤ، اضطرابات بصرية (رؤية صفراء/خضراء)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'الألياف العالية (نخالة الشوفان) قد تقلل الامتصاص - يفصل بساعتين',
      'لا يُعطى مع مضادات الحموضة في نفس الوقت'
    ],
    pearls: [
      'نقص بوتاسيوم أو مغنيسيوم الدم يزيد حساسية القلب لتأثير الديجوكسين السام حتى مع مستوى دموي طبيعي',
      'التفاعلات الدوائية الشائعة: الأميودارون والفيراباميل والكينيدين ترفع مستوى الديجوكسين بشكل كبير',
      'الأعراض المبكرة للتسمم غالباً هضمية (غثيان، فقدان شهية) قبل ظهور اضطرابات النظم'
    ]
  },
  {
    id: 'phenytoin',
    genericName: 'Phenytoin',
    genericNameAr: 'فينيتوين',
    brandNames: ['Dilantin', 'ديلانتين'],
    drugClass: 'Hydantoin Anticonvulsant',
    drugClassAr: 'مضاد اختلاج من فئة الهيدانتوين',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'حركية غير خطية (zero-order) - زيادة بسيطة في الجرعة قد تسبب ارتفاع كبير في المستوى الدموي',
      'يجب تصحيح المستوى الدموي حسب الألبومين في نقص بروتين الدم',
      'لا يُعطى وريدياً بمعدل أسرع من 50 mg/min لخطر اضطراب النظم القلبي وانخفاض الضغط'
    ],
    indications: [
      {
        indication: 'Status epilepticus / Tonic-clonic and partial seizures',
        indicationAr: 'الحالة الصرعية / نوبات الصرع التوترية الرمعية والجزئية',
        adultDose: 'Loading: 15-20 mg/kg IV at max rate 50 mg/min; Maintenance: 100 mg PO/IV every 8 hours',
        adultDoseAr: 'جرعة تحميل: 15-20 مج/كجم وريدي بمعدل أقصى 50 مج/دقيقة؛ جرعة صيانة: 100 مج فموي/وريدي كل 8 ساعات',
        pediatricDose: 'Loading: 15-20 mg/kg IV; Maintenance: 4-8 mg/kg/day divided every 8-12 hours',
        pediatricDoseAr: 'جرعة تحميل: 15-20 مج/كجم وريدي؛ جرعة صيانة: 4-8 مج/كجم/يوم مقسمة كل 8-12 ساعة',
        maxDose: 'Infusion rate not to exceed 50 mg/min (25 mg/min in elderly)',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed; monitor free phenytoin level',
      crclBelow10: 'No adjustment needed; monitor free phenytoin level closely due to altered protein binding',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution; reduce dose in significant hepatic impairment and monitor levels closely',
    contraindications: [
      'فرط الحساسية للهيدانتوينات',
      'الحصار الأذيني البطيني من الدرجة الثانية أو الثالثة أو بطء القلب الجيبي الشديد (للشكل الوريدي)',
      'بورفيريا حادة متقطعة'
    ],
    blackBoxWarning: 'Cardiovascular risk with rapid IV administration: rapid IV infusion can cause severe hypotension and cardiac arrhythmias; infusion rate must not exceed 50 mg/min',
    blackBoxWarningAr: 'خطورة قلبية وعائية مع الحقن الوريدي السريع: الحقن الوريدي السريع قد يسبب انخفاض ضغط شديد واضطرابات نظم قلبي؛ يجب ألا يتجاوز معدل التسريب 50 مج/دقيقة',
    mechanismOfAction: 'Blocks voltage-gated sodium channels, stabilizing neuronal membranes and reducing repetitive neuronal firing',
    mechanismOfActionAr: 'يحجب قنوات الصوديوم المعتمدة على الجهد فيثبت الأغشية العصبية ويقلل الإطلاق العصبي المتكرر',
    halfLife: '7-42 hours (dose-dependent, non-linear kinetics)',
    monitoringParameters: [
      'المستوى الدموي للفينيتوين (المدى العلاجي الكلي: 10-20 mcg/mL، الحر: 1-2 mcg/mL)',
      'الألبومين في الدم لتصحيح المستوى في نقص بروتين الدم',
      'تخطيط القلب والضغط أثناء الحقن الوريدي',
      'علامات التسمم (رأرأة، ترنح، تخليط ذهني)',
      'تعداد الدم الكامل ووظائف الكبد دورياً'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'التغذية الأنبوبية (enteral feeding) تقلل امتصاصه بشكل كبير - يفصل بساعتين قبل وبعد',
      'حمض الفوليك قد يقلل مستوى الفينيتوين الدموي'
    ],
    pearls: [
      'الحركية غير الخطية تعني أن زيادة الجرعة بنسبة صغيرة قد تؤدي لقفزة كبيرة وغير متناسبة في المستوى الدموي والتسمم',
      'الفوسفينيتوين (Fosphenytoin) بديل أكثر أماناً للحقن الوريدي السريع وفي العضل',
      'يصحح المستوى الدموي حسب معادلة: Corrected = Measured / ((0.2 × Albumin) + 0.1)'
    ]
  },
  {
    id: 'heparin_unfractionated',
    genericName: 'Heparin (Unfractionated)',
    genericNameAr: 'هيبارين غير مجزأ',
    brandNames: ['Heparin Sodium', 'هيبارين صوديوم'],
    drugClass: 'Anticoagulant',
    drugClassAr: 'مضاد تخثر',
    category: 'Rx',
    route: ['IV', 'SC'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology', 'nursing', 'pharmacy'],
    keyHighlights: [
      'يُفضل عن الإينوكسابارين في القصور الكلوي الشديد لأنه لا يعتمد على الكلى للإفراز',
      'نصف عمر قصير (60-90 دقيقة) يجعله مثالياً في الحالات التي تحتاج إيقاف سريع (قبل الجراحة)',
      'خطر نقص الصفائح المحرض بالهيبارين (HIT) - يراقب تعداد الصفائح'
    ],
    indications: [
      {
        indication: 'Acute venous thromboembolism / ACS / Anticoagulation bridging',
        indicationAr: 'الانصمام الخثاري الوريدي الحاد / المتلازمة التاجية الحادة / الربط العلاجي بمضادات التخثر',
        adultDose: 'Bolus 80 units/kg IV then infusion 18 units/kg/hour, adjusted per aPTT protocol',
        adultDoseAr: 'جرعة بلعية 80 وحدة/كجم وريدي ثم تسريب 18 وحدة/كجم/ساعة، يُعدل حسب بروتوكول aPTT',
        route: 'IV continuous infusion'
      },
      {
        indication: 'VTE prophylaxis',
        indicationAr: 'الوقاية من الانصمام الخثاري الوريدي',
        adultDose: '5000 units SC every 8-12 hours',
        adultDoseAr: '5000 وحدة تحت الجلد كل 8-12 ساعة',
        route: 'SC'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed - preferred over LMWH in severe renal impairment',
      hemodialysis: 'No adjustment needed; commonly used for dialysis circuit anticoagulation'
    },
    hepaticAdjustment: 'Use with caution in severe hepatic impairment due to coagulopathy risk',
    contraindications: [
      'نزيف نشط غير محكوم',
      'نقص الصفائح المحرض بالهيبارين (HIT) الحالي أو في التاريخ المرضي',
      'فرط الحساسية للهيبارين',
      'جراحة حديثة بالعين أو الجهاز العصبي المركزي مع خطر نزيف عالي'
    ],
    mechanismOfAction: 'Binds to antithrombin III, potentiating its inhibition of thrombin (factor IIa) and factor Xa',
    mechanismOfActionAr: 'يرتبط بمضاد الثرومبين الثالث فيعزز تثبيطه للثرومبين (العامل IIa) والعامل Xa',
    halfLife: '60-90 minutes (dose-dependent)',
    monitoringParameters: [
      'زمن الثرومبوبلاستين الجزئي المنشط (aPTT) كل 6 ساعات حتى الاستقرار',
      'تعداد الصفائح الدموية يومياً (لمراقبة HIT)',
      'الهيموجلوبين والهيماتوكريت',
      'علامات النزيف'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية؛ يُتجنب مع الأعشاب المضادة للتخثر (الجنكة، الثوم بجرعات عالية)'
    ],
    pearls: [
      'الترياق النوعي هو بروتامين سلفات (1 mg لكل 100 وحدة هيبارين تقريباً)',
      'يُفضل في المرضى ذوي القصور الكلوي الشديد أو من يحتاجون إيقاف سريع قبل التداخلات الجراحية',
      'يجب مراقبة تعداد الصفائح للكشف المبكر عن HIT، عادة بين اليوم 5-10 من العلاج'
    ]
  },
  {
    id: 'metoprolol',
    genericName: 'Metoprolol',
    genericNameAr: 'ميتوبرولول',
    brandNames: ['Lopressor', 'Toprol-XL', 'لوبريسور'],
    drugClass: 'Beta-1 Selective Blocker',
    drugClassAr: 'حاصر بيتا 1 انتقائي',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'الشكل الممتد المفعول (succinate/XL) لا يُكسر أو يُمضغ لأنه نظام إطلاق متحكم',
      'لا يُوقف فجأة في مرضى القلب - خطر الارتداد (rebound tachycardia/ischemia)',
      'يُفضل عن حاصرات بيتا غير الانتقائية في الربو والسكري لتأثيره الانتقائي على القلب'
    ],
    indications: [
      {
        indication: 'Hypertension / Angina / Post-MI / Heart failure (succinate form)',
        indicationAr: 'ارتفاع ضغط الدم / الذبحة الصدرية / بعد احتشاء عضلة القلب / فشل القلب (شكل السكسينات)',
        adultDose: 'Tartrate: 25-100 mg PO twice daily; Succinate XL: 25-200 mg PO once daily',
        adultDoseAr: 'تارترات: 25-100 مج فموياً مرتين يومياً؛ سكسينات ممتد المفعول: 25-200 مج فموياً مرة يومياً',
        maxDose: '400 mg/day',
        route: 'PO'
      },
      {
        indication: 'Acute MI / Rate control (acute)',
        indicationAr: 'احتشاء عضلة القلب الحاد / التحكم في معدل القلب (حاد)',
        adultDose: '5 mg IV every 5 minutes for up to 3 doses, then transition to oral',
        adultDoseAr: '5 مج وريدي كل 5 دقائق حتى 3 جرعات، ثم التحويل للفموي',
        route: 'IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce initial dose in significant hepatic impairment; metoprolol undergoes extensive hepatic metabolism via CYP2D6',
    contraindications: [
      'بطء القلب الجيبي الشديد',
      'الحصار الأذيني البطيني من الدرجة الثانية أو الثالثة',
      'الصدمة القلبية',
      'الربو الشديد غير المستقر (حذر نسبي)',
      'فشل القلب غير المعاوض الحاد'
    ],
    mechanismOfAction: 'Selectively blocks beta-1 adrenergic receptors in the heart, reducing heart rate, contractility, and myocardial oxygen demand',
    mechanismOfActionAr: 'يحجب انتقائياً مستقبلات بيتا-1 الأدرينالية في القلب فيقلل معدل ضربات القلب وقوة الانقباض واستهلاك الأكسجين',
    halfLife: '3-7 hours',
    monitoringParameters: [
      'معدل ضربات القلب وضغط الدم',
      'تخطيط القلب في الاستخدام الوريدي',
      'علامات تفاقم فشل القلب أو بطء القلب',
      'سكر الدم في مرضى السكري (قد يخفي أعراض نقص السكر)'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'الطعام يزيد التوافر الحيوي للشكل التارترات بشكل طفيف - يُؤخذ بانتظام مع أو بدون طعام',
      'يُتجنب مع الكحول لزيادة خطر انخفاض الضغط'
    ],
    pearls: [
      'لا يُوقف فجأة أبداً في مرضى الشريان التاجي - يجب التدريج على مدى 1-2 أسبوع',
      'الشكل الممتد المفعول (Toprol-XL) مختلف صيدلانياً عن العادي (Lopressor) وليسا قابلين للتبديل مباشرة بنفس الجرعة اليومية',
      'يُفضل استخدامه بحذر في مرضى الربو لأن الانتقائية لبيتا-1 تقل مع زيادة الجرعة'
    ]
  },
  {
    id: 'amlodipine',
    genericName: 'Amlodipine',
    genericNameAr: 'أملوديبين',
    brandNames: ['Norvasc', 'نورفاسك'],
    drugClass: 'Dihydropyridine Calcium Channel Blocker',
    drugClassAr: 'حاصر قنوات الكالسيوم من فئة الديهيدروبيريدين',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'نصف عمر طويل جداً (30-50 ساعة) يسمح بجرعة واحدة يومياً وتغطية ثابتة',
      'أكثر أسباب الوذمة المحيطية شيوعاً بين خافضات الضغط',
      'لا يحتاج تعديل جرعة في القصور الكلوي'
    ],
    indications: [
      {
        indication: 'Hypertension / Chronic stable angina',
        indicationAr: 'ارتفاع ضغط الدم / الذبحة الصدرية المزمنة المستقرة',
        adultDose: '5-10 mg PO once daily',
        adultDoseAr: '5-10 مج فموياً مرة يومياً',
        pediatricDose: '2.5-5 mg PO once daily (ages 6-17)',
        pediatricDoseAr: '2.5-5 مج فموياً مرة يومياً (6-17 سنة)',
        maxDose: '10 mg/day',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not dialyzable (highly protein bound); no supplemental dose needed'
    },
    hepaticAdjustment: 'Start with 2.5 mg once daily in significant hepatic impairment and titrate slowly',
    contraindications: [
      'فرط الحساسية لحاصرات قنوات الكالسيوم من فئة الديهيدروبيريدين',
      'تضيق الأبهر الشديد (حذر نسبي)'
    ],
    mechanismOfAction: 'Inhibits calcium ion influx across vascular smooth muscle cell membranes, causing vasodilation and reduced peripheral vascular resistance',
    mechanismOfActionAr: 'يثبط دخول أيونات الكالسيوم عبر أغشية خلايا العضلات الملساء الوعائية فيسبب توسع الأوعية وانخفاض المقاومة الوعائية المحيطية',
    halfLife: '30-50 hours',
    monitoringParameters: [
      'ضغط الدم',
      'الوذمة المحيطية في الأطراف السفلية',
      'معدل ضربات القلب',
      'وظائف الكبد عند الاستخدام المزمن'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'عصير الجريب فروت قد يزيد مستوى الدواء في الدم قليلاً - يُفضل تجنب الكميات الكبيرة'
    ],
    pearls: [
      'الوذمة المحيطية تعتمد على الجرعة وليست بسبب احتباس السوائل - لا تستجيب جيداً لمدرات البول',
      'يُفضل في المرضى المسنين وذوي الضغط الانقباضي المعزول لثباته وتحمله الجيد',
      'بداية التأثير بطيئة (أيام) مما يقلل من هبوط الضغط الانتصابي المفاجئ'
    ]
  },
  {
    id: 'losartan',
    genericName: 'Losartan',
    genericNameAr: 'لوسارتان',
    brandNames: ['Cozaar', 'كوزار'],
    drugClass: 'Angiotensin II Receptor Blocker (ARB)',
    drugClassAr: 'حاصر مستقبلات الأنجيوتنسين الثاني',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'بديل جيد لمثبطات الإيس في مرضى السعال المزعج - خطر وذمة وعائية أقل بكثير',
      'يُمنع تماماً مع مثبطات الإيس أو أليسكيرين (خطر فرط بوتاسيوم وقصور كلوي)',
      'تأثير خافض لحمض اليوريك إضافي مفيد في النقرس'
    ],
    indications: [
      {
        indication: 'Hypertension / Diabetic nephropathy / Stroke risk reduction',
        indicationAr: 'ارتفاع ضغط الدم / اعتلال الكلى السكري / تقليل خطر السكتة الدماغية',
        adultDose: '50 mg PO once daily, may increase to 100 mg once daily',
        adultDoseAr: '50 مج فموياً مرة يومياً، يمكن زيادتها إلى 100 مج مرة يومياً',
        pediatricDose: '0.7 mg/kg PO once daily (max 50 mg) for ages 6-16',
        pediatricDoseAr: '0.7 مج/كجم فموياً مرة يومياً (حد أقصى 50 مج) للأعمار 6-16 سنة',
        maxDose: '100 mg/day',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment typically needed; monitor renal function and potassium',
      crclBelow10: 'Use with caution; start at lower dose and monitor closely',
      hemodialysis: 'Not significantly removed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Consider lower starting dose (25 mg) in hepatic impairment due to reduced metabolism to active metabolite',
    contraindications: [
      'الحمل',
      'الاستخدام المتزامن مع أليسكيرين في مرضى السكري',
      'فرط الحساسية للدواء',
      'التضيق الثنائي لشرايين الكلى'
    ],
    blackBoxWarning: 'Fetal toxicity: can cause injury and death to the developing fetus when used in pregnancy; discontinue as soon as pregnancy is detected',
    blackBoxWarningAr: 'سمية جنينية: قد يسبب أذى ووفاة للجنين النامي عند الاستخدام أثناء الحمل؛ يجب إيقافه فور اكتشاف الحمل',
    mechanismOfAction: 'Blocks angiotensin II receptor type 1 (AT1), preventing vasoconstriction and aldosterone secretion',
    mechanismOfActionAr: 'يحجب مستقبل الأنجيوتنسين الثاني نوع 1 فيمنع تضيق الأوعية وإفراز الألدوستيرون',
    halfLife: '2 hours (6-9 hours for active metabolite)',
    monitoringParameters: [
      'ضغط الدم',
      'وظائف الكلى والبوتاسيوم خاصة بعد بدء العلاج أو تعديل الجرعة',
      'اختبار الحمل في النساء في سن الإنجاب'
    ],
    pregnancyCategory: 'X',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية كبيرة؛ يُنصح بالحذر مع بدائل الملح الغنية بالبوتاسيوم'
    ],
    pearls: [
      'لا يسبب السعال الجاف المصاحب لمثبطات الإيس لأنه لا يؤثر على تكسير البراديكينين',
      'يحتاج تحويلاً كبدياً جزئياً إلى مستقلب نشط أقوى 10-40 ضعف',
      'يُستخدم أيضاً كعلاج مساعد في النقرس بسبب تأثيره الخافض لحمض اليوريك الفريد بين الـ ARBs'
    ]
  },
  {
    id: 'tramadol',
    genericName: 'Tramadol',
    genericNameAr: 'ترامادول',
    brandNames: ['Ultram', 'ترامال'],
    drugClass: 'Opioid Analgesic (Atypical)',
    drugClassAr: 'مسكن أفيوني (غير نمطي)',
    category: 'Controlled',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pharmacy', 'icu_emergency', 'internal_medicine'],
    keyHighlights: [
      'يخفض عتبة التشنج - يُستخدم بحذر شديد في مرضى الصرع أو مع أدوية أخرى تخفض العتبة',
      'خطر متلازمة السيروتونين عند الدمج مع SSRIs/SNRIs/MAOIs',
      'استقلابه يعتمد على إنزيم CYP2D6 - فعاليته تختلف حسب النمط الجيني للمريض'
    ],
    indications: [
      {
        indication: 'Moderate to moderately severe pain',
        indicationAr: 'الألم المتوسط إلى المتوسط الشديد',
        adultDose: '50-100 mg PO every 4-6 hours as needed',
        adultDoseAr: '50-100 مج فموياً كل 4-6 ساعات عند الحاجة',
        maxDose: '400 mg/day (300 mg/day in patients over 75 years)',
        duration: 'Short-term use preferred',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Increase dosing interval to every 12 hours; max 200 mg/day',
      crclBelow10: 'Avoid use or use with extreme caution; extend interval further',
      hemodialysis: 'Dialyzable; administer supplemental dose after dialysis session'
    },
    hepaticAdjustment: 'Severe hepatic impairment: 50 mg PO every 12 hours maximum',
    contraindications: [
      'فرط الحساسية للترامادول أو الأفيونات',
      'الاستخدام المتزامن أو خلال 14 يوماً من مثبطات MAO',
      'انسداد معوي حاد أو انسداد شللي',
      'التسمم الحاد بالكحول أو المنومات أو الأفيونات أو الأدوية النفسية'
    ],
    blackBoxWarning: 'Risk of addiction, abuse, and misuse; respiratory depression; neonatal opioid withdrawal syndrome; risk of serotonin syndrome with serotonergic drugs; increased seizure risk',
    blackBoxWarningAr: 'خطر الإدمان وسوء الاستخدام؛ تثبيط الجهاز التنفسي؛ متلازمة انسحاب الأفيون عند حديثي الولادة؛ خطر متلازمة السيروتونين مع الأدوية السيروتونينية؛ زيادة خطر التشنجات',
    mechanismOfAction: 'Weak mu-opioid receptor agonist plus inhibits serotonin and norepinephrine reuptake (dual mechanism)',
    mechanismOfActionAr: 'ناهض ضعيف لمستقبلات مو الأفيونية بالإضافة إلى تثبيط إعادة امتصاص السيروتونين والنورإبينفرين (آلية مزدوجة)',
    halfLife: '6-7 hours (parent drug), 7-9 hours (active metabolite)',
    monitoringParameters: [
      'مستوى الألم والوظيفة',
      'معدل التنفس ومستوى الوعي',
      'علامات متلازمة السيروتونين',
      'علامات التشنج في المرضى المعرضين للخطر',
      'علامات الإدمان أو سوء الاستخدام'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'الكحول يزيد خطر التثبيط التنفسي والتخدير بشكل خطير - يُمنع الدمج'
    ],
    pearls: [
      'ليس بديلاً "آمناً تماماً" عن الأفيونات التقليدية - له نفس مخاطر الإدمان والتثبيط التنفسي بدرجة أقل',
      'يتفاعل بخطورة مع مضادات الاكتئاب السيروتونينية مسبباً متلازمة السيروتونين',
      'ضعاف الأيض عبر CYP2D6 قد لا يستفيدون من التأثير المسكن الكامل'
    ]
  },
  {
    id: 'ondansetron',
    genericName: 'Ondansetron',
    genericNameAr: 'أوندانسيترون',
    brandNames: ['Zofran', 'زوفران'],
    drugClass: '5-HT3 Receptor Antagonist (Antiemetic)',
    drugClassAr: 'مضاد مستقبلات 5-HT3 (مضاد للقيء)',
    category: 'Rx',
    route: ['PO', 'IV', 'ODT'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['oncology', 'pharmacy', 'icu_emergency', 'pediatrics'],
    keyHighlights: [
      'يطيل فترة QT بطريقة مرتبطة بالجرعة - يُراقب تخطيط القلب في المرضى عاليي الخطورة',
      'الحد الأقصى للجرعة الوريدية الواحدة 16 مج بسبب خطورة إطالة QT',
      'فعال جداً ضد غثيان العلاج الكيماوي والجراحة وليس ضد دوار الحركة'
    ],
    indications: [
      {
        indication: 'Chemotherapy/radiotherapy/postoperative-induced nausea and vomiting',
        indicationAr: 'الغثيان والتقيؤ الناتج عن العلاج الكيماوي/الإشعاعي/ما بعد الجراحة',
        adultDose: '8 mg PO twice daily or 4-8 mg IV, not to exceed 16 mg per single IV dose',
        adultDoseAr: '8 مج فموياً مرتين يومياً أو 4-8 مج وريدياً، بحد أقصى 16 مج للجرعة الوريدية الواحدة',
        pediatricDose: '0.15 mg/kg IV (max 16 mg) for chemotherapy-induced nausea',
        pediatricDoseAr: '0.15 مج/كجم وريدياً (حد أقصى 16 مج) لغثيان العلاج الكيماوي',
        maxDose: '16 mg per single IV dose',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Severe hepatic impairment (Child-Pugh C): maximum 8 mg/day',
    contraindications: [
      'فرط الحساسية للأوندانسيترون',
      'الاستخدام المتزامن مع أبوموروفين (خطر انخفاض ضغط شديد وفقدان وعي)',
      'متلازمة QT الطويل الخلقية'
    ],
    mechanismOfAction: 'Selectively blocks serotonin 5-HT3 receptors both peripherally (vagal afferents) and centrally (chemoreceptor trigger zone)',
    mechanismOfActionAr: 'يحجب انتقائياً مستقبلات السيروتونين 5-HT3 محيطياً (الألياف المبهمية الواردة) ومركزياً (منطقة المستقبلات الكيميائية المحفزة)',
    halfLife: '3-6 hours',
    monitoringParameters: [
      'تخطيط القلب في المرضى عاليي الخطورة لإطالة QT أو اضطراب الكهارل',
      'البوتاسيوم والمغنيسيوم في الدم',
      'شدة الغثيان والتقيؤ',
      'وظائف الكبد قبل الجرعات العالية'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية معروفة'
    ],
    pearls: [
      'الشكل القابل للذوبان الفموي (ODT) لا يحتاج ماء - مفيد جداً للمرضى الذين يعانون من القيء الشديد',
      'يُصحح نقص البوتاسيوم والمغنيسيوم قبل الإعطاء الوريدي في المرضى عاليي الخطورة لتقليل خطر اضطراب النظم',
      'أقل فعالية ضد دوار الحركة أو الغثيان الناتج عن أسباب دهليزية مقارنة بمضادات الهيستامين'
    ]
  },
  {
    id: 'fluconazole',
    genericName: 'Fluconazole',
    genericNameAr: 'فلوكونازول',
    brandNames: ['Diflucan', 'ديفلوكان'],
    drugClass: 'Triazole Antifungal',
    drugClassAr: 'مضاد فطريات من فئة التريازول',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'مثبط قوي لإنزيم CYP2C9 و CYP3A4 - تفاعلات دوائية كثيرة ومهمة (الوارفارين، الفينيتوين، السلفونيل يوريا)',
      'يفرز دون تغيير في البول بنسبة كبيرة - يحتاج تعديل جرعة كبير في القصور الكلوي',
      'توافر حيوي فموي ممتاز (>90%) يجعل التحويل من الوريدي للفموي سهلاً بنفس الجرعة'
    ],
    indications: [
      {
        indication: 'Vaginal candidiasis / Oropharyngeal and esophageal candidiasis / Systemic candidiasis / Cryptococcal meningitis',
        indicationAr: 'داء المبيضات المهبلي / داء المبيضات الفموي البلعومي والمريئي / داء المبيضات الجهازي / التهاب السحايا الكريبتوكوكي',
        adultDose: 'Vaginal: 150 mg PO single dose; Esophageal candidiasis: 200-400 mg PO/IV on day 1 then 100-200 mg daily; Cryptococcal meningitis: 400 mg daily',
        adultDoseAr: 'المهبلي: 150 مج فموياً جرعة واحدة؛ المريئي: 200-400 مج فموي/وريدي يوم 1 ثم 100-200 مج يومياً؛ التهاب السحايا الكريبتوكوكي: 400 مج يومياً',
        pediatricDose: '3-12 mg/kg/day depending on indication severity',
        pediatricDoseAr: '3-12 مج/كجم/يوم حسب شدة الحالة',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Give 50% of standard dose',
      crclBelow10: 'Give 25% of standard dose (without regular dialysis)',
      hemodialysis: 'Administer 100% of standard dose after each dialysis session'
    },
    hepaticAdjustment: 'Use with caution; monitor liver enzymes; discontinue if signs of progressive liver disease develop',
    contraindications: [
      'فرط الحساسية للتريازولات',
      'الاستخدام المتزامن مع تيرفينادين أو سيزابرايد أو أدوية أخرى مطيلة لـ QT وتعتمد على CYP3A4 (خطر اضطراب النظم القاتل)'
    ],
    mechanismOfAction: 'Inhibits fungal cytochrome P450-dependent enzyme lanosterol 14-alpha-demethylase, blocking ergosterol synthesis and disrupting fungal cell membrane',
    mechanismOfActionAr: 'يثبط إنزيم اللانوستيرول 14-ألفا-ديميثيليز المعتمد على السيتوكروم P450 الفطري، فيمنع تخليق الإرغوستيرول ويخرب غشاء الخلية الفطرية',
    halfLife: '20-50 hours',
    monitoringParameters: [
      'وظائف الكبد (خط الأساس ودورياً)',
      'تخطيط القلب في المرضى عاليي الخطورة لإطالة QT',
      'وظائف الكلى لتعديل الجرعة',
      'مستوى الوارفارين/INR عند الاستخدام المصاحب',
      'الاستجابة السريرية لعدوى الفطريات'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُمتص جيداً بغض النظر عن الطعام',
      'يزيد مستوى الكافيين في الدم عبر تثبيط استقلابه'
    ],
    pearls: [
      'من أخطر التفاعلات الدوائية: يرفع مستوى الوارفارين بشكل كبير مسبباً خطر نزيف - يُراقب INR عن كثب',
      'جرعة 150 مج فموية واحدة كافية لعلاج معظم حالات داء المبيضات المهبلي غير المعقد',
      'التوافر الحيوي الفموي الممتاز (>90%) يعني أن الجرعة الفموية والوريدية متماثلة تقريباً'
    ]
  },
  {
    id: 'ciprofloxacin',
    genericName: 'Ciprofloxacin',
    genericNameAr: 'سيبروفلوكساسين',
    brandNames: ['Cipro', 'سيبروباي'],
    drugClass: 'Fluoroquinolone Antibiotic',
    drugClassAr: 'مضاد حيوي من فئة الفلوروكينولون',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'تحذير صندوق أسود لخطر التهاب واعتلال وتمزق الأوتار خاصة وتر أخيل',
      'يخلب مع الكاتيونات متعددة التكافؤ (كالسيوم، حديد، مغنيسيوم) فيقلل الامتصاص بشدة',
      'يطيل فترة QT ويزيد خطر التشنجات خاصة مع NSAIDs'
    ],
    indications: [
      {
        indication: 'Urinary tract infection / Intra-abdominal infection / Pseudomonal infections',
        indicationAr: 'عدوى المسالك البولية / عدوى داخل البطن / عدوى الزائفة الزنجارية',
        adultDose: '250-750 mg PO every 12 hours or 400 mg IV every 8-12 hours',
        adultDoseAr: '250-750 مج فموياً كل 12 ساعة أو 400 مج وريدياً كل 8-12 ساعة',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce dose by 50% or extend interval to every 18-24 hours',
      crclBelow10: 'Reduce dose by 50% and extend interval; max 500 mg PO every 24 hours',
      hemodialysis: 'Dialyzable; administer dose after dialysis session'
    },
    hepaticAdjustment: 'No specific adjustment needed; primarily renally eliminated',
    contraindications: [
      'فرط الحساسية للفلوروكينولونات',
      'الاستخدام المتزامن مع تيزانيدين',
      'تاريخ التهاب أو تمزق الأوتار المرتبط بالفلوروكينولونات',
      'وهن العضلات الوبيل (قد يفاقم الضعف العضلي)'
    ],
    blackBoxWarning: 'Risk of tendinitis and tendon rupture, peripheral neuropathy, CNS effects, and exacerbation of myasthenia gravis; reserve for use when no alternative treatment options exist for uncomplicated infections',
    blackBoxWarningAr: 'خطر التهاب الأوتار وتمزقها، الاعتلال العصبي المحيطي، تأثيرات الجهاز العصبي المركزي، وتفاقم وهن العضلات الوبيل؛ يُحفظ للاستخدام عند عدم وجود بدائل علاجية أخرى في العدوى غير المعقدة',
    mechanismOfAction: 'Inhibits bacterial DNA gyrase and topoisomerase IV, preventing DNA replication',
    mechanismOfActionAr: 'يثبط إنزيمي الجايريز وتوبويزوميريز IV البكتيريين فيمنع تضاعف الحمض النووي',
    halfLife: '4 hours',
    monitoringParameters: [
      'علامات التهاب الأوتار (خاصة في المسنين ومستخدمي الكورتيزون)',
      'وظائف الكلى',
      'تخطيط القلب في المرضى عاليي الخطورة',
      'الأعراض العصبية (دوخة، تخليط، تشنجات)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'منتجات الألبان ومضادات الحموضة والمكملات المعدنية (حديد، كالسيوم، زنك) تقلل الامتصاص بشدة - يفصل بساعتين قبل أو 6 ساعات بعد',
      'الكافيين قد يتراكم بسبب تثبيط استقلابه'
    ],
    pearls: [
      'يُفضل تجنبه كخط أول في العدوى غير المعقدة بسبب الآثار الجانبية الخطيرة المحتملة (أوتار، أعصاب، نفسية)',
      'من أقوى الكينولونات ضد الزائفة الزنجارية',
      'يرفع مستوى الثيوفيلين والوارفارين بشكل ملحوظ عبر تثبيط CYP1A2'
    ]
  },
  {
    id: 'gentamicin',
    genericName: 'Gentamicin',
    genericNameAr: 'جنتاميسين',
    brandNames: ['Garamycin', 'جاراميسين'],
    drugClass: 'Aminoglycoside Antibiotic',
    drugClassAr: 'مضاد حيوي من فئة الأمينوجليكوزيد',
    category: 'Rx',
    route: ['IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'icu_emergency', 'pharmacy', 'nursing'],
    keyHighlights: [
      'سمية أذنية وكلوية جرعة-معتمدة - يحتاج مراقبة مستوى دموي دقيقة (peak/trough)',
      'جرعة واحدة يومية ممتدة (extended-interval dosing) أصبحت المعيار لتقليل السمية',
      'تآزر قوي مع البيتالاكتام ضد العقديات والمكورات المعوية'
    ],
    indications: [
      {
        indication: 'Serious gram-negative infections / Synergy for endocarditis',
        indicationAr: 'العدوى الخطيرة بالجراثيم سالبة الجرام / التآزر في التهاب الشغاف',
        adultDose: 'Extended interval: 5-7 mg/kg IV once daily; Traditional: 1-2.5 mg/kg IV every 8 hours',
        adultDoseAr: 'الفترة الممتدة: 5-7 مج/كجم وريدياً مرة يومياً؛ التقليدي: 1-2.5 مج/كجم وريدياً كل 8 ساعات',
        pediatricDose: '2.5 mg/kg IV every 8 hours (neonates and infants dosed by age/weight protocol)',
        pediatricDoseAr: '2.5 مج/كجم وريدياً كل 8 ساعات (حديثو الولادة والرضع حسب بروتوكول العمر والوزن)',
        route: 'IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed; monitor levels',
      crcl10to50: 'Extend dosing interval based on levels (typically every 24-48 hours)',
      crclBelow10: 'Extend interval significantly (every 48-72 hours); dose per levels only',
      hemodialysis: 'Dialyzable; administer dose after dialysis session and monitor levels'
    },
    hepaticAdjustment: 'No specific adjustment needed; renally eliminated',
    contraindications: [
      'فرط الحساسية للأمينوجليكوزيدات',
      'وهن العضلات الوبيل (يزيد الحصار العصبي العضلي)',
      'الاستخدام المتزامن مع أدوية أخرى سامة للكلى أو الأذن دون مراقبة دقيقة'
    ],
    blackBoxWarning: 'Nephrotoxicity and ototoxicity (auditory and vestibular), neuromuscular blockade leading to respiratory paralysis; increased risk with renal impairment or prolonged therapy',
    blackBoxWarningAr: 'سمية كلوية وأذنية (سمعية ودهليزية)، حصار عصبي عضلي قد يؤدي لشلل تنفسي؛ يزداد الخطر مع القصور الكلوي أو العلاج المطول',
    mechanismOfAction: 'Irreversibly binds to the bacterial 30S ribosomal subunit, causing misreading of mRNA and inhibiting protein synthesis (bactericidal)',
    mechanismOfActionAr: 'يرتبط بشكل لا رجعي بالوحدة الريبوسومية 30S البكتيرية مسبباً قراءة خاطئة للـ mRNA ويثبط تخليق البروتين (قاتل للبكتيريا)',
    halfLife: '2-3 hours (normal renal function)',
    monitoringParameters: [
      'مستوى الذروة والقاع الدموي (peak/trough) أو مستوى عشوائي للجرعة الممتدة',
      'وظائف الكلى (كرياتينين) يومياً إلى كل يومين',
      'اختبار السمع عند العلاج المطول',
      'علامات الدوار أو اضطراب التوازن (سمية دهليزية)'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية (يُعطى حقناً فقط)'
    ],
    pearls: [
      'الجرعة الممتدة اليومية الواحدة تقلل السمية الكلوية مقارنة بالجرعات المقسمة التقليدية',
      'يُستخدم بجرعات منخفضة للتآزر في التهاب الشغاف مع البنسلين أو الأمبيسيلين',
      'الوزن المستخدم في حساب الجرعة يُعدل في السمنة (Adjusted Body Weight) لتجنب الجرعة الزائدة'
    ]
  },
  {
    id: 'metronidazole',
    genericName: 'Metronidazole',
    genericNameAr: 'ميترونيدازول',
    brandNames: ['Flagyl', 'فلاجيل'],
    drugClass: 'Nitroimidazole Antimicrobial',
    drugClassAr: 'مضاد ميكروبي من فئة النيتروإيميدازول',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'تفاعل ديسولفيرام-مثل مع الكحول (احمرار، غثيان، خفقان) - يُمنع الكحول أثناء العلاج ولمدة 3 أيام بعده',
      'تغطية ممتازة ضد اللاهوائيات والطفيليات (الجيارديا، الأميبا، المشعرات)',
      'غالباً يُستخدم مع سيفترياكسون أو سيبروفلوكساسين لتغطية مزدوجة هوائية/لاهوائية'
    ],
    indications: [
      {
        indication: 'Anaerobic infections / C. difficile colitis / Trichomoniasis / Giardiasis / Amebiasis',
        indicationAr: 'العدوى اللاهوائية / التهاب القولون بـ C. difficile / داء المشعرات / الجيارديا / الأميبا',
        adultDose: '500 mg PO/IV every 8 hours; C. diff: 500 mg PO every 8 hours for 10-14 days',
        adultDoseAr: '500 مج فموياً/وريدياً كل 8 ساعات؛ C. diff: 500 مج فموياً كل 8 ساعات لمدة 10-14 يوم',
        pediatricDose: '7.5 mg/kg PO/IV every 6-8 hours depending on indication',
        pediatricDoseAr: '7.5 مج/كجم فموياً/وريدياً كل 6-8 ساعات حسب الحالة',
        maxDose: '4 g/day',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment typically needed; monitor for accumulation of metabolites',
      hemodialysis: 'Dialyzable; administer supplemental dose after dialysis session'
    },
    hepaticAdjustment: 'Severe hepatic impairment: reduce dose by 50%',
    contraindications: [
      'فرط الحساسية للنيتروإيميدازولات',
      'الثلث الأول من الحمل (لداء المشعرات، نسبي)',
      'استخدام الكحول أو منتجات تحتوي على بروبيلين جليكول أثناء العلاج'
    ],
    mechanismOfAction: 'Reduced intracellularly to toxic free radicals that damage microbial DNA (bactericidal/amebicidal)',
    mechanismOfActionAr: 'يُختزل داخل الخلية إلى جذور حرة سامة تتلف الحمض النووي الميكروبي (قاتل للبكتيريا والأميبا)',
    halfLife: '6-8 hours',
    monitoringParameters: [
      'الأعراض العصبية (اعتلال عصبي محيطي عند الاستخدام المطول)',
      'تعداد الدم الكامل عند العلاج المطول',
      'وظائف الكبد',
      'الاستجابة السريرية للعدوى'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُمنع الكحول تماماً أثناء العلاج ولمدة 3 أيام بعد آخر جرعة - تفاعل ديسولفيرام شديد',
      'يُفضل تناوله مع الطعام لتقليل الغثيان والطعم المعدني'
    ],
    pearls: [
      'يعطي طعماً معدنياً مميزاً في الفم يُحذر منه المريض مسبقاً',
      'العلاج الفموي بالفانكومايسين أصبح مفضلاً على الميترونيدازول في حالات C. diff الشديدة حسب أحدث الإرشادات',
      'يسبب اعتلال عصبي محيطي قابل للعكس عند الاستخدام المطول أو الجرعات التراكمية العالية'
    ]
  },
  {
    id: 'piperacillin_tazobactam',
    genericName: 'Piperacillin-Tazobactam',
    genericNameAr: 'بيبيراسيلين-تازوباكتام',
    brandNames: ['Zosyn', 'Tazocin', 'تازوسين'],
    drugClass: 'Extended-Spectrum Penicillin/Beta-Lactamase Inhibitor',
    drugClassAr: 'بنسلين واسع الطيف مع مثبط بيتا لاكتاماز',
    category: 'Rx',
    route: ['IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'icu_emergency', 'pharmacy'],
    keyHighlights: [
      'تغطية واسعة جداً تشمل الزائفة الزنجارية واللاهوائيات والمكورات المعوية الحساسة',
      'التسريب الممتد (extended infusion 3-4 ساعات) يحسن النتائج السريرية في العدوى الشديدة',
      'يحتوي على صوديوم بكمية معتبرة - حذر في فشل القلب أو القصور الكلوي'
    ],
    indications: [
      {
        indication: 'Hospital-acquired pneumonia / Intra-abdominal infection / Febrile neutropenia / Pseudomonal infections',
        indicationAr: 'الالتهاب الرئوي المكتسب من المستشفى / عدوى داخل البطن / الحمى العصبية الناتجة عن قلة العدلات / عدوى الزائفة',
        adultDose: '3.375-4.5 g IV every 6-8 hours (extended infusion over 4 hours preferred for severe infection)',
        adultDoseAr: '3.375-4.5 جرام وريدياً كل 6-8 ساعات (يُفضل تسريب ممتد 4 ساعات في العدوى الشديدة)',
        pediatricDose: '100 mg/kg (piperacillin component) IV every 8 hours',
        pediatricDoseAr: '100 مج/كجم (مكون البيبيراسيلين) وريدياً كل 8 ساعات',
        route: 'IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: '2.25-3.375 g IV every 6 hours',
      crclBelow10: '2.25 g IV every 8 hours',
      hemodialysis: '2.25 g IV every 8 hours with supplemental 0.75 g after each dialysis session'
    },
    hepaticAdjustment: 'No specific adjustment typically needed',
    contraindications: [
      'فرط الحساسية للبنسلينات',
      'تاريخ تفاعل حساسية شديد تجاه أي بيتا لاكتام'
    ],
    mechanismOfAction: 'Piperacillin inhibits bacterial cell wall synthesis; tazobactam irreversibly inhibits beta-lactamase enzymes, protecting piperacillin from degradation',
    mechanismOfActionAr: 'البيبيراسيلين يثبط تخليق جدار الخلية البكتيرية؛ التازوباكتام يثبط إنزيمات البيتالاكتاماز بشكل لا رجعي فيحمي البيبيراسيلين من التحلل',
    halfLife: '0.7-1.2 hours',
    monitoringParameters: [
      'وظائف الكلى',
      'علامات الحساسية المفرطة',
      'تعداد الدم الكامل عند العلاج المطول (قلة العدلات، قلة الصفائح)',
      'وظائف الكبد'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية (يُعطى وريدياً فقط)'
    ],
    pearls: [
      'التسريب الممتد لمدة 4 ساعات يحقق تغطية صيدلانية حركية أفضل خاصة ضد الزائفة مقارنة بالتسريب السريع',
      'يرفع INR بشكل غير متوقع عند الاستخدام مع الوارفارين - يراقب عن كثب',
      'من أكثر المضادات استخداماً كعلاج تجريبي واسع الطيف في وحدات العناية المركزة'
    ]
  },
  {
    id: 'rivaroxaban',
    genericName: 'Rivaroxaban',
    genericNameAr: 'ريفاروكسابان',
    brandNames: ['Xarelto', 'زاريلتو'],
    drugClass: 'Factor Xa Inhibitor (DOAC)',
    drugClassAr: 'مثبط العامل Xa (مضاد تخثر فموي مباشر)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'يُؤخذ مع الطعام (الجرعات 15 و20 مج) لتحقيق امتصاص كافٍ - فرق جوهري عن أبيكسابان',
      'الترياق النوعي أنديكسانيت ألفا (Andexxa) متاح لعكس النزيف الحاد',
      'لا يحتاج مراقبة دورية لـ INR مثل الوارفارين'
    ],
    indications: [
      {
        indication: 'Non-valvular atrial fibrillation (stroke prevention) / VTE treatment and prevention',
        indicationAr: 'الرجفان الأذيني غير الصمامي (الوقاية من السكتة) / علاج والوقاية من الانصمام الخثاري الوريدي',
        adultDose: 'AFib: 20 mg PO once daily with food; VTE treatment: 15 mg twice daily x21 days then 20 mg once daily',
        adultDoseAr: 'الرجفان الأذيني: 20 مج فموياً مرة يومياً مع الطعام؛ علاج الانصمام: 15 مج مرتين يومياً لمدة 21 يوم ثم 20 مج مرة يومياً',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'AFib: reduce to 15 mg once daily if CrCl 15-50 mL/min',
      crclBelow10: 'Avoid use if CrCl less than 15 mL/min',
      hemodialysis: 'Not recommended; avoid use in dialysis-dependent patients'
    },
    hepaticAdjustment: 'Avoid in moderate to severe hepatic impairment (Child-Pugh B and C) or any hepatic disease with coagulopathy',
    contraindications: [
      'نزيف نشط ذو أهمية سريرية',
      'أمراض الكبد المصحوبة باعتلال تخثر',
      'الحمل الاصطناعي للصمامات القلبية الميكانيكية',
      'متلازمة أضداد الفوسفوليبيد الثلاثية الإيجابية'
    ],
    blackBoxWarning: 'Premature discontinuation increases risk of thrombotic events; epidural/spinal hematoma risk with neuraxial anesthesia',
    blackBoxWarningAr: 'الإيقاف المبكر يزيد خطر الأحداث الخثارية؛ خطر ورم دموي فوق الجافية/النخاعي مع التخدير النخاعي',
    mechanismOfAction: 'Directly and selectively inhibits factor Xa, interrupting both intrinsic and extrinsic coagulation pathways',
    mechanismOfActionAr: 'يثبط بشكل مباشر وانتقائي العامل Xa، فيقطع مسارات التخثر الداخلية والخارجية',
    halfLife: '5-9 hours (11-13 hours in elderly)',
    monitoringParameters: [
      'وظائف الكلى دورياً (خاصة في المسنين)',
      'علامات النزيف',
      'الهيموجلوبين والهيماتوكريت',
      'الالتزام بتناوله مع الطعام للجرعات العالية'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'يجب تناول جرعتي 15 و20 مج مع الطعام لضمان امتصاص كافٍ (يرتفع التوافر الحيوي من 66% إلى ~100%)',
      'مثبطات CYP3A4 وP-gp القوية (كيتوكونازول، ريتونافير) ترفع مستواه بشكل خطير'
    ],
    pearls: [
      'خلافاً لأبيكسابان، يُعطى مرة واحدة يومياً في معظم الاستطبابات مما يحسن الالتزام',
      'يجب التأكيد على المريض بضرورة تناوله مع وجبة طعام كاملة وليس على معدة فارغة',
      'لا يحتاج جسر هيبارين عند التحويل من الوارفارين في معظم الحالات'
    ]
  },
  {
    id: 'sertraline',
    genericName: 'Sertraline',
    genericNameAr: 'سيرترالين',
    brandNames: ['Zoloft', 'زولوفت'],
    drugClass: 'Selective Serotonin Reuptake Inhibitor (SSRI)',
    drugClassAr: 'مثبط انتقائي لإعادة امتصاص السيروتونين',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'تحذير صندوق أسود لزيادة الأفكار والسلوك الانتحاري عند الأطفال والمراهقين والشباب حتى 24 عاماً',
      'يحتاج 4-6 أسابيع لظهور التأثير العلاجي الكامل على المزاج',
      'لا يُوقف فجأة - خطر متلازمة التوقف (دوخة، أعراض شبيهة بالإنفلونزا، تنميل)'
    ],
    indications: [
      {
        indication: 'Major depressive disorder / Panic disorder / OCD / PTSD / Social anxiety disorder',
        indicationAr: 'الاكتئاب الجسيم / اضطراب الهلع / الوسواس القهري / اضطراب ما بعد الصدمة / الرهاب الاجتماعي',
        adultDose: 'Start 25-50 mg PO once daily, titrate to 50-200 mg once daily',
        adultDoseAr: 'البدء بـ 25-50 مج فموياً مرة يومياً، يُعدل تدريجياً إلى 50-200 مج مرة يومياً',
        pediatricDose: 'OCD ages 6-12: start 25 mg once daily; ages 13-17: start 50 mg once daily',
        pediatricDoseAr: 'الوسواس القهري 6-12 سنة: البدء بـ 25 مج مرة يومياً؛ 13-17 سنة: البدء بـ 50 مج مرة يومياً',
        maxDose: '200 mg/day',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; use with caution',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use lower dose and slower titration in hepatic impairment; consider alternative in severe impairment',
    contraindications: [
      'الاستخدام المتزامن أو خلال 14 يوماً من مثبطات MAO',
      'الاستخدام المتزامن مع بيموزايد',
      'المحلول الفموي لا يُعطى مع ديسلفرام (يحتوي على كحول)'
    ],
    blackBoxWarning: 'Increased risk of suicidal thinking and behavior in children, adolescents, and young adults up to age 24, particularly during initial treatment and dose changes',
    blackBoxWarningAr: 'زيادة خطر الأفكار والسلوكيات الانتحارية لدى الأطفال والمراهقين والشباب حتى سن 24، خاصة في بداية العلاج وتغيير الجرعة',
    mechanismOfAction: 'Selectively inhibits presynaptic serotonin reuptake, increasing serotonergic neurotransmission',
    mechanismOfActionAr: 'يثبط انتقائياً إعادة امتصاص السيروتونين قبل المشبكي فيزيد النقل العصبي السيروتونيني',
    halfLife: '26 hours',
    monitoringParameters: [
      'المزاج والأفكار الانتحارية (خاصة في أول شهرين)',
      'علامات متلازمة السيروتونين',
      'الصوديوم في الدم (خطر نقص صوديوم الدم خاصة في المسنين)',
      'وظائف الكبد'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Safe',
    foodInteractions: [
      'المحلول الفموي يُخفف بالماء أو العصير فقط، لا يُخلط مع الكحول',
      'يُؤخذ مع الطعام لتقليل الغثيان'
    ],
    pearls: [
      'يُعتبر من أكثر SSRIs أماناً نسبياً أثناء الحمل والرضاعة مقارنة بالفئة',
      'التأثير العلاجي الكامل يحتاج وقتاً (4-6 أسابيع) - يجب توعية المريض لعدم التوقف المبكر',
      'خطر متلازمة السيروتونين يزداد بشدة مع الترامادول والمثبطات الأخرى للسيروتونين'
    ]
  },
  {
    id: 'haloperidol',
    genericName: 'Haloperidol',
    genericNameAr: 'هالوبيريدول',
    brandNames: ['Haldol', 'هالدول'],
    drugClass: 'Typical (First-Generation) Antipsychotic',
    drugClassAr: 'مضاد ذهان تقليدي (الجيل الأول)',
    category: 'Rx',
    route: ['PO', 'IM', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'تحذير صندوق أسود لزيادة الوفيات في المرضى المسنين المصابين بالخرف',
      'الإعطاء الوريدي غير معتمد رسمياً من FDA لكنه شائع الاستخدام في الهياج الحاد - يحتاج تخطيط قلب لمراقبة QT',
      'خطر مرتفع لأعراض خارج هرمية (EPS) مقارنة بمضادات الذهان غير التقليدية'
    ],
    indications: [
      {
        indication: 'Acute psychosis / Severe agitation / Delirium (off-label) / Tourette syndrome',
        indicationAr: 'الذهان الحاد / الهياج الشديد / الهذيان (خارج الاستطباب المعتمد) / متلازمة توريت',
        adultDose: '0.5-5 mg PO/IM every 4-8 hours as needed; acute agitation: 2-5 mg IM',
        adultDoseAr: '0.5-5 مج فموياً/عضلياً كل 4-8 ساعات عند الحاجة؛ الهياج الحاد: 2-5 مج عضلياً',
        maxDose: '20 mg/day (higher doses used in refractory psychosis under specialist supervision)',
        route: 'PO/IM/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed; use with caution',
      crclBelow10: 'Use lower starting dose and titrate slowly',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use lower starting dose in hepatic impairment; metabolized extensively by the liver',
    contraindications: [
      'مرض باركنسون الشديد',
      'الغيبوبة أو الاكتئاب الشديد للجهاز العصبي المركزي',
      'إطالة QT الخلقية أو تاريخ اضطراب نظم بطيني',
      'فرط الحساسية للبوتيروفينونات'
    ],
    blackBoxWarning: 'Increased mortality in elderly patients with dementia-related psychosis; not approved for treatment of dementia-related psychosis',
    blackBoxWarningAr: 'زيادة معدل الوفيات في المرضى المسنين المصابين بذهان مرتبط بالخرف؛ غير معتمد لعلاج الذهان المرتبط بالخرف',
    mechanismOfAction: 'Blocks postsynaptic dopamine D2 receptors in the mesolimbic pathway',
    mechanismOfActionAr: 'يحجب مستقبلات الدوبامين D2 بعد المشبكية في المسار الطرفي الجاذبي',
    halfLife: '14-26 hours (oral), 20.7 hours (IM)',
    monitoringParameters: [
      'تخطيط القلب (QTc) خاصة مع الإعطاء الوريدي',
      'الأعراض خارج الهرمية (رعاش، تيبس، عسر الحركة)',
      'علامات المتلازمة الخبيثة للذهان (حمى، تيبس عضلي، تخليط)',
      'البوتاسيوم والمغنيسيوم في الدم'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية كبيرة؛ يُتجنب الكحول لزيادة التثبيط المركزي'
    ],
    pearls: [
      'الإعطاء الوريدي يحمل خطراً أعلى لإطالة QT ونوبات تورساد دي بوينت مقارنة بالعضلي أو الفموي',
      'لا يزال الخيار الشائع في حالات الهياج الحاد بالطوارئ رغم توفر بدائل أحدث',
      'ديفينهيدرامين أو بنزتروبين يُستخدمان لعلاج الأعراض خارج الهرمية الحادة الناتجة عنه'
    ]
  },
  {
    id: 'lorazepam',
    genericName: 'Lorazepam',
    genericNameAr: 'لورازيبام',
    brandNames: ['Ativan', 'أتيفان'],
    drugClass: 'Benzodiazepine',
    drugClassAr: 'بنزوديازيبين',
    category: 'Controlled',
    route: ['PO', 'IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'يُستقلب مباشرة بالاقتران الجلوكورونيدي دون أكسدة كبدية - الأفضل في كبار السن والقصور الكبدي',
      'الخط الأول في الحالة الصرعية الحادة',
      'تحذير صندوق أسود للاستخدام المتزامن مع الأفيونات - خطر تثبيط تنفسي قاتل'
    ],
    indications: [
      {
        indication: 'Status epilepticus / Anxiety / Alcohol withdrawal / Procedural sedation',
        indicationAr: 'الحالة الصرعية / القلق / أعراض انسحاب الكحول / التخدير الإجرائي',
        adultDose: 'Status epilepticus: 4 mg IV, may repeat once after 10-15 min; Anxiety: 0.5-2 mg PO 2-3 times daily',
        adultDoseAr: 'الحالة الصرعية: 4 مج وريدياً، يمكن تكرارها مرة بعد 10-15 دقيقة؛ القلق: 0.5-2 مج فموياً 2-3 مرات يومياً',
        maxDose: '10 mg/day (varies by indication)',
        route: 'PO/IV/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'Use with caution; may accumulate glucuronide metabolite',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Preferred benzodiazepine in hepatic impairment due to glucuronidation (non-oxidative) metabolism; still use lowest effective dose',
    contraindications: [
      'الزرق الحاد مغلق الزاوية',
      'فرط الحساسية للبنزوديازيبينات',
      'قصور تنفسي حاد شديد (ما عدا عند التنبيب)',
      'انقطاع التنفس أثناء النوم الشديد'
    ],
    blackBoxWarning: 'Concomitant use with opioids may result in profound sedation, respiratory depression, coma, and death',
    blackBoxWarningAr: 'الاستخدام المتزامن مع الأفيونات قد يسبب تخديراً عميقاً وتثبيطاً تنفسياً وغيبوبة ووفاة',
    mechanismOfAction: 'Enhances GABA-A receptor-mediated chloride channel opening, increasing inhibitory neurotransmission',
    mechanismOfActionAr: 'يعزز فتح قناة الكلوريد المرتبطة بمستقبل GABA-A فيزيد النقل العصبي المثبط',
    halfLife: '12-18 hours',
    monitoringParameters: [
      'مستوى الوعي ومعدل التنفس',
      'علامات الإدمان أو التحمل عند الاستخدام المطول',
      'أعراض الانسحاب عند الإيقاف المفاجئ',
      'وظائف الكبد والكلى'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُمنع الكحول تماماً لخطر التثبيط التنفسي الشديد والتخدير العميق'
    ],
    pearls: [
      'الخيار المفضل بين البنزوديازيبينات في المرضى كبار السن أو ذوي القصور الكبدي بسبب استقلابه البسيط',
      'يُستخدم كخط أول معتمد عالمياً لعلاج الحالة الصرعية الحادة قبل الفينيتوين',
      'لا يُوقف فجأة بعد استخدام مطول - خطر نوبات انسحاب قد تكون قاتلة'
    ]
  },
  {
    id: 'salbutamol',
    genericName: 'Salbutamol (Albuterol)',
    genericNameAr: 'سالبوتامول (ألبوتيرول)',
    brandNames: ['Ventolin', 'ProAir', 'فنتولين'],
    drugClass: 'Short-Acting Beta-2 Agonist (SABA)',
    drugClassAr: 'ناهض بيتا-2 قصير المفعول',
    category: 'Rx',
    route: ['Inhalation', 'Nebulized', 'PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'pediatrics', 'internal_medicine', 'nursing'],
    keyHighlights: [
      'دواء الإنقاذ الأساسي في نوبات الربو الحادة والـ COPD المتفاقم',
      'الإفراط في الاستخدام (أكثر من علبة شهرياً) مؤشر خطر لسوء التحكم بالربو',
      'قد يسبب تسرعاً قلبياً ورعاشاً ونقص بوتاسيوم عابر خاصة بالجرعات العالية المنبهة'
    ],
    indications: [
      {
        indication: 'Acute bronchospasm / Asthma exacerbation / COPD exacerbation / Exercise-induced bronchospasm prevention',
        indicationAr: 'تشنج قصبي حاد / نوبة ربو / تفاقم الانسداد الرئوي المزمن / الوقاية من تشنج القصبات الناتج عن الرياضة',
        adultDose: 'MDI: 2 puffs (90-180 mcg) every 4-6 hours PRN; Nebulizer: 2.5 mg every 4-6 hours PRN; Acute severe: may repeat every 20 min x3',
        adultDoseAr: 'بخاخ جرعة مقننة: نفثتان (90-180 ميكروجرام) كل 4-6 ساعات عند الحاجة؛ بالبخار: 2.5 مج كل 4-6 ساعات؛ الحالات الحادة: تكرار كل 20 دقيقة 3 مرات',
        pediatricDose: 'Nebulizer: 0.15 mg/kg (min 2.5 mg) every 4-6 hours PRN',
        pediatricDoseAr: 'بالبخار: 0.15 مج/كجم (حد أدنى 2.5 مج) كل 4-6 ساعات عند الحاجة',
        route: 'Inhalation/Nebulized'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment needed',
    contraindications: [
      'فرط الحساسية للسالبوتامول',
      'عدم تحمل اللاكتوز الشديد مع بعض أشكال البودرة الجافة (تحتوي بروتين الحليب)'
    ],
    mechanismOfAction: 'Selectively stimulates beta-2 adrenergic receptors in bronchial smooth muscle, causing bronchodilation via increased cAMP',
    mechanismOfActionAr: 'ينبه انتقائياً مستقبلات بيتا-2 الأدرينالية في العضلات الملساء القصبية مسبباً توسع القصبات عبر زيادة cAMP',
    halfLife: '2.7-5 hours',
    monitoringParameters: [
      'معدل ضربات القلب',
      'البوتاسيوم في الدم خاصة مع الجرعات العالية المتكررة',
      'ذروة التدفق الزفيري (Peak Flow) ووظائف الرئة',
      'تكرار استخدام دواء الإنقاذ (مؤشر للتحكم بالربو)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية'
    ],
    pearls: [
      'زيادة استخدام بخاخ الإنقاذ (أكثر من مرتين أسبوعياً) يشير لحاجة تصعيد العلاج الوقائي',
      'يُعطى بالتقنية الصحيحة مع غرفة استنشاق (spacer) لتحسين الوصول الرئوي وتقليل الترسب الفموي',
      'في نوبات الربو الحادة الشديدة يُستخدم بجرعات متكررة ومستمرة تحت المراقبة'
    ]
  },
  {
    id: 'insulin_regular',
    genericName: 'Insulin Regular (Short-Acting)',
    genericNameAr: 'إنسولين عادي (قصير المفعول)',
    brandNames: ['Humulin R', 'Novolin R', 'هيومولين آر'],
    drugClass: 'Short-Acting Insulin',
    drugClassAr: 'إنسولين قصير المفعول',
    category: 'Rx',
    route: ['SC', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'النوع الوحيد من الإنسولين المعتمد للإعطاء الوريدي - أساسي في بروتوكولات الحماض الكيتوني السكري',
      'يُعطى تحت الجلد 30 دقيقة قبل الوجبة بخلاف نظائر الإنسولين سريعة المفعول',
      'خطر نقص سكر الدم يتطلب مراقبة دقيقة خاصة في التسريب الوريدي المستمر'
    ],
    indications: [
      {
        indication: 'Diabetic ketoacidosis / Hyperglycemic emergencies / Perioperative glucose control / Mealtime coverage',
        indicationAr: 'الحماض الكيتوني السكري / طوارئ ارتفاع سكر الدم / التحكم بالسكر المحيط بالجراحة / تغطية الوجبات',
        adultDose: 'DKA: 0.1 units/kg/hour IV infusion after initial bolus; Subcutaneous mealtime: individualized per sliding scale or carb ratio',
        adultDoseAr: 'الحماض الكيتوني: 0.1 وحدة/كجم/ساعة تسريب وريدي بعد جرعة بلعية أولية؛ تحت الجلد للوجبات: فردي حسب المقياس المتدرج أو نسبة الكربوهيدرات',
        route: 'IV/SC'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce dose by 25%; monitor glucose closely',
      crclBelow10: 'Reduce dose by 25-50%; monitor glucose closely',
      hemodialysis: 'Dose per glucose monitoring; insulin requirements may decrease'
    },
    hepaticAdjustment: 'Reduce dose in significant hepatic impairment; monitor glucose closely as hepatic gluconeogenesis is impaired',
    contraindications: [
      'نوبة نقص سكر الدم الحالية',
      'فرط الحساسية لمكونات التركيبة'
    ],
    mechanismOfAction: 'Binds to insulin receptors, facilitating cellular glucose uptake and promoting glycogen, protein, and lipid synthesis',
    mechanismOfActionAr: 'يرتبط بمستقبلات الإنسولين فيسهل دخول الجلوكوز للخلايا ويعزز تخليق الجليكوجين والبروتين والدهون',
    halfLife: '30-60 minutes (IV); clinical effect subcutaneous 5-8 hours',
    monitoringParameters: [
      'سكر الدم كل ساعة في التسريب الوريدي المستمر',
      'البوتاسيوم في الدم (ينخفض مع الإنسولين، خطير في بروتوكول الحماض الكيتوني)',
      'الفجوة الأنيونية وغازات الدم في الحماض الكيتوني',
      'علامات نقص سكر الدم'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُعطى 30 دقيقة قبل الوجبة للسماح ببدء التأثير مع رفع سكر الطعام',
      'الكحول يزيد خطر نقص سكر الدم المتأخر'
    ],
    pearls: [
      'الإنسولين الوريدي الوحيد المعتمد وأساس بروتوكولات علاج الحماض الكيتوني السكري وفرط الأسمولية',
      'يجب تصحيح البوتاسيوم قبل أو مع بدء الإنسولين في الحماض الكيتوني لتجنب نقص بوتاسيوم خطير',
      'يلتصق بأنابيب التسريب البلاستيكية - يُنصح بتمرير كمية من المحلول عبر الأنبوب قبل التوصيل بالمريض'
    ]
  },
  {
    id: 'norepinephrine',
    genericName: 'Norepinephrine',
    genericNameAr: 'نورإبينفرين',
    brandNames: ['Levophed', 'ليفوفيد'],
    drugClass: 'Vasopressor (Alpha/Beta Adrenergic Agonist)',
    drugClassAr: 'رافع للضغط (ناهض أدريناليني ألفا/بيتا)',
    category: 'Rx',
    route: ['IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology', 'nursing'],
    keyHighlights: [
      'الرافع الضغطي من الخط الأول في الصدمة الإنتانية حسب إرشادات Surviving Sepsis',
      'يُفضل إعطاؤه عبر قسطرة وريدية مركزية لتقليل خطر النخر الجلدي عند التسرب',
      'التسرب خارج الوعاء يُعالج فوراً بحقن الفينتولامين موضعياً'
    ],
    indications: [
      {
        indication: 'Septic shock / Cardiogenic shock / Severe hypotension',
        indicationAr: 'الصدمة الإنتانية / الصدمة القلبية / انخفاض الضغط الشديد',
        adultDose: 'Start 0.05-0.1 mcg/kg/min IV infusion, titrate to target MAP (usually ≥65 mmHg)',
        adultDoseAr: 'البدء بـ 0.05-0.1 ميكروجرام/كجم/دقيقة تسريب وريدي، يُعدل للوصول لضغط شرياني متوسط مستهدف (عادة ≥65)',
        maxDose: 'Typically up to 1-3 mcg/kg/min in refractory shock under specialist guidance',
        route: 'IV continuous infusion (central line preferred)'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; titrate to hemodynamic response',
      hemodialysis: 'Not dialyzed; titrate to hemodynamic effect'
    },
    hepaticAdjustment: 'No specific adjustment; titrate to hemodynamic response',
    contraindications: [
      'نقص حجم الدم غير المصحح (يجب تعويض السوائل أولاً)',
      'الرجفان البطيني',
      'فرط الحساسية للسلفايت (بعض التركيبات)'
    ],
    mechanismOfAction: 'Potent alpha-1 agonist causing vasoconstriction, with moderate beta-1 agonism increasing cardiac contractility and heart rate',
    mechanismOfActionAr: 'ناهض قوي لمستقبلات ألفا-1 يسبب تضيقاً وعائياً، مع تأثير معتدل على بيتا-1 يزيد انقباضية القلب ومعدل ضرباته',
    halfLife: '2-2.5 minutes',
    monitoringParameters: [
      'ضغط الدم الشرياني المستمر (يُفضل قسطرة شريانية)',
      'معدل ضربات القلب وتخطيط القلب',
      'علامات نقص التروية الطرفية (تغير لون الأصابع)',
      'موقع الحقن لعلامات التسرب خارج الوعاء',
      'لاكتات الدم كمؤشر على كفاية التروية'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'لا توجد تفاعلات غذائية (يُعطى وريدياً فقط في بيئة العناية المركزة)'
    ],
    pearls: [
      'يُعتبر الرافع الضغطي الأول المفضل في الصدمة الإنتانية بدلاً من الدوبامين بسبب ملف أمان أفضل',
      'يجب تصحيح نقص حجم الدم بالسوائل قبل أو بالتوازي مع بدء الرافع الضغطي',
      'التسرب خارج الوعاء خطر جداً وقد يسبب نخراً جلدياً - الفينتولامين هو الترياق الموضعي'
    ]
  },
  {
    id: 'midazolam',
    genericName: 'Midazolam',
    genericNameAr: 'ميدازولام',
    brandNames: ['Versed', 'فيرسيد'],
    drugClass: 'Benzodiazepine (Short-Acting)',
    drugClassAr: 'بنزوديازيبين قصير المفعول',
    category: 'Controlled',
    route: ['IV', 'IM', 'Intranasal', 'PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'pharmacy', 'nursing'],
    keyHighlights: [
      'تحذير صندوق أسود لخطر التثبيط التنفسي القاتل، خاصة مع الأفيونات أو الحقن الوريدي السريع',
      'أكثر البنزوديازيبينات استخداماً في التخدير الإجرائي والتسكين في العناية المركزة',
      'نصف عمر قصير لكنه يتراكم عند التسريب المستمر المطول خاصة في السمنة والقصور الكلوي'
    ],
    indications: [
      {
        indication: 'Procedural sedation / ICU sedation / Status epilepticus (alternative) / Pre-anesthetic',
        indicationAr: 'التخدير الإجرائي / التسكين في العناية المركزة / الحالة الصرعية (بديل) / ما قبل التخدير',
        adultDose: 'Procedural sedation: 1-2.5 mg IV slowly, titrate; ICU infusion: 0.02-0.1 mg/kg/hour',
        adultDoseAr: 'التخدير الإجرائي: 1-2.5 مج وريدياً ببطء، يُعدل تدريجياً؛ تسريب العناية المركزة: 0.02-0.1 مج/كجم/ساعة',
        pediatricDose: '0.05-0.1 mg/kg IV for procedural sedation (max initial dose 2 mg)',
        pediatricDoseAr: '0.05-0.1 مج/كجم وريدياً للتخدير الإجرائي (حد أقصى للجرعة الأولى 2 مج)',
        route: 'IV/IM/Intranasal'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce dose; active metabolite may accumulate',
      crclBelow10: 'Reduce dose significantly; active metabolite accumulates markedly',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose by 50% in significant hepatic impairment due to prolonged half-life',
    contraindications: [
      'الزرق الحاد مغلق الزاوية',
      'الصدمة الحادة أو الغيبوبة',
      'فرط الحساسية للبنزوديازيبينات',
      'عدم توفر معدات مراقبة التنفس والإنعاش'
    ],
    blackBoxWarning: 'Can cause respiratory depression and arrest, especially when used for sedation in noncritical care settings or combined with opioids; requires continuous monitoring of respiratory and cardiac function',
    blackBoxWarningAr: 'قد يسبب تثبيطاً وتوقفاً تنفسياً، خاصة عند الاستخدام للتسكين خارج بيئة العناية الحرجة أو مع الأفيونات؛ يتطلب مراقبة مستمرة للوظيفة التنفسية والقلبية',
    mechanismOfAction: 'Enhances GABA-A receptor-mediated chloride influx, producing sedation, anxiolysis, and anterograde amnesia',
    mechanismOfActionAr: 'يعزز دخول الكلوريد عبر مستقبل GABA-A فيُحدث تسكيناً وتخفيف قلق وفقدان ذاكرة تقدمي',
    halfLife: '1.8-6.4 hours (prolonged with continuous infusion or hepatic/renal impairment)',
    monitoringParameters: [
      'معدل التنفس وتشبع الأكسجين المستمر',
      'ضغط الدم ومعدل ضربات القلب',
      'مستوى التسكين (مقياس RASS في العناية المركزة)',
      'علامات التراكم عند التسريب المطول'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'عصير الجريب فروت يرفع مستواه الدموي عبر تثبيط CYP3A4 - يُتجنب',
      'يُمنع الكحول لخطر التثبيط التنفسي المضاعف'
    ],
    pearls: [
      'الفلومازينيل هو الترياق النوعي لعكس تأثير البنزوديازيبينات الحاد عند الجرعة الزائدة',
      'يسبب فقدان ذاكرة تقدمي مفيد في الإجراءات لكنه قد يُقلق المريض إذا لم يُشرح مسبقاً',
      'التسريب المطول في العناية المركزة يرتبط بإطالة مدة التهوية الميكانيكية - تُفضل البروبوفول أو الديكسميديتوميدين في كثير من البروتوكولات الحديثة'
    ]
  },
  {
    id: 'propofol',
    genericName: 'Propofol',
    genericNameAr: 'بروبوفول',
    brandNames: ['Diprivan', 'ديبريفان'],
    drugClass: 'General Anesthetic/Sedative-Hypnotic',
    drugClassAr: 'مخدر عام ومهدئ منوم',
    category: 'Rx',
    route: ['IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'pharmacy', 'nursing'],
    keyHighlights: [
      'مستحلب دهني - خطر عدوى بكتيرية إذا لم يُستخدم بتقنية معقمة صارمة؛ يُستبدل كل 12 ساعة',
      'متلازمة التسريب بالبروبوفول (PRIS) خطر قاتل نادر مع الجرعات العالية أو المطولة',
      'لا يملك تأثيراً مسكناً - يحتاج دمج مع مسكن أفيوني في الإجراءات المؤلمة'
    ],
    indications: [
      {
        indication: 'Induction and maintenance of general anesthesia / ICU sedation / Procedural sedation',
        indicationAr: 'بدء واستمرار التخدير العام / التسكين في العناية المركزة / التخدير الإجرائي',
        adultDose: 'Induction: 1.5-2.5 mg/kg IV; ICU sedation infusion: 5-50 mcg/kg/min, titrate to effect',
        adultDoseAr: 'البدء: 1.5-2.5 مج/كجم وريدياً؛ تسريب تسكين العناية المركزة: 5-50 ميكروجرام/كجم/دقيقة، يُعدل حسب الاستجابة',
        route: 'IV continuous infusion or bolus'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; titrate to effect',
      hemodialysis: 'Not dialyzed (highly lipophilic); no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment needed; titrate to clinical effect',
    contraindications: [
      'فرط الحساسية للبروبوفول أو مكونات المستحلب (فول الصويا، البيض)',
      'عدم توفر معدات دعم التنفس والدورة الدموية',
      'حذر في عدم استقرار الدورة الدموية الشديد'
    ],
    blackBoxWarning: 'Not indicated for ICU sedation in pediatric patients due to increased mortality risk observed in trials',
    blackBoxWarningAr: 'غير معتمد للتسكين في العناية المركزة للأطفال بسبب زيادة خطر الوفيات الملاحظة في الدراسات',
    mechanismOfAction: 'Potentiates GABA-A receptor activity, producing rapid onset sedation and hypnosis with minimal analgesic effect',
    mechanismOfActionAr: 'يعزز نشاط مستقبل GABA-A فيُحدث تسكيناً وتنويماً سريع البداية مع تأثير مسكن ضئيل',
    halfLife: '2-24 hours (context-sensitive, rapid redistribution)',
    monitoringParameters: [
      'ضغط الدم المستمر (خطر انخفاض ضغط كبير عند البدء)',
      'معدل التنفس وتشبع الأكسجين',
      'الدهون الثلاثية عند التسريب المطول (أكثر من 48 ساعة)',
      'علامات متلازمة تسريب البروبوفول (حماض استقلابي، اضطراب نظم، فشل كلوي)',
      'الكرياتين كيناز عند الاشتباه بـ PRIS'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'المستحلب يحتوي سعرات دهنية (1.1 kcal/mL) يجب احتسابها في التغذية الكلية عند التسريب المطول'
    ],
    pearls: [
      'يُستبدل خط التسريب والمحلول كل 12 ساعة بسبب قابلية المستحلب الدهني لدعم نمو البكتيريا',
      'بداية ونهاية تأثير سريعة جداً تجعله مثالياً للإجراءات القصيرة والتخدير الذي يحتاج استيقاظاً سريعاً',
      'متلازمة تسريب البروبوفول نادرة لكنها قاتلة - تُشتبه بها عند حماض استقلابي غير مفسر مع اضطراب نظم قلبي في مريض على تسريب مطول بجرعة عالية'
    ]
  },
  {
    id: 'fentanyl',
    genericName: 'Fentanyl',
    genericNameAr: 'فنتانيل',
    brandNames: ['Sublimaze', 'Duragesic', 'فنتانيل'],
    drugClass: 'Synthetic Opioid Analgesic',
    drugClassAr: 'مسكن أفيوني اصطناعي',
    category: 'Controlled',
    route: ['IV', 'Transdermal', 'Transmucosal'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'oncology', 'pharmacy', 'nursing'],
    keyHighlights: [
      'أقوى 50-100 ضعف من المورفين - الجرعات تُقاس بالميكروجرام وليس الملليجرام',
      'اللصقة الجلدية غير مناسبة للألم الحاد بسبب بطء بداية التأثير (12-24 ساعة) - للألم المزمن المستقر فقط',
      'الحرارة المرتفعة (حمى، ساونا، وسادة تدفئة) تزيد امتصاص اللصقة بشكل خطير'
    ],
    indications: [
      {
        indication: 'Severe acute pain / Procedural analgesia / Chronic cancer pain (transdermal) / Anesthesia adjunct',
        indicationAr: 'الألم الحاد الشديد / التسكين الإجرائي / ألم السرطان المزمن (اللصقة) / مساعد في التخدير',
        adultDose: 'IV: 25-100 mcg every 1-2 hours PRN or 25-200 mcg/hour infusion; Transdermal: 12-100 mcg/hour patch every 72 hours (opioid-tolerant patients only)',
        adultDoseAr: 'وريدي: 25-100 ميكروجرام كل 1-2 ساعة عند الحاجة أو تسريب 25-200 ميكروجرام/ساعة؛ لصقة جلدية: 12-100 ميكروجرام/ساعة كل 72 ساعة (للمرضى المتحملين للأفيونات فقط)',
        route: 'IV/Transdermal/Transmucosal'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Use with caution; reduce dose by 25%',
      crclBelow10: 'Use with caution; reduce dose by 50%; preferred opioid in renal failure due to inactive metabolites',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose and extend interval in hepatic impairment; monitor closely for prolonged effect',
    contraindications: [
      'القصور التنفسي الشديد غير المدعوم',
      'انسداد معوي شللي',
      'الاستخدام المتزامن مع مثبطات MAO خلال 14 يوماً',
      'اللصقة الجلدية في المرضى غير المتحملين للأفيونات (opioid-naive)'
    ],
    blackBoxWarning: 'Addiction, abuse, and misuse risk; life-threatening respiratory depression; accidental exposure risk especially in children with transdermal patches; neonatal opioid withdrawal syndrome; CYP3A4 drug interaction risk',
    blackBoxWarningAr: 'خطر الإدمان وسوء الاستخدام؛ تثبيط تنفسي مهدد للحياة؛ خطر التعرض العرضي خاصة للأطفال مع اللصقات الجلدية؛ متلازمة انسحاب الأفيون عند حديثي الولادة؛ خطر التفاعل الدوائي عبر CYP3A4',
    mechanismOfAction: 'Potent mu-opioid receptor agonist in the central nervous system, producing analgesia and sedation',
    mechanismOfActionAr: 'ناهض قوي لمستقبلات مو الأفيونية في الجهاز العصبي المركزي، يُحدث تسكيناً وتخديراً',
    halfLife: '2-4 hours (IV); 17 hours (transdermal, due to skin depot)',
    monitoringParameters: [
      'معدل التنفس ومستوى الوعي',
      'ضغط الدم',
      'مستوى الألم',
      'علامات الإدمان أو سوء الاستخدام',
      'موقع اللصقة وعلامات الحرارة الموضعية'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُمنع الكحول تماماً لخطر التثبيط التنفسي الشديد',
      'عصير الجريب فروت يرفع مستواه عبر تثبيط CYP3A4 المعوي'
    ],
    pearls: [
      'اللصقات الجلدية المستعملة تحتوي كمية متبقية كافية لقتل طفل عند الملامسة - يجب التخلص منها بطيها على نفسها',
      'النالوكسون هو الترياق النوعي، وقد يحتاج جرعات متكررة بسبب قصر نصف عمره مقارنة بالفنتانيل طويل التأثير',
      'يُفضل في القصور الكلوي لأن مستقلباته غير نشطة خلافاً للمورفين'
    ]
  },
  {
    id: 'morphine',
    genericName: 'Morphine',
    genericNameAr: 'مورفين',
    brandNames: ['MS Contin', 'Roxanol', 'مورفين سلفات'],
    drugClass: 'Opioid Analgesic (Full Agonist)',
    drugClassAr: 'مسكن أفيوني (ناهض كامل)',
    category: 'Controlled',
    route: ['PO', 'IV', 'IM', 'SC'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'oncology', 'pharmacy', 'nursing'],
    keyHighlights: [
      'المستقلب النشط (M6G) يتراكم في القصور الكلوي مسبباً تثبيطاً تنفسياً مطولاً وغير متوقع',
      'معيار المقارنة (gold standard) لجميع المسكنات الأفيونية الأخرى في حساب الجرعات المكافئة',
      'يُستخدم على نطاق واسع في رعاية نهاية الحياة والرعاية التلطيفية'
    ],
    indications: [
      {
        indication: 'Moderate to severe acute and chronic pain / Dyspnea in palliative care',
        indicationAr: 'الألم الحاد والمزمن المتوسط إلى الشديد / ضيق التنفس في الرعاية التلطيفية',
        adultDose: 'IV: 2-4 mg every 2-4 hours PRN; Oral immediate-release: 15-30 mg every 4 hours PRN',
        adultDoseAr: 'وريدي: 2-4 مج كل 2-4 ساعات عند الحاجة؛ فموي سريع المفعول: 15-30 مج كل 4 ساعات عند الحاجة',
        pediatricDose: '0.1-0.2 mg/kg IV every 2-4 hours PRN',
        pediatricDoseAr: '0.1-0.2 مج/كجم وريدياً كل 2-4 ساعات عند الحاجة',
        route: 'PO/IV/IM/SC'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed; monitor for accumulation',
      crcl10to50: 'Reduce dose by 25%; extend interval; monitor closely for sedation',
      crclBelow10: 'Avoid use if possible; active metabolites accumulate significantly; consider fentanyl instead',
      hemodialysis: 'Partially dialyzed; dose per clinical response, monitor closely'
    },
    hepaticAdjustment: 'Reduce dose and extend interval in significant hepatic impairment',
    contraindications: [
      'القصور التنفسي الشديد غير المدعوم',
      'الربو الحاد الشديد',
      'انسداد معوي شللي أو انسداد معوي معروف أو مشتبه به',
      'الاستخدام المتزامن مع مثبطات MAO خلال 14 يوماً'
    ],
    blackBoxWarning: 'Addiction, abuse, and misuse risk; life-threatening respiratory depression; accidental ingestion risk especially in children; neonatal opioid withdrawal syndrome; CYP interaction risks',
    blackBoxWarningAr: 'خطر الإدمان وسوء الاستخدام؛ تثبيط تنفسي مهدد للحياة؛ خطر الابتلاع العرضي خاصة للأطفال؛ متلازمة انسحاب الأفيون عند حديثي الولادة؛ مخاطر التفاعل عبر إنزيمات السيتوكروم',
    mechanismOfAction: 'Binds mu-opioid receptors in the central nervous system, inhibiting ascending pain pathways and altering pain perception',
    mechanismOfActionAr: 'يرتبط بمستقبلات مو الأفيونية في الجهاز العصبي المركزي فيثبط مسارات الألم الصاعدة ويغير إدراك الألم',
    halfLife: '2-4 hours (parent); active metabolite morphine-6-glucuronide accumulates in renal impairment',
    monitoringParameters: [
      'معدل التنفس ومستوى الوعي',
      'مستوى الألم باستخدام مقياس موثق',
      'وظائف الكلى (لخطر تراكم المستقلبات)',
      'حركة الأمعاء (الإمساك شائع جداً)',
      'علامات الإدمان أو سوء الاستخدام'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُمنع الكحول تماماً لخطر التثبيط التنفسي الشديد',
      'الأقراص المعدلة الإطلاق لا تُكسر أو تُمضغ - خطر إطلاق الجرعة الكاملة دفعة واحدة'
    ],
    pearls: [
      'الإمساك الناتج عن الأفيونات لا يتطور له تحمل - يحتاج ملين وقائي روتيني طوال مدة العلاج',
      'يُستخدم بجرعات منخفضة ومتكررة في علاج ضيق التنفس في الرعاية التلطيفية دون الحاجة لتسكين كامل للألم',
      'النالوكسون ترياق نوعي فعال، لكن مدة تأثيره أقصر من المورفين فقد يحتاج جرعات متكررة'
    ]
  },
  {
    id: 'acetaminophen',
    genericName: 'Acetaminophen (Paracetamol)',
    genericNameAr: 'أسيتامينوفين (باراسيتامول)',
    brandNames: ['Tylenol', 'Panadol', 'بانادول'],
    drugClass: 'Non-Opioid Analgesic/Antipyretic',
    drugClassAr: 'مسكن وخافض حرارة غير أفيوني',
    category: 'OTC',
    route: ['PO', 'IV', 'PR'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pharmacy', 'pediatrics', 'internal_medicine'],
    keyHighlights: [
      'السبب الأول للفشل الكبدي الحاد الناتج عن الأدوية - الجرعة القصوى الصارمة 4 جم/يوم (أقل في مدمني الكحول)',
      'الترياق النوعي N-أسيتيل سيستئين فعال جداً إذا أُعطي خلال 8-10 ساعات من التسمم',
      'آمن نسبياً في القصور الكلوي والكبدي الخفيف بالجرعات المعتادة خلافاً لـ NSAIDs'
    ],
    indications: [
      {
        indication: 'Mild to moderate pain / Fever',
        indicationAr: 'الألم الخفيف إلى المتوسط / الحمى',
        adultDose: '500-1000 mg PO every 4-6 hours PRN',
        adultDoseAr: '500-1000 مج فموياً كل 4-6 ساعات عند الحاجة',
        pediatricDose: '10-15 mg/kg PO every 4-6 hours PRN',
        pediatricDoseAr: '10-15 مج/كجم فموياً كل 4-6 ساعات عند الحاجة',
        maxDose: '4000 mg/day (3000 mg/day or less in chronic alcohol use or hepatic disease)',
        route: 'PO/IV/PR'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Extend dosing interval to every 6 hours',
      crclBelow10: 'Extend dosing interval to every 8 hours',
      hemodialysis: 'Dialyzable; administer supplemental dose after dialysis session'
    },
    hepaticAdjustment: 'Avoid in severe hepatic impairment or active liver disease; reduce max daily dose to 2-3 g in chronic liver disease',
    contraindications: [
      'فرط الحساسية للأسيتامينوفين',
      'مرض الكبد الحاد الشديد',
      'حذر شديد مع تعاطي الكحول المزمن'
    ],
    mechanismOfAction: 'Inhibits central prostaglandin synthesis (COX inhibition primarily in CNS); exact mechanism not fully elucidated; minimal peripheral anti-inflammatory effect',
    mechanismOfActionAr: 'يثبط تخليق البروستاجلاندين مركزياً (تثبيط COX بشكل أساسي في الجهاز العصبي المركزي)؛ الآلية الدقيقة غير مكتملة الفهم؛ تأثير مضاد التهاب محيطي ضئيل',
    halfLife: '2-3 hours',
    monitoringParameters: [
      'وظائف الكبد عند الاستخدام المزمن أو الجرعات العالية',
      'الجرعة اليومية التراكمية من جميع المصادر (شامل تركيبات البرد المركبة)',
      'الاستجابة للألم والحرارة'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'الاستهلاك المزمن للكحول يزيد خطر السمية الكبدية بشكل كبير حتى بالجرعات العلاجية'
    ],
    pearls: [
      'أكثر سبب شائع للتسمم الدوائي المقصود وغير المقصود المؤدي للفشل الكبدي الحاد في العالم',
      'يجب تنبيه المرضى لفحص المكونات في أدوية البرد والإنفلونزا المركبة لتجنب تجاوز الجرعة القصوى اليومية عن غير قصد',
      'الأسلوب الأفضل لعلاج الجرعة الزائدة: مخطط Rumack-Matthew لتحديد الحاجة لـ N-أسيتيل سيستئين حسب مستوى الدواء الدموي والوقت منذ التناول'
    ]
  },
  {
    id: 'aspirin',
    genericName: 'Aspirin (Acetylsalicylic Acid)',
    genericNameAr: 'أسبرين (حمض أسيتيل الساليسيليك)',
    brandNames: ['Bayer Aspirin', 'Ecotrin', 'أسبوكيد'],
    drugClass: 'Salicylate / Antiplatelet (low-dose) / NSAID (high-dose)',
    drugClassAr: 'ساليسيلات / مضاد صفائح (بجرعة منخفضة) / مضاد التهاب غير ستيرويدي (بجرعة عالية)',
    category: 'OTC',
    route: ['PO', 'PR'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'تثبيط لا رجعي لـ COX-1 في الصفائح - التأثير المضاد للتجلط يستمر طوال عمر الصفيحة (7-10 أيام)',
      'يُمنع في الأطفال والمراهقين المصابين بعدوى فيروسية لخطر متلازمة راي القاتلة',
      'جرعة التحميل 162-325 مج تُمضغ فوراً عند الاشتباه باحتشاء عضلة القلب الحاد'
    ],
    indications: [
      {
        indication: 'Acute coronary syndrome (loading dose) / Secondary prevention of MI and stroke / Pain and fever (high dose, less common now)',
        indicationAr: 'المتلازمة التاجية الحادة (جرعة تحميل) / الوقاية الثانوية من احتشاء عضلة القلب والسكتة / الألم والحمى (جرعة عالية، أقل شيوعاً حالياً)',
        adultDose: 'ACS loading: 162-325 mg PO chewed once; Secondary prevention: 75-100 mg PO once daily',
        adultDoseAr: 'جرعة تحميل للمتلازمة التاجية: 162-325 مج فموياً تُمضغ مرة واحدة؛ الوقاية الثانوية: 75-100 مج فموياً مرة يومياً',
        maxDose: '4000 mg/day (analgesic/antipyretic use, rarely used at this dose now)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed at antiplatelet doses',
      crcl10to50: 'Use with caution; avoid high anti-inflammatory doses',
      crclBelow10: 'Avoid high doses; low-dose antiplatelet use with caution',
      hemodialysis: 'Dialyzable; monitor levels with high-dose use'
    },
    hepaticAdjustment: 'Avoid in severe hepatic impairment, particularly at anti-inflammatory doses',
    contraindications: [
      'الأطفال والمراهقون مع عدوى فيروسية نشطة (خطر متلازمة راي)',
      'فرط الحساسية للساليسيلات أو الربو المحرض بالـ NSAIDs',
      'نزيف نشط أو اضطراب نزفي شديد',
      'القرحة الهضمية النشطة'
    ],
    mechanismOfAction: 'Irreversibly inhibits cyclooxygenase (COX-1 and COX-2), blocking thromboxane A2 synthesis in platelets (antiplatelet) and prostaglandin synthesis (analgesic/anti-inflammatory at higher doses)',
    mechanismOfActionAr: 'يثبط بشكل لا رجعي إنزيم الأكسدة الحلقية (COX-1 وCOX-2)، فيمنع تخليق الثرومبوكسان A2 في الصفائح (مضاد للصفائح) وتخليق البروستاجلاندين (مسكن ومضاد التهاب بجرعات أعلى)',
    halfLife: '15-20 minutes (parent); salicylate effect lasts life of platelet (7-10 days) at low doses',
    monitoringParameters: [
      'علامات النزيف الهضمي',
      'وظائف الكلى عند الاستخدام المزمن بجرعات عالية',
      'طنين الأذن (علامة مبكرة للتسمم بالساليسيلات)',
      'الالتزام بجرعة الوقاية الثانوية المنخفضة'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُفضل تناوله مع الطعام لتقليل تهيج المعدة',
      'الكحول يزيد خطر النزيف الهضمي'
    ],
    pearls: [
      'يُمضغ (لا يُبلع كاملاً) عند الاشتباه باحتشاء عضلة القلب الحاد لتسريع الامتصاص عبر الغشاء المخاطي الفموي',
      'يُوقف عادة 7 أيام قبل الجراحات الكبرى بسبب التأثير اللارجعي على الصفائح',
      'التسمم بالساليسيلات يسبب حماضاً استقلابياً مع قلاءً تنفسياً مركباً - نمط تشخيصي مميز في غازات الدم'
    ]
  },
  {
    id: 'methylprednisolone',
    genericName: 'Methylprednisolone',
    genericNameAr: 'ميثيل بريدنيزولون',
    brandNames: ['Solu-Medrol', 'Medrol', 'سولو ميدرول'],
    drugClass: 'Systemic Corticosteroid',
    drugClassAr: 'كورتيكوستيرويد جهازي',
    category: 'Rx',
    route: ['PO', 'IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'لا يحتاج تحويلاً كبدياً مثل البريدنيزون - الخيار المفضل في القصور الكبدي الشديد',
      'الشكل الوريدي (Solu-Medrol) أساسي في علاج نوبات الربو والـ COPD الحادة ورفض الطعم',
      'نسبة فعالية مضادة للالتهاب أعلى من البريدنيزون بحوالي 25%'
    ],
    indications: [
      {
        indication: 'Acute asthma/COPD exacerbation / Severe allergic reactions / Autoimmune flares / Spinal cord injury (historically, now controversial)',
        indicationAr: 'تفاقم الربو/الانسداد الرئوي الحاد / التفاعلات التحسسية الشديدة / نوبات أمراض المناعة الذاتية / إصابة الحبل الشوكي (تاريخياً، مثير للجدل حالياً)',
        adultDose: 'Acute exacerbation: 40-125 mg IV every 6-12 hours; Oral taper: 4-48 mg/day divided',
        adultDoseAr: 'التفاقم الحاد: 40-125 مج وريدياً كل 6-12 ساعة؛ التدريج الفموي: 4-48 مج/يوم مقسمة',
        pediatricDose: '0.5-1.7 mg/kg/day IV/PO divided every 6-12 hours',
        pediatricDoseAr: '0.5-1.7 مج/كجم/يوم وريدي/فموي مقسمة كل 6-12 ساعة',
        route: 'PO/IV/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No conversion required (active form); use with caution in severe hepatic impairment',
    contraindications: [
      'العدوى الفطرية الجهازية النشطة',
      'فرط الحساسية للميثيل بريدنيزولون',
      'استخدام اللقاحات الحية في جرعات مثبطة للمناعة'
    ],
    mechanismOfAction: 'Binds glucocorticoid receptors, suppressing inflammatory cytokine production and immune cell migration',
    mechanismOfActionAr: 'يرتبط بمستقبلات الجلوكوكورتيكويد فيثبط إنتاج السيتوكينات الالتهابية وهجرة الخلايا المناعية',
    halfLife: '18-36 hours (biological)',
    monitoringParameters: [
      'سكر الدم',
      'ضغط الدم',
      'علامات العدوى المقنعة',
      'وظائف الكظر عند الاستخدام المطول',
      'كثافة العظام في العلاج المزمن'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُفضل تناول الشكل الفموي مع الطعام لتقليل تهيج المعدة'
    ],
    pearls: [
      'لا يحتاج تفعيلاً كبدياً خلافاً للبريدنيزون مما يجعله مفضلاً في فشل الكبد الحاد',
      'جرعات النبض العالية (pulse dose) تُستخدم في حالات المناعة الذاتية الشديدة تحت إشراف متخصص',
      'الإيقاف المفاجئ بعد استخدام مطول يسبب قصور كظر حاد - يجب التدريج دائماً'
    ]
  },
  {
    id: 'hydrochlorothiazide',
    genericName: 'Hydrochlorothiazide',
    genericNameAr: 'هيدروكلوروثيازيد',
    brandNames: ['Microzide', 'HCTZ', 'هيدروكلوروثيازيد'],
    drugClass: 'Thiazide Diuretic',
    drugClassAr: 'مدر بول من فئة الثيازيد',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'يفقد فعاليته عند CrCl أقل من 30 مل/دقيقة تقريباً - يُفضل مدر عروي (لوب) في القصور الكلوي المتقدم',
      'يسبب نقص بوتاسيوم وصوديوم الدم، وقد يرفع الكالسيوم (خلافاً للمدرات العروية)',
      'خط أول شائع لارتفاع ضغط الدم الأساسي بجرعات منخفضة'
    ],
    indications: [
      {
        indication: 'Hypertension / Edema (mild to moderate)',
        indicationAr: 'ارتفاع ضغط الدم / الوذمة (خفيفة إلى متوسطة)',
        adultDose: '12.5-25 mg PO once daily, may increase to 50 mg once daily',
        adultDoseAr: '12.5-25 مج فموياً مرة يومياً، يمكن زيادتها إلى 50 مج مرة يومياً',
        maxDose: '50 mg/day for hypertension',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'May have reduced efficacy; monitor response',
      crclBelow10: 'Generally ineffective; avoid use, consider loop diuretic instead',
      hemodialysis: 'Not effective; avoid use'
    },
    hepaticAdjustment: 'Use with caution in hepatic impairment; monitor electrolytes closely (risk of hepatic encephalopathy with electrolyte imbalance)',
    contraindications: [
      'انقطاع البول',
      'فرط الحساسية للسلفوناميدات أو الثيازيدات',
      'نقص صوديوم أو بوتاسيوم الدم الشديد غير المصحح'
    ],
    mechanismOfAction: 'Inhibits sodium-chloride reabsorption in the distal convoluted tubule, increasing sodium, chloride, and water excretion',
    mechanismOfActionAr: 'يثبط إعادة امتصاص الصوديوم والكلوريد في الأنبوب الملتوي البعيد فيزيد إخراج الصوديوم والكلوريد والماء',
    halfLife: '6-15 hours',
    monitoringParameters: [
      'البوتاسيوم والصوديوم والمغنيسيوم في الدم',
      'وظائف الكلى',
      'سكر الدم وحمض اليوريك (قد يرتفعان)',
      'الكالسيوم في الدم',
      'ضغط الدم'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُفضل تناوله صباحاً لتجنب التبول الليلي المتكرر',
      'بدائل الملح الغنية بالبوتاسيوم قد تتفاعل عند الدمج مع أدوية أخرى حافظة للبوتاسيوم'
    ],
    pearls: [
      'يرفع الكالسيوم في الدم خلافاً للمدرات العروية التي تخفضه - ميزة مفيدة في هشاشة العظام',
      'غالباً يُستخدم بالاشتراك مع حاصرات الإيس أو ARBs لتعزيز خفض الضغط وموازنة تأثيرات البوتاسيوم',
      'يفقد فعاليته الإدرارية الكبيرة عند القصور الكلوي المتقدم (CrCl < 30) على عكس المدرات العروية'
    ]
  },
  {
    id: 'spironolactone',
    genericName: 'Spironolactone',
    genericNameAr: 'سبيرونولاكتون',
    brandNames: ['Aldactone', 'ألداكتون'],
    drugClass: 'Potassium-Sparing Diuretic (Aldosterone Antagonist)',
    drugClassAr: 'مدر بول حافظ للبوتاسيوم (مضاد الألدوستيرون)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'يحسن البقيا في فشل القلب مع انخفاض الكسر القذفي (علاج موجه لا مجرد مدر بول)',
      'خطر فرط بوتاسيوم الدم كبير خاصة مع مثبطات الإيس أو ARBs أو القصور الكلوي',
      'له تأثيرات هرمونية مضادة للأندروجين (تثدي الرجال، اضطراب الدورة الشهرية)'
    ],
    indications: [
      {
        indication: 'Heart failure with reduced ejection fraction / Resistant hypertension / Primary hyperaldosteronism / Ascites (cirrhosis)',
        indicationAr: 'فشل القلب مع انخفاض الكسر القذفي / ارتفاع الضغط المقاوم / فرط الألدوستيرونية الأولي / الاستسقاء (تشمع الكبد)',
        adultDose: 'Heart failure: 12.5-25 mg PO once daily; Ascites: 100-200 mg PO once daily, often combined with furosemide',
        adultDoseAr: 'فشل القلب: 12.5-25 مج فموياً مرة يومياً؛ الاستسقاء: 100-200 مج فموياً مرة يومياً، غالباً مع فوروسيميد',
        maxDose: '400 mg/day (higher doses for ascites/hyperaldosteronism)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed; monitor potassium',
      crcl10to50: 'Use with caution; reduce dose; monitor potassium closely',
      crclBelow10: 'Avoid use; high risk of life-threatening hyperkalemia',
      hemodialysis: 'Avoid use; not recommended in dialysis-dependent patients'
    },
    hepaticAdjustment: 'No specific dose adjustment, but used therapeutically at higher doses in cirrhotic ascites',
    contraindications: [
      'فرط بوتاسيوم الدم',
      'مرض أديسون (قصور الكظر)',
      'القصور الكلوي الحاد أو الشديد',
      'الاستخدام المتزامن مع إبليرينون'
    ],
    mechanismOfAction: 'Competitively antagonizes aldosterone receptors in the distal nephron, increasing sodium and water excretion while retaining potassium',
    mechanismOfActionAr: 'يضاد تنافسياً مستقبلات الألدوستيرون في النيفرون البعيد فيزيد إخراج الصوديوم والماء مع الاحتفاظ بالبوتاسيوم',
    halfLife: '1.4 hours (parent); active metabolites up to 20 hours',
    monitoringParameters: [
      'البوتاسيوم في الدم (خط الأساس وبعد أسبوع من البدء ودورياً)',
      'وظائف الكلى',
      'ضغط الدم',
      'علامات تثدي الرجال أو اضطراب الدورة الشهرية'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'بدائل الملح الغنية بالبوتاسيوم تزيد خطر فرط بوتاسيوم الدم بشدة - يجب تجنبها'
    ],
    pearls: [
      'جزء أساسي من "العلاج الرباعي" الموجه لفشل القلب مع انخفاض الكسر القذفي إلى جانب حاصرات بيتا وARNI/ACE-I ومثبطات SGLT2',
      'التأثيرات الهرمونية الجانبية (تثدي الرجال) أقل بكثير مع الإبليرينون الأكثر انتقائية',
      'يُراقب البوتاسيوم بصرامة خاصة عند الجمع مع مثبطات الإيس أو ARBs لخطر فرط بوتاسيوم قاتل'
    ]
  },
  {
    id: 'doxycycline',
    genericName: 'Doxycycline',
    genericNameAr: 'دوكسيسيكلين',
    brandNames: ['Vibramycin', 'فيبراميسين'],
    drugClass: 'Tetracycline Antibiotic',
    drugClassAr: 'مضاد حيوي من فئة التتراسيكلين',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'يُمنع في الحمل والأطفال دون 8 سنوات - يسبب تلوناً دائماً للأسنان وتثبيط نمو العظام',
      'يُفصل بساعتين عن منتجات الألبان ومضادات الحموضة والمكملات المعدنية لتجنب الخلب وفقدان الامتصاص',
      'خط أول للريكتسيا وداء لايم والملاريا الوقائي والعديد من عدوى الجهاز التنفسي'
    ],
    indications: [
      {
        indication: 'Community-acquired pneumonia / Lyme disease / Rickettsial infections / Chlamydia / Acne',
        indicationAr: 'التهاب رئوي مكتسب من المجتمع / داء لايم / عدوى الريكتسيا / الكلاميديا / حب الشباب',
        adultDose: '100 mg PO/IV every 12 hours (may load with 200 mg on day 1 for severe infections)',
        adultDoseAr: '100 مج فموياً/وريدياً كل 12 ساعة (يمكن جرعة تحميل 200 مج يوم 1 للعدوى الشديدة)',
        pediatricDose: '2.2 mg/kg PO/IV every 12 hours (ages 8+; max 200 mg/day)',
        pediatricDoseAr: '2.2 مج/كجم فموياً/وريدياً كل 12 ساعة (من عمر 8 سنوات؛ حد أقصى 200 مج/يوم)',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed (unlike other tetracyclines, safe in renal impairment)',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution in hepatic impairment; avoid high doses due to hepatotoxicity risk',
    contraindications: [
      'الحمل',
      'الأطفال دون 8 سنوات (ما عدا دواعي استعمال محددة مثل الجمرة الخبيثة)',
      'فرط الحساسية للتتراسيكلينات'
    ],
    blackBoxWarning: 'Use during tooth development (pregnancy, infancy, childhood through age 8) causes permanent tooth discoloration and may affect bone growth',
    blackBoxWarningAr: 'الاستخدام أثناء تكوّن الأسنان (الحمل، الرضاعة، الطفولة حتى عمر 8 سنوات) يسبب تلوناً دائماً للأسنان وقد يؤثر على نمو العظام',
    mechanismOfAction: 'Binds to the 30S ribosomal subunit, inhibiting bacterial protein synthesis (bacteriostatic)',
    mechanismOfActionAr: 'يرتبط بالوحدة الريبوسومية 30S فيثبط تخليق البروتين البكتيري (مثبط للنمو)',
    halfLife: '12-25 hours',
    monitoringParameters: [
      'علامات الحساسية للضوء (photosensitivity)',
      'وظائف الكبد عند الجرعات العالية أو الاستخدام المطول',
      'الاستجابة السريرية للعدوى'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'منتجات الألبان ومضادات الحموضة والحديد تقلل الامتصاص بشكل كبير - يفصل بساعتين',
      'يزيد الحساسية للشمس - يُنصح باستخدام واقي شمسي'
    ],
    pearls: [
      'الاستثناء بين التتراسيكلينات في عدم حاجته لتعديل جرعة في القصور الكلوي',
      'دواء الاختيار الأول للوقاية والعلاج من الملاريا في بعض المناطق، وللريكتسيا (حمى الجبال الصخرية)',
      'يمكن تناوله مع الطعام (غير الألبان) لتقليل تهيج المريء، لكن يُنصح بالجلوس منتصباً بعده لتجنب تقرح المريء'
    ]
  },
  {
    id: 'cefepime',
    genericName: 'Cefepime',
    genericNameAr: 'سيفيبيم',
    brandNames: ['Maxipime', 'ماكسيبيم'],
    drugClass: 'Fourth-Generation Cephalosporin',
    drugClassAr: 'سيفالوسبورين من الجيل الرابع',
    category: 'Rx',
    route: ['IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'infectious_diseases', 'oncology', 'pharmacy'],
    keyHighlights: [
      'تغطية ممتازة ضد الزائفة الزنجارية مع ثبات أعلى ضد البيتالاكتاماز من الجيل الثالث',
      'خطر سمية عصبية (تخليط، نوبات، اعتلال دماغي) عند تراكمه في القصور الكلوي غير المعدل الجرعة',
      'خط أول شائع للحمى العصبية الناتجة عن قلة العدلات (febrile neutropenia)'
    ],
    indications: [
      {
        indication: 'Febrile neutropenia / Hospital-acquired pneumonia / Severe pseudomonal infections / Complicated UTI',
        indicationAr: 'الحمى العصبية الناتجة عن قلة العدلات / التهاب رئوي مكتسب من المستشفى / عدوى الزائفة الشديدة / عدوى مسالك بولية معقدة',
        adultDose: '1-2 g IV every 8-12 hours depending on severity and renal function',
        adultDoseAr: '1-2 جرام وريدياً كل 8-12 ساعة حسب الشدة ووظائف الكلى',
        pediatricDose: '50 mg/kg IV every 8-12 hours (max 2 g/dose)',
        pediatricDoseAr: '50 مج/كجم وريدياً كل 8-12 ساعة (حد أقصى 2 جم/جرعة)',
        route: 'IV/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed (standard dose)',
      crcl10to50: 'Reduce dose and/or extend interval (e.g., 1-2 g every 12-24 hours based on CrCl)',
      crclBelow10: '500 mg-1 g IV every 24 hours',
      hemodialysis: '1 g loading dose then 500 mg every 24 hours, with supplemental dose after dialysis'
    },
    hepaticAdjustment: 'No specific adjustment needed; primarily renally eliminated',
    contraindications: [
      'فرط الحساسية للسيفالوسبورينات',
      'تاريخ تفاعل حساسية شديد تجاه البنسلينات (حذر نسبي لتفاعل متصالب)'
    ],
    blackBoxWarning: 'Neurotoxicity including encephalopathy, myoclonus, and seizures reported, particularly in patients with renal impairment who did not receive appropriate dose adjustment',
    blackBoxWarningAr: 'سمية عصبية شملت اعتلال دماغي ورمعاً عضلياً وتشنجات، خاصة في مرضى القصور الكلوي الذين لم تُعدل جرعتهم بشكل مناسب',
    mechanismOfAction: 'Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins; broad spectrum with enhanced stability against beta-lactamases',
    mechanismOfActionAr: 'يثبط تخليق جدار الخلية البكتيرية عن طريق الارتباط ببروتينات ربط البنسلين؛ طيف واسع مع ثبات معزز ضد إنزيمات البيتالاكتاماز',
    halfLife: '2 hours (normal renal function)',
    monitoringParameters: [
      'وظائف الكلى (أساسي لتعديل الجرعة)',
      'الحالة العصبية والذهنية خاصة في المسنين وذوي القصور الكلوي',
      'علامات الحساسية المفرطة',
      'تعداد الدم الكامل عند العلاج المطول'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية (يُعطى حقناً فقط)'
    ],
    pearls: [
      'تعديل الجرعة حسب وظائف الكلى أمر بالغ الأهمية - الفشل في ذلك هو السبب الأشهر للسمية العصبية',
      'من أوسع السيفالوسبورينات طيفاً، يغطي موجبات وسالبات الجرام شاملة الزائفة',
      'يُستخدم كعلاج تجريبي أساسي للحمى العصبية الناتجة عن قلة العدلات في مرضى الأورام'
    ]
  },
  {
    id: 'linezolid',
    genericName: 'Linezolid',
    genericNameAr: 'لينزوليد',
    brandNames: ['Zyvox', 'زيفوكس'],
    drugClass: 'Oxazolidinone Antibiotic',
    drugClassAr: 'مضاد حيوي من فئة الأوكسازوليدينون',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'icu_emergency', 'pharmacy'],
    keyHighlights: [
      'توافر حيوي فموي 100% - يسمح بالتحويل المباشر من الوريدي للفموي بنفس الجرعة',
      'مثبط ضعيف لإنزيم MAO - خطر متلازمة السيروتونين مع SSRIs/SNRIs ومتلازمة ارتفاع ضغط مع التيرامين',
      'الاستخدام لأكثر من 2-4 أسابيع يزيد خطر تثبيط نخاع العظم والاعتلال العصبي المحيطي/البصري'
    ],
    indications: [
      {
        indication: 'MRSA infections / VRE infections / Complicated skin and soft tissue infections / Hospital-acquired pneumonia',
        indicationAr: 'عدوى المكورات العنقودية المقاومة للميثيسيلين / عدوى المكورات المعوية المقاومة للفانكومايسين / عدوى الجلد والأنسجة الرخوة المعقدة / التهاب رئوي مكتسب من المستشفى',
        adultDose: '600 mg PO/IV every 12 hours',
        adultDoseAr: '600 مج فموياً/وريدياً كل 12 ساعة',
        pediatricDose: '10 mg/kg PO/IV every 8 hours (neonates/infants) or every 12 hours (older children)',
        pediatricDoseAr: '10 مج/كجم فموياً/وريدياً كل 8 ساعات (حديثو الولادة/الرضع) أو كل 12 ساعة (الأطفال الأكبر)',
        duration: 'Typically 10-14 days; max 28 days due to toxicity risk',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; monitor for accumulation of metabolites',
      hemodialysis: 'Administer dose after dialysis session; metabolites may accumulate'
    },
    hepaticAdjustment: 'No specific adjustment needed in mild to moderate impairment; use with caution in severe impairment',
    contraindications: [
      'الاستخدام المتزامن أو خلال أسبوعين من مثبطات MAO',
      'فرط الحساسية للينزوليد',
      'الاستخدام غير المحكوم مع أدوية سيروتونينية دون مراقبة دقيقة في حالات معينة (ما لم تكن فائدة العلاج تفوق الخطر)'
    ],
    blackBoxWarning: 'Myelosuppression (anemia, leukopenia, thrombocytopenia) with use beyond 2 weeks; risk of serotonin syndrome with serotonergic agents; should not be used in patients taking MAO inhibitors',
    blackBoxWarningAr: 'تثبيط نخاع العظم (فقر دم، نقص كريات بيضاء، نقص صفائح) مع الاستخدام لأكثر من أسبوعين؛ خطر متلازمة السيروتونين مع الأدوية السيروتونينية؛ لا يُستخدم مع مثبطات MAO',
    mechanismOfAction: 'Binds to the 23S ribosomal RNA of the 50S subunit, inhibiting formation of the bacterial initiation complex and protein synthesis',
    mechanismOfActionAr: 'يرتبط بالـ RNA الريبوسومي 23S في الوحدة 50S فيثبط تكوين مركب البدء البكتيري وتخليق البروتين',
    halfLife: '5-7 hours',
    monitoringParameters: [
      'تعداد الدم الكامل أسبوعياً (خاصة عند الاستخدام لأكثر من أسبوعين)',
      'علامات متلازمة السيروتونين خاصة مع الأدوية السيروتونينية',
      'الاعتلال العصبي المحيطي والبصري عند الاستخدام المطول',
      'ضغط الدم إذا استُهلكت أطعمة غنية بالتيرامين'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'الأطعمة الغنية بالتيرامين (الجبن المعتق، النبيذ الأحمر، اللحوم المخللة) قد تسبب أزمة ارتفاع ضغط بسبب تثبيط MAO الضعيف'
    ],
    pearls: [
      'التوافر الحيوي الفموي الكامل (100%) يجعله فريداً بين المضادات المضادة لـ MRSA في سهولة التحويل للعلاج المنزلي الفموي',
      'يجب إيقاف أي مضاد اكتئاب سيروتونيني قبل البدء به إن أمكن لتجنب متلازمة السيروتونين',
      'تثبيط نخاع العظم عادة قابل للعكس عند إيقاف الدواء، لكنه يتطلب مراقبة دورية بتعداد دم كامل'
    ]
  },
  {
    id: 'epinephrine',
    genericName: 'Epinephrine (Adrenaline)',
    genericNameAr: 'إبينفرين (أدرينالين)',
    brandNames: ['EpiPen', 'Adrenalin', 'إيبي بن'],
    drugClass: 'Catecholamine (Alpha/Beta Adrenergic Agonist)',
    drugClassAr: 'كاتيكولامين (ناهض أدريناليني ألفا/بيتا)',
    category: 'Rx',
    route: ['IM', 'IV', 'SC', 'Inhalation'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'pediatrics', 'nursing', 'pharmacy'],
    keyHighlights: [
      'العلاج الأول والأهم في الصدمة التأقية - يُعطى عضلياً في الفخذ الأمامي الوحشي فوراً دون تأخير',
      'جرعة الإنعاش القلبي الرئوي الوريدية (1 مج كل 3-5 دقائق) مختلفة تماماً عن جرعة التأق العضلية',
      'لا يوجد مضاد استطباب مطلق في حالة التأق المهدد للحياة'
    ],
    indications: [
      {
        indication: 'Anaphylaxis / Cardiac arrest (ACLS) / Severe asthma/anaphylactic bronchospasm',
        indicationAr: 'الصدمة التأقية / السكتة القلبية (بروتوكول الإنعاش المتقدم) / تشنج قصبي شديد تأقي',
        adultDose: 'Anaphylaxis: 0.3-0.5 mg IM (1:1000) every 5-15 min as needed; Cardiac arrest: 1 mg IV (1:10,000) every 3-5 min',
        adultDoseAr: 'التأق: 0.3-0.5 مج عضلياً (1:1000) كل 5-15 دقيقة عند الحاجة؛ السكتة القلبية: 1 مج وريدياً (1:10000) كل 3-5 دقائق',
        pediatricDose: 'Anaphylaxis: 0.01 mg/kg IM (max 0.3 mg) every 5-15 min as needed',
        pediatricDoseAr: 'التأق: 0.01 مج/كجم عضلياً (حد أقصى 0.3 مج) كل 5-15 دقيقة عند الحاجة',
        maxDose: '0.5 mg per IM dose for anaphylaxis',
        route: 'IM/IV/SC'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; titrate to clinical effect',
      hemodialysis: 'Not dialyzed; titrate to hemodynamic/clinical effect'
    },
    hepaticAdjustment: 'No specific adjustment needed',
    contraindications: [
      'لا يوجد مضاد استطباب مطلق في التأق المهدد للحياة',
      'حذر نسبي في أمراض القلب التاجية الشديدة أو اضطراب النظم (لا يمنع الاستخدام في التأق)'
    ],
    mechanismOfAction: 'Potent agonist at alpha-1, beta-1, and beta-2 adrenergic receptors, causing vasoconstriction, increased cardiac contractility/rate, and bronchodilation',
    mechanismOfActionAr: 'ناهض قوي لمستقبلات ألفا-1 وبيتا-1 وبيتا-2 الأدرينالية، يسبب تضيقاً وعائياً وزيادة انقباضية ومعدل القلب وتوسع القصبات',
    halfLife: '2-3 minutes',
    monitoringParameters: [
      'ضغط الدم ومعدل ضربات القلب المستمر',
      'تخطيط القلب (خطر اضطراب النظم)',
      'الأعراض التنفسية والجلدية للتأق',
      'سكر الدم (قد يرتفع)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية؛ يُستخدم في حالات الطوارئ بغض النظر عن توقيت الطعام'
    ],
    pearls: [
      'الحقن العضلي في الفخذ الأمامي الوحشي (ليس الألوية) يحقق أسرع امتصاص في التأق',
      'قلم الإيبينفرين الذاتي (EpiPen) يجب أن يحمله كل مريض لديه تاريخ تأق معروف',
      'لا يُؤخر إعطاؤه في التأق المشتبه به انتظاراً لتأكيد التشخيص - التأخير يزيد الوفيات بشكل كبير'
    ]
  },
  {
    id: 'naloxone',
    genericName: 'Naloxone',
    genericNameAr: 'نالوكسون',
    brandNames: ['Narcan', 'نارکان'],
    drugClass: 'Opioid Receptor Antagonist',
    drugClassAr: 'مضاد مستقبلات الأفيون',
    category: 'Rx',
    route: ['IV', 'IM', 'SC', 'Intranasal'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'nursing', 'pharmacy'],
    keyHighlights: [
      'نصف عمره أقصر من معظم الأفيونات - قد يحتاج جرعات متكررة أو تسريباً مستمراً لمنع عودة التثبيط التنفسي',
      'متاح بدون وصفة طبية في كثير من الدول كبخاخ أنفي (Narcan) للاستخدام من غير المختصين',
      'يُعطى بجرعات صغيرة ومتدرجة في مدمني الأفيونات المزمنين لتجنب متلازمة انسحاب حادة'
    ],
    indications: [
      {
        indication: 'Opioid overdose / Reversal of opioid-induced respiratory depression',
        indicationAr: 'جرعة زائدة من الأفيونات / عكس تثبيط التنفس الناتج عن الأفيونات',
        adultDose: '0.4-2 mg IV/IM/SC every 2-3 minutes as needed (titrate carefully in opioid-dependent patients, start 0.04-0.1 mg)',
        adultDoseAr: '0.4-2 مج وريدياً/عضلياً/تحت الجلد كل 2-3 دقائق عند الحاجة (يُعدل بحذر في معتادي الأفيونات، البدء بـ 0.04-0.1 مج)',
        pediatricDose: '0.01 mg/kg IV/IM/SC, may repeat every 2-3 minutes',
        pediatricDoseAr: '0.01 مج/كجم وريدياً/عضلياً/تحت الجلد، يمكن تكرارها كل 2-3 دقائق',
        maxDose: '10 mg cumulative dose (consider alternative diagnosis if no response)',
        route: 'IV/IM/SC/Intranasal'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment needed',
    contraindications: [
      'فرط الحساسية للنالوكسون (نادر جداً)',
      'لا يوجد مضاد استطباب حقيقي في حالة جرعة الأفيون الزائدة المهددة للحياة'
    ],
    mechanismOfAction: 'Competitively antagonizes mu, kappa, and delta opioid receptors, rapidly reversing opioid agonist effects',
    mechanismOfActionAr: 'يضاد تنافسياً مستقبلات مو وكابا ودلتا الأفيونية، فيعكس بسرعة تأثيرات ناهضات الأفيون',
    halfLife: '30-100 minutes',
    monitoringParameters: [
      'معدل التنفس ومستوى الوعي بعد الإعطاء',
      'علامات عودة التثبيط التنفسي (خاصة مع الأفيونات طويلة المفعول)',
      'علامات متلازمة انسحاب الأفيون الحادة (في المعتادين)',
      'الحاجة لجرعات متكررة أو تسريب مستمر'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية'
    ],
    pearls: [
      'نصف عمره القصير يعني أن الأفيونات طويلة المفعول (مثل الميثادون أو الفنتانيل اللاصق) قد تتطلب مراقبة مطولة أو تسريب نالوكسون مستمر',
      'في معتادي الأفيونات، الجرعة العالية قد تسبب متلازمة انسحاب حادة ومؤلمة - يُفضل البدء بجرعات صغيرة متدرجة',
      'عدم الاستجابة للنالوكسون يستدعي البحث عن سبب آخر للتثبيط التنفسي أو تعدد مواد'
    ]
  },
  {
    id: 'flumazenil',
    genericName: 'Flumazenil',
    genericNameAr: 'فلومازينيل',
    brandNames: ['Romazicon', 'روماذيكون'],
    drugClass: 'Benzodiazepine Receptor Antagonist',
    drugClassAr: 'مضاد مستقبلات البنزوديازيبين',
    category: 'Rx',
    route: ['IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'pharmacy'],
    keyHighlights: [
      'يُستخدم بحذر شديد في المدمنين المزمنين على البنزوديازيبينات - خطر إحداث تشنجات بإزالة التثبيط المفاجئة',
      'نصف عمره أقصر من معظم البنزوديازيبينات - خطر عودة التخدير يتطلب مراقبة مطولة',
      'غير فعال ولا يُستخدم لعكس تثبيط الأفيونات (النالوكسون هو المناسب لذلك)'
    ],
    indications: [
      {
        indication: 'Reversal of benzodiazepine-induced sedation (procedural or overdose)',
        indicationAr: 'عكس التسكين الناتج عن البنزوديازيبينات (إجرائي أو جرعة زائدة)',
        adultDose: '0.2 mg IV over 15 seconds, may repeat 0.2 mg every minute up to total 1 mg (3 mg in overdose)',
        adultDoseAr: '0.2 مج وريدياً خلال 15 ثانية، يمكن تكرار 0.2 مج كل دقيقة حتى إجمالي 1 مج (3 مج في الجرعة الزائدة)',
        maxDose: '3 mg total in any single episode',
        route: 'IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution and lower initial doses in hepatic impairment due to reduced clearance',
    contraindications: [
      'المرضى الذين يتناولون البنزوديازيبينات لعلاج حالة تهدد الحياة (مثل التحكم بضغط داخل الجمجمة أو حالة صرعية)',
      'تاريخ الإدمان المزمن على البنزوديازيبينات (خطر تشنجات شديد)',
      'علامات التسمم بمضادات الاكتئاب الحلقية الثلاثية المصاحب (خطر تشنج واضطراب نظم)'
    ],
    mechanismOfAction: 'Competitively antagonizes the benzodiazepine binding site on the GABA-A receptor complex',
    mechanismOfActionAr: 'يضاد تنافسياً موقع ارتباط البنزوديازيبين على مركب مستقبل GABA-A',
    halfLife: '40-80 minutes',
    monitoringParameters: [
      'مستوى الوعي ومعدل التنفس لمدة ساعتين على الأقل بعد آخر جرعة (خطر عودة التخدير)',
      'علامات التشنج خاصة في المدمنين المزمنين',
      'تخطيط القلب إذا اشتُبه بتسمم مشترك بمضادات الاكتئاب الحلقية'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية'
    ],
    pearls: [
      'يُستخدم بحذر بالغ في حالات الجرعة الزائدة المختلطة لأنه قد يكشف تسمماً مصاحباً بمضادات الاكتئاب الحلقية ويحرض تشنجات',
      'عودة التخدير شائعة بسبب قصر نصف العمر مقارنة بالبنزوديازيبينات طويلة المفعول - يحتاج مراقبة مطولة',
      'غير مفيد كعلاج روتيني للجرعة الزائدة من البنزوديازيبين بسبب هامش الأمان الواسع لهذه الأدوية أصلاً في معظم الحالات'
    ]
  },
  {
    id: 'dopamine',
    genericName: 'Dopamine',
    genericNameAr: 'دوبامين',
    brandNames: ['Intropin', 'إنتروبين'],
    drugClass: 'Catecholamine Vasopressor/Inotrope',
    drugClassAr: 'كاتيكولامين رافع للضغط ومقوي للقلب',
    category: 'Rx',
    route: ['IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology', 'nursing'],
    keyHighlights: [
      'تأثيره جرعة-معتمد: منخفضة (دوبامينرجي) متوسطة (بيتا-1) عالية (ألفا-1) لكن هذا التصنيف التقليدي محل نقاش علمي حديث',
      'يُعطى عبر خط مركزي قدر الإمكان لتقليل خطر النخر الجلدي عند التسرب',
      'تراجع استخدامه لصالح النورإبينفرين كخط أول في معظم أنواع الصدمة بسبب زيادة خطر اضطراب النظم القلبي'
    ],
    indications: [
      {
        indication: 'Cardiogenic shock / Symptomatic bradycardia (after atropine failure) / Hypotension',
        indicationAr: 'الصدمة القلبية / بطء القلب العرضي (بعد فشل الأتروبين) / انخفاض الضغط',
        adultDose: '2-20 mcg/kg/min IV infusion, titrate to hemodynamic response',
        adultDoseAr: '2-20 ميكروجرام/كجم/دقيقة تسريب وريدي، يُعدل حسب الاستجابة الدموية',
        maxDose: 'Up to 50 mcg/kg/min in refractory cases under specialist guidance',
        route: 'IV continuous infusion'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; titrate to hemodynamic response',
      hemodialysis: 'Not dialyzed; titrate to hemodynamic effect'
    },
    hepaticAdjustment: 'No specific adjustment; titrate to hemodynamic response',
    contraindications: [
      'الرجفان البطيني',
      'ورم القواتم (pheochromocytoma)',
      'عدم تصحيح نقص حجم الدم قبل البدء',
      'اضطراب نظم تسرعي بطيني غير مصحح'
    ],
    mechanismOfAction: 'Dose-dependent agonism: low doses stimulate dopaminergic receptors (renal/mesenteric vasodilation), moderate doses stimulate beta-1 (increased contractility), high doses stimulate alpha-1 (vasoconstriction)',
    mechanismOfActionAr: 'تنبيه معتمد على الجرعة: الجرعات المنخفضة تنبه مستقبلات الدوبامين (توسع وعائي كلوي ومساريقي)، المتوسطة تنبه بيتا-1 (زيادة الانقباضية)، العالية تنبه ألفا-1 (تضيق وعائي)',
    halfLife: '2 minutes',
    monitoringParameters: [
      'ضغط الدم ومعدل ضربات القلب المستمر',
      'تخطيط القلب (خطر اضطراب نظم تسرعي)',
      'إنتاج البول',
      'موقع الحقن لعلامات التسرب خارج الوعاء'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'لا توجد تفاعلات غذائية (يُعطى وريدياً فقط في بيئة العناية المركزة)'
    ],
    pearls: [
      'مفهوم "الجرعة الكلوية" المنخفضة الذي كان شائعاً لتحسين تروية الكلى لم يعد مدعوماً بالأدلة الحديثة',
      'يُفضل عليه النورإبينفرين في الصدمة الإنتانية لانخفاض خطر اضطراب النظم القلبي',
      'التسرب خارج الوعاء يُعالج بالفينتولامين الموضعي مثل النورإبينفرين'
    ]
  },
  {
    id: 'dobutamine',
    genericName: 'Dobutamine',
    genericNameAr: 'دوبوتامين',
    brandNames: ['Dobutrex', 'دوبوتريكس'],
    drugClass: 'Synthetic Catecholamine (Inotrope)',
    drugClassAr: 'كاتيكولامين اصطناعي (مقوي للقلب)',
    category: 'Rx',
    route: ['IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology', 'nursing'],
    keyHighlights: [
      'يزيد النتاج القلبي دون رفع كبير في المقاومة الوعائية المحيطية - مفيد في فشل القلب الحاد مع ضغط مقبول',
      'قد يسبب انخفاض ضغط بسبب تأثيره الموسع الوعائي بيتا-2 الخفيف - يختلف عن الدوبامين',
      'يُستخدم أيضاً كعامل إجهاد دوائي في اختبارات الإجهاد القلبي بالصدى (stress echo)'
    ],
    indications: [
      {
        indication: 'Acute decompensated heart failure with adequate blood pressure / Cardiogenic shock (with adequate preload) / Dobutamine stress echocardiography',
        indicationAr: 'فشل القلب الحاد غير المعاوض مع ضغط دم مقبول / الصدمة القلبية (مع حمل أولي كافٍ) / تخطيط صدى القلب بالإجهاد الدوائي',
        adultDose: '2.5-20 mcg/kg/min IV infusion, titrate to hemodynamic response',
        adultDoseAr: '2.5-20 ميكروجرام/كجم/دقيقة تسريب وريدي، يُعدل حسب الاستجابة الدموية',
        maxDose: 'Up to 40 mcg/kg/min in refractory cases under specialist guidance',
        route: 'IV continuous infusion'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; titrate to hemodynamic response',
      hemodialysis: 'Not dialyzed; titrate to hemodynamic effect'
    },
    hepaticAdjustment: 'No specific adjustment; titrate to hemodynamic response',
    contraindications: [
      'تضيق تحت الأبهر الضخامي الانسدادي (HOCM)',
      'عدم تصحيح نقص حجم الدم قبل البدء',
      'فرط الحساسية للسلفايت (بعض التركيبات)'
    ],
    mechanismOfAction: 'Selective beta-1 adrenergic agonist with mild beta-2 activity, increasing myocardial contractility and cardiac output with minimal chronotropic effect at lower doses',
    mechanismOfActionAr: 'ناهض انتقائي لبيتا-1 الأدرينالي مع نشاط خفيف لبيتا-2، يزيد انقباضية عضلة القلب والنتاج القلبي مع تأثير ضئيل على معدل القلب بالجرعات المنخفضة',
    halfLife: '2 minutes',
    monitoringParameters: [
      'ضغط الدم ومعدل ضربات القلب المستمر',
      'تخطيط القلب (خطر اضطراب نظم)',
      'علامات نقص التروية العضلية القلبية (زيادة استهلاك الأكسجين)',
      'النتاج القلبي والعلامات السريرية لفشل القلب'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'لا توجد تفاعلات غذائية (يُعطى وريدياً فقط في بيئة العناية المركزة)'
    ],
    pearls: [
      'خلافاً للنورإبينفرين والدوبامين، لا يرفع المقاومة الوعائية المحيطية بشكل كبير مما قد يسبب انخفاض ضغط في بعض المرضى',
      'يُستخدم غالباً بالاشتراك مع رافع ضغطي آخر (نورإبينفرين) في الصدمة القلبية المصحوبة بانخفاض ضغط',
      'التحمل (tachyphylaxis) قد يتطور مع التسريب المطول لأكثر من 72 ساعة'
    ]
  },
  {
    id: 'calcium_gluconate',
    genericName: 'Calcium Gluconate',
    genericNameAr: 'غلوكونات الكالسيوم',
    brandNames: ['Calcium Gluconate Injection', 'غلوكونات الكالسيوم'],
    drugClass: 'Electrolyte Replacement',
    drugClassAr: 'معوض كهارل',
    category: 'Rx',
    route: ['IV', 'PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology', 'nursing', 'pharmacy'],
    keyHighlights: [
      'العلاج الأول لتثبيت غشاء عضلة القلب في فرط بوتاسيوم الدم الخطير - يعمل خلال دقائق لكن لا يخفض البوتاسيوم',
      'الترياق الأساسي للتسمم بحاصرات قنوات الكالسيوم وفرط مغنيسيوم الدم ولسع الحمض الهيدروفلوريك',
      'لا يُخلط أبداً مع السيفترياكسون أو محاليل البيكربونات في نفس الخط الوريدي - خطر ترسب'
    ],
    indications: [
      {
        indication: 'Severe hyperkalemia (cardiac membrane stabilization) / Calcium channel blocker toxicity / Hypocalcemia / Hypermagnesemia',
        indicationAr: 'فرط بوتاسيوم الدم الشديد (تثبيت غشاء القلب) / تسمم حاصرات قنوات الكالسيوم / نقص كالسيوم الدم / فرط مغنيسيوم الدم',
        adultDose: 'Hyperkalemia: 1-2 g (10-20 mL of 10% solution) IV over 2-5 minutes, may repeat if ECG changes persist',
        adultDoseAr: 'فرط البوتاسيوم: 1-2 جرام (10-20 مل من محلول 10%) وريدياً خلال 2-5 دقائق، يمكن تكرارها إذا استمرت تغيرات تخطيط القلب',
        pediatricDose: '60-100 mg/kg IV (max 2-3 g) for severe hyperkalemia or hypocalcemia',
        pediatricDoseAr: '60-100 مج/كجم وريدياً (حد أقصى 2-3 جم) لفرط بوتاسيوم الدم الشديد أو نقص الكالسيوم',
        route: 'IV/PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed; monitor calcium levels',
      crclBelow10: 'No adjustment needed; monitor calcium levels closely (common in renal failure)',
      hemodialysis: 'No adjustment needed; often required in dialysis-dependent hypocalcemia'
    },
    hepaticAdjustment: 'No specific adjustment needed',
    contraindications: [
      'فرط كالسيوم الدم',
      'الرجفان البطيني (ما عدا في سياق علاج فرط البوتاسيوم القاتل)',
      'تسمم الديجوكسين النشط (حذر شديد - قد يفاقم السمية)'
    ],
    mechanismOfAction: 'Raises extracellular calcium concentration, stabilizing cardiac cell membrane threshold potential and antagonizing calcium channel blocker effects',
    mechanismOfActionAr: 'يرفع تركيز الكالسيوم خارج الخلية، فيثبت جهد عتبة غشاء الخلية القلبية ويضاد تأثيرات حاصرات قنوات الكالسيوم',
    halfLife: 'N/A (physiological regulation)',
    monitoringParameters: [
      'تخطيط القلب المستمر أثناء الإعطاء الوريدي',
      'الكالسيوم الدموي (الكلي والمتأين)',
      'موقع الحقن (خطر نخر الأنسجة عند التسرب)',
      'مستوى الديجوكسين إذا كان المريض يتناوله'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'الشكل الفموي يتفاعل مع التتراسيكلينات والفلوروكينولونات (يقلل امتصاصها) - يفصل بساعتين'
    ],
    pearls: [
      'يُعطى خلال دقائق لتثبيت القلب في فرط البوتاسيوم الخطير بينما تُستخدم علاجات أخرى (إنسولين/جلوكوز، سالبوتامول) لخفض البوتاسيوم فعلياً',
      'كلوريد الكالسيوم يحتوي كالسيوم أولي أكثر 3 أضعاف من الغلوكونات لكنه أكثر تآكلاً للأوردة المحيطية - يُفضل عبر خط مركزي',
      'لا يُخلط مع محاليل تحتوي فوسفات أو بيكربونات أو سيفترياكسون لخطر الترسب'
    ]
  },
  {
    id: 'magnesium_sulfate',
    genericName: 'Magnesium Sulfate',
    genericNameAr: 'كبريتات المغنيسيوم',
    brandNames: ['Magnesium Sulfate Injection', 'كبريتات المغنيسيوم'],
    drugClass: 'Electrolyte Replacement/Anticonvulsant',
    drugClassAr: 'معوض كهارل ومضاد اختلاج',
    category: 'Rx',
    route: ['IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology', 'nursing', 'pharmacy'],
    keyHighlights: [
      'العلاج الأول لمنع وعلاج تشنجات تسمم الحمل (eclampsia) - ليس مضاد اختلاج تقليدي لكن فعال نوعياً هنا',
      'الترياق النوعي لفرط مغنيسيوم الدم السام هو غلوكونات الكالسيوم الوريدية',
      'يُراقب المنعكس الرضفي ومعدل التنفس أثناء التسريب لاكتشاف السمية مبكراً'
    ],
    indications: [
      {
        indication: 'Eclampsia/preeclampsia seizure prophylaxis / Torsades de pointes / Severe asthma exacerbation / Hypomagnesemia',
        indicationAr: 'الوقاية من تشنجات تسمم الحمل / تسرع القلب البطيني متعدد الأشكال / تفاقم الربو الشديد / نقص المغنيسيوم',
        adultDose: 'Eclampsia: 4-6 g IV loading over 15-20 min then 1-2 g/hour infusion; Torsades: 1-2 g IV over 5-60 min',
        adultDoseAr: 'تسمم الحمل: 4-6 جرام وريدياً تحميل خلال 15-20 دقيقة ثم تسريب 1-2 جم/ساعة؛ تورساد: 1-2 جرام وريدياً خلال 5-60 دقيقة',
        route: 'IV/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed; monitor levels',
      crcl10to50: 'Reduce dose by 25-50%; monitor magnesium levels closely',
      crclBelow10: 'Reduce dose significantly (25% of standard) or avoid; high risk of toxic accumulation',
      hemodialysis: 'Dialyzable; dose with extreme caution and monitor levels closely'
    },
    hepaticAdjustment: 'No specific adjustment needed; renally eliminated',
    contraindications: [
      'القصور الكلوي الشديد (حذر بالغ وليس منعاً مطلقاً حسب الاستطباب)',
      'الحصار القلبي أو بطء القلب الشديد',
      'وهن العضلات الوبيل (قد يفاقم الضعف العضلي)',
      'فرط مغنيسيوم الدم الحالي'
    ],
    mechanismOfAction: 'Acts as a physiological calcium antagonist at the neuromuscular junction and vascular smooth muscle, causing vasodilation, CNS depression, and reduced acetylcholine release',
    mechanismOfActionAr: 'يعمل كمضاد فسيولوجي للكالسيوم عند الوصلة العصبية العضلية والعضلات الملساء الوعائية، مسبباً توسعاً وعائياً وتثبيطاً للجهاز العصبي المركزي وتقليل إفراز الأسيتيل كولين',
    halfLife: '1 hour (longer with renal impairment)',
    monitoringParameters: [
      'المنعكس الرضفي (العلامة الأولى لفرط المغنيسيوم عند غيابه)',
      'معدل التنفس',
      'وظائف الكلى وإخراج البول',
      'مستوى المغنيسيوم الدموي',
      'تخطيط القلب عند استخدامه لاضطراب النظم'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية (يُعطى حقناً في معظم الاستطبابات الحرجة)'
    ],
    pearls: [
      'غياب المنعكس الرضفي هو أول علامة سريرية لفرط مغنيسيوم الدم السام قبل تثبيط التنفس - يُفحص بانتظام أثناء التسريب',
      'غلوكونات الكالسيوم (1 جم وريدياً) هي الترياق الفوري عند ظهور علامات السمية (غياب المنعكسات، تثبيط تنفسي)',
      'فعال بشكل خاص في علاج تورساد دي بوينت حتى مع مستوى مغنيسيوم دموي طبيعي'
    ]
  },
  {
    id: 'sodium_bicarbonate',
    genericName: 'Sodium Bicarbonate',
    genericNameAr: 'بيكربونات الصوديوم',
    brandNames: ['Sodium Bicarbonate Injection', 'بيكربونات الصوديوم'],
    drugClass: 'Alkalinizing Agent',
    drugClassAr: 'عامل مقلون',
    category: 'Rx',
    route: ['IV', 'PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology', 'nursing'],
    keyHighlights: [
      'علاج فعال لعكس السمية القلبية لمضادات الاكتئاب الحلقية الثلاثية (توسع QRS) عبر آلية حصار الصوديوم',
      'يُستخدم لقلونة البول في بعض حالات الجرعة الزائدة (الساليسيلات) لتسريع الإخراج الكلوي',
      'لا يُخلط مع الكالسيوم أو الكاتيكولامينات في نفس المحلول - خطر الترسب أو التعطيل'
    ],
    indications: [
      {
        indication: 'Severe metabolic acidosis / TCA cardiotoxicity / Salicylate toxicity (urinary alkalinization) / Hyperkalemia (adjunct)',
        indicationAr: 'الحماض الاستقلابي الشديد / السمية القلبية لمضادات الاكتئاب الحلقية / تسمم الساليسيلات (قلونة البول) / فرط بوتاسيوم الدم (مساعد)',
        adultDose: 'TCA toxicity: 1-2 mEq/kg IV bolus, repeat to maintain serum pH 7.45-7.55; Severe acidosis: per calculated base deficit',
        adultDoseAr: 'سمية مضادات الاكتئاب الحلقية: 1-2 ملي مكافئ/كجم جرعة بلعية وريدية، تُكرر للحفاظ على pH الدم 7.45-7.55؛ الحماض الشديد: حسب عجز القاعدة المحسوب',
        route: 'IV/PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Use with caution; monitor sodium and fluid status',
      crclBelow10: 'Use with caution; risk of sodium and fluid overload; monitor closely',
      hemodialysis: 'Dose per acid-base status; sodium bicarbonate may be part of dialysate'
    },
    hepaticAdjustment: 'No specific adjustment needed',
    contraindications: [
      'القلاء الاستقلابي أو التنفسي',
      'نقص كالسيوم الدم (قد يفاقم أعراض التكزز)',
      'فرط صوديوم الدم الشديد',
      'فشل القلب غير المعاوض (حذر لحمل الصوديوم العالي)'
    ],
    mechanismOfAction: 'Dissociates to provide bicarbonate ion, buffering excess hydrogen ions and raising blood pH; sodium load also narrows QRS in sodium channel blocker toxicity',
    mechanismOfActionAr: 'يتفكك ليوفر أيون البيكربونات الذي يعادل زيادة أيونات الهيدروجين ويرفع pH الدم؛ حمل الصوديوم أيضاً يضيق QRS في تسمم حاصرات قنوات الصوديوم',
    halfLife: 'N/A (rapidly metabolized/excreted)',
    monitoringParameters: [
      'غازات الدم الشريانية وpH',
      'الصوديوم والبوتاسيوم في الدم',
      'تخطيط القلب (عرض QRS في سمية TCA)',
      'حالة السوائل وعلامات الحمل الزائد'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُقلل امتصاص بعض الأدوية الحمضية عبر رفع pH المعدة عند الاستخدام الفموي'
    ],
    pearls: [
      'في سمية مضادات الاكتئاب الحلقية الثلاثية، الهدف هو تضييق مركب QRS وليس تصحيح الحماض بالضرورة - يُعطى حتى مع pH طبيعي أحياناً',
      'لا يُستخدم روتينياً في السكتة القلبية العامة إلا في حالات محددة (فرط بوتاسيوم، حماض شديد موثق، تسمم بمضادات الاكتئاب الحلقية)',
      'الإعطاء السريع أو الزائد قد يسبب قلاءً استقلابياً وانزياحاً يسارياً لمنحنى تفكك الأكسجين'
    ]
  },
  {
    id: 'gabapentin',
    genericName: 'Gabapentin',
    genericNameAr: 'جابابنتين',
    brandNames: ['Neurontin', 'نيورونتين'],
    drugClass: 'Gabapentinoid (Anticonvulsant/Neuropathic Pain Agent)',
    drugClassAr: 'جابابنتينويد (مضاد اختلاج وعلاج الألم العصبي)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pharmacy', 'internal_medicine', 'nursing'],
    keyHighlights: [
      'يحتاج تعديل جرعة كبير جداً في القصور الكلوي - يُفرز كلياً دون تغيير',
      'امتصاصه غير خطي (يقل نسبياً مع زيادة الجرعة الواحدة) - يُقسم على جرعات متعددة لتحسين التوافر الحيوي',
      'خطر تثبيط تنفسي متزايد عند الدمج مع الأفيونات أو في أمراض الرئة الانسدادية'
    ],
    indications: [
      {
        indication: 'Postherpetic neuralgia / Diabetic peripheral neuropathy / Adjunctive therapy for partial seizures / Restless legs syndrome',
        indicationAr: 'الألم العصبي التالي للهربس النطاقي / اعتلال الأعصاب السكري المحيطي / علاج مساعد للنوبات الجزئية / متلازمة تململ الساقين',
        adultDose: 'Start 300 mg PO once daily, titrate to 300-600 mg three times daily (max 3600 mg/day divided)',
        adultDoseAr: 'البدء بـ 300 مج فموياً مرة يومياً، يُعدل تدريجياً إلى 300-600 مج ثلاث مرات يومياً (حد أقصى 3600 مج/يوم مقسمة)',
        pediatricDose: '10-15 mg/kg/day divided three times daily for seizures (ages 3+)',
        pediatricDoseAr: '10-15 مج/كجم/يوم مقسمة ثلاث مرات يومياً للنوبات (من عمر 3 سنوات)',
        maxDose: '3600 mg/day',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed (CrCl > 60)',
      crcl10to50: 'Reduce total daily dose significantly (e.g., 200-700 mg/day divided based on exact CrCl)',
      crclBelow10: 'Maximum 300 mg/day or every other day dosing',
      hemodialysis: '125-350 mg after each dialysis session (supplemental dose required)'
    },
    hepaticAdjustment: 'No specific adjustment needed; not hepatically metabolized',
    contraindications: [
      'فرط الحساسية للجابابنتين'
    ],
    mechanismOfAction: 'Binds to the alpha-2-delta subunit of voltage-gated calcium channels, reducing calcium influx and neurotransmitter release',
    mechanismOfActionAr: 'يرتبط بالوحدة الفرعية ألفا-2-دلتا لقنوات الكالسيوم المعتمدة على الجهد، فيقلل دخول الكالسيوم وإفراز النواقل العصبية',
    halfLife: '5-7 hours',
    monitoringParameters: [
      'مستوى الألم والوظيفة',
      'الدوخة والنعاس خاصة عند البدء',
      'وظائف الكلى لتعديل الجرعة',
      'معدل التنفس عند الدمج مع الأفيونات أو المهدئات'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'مضادات الحموضة المحتوية على الألومنيوم أو المغنيسيوم تقلل الامتصاص - يفصل بساعتين'
    ],
    pearls: [
      'امتصاصه غير الخطي يعني أن تقسيم الجرعة اليومية على 3 مرات أفضل من جرعة واحدة كبيرة لتحقيق توافر حيوي أعلى',
      'أصبح يُصنف كمادة خاضعة للرقابة في بعض الولايات/الدول بسبب تزايد سوء الاستخدام مع الأفيونات',
      'الإيقاف المفاجئ بعد استخدام مطول قد يسبب أعراض انسحاب تشمل القلق والأرق والتشنجات النادرة'
    ]
  },
  {
    id: 'quetiapine',
    genericName: 'Quetiapine',
    genericNameAr: 'كويتيابين',
    brandNames: ['Seroquel', 'سيروكويل'],
    drugClass: 'Atypical (Second-Generation) Antipsychotic',
    drugClassAr: 'مضاد ذهان غير تقليدي (الجيل الثاني)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'تحذير صندوق أسود لزيادة الوفيات في المرضى المسنين المصابين بالخرف وزيادة الأفكار الانتحارية في الشباب',
      'تأثير مهدئ قوي بالجرعات المنخفضة (يُستخدم أحياناً خارج الاستطباب للأرق) وتأثير مضاد ذهان بالجرعات الأعلى',
      'خطر متلازمة الأيض (زيادة وزن، سكري، شحوم) من أعلى مضادات الذهان غير التقليدية'
    ],
    indications: [
      {
        indication: 'Schizophrenia / Bipolar disorder (mania and depression) / Major depressive disorder (adjunct)',
        indicationAr: 'الفصام / الاضطراب ثنائي القطب (الهوس والاكتئاب) / الاكتئاب الجسيم (مساعد)',
        adultDose: 'Immediate-release: start 25 mg twice daily, titrate to 150-800 mg/day divided; Extended-release: 50-300 mg once daily',
        adultDoseAr: 'سريع الإطلاق: البدء بـ 25 مج مرتين يومياً، يُعدل إلى 150-800 مج/يوم مقسمة؛ ممتد الإطلاق: 50-300 مج مرة يومياً',
        maxDose: '800 mg/day',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No specific adjustment typically needed; use with caution',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Start at 25 mg/day and titrate slowly (by 25-50 mg/day increments) in hepatic impairment',
    contraindications: [
      'فرط الحساسية للكويتيابين'
    ],
    blackBoxWarning: 'Increased mortality in elderly patients with dementia-related psychosis; increased risk of suicidal thinking and behavior in children, adolescents, and young adults',
    blackBoxWarningAr: 'زيادة معدل الوفيات في المرضى المسنين المصابين بذهان مرتبط بالخرف؛ زيادة خطر الأفكار والسلوكيات الانتحارية لدى الأطفال والمراهقين والشباب',
    mechanismOfAction: 'Antagonizes dopamine D2 and serotonin 5-HT2A receptors; also has significant antihistaminic and alpha-1 adrenergic antagonist activity (sedation, hypotension)',
    mechanismOfActionAr: 'يضاد مستقبلات الدوبامين D2 والسيروتونين 5-HT2A؛ وله نشاط مضاد للهيستامين وألفا-1 الأدريناليني ملحوظ (تسكين وانخفاض ضغط)',
    halfLife: '6-7 hours',
    monitoringParameters: [
      'الوزن ومحيط الخصر دورياً',
      'سكر الدم والشحوم الصائمة (خط الأساس وكل 3-6 أشهر)',
      'ضغط الدم (خطر انخفاض ضغط انتصابي خاصة عند البدء)',
      'علامات الأعراض خارج الهرمية (أقل من مضادات الذهان التقليدية)',
      'علامات المتلازمة الخبيثة للذهان'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'عصير الجريب فروت قد يرفع مستواه الدموي عبر تثبيط CYP3A4 - يُفضل تجنبه',
      'يُتجنب الكحول لزيادة التأثير المهدئ'
    ],
    pearls: [
      'يُستخدم على نطاق واسع خارج الاستطباب المعتمد كمساعد منوم بجرعات منخفضة (25-100 مج) رغم عدم الموافقة الرسمية لهذا الغرض',
      'من أقل مضادات الذهان تسبباً بالأعراض خارج الهرمية لكنه من أكثرها تسبباً بزيادة الوزن والتأثيرات الأيضية',
      'لا يُوقف فجأة بعد استخدام مطول - خطر أعراض ارتدادية (أرق، غثيان، دوخة)'
    ]
  },
  {
    id: 'escitalopram',
    genericName: 'Escitalopram',
    genericNameAr: 'إسيتالوبرام',
    brandNames: ['Lexapro', 'ليكسابرو'],
    drugClass: 'Selective Serotonin Reuptake Inhibitor (SSRI)',
    drugClassAr: 'مثبط انتقائي لإعادة امتصاص السيروتونين',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'تحذير صندوق أسود لزيادة الأفكار والسلوك الانتحاري عند الأطفال والمراهقين والشباب حتى 24 عاماً',
      'يطيل QT بطريقة جرعة-معتمدة - الجرعة القصوى 20 مج/يوم في المرضى فوق 65 عاماً',
      'من أكثر SSRIs انتقائية مع تفاعلات دوائية أقل عبر CYP450 مقارنة بالفلوكسيتين أو الباروكسيتين'
    ],
    indications: [
      {
        indication: 'Major depressive disorder / Generalized anxiety disorder',
        indicationAr: 'الاكتئاب الجسيم / اضطراب القلق المعمم',
        adultDose: 'Start 10 mg PO once daily, may increase to 20 mg once daily after at least 1 week',
        adultDoseAr: 'البدء بـ 10 مج فموياً مرة يومياً، يمكن زيادتها إلى 20 مج مرة يومياً بعد أسبوع على الأقل',
        pediatricDose: '10 mg PO once daily for ages 12-17 (MDD), may increase to 20 mg after 3 weeks',
        pediatricDoseAr: '10 مج فموياً مرة يومياً للأعمار 12-17 (الاكتئاب الجسيم)، يمكن زيادتها إلى 20 مج بعد 3 أسابيع',
        maxDose: '20 mg/day (10 mg/day in patients over 65 or with hepatic impairment)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'Use with caution; limited data in severe renal impairment',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Maximum 10 mg/day in hepatic impairment',
    contraindications: [
      'الاستخدام المتزامن أو خلال 14 يوماً من مثبطات MAO',
      'الاستخدام المتزامن مع بيموزايد',
      'متلازمة QT الطويل الخلقية (حذر، ليس مانعاً مطلقاً دائماً لكن يُراعى)'
    ],
    blackBoxWarning: 'Increased risk of suicidal thinking and behavior in children, adolescents, and young adults up to age 24, particularly during initial treatment and dose changes',
    blackBoxWarningAr: 'زيادة خطر الأفكار والسلوكيات الانتحارية لدى الأطفال والمراهقين والشباب حتى سن 24، خاصة في بداية العلاج وتغيير الجرعة',
    mechanismOfAction: 'Selectively and potently inhibits presynaptic serotonin reuptake, increasing serotonergic neurotransmission',
    mechanismOfActionAr: 'يثبط بشكل انتقائي وقوي إعادة امتصاص السيروتونين قبل المشبكي فيزيد النقل العصبي السيروتونيني',
    halfLife: '27-32 hours',
    monitoringParameters: [
      'المزاج والأفكار الانتحارية (خاصة في أول شهرين)',
      'تخطيط القلب في المرضى عاليي الخطورة لإطالة QT',
      'الصوديوم في الدم (خطر نقص صوديوم الدم خاصة في المسنين)',
      'علامات متلازمة السيروتونين'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُؤخذ مع أو بدون طعام',
      'يُتجنب الكحول لزيادة التأثير المركزي'
    ],
    pearls: [
      'المستقلب النشط الوحيد (s-enantiomer) من السيتالوبرام - يحقق نفس الفعالية بنصف الجرعة تقريباً مع آثار جانبية أقل',
      'الجرعة القصوى محدودة بـ 20 مج/يوم في كبار السن بسبب خطر إطالة QT الجرعة-معتمد',
      'يُعتبر من أفضل SSRIs تحملاً مع أقل تفاعلات دوائية عبر نظام السيتوكروم P450'
    ]
  },
  {
    id: 'nitroglycerin',
    genericName: 'Nitroglycerin',
    genericNameAr: 'نيتروجليسرين',
    brandNames: ['Nitrostat', 'Nitro-Bid', 'نيتروستات'],
    drugClass: 'Nitrate Vasodilator',
    drugClassAr: 'موسع وعائي من فئة النترات',
    category: 'Rx',
    route: ['SL', 'IV', 'Transdermal', 'PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'icu_emergency', 'pharmacy'],
    keyHighlights: [
      'يُمنع تماماً مع مثبطات PDE5 (سيلدينافيل، تادالافيل) خلال 24-48 ساعة - خطر انخفاض ضغط قاتل',
      'التحمل (tolerance) يتطور بسرعة مع الاستخدام المستمر - يحتاج فترة خالية من النترات 10-12 ساعة يومياً',
      'الصداع أثر جانبي شائع جداً ومؤشر على فعالية الدواء وليس سبباً للإيقاف'
    ],
    indications: [
      {
        indication: 'Acute angina / Acute coronary syndrome / Hypertensive emergency / Acute heart failure with pulmonary edema',
        indicationAr: 'الذبحة الصدرية الحادة / المتلازمة التاجية الحادة / أزمة ارتفاع ضغط الدم / فشل القلب الحاد مع وذمة رئوية',
        adultDose: 'SL: 0.3-0.4 mg every 5 min x3 PRN; IV infusion: start 5-10 mcg/min, titrate by 5-10 mcg/min every 5 min to effect',
        adultDoseAr: 'تحت اللسان: 0.3-0.4 مج كل 5 دقائق حتى 3 مرات عند الحاجة؛ تسريب وريدي: البدء بـ 5-10 ميكروجرام/دقيقة، يُزاد بـ 5-10 ميكروجرام/دقيقة كل 5 دقائق',
        maxDose: 'IV infusion typically up to 200 mcg/min',
        route: 'SL/IV/Transdermal'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; titrate to hemodynamic response',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment needed',
    contraindications: [
      'الاستخدام المتزامن مع مثبطات فوسفوديستراز-5 (سيلدينافيل خلال 24 ساعة، تادالافيل خلال 48 ساعة)',
      'احتشاء البطين الأيمن',
      'نقص حجم الدم الشديد أو انخفاض الضغط الشديد',
      'فقر الدم الشديد',
      'زيادة الضغط داخل الجمجمة'
    ],
    mechanismOfAction: 'Releases nitric oxide, activating guanylate cyclase and increasing cGMP, causing venous (predominant) and arterial smooth muscle relaxation',
    mechanismOfActionAr: 'يُطلق أكسيد النيتريك فينشط إنزيم جوانيليت سيكليز ويزيد cGMP، مسبباً استرخاء العضلات الملساء الوريدية (بشكل أساسي) والشريانية',
    halfLife: '1-4 minutes',
    monitoringParameters: [
      'ضغط الدم المستمر أثناء التسريب الوريدي',
      'معدل ضربات القلب',
      'شدة الصداع والذبحة الصدرية',
      'علامات التحمل مع الاستخدام المطول'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'يُمنع الكحول لزيادة خطر انخفاض الضغط الشديد'
    ],
    pearls: [
      'يجب سؤال المريض دائماً عن استخدام أدوية الانتصاب (سيلدينافيل وأشباهه) قبل إعطاء أي شكل من النترات',
      'اللصقات الجلدية تُزال لمدة 10-12 ساعة يومياً (عادة ليلاً) لمنع تطور التحمل والحفاظ على الفعالية',
      'الحبوب تحت اللسان تفقد فعاليتها بسرعة بعد فتح العلبة (حوالي 3 أشهر) بسبب التطاير - يُنصح بالتجديد الدوري'
    ]
  },
  {
    id: 'ipratropium',
    genericName: 'Ipratropium Bromide',
    genericNameAr: 'إيبراتروبيوم بروميد',
    brandNames: ['Atrovent', 'أتروفنت'],
    drugClass: 'Short-Acting Muscarinic Antagonist (SAMA)',
    drugClassAr: 'مضاد مسكاريني قصير المفعول',
    category: 'Rx',
    route: ['Inhalation', 'Nebulized'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'internal_medicine', 'nursing'],
    keyHighlights: [
      'يُستخدم بالاشتراك مع السالبوتامول (Combivent) لتأثير تآزري في تفاقم الربو والـ COPD',
      'امتصاصه الجهازي ضئيل جداً لأنه كاتيون رباعي - آثار جانبية جهازية أقل من الأتروبين',
      'بداية تأثيره أبطأ من بيتا-2 ناهضات - ليس دواء إنقاذ أول للنوبة الحادة وحده'
    ],
    indications: [
      {
        indication: 'COPD maintenance and exacerbation / Acute asthma (adjunct to SABA)',
        indicationAr: 'العلاج الصياني وتفاقم الانسداد الرئوي المزمن / الربو الحاد (مساعد لناهضات بيتا-2 قصيرة المفعول)',
        adultDose: 'MDI: 2 puffs (34 mcg) four times daily; Nebulizer: 500 mcg every 6-8 hours (acute: every 20 min x3 then per protocol)',
        adultDoseAr: 'بخاخ جرعة مقننة: نفثتان (34 ميكروجرام) أربع مرات يومياً؛ بالبخار: 500 ميكروجرام كل 6-8 ساعات (الحالات الحادة: كل 20 دقيقة 3 مرات ثم حسب البروتوكول)',
        pediatricDose: 'Nebulizer: 250-500 mcg every 20 min x3 for acute asthma (ages 2-12)',
        pediatricDoseAr: 'بالبخار: 250-500 ميكروجرام كل 20 دقيقة 3 مرات للربو الحاد (2-12 سنة)',
        route: 'Inhalation/Nebulized'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment needed',
    contraindications: [
      'فرط الحساسية للإيبراتروبيوم أو الأتروبين ومشتقاته',
      'حذر في تضخم البروستاتا أو احتباس البول أو الزرق ضيق الزاوية (امتصاص جهازي ضئيل لكن يُراعى عند الاستنشاق بالقناع قرب العين)'
    ],
    mechanismOfAction: 'Blocks muscarinic acetylcholine receptors in bronchial smooth muscle, preventing cGMP-mediated bronchoconstriction',
    mechanismOfActionAr: 'يحجب مستقبلات الأسيتيل كولين المسكارينية في العضلات الملساء القصبية فيمنع تضيق القصبات الوسيط بـ cGMP',
    halfLife: '2 hours',
    monitoringParameters: [
      'وظائف الرئة (ذروة التدفق، FEV1)',
      'الأعراض التنفسية',
      'جفاف الفم (أثر جانبي شائع)',
      'علامات احتباس البول في المرضى المعرضين للخطر'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية'
    ],
    pearls: [
      'يُعطى عبر ماسك وجه محكم أو ماصة فموية وليس بالقرب من العينين لتجنب تفاقم الزرق ضيق الزاوية عرضياً',
      'التآزر مع السالبوتامول (مستقبلات مختلفة) يحقق توسعاً قصبياً أكبر من أي منهما بمفرده في تفاقم COPD/الربو',
      'بداية تأثيره أبطأ (15-30 دقيقة) من SABA لذا لا يُعتمد عليه وحده كدواء إنقاذ سريع'
    ]
  },
  {
    id: 'montelukast',
    genericName: 'Montelukast',
    genericNameAr: 'مونتيلوكاست',
    brandNames: ['Singulair', 'سنجولير'],
    drugClass: 'Leukotriene Receptor Antagonist',
    drugClassAr: 'مضاد مستقبلات الليكوترايين',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pediatrics', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'تحذير صندوق أسود لتأثيرات نفسية عصبية خطيرة (كوابيس، عدوانية، أفكار انتحارية) خاصة في الأطفال',
      'يُؤخذ مساءً لأن الليكوترايينات ترتفع ليلاً وتسبب تدهور أعراض الربو الليلي',
      'ليس دواء إنقاذ - لا يُستخدم لعلاج النوبة الحادة، فقط للعلاج الوقائي المزمن'
    ],
    indications: [
      {
        indication: 'Chronic asthma maintenance / Allergic rhinitis / Exercise-induced bronchoconstriction prevention',
        indicationAr: 'العلاج الصياني للربو المزمن / التهاب الأنف التحسسي / الوقاية من تضيق القصبات الناتج عن الرياضة',
        adultDose: '10 mg PO once daily in the evening',
        adultDoseAr: '10 مج فموياً مرة يومياً مساءً',
        pediatricDose: '4 mg (ages 2-5) or 5 mg (ages 6-14) PO once daily in the evening',
        pediatricDoseAr: '4 مج (2-5 سنوات) أو 5 مج (6-14 سنة) فموياً مرة يومياً مساءً',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No adjustment needed in mild to moderate hepatic impairment; limited data in severe impairment',
    contraindications: [
      'فرط الحساسية للمونتيلوكاست'
    ],
    blackBoxWarning: 'Serious neuropsychiatric events including agitation, aggression, nightmares, depression, and suicidal thoughts/behavior have been reported',
    blackBoxWarningAr: 'أحداث نفسية عصبية خطيرة شملت الهياج والعدوانية والكوابيس والاكتئاب والأفكار/السلوكيات الانتحارية',
    mechanismOfAction: 'Selectively blocks the cysteinyl leukotriene receptor (CysLT1), inhibiting leukotriene-mediated bronchoconstriction and inflammation',
    mechanismOfActionAr: 'يحجب انتقائياً مستقبل سيستينيل ليكوترايين (CysLT1) فيثبط تضيق القصبات والالتهاب الوسيط بالليكوترايين',
    halfLife: '2.7-5.5 hours',
    monitoringParameters: [
      'الأعراض النفسية والسلوكية (خاصة في الأطفال والمراهقين)',
      'التحكم بأعراض الربو (تكرار النوبات، استخدام دواء الإنقاذ)',
      'وظائف الكبد (نادراً)'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية'
    ],
    pearls: [
      'يجب تحذير الأهل بوضوح من مراقبة أي تغيرات سلوكية أو مزاجية عند بدء العلاج في الأطفال',
      'فعال بشكل خاص في الربو المرتبط بالحساسية والتهاب الأنف التحسسي المصاحب',
      'لا يُستبدل بأي حال بدواء الإنقاذ السريع (SABA) في النوبة الحادة'
    ]
  },
  {
    id: 'budesonide',
    genericName: 'Budesonide (Inhaled)',
    genericNameAr: 'بوديزونايد (مستنشق)',
    brandNames: ['Pulmicort', 'بولميكورت'],
    drugClass: 'Inhaled Corticosteroid (ICS)',
    drugClassAr: 'كورتيكوستيرويد مستنشق',
    category: 'Rx',
    route: ['Inhalation', 'Nebulized'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pediatrics', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'المضمضة وبصق الماء بعد كل استخدام ضرورية للوقاية من داء المبيضات الفموي وبحة الصوت',
      'الآثار الجانبية الجهازية أقل بكثير من الكورتيزون الفموي بسبب الاستقلاب الكبدي الأول العالي',
      'العلاج الأساسي الوقائي طويل المدى للربو - ليس لعلاج النوبة الحادة'
    ],
    indications: [
      {
        indication: 'Chronic asthma maintenance (long-term control) / Croup (nebulized)',
        indicationAr: 'العلاج الصياني طويل المدى للربو المزمن / الخناق الحنجري (بالبخار)',
        adultDose: 'DPI: 180-720 mcg twice daily depending on severity',
        adultDoseAr: 'بخاخ بودرة جافة: 180-720 ميكروجرام مرتين يومياً حسب الشدة',
        pediatricDose: 'Nebulizer (croup/asthma): 0.5-1 mg twice daily; DPI: 90-180 mcg twice daily depending on age',
        pediatricDoseAr: 'بالبخار (الخناق/الربو): 0.5-1 مج مرتين يومياً؛ بخاخ بودرة جافة: 90-180 ميكروجرام مرتين يومياً حسب العمر',
        route: 'Inhalation/Nebulized'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution in significant hepatic impairment; systemic exposure may increase',
    contraindications: [
      'فرط الحساسية للبوديزونايد',
      'العدوى الفطرية الفموية أو التنفسية النشطة غير المعالجة (حذر نسبي)',
      'السل الرئوي النشط (حذر)'
    ],
    mechanismOfAction: 'Binds glucocorticoid receptors locally in airway tissue, reducing bronchial inflammation, mucosal edema, and mucus secretion',
    mechanismOfActionAr: 'يرتبط بمستقبلات الجلوكوكورتيكويد موضعياً في نسيج مجرى الهواء فيقلل الالتهاب القصبي والوذمة المخاطية وإفراز المخاط',
    halfLife: '2-3.6 hours',
    monitoringParameters: [
      'علامات داء المبيضات الفموي',
      'بحة الصوت',
      'التحكم بأعراض الربو ووظائف الرئة',
      'الطول في الأطفال عند الاستخدام طويل المدى (تأثير بسيط محتمل على النمو)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية'
    ],
    pearls: [
      'يُعتبر من أكثر الكورتيزونات المستنشقة أماناً في الحمل وأفضلها توثيقاً للاستخدام في الأطفال الصغار',
      'استخدام غرفة استنشاق (spacer) مع البخاخ يقلل الترسب الفموي البلعومي ويحسن الوصول الرئوي',
      'النبولايزر بالبوديزونايد علاج فعال وشائع في الخناق الحنجري المتوسط إلى الشديد عند الأطفال'
    ]
  },
  {
    id: 'lithium',
    genericName: 'Lithium',
    genericNameAr: 'ليثيوم',
    brandNames: ['Eskalith', 'Lithobid', 'إسكاليث'],
    drugClass: 'Mood Stabilizer',
    drugClassAr: 'مثبت مزاج',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'نطاق علاجي ضيق جداً (0.6-1.2 mEq/L) - مراقبة المستوى الدموي ضرورية مع كل تعديل جرعة',
      'نقص صوديوم الدم أو الجفاف يزيد مستوى الليثيوم بشكل خطير - تفاعلات مع مدرات الثيازيد ومثبطات الإيس وNSAIDs',
      'يحتاج مراقبة وظائف الكلى والغدة الدرقية الدورية طوال مدة العلاج'
    ],
    indications: [
      {
        indication: 'Bipolar disorder (mania prevention and treatment) / Treatment-resistant depression (adjunct)',
        indicationAr: 'الاضطراب ثنائي القطب (علاج ووقاية الهوس) / الاكتئاب المقاوم للعلاج (مساعد)',
        adultDose: 'Start 300 mg PO 2-3 times daily, titrate based on serum levels to target 0.6-1.2 mEq/L',
        adultDoseAr: 'البدء بـ 300 مج فموياً 2-3 مرات يومياً، يُعدل حسب المستوى الدموي للوصول إلى 0.6-1.2 ملي مكافئ/لتر',
        maxDose: 'Individualized based on serum levels; typically up to 2400 mg/day divided',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed; monitor levels closely',
      crcl10to50: 'Reduce dose by 25-50%; monitor levels closely',
      crclBelow10: 'Reduce dose by 50-75% or avoid; monitor levels very closely',
      hemodialysis: 'Dialyzable; dose after dialysis session and monitor levels closely'
    },
    hepaticAdjustment: 'No specific adjustment needed; not hepatically metabolized',
    contraindications: [
      'القصور الكلوي الشديد غير المراقب',
      'نقص الصوديوم الشديد أو الجفاف غير المصحح',
      'أمراض القلب والأوعية الشديدة غير المستقرة',
      'الحمل (خاصة الثلث الأول - خطر تشوهات قلبية)'
    ],
    blackBoxWarning: 'Lithium toxicity is closely related to serum levels and can occur at doses close to therapeutic levels; requires regular monitoring of serum lithium concentration',
    blackBoxWarningAr: 'سمية الليثيوم ترتبط ارتباطاً وثيقاً بالمستوى الدموي وقد تحدث بجرعات قريبة من المستوى العلاجي؛ يتطلب مراقبة منتظمة لتركيز الليثيوم الدموي',
    mechanismOfAction: 'Exact mechanism unclear; modulates neurotransmitter release, affects second messenger systems (inositol phosphate pathway), and influences G-protein coupled receptor signaling',
    mechanismOfActionAr: 'الآلية الدقيقة غير واضحة تماماً؛ ينظم إفراز النواقل العصبية، يؤثر على أنظمة الرسول الثاني (مسار إينوزيتول فوسفات)، ويؤثر على إشارات المستقبلات المقترنة ببروتين G',
    halfLife: '18-36 hours (longer in elderly or renal impairment)',
    monitoringParameters: [
      'مستوى الليثيوم الدموي (12 ساعة بعد آخر جرعة) كل 1-2 أسبوع عند البدء ثم كل 3-6 أشهر',
      'وظائف الكلى والغدة الدرقية كل 6-12 شهر',
      'الصوديوم في الدم',
      'علامات التسمم (رعاش، ترنح، تخليط، تقيؤ)',
      'تخطيط القلب في المرضى عاليي الخطورة'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'الجفاف أو تقييد الصوديوم (حمية قليلة الملح) يرفع مستوى الليثيوم بشكل خطير',
      'الكافيين المفرط قد يقلل مستواه قليلاً عبر زيادة إخراج الكلى'
    ],
    pearls: [
      'يجب الحفاظ على استهلاك ثابت ومنتظم من الملح والسوائل لأن أي تغيير مفاجئ يؤثر بشكل كبير على مستوى الليثيوم الدموي',
      'مدرات الثيازيد ومثبطات الإيس وNSAIDs من أخطر التفاعلات الدوائية الشائعة التي ترفع مستوى الليثيوم وتسبب تسمماً',
      'التسمم الحاد يُعالج بالإماهة الوريدية وقد يحتاج غسيل كلوي في الحالات الشديدة (مستوى > 4 mEq/L مع أعراض شديدة)'
    ]
  },
  {
    id: 'levetiracetam',
    genericName: 'Levetiracetam',
    genericNameAr: 'ليفيتيراسيتام',
    brandNames: ['Keppra', 'كيبرا'],
    drugClass: 'Anticonvulsant (SV2A Modulator)',
    drugClassAr: 'مضاد اختلاج (منظم SV2A)',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'لا يحتاج مراقبة مستوى دموي روتينية ولا يتفاعل بشكل كبير عبر CYP450 - سهل الاستخدام في المرضى متعددي الأدوية',
      'الجرعة الوريدية والفموية متماثلة تماماً (توافر حيوي 100%) - يسهل التحويل الفوري',
      'قد يسبب تغيرات سلوكية ونفسية (عدوانية، اكتئاب، تهيج) يجب مراقبتها خاصة عند البدء'
    ],
    indications: [
      {
        indication: 'Partial-onset seizures / Myoclonic seizures / Generalized tonic-clonic seizures / Status epilepticus (second-line)',
        indicationAr: 'النوبات الجزئية البداية / النوبات الرمعية العضلية / النوبات التوترية الرمعية المعممة / الحالة الصرعية (خط ثانٍ)',
        adultDose: 'Start 500 mg PO/IV twice daily, titrate to 1000-1500 mg twice daily; Status epilepticus: 60 mg/kg IV (max 4500 mg)',
        adultDoseAr: 'البدء بـ 500 مج فموياً/وريدياً مرتين يومياً، يُعدل إلى 1000-1500 مج مرتين يومياً؛ الحالة الصرعية: 60 مج/كجم وريدياً (حد أقصى 4500 مج)',
        pediatricDose: '10 mg/kg PO/IV twice daily, titrate up to 30 mg/kg twice daily',
        pediatricDoseAr: '10 مج/كجم فموياً/وريدياً مرتين يومياً، يُعدل حتى 30 مج/كجم مرتين يومياً',
        maxDose: '3000 mg/day (up to 4500 mg loading in status epilepticus)',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: '500-1000 mg every 12 hours (dose reduction based on exact CrCl)',
      crclBelow10: '500-1000 mg once daily',
      hemodialysis: '500-1000 mg once daily with supplemental 250-500 mg dose after dialysis session'
    },
    hepaticAdjustment: 'No specific adjustment needed; not hepatically metabolized',
    contraindications: [
      'فرط الحساسية لليفيتيراسيتام'
    ],
    mechanismOfAction: 'Binds to synaptic vesicle protein SV2A, modulating neurotransmitter release and inhibiting neuronal hypersynchronization',
    mechanismOfActionAr: 'يرتبط ببروتين الحويصلة المشبكية SV2A، فينظم إفراز النواقل العصبية ويثبط التزامن العصبي المفرط',
    halfLife: '6-8 hours (longer in renal impairment)',
    monitoringParameters: [
      'التحكم بالنوبات',
      'التغيرات السلوكية والمزاجية (عدوانية، اكتئاب)',
      'وظائف الكلى لتعديل الجرعة',
      'تعداد الدم الكامل (نادراً يسبب قلة كريات)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية؛ يُؤخذ مع أو بدون طعام'
    ],
    pearls: [
      'أصبح من أكثر مضادات الاختلاج استخداماً في الحالة الصرعية كخط ثانٍ بعد البنزوديازيبينات لسهولة الإعطاء الوريدي السريع وقلة التفاعلات',
      'خلافاً لمعظم مضادات الاختلاج القديمة، لا يحتاج مراقبة مستوى دموي روتينية في معظم الحالات',
      'التغيرات السلوكية (خاصة العدوانية) أثر جانبي معروف يستدعي تنبيه المريض وأسرته عند البدء'
    ]
  },
  {
    id: 'carbamazepine',
    genericName: 'Carbamazepine',
    genericNameAr: 'كاربامازيبين',
    brandNames: ['Tegretol', 'تجريتول'],
    drugClass: 'Anticonvulsant (Sodium Channel Blocker)',
    drugClassAr: 'مضاد اختلاج (حاصر قنوات الصوديوم)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'تحذير صندوق أسود لفقر الدم اللاتنسجي وقلة المحببات - يحتاج تعداد دم كامل قبل البدء ودورياً',
      'يحرض استقلابه الذاتي (autoinduction) - قد تحتاج زيادة الجرعة خلال أول 3-5 أسابيع للحفاظ على نفس المستوى الدموي',
      'ارتباط قوي بمتلازمة ستيفنز جونسون في حاملي الأليل HLA-B*1502 (شائع في أصول جنوب شرق آسيا) - يُنصح بالفحص الجيني قبل البدء'
    ],
    indications: [
      {
        indication: 'Partial and generalized tonic-clonic seizures / Trigeminal neuralgia / Bipolar disorder (adjunct)',
        indicationAr: 'النوبات الجزئية والتوترية الرمعية المعممة / ألم العصب مثلث التوائم / الاضطراب ثنائي القطب (مساعد)',
        adultDose: 'Start 200 mg PO twice daily, titrate gradually to 800-1200 mg/day divided (due to autoinduction)',
        adultDoseAr: 'البدء بـ 200 مج فموياً مرتين يومياً، يُعدل تدريجياً إلى 800-1200 مج/يوم مقسمة (بسبب التحريض الذاتي)',
        pediatricDose: '10-20 mg/kg/day divided twice or three times daily',
        pediatricDoseAr: '10-20 مج/كجم/يوم مقسمة مرتين أو ثلاث مرات يومياً',
        maxDose: '1600-2000 mg/day (varies by indication)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'Use with caution; start with lower dose',
      hemodialysis: 'Partially dialyzed; supplemental dose may be needed after dialysis'
    },
    hepaticAdjustment: 'Use with caution; reduce dose in hepatic impairment and monitor liver enzymes closely',
    contraindications: [
      'تاريخ تثبيط نخاع العظم',
      'بورفيريا حادة متقطعة',
      'الاستخدام المتزامن مع مثبطات MAO',
      'الحساسية المتصالبة مع مضادات الاكتئاب الحلقية الثلاثية',
      'حاملو HLA-B*1502 (حذر شديد / يُفضل تجنبه)'
    ],
    blackBoxWarning: 'Serious and sometimes fatal dermatologic reactions (Stevens-Johnson syndrome, toxic epidermal necrolysis), aplastic anemia, and agranulocytosis; HLA-B*1502 testing recommended in patients of Asian ancestry before starting',
    blackBoxWarningAr: 'تفاعلات جلدية خطيرة وقد تكون قاتلة (متلازمة ستيفنز جونسون، انحلال البشرة السمي)، فقر الدم اللاتنسجي، وقلة المحببات؛ يُنصح بفحص HLA-B*1502 في المرضى ذوي الأصول الآسيوية قبل البدء',
    mechanismOfAction: 'Blocks voltage-gated sodium channels, stabilizing hyperexcited neuronal membranes and reducing repetitive neuronal firing',
    mechanismOfActionAr: 'يحجب قنوات الصوديوم المعتمدة على الجهد فيثبت الأغشية العصبية المفرطة الاستثارة ويقلل الإطلاق العصبي المتكرر',
    halfLife: '25-65 hours initially, decreasing to 12-17 hours with chronic use (autoinduction)',
    monitoringParameters: [
      'تعداد الدم الكامل (خط الأساس ودورياً)',
      'مستوى الكاربامازيبين الدموي (4-12 mcg/mL)',
      'وظائف الكبد',
      'الصوديوم في الدم (خطر نقص صوديوم)',
      'علامات الطفح الجلدي الخطير'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'عصير الجريب فروت يرفع مستواه الدموي عبر تثبيط CYP3A4 - يُتجنب',
      'يُفضل تناوله مع الطعام لتقليل الغثيان'
    ],
    pearls: [
      'التحريض الذاتي لاستقلابه يعني أن المستوى الدموي قد ينخفض تلقائياً خلال أول شهر من العلاج دون تغيير الجرعة - يحتاج إعادة تقييم',
      'فحص HLA-B*1502 أصبح معياراً موصى به في المرضى من أصول آسيوية قبل بدء العلاج لتقليل خطر التفاعلات الجلدية القاتلة',
      'محرض قوي لإنزيمات الكبد - يقلل فعالية العديد من الأدوية شاملة موانع الحمل الفموية ومضادات التخثر'
    ]
  },
  {
    id: 'allopurinol',
    genericName: 'Allopurinol',
    genericNameAr: 'ألوبيورينول',
    brandNames: ['Zyloprim', 'زيلوبريم'],
    drugClass: 'Xanthine Oxidase Inhibitor',
    drugClassAr: 'مثبط إنزيم الزانثين أوكسيديز',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy'],
    keyHighlights: [
      'لا يُبدأ أبداً أثناء نوبة النقرس الحادة - قد يطيل أو يفاقم النوبة؛ يُبدأ بعد انحسارها بأسابيع',
      'فحص HLA-B*5801 موصى به في بعض الأعراق (آسيويون، أفارقة) قبل البدء لتقليل خطر متلازمة ستيفنز جونسون',
      'يتفاعل بخطورة مع الآزاثيوبرين والميركابتوبورين - يثبط استقلابهما مسبباً تسمماً شديداً'
    ],
    indications: [
      {
        indication: 'Chronic gout (urate-lowering therapy) / Prevention of tumor lysis syndrome / Recurrent uric acid stones',
        indicationAr: 'النقرس المزمن (علاج خافض لحمض اليوريك) / الوقاية من متلازمة تحلل الورم / حصوات حمض اليوريك المتكررة',
        adultDose: 'Start 100 mg PO once daily, titrate gradually every 2-4 weeks to target serum urate < 6 mg/dL (usual maintenance 200-300 mg/day)',
        adultDoseAr: 'البدء بـ 100 مج فموياً مرة يومياً، يُعدل تدريجياً كل 2-4 أسابيع للوصول لحمض يوريك دموي أقل من 6 مج/دل (الصيانة المعتادة 200-300 مج/يوم)',
        maxDose: '800 mg/day',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce starting dose (e.g., 50-100 mg/day) and titrate slowly',
      crclBelow10: 'Start at 50 mg/day or every other day; titrate very slowly',
      hemodialysis: 'Administer dose after dialysis session (200-300 mg three times weekly post-dialysis)'
    },
    hepaticAdjustment: 'Use with caution; reduce dose in significant hepatic impairment',
    contraindications: [
      'نوبة النقرس الحادة النشطة (لا يُبدأ أثناءها)',
      'فرط الحساسية للألوبيورينول',
      'الاستخدام المتزامن مع الآزاثيوبرين أو الميركابتوبورين بدون تعديل جرعة كبير لهما'
    ],
    mechanismOfAction: 'Inhibits xanthine oxidase, reducing conversion of hypoxanthine and xanthine to uric acid',
    mechanismOfActionAr: 'يثبط إنزيم الزانثين أوكسيديز فيقلل تحويل الهيبوزانثين والزانثين إلى حمض اليوريك',
    halfLife: '1-3 hours (active metabolite oxypurinol: 12-30 hours)',
    monitoringParameters: [
      'حمض اليوريك الدموي (الهدف < 6 مج/دل)',
      'وظائف الكلى والكبد',
      'تعداد الدم الكامل',
      'علامات الطفح الجلدي أو فرط الحساسية في الأسابيع الأولى'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُفضل تناوله بعد الوجبات لتقليل تهيج المعدة',
      'يُنصح بزيادة شرب السوائل لتقليل خطر تكون حصوات الزانثين'
    ],
    pearls: [
      'البدء أثناء نوبة حادة قد يطيلها - يُستخدم الكولشيسين أو NSAIDs للوقاية أثناء أول 3-6 أشهر من بدء الألوبيورينول',
      'التعديل التدريجي البطيء للجرعة (start low, go slow) يقلل خطر إطلاق نوبات نقرس جديدة ناتجة عن التذبذب السريع لمستوى حمض اليوريك',
      'التفاعل مع الآزاثيوبرين/الميركابتوبورين خطير جداً - يتطلب تقليل جرعتهما بنسبة 65-75% إذا كان لا بد من الجمع'
    ]
  },
  {
    id: 'colchicine',
    genericName: 'Colchicine',
    genericNameAr: 'كولشيسين',
    brandNames: ['Colcrys', 'كولكريس'],
    drugClass: 'Anti-Gout/Anti-Inflammatory Agent',
    drugClassAr: 'مضاد للنقرس ومضاد التهاب',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'cardiology'],
    keyHighlights: [
      'هامش أمان ضيق جداً - الجرعة الزائدة قد تكون قاتلة؛ التسمم يسبب فشلاً متعدد الأعضاء',
      'يتفاعل بخطورة مع مثبطات CYP3A4/P-gp القوية (كلاريثرومايسين، كيتوكونازول) - قد يسبب تسمماً قاتلاً حتى بالجرعة العلاجية',
      'يحتاج تقليل جرعة كبير في القصور الكلوي والكبدي لتراكمه وزيادة خطر التسمم'
    ],
    indications: [
      {
        indication: 'Acute gout flare / Gout flare prophylaxis / Familial Mediterranean fever / Pericarditis (adjunct)',
        indicationAr: 'نوبة النقرس الحادة / الوقاية من نوبات النقرس / الحمى المتوسطية العائلية / التهاب التامور (مساعد)',
        adultDose: 'Acute gout: 1.2 mg PO at first sign, then 0.6 mg 1 hour later (max 1.8 mg in 1 hour); Prophylaxis: 0.6 mg once or twice daily',
        adultDoseAr: 'النقرس الحاد: 1.2 مج فموياً عند أول علامة، ثم 0.6 مج بعد ساعة (حد أقصى 1.8 مج خلال ساعة)؛ الوقاية: 0.6 مج مرة أو مرتين يومياً',
        maxDose: '1.8 mg within 1 hour for acute flare',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce dose by 50%; use with caution',
      crclBelow10: 'Avoid repeat dosing within 14 days; use with extreme caution',
      hemodialysis: 'Avoid use or use single dose only with extreme caution; not well dialyzed'
    },
    hepaticAdjustment: 'Reduce dose in hepatic impairment; avoid in severe hepatic impairment combined with renal impairment',
    contraindications: [
      'القصور الكلوي والكبدي الشديد المشترك',
      'الاستخدام المتزامن مع مثبطات قوية لـ CYP3A4 وP-gp في مرضى القصور الكلوي أو الكبدي',
      'فرط الحساسية للكولشيسين'
    ],
    blackBoxWarning: 'Fatal colchicine toxicity reported with concomitant use of P-glycoprotein or strong CYP3A4 inhibitors in patients with renal or hepatic impairment',
    blackBoxWarningAr: 'سمية كولشيسين قاتلة تم الإبلاغ عنها مع الاستخدام المتزامن لمثبطات P-glycoprotein أو مثبطات قوية لـ CYP3A4 في مرضى القصور الكلوي أو الكبدي',
    mechanismOfAction: 'Binds tubulin, inhibiting microtubule polymerization and disrupting neutrophil chemotaxis and inflammatory response',
    mechanismOfActionAr: 'يرتبط بالتوبيولين فيثبط بلمرة الأنيبيبات الدقيقة ويعطل الانجذاب الكيميائي للعدلات والاستجابة الالتهابية',
    halfLife: '26-31 hours',
    monitoringParameters: [
      'وظائف الكلى والكبد',
      'تعداد الدم الكامل عند الاستخدام المزمن',
      'الأعراض الهضمية (إسهال، غثيان - مؤشر مبكر للتسمم)',
      'علامات اعتلال العضلات (ألم عضلي، ضعف) خاصة مع الستاتينات'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'عصير الجريب فروت يرفع مستواه عبر تثبيط CYP3A4 المعوي - يُتجنب'
    ],
    pearls: [
      'الإسهال أو الغثيان المبكر غالباً أول علامة على اقتراب الجرعة السامة ويستدعي إيقاف الدواء فوراً',
      'لا يوجد ترياق نوعي للتسمم بالكولشيسين - العلاج داعم بحت في وحدة العناية المركزة',
      'يجب مراجعة جميع أدوية المريض بدقة قبل الوصف بسبب تفاعلاته الخطيرة مع مثبطات CYP3A4/P-gp الشائعة'
    ]
  },
  {
    id: 'methotrexate',
    genericName: 'Methotrexate',
    genericNameAr: 'ميثوتريكسات',
    brandNames: ['Trexall', 'Rheumatrex', 'تريكسال'],
    drugClass: 'Antimetabolite (Folate Antagonist) / DMARD',
    drugClassAr: 'مضاد أيض (مضاد حمض الفوليك) / دواء مضاد للروماتيزم معدل للمرض',
    category: 'Rx',
    route: ['PO', 'SC', 'IM', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'oncology', 'pharmacy'],
    keyHighlights: [
      'يُعطى مرة واحدة أسبوعياً فقط في أمراض الروماتيزم - الجرعة اليومية الخاطئة سببت وفيات موثقة عديدة',
      'حمض الفوليك التكميلي (1-5 مج يومياً باستثناء يوم جرعة الميثوتريكسات) يقلل الآثار الجانبية دون تقليل الفعالية',
      'تحذير صندوق أسود لتثبيط نخاع العظم والسمية الكبدية والرئوية - يحتاج مراقبة دورية صارمة'
    ],
    indications: [
      {
        indication: 'Rheumatoid arthritis / Psoriasis / Psoriatic arthritis (low-dose weekly) / Various malignancies (high-dose, oncology protocols)',
        indicationAr: 'التهاب المفاصل الروماتويدي / الصدفية / التهاب المفاصل الصدفي (جرعة منخفضة أسبوعية) / أورام خبيثة متنوعة (جرعة عالية، بروتوكولات الأورام)',
        adultDose: 'Rheumatoid arthritis: 7.5-25 mg PO/SC ONCE WEEKLY (not daily)',
        adultDoseAr: 'التهاب المفاصل الروماتويدي: 7.5-25 مج فموياً/تحت الجلد مرة واحدة أسبوعياً فقط (وليس يومياً)',
        pediatricDose: 'Juvenile idiopathic arthritis: 10-15 mg/m² PO/SC once weekly',
        pediatricDoseAr: 'التهاب المفاصل الروماتويدي اليفعي: 10-15 مج/م² فموياً/تحت الجلد مرة أسبوعياً',
        duration: 'Once weekly dosing for rheumatologic/dermatologic indications - critical safety point',
        route: 'PO/SC/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed for low-dose weekly regimen; monitor closely',
      crcl10to50: 'Reduce dose by 50%; avoid in significant impairment if possible',
      crclBelow10: 'Avoid use; methotrexate is primarily renally eliminated and accumulates significantly',
      hemodialysis: 'Avoid use if possible; poorly dialyzed and highly toxic if accumulated'
    },
    hepaticAdjustment: 'Avoid or use with extreme caution in significant hepatic impairment; monitor liver enzymes closely',
    contraindications: [
      'الحمل (مسبب تشوهات جنينية موثق - Category X)',
      'القصور الكلوي الشديد',
      'أمراض الكبد المزمنة الشديدة',
      'تثبيط نخاع العظم الموجود مسبقاً',
      'نقص المناعة الشديد',
      'الإرضاع'
    ],
    blackBoxWarning: 'Must be used only by physicians experienced with antimetabolite therapy; can cause severe, sometimes fatal toxicity including bone marrow suppression, hepatotoxicity, pulmonary toxicity, and dermatologic reactions; fatal errors have occurred from incorrect daily dosing instead of weekly dosing for non-oncologic indications',
    blackBoxWarningAr: 'يجب أن يُستخدم فقط من قبل أطباء ذوي خبرة بعلاج مضادات الأيض؛ قد يسبب سمية شديدة وقد تكون قاتلة تشمل تثبيط نخاع العظم والسمية الكبدية والرئوية وتفاعلات جلدية؛ حدثت أخطاء قاتلة من إعطاء الجرعة يومياً بدلاً من أسبوعياً في دواعي الاستعمال غير السرطانية',
    mechanismOfAction: 'Inhibits dihydrofolate reductase, blocking folic acid metabolism and DNA/RNA synthesis in rapidly dividing cells',
    mechanismOfActionAr: 'يثبط إنزيم ديهيدروفولات ريدكتيز، فيمنع استقلاب حمض الفوليك وتخليق الحمض النووي في الخلايا سريعة الانقسام',
    halfLife: '3-10 hours (low dose)',
    monitoringParameters: [
      'تعداد الدم الكامل كل 2-4 أسابيع عند البدء ثم دورياً',
      'وظائف الكبد والكلى بانتظام',
      'اختبار الحمل قبل البدء في النساء في سن الإنجاب',
      'أعراض السمية الرئوية (سعال، ضيق تنفس)',
      'الالتزام الصارم بالجرعة الأسبوعية وليس اليومية'
    ],
    pregnancyCategory: 'X',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'الكحول يزيد خطر السمية الكبدية بشكل كبير - يُمنع تماماً',
      'حمض الفوليك التكميلي يُؤخذ في الأيام غير يوم جرعة الميثوتريكسات لتقليل الآثار الجانبية'
    ],
    pearls: [
      'أخطر خطأ دوائي موثق مع هذا الدواء هو وصفه أو صرفه كجرعة يومية بدلاً من أسبوعية في أمراض الروماتيزم - يجب التأكيد المزدوج دائماً',
      'حمض الفولينيك (ليوكوفورين) هو الترياق النوعي للسمية الحادة أو الجرعة الزائدة',
      'يُمنع منعاً باتاً في الحمل حتى بالجرعات المنخفضة المستخدمة في أمراض الروماتيزم - يجب التأكد من عدم الحمل ووسيلة منع حمل فعالة'
    ]
  },
  {
    id: 'clozapine',
    genericName: 'Clozapine',
    genericNameAr: 'كلوزابين',
    brandNames: ['Clozaril', 'كلوزاريل'],
    drugClass: 'Atypical Antipsychotic (Reserved for Treatment-Resistant Cases)',
    drugClassAr: 'مضاد ذهان غير تقليدي (محجوز للحالات المقاومة للعلاج)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'يتطلب التسجيل في برنامج REMS ومراقبة إلزامية لتعداد العدلات المطلقة (ANC) أسبوعياً ثم شهرياً مدى الحياة',
      'أكثر مضادات الذهان فعالية في الفصام المقاوم للعلاج لكن الأكثر خطورة من حيث الآثار الجانبية',
      'خطر التهاب عضلة القلب خاصة في أول شهرين - يحتاج مراقبة أعراض القلب'
    ],
    indications: [
      {
        indication: 'Treatment-resistant schizophrenia / Reducing suicidal behavior in schizophrenia/schizoaffective disorder',
        indicationAr: 'الفصام المقاوم للعلاج / تقليل السلوك الانتحاري في الفصام/الاضطراب الفصامي الوجداني',
        adultDose: 'Start 12.5 mg PO once or twice daily, titrate slowly to 300-450 mg/day divided (max 900 mg/day)',
        adultDoseAr: 'البدء بـ 12.5 مج فموياً مرة أو مرتين يومياً، يُعدل تدريجياً ببطء إلى 300-450 مج/يوم مقسمة (حد أقصى 900 مج/يوم)',
        maxDose: '900 mg/day',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Use with caution; start with lower dose',
      crclBelow10: 'Use with caution; start with lower dose and titrate slowly',
      hemodialysis: 'Not significantly dialyzed; dose per clinical response'
    },
    hepaticAdjustment: 'Use with caution; avoid in severe hepatic impairment or active liver disease',
    contraindications: [
      'تاريخ قلة المحببات أو فشل نخاع العظم الناتج عن الكلوزابين',
      'الصرع غير المسيطر عليه',
      'الذهان المرتبط بالخرف',
      'الانسداد المعوي الشللي',
      'عدم القدرة على الالتزام بمراقبة تعداد الدم المنتظمة'
    ],
    blackBoxWarning: 'Severe neutropenia requiring mandatory blood monitoring; seizures; myocarditis; orthostatic hypotension with risk of cardiac arrest; increased mortality in elderly patients with dementia-related psychosis',
    blackBoxWarningAr: 'قلة محببات شديدة تتطلب مراقبة دم إلزامية؛ تشنجات؛ التهاب عضلة القلب؛ انخفاض ضغط انتصابي مع خطر توقف القلب؛ زيادة الوفيات في المرضى المسنين المصابين بذهان مرتبط بالخرف',
    mechanismOfAction: 'Antagonizes multiple receptor systems including dopamine D1-D4, serotonin 5-HT2A, histamine H1, and muscarinic receptors with relatively weak D2 affinity',
    mechanismOfActionAr: 'يضاد أنظمة مستقبلات متعددة شاملة الدوبامين D1-D4 والسيروتونين 5-HT2A والهيستامين H1 والمستقبلات المسكارينية مع تقارب ضعيف نسبياً لـ D2',
    halfLife: '12 hours',
    monitoringParameters: [
      'تعداد العدلات المطلق (ANC) أسبوعياً لأول 6 أشهر ثم حسب البروتوكول (REMS)',
      'علامات التهاب عضلة القلب (حمى، ألم صدري، تسرع قلب) خاصة في أول شهرين',
      'الوزن وسكر الدم والشحوم',
      'ضغط الدم (خطر انخفاض ضغط انتصابي شديد عند البدء)',
      'علامات التشنج'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'التدخين يحرض استقلابه (يقلل المستوى الدموي) - التوقف المفاجئ عن التدخين قد يرفع المستوى بشكل خطير',
      'الكافيين قد يرفع مستواه الدموي'
    ],
    pearls: [
      'الدواء الوحيد المعتمد رسمياً لتقليل السلوك الانتحاري في الفصام، لكن يتطلب التزاماً صارماً ببرنامج المراقبة مدى الحياة',
      'يُحجز للفصام المقاوم للعلاج (فشل دوائين مضادين للذهان على الأقل) بسبب ملف الآثار الجانبية الخطير',
      'يجب التنسيق الدقيق عند تغيير عادات التدخين لأن ذلك يغير مستوى الدواء الدموي بشكل كبير عبر تأثيره على CYP1A2'
    ]
  },
  {
    id: 'clindamycin',
    genericName: 'Clindamycin',
    genericNameAr: 'كليندامايسين',
    brandNames: ['Cleocin', 'كليوسين'],
    drugClass: 'Lincosamide Antibiotic',
    drugClassAr: 'مضاد حيوي من فئة اللينكوساميد',
    category: 'Rx',
    route: ['PO', 'IV', 'Topical'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'من أعلى المضادات الحيوية خطراً لإحداث التهاب القولون بـ C. difficile',
      'تغطية ممتازة ضد اللاهوائيات والمكورات العنقودية والعقدية شاملة بعض سلالات MRSA المجتمعية',
      'يُستخدم لتثبيط إنتاج السموم البكتيرية (مثل السموم العقدية) بآلية مستقلة عن قتل البكتيريا'
    ],
    indications: [
      {
        indication: 'Anaerobic infections / Skin and soft tissue infections (including some CA-MRSA) / Toxin suppression in necrotizing fasciitis / Aspiration pneumonia',
        indicationAr: 'العدوى اللاهوائية / عدوى الجلد والأنسجة الرخوة (شاملة بعض سلالات MRSA المجتمعية) / تثبيط السموم في التهاب اللفافة الناخر / الالتهاب الرئوي الاستنشاقي',
        adultDose: '300-450 mg PO every 6-8 hours or 600-900 mg IV every 8 hours',
        adultDoseAr: '300-450 مج فموياً كل 6-8 ساعات أو 600-900 مج وريدياً كل 8 ساعات',
        pediatricDose: '10-13 mg/kg PO/IV every 6-8 hours',
        pediatricDoseAr: '10-13 مج/كجم فموياً/وريدياً كل 6-8 ساعات',
        maxDose: '2700 mg/day IV (4800 mg/day in life-threatening infections under specialist guidance)',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; primarily hepatically metabolized',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose or extend interval in severe hepatic impairment; monitor liver function',
    contraindications: [
      'فرط الحساسية للكليندامايسين أو اللينكومايسين',
      'تاريخ التهاب القولون المرتبط بالمضادات الحيوية (حذر شديد)'
    ],
    blackBoxWarning: 'Clostridioides difficile-associated diarrhea and pseudomembranous colitis have been reported with nearly all antibacterial agents, including clindamycin, ranging from mild to fatal',
    blackBoxWarningAr: 'تم الإبلاغ عن إسهال مرتبط بالـ C. difficile والتهاب القولون الغشائي الكاذب مع جميع المضادات الحيوية تقريباً شاملة الكليندامايسين، بدرجات تتراوح من خفيفة إلى قاتلة',
    mechanismOfAction: 'Binds to the 50S ribosomal subunit, inhibiting bacterial protein synthesis; also suppresses bacterial exotoxin production',
    mechanismOfActionAr: 'يرتبط بالوحدة الريبوسومية 50S فيثبط تخليق البروتين البكتيري؛ كما يثبط إنتاج السموم الخارجية البكتيرية',
    halfLife: '2-3 hours',
    monitoringParameters: [
      'علامات الإسهال أو التهاب القولون (يجب إيقاف الدواء فوراً عند الاشتباه)',
      'وظائف الكبد عند الاستخدام المطول',
      'تعداد الدم الكامل',
      'الاستجابة السريرية للعدوى'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية كبيرة؛ يُفضل تناوله مع كوب ماء كامل لتقليل تهيج المريء'
    ],
    pearls: [
      'يُستخدم بالاشتراك مع البنسلين في التهاب اللفافة الناخر العقدي لتثبيط إنتاج السموم البكتيرية وليس فقط لقتل الجراثيم',
      'أي إسهال يحدث أثناء أو بعد العلاج بالكليندامايسين (حتى بعد أسابيع من الإيقاف) يجب تقييمه لاستبعاد C. difficile',
      'خيار جيد للمرضى ذوي الحساسية للبنسلين في عدوى الجلد والأنسجة الرخوة بما فيها بعض سلالات MRSA المكتسبة من المجتمع'
    ]
  }
];

export const INITIAL_INTERACTIONS: DrugInteraction[] = [
  {
    id: 'paxlovid-statins',
    drug1Id: 'paxlovid',
    drug1Name: 'Paxlovid (Nirmatrelvir/Ritonavir)',
    drug2Id: 'atorvastatin',
    drug2Name: 'Atorvastatin / Simvastatin (Statins)',
    severity: 'critical',
    title: 'Severe CYP3A4 Inhibition leading to Rhabdomyolysis',
    titleAr: 'تثبيط كبدي شديد لـ CYP3A4 يؤدي لانحلال العضلات المخططة الحاد والفشل الكلوي',
    mechanism: 'Ritonavir is a potent CYP3A4 inhibitor, causing dramatic spikes (up to 400-800%) in serum levels of CYP3A4-metabolized statins.',
    mechanismAr: 'ريتونافير مثبط فائق القوة لإنزيم CYP3A4، مما يرفع تركيز الستاتين في الدم بنسبة هائلة تتجاوز 400% إلى 800%.',
    clinicalEffect: 'Severe myopathy, muscle breakdown (Rhabdomyolysis), acute renal failure, and marked transaminitis.',
    clinicalEffectAr: 'اعتلال عضلي شديد، انحلال العضلات المخططة الحاد، وفشل كلوي حاد.',
    management: 'Simvastatin/Lovastatin are strictly contraindicated. Atorvastatin/Rosuvastatin must be temporarily withheld during the 5-day course and for 3-5 days after completion.',
    managementAr: 'سيمفاستاتين مضاد استطباب قطعي. أتورفاستاتين أو روزوفاستاتين يجب إيقافهما تماماً خلال فترة العلاج بباكسلوفيد (5 أيام) ولمدة 3-5 أيام بعدها ثم استئنافهما بأمان.',
    evidenceLevel: 'Established'
  },
  {
    id: 'clopidogrel-omeprazole',
    drug1Id: 'clopidogrel',
    drug1Name: 'Clopidogrel (Plavix)',
    drug2Id: 'omeprazole',
    drug2Name: 'Omeprazole / Esomeprazole (PPIs)',
    severity: 'major',
    title: 'CYP2C19 Inhibition Decreasing Clopidogrel Bioactivation & Stent Thrombosis Risk',
    titleAr: 'تثبيط تنشيط الكلوبيدوجريل عبر CYP2C19 وزيادة خطر الجلطات وانسداد الدعامات',
    mechanism: 'Omeprazole inhibits CYP2C19, preventing the metabolic conversion of clopidogrel prodrug into its active antiplatelet metabolite.',
    mechanismAr: 'يثبط أوميبرازول إنزيم CYP2C19 الكبدي، مما يمنع تحول كلوبيدوجريل غير النشط إلى مركبه الفعال المضاد للصفائح.',
    clinicalEffect: 'Loss of antiplatelet efficacy, major adverse cardiovascular events (MACE), stent thrombosis.',
    clinicalEffectAr: 'فقدان الفاعلية المضادة للصفائح وارتفاع خطورة انسداد الدعامات القلبية والنوبات القلبية المتكررة.',
    management: 'Switch Omeprazole to Pantoprazole (minimal CYP2C19 inhibition) or Famotidine (H2 blocker) for gastroprotection.',
    managementAr: 'استبدال أوميبرازول بدواء بانتوبرازول (Pantoprazole) ذي التأثير الضئيل جداً على CYP2C19 أو فاموتيدين لحماية المعدة.',
    evidenceLevel: 'Established'
  },
  {
    id: 'warfarin-nsaids',
    drug1Id: 'warfarin',
    drug1Name: 'Warfarin (Coumadin)',
    drug2Id: 'apixaban',
    drug2Name: 'NSAIDs & Other Anticoagulants (Ibuprofen / Apixaban)',
    severity: 'critical',
    title: 'Dangerous Synergistic Gastrointestinal & Intracranial Bleeding',
    titleAr: 'تآزر خطير يؤدي لنزيف هضمي أو دماغي مهدد للحياة',
    mechanism: 'Combination of vitamin K clotting factor inhibition with platelet impairment and mucosal ulceration.',
    mechanismAr: 'تثبيط عوامل التخثر بالتزامن مع تثبيط الصفائح وتقرح الغشاء المخاطي للمعدة.',
    clinicalEffect: 'Life-threatening major hemorrhage, gastrointestinal bleeding, rapid INR spikes.',
    clinicalEffectAr: 'نزيف حاد، قرح نازفة، ارتفاع حاد في الـ INR.',
    management: 'Avoid concurrent NSAIDs; use Paracetamol (Acetaminophen) for pain relief and monitor INR closely.',
    managementAr: 'تجنب الجمع بينهما، واستخدام الباراسيتامول كمسكن آمن مع مراقبة مؤشر INR.',
    evidenceLevel: 'Established'
  },
  {
    id: 'metformin-contrast',
    drug1Id: 'metformin',
    drug1Name: 'Metformin (Glucophage)',
    drug2Id: 'contrast_media',
    drug2Name: 'Iodinated Radiocontrast Media (CT Contrast)',
    severity: 'major',
    title: 'Contrast-Induced Nephropathy with Severe Metformin-Associated Lactic Acidosis (MALA)',
    titleAr: 'اعتلال كلوي بالصبغة يؤدي لتراكم الميتفورمين وحدوث الحماض اللبني القاتل',
    mechanism: 'Iodinated contrast can induce acute renal failure, causing severe accumulation of metformin which inhibits mitochondrial respiration.',
    mechanismAr: 'تسبب الصبغة قصوراً كلوياً حاداً مفاجئاً مما يؤدي لتراكم الميتفورمين وتثبيط تنفس الميتوكوندريا وتراكم حمض اللاكتيك.',
    clinicalEffect: 'Severe lactic acidosis, hemodynamic collapse, multiorgan failure.',
    clinicalEffectAr: 'حماض لبني شديد، هبوط الدورة الدموية، وفشل متعدد الأعضاء.',
    management: 'Discontinue metformin prior to or at time of iodinated contrast in eGFR 30-60; withhold for 48 hours post-procedure until renal stability confirmed.',
    managementAr: 'إيقاف الميتفورمين قبل إجراء الصبغة لمرضى eGFR بين 30 و 60 وعدم استئنافه إلا بعد 48 ساعة والتأكد من سلامة وظائف الكلى.',
    evidenceLevel: 'Established'
  },
  {
    id: 'meropenem-valproate',
    drug1Id: 'meropenem',
    drug1Name: 'Meropenem (Meronem)',
    drug2Id: 'simvastatin_atorvastatin',
    drug2Name: 'Simvastatin / Atorvastatin (Statins)',
    severity: 'critical',
    title: 'Severe CYP3A4 Inhibition leading to Rhabdomyolysis',
    titleAr: 'تثبيط كبدي شديد لـ CYP3A4 يؤدي لانحلال العضلات المخططة الحاد والفشل الكلوي',
    mechanism: 'Ritonavir is a potent CYP3A4 inhibitor, causing dramatic spikes (up to 400-800%) in serum levels of CYP3A4-metabolized statins.',
    mechanismAr: 'ريتونافير مثبط فائق القوة لإنزيم CYP3A4، مما يرفع تركيز الستاتين في الدم بنسبة هائلة تتجاوز 400% إلى 800%.',
    clinicalEffect: 'Severe myopathy, muscle breakdown (Rhabdomyolysis), acute renal failure, and marked transaminitis.',
    clinicalEffectAr: 'اعتلال عضلي شديد، انحلال العضلات المخططة الحاد، وفشل كلوي حاد.',
    management: 'Simvastatin/Lovastatin are strictly contraindicated. Atorvastatin/Rosuvastatin must be temporarily withheld during the 5-day course and for 3-5 days after completion.',
    managementAr: 'سيمفاستاتين مضاد استطباب قطعي. أتورفاستاتين أو روزوفاستاتين يجب إيقافهما تماماً خلال فترة العلاج بباكسلوفيد (5 أيام) ولمدة 3-5 أيام بعدها ثم استئنافهما بأمان.',
    evidenceLevel: 'Established'
  },
  {
    id: 'meropenem-valproate',
    drug1Id: 'meropenem',
    drug1Name: 'Meropenem (Meronem)',
    drug2Id: 'valproic_acid',
    drug2Name: 'Valproic Acid / Sodium Valproate (Depakine)',
    severity: 'critical',
    title: 'Precipitous Drop in Valproate Levels with Breakthrough Seizures',
    titleAr: 'هبوط مفاجئ وكارثي في مستوى حمض الفالبرويك (ديباكين) وحدوث نوبات صرع مستمرة',
    mechanism: 'Carbapenems inhibit valproate glucuronide hydrolysis and enhance its clearance, dropping blood levels by 80-90% within 24 hours.',
    mechanismAr: 'تثبط الكاربابينيمات إعادة تدوير الفالبروات وتسرع تصفيتها الكبدية، مما يخفض تركيز الديباكين في الدم بنسبة 80% إلى 90% في غضون 24 ساعة.',
    clinicalEffect: 'Loss of seizure control, status epilepticus, and potential fatal neurological outcomes.',
    clinicalEffectAr: 'فقدان تام للسيطرة على التشنجات، دخول المريض في حالة صرعية مستمرة (Status Epilepticus).',
    management: 'Combination is strictly contraindicated. Switch antibiotic (e.g. Piperacillin/Tazobactam or Cefepime) or switch anticonvulsant (e.g. Levetiracetam). Increasing valproate dose does not overcome this interaction.',
    managementAr: 'الجمع بينهما مضاد استطباب قطعي. يجب استبدال المضاد الحيوي أو استبدال مضاد الصرع (مثل كيبرا / ليفيتيراسيتام). زيادة جرعة الديباكين لا تجدي نفعاً.',
    evidenceLevel: 'Established'
  },
  {
    id: 'entresto-acei',
    drug1Id: 'sacubitril_valsartan',
    drug1Name: 'Entresto (Sacubitril / Valsartan)',
    drug2Id: 'ramipril_enalapril',
    drug2Name: 'ACE Inhibitors (Ramipril, Enalapril, Lisinopril)',
    severity: 'critical',
    title: 'Severe Potentiation of Angioedema Risk',
    titleAr: 'تضاعف خطر حدوث الوذمة الوعائية الحادة المهددة للحياة (Angioedema)',
    mechanism: 'Dual neprilysin and ACE inhibition synergistically elevates bradykinin levels to dangerous thresholds.',
    mechanismAr: 'التثبيط المزدوج لكل من النبريلايسين وإنزيم تحويل الأنجيوتنسين يؤدي لارتفاع تراكمي هائل في مستويات البراديكينين المسبب للوذمة.',
    clinicalEffect: 'Life-threatening laryngeal and facial angioedema with acute airway obstruction.',
    clinicalEffectAr: 'وذمة وعائية شديدة في الوجه والحنجرة وانسداد حاد في مجرى التنفس.',
    management: 'Strict 36-hour washout period mandatory when switching from ACEi to Entresto or vice versa.',
    managementAr: 'فترة غسيل إجبارية (Washout period) مدتها 36 ساعة كاملة قبل بدء إنترستو بعد آخر جرعة من أي ACE inhibitor.',
    evidenceLevel: 'Established'
  },
  {
    id: 'apixaban-nsaids',
    drug1Id: 'apixaban',
    drug1Name: 'Apixaban (Eliquis)',
    drug2Id: 'ibuprofen_ketorolac',
    drug2Name: 'NSAIDs (Ibuprofen, Ketorolac, Naproxen)',
    severity: 'major',
    title: 'Compounded Gastrointestinal Bleeding Risk',
    titleAr: 'تضاعف خطورة النزيف الهضمي الحاد والتقرحات المعدية',
    mechanism: 'NSAIDs cause platelet inhibition and gastric mucosal injury while Apixaban inhibits systemic coagulation.',
    mechanismAr: 'تثبط مضادات الالتهاب غير الستيرويدية الصفائح وتؤذي الغشاء المخاطي للمعدة، بالتزامن مع التثبيط الجهازي للتخثر عبر أبيكسابان.',
    clinicalEffect: 'Substantial increase in upper GI bleeding, mucosal ulceration, and hematuria.',
    clinicalEffectAr: 'ارتفاع كبير في نزيف الجهاز الهضمي العلوي وتقرح المعدة وبيلة دموية.',
    management: 'Avoid concurrent use if possible. If analgesia needed, prefer Paracetamol (Acetaminophen) or topical therapies. If NSAID unavoidable, add PPI gastroprotection.',
    managementAr: 'تجنب الاستخدام المشترك؛ استخدم الباراسيتامول كمسكن آمن. إذا كان المسكن الستيرويدي ضرورياً للغاية، يجب إضافة مثبط مضخة البروتون (PPI) لحماية المعدة.',
    evidenceLevel: 'Established'
  },
  {
    id: 'semaglutide-insulin',
    drug1Id: 'semaglutide',
    drug1Name: 'Semaglutide (Ozempic)',
    drug2Id: 'insulin_glargine',
    drug2Name: 'Insulin (Glargine, Aspart) & Sulfonylureas',
    severity: 'moderate',
    title: 'Increased Risk of Hypoglycemia',
    titleAr: 'زيادة احتمالية هبوط سكر الدم الحاد (Hypoglycemia)',
    mechanism: 'Additive glycemic lowering effects.',
    mechanismAr: 'تأثير تراكمي خافض لسكر الدم عند الجمع مع محفزات إفراز الإنسولين أو الإنسولين الخارجي.',
    clinicalEffect: 'Symptomatic hypoglycemia, diaphoresis, dizziness, neuroglycopenia.',
    clinicalEffectAr: 'تعرق، دوخة، ارتعاش، هبوط سكر الدم لأقل من 70 مجم/ديسيلتر.',
    management: 'Consider reducing baseline insulin dose by 20% or sulfonylurea dose by 50% when initiating Semaglutide, and intensify blood glucose monitoring.',
    managementAr: 'يوصى بخفض جرعة الإنسولين الأساسية بنسبة 20% أو خفض جرعة السلفونيل يوريا بالنصف عند بدء السيماجلوتايد وتكثيف فحص السكر.',
    evidenceLevel: 'Established'
  },
  {
    id: 'empagliflozin-diuretics',
    drug1Id: 'empagliflozin',
    drug1Name: 'Empagliflozin (Jardiance)',
    drug2Id: 'furosemide',
    drug2Name: 'Loop Diuretics (Furosemide / Lasix)',
    severity: 'moderate',
    title: 'Additive Volume Depletion & Orthostatic Hypotension',
    titleAr: 'تراكم إدرار البول وخطر انخفاض الضغط الانتصابي والجفاف',
    mechanism: 'Dual osmotic and loop diuresis accelerates urinary sodium and water loss.',
    mechanismAr: 'إدرار البول الأسموزي المصاحب لإمباجليفلوزين يتضاعف مع مدرات العروة مما يسرع فقدان السوائل.',
    clinicalEffect: 'Postural dizziness, dehydration, transient elevation in serum creatinine.',
    clinicalEffectAr: 'دوخة عند الوقوف، جفاف، ارتفاع عابر في كرياتينين الدم.',
    management: 'Monitor hydration status and blood pressure. Dose reduction of furosemide may be prudent in elderly or frail patients.',
    managementAr: 'مراقبة ترطيب المريض وضغط الدم. قد يلزم تخفيض جرعة اللازكس لدى كبار السن أو المعرضين للجفاف.',
    evidenceLevel: 'Established'
  }
];
