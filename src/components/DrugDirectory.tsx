import React, { useState, useMemo } from 'react';
import {
  Search,
  Pill,
  SlidersHorizontal,
  Bookmark,
  BookmarkCheck,
  ChevronLeft,
  ArrowRightLeft,
  Calculator,
  Sparkles,
  Zap,
  AlertTriangle,
  Filter,
  X,
  RotateCcw,
  Baby,
  ShieldAlert,
  Activity,
  CheckCircle2,
  Stethoscope,
  Info,
  Layers,
  HeartPulse
} from 'lucide-react';
import { Drug, UserSubscription, MedicalSpecialty, DrugInteraction } from '../types';
import { SPECIALTY_LABELS } from '../utils/storage';

interface DrugDirectoryProps {
  drugs: Drug[];
  interactions: DrugInteraction[];
  userState: UserSubscription;
  onSelectDrug: (drug: Drug) => void;
  onToggleBookmark: (drugId: string) => void;
  onCheckInteractionsWith?: (drug: Drug) => void;
  onOpenCalculatorsFor?: (drug: Drug) => void;
}

type SearchScope = 'all' | 'name' | 'indication' | 'interaction' | 'class' | 'safety';

export const DrugDirectory: React.FC<DrugDirectoryProps> = ({
  drugs,
  interactions,
  userState,
  onSelectDrug,
  onToggleBookmark,
  onCheckInteractionsWith,
  onOpenCalculatorsFor
}) => {
  // Search & Scope state
  const [searchTerm, setSearchTerm] = useState('');
  const [searchScope, setSearchScope] = useState<SearchScope>('all');
  
  // Advanced Filter states
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRoute, setSelectedRoute] = useState<string>('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState<MedicalSpecialty | 'all'>('all');
  const [selectedPregnancy, setSelectedPregnancy] = useState<string>('all');
  const [filterRenalAdjustment, setFilterRenalAdjustment] = useState<boolean>(false);
  const [filterBlackBoxWarning, setFilterBlackBoxWarning] = useState<boolean>(false);
  const [filterPediatric, setFilterPediatric] = useState<boolean>(false);
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  
  // Sort state
  const [sortBy, setSortBy] = useState<'relevance' | 'name_en' | 'name_ar' | 'class'>('relevance');

  // Mobile / Accordion filter drawer toggle
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  // Extract unique classes
  const classes = useMemo(() => {
    const set = new Set<string>();
    drugs.forEach(d => set.add(d.drugClassAr));
    return ['all', ...Array.from(set)];
  }, [drugs]);

  // Extract unique routes
  const routes = useMemo(() => {
    const set = new Set<string>();
    drugs.forEach(d => {
      d.route.forEach(r => {
        if (r.toLowerCase().includes('oral')) set.add('Oral (فموي)');
        else if (r.toLowerCase().includes('iv') || r.toLowerCase().includes('intra')) set.add('Intravenous (وريدي)');
        else if (r.toLowerCase().includes('subcutaneous') || r.toLowerCase().includes('sc')) set.add('Subcutaneous (تحت الجلد)');
      });
    });
    return ['all', ...Array.from(set)];
  }, [drugs]);

  // Count active filters
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedClass !== 'all') count++;
    if (selectedCategory !== 'all') count++;
    if (selectedRoute !== 'all') count++;
    if (selectedSpecialty !== 'all') count++;
    if (selectedPregnancy !== 'all') count++;
    if (filterRenalAdjustment) count++;
    if (filterBlackBoxWarning) count++;
    if (filterPediatric) count++;
    if (showSavedOnly) count++;
    if (searchScope !== 'all') count++;
    return count;
  }, [
    selectedClass,
    selectedCategory,
    selectedRoute,
    selectedSpecialty,
    selectedPregnancy,
    filterRenalAdjustment,
    filterBlackBoxWarning,
    filterPediatric,
    showSavedOnly,
    searchScope
  ]);

  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSearchScope('all');
    setSelectedClass('all');
    setSelectedCategory('all');
    setSelectedRoute('all');
    setSelectedSpecialty('all');
    setSelectedPregnancy('all');
    setFilterRenalAdjustment(false);
    setFilterBlackBoxWarning(false);
    setFilterPediatric(false);
    setShowSavedOnly(false);
    setSortBy('relevance');
  };

  // Preset filter helper
  const applyPreset = (type: string) => {
    handleResetFilters();
    if (type === 'diabetes_cardio') {
      setSearchTerm('سكري');
      setSelectedSpecialty('cardiology');
    } else if (type === 'anticoagulants') {
      setSearchTerm('تخثر');
    } else if (type === 'renal_dose') {
      setFilterRenalAdjustment(true);
    } else if (type === 'black_box') {
      setFilterBlackBoxWarning(true);
    } else if (type === 'pregnancy_safe') {
      setSelectedPregnancy('safe');
    } else if (type === 'icu_emergency') {
      setSelectedSpecialty('icu_emergency');
    }
  };

  // Helper to find potential interactions for a specific drug
  const getInteractionsForDrug = (drugId: string, drugName: string) => {
    return interactions.filter(
      inter =>
        inter.drug1Id === drugId ||
        inter.drug2Id === drugId ||
        inter.drug1Name.toLowerCase().includes(drugName.toLowerCase()) ||
        inter.drug2Name.toLowerCase().includes(drugName.toLowerCase())
    );
  };

  // Search and Filter computation
  const searchResults = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();

    return drugs
      .map(drug => {
        let matchScore = 0;
        const matchedReasons: { type: 'name' | 'indication' | 'interaction' | 'class' | 'warning'; text: string }[] = [];

        // 1. Check Name matches
        const matchesGenericEn = drug.genericName.toLowerCase().includes(q);
        const matchesGenericAr = drug.genericNameAr.includes(q);
        const matchedBrand = drug.brandNames.find(b => b.toLowerCase().includes(q));

        if (q && (searchScope === 'all' || searchScope === 'name')) {
          if (matchesGenericEn || matchesGenericAr) {
            matchScore += 100;
            matchedReasons.push({ type: 'name', text: `${drug.genericName} (${drug.genericNameAr})` });
          }
          if (matchedBrand) {
            matchScore += 80;
            matchedReasons.push({ type: 'name', text: `اسم تجاري: ${matchedBrand}` });
          }
        }

        // 2. Check Indication / Clinical Use matches
        if (q && (searchScope === 'all' || searchScope === 'indication')) {
          const matchedInd = drug.indications.find(
            ind =>
              ind.indication.toLowerCase().includes(q) ||
              ind.indicationAr.includes(q) ||
              ind.adultDoseAr.includes(q) ||
              (ind.pediatricDoseAr && ind.pediatricDoseAr.includes(q))
          );
          if (matchedInd) {
            matchScore += 60;
            matchedReasons.push({ type: 'indication', text: `استطباب: ${matchedInd.indicationAr}` });
          }
        }

        // 3. Check Potential Drug Interactions
        const drugInteractions = getInteractionsForDrug(drug.id, drug.genericName);
        if (q && (searchScope === 'all' || searchScope === 'interaction')) {
          // Check if searched query matches any interacting drug or interaction text
          const matchedInter = drugInteractions.find(
            inter =>
              inter.drug1Name.toLowerCase().includes(q) ||
              inter.drug2Name.toLowerCase().includes(q) ||
              inter.titleAr.includes(q) ||
              inter.title.toLowerCase().includes(q) ||
              inter.mechanismAr.includes(q) ||
              inter.clinicalEffectAr.includes(q)
          );

          if (matchedInter) {
            matchScore += 70;
            const otherDrugName = matchedInter.drug1Id === drug.id ? matchedInter.drug2Name : matchedInter.drug1Name;
            matchedReasons.push({
              type: 'interaction',
              text: `تفاعل محتمل (${matchedInter.severity === 'critical' ? 'حرج' : 'رئيسي'}): ${otherDrugName}`
            });
          }

          // Also check food & general interactions
          const matchedFoodInter = drug.foodInteractions.find(f => f.toLowerCase().includes(q) || f.includes(q));
          if (matchedFoodInter) {
            matchScore += 40;
            matchedReasons.push({ type: 'interaction', text: `تفاعل غذائي/دوائي: ${matchedFoodInter.slice(0, 40)}...` });
          }
        }

        // 4. Check Class & MOA matches
        if (q && (searchScope === 'all' || searchScope === 'class')) {
          if (drug.drugClass.toLowerCase().includes(q) || drug.drugClassAr.includes(q)) {
            matchScore += 50;
            matchedReasons.push({ type: 'class', text: `الفئة: ${drug.drugClassAr}` });
          }
          if (drug.mechanismOfAction.toLowerCase().includes(q) || drug.mechanismOfActionAr.includes(q)) {
            matchScore += 40;
            matchedReasons.push({ type: 'class', text: `آلية العمل: ${drug.mechanismOfActionAr.slice(0, 45)}...` });
          }
        }

        // 5. Check Safety / Black Box / Contraindications
        if (q && (searchScope === 'all' || searchScope === 'safety')) {
          const matchedContra = drug.contraindications.find(c => c.toLowerCase().includes(q) || c.includes(q));
          if (matchedContra) {
            matchScore += 45;
            matchedReasons.push({ type: 'warning', text: `موانع الاستعمال: ${matchedContra}` });
          }
          if (drug.blackBoxWarningAr && drug.blackBoxWarningAr.includes(q)) {
            matchScore += 55;
            matchedReasons.push({ type: 'warning', text: `تحذير الصندوق الأسود` });
          }
          const matchedPearl = drug.pearls.find(p => p.toLowerCase().includes(q) || p.includes(q));
          if (matchedPearl) {
            matchScore += 30;
            matchedReasons.push({ type: 'warning', text: `نصيحة سريرية: ${matchedPearl.slice(0, 45)}...` });
          }
        }

        // Criteria filters evaluation
        const matchesQuery = !q || matchScore > 0;
        const matchesClass = selectedClass === 'all' || drug.drugClassAr === selectedClass;
        const matchesCategory = selectedCategory === 'all' || drug.category === selectedCategory;
        const matchesSaved = !showSavedOnly || userState.savedDrugs.includes(drug.id);
        const matchesSpecialty =
          selectedSpecialty === 'all' || drug.targetSpecialties.includes(selectedSpecialty);

        // Route filter
        const matchesRoute =
          selectedRoute === 'all' ||
          (selectedRoute.includes('Oral') && drug.route.some(r => r.toLowerCase().includes('oral'))) ||
          (selectedRoute.includes('Intravenous') && drug.route.some(r => r.toLowerCase().includes('iv') || r.toLowerCase().includes('intra'))) ||
          (selectedRoute.includes('Subcutaneous') && drug.route.some(r => r.toLowerCase().includes('subcutaneous') || r.toLowerCase().includes('sc')));

        // Pregnancy filter
        let matchesPregnancy = true;
        if (selectedPregnancy === 'safe') {
          matchesPregnancy = drug.pregnancyCategory === 'A' || drug.pregnancyCategory === 'B' || drug.pregnancyCategory === 'Compatible';
        } else if (selectedPregnancy === 'caution') {
          matchesPregnancy = drug.pregnancyCategory === 'C' || drug.pregnancyCategory === 'Use with Caution';
        } else if (selectedPregnancy === 'contraindicated') {
          matchesPregnancy = drug.pregnancyCategory === 'D' || drug.pregnancyCategory === 'X' || drug.pregnancyCategory === 'Contraindicated';
        }

        // Specific toggles
        const matchesRenal = !filterRenalAdjustment || (
          drug.renalAdjustment.crcl10to50.includes('تعديل') ||
          drug.renalAdjustment.crcl10to50.includes('تخفيض') ||
          drug.renalAdjustment.crcl10to50.includes('مخف') ||
          drug.renalAdjustment.crclBelow10.includes('مضاد') ||
          drug.renalAdjustment.crclBelow10.includes('تعديل') ||
          drug.renalAdjustment.crclBelow10.includes('تخفيض') ||
          drug.renalAdjustment.crclBelow10.includes('تجنب')
        );

        const matchesBlackBox = !filterBlackBoxWarning || !!drug.blackBoxWarningAr;
        const matchesPediatric = !filterPediatric || drug.indications.some(ind => !!ind.pediatricDoseAr);

        const isIncluded =
          matchesQuery &&
          matchesClass &&
          matchesCategory &&
          matchesSaved &&
          matchesSpecialty &&
          matchesRoute &&
          matchesPregnancy &&
          matchesRenal &&
          matchesBlackBox &&
          matchesPediatric;

        return {
          drug,
          isIncluded,
          matchScore,
          matchedReasons,
          drugInteractionsCount: drugInteractions.length
        };
      })
      .filter(item => item.isIncluded)
      .sort((a, b) => {
        if (sortBy === 'relevance') {
          if (b.matchScore !== a.matchScore) return b.matchScore - a.matchScore;
          if (a.drug.isFeaturedToday) return -1;
          if (b.drug.isFeaturedToday) return 1;
          return a.drug.genericName.localeCompare(b.drug.genericName);
        } else if (sortBy === 'name_en') {
          return a.drug.genericName.localeCompare(b.drug.genericName);
        } else if (sortBy === 'name_ar') {
          return a.drug.genericNameAr.localeCompare(b.drug.genericNameAr);
        } else if (sortBy === 'class') {
          return a.drug.drugClassAr.localeCompare(b.drug.drugClassAr);
        }
        return 0;
      });
  }, [
    drugs,
    searchTerm,
    searchScope,
    selectedClass,
    selectedCategory,
    selectedRoute,
    selectedSpecialty,
    selectedPregnancy,
    filterRenalAdjustment,
    filterBlackBoxWarning,
    filterPediatric,
    showSavedOnly,
    sortBy,
    userState.savedDrugs,
    interactions
  ]);

  return (
    <div className="space-y-4">
      
      {/* 1. Search Engine Header & Quick Controls */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-6 shadow-xs space-y-4">
        
        {/* Title and Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs sm:text-sm mb-1">
              <Search className="h-4 w-4" />
              <span>محرك البحث الدوائي المتقدم والتصنيف الإكلينيكي (Advanced Clinical Search Engine)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              البحث الدوائي الشامل، الاستطبابات، والتفاعلات المحتملة
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              ابحث بالاسم العلمي، التجاري، الاستخدام السريري، أو اسم الدواء المتفاعل للتحقق من التفاعلات وملاءمة الجرعة.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold font-mono">
              {searchResults.length} دواء معتمد
            </span>
          </div>
        </div>

        {/* Search Bar + Scope Dropdown + Filter Drawer Toggle */}
        <div className="space-y-2">
          <div className="flex flex-col md:flex-row gap-2">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="h-4 w-4 text-slate-400 absolute right-3.5 top-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="ابحث بالاسم، الاستخدام (مثل: قصور القلب، السكري)، أو اسم دواء متفاعل (مثل: وارفارين، أوميبرازول، ستاتين)..."
                className="w-full pr-10 pl-10 py-2.5 text-xs sm:text-sm rounded-lg bg-slate-50 hover:bg-white focus:bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute left-3 top-3 text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                  title="مسح البحث"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Scope Selector */}
            <div className="flex items-center gap-1.5 shrink-0">
              <select
                value={searchScope}
                onChange={e => setSearchScope(e.target.value as SearchScope)}
                aria-label="نطاق البحث المحدد"
                className="py-2.5 px-3 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-semibold focus:outline-none focus:border-blue-600 cursor-pointer"
              >
                <option value="all">كل الحقول (شامل)</option>
                <option value="name">الاسم العلمي والتجاري فقط</option>
                <option value="indication">الاستخدامات والاستطبابات</option>
                <option value="interaction">التفاعلات الدوائية المحتملة</option>
                <option value="class">الفئة الدوائية وآلية العمل</option>
                <option value="safety">موانع الاستعمال والمحاذير</option>
              </select>

              {/* Advanced Filters Button */}
              <button
                onClick={() => setIsFilterPanelOpen(!isFilterPanelOpen)}
                className={`py-2.5 px-3.5 rounded-lg border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isFilterPanelOpen || activeFiltersCount > 0
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                }`}
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>خيارات التصفية</span>
                {activeFiltersCount > 0 && (
                  <span className="h-4 w-4 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] flex items-center justify-center">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>

          </div>

          {/* Quick Preset Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs pt-1">
            <span className="text-slate-500 font-bold shrink-0 text-[11px]">اختصارات سريرية:</span>
            <button
              onClick={() => applyPreset('diabetes_cardio')}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-800 border border-slate-200 text-slate-700 whitespace-nowrap text-[11px] font-medium transition-colors cursor-pointer"
            >
              ❤️ أدوية القلب والسكري
            </button>
            <button
              onClick={() => applyPreset('anticoagulants')}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-800 border border-slate-200 text-slate-700 whitespace-nowrap text-[11px] font-medium transition-colors cursor-pointer"
            >
              🩸 مضادات التخثر (DOACs/Warfarin)
            </button>
            <button
              onClick={() => applyPreset('renal_dose')}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-800 border border-slate-200 text-slate-700 whitespace-nowrap text-[11px] font-medium transition-colors cursor-pointer"
            >
              💧 تتطلب تعديلاً كلوياً
            </button>
            <button
              onClick={() => applyPreset('black_box')}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-red-50 hover:text-red-800 border border-slate-200 text-slate-700 whitespace-nowrap text-[11px] font-medium transition-colors cursor-pointer"
            >
              ⚠️ تحذير الصندوق الأسود
            </button>
            <button
              onClick={() => applyPreset('pregnancy_safe')}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-emerald-50 hover:text-emerald-800 border border-slate-200 text-slate-700 whitespace-nowrap text-[11px] font-medium transition-colors cursor-pointer"
            >
              🤰 آمنة في الحمل (Cat A/B)
            </button>
            <button
              onClick={() => applyPreset('icu_emergency')}
              className="px-2.5 py-1 rounded bg-slate-100 hover:bg-blue-50 hover:text-blue-800 border border-slate-200 text-slate-700 whitespace-nowrap text-[11px] font-medium transition-colors cursor-pointer"
            >
              🚨 العناية والطوارئ
            </button>
          </div>
        </div>

        {/* 2. Expanded Filter Panel */}
        {isFilterPanelOpen && (
          <div className="pt-4 border-t border-slate-200 space-y-4">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-800 font-bold text-xs sm:text-sm">
                <Filter className="h-4 w-4 text-blue-600" />
                <span>معايير التصفية والفرز المتقدم:</span>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-bold transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>إعادة ضبط الفلاتر ({activeFiltersCount})</span>
                </button>
              )}
            </div>

            {/* Filter Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              
              {/* Filter 1: Drug Class */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">الفئة الدوائية:</label>
                <select
                  value={selectedClass}
                  onChange={e => setSelectedClass(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                >
                  <option value="all">جميع الفئات ({drugs.length})</option>
                  {classes.filter(c => c !== 'all').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Filter 2: Category (Rx, OTC, Controlled) */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">تصنيف الصرف القانوني:</label>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                >
                  <option value="all">الكل (Rx, OTC, Controlled)</option>
                  <option value="Rx">وصفة طبية فقط (Rx)</option>
                  <option value="OTC">بدون وصفة (OTC)</option>
                  <option value="Controlled">أدوية مراقبة / مخدرات (Controlled)</option>
                </select>
              </div>

              {/* Filter 3: Route of Administration */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">طريقة الإعطاء (Route):</label>
                <select
                  value={selectedRoute}
                  onChange={e => setSelectedRoute(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                >
                  <option value="all">جميع الطرق</option>
                  {routes.filter(r => r !== 'all').map(r => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              {/* Filter 4: Pregnancy Safety */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">سلامة الحمل (Pregnancy):</label>
                <select
                  value={selectedPregnancy}
                  onChange={e => setSelectedPregnancy(e.target.value)}
                  className="w-full p-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                >
                  <option value="all">الكل</option>
                  <option value="safe">آمن (Category A / B / Compatible)</option>
                  <option value="caution">يستخدم بحذر شديد (Category C)</option>
                  <option value="contraindicated">مضاد استطباب وممنوع (Category D / X)</option>
                </select>
              </div>

              {/* Filter 5: Medical Specialty */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">التخصص السريري المستهدف:</label>
                <select
                  value={selectedSpecialty}
                  onChange={e => setSelectedSpecialty(e.target.value as MedicalSpecialty | 'all')}
                  className="w-full p-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                >
                  <option value="all">جميع التخصصات</option>
                  {(Object.keys(SPECIALTY_LABELS) as MedicalSpecialty[]).filter(k => k !== 'all').map(specKey => (
                    <option key={specKey} value={specKey}>
                      {SPECIALTY_LABELS[specKey].ar}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter 6: Sort By */}
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">ترتيب النتائج حسب:</label>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value as any)}
                  className="w-full p-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 font-medium focus:outline-none focus:border-blue-600"
                >
                  <option value="relevance">الأكثر صلة والمطابقة</option>
                  <option value="name_en">الاسم العلمي الإنجليزي (A - Z)</option>
                  <option value="name_ar">الاسم العلمي العربي (أ - ي)</option>
                  <option value="class">الفئة الدوائية</option>
                </select>
              </div>

            </div>

            {/* Checkbox Toggles Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
              
              <label className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 font-medium text-slate-800">
                <input
                  type="checkbox"
                  checked={filterRenalAdjustment}
                  onChange={e => setFilterRenalAdjustment(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span>تعديل الجرعة في القصور الكلوي</span>
              </label>

              <label className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 font-medium text-slate-800">
                <input
                  type="checkbox"
                  checked={filterBlackBoxWarning}
                  onChange={e => setFilterBlackBoxWarning(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span>يحمل تحذير الصندوق الأسود (Black Box)</span>
              </label>

              <label className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 font-medium text-slate-800">
                <input
                  type="checkbox"
                  checked={filterPediatric}
                  onChange={e => setFilterPediatric(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span>يتضمن جرعات معتمدة للأطفال</span>
              </label>

              <label className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-50 border border-slate-200 cursor-pointer hover:bg-slate-100 font-medium text-slate-800">
                <input
                  type="checkbox"
                  checked={showSavedOnly}
                  onChange={e => setShowSavedOnly(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-0"
                />
                <span>الأدوية المحفوظة في المفضلة ({userState.savedDrugs.length})</span>
              </label>

            </div>

          </div>
        )}

        {/* 3. Active Filters Chips Bar */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 text-xs">
            <span className="text-slate-500 font-bold text-[11px]">الفلاتر النشطة:</span>
            
            {searchScope !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[11px]">
                نطاق: {searchScope}
                <button onClick={() => setSearchScope('all')} className="hover:text-blue-700 cursor-pointer">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {selectedClass !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[11px]">
                الفئة: {selectedClass}
                <button onClick={() => setSelectedClass('all')} className="hover:text-blue-700 cursor-pointer">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {selectedCategory !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[11px]">
                التصنيف: {selectedCategory}
                <button onClick={() => setSelectedCategory('all')} className="hover:text-blue-700 cursor-pointer">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {selectedSpecialty !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[11px]">
                التخصص: {SPECIALTY_LABELS[selectedSpecialty]?.ar}
                <button onClick={() => setSelectedSpecialty('all')} className="hover:text-blue-700 cursor-pointer">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {selectedPregnancy !== 'all' && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[11px]">
                الحمل: {selectedPregnancy}
                <button onClick={() => setSelectedPregnancy('all')} className="hover:text-blue-700 cursor-pointer">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {filterRenalAdjustment && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[11px]">
                تعديل كلوي
                <button onClick={() => setFilterRenalAdjustment(false)} className="hover:text-blue-700 cursor-pointer">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {filterBlackBoxWarning && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-100 text-red-900 font-bold text-[11px]">
                تحذير الصندوق الأسود
                <button onClick={() => setFilterBlackBoxWarning(false)} className="hover:text-red-700 cursor-pointer">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {filterPediatric && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[11px]">
                للأطفال
                <button onClick={() => setFilterPediatric(false)} className="hover:text-blue-700 cursor-pointer">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            {showSavedOnly && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[11px]">
                المحفوظة فقط
                <button onClick={() => setShowSavedOnly(false)} className="hover:text-amber-700 cursor-pointer">
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              className="text-[11px] font-bold text-red-600 hover:underline mr-auto cursor-pointer"
            >
              مسح الكل
            </button>
          </div>
        )}

      </div>

      {/* 4. Results Grid */}
      {searchResults.length === 0 ? (
        <div className="p-8 rounded-xl bg-white border border-slate-200 text-center space-y-3 shadow-xs">
          <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Pill className="h-6 w-6" />
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            لم يتم العثور على أدوية مطابقة لمعايير البحث الحالية
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            جرب تخفيف فلاتر التصفية، أو كتابة الاسم التجاري (مثل: ليبيتور، بلافيكس، أوزمبيك) أو الاستطباب السريري.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 text-white text-xs font-bold shadow-xs hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>إعادة ضبط البحث والفلاتر</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {searchResults.map(({ drug, matchedReasons, drugInteractionsCount }) => {
            const isSaved = userState.savedDrugs.includes(drug.id);
            const hasPediatric = drug.indications.some(ind => !!ind.pediatricDoseAr);

            return (
              <div
                key={drug.id}
                className="card-3d rounded-2xl p-5 shadow-sm flex flex-col justify-between transition-all group"
              >
                <div className="space-y-2.5">
                  
                  {/* Top Badges & Bookmark */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">
                        {drug.category}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200">
                        {drug.drugClassAr}
                      </span>
                      {drug.isFeaturedToday && (
                        <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold border border-emerald-200 flex items-center gap-1">
                          <Sparkles className="h-3 w-3 text-emerald-600" /> دواء اليوم
                        </span>
                      )}
                      {drug.blackBoxWarningAr && (
                        <span className="px-1.5 py-0.5 rounded bg-red-50 text-red-800 text-[10px] font-bold border border-red-200 flex items-center gap-0.5" title="تحذير الصندوق الأسود">
                          <AlertTriangle className="h-3 w-3 text-red-600" /> تحذير شديد
                        </span>
                      )}
                      {hasPediatric && (
                        <span className="px-1.5 py-0.5 rounded bg-purple-50 text-purple-800 text-[10px] font-bold border border-purple-200 flex items-center gap-0.5">
                          <Baby className="h-3 w-3 text-purple-600" /> للأطفال
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => onToggleBookmark(drug.id)}
                      className="text-slate-400 hover:text-amber-500 p-1 transition-colors cursor-pointer"
                      title={isSaved ? 'إزالة من المحفوظات' : 'حفظ في المفضلة'}
                    >
                      {isSaved ? (
                        <BookmarkCheck className="h-5 w-5 text-amber-600" />
                      ) : (
                        <Bookmark className="h-5 w-5 text-slate-300 hover:text-amber-500" />
                      )}
                    </button>
                  </div>

                  {/* Drug Scientific Names */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors flex items-baseline gap-2">
                      <span>{drug.genericName}</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-600">({drug.genericNameAr})</span>
                    </h3>

                    {/* Trade / Brand Names */}
                    <div className="mt-1 text-xs text-slate-500 flex flex-wrap items-center gap-1 font-medium">
                      <span className="font-bold text-slate-700">الأسماء التجارية:</span>
                      <span>{drug.brandNames.join(' • ')}</span>
                    </div>
                  </div>

                  {/* Matched Reasons Highlights (When searching) */}
                  {matchedReasons.length > 0 && searchTerm && (
                    <div className="p-2 rounded-lg bg-blue-50/80 border border-blue-200 space-y-1 text-xs">
                      <div className="text-[11px] font-bold text-blue-900 flex items-center gap-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                        <span>تطابق معيار البحث:</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {matchedReasons.map((reason, idx) => (
                          <span
                            key={idx}
                            className={`px-1.5 py-0.5 rounded text-[11px] font-semibold ${
                              reason.type === 'interaction'
                                ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                                : reason.type === 'warning'
                                ? 'bg-red-100 text-red-900 border border-red-300 font-bold'
                                : 'bg-white text-blue-800 border border-blue-200'
                            }`}
                          >
                            {reason.type === 'interaction' && '⚡ '}
                            {reason.type === 'indication' && '🎯 '}
                            {reason.type === 'name' && '🏷️ '}
                            {reason.text}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Indication Snapshot */}
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-0.5">
                    <strong className="text-slate-900 block font-bold">
                      {drug.indications[0]?.indicationAr} ({drug.indications[0]?.indication}):
                    </strong>
                    <p className="line-clamp-2 leading-relaxed">
                      {drug.indications[0]?.adultDoseAr}
                    </p>
                  </div>

                  {/* Clinical Highlight / Pearl */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-medium">
                    💡 <strong className="text-slate-800">نصيحة سريرية: </strong>
                    {drug.pearls[0] || drug.keyHighlights[0]}
                  </p>

                </div>

                {/* Card Actions Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  
                  {/* Quick Action Links (Interactions & Dose Calc) */}
                  <div className="flex items-center gap-2">
                    {onCheckInteractionsWith && (
                      <button
                        onClick={() => onCheckInteractionsWith(drug)}
                        className="px-2 py-1 rounded bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-bold text-[11px] border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                        title="فحص تفاعلات هذا الدواء مع الأدوية الأخرى"
                      >
                        <ArrowRightLeft className="h-3 w-3 text-blue-600" />
                        <span>فحص التفاعلات</span>
                        {drugInteractionsCount > 0 && (
                          <span className="text-[10px] text-blue-700 font-bold">({drugInteractionsCount})</span>
                        )}
                      </button>
                    )}

                    {onOpenCalculatorsFor && (
                      <button
                        onClick={() => onOpenCalculatorsFor(drug)}
                        className="px-2 py-1 rounded bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-800 font-bold text-[11px] border border-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
                        title="حساب الجرعة والتعديل الكلوي"
                      >
                        <Calculator className="h-3 w-3 text-blue-600" />
                        <span>حساب الجرعة</span>
                      </button>
                    )}
                  </div>

                  {/* View Monograph Button */}
                  <button
                    onClick={() => onSelectDrug(drug)}
                    className="flex items-center justify-end gap-1 font-bold text-blue-700 hover:text-blue-900 transition-colors cursor-pointer py-1"
                  >
                    <span>عرض البطاقة الكاملة</span>
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                </div>

              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
