import React, { useState, useMemo } from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  Info,
  CheckCircle2,
  Plus,
  Trash2,
  RefreshCw,
  Search,
  Zap,
  ArrowRightLeft,
  ShieldCheck,
  HelpCircle,
  FileCheck2,
  Copy,
  Check
} from 'lucide-react';
import { Drug, DrugInteraction, InteractionSeverity } from '../types';

interface InteractionCheckerProps {
  allDrugs: Drug[];
  allInteractions: DrugInteraction[];
  initialSelectedDrugs?: string[];
}

export const InteractionChecker: React.FC<InteractionCheckerProps> = ({
  allDrugs,
  allInteractions,
  initialSelectedDrugs = []
}) => {
  const [selectedDrugIds, setSelectedDrugIds] = useState<string[]>(
    initialSelectedDrugs.length > 0 ? initialSelectedDrugs : ['paxlovid', 'semaglutide']
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  // Popular clinical combo presets for fast testing
  const presets = [
    {
      name: 'باكسلوفيد + ستاتين (تفاعل كبدي حرج)',
      drugs: ['paxlovid', 'simvastatin_atorvastatin']
    },
    {
      name: 'إنترستو + راميبريل (خطر الوذمة الوعائية)',
      drugs: ['sacubitril_valsartan', 'ramipril_enalapril']
    },
    {
      name: 'ميروبينيم + ديباكين (هبوط الدواء وتشنجات)',
      drugs: ['meropenem', 'valproic_acid']
    },
    {
      name: 'أبيكسابان + مضادات الالتهاب NSAIDs',
      drugs: ['apixaban', 'ibuprofen_ketorolac']
    },
    {
      name: 'سيماجلوتايد + إمباجليفلوزين (مزيج قلبي آمن)',
      drugs: ['semaglutide', 'empagliflozin']
    }
  ];

  // Extended drug list including auxiliary drugs referenced in interactions
  const availableDrugOptions = useMemo(() => {
    const list = [...allDrugs.map(d => ({ id: d.id, name: `${d.genericName} (${d.genericNameAr})`, brand: d.brandNames.join(', ') }))];
    
    // Add known common external interaction drugs
    const auxiliary = [
      { id: 'simvastatin_atorvastatin', name: 'Simvastatin / Atorvastatin (سيمفاستاتين / أتورفاستاتين)', brand: 'Zocor, Lipitor' },
      { id: 'ramipril_enalapril', name: 'Ramipril / Enalapril (ACE Inhibitors / راميبريل)', brand: 'Tritace, Renitec' },
      { id: 'valproic_acid', name: 'Valproic Acid / Depakine (حمض الفالبرويك / ديباكين)', brand: 'Depakine, Depakote' },
      { id: 'ibuprofen_ketorolac', name: 'Ibuprofen / Ketorolac (بروفين / كيتورولاك - NSAIDs)', brand: 'Brufen, Toradol' },
      { id: 'insulin_glargine', name: 'Insulin Glargine / Aspart (إنسولين)', brand: 'Lantus, NovoRapid' },
      { id: 'furosemide', name: 'Furosemide / Lasix (فوروسيميد / لازكس)', brand: 'Lasix' }
    ];

    auxiliary.forEach(aux => {
      if (!list.some(d => d.id === aux.id)) {
        list.push(aux);
      }
    });

    return list;
  }, [allDrugs]);

  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) return availableDrugOptions;
    const q = searchQuery.toLowerCase();
    return availableDrugOptions.filter(d =>
      d.name.toLowerCase().includes(q) || d.brand.toLowerCase().includes(q)
    );
  }, [availableDrugOptions, searchQuery]);

  const handleAddDrug = (id: string) => {
    if (!selectedDrugIds.includes(id)) {
      setSelectedDrugIds([...selectedDrugIds, id]);
    }
    setSearchQuery('');
  };

  const handleRemoveDrug = (id: string) => {
    setSelectedDrugIds(selectedDrugIds.filter(d => d !== id));
  };

  const handleClearAll = () => {
    setSelectedDrugIds([]);
  };

  // Find pairwise interactions between selected drugs
  const detectedInteractions = useMemo(() => {
    const results: DrugInteraction[] = [];

    for (let i = 0; i < selectedDrugIds.length; i++) {
      for (let j = i + 1; j < selectedDrugIds.length; j++) {
        const id1 = selectedDrugIds[i];
        const id2 = selectedDrugIds[j];

        const match = allInteractions.find(
          inter =>
            (inter.drug1Id === id1 && inter.drug2Id === id2) ||
            (inter.drug1Id === id2 && inter.drug2Id === id1)
        );

        if (match) {
          results.push(match);
        }
      }
    }

    return results;
  }, [selectedDrugIds, allInteractions]);

  // Determine overall severity score
  const highestSeverity: InteractionSeverity | 'safe' = useMemo(() => {
    if (detectedInteractions.length === 0) return 'safe';
    if (detectedInteractions.some(i => i.severity === 'critical')) return 'critical';
    if (detectedInteractions.some(i => i.severity === 'major')) return 'major';
    if (detectedInteractions.some(i => i.severity === 'moderate')) return 'moderate';
    return 'minor';
  }, [detectedInteractions]);

  const handleCopyReport = () => {
    const text = `【 تقرير فحص التفاعلات الدوائية | PharmaPulse 】
الأدوية المفحوصة: ${selectedDrugIds.map(id => availableDrugOptions.find(d => d.id === id)?.name).join(' + ')}
مستوى الخطورة: ${highestSeverity === 'safe' ? 'آمن - لم يُرصد تفاعل خطير' : highestSeverity}
عدد التفاعلات المرصودة: ${detectedInteractions.length}
${detectedInteractions.map((inter, idx) => `
[${idx + 1}] ${inter.titleAr} (${inter.severity.toUpperCase()})
• الآلية: ${inter.mechanismAr}
• الأثر السريري: ${inter.clinicalEffectAr}
• الإجراء الطبي الموصى به: ${inter.managementAr}
`).join('\n')}`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="space-y-4">
      
      {/* Intro Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs sm:text-sm mb-1">
              <ArrowRightLeft className="h-4 w-4" />
              <span>فاحص التفاعلات الدوائية الفوري (Drug Interaction Engine)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              تحليل التداخلات الدوائية والتوصيات السريرية
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              أضف دواءين أو أكثر للتحقق من التداخلات الحركية (CYP450) والتأثيرات السمية وإجراءات التعديل.
            </p>
          </div>

          {selectedDrugIds.length > 0 && (
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyReport}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 transition-colors cursor-pointer"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5 text-slate-500" />}
                <span>{copied ? 'تم نسخ التقرير' : 'نسخ التقرير'}</span>
              </button>
              <button
                onClick={handleClearAll}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 transition-colors cursor-pointer"
              >
                <Trash2 className="h-3.5 w-3.5 text-red-600" />
                <span>إفراغ القائمة</span>
              </button>
            </div>
          )}
        </div>

        {/* Presets Row */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <span className="text-xs text-slate-500 font-bold mb-2 block uppercase tracking-wider">
            أمثلة سريرية شائعة للفحص السريع:
          </span>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDrugIds(preset.drugs)}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 text-slate-700 border border-slate-200 transition-colors cursor-pointer"
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Drugs Chips Box */}
        <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
          <span className="text-xs font-bold text-slate-700 mb-2 block">
            الأدوية قيد الفحص ({selectedDrugIds.length}):
          </span>

          {selectedDrugIds.length === 0 ? (
            <p className="text-xs text-slate-500 italic">
              لم يتم اختيار أي أدوية بعد. اختر من القائمة أدناه أو ابحث بالاسم العلمي أو التجاري.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selectedDrugIds.map(id => {
                const item = availableDrugOptions.find(d => d.id === id);
                return (
                  <span
                    key={id}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white text-slate-800 text-xs font-semibold border border-slate-300 shadow-2xs"
                  >
                    <span>{item ? item.name : id}</span>
                    <button
                      onClick={() => handleRemoveDrug(id)}
                      className="text-slate-400 hover:text-red-600 font-bold transition-colors cursor-pointer"
                      title="إزالة"
                    >
                      ×
                    </button>
                  </span>
                );
              })}
            </div>
          )}

          {/* Search to Add More Drugs */}
          <div className="mt-3.5 relative">
            <div className="relative">
              <Search className="h-4 w-4 text-slate-400 absolute right-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="ابحث لإضافة دواء آخر (مثال: أوزمبيك، باراسيتامول، ليفيتيراسيتام، لازكس...)"
                className="w-full pr-9 pl-4 py-2 text-xs sm:text-sm rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            {searchQuery.trim() && (
              <div className="absolute top-full right-0 left-0 mt-1 max-h-56 overflow-y-auto bg-white border border-slate-200 rounded-xl shadow-xl z-20 p-1.5 space-y-1">
                {filteredOptions.length === 0 ? (
                  <div className="p-3 text-xs text-slate-400 text-center">لا توجد نتائج مطابقة</div>
                ) : (
                  filteredOptions.map(opt => {
                    const isAlreadyAdded = selectedDrugIds.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        disabled={isAlreadyAdded}
                        onClick={() => handleAddDrug(opt.id)}
                        className={`w-full text-right p-2.5 text-xs rounded-lg flex items-center justify-between transition-colors ${
                          isAlreadyAdded
                            ? 'opacity-40 cursor-not-allowed bg-slate-50 text-slate-400'
                            : 'hover:bg-blue-50 text-slate-700 hover:text-blue-900 cursor-pointer'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-slate-900">{opt.name}</div>
                          <div className="text-[11px] text-slate-500">{opt.brand}</div>
                        </div>
                        <Plus className="h-4 w-4 text-blue-600 shrink-0" />
                      </button>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Results Section */}
      {selectedDrugIds.length < 2 ? (
        <div className="p-8 rounded-xl bg-white border border-slate-200 text-center space-y-2 shadow-xs">
          <HelpCircle className="h-9 w-9 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            يرجى إضافة دواءين على الأقل لإجراء فحص التفاعلات
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            محرك التفاعلات السريرية يفحص التفاعلات المباشرة، التثبيط الإنزيمي (CYP3A4/CYP2D6)، إطالة فترة QT، والتأثيرات النزفية والمدرة.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          
          {/* Severity Banner */}
          {highestSeverity === 'safe' ? (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 border-r-4 border-r-emerald-500 flex items-center gap-3 text-emerald-900">
              <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0" />
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-emerald-800 uppercase tracking-wider">
                  لم يتم رصد تفاعلات دوائية خطيرة مباشرة بين هذه المجموعة
                </h4>
                <p className="text-xs text-emerald-900/90 mt-0.5 font-medium">
                  لا توجد موانع استخدام مطلقة مسجلة بين هذه الأدوية المختارة، ومع ذلك يوصى دائماً بمراقبة استجابة المريض السريرية والفحوصات الدورية.
                </p>
              </div>
            </div>
          ) : (
            <div
              className={`p-4 rounded-xl border border-r-4 flex items-start gap-3 ${
                highestSeverity === 'critical'
                  ? 'bg-red-50 border-red-200 border-r-red-600 text-red-900'
                  : highestSeverity === 'major'
                  ? 'bg-amber-50 border-amber-200 border-r-amber-600 text-amber-900'
                  : 'bg-yellow-50 border-yellow-200 border-r-yellow-500 text-yellow-900'
              }`}
            >
              <AlertOctagon className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider">
                  {highestSeverity === 'critical' && 'تنبيه سريري حرج جداً (Contraindicated / Critical Interaction)'}
                  {highestSeverity === 'major' && 'تفاعل دوائي كبير يستوجب التدخل والمراقبة (Major Interaction)'}
                  {highestSeverity === 'moderate' && 'تفاعل دوائي متوسط يحتاج تعديل جرعات (Moderate Interaction)'}
                </h4>
                <p className="text-xs mt-1 font-medium leading-relaxed">
                  تم رصد {detectedInteractions.length} تفاعل(ات) دوائي(ة) بين الأدوية المختارة. يرجى قراءة الآلية والإجراء الدوائي الموصى به أدناه بعناية.
                </p>
              </div>
            </div>
          )}

          {/* Interaction Cards List */}
          {detectedInteractions.map(inter => (
            <div
              key={inter.id}
              className={`p-5 rounded-xl border bg-white shadow-xs space-y-3 ${
                inter.severity === 'critical'
                  ? 'border-red-300'
                  : inter.severity === 'major'
                  ? 'border-amber-300'
                  : 'border-yellow-300'
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                      inter.severity === 'critical'
                        ? 'bg-red-100 text-red-800'
                        : inter.severity === 'major'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {inter.severity === 'critical' ? 'حرج وممنوع' : inter.severity === 'major' ? 'كبير وعالي الخطورة' : 'متوسط'}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    مستوى الإثبات: {inter.evidenceLevel}
                  </span>
                </div>

                <div className="text-xs text-slate-700 font-bold">
                  {inter.drug1Name} ↔ {inter.drug2Name}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-slate-900">
                {inter.titleAr}
              </h3>

              {/* Mechanism & Effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-700 block mb-1">
                    آلية التفاعل الدوائي (Mechanism):
                  </span>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    {inter.mechanismAr}
                  </p>
                  <p className="text-slate-500 text-[11px] mt-1 font-mono">
                    {inter.mechanism}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-red-50/50 border border-red-200">
                  <span className="font-bold text-red-800 block mb-1">
                    الأثر السريري والسمية المحتملة (Clinical Effect):
                  </span>
                  <p className="text-slate-800 leading-relaxed font-medium">
                    {inter.clinicalEffectAr}
                  </p>
                  <p className="text-slate-500 text-[11px] mt-1 font-mono">
                    {inter.clinicalEffect}
                  </p>
                </div>
              </div>

              {/* Management Action Box */}
              <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200">
                <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5 mb-1">
                  <FileCheck2 className="h-4 w-4 text-blue-600" />
                  الإجراء الطبي والدوائي الواجب اتخاذه (Clinical Management):
                </span>
                <p className="text-xs sm:text-sm text-blue-950 font-medium leading-relaxed">
                  {inter.managementAr}
                </p>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};
