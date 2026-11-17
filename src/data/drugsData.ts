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
  },
  {
    id: 'diltiazem',
    genericName: 'Diltiazem',
    genericNameAr: 'ديلتيازيم',
    brandNames: ['Cardizem', 'كارديزيم'],
    drugClass: 'Non-Dihydropyridine Calcium Channel Blocker',
    drugClassAr: 'حاصر قنوات الكالسيوم غير ديهيدروبيريديني',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'icu_emergency', 'pharmacy'],
    keyHighlights: [
      'يُمنع تماماً مع حاصرات بيتا الوريدية - خطر حصار قلبي شديد وتوقف جيبي',
      'العلاج الوريدي الأول شائعاً للتحكم السريع في معدل الرجفان الأذيني الحاد',
      'يُمنع في فشل القلب مع انخفاض الكسر القذفي بسبب تأثيره السلبي على الانقباضية'
    ],
    indications: [
      {
        indication: 'Atrial fibrillation/flutter rate control / Hypertension / Angina',
        indicationAr: 'التحكم في معدل الرجفان/الرفرفة الأذينية / ارتفاع ضغط الدم / الذبحة الصدرية',
        adultDose: 'IV: 0.25 mg/kg bolus over 2 min, may repeat 0.35 mg/kg, then infusion 5-15 mg/hour; Oral ER: 120-360 mg once daily',
        adultDoseAr: 'وريدي: 0.25 مج/كجم جرعة بلعية خلال دقيقتين، يمكن تكرار 0.35 مج/كجم، ثم تسريب 5-15 مج/ساعة؛ فموي ممتد المفعول: 120-360 مج مرة يومياً',
        maxDose: 'Infusion max 15 mg/hour',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; use with caution',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose in significant hepatic impairment; monitor closely due to prolonged half-life',
    contraindications: [
      'متلازمة العقدة الجيبية المريضة أو الحصار الأذيني البطيني من الدرجة الثانية أو الثالثة بدون جهاز تنظيم',
      'انخفاض الضغط الشديد (أقل من 90 ملم زئبق انقباضي)',
      'فشل القلب الحاد مع انخفاض الكسر القذفي',
      'الاستخدام المتزامن مع حاصرات بيتا الوريدية',
      'متلازمة وولف باركنسون وايت مع الرجفان الأذيني'
    ],
    mechanismOfAction: 'Blocks L-type calcium channels in cardiac and vascular smooth muscle, slowing AV nodal conduction and causing vasodilation',
    mechanismOfActionAr: 'يحجب قنوات الكالسيوم من نوع L في عضلة القلب والعضلات الملساء الوعائية، فيبطئ التوصيل في العقدة الأذينية البطينية ويسبب توسعاً وعائياً',
    halfLife: '3.5-9 hours',
    monitoringParameters: [
      'ضغط الدم ومعدل ضربات القلب',
      'تخطيط القلب لمراقبة فاصل PR',
      'علامات فشل القلب',
      'وظائف الكبد عند الاستخدام المطول'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'عصير الجريب فروت قد يرفع مستواه الدموي عبر تثبيط CYP3A4 - يُفضل تجنبه بكميات كبيرة'
    ],
    pearls: [
      'الخيار الوريدي الأكثر استخداماً للتحكم السريع بمعدل الرجفان الأذيني في حالات الطوارئ عند عدم وجود فشل قلب',
      'الدمج مع حاصرات بيتا الوريدية خطير جداً - قد يسبب حصاراً قلبياً كاملاً أو توقف قلب جيبي',
      'له تأثير سلبي على الانقباضية أقل من الفيراباميل لكن أكثر من الديهيدروبيريدينات'
    ]
  },
  {
    id: 'verapamil',
    genericName: 'Verapamil',
    genericNameAr: 'فيراباميل',
    brandNames: ['Calan', 'Isoptin', 'إيزوبتين'],
    drugClass: 'Non-Dihydropyridine Calcium Channel Blocker',
    drugClassAr: 'حاصر قنوات الكالسيوم غير ديهيدروبيريديني',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'icu_emergency', 'pharmacy'],
    keyHighlights: [
      'أقوى تأثير سلبي على الانقباضية بين حاصرات قنوات الكالسيوم - يُمنع في فشل القلب الانقباضي',
      'العلاج الوريدي الفعال لتسرع القلب فوق البطيني الانتيابي (PSVT) بعد فشل الأدينوزين',
      'يرفع مستوى الديجوكسين بشكل كبير عبر تثبيط P-gp - يحتاج تقليل جرعة الديجوكسين عند الدمج'
    ],
    indications: [
      {
        indication: 'Paroxysmal supraventricular tachycardia / Atrial fibrillation rate control / Hypertension / Angina',
        indicationAr: 'تسرع القلب فوق البطيني الانتيابي / التحكم في معدل الرجفان الأذيني / ارتفاع ضغط الدم / الذبحة الصدرية',
        adultDose: 'IV: 5-10 mg over 2-3 min, may repeat 10 mg after 15-30 min; Oral: 80-120 mg three times daily or 180-480 mg ER once daily',
        adultDoseAr: 'وريدي: 5-10 مج خلال 2-3 دقائق، يمكن تكرار 10 مج بعد 15-30 دقيقة؛ فموي: 80-120 مج ثلاث مرات يومياً أو 180-480 مج ممتد المفعول مرة يومياً',
        pediatricDose: 'PSVT (ages 1-15): 0.1-0.3 mg/kg IV (max 5 mg) - use with extreme caution, avoid in infants under 1 year',
        pediatricDoseAr: 'تسرع فوق البطيني (1-15 سنة): 0.1-0.3 مج/كجم وريدياً (حد أقصى 5 مج) - بحذر بالغ، يُتجنب في الرضع دون سنة',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'Reduce dose by 50%; use with caution',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose by 50-75% in significant hepatic impairment due to markedly prolonged half-life',
    contraindications: [
      'فشل القلب الانقباضي الشديد (EF منخفض)',
      'انخفاض الضغط الشديد أو الصدمة القلبية',
      'متلازمة العقدة الجيبية المريضة أو الحصار الأذيني البطيني من الدرجة الثانية أو الثالثة',
      'متلازمة وولف باركنسون وايت مع الرجفان الأذيني',
      'الرضع دون عمر سنة (خطر توقف قلب وعائي)'
    ],
    mechanismOfAction: 'Blocks L-type calcium channels, producing significant negative inotropic, chronotropic, and dromotropic effects with potent AV nodal blockade',
    mechanismOfActionAr: 'يحجب قنوات الكالسيوم من نوع L، منتجاً تأثيرات سلبية ملحوظة على الانقباضية ومعدل القلب والتوصيل مع حصار قوي للعقدة الأذينية البطينية',
    halfLife: '3-7 hours (up to 12 hours with chronic dosing)',
    monitoringParameters: [
      'ضغط الدم ومعدل ضربات القلب',
      'تخطيط القلب (فاصل PR)',
      'علامات فشل القلب',
      'مستوى الديجوكسين إذا كان المريض يتناوله',
      'وظائف الكبد'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'عصير الجريب فروت يرفع مستواه الدموي بشكل ملحوظ عبر تثبيط CYP3A4 - يُتجنب'
    ],
    pearls: [
      'يُمنع منعاً باتاً في الرضع دون عمر سنة بسبب خطر توقف قلب وعائي موثق',
      'التأثير السلبي الأقوى على الانقباضية بين حاصرات الكالسيوم يجعله غير مناسب في فشل القلب الانقباضي خلافاً للديلتيازيم والديهيدروبيريدينات',
      'يتفاعل بشكل كبير مع الديجوكسين (يرفع مستواه) والستاتينات المستقلبة بـ CYP3A4 (يرفع خطر اعتلال العضلات)'
    ]
  },
  {
    id: 'pantoprazole',
    genericName: 'Pantoprazole',
    genericNameAr: 'بانتوبرازول',
    brandNames: ['Protonix', 'بروتونيكس'],
    drugClass: 'Proton Pump Inhibitor (PPI)',
    drugClassAr: 'مثبط مضخة البروتون',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'الشكل الوريدي أساسي في بروتوكولات النزيف الهضمي العلوي الحاد (تسريب عالي الجرعة بعد التنظير)',
      'أقل تفاعلاً دوائياً عبر CYP2C19 من الأوميبرازول - أفضل مع الكلوبيدوجريل',
      'الاستخدام المطول (أكثر من سنة) مرتبط بزيادة خطر كسور العظام ونقص المغنيسيوم وفيتامين B12'
    ],
    indications: [
      {
        indication: 'GERD / Peptic ulcer disease / Acute upper GI bleeding (high-dose IV) / Zollinger-Ellison syndrome',
        indicationAr: 'ارتجاع المريء / القرحة الهضمية / النزيف الهضمي العلوي الحاد (وريدي بجرعة عالية) / متلازمة زولينجر إليسون',
        adultDose: 'Oral: 40 mg once daily; GI bleeding: 80 mg IV bolus then 8 mg/hour infusion for 72 hours',
        adultDoseAr: 'فموي: 40 مج مرة يومياً؛ النزيف الهضمي: 80 مج جرعة بلعية وريدية ثم تسريب 8 مج/ساعة لمدة 72 ساعة',
        pediatricDose: '20-40 mg PO once daily depending on weight (ages 5+) for GERD',
        pediatricDoseAr: '20-40 مج فموياً مرة يومياً حسب الوزن (من عمر 5 سنوات) لارتجاع المريء',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Maximum 20 mg/day in severe hepatic impairment (Child-Pugh C)',
    contraindications: [
      'فرط الحساسية للبانتوبرازول أو مثبطات مضخة البروتون الأخرى',
      'الاستخدام المتزامن مع ريلبيفيرين (مضاد فيروسات قهقري)'
    ],
    mechanismOfAction: 'Irreversibly inhibits the H+/K+-ATPase proton pump in gastric parietal cells, suppressing gastric acid secretion',
    mechanismOfActionAr: 'يثبط بشكل لا رجعي مضخة البروتون H+/K+-ATPase في الخلايا الجدارية المعدية، فيثبط إفراز حمض المعدة',
    halfLife: '1 hour',
    monitoringParameters: [
      'المغنيسيوم في الدم عند الاستخدام المطول (أكثر من سنة)',
      'علامات النزيف الهضمي والاستقرار الدموي',
      'فيتامين B12 عند الاستخدام طويل المدى',
      'كثافة العظام في المرضى عاليي الخطورة مع الاستخدام المزمن'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُفضل تناوله قبل الوجبة بـ 30-60 دقيقة لتحقيق أقصى فعالية'
    ],
    pearls: [
      'أقل مثبطات مضخة البروتون تفاعلاً مع الكلوبيدوجريل مقارنة بالأوميبرازول بسبب تأثيره الأضعف على CYP2C19',
      'التسريب الوريدي عالي الجرعة بعد التنظير في النزيف الهضمي العلوي يقلل خطر إعادة النزيف بشكل كبير',
      'الاستخدام طويل المدى يستدعي إعادة تقييم دورية للحاجة المستمرة للعلاج بسبب المخاطر طويلة الأمد'
    ]
  },
  {
    id: 'famotidine',
    genericName: 'Famotidine',
    genericNameAr: 'فاموتيدين',
    brandNames: ['Pepcid', 'بيبسيد'],
    drugClass: 'Histamine H2-Receptor Antagonist',
    drugClassAr: 'مضاد مستقبلات الهيستامين H2',
    category: 'OTC',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'أقل تفاعلاً دوائياً عبر الكبد من السيميتيدين - لا يثبط CYP450 بشكل ملحوظ',
      'يُستخدم كبديل أرخص وأسرع تأثيراً لمثبطات مضخة البروتون في الحالات الخفيفة',
      'يحتاج تقليل جرعة كبير في القصور الكلوي لتراكمه - خطر تخليط ذهني في المسنين عند عدم التعديل'
    ],
    indications: [
      {
        indication: 'GERD / Peptic ulcer disease / Stress ulcer prophylaxis / Heartburn (OTC)',
        indicationAr: 'ارتجاع المريء / القرحة الهضمية / الوقاية من قرحة الإجهاد / حرقة المعدة (بدون وصفة)',
        adultDose: '20-40 mg PO/IV once or twice daily',
        adultDoseAr: '20-40 مج فموياً/وريدياً مرة أو مرتين يومياً',
        pediatricDose: '0.5 mg/kg PO/IV twice daily (max 40 mg/day)',
        pediatricDoseAr: '0.5 مج/كجم فموياً/وريدياً مرتين يومياً (حد أقصى 40 مج/يوم)',
        maxDose: '40 mg twice daily (higher doses for hypersecretory conditions)',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce dose by 50% or extend interval to every 24-36 hours',
      crclBelow10: 'Reduce dose by 50% and extend interval to every 36-48 hours',
      hemodialysis: 'Administer dose after dialysis session; dose per renal impairment guidelines'
    },
    hepaticAdjustment: 'No specific adjustment needed; primarily renally eliminated',
    contraindications: [
      'فرط الحساسية للفاموتيدين أو مضادات H2 الأخرى'
    ],
    mechanismOfAction: 'Competitively blocks histamine H2 receptors on gastric parietal cells, reducing basal and stimulated gastric acid secretion',
    mechanismOfActionAr: 'يحجب تنافسياً مستقبلات الهيستامين H2 على الخلايا الجدارية المعدية فيقلل إفراز الحمض المعدي الأساسي والمحفز',
    halfLife: '2.5-3.5 hours (prolonged in renal impairment)',
    monitoringParameters: [
      'وظائف الكلى لتعديل الجرعة',
      'الحالة الذهنية خاصة في المسنين (خطر تخليط ذهني مع الجرعة الزائدة أو القصور الكلوي)',
      'الأعراض الهضمية والاستجابة للعلاج'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية كبيرة'
    ],
    pearls: [
      'خلافاً للسيميتيدين، لا يثبط إنزيمات الكبد CYP450 بشكل ملحوظ مما يقلل التفاعلات الدوائية',
      'بداية تأثيره أسرع من مثبطات مضخة البروتون لكن فعاليته في قمع الحمض أقل على المدى الطويل',
      'يحتاج تعديل جرعة حذر في المسنين وذوي القصور الكلوي لتجنب التخليط الذهني الناتج عن التراكم'
    ]
  },
  {
    id: 'metoclopramide',
    genericName: 'Metoclopramide',
    genericNameAr: 'ميتوكلوبراميد',
    brandNames: ['Reglan', 'ريجلان'],
    drugClass: 'Dopamine Antagonist (Prokinetic/Antiemetic)',
    drugClassAr: 'مضاد دوبامين (محفز للحركة ومضاد للقيء)',
    category: 'Rx',
    route: ['PO', 'IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'icu_emergency', 'pharmacy'],
    keyHighlights: [
      'تحذير صندوق أسود لخطر عسر الحركة المتأخر (tardive dyskinesia) غير القابل للعكس مع الاستخدام المطول - يُحدد العلاج بـ 12 أسبوعاً',
      'يُستخدم كمحفز حركي معوي فريد (ليس مجرد مضاد قيء) في شلل المعدة السكري',
      'خطر الأعراض خارج الهرمية الحادة خاصة في الشباب والنساء - يُعالج بالديفينهيدرامين أو بنزتروبين'
    ],
    indications: [
      {
        indication: 'Diabetic gastroparesis / GERD (short-term) / Nausea and vomiting (chemotherapy, postoperative) / Facilitation of small bowel intubation',
        indicationAr: 'شلل المعدة السكري / ارتجاع المريء (قصير المدى) / الغثيان والتقيؤ (العلاج الكيماوي، ما بعد الجراحة) / تسهيل إدخال أنبوب الأمعاء الدقيقة',
        adultDose: '10 mg PO/IV/IM up to four times daily, 30 minutes before meals and at bedtime',
        adultDoseAr: '10 مج فموياً/وريدياً/عضلياً حتى أربع مرات يومياً، قبل الوجبات بـ 30 دقيقة وعند النوم',
        pediatricDose: '0.1-0.15 mg/kg/dose IV/PO (max 10 mg) for antiemetic use',
        pediatricDoseAr: '0.1-0.15 مج/كجم/جرعة وريدياً/فموياً (حد أقصى 10 مج) كمضاد للقيء',
        duration: 'Limit treatment to 12 weeks or less due to tardive dyskinesia risk',
        route: 'PO/IV/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce dose by 50%',
      crclBelow10: 'Reduce dose by 75%',
      hemodialysis: 'Dialyzable; administer supplemental dose after dialysis session'
    },
    hepaticAdjustment: 'Use with caution in hepatic cirrhosis; consider dose reduction',
    contraindications: [
      'انسداد معوي ميكانيكي أو ثقب معوي',
      'نزيف أو انثقاب الجهاز الهضمي',
      'الصرع (قد يزيد تكرار وشدة النوبات)',
      'ورم القواتم',
      'تاريخ عسر الحركة المتأخر أو الأعراض خارج الهرمية مع ميتوكلوبراميد'
    ],
    blackBoxWarning: 'Chronic treatment can cause tardive dyskinesia, which may be irreversible; treatment duration should not exceed 12 weeks except in rare cases',
    blackBoxWarningAr: 'العلاج المزمن قد يسبب عسر الحركة المتأخر الذي قد يكون غير قابل للعكس؛ يجب ألا تتجاوز مدة العلاج 12 أسبوعاً إلا في حالات نادرة',
    mechanismOfAction: 'Antagonizes dopamine D2 receptors in the chemoreceptor trigger zone and enhances acetylcholine release, increasing gastric motility and lower esophageal sphincter tone',
    mechanismOfActionAr: 'يضاد مستقبلات الدوبامين D2 في منطقة المستقبلات الكيميائية المحفزة ويعزز إفراز الأسيتيل كولين، فيزيد حركية المعدة وتوتر العضلة العاصرة السفلى للمريء',
    halfLife: '5-6 hours',
    monitoringParameters: [
      'علامات الأعراض خارج الهرمية والحركات اللاإرادية',
      'مدة العلاج الكلية (يجب ألا تتجاوز 12 أسبوعاً)',
      'الاستجابة السريرية للغثيان أو شلل المعدة',
      'ضغط الدم (نادراً قد يسبب أزمة ارتفاع ضغط في ورم القواتم)'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُعطى قبل الوجبات بـ 30 دقيقة لتعزيز تأثيره المحفز للحركة المعدية',
      'يُتجنب الكحول لزيادة التأثير المركزي المهدئ'
    ],
    pearls: [
      'من الأدوية القليلة التي تعالج شلل المعدة السكري عبر آلية تحفيز حركي حقيقي وليس فقط تثبيط الغثيان',
      'خطر عسر الحركة المتأخر يزداد مع الجرعة التراكمية ومدة العلاج - يجب تقييم الحاجة المستمرة بانتظام',
      'الأعراض خارج الهرمية الحادة أكثر شيوعاً في الشباب والنساء وتظهر عادة خلال الأيام الأولى من العلاج'
    ]
  },
  {
    id: 'diphenhydramine',
    genericName: 'Diphenhydramine',
    genericNameAr: 'ديفينهيدرامين',
    brandNames: ['Benadryl', 'بينادريل'],
    drugClass: 'First-Generation Antihistamine (H1 Antagonist)',
    drugClassAr: 'مضاد هيستامين من الجيل الأول (مضاد H1)',
    category: 'OTC',
    route: ['PO', 'IV', 'IM', 'Topical'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'pharmacy', 'pediatrics'],
    keyHighlights: [
      'جزء أساسي من علاج التأق الحاد (بعد الإبينفرين) والتفاعلات التحسسية والأعراض خارج الهرمية الحادة',
      'تأثير مضاد كوليني قوي - حذر شديد في المسنين (قائمة Beers) لخطر التخليط الذهني والسقوط',
      'يُستخدم على نطاق واسع كمساعد منوم بدون وصفة طبية رغم عدم الموافقة الرسمية لهذا الغرض طويل المدى'
    ],
    indications: [
      {
        indication: 'Allergic reactions / Anaphylaxis (adjunct) / Acute dystonic reactions / Insomnia (short-term, OTC)',
        indicationAr: 'التفاعلات التحسسية / التأق (مساعد) / ردود الفعل التوترية الحادة / الأرق (قصير المدى، بدون وصفة)',
        adultDose: '25-50 mg PO/IV/IM every 4-6 hours as needed',
        adultDoseAr: '25-50 مج فموياً/وريدياً/عضلياً كل 4-6 ساعات عند الحاجة',
        pediatricDose: '1-1.25 mg/kg PO/IV/IM every 6 hours (max 50 mg/dose)',
        pediatricDoseAr: '1-1.25 مج/كجم فموياً/وريدياً/عضلياً كل 6 ساعات (حد أقصى 50 مج/جرعة)',
        maxDose: '300-400 mg/day',
        route: 'PO/IV/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed; use with caution',
      crclBelow10: 'Use with caution; consider dose reduction',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution in hepatic impairment; may have prolonged sedative effect',
    contraindications: [
      'نوبة الربو الحادة',
      'الزرق الحاد مغلق الزاوية',
      'احتباس البول أو تضخم البروستاتا الشديد',
      'حديثو الولادة والخدج',
      'فرط الحساسية للديفينهيدرامين'
    ],
    mechanismOfAction: 'Competitively antagonizes histamine H1 receptors; also has significant anticholinergic and sedative CNS effects',
    mechanismOfActionAr: 'يضاد تنافسياً مستقبلات الهيستامين H1؛ كما له تأثيرات مضادة للكولين ومهدئة مركزية ملحوظة',
    halfLife: '2.4-9.3 hours (longer in elderly)',
    monitoringParameters: [
      'مستوى الوعي والتخليط الذهني خاصة في المسنين',
      'علامات التفاعل التحسسي (مستمرة أم تتحسن)',
      'احتباس البول',
      'جفاف الفم والإمساك'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُمنع الكحول لزيادة التأثير المهدئ بشكل خطير'
    ],
    pearls: [
      'يُدرج في قائمة Beers كدواء يُتجنب في المسنين بسبب التأثيرات المضادة للكولين وخطر السقوط والتخليط الذهني',
      'يُستخدم بشكل شائع لعلاج الأعراض خارج الهرمية الحادة الناتجة عن مضادات الذهان (مثل الميتوكلوبراميد أو الهالوبيريدول)',
      'التحمل للتأثير المنوم يتطور خلال أيام قليلة من الاستخدام المتكرر مما يحد من فائدته كمنوم طويل المدى'
    ]
  },
  {
    id: 'glipizide',
    genericName: 'Glipizide',
    genericNameAr: 'جليبيزايد',
    brandNames: ['Glucotrol', 'جلوكوترول'],
    drugClass: 'Sulfonylurea',
    drugClassAr: 'سلفونيل يوريا',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy'],
    keyHighlights: [
      'يُفضل عن الجليبنكلاميد في المسنين والقصور الكلوي الخفيف لقصر نصف عمره وعدم وجود مستقلبات نشطة',
      'خطر نقص سكر الدم شديد خاصة مع تخطي الوجبات أو الصيام أو مع الكحول',
      'يُؤخذ قبل الإفطار بـ 30 دقيقة لتحقيق أفضل تزامن مع ارتفاع سكر ما بعد الوجبة'
    ],
    indications: [
      {
        indication: 'Type 2 diabetes mellitus',
        indicationAr: 'السكري من النوع الثاني',
        adultDose: 'Start 5 mg PO once daily before breakfast, titrate to 10-20 mg/day divided (immediate-release) or once daily (extended-release)',
        adultDoseAr: 'البدء بـ 5 مج فموياً مرة يومياً قبل الإفطار، يُعدل إلى 10-20 مج/يوم مقسمة (سريع الإطلاق) أو مرة يومياً (ممتد الإطلاق)',
        maxDose: '40 mg/day (immediate-release); 20 mg/day (extended-release)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Use with caution; start with lower dose (2.5 mg)',
      crclBelow10: 'Avoid use if possible due to hypoglycemia risk; use with extreme caution',
      hemodialysis: 'Not significantly dialyzed; avoid use if possible'
    },
    hepaticAdjustment: 'Start with lower dose (2.5 mg) and titrate slowly in hepatic impairment due to increased hypoglycemia risk',
    contraindications: [
      'السكري من النوع الأول',
      'الحماض الكيتوني السكري',
      'فرط الحساسية للسلفونيل يوريا أو السلفوناميدات',
      'القصور الكلوي أو الكبدي الشديد (حذر بالغ)'
    ],
    mechanismOfAction: 'Stimulates insulin release from pancreatic beta cells by blocking ATP-sensitive potassium channels',
    mechanismOfActionAr: 'ينبه إفراز الإنسولين من خلايا بيتا البنكرياسية عبر حجب قنوات البوتاسيوم الحساسة للـ ATP',
    halfLife: '2-4 hours',
    monitoringParameters: [
      'سكر الدم الصائم وHbA1c',
      'علامات نقص سكر الدم',
      'وظائف الكلى والكبد',
      'الوزن (قد يسبب زيادة وزن)'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُؤخذ قبل الوجبة بـ 30 دقيقة',
      'الكحول يزيد خطر نقص سكر الدم وتفاعل شبيه بالديسلفيرام'
    ],
    pearls: [
      'يُفضل بوضوح على الجليبنكلاميد (glyburide) في المسنين لأن الأخير له مستقلبات نشطة تتراكم وتزيد خطر نقص سكر دم مطول وخطير',
      'نقص السكر الناتج عن السلفونيل يوريا قد يكون مطولاً ويحتاج مراقبة لساعات بعد التصحيح الأولي',
      'يفقد فعاليته تدريجياً بمرور الوقت بسبب الإرهاق التدريجي لخلايا بيتا (فشل ثانوي للسلفونيل يوريا)'
    ]
  },
  {
    id: 'acyclovir',
    genericName: 'Acyclovir',
    genericNameAr: 'أسيكلوفير',
    brandNames: ['Zovirax', 'زوفيراكس'],
    drugClass: 'Antiviral (Nucleoside Analog)',
    drugClassAr: 'مضاد فيروسات (نظير نيوكليوسيدي)',
    category: 'Rx',
    route: ['PO', 'IV', 'Topical'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'icu_emergency'],
    keyHighlights: [
      'خطر الترسب الكلوي والإصابة الكلوية الحادة مع الحقن الوريدي السريع أو الجفاف - يحتاج إماهة كافية وتسريب بطيء',
      'العلاج الأول لالتهاب الدماغ الهربسي - يُبدأ تجريبياً فوراً عند الاشتباه دون انتظار التأكيد',
      'توافره الحيوي الفموي منخفض (15-30%) - فالانسيكلوفير أو فامسيكلوفير يُفضلان للعلاج الفموي عالي الجرعة'
    ],
    indications: [
      {
        indication: 'Herpes simplex infections / Varicella-zoster (chickenpox/shingles) / Herpes encephalitis',
        indicationAr: 'عدوى الهربس البسيط / جدري الماء/الحلأ النطاقي / التهاب الدماغ الهربسي',
        adultDose: 'Herpes encephalitis: 10 mg/kg IV every 8 hours for 14-21 days; Genital herpes (oral): 400 mg three times daily or 200 mg five times daily',
        adultDoseAr: 'التهاب الدماغ الهربسي: 10 مج/كجم وريدياً كل 8 ساعات لمدة 14-21 يوم؛ الهربس التناسلي (فموي): 400 مج ثلاث مرات يومياً أو 200 مج خمس مرات يومياً',
        pediatricDose: '10-20 mg/kg IV every 8 hours depending on indication and age',
        pediatricDoseAr: '10-20 مج/كجم وريدياً كل 8 ساعات حسب الحالة والعمر',
        route: 'PO/IV/Topical'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Extend dosing interval to every 12-24 hours depending on exact CrCl',
      crclBelow10: 'Reduce dose and extend interval to every 24 hours; reduce dose by 50%',
      hemodialysis: 'Administer dose after dialysis session; significantly dialyzed'
    },
    hepaticAdjustment: 'No specific adjustment needed; primarily renally eliminated',
    contraindications: [
      'فرط الحساسية للأسيكلوفير أو فالاسيكلوفير'
    ],
    mechanismOfAction: 'Converted to acyclovir triphosphate by viral thymidine kinase, which inhibits viral DNA polymerase and terminates DNA chain synthesis',
    mechanismOfActionAr: 'يُحول إلى أسيكلوفير ثلاثي الفوسفات بواسطة إنزيم الثيميدين كيناز الفيروسي، الذي يثبط بوليميريز الحمض النووي الفيروسي وينهي تخليق سلسلة DNA',
    halfLife: '2-3.5 hours (longer in renal impairment)',
    monitoringParameters: [
      'وظائف الكلى (خط الأساس وأثناء العلاج الوريدي)',
      'حالة الإماهة',
      'الأعراض العصبية (تخليط، نعاس) خاصة في القصور الكلوي',
      'موقع الحقن الوريدي (خطر تهيج موضعي)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية كبيرة'
    ],
    pearls: [
      'يجب إماهة المريض جيداً وتسريبه ببطء (على مدى ساعة على الأقل) لتجنب الترسب البلوري في الأنابيب الكلوية',
      'يُبدأ تجريبياً فوراً في أي اشتباه بالتهاب الدماغ الهربسي حتى قبل تأكيد التشخيص لأن التأخير يزيد الوفيات والعجز العصبي بشكل كبير',
      'فالاسيكلوفير (طليعة دوائية) له توافر حيوي فموي أعلى بكثير ويُفضل عند الحاجة لجرعات فموية عالية الفعالية'
    ]
  },
  {
    id: 'oseltamivir',
    genericName: 'Oseltamivir',
    genericNameAr: 'أوسيلتاميفير',
    brandNames: ['Tamiflu', 'تاميفلو'],
    drugClass: 'Neuraminidase Inhibitor (Antiviral)',
    drugClassAr: 'مثبط النيورامينيداز (مضاد فيروسات)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pediatrics', 'pharmacy'],
    keyHighlights: [
      'الفعالية القصوى تتحقق عند البدء خلال 48 ساعة من ظهور الأعراض - الفائدة تقل بشكل كبير بعد ذلك',
      'يُقصر مدة أعراض الإنفلونزا بحوالي يوم واحد فقط في معظم الدراسات - ليس علاجاً معجزاً',
      'يحتاج تعديل جرعة كبير في القصور الكلوي لأنه يُفرز كلياً بشكل أساسي'
    ],
    indications: [
      {
        indication: 'Influenza A and B treatment / Influenza post-exposure prophylaxis',
        indicationAr: 'علاج الإنفلونزا A وB / الوقاية بعد التعرض للإنفلونزا',
        adultDose: 'Treatment: 75 mg PO twice daily for 5 days; Prophylaxis: 75 mg PO once daily for 10 days',
        adultDoseAr: 'العلاج: 75 مج فموياً مرتين يومياً لمدة 5 أيام؛ الوقاية: 75 مج فموياً مرة يومياً لمدة 10 أيام',
        pediatricDose: 'Weight-based dosing (3-75 mg twice daily depending on weight) for ages 2 weeks and older',
        pediatricDoseAr: 'جرعة حسب الوزن (3-75 مج مرتين يومياً حسب الوزن) من عمر أسبوعين فأكبر',
        duration: '5 days treatment; 10 days prophylaxis',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce to 30 mg (or 30 mg suspension) twice daily for treatment',
      crclBelow10: 'Reduce to 30 mg once daily for treatment (non-dialysis); avoid prophylaxis dosing or extend interval',
      hemodialysis: 'Single 30 mg dose after each dialysis session for treatment'
    },
    hepaticAdjustment: 'No specific adjustment needed',
    contraindications: [
      'فرط الحساسية للأوسيلتاميفير'
    ],
    mechanismOfAction: 'Inhibits influenza virus neuraminidase, preventing release of new virions from infected host cells',
    mechanismOfActionAr: 'يثبط إنزيم النيورامينيداز الفيروسي للإنفلونزا، فيمنع إطلاق الفيروسات الجديدة من الخلايا المصابة',
    halfLife: '6-10 hours (active metabolite)',
    monitoringParameters: [
      'الاستجابة السريرية والأعراض التنفسية',
      'وظائف الكلى لتعديل الجرعة',
      'الأعراض النفسية العصبية النادرة خاصة في الأطفال (تخليط، سلوك غير طبيعي)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُفضل تناوله مع الطعام لتقليل الغثيان والتقيؤ'
    ],
    pearls: [
      'الفائدة السريرية الأكبر تكون عند البدء خلال 48 ساعة الأولى من الأعراض - يجب التوعية بأهمية البدء المبكر',
      'يُستخدم بشكل أساسي في المرضى عاليي الخطورة لمضاعفات الإنفلونزا (المسنون، الحوامل، أمراض مزمنة) وليس بالضرورة لكل حالات الإنفلونزا الموسمية الخفيفة',
      'أحداث نفسية عصبية نادرة (هذيان، سلوك غير طبيعي) تم الإبلاغ عنها خاصة في الأطفال اليابانيين - تستدعي المراقبة'
    ]
  },
  {
    id: 'isoniazid',
    genericName: 'Isoniazid (INH)',
    genericNameAr: 'إيزونيازيد',
    brandNames: ['Nydrazid', 'نيدرازيد'],
    drugClass: 'Antitubercular Agent',
    drugClassAr: 'مضاد لمرض السل',
    category: 'Rx',
    route: ['PO', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'تحذير صندوق أسود للسمية الكبدية الشديدة وأحياناً القاتلة - يحتاج مراقبة وظائف الكبد دورياً',
      'فيتامين B6 (بيريدوكسين) التكميلي ضروري للوقاية من الاعتلال العصبي المحيطي الناتج عنه',
      'ضعاف الأيض البطيء (slow acetylators) معرضون لخطر أعلى للسمية الجهازية والاعتلال العصبي'
    ],
    indications: [
      {
        indication: 'Active tuberculosis (combination therapy) / Latent TB infection prophylaxis',
        indicationAr: 'السل النشط (علاج مركب) / الوقاية من عدوى السل الكامنة',
        adultDose: 'Active TB: 5 mg/kg (max 300 mg) PO/IM once daily as part of combination regimen; Latent TB: 300 mg PO once daily for 6-9 months',
        adultDoseAr: 'السل النشط: 5 مج/كجم (حد أقصى 300 مج) فموياً/عضلياً مرة يومياً كجزء من نظام علاجي مركب؛ السل الكامن: 300 مج فموياً مرة يومياً لمدة 6-9 أشهر',
        pediatricDose: '10-15 mg/kg/day PO (max 300 mg) once daily',
        pediatricDoseAr: '10-15 مج/كجم/يوم فموياً (حد أقصى 300 مج) مرة يومياً',
        maxDose: '300 mg/day (standard regimen)',
        route: 'PO/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'Reduce to 200-300 mg three times weekly (based on hepatic metabolism, mostly unaffected but monitor)',
      hemodialysis: 'Administer dose after dialysis session; minimally dialyzed'
    },
    hepaticAdjustment: 'Use with extreme caution; discontinue if signs of hepatotoxicity develop (AST/ALT > 3-5x ULN with symptoms)',
    contraindications: [
      'مرض الكبد الحاد',
      'تاريخ تفاعل كبدي شديد مع الإيزونيازيد سابقاً',
      'فرط الحساسية للإيزونيازيد'
    ],
    blackBoxWarning: 'Severe and sometimes fatal hepatitis has been associated with isoniazid therapy; risk increases with age and alcohol use; patients should be monitored closely for signs of liver injury',
    blackBoxWarningAr: 'التهاب كبدي شديد وقد يكون قاتلاً ارتبط بالعلاج بالإيزونيازيد؛ يزداد الخطر مع التقدم بالعمر واستهلاك الكحول؛ يجب مراقبة المرضى بدقة لعلامات تلف الكبد',
    mechanismOfAction: 'Inhibits synthesis of mycolic acids, essential components of the mycobacterial cell wall',
    mechanismOfActionAr: 'يثبط تخليق أحماض الميكوليك، المكونات الأساسية لجدار الخلية الفطرية المتفطرة',
    halfLife: '0.5-1.6 hours (fast acetylators), 2-5 hours (slow acetylators)',
    monitoringParameters: [
      'وظائف الكبد شهرياً وعند ظهور أعراض (خط الأساس ودورياً)',
      'علامات الاعتلال العصبي المحيطي (تنميل، وخز)',
      'الالتزام بتناول فيتامين B6 التكميلي',
      'أعراض الاكتئاب أو التغيرات النفسية (نادرة)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُؤخذ على معدة فارغة (قبل الوجبة بساعة أو بعدها بساعتين) لأقصى امتصاص',
      'الكحول يزيد خطر السمية الكبدية بشكل كبير - يُمنع',
      'بعض الأطعمة الغنية بالتيرامين والهستيدين (التونة، الجبن المعتق) قد تسبب تفاعلات شبيهة بالحساسية'
    ],
    pearls: [
      'بيريدوكسين (فيتامين B6) 25-50 مج يومياً يُعطى روتينياً مع الإيزونيازيد للوقاية من الاعتلال العصبي المحيطي، خاصة في المصابين بالسكري أو سوء التغذية أو الحمل',
      'لا يُستخدم أبداً كعلاج وحيد للسل النشط - يجب دائماً جزءاً من نظام مركب متعدد الأدوية لمنع المقاومة',
      'السمية الكبدية تزداد خطورتها مع التقدم بالعمر واستهلاك الكحول والاستخدام المصاحب مع الريفامبين'
    ]
  },
  {
    id: 'rifampin',
    genericName: 'Rifampin (Rifampicin)',
    genericNameAr: 'ريفامبين (ريفامبيسين)',
    brandNames: ['Rifadin', 'ريفادين'],
    drugClass: 'Antitubercular Agent (Rifamycin)',
    drugClassAr: 'مضاد لمرض السل (ريفامايسين)',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'محرض قوي جداً لإنزيمات CYP450 - يقلل فعالية العديد من الأدوية شاملة موانع الحمل الفموية ومضادات التخثر ومثبطات المناعة',
      'يلون السوائل الجسدية (بول، دمع، عرق) بلون أحمر برتقالي - يجب تنبيه المريض لتجنب القلق غير المبرر',
      'لا يُستخدم أبداً كعلاج وحيد للسل - دائماً جزء من نظام علاجي مركب لمنع تطور المقاومة السريعة'
    ],
    indications: [
      {
        indication: 'Active tuberculosis (combination therapy) / Latent TB infection / Meningococcal/H. influenzae prophylaxis',
        indicationAr: 'السل النشط (علاج مركب) / عدوى السل الكامنة / الوقاية من عدوى المكورات السحائية والمستدمية النزلية',
        adultDose: 'Active TB: 10 mg/kg (max 600 mg) PO/IV once daily as part of combination regimen',
        adultDoseAr: 'السل النشط: 10 مج/كجم (حد أقصى 600 مج) فموياً/وريدياً مرة يومياً كجزء من نظام علاجي مركب',
        pediatricDose: '10-20 mg/kg/day PO (max 600 mg) once daily',
        pediatricDoseAr: '10-20 مج/كجم/يوم فموياً (حد أقصى 600 مج) مرة يومياً',
        maxDose: '600 mg/day',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment typically needed; primarily hepatically eliminated',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution; reduce dose or avoid in significant hepatic impairment; monitor liver function closely',
    contraindications: [
      'فرط الحساسية للريفامبين أو الريفامايسينات الأخرى',
      'الاستخدام المتزامن مع مثبطات بروتياز معينة أو بعض مضادات الفيروسات القهقرية (يقلل فعاليتها بشكل خطير)',
      'اليرقان الحالي (حذر بالغ)'
    ],
    mechanismOfAction: 'Inhibits bacterial DNA-dependent RNA polymerase, blocking RNA synthesis in Mycobacterium tuberculosis and other susceptible organisms',
    mechanismOfActionAr: 'يثبط بوليميريز RNA المعتمد على DNA البكتيري، فيمنع تخليق RNA في المتفطرة السلية والكائنات الحساسة الأخرى',
    halfLife: '1.5-5 hours',
    monitoringParameters: [
      'وظائف الكبد (خط الأساس ودورياً)',
      'تعداد الدم الكامل',
      'جميع الأدوية الأخرى للمريض (خطر تفاعلات كبيرة عبر تحريض الإنزيمات)',
      'لون البول والسوائل الجسدية (متوقع، ليس علامة خطر)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُؤخذ على معدة فارغة (قبل الوجبة بساعة أو بعدها بساعتين) لأقصى امتصاص',
      'يقلل فعالية موانع الحمل الفموية بشكل كبير - يجب استخدام وسيلة منع حمل إضافية'
    ],
    pearls: [
      'من أقوى محرضات إنزيمات الكبد المعروفة - يتطلب مراجعة دقيقة لجميع أدوية المريض المصاحبة قبل البدء',
      'تلون السوائل الجسدية (بول، دمع قد يلون العدسات اللاصقة الناعمة بشكل دائم) تأثير جانبي متوقع وغير ضار يجب شرحه للمريض مسبقاً',
      'يُستخدم أيضاً كعلاج وقائي قصير المدى للمخالطين لحالات عدوى المكورات السحائية أو المستدمية النزلية الغازية'
    ]
  },
  {
    id: 'loperamide',
    genericName: 'Loperamide',
    genericNameAr: 'لوبيراميد',
    brandNames: ['Imodium', 'إيموديوم'],
    drugClass: 'Opioid Receptor Agonist (Antidiarrheal, Peripheral)',
    drugClassAr: 'ناهض مستقبلات الأفيون (مضاد إسهال، محيطي التأثير)',
    category: 'OTC',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pharmacy', 'internal_medicine'],
    keyHighlights: [
      'لا يعبر الحاجز الدموي الدماغي بشكل ملحوظ بالجرعات العادية - لا يسبب تأثيرات أفيونية مركزية أو إدمان عند الاستخدام الصحيح',
      'إساءة استخدامه بجرعات عالية جداً (عشرات الأضعاف) يسبب إطالة QT واضطراب نظم قاتل - ظاهرة "لوبيراميد الفقراء"',
      'يُمنع في الإسهال الدموي أو المصحوب بحمى عالية (اشتباه عدوى غازية) لخطر تفاقم الحالة أو تطور تضخم القولون السمي'
    ],
    indications: [
      {
        indication: 'Acute nonspecific diarrhea / Chronic diarrhea (e.g., IBS-D) / Traveler\'s diarrhea',
        indicationAr: 'الإسهال الحاد غير النوعي / الإسهال المزمن (مثل متلازمة القولون العصبي الإسهالي) / إسهال المسافرين',
        adultDose: '4 mg PO initially, then 2 mg after each loose stool (max 16 mg/day OTC, up to 8 mg/day without supervision)',
        adultDoseAr: '4 مج فموياً في البداية، ثم 2 مج بعد كل براز رخو (حد أقصى 16 مج/يوم بدون وصفة، حتى 8 مج/يوم بدون إشراف طبي)',
        pediatricDose: 'Not recommended under age 2; weight-based dosing for ages 2+ under medical supervision',
        pediatricDoseAr: 'غير موصى به دون عمر سنتين؛ جرعة حسب الوزن من عمر سنتين فأكبر تحت إشراف طبي',
        maxDose: '16 mg/day (OTC maximum)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution in hepatic impairment; monitor for CNS effects due to reduced first-pass metabolism',
    contraindications: [
      'الإسهال الدموي أو المصحوب بحمى عالية (اشتباه عدوى غازية بالشيجيلا أو السالمونيلا)',
      'التهاب القولون الكاذب الغشائي المرتبط بالمضادات الحيوية',
      'انسداد معوي أو تضخم القولون',
      'الأطفال دون عمر سنتين'
    ],
    blackBoxWarning: 'Cardiac events including QT prolongation, torsades de pointes, and cardiac arrest reported with abuse/misuse at doses far exceeding recommended labeling',
    blackBoxWarningAr: 'أحداث قلبية شملت إطالة QT وتورساد دي بوينت وتوقف القلب تم الإبلاغ عنها مع سوء الاستخدام/الإساءة بجرعات تتجاوز بكثير الجرعة الموصى بها',
    mechanismOfAction: 'Acts on peripheral mu-opioid receptors in the intestinal wall, slowing intestinal motility and increasing transit time without significant CNS penetration at normal doses',
    mechanismOfActionAr: 'يعمل على مستقبلات مو الأفيونية المحيطية في جدار الأمعاء فيبطئ الحركة المعوية ويزيد وقت العبور دون اختراق مركزي ملحوظ بالجرعات العادية',
    halfLife: '9-14 hours',
    monitoringParameters: [
      'عدد مرات التبرز والقوام',
      'علامات الجفاف',
      'الحمى أو الدم في البراز (مؤشر لإيقاف الدواء ومراجعة التشخيص)',
      'تخطيط القلب في حالات الاشتباه بسوء الاستخدام بجرعات عالية'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية كبيرة بالجرعات العادية'
    ],
    pearls: [
      'سوء الاستخدام بجرعات ضخمة (أحياناً أكثر من 100 مج/يوم) أصبح ظاهرة موثقة لتحقيق نشوة أو لتخفيف أعراض انسحاب الأفيونات - يسبب اضطراب نظم قلبي قاتل',
      'يُفضل عدم استخدامه في الإسهال المصحوب بدم أو حمى لأنه قد يؤخر إخراج السموم البكتيرية ويزيد خطر المضاعفات',
      'آمن وفعال للاستخدام قصير المدى في إسهال المسافرين غير المصحوب بعلامات تحذيرية'
    ]
  },
  {
    id: 'labetalol',
    genericName: 'Labetalol',
    genericNameAr: 'لابيتالول',
    brandNames: ['Trandate', 'ترانديت'],
    drugClass: 'Combined Alpha-1/Beta Adrenergic Blocker',
    drugClassAr: 'حاصر مشترك لألفا-1 وبيتا الأدريناليني',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'icu_emergency', 'pharmacy'],
    keyHighlights: [
      'الخيار الأول لارتفاع ضغط الدم الحاد في الحمل وتسمم الحمل - آمن نسبياً ومدروس جيداً أثناء الحمل',
      'الحقن الوريدي المتكرر أو التسريب يُستخدم على نطاق واسع في أزمات ارتفاع الضغط',
      'تأثيره المشترك على ألفا وبيتا يقلل انخفاض الضغط الانعكاسي المصاحب لحاصرات بيتا وحدها'
    ],
    indications: [
      {
        indication: 'Hypertensive emergency/urgency / Hypertension in pregnancy / Chronic hypertension',
        indicationAr: 'أزمة/طوارئ ارتفاع ضغط الدم / ارتفاع ضغط الدم في الحمل / ارتفاع ضغط الدم المزمن',
        adultDose: 'IV: 20 mg bolus over 2 min, then 20-80 mg every 10 min (max 300 mg) or infusion 0.5-2 mg/min; Oral: 100-400 mg twice daily',
        adultDoseAr: 'وريدي: 20 مج جرعة بلعية خلال دقيقتين، ثم 20-80 مج كل 10 دقائق (حد أقصى 300 مج) أو تسريب 0.5-2 مج/دقيقة؛ فموي: 100-400 مج مرتين يومياً',
        maxDose: '300 mg IV cumulative; 2400 mg/day oral',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution; reduce dose in significant hepatic impairment due to extensive hepatic metabolism',
    contraindications: [
      'الربو الشديد غير المستقر',
      'بطء القلب الجيبي الشديد أو الحصار الأذيني البطيني من الدرجة الثانية أو الثالثة',
      'الصدمة القلبية أو فشل القلب الحاد غير المعاوض',
      'الحساسية المفرطة للابيتالول'
    ],
    mechanismOfAction: 'Blocks beta-1, beta-2, and alpha-1 adrenergic receptors, reducing heart rate, cardiac output, and peripheral vascular resistance',
    mechanismOfActionAr: 'يحجب مستقبلات بيتا-1 وبيتا-2 وألفا-1 الأدرينالية، فيقلل معدل ضربات القلب والنتاج القلبي والمقاومة الوعائية المحيطية',
    halfLife: '5.5-8 hours',
    monitoringParameters: [
      'ضغط الدم المستمر أثناء الإعطاء الوريدي',
      'معدل ضربات القلب',
      'علامات تشنج قصبي في المرضى المعرضين للخطر',
      'وظائف الكبد عند الاستخدام المطول'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية كبيرة'
    ],
    pearls: [
      'من أكثر الأدوية أماناً وفعالية لعلاج ارتفاع ضغط الدم الحاد في تسمم الحمل والحمل بشكل عام',
      'التحول من الوضع الاستلقاء للوقوف يزيد تأثيره الخافض للضغط بسبب مكون ألفا الحاصر - يُنصح المريض بالحذر عند النهوض',
      'يُستخدم أيضاً كبديل للنيتروبروسيد في أزمات ارتفاع الضغط عندما يكون تجنب انخفاض الضغط الانعكاسي الحاد مرغوباً'
    ]
  },
  {
    id: 'hydralazine',
    genericName: 'Hydralazine',
    genericNameAr: 'هيدرالازين',
    brandNames: ['Apresoline', 'أبريزولين'],
    drugClass: 'Direct Arterial Vasodilator',
    drugClassAr: 'موسع وعائي شرياني مباشر',
    category: 'Rx',
    route: ['PO', 'IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'icu_emergency', 'pharmacy'],
    keyHighlights: [
      'من أقدم وأكثر الأدوية أماناً المستخدمة لعلاج ارتفاع ضغط الدم الحاد في الحمل وتسمم الحمل',
      'يسبب تسرع قلب انعكاسي واحتباس سوائل - غالباً يُدمج مع حاصر بيتا ومدر بول لموازنة هذه التأثيرات',
      'الاستخدام المزمن بجرعات عالية قد يسبب متلازمة شبيهة بالذئبة الحمامية - أكثر شيوعاً في ضعاف الأيض (slow acetylators)'
    ],
    indications: [
      {
        indication: 'Hypertensive emergency (including pregnancy) / Chronic heart failure (with nitrates, adjunct) / Chronic hypertension',
        indicationAr: 'طوارئ ارتفاع ضغط الدم (شاملة الحمل) / فشل القلب المزمن (مع النترات، مساعد) / ارتفاع ضغط الدم المزمن',
        adultDose: 'IV/IM: 5-10 mg every 20-30 min as needed (max 20-30 mg); Oral: start 10 mg four times daily, titrate to 25-100 mg four times daily',
        adultDoseAr: 'وريدي/عضلي: 5-10 مج كل 20-30 دقيقة عند الحاجة (حد أقصى 20-30 مج)؛ فموي: البدء بـ 10 مج أربع مرات يومياً، يُعدل إلى 25-100 مج أربع مرات يومياً',
        maxDose: '300 mg/day (oral)',
        route: 'PO/IV/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed; monitor for accumulation',
      crclBelow10: 'Reduce dose or extend interval to every 8 hours; monitor closely',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution; reduce dose in significant hepatic impairment',
    contraindications: [
      'مرض القلب الروماتزمي المصيب للصمام التاجي',
      'الذئبة الحمامية الجهازية (نسبي)',
      'فرط الحساسية للهيدرالازين',
      'تمدد الأوعية الدموية الأبهري الانسلاخي'
    ],
    mechanismOfAction: 'Directly relaxes arteriolar smooth muscle, reducing peripheral vascular resistance with minimal effect on veins',
    mechanismOfActionAr: 'يرخي مباشرة العضلات الملساء الشريانية فيقلل المقاومة الوعائية المحيطية مع تأثير ضئيل على الأوردة',
    halfLife: '3-7 hours (varies by acetylator status)',
    monitoringParameters: [
      'ضغط الدم ومعدل ضربات القلب',
      'علامات احتباس السوائل أو الوذمة',
      'الأعراض الشبيهة بالذئبة (ألم مفصلي، طفح) عند الاستخدام المزمن',
      'تعداد الدم الكامل عند الاستخدام طويل المدى'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية كبيرة'
    ],
    pearls: [
      'يُستخدم تاريخياً وحتى اليوم كخط أول أو ثانٍ لعلاج أزمات ارتفاع الضغط في تسمم الحمل جنباً إلى جنب مع لابيتالول',
      'الجمع الروتيني مع حاصر بيتا ومدر بول (ثلاثي كلاسيكي) يوازن التسرع القلبي الانعكاسي واحتباس السوائل الناتجين عنه',
      'متلازمة الذئبة الدوائية خطر معروف مع الجرعات العالية المزمنة (أكثر من 200 مج/يوم) وعادة قابلة للعكس عند الإيقاف'
    ]
  },
  {
    id: 'methyldopa',
    genericName: 'Methyldopa',
    genericNameAr: 'ميثيل دوبا',
    brandNames: ['Aldomet', 'ألدوميت'],
    drugClass: 'Central Alpha-2 Adrenergic Agonist',
    drugClassAr: 'ناهض ألفا-2 أدريناليني مركزي',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'الأكثر توثيقاً عالمياً من حيث الأمان طويل المدى لعلاج ارتفاع ضغط الدم المزمن أثناء الحمل',
      'قد يسبب فقر دم انحلالي إيجابي كومبس واختبار كومبس مباشر إيجابي كاذب دون انحلال فعلي',
      'التأثير المهدئ شائع خاصة عند البدء - يقل عادة مع استمرار العلاج'
    ],
    indications: [
      {
        indication: 'Chronic hypertension in pregnancy / Essential hypertension',
        indicationAr: 'ارتفاع ضغط الدم المزمن في الحمل / ارتفاع ضغط الدم الأساسي',
        adultDose: 'Start 250 mg PO twice or three times daily, titrate to 500-2000 mg/day divided',
        adultDoseAr: 'البدء بـ 250 مج فموياً مرتين أو ثلاث مرات يومياً، يُعدل إلى 500-2000 مج/يوم مقسمة',
        maxDose: '3000 mg/day',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Extend dosing interval; reduce dose by 25-50%',
      crclBelow10: 'Reduce dose by 50-75%; extend interval to every 12-24 hours',
      hemodialysis: 'Dialyzable; administer supplemental dose after dialysis session'
    },
    hepaticAdjustment: 'Avoid in active liver disease; discontinue if signs of hepatotoxicity develop',
    contraindications: [
      'أمراض الكبد النشطة (التهاب كبد حاد، تشمع نشط)',
      'تاريخ اضطراب كبدي مرتبط بالميثيل دوبا سابقاً',
      'فقر الدم الانحلالي النشط',
      'الاستخدام المتزامن مع مثبطات MAO'
    ],
    mechanismOfAction: 'Converted to alpha-methylnorepinephrine, which stimulates central alpha-2 receptors, reducing sympathetic outflow and peripheral vascular resistance',
    mechanismOfActionAr: 'يُحول إلى ألفا-ميثيل نورإبينفرين الذي ينبه مستقبلات ألفا-2 المركزية فيقلل التدفق الودي والمقاومة الوعائية المحيطية',
    halfLife: '1.7 hours (central effect lasts 12-24 hours)',
    monitoringParameters: [
      'ضغط الدم',
      'وظائف الكبد (خط الأساس وفي أول 6-12 أسبوع)',
      'تعداد الدم الكامل (علامات فقر دم انحلالي)',
      'المزاج والتأثير المهدئ خاصة عند البدء'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُفضل تناوله بانتظام مع أو بدون طعام'
    ],
    pearls: [
      'يُعتبر الخيار الأكثر أماناً وتوثيقاً تاريخياً لعلاج ارتفاع ضغط الدم المزمن طوال فترة الحمل بما في ذلك الثلث الأول',
      'اختبار كومبس المباشر الإيجابي شائع (10-20%) دون أن يعني بالضرورة فقر دم انحلالي فعلي سريرياً',
      'التأثير المهدئ وجفاف الفم من أكثر الآثار الجانبية شيوعاً خاصة في الأسابيع الأولى من العلاج'
    ]
  },
  {
    id: 'nifedipine',
    genericName: 'Nifedipine',
    genericNameAr: 'نيفيديبين',
    brandNames: ['Procardia', 'Adalat', 'أدالات'],
    drugClass: 'Dihydropyridine Calcium Channel Blocker',
    drugClassAr: 'حاصر قنوات الكالسيوم من فئة الديهيدروبيريدين',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'الشكل سريع المفعول تحت اللسان ممنوع في أزمات ارتفاع الضغط - خطر انخفاض ضغط حاد ونقص تروية قلبية/دماغية',
      'الشكل ممتد المفعول (ER) يُستخدم بأمان لعلاج ارتفاع ضغط الدم المزمن في الحمل وكموسع رئوي في تسمم الحمل',
      'يُستخدم أيضاً كموقف للمخاض (tocolytic) خارج الاستطباب المعتمد'
    ],
    indications: [
      {
        indication: 'Hypertension (extended-release) / Chronic stable angina / Raynaud phenomenon / Preterm labor tocolysis (off-label)',
        indicationAr: 'ارتفاع ضغط الدم (ممتد المفعول) / الذبحة الصدرية المزمنة المستقرة / ظاهرة رينو / إيقاف المخاض المبكر (خارج الاستطباب)',
        adultDose: 'Extended-release: 30-90 mg PO once daily',
        adultDoseAr: 'ممتد المفعول: 30-90 مج فموياً مرة يومياً',
        maxDose: '120 mg/day (extended-release)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose in significant hepatic impairment; monitor closely due to reduced clearance',
    contraindications: [
      'فرط الحساسية للنيفيديبين',
      'تضيق الأبهر الشديد (حذر نسبي)',
      'الشكل سريع المفعول تحت اللسان يُمنع في أزمات ارتفاع الضغط الحادة'
    ],
    mechanismOfAction: 'Inhibits calcium ion influx into vascular smooth muscle, causing arterial vasodilation with minimal direct cardiac effect',
    mechanismOfActionAr: 'يثبط دخول أيونات الكالسيوم إلى العضلات الملساء الوعائية مسبباً توسعاً شريانياً مع تأثير مباشر ضئيل على القلب',
    halfLife: '2-5 hours (immediate-release); effective duration longer with extended-release',
    monitoringParameters: [
      'ضغط الدم',
      'الوذمة المحيطية',
      'معدل ضربات القلب (قد يسبب تسرعاً انعكاسياً)',
      'وظائف الكبد عند الاستخدام المزمن'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'عصير الجريب فروت يرفع مستواه الدموي بشكل ملحوظ عبر تثبيط CYP3A4 - يُمنع',
      'الشكل ممتد المفعول لا يُكسر أو يُمضغ'
    ],
    pearls: [
      'استخدام الشكل سريع المفعول تحت اللسان لعلاج أزمات ارتفاع الضغط أصبح ممارسة مهجورة تماماً بسبب خطر الانخفاض الحاد وغير المتحكم به في الضغط',
      'بديل فعال وآمن نسبياً للابيتالول أو الميثيل دوبا في علاج ارتفاع ضغط الدم المزمن أثناء الحمل',
      'يُستخدم خارج الاستطباب المعتمد كدواء موقف للمخاض المبكر بفعالية مماثلة للتوكوليتيكس التقليدية'
    ]
  },
  {
    id: 'ticagrelor',
    genericName: 'Ticagrelor',
    genericNameAr: 'تيكاجريلور',
    brandNames: ['Brilinta', 'برلينتا'],
    drugClass: 'P2Y12 Platelet Inhibitor',
    drugClassAr: 'مثبط مستقبلات الصفائح P2Y12',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'يحتاج جرعة أسبرين صيانة منخفضة فقط (75-100 مج/يوم) - الجرعات الأعلى تقلل فعاليته',
      'ضيق التنفس أثر جانبي شائع (حوالي 14%) وعادة خفيف وعابر، ليس بالضرورة علامة تحسسية أو قلبية',
      'تثبيط الصفائح عكسي (خلافاً لكلوبيدوجريل وبراسوجريل) - يستعيد وظيفة الصفائح أسرع بعد الإيقاف'
    ],
    indications: [
      {
        indication: 'Acute coronary syndrome / Secondary prevention of cardiovascular events post-MI',
        indicationAr: 'المتلازمة التاجية الحادة / الوقاية الثانوية من الأحداث القلبية الوعائية بعد احتشاء عضلة القلب',
        adultDose: '180 mg PO loading dose, then 90 mg twice daily (with aspirin 75-100 mg/day)',
        adultDoseAr: '180 مج فموياً جرعة تحميل، ثم 90 مج مرتين يومياً (مع أسبرين 75-100 مج/يوم)',
        maxDose: '90 mg twice daily maintenance',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'Use with caution; limited data in severe renal impairment',
      hemodialysis: 'Not recommended; limited data in dialysis-dependent patients'
    },
    hepaticAdjustment: 'Avoid in severe hepatic impairment; use with caution in moderate impairment',
    contraindications: [
      'نزيف نشط ذو أهمية سريرية',
      'تاريخ نزيف داخل الجمجمة',
      'القصور الكبدي الشديد',
      'الاستخدام المتزامن مع مثبطات قوية لـ CYP3A4 (كيتوكونازول، ريتونافير)'
    ],
    blackBoxWarning: 'Maintenance aspirin dose above 100 mg/day reduces ticagrelor effectiveness and should be avoided',
    blackBoxWarningAr: 'جرعة صيانة الأسبرين فوق 100 مج/يوم تقلل فعالية التيكاجريلور ويجب تجنبها',
    mechanismOfAction: 'Reversibly and directly inhibits the P2Y12 ADP receptor on platelets, preventing platelet activation and aggregation',
    mechanismOfActionAr: 'يثبط بشكل عكسي ومباشر مستقبل ADP من نوع P2Y12 على الصفائح، فيمنع تنشيط الصفائح وتجمعها',
    halfLife: '7 hours (12 hours for active metabolite)',
    monitoringParameters: [
      'علامات النزيف',
      'ضيق التنفس وشدته',
      'جرعة الأسبرين المصاحبة (يجب ألا تتجاوز 100 مج/يوم)',
      'وظائف الكبد',
      'انقطاعات بطينية (bradyarrhythmias) نادرة موثقة'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'عصير الجريب فروت قد يرفع مستواه الدموي عبر تثبيط CYP3A4 - يُفضل تجنبه'
    ],
    pearls: [
      'يحتاج جرعتين يومياً خلافاً لكلوبيدوجريل وبراسوجريل (مرة واحدة يومياً) - قد يؤثر على الالتزام',
      'ضيق التنفس العابر غير المرتبط بأمراض القلب أو الرئة أثر جانبي مميز يجب تمييزه عن تفاقم حقيقي للحالة القلبية',
      'التأثير العكسي على الصفائح يعني استعادة أسرع لوظيفة الصفائح عند الإيقاف مقارنة بكلوبيدوجريل، وهو أمر مهم قبل الجراحة'
    ]
  },
  {
    id: 'azathioprine',
    genericName: 'Azathioprine',
    genericNameAr: 'آزاثيوبرين',
    brandNames: ['Imuran', 'إيموران'],
    drugClass: 'Immunosuppressant (Purine Antagonist)',
    drugClassAr: 'مثبط مناعة (مضاد بيورين)',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'oncology'],
    keyHighlights: [
      'تفاعل خطير وقاتل محتمل مع الألوبيورينول - يتطلب تقليل جرعة الآزاثيوبرين بنسبة 65-75% عند الدمج',
      'فحص نشاط إنزيم TPMT (أو الجينوتايب) قبل البدء يحدد خطر تثبيط نخاع العظم الشديد في ضعاف الأيض',
      'تحذير صندوق أسود لزيادة خطر الأورام الخبيثة (خاصة اللمفوما وسرطان الجلد) مع الاستخدام المزمن'
    ],
    indications: [
      {
        indication: 'Rheumatoid arthritis / Renal transplant rejection prophylaxis / Inflammatory bowel disease (adjunct)',
        indicationAr: 'التهاب المفاصل الروماتويدي / الوقاية من رفض زراعة الكلى / مرض الأمعاء الالتهابي (مساعد)',
        adultDose: 'Rheumatoid arthritis: 1 mg/kg/day PO, may increase to 2.5 mg/kg/day; Transplant: 3-5 mg/kg/day initially, then taper to maintenance',
        adultDoseAr: 'التهاب المفاصل الروماتويدي: 1 مج/كجم/يوم فموياً، يمكن زيادتها إلى 2.5 مج/كجم/يوم؛ زراعة الأعضاء: 3-5 مج/كجم/يوم في البداية، ثم تخفيض لجرعة الصيانة',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce dose by 25%',
      crclBelow10: 'Reduce dose by 50%',
      hemodialysis: 'Dialyzable; administer supplemental dose after dialysis session'
    },
    hepaticAdjustment: 'Reduce dose in significant hepatic impairment; monitor liver function closely',
    contraindications: [
      'الحمل في مرضى التهاب المفاصل الروماتويدي (يُقيّم الخطر/الفائدة في زراعة الأعضاء)',
      'الاستخدام المتزامن مع الألوبيورينول دون تعديل جرعة كبير',
      'فرط الحساسية للآزاثيوبرين',
      'نقص نشاط TPMT الشديد (حذر بالغ أو تجنب)'
    ],
    blackBoxWarning: 'Chronic immunosuppression with azathioprine increases risk of malignancy, particularly lymphoma and skin cancer; mutagenic potential in both sexes',
    blackBoxWarningAr: 'تثبيط المناعة المزمن بالآزاثيوبرين يزيد خطر الأورام الخبيثة، خاصة اللمفوما وسرطان الجلد؛ احتمالية طفرية في كلا الجنسين',
    mechanismOfAction: 'Converted to 6-mercaptopurine and then to thioguanine nucleotides, which inhibit purine synthesis and DNA replication in rapidly dividing lymphocytes',
    mechanismOfActionAr: 'يُحول إلى 6-ميركابتوبورين ثم إلى نيوكليوتيدات الثيوجوانين التي تثبط تخليق البيورين وتضاعف الحمض النووي في الخلايا الليمفاوية سريعة الانقسام',
    halfLife: '3-5 hours (active metabolites longer)',
    monitoringParameters: [
      'تعداد الدم الكامل أسبوعياً عند البدء ثم شهرياً',
      'وظائف الكبد',
      'نشاط إنزيم TPMT قبل البدء',
      'علامات العدوى الانتهازية',
      'فحوصات الجلد الدورية للكشف المبكر عن الأورام'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية كبيرة'
    ],
    pearls: [
      'يجب تقليل جرعة الآزاثيوبرين بنسبة 65-75% عند الدمج الضروري مع الألوبيورينول لتجنب تثبيط نخاع عظم قاتل',
      'فحص TPMT (أو NUDT15 في بعض الأعراق) قبل البدء يساعد على تحديد المرضى عاليي الخطورة لتثبيط نخاع العظم الشديد',
      'الاستخدام طويل المدى يتطلب فحوصات جلدية دورية ووعياً بزيادة خطر الأورام الخبيثة مع مرور السنين'
    ]
  },
  {
    id: 'tacrolimus',
    genericName: 'Tacrolimus',
    genericNameAr: 'تاكروليمس',
    brandNames: ['Prograf', 'بروجراف'],
    drugClass: 'Calcineurin Inhibitor (Immunosuppressant)',
    drugClassAr: 'مثبط الكالسينيورين (مثبط مناعة)',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'oncology'],
    keyHighlights: [
      'نطاق علاجي ضيق جداً يتطلب مراقبة مستوى دموي دقيقة ومستمرة طوال فترة العلاج',
      'سمية كلوية وعصبية جرعة-معتمدة - من أكثر أدوية زراعة الأعضاء تطلباً للمراقبة الدقيقة',
      'تفاعلات دوائية كثيرة عبر CYP3A4 - عصير الجريب فروت ومضادات الفطريات الآزولية ترفع مستواه بشكل خطير'
    ],
    indications: [
      {
        indication: 'Prophylaxis of organ transplant rejection (kidney, liver, heart)',
        indicationAr: 'الوقاية من رفض زراعة الأعضاء (الكلى، الكبد، القلب)',
        adultDose: 'Individualized based on transplant type and trough levels; typically start 0.1-0.2 mg/kg/day PO divided every 12 hours',
        adultDoseAr: 'فردي حسب نوع الزراعة والمستوى الدموي؛ عادة البدء بـ 0.1-0.2 مج/كجم/يوم فموياً مقسمة كل 12 ساعة',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed; dose per trough levels',
      crcl10to50: 'Dose per trough levels; monitor renal function closely (nephrotoxic)',
      crclBelow10: 'Dose per trough levels with extreme caution; high nephrotoxicity risk',
      hemodialysis: 'Not significantly dialyzed; dose per trough levels'
    },
    hepaticAdjustment: 'Reduce dose significantly in hepatic impairment; monitor levels closely due to reduced clearance',
    contraindications: [
      'فرط الحساسية للتاكروليمس',
      'الاستخدام المتزامن مع السيكلوسبورين (كلاهما مثبط كالسينيورين - خطر سمية مضاعفة)'
    ],
    blackBoxWarning: 'Increased susceptibility to infection and development of malignancy (particularly lymphoma and skin cancer) due to immunosuppression; should only be prescribed by physicians experienced in transplant management',
    blackBoxWarningAr: 'زيادة القابلية للعدوى وتطور الأورام الخبيثة (خاصة اللمفوما وسرطان الجلد) بسبب تثبيط المناعة؛ يجب أن يُوصف فقط من قبل أطباء ذوي خبرة في إدارة زراعة الأعضاء',
    mechanismOfAction: 'Binds FK-binding protein, inhibiting calcineurin and blocking T-lymphocyte activation and interleukin-2 production',
    mechanismOfActionAr: 'يرتبط ببروتين FK الرابط، فيثبط الكالسينيورين ويمنع تنشيط الخلايا الليمفاوية التائية وإنتاج الإنترلوكين-2',
    halfLife: '11-19 hours',
    monitoringParameters: [
      'مستوى التاكروليمس الدموي (trough) بانتظام',
      'وظائف الكلى (كرياتينين)',
      'ضغط الدم وسكر الدم',
      'البوتاسيوم والمغنيسيوم في الدم',
      'علامات العدوى الانتهازية'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'عصير الجريب فروت يرفع مستواه الدموي بشكل خطير عبر تثبيط CYP3A4 - يُمنع تماماً',
      'الطعام الدسم يقلل امتصاصه - يُؤخذ بشكل ثابت بالنسبة للوجبات'
    ],
    pearls: [
      'يحل محل السيكلوسبورين في معظم بروتوكولات زراعة الأعضاء الحديثة بسبب فعالية أعلى نسبياً رغم ملف سمية مشابه',
      'التحويل بين الأشكال الفورية والممتدة المفعول أو بين الشركات المصنعة المختلفة يتطلب إعادة مراقبة دقيقة للمستوى الدموي',
      'سمية CNS (رعاش، صداع، نوبات نادرة) أكثر شيوعاً من السيكلوسبورين بينما السمية الكلوية متشابهة تقريباً'
    ]
  },
  {
    id: 'hydroxychloroquine',
    genericName: 'Hydroxychloroquine',
    genericNameAr: 'هيدروكسي كلوروكين',
    brandNames: ['Plaquenil', 'بلاكينيل'],
    drugClass: 'Antimalarial / DMARD',
    drugClassAr: 'مضاد ملاريا / دواء مضاد للروماتيزم معدل للمرض',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'infectious_diseases'],
    keyHighlights: [
      'اعتلال الشبكية السام قابل للعكس إذا اكتُشف مبكراً - يحتاج فحص عيون أساسي وسنوي بعد 5 سنوات من الاستخدام',
      'الجرعة القصوى الآمنة طويلة المدى تُحسب حسب وزن الجسم الفعلي (≤5 مج/كجم/يوم) لتقليل خطر السمية الشبكية',
      'من أكثر أدوية الذئبة الحمامية الجهازية استخداماً وأماناً نسبياً أثناء الحمل'
    ],
    indications: [
      {
        indication: 'Rheumatoid arthritis / Systemic lupus erythematosus / Malaria prophylaxis and treatment (chloroquine-sensitive)',
        indicationAr: 'التهاب المفاصل الروماتويدي / الذئبة الحمامية الجهازية / الوقاية والعلاج من الملاريا (الحساسة للكلوروكين)',
        adultDose: 'RA/Lupus: 200-400 mg/day PO divided once or twice daily (max 5 mg/kg/day actual body weight)',
        adultDoseAr: 'التهاب المفاصل/الذئبة: 200-400 مج/يوم فموياً مقسمة مرة أو مرتين يومياً (حد أقصى 5 مج/كجم/يوم وزن فعلي)',
        maxDose: '5 mg/kg/day (actual body weight) for chronic use',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Use with caution; consider dose reduction',
      crclBelow10: 'Reduce dose by 50%; use with caution',
      hemodialysis: 'Not significantly dialyzed; use with caution'
    },
    hepaticAdjustment: 'Use with caution in hepatic impairment; monitor liver function',
    contraindications: [
      'اعتلال الشبكية الموجود مسبقاً',
      'فرط الحساسية للكلوروكين أو مشتقاته',
      'نقص إنزيم G6PD الشديد (حذر - خطر انحلال دم)'
    ],
    mechanismOfAction: 'Accumulates in lysosomes, interfering with antigen processing and Toll-like receptor signaling, reducing autoimmune inflammatory response',
    mechanismOfActionAr: 'يتراكم في الليزوزومات فيتداخل مع معالجة المستضدات وإشارات المستقبلات الشبيهة بـ Toll، مما يقلل الاستجابة الالتهابية المناعية الذاتية',
    halfLife: '40-50 days',
    monitoringParameters: [
      'فحص قاع العين وشبكية العين (أساسي ثم سنوي بعد 5 سنوات)',
      'تعداد الدم الكامل',
      'وظائف الكبد والكلى',
      'إنزيم G6PD قبل البدء في المرضى المعرضين للخطر',
      'أعراض ضعف العضلات (اعتلال عضلي نادر)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُفضل تناوله مع الطعام لتقليل الاضطراب الهضمي'
    ],
    pearls: [
      'من الأدوية القليلة المضادة للروماتيزم التي تُعتبر آمنة للاستمرار أثناء الحمل، خاصة في مريضات الذئبة',
      'بداية التأثير العلاجي الكامل بطيئة (قد تستغرق 3-6 أشهر) - يجب توعية المريض بعدم توقع نتائج فورية',
      'اعتلال الشبكية السام نادر بالجرعات الموصى بها حديثاً لكنه قد يكون غير قابل للعكس إذا تأخر اكتشافه - الفحص الدوري ضروري'
    ]
  },
  {
    id: 'nystatin',
    genericName: 'Nystatin',
    genericNameAr: 'نيستاتين',
    brandNames: ['Mycostatin', 'ميكوستاتين'],
    drugClass: 'Polyene Antifungal (Topical/Oral, Non-Absorbed)',
    drugClassAr: 'مضاد فطريات من فئة البوليين (موضعي/فموي، غير ممتص)',
    category: 'Rx',
    route: ['PO (Oral Suspension)', 'Topical', 'Vaginal'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pediatrics', 'pharmacy', 'nursing'],
    keyHighlights: [
      'غير ممتص من الجهاز الهضمي - يعمل فقط موضعياً على الغشاء المخاطي الفموي أو المعوي، آمن جداً حتى لحديثي الولادة',
      'يُستخدم على نطاق واسع للوقاية والعلاج من داء المبيضات الفموي (القلاع) عند الرضع ومرضى المناعة الضعيفة',
      'يجب أن يبقى بتماس مع الآفة لأطول فترة ممكنة (يُحرك في الفم قبل البلع) لتحقيق أقصى فعالية'
    ],
    indications: [
      {
        indication: 'Oral candidiasis (thrush) / Cutaneous candidiasis / Vaginal candidiasis',
        indicationAr: 'داء المبيضات الفموي (القلاع) / داء المبيضات الجلدي / داء المبيضات المهبلي',
        adultDose: 'Oral suspension: 400,000-600,000 units (4-6 mL) swish and swallow four times daily',
        adultDoseAr: 'معلق فموي: 400,000-600,000 وحدة (4-6 مل) يُحرك في الفم ويُبلع أربع مرات يومياً',
        pediatricDose: 'Infants: 200,000 units (2 mL) four times daily (100,000 units/mL each side of mouth)',
        pediatricDoseAr: 'الرضع: 200,000 وحدة (2 مل) أربع مرات يومياً (100,000 وحدة/مل لكل جانب من الفم)',
        route: 'PO/Topical/Vaginal'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed (not systemically absorbed)',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'No adjustment needed; not systemically absorbed'
    },
    hepaticAdjustment: 'No adjustment needed; not systemically absorbed',
    contraindications: [
      'فرط الحساسية للنيستاتين'
    ],
    mechanismOfAction: 'Binds to ergosterol in the fungal cell membrane, creating pores that increase membrane permeability and cause cell death',
    mechanismOfActionAr: 'يرتبط بالإرغوستيرول في غشاء الخلية الفطرية مكوناً مسامات تزيد نفاذية الغشاء وتسبب موت الخلية',
    halfLife: 'N/A (not systemically absorbed)',
    monitoringParameters: [
      'الاستجابة السريرية للآفات الفطرية (تحسن خلال 48-72 ساعة)',
      'استمرار الأعراض بعد 7 أيام (قد يستدعي تقييماً إضافياً)',
      'الالتزام بالجدول الزمني الصحيح للجرعات'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يُفضل عدم الأكل أو الشرب لمدة 30 دقيقة بعد الجرعة الفموية لإطالة وقت التماس مع الآفة'
    ],
    pearls: [
      'من أكثر مضادات الفطريات أماناً على الإطلاق بسبب غياب الامتصاص الجهازي - الخيار الأول للقلاع عند حديثي الولادة والرضع',
      'يجب الاستمرار بالعلاج لمدة 48-72 ساعة بعد زوال الأعراض لضمان القضاء الكامل على العدوى',
      'عقمة الحلمات أثناء الرضاعة قد تحتاج علاجاً متزامناً للأم والطفل لمنع إعادة العدوى المتبادلة'
    ]
  },
  {
    id: 'terbinafine',
    genericName: 'Terbinafine',
    genericNameAr: 'تيربينافين',
    brandNames: ['Lamisil', 'لاميزيل'],
    drugClass: 'Allylamine Antifungal',
    drugClassAr: 'مضاد فطريات من فئة الأليل أمين',
    category: 'Rx',
    route: ['PO', 'Topical'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'العلاج الفموي الأكثر فعالية لعدوى فطريات الأظافر (الفطار الظفري) - كورس طويل (6-12 أسبوع) مطلوب',
      'يحتاج فحص وظائف الكبد قبل البدء ودورياً - سمية كبدية نادرة لكن موثقة وقد تكون شديدة',
      'يتراكم في الأظافر والجلد لأسابيع بعد إيقاف العلاج الفموي مما يسمح بمدة علاج أقصر من المتوقع ظاهرياً'
    ],
    indications: [
      {
        indication: 'Onychomycosis (nail fungal infection) / Tinea corporis/cruris/pedis',
        indicationAr: 'الفطار الظفري (عدوى فطريات الأظافر) / السعفة الجسدية/الأربية/القدم',
        adultDose: 'Onychomycosis: 250 mg PO once daily for 6 weeks (fingernails) or 12 weeks (toenails); Topical: apply once or twice daily for 1-4 weeks',
        adultDoseAr: 'الفطار الظفري: 250 مج فموياً مرة يومياً لمدة 6 أسابيع (أظافر اليد) أو 12 أسبوع (أظافر القدم)؛ موضعي: يُطبق مرة أو مرتين يومياً لمدة 1-4 أسابيع',
        route: 'PO/Topical'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce dose by 50% (e.g., 125 mg every other day)',
      crclBelow10: 'Avoid use or reduce dose significantly; limited data',
      hemodialysis: 'Not significantly dialyzed; use with caution'
    },
    hepaticAdjustment: 'Avoid in chronic or active liver disease; discontinue if signs of hepatotoxicity develop',
    contraindications: [
      'أمراض الكبد المزمنة أو النشطة',
      'فرط الحساسية للتيربينافين',
      'القصور الكلوي الشديد (CrCl < 50 بدون تعديل جرعة)'
    ],
    mechanismOfAction: 'Inhibits fungal squalene epoxidase, blocking ergosterol synthesis and causing toxic accumulation of squalene within the fungal cell',
    mechanismOfActionAr: 'يثبط إنزيم سكوالين إيبوكسيديز الفطري، فيمنع تخليق الإرغوستيرول ويسبب تراكماً ساماً للسكوالين داخل الخلية الفطرية',
    halfLife: '36 hours (up to 200-400 hours in tissues)',
    monitoringParameters: [
      'وظائف الكبد (خط الأساس وبعد 4-6 أسابيع)',
      'تعداد الدم الكامل عند الاستخدام المطول',
      'علامات اضطراب التذوق (أثر جانبي معروف وقد يستمر بعد الإيقاف)',
      'الاستجابة السريرية (نمو الظفر الجديد السليم)'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُؤخذ مع أو بدون طعام',
      'الكحول يزيد خطر السمية الكبدية - يُنصح بالحذر'
    ],
    pearls: [
      'أكثر فعالية من مضادات الفطريات الآزولية الفموية (مثل الإيتراكونازول) في علاج عدوى الأظافر طويلة المدى',
      'التحسن السريري الكامل قد يستغرق أشهراً بعد انتهاء العلاج بسبب الوقت اللازم لنمو الظفر السليم الجديد بالكامل',
      'اضطراب أو فقدان حاسة التذوق أثر جانبي غير شائع لكنه موثق وقد يستمر لفترة طويلة بعد إيقاف الدواء'
    ]
  },
  {
    id: 'ferrous_sulfate',
    genericName: 'Ferrous Sulfate',
    genericNameAr: 'كبريتات الحديدوز',
    brandNames: ['Feosol', 'فيوسول'],
    drugClass: 'Oral Iron Supplement',
    drugClassAr: 'مكمل حديد فموي',
    category: 'OTC',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pharmacy', 'internal_medicine', 'nursing'],
    keyHighlights: [
      'يُسبب تلوناً أسود للبراز (طبيعي وغير ضار) يجب تمييزه عن النزيف الهضمي الحقيقي (براز أسود لامع رائحته كريهة)',
      'فيتامين C يحسن الامتصاص بشكل ملحوظ بينما الشاي والقهوة ومنتجات الألبان تقلله بشكل كبير',
      'الجرعة الزائدة في الأطفال خطيرة جداً وقد تكون قاتلة - من أكثر أسباب التسمم الدوائي العرضي عند الأطفال'
    ],
    indications: [
      {
        indication: 'Iron deficiency anemia / Iron deficiency prophylaxis (pregnancy)',
        indicationAr: 'فقر الدم بنقص الحديد / الوقاية من نقص الحديد (الحمل)',
        adultDose: '325 mg (65 mg elemental iron) PO once to three times daily',
        adultDoseAr: '325 مج (65 مج حديد أولي) فموياً مرة إلى ثلاث مرات يومياً',
        pediatricDose: '3-6 mg/kg/day elemental iron divided for treatment; 1-2 mg/kg/day for prophylaxis',
        pediatricDoseAr: '3-6 مج/كجم/يوم حديد أولي مقسمة للعلاج؛ 1-2 مج/كجم/يوم للوقاية',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; use with caution',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment needed; avoid in hemochromatosis or iron overload conditions',
    contraindications: [
      'داء ترسب الأصبغة الدموية (hemochromatosis) أو فرط حمل الحديد',
      'فقر الدم الانحلالي غير الناتج عن نقص الحديد',
      'القرحة الهضمية النشطة أو التهاب القولون التقرحي (حذر نسبي)'
    ],
    mechanismOfAction: 'Provides elemental iron for incorporation into hemoglobin, myoglobin, and various enzyme systems required for oxygen transport and cellular metabolism',
    mechanismOfActionAr: 'يوفر الحديد الأولي للاندماج في الهيموجلوبين والميوجلوبين وأنظمة إنزيمية متنوعة مطلوبة لنقل الأكسجين والاستقلاب الخلوي',
    halfLife: 'N/A (incorporated into body iron stores)',
    monitoringParameters: [
      'الهيموجلوبين والهيماتوكريت (تحسن متوقع خلال 2-4 أسابيع)',
      'فيريتين الدم ومخزون الحديد',
      'الأعراض الهضمية (إمساك، غثيان)',
      'لون البراز (تلون أسود طبيعي متوقع)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'فيتامين C (عصير البرتقال) يحسن الامتصاص بشكل ملحوظ',
      'الشاي والقهوة ومنتجات الألبان ومضادات الحموضة تقلل الامتصاص بشكل كبير - يفصل بساعتين',
      'يُفضل تناوله على معدة فارغة لأقصى امتصاص، لكن يمكن تناوله مع طعام خفيف لتقليل تهيج المعدة'
    ],
    pearls: [
      'يجب تخزينه بعيداً تماماً عن متناول الأطفال - الجرعة الزائدة من أقراص الحديد من أخطر حالات التسمم الدوائي العرضي في الأطفال',
      'الإمساك والغثيان آثار جانبية شائعة جداً تقلل الالتزام - قد يساعد تبديل الشكل الصيدلاني أو تقسيم الجرعة',
      'الاستجابة العلاجية (ارتفاع الهيموجلوبين) تُقيّم بعد 2-4 أسابيع من العلاج المنتظم قبل الحكم على الفشل العلاجي'
    ]
  },
  {
    id: 'folic_acid',
    genericName: 'Folic Acid (Vitamin B9)',
    genericNameAr: 'حمض الفوليك (فيتامين ب9)',
    brandNames: ['Folvite', 'فولفيت'],
    drugClass: 'Vitamin Supplement',
    drugClassAr: 'مكمل فيتامين',
    category: 'OTC',
    route: ['PO', 'IM', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pharmacy', 'internal_medicine', 'pediatrics'],
    keyHighlights: [
      'المكمل الوقائي الأهم قبل وأثناء الحمل المبكر لمنع عيوب الأنبوب العصبي (السنسنة المشقوقة)',
      'قد يُخفي نقص فيتامين B12 بتصحيح فقر الدم الضخم الأرومات مع استمرار تدهور الأعراض العصبية - يجب استبعاد نقص B12 أولاً',
      'ضروري كمكمل مع الميثوتريكسات لتقليل الآثار الجانبية دون التأثير على الفعالية العلاجية'
    ],
    indications: [
      {
        indication: 'Folate deficiency / Pregnancy supplementation (neural tube defect prevention) / Methotrexate adjunct',
        indicationAr: 'نقص الفولات / مكمل الحمل (الوقاية من عيوب الأنبوب العصبي) / مكمل مع الميثوتريكسات',
        adultDose: 'Deficiency: 1 mg PO once daily; Pregnancy prophylaxis: 0.4-0.8 mg once daily (4 mg if high risk)',
        adultDoseAr: 'النقص: 1 مج فموياً مرة يومياً؛ الوقاية في الحمل: 0.4-0.8 مج مرة يومياً (4 مج إذا كانت الخطورة عالية)',
        pediatricDose: '0.1-0.4 mg PO once daily depending on age',
        pediatricDoseAr: '0.1-0.4 مج فموياً مرة يومياً حسب العمر',
        route: 'PO/IM/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Dialyzable; supplemental dose may be needed with regular dialysis'
    },
    hepaticAdjustment: 'No specific adjustment needed',
    contraindications: [
      'فرط الحساسية لحمض الفوليك',
      'لا يُستخدم كعلاج وحيد لفقر الدم الضخم الأرومات غير المشخص قبل استبعاد نقص فيتامين B12'
    ],
    mechanismOfAction: 'Converted to tetrahydrofolate, an essential cofactor for DNA synthesis, amino acid metabolism, and red blood cell formation',
    mechanismOfActionAr: 'يُحول إلى رباعي هيدروفولات، وهو عامل مساعد أساسي لتخليق الحمض النووي واستقلاب الأحماض الأمينية وتكوين خلايا الدم الحمراء',
    halfLife: 'N/A (stored in liver and tissues)',
    monitoringParameters: [
      'مستوى الفولات الدموي',
      'الهيموجلوبين والهيماتوكريت وحجم الكرية الوسطي (MCV)',
      'مستوى فيتامين B12 (يجب استبعاد نقصه قبل العلاج الأحادي بالفوليك)',
      'الالتزام قبل وأثناء الحمل المبكر'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية سريرية كبيرة'
    ],
    pearls: [
      'يُنصح بالبدء قبل الحمل بشهر على الأقل لأن الأنبوب العصبي يتكون في الأسابيع الأولى جداً من الحمل غالباً قبل معرفة المرأة بحملها',
      'إعطاء حمض الفوليك وحده دون تقييم B12 في فقر الدم الضخم الأرومات قد يصحح فقر الدم ظاهرياً بينما يستمر التلف العصبي الناتج عن نقص B12 في التفاقم',
      'جزء أساسي وروتيني من بروتوكول العلاج بالميثوتريكسات لتقليل السمية الهضمية والكبدية دون التأثير على الفعالية المضادة للالتهاب'
    ]
  },
  {
    id: 'trimethoprim_sulfamethoxazole',
    genericName: 'Trimethoprim-Sulfamethoxazole (TMP-SMX)',
    genericNameAr: 'تريميثوبريم-سلفاميثوكسازول',
    brandNames: ['Bactrim', 'Septrin', 'باكتريم'],
    drugClass: 'Sulfonamide/Folate Antagonist Combination',
    drugClassAr: 'مركب سلفوناميد ومضاد حمض الفوليك',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'يرفع مستوى الوارفارين والفينيتوين والسلفونيل يوريا بشكل كبير - من أخطر التفاعلات الدوائية الشائعة',
      'جرعات عالية تُستخدم للوقاية والعلاج من الالتهاب الرئوي بالمتكيسة الرئوية (PJP) في مرضى نقص المناعة',
      'يُمنع في الثلث الأخير من الحمل وحديثي الولادة - خطر اليرقان النووي (kernicterus)'
    ],
    indications: [
      {
        indication: 'Urinary tract infection / Pneumocystis jirovecii pneumonia (treatment and prophylaxis) / MRSA skin infections',
        indicationAr: 'عدوى المسالك البولية / الالتهاب الرئوي بالمتكيسة الرئوية (علاج ووقاية) / عدوى جلدية بالمكورات العنقودية المقاومة',
        adultDose: 'UTI: 1 DS tablet (160/800 mg) PO twice daily; PJP treatment: 15-20 mg/kg/day (TMP component) IV/PO divided every 6-8 hours',
        adultDoseAr: 'عدوى المسالك البولية: قرص واحد مضاعف التركيز (160/800 مج) فموياً مرتين يومياً؛ علاج PJP: 15-20 مج/كجم/يوم (مكون التريميثوبريم) وريدياً/فموياً مقسمة كل 6-8 ساعات',
        pediatricDose: '8-12 mg/kg/day (TMP component) divided every 12 hours (ages 2 months+)',
        pediatricDoseAr: '8-12 مج/كجم/يوم (مكون التريميثوبريم) مقسمة كل 12 ساعة (من عمر شهرين فأكبر)',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Reduce dose by 50%',
      crclBelow10: 'Avoid use if possible; if necessary, reduce dose by 50% and use with extreme caution',
      hemodialysis: 'Dialyzable; administer supplemental dose after dialysis session'
    },
    hepaticAdjustment: 'Avoid in severe hepatic impairment or liver damage',
    contraindications: [
      'الحمل في الثلث الأخير',
      'حديثو الولادة دون عمر شهرين',
      'نقص إنزيم G6PD الشديد (خطر انحلال دم)',
      'فقر الدم الضخم الأرومات الناتج عن نقص الفولات',
      'فرط الحساسية للسلفوناميدات',
      'القصور الكلوي أو الكبدي الشديد'
    ],
    blackBoxWarning: 'Sulfonamides have been associated with severe reactions including Stevens-Johnson syndrome, toxic epidermal necrolysis, fulminant hepatic necrosis, and blood dyscrasias',
    blackBoxWarningAr: 'ارتبطت السلفوناميدات بتفاعلات خطيرة شملت متلازمة ستيفنز جونسون وانحلال البشرة السمي ونخر الكبد الخاطف واضطرابات دموية',
    mechanismOfAction: 'Sequentially blocks two steps in bacterial folate synthesis: sulfamethoxazole inhibits dihydropteroate synthase, trimethoprim inhibits dihydrofolate reductase',
    mechanismOfActionAr: 'يحجب بشكل متتالي خطوتين في تخليق الفولات البكتيري: السلفاميثوكسازول يثبط ديهيدروبتيروات سينثيز، والتريميثوبريم يثبط ديهيدروفولات ريدكتيز',
    halfLife: '8-10 hours (trimethoprim), 10 hours (sulfamethoxazole)',
    monitoringParameters: [
      'وظائف الكلى والبوتاسيوم في الدم',
      'تعداد الدم الكامل عند الاستخدام المطول',
      'علامات الطفح الجلدي أو فرط الحساسية',
      'INR في المرضى على الوارفارين',
      'سكر الدم في مرضى السكري على السلفونيل يوريا'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُنصح بزيادة شرب السوائل لتقليل خطر تبلور السلفوناميد في الكلى',
      'الكحول قد يزيد الآثار الجانبية الهضمية'
    ],
    pearls: [
      'التفاعل مع الوارفارين من أخطر وأكثر التفاعلات الدوائية شيوعاً في الممارسة السريرية - يتطلب مراقبة INR عن كثب عند الدمج',
      'من أكثر الأسباب شيوعاً للطفح الجلدي الدوائي والتفاعلات الجلدية الخطيرة بين المضادات الحيوية',
      'يسبب أحياناً فرط بوتاسيوم الدم خاصة بالجرعات العالية أو في القصور الكلوي - يُراقب البوتاسيوم بانتظام'
    ]
  },
  {
    id: 'nitrofurantoin',
    genericName: 'Nitrofurantoin',
    genericNameAr: 'نيتروفورانتوين',
    brandNames: ['Macrobid', 'Macrodantin', 'ماكروبيد'],
    drugClass: 'Nitrofuran Antibiotic',
    drugClassAr: 'مضاد حيوي من فئة النيتروفوران',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'غير فعال إلا في عدوى المسالك البولية السفلية - يتركز في البول ولا يحقق مستوى علاجي في الدم أو الأنسجة',
      'يُمنع عند CrCl أقل من 30-60 مل/دقيقة (حسب المرجع) لعدم كفاية تركيزه في البول وزيادة السمية الجهازية',
      'آمن وفعال في الحمل باستثناء قرب الولادة (38-42 أسبوع) - خطر فقر دم انحلالي عند حديثي الولادة بنقص G6PD'
    ],
    indications: [
      {
        indication: 'Uncomplicated lower urinary tract infection (cystitis) / UTI prophylaxis',
        indicationAr: 'عدوى المسالك البولية السفلية غير المعقدة (التهاب المثانة) / الوقاية من عدوى المسالك البولية المتكررة',
        adultDose: 'Macrobid (SR): 100 mg PO twice daily for 5-7 days; Prophylaxis: 50-100 mg PO once daily at bedtime',
        adultDoseAr: 'ماكروبيد (ممتد المفعول): 100 مج فموياً مرتين يومياً لمدة 5-7 أيام؛ الوقاية: 50-100 مج فموياً مرة يومياً عند النوم',
        pediatricDose: '5-7 mg/kg/day divided every 6 hours (ages 1 month+)',
        pediatricDoseAr: '5-7 مج/كجم/يوم مقسمة كل 6 ساعات (من عمر شهر فأكبر)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Avoid use if CrCl less than 30-60 mL/min (per reference); insufficient urinary concentration and increased systemic toxicity risk',
      crclBelow10: 'Contraindicated; ineffective and increased toxicity risk',
      hemodialysis: 'Contraindicated; not effective and accumulates toxic metabolites'
    },
    hepaticAdjustment: 'Avoid in significant hepatic impairment; discontinue if signs of hepatotoxicity develop',
    contraindications: [
      'القصور الكلوي (CrCl أقل من 30-60 مل/دقيقة حسب المرجع)',
      'حديثو الولادة دون عمر شهر',
      'الحمل عند الولادة (38-42 أسبوعاً) بسبب خطر فقر دم انحلالي عند الوليد',
      'نقص إنزيم G6PD',
      'انقطاع البول'
    ],
    blackBoxWarning: 'Pulmonary reactions (acute, subacute, and chronic), hepatotoxicity, and peripheral neuropathy have occurred with prolonged therapy; use with caution especially in elderly patients',
    blackBoxWarningAr: 'تفاعلات رئوية (حادة وتحت حادة ومزمنة) وسمية كبدية واعتلال عصبي محيطي حدثت مع العلاج المطول؛ يُستخدم بحذر خاصة في المرضى المسنين',
    mechanismOfAction: 'Reduced by bacterial flavoproteins to reactive intermediates that damage bacterial DNA, ribosomal proteins, and other macromolecules',
    mechanismOfActionAr: 'يُختزل بواسطة الفلافوبروتينات البكتيرية إلى وسائط تفاعلية تتلف الحمض النووي البكتيري والبروتينات الريبوسومية وجزيئات كبيرة أخرى',
    halfLife: '20-60 minutes',
    monitoringParameters: [
      'وظائف الكلى قبل البدء وأثناء العلاج المطول',
      'وظائف الرئة والأعراض التنفسية خاصة مع الاستخدام الوقائي المزمن',
      'وظائف الكبد عند الاستخدام المطول',
      'علامات الاعتلال العصبي المحيطي'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُفضل تناوله مع الطعام لتحسين الامتصاص وتقليل الاضطراب الهضمي',
      'يلون البول بلون بني داكن (طبيعي وغير ضار)'
    ],
    pearls: [
      'الاستخدام الوقائي المزمن (لأشهر أو سنوات) يحمل خطراً تراكمياً للتليف الرئوي والاعتلال العصبي المحيطي - يحتاج إعادة تقييم دورية',
      'لا يُستخدم أبداً لعلاج التهاب الحويضة والكلية أو أي عدوى مسالك بولية علوية لعدم وصوله لمستوى علاجي في أنسجة الكلى',
      'خيار ممتاز وآمن نسبياً لعلاج التهاب المثانة البسيط أثناء الحمل باستثناء الفترة القريبة من الولادة'
    ]
  },
  {
    id: 'ketamine',
    genericName: 'Ketamine',
    genericNameAr: 'كيتامين',
    brandNames: ['Ketalar', 'كيتالار'],
    drugClass: 'Dissociative Anesthetic/NMDA Receptor Antagonist',
    drugClassAr: 'مخدر تفارقي / مضاد مستقبلات NMDA',
    category: 'Controlled',
    route: ['IV', 'IM', 'Intranasal'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'pharmacy', 'nursing'],
    keyHighlights: [
      'من المخدرات القليلة التي تحافظ على استقرار التنفس والدورة الدموية - مفيد جداً في المرضى غير المستقرين ديموغرافياً',
      'يُستخدم بجرعات تحت التخديرية كمسكن قوي بديل للأفيونات ولعلاج الاكتئاب المقاوم (إسكيتامين)',
      'تفاعلات الاستيقاظ (هلوسات، كوابيس) شائعة - البنزوديازيبينات المرافقة تقللها'
    ],
    indications: [
      {
        indication: 'Procedural sedation / Induction of anesthesia / Analgesia (sub-dissociative dose) / Status epilepticus (refractory, adjunct)',
        indicationAr: 'التخدير الإجرائي / بدء التخدير العام / التسكين (جرعة تحت التفارقية) / الحالة الصرعية المقاومة (مساعد)',
        adultDose: 'Procedural sedation: 1-2 mg/kg IV or 4-5 mg/kg IM; Analgesia: 0.1-0.3 mg/kg IV',
        adultDoseAr: 'التخدير الإجرائي: 1-2 مج/كجم وريدياً أو 4-5 مج/كجم عضلياً؛ التسكين: 0.1-0.3 مج/كجم وريدياً',
        pediatricDose: '1-2 mg/kg IV or 4-5 mg/kg IM for procedural sedation',
        pediatricDoseAr: '1-2 مج/كجم وريدياً أو 4-5 مج/كجم عضلياً للتخدير الإجرائي',
        route: 'IV/IM/Intranasal'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed; titrate to effect',
      hemodialysis: 'Not significantly dialyzed; titrate to clinical effect'
    },
    hepaticAdjustment: 'Use with caution; reduce dose in significant hepatic impairment',
    contraindications: [
      'ارتفاع ضغط الدم الشديد غير المتحكم به',
      'تمدد الأوعية الدموية أو تاريخ سكتة دماغية حديثة (حذر نسبي)',
      'الذهان النشط غير المستقر (حذر)',
      'زيادة الضغط داخل الجمجمة الشديدة (حذر، أقل إطلاقاً مما كان يُعتقد سابقاً)'
    ],
    mechanismOfAction: 'Non-competitively antagonizes NMDA glutamate receptors, producing dissociative anesthesia, analgesia, and amnesia while preserving airway reflexes and hemodynamic stability',
    mechanismOfActionAr: 'يضاد بشكل غير تنافسي مستقبلات NMDA للجلوتامات، منتجاً تخديراً تفارقياً وتسكيناً وفقدان ذاكرة مع الحفاظ على منعكسات مجرى الهواء واستقرار الدورة الدموية',
    halfLife: '2.5-3 hours',
    monitoringParameters: [
      'ضغط الدم ومعدل ضربات القلب (قد يزيدان)',
      'معدل التنفس وتشبع الأكسجين',
      'علامات الهلوسة أو تفاعلات الاستيقاظ غير السارة',
      'إفراز اللعاب الزائد (قد يحتاج مضاد كولين مساعد)'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'لا توجد تفاعلات غذائية ذات أهمية (يُعطى حقناً في بيئة طبية مراقبة)'
    ],
    pearls: [
      'أصبح خياراً مفضلاً متزايداً في طوارئ الصدمة وإصابات متعددة بسبب الحفاظ على استقرار الدورة الدموية خلافاً لمعظم المخدرات الأخرى',
      'الجرعات المنخفضة جداً تحت التفارقية أصبحت أداة قيمة لتسكين الألم الحاد وتقليل استخدام الأفيونات',
      'إسكيتامين (الشكل النقي أحادي الإينانتيومر) معتمد الآن لعلاج الاكتئاب المقاوم للعلاج تحت إشراف طبي صارم'
    ]
  },
  {
    id: 'n_acetylcysteine',
    genericName: 'N-Acetylcysteine (NAC)',
    genericNameAr: 'ن-أسيتيل سيستئين',
    brandNames: ['Acetadote', 'Mucomyst', 'أسيتادوت'],
    drugClass: 'Antidote (Glutathione Precursor) / Mucolytic',
    drugClassAr: 'ترياق (سلائف الجلوتاثيون) / مذيب للبلغم',
    category: 'Rx',
    route: ['PO', 'IV', 'Inhalation'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'pharmacy', 'internal_medicine'],
    keyHighlights: [
      'الترياق النوعي الوحيد الفعال للتسمم بالأسيتامينوفين - فعاليته القصوى عند الإعطاء خلال 8-10 ساعات من التناول',
      'مخطط Rumack-Matthew يحدد الحاجة للعلاج بناءً على مستوى الأسيتامينوفين الدموي والوقت منذ التناول',
      'التسريب الوريدي السريع للجرعة الأولى قد يسبب تفاعلاً تأقياني كاذب (احمرار، طفح، تشنج قصبي) - يتطلب تسريباً أبطأ عند حدوثه'
    ],
    indications: [
      {
        indication: 'Acetaminophen (paracetamol) overdose / Prevention of contrast-induced nephropathy (controversial) / Mucolytic (inhaled)',
        indicationAr: 'جرعة زائدة من الأسيتامينوفين (باراسيتامول) / الوقاية من اعتلال الكلى الناتج عن الصبغة (مثير للجدل) / مذيب للبلغم (استنشاق)',
        adultDose: 'IV protocol: 150 mg/kg over 1 hour, then 50 mg/kg over 4 hours, then 100 mg/kg over 16 hours; Oral: 140 mg/kg loading then 70 mg/kg every 4 hours x17 doses',
        adultDoseAr: 'بروتوكول وريدي: 150 مج/كجم خلال ساعة، ثم 50 مج/كجم خلال 4 ساعات، ثم 100 مج/كجم خلال 16 ساعة؛ فموي: 140 مج/كجم جرعة تحميل ثم 70 مج/كجم كل 4 ساعات لـ17 جرعة',
        pediatricDose: 'Same weight-based protocol as adults, adjusted for pediatric weight',
        pediatricDoseAr: 'نفس البروتوكول حسب الوزن كالبالغين، معدل حسب وزن الطفل',
        route: 'PO/IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not significantly affected; continue standard protocol'
    },
    hepaticAdjustment: 'No adjustment needed; used specifically to treat hepatotoxicity',
    contraindications: [
      'لا يوجد مضاد استطباب حقيقي في علاج التسمم المهدد للحياة بالأسيتامينوفين',
      'حذر نسبي في تاريخ الربو الشديد (الشكل الاستنشاقي قد يسبب تشنجاً قصبياً)'
    ],
    mechanismOfAction: 'Replenishes hepatic glutathione stores, which conjugate and neutralize the toxic acetaminophen metabolite NAPQI, preventing hepatocellular damage',
    mechanismOfActionAr: 'يجدد مخزون الجلوتاثيون الكبدي الذي يقترن بالمستقلب السام NAPQI الناتج عن الأسيتامينوفين ويحيّده، فيمنع تلف الخلايا الكبدية',
    halfLife: '5.6 hours',
    monitoringParameters: [
      'مستوى الأسيتامينوفين الدموي (على مخطط Rumack-Matthew)',
      'وظائف الكبد (AST, ALT, INR) كل 12-24 ساعة',
      'علامات التفاعل التأقياني الكاذب أثناء التسريب الوريدي',
      'وظائف الكلى'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'الشكل الفموي له رائحة وطعم كبريتي كريه قوي - يُفضل تخفيفه بمشروب غازي أو عصير بارد لتحسين القبول'
    ],
    pearls: [
      'الفعالية الوقائية للكبد شبه كاملة عند البدء خلال 8 ساعات من التناول، وتتناقص بشكل كبير بعد ذلك لكن يبقى العلاج مفيداً حتى بعد 24 ساعة',
      'التفاعل التأقياني الكاذب أثناء جرعة التحميل الوريدية السريعة شائع نسبياً ويُدار بإبطاء معدل التسريب وليس بالضرورة إيقاف العلاج',
      'يُبدأ العلاج فوراً في حالات الاشتباه القوي بجرعة زائدة خطيرة دون انتظار نتيجة المستوى الدموي إذا كان التأخير سيتجاوز 8 ساعات من التناول'
    ]
  },
  {
    id: 'activated_charcoal',
    genericName: 'Activated Charcoal',
    genericNameAr: 'الفحم المنشط',
    brandNames: ['Actidose', 'أكتيدوز'],
    drugClass: 'Adsorbent (Gastrointestinal Decontamination)',
    drugClassAr: 'ماص (إزالة تلوث الجهاز الهضمي)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'pharmacy', 'nursing'],
    keyHighlights: [
      'الفعالية القصوى عند الإعطاء خلال ساعة واحدة من تناول السم - الفائدة تتناقص بشكل كبير بعد ذلك',
      'غير فعال ضد المعادن الثقيلة والكحوليات والحديد والليثيوم والأحماض/القلويات القوية',
      'يُمنع في حالة تدني مستوى الوعي دون حماية مجرى الهواء - خطر الاستنشاق الرئوي القاتل'
    ],
    indications: [
      {
        indication: 'Acute oral poisoning/overdose (gastrointestinal decontamination within 1 hour)',
        indicationAr: 'التسمم الفموي الحاد/الجرعة الزائدة (إزالة تلوث الجهاز الهضمي خلال ساعة)',
        adultDose: '25-100 g PO/NG single dose (1 g/kg); multi-dose protocol (25-50 g every 2-4 hours) for specific toxins',
        adultDoseAr: '25-100 جرام فموياً/أنبوب أنفي معدي جرعة واحدة (1 جم/كجم)؛ بروتوكول متعدد الجرعات (25-50 جم كل 2-4 ساعات) لسموم محددة',
        pediatricDose: '1 g/kg PO/NG (max 50 g) single dose',
        pediatricDoseAr: '1 جم/كجم فموياً/أنبوب أنفي معدي (حد أقصى 50 جم) جرعة واحدة',
        route: 'PO/NG'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'No adjustment needed',
      hemodialysis: 'Not applicable; not systemically absorbed'
    },
    hepaticAdjustment: 'No adjustment needed; not systemically absorbed',
    contraindications: [
      'انخفاض مستوى الوعي دون حماية مجرى الهواء (خطر استنشاق)',
      'انسداد معوي أو ثقب الجهاز الهضمي',
      'ابتلاع مواد أكالة (أحماض/قلويات قوية)',
      'ابتلاع هيدروكربونات مع خطر استنشاق عالٍ',
      'نزيف هضمي نشط أو جراحة هضمية حديثة'
    ],
    mechanismOfAction: 'Adsorbs toxins and drugs onto its large surface area within the gastrointestinal tract, preventing systemic absorption',
    mechanismOfActionAr: 'يمتص السموم والأدوية على سطحه الكبير المساحة داخل الجهاز الهضمي، فيمنع الامتصاص الجهازي',
    halfLife: 'N/A (not systemically absorbed)',
    monitoringParameters: [
      'مستوى الوعي ومجرى الهواء قبل وأثناء الإعطاء',
      'أصوات الأمعاء وحركتها (خطر الانسداد مع الجرعات المتكررة)',
      'علامات الاستنشاق الرئوي',
      'الاستجابة السريرية للتسمم'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يمتص أيضاً العديد من الأدوية الفموية الأخرى المعطاة بالتزامن - يفصل بساعتين عن أي دواء فموي ضروري آخر'
    ],
    pearls: [
      'حماية مجرى الهواء (أحياناً عبر التنبيب) ضرورية قبل الإعطاء في أي مريض ذي وعي متدنٍ أو غير قادر على حماية مجراه الهوائي',
      'غير فعال إطلاقاً ضد الكحولات (الإيثانول، الميثانول، الإيثيلين جليكول) والمعادن الثقيلة والحديد والليثيوم - "لا PHAILS" اختصار شائع للسموم غير المستجيبة',
      'الجرعات المتعددة (multi-dose activated charcoal) تُستخدم لزيادة إخراج بعض السموم ذات الدورة المعوية الكبدية مثل الكاربامازيبين والفينوباربيتال'
    ]
  },
  {
    id: 'naproxen',
    genericName: 'Naproxen',
    genericNameAr: 'نابروكسين',
    brandNames: ['Aleve', 'Naprosyn', 'نابروسين'],
    drugClass: 'Nonsteroidal Anti-Inflammatory Drug (NSAID)',
    drugClassAr: 'مضاد التهاب غير ستيرويدي',
    category: 'OTC',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pharmacy', 'internal_medicine', 'cardiology'],
    keyHighlights: [
      'نصف عمر طويل نسبياً (12-17 ساعة) يسمح بجرعتين يومياً فقط خلافاً لمعظم NSAIDs الأخرى',
      'قد يكون أقل خطورة قلبية وعائية من بعض NSAIDs الانتقائية لـ COX-2 حسب بعض الدراسات، لكن الخطر يبقى موجوداً',
      'تحذير صندوق أسود مشترك لجميع NSAIDs لخطر القلب والأوعية والنزيف الهضمي'
    ],
    indications: [
      {
        indication: 'Osteoarthritis / Rheumatoid arthritis / Acute pain / Dysmenorrhea / Fever',
        indicationAr: 'الفصال العظمي / التهاب المفاصل الروماتويدي / الألم الحاد / عسر الطمث / الحمى',
        adultDose: '250-500 mg PO twice daily (OTC: 220 mg every 8-12 hours, max 660 mg/day)',
        adultDoseAr: '250-500 مج فموياً مرتين يومياً (بدون وصفة: 220 مج كل 8-12 ساعة، حد أقصى 660 مج/يوم)',
        pediatricDose: '5-7 mg/kg PO twice daily (ages 2+) for juvenile idiopathic arthritis',
        pediatricDoseAr: '5-7 مج/كجم فموياً مرتين يومياً (من عمر سنتين) لالتهاب المفاصل الروماتويدي اليفعي',
        maxDose: '1500 mg/day (prescription)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Use with caution; avoid if possible',
      crclBelow10: 'Avoid use; significant risk of worsening renal function',
      hemodialysis: 'Avoid use; not recommended in dialysis-dependent patients'
    },
    hepaticAdjustment: 'Use with caution; avoid in severe hepatic impairment',
    contraindications: [
      'تاريخ النزيف الهضمي أو القرحة النشطة المرتبطة بـ NSAIDs',
      'جراحة مجازة الشريان التاجي (فترة حول الجراحة)',
      'القصور الكلوي المتقدم',
      'فشل القلب الشديد',
      'الثلث الثالث من الحمل',
      'الربو المحرض بالأسبرين أو NSAIDs'
    ],
    blackBoxWarning: 'Increased risk of serious cardiovascular thrombotic events, myocardial infarction, and stroke; increased risk of serious gastrointestinal bleeding, ulceration, and perforation',
    blackBoxWarningAr: 'زيادة خطر الأحداث الخثارية القلبية الوعائية الخطيرة واحتشاء عضلة القلب والسكتة الدماغية؛ زيادة خطر النزيف الهضمي والتقرح والانثقاب الخطير',
    mechanismOfAction: 'Non-selectively inhibits cyclooxygenase (COX-1 and COX-2), reducing prostaglandin synthesis and inflammation',
    mechanismOfActionAr: 'يثبط بشكل غير انتقائي إنزيم الأكسدة الحلقية (COX-1 وCOX-2) فيقلل تخليق البروستاجلاندين والالتهاب',
    halfLife: '12-17 hours',
    monitoringParameters: [
      'وظائف الكلى',
      'علامات النزيف الهضمي',
      'ضغط الدم',
      'علامات احتباس السوائل أو تفاقم فشل القلب'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُفضل تناوله مع الطعام أو الحليب لتقليل تهيج المعدة',
      'الكحول يزيد خطر النزيف الهضمي'
    ],
    pearls: [
      'الجرعتان اليوميتان فقط (بدلاً من 3-4 مرات مع معظم NSAIDs الأخرى) تجعله خياراً مريحاً للالتزام في الحالات المزمنة',
      'يُمنع بعد الأسبوع 30 من الحمل بسبب خطر الإغلاق المبكر للقناة الشريانية الجنينية',
      'يُستخدم بحذر بالجرعات الدنيا الفعالة ولأقصر مدة ممكنة بسبب المخاطر القلبية والهضمية المشتركة لجميع NSAIDs'
    ]
  },
  {
    id: 'celecoxib',
    genericName: 'Celecoxib',
    genericNameAr: 'سيليكوكسيب',
    brandNames: ['Celebrex', 'سيليبريكس'],
    drugClass: 'Selective COX-2 Inhibitor (NSAID)',
    drugClassAr: 'مثبط انتقائي لـ COX-2 (مضاد التهاب غير ستيرويدي)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pharmacy', 'internal_medicine', 'cardiology'],
    keyHighlights: [
      'خطر نزيف هضمي أقل من NSAIDs التقليدية بفضل الانتقائية لـ COX-2 لكن الخطر القلبي الوعائي موجود وربما أعلى',
      'يحتوي على مجموعة سلفوناميد - يُمنع في فرط الحساسية للسلفا',
      'بديل مفيد للمرضى ذوي الخطورة العالية للنزيف الهضمي لكن يحتاجون مسكناً مضاداً للالتهاب'
    ],
    indications: [
      {
        indication: 'Osteoarthritis / Rheumatoid arthritis / Acute pain / Ankylosing spondylitis',
        indicationAr: 'الفصال العظمي / التهاب المفاصل الروماتويدي / الألم الحاد / التهاب الفقار اللاصق',
        adultDose: '100-200 mg PO once or twice daily',
        adultDoseAr: '100-200 مج فموياً مرة أو مرتين يومياً',
        pediatricDose: '50-100 mg PO twice daily based on weight (ages 2+) for juvenile idiopathic arthritis',
        pediatricDoseAr: '50-100 مج فموياً مرتين يومياً حسب الوزن (من عمر سنتين) لالتهاب المفاصل الروماتويدي اليفعي',
        maxDose: '400 mg/day',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'Use with caution; avoid if possible',
      crclBelow10: 'Avoid use; significant risk of worsening renal function',
      hemodialysis: 'Avoid use; not recommended'
    },
    hepaticAdjustment: 'Reduce dose by 50% in moderate hepatic impairment; avoid in severe impairment',
    contraindications: [
      'فرط الحساسية للسلفوناميدات',
      'تاريخ تفاعل حساسية مفرطة تجاه الأسبرين أو NSAIDs أخرى (ربو، شرى، تفاعل تأقي)',
      'جراحة مجازة الشريان التاجي (فترة حول الجراحة)',
      'فشل القلب الشديد',
      'الثلث الثالث من الحمل'
    ],
    blackBoxWarning: 'Increased risk of serious cardiovascular thrombotic events, myocardial infarction, and stroke; increased risk of serious gastrointestinal bleeding, ulceration, and perforation',
    blackBoxWarningAr: 'زيادة خطر الأحداث الخثارية القلبية الوعائية الخطيرة واحتشاء عضلة القلب والسكتة الدماغية؛ زيادة خطر النزيف الهضمي والتقرح والانثقاب الخطير',
    mechanismOfAction: 'Selectively inhibits cyclooxygenase-2 (COX-2), reducing inflammatory prostaglandin synthesis while sparing COX-1-mediated gastric protection',
    mechanismOfActionAr: 'يثبط انتقائياً إنزيم الأكسدة الحلقية-2 (COX-2) فيقلل تخليق البروستاجلاندين الالتهابي مع الحفاظ النسبي على الحماية المعدية الوسيطة بـ COX-1',
    halfLife: '11 hours',
    monitoringParameters: [
      'وظائف الكلى',
      'ضغط الدم',
      'علامات الأحداث القلبية الوعائية',
      'علامات النزيف الهضمي (أقل شيوعاً لكن ممكنة)',
      'وظائف الكبد'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يمكن تناوله مع أو بدون طعام',
      'الكحول يزيد خطر النزيف الهضمي والسمية الكبدية'
    ],
    pearls: [
      'الخيار المفضل بين NSAIDs للمرضى ذوي الخطورة العالية للنزيف الهضمي الذين يحتاجون مسكناً مضاداً للالتهاب',
      'لا يؤثر على وظيفة الصفائح (خلافاً لـ NSAIDs غير الانتقائية) لذا لا يحتاج إيقافاً قبل الجراحة لهذا السبب تحديداً',
      'يجب تجنبه تماماً في المرضى ذوي الحساسية المعروفة للسلفا بسبب احتوائه على مجموعة سلفوناميد كيميائية'
    ]
  },
  {
    id: 'amoxicillin',
    genericName: 'Amoxicillin',
    genericNameAr: 'أموكسيسيلين',
    brandNames: ['Amoxil', 'أموكسيل'],
    drugClass: 'Aminopenicillin',
    drugClassAr: 'أمينوبنسلين',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['pediatrics', 'infectious_diseases', 'pharmacy'],
    keyHighlights: [
      'من أكثر المضادات الحيوية وصفاً عند الأطفال بسبب الطعم المقبول والأمان العالي والفعالية ضد العقديات الشائعة',
      'طفح جلدي غير تحسسي شائع جداً عند الإصابة بعدوى فيروس إبشتاين بار (عدد وحيدات النوى) - يجب تمييزه عن حساسية حقيقية للبنسلين',
      'لا يغطي البكتيريا المنتجة للبيتالاكتاماز - يُستبدل بالأوجمنتين (مع كلافولانيك أسيد) عند الاشتباه بمقاومة'
    ],
    indications: [
      {
        indication: 'Acute otitis media / Streptococcal pharyngitis / Community-acquired pneumonia (non-severe) / Sinusitis',
        indicationAr: 'التهاب الأذن الوسطى الحاد / التهاب البلعوم العقدي / الالتهاب الرئوي المكتسب من المجتمع (غير شديد) / التهاب الجيوب الأنفية',
        adultDose: '500-875 mg PO every 8-12 hours',
        adultDoseAr: '500-875 مج فموياً كل 8-12 ساعة',
        pediatricDose: '80-90 mg/kg/day divided every 12 hours (high-dose for otitis media)',
        pediatricDoseAr: '80-90 مج/كجم/يوم مقسمة كل 12 ساعة (جرعة عالية لالتهاب الأذن الوسطى)',
        maxDose: '4000 mg/day',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed (CrCl 10-30: extend interval to every 12 hours)',
      crclBelow10: 'Reduce dose and extend interval to every 24 hours',
      hemodialysis: 'Dialyzable; administer supplemental dose after dialysis session'
    },
    hepaticAdjustment: 'No specific adjustment needed',
    contraindications: [
      'فرط الحساسية للبنسلينات',
      'تاريخ تفاعل حساسية شديد تجاه أي بيتالاكتام'
    ],
    mechanismOfAction: 'Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins, causing cell lysis',
    mechanismOfActionAr: 'يثبط تخليق جدار الخلية البكتيرية عن طريق الارتباط ببروتينات ربط البنسلين مسبباً تحلل الخلية',
    halfLife: '1-1.5 hours',
    monitoringParameters: [
      'علامات الحساسية المفرطة',
      'الاستجابة السريرية للعدوى',
      'الطفح الجلدي (تمييز الحساسية الحقيقية عن الطفح المرتبط بعدوى EBV)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'يمكن تناوله مع أو بدون طعام'
    ],
    pearls: [
      'الطفح الجلدي الذي يظهر عند إعطائه لمريض مصاب بعدوى وحيدات النوى العدوائية (EBV) شائع جداً (تصل نسبته لأكثر من 90%) وليس بالضرورة حساسية حقيقية للبنسلين',
      'الجرعة العالية (80-90 مج/كجم/يوم) أصبحت المعيار لعلاج التهاب الأذن الوسطى لتغطية المكورات الرئوية ذات الحساسية المتوسطة للبنسلين',
      'من أكثر المضادات الحيوية أماناً خلال الحمل ولجميع الأعمار شاملة حديثي الولادة'
    ]
  },
  {
    id: 'bisoprolol',
    genericName: 'Bisoprolol',
    genericNameAr: 'بيسوبرولول',
    brandNames: ['Zebeta', 'Concor', 'كونكور'],
    drugClass: 'Beta-1 Selective Blocker',
    drugClassAr: 'حاصر بيتا-1 انتقائي',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology', 'internal_medicine', 'pharmacy'],
    keyHighlights: [
      'من حاصرات بيتا الثلاثة الموثقة بتحسين البقيا في فشل القلب مع انخفاض الكسر القذفي (مع ميتوبرولول سكسينات وكارفيديلول)',
      'انتقائية عالية جداً لبيتا-1 عند الجرعات المنخفضة إلى المتوسطة - أقل تأثيراً على القصبات الهوائية',
      'نصف عمر طويل (10-12 ساعة) يسمح بجرعة واحدة يومية ثابتة'
    ],
    indications: [
      {
        indication: 'Heart failure with reduced ejection fraction / Hypertension / Chronic stable angina',
        indicationAr: 'فشل القلب مع انخفاض الكسر القذفي / ارتفاع ضغط الدم / الذبحة الصدرية المزمنة المستقرة',
        adultDose: 'Heart failure: start 1.25 mg PO once daily, titrate slowly to target 10 mg once daily; Hypertension: 2.5-10 mg once daily',
        adultDoseAr: 'فشل القلب: البدء بـ 1.25 مج فموياً مرة يومياً، يُعدل تدريجياً ببطء للوصول لهدف 10 مج مرة يومياً؛ ارتفاع ضغط الدم: 2.5-10 مج مرة يومياً',
        maxDose: '20 mg/day (hypertension); 10 mg/day (heart failure)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed; start with lower dose',
      crclBelow10: 'Maximum 10 mg/day; start with lower dose and titrate slowly',
      hemodialysis: 'Not significantly dialyzed; dose per clinical response'
    },
    hepaticAdjustment: 'Maximum 10 mg/day in significant hepatic impairment',
    contraindications: [
      'بطء القلب الجيبي الشديد',
      'الحصار الأذيني البطيني من الدرجة الثانية أو الثالثة',
      'الصدمة القلبية',
      'فشل القلب الحاد غير المعاوض',
      'الربو الشديد غير المستقر (حذر نسبي)'
    ],
    mechanismOfAction: 'Selectively blocks beta-1 adrenergic receptors, reducing heart rate, myocardial contractility, and renin release',
    mechanismOfActionAr: 'يحجب انتقائياً مستقبلات بيتا-1 الأدرينالية فيقلل معدل ضربات القلب وانقباضية عضلة القلب وإفراز الرينين',
    halfLife: '10-12 hours',
    monitoringParameters: [
      'معدل ضربات القلب وضغط الدم',
      'علامات تفاقم فشل القلب عند بدء العلاج أو زيادة الجرعة',
      'سكر الدم في مرضى السكري (قد يخفي أعراض نقص السكر)',
      'وظائف الكلى والكبد لتعديل الجرعة'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يمكن تناوله مع أو بدون طعام',
      'يُتجنب الكحول لزيادة خطر انخفاض الضغط'
    ],
    pearls: [
      'في فشل القلب، يُبدأ بجرعات منخفضة جداً (1.25 مج) ويُعدل تدريجياً على مدى أسابيع لتجنب تفاقم الأعراض الحاد',
      'التدريج البطيء والإيقاف التدريجي (وليس المفاجئ) ضروريان في كل من البدء والإيقاف لتجنب الارتداد أو تفاقم فشل القلب',
      'الانتقائية العالية لبيتا-1 تجعله خياراً أفضل نسبياً من حاصرات بيتا غير الانتقائية في مرضى الانسداد الرئوي المزمن الخفيف إلى المتوسط'
    ]
  },
  {
    id: 'fluoxetine',
    genericName: 'Fluoxetine',
    genericNameAr: 'فلوكستين',
    brandNames: ['Prozac', 'بروزاك'],
    drugClass: 'Selective Serotonin Reuptake Inhibitor (SSRI)',
    drugClassAr: 'مثبط انتقائي لإعادة امتصاص السيروتونين',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine', 'pharmacy', 'nursing'],
    keyHighlights: [
      'نصف عمر طويل جداً (4-6 أيام، مستقلب نشط حتى 16 يوماً) - أقل أعراض انسحاب عند نسيان جرعة أو الإيقاف',
      'مثبط قوي لـ CYP2D6 وCYP3A4 - تفاعلات دوائية كثيرة تستمر لأسابيع حتى بعد الإيقاف بسبب نصف العمر الطويل',
      'الخيار الوحيد المعتمد لعلاج الاكتئاب عند الأطفال (من عمر 8 سنوات)'
    ],
    indications: [
      {
        indication: 'Major depressive disorder / OCD / Bulimia nervosa / Panic disorder',
        indicationAr: 'الاكتئاب الجسيم / الوسواس القهري / الشره العصبي / اضطراب الهلع',
        adultDose: 'Start 20 mg PO once daily (morning), titrate to 20-80 mg/day',
        adultDoseAr: 'البدء بـ 20 مج فموياً مرة يومياً (صباحاً)، يُعدل إلى 20-80 مج/يوم',
        pediatricDose: '10-20 mg PO once daily for ages 8-17 (depression); may titrate based on response',
        pediatricDoseAr: '10-20 مج فموياً مرة يومياً للأعمار 8-17 (الاكتئاب)؛ يمكن التعديل حسب الاستجابة',
        maxDose: '80 mg/day',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed',
      crclBelow10: 'Use with caution; consider lower dose or less frequent dosing',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose or use lower frequency (e.g., every other day) in hepatic impairment due to prolonged half-life',
    contraindications: [
      'الاستخدام المتزامن أو خلال 14 يوماً من مثبطات MAO (يجب الانتظار 5 أسابيع بعد إيقاف الفلوكستين قبل بدء MAOI بسبب نصف العمر الطويل)',
      'الاستخدام المتزامن مع بيموزايد أو ثيوريدازين',
      'فرط الحساسية للفلوكستين'
    ],
    blackBoxWarning: 'Increased risk of suicidal thinking and behavior in children, adolescents, and young adults up to age 24, particularly during initial treatment and dose changes',
    blackBoxWarningAr: 'زيادة خطر الأفكار والسلوكيات الانتحارية لدى الأطفال والمراهقين والشباب حتى سن 24، خاصة في بداية العلاج وتغيير الجرعة',
    mechanismOfAction: 'Selectively inhibits presynaptic serotonin reuptake, increasing serotonergic neurotransmission',
    mechanismOfActionAr: 'يثبط انتقائياً إعادة امتصاص السيروتونين قبل المشبكي فيزيد النقل العصبي السيروتونيني',
    halfLife: '4-6 days (norfluoxetine active metabolite: 4-16 days)',
    monitoringParameters: [
      'المزاج والأفكار الانتحارية (خاصة في أول شهرين)',
      'علامات متلازمة السيروتونين',
      'الوزن (قد يسبب فقدان وزن خفيف خلافاً لبعض SSRIs الأخرى)',
      'التفاعلات الدوائية نظراً لتثبيطه القوي لإنزيمات الكبد'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يمكن تناوله مع أو بدون طعام',
      'يُتجنب الكحول لزيادة التأثير المركزي'
    ],
    pearls: [
      'نصف العمر الطويل جداً يجعله الخيار المفضل للمرضى ذوي الالتزام الضعيف بالجرعات المنتظمة، لكنه يعني أيضاً استمرار التفاعلات الدوائية لأسابيع بعد الإيقاف',
      'يجب الانتظار 5 أسابيع على الأقل بعد إيقاف الفلوكستين قبل بدء أي مثبط MAO بسبب طول نصف عمره ومستقلبه النشط',
      'الخيار الأول المعتمد للاكتئاب عند الأطفال والمراهقين بفضل أكبر قاعدة بيانات أمان وفعالية في هذه الفئة العمرية'
    ]
  },
  {
    id: 'promethazine',
    genericName: 'Promethazine',
    genericNameAr: 'بروميثازين',
    brandNames: ['Phenergan', 'فينيرجان'],
    drugClass: 'Phenothiazine Antihistamine/Antiemetic',
    drugClassAr: 'مضاد هيستامين ومضاد قيء من فئة الفينوثيازين',
    category: 'Rx',
    route: ['PO', 'IV', 'IM', 'PR'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'pharmacy', 'nursing'],
    keyHighlights: [
      'تحذير صندوق أسود للنخر النسيجي الشديد عند التسرب خارج الوعاء أو الحقن داخل الشريان عن طريق الخطأ - يُفضل الحقن العضلي العميق',
      'يُمنع تماماً في الأطفال دون عمر سنتين - خطر تثبيط تنفسي قاتل',
      'تأثير مهدئ قوي ومضاد كوليني - حذر في المسنين (قائمة Beers)'
    ],
    indications: [
      {
        indication: 'Nausea and vomiting / Motion sickness / Allergic reactions / Preoperative sedation',
        indicationAr: 'الغثيان والتقيؤ / دوار الحركة / التفاعلات التحسسية / التسكين قبل الجراحة',
        adultDose: '12.5-25 mg PO/IV/IM/PR every 4-6 hours as needed',
        adultDoseAr: '12.5-25 مج فموياً/وريدياً/عضلياً/شرجياً كل 4-6 ساعات عند الحاجة',
        pediatricDose: '0.25-0.5 mg/kg PO/PR every 4-6 hours (ages 2+ only)',
        pediatricDoseAr: '0.25-0.5 مج/كجم فموياً/شرجياً كل 4-6 ساعات (من عمر سنتين فأكبر فقط)',
        maxDose: '25 mg per IV dose (diluted and given slowly into a running IV line)',
        route: 'PO/IV/IM/PR'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment needed',
      crcl10to50: 'No adjustment needed; use with caution',
      crclBelow10: 'Use with caution; consider dose reduction',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution; avoid or reduce dose in significant hepatic impairment',
    contraindications: [
      'الأطفال دون عمر سنتين',
      'الغيبوبة أو تثبيط الجهاز العصبي المركزي الشديد',
      'فرط الحساسية للفينوثيازينات',
      'الحقن داخل الشريان أو تحت الجلد (يُمنع تماماً)'
    ],
    blackBoxWarning: 'Severe tissue injury including gangrene can result from inadvertent intra-arterial injection or extravasation; contraindicated in children under 2 years due to risk of fatal respiratory depression',
    blackBoxWarningAr: 'إصابة نسيجية شديدة شملت الغرغرينا قد تنتج عن الحقن داخل الشريان عن طريق الخطأ أو التسرب خارج الوعاء؛ ممنوع في الأطفال دون عمر سنتين لخطر التثبيط التنفسي القاتل',
    mechanismOfAction: 'Antagonizes histamine H1 receptors and dopamine D2 receptors in the chemoreceptor trigger zone; also has significant anticholinergic and alpha-adrenergic blocking effects',
    mechanismOfActionAr: 'يضاد مستقبلات الهيستامين H1 ومستقبلات الدوبامين D2 في منطقة المستقبلات الكيميائية المحفزة؛ كما له تأثيرات مضادة للكولين وحاصرة لألفا الأدرينالي ملحوظة',
    halfLife: '9-16 hours',
    monitoringParameters: [
      'مستوى الوعي ومعدل التنفس',
      'موقع الحقن الوريدي (علامات تسرب أو حقن داخل شرياني)',
      'علامات الأعراض خارج الهرمية',
      'ضغط الدم (خطر انخفاض ضغط انتصابي)'
    ],
    pregnancyCategory: 'Use with Caution',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'يُمنع الكحول لزيادة التأثير المهدئ بشكل خطير'
    ],
    pearls: [
      'يُفضل الحقن العضلي العميق على الوريدي قدر الإمكان لتقليل خطر النخر النسيجي الشديد المرتبط بهذا الدواء تحديداً',
      'عند الإعطاء الوريدي الضروري، يجب التخفيف الجيد والحقن ببطء شديد في خط وريدي يعمل بتدفق جيد مع مراقبة علامات الألم أو الحرقان فوراً',
      'يُستخدم أحياناً كمساعد مع الأفيونات في تسكين الألم رغم عدم وجود دليل قوي على تحسين التسكين وزيادة خطر التثبيط التنفسي المضاعف'
    ]
  },
  {
    id: 'vasopressin',
    genericName: 'Vasopressin (Antidiuretic Hormone)',
    genericNameAr: 'فازوبريسين (الهرمون المضاد لإدرار البول)',
    brandNames: ['Pitressin', 'Vasostrict', 'فازوستريكت'],
    drugClass: 'Antidiuretic Hormone / Vasopressor (V1/V2 Receptor Agonist)',
    drugClassAr: 'هرمون مضاد لإدرار البول / رافع لضغط الدم',
    category: 'Rx',
    route: ['IV infusion'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology'],
    keyHighlights: [
      'Catecholamine-sparing second-line vasopressor in septic shock',
      'No direct inotropic or chronotropic effect — minimal arrhythmogenicity',
      'Also used for vasodilatory shock refractory to norepinephrine and for diabetes insipidus'
    ],
    indications: [
      {
        indication: 'Septic shock (adjunct to norepinephrine)',
        indicationAr: 'الصدمة الإنتانية (مساعد للنورإبينفرين)',
        adultDose: '0.01–0.04 units/min fixed-dose continuous IV infusion',
        adultDoseAr: '0.01-0.04 وحدة/دقيقة تسريب وريدي مستمر بجرعة ثابتة',
        pediatricDose: 'Not routinely established; specialist use only',
        pediatricDoseAr: 'غير مستقر بشكل روتيني؛ للاستخدام المتخصص فقط',
        maxDose: '0.04 units/min (higher doses increase ischemic risk without added benefit)',
        duration: 'Continuous infusion, titrate off before norepinephrine',
        route: 'IV infusion'
      },
      {
        indication: 'GI hemorrhage (variceal bleeding) — historical/adjunct use',
        indicationAr: 'نزيف الجهاز الهضمي (دوالي المريء) - استخدام تاريخي/مساعد',
        adultDose: '0.2–0.4 units/min IV infusion, titrate to response',
        adultDoseAr: '0.2-0.4 وحدة/دقيقة تسريب وريدي، يُعدّل حسب الاستجابة',
        pediatricDose: 'Not established',
        pediatricDoseAr: 'غير مستقر',
        maxDose: '0.9 units/min',
        duration: 'Until bleeding controlled, then taper',
        route: 'IV infusion'
      },
      {
        indication: 'Central diabetes insipidus',
        indicationAr: 'البوال التفهي المركزي',
        adultDose: '5–10 units IM/SC 2–4 times daily as aqueous vasopressin',
        adultDoseAr: '5-10 وحدة عضلي/تحت الجلد 2-4 مرات يوميًا',
        pediatricDose: 'Specialist-guided weight-based dosing',
        pediatricDoseAr: 'جرعة حسب الوزن بإشراف متخصص',
        maxDose: 'Individualized',
        duration: 'Chronic — desmopressin generally preferred',
        route: 'IM/SC'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required; monitor fluid status',
      crclBelow10: 'Use with caution; monitor for fluid overload and hyponatremia',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment; use with caution in severe hepatic disease due to risk of fluid retention',
    contraindications: [
      'Known hypersensitivity to vasopressin',
      'Chronic nephritis with nitrogen retention (relative)',
      'Caution in coronary artery disease — can cause coronary vasoconstriction'
    ],
    mechanismOfAction: 'Activates V1 receptors on vascular smooth muscle causing vasoconstriction, and V2 receptors in renal collecting ducts causing water reabsorption; unlike catecholamines does not act on adrenergic receptors',
    mechanismOfActionAr: 'ينشط مستقبلات V1 في العضلات الملساء الوعائية مسببًا تضيق الأوعية، ومستقبلات V2 في الكلى مسببًا إعادة امتصاص الماء؛ لا يعمل على المستقبلات الأدرينالية',
    halfLife: '10–35 minutes',
    monitoringParameters: [
      'Blood pressure and perfusion (continuous)',
      'Serum sodium (hyponatremia risk)',
      'Signs of peripheral/mesenteric/digital ischemia',
      'Urine output',
      'Cardiac rhythm in coronary disease'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Fixed low-dose infusion (0.03 units/min) is typical — it is NOT titrated like catecholamines',
      'Added to norepinephrine in septic shock to reduce catecholamine dose and may reduce atrial fibrillation incidence',
      'Monitor extremities and digits closely — can cause severe peripheral ischemia at higher doses',
      'Desmopressin (DDAVP) is preferred for chronic diabetes insipidus due to V2 selectivity and longer duration'
    ]
  },
  {
    id: 'atropine',
    genericName: 'Atropine',
    genericNameAr: 'أتروبين',
    brandNames: ['Atropen', 'أتروبين'],
    drugClass: 'Anticholinergic (Muscarinic Antagonist)',
    drugClassAr: 'مضاد كوليني (مضاد للمستقبلات المسكارينية)',
    category: 'Rx',
    route: ['IV', 'IM', 'ophthalmic'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology'],
    keyHighlights: [
      'First-line for symptomatic bradycardia and organophosphate/nerve agent poisoning',
      'Blocks vagal effects on the heart via muscarinic receptor antagonism',
      'ACLS bradycardia dose differs dramatically from toxicology (poisoning) dosing'
    ],
    indications: [
      {
        indication: 'Symptomatic bradycardia (ACLS)',
        indicationAr: 'بطء القلب العرضي (دعم القلب المتقدم)',
        adultDose: '1 mg IV push every 3–5 minutes, max 3 mg total',
        adultDoseAr: '1 ملجم دفعة وريدية كل 3-5 دقائق، بحد أقصى 3 ملجم',
        pediatricDose: '0.02 mg/kg IV (min 0.1 mg, max single dose 0.5 mg child / 1 mg adolescent)',
        pediatricDoseAr: '0.02 ملجم/كجم وريدي (أدنى جرعة 0.1 ملجم)',
        maxDose: '3 mg total (adult)',
        duration: 'Single/repeated boluses as needed',
        route: 'IV'
      },
      {
        indication: 'Organophosphate/nerve agent poisoning',
        indicationAr: 'التسمم بالفوسفات العضوي/غازات الأعصاب',
        adultDose: '2–5 mg IV/IM every 5–10 minutes until secretions clear (may require 10s of mg)',
        adultDoseAr: '2-5 ملجم وريدي/عضلي كل 5-10 دقائق حتى تتحسن الإفرازات (قد تحتاج عشرات الملجم)',
        pediatricDose: '0.05 mg/kg IV/IM, repeat every 5–10 min as needed',
        pediatricDoseAr: '0.05 ملجم/كجم وريدي/عضلي، تكرر كل 5-10 دقائق',
        maxDose: 'Titrate to drying of secretions — no fixed ceiling in severe poisoning',
        duration: 'Until muscarinic toxicity resolves, pair with pralidoxime',
        route: 'IV/IM'
      },
      {
        indication: 'Preoperative antisialagogue / bradyarrhythmia prevention',
        indicationAr: 'مضاد للسيلان قبل الجراحة / منع بطء القلب',
        adultDose: '0.4–0.6 mg IM/IV preoperatively',
        adultDoseAr: '0.4-0.6 ملجم عضلي/وريدي قبل الجراحة',
        pediatricDose: '0.01–0.02 mg/kg IV/IM (min 0.1 mg)',
        pediatricDoseAr: '0.01-0.02 ملجم/كجم وريدي/عضلي',
        maxDose: '0.6 mg single preop dose',
        duration: 'Single preoperative dose',
        route: 'IV/IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'Use with caution; prolonged effect possible',
      hemodialysis: 'Not dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment required',
    contraindications: [
      'Narrow-angle glaucoma',
      'Tachycardia from thyrotoxicosis or cardiac causes unrelated to bradycardia',
      'Obstructive uropathy / paralytic ileus',
      'Myasthenia gravis (relative — antagonizes cholinergic therapy)'
    ],
    mechanismOfAction: 'Competitively blocks acetylcholine at muscarinic receptors, reducing vagal tone on the SA/AV node and inhibiting exocrine secretions',
    mechanismOfActionAr: 'يحجب الأسيتيل كولين تنافسيًا على المستقبلات المسكارينية، مما يقلل التأثير المبهمي على القلب ويثبط الإفرازات الغدية',
    halfLife: '2–3 hours',
    monitoringParameters: [
      'Heart rate and rhythm (ECG)',
      'Pupil size / secretions in poisoning management',
      'Mental status (anticholinergic toxicity)',
      'Urinary retention'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'In ACLS, doses below 0.5 mg can paradoxically worsen bradycardia via central vagal stimulation',
      'Ineffective for high-grade (Mobitz II/third-degree) AV block below the AV node — go straight to pacing',
      'In nerve agent/organophosphate poisoning, give alongside pralidoxime and benzodiazepines; doses needed can be massive and are titrated to drying of secretions, not heart rate',
      'Classic anticholinergic toxidrome: "hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter"'
    ]
  },
  {
    id: 'rocuronium',
    genericName: 'Rocuronium',
    genericNameAr: 'روكورونيوم',
    brandNames: ['Zemuron', 'زيمورون'],
    drugClass: 'Non-Depolarizing Neuromuscular Blocker (Aminosteroid)',
    drugClassAr: 'مرخي عضلي غير مزيل للاستقطاب',
    category: 'Rx',
    route: ['IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency'],
    keyHighlights: [
      'Fastest-onset non-depolarizing NMB — used for rapid sequence intubation when succinylcholine is contraindicated',
      'Reversed by sugammadex (direct binding) or neostigmine (acetylcholinesterase inhibitor)',
      'Patient must be sedated — rocuronium provides NO analgesia or sedation'
    ],
    indications: [
      {
        indication: 'Rapid sequence intubation',
        indicationAr: 'التنبيب السريع المتسلسل',
        adultDose: '1–1.2 mg/kg IV push for RSI (0.6 mg/kg for routine intubation)',
        adultDoseAr: '1-1.2 ملجم/كجم دفعة وريدية للتنبيب السريع (0.6 ملجم/كجم للتنبيب الروتيني)',
        pediatricDose: '0.6–1.2 mg/kg IV, similar weight-based dosing',
        pediatricDoseAr: '0.6-1.2 ملجم/كجم وريدي',
        maxDose: 'Weight-based; no fixed max',
        duration: 'Onset 45–60 sec, duration 30–60 min',
        route: 'IV'
      },
      {
        indication: 'Ongoing neuromuscular blockade in mechanically ventilated patients',
        indicationAr: 'استمرار الحصار العصبي العضلي في المرضى على التنفس الصناعي',
        adultDose: 'Maintenance infusion 10–12 mcg/kg/min, titrate to train-of-four',
        adultDoseAr: 'تسريب صيانة 10-12 ميكروجرام/كجم/دقيقة، يُعدّل حسب مراقبة التحريض الرباعي',
        pediatricDose: 'Specialist/ICU-guided weight-based infusion',
        pediatricDoseAr: 'تسريب حسب الوزن بإشراف العناية المركزة',
        maxDose: 'Titrate to clinical effect and train-of-four monitoring',
        duration: 'Continuous infusion with periodic holidays for neuro assessment',
        route: 'IV infusion'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required; monitor duration of effect',
      crclBelow10: 'Minimal renal clearance (mainly hepatobiliary) — generally safe but monitor for prolonged effect',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Prolonged duration of action in hepatic impairment — reduce dose and monitor train-of-four closely',
    contraindications: [
      'Known hypersensitivity to rocuronium or bromide',
      'Inability to secure airway or provide mechanical ventilation',
      'Use without adequate sedation/analgesia'
    ],
    blackBoxWarning: 'Must only be administered by personnel trained in airway management and mechanical ventilation; causes complete paralysis including respiratory muscles',
    blackBoxWarningAr: 'يجب أن يُعطى فقط من قبل أطقم مدربة على إدارة مجرى الهواء والتنفس الصناعي؛ يسبب شلل تام يشمل عضلات التنفس',
    mechanismOfAction: 'Competitively blocks acetylcholine at nicotinic receptors on the postsynaptic motor end plate, preventing depolarization and muscle contraction',
    mechanismOfActionAr: 'يحجب الأسيتيل كولين تنافسيًا على المستقبلات النيكوتينية في الصفيحة الحركية، مما يمنع الاستقطاب وتقلص العضلات',
    halfLife: '1–2 hours',
    monitoringParameters: [
      'Train-of-four neuromuscular monitoring',
      'Adequate sedation/analgesia (must be co-administered)',
      'Ventilator parameters',
      'Hepatic and renal function'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'NEVER give without ensuring adequate sedation first — awareness under paralysis is a devastating complication',
      'Onset is dose-dependent: 1.2 mg/kg achieves intubating conditions almost as fast as succinylcholine (~45–60 sec)',
      'Sugammadex can reverse even deep rocuronium blockade within minutes — critical for "can\'t intubate, can\'t ventilate" rescue',
      'Preferred over succinylcholine in hyperkalemia, malignant hyperthermia history, and neuromuscular disease'
    ]
  },
  {
    id: 'phytonadione',
    genericName: 'Phytonadione (Vitamin K1)',
    genericNameAr: 'فيتامين ك1 (فيتونادايون)',
    brandNames: ['Mephyton', 'Vitamin K', 'فيتامين ك'],
    drugClass: 'Fat-Soluble Vitamin / Coagulation Factor Synthesis Cofactor',
    drugClassAr: 'فيتامين قابل للذوبان في الدهون / عامل تخثر',
    category: 'Rx',
    route: ['PO', 'IV', 'SC'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology', 'internal_medicine'],
    keyHighlights: [
      'Specific reversal agent for warfarin-induced coagulopathy',
      'IV route carries small anaphylactoid reaction risk — give slowly, diluted',
      'Onset of INR correction: 6–12 hours (PO) vs faster but still delayed with IV — not for immediate bleeding (use with FFP/PCC)'
    ],
    indications: [
      {
        indication: 'Warfarin reversal — major bleeding or INR very elevated',
        indicationAr: 'إبطال تأثير الوارفارين - نزيف كبير أو INR مرتفع جدًا',
        adultDose: '10 mg slow IV infusion (with 4-factor PCC for major bleeding)',
        adultDoseAr: '10 ملجم تسريب وريدي بطيء (مع مركز عامل التخثر الرباعي في النزيف الكبير)',
        pediatricDose: '0.5–2 mg (infants) to 5–10 mg (adolescents) IV/PO based on severity',
        pediatricDoseAr: '0.5-2 ملجم (رضع) إلى 5-10 ملجم (مراهقون) وريدي/فموي',
        maxDose: '10 mg per dose; may repeat every 12 hours',
        duration: 'Repeat per INR response',
        route: 'IV'
      },
      {
        indication: 'Warfarin reversal — elevated INR without bleeding',
        indicationAr: 'إبطال الوارفارين - INR مرتفع بدون نزيف',
        adultDose: '1–2.5 mg PO (INR 4.5–10) or hold dose and monitor',
        adultDoseAr: '1-2.5 ملجم فموي (INR من 4.5 إلى 10) أو إيقاف الجرعة والمراقبة',
        pediatricDose: 'Specialist-guided, weight-based',
        pediatricDoseAr: 'بإشراف متخصص حسب الوزن',
        maxDose: '5 mg PO for very high INR without bleeding',
        duration: 'Single dose, recheck INR in 24 hours',
        route: 'PO'
      },
      {
        indication: 'Hemorrhagic disease of the newborn (prophylaxis)',
        indicationAr: 'المرض النزفي عند الوليد (وقاية)',
        adultDose: 'Not applicable',
        adultDoseAr: 'غير قابل للتطبيق',
        pediatricDose: '0.5–1 mg IM single dose within 1 hour of birth',
        pediatricDoseAr: '0.5-1 ملجم عضلي جرعة واحدة خلال ساعة من الولادة',
        maxDose: '1 mg',
        duration: 'Single dose at birth',
        route: 'IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required',
      hemodialysis: 'Not dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduced efficacy in severe hepatic synthetic dysfunction since clotting factors cannot be synthesized regardless of vitamin K availability',
    contraindications: [
      'Known hypersensitivity to phytonadione or its vehicle',
      'IV route in patients with severe allergic reaction history to the formulation (use SC/PO instead)'
    ],
    mechanismOfAction: 'Essential cofactor for hepatic gamma-glutamyl carboxylase, enabling activation of clotting factors II, VII, IX, and X; directly counteracts warfarin\'s inhibition of vitamin K epoxide reductase',
    mechanismOfActionAr: 'عامل مساعد أساسي لإنزيم الكربوكسيلاز الكبدي، يُنشّط عوامل التخثر II وVII وIX وX؛ يعاكس تثبيط الوارفارين لإنزيم إعادة تدوير فيتامين ك',
    halfLife: '1.5–3 hours (effect on INR delayed 6–12+ hours)',
    monitoringParameters: [
      'INR/PT (serially)',
      'Signs of anaphylactoid reaction during IV infusion (rare but serious)',
      'Bleeding signs/hemoglobin'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Safe',
    foodInteractions: [
      'Dietary vitamin K (leafy greens) does not interact with supplemental dosing but affects baseline warfarin requirements'
    ],
    pearls: [
      'For life-threatening bleeding, vitamin K ALONE is too slow — must combine with 4-factor prothrombin complex concentrate (PCC) or FFP for immediate factor replacement',
      'IV must be given slowly (over at least 20–30 minutes) diluted in compatible fluid to minimize anaphylactoid reaction risk',
      'Oral route has similar efficacy to IV for non-urgent reversal with a better safety profile',
      'Does not reverse direct oral anticoagulants (DOACs) — only effective for vitamin K antagonists like warfarin'
    ]
  },
  {
    id: 'protamine',
    genericName: 'Protamine Sulfate',
    genericNameAr: 'كبريتات البروتامين',
    brandNames: ['Protamine', 'بروتامين'],
    drugClass: 'Heparin Antagonist (Basic Protein)',
    drugClassAr: 'مضاد للهيبارين',
    category: 'Rx',
    route: ['IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology'],
    keyHighlights: [
      'Specific antidote for unfractionated heparin overdose/reversal',
      'Only partially reverses low molecular weight heparin (enoxaparin) — roughly 60%',
      'Rapid IV push can cause severe hypotension and anaphylaxis — give slowly'
    ],
    indications: [
      {
        indication: 'Unfractionated heparin reversal',
        indicationAr: 'إبطال الهيبارين غير المجزأ',
        adultDose: '1 mg protamine per 100 units heparin received in last 2–3 hours, slow IV over 10 min',
        adultDoseAr: '1 ملجم بروتامين لكل 100 وحدة هيبارين تم إعطاؤها خلال آخر 2-3 ساعات، وريدي بطيء خلال 10 دقائق',
        pediatricDose: 'Same ratio (1 mg per 100 units), weight-based total dose',
        pediatricDoseAr: 'نفس النسبة (1 ملجم لكل 100 وحدة)، حسب الوزن',
        maxDose: '50 mg per single dose',
        duration: 'Single dose, may repeat based on aPTT/ACT',
        route: 'IV'
      },
      {
        indication: 'Enoxaparin (LMWH) partial reversal',
        indicationAr: 'إبطال جزئي للإينوكسابارين',
        adultDose: '1 mg protamine per 1 mg enoxaparin given in last 8 hours (max ~60% reversal)',
        adultDoseAr: '1 ملجم بروتامين لكل 1 ملجم إينوكسابارين تم إعطاؤه خلال آخر 8 ساعات (إبطال جزئي بحد أقصى 60%)',
        pediatricDose: 'Same ratio, weight-based',
        pediatricDoseAr: 'نفس النسبة حسب الوزن',
        maxDose: '50 mg per dose',
        duration: 'Single dose',
        route: 'IV'
      },
      {
        indication: 'Post-cardiopulmonary bypass heparin reversal',
        indicationAr: 'إبطال الهيبارين بعد جراحة القلب المفتوح',
        adultDose: 'Dose calculated from total intraoperative heparin dose, typically 1–1.5 mg per 100 units',
        adultDoseAr: 'الجرعة تُحسب من إجمالي جرعة الهيبارين أثناء العملية، عادة 1-1.5 ملجم لكل 100 وحدة',
        pediatricDose: 'Weight and bypass-protocol based, cardiac anesthesia team guided',
        pediatricDoseAr: 'حسب الوزن وبروتوكول المجازة بإشراف فريق تخدير القلب',
        maxDose: 'Per institutional protocol',
        duration: 'Single dose at end of bypass',
        route: 'IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required',
      hemodialysis: 'Not dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment required',
    contraindications: [
      'Known hypersensitivity to protamine',
      'Use with caution in fish allergy (derived from fish sperm)',
      'Prior protamine exposure or NPH insulin use (higher anaphylaxis risk, use caution)'
    ],
    blackBoxWarning: 'Can cause severe hypotension, bradycardia, and anaphylactoid/anaphylactic reactions, especially with rapid administration; risk is higher in fish allergy, vasectomy, or prior protamine/NPH insulin exposure',
    blackBoxWarningAr: 'قد يسبب انخفاض ضغط حاد وبطء قلب وتفاعلات تحسسية شديدة، خاصة مع الإعطاء السريع؛ الخطر أعلى في حساسية السمك أو قطع القناة الدافقة أو التعرض السابق للبروتامين أو أنسولين NPH',
    mechanismOfAction: 'Strongly basic (cationic) protein that binds to acidic (anionic) heparin, forming an inactive stable salt complex that neutralizes anticoagulant activity',
    mechanismOfActionAr: 'بروتين قاعدي قوي يرتبط بالهيبارين الحمضي مكونًا معقدًا مستقرًا غير فعال يُحيّد التأثير المضاد للتخثر',
    halfLife: '~7 minutes',
    monitoringParameters: [
      'aPTT or ACT (activated clotting time)',
      'Blood pressure and heart rate during/after administration',
      'Signs of anaphylaxis/anaphylactoid reaction',
      'Pulmonary artery pressure in cardiac surgery (risk of pulmonary vasoconstriction)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'Patients with fish allergy have increased risk of hypersensitivity reaction (protamine is derived from fish sperm)'
    ],
    pearls: [
      'Overdosing protamine can itself cause an anticoagulant/bleeding effect — always calculate dose from actual heparin received, not empirically',
      'Patients on NPH insulin, with prior vasectomy, or fish allergy have higher anaphylaxis risk — consider premedication or slower infusion',
      'Give slowly over at least 10 minutes — rapid push is a major cause of severe hypotension',
      'Only partially reverses LMWH anti-Xa activity; andexanet alfa is the specific reversal for factor Xa inhibitors, not protamine'
    ]
  },
  {
    id: 'tranexamic_acid',
    genericName: 'Tranexamic Acid',
    genericNameAr: 'حمض الترانيكساميك',
    brandNames: ['Cyklokapron', 'TXA', 'سايكلوكابرون'],
    drugClass: 'Antifibrinolytic (Lysine Analog)',
    drugClassAr: 'مضاد لانحلال الفيبرين',
    category: 'Rx',
    route: ['IV', 'PO', 'topical'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'internal_medicine'],
    keyHighlights: [
      'Reduces mortality in trauma hemorrhage when given within 3 hours of injury (CRASH-2 trial)',
      'First-line for postpartum hemorrhage and heavy menstrual bleeding',
      'Avoid in active thromboembolic disease and in hematuria from upper urinary tract (risk of clot retention/obstruction)'
    ],
    indications: [
      {
        indication: 'Major trauma hemorrhage',
        indicationAr: 'نزيف الصدمات الكبير',
        adultDose: '1 g IV over 10 min, then 1 g IV over 8 hours, started within 3 hours of injury',
        adultDoseAr: '1 جرام وريدي خلال 10 دقائق، ثم 1 جرام وريدي خلال 8 ساعات، يُبدأ خلال 3 ساعات من الإصابة',
        pediatricDose: '15 mg/kg (max 1 g) IV bolus, then 2 mg/kg/hr infusion',
        pediatricDoseAr: '15 ملجم/كجم (بحد أقصى 1 جرام) دفعة وريدية، ثم تسريب 2 ملجم/كجم/ساعة',
        maxDose: '2 g total in first 24 hours (trauma protocol)',
        duration: '8–24 hours depending on protocol',
        route: 'IV'
      },
      {
        indication: 'Postpartum hemorrhage',
        indicationAr: 'نزيف ما بعد الولادة',
        adultDose: '1 g IV over 10 min, repeat once after 30 min if bleeding continues',
        adultDoseAr: '1 جرام وريدي خلال 10 دقائق، تُكرر مرة بعد 30 دقيقة إذا استمر النزيف',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: '2 g total',
        duration: 'Within 3 hours of delivery for maximal benefit',
        route: 'IV'
      },
      {
        indication: 'Heavy menstrual bleeding',
        indicationAr: 'النزيف الطمثي الغزير',
        adultDose: '1300 mg (or 1 g) PO three times daily during menses, max 5 days',
        adultDoseAr: '1300 ملجم (أو 1 جرام) فموي 3 مرات يوميًا أثناء الدورة، بحد أقصى 5 أيام',
        pediatricDose: 'Not routinely established',
        pediatricDoseAr: 'غير مستقر بشكل روتيني',
        maxDose: '4 g/day',
        duration: 'During menstrual flow only',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'Reduce dose by 50%',
      crclBelow10: 'Reduce dose by 75%; use with caution',
      hemodialysis: 'Dose after dialysis; dialyzable to some degree'
    },
    hepaticAdjustment: 'No specific adjustment required',
    contraindications: [
      'Active thromboembolic disease (DVT, PE, stroke)',
      'Subarachnoid hemorrhage (relative — risk of cerebral ischemia)',
      'Acquired defective color vision (unable to monitor for ocular toxicity with long-term use)',
      'Known hypersensitivity'
    ],
    mechanismOfAction: 'Competitively inhibits plasminogen activation to plasmin by binding lysine-binding sites, preventing fibrin degradation and stabilizing clot formation',
    mechanismOfActionAr: 'يثبط تنافسيًا تنشيط البلازمينوجين إلى بلازمين عبر الارتباط بمواقع الليسين، مما يمنع تحلل الفيبرين ويثبت الجلطة',
    halfLife: '2–3 hours',
    monitoringParameters: [
      'Signs of ongoing bleeding/hemoglobin',
      'Signs of thromboembolism (DVT/PE)',
      'Renal function (dose adjustment)',
      'Visual symptoms with prolonged use'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Must be given within 3 hours of trauma/injury — benefit diminishes and may reverse (increased mortality) if given later',
      'Does not increase thromboembolic events in most major trials (CRASH-2, WOMAN) despite being an antifibrinolytic',
      'Cheap, stable at room temperature, and increasingly used in prehospital/military trauma care',
      'Avoid in hematuria of upper tract origin — can cause ureteral clot obstruction'
    ]
  },
  {
    id: 'diazepam',
    genericName: 'Diazepam',
    genericNameAr: 'ديازيبام',
    brandNames: ['Valium', 'فاليوم'],
    drugClass: 'Benzodiazepine (Long-Acting)',
    drugClassAr: 'بنزوديازيبين طويل المفعول',
    category: 'Controlled',
    route: ['PO', 'IV', 'IM', 'rectal'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'internal_medicine', 'pediatrics'],
    keyHighlights: [
      'First-line benzodiazepine for status epilepticus and alcohol withdrawal protocols',
      'Long half-life with active metabolites leads to prolonged sedation, especially in elderly/hepatic impairment',
      'Rectal gel formulation used for pediatric seizure rescue therapy'
    ],
    indications: [
      {
        indication: 'Status epilepticus / acute seizure',
        indicationAr: 'الحالة الصرعية / النوبة الحادة',
        adultDose: '5–10 mg IV, repeat every 10–15 min as needed (max 30 mg)',
        adultDoseAr: '5-10 ملجم وريدي، تُكرر كل 10-15 دقيقة حسب الحاجة (بحد أقصى 30 ملجم)',
        pediatricDose: '0.2–0.5 mg/kg IV or 0.5 mg/kg rectal gel (max 20 mg)',
        pediatricDoseAr: '0.2-0.5 ملجم/كجم وريدي أو 0.5 ملجم/كجم هلام شرجي (بحد أقصى 20 ملجم)',
        maxDose: '30 mg in an 8-hour period (adult)',
        duration: 'Acute treatment, repeat as needed',
        route: 'IV/rectal'
      },
      {
        indication: 'Alcohol withdrawal (symptom-triggered or fixed-schedule)',
        indicationAr: 'انسحاب الكحول (موجه بالأعراض أو بجدول ثابت)',
        adultDose: '10–20 mg PO/IV every 1–4 hours per CIWA-Ar protocol',
        adultDoseAr: '10-20 ملجم فموي/وريدي كل 1-4 ساعات وفق بروتوكول تقييم الانسحاب',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: 'Per institutional withdrawal protocol, can require very high cumulative doses',
        duration: '3–7 days typically, tapering',
        route: 'PO/IV'
      },
      {
        indication: 'Muscle spasm / spasticity',
        indicationAr: 'تشنج العضلات / التشنج اللاإرادي',
        adultDose: '2–10 mg PO 3–4 times daily',
        adultDoseAr: '2-10 ملجم فموي 3-4 مرات يوميًا',
        pediatricDose: '0.12–0.8 mg/kg/day PO divided doses (per specific indication)',
        pediatricDoseAr: '0.12-0.8 ملجم/كجم/يوم فموي مقسمة',
        maxDose: '40 mg/day',
        duration: 'Short-term, taper after extended use',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'Use with caution — active metabolites may accumulate',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose substantially in hepatic impairment — markedly prolonged half-life due to active metabolites (desmethyldiazepam); consider lorazepam or oxazepam instead (no active hepatic metabolites)',
    contraindications: [
      'Narrow-angle glaucoma',
      'Severe respiratory insufficiency',
      'Sleep apnea syndrome',
      'Severe hepatic impairment',
      'Myasthenia gravis',
      'Known hypersensitivity to benzodiazepines'
    ],
    blackBoxWarning: 'Concomitant use with opioids may result in profound sedation, respiratory depression, coma, and death',
    blackBoxWarningAr: 'الاستخدام المصاحب مع الأفيونيات قد يؤدي إلى تخدير شديد وتثبيط تنفسي وغيبوبة ووفاة',
    mechanismOfAction: 'Enhances GABA-A receptor-mediated chloride influx by binding the benzodiazepine site, increasing frequency of channel opening and producing CNS depression',
    mechanismOfActionAr: 'يعزز تدفق الكلوريد عبر مستقبلات GABA-A بالارتباط بموقع البنزوديازيبين، مما يزيد تكرار فتح القناة ويُحدث تثبيطًا للجهاز العصبي المركزي',
    halfLife: '20–100 hours (parent drug); active metabolite desmethyldiazepam up to 200 hours',
    monitoringParameters: [
      'Level of sedation / respiratory status',
      'Seizure frequency/control',
      'CIWA-Ar score in withdrawal management',
      'Signs of accumulation in elderly/hepatic impairment (excessive sedation)'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'Avoid alcohol (additive CNS/respiratory depression)',
      'Grapefruit juice may increase diazepam levels via CYP3A4 inhibition'
    ],
    pearls: [
      'Long half-life with active metabolites means significant accumulation risk with repeated dosing, especially in elderly and hepatic impairment',
      'Rectal gel (Diastat) is a key pediatric/home rescue therapy for prolonged seizures outside the hospital',
      'Lorazepam is often preferred over diazepam for status epilepticus in current guidelines due to a more favorable CNS distribution profile with comparable efficacy',
      'Flumazenil can reverse benzodiazepine effect but risks precipitating seizures in chronic users — use cautiously'
    ]
  },
  {
    id: 'bupropion',
    genericName: 'Bupropion',
    genericNameAr: 'بوبروبيون',
    brandNames: ['Wellbutrin', 'Zyban', 'ويلبوترين'],
    drugClass: 'Atypical Antidepressant (NDRI — Norepinephrine-Dopamine Reuptake Inhibitor)',
    drugClassAr: 'مضاد اكتئاب غير نمطي (مثبط إعادة امتصاص النورإبينفرين والدوبامين)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine'],
    keyHighlights: [
      'Lacks sexual dysfunction and weight gain common with SSRIs — favored for depression with fatigue/low libido',
      'FDA-approved for smoking cessation (Zyban) in addition to depression and seasonal affective disorder',
      'Lowers seizure threshold — contraindicated in seizure disorders and eating disorders'
    ],
    indications: [
      {
        indication: 'Major depressive disorder',
        indicationAr: 'اضطراب الاكتئاب الشديد',
        adultDose: 'IR: 100 mg BID–TID; SR: 150 mg BID; XL: 150 mg once daily, titrate to 300–450 mg/day',
        adultDoseAr: 'سريع المفعول: 100 ملجم مرتين-3 مرات يوميًا؛ XL: 150 ملجم مرة يوميًا، يُزاد إلى 300-450 ملجم/يوم',
        pediatricDose: 'Not established for depression in children; limited adolescent data',
        pediatricDoseAr: 'غير مستقر للاكتئاب عند الأطفال؛ بيانات محدودة للمراهقين',
        maxDose: '450 mg/day (XL); 400 mg/day (SR); 450 mg/day IR divided',
        duration: 'Chronic, reassess at 4–6 weeks',
        route: 'PO'
      },
      {
        indication: 'Smoking cessation',
        indicationAr: 'الإقلاع عن التدخين',
        adultDose: '150 mg SR once daily for 3 days, then 150 mg BID, start 1–2 weeks before quit date',
        adultDoseAr: '150 ملجم SR مرة يوميًا لـ 3 أيام، ثم 150 ملجم مرتين يوميًا، يُبدأ 1-2 أسبوع قبل تاريخ الإقلاع',
        pediatricDose: 'Not established',
        pediatricDoseAr: 'غير مستقر',
        maxDose: '300 mg/day',
        duration: '7–12 weeks typical course',
        route: 'PO'
      },
      {
        indication: 'Seasonal affective disorder (prevention)',
        indicationAr: 'الاضطراب الوجداني الفصلي (وقاية)',
        adultDose: 'XL 150 mg once daily, started in autumn, titrate to 300 mg if needed',
        adultDoseAr: 'XL 150 ملجم مرة يوميًا، يُبدأ في الخريف، يُزاد إلى 300 ملجم حسب الحاجة',
        pediatricDose: 'Not established',
        pediatricDoseAr: 'غير مستقر',
        maxDose: '300 mg/day',
        duration: 'Through winter season, taper in early spring',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'Consider reduced dose/frequency; metabolites accumulate',
      crclBelow10: 'Reduce dose and/or frequency significantly (e.g., 100 mg once daily or 150 mg every other day)',
      hemodialysis: 'Not well dialyzed; dose as per severe renal impairment, monitor closely'
    },
    hepaticAdjustment: 'Severe cirrhosis: maximum 100 mg every other day (IR) or 150 mg every other day (SR); avoid XL formulation in severe hepatic impairment',
    contraindications: [
      'Seizure disorder (current or past)',
      'Current or prior diagnosis of bulimia or anorexia nervosa',
      'Abrupt discontinuation of alcohol, benzodiazepines, or sedatives',
      'Use of MAO inhibitors within 14 days',
      'Known hypersensitivity'
    ],
    blackBoxWarning: 'Increased risk of suicidal thinking and behavior in children, adolescents, and young adults; monitor closely for clinical worsening',
    blackBoxWarningAr: 'خطر متزايد للتفكير والسلوك الانتحاري عند الأطفال والمراهقين والشباب؛ يجب المراقبة الدقيقة لأي تدهور سريري',
    mechanismOfAction: 'Inhibits neuronal reuptake of norepinephrine and dopamine with minimal effect on serotonin; exact antidepressant mechanism not fully established',
    mechanismOfActionAr: 'يثبط إعادة امتصاص النورإبينفرين والدوبامين العصبي مع تأثير ضئيل على السيروتونين',
    halfLife: '21 hours (parent); active metabolites have longer half-lives',
    monitoringParameters: [
      'Mood and suicidality, especially early in treatment',
      'Blood pressure (can cause hypertension)',
      'Seizure history/risk factors',
      'Weight (typically neutral or mild loss, unlike SSRIs)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'Avoid alcohol (lowers seizure threshold further)'
    ],
    pearls: [
      'A favored choice when sexual side effects or weight gain from SSRIs are problematic, or when fatigue/hypersomnia predominate',
      'Dose-dependent seizure risk — never exceed max daily dose and avoid in patients with seizure history or eating disorders',
      'Can be combined with SSRIs for augmentation in partial responders (watch for additive stimulant-like effects)',
      'Immediate-release formulation has highest seizure risk; XL (extended-release) once-daily dosing has the best tolerability and adherence'
    ]
  },
  {
    id: 'cisplatin',
    genericName: 'Cisplatin',
    genericNameAr: 'سيسبلاتين',
    brandNames: ['Platinol', 'بلاتينول'],
    drugClass: 'Platinum-Based Alkylating-Like Chemotherapy Agent',
    drugClassAr: 'عامل علاج كيميائي يحتوي على البلاتين',
    category: 'Rx',
    route: ['IV infusion'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['oncology'],
    keyHighlights: [
      'Highly emetogenic — mandates aggressive triple antiemetic prophylaxis (5-HT3 antagonist + NK1 antagonist + dexamethasone)',
      'Dose-limiting nephrotoxicity requires aggressive IV hydration before and after infusion',
      'Cumulative peripheral neuropathy and ototoxicity are irreversible dose-limiting toxicities'
    ],
    indications: [
      {
        indication: 'Testicular cancer (combination chemotherapy, e.g., BEP)',
        indicationAr: 'سرطان الخصية (علاج كيميائي مركب)',
        adultDose: '20 mg/m² IV daily for 5 days every 3 weeks, or per regimen protocol',
        adultDoseAr: '20 ملجم/م² وريدي يوميًا لـ 5 أيام كل 3 أسابيع، أو حسب بروتوكول البرنامج',
        pediatricDose: 'Protocol-specific, specialist oncology dosing only',
        pediatricDoseAr: 'حسب البروتوكول، بإشراف أخصائي أورام فقط',
        maxDose: 'Per cycle protocol; cumulative lifetime dose limited by nephro/neuro/ototoxicity',
        duration: 'Multiple cycles per oncology protocol',
        route: 'IV infusion'
      },
      {
        indication: 'Ovarian cancer / NSCLC / head and neck cancer / bladder cancer',
        indicationAr: 'سرطان المبيض / سرطان الرئة غير صغير الخلايا / سرطان الرأس والرقبة / سرطان المثانة',
        adultDose: '75–100 mg/m² IV every 3–4 weeks, often combined with other agents',
        adultDoseAr: '75-100 ملجم/م² وريدي كل 3-4 أسابيع، غالبًا مع عوامل أخرى',
        pediatricDose: 'Protocol-specific',
        pediatricDoseAr: 'حسب البروتوكول',
        maxDose: 'Per cycle protocol',
        duration: 'Multiple cycles, typically 4–6',
        route: 'IV infusion'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'Standard dose with adequate pre/post hydration',
      crcl10to50: 'Reduce dose by 25–50%; consider carboplatin substitution',
      crclBelow10: 'Generally avoided — consider carboplatin as a less nephrotoxic alternative',
      hemodialysis: 'Avoid if possible; specialist oncology/nephrology co-management required'
    },
    hepaticAdjustment: 'No formal dose adjustment established; use with caution in severe hepatic impairment',
    contraindications: [
      'Pre-existing significant renal impairment (relative, requires dose reduction/alternative)',
      'Pre-existing significant hearing impairment (relative)',
      'Myelosuppression (active severe)',
      'Known hypersensitivity to platinum compounds'
    ],
    blackBoxWarning: 'Causes cumulative dose-dependent nephrotoxicity, ototoxicity, and peripheral neuropathy; severe nausea/vomiting; myelosuppression; anaphylactic-like reactions possible',
    blackBoxWarningAr: 'يسبب سمية كلوية وسمعية واعتلال عصبي محيطي تراكمي مرتبط بالجرعة؛ غثيان وقيء شديدين؛ تثبيط نقي العظام؛ تفاعلات تحسسية شديدة محتملة',
    mechanismOfAction: 'Forms intrastrand and interstrand DNA crosslinks, disrupting DNA replication and transcription, triggering apoptosis in rapidly dividing cells',
    mechanismOfActionAr: 'يشكل روابط متصالبة داخل وبين خيوط الحمض النووي، معطلاً النسخ والتضاعف، مما يحفز موت الخلايا المبرمج',
    halfLife: '58–73 hours (terminal, due to protein binding)',
    monitoringParameters: [
      'Renal function (creatinine, magnesium, electrolytes) before each cycle',
      'Audiometry for ototoxicity',
      'CBC with differential (myelosuppression)',
      'Peripheral neuropathy assessment',
      'Electrolytes — especially magnesium and potassium wasting'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'No significant food interactions; avoid nephrotoxic supplements/herbs'
    ],
    pearls: [
      'Vigorous IV hydration (normal saline) before and after infusion is essential to reduce nephrotoxicity — mannitol/furosemide may be added for forced diuresis',
      'Magnesium and potassium wasting is common due to renal tubular damage — supplement proactively',
      'Carboplatin is often substituted when renal function, neuropathy, or ototoxicity risk is a concern, with a different (myelosuppressive) toxicity profile',
      'Amifostine can be used as a nephroprotectant in select high-risk regimens'
    ]
  },
  {
    id: 'tamoxifen',
    genericName: 'Tamoxifen',
    genericNameAr: 'تاموكسيفين',
    brandNames: ['Nolvadex', 'نولفاديكس'],
    drugClass: 'Selective Estrogen Receptor Modulator (SERM)',
    drugClassAr: 'معدّل انتقائي لمستقبلات الإستروجين',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['oncology'],
    keyHighlights: [
      'Standard adjuvant endocrine therapy for hormone receptor-positive breast cancer, used in both pre- and postmenopausal women',
      'Acts as estrogen antagonist in breast tissue but agonist in endometrium — increases endometrial cancer and VTE risk',
      'Requires functional CYP2D6 for conversion to active metabolite endoxifen — efficacy may be reduced with potent CYP2D6 inhibitors (e.g., paroxetine, fluoxetine)'
    ],
    indications: [
      {
        indication: 'Adjuvant therapy, hormone receptor-positive breast cancer',
        indicationAr: 'علاج مساعد لسرطان الثدي الإيجابي لمستقبلات الهرمون',
        adultDose: '20 mg PO once daily for 5–10 years',
        adultDoseAr: '20 ملجم فموي مرة يوميًا لمدة 5-10 سنوات',
        pediatricDose: 'Not applicable (adult oncology indication)',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: '20 mg/day (standard; higher doses not more effective)',
        duration: '5–10 years per oncology guidance',
        route: 'PO'
      },
      {
        indication: 'Metastatic breast cancer',
        indicationAr: 'سرطان الثدي النقيلي',
        adultDose: '20–40 mg/day PO (40 mg given in divided doses)',
        adultDoseAr: '20-40 ملجم/يوم فموي (40 ملجم تُعطى بجرعات مقسمة)',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: '40 mg/day',
        duration: 'Until disease progression or unacceptable toxicity',
        route: 'PO'
      },
      {
        indication: 'Breast cancer risk reduction (high-risk women)',
        indicationAr: 'تقليل خطر سرطان الثدي (النساء عاليات الخطورة)',
        adultDose: '20 mg PO once daily for 5 years',
        adultDoseAr: '20 ملجم فموي مرة يوميًا لمدة 5 سنوات',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: '20 mg/day',
        duration: '5 years',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required; limited data, use with caution',
      hemodialysis: 'Not dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution in hepatic impairment; no formal dose adjustment established, monitor liver function',
    contraindications: [
      'Concurrent warfarin therapy requiring close monitoring (increased bleeding risk)',
      'History of DVT/PE (relative — risk reduction use contraindicated)',
      'Pregnancy',
      'Known hypersensitivity'
    ],
    blackBoxWarning: 'Increases risk of endometrial cancer, uterine sarcoma, and venous thromboembolism (DVT/PE); for risk-reduction use, benefits must be weighed carefully against these serious risks',
    blackBoxWarningAr: 'يزيد خطر سرطان بطانة الرحم والساركوما الرحمية والانسداد الوريدي الخثاري؛ عند استخدامه لتقليل الخطر يجب موازنة الفوائد بعناية مقابل هذه المخاطر الجسيمة',
    mechanismOfAction: 'Competitively binds estrogen receptors; antagonist activity in breast tissue inhibits estrogen-driven tumor growth, while partial agonist activity in endometrium and bone has tissue-specific effects',
    mechanismOfActionAr: 'يرتبط تنافسيًا بمستقبلات الإستروجين؛ تأثير مضاد في نسيج الثدي يثبط نمو الورم المعتمد على الإستروجين، بينما له تأثير جزئي منشط في بطانة الرحم والعظام',
    halfLife: '5–7 days (parent); active metabolites up to 14 days',
    monitoringParameters: [
      'Annual gynecologic exam — abnormal vaginal bleeding warrants prompt endometrial evaluation',
      'Signs/symptoms of DVT/PE',
      'Visual symptoms (rare retinopathy/cataracts with long-term use)',
      'Liver function tests',
      'Bone density (beneficial effect in postmenopausal women)'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Avoid concurrent strong CYP2D6 inhibitors (paroxetine, fluoxetine, bupropion) which reduce conversion to the active metabolite endoxifen and may reduce efficacy — prefer venlafaxine or escitalopram for hot flashes/depression if an antidepressant is needed',
      'Beneficial estrogen-agonist effect on bone density and lipids in postmenopausal women, unlike aromatase inhibitors',
      'Unexplained vaginal bleeding in a patient on tamoxifen must be promptly evaluated for endometrial pathology',
      'Can be used in premenopausal women (unlike aromatase inhibitors, which require ovarian suppression)'
    ]
  },
  {
    id: 'cyclophosphamide',
    genericName: 'Cyclophosphamide',
    genericNameAr: 'سيكلوفوسفاميد',
    brandNames: ['Cytoxan', 'سايتوكسان'],
    drugClass: 'Alkylating Agent (Nitrogen Mustard Derivative)',
    drugClassAr: 'عامل مؤلكل (من مشتقات خردل النيتروجين)',
    category: 'Rx',
    route: ['IV infusion', 'PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['oncology'],
    keyHighlights: [
      'Broad use spanning oncology (lymphoma, breast cancer, sarcomas) and rheumatology/nephrology (lupus nephritis, vasculitis)',
      'Hemorrhagic cystitis risk requires mesna co-administration and aggressive hydration at high doses',
      'Significant gonadotoxicity — fertility preservation counseling essential before treatment'
    ],
    indications: [
      {
        indication: 'Non-Hodgkin lymphoma (e.g., CHOP regimen)',
        indicationAr: 'ليمفوما غير هودجكين (مثل نظام CHOP)',
        adultDose: '750 mg/m² IV on day 1 of each 21-day cycle, combined with other agents',
        adultDoseAr: '750 ملجم/م² وريدي في اليوم 1 من كل دورة 21 يومًا، مع عوامل أخرى',
        pediatricDose: 'Protocol-specific, specialist oncology dosing only',
        pediatricDoseAr: 'حسب البروتوكول، بإشراف أخصائي أورام فقط',
        maxDose: 'Per cycle protocol',
        duration: 'Multiple cycles per protocol (typically 6–8)',
        route: 'IV infusion'
      },
      {
        indication: 'Lupus nephritis / severe vasculitis (immunosuppression)',
        indicationAr: 'التهاب الكلى الذئبي / التهاب الأوعية الشديد (تثبيط مناعي)',
        adultDose: '0.5–1 g/m² IV monthly (NIH protocol) or 500 mg IV every 2 weeks x 6 (Euro-Lupus)',
        adultDoseAr: '0.5-1 جرام/م² وريدي شهريًا أو 500 ملجم وريدي كل أسبوعين لـ6 جرعات',
        pediatricDose: 'Specialist rheumatology/nephrology weight-based protocol',
        pediatricDoseAr: 'بروتوكول حسب الوزن بإشراف أخصائي روماتيزم/كلى',
        maxDose: 'Per protocol; cumulative lifetime dose tracked for gonadal/bladder toxicity',
        duration: '3–6 months induction, then maintenance with alternative agent',
        route: 'IV infusion'
      },
      {
        indication: 'Breast cancer (adjuvant combination, e.g., AC/TC regimen)',
        indicationAr: 'سرطان الثدي (علاج مساعد مركب)',
        adultDose: '600 mg/m² IV every 2–3 weeks per regimen',
        adultDoseAr: '600 ملجم/م² وريدي كل 2-3 أسابيع حسب البرنامج',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: 'Per cycle protocol',
        duration: '4–6 cycles typical',
        route: 'IV infusion'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'Reduce dose by 25%',
      crclBelow10: 'Reduce dose by 50%; monitor closely',
      hemodialysis: 'Dose after dialysis; significantly dialyzed, supplemental dose may be needed'
    },
    hepaticAdjustment: 'Reduce dose in significant hepatic impairment (bilirubin >3 mg/dL) — reduced activation of prodrug and risk of accumulation of other metabolites',
    contraindications: [
      'Severe myelosuppression (active)',
      'Active urinary tract infection or bladder outlet obstruction (relative — worsens hemorrhagic cystitis risk)',
      'Pregnancy',
      'Known hypersensitivity'
    ],
    blackBoxWarning: 'Causes myelosuppression, hemorrhagic cystitis, and secondary malignancy (bladder cancer, myelodysplasia/AML) risk; cardiotoxicity at high doses',
    blackBoxWarningAr: 'يسبب تثبيط نقي العظام والتهاب المثانة النزفي وخطر الإصابة بسرطان ثانوي (سرطان المثانة، متلازمة خلل التنسج النقوي/اللوكيميا)؛ سمية قلبية بالجرعات العالية',
    mechanismOfAction: 'Prodrug activated hepatically to phosphoramide mustard, which alkylates DNA causing crosslinks that block replication and transcription, triggering apoptosis in proliferating cells',
    mechanismOfActionAr: 'عقار سلفي يُنشّط كبديًا إلى فوسفوراميد الخردل الذي يُؤلكل الحمض النووي مكونًا روابط متصالبة تمنع التضاعف والنسخ وتحفز موت الخلايا',
    halfLife: '3–12 hours (parent); metabolites vary',
    monitoringParameters: [
      'CBC with differential (myelosuppression nadir ~10–14 days)',
      'Urinalysis for hematuria (hemorrhagic cystitis)',
      'Renal and hepatic function',
      'Signs of cardiotoxicity at high cumulative doses',
      'Fertility counseling and gonadal function'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Mesna is co-administered with higher IV doses specifically to bind the urotoxic metabolite acrolein and prevent hemorrhagic cystitis — along with vigorous hydration and frequent voiding',
      'Fertility preservation (sperm/oocyte banking) should be discussed before starting therapy given significant gonadotoxicity',
      'Dose reduction or interruption is standard practice for severe myelosuppression — nadir typically occurs 10–14 days post-dose',
      'Used at much lower doses in autoimmune disease (lupus nephritis, vasculitis) than in oncology, with different toxicity-benefit considerations'
    ]
  },
  {
    id: 'sevelamer',
    genericName: 'Sevelamer',
    genericNameAr: 'سيفيلامر',
    brandNames: ['Renagel', 'Renvela', 'رينفيلا'],
    drugClass: 'Non-Calcium Phosphate Binder',
    drugClassAr: 'رابط للفوسفات لا يحتوي على الكالسيوم',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['internal_medicine'],
    keyHighlights: [
      'Preferred phosphate binder when avoiding calcium load (vascular calcification risk) in CKD/dialysis patients',
      'Must be taken WITH meals — ineffective if taken on empty stomach since it binds dietary phosphate in the gut',
      'Also modestly lowers LDL cholesterol as a secondary benefit'
    ],
    indications: [
      {
        indication: 'Hyperphosphatemia in chronic kidney disease (dialysis-dependent)',
        indicationAr: 'ارتفاع الفوسفات في مرض الكلى المزمن (المعتمد على الديال)',
        adultDose: '800–1600 mg PO three times daily with meals, titrate based on serum phosphate',
        adultDoseAr: '800-1600 ملجم فموي 3 مرات يوميًا مع الوجبات، تُعدّل حسب مستوى الفوسفات',
        pediatricDose: 'Weight-based dosing per nephrology protocol, not well established under age 6',
        pediatricDoseAr: 'جرعة حسب الوزن وفق بروتوكول أمراض الكلى، غير مستقرة جيدًا تحت عمر 6 سنوات',
        maxDose: 'Titrate to serum phosphate goal; no fixed ceiling, typically up to 13 g/day divided',
        duration: 'Chronic, ongoing with dialysis',
        route: 'PO'
      },
      {
        indication: 'Hyperphosphatemia in CKD not yet on dialysis (stage 3–5)',
        indicationAr: 'ارتفاع الفوسفات في مرض الكلى المزمن قبل الديال (المرحلة 3-5)',
        adultDose: '400–800 mg PO three times daily with meals',
        adultDoseAr: '400-800 ملجم فموي 3 مرات يوميًا مع الوجبات',
        pediatricDose: 'Not well established',
        pediatricDoseAr: 'غير مستقرة جيدًا',
        maxDose: 'Titrate to serum phosphate goal',
        duration: 'Chronic',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'Not applicable — used specifically in renal impairment, no adjustment needed for this indication',
      crcl10to50: 'No adjustment required; dosed per serum phosphate',
      crclBelow10: 'No adjustment required; dosed per serum phosphate',
      hemodialysis: 'Not dialyzed (not systemically absorbed); dose with each meal/dialysis session as prescribed'
    },
    hepaticAdjustment: 'No adjustment required — minimal systemic absorption',
    contraindications: [
      'Bowel obstruction',
      'Known hypersensitivity to sevelamer',
      'Hypophosphatemia'
    ],
    mechanismOfAction: 'Non-absorbed polymer that binds dietary phosphate in the gastrointestinal tract through ion exchange, reducing intestinal phosphate absorption and excreting it in stool',
    mechanismOfActionAr: 'بوليمر غير مُمتَص يرتبط بالفوسفات الغذائي في الجهاز الهضمي عبر تبادل أيوني، مما يقلل امتصاص الفوسفات المعوي ويطرحه في البراز',
    halfLife: 'Not systemically absorbed — not applicable',
    monitoringParameters: [
      'Serum phosphate (monthly initially)',
      'Serum calcium and PTH (bone-mineral disorder monitoring)',
      'Bicarbonate (sevelamer hydrochloride can cause acidosis; carbonate form preferred)',
      'Lipid panel (secondary LDL-lowering benefit)',
      'GI tolerance'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'Must be taken WITH food/meals — ineffective and poorly tolerated if taken without food',
      'May reduce absorption of some oral medications (ciprofloxacin, mycophenolate) — separate dosing by 1–2 hours'
    ],
    pearls: [
      'Sevelamer carbonate (Renvela) replaced sevelamer hydrochloride (Renagel) largely because it does not contribute to metabolic acidosis',
      'A non-calcium alternative to calcium acetate/carbonate binders, preferred in patients with vascular calcification, hypercalcemia, or adynamic bone disease',
      'Timing with meals is essential for efficacy — counsel patients explicitly, as nonadherence to meal-timing is a common cause of "treatment failure"',
      'Large pill burden (multiple large tablets per meal) is a major adherence challenge — powder formulation available as an alternative'
    ]
  },
  {
    id: 'vincristine',
    genericName: 'Vincristine',
    genericNameAr: 'فينكريستين',
    brandNames: ['Oncovin', 'Vincasar', 'أونكوفين'],
    drugClass: 'Vinca Alkaloid Chemotherapy Agent',
    drugClassAr: 'عامل علاج كيميائي من قلويدات الفينكا',
    category: 'Rx',
    route: ['IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['oncology'],
    keyHighlights: [
      'FATAL if given intrathecally — must be clearly labeled "FOR IV USE ONLY, FATAL IF GIVEN INTRATHECALLY"',
      'Dose-limiting toxicity is peripheral neuropathy, not myelosuppression (minimal bone marrow suppression)',
      'Core component of CHOP/R-CHOP (lymphoma), ABVD-adjacent regimens, and pediatric ALL protocols'
    ],
    indications: [
      {
        indication: 'Non-Hodgkin lymphoma (CHOP/R-CHOP regimen)',
        indicationAr: 'ليمفوما غير هودجكين (نظام CHOP/R-CHOP)',
        adultDose: '1.4 mg/m² IV (capped at 2 mg absolute) on day 1 of each 21-day cycle',
        adultDoseAr: '1.4 ملجم/م² وريدي (بحد أقصى 2 ملجم مطلق) في اليوم 1 من كل دورة 21 يومًا',
        pediatricDose: 'Protocol-specific, specialist pediatric oncology dosing only',
        pediatricDoseAr: 'حسب البروتوكول، بإشراف أخصائي أورام أطفال فقط',
        maxDose: '2 mg absolute per dose (capped regardless of BSA in adults)',
        duration: 'Multiple cycles per protocol',
        route: 'IV'
      },
      {
        indication: 'Acute lymphoblastic leukemia (induction/maintenance)',
        indicationAr: 'سرطان الدم الليمفاوي الحاد (الحث/الصيانة)',
        adultDose: '1.4–2 mg/m² IV weekly per protocol',
        adultDoseAr: '1.4-2 ملجم/م² وريدي أسبوعيًا حسب البروتوكول',
        pediatricDose: '1.5 mg/m² IV weekly (max 2 mg) per protocol',
        pediatricDoseAr: '1.5 ملجم/م² وريدي أسبوعيًا (بحد أقصى 2 ملجم) حسب البروتوكول',
        maxDose: '2 mg per dose',
        duration: 'Per induction/maintenance protocol, months to years',
        route: 'IV'
      },
      {
        indication: 'Wilms tumor / rhabdomyosarcoma (pediatric solid tumors)',
        indicationAr: 'ورم ويلمز / الساركوما العضلية المخططة (أورام الأطفال الصلبة)',
        adultDose: 'Not typically applicable',
        adultDoseAr: 'غير مطبق عادة',
        pediatricDose: '1.5 mg/m² IV weekly (max 2 mg), per sarcoma/Wilms protocol',
        pediatricDoseAr: '1.5 ملجم/م² وريدي أسبوعيًا (بحد أقصى 2 ملجم) حسب بروتوكول الساركوما/ويلمز',
        maxDose: '2 mg per dose',
        duration: 'Per protocol',
        route: 'IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required; minimal renal excretion',
      hemodialysis: 'Not dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose by 50% if bilirubin 1.5–3 mg/dL; reduce by 75% or omit if bilirubin >3 mg/dL — primarily hepatobiliary elimination',
    contraindications: [
      'Demyelinating form of Charcot-Marie-Tooth syndrome',
      'Intrathecal administration (absolute — fatal)',
      'Significant pre-existing peripheral neuropathy (relative)',
      'Known hypersensitivity'
    ],
    blackBoxWarning: 'For intravenous use only — fatal if administered intrathecally. Must be prepared and dispensed in a manner that minimizes risk of inadvertent intrathecal administration (e.g., dispensed in a minibag, never a syringe that could be mistaken for intrathecal chemotherapy)',
    blackBoxWarningAr: 'للاستخدام الوريدي فقط - قاتل إذا أُعطي داخل القناة الشوكية. يجب تحضيره وتوزيعه بطريقة تقلل خطر الإعطاء الشوكي العرضي',
    mechanismOfAction: 'Binds tubulin and inhibits microtubule assembly, arresting cell division in metaphase; also disrupts axonal microtubule transport contributing to neurotoxicity',
    mechanismOfActionAr: 'يرتبط بالتوبيولين ويثبط تجميع الأنيبيبات الدقيقة، موقفًا انقسام الخلايا في الطور الاستوائي؛ كما يعطل النقل المحوري مسببًا السمية العصبية',
    halfLife: '85 hours (terminal)',
    monitoringParameters: [
      'Peripheral neuropathy (sensory loss, foot drop, paresthesias) — dose-limiting',
      'Bowel function (autonomic neuropathy causing constipation/ileus)',
      'Liver function tests',
      'CBC (less myelosuppressive than other agents but still monitored)',
      'Jaw pain (acute, self-limited)'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'ALWAYS verify route before administration — intrathecal vincristine is uniformly fatal and remains a documented, preventable medical error',
      'Prophylactic bowel regimen (stool softener/laxative) is routinely co-prescribed due to high incidence of constipation from autonomic neuropathy',
      'Unlike most chemotherapy, causes minimal myelosuppression — neurotoxicity, not blood counts, is the dose-limiting factor',
      'Dose is capped at 2 mg absolute in adults regardless of body surface area, unlike most chemotherapy dosed purely by BSA'
    ]
  },
  {
    id: 'doxorubicin',
    genericName: 'Doxorubicin',
    genericNameAr: 'دوكسوروبيسين',
    brandNames: ['Adriamycin', 'Doxil (liposomal)', 'أدريامايسين'],
    drugClass: 'Anthracycline Chemotherapy Agent',
    drugClassAr: 'عامل علاج كيميائي من الأنثراسيكلين',
    category: 'Rx',
    route: ['IV infusion'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['oncology'],
    keyHighlights: [
      'Cumulative, irreversible dose-dependent cardiotoxicity (dilated cardiomyopathy) — lifetime cumulative dose must be tracked',
      'Potent vesicant — extravasation causes severe tissue necrosis; dexrazoxane is the specific extravasation antidote',
      'Liposomal formulation (Doxil) reduces cardiotoxicity but causes hand-foot syndrome and mucositis'
    ],
    indications: [
      {
        indication: 'Non-Hodgkin lymphoma / Hodgkin lymphoma (CHOP/ABVD)',
        indicationAr: 'ليمفوما غير هودجكين / ليمفوما هودجكين (CHOP/ABVD)',
        adultDose: '50–60 mg/m² IV every 21 days, or per specific regimen',
        adultDoseAr: '50-60 ملجم/م² وريدي كل 21 يومًا، أو حسب البرنامج المحدد',
        pediatricDose: 'Protocol-specific, specialist pediatric oncology dosing only',
        pediatricDoseAr: 'حسب البروتوكول، بإشراف أخصائي أورام أطفال فقط',
        maxDose: 'Cumulative lifetime dose generally capped at 450–550 mg/m²',
        duration: 'Multiple cycles per protocol',
        route: 'IV infusion'
      },
      {
        indication: 'Breast cancer (adjuvant, e.g., AC regimen)',
        indicationAr: 'سرطان الثدي (علاج مساعد، نظام AC)',
        adultDose: '60 mg/m² IV every 2–3 weeks combined with cyclophosphamide',
        adultDoseAr: '60 ملجم/م² وريدي كل 2-3 أسابيع مع سيكلوفوسفاميد',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: 'Cumulative lifetime dose capped at 450–550 mg/m²',
        duration: '4 cycles typical',
        route: 'IV infusion'
      },
      {
        indication: 'Sarcoma (osteosarcoma, soft tissue sarcoma)',
        indicationAr: 'الساركوما (ساركوما العظام، ساركوما النسيج الرخو)',
        adultDose: '60–75 mg/m² IV every 21 days, per protocol',
        adultDoseAr: '60-75 ملجم/م² وريدي كل 21 يومًا، حسب البروتوكول',
        pediatricDose: 'Protocol-specific',
        pediatricDoseAr: 'حسب البروتوكول',
        maxDose: 'Cumulative lifetime dose capped at 450–550 mg/m²',
        duration: 'Multiple cycles per protocol',
        route: 'IV infusion'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required; primarily hepatic elimination',
      crclBelow10: 'No adjustment required; use with caution',
      hemodialysis: 'Not dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose by 50% if bilirubin 1.2–3 mg/dL; reduce by 75% if bilirubin >3 mg/dL',
    contraindications: [
      'Severe pre-existing cardiac impairment or recent myocardial infarction',
      'Severe persistent myelosuppression',
      'Prior cumulative anthracycline dose near lifetime maximum',
      'Severe hepatic impairment (relative)',
      'Known hypersensitivity'
    ],
    blackBoxWarning: 'Causes cumulative, dose-related, potentially fatal cardiomyopathy; severe myelosuppression; must not be given by intramuscular or subcutaneous route; is a potent vesicant causing tissue necrosis with extravasation; secondary leukemia risk',
    blackBoxWarningAr: 'يسبب اعتلالًا تراكميًا مرتبطًا بالجرعة في عضلة القلب قد يكون قاتلًا؛ تثبيط شديد لنقي العظام؛ يجب عدم إعطائه عضليًا أو تحت الجلد؛ مادة مهيجة قوية تسبب نخر النسيج عند التسرب؛ خطر سرطان الدم الثانوي',
    mechanismOfAction: 'Intercalates into DNA, inhibits topoisomerase II, and generates free radicals, causing DNA strand breaks and apoptosis; free radical generation in cardiac myocytes underlies the cardiotoxicity',
    mechanismOfActionAr: 'يتداخل مع الحمض النووي، يثبط التوبويزوميراز II، ويولد شوارد حرة تسبب كسور في خيوط الحمض النووي وموت الخلايا؛ توليد الشوارد الحرة في خلايا القلب يسبب السمية القلبية',
    halfLife: '20–48 hours (terminal)',
    monitoringParameters: [
      'Left ventricular ejection fraction (echocardiogram) at baseline and periodically — cumulative dose tracking',
      'CBC with differential (nadir 10–14 days)',
      'Liver function tests',
      'Signs of extravasation at infusion site',
      'Signs of heart failure (dyspnea, edema, fatigue)'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Cardiotoxicity risk rises sharply above a cumulative lifetime dose of ~450–550 mg/m² — lifetime dose must be tracked across all treatment courses, even years apart',
      'Causes reddish discoloration of urine for 1–2 days after administration — a benign, expected finding to counsel patients about in advance',
      'Dexrazoxane can be used both as a cardioprotectant (at high cumulative doses) and as a specific antidote for extravasation injury',
      'Liposomal doxorubicin (Doxil) has substantially reduced cardiotoxicity but introduces distinct toxicities (hand-foot syndrome, mucositis, infusion reactions)'
    ]
  },
  {
    id: 'filgrastim',
    genericName: 'Filgrastim',
    genericNameAr: 'فيلجراستيم',
    brandNames: ['Neupogen', 'Zarxio', 'نيوبوجين'],
    drugClass: 'Granulocyte Colony-Stimulating Factor (G-CSF)',
    drugClassAr: 'عامل منشط لمستعمرات الخلايا المحببة',
    category: 'Rx',
    route: ['SC', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['oncology'],
    keyHighlights: [
      'Reduces duration and severity of chemotherapy-induced neutropenia, lowering febrile neutropenia risk',
      'Must not be given 24 hours before through 24 hours after cytotoxic chemotherapy — can worsen myelosuppression if mistimed',
      'Also used to mobilize peripheral blood stem cells before autologous/allogeneic transplant'
    ],
    indications: [
      {
        indication: 'Chemotherapy-induced febrile neutropenia prevention',
        indicationAr: 'الوقاية من قلة العدلات الحموية الناتجة عن العلاج الكيميائي',
        adultDose: '5 mcg/kg SC once daily, starting 24 hours after chemotherapy, until neutrophil recovery',
        adultDoseAr: '5 ميكروجرام/كجم تحت الجلد مرة يوميًا، تبدأ بعد 24 ساعة من العلاج الكيميائي، حتى استعادة العدلات',
        pediatricDose: '5 mcg/kg SC once daily, same timing principles',
        pediatricDoseAr: '5 ميكروجرام/كجم تحت الجلد مرة يوميًا، بنفس مبادئ التوقيت',
        maxDose: 'Weight-based; continue until ANC recovery (typically >10,000/mm³ after nadir)',
        duration: 'Until neutrophil recovery, typically up to 14 days',
        route: 'SC'
      },
      {
        indication: 'Severe chronic neutropenia',
        indicationAr: 'قلة العدلات المزمنة الشديدة',
        adultDose: '5–6 mcg/kg/day SC, titrate to maintain ANC >1000–1500/mm³',
        adultDoseAr: '5-6 ميكروجرام/كجم/يوم تحت الجلد، تُعدّل للحفاظ على عدد مطلق للعدلات أكبر من 1000-1500',
        pediatricDose: 'Same weight-based dosing, specialist-guided',
        pediatricDoseAr: 'نفس الجرعة حسب الوزن، بإشراف متخصص',
        maxDose: 'Individualized to maintain target ANC',
        duration: 'Chronic, ongoing',
        route: 'SC'
      },
      {
        indication: 'Peripheral blood stem cell mobilization (pre-transplant)',
        indicationAr: 'تحشيد الخلايا الجذعية من الدم المحيطي (قبل الزرع)',
        adultDose: '10 mcg/kg/day SC for 4–7 days before apheresis',
        adultDoseAr: '10 ميكروجرام/كجم/يوم تحت الجلد لـ 4-7 أيام قبل الفصادة',
        pediatricDose: 'Transplant-protocol specific',
        pediatricDoseAr: 'حسب بروتوكول الزرع',
        maxDose: 'Per transplant center protocol',
        duration: '4–7 days pre-apheresis, may continue through collection',
        route: 'SC'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required; limited data',
      hemodialysis: 'Not dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment required',
    contraindications: [
      'Known hypersensitivity to filgrastim or E. coli-derived proteins',
      'Concurrent use with chemotherapy or radiation (within 24 hours before/after) due to risk of increased sensitivity of rapidly dividing myeloid cells',
      'Sickle cell disease (caution — risk of sickle cell crisis)'
    ],
    mechanismOfAction: 'Recombinant human G-CSF that stimulates proliferation, differentiation, and functional activation of neutrophil precursors and mature neutrophils in the bone marrow',
    mechanismOfActionAr: 'عامل منشط لمستعمرات الخلايا المحببة مُعاد التركيب يحفز تكاثر وتمايز وتنشيط سلائف وخلايا العدلات الناضجة في نقي العظام',
    halfLife: '3.5 hours',
    monitoringParameters: [
      'CBC with differential (ANC trending)',
      'Bone pain (common, manageable with analgesics)',
      'Spleen size/left upper quadrant pain (rare splenic rupture risk)',
      'Signs of acute respiratory distress syndrome (rare)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Bone pain is the most common side effect — typically managed with non-opioid analgesics and resolves after discontinuation',
      'Timing is critical: starting too early (within 24 hours of chemo) can increase toxicity to the dividing progenitor cells chemotherapy is meant to kill',
      'Pegfilgrastim (long-acting) requires only a single dose per chemotherapy cycle instead of daily injections, improving convenience',
      'Not indicated for the neutropenia of acute myeloid leukemia during induction chemotherapy without careful oncology input, given theoretical concern for stimulating leukemic blasts'
    ]
  },
  {
    id: 'amphotericin_b',
    genericName: 'Amphotericin B (Liposomal)',
    genericNameAr: 'أمفوتيريسين ب (الشكل الشحمي)',
    brandNames: ['AmBisome', 'أمبيسوم'],
    drugClass: 'Polyene Antifungal',
    drugClassAr: 'مضاد فطري من مجموعة البوليين',
    category: 'Rx',
    route: ['IV infusion'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'icu_emergency'],
    keyHighlights: [
      '"Ampho-terrible" reputation from nephrotoxicity and infusion reactions — liposomal formulation substantially reduces both vs. conventional deoxycholate form',
      'Broad-spectrum fungicidal activity — gold standard for invasive aspergillosis, mucormycosis, and severe disseminated fungal infections',
      'Premedication (antipyretics, antihistamines, sometimes hydrocortisone) reduces infusion-related reactions'
    ],
    indications: [
      {
        indication: 'Invasive aspergillosis / mucormycosis',
        indicationAr: 'داء الرشاشيات الغازي / داء الفطار الغشائي',
        adultDose: '3–5 mg/kg IV once daily (liposomal); up to 10 mg/kg/day for mucormycosis',
        adultDoseAr: '3-5 ملجم/كجم وريدي مرة يوميًا (شحمي)؛ حتى 10 ملجم/كجم/يوم لداء الفطار الغشائي',
        pediatricDose: '3–5 mg/kg IV once daily, same weight-based principle',
        pediatricDoseAr: '3-5 ملجم/كجم وريدي مرة يوميًا، نفس المبدأ حسب الوزن',
        maxDose: 'Up to 10 mg/kg/day in severe mucormycosis per specialist guidance',
        duration: 'Weeks to months depending on response and immune status',
        route: 'IV infusion'
      },
      {
        indication: 'Cryptococcal meningitis (induction therapy)',
        indicationAr: 'التهاب السحايا الكريبتوكوكي (علاج الحث)',
        adultDose: '3–4 mg/kg IV once daily, combined with flucytosine, for 2 weeks induction',
        adultDoseAr: '3-4 ملجم/كجم وريدي مرة يوميًا، مع فلوسيتوزين، لمدة 2 أسبوع كعلاج حث',
        pediatricDose: 'Same weight-based dosing, specialist-guided',
        pediatricDoseAr: 'نفس الجرعة حسب الوزن، بإشراف متخصص',
        maxDose: '4–6 mg/kg/day depending on protocol',
        duration: '2 weeks induction, then fluconazole consolidation/maintenance',
        route: 'IV infusion'
      },
      {
        indication: 'Empiric therapy, febrile neutropenia with suspected invasive fungal infection',
        indicationAr: 'علاج تجريبي، قلة العدلات الحموية مع اشتباه عدوى فطرية غازية',
        adultDose: '3 mg/kg IV once daily',
        adultDoseAr: '3 ملجم/كجم وريدي مرة يوميًا',
        pediatricDose: '3 mg/kg IV once daily',
        pediatricDoseAr: '3 ملجم/كجم وريدي مرة يوميًا',
        maxDose: '5 mg/kg/day',
        duration: 'Until defervescence/culture results guide definitive therapy',
        route: 'IV infusion'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required; monitor renal function closely',
      crcl10to50: 'No formal dose adjustment but monitor closely; consider dose reduction if significant nephrotoxicity develops',
      crclBelow10: 'Use liposomal form preferentially (less nephrotoxic); monitor very closely, consider alternative antifungal if feasible',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed, dose timing independent of dialysis'
    },
    hepaticAdjustment: 'No formal dose adjustment established; use with caution in severe hepatic impairment',
    contraindications: [
      'Known hypersensitivity to amphotericin B or liposomal components (unless no alternative exists for life-threatening infection)'
    ],
    blackBoxWarning: 'Conventional (non-liposomal) amphotericin B deoxycholate carries significant risk of nephrotoxicity and severe infusion reactions; different lipid formulations are NOT interchangeable — dosing errors from formulation confusion have caused fatalities',
    blackBoxWarningAr: 'الشكل التقليدي من الأمفوتيريسين ب يحمل خطرًا كبيرًا للسمية الكلوية وتفاعلات التسريب الشديدة؛ الأشكال الشحمية المختلفة غير قابلة للتبديل - أخطاء الجرعات بسبب الخلط بين الأشكال تسببت في وفيات',
    mechanismOfAction: 'Binds ergosterol in the fungal cell membrane, forming pores that increase membrane permeability, causing leakage of intracellular contents and fungal cell death',
    mechanismOfActionAr: 'يرتبط بالإرغوستيرول في الغشاء الخلوي الفطري، مكونًا ثقوبًا تزيد نفاذية الغشاء، مما يسبب تسرب المحتويات الخلوية وموت الخلية الفطرية',
    halfLife: '~100–150 hours (liposomal, terminal)',
    monitoringParameters: [
      'Renal function (BUN/creatinine) frequently, especially early in therapy',
      'Serum electrolytes (potassium, magnesium — renal wasting common)',
      'Infusion-related reactions (fever, chills, rigors) during/after infusion',
      'CBC (anemia can occur with prolonged use)',
      'Liver function tests'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Liposomal (AmBisome) and lipid-complex formulations are dramatically less nephrotoxic than conventional deoxycholate amphotericin B — but are NOT dosed the same, and switching formulations without recalculating dose is a known source of serious medication errors',
      'Premedicate with acetaminophen/diphenhydramine (± hydrocortisone) before early infusions to reduce rigors and fever ("shake and bake" reaction)',
      'Aggressive IV saline loading before each dose can reduce nephrotoxicity',
      'Remains first-line for mucormycosis and many invasive molds where azole resistance or spectrum gaps exist'
    ]
  },
  {
    id: 'voriconazole',
    genericName: 'Voriconazole',
    genericNameAr: 'فوريكونازول',
    brandNames: ['Vfend', 'فيفند'],
    drugClass: 'Triazole Antifungal',
    drugClassAr: 'مضاد فطري من مجموعة التريازول',
    category: 'Rx',
    route: ['PO', 'IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases'],
    keyHighlights: [
      'First-line therapy for invasive aspergillosis, with superior outcomes vs. amphotericin B in landmark trials',
      'Causes dose-dependent, reversible visual disturbances (photopsia) in a majority of patients — a near-pathognomonic early side effect',
      'Extensive CYP2C19/CYP3A4-mediated drug interactions; nonlinear pharmacokinetics with major genetic (CYP2C19 polymorphism) variability'
    ],
    indications: [
      {
        indication: 'Invasive aspergillosis',
        indicationAr: 'داء الرشاشيات الغازي',
        adultDose: 'Loading: 6 mg/kg IV every 12 hours x 2 doses; maintenance: 4 mg/kg IV every 12 hours, or 200 mg PO every 12 hours',
        adultDoseAr: 'جرعة تحميل: 6 ملجم/كجم وريدي كل 12 ساعة لجرعتين؛ جرعة صيانة: 4 ملجم/كجم وريدي كل 12 ساعة، أو 200 ملجم فموي كل 12 ساعة',
        pediatricDose: '9 mg/kg IV every 12 hours (loading day 1), then 8 mg/kg every 12 hours; weight-based per specialist protocol',
        pediatricDoseAr: '9 ملجم/كجم وريدي كل 12 ساعة (يوم التحميل)، ثم 8 ملجم/كجم كل 12 ساعة حسب البروتوكول',
        maxDose: 'Individualized with therapeutic drug monitoring; trough target 1–5.5 mcg/mL',
        duration: 'Minimum 6–12 weeks, often longer depending on immune status and response',
        route: 'IV/PO'
      },
      {
        indication: 'Candidemia / invasive candidiasis (fluconazole-resistant or step-down)',
        indicationAr: 'داء المبيضات في الدم / داء المبيضات الغازي (مقاوم للفلوكونازول)',
        adultDose: 'Loading: 6 mg/kg IV every 12 hours x 2 doses; maintenance: 3–4 mg/kg IV every 12 hours or 200 mg PO every 12 hours',
        adultDoseAr: 'جرعة تحميل: 6 ملجم/كجم وريدي كل 12 ساعة لجرعتين؛ صيانة: 3-4 ملجم/كجم وريدي كل 12 ساعة',
        pediatricDose: 'Weight-based per specialist protocol',
        pediatricDoseAr: 'حسب الوزن وبإشراف متخصص',
        maxDose: 'Per therapeutic drug monitoring',
        duration: '2 weeks after first negative blood culture (typical for candidemia)',
        route: 'IV/PO'
      },
      {
        indication: 'Esophageal candidiasis (fluconazole-refractory)',
        indicationAr: 'داء المبيضات المريئي (المقاوم للفلوكونازول)',
        adultDose: '200 mg PO every 12 hours',
        adultDoseAr: '200 ملجم فموي كل 12 ساعة',
        pediatricDose: 'Weight-based per specialist protocol',
        pediatricDoseAr: 'حسب الوزن وبإشراف متخصص',
        maxDose: '200 mg every 12 hours',
        duration: '14–21 days typically',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required for oral dosing',
      crcl10to50: 'Oral: no adjustment. IV: avoid if CrCl <50 mL/min due to accumulation of the IV vehicle (cyclodextrin) — use oral route instead',
      crclBelow10: 'Avoid IV formulation (cyclodextrin accumulation); oral dosing does not require adjustment',
      hemodialysis: 'Not significantly dialyzed; oral dosing preferred, dose timing independent of dialysis'
    },
    hepaticAdjustment: 'Mild-moderate impairment (Child-Pugh A/B): use standard loading dose, halve maintenance dose. Severe impairment: use only if benefit outweighs risk, with close monitoring',
    contraindications: [
      'Concurrent use with CYP3A4 substrates with narrow therapeutic index (e.g., sirolimus, certain ergot alkaloids, quinidine)',
      'Concurrent rifampin, rifabutin, carbamazepine, long-acting barbiturates, ritonavir (high dose), St. John\'s Wort',
      'Known hypersensitivity to voriconazole or other azoles (cross-reactivity possible)',
      'QT prolongation with other QT-prolonging drugs (relative)'
    ],
    blackBoxWarning: 'Can cause QT prolongation and torsades de pointes; hepatotoxicity including hepatic failure has been reported; visual disturbances are common',
    blackBoxWarningAr: 'قد يسبب تطاول فترة QT وعدم انتظام ضربات القلب الخطير (torsades de pointes)؛ تم الإبلاغ عن سمية كبدية تشمل فشل الكبد؛ اضطرابات بصرية شائعة',
    mechanismOfAction: 'Inhibits fungal cytochrome P450-dependent 14-alpha-demethylase, blocking conversion of lanosterol to ergosterol, disrupting fungal cell membrane synthesis and integrity',
    mechanismOfActionAr: 'يثبط إنزيم 14-ألفا-ديميثيليز الفطري المعتمد على السيتوكروم P450، مما يمنع تحويل اللانوستيرول إلى إرغوستيرول ويعطل تكوين الغشاء الخلوي الفطري',
    halfLife: 'Nonlinear/dose-dependent (variable due to CYP2C19 polymorphism)',
    monitoringParameters: [
      'Liver function tests (baseline and periodically)',
      'Therapeutic drug monitoring (trough levels) — critical due to nonlinear kinetics and high interpatient variability',
      'ECG/QTc interval',
      'Visual symptoms (photopsia, blurred vision)',
      'Renal function (if IV formulation used)'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'Take oral tablets 1 hour before or after meals (high-fat meals reduce absorption)',
      'Avoid alcohol'
    ],
    pearls: [
      'Visual disturbances (photopsia — flashing lights, blurred vision, color changes) occur in up to 30% of patients, usually within 30 minutes of a dose, are dose-related, and resolve with continued use or discontinuation',
      'Therapeutic drug monitoring is essential — nonlinear pharmacokinetics and wide interpatient variability (partly from CYP2C19 polymorphisms) mean fixed dosing can produce subtherapeutic or toxic levels',
      'Extensive drug interaction potential via CYP3A4/CYP2C19 — always review the full medication list before initiating',
      'Switch IV to oral once clinically stable since oral bioavailability is excellent (~96%) and avoids cyclodextrin vehicle accumulation in renal impairment'
    ]
  },
  {
    id: 'clarithromycin',
    genericName: 'Clarithromycin',
    genericNameAr: 'كلاريثروميسين',
    brandNames: ['Biaxin', 'بياكسين'],
    drugClass: 'Macrolide Antibiotic',
    drugClassAr: 'مضاد حيوي من المجموعة الماكروليدية',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'internal_medicine'],
    keyHighlights: [
      'Key component of H. pylori eradication triple/quadruple therapy',
      'Significant CYP3A4 inhibitor — extensive drug interaction potential (statins, warfarin, colchicine)',
      'Associated with increased long-term cardiovascular mortality in some studies — use shortest effective course'
    ],
    indications: [
      {
        indication: 'H. pylori eradication (triple therapy)',
        indicationAr: 'استئصال جرثومة المعدة (العلاج الثلاثي)',
        adultDose: '500 mg PO twice daily with amoxicillin and a PPI for 10–14 days',
        adultDoseAr: '500 ملجم فموي مرتين يوميًا مع أموكسيسيلين ومثبط مضخة البروتون لمدة 10-14 يومًا',
        pediatricDose: '15 mg/kg/day divided twice daily (specialist-guided)',
        pediatricDoseAr: '15 ملجم/كجم/يوم مقسمة مرتين يوميًا (بإشراف متخصص)',
        maxDose: '1000 mg/day',
        duration: '10–14 days',
        route: 'PO'
      },
      {
        indication: 'Community-acquired pneumonia / acute bacterial sinusitis / pharyngitis',
        indicationAr: 'ذات الرئة المكتسبة من المجتمع / التهاب الجيوب الحاد / التهاب البلعوم',
        adultDose: '250–500 mg PO twice daily, or 1000 mg extended-release once daily',
        adultDoseAr: '250-500 ملجم فموي مرتين يوميًا، أو 1000 ملجم طويل المفعول مرة يوميًا',
        pediatricDose: '15 mg/kg/day PO divided every 12 hours',
        pediatricDoseAr: '15 ملجم/كجم/يوم فموي مقسمة كل 12 ساعة',
        maxDose: '1000 mg/day',
        duration: '7–14 days depending on indication',
        route: 'PO'
      },
      {
        indication: 'Mycobacterium avium complex (MAC) prophylaxis/treatment',
        indicationAr: 'الوقاية/علاج عدوى المتفطرة الطيرية المعقدة',
        adultDose: '500 mg PO twice daily, combined with ethambutol ± rifabutin',
        adultDoseAr: '500 ملجم فموي مرتين يوميًا، مع إيثامبوتول مع أو بدون ريفابوتين',
        pediatricDose: '7.5 mg/kg PO twice daily (max 500 mg/dose)',
        pediatricDoseAr: '7.5 ملجم/كجم فموي مرتين يوميًا (بحد أقصى 500 ملجم/جرعة)',
        maxDose: '1000 mg/day',
        duration: 'Prolonged (months), per HIV/immunosuppression protocol',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'Reduce dose by 50% or extend interval',
      crclBelow10: 'Reduce dose by 50% and extend interval; avoid extended-release formulation',
      hemodialysis: 'Dose after dialysis session'
    },
    hepaticAdjustment: 'Use with caution in severe hepatic impairment with concomitant renal impairment; otherwise no specific adjustment needed with normal renal function',
    contraindications: [
      'Concurrent use with colchicine in patients with renal/hepatic impairment (risk of fatal colchicine toxicity)',
      'Concurrent use with certain statins (simvastatin, lovastatin — rhabdomyolysis risk)',
      'History of QT prolongation or cholestatic jaundice/hepatic dysfunction with prior clarithromycin use',
      'Concurrent ergotamine/dihydroergotamine, pimozide, or other CYP3A4 substrates with narrow therapeutic index',
      'Known hypersensitivity to macrolides'
    ],
    mechanismOfAction: 'Binds the 50S ribosomal subunit, inhibiting bacterial protein synthesis (bacteriostatic, bactericidal at high concentrations against some organisms)',
    mechanismOfActionAr: 'يرتبط بالوحدة الريبوسومية 50S، مثبطًا تخليق البروتين البكتيري',
    halfLife: '3–7 hours (dose-dependent)',
    monitoringParameters: [
      'ECG/QTc in high-risk patients',
      'Liver function tests with prolonged use',
      'Renal function (dose adjustment)',
      'Signs of C. difficile-associated diarrhea',
      'Concurrent statin/colchicine interaction review'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'May be taken with or without food (extended-release should be taken with food)'
    ],
    pearls: [
      'Strong CYP3A4 inhibitor — always cross-check for interacting statins (switch to pravastatin/rosuvastatin), colchicine dose reduction, or warfarin INR monitoring before prescribing',
      'A 2012 cohort study (and subsequent data) raised concern for increased cardiovascular mortality with clarithromycin, particularly in patients with coronary artery disease — many clinicians now favor amoxicillin or azithromycin when either is suitable',
      'Azithromycin has largely replaced clarithromycin for many respiratory indications due to simpler dosing and fewer interactions, but clarithromycin remains preferred in H. pylori regimens',
      'Metallic/bitter taste disturbance is a common, distinctive side effect'
    ]
  },
  {
    id: 'vancomycin_oral',
    genericName: 'Vancomycin (Oral)',
    genericNameAr: 'فانكومايسين (فموي)',
    brandNames: ['Vancocin', 'فانكوسين'],
    drugClass: 'Glycopeptide Antibiotic (Oral, Non-Absorbed)',
    drugClassAr: 'مضاد حيوي من مجموعة الجليكوببتيد (فموي، غير ممتص)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['infectious_diseases', 'internal_medicine'],
    keyHighlights: [
      'First-line therapy for Clostridioides difficile infection — oral vancomycin stays in the gut lumen with minimal systemic absorption',
      'IV vancomycin is INEFFECTIVE for C. difficile colitis since it does not reach the gut lumen in adequate concentration',
      'Not useful for any systemic/bloodstream infection when given orally due to negligible absorption'
    ],
    indications: [
      {
        indication: 'Clostridioides difficile infection, initial episode (non-severe or severe)',
        indicationAr: 'عدوى المطثية العسيرة، النوبة الأولى (غير شديدة أو شديدة)',
        adultDose: '125 mg PO four times daily for 10 days',
        adultDoseAr: '125 ملجم فموي 4 مرات يوميًا لمدة 10 أيام',
        pediatricDose: '10 mg/kg/dose (max 125 mg/dose) PO four times daily for 10 days',
        pediatricDoseAr: '10 ملجم/كجم/جرعة (بحد أقصى 125 ملجم/جرعة) فموي 4 مرات يوميًا لمدة 10 أيام',
        maxDose: '500 mg/day (125 mg x 4) for standard dosing',
        duration: '10 days standard course',
        route: 'PO'
      },
      {
        indication: 'Fulminant C. difficile colitis (with ileus or toxic megacolon)',
        indicationAr: 'التهاب القولون الخاطف بالمطثية العسيرة (مع انسداد أو تضخم القولون السمي)',
        adultDose: '500 mg PO/NG four times daily, PLUS IV metronidazole; consider rectal instillation if ileus present',
        adultDoseAr: '500 ملجم فموي/أنبوب أنف معدي 4 مرات يوميًا، مع ميترونيدازول وريدي؛ يُنظر في التنقيط الشرجي إذا وُجد انسداد',
        pediatricDose: 'Specialist-guided, weight-based',
        pediatricDoseAr: 'بإشراف متخصص حسب الوزن',
        maxDose: '2000 mg/day (500 mg x 4)',
        duration: 'Until clinical improvement, then taper per specialist guidance',
        route: 'PO/NG'
      },
      {
        indication: 'Recurrent C. difficile infection (tapered/pulsed regimen)',
        indicationAr: 'عدوى المطثية العسيرة المتكررة (نظام متدرج/نابض)',
        adultDose: 'Tapered and pulsed regimen per IDSA guidelines (e.g., 125 mg QID, then taper over weeks)',
        adultDoseAr: 'نظام متدرج ونابض وفق إرشادات جمعية الأمراض المعدية (مثل 125 ملجم 4 مرات يوميًا ثم تدريج على أسابيع)',
        pediatricDose: 'Specialist-guided per recurrence pattern',
        pediatricDoseAr: 'بإشراف متخصص حسب نمط التكرار',
        maxDose: 'Per tapering protocol',
        duration: 'Several weeks (tapering protocol)',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required (minimal systemic absorption)',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required; however, systemic accumulation theoretically possible with prolonged use and impaired gut barrier — monitor in high-risk patients',
      hemodialysis: 'Not applicable; minimal systemic absorption regardless of dialysis status'
    },
    hepaticAdjustment: 'No specific adjustment required',
    contraindications: [
      'Known hypersensitivity to vancomycin'
    ],
    mechanismOfAction: 'Inhibits bacterial cell wall synthesis by binding to the D-Ala-D-Ala terminus of peptidoglycan precursors, preventing cross-linking; given orally it acts locally within the gut lumen with negligible systemic absorption',
    mechanismOfActionAr: 'يثبط تخليق جدار الخلية البكتيري بالارتباط بنهاية الببتيدوغليكان، ويعمل محليًا داخل تجويف الأمعاء مع امتصاص جهازي ضئيل عند إعطائه فمويًا',
    halfLife: 'Not systemically absorbed — not clinically relevant orally',
    monitoringParameters: [
      'Clinical response (stool frequency/consistency, abdominal pain, fever)',
      'Signs of recurrence after completion of therapy',
      'Renal function if colitis is severe with impaired gut barrier (theoretical systemic absorption risk)',
      'Signs of ileus/toxic megacolon in severe disease'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'A critical distinction: oral vancomycin treats C. difficile colitis; IV vancomycin does NOT (it does not reach adequate gut lumen concentrations) — never substitute one route for the other',
      'Oral vancomycin is essentially non-absorbed in a healthy gut, so there is no need for serum level monitoring unlike IV vancomycin',
      'Fidaxomicin is an alternative first-line agent with a narrower spectrum (less disruption of normal flora) and lower recurrence rates, though at higher cost',
      'Fecal microbiota transplantation is considered for multiply recurrent C. difficile infection after failure of appropriate antibiotic courses'
    ]
  },
  {
    id: 'adenosine',
    genericName: 'Adenosine',
    genericNameAr: 'أدينوزين',
    brandNames: ['Adenocard', 'أدينوكارد'],
    drugClass: 'Endogenous Nucleoside / Antiarrhythmic',
    drugClassAr: 'نيوكليوسيد داخلي / مضاد لاضطراب نظم القلب',
    category: 'Rx',
    route: ['IV rapid push'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology'],
    keyHighlights: [
      'First-line agent for terminating stable SVT (AVNRT/AVRT) — both diagnostic and therapeutic',
      'Ultra-short half-life (<10 seconds) requires rapid IV push followed immediately by saline flush via the most proximal, largest IV line possible',
      'Causes a brief but often alarming sensation of impending doom, chest pressure, and flushing that resolves within seconds'
    ],
    indications: [
      {
        indication: 'Paroxysmal supraventricular tachycardia (SVT)',
        indicationAr: 'تسرع القلب فوق البطيني الانتيابي',
        adultDose: '6 mg rapid IV push, followed by 12 mg if no response after 1–2 min, may repeat 12 mg once more',
        adultDoseAr: '6 ملجم دفعة وريدية سريعة، تليها 12 ملجم إذا لم تكن هناك استجابة بعد 1-2 دقيقة، يمكن تكرار 12 ملجم مرة أخرى',
        pediatricDose: '0.1 mg/kg IV rapid push (max 6 mg first dose), then 0.2 mg/kg (max 12 mg) if needed',
        pediatricDoseAr: '0.1 ملجم/كجم دفعة وريدية سريعة (بحد أقصى 6 ملجم أول جرعة)، ثم 0.2 ملجم/كجم (بحد أقصى 12 ملجم) إذا لزم',
        maxDose: '12 mg per single dose; total of 30 mg per episode typically',
        duration: 'Single rapid pushes, repeated as needed per protocol',
        route: 'IV rapid push'
      },
      {
        indication: 'Diagnostic aid — differentiating wide-complex or unclear SVT rhythms',
        indicationAr: 'مساعد تشخيصي - تمييز أنماط تسرع القلب غير الواضحة أو المعقدة العريضة',
        adultDose: '6 mg rapid IV push with continuous ECG recording',
        adultDoseAr: '6 ملجم دفعة وريدية سريعة مع تسجيل مستمر لتخطيط القلب',
        pediatricDose: '0.1 mg/kg IV rapid push, weight-based',
        pediatricDoseAr: '0.1 ملجم/كجم دفعة وريدية سريعة حسب الوزن',
        maxDose: '6 mg initial diagnostic dose',
        duration: 'Single dose for diagnostic purposes',
        route: 'IV rapid push'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required; metabolized by cellular uptake and deamination, not renally cleared',
      hemodialysis: 'Not dialyzed (ultra-short half-life); no supplemental dose needed'
    },
    hepaticAdjustment: 'No adjustment required',
    contraindications: [
      'Second- or third-degree AV block or sick sinus syndrome without a functioning pacemaker',
      'Known hypersensitivity to adenosine',
      'Decompensated asthma/severe bronchospastic lung disease (relative — risk of bronchospasm)',
      'Use extreme caution with pre-excited atrial fibrillation (e.g., WPW with AF) — can precipitate ventricular fibrillation'
    ],
    mechanismOfAction: 'Activates A1 adenosine receptors in the AV node, transiently slowing AV nodal conduction and interrupting reentrant circuits dependent on the AV node',
    mechanismOfActionAr: 'ينشط مستقبلات الأدينوزين A1 في العقدة الأذينية البطينية، مسببًا تباطؤًا مؤقتًا في التوصيل عبر العقدة ويقطع الدوائر الانتكاسية المعتمدة عليها',
    halfLife: '<10 seconds',
    monitoringParameters: [
      'Continuous ECG monitoring during and after administration',
      'Blood pressure',
      'Respiratory status (bronchospasm risk)',
      'Resuscitation equipment/defibrillator immediately available'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'Caffeine and theophylline (adenosine receptor antagonists) reduce efficacy — higher doses may be needed',
      'Dipyridamole potentiates effect — reduce adenosine dose if co-administered'
    ],
    pearls: [
      'Must be given as a RAPID IV push (over 1–2 seconds) immediately followed by a rapid saline flush, ideally via the most proximal large-bore IV (e.g., antecubital) — a slow push will be metabolized before reaching the heart and will not work',
      'Warn the patient beforehand about the transient but intense "flushing, chest pressure, sense of impending doom" sensation that resolves within seconds — this is expected and self-limited',
      'Will NOT terminate atrial fibrillation/flutter or ventricular tachycardia (the arrhythmia does not depend on the AV node) — only transiently slows the ventricular rate, which can actually help with diagnosis',
      'Caffeine/theophylline antagonize its effect (may need higher doses); dipyridamole potentiates it (may need lower doses)'
    ]
  },
  {
    id: 'isosorbide_dinitrate',
    genericName: 'Isosorbide Dinitrate',
    genericNameAr: 'ثنائي نترات الأيزوسوربيد',
    brandNames: ['Isordil', 'BiDil (with hydralazine)', 'إيزورديل'],
    drugClass: 'Organic Nitrate / Vasodilator',
    drugClassAr: 'نيترات عضوية / موسع للأوعية',
    category: 'Rx',
    route: ['PO', 'sublingual'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology'],
    keyHighlights: [
      'Combined with hydralazine (BiDil) shows mortality benefit specifically in self-identified Black patients with heart failure with reduced ejection fraction',
      'Requires a nitrate-free interval each day to prevent tolerance (tachyphylaxis)',
      'Absolute contraindication with PDE5 inhibitors (sildenafil, tadalafil) — risk of profound, life-threatening hypotension'
    ],
    indications: [
      {
        indication: 'Angina pectoris (prevention)',
        indicationAr: 'الذبحة الصدرية (الوقاية)',
        adultDose: '5–40 mg PO 2–3 times daily (asymmetric schedule, e.g., 8am/1pm/6pm to allow nitrate-free interval)',
        adultDoseAr: '5-40 ملجم فموي 2-3 مرات يوميًا (جدول غير متماثل يسمح بفترة خالية من النترات)',
        pediatricDose: 'Not established for pediatric use',
        pediatricDoseAr: 'غير مستقر للاستخدام عند الأطفال',
        maxDose: '160 mg/day in divided doses',
        duration: 'Chronic, scheduled dosing with nitrate-free interval',
        route: 'PO'
      },
      {
        indication: 'Acute angina attack',
        indicationAr: 'نوبة الذبحة الصدرية الحادة',
        adultDose: '2.5–10 mg sublingual, may repeat every 5–10 min (max 3 doses in 15–30 min)',
        adultDoseAr: '2.5-10 ملجم تحت اللسان، قد تُكرر كل 5-10 دقائق (بحد أقصى 3 جرعات في 15-30 دقيقة)',
        pediatricDose: 'Not established',
        pediatricDoseAr: 'غير مستقر',
        maxDose: '3 doses within 15–30 minutes; seek emergency care if unrelieved',
        duration: 'As needed for acute symptoms',
        route: 'Sublingual'
      },
      {
        indication: 'Heart failure with reduced ejection fraction (combined with hydralazine, self-identified Black patients)',
        indicationAr: 'قصور القلب بانخفاض الكسر القذفي (مع هيدرالازين، للمرضى من ذوي البشرة السوداء)',
        adultDose: '20 mg isosorbide dinitrate / 37.5 mg hydralazine PO three times daily, titrate to 40 mg/75 mg three times daily',
        adultDoseAr: '20 ملجم إيزوسوربيد / 37.5 ملجم هيدرالازين فموي 3 مرات يوميًا، تُزاد إلى 40/75 ملجم 3 مرات يوميًا',
        pediatricDose: 'Not established',
        pediatricDoseAr: 'غير مستقر',
        maxDose: '40 mg isosorbide dinitrate / 75 mg hydralazine three times daily',
        duration: 'Chronic, added to standard heart failure therapy',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Use with caution in severe hepatic impairment; no formal dose adjustment established',
    contraindications: [
      'Concurrent use with PDE5 inhibitors (sildenafil, tadalafil, vardenafil) — risk of severe, life-threatening hypotension',
      'Severe hypotension or uncorrected hypovolemia',
      'Severe anemia',
      'Increased intracranial pressure',
      'Right ventricular infarction with hypotension'
    ],
    mechanismOfAction: 'Metabolized to nitric oxide, which activates guanylate cyclase, increasing cGMP and causing smooth muscle relaxation; predominantly venodilation at lower doses, reducing preload and myocardial oxygen demand',
    mechanismOfActionAr: 'يتحول إلى أكسيد النيتريك الذي ينشط إنزيم غوانيلات السيكلاز، مما يرفع cGMP ويسبب ارتخاء العضلات الملساء؛ بشكل غالب يوسع الأوردة بالجرعات المنخفضة مما يقلل الحمل القبلي والطلب على الأكسجين',
    halfLife: '1–4 hours (parent); active metabolite isosorbide mononitrate has longer half-life',
    monitoringParameters: [
      'Blood pressure (orthostatic hypotension)',
      'Heart rate',
      'Headache (common, dose-related)',
      'Signs of nitrate tolerance (reduced efficacy with chronic continuous use)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'Avoid alcohol (additive hypotension)'
    ],
    pearls: [
      'ALWAYS ask about recent PDE5 inhibitor use (sildenafil/tadalafil/vardenafil) before administering any nitrate — concurrent use can cause severe, refractory hypotension',
      'A nitrate-free interval of at least 8–12 hours daily (typically overnight) is essential to prevent tolerance — asymmetric dosing schedules (e.g., 7am, 1pm, not evening) achieve this',
      'Headache is extremely common and usually improves with continued use or can be managed with acetaminophen rather than discontinuing therapy',
      'The hydralazine-isosorbide dinitrate combination (BiDil) is specifically indicated as add-on therapy in self-identified Black patients with HFrEF based on the A-HeFT trial showing mortality benefit in this population'
    ]
  },
  {
    id: 'carvedilol',
    genericName: 'Carvedilol',
    genericNameAr: 'كارفيديلول',
    brandNames: ['Coreg', 'كوريج'],
    drugClass: 'Non-Selective Beta-Blocker with Alpha-1 Blocking Activity',
    drugClassAr: 'حاصر بيتا غير انتقائي مع نشاط حاصر ألفا-1',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['cardiology'],
    keyHighlights: [
      'One of only three beta-blockers (with bisoprolol and metoprolol succinate) proven to reduce mortality in heart failure with reduced ejection fraction',
      'Combined alpha-1 and non-selective beta blockade provides additional vasodilation but higher orthostatic hypotension risk than selective beta-blockers',
      'Must be taken with food to slow absorption and reduce peak-related orthostatic hypotension'
    ],
    indications: [
      {
        indication: 'Heart failure with reduced ejection fraction',
        indicationAr: 'قصور القلب بانخفاض الكسر القذفي',
        adultDose: '3.125 mg PO twice daily, double every 2 weeks as tolerated up to 25–50 mg twice daily',
        adultDoseAr: '3.125 ملجم فموي مرتين يوميًا، تُضاعف كل أسبوعين حسب التحمل حتى 25-50 ملجم مرتين يوميًا',
        pediatricDose: 'Not established for heart failure in children',
        pediatricDoseAr: 'غير مستقر لقصور القلب عند الأطفال',
        maxDose: '50 mg twice daily (>85 kg); 25 mg twice daily (≤85 kg)',
        duration: 'Chronic, lifelong in HFrEF',
        route: 'PO'
      },
      {
        indication: 'Hypertension',
        indicationAr: 'ارتفاع ضغط الدم',
        adultDose: '6.25 mg PO twice daily, titrate up to 25 mg twice daily based on response',
        adultDoseAr: '6.25 ملجم فموي مرتين يوميًا، تُزاد حتى 25 ملجم مرتين يوميًا حسب الاستجابة',
        pediatricDose: 'Not established',
        pediatricDoseAr: 'غير مستقر',
        maxDose: '50 mg/day',
        duration: 'Chronic',
        route: 'PO'
      },
      {
        indication: 'Post-myocardial infarction left ventricular dysfunction',
        indicationAr: 'خلل البطين الأيسر بعد احتشاء عضلة القلب',
        adultDose: '6.25 mg PO twice daily, titrate up to 25 mg twice daily as tolerated',
        adultDoseAr: '6.25 ملجم فموي مرتين يوميًا، تُزاد حتى 25 ملجم مرتين يوميًا حسب التحمل',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: '25 mg twice daily',
        duration: 'Chronic, lifelong',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required; primarily hepatic metabolism',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Contraindicated in severe hepatic impairment (clinically manifest liver disease) — extensively hepatically metabolized',
    contraindications: [
      'Decompensated (acute) heart failure requiring IV inotropic therapy',
      'Severe bradycardia, second- or third-degree AV block (without pacemaker), sick sinus syndrome',
      'Severe hepatic impairment',
      'Severe bronchospastic disease (e.g., asthma requiring bronchodilator therapy) — relative, non-selective beta blockade',
      'Cardiogenic shock',
      'Severe bradycardia (<50 bpm)'
    ],
    mechanismOfAction: 'Non-selective competitive antagonist at beta-1 and beta-2 adrenergic receptors, plus alpha-1 adrenergic receptor blockade, producing combined negative chronotropic/inotropic effect and peripheral vasodilation',
    mechanismOfActionAr: 'مضاد تنافسي غير انتقائي لمستقبلات بيتا-1 وبيتا-2 الأدرينالية، بالإضافة لحصر مستقبلات ألفا-1، مما يُحدث تأثيرًا سلبيًا على معدل ضربات القلب وقوة التقلص وتوسعًا وعائيًا محيطيًا',
    halfLife: '7–10 hours',
    monitoringParameters: [
      'Heart rate and blood pressure, including orthostatic measurements',
      'Signs of worsening heart failure during up-titration',
      'Weight (fluid retention)',
      'Blood glucose in diabetics (can mask hypoglycemia symptoms)',
      'Hepatic function'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'Take with food to slow absorption rate and reduce risk of orthostatic hypotension'
    ],
    pearls: [
      'Never initiate in acutely decompensated heart failure — start only once the patient is euvolemic and hemodynamically stable, and uptitrate slowly over weeks',
      'Combined alpha/beta blockade causes more orthostatic hypotension than pure beta-blockers — counsel patients to rise slowly, especially after the first few doses',
      'Along with bisoprolol and metoprolol succinate, one of the three evidence-based beta-blockers for HFrEF mortality reduction — other beta-blockers lack this specific evidence base',
      'Abrupt discontinuation can precipitate rebound angina, hypertension, or arrhythmia — must be tapered when stopping'
    ]
  },
  {
    id: 'succinylcholine',
    genericName: 'Succinylcholine',
    genericNameAr: 'سكسينيل كولين',
    brandNames: ['Anectine', 'Quelicin', 'أنكتين'],
    drugClass: 'Depolarizing Neuromuscular Blocker',
    drugClassAr: 'مرخي عضلي مزيل للاستقطاب',
    category: 'Rx',
    route: ['IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency'],
    keyHighlights: [
      'Fastest onset (~45 seconds) and shortest duration (~5–10 min) of any neuromuscular blocker — ideal for rapid sequence intubation with anticipated difficult airway',
      'Causes transient hyperkalemia — contraindicated in hyperkalemia-prone conditions (burns, crush injury, neuromuscular disease, prolonged immobilization)',
      'Triggers malignant hyperthermia in genetically susceptible patients — a life-threatening hypermetabolic crisis requiring immediate dantrolene'
    ],
    indications: [
      {
        indication: 'Rapid sequence intubation',
        indicationAr: 'التنبيب السريع المتسلسل',
        adultDose: '1–1.5 mg/kg IV push',
        adultDoseAr: '1-1.5 ملجم/كجم دفعة وريدية',
        pediatricDose: '1–2 mg/kg IV (higher mg/kg needed in infants/young children due to larger volume of distribution); 3–4 mg/kg IM if IV access unavailable',
        pediatricDoseAr: '1-2 ملجم/كجم وريدي (جرعة أعلى بالكجم عند الرضع/الأطفال الصغار)؛ 3-4 ملجم/كجم عضلي إذا تعذر الوصول الوريدي',
        maxDose: 'Weight-based; no fixed max for single intubating dose',
        duration: 'Onset ~45 sec, duration 5–10 min',
        route: 'IV'
      },
      {
        indication: 'Brief surgical procedures requiring short-duration paralysis',
        indicationAr: 'عمليات جراحية قصيرة تتطلب شلل عضلي قصير المدى',
        adultDose: '0.3–1.1 mg/kg IV initial, may supplement with continuous infusion 0.5–10 mg/min',
        adultDoseAr: '0.3-1.1 ملجم/كجم وريدي أولية، يمكن إضافة تسريب مستمر 0.5-10 ملجم/دقيقة',
        pediatricDose: 'Weight-based per anesthesia protocol',
        pediatricDoseAr: 'حسب الوزن وفق بروتوكول التخدير',
        maxDose: 'Titrate to procedure duration and train-of-four',
        duration: 'Repeated boluses or infusion as needed intraoperatively',
        route: 'IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'Use with caution — avoid in patients with hyperkalemia or at risk of hyperkalemia from renal failure',
      hemodialysis: 'Not significantly dialyzed; use with caution given hyperkalemia risk'
    },
    hepaticAdjustment: 'Prolonged effect possible in severe hepatic impairment or pseudocholinesterase deficiency (reduced drug metabolism) — monitor closely',
    contraindications: [
      'Personal or family history of malignant hyperthermia',
      'Known hyperkalemia or conditions predisposing to hyperkalemia (burns, crush injury, severe trauma, denervating neuromuscular disease, prolonged immobilization >72 hours)',
      'Pseudocholinesterase deficiency (relative — prolonged paralysis)',
      'Penetrating eye injury or acute narrow-angle glaucoma (increases intraocular pressure)',
      'Known hypersensitivity'
    ],
    blackBoxWarning: 'Can cause rhabdomyolysis, hyperkalemia with cardiac arrest in children with undiagnosed skeletal muscle myopathy (use particularly with caution for elective procedures in pediatric patients); may trigger malignant hyperthermia',
    blackBoxWarningAr: 'قد يسبب انحلال العضلات وفرط بوتاسيوم الدم مع سكتة قلبية عند الأطفال المصابين باعتلال عضلي غير مشخص؛ قد يُحفز فرط الحرارة الخبيث',
    mechanismOfAction: 'Binds and persistently activates nicotinic acetylcholine receptors at the neuromuscular junction, causing sustained depolarization (initial fasciculations) followed by flaccid paralysis as the receptor becomes desensitized',
    mechanismOfActionAr: 'يرتبط بمستقبلات الأسيتيل كولين النيكوتينية في الموصل العصبي العضلي وينشطها باستمرار، مسببًا استقطابًا مستدامًا (رعشات ابتدائية) يتبعه شلل رخو',
    halfLife: '~47 seconds (rapidly hydrolyzed by plasma pseudocholinesterase)',
    monitoringParameters: [
      'Serum potassium before and after administration in at-risk patients',
      'Signs of malignant hyperthermia (rising temperature, tachycardia, muscle rigidity, elevated CO2)',
      'Cardiac rhythm (bradycardia, especially with repeat dosing or in children)',
      'Train-of-four if repeated dosing used',
      'Adequate airway management readiness'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Causes a transient, usually clinically insignificant rise in serum potassium (~0.5 mEq/L) in normal patients — but can cause lethal hyperkalemia in burns, crush injury, or denervating conditions, where rocuronium is strongly preferred instead',
      'Malignant hyperthermia is a rare but life-threatening complication requiring immediate dantrolene administration, active cooling, and discontinuation of all triggering agents',
      'Causes brief muscle fasciculations on administration (from initial depolarization) which can cause post-procedure myalgia — can be blunted with a small "defasciculating" dose of a non-depolarizing agent beforehand, though this is less commonly practiced now',
      'Repeated dosing or infusion can cause bradycardia, especially in children — atropine should be available'
    ]
  },
  {
    id: 'lidocaine',
    genericName: 'Lidocaine',
    genericNameAr: 'ليدوكايين',
    brandNames: ['Xylocaine', 'Lidoderm (patch)', 'زايلوكايين'],
    drugClass: 'Amide Local Anesthetic / Class IB Antiarrhythmic',
    drugClassAr: 'مخدر موضعي من مجموعة الأميد / مضاد لاضطراب نظم القلب من الفئة IB',
    category: 'Rx',
    route: ['IV', 'topical', 'infiltration', 'nerve block'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-17',
    targetSpecialties: ['icu_emergency', 'cardiology'],
    keyHighlights: [
      'Dual clinical identity: most common local anesthetic in medicine AND a second-line IV antiarrhythmic for ventricular arrhythmias',
      'Local anesthetic systemic toxicity (LAST) is a feared complication of regional anesthesia/nerve blocks — treated with IV lipid emulsion',
      'Cleared almost entirely by the liver — toxicity accumulates rapidly in hepatic impairment or reduced hepatic blood flow (e.g., heart failure, shock)'
    ],
    indications: [
      {
        indication: 'Local/regional anesthesia (infiltration, nerve block)',
        indicationAr: 'التخدير الموضعي/الإقليمي (التسريب، الحصار العصبي)',
        adultDose: 'Infiltration: up to 4.5 mg/kg (max 300 mg) without epinephrine; up to 7 mg/kg (max 500 mg) with epinephrine',
        adultDoseAr: 'تسريب: حتى 4.5 ملجم/كجم (بحد أقصى 300 ملجم) بدون إبينفرين؛ حتى 7 ملجم/كجم (بحد أقصى 500 ملجم) مع إبينفرين',
        pediatricDose: '4–4.5 mg/kg (max per adult limits), weight-based',
        pediatricDoseAr: '4-4.5 ملجم/كجم (بحد أقصى الحدود البالغة)، حسب الوزن',
        maxDose: '300 mg without epinephrine; 500 mg with epinephrine (adult)',
        duration: 'Single administration, duration 1–2 hours (longer with epinephrine)',
        route: 'Infiltration/nerve block'
      },
      {
        indication: 'Ventricular arrhythmias (VT/VF, ACLS alternative to amiodarone)',
        indicationAr: 'اضطرابات نظم القلب البطينية (دعم القلب المتقدم، بديل للأميودارون)',
        adultDose: '1–1.5 mg/kg IV bolus, may repeat 0.5–0.75 mg/kg every 5–10 min (max total 3 mg/kg), then infusion 1–4 mg/min',
        adultDoseAr: '1-1.5 ملجم/كجم دفعة وريدية، يمكن تكرار 0.5-0.75 ملجم/كجم كل 5-10 دقائق (بحد أقصى إجمالي 3 ملجم/كجم)، ثم تسريب 1-4 ملجم/دقيقة',
        pediatricDose: '1 mg/kg IV bolus, then infusion 20–50 mcg/kg/min',
        pediatricDoseAr: '1 ملجم/كجم دفعة وريدية، ثم تسريب 20-50 ميكروجرام/كجم/دقيقة',
        maxDose: '3 mg/kg total bolus dosing',
        duration: 'Bolus then continuous infusion until rhythm controlled/transitioned',
        route: 'IV'
      },
      {
        indication: 'Topical anesthesia (minor procedures, pruritus)',
        indicationAr: 'التخدير الموضعي (إجراءات بسيطة، الحكة)',
        adultDose: 'Apply topical gel/patch/cream to intact skin or mucosa as directed, max 3 patches/day (5% patch)',
        adultDoseAr: 'يُطبّق هلام/لاصقة/كريم موضعي على الجلد السليم أو الغشاء المخاطي حسب التوجيه، بحد أقصى 3 لاصقات/يوم',
        pediatricDose: 'Weight-adjusted topical application, avoid large body surface area in infants',
        pediatricDoseAr: 'تطبيق موضعي معدّل حسب الوزن، يُتجنّب على مساحة كبيرة من الجسم عند الرضع',
        maxDose: 'Per product labeling; avoid excessive application area/duration',
        duration: 'As needed per product directions',
        route: 'Topical'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required for single doses; monitor with prolonged IV infusion',
      crclBelow10: 'Use with caution with prolonged IV infusion; active metabolites may accumulate',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce IV infusion rate/maintenance dose significantly in hepatic impairment or reduced hepatic perfusion (heart failure, shock) — primarily hepatically metabolized with risk of toxic accumulation',
    contraindications: [
      'Known hypersensitivity to amide-type local anesthetics',
      'Severe heart block (second- or third-degree, without pacemaker) for IV antiarrhythmic use',
      'Wolff-Parkinson-White syndrome or other accessory pathway arrhythmias (IV use, relative)',
      'Adams-Stokes syndrome'
    ],
    blackBoxWarning: 'Viscous oral lidocaine solution: cases of serious adverse effects including death have occurred from accidental overdose in young children; use exact measuring device and lowest effective dose',
    blackBoxWarningAr: 'محلول الليدوكايين اللزج الفموي: حدثت حالات تأثيرات جانبية خطيرة تشمل الوفاة من جرعة زائدة عرضية عند الأطفال الصغار؛ يجب استخدام أداة قياس دقيقة وأقل جرعة فعالة',
    mechanismOfAction: 'Blocks voltage-gated sodium channels in neuronal membranes (local anesthesia) and in cardiac Purkinje/ventricular tissue (antiarrhythmic), reducing excitability and conduction',
    mechanismOfActionAr: 'يحجب قنوات الصوديوم المعتمدة على الجهد في الأغشية العصبية (التخدير الموضعي) وفي نسيج القلب (مضاد لاضطراب النظم)، مما يقلل القابلية للاستثارة والتوصيل',
    halfLife: '1.5–2 hours (IV, prolonged in hepatic impairment/heart failure)',
    monitoringParameters: [
      'Signs of local anesthetic systemic toxicity (perioral numbness, tinnitus, confusion, seizures, cardiac arrhythmia) during regional techniques',
      'ECG and blood pressure during IV antiarrhythmic use',
      'CNS toxicity signs (drowsiness, confusion, tremor) with elevated serum levels',
      'Hepatic function and perfusion status'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Safe',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Local anesthetic systemic toxicity (LAST) from inadvertent intravascular injection or excessive dose presents with early CNS signs (perioral numbness, tinnitus) progressing to seizures and cardiac arrest — IV lipid emulsion (Intralipid) is the specific treatment',
      'Always calculate maximum safe dose by weight BEFORE performing nerve blocks or large-volume infiltration, especially in combination with other local anesthetics',
      'Addition of epinephrine prolongs duration and reduces systemic absorption/peak levels by causing local vasoconstriction — but should be avoided in digits, nose, ears, penis (end-arterial areas)',
      'As a Class IB antiarrhythmic, now a second-line option after amiodarone for shock-refractory VF/pulseless VT in ACLS'
    ]
  },
  {
    id: 'hydrocortisone',
    genericName: 'Hydrocortisone',
    genericNameAr: 'هيدروكورتيزون',
    brandNames: ['Solu-Cortef', 'Cortef', 'سولوكورتيف'],
    drugClass: 'Short-Acting Corticosteroid (Glucocorticoid with Mineralocorticoid Activity)',
    drugClassAr: 'كورتيكوستيرويد قصير المفعول (له نشاط مشابه للألدوستيرون)',
    category: 'Rx',
    route: ['IV', 'IM', 'PO', 'topical'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['icu_emergency', 'internal_medicine'],
    keyHighlights: [
      'First-line for adrenal insufficiency (Addisonian crisis) and physiologic replacement — closest glucocorticoid to endogenous cortisol',
      'Retains significant mineralocorticoid activity unlike dexamethasone/methylprednisolone, making it preferred for adrenal crisis',
      'Stress-dose hydrocortisone is standard in septic shock refractory to fluids/vasopressors'
    ],
    indications: [
      {
        indication: 'Acute adrenal insufficiency (Addisonian crisis)',
        indicationAr: 'قصور الغدة الكظرية الحاد (نوبة أديسون)',
        adultDose: '100 mg IV bolus, then 50 mg IV every 6 hours (or 200 mg/24hr continuous infusion)',
        adultDoseAr: '100 ملجم دفعة وريدية، ثم 50 ملجم وريدي كل 6 ساعات (أو 200 ملجم/24 ساعة تسريب مستمر)',
        pediatricDose: '1–2 mg/kg IV bolus, then 25–150 mg/day divided per age/weight',
        pediatricDoseAr: '1-2 ملجم/كجم دفعة وريدية، ثم 25-150 ملجم/يوم مقسمة حسب العمر/الوزن',
        maxDose: '200 mg/day typically in crisis, tapered rapidly',
        duration: '24–72 hours then transition to maintenance oral replacement',
        route: 'IV'
      },
      {
        indication: 'Chronic adrenal insufficiency (maintenance replacement)',
        indicationAr: 'قصور الغدة الكظرية المزمن (العلاج التعويضي)',
        adultDose: '15–25 mg/day PO divided (e.g., 10–15 mg AM, 5–10 mg afternoon)',
        adultDoseAr: '15-25 ملجم/يوم فموي مقسمة (مثل 10-15 ملجم صباحًا، 5-10 ملجم بعد الظهر)',
        pediatricDose: '6–10 mg/m²/day PO divided, specialist-guided',
        pediatricDoseAr: '6-10 ملجم/م²/يوم فموي مقسمة، بإشراف متخصص',
        maxDose: 'Individualized; increase 2–3x during physiologic stress (illness, surgery)',
        duration: 'Lifelong',
        route: 'PO'
      },
      {
        indication: 'Septic shock, refractory to fluids/vasopressors (stress-dose steroids)',
        indicationAr: 'الصدمة الإنتانية المعندة على السوائل والرافعات الوعائية',
        adultDose: '50 mg IV every 6 hours or 200 mg/day continuous infusion',
        adultDoseAr: '50 ملجم وريدي كل 6 ساعات أو 200 ملجم/يوم تسريب مستمر',
        pediatricDose: 'Specialist ICU-guided weight-based dosing',
        pediatricDoseAr: 'جرعة حسب الوزن بإشراف العناية المركزة',
        maxDose: '200–300 mg/day',
        duration: 'Until vasopressor independence, then taper',
        route: 'IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required; monitor fluid/electrolyte status',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment typically required; monitor closely in severe hepatic impairment',
    contraindications: [
      'Systemic fungal infections (unless life-threatening and specifically indicated)',
      'Known hypersensitivity to hydrocortisone',
      'Live vaccine administration during high-dose therapy (relative)'
    ],
    mechanismOfAction: 'Binds intracellular glucocorticoid receptors, modulating gene transcription to suppress inflammatory mediators; also binds mineralocorticoid receptors in the renal tubule promoting sodium retention and potassium excretion',
    mechanismOfActionAr: 'يرتبط بمستقبلات الجلوكوكورتيكويد داخل الخلايا، معدّلًا نسخ الجينات لتثبيط الوسائط الالتهابية؛ كما يرتبط بمستقبلات الألدوستيرون في الكلى محفزًا احتباس الصوديوم وطرح البوتاسيوم',
    halfLife: '1.5–2 hours (biologic effect lasts 8–12 hours)',
    monitoringParameters: [
      'Blood pressure and volume status',
      'Serum electrolytes (sodium, potassium)',
      'Blood glucose',
      'Signs of infection (can be masked by steroid use)',
      'Signs of adrenal crisis resolution (hemodynamic stability)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'Take oral doses with food to reduce GI upset'
    ],
    pearls: [
      'Unlike dexamethasone, hydrocortisone has substantial mineralocorticoid activity — it is the preferred agent for adrenal crisis since it addresses both glucocorticoid and mineralocorticoid deficiency simultaneously',
      'Patients on chronic replacement must be educated on "sick day rules" — double or triple their dose during illness, fever, or before surgery to mimic physiologic stress response',
      'Never abruptly stop chronic corticosteroid therapy — risk of precipitating adrenal crisis; taper gradually',
      'If adrenal crisis is suspected but diagnosis unconfirmed, treat empirically with hydrocortisone immediately rather than delaying for cosyntropin stimulation test results'
    ]
  },
  {
    id: 'desmopressin',
    genericName: 'Desmopressin (DDAVP)',
    genericNameAr: 'ديسموبريسين',
    brandNames: ['DDAVP', 'Stimate', 'ديدافب'],
    drugClass: 'Synthetic Vasopressin Analog (V2-Selective)',
    drugClassAr: 'نظير تخليقي للفازوبريسين (انتقائي لمستقبلات V2)',
    category: 'Rx',
    route: ['IV', 'intranasal', 'PO', 'SC'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['internal_medicine', 'pediatrics'],
    keyHighlights: [
      'Treatment of choice for central diabetes insipidus — V2-selective so lacks the vasoconstrictive (V1) effects of vasopressin',
      'Also used in mild hemophilia A and von Willebrand disease to release stored factor VIII/vWF from endothelium',
      'Severe hyponatremia risk with excessive free water intake — fluid restriction counseling is essential'
    ],
    indications: [
      {
        indication: 'Central diabetes insipidus',
        indicationAr: 'البوال التفهي المركزي',
        adultDose: '0.1–0.4 mg PO 2–3 times daily, or 10–40 mcg intranasal divided 1–2 times daily',
        adultDoseAr: '0.1-0.4 ملجم فموي 2-3 مرات يوميًا، أو 10-40 ميكروجرام أنفي مقسمة 1-2 مرة يوميًا',
        pediatricDose: '0.05 mg PO twice daily initially, titrate; intranasal weight-based per specialist',
        pediatricDoseAr: '0.05 ملجم فموي مرتين يوميًا مبدئيًا، تُعدّل؛ الأنفي حسب الوزن بإشراف متخصص',
        maxDose: '1.2 mg/day PO (highly individualized)',
        duration: 'Chronic, lifelong',
        route: 'PO/intranasal'
      },
      {
        indication: 'Mild hemophilia A / von Willebrand disease (bleeding prophylaxis/treatment)',
        indicationAr: 'الهيموفيليا الخفيفة A / داء فون ويلبراند (الوقاية/علاج النزيف)',
        adultDose: '0.3 mcg/kg IV infusion over 15–30 min, or 150–300 mcg intranasal single dose before procedure',
        adultDoseAr: '0.3 ميكروجرام/كجم تسريب وريدي خلال 15-30 دقيقة، أو 150-300 ميكروجرام أنفي جرعة واحدة قبل الإجراء',
        pediatricDose: '0.3 mcg/kg IV, weight-based (same as adult per kg)',
        pediatricDoseAr: '0.3 ميكروجرام/كجم وريدي، حسب الوزن (نفس جرعة البالغين بالكجم)',
        maxDose: 'Single dose typically, may repeat once after 6–24 hours (tachyphylaxis with repeated use)',
        duration: 'Single dose pre-procedure or as needed for minor bleeding',
        route: 'IV/intranasal'
      },
      {
        indication: 'Primary nocturnal enuresis',
        indicationAr: 'التبول اللا إرادي الليلي الأساسي',
        adultDose: 'Not typically applicable (pediatric indication)',
        adultDoseAr: 'غير مطبق عادة (دواعي استخدام عند الأطفال)',
        pediatricDose: '0.2 mg PO at bedtime, titrate up to 0.6 mg if needed (age ≥6 years)',
        pediatricDoseAr: '0.2 ملجم فموي عند النوم، تُزاد حتى 0.6 ملجم حسب الحاجة (عمر 6 سنوات فأكبر)',
        maxDose: '0.6 mg PO at bedtime',
        duration: 'Chronic with periodic reassessment; fluid restriction after evening dose essential',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'Use with caution; increased risk of hyponatremia/fluid retention',
      crclBelow10: 'Avoid if possible; significantly increased hyponatremia risk',
      hemodialysis: 'Not dialyzed; use with extreme caution given fluid balance concerns'
    },
    hepaticAdjustment: 'No specific adjustment required',
    contraindications: [
      'Moderate to severe renal impairment (relative — increased hyponatremia risk)',
      'Hyponatremia or history of hyponatremia',
      'Syndrome of inappropriate antidiuretic hormone secretion (SIADH)',
      'Habitual or psychogenic polydipsia',
      'Known hypersensitivity'
    ],
    blackBoxWarning: 'Hyponatremia and seizures have occurred, particularly in children and elderly, due to excessive fluid retention — fluid restriction is essential, especially for the nocturnal enuresis indication',
    blackBoxWarningAr: 'حدث نقص صوديوم الدم ونوبات تشنجية، خاصة عند الأطفال والمسنين، بسبب احتباس السوائل المفرط - تقييد السوائل ضروري خاصة لدواعي التبول الليلي',
    mechanismOfAction: 'Selectively activates V2 receptors in renal collecting ducts, increasing water reabsorption via aquaporin channels; also releases von Willebrand factor and factor VIII from vascular endothelial storage sites with minimal V1 (vasopressor) activity',
    mechanismOfActionAr: 'ينشط انتقائيًا مستقبلات V2 في القنوات الكلوية الجامعة، مما يزيد إعادة امتصاص الماء؛ كما يُحرر عامل فون ويلبراند والعامل الثامن من الخلايا البطانية مع نشاط ضئيل على مستقبلات V1',
    halfLife: '2–4 hours (IV); longer with intranasal/oral',
    monitoringParameters: [
      'Serum sodium (baseline and periodically, especially early in therapy)',
      'Urine output and osmolality in diabetes insipidus',
      'Fluid intake — counsel on restriction, especially evening doses',
      'Signs of hyponatremia (headache, confusion, seizures)',
      'Factor VIII/vWF levels when used for bleeding disorders'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Safe',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Fluid intake should be limited to only what is needed to satisfy thirst while on desmopressin — excess free water intake combined with the drug\'s antidiuretic effect is the main cause of dangerous hyponatremia',
      'Tachyphylaxis (reduced response) occurs with repeated dosing for bleeding indications within 24–48 hours, limiting its use to occasional bleeding episodes or pre-procedure prophylaxis rather than chronic hemostasis',
      'Preferred over vasopressin for diabetes insipidus because its V2 selectivity avoids the vasoconstrictive/coronary ischemia risk of V1 activation',
      'Intranasal spray and oral tablet are NOT interchangeable on a 1:1 mcg/mg basis — dosing must be specifically converted'
    ]
  },
  {
    id: 'oxytocin',
    genericName: 'Oxytocin',
    genericNameAr: 'أوكسيتوسين',
    brandNames: ['Pitocin', 'Syntocinon', 'بيتوسين'],
    drugClass: 'Uterotonic Hormone (Posterior Pituitary Hormone)',
    drugClassAr: 'هرمون منشط لتقلص الرحم',
    category: 'Rx',
    route: ['IV infusion', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['icu_emergency', 'nursing'],
    keyHighlights: [
      'First-line uterotonic for labor induction/augmentation and postpartum hemorrhage prevention/treatment',
      'High-alert medication — overdose can cause uterine hyperstimulation, fetal distress, and uterine rupture',
      'Rapid IV push of undiluted oxytocin can cause severe hypotension and reflex tachycardia — always given as a controlled infusion'
    ],
    indications: [
      {
        indication: 'Labor induction/augmentation',
        indicationAr: 'تحريض/تعزيز المخاض',
        adultDose: 'Initial 0.5–2 milliunits/min IV infusion, titrate every 15–60 min by 1–2 milliunits/min per protocol',
        adultDoseAr: 'بداية 0.5-2 ملي وحدة/دقيقة تسريب وريدي، تُعدّل كل 15-60 دقيقة بزيادة 1-2 ملي وحدة/دقيقة حسب البروتوكول',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: 'Typically capped at 20–40 milliunits/min per institutional protocol',
        duration: 'Continuous infusion throughout labor, titrated to contraction pattern',
        route: 'IV infusion'
      },
      {
        indication: 'Postpartum hemorrhage prevention (active management of third stage)',
        indicationAr: 'الوقاية من نزيف ما بعد الولادة (الإدارة الفعالة للمرحلة الثالثة)',
        adultDose: '10 units IM, or 10–40 units in 500–1000 mL IV fluid infused after delivery',
        adultDoseAr: '10 وحدة عضلي، أو 10-40 وحدة في 500-1000 مل سوائل وريدية بعد الولادة',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: '40 units/1000 mL infusion typical maximum concentration',
        duration: 'Single dose/short infusion immediately after delivery',
        route: 'IM/IV infusion'
      },
      {
        indication: 'Postpartum hemorrhage treatment (active bleeding)',
        indicationAr: 'علاج نزيف ما بعد الولادة (نزيف نشط)',
        adultDose: '10–40 units in 500–1000 mL IV fluid, infused rapidly, plus uterine massage',
        adultDoseAr: '10-40 وحدة في 500-1000 مل سوائل وريدية، تُسرّب بسرعة، مع تدليك الرحم',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: 'Per institutional PPH protocol; add second-line agents (methylergonovine, misoprostol, tranexamic acid) if unresponsive',
        duration: 'Until bleeding controlled',
        route: 'IV infusion'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required; monitor fluid balance',
      hemodialysis: 'Not dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment required',
    contraindications: [
      'Significant cephalopelvic disproportion or fetal malposition preventing vaginal delivery',
      'Fetal distress where delivery is not imminent',
      'Unfavorable fetal positions (e.g., transverse lie) undeliverable without conversion',
      'Hypertonic or hyperactive uterus',
      'Prior classical cesarean section or significant uterine surgery (relative — rupture risk)'
    ],
    blackBoxWarning: 'Should not be used for elective labor induction without medical indication; inappropriate use can cause uterine hyperstimulation, fetal distress, uterine rupture, and water intoxication with high-dose prolonged infusion',
    blackBoxWarningAr: 'يجب عدم استخدامه لتحريض الولادة الاختياري بدون مؤشر طبي؛ الاستخدام غير الملائم قد يسبب فرط تحفيز الرحم وضيق الجنين وتمزق الرحم وتسمم مائي مع التسريب المطول بجرعات عالية',
    mechanismOfAction: 'Binds oxytocin receptors on uterine myometrium, increasing intracellular calcium and triggering rhythmic smooth muscle contractions; also causes milk ejection via receptors in mammary myoepithelial cells',
    mechanismOfActionAr: 'يرتبط بمستقبلات الأوكسيتوسين في عضلة الرحم، مما يزيد الكالسيوم داخل الخلايا ويُحدث تقلصات عضلية منتظمة؛ كما يسبب إفراز الحليب عبر مستقبلات في الخلايا العضلية الطلائية للثدي',
    halfLife: '1–6 minutes',
    monitoringParameters: [
      'Uterine contraction frequency, duration, and intensity (tocodynamometry)',
      'Fetal heart rate (continuous monitoring during induction/augmentation)',
      'Blood pressure (hypotension with rapid undiluted IV push)',
      'Signs of uterine hyperstimulation/tetany',
      'Fluid balance/serum sodium with prolonged high-dose use (water intoxication risk)'
    ],
    pregnancyCategory: 'Compatible',
    lactationSafety: 'Safe',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Always administer via controlled infusion pump, never as a rapid IV push of concentrated solution — this has caused severe maternal hypotension and cardiovascular collapse',
      'Continuous electronic fetal monitoring is mandatory during administration due to the hyperstimulation/fetal distress risk',
      'Has a very short half-life (minutes), so uterine tone normalizes quickly after stopping the infusion if hyperstimulation occurs',
      'Prolonged infusion of large volumes of hypotonic IV fluid carrying oxytocin can rarely cause water intoxication/hyponatremia due to oxytocin\'s structural similarity to vasopressin (weak ADH-like effect)'
    ]
  },
  {
    id: 'misoprostol',
    genericName: 'Misoprostol',
    genericNameAr: 'ميزوبروستول',
    brandNames: ['Cytotec', 'سايتوتك'],
    drugClass: 'Synthetic Prostaglandin E1 Analog',
    drugClassAr: 'نظير تخليقي للبروستاغلاندين E1',
    category: 'Rx',
    route: ['PO', 'sublingual', 'rectal', 'vaginal'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['icu_emergency', 'internal_medicine'],
    keyHighlights: [
      'Dual clinical role: NSAID-induced gastric ulcer prevention AND obstetric uterotonic (second-line PPH treatment, cervical ripening, medical abortion)',
      'Absolute contraindication in pregnancy for the GI indication — potent abortifacient/uterotonic effect',
      'Inexpensive, heat-stable, and does not require refrigeration — valuable for postpartum hemorrhage treatment in resource-limited settings'
    ],
    indications: [
      {
        indication: 'NSAID-induced gastric ulcer prevention',
        indicationAr: 'الوقاية من قرحة المعدة الناتجة عن مضادات الالتهاب غير الستيرويدية',
        adultDose: '200 mcg PO 4 times daily with food, for the duration of NSAID therapy',
        adultDoseAr: '200 ميكروجرام فموي 4 مرات يوميًا مع الطعام، طوال مدة علاج مضادات الالتهاب',
        pediatricDose: 'Not established for this indication',
        pediatricDoseAr: 'غير مستقر لهذا الاستخدام',
        maxDose: '800 mcg/day',
        duration: 'Duration of concurrent NSAID therapy',
        route: 'PO'
      },
      {
        indication: 'Postpartum hemorrhage (second-line, when oxytocin unavailable or ineffective)',
        indicationAr: 'نزيف ما بعد الولادة (خط ثاني، عندما يكون الأوكسيتوسين غير متوفر أو غير فعال)',
        adultDose: '800–1000 mcg rectal or sublingual single dose',
        adultDoseAr: '800-1000 ميكروجرام شرجي أو تحت اللسان جرعة واحدة',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: '1000 mcg single dose',
        duration: 'Single dose',
        route: 'Rectal/sublingual'
      },
      {
        indication: 'Cervical ripening / labor induction',
        indicationAr: 'تنضيج عنق الرحم / تحريض المخاض',
        adultDose: '25 mcg vaginal every 3–6 hours, or 25–50 mcg oral every 4 hours',
        adultDoseAr: '25 ميكروجرام مهبلي كل 3-6 ساعات، أو 25-50 ميكروجرام فموي كل 4 ساعات',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: 'Per institutional labor induction protocol',
        duration: 'Repeated dosing until adequate cervical ripening/labor established',
        route: 'Vaginal/PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment required',
    contraindications: [
      'Pregnancy, when used for the gastric ulcer prevention indication',
      'Prior cesarean section or major uterine surgery, when used for labor induction (rupture risk)',
      'Known hypersensitivity to prostaglandins',
      'Known allergy to misoprostol'
    ],
    blackBoxWarning: 'Can cause abortion, birth defects, or uterine rupture when used for labor induction/cervical ripening in women with a prior cesarean delivery or major uterine surgery; must not be used for GI ulcer prevention during pregnancy',
    blackBoxWarningAr: 'قد يسبب إجهاضًا أو تشوهات خلقية أو تمزق الرحم عند استخدامه لتحريض المخاض عند النساء اللاتي سبق لهن ولادة قيصرية أو جراحة رحمية كبرى؛ يجب عدم استخدامه للوقاية من قرحة المعدة أثناء الحمل',
    mechanismOfAction: 'Synthetic PGE1 analog that increases gastric mucus and bicarbonate secretion while inhibiting gastric acid secretion (cytoprotection); also stimulates uterine smooth muscle contraction and cervical ripening via prostaglandin EP receptors',
    mechanismOfActionAr: 'نظير تخليقي للبروستاغلاندين E1 يزيد إفراز المخاط والبيكربونات المعدي ويثبط إفراز الحمض؛ كما يحفز تقلص عضلة الرحم وتنضيج عنق الرحم',
    halfLife: '20–40 minutes',
    monitoringParameters: [
      'GI symptoms (diarrhea, cramping — common with GI indication)',
      'Uterine activity and fetal heart rate when used obstetrically',
      'Signs of uterine hyperstimulation or rupture',
      'Pregnancy status before initiating for GI indication'
    ],
    pregnancyCategory: 'X',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'Take with food when used for GI ulcer prevention to reduce diarrhea'
    ],
    pearls: [
      'Pregnancy category X specifically for the gastric ulcer prevention indication — women of childbearing potential must have a negative pregnancy test and use effective contraception before starting for this use',
      'Heat-stable and inexpensive, making it a critical tool for postpartum hemorrhage management in settings without reliable cold-chain storage for oxytocin',
      'Diarrhea and abdominal cramping are very common with oral dosing — often dose-limiting for the GI indication',
      'Also used (often in combination with mifepristone) for medical termination of pregnancy and management of early pregnancy loss under appropriate protocols'
    ]
  },
  {
    id: 'etomidate',
    genericName: 'Etomidate',
    genericNameAr: 'إيتوميديت',
    brandNames: ['Amidate', 'أميديت'],
    drugClass: 'Imidazole-Derivative IV Anesthetic Induction Agent',
    drugClassAr: 'عامل تخدير وريدي حثي من مشتقات الإيميدازول',
    category: 'Rx',
    route: ['IV'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['icu_emergency'],
    keyHighlights: [
      'Preferred induction agent for rapid sequence intubation in hemodynamically unstable patients due to minimal cardiovascular depression',
      'Transiently suppresses adrenal cortisol synthesis (11-beta-hydroxylase inhibition) — a single dose\'s clinical significance remains debated but is a known consideration in septic shock',
      'No analgesic properties — must be paired with an analgesic/opioid for painful procedures'
    ],
    indications: [
      {
        indication: 'Rapid sequence intubation induction',
        indicationAr: 'حث التنبيب السريع المتسلسل',
        adultDose: '0.2–0.3 mg/kg IV push',
        adultDoseAr: '0.2-0.3 ملجم/كجم دفعة وريدية',
        pediatricDose: '0.2–0.3 mg/kg IV (safety/efficacy in children <10 years less established, used with caution)',
        pediatricDoseAr: '0.2-0.3 ملجم/كجم وريدي (الأمان والفعالية أقل ثباتًا تحت عمر 10 سنوات، يُستخدم بحذر)',
        maxDose: 'Weight-based; typically 20–40 mg in an average adult',
        duration: 'Onset 15–45 sec, duration 3–12 min',
        route: 'IV'
      },
      {
        indication: 'Procedural sedation (brief painful procedures, with analgesia)',
        indicationAr: 'التسكين للإجراءات (إجراءات مؤلمة قصيرة، مع مسكن)',
        adultDose: '0.1–0.15 mg/kg IV, may repeat smaller doses as needed',
        adultDoseAr: '0.1-0.15 ملجم/كجم وريدي، يمكن تكرار جرعات أصغر حسب الحاجة',
        pediatricDose: '0.2–0.3 mg/kg IV, specialist-guided for procedural sedation',
        pediatricDoseAr: '0.2-0.3 ملجم/كجم وريدي، بإشراف متخصص للتسكين الإجرائي',
        maxDose: 'Titrate to effect; cumulative dosing limited by myoclonus/adrenal suppression concerns',
        duration: 'Single or repeated small boluses for brief procedures',
        route: 'IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No formal dose adjustment required; use with caution in severe hepatic impairment',
    contraindications: [
      'Known hypersensitivity to etomidate',
      'Relative caution in septic shock given adrenal suppression concerns (clinical significance debated, often still used as single induction dose)'
    ],
    mechanismOfAction: 'Potentiates GABA-A receptor-mediated chloride currents in the CNS, producing rapid hypnosis with relative hemodynamic stability compared to other induction agents',
    mechanismOfActionAr: 'يعزز تيارات الكلوريد المعتمدة على مستقبلات GABA-A في الجهاز العصبي المركزي، منتجًا تنويمًا سريعًا مع استقرار نسبي في الدورة الدموية مقارنة بعوامل الحث الأخرى',
    halfLife: '2.6–5 hours (clinical effect much shorter due to redistribution)',
    monitoringParameters: [
      'Blood pressure and heart rate (generally stable, still monitor)',
      'Myoclonic movements during induction (common, usually benign)',
      'Adequacy of sedation/need for additional analgesia',
      'Signs of adrenal insufficiency with repeated dosing or in critically ill patients'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Limited Data',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Minimal effect on blood pressure and cardiac output makes it the induction agent of choice in hypotensive, hypovolemic, or cardiac-compromised patients undergoing RSI',
      'Myoclonic movements during induction are common and can be mistaken for seizure activity — generally benign and self-limited',
      'Does not provide any analgesia — always co-administer an opioid or other analgesic for painful stimuli',
      'A single induction dose causes transient adrenal suppression lasting several hours; while associated with some mortality signal in sepsis literature, it remains widely used as a one-time RSI induction agent given its hemodynamic advantages'
    ]
  },
  {
    id: 'dexamethasone',
    genericName: 'Dexamethasone',
    genericNameAr: 'ديكساميثازون',
    brandNames: ['Decadron', 'ديكادرون'],
    drugClass: 'Long-Acting Corticosteroid (Glucocorticoid, Minimal Mineralocorticoid Activity)',
    drugClassAr: 'كورتيكوستيرويد طويل المفعول (نشاط جلوكوكورتيكويد قوي، نشاط ألدوستيروني ضئيل)',
    category: 'Rx',
    route: ['PO', 'IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['icu_emergency', 'oncology', 'internal_medicine'],
    keyHighlights: [
      'Reduced mortality in COVID-19 patients requiring supplemental oxygen or mechanical ventilation (RECOVERY trial)',
      'Preferred steroid for cerebral edema (vasogenic, from tumors) due to good CNS penetration and minimal mineralocorticoid-related fluid retention',
      'Standard component of antiemetic prophylaxis for highly emetogenic chemotherapy regimens'
    ],
    indications: [
      {
        indication: 'COVID-19 (hypoxemic, requiring supplemental oxygen)',
        indicationAr: 'كوفيد-19 (نقص الأكسجين، يتطلب أكسجين تكميلي)',
        adultDose: '6 mg PO/IV once daily for up to 10 days',
        adultDoseAr: '6 ملجم فموي/وريدي مرة يوميًا لمدة تصل إلى 10 أيام',
        pediatricDose: '0.15 mg/kg/day (max 6 mg) once daily, specialist-guided',
        pediatricDoseAr: '0.15 ملجم/كجم/يوم (بحد أقصى 6 ملجم) مرة يوميًا، بإشراف متخصص',
        maxDose: '6 mg/day',
        duration: 'Up to 10 days or until discharge',
        route: 'PO/IV'
      },
      {
        indication: 'Cerebral edema (tumor-associated, vasogenic)',
        indicationAr: 'وذمة المخ (المرتبطة بالورم)',
        adultDose: '10 mg IV loading, then 4–6 mg IV/PO every 6 hours, taper once stable',
        adultDoseAr: '10 ملجم وريدي جرعة تحميل، ثم 4-6 ملجم وريدي/فموي كل 6 ساعات، تُدرّج عند الاستقرار',
        pediatricDose: '1–2 mg/kg loading (max 16 mg), then 1–1.5 mg/kg/day divided every 4–6 hours',
        pediatricDoseAr: '1-2 ملجم/كجم جرعة تحميل (بحد أقصى 16 ملجم)، ثم 1-1.5 ملجم/كجم/يوم مقسمة كل 4-6 ساعات',
        maxDose: '16 mg/day (varies by severity)',
        duration: 'Days to weeks, taper based on response and imaging',
        route: 'IV/PO'
      },
      {
        indication: 'Chemotherapy-induced nausea/vomiting prophylaxis',
        indicationAr: 'الوقاية من الغثيان والقيء الناتج عن العلاج الكيميائي',
        adultDose: '12–20 mg IV/PO before chemotherapy, then 8 mg daily for 2–4 days post-chemo',
        adultDoseAr: '12-20 ملجم وريدي/فموي قبل العلاج الكيميائي، ثم 8 ملجم يوميًا لـ 2-4 أيام بعد العلاج',
        pediatricDose: '10 mg/m² (max 20 mg) IV before chemotherapy, specialist-guided',
        pediatricDoseAr: '10 ملجم/م² (بحد أقصى 20 ملجم) وريدي قبل العلاج الكيميائي، بإشراف متخصص',
        maxDose: '20 mg per dose',
        duration: 'Pre-chemo plus 2–4 days post as combination antiemetic regimen',
        route: 'IV/PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No specific adjustment typically required; monitor closely in severe hepatic impairment',
    contraindications: [
      'Systemic fungal infections',
      'Known hypersensitivity to dexamethasone or sulfite components',
      'Live vaccine administration during high-dose therapy (relative)',
      'Epidural administration (not approved)'
    ],
    blackBoxWarning: 'Epidural administration not approved and associated with serious neurologic events including spinal cord infarction, paraplegia, and death',
    blackBoxWarningAr: 'الإعطاء فوق الجافية غير معتمد ويرتبط بأحداث عصبية خطيرة تشمل احتشاء النخاع الشوكي والشلل النصفي والوفاة',
    mechanismOfAction: 'Potent, highly selective glucocorticoid receptor agonist with minimal mineralocorticoid activity; suppresses multiple inflammatory pathways including cytokine production, leukocyte migration, and vascular permeability',
    mechanismOfActionAr: 'منشط قوي وانتقائي لمستقبلات الجلوكوكورتيكويد مع نشاط ألدوستيروني ضئيل؛ يثبط مسارات التهابية متعددة تشمل إفراز السيتوكينات وهجرة الخلايا البيضاء ونفاذية الأوعية',
    halfLife: '36–54 hours (biologic)',
    monitoringParameters: [
      'Blood glucose (hyperglycemia common)',
      'Signs of infection (can be masked)',
      'Mental status changes (steroid-induced psychosis/mood changes)',
      'GI symptoms (consider PPI/H2 blocker prophylaxis with prolonged use)',
      'Bone density with prolonged chronic use'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'Take with food to reduce GI upset'
    ],
    pearls: [
      'Minimal mineralocorticoid activity compared to hydrocortisone makes it preferable when fluid retention/hypokalemia must be avoided, but unsuitable as sole therapy for adrenal crisis (lacks adequate mineralocorticoid replacement)',
      'Long biologic half-life allows once-daily dosing, improving adherence compared to shorter-acting steroids requiring multiple daily doses',
      'High potency relative to other corticosteroids (dexamethasone 0.75 mg ≈ hydrocortisone 20 mg) — always double-check equivalency when switching steroids',
      'Can falsely suppress cosyntropin (ACTH) stimulation test results and interferes with dexamethasone suppression testing for Cushing syndrome if timing is not carefully controlled'
    ]
  },
  {
    id: 'alprazolam',
    genericName: 'Alprazolam',
    genericNameAr: 'ألبرازولام',
    brandNames: ['Xanax', 'زاناكس'],
    drugClass: 'Benzodiazepine (Short-Acting)',
    drugClassAr: 'بنزوديازيبين قصير المفعول',
    category: 'Controlled',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['internal_medicine'],
    keyHighlights: [
      'High potency and short half-life give rapid symptom relief but also the highest dependence/withdrawal risk among commonly used benzodiazepines',
      'First-line acute treatment for panic disorder, though SSRIs/SNRIs are preferred for long-term management',
      'Interdose withdrawal/rebound anxiety is common due to short half-life, often driving dose escalation'
    ],
    indications: [
      {
        indication: 'Panic disorder',
        indicationAr: 'اضطراب الهلع',
        adultDose: '0.5 mg PO three times daily initially, titrate every 3–4 days, usual range 1–4 mg/day divided',
        adultDoseAr: '0.5 ملجم فموي 3 مرات يوميًا مبدئيًا، تُزاد كل 3-4 أيام، المعدل المعتاد 1-4 ملجم/يوم مقسمة',
        pediatricDose: 'Not established in children',
        pediatricDoseAr: 'غير مستقر عند الأطفال',
        maxDose: '10 mg/day in severe cases (rarely needed)',
        duration: 'Short-term preferred; reassess chronic use regularly',
        route: 'PO'
      },
      {
        indication: 'Generalized anxiety disorder (short-term)',
        indicationAr: 'اضطراب القلق المعمم (قصير المدى)',
        adultDose: '0.25–0.5 mg PO three times daily, titrate as needed',
        adultDoseAr: '0.25-0.5 ملجم فموي 3 مرات يوميًا، تُزاد حسب الحاجة',
        pediatricDose: 'Not established in children',
        pediatricDoseAr: 'غير مستقر عند الأطفال',
        maxDose: '4 mg/day',
        duration: 'Short-term (days to weeks), avoid prolonged continuous use',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'Use with caution; start at lower dose',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Reduce dose and/or extend dosing interval in hepatic impairment — elimination half-life significantly prolonged',
    contraindications: [
      'Narrow-angle glaucoma',
      'Concurrent use with ketoconazole or itraconazole (strong CYP3A4 inhibitors)',
      'Severe respiratory insufficiency',
      'Known hypersensitivity to benzodiazepines'
    ],
    blackBoxWarning: 'Concomitant use with opioids may result in profound sedation, respiratory depression, coma, and death; risk of abuse, misuse, and addiction; physical dependence and withdrawal (including seizures) with abrupt discontinuation',
    blackBoxWarningAr: 'الاستخدام المصاحب مع الأفيونيات قد يؤدي إلى تخدير شديد وتثبيط تنفسي وغيبوبة ووفاة؛ خطر التعاطي وسوء الاستخدام والإدمان؛ الاعتماد الجسدي والانسحاب (يشمل النوبات) مع التوقف المفاجئ',
    mechanismOfAction: 'Enhances GABA-A receptor-mediated chloride influx by binding the benzodiazepine binding site, increasing the frequency of channel opening and producing anxiolytic, sedative, and anticonvulsant effects',
    mechanismOfActionAr: 'يعزز تدفق الكلوريد عبر مستقبلات GABA-A بالارتباط بموقع البنزوديازيبين، منتجًا تأثيرات مزيلة للقلق ومهدئة ومضادة للتشنج',
    halfLife: '11–16 hours',
    monitoringParameters: [
      'Level of sedation/cognitive impairment',
      'Signs of dependence, tolerance, or misuse',
      'Interdose withdrawal symptoms (rebound anxiety between doses)',
      'Respiratory status, especially with concurrent opioids/CNS depressants',
      'Fall risk in elderly patients'
    ],
    pregnancyCategory: 'D',
    lactationSafety: 'Contraindicated',
    foodInteractions: [
      'Avoid alcohol (additive CNS/respiratory depression)',
      'Avoid grapefruit juice (increases alprazolam levels via CYP3A4 inhibition)'
    ],
    pearls: [
      'Short half-life causes interdose rebound anxiety more than longer-acting benzodiazepines (e.g., clonazepam), which can drive dose escalation and makes it a higher-risk agent for dependence',
      'Never abruptly discontinue after regular use — taper gradually to avoid withdrawal seizures, which can be life-threatening',
      'SSRIs/SNRIs remain first-line for long-term panic disorder management; benzodiazepines are best reserved for acute/bridge therapy',
      'Significant abuse potential and street value — prescribe the smallest effective quantity and monitor closely, especially with concurrent opioid use given fatal respiratory depression risk'
    ]
  },
  {
    id: 'venlafaxine',
    genericName: 'Venlafaxine',
    genericNameAr: 'فينلافاكسين',
    brandNames: ['Effexor', 'إيفكسور'],
    drugClass: 'Serotonin-Norepinephrine Reuptake Inhibitor (SNRI)',
    drugClassAr: 'مثبط إعادة امتصاص السيروتونين والنورإبينفرين',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['internal_medicine'],
    keyHighlights: [
      'Dose-dependent pharmacology: primarily serotonergic at low doses, with increasing noradrenergic effect at higher doses (>150 mg/day)',
      'One of the most notorious antidepressants for severe discontinuation syndrome — must be tapered very slowly',
      'Dose-related increase in blood pressure, particularly at higher doses — monitor BP'
    ],
    indications: [
      {
        indication: 'Major depressive disorder',
        indicationAr: 'اضطراب الاكتئاب الشديد',
        adultDose: 'IR: 75 mg/day divided 2–3 times, titrate; XR: 75 mg once daily, titrate to 150–225 mg/day',
        adultDoseAr: 'سريع المفعول: 75 ملجم/يوم مقسمة 2-3 مرات، تُزاد؛ طويل المفعول: 75 ملجم مرة يوميًا، تُزاد إلى 150-225 ملجم/يوم',
        pediatricDose: 'Not established for depression in children',
        pediatricDoseAr: 'غير مستقر للاكتئاب عند الأطفال',
        maxDose: '375 mg/day (IR); 225 mg/day (XR) typical ceiling',
        duration: 'Chronic, reassess at 4–6 weeks',
        route: 'PO'
      },
      {
        indication: 'Generalized anxiety disorder / social anxiety disorder / panic disorder',
        indicationAr: 'اضطراب القلق المعمم / اضطراب القلق الاجتماعي / اضطراب الهلع',
        adultDose: 'XR 37.5–75 mg once daily, titrate up to 225 mg/day',
        adultDoseAr: 'طويل المفعول 37.5-75 ملجم مرة يوميًا، تُزاد حتى 225 ملجم/يوم',
        pediatricDose: 'Not established',
        pediatricDoseAr: 'غير مستقر',
        maxDose: '225 mg/day',
        duration: 'Chronic, reassess periodically',
        route: 'PO'
      },
      {
        indication: 'Vasomotor symptoms (hot flashes) — off-label',
        indicationAr: 'الأعراض الوعائية الحركية (الهبات الساخنة) - استخدام خارج النشرة',
        adultDose: '37.5–75 mg XR once daily',
        adultDoseAr: '37.5-75 ملجم طويل المفعول مرة يوميًا',
        pediatricDose: 'Not applicable',
        pediatricDoseAr: 'غير قابل للتطبيق',
        maxDose: '75 mg/day typically sufficient for this indication',
        duration: 'As needed for symptom control',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'Reduce total daily dose by 25%',
      crclBelow10: 'Reduce total daily dose by 50%',
      hemodialysis: 'Reduce dose by 50%; administer after dialysis session; significantly dialyzed'
    },
    hepaticAdjustment: 'Reduce total daily dose by 50% in moderate hepatic impairment; use with caution and consider further reduction in severe impairment',
    contraindications: [
      'Use of MAO inhibitors within 14 days (or 7 days after stopping venlafaxine before starting an MAOI)',
      'Uncontrolled narrow-angle glaucoma',
      'Known hypersensitivity'
    ],
    blackBoxWarning: 'Increased risk of suicidal thinking and behavior in children, adolescents, and young adults; monitor closely for clinical worsening, especially early in treatment or with dose changes',
    blackBoxWarningAr: 'خطر متزايد للتفكير والسلوك الانتحاري عند الأطفال والمراهقين والشباب؛ يجب المراقبة الدقيقة لأي تدهور سريري خاصة في بداية العلاج أو عند تغيير الجرعة',
    mechanismOfAction: 'Inhibits reuptake of serotonin and norepinephrine (and weakly dopamine at high doses); noradrenergic contribution increases with dose, giving dose-dependent pharmacologic effects',
    mechanismOfActionAr: 'يثبط إعادة امتصاص السيروتونين والنورإبينفرين (وبشكل ضعيف الدوبامين بالجرعات العالية)؛ المساهمة النورأدرينالية تزيد مع الجرعة',
    halfLife: '5 hours (parent); active metabolite O-desmethylvenlafaxine ~11 hours',
    monitoringParameters: [
      'Blood pressure (dose-dependent increase, especially above 150 mg/day)',
      'Mood and suicidality, especially early in treatment',
      'Signs of serotonin syndrome if combined with other serotonergic agents',
      'Sodium levels (SIADH/hyponatremia risk, especially elderly)',
      'Discontinuation symptoms if stopping or missing doses'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'Avoid alcohol',
      'Take with food to reduce nausea'
    ],
    pearls: [
      'Has one of the most severe discontinuation syndromes among antidepressants (dizziness, "brain zaps," irritability, nausea) due to its relatively short half-life — must be tapered very gradually, especially after prolonged use',
      'Blood pressure should be checked at baseline and periodically during treatment, particularly as doses increase above 150 mg/day, where noradrenergic effects become more prominent',
      'Extended-release formulation improves GI tolerability and allows once-daily dosing compared to immediate-release',
      'Often used when SSRIs provide inadequate response, given its dual serotonin-norepinephrine mechanism, particularly for depression with comorbid pain or anxiety'
    ]
  },
  {
    id: 'olanzapine',
    genericName: 'Olanzapine',
    genericNameAr: 'أولانزابين',
    brandNames: ['Zyprexa', 'زيبريكسا'],
    drugClass: 'Atypical (Second-Generation) Antipsychotic',
    drugClassAr: 'مضاد ذهان غير نمطي (من الجيل الثاني)',
    category: 'Rx',
    route: ['PO', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['internal_medicine'],
    keyHighlights: [
      'Among the highest metabolic risk (weight gain, dyslipidemia, new-onset diabetes) of all atypical antipsychotics — requires baseline and ongoing metabolic monitoring',
      'IM formulation used for acute agitation; a rare post-injection delirium/sedation syndrome requires 3-hour monitoring after each IM dose',
      'Also effective as an adjunct antiemetic for highly emetogenic chemotherapy and refractory nausea'
    ],
    indications: [
      {
        indication: 'Schizophrenia',
        indicationAr: 'الفصام',
        adultDose: '5–10 mg PO once daily initially, titrate to 10–20 mg/day',
        adultDoseAr: '5-10 ملجم فموي مرة يوميًا مبدئيًا، تُزاد إلى 10-20 ملجم/يوم',
        pediatricDose: '2.5–5 mg PO once daily (age 13+), titrate to 10 mg/day max',
        pediatricDoseAr: '2.5-5 ملجم فموي مرة يوميًا (عمر 13+)، تُزاد بحد أقصى 10 ملجم/يوم',
        maxDose: '20 mg/day',
        duration: 'Chronic, lifelong maintenance typical',
        route: 'PO'
      },
      {
        indication: 'Bipolar I disorder (acute mania, maintenance)',
        indicationAr: 'اضطراب ثنائي القطب من النوع الأول (نوبة الهوس الحادة، الصيانة)',
        adultDose: '10–15 mg PO once daily, titrate to 5–20 mg/day',
        adultDoseAr: '10-15 ملجم فموي مرة يوميًا، تُزاد إلى 5-20 ملجم/يوم',
        pediatricDose: '2.5–5 mg PO once daily (age 13+), titrate to 10 mg/day max',
        pediatricDoseAr: '2.5-5 ملجم فموي مرة يوميًا (عمر 13+)، تُزاد بحد أقصى 10 ملجم/يوم',
        maxDose: '20 mg/day',
        duration: 'Acute episode then maintenance per response',
        route: 'PO'
      },
      {
        indication: 'Acute agitation (psychiatric emergency)',
        indicationAr: 'التهيج الحاد (حالة طوارئ نفسية)',
        adultDose: '5–10 mg IM, may repeat after 2 hours (max 3 doses/day)',
        adultDoseAr: '5-10 ملجم عضلي، يمكن تكرارها بعد ساعتين (بحد أقصى 3 جرعات/يوم)',
        pediatricDose: 'Not established for IM use in children',
        pediatricDoseAr: 'غير مستقر للاستخدام العضلي عند الأطفال',
        maxDose: '30 mg/day IM',
        duration: 'Single or repeated IM doses as needed, monitor 3 hours post-injection',
        route: 'IM'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required; limited data, use with caution',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'Consider lower starting dose (5 mg) in hepatic impairment; titrate cautiously',
    contraindications: [
      'Known hypersensitivity to olanzapine',
      'Not for use in elderly patients with dementia-related psychosis (increased mortality)'
    ],
    blackBoxWarning: 'Increased risk of death in elderly patients with dementia-related psychosis; not approved for this use. IM formulation: risk of post-injection delirium/sedation syndrome requiring observation for at least 3 hours after each injection',
    blackBoxWarningAr: 'خطر متزايد للوفاة عند المسنين المصابين بذهان مرتبط بالخرف؛ غير معتمد لهذا الاستخدام. الشكل العضلي: خطر متلازمة الهذيان/التخدير بعد الحقن يتطلب مراقبة لمدة 3 ساعات على الأقل بعد كل حقنة',
    mechanismOfAction: 'Antagonizes dopamine D2 and serotonin 5-HT2A receptors, along with histamine H1 and muscarinic receptors, reducing positive psychotic symptoms while contributing to sedation and metabolic effects',
    mechanismOfActionAr: 'يحجب مستقبلات الدوبامين D2 والسيروتونين 5-HT2A، بالإضافة لمستقبلات الهيستامين H1 والمسكارينية، مما يقلل الأعراض الذهانية الإيجابية مع المساهمة في التخدير والتأثيرات الاستقلابية',
    halfLife: '21–54 hours',
    monitoringParameters: [
      'Weight, BMI, waist circumference (baseline and periodically)',
      'Fasting glucose/HbA1c and lipid panel (baseline and every 3–12 months)',
      'Blood pressure',
      'Signs of extrapyramidal symptoms/tardive dyskinesia (lower risk than first-generation but still possible)',
      'Sedation level, especially with IM dosing (monitor 3 hours post-injection)'
    ],
    pregnancyCategory: 'C',
    lactationSafety: 'Use with Caution',
    foodInteractions: [
      'Avoid alcohol (additive CNS depression)',
      'Smoking (via CYP1A2 induction) can reduce olanzapine levels — dose adjustment may be needed if smoking status changes'
    ],
    pearls: [
      'Carries among the highest risk of clinically significant weight gain, dyslipidemia, and new-onset type 2 diabetes among atypical antipsychotics — baseline and regular metabolic monitoring (ADA/APA protocol) is essential',
      'IM injection has a unique risk of post-injection delirium/sedation syndrome (accidental intravascular injection), requiring in-facility observation for at least 3 hours after each dose',
      'Smoking induces CYP1A2 and can significantly lower olanzapine levels — dose may need adjustment if a patient starts or stops smoking during treatment',
      'Low-dose olanzapine (2.5–5 mg) is increasingly used off-label as an effective adjunct antiemetic for refractory chemotherapy-induced or palliative care nausea'
    ]
  },
  {
    id: 'sucralfate',
    genericName: 'Sucralfate',
    genericNameAr: 'سوكرالفات',
    brandNames: ['Carafate', 'كارافيت'],
    drugClass: 'Mucosal Protectant (Aluminum Sucrose Sulfate Complex)',
    drugClassAr: 'عامل حماية للغشاء المخاطي (مركب كبريتات السكروز والألمنيوم)',
    category: 'Rx',
    route: ['PO'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['internal_medicine'],
    keyHighlights: [
      'Forms a physical protective barrier over ulcerated mucosa rather than reducing acid secretion — a fundamentally different mechanism from PPIs/H2 blockers',
      'Requires an acidic environment to activate and must be taken on an empty stomach, strictly separated from other medications',
      'Significantly binds and reduces absorption of many co-administered oral drugs — timing separation of at least 2 hours is essential'
    ],
    indications: [
      {
        indication: 'Duodenal ulcer (treatment and maintenance)',
        indicationAr: 'قرحة الاثني عشر (العلاج والصيانة)',
        adultDose: '1 g PO four times daily on an empty stomach (1 hour before meals and at bedtime)',
        adultDoseAr: '1 جرام فموي 4 مرات يوميًا على معدة فارغة (قبل الوجبات بساعة وعند النوم)',
        pediatricDose: '40–80 mg/kg/day divided every 6 hours (limited pediatric data)',
        pediatricDoseAr: '40-80 ملجم/كجم/يوم مقسمة كل 6 ساعات (بيانات محدودة عند الأطفال)',
        maxDose: '8 g/day (treatment); 4 g/day (maintenance, typically 1 g twice daily)',
        duration: '4–8 weeks treatment course',
        route: 'PO'
      },
      {
        indication: 'Stress ulcer prophylaxis (ICU, mechanically ventilated patients)',
        indicationAr: 'الوقاية من قرحة التوتر (العناية المركزة، المرضى على التنفس الصناعي)',
        adultDose: '1 g PO/via feeding tube every 6 hours',
        adultDoseAr: '1 جرام فموي/عبر أنبوب التغذية كل 6 ساعات',
        pediatricDose: 'Not routinely established; specialist-guided if used',
        pediatricDoseAr: 'غير مستقرة بشكل روتيني؛ بإشراف متخصص إذا استُخدم',
        maxDose: '4 g/day for prophylaxis',
        duration: 'Duration of ICU stay/mechanical ventilation risk period',
        route: 'PO/enteral'
      },
      {
        indication: 'Radiation-induced or chemotherapy-induced mucositis (oral suspension, topical use)',
        indicationAr: 'التهاب الغشاء المخاطي الناتج عن العلاج الإشعاعي أو الكيميائي (معلق فموي، استخدام موضعي)',
        adultDose: '1 g (10 mL suspension) swish and swallow/spit 4 times daily',
        adultDoseAr: '1 جرام (10 مل معلق) يُغرغر ويُبلع/يُبصق 4 مرات يوميًا',
        pediatricDose: 'Specialist-guided for oncology supportive care',
        pediatricDoseAr: 'بإشراف متخصص للرعاية الداعمة في الأورام',
        maxDose: '4 g/day',
        duration: 'Duration of mucositis symptoms',
        route: 'PO (topical/swish)'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'Use with caution; aluminum accumulation risk with prolonged use',
      crclBelow10: 'Avoid prolonged use if possible; significant aluminum accumulation risk',
      hemodialysis: 'Avoid prolonged use; aluminum toxicity risk in dialysis patients'
    },
    hepaticAdjustment: 'No specific adjustment required',
    contraindications: [
      'Known hypersensitivity to sucralfate',
      'Severe renal impairment with prolonged use (aluminum toxicity risk)'
    ],
    mechanismOfAction: 'In an acidic environment, polymerizes and binds to proteins at the ulcer base, forming a protective physical barrier that shields the mucosa from acid, pepsin, and bile while also stimulating local prostaglandin and mucus production',
    mechanismOfActionAr: 'في بيئة حمضية، يتبلمر ويرتبط بالبروتينات في قاعدة القرحة، مكونًا حاجزًا ماديًا حاميًا يحمي الغشاء المخاطي من الحمض والببسين والصفراء، ويحفز إنتاج البروستاغلاندين والمخاط موضعيًا',
    halfLife: 'Minimal systemic absorption (acts locally)',
    monitoringParameters: [
      'Ulcer healing symptoms/endoscopic follow-up if indicated',
      'Constipation (common side effect)',
      'Aluminum levels with prolonged use in renal impairment',
      'Drug interaction review — timing with other oral medications'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Safe',
    foodInteractions: [
      'Must be taken on an EMPTY stomach, at least 1 hour before meals — food/antacids reduce activation and efficacy',
      'Separate administration from other oral drugs by at least 2 hours (binds and reduces absorption of many medications including fluoroquinolones, tetracyclines, levothyroxine, phenytoin, digoxin)'
    ],
    pearls: [
      'Must be taken on an empty stomach — co-administration with food, antacids, or H2 blockers/PPIs (which raise gastric pH) can reduce its activation and efficacy since it requires an acidic environment to polymerize',
      'Binds many commonly co-administered drugs (fluoroquinolones, tetracyclines, levothyroxine, digoxin, phenytoin), reducing their absorption — always separate dosing by at least 2 hours',
      'Constipation is the most common side effect due to its aluminum content',
      'A reasonable alternative to acid-suppressive stress ulcer prophylaxis in ICU patients when avoiding gastric pH elevation is desired (e.g., concern for ventilator-associated pneumonia), though PPIs/H2 blockers are more commonly used'
    ]
  },
  {
    id: 'lactulose',
    genericName: 'Lactulose',
    genericNameAr: 'لاكتولوز',
    brandNames: ['Kristalose', 'Enulose', 'كريستالوز'],
    drugClass: 'Osmotic Laxative (Synthetic Disaccharide)',
    drugClassAr: 'ملين حلولي (ثنائي سكاريد تخليقي)',
    category: 'Rx',
    route: ['PO', 'rectal'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['internal_medicine'],
    keyHighlights: [
      'Dual indication: standard osmotic laxative for constipation AND first-line treatment for hepatic encephalopathy',
      'In hepatic encephalopathy, dosed to produce 2–3 soft stools/day, not titrated for maximal laxative effect',
      'Metabolized by colonic bacteria to organic acids, trapping ammonia (NH3→NH4+) in the gut lumen for excretion — the key mechanism in hepatic encephalopathy'
    ],
    indications: [
      {
        indication: 'Hepatic encephalopathy (treatment and prevention of recurrence)',
        indicationAr: 'اعتلال الدماغ الكبدي (العلاج والوقاية من التكرار)',
        adultDose: '20–30 g (30–45 mL) PO 2–4 times daily, titrate to 2–3 soft stools/day',
        adultDoseAr: '20-30 جرام (30-45 مل) فموي 2-4 مرات يوميًا، تُعدّل لتحقيق 2-3 حركات أمعاء لينة يوميًا',
        pediatricDose: 'Infants: 2.5–10 mL/day divided; children: 40–90 mL/day divided, titrate to effect',
        pediatricDoseAr: 'الرضع: 2.5-10 مل/يوم مقسمة؛ الأطفال: 40-90 مل/يوم مقسمة، تُعدّل حسب التأثير',
        maxDose: 'Titrate to 2–3 soft stools/day; no fixed ceiling',
        duration: 'Chronic, ongoing in cirrhosis with prior hepatic encephalopathy episodes',
        route: 'PO'
      },
      {
        indication: 'Severe hepatic encephalopathy (unable to take oral)',
        indicationAr: 'اعتلال الدماغ الكبدي الشديد (غير قادر على الفموي)',
        adultDose: '300 mL lactulose in 700 mL water as retention enema, every 4–6 hours',
        adultDoseAr: '300 مل لاكتولوز في 700 مل ماء كحقنة شرجية احتباسية، كل 4-6 ساعات',
        pediatricDose: 'Specialist-guided, weight-adjusted enema dosing',
        pediatricDoseAr: 'بإشراف متخصص، جرعة الحقنة حسب الوزن',
        maxDose: 'Per clinical response and mental status improvement',
        duration: 'Until oral route can be resumed',
        route: 'Rectal'
      },
      {
        indication: 'Chronic constipation',
        indicationAr: 'الإمساك المزمن',
        adultDose: '15–30 mL PO once or twice daily, titrate to effect',
        adultDoseAr: '15-30 مل فموي مرة أو مرتين يوميًا، تُعدّل حسب التأثير',
        pediatricDose: '1 mL/kg/day divided twice daily',
        pediatricDoseAr: '1 مل/كجم/يوم مقسمة مرتين يوميًا',
        maxDose: '60 mL/day',
        duration: 'As needed, can be used chronically',
        route: 'PO'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: 'No adjustment required',
      crclBelow10: 'No adjustment required; monitor electrolytes with excessive use',
      hemodialysis: 'Not significantly dialyzed; no supplemental dose needed'
    },
    hepaticAdjustment: 'No dose reduction required — in fact a mainstay treatment specifically for hepatic complications; dose titrated to clinical effect regardless of degree of hepatic impairment',
    contraindications: [
      'Galactosemia (contains galactose)',
      'Known hypersensitivity to lactulose',
      'Suspected bowel obstruction'
    ],
    mechanismOfAction: 'Non-absorbable synthetic disaccharide that reaches the colon unchanged, where bacterial fermentation produces organic acids that acidify the colonic lumen, converting absorbable ammonia (NH3) to non-absorbable ammonium (NH4+) for fecal excretion, while also exerting an osmotic laxative effect that speeds transit',
    mechanismOfActionAr: 'ثنائي سكاريد تخليقي غير قابل للامتصاص يصل إلى القولون دون تغيير، حيث يُخمّر بكتيريًا لإنتاج أحماض عضوية تُحمّض تجويف القولون، محولة الأمونيا القابلة للامتصاص إلى أمونيوم غير قابل للامتصاص يُطرح في البراز، مع تأثير ملين حلولي يُسرّع العبور',
    halfLife: 'Minimal systemic absorption (acts locally in the colon)',
    monitoringParameters: [
      'Stool frequency/consistency (target 2–3 soft stools/day in hepatic encephalopathy)',
      'Mental status/encephalopathy grade (West Haven criteria)',
      'Serum electrolytes with prolonged or high-dose use (risk of hypernatremia/dehydration from excessive diarrhea)',
      'Signs of over-treatment (excessive diarrhea, dehydration, worsening confusion from volume depletion)'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Safe',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'In hepatic encephalopathy, the dose is titrated to achieve 2–3 soft (not watery) stools per day — both under-dosing (inadequate ammonia clearance) and over-dosing (dehydration worsening encephalopathy) impair outcomes',
      'Flatulence, bloating, and abdominal cramping from colonic fermentation are very common early side effects that often improve with continued use',
      'Rifaximin is frequently added for recurrent hepatic encephalopathy despite adequate lactulose therapy, acting synergistically by reducing ammonia-producing gut flora',
      'Takes 24–48 hours to see onset of laxative effect — not useful for acute/rapid bowel evacuation needs'
    ]
  },
  {
    id: 'cefazolin',
    genericName: 'Cefazolin',
    genericNameAr: 'سيفازولين',
    brandNames: ['Ancef', 'Kefzol', 'أنسيف'],
    drugClass: 'First-Generation Cephalosporin Antibiotic',
    drugClassAr: 'مضاد حيوي من السيفالوسبورينات الجيل الأول',
    category: 'Rx',
    route: ['IV', 'IM'],
    isFeaturedToday: false,
    dateFeatured: '2026-11-18',
    targetSpecialties: ['infectious_diseases', 'internal_medicine'],
    keyHighlights: [
      'Gold-standard surgical prophylaxis antibiotic — excellent activity against skin flora (MSSA, streptococci) that cause most surgical site infections',
      'Narrower, more predictable spectrum than broader cephalosporins — preferred when susceptibility is confirmed to reduce resistance pressure',
      'Low cross-reactivity risk with penicillin allergy, making it often usable even in patients with non-severe penicillin allergies'
    ],
    indications: [
      {
        indication: 'Surgical prophylaxis',
        indicationAr: 'الوقاية الجراحية',
        adultDose: '2 g IV within 60 min before incision (3 g if ≥120 kg); redose if surgery >4 hours or significant blood loss',
        adultDoseAr: '2 جرام وريدي خلال 60 دقيقة قبل الشق (3 جرام إذا كان الوزن 120 كجم فأكثر)؛ تُكرر الجرعة إذا تجاوزت الجراحة 4 ساعات',
        pediatricDose: '30 mg/kg IV within 60 min before incision',
        pediatricDoseAr: '30 ملجم/كجم وريدي خلال 60 دقيقة قبل الشق',
        maxDose: '3 g per dose',
        duration: 'Single preoperative dose, redosed intraoperatively if prolonged',
        route: 'IV'
      },
      {
        indication: 'Skin and soft tissue infections (MSSA, streptococcal)',
        indicationAr: 'عدوى الجلد والنسيج الرخو (المكورات العنقودية الحساسة للميثيسيلين، العقديات)',
        adultDose: '1–2 g IV every 8 hours',
        adultDoseAr: '1-2 جرام وريدي كل 8 ساعات',
        pediatricDose: '25–50 mg/kg/day divided every 8 hours',
        pediatricDoseAr: '25-50 ملجم/كجم/يوم مقسمة كل 8 ساعات',
        maxDose: '6 g/day',
        duration: '7–14 days depending on severity',
        route: 'IV'
      },
      {
        indication: 'MSSA bacteremia / endocarditis',
        indicationAr: 'تجرثم الدم بالمكورات العنقودية الحساسة للميثيسيلين / التهاب الشغاف',
        adultDose: '2 g IV every 8 hours (higher-dose regimens for endocarditis per cardiology/ID input)',
        adultDoseAr: '2 جرام وريدي كل 8 ساعات (أنظمة بجرعات أعلى لالتهاب الشغاف بإشراف أمراض القلب والعدوى)',
        pediatricDose: 'Specialist-guided weight-based dosing',
        pediatricDoseAr: 'جرعة حسب الوزن بإشراف متخصص',
        maxDose: '6 g/day for severe infections',
        duration: '4–6 weeks for endocarditis; 2 weeks minimum for uncomplicated bacteremia',
        route: 'IV'
      }
    ],
    renalAdjustment: {
      crclAbove50: 'No adjustment required',
      crcl10to50: '1–2 g loading, then 50% of normal dose at normal interval',
      crclBelow10: '1–2 g loading, then 50% of normal dose every 18–24 hours',
      hemodialysis: '0.5–1 g after each dialysis session'
    },
    hepaticAdjustment: 'No specific adjustment required',
    contraindications: [
      'Known hypersensitivity to cefazolin or other cephalosporins',
      'History of severe immediate hypersensitivity (anaphylaxis) to penicillins (relative — low but present cross-reactivity risk)'
    ],
    mechanismOfAction: 'Inhibits bacterial cell wall synthesis by binding penicillin-binding proteins, preventing peptidoglycan cross-linking, leading to cell lysis in susceptible organisms',
    mechanismOfActionAr: 'يثبط تخليق جدار الخلية البكتيري بالارتباط ببروتينات ربط البنسلين، مما يمنع الترابط المتصالب للببتيدوغليكان ويؤدي لتحلل الخلية',
    halfLife: '1.8–2 hours (normal renal function)',
    monitoringParameters: [
      'Renal function (dose adjustment)',
      'Signs of allergic/hypersensitivity reaction',
      'Clinical response (resolution of infection signs)',
      'Signs of C. difficile-associated diarrhea with prolonged use'
    ],
    pregnancyCategory: 'B',
    lactationSafety: 'Safe',
    foodInteractions: [
      'No significant food interactions'
    ],
    pearls: [
      'Timing of surgical prophylaxis is critical — must be infused and completed within 60 minutes before incision to ensure adequate tissue concentration at the time of the first cut',
      'Excellent choice for confirmed MSSA infections — narrower spectrum than vancomycin with better bactericidal activity against susceptible staphylococci ("cefazolin is better than vancomycin for MSSA")',
      'Low cross-reactivity with penicillins (often cited around 1–2%) means it can frequently be used even in patients reporting penicillin allergy, except with a clear history of severe/anaphylactic reaction',
      'Redosing intraoperatively is needed if surgery exceeds roughly two half-lives (~4 hours) or with major blood loss, to maintain adequate prophylactic tissue levels'
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
