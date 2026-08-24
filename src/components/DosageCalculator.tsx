import React, { useState } from 'react';
import {
  Baby,
  Activity,
  Droplets,
  Calculator,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  FlaskConical,
  Gauge,
  Syringe,
  Pill
} from 'lucide-react';
import { Drug } from '../types';

interface DosageCalculatorProps {
  allDrugs: Drug[];
  initialDrug?: Drug | null;
}

export const DosageCalculator: React.FC<DosageCalculatorProps> = ({
  allDrugs,
  initialDrug
}) => {
  const [calculatorTab, setCalculatorTab] = useState<'pediatric' | 'renal' | 'infusion' | 'bsa'>('pediatric');

  // --- 1. Pediatric State ---
  const [pedWeight, setPedWeight] = useState<number>(14);
  const [pedDoseMgKgDay, setPedDoseMgKgDay] = useState<number>(80); // e.g. 80 mg/kg/day for otitis media
  const [pedFrequency, setPedFrequency] = useState<number>(2); // BID = 2, TID = 3
  const [pedConcentrationMg, setPedConcentrationMg] = useState<number>(400); // 400 mg
  const [pedConcentrationMl, setPedConcentrationMl] = useState<number>(5); // per 5 mL
  const [pedDrugPreset, setPedDrugPreset] = useState<string>('amox_otitis');

  // Pediatric presets
  const handlePedPresetChange = (val: string) => {
    setPedDrugPreset(val);
    if (val === 'amox_otitis') {
      setPedDoseMgKgDay(80);
      setPedFrequency(2);
      setPedConcentrationMg(400);
      setPedConcentrationMl(5);
    } else if (val === 'paracetamol') {
      setPedDoseMgKgDay(60); // 15 mg/kg QID = 60 mg/kg/day
      setPedFrequency(4);
      setPedConcentrationMg(120);
      setPedConcentrationMl(5);
    } else if (val === 'ibuprofen') {
      setPedDoseMgKgDay(30); // 10 mg/kg TID = 30 mg/kg/day
      setPedFrequency(3);
      setPedConcentrationMg(100);
      setPedConcentrationMl(5);
    } else if (val === 'augmentin_es') {
      setPedDoseMgKgDay(90);
      setPedFrequency(2);
      setPedConcentrationMg(600);
      setPedConcentrationMl(5);
    } else if (val === 'azithromycin') {
      setPedDoseMgKgDay(10);
      setPedFrequency(1);
      setPedConcentrationMg(200);
      setPedConcentrationMl(5);
    }
  };

  // Pediatric calculations
  const totalDailyMg = pedWeight * pedDoseMgKgDay;
  const singleDoseMg = pedFrequency > 0 ? totalDailyMg / pedFrequency : 0;
  const mgPerMl = pedConcentrationMl > 0 ? pedConcentrationMg / pedConcentrationMl : 1;
  const singleDoseMl = mgPerMl > 0 ? singleDoseMg / mgPerMl : 0;
  const totalDailyMl = singleDoseMl * pedFrequency;

  // --- 2. Renal State (Cockcroft-Gault) ---
  const [age, setAge] = useState<number>(65);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [weightKg, setWeightKg] = useState<number>(72);
  const [serumCr, setSerumCr] = useState<number>(1.4); // mg/dL

  // Cockcroft-Gault CrCl formula: ((140 - age) * weight) / (72 * Cr) [* 0.85 if female]
  const calculatedCrCl = Math.round(
    serumCr > 0
      ? (((140 - age) * weightKg) / (72 * serumCr)) * (gender === 'female' ? 0.85 : 1.0)
      : 0
  );

  const getCKDStage = (crcl: number) => {
    if (crcl >= 90) return { stage: 'المرحلة 1 (وظائف كلوية طبيعية / ممتازة)', color: 'text-emerald-400', badge: 'bg-emerald-500/15 border-emerald-500/30' };
    if (crcl >= 60) return { stage: 'المرحلة 2 (انخفاض طفيف في التصفية الكلوية)', color: 'text-cyan-400', badge: 'bg-cyan-500/15 border-cyan-500/30' };
    if (crcl >= 30) return { stage: 'المرحلة 3 (قصور كلوي متوسط - يتطلب تعديل الأدوية)', color: 'text-amber-400', badge: 'bg-amber-500/15 border-amber-500/30' };
    if (crcl >= 15) return { stage: 'المرحلة 4 (قصور كلوي شديد - تعديلات حرجة)', color: 'text-rose-400', badge: 'bg-rose-500/15 border-rose-500/30' };
    return { stage: 'المرحلة 5 (فشل كلوي نهائي / غسيل كلوي)', color: 'text-purple-400', badge: 'bg-purple-500/15 border-purple-500/30' };
  };

  const ckdInfo = getCKDStage(calculatedCrCl);

  // --- 3. IV Infusion & Drip Rate State ---
  const [ivVolume, setIvVolume] = useState<number>(500); // mL
  const [ivDurationHours, setIvDurationHours] = useState<number>(4); // hours
  const [dripFactor, setDripFactor] = useState<number>(20); // 20 drops/mL standard macro, 60 micro
  
  // ICU Micro-infusion (mcg/kg/min)
  const [icuWeight, setIcuWeight] = useState<number>(70);
  const [icuDoseMcgKgMin, setIcuDoseMcgKgMin] = useState<number>(0.5); // Precedex or vasopressor
  const [icuDrugMgInBag, setIcuDrugMgInBag] = useState<number>(200); // 200 mcg / 2 mL or mg
  const [icuBagVolumeMl, setIcuBagVolumeMl] = useState<number>(50); // 50 mL

  const ivMlPerHour = ivDurationHours > 0 ? Math.round(ivVolume / ivDurationHours) : 0;
  const ivDropsPerMin = ivDurationHours > 0 ? Math.round((ivVolume * dripFactor) / (ivDurationHours * 60)) : 0;

  // ICU rate in mL/hr:
  // total mcg needed per hour = icuDoseMcgKgMin * icuWeight * 60
  // bag concentration = (icuDrugMgInBag * 1000) / icuBagVolumeMl  (in mcg/mL)
  const icuConcentrationMcgMl = icuBagVolumeMl > 0 ? (icuDrugMgInBag * 1000) / icuBagVolumeMl : 1;
  const icuMlPerHour = icuConcentrationMcgMl > 0 ? Number(((icuDoseMcgKgMin * icuWeight * 60) / icuConcentrationMcgMl).toFixed(1)) : 0;

  // --- 4. BSA State (Mosteller) ---
  const [bsaHeightCm, setBsaHeightCm] = useState<number>(170);
  const [bsaWeightKg, setBsaWeightKg] = useState<number>(70);
  // Mosteller formula: sqrt((height * weight) / 3600)
  const calculatedBSA = Number(Math.sqrt((bsaHeightCm * bsaWeightKg) / 3600).toFixed(2));

  return (
    <div className="space-y-4">
      
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs sm:text-sm mb-1">
              <Calculator className="h-4 w-4" />
              <span>أدوات وحاسبات الجرعات الإكلينيكية السريرية (Clinical Calculators)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              حاسبات دقيقة للأطفال، وظائف الكلى، ومحاليل التمريض
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              معايرة الجرعات وفق أحدث الإرشادات السريرية ومعايير السلامة الدوائية العالمية.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-2">
          <button
            onClick={() => setCalculatorTab('pediatric')}
            className={`p-2.5 rounded-lg text-xs font-semibold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
              calculatorTab === 'pediatric'
                ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-2xs font-bold'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Baby className="h-4 w-4 text-blue-600" />
            <span>جرعات الأطفال والشراب</span>
          </button>

          <button
            onClick={() => setCalculatorTab('renal')}
            className={`p-2.5 rounded-lg text-xs font-semibold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
              calculatorTab === 'renal'
                ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-2xs font-bold'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Activity className="h-4 w-4 text-blue-600" />
            <span>تصفية الكلى والتعديل (CrCl)</span>
          </button>

          <button
            onClick={() => setCalculatorTab('infusion')}
            className={`p-2.5 rounded-lg text-xs font-semibold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
              calculatorTab === 'infusion'
                ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-2xs font-bold'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Droplets className="h-4 w-4 text-blue-600" />
            <span>المحاليل والتنقيط للتمريض</span>
          </button>

          <button
            onClick={() => setCalculatorTab('bsa')}
            className={`p-2.5 rounded-lg text-xs font-semibold border flex items-center justify-center gap-2 transition-all cursor-pointer ${
              calculatorTab === 'bsa'
                ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-2xs font-bold'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            <Gauge className="h-4 w-4 text-blue-600" />
            <span>مساحة الجسم (BSA)</span>
          </button>
        </div>
      </div>

      {/* 1. Pediatric Calculator Tab */}
      {calculatorTab === 'pediatric' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs">
            
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                اختر دواء جاهز أو أدخل المعايير يدوياً:
              </label>
              <select
                value={pedDrugPreset}
                onChange={e => handlePedPresetChange(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600 font-medium"
              >
                <option value="amox_otitis">أموكسيسيلين / التهاب الأذن (80-90 mg/kg/day - مرتين يومياً)</option>
                <option value="augmentin_es">أوجمنتين ES-600 (90 mg/kg/day - مرتين يومياً)</option>
                <option value="paracetamol">باراسيتامول شراب مسكن وخافض حرارة (15 mg/kg كل 6 ساعات)</option>
                <option value="ibuprofen">بروفين شراب خافض حرارة ومضاد التهاب (10 mg/kg كل 8 ساعات)</option>
                <option value="azithromycin">أزيثرومايسين شراب (10 mg/kg/day - مرة واحدة يومياً)</option>
                <option value="custom">إدخال مخصص يدوي بالكامل</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  وزن الطفل (كجم):
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="80"
                    step="0.5"
                    value={pedWeight}
                    onChange={e => setPedWeight(parseFloat(e.target.value) || 0)}
                    className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:outline-none font-bold"
                  />
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-medium">كجم</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الجرعة المطلوبة (مجم/كجم/اليوم):
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="200"
                    value={pedDoseMgKgDay}
                    onChange={e => setPedDoseMgKgDay(parseFloat(e.target.value) || 0)}
                    className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:outline-none font-bold"
                  />
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-medium">mg/kg/day</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  تقسيم الجرعة (كم مرة باليوم):
                </label>
                <select
                  value={pedFrequency}
                  onChange={e => setPedFrequency(parseInt(e.target.value))}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm focus:border-blue-600 focus:outline-none font-medium"
                >
                  <option value="1">مرة واحدة يومياً (كل 24 ساعة)</option>
                  <option value="2">مرتان يومياً (كل 12 ساعة - BID)</option>
                  <option value="3">3 مرات يومياً (كل 8 ساعات - TID)</option>
                  <option value="4">4 مرات يومياً (كل 6 ساعات - QID)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  تركيز الشراب المتوفر بالصيدلية:
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={pedConcentrationMg}
                    onChange={e => setPedConcentrationMg(parseFloat(e.target.value) || 0)}
                    className="w-24 p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-xs focus:border-blue-600 focus:outline-none font-bold"
                  />
                  <span className="text-xs text-slate-500 font-medium">مجم في</span>
                  <input
                    type="number"
                    value={pedConcentrationMl}
                    onChange={e => setPedConcentrationMl(parseFloat(e.target.value) || 0)}
                    className="w-16 p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-xs focus:border-blue-600 focus:outline-none font-bold"
                  />
                  <span className="text-xs text-slate-500 font-medium">مل</span>
                </div>
              </div>
            </div>

          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl border border-slate-800 p-5 sm:p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Syringe className="h-4 w-4" />
                  نتيجة حساب الجرعة السريرية
                </span>
                <span className="text-xs text-slate-400 font-mono">وزن: {pedWeight} كجم</span>
              </div>

              {/* Highlight Result */}
              <div className="my-4 p-4 rounded-xl bg-blue-600/20 border border-blue-500/30 text-center">
                <span className="text-xs text-blue-300 font-semibold block mb-1">
                  الحجم المطلوب إعطاؤه في كل جرعة:
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-300 font-mono tracking-tight">
                  {singleDoseMl.toFixed(1)} <span className="text-xl">مل (mL)</span>
                </div>
                <span className="text-xs text-slate-300 font-medium block mt-1.5">
                  تعطى {pedFrequency === 2 ? 'مرتين يومياً (كل 12 ساعة)' : pedFrequency === 3 ? '3 مرات يومياً (كل 8 ساعات)' : pedFrequency === 4 ? '4 مرات يومياً (كل 6 ساعات)' : 'مرة واحدة يومياً'}
                </span>
              </div>

              {/* Detailed Breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between p-2 rounded bg-slate-800 text-slate-300">
                  <span>الجرعة المليجرامية للمرة الواحدة:</span>
                  <span className="font-bold text-white font-mono">{singleDoseMg.toFixed(1)} مجم (mg)</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-800 text-slate-300">
                  <span>إجمالي الجرعة اليومية:</span>
                  <span className="font-bold text-white font-mono">{totalDailyMg.toFixed(0)} مجم / يوم</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-800 text-slate-300">
                  <span>إجمالي الحجم اليومي:</span>
                  <span className="font-bold text-blue-400 font-mono">{totalDailyMl.toFixed(1)} مل / يوم</span>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-200 text-xs font-medium">
              ⚠️ نصيحة صيدلانية: يجب دائماً تزويد ولي الأمر بسرنجة مدرجة أو مكيال دقيق بدلاً من ملاعق الطعام.
            </div>
          </div>
        </div>
      )}

      {/* 2. Renal Clearance (Cockcroft-Gault) Tab */}
      {calculatorTab === 'renal' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <FlaskConical className="h-4 w-4 text-blue-600" />
              معطيات المريض لحساب Cockcroft-Gault CrCl:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">العمر (سنوات):</label>
                <input
                  type="number"
                  min="18"
                  max="110"
                  value={age}
                  onChange={e => setAge(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الجنس:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      gender === 'male' ? 'bg-blue-50 border-blue-300 text-blue-700 font-bold' : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    ذكر (Male)
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-2 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                      gender === 'female' ? 'bg-blue-50 border-blue-300 text-blue-700 font-bold' : 'bg-slate-50 border-slate-200 text-slate-600'
                    }`}
                  >
                    أنثى (Female)
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الوزن الفعلي (كجم):</label>
                <input
                  type="number"
                  min="30"
                  max="250"
                  value={weightKg}
                  onChange={e => setWeightKg(parseFloat(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">كرياتينين المصل (Serum Creatinine):</label>
                <div className="relative">
                  <input
                    type="number"
                    min="0.2"
                    max="15"
                    step="0.1"
                    value={serumCr}
                    onChange={e => setSerumCr(parseFloat(e.target.value) || 0)}
                    className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:outline-none font-bold"
                  />
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-medium">mg/dL</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-800">المعادلة المعتمدة:</span>
              <p className="font-mono text-[11px] text-blue-700">
                CrCl = [((140 - Age) × Weight_kg) / (72 × SCr)] × (0.85 if Female)
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl border border-slate-800 p-5 sm:p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Activity className="h-4 w-4" />
                  قيمة تصفية الكرياتينين المقدرة
                </span>
              </div>

              <div className="my-4 p-4 rounded-xl bg-blue-600/20 border border-blue-500/30 text-center">
                <span className="text-xs text-blue-300 font-semibold block mb-1">
                  CrCl (تصفية الكرياتينين):
                </span>
                <div className="text-4xl font-extrabold text-blue-300 font-mono">
                  {calculatedCrCl} <span className="text-xl">mL/min</span>
                </div>
                <div className="mt-2.5 inline-block px-3 py-1 rounded-full text-xs font-bold bg-slate-800 border border-slate-700 text-blue-200">
                  {ckdInfo.stage}
                </div>
              </div>

              {/* Sample Drug Dosing Suggestions for this CrCl */}
              <div className="space-y-2 text-xs">
                <span className="font-bold text-slate-300 block mb-1">توصيات الجرعات لهذا المريض:</span>
                
                <div className="p-2.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  <span className="font-bold text-white block">ميروبينيم (Meropenem):</span>
                  {calculatedCrCl > 50 && '1 جرام كل 8 ساعات (جرعة قياسية كاملة).'}
                  {calculatedCrCl <= 50 && calculatedCrCl > 25 && '1 جرام كل 12 ساعة.'}
                  {calculatedCrCl <= 25 && calculatedCrCl >= 10 && '500 مجم كل 12 ساعة.'}
                  {calculatedCrCl < 10 && '500 مجم كل 24 ساعة.'}
                </div>

                <div className="p-2.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
                  <span className="font-bold text-white block">باكسلوفيد (Paxlovid):</span>
                  {calculatedCrCl >= 60 && 'الجرعة الكاملة: قرصان نيرماتريلفير + قرص ريتونافير مرتين يومياً.'}
                  {calculatedCrCl < 60 && calculatedCrCl >= 30 && 'تخفيض الجرعة (العبوة الكلوية): قرص واحد نيرماتريلفير (150 مجم) + قرص ريتونافير مرتين يومياً.'}
                  {calculatedCrCl < 30 && 'مضاد استطباب وممنوع الاستخدام (غير موصى به).'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. IV Infusion & Drip Rate Calculator Tab */}
      {calculatorTab === 'infusion' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-600" />
              حساب معدل تسريب المحاليل الوريدية (IV Drip Rate):
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">حجم المحلول الكلي (مل):</label>
                <input
                  type="number"
                  min="50"
                  max="3000"
                  step="50"
                  value={ivVolume}
                  onChange={e => setIvVolume(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">مدة التسريب (بالساعات):</label>
                <input
                  type="number"
                  min="0.5"
                  max="48"
                  step="0.5"
                  value={ivDurationHours}
                  onChange={e => setIvDurationHours(parseFloat(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:outline-none font-bold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">معامل جهاز التنقيط (Drip Factor):</label>
              <select
                value={dripFactor}
                onChange={e => setDripFactor(parseInt(e.target.value))}
                className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm focus:border-blue-600 focus:outline-none font-medium"
              >
                <option value="20">20 نقطة/مل (جهاز تنقيط ماكرو قياسي للبالغين - Standard 20 gtt/mL)</option>
                <option value="15">15 نقطة/مل (جهاز ماكرو عريض - 15 gtt/mL)</option>
                <option value="10">10 نقطة/مل (جهاز نقل الدم - Blood set 10 gtt/mL)</option>
                <option value="60">60 نقطة/مل (جهاز ميكرو دقيق للأطفال - Microdrip 60 gtt/mL)</option>
              </select>
            </div>

            {/* ICU Titration Section */}
            <div className="pt-3 border-t border-slate-100 space-y-2.5">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                تسريب أدوية العناية المركزة بالوزن (mcg/kg/min إلى mL/hr):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div>
                  <label className="text-[11px] text-slate-500 font-bold block mb-1">الجرعة (mcg/kg/min):</label>
                  <input
                    type="number"
                    step="0.1"
                    value={icuDoseMcgKgMin}
                    onChange={e => setIcuDoseMcgKgMin(parseFloat(e.target.value) || 0)}
                    className="w-full p-2 rounded bg-white border border-slate-300 text-slate-900 text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-500 font-bold block mb-1">وزن المريض (كجم):</label>
                  <input
                    type="number"
                    value={icuWeight}
                    onChange={e => setIcuWeight(parseFloat(e.target.value) || 0)}
                    className="w-full p-2 rounded bg-white border border-slate-300 text-slate-900 text-xs font-mono font-bold"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-500 font-bold block mb-1">تركيز الكيس (مجم):</label>
                  <input
                    type="number"
                    value={icuDrugMgInBag}
                    onChange={e => setIcuDrugMgInBag(parseFloat(e.target.value) || 0)}
                    className="w-full p-2 rounded bg-white border border-slate-300 text-slate-900 text-xs font-mono font-bold"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl border border-slate-800 p-5 sm:p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Droplets className="h-4 w-4" />
                  معدل التدفق والتنقيط الموصى به
                </span>
              </div>

              <div className="my-4 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-center">
                  <span className="text-xs text-blue-300 font-semibold block mb-1">معدل المضخة:</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-300 font-mono">
                    {ivMlPerHour} <span className="text-xs">مل/ساعة</span>
                  </div>
                  <span className="text-[10px] text-slate-400">mL/hr</span>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-600/20 border border-blue-500/30 text-center">
                  <span className="text-xs text-blue-300 font-semibold block mb-1">معدل التنقيط:</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-300 font-mono">
                    {ivDropsPerMin} <span className="text-xs">نقطة/دقيقة</span>
                  </div>
                  <span className="text-[10px] text-slate-400">gtt/min</span>
                </div>
              </div>

              {/* ICU infusion rate */}
              <div className="p-3 rounded-lg bg-slate-800 border border-slate-700 text-xs">
                <span className="text-xs font-bold text-slate-200 block mb-1">
                  معدل مضخة الحقن السريري (ICU Infusion Rate):
                </span>
                <div className="text-lg font-bold text-emerald-400 font-mono">
                  {icuMlPerHour} mL/hr
                </div>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  لإعطاء {icuDoseMcgKgMin} mcg/kg/min لمريض وزنه {icuWeight} كجم.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. BSA Tab */}
      {calculatorTab === 'bsa' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <Gauge className="h-4 w-4 text-blue-600" />
              حساب مساحة سطح الجسم (Mosteller Body Surface Area):
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الطول (سم):</label>
                <input
                  type="number"
                  min="40"
                  max="230"
                  value={bsaHeightCm}
                  onChange={e => setBsaHeightCm(parseInt(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">الوزن (كجم):</label>
                <input
                  type="number"
                  min="2"
                  max="250"
                  value={bsaWeightKg}
                  onChange={e => setBsaWeightKg(parseFloat(e.target.value) || 0)}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 font-mono text-sm focus:border-blue-600 focus:outline-none font-bold"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 text-white rounded-xl border border-slate-800 p-5 sm:p-6 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-blue-400 flex items-center gap-1.5 uppercase tracking-wider">
                  <Gauge className="h-4 w-4" />
                  مساحة سطح الجسم المحسوبة
                </span>
              </div>

              <div className="my-4 p-4 rounded-xl bg-blue-600/20 border border-blue-500/30 text-center">
                <span className="text-xs text-blue-300 font-semibold block mb-1">Mosteller BSA:</span>
                <div className="text-4xl font-extrabold text-blue-300 font-mono">
                  {calculatedBSA} <span className="text-xl">م² (m²)</span>
                </div>
                <span className="text-xs text-slate-300 mt-2 block font-medium">
                  تستخدم لحساب جرعات العلاج الكيماوي والأدوية الحيوية بالأورام.
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
