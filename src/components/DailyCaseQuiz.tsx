import React, { useState } from 'react';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
  Stethoscope,
  Activity,
  Zap,
  Award,
  ArrowLeft,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ClinicalCase } from '../types';
import { SPECIALTY_LABELS } from '../utils/storage';

interface DailyCaseQuizProps {
  cases: ClinicalCase[];
}

export const DailyCaseQuiz: React.FC<DailyCaseQuizProps> = ({ cases }) => {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const activeCase = cases[currentCaseIndex] || cases[0];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);

    if (selectedOption === activeCase.correctOptionIndex) {
      setScore(score + 1);
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNextCase = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setCurrentCaseIndex((currentCaseIndex + 1) % cases.length);
  };

  return (
    <div className="space-y-4">
      
      {/* Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs sm:text-sm mb-1">
              <Award className="h-4 w-4" />
              <span>تحدي الحالة السريرية اليومية (Daily Clinical Case Challenge)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              اختبر معلوماتك الدوائية وقراراتك السريرية
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              سيناريوهات حقيقية من واقع الممارسة اليومية في الصيدلية، المستشفى، والعناية المركزة.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700 font-mono">
            <span>الحالة {currentCaseIndex + 1} من {cases.length}</span>
            <span className="text-blue-700 font-bold">| الإجابات الصحيحة: {score}</span>
          </div>
        </div>
      </div>

      {/* Case Card */}
      <div className="card-3d rounded-2xl p-5 sm:p-7 shadow-sm space-y-4">
        
        {/* Case Title & Specialty */}
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
          <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
            {SPECIALTY_LABELS[activeCase.specialty]?.ar || 'سريري'}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {activeCase.title}
          </h3>
        </div>

        {/* Patient Profile Scenario Card */}
        <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2.5 text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-bold text-blue-800">
            <Stethoscope className="h-4 w-4 text-blue-600" />
            <span>بيانات وملف المريض:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <p><strong className="text-slate-900">العمر والجنس:</strong> {activeCase.patientProfile.age} سنة ({activeCase.patientProfile.gender === 'M' ? 'ذكر' : 'أنثى'})</p>
            <p><strong className="text-slate-900">العلامات الحيوية:</strong> {activeCase.patientProfile.vitals}</p>
            <p className="sm:col-span-2"><strong className="text-slate-900">الشكوى والتشخيص:</strong> {activeCase.patientProfile.chiefComplaint}</p>
            <p className="sm:col-span-2"><strong className="text-slate-900">الفحوصات المخبرية (Labs):</strong> {activeCase.patientProfile.relevantLabs}</p>
          </div>

          <div className="pt-2 border-t border-slate-200 text-xs">
            <span className="font-bold text-slate-700">الأدوية الحالية للمريض: </span>
            <span className="text-blue-900 font-semibold">{activeCase.patientProfile.currentMeds.join(' • ')}</span>
          </div>
        </div>

        {/* Clinical Question */}
        <div className="space-y-1.5">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">السؤال الإكلينيكي:</div>
          <p className="text-sm sm:text-base font-bold text-slate-900 leading-relaxed">
            {activeCase.question}
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-2">
          {activeCase.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === activeCase.correctOptionIndex;

            let btnStyle = 'bg-white hover:bg-slate-50 border-slate-200 text-slate-800';
            if (isSelected) {
              btnStyle = 'bg-blue-50 border-blue-400 text-blue-900 font-bold shadow-2xs';
            }
            if (isAnswerSubmitted) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
              } else if (isSelected && !isCorrect) {
                btnStyle = 'bg-red-50 border-red-300 text-red-900 line-through';
              } else {
                btnStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswerSubmitted}
                onClick={() => handleSelectOption(idx)}
                className={`w-full p-3 sm:p-3.5 rounded-lg border text-right text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
              >
                <span className="h-6 w-6 rounded bg-slate-100 border border-slate-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 text-slate-700">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="leading-relaxed flex-1 font-medium">{option}</span>

                {isAnswerSubmitted && isCorrect && (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrect && (
                  <XCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button: Submit or Next */}
        <div className="pt-2 flex justify-between items-center">
          {!isAnswerSubmitted ? (
            <button
              disabled={selectedOption === null}
              onClick={handleSubmitAnswer}
              className="py-2 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
            >
              تأكيد الإجابة
            </button>
          ) : (
            <button
              onClick={handleNextCase}
              className="py-2 px-5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>الحالة التالية</span>
              <ArrowLeft className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Rationale & Explanation (Shown after answer) */}
        {isAnswerSubmitted && (
          <div className="mt-4 p-4 sm:p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm">
            <div className="font-bold text-emerald-800 flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              التعليل العلمي والإرشادات السريرية (Clinical Rationale):
            </div>
            <p className="text-slate-700 leading-relaxed font-medium bg-white p-3 rounded-lg border border-slate-200">
              {activeCase.explanation}
            </p>

            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
              <Zap className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-950">نصيحة ذهبية: </strong>
                {activeCase.clinicalPearl}
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
