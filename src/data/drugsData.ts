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
