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
