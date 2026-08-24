import React, { useState } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  CheckCircle,
  Sparkles,
  Activity,
  Utensils,
  Baby,
  FileText,
  Copy,
  Check,
  Zap,
  ArrowRightLeft,
  ShieldAlert,
  Award
} from 'lucide-react';
import { Drug, UserSubscription } from '../types';
import heroArtwork3D from '../assets/images/pharma_oasis_hero_3d_1787610142041.jpg';
import officialLogo from '../assets/images/official_logo_1787610933915.jpg';
import { Language, translations } from '../utils/i18n';

interface DailyDrugHeroProps {
  drug: Drug;
  userState: UserSubscription;
  onToggleBookmark: (drugId: string) => void;
  onCheckInteractionsWith: (drug: Drug) => void;
  onOpenCalculatorsFor: (drug: Drug) => void;
  lang: Language;
}

export const DailyDrugHero: React.FC<DailyDrugHeroProps> = ({
  drug,
  userState,
  onToggleBookmark,
  onCheckInteractionsWith,
  onOpenCalculatorsFor,
  lang
}) => {
  const [activeTab, setActiveTab] = useState<'dosing' | 'side_effects' | 'renal' | 'safety' | 'pearls'>('dosing');
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  const isSaved = userState.savedDrugs.includes(drug.id);

  const handleCopySummary = () => {
    const summary = lang === 'ar'
      ? `【 pharma Oasis | دواء اليوم السريري المعتمد 】
• الاسم العلمي: ${drug.genericName} (${drug.genericNameAr})
• الأسماء التجارية: ${drug.brandNames.join(' - ')}
• التصنيف: ${drug.drugClassAr} (${drug.drugClass})
• الجرعات الأساسية:
${drug.indications.map(i => ` - ${i.indicationAr}: ${i.adultDoseAr}`).join('\n')}
• نصيحة سريرية: ${drug.pearls[0] || 'يرجى مراجعة إرشادات الاستخدام.'}
• ملك شركة: pharma Oasis Germans EG (www.pharmaoasisgermans.com)`
      : `【 pharma Oasis | Approved Drug of the Day 】
• Generic Name: ${drug.genericName} (${drug.genericNameAr})
• Brand Names: ${drug.brandNames.join(' - ')}
• Class: ${drug.drugClass} (${drug.drugClassAr})
• Primary Indications & Adult Dose:
${drug.indications.map(i => ` - ${i.indication}: ${i.adultDose}`).join('\n')}
• Key Clinical Pearl: ${drug.pearls[0] || 'Check full clinical monograph.'}
• Property of: pharma Oasis Germans EG (www.pharmaoasisgermans.com)`;

    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <div className="space-y-4" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* 3D Visual Hero Banner with German Pharma Oasis Branding */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-r from-[#0b1329] via-[#0f1d40] to-[#0b1329] text-white shadow-2xl">
        <div className="german-flag-trim w-full" />
        
        <div className="relative p-5 sm:p-7 z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left/Right Text Zone */}
          <div className="space-y-3 max-w-2xl text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-bold border border-blue-400/30 text-xs shadow-inner">
                <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-spin" style={{ animationDuration: '8s' }} />
                {t.drugOfTheDay}
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-amber-400 font-mono text-xs font-bold flex items-center gap-1 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                <Award className="h-3.5 w-3.5" />
                {t.germanPrecisionBadge}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white drop-shadow-md">
              {drug.genericName} <span className="text-blue-400 text-xl sm:text-2xl font-bold">({drug.genericNameAr})</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
              {lang === 'ar' ? drug.drugClassAr : drug.drugClass} • {lang === 'ar' ? 'آلية عمل مستهدفة بخصائص حركية دوائية دقيقة واستطبابات سريرية مبنية على الدليل الطبي.' : 'Targeted therapeutic mechanism with verified pharmacokinetic parameters and evidence-based indications.'}
            </p>

            {/* Quick Action Buttons in Hero */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5 text-xs">
              <button
                onClick={() => onToggleBookmark(drug.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSaved
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {isSaved ? <BookmarkCheck className="h-4 w-4 text-slate-950" /> : <Bookmark className="h-4 w-4 text-slate-300" />}
                <span>{isSaved ? t.savedBtn : t.saveBtn}</span>
              </button>

              <button
                onClick={handleCopySummary}
                className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4 text-slate-300" />}
                <span>{copied ? t.copiedBtn : t.copySummaryBtn}</span>
              </button>
            </div>

          </div>

          {/* Right/Left 3D Visual Rendering Card */}
          <div className="relative w-full sm:w-80 h-44 rounded-xl overflow-hidden border border-white/20 shadow-2xl group shrink-0">
            <img
              src={heroArtwork3D}
              alt="3D Pharmaceutical Capsule Render"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1329]/90 via-transparent to-transparent flex items-end p-3">
              <div className="flex items-center justify-between w-full text-[11px] text-white">
                <span className="font-bold font-mono text-blue-300">T½: {drug.halfLife}</span>
                <span className="px-2 py-0.5 rounded bg-blue-600/80 font-bold border border-blue-400/40 text-[10px]">
                  {drug.category}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Clinical Card with 3D Depth */}
      <div className="card-3d rounded-2xl p-5 sm:p-7 space-y-6">
        
        {/* Brand Names & Direct Interactive Checkers */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200">
          
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-medium">
              <span className="font-bold text-slate-800">{t.brandNames}</span>
              {drug.brandNames.map((brand, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-900 border border-slate-200 font-bold text-xs shadow-xs"
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="text-xs text-slate-500">
              {t.routeOfAdmin} <strong className="text-slate-800">{drug.route.join(' • ')}</strong>
            </div>
          </div>

          {/* Quick 3D Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onCheckInteractionsWith(drug)}
              className="btn-3d-primary text-white font-bold text-xs px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer shadow-md"
            >
              <ArrowRightLeft className="h-4 w-4" />
              <span>{t.checkInteractionsBtn}</span>
            </button>

            <button
              onClick={() => onOpenCalculatorsFor(drug)}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Activity className="h-4 w-4 text-blue-600" />
              <span>{t.calculateDoseBtn}</span>
            </button>
          </div>

        </div>

        {/* Black Box Warning If Present */}
        {(drug.blackBoxWarningAr || drug.blackBoxWarning) && (
          <div className="p-4 rounded-xl bg-red-50/90 border border-red-200 border-r-4 border-r-red-600 text-red-950 flex items-start gap-3 shadow-xs">
            <ShieldAlert className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="font-black text-xs sm:text-sm text-red-900 uppercase tracking-wider flex items-center gap-1.5">
                <span>{t.boxedWarningTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-red-950 font-semibold leading-relaxed">
                {lang === 'ar' ? (drug.blackBoxWarningAr || drug.blackBoxWarning) : (drug.blackBoxWarning || drug.blackBoxWarningAr)}
              </p>
              {lang === 'ar' && drug.blackBoxWarning && (
                <p className="text-[11px] text-red-800/80 font-mono">
                  {drug.blackBoxWarning}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Key Clinical Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {drug.keyHighlights.map((highlight, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-200 shadow-xs flex items-start gap-2.5"
            >
              <div className="h-6 w-6 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5 shadow-xs">
                ✓
              </div>
              <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                {highlight}
              </p>
            </div>
          ))}
        </div>

        {/* Navigation Tabs for In-depth Clinical Details */}
        <div className="border-b border-slate-200 pt-2">
          <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-px">
            <button
              onClick={() => setActiveTab('dosing')}
              className={`pb-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'dosing'
                  ? 'border-blue-600 text-blue-600 transform -translate-y-0.5'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <FileText className="h-4 w-4" />
              <span>{t.tabDosing}</span>
            </button>

            <button
              onClick={() => setActiveTab('side_effects')}
              className={`pb-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'side_effects'
                  ? 'border-rose-600 text-rose-600 transform -translate-y-0.5'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <ShieldAlert className="h-4 w-4 text-rose-500" />
              <span>{t.tabSideEffects}</span>
            </button>

            <button
              onClick={() => setActiveTab('renal')}
              className={`pb-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'renal'
                  ? 'border-blue-600 text-blue-600 transform -translate-y-0.5'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Activity className="h-4 w-4" />
              <span>{t.tabRenal}</span>
            </button>

            <button
              onClick={() => setActiveTab('safety')}
              className={`pb-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'safety'
                  ? 'border-blue-600 text-blue-600 transform -translate-y-0.5'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Utensils className="h-4 w-4" />
              <span>{t.tabSafety}</span>
            </button>

            <button
              onClick={() => setActiveTab('pearls')}
              className={`pb-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'pearls'
                  ? 'border-amber-500 text-amber-700 font-extrabold transform -translate-y-0.5'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Zap className="h-4 w-4 text-amber-500" />
              <span>{t.tabPearls}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Dosing & Indications */}
        {activeTab === 'dosing' && (
          <div className="space-y-3">
            <div className="text-xs text-slate-700 font-medium bg-blue-50/60 p-3 rounded-xl border border-blue-200">
              <strong className="text-blue-900 font-bold">{t.mechanismTitle}</strong> {lang === 'ar' ? drug.mechanismOfActionAr : drug.mechanismOfAction}
            </div>

            <div className="space-y-3">
              {drug.indications.map((ind, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-extrabold text-sm text-slate-900">
                      {lang === 'ar' ? ind.indicationAr : ind.indication} <span className="text-xs text-slate-500 font-medium">({ind.indication})</span>
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg bg-white text-blue-700 text-xs border border-blue-200 font-mono font-bold shadow-xs">
                      {t.routeOfAdmin} {ind.route}
                    </span>
                  </div>

                  <div className="mt-2 text-xs sm:text-sm text-slate-800 bg-white p-3 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-600">{t.adultDose} </span>
                    <span className="font-bold text-slate-950">{lang === 'ar' ? ind.adultDoseAr : ind.adultDose}</span>
                  </div>

                  {(ind.pediatricDoseAr || ind.pediatricDose) && (
                    <div className="text-xs sm:text-sm text-slate-800 bg-purple-50/60 p-3 rounded-xl border border-purple-200">
                      <span className="font-bold text-purple-900 flex items-center gap-1 mb-1">
                        <Baby className="h-3.5 w-3.5 text-purple-600" /> {t.pediatricDose}
                      </span>
                      {lang === 'ar' ? (ind.pediatricDoseAr || ind.pediatricDose) : (ind.pediatricDose || ind.pediatricDoseAr)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Side Effects & Warnings */}
        {activeTab === 'side_effects' && (
          <div className="space-y-4">
            {/* Boxed Warning / Serious Precautions */}
            {(drug.blackBoxWarningAr || drug.blackBoxWarning) && (
              <div className="p-4 rounded-xl bg-red-50/90 border border-red-200 border-r-4 border-r-red-600 text-red-950 flex items-start gap-3 shadow-xs">
                <ShieldAlert className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-red-900 block font-black text-xs uppercase tracking-wider">
                    {t.boxedWarningTitle}
                  </strong>
                  <p className="text-xs sm:text-sm text-red-950 font-bold leading-relaxed">
                    {lang === 'ar' ? (drug.blackBoxWarningAr || drug.blackBoxWarning) : (drug.blackBoxWarning || drug.blackBoxWarningAr)}
                  </p>
                </div>
              </div>
            )}

            {/* Warnings and Key Safety Points */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-2.5">
              <div className="font-bold text-amber-900 text-sm flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4 text-amber-600" />
                <span>{lang === 'ar' ? 'التحذيرات الإكلينيكية والاحتياطات الهامة:' : 'Clinical Warnings & Key Precautions:'}</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-800 font-medium">
                {drug.keyHighlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
                {drug.halfLife && (
                  <li className="flex items-start gap-2 text-slate-700">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{lang === 'ar' ? 'عمر النصف الحيوي للدواء:' : 'Elimination Half-Life:'} <strong>{drug.halfLife}</strong></span>
                  </li>
                )}
              </ul>
            </div>

            {/* Monitoring Parameters */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <Activity className="h-4 w-4 text-blue-600" />
                <span>{t.monitoringParameters}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {drug.monitoringParameters.map((param, pIdx) => (
                  <div key={pIdx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>{param}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Renal & Hepatic Adjustments */}
        {activeTab === 'renal' && (
          <div className="space-y-4">
            <div className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">
              {t.tabRenal} (CrCl / eGFR):
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 shadow-xs">
                <span className="text-xs font-black text-emerald-800">{t.crclAbove50}</span>
                <p className="mt-1.5 text-xs text-slate-800 leading-relaxed font-semibold">
                  {drug.renalAdjustment.crclAbove50}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200 shadow-xs">
                <span className="text-xs font-black text-amber-800">{t.crcl10to50}</span>
                <p className="mt-1.5 text-xs text-slate-800 leading-relaxed font-semibold">
                  {drug.renalAdjustment.crcl10to50}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-50/50 border border-red-200 shadow-xs">
                <span className="text-xs font-black text-red-800">{t.crclBelow10}</span>
                <p className="mt-1.5 text-xs text-slate-800 leading-relaxed font-semibold">
                  {drug.renalAdjustment.crclBelow10}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 shadow-xs">
                <span className="text-xs font-black text-indigo-800">{t.hemodialysis}</span>
                <p className="mt-1.5 text-xs text-slate-800 leading-relaxed font-semibold">
                  {drug.renalAdjustment.hemodialysis}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
              <span className="text-xs font-extrabold text-slate-900 block mb-1">{t.hepaticImpairment}</span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {drug.hepaticAdjustment}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Safety & Pregnancy */}
        {activeTab === 'safety' && (
          <div className="space-y-3.5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-600">{t.pregnancySafety}</span>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded font-black text-xs bg-red-100 text-red-900 border border-red-200">
                    {drug.pregnancyCategory}
                  </span>
                  <span className="text-xs text-slate-800 font-semibold">
                    {drug.pregnancyCategory === 'Contraindicated' ? (lang === 'ar' ? 'ممنوع تماماً أثناء الحمل' : 'Contraindicated in pregnancy') : (lang === 'ar' ? 'يستخدم بحذر شديد' : 'Use with extreme caution')}
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-600">{t.lactationSafety}</span>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded font-black text-xs bg-amber-100 text-amber-900 border border-amber-200">
                    {drug.lactationSafety}
                  </span>
                </div>
              </div>
            </div>

            {/* Contraindications */}
            <div className="p-4 rounded-xl bg-red-50/80 border border-red-200 shadow-xs">
              <div className="font-bold text-xs text-red-900 mb-2 flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4 text-red-600" />
                {t.contraindications}
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-800 font-medium">
                {drug.contraindications.map((contra, idx) => (
                  <li key={idx} className="leading-relaxed">{contra}</li>
                ))}
              </ul>
            </div>

            {/* Food Interactions */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="font-bold text-xs text-slate-900 mb-2 flex items-center gap-1.5">
                <Utensils className="h-4 w-4 text-blue-600" />
                {t.foodInstructions}
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {drug.foodInteractions.map((food, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-medium">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{food}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Tab 4: Clinical Pearls */}
        {activeTab === 'pearls' && (
          <div className="space-y-3.5">
            <div className="text-xs font-black text-amber-900 flex items-center gap-1.5 mb-1">
              <Zap className="h-4 w-4 text-amber-600" />
              {t.clinicalPearlsTitle}
            </div>

            {drug.pearls.map((pearl, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 shadow-xs flex items-start gap-3"
              >
                <span className="h-6 w-6 rounded-lg bg-amber-300 text-amber-950 flex items-center justify-center font-black text-xs shrink-0 mt-0.5 shadow-xs">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-bold">
                  {pearl}
                </p>
              </div>
            ))}

            {/* Monitoring parameters */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
              <span className="text-xs font-black text-slate-900 mb-2 block">
                {t.monitoringParameters}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {drug.monitoringParameters.map((param, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs font-medium">
                    <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{param}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
