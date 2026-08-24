import React, { useState } from 'react';
import {
  X,
  Pill,
  Bookmark,
  BookmarkCheck,
  AlertTriangle,
  FileText,
  Activity,
  Utensils,
  Zap,
  ArrowRightLeft,
  Calculator,
  ShieldAlert,
  Baby,
  HeartPulse,
  Info,
  CheckCircle2
} from 'lucide-react';
import { Drug, UserSubscription } from '../types';

interface DrugDetailModalProps {
  drug: Drug | null;
  isOpen: boolean;
  onClose: () => void;
  userState: UserSubscription;
  onToggleBookmark: (drugId: string) => void;
  onCheckInteractions: (drug: Drug) => void;
  onOpenCalculators: (drug: Drug) => void;
}

export const DrugDetailModal: React.FC<DrugDetailModalProps> = ({
  drug,
  isOpen,
  onClose,
  userState,
  onToggleBookmark,
  onCheckInteractions,
  onOpenCalculators
}) => {
  const [activeTab, setActiveTab] = useState<'dosing' | 'side_effects' | 'renal' | 'safety' | 'pearls'>('dosing');

  if (!isOpen || !drug) return null;

  const isSaved = userState.savedDrugs.includes(drug.id);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl text-right flex flex-col card-3d">
        
        {/* German Engineering Micro Precision Trim */}
        <div className="german-flag-trim w-full" />

        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shadow-xs flex items-center justify-center shrink-0">
              <Pill className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-slate-900">
                  {drug.genericName} <span className="text-blue-600 font-bold">({drug.genericNameAr})</span>
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                  قاعدة بيانات محلية Offline
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium">{drug.drugClassAr} • {drug.drugClass}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleBookmark(drug.id)}
              className={`p-2 rounded-xl border text-xs cursor-pointer transition-all ${
                isSaved
                  ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold shadow-xs'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
              title="حفظ بالمفضلة"
            >
              {isSaved ? <BookmarkCheck className="h-4 w-4 text-amber-700" /> : <Bookmark className="h-4 w-4 text-slate-400" />}
            </button>

            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-6 space-y-5">
          
          {/* Brand Names & Quick Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
            <div className="space-y-1">
              <div className="text-xs text-slate-500 font-medium">
                الأسماء التجارية الشائعة:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {drug.brandNames.map((brand, bIdx) => (
                  <span key={bIdx} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-800 font-bold text-xs shadow-2xs">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  onClose();
                  onCheckInteractions(drug);
                }}
                className="btn-3d-primary text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <ArrowRightLeft className="h-3.5 w-3.5" />
                <span>فحص التفاعلات</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenCalculators(drug);
                }}
                className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 flex items-center gap-1.5 cursor-pointer transition-all shadow-2xs"
              >
                <Calculator className="h-3.5 w-3.5 text-blue-600" />
                <span>حساب الجرعة</span>
              </button>
            </div>
          </div>

          {/* Black Box Warning if exists */}
          {(drug.blackBoxWarningAr || drug.blackBoxWarning) && (
            <div className="p-4 rounded-xl bg-red-50/90 border border-red-200 border-r-4 border-r-red-600 text-red-950 flex items-start gap-3 shadow-xs">
              <ShieldAlert className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <strong className="text-red-900 block font-black text-xs uppercase tracking-wider">
                  تحذير الصندوق الأسود الأشد خطورة (FDA Boxed Warning)
                </strong>
                <p className="text-xs sm:text-sm text-red-950 font-bold leading-relaxed">
                  {drug.blackBoxWarningAr || drug.blackBoxWarning}
                </p>
                {drug.blackBoxWarning && (
                  <p className="text-[11px] text-red-800/80 font-mono">
                    {drug.blackBoxWarning}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Navigation Tabs */}
          <div className="border-b border-slate-200 flex gap-2 sm:gap-4 overflow-x-auto pb-px">
            <button
              onClick={() => setActiveTab('dosing')}
              className={`pb-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap cursor-pointer transition-all flex items-center gap-1.5 ${
                activeTab === 'dosing' ? 'border-blue-600 text-blue-700 transform -translate-y-0.5' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>الاستخدامات والجرعات</span>
            </button>

            <button
              onClick={() => setActiveTab('side_effects')}
              className={`pb-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap cursor-pointer transition-all flex items-center gap-1.5 ${
                activeTab === 'side_effects' ? 'border-rose-600 text-rose-700 transform -translate-y-0.5' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <AlertTriangle className="h-4 w-4 text-rose-500" />
              <span>الآثار الجانبية والتحذيرات</span>
            </button>

            <button
              onClick={() => setActiveTab('renal')}
              className={`pb-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap cursor-pointer transition-all flex items-center gap-1.5 ${
                activeTab === 'renal' ? 'border-blue-600 text-blue-700 transform -translate-y-0.5' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Activity className="h-4 w-4" />
              <span>التعديل الكلوي والكبدي</span>
            </button>

            <button
              onClick={() => setActiveTab('safety')}
              className={`pb-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap cursor-pointer transition-all flex items-center gap-1.5 ${
                activeTab === 'safety' ? 'border-blue-600 text-blue-700 transform -translate-y-0.5' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <ShieldAlert className="h-4 w-4" />
              <span>موانع الاستعمال والحمل</span>
            </button>

            <button
              onClick={() => setActiveTab('pearls')}
              className={`pb-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap cursor-pointer transition-all flex items-center gap-1.5 ${
                activeTab === 'pearls' ? 'border-amber-500 text-amber-700 font-black transform -translate-y-0.5' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Zap className="h-4 w-4 text-amber-500" />
              <span>النصائح السريرية</span>
            </button>
          </div>

          {/* Tab 1: Indications & Dosing */}
          {activeTab === 'dosing' && (
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs leading-relaxed text-slate-800 font-medium">
                <strong className="text-blue-900 block font-bold mb-1">آلية العمل الدوائي المحددة:</strong>
                {drug.mechanismOfActionAr}
              </div>

              <div className="space-y-3">
                {drug.indications.map((ind, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 shadow-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-black text-slate-900 text-sm">
                        {ind.indicationAr} <span className="text-xs text-slate-500 font-medium">({ind.indication})</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-white text-blue-700 text-xs border border-blue-200 font-mono font-bold">
                        طريقة الإعطاء: {ind.route}
                      </span>
                    </div>

                    <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800">
                      <strong className="text-slate-900">جرعة البالغين: </strong>
                      <span className="font-semibold text-slate-950">{ind.adultDoseAr}</span>
                    </div>

                    {(ind.pediatricDoseAr || ind.pediatricDose) && (
                      <div className="bg-purple-50/70 p-3 rounded-lg border border-purple-200 text-xs sm:text-sm text-purple-950">
                        <strong className="text-purple-900 flex items-center gap-1 mb-1">
                          <Baby className="h-3.5 w-3.5 text-purple-600" /> جرعة الأطفال:
                        </strong>
                        <span className="font-semibold">{ind.pediatricDoseAr || ind.pediatricDose}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: Side Effects & Warnings */}
          {activeTab === 'side_effects' && (
            <div className="space-y-4 text-xs">
              
              {/* Warnings Box */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2">
                <div className="font-bold text-amber-900 text-sm flex items-center gap-1.5">
                  <ShieldAlert className="h-4 w-4 text-amber-600" />
                  <span>التحذيرات والاحتياطات الهامة (Warnings & Precautions):</span>
                </div>
                <ul className="space-y-1.5 text-slate-800 font-medium">
                  {drug.keyHighlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                  {drug.halfLife && (
                    <li className="flex items-start gap-2 text-slate-700">
                      <span className="text-amber-600 font-bold">•</span>
                      <span>عمر النصف الحيوي للدواء: <strong>{drug.halfLife}</strong></span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Monitoring Parameters */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <HeartPulse className="h-4 w-4 text-rose-600" />
                  <span>مؤشرات وفحوصات المتابعة الدورية (Monitoring Parameters):</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {drug.monitoringParameters.map((param, pIdx) => (
                    <div key={pIdx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-800 font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{param}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Tab 3: Renal & Hepatic Adjustments */}
          {activeTab === 'renal' && (
            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 shadow-xs">
                  <span className="font-bold text-emerald-900 block mb-1">CrCl &gt; 50 mL/min:</span>
                  <p className="text-slate-800 font-semibold leading-relaxed">{drug.renalAdjustment.crclAbove50}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200 shadow-xs">
                  <span className="font-bold text-amber-900 block mb-1">CrCl 10-50 mL/min:</span>
                  <p className="text-slate-800 font-semibold leading-relaxed">{drug.renalAdjustment.crcl10to50}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-red-50/60 border border-red-200 shadow-xs">
                  <span className="font-bold text-red-900 block mb-1">CrCl &lt; 10 mL/min:</span>
                  <p className="text-slate-800 font-semibold leading-relaxed">{drug.renalAdjustment.crclBelow10}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200 shadow-xs">
                  <span className="font-bold text-indigo-900 block mb-1">الغسيل الكلوي (Hemodialysis):</span>
                  <p className="text-slate-800 font-semibold leading-relaxed">{drug.renalAdjustment.hemodialysis}</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">تعديلات القصور الكبدي (Hepatic Impairment):</span>
                <p className="text-slate-700 font-medium leading-relaxed">{drug.hepaticAdjustment}</p>
              </div>
            </div>
          )}

          {/* Tab 4: Safety & Pregnancy */}
          {activeTab === 'safety' && (
            <div className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-700">أمان الاستخدام أثناء الحمل (Pregnancy):</span>
                  <span className="font-bold text-red-800 bg-red-100 px-2.5 py-1 rounded-md border border-red-200">{drug.pregnancyCategory}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-bold text-slate-700">أمان الاستخدام أثناء الرضاعة (Lactation):</span>
                  <span className="font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-md border border-amber-200">{drug.lactationSafety}</span>
                </div>
              </div>

              {/* Contraindications */}
              <div className="p-4 rounded-xl bg-red-50/80 border border-red-200 space-y-2">
                <div className="font-bold text-red-900 text-sm flex items-center gap-1.5">
                  <ShieldAlert className="h-4 w-4 text-red-600" />
                  <span>موانع الاستعمال المطلقة (Contraindications):</span>
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-slate-800 font-semibold">
                  {drug.contraindications.map((c, i) => (
                    <li key={i} className="leading-relaxed">{c}</li>
                  ))}
                </ul>
              </div>

              {/* Food Guidance */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Utensils className="h-4 w-4 text-blue-600" />
                  <span>تعليمات الغذاء والتغذية (Food Instructions):</span>
                </div>
                <ul className="space-y-1 text-slate-700 font-medium">
                  {drug.foodInteractions.map((food, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{food}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 5: Clinical Pearls */}
          {activeTab === 'pearls' && (
            <div className="space-y-3 text-xs">
              <div className="font-bold text-amber-900 text-sm mb-1 flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-amber-600" />
                <span>نصائح إكلينيكية وعملية للأطباء والصيادلة:</span>
              </div>
              {drug.pearls.map((pearl, i) => (
                <div key={i} className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 flex items-start gap-3 shadow-xs">
                  <span className="h-6 w-6 rounded-lg bg-amber-300 text-amber-950 font-black flex items-center justify-center shrink-0 mt-0.5 shadow-xs text-xs">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed font-bold text-xs sm:text-sm">{pearl}</p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
