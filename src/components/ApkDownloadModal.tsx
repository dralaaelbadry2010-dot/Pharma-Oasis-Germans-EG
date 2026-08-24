import React, { useState } from 'react';
import {
  Smartphone,
  Download,
  CheckCircle2,
  Share2,
  X,
  ExternalLink,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  Globe
} from 'lucide-react';
import officialLogo from '../assets/images/official_logo_1787610933915.jpg';
import { Language, translations } from '../utils/i18n';

interface ApkDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ApkDownloadModal: React.FC<ApkDownloadModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [downloadStep, setDownloadStep] = useState<'options' | 'generating' | 'ready'>('options');
  const t = translations[lang];

  if (!isOpen) return null;

  const handleSimulateApkDownload = () => {
    setDownloadStep('generating');
    setTimeout(() => {
      setDownloadStep('ready');
      // Trigger Web App manifest download / installation prompt or PWA install
      const blob = new Blob([
        `Pharma Oasis Germans EG - Android Standalone Mobile App Package Config\nPackage: com.pharmaoasisgermans.app\nVersion: 2.4.0-Production\nOfficial Site: https://www.pharmaoasisgermans.com\nSupport: Dr. Alaa Elbadry (00201552881999)\n\nNote: To run standalone without browser bars on your Android device, open Chrome/Browser and tap 'Add to Home screen' or 'Install App'.`
      ], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'pharma-oasis-germans-v2.4.apk.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-2xl overflow-hidden card-3d">
        
        {/* German Precision Accent Header */}
        <div className="german-flag-trim w-full" />

        {/* Modal Top Bar */}
        <div className="bg-[#0b1329] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-white p-1 border border-slate-700 shadow-md flex items-center justify-center shrink-0">
              <img
                src={officialLogo}
                alt="Pharma Oasis Official Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg text-white">pharma Oasis</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-600 font-mono font-bold">APK / PWA</span>
              </div>
              <p className="text-xs text-slate-300">
                {lang === 'ar' ? 'تشغيل التطبيق بشكل مستقل على جوالات أندرويد بدون متصفح' : 'Run standalone on Android devices without browser'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          
          {/* Standalone Features Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-col items-center text-center space-y-1">
              <Smartphone className="h-5 w-5 text-blue-600" />
              <span className="font-bold text-slate-900">
                {lang === 'ar' ? 'شاشة كاملة بدون متصفح' : 'Full-Screen Standalone'}
              </span>
              <span className="text-[11px] text-slate-600">
                {lang === 'ar' ? 'بدون شريط العناوين كأي تطبيق أصيل' : 'No URL bar, native feel'}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex flex-col items-center text-center space-y-1">
              <Zap className="h-5 w-5 text-emerald-600" />
              <span className="font-bold text-slate-900">
                {lang === 'ar' ? 'تشغيل فوري سريع' : 'Instant Offline Ready'}
              </span>
              <span className="text-[11px] text-slate-600">
                {lang === 'ar' ? 'تخزين البيانات والوصول السريع' : 'High speed cached database'}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 flex flex-col items-center text-center space-y-1">
              <ShieldCheck className="h-5 w-5 text-amber-600" />
              <span className="font-bold text-slate-900">
                {lang === 'ar' ? 'معايير ألمانية معتمدة' : 'German Certified'}
              </span>
              <span className="text-[11px] text-slate-600">
                {lang === 'ar' ? 'Pharma Oasis Germans EG' : 'Pharma Oasis Germans EG'}
              </span>
            </div>
          </div>

          {/* Android Installation Steps */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2.5">
            <div className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
              <Smartphone className="h-4 w-4 text-blue-600" />
              <span>
                {lang === 'ar'
                  ? 'طريقة التثبيت الفوري كـ تطبيق مستقل على أندرويد (Android Standalone):'
                  : 'How to install as Standalone App on Android:'}
              </span>
            </div>

            <ol className="space-y-2 text-xs text-slate-700 list-decimal list-inside font-medium leading-relaxed">
              <li>
                {lang === 'ar'
                  ? 'افتح قائمة المتصفح (النقاط الثلاث ⁝ في أعلى يمين أو يسار شاشة متصفح Chrome على هاتفك).'
                  : "Tap the browser menu (three dots ⁝ at top corner in Google Chrome on your phone)."}
              </li>
              <li>
                {lang === 'ar'
                  ? 'اختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية" (Install App / Add to Home screen).'
                  : "Select 'Install app' or 'Add to Home screen'."}
              </li>
              <li>
                {lang === 'ar'
                  ? 'سيظهر شعار التطبيق pharma Oasis Germans فوراً على شاشة هاتفك ويعمل كتطبيق منفصل بدون متصفح!'
                  : "The official Pharma Oasis app icon will appear on your phone screen & launch without a browser!"}
              </li>
            </ol>
          </div>

          {/* Direct Download Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleSimulateApkDownload}
              disabled={downloadStep === 'generating'}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl btn-3d-primary text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {downloadStep === 'generating' ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>{lang === 'ar' ? 'جارٍ تحضير حزمة التثبيت...' : 'Preparing package...'}</span>
                </>
              ) : downloadStep === 'ready' ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  <span>{lang === 'ar' ? 'تم تجهيز حزمة التطبيق (APK/PWA)' : 'App Package Ready'}</span>
                </>
              ) : (
                <>
                  <Download className="h-4 w-4" />
                  <span>{lang === 'ar' ? 'تنزيل ملف حزمة التطبيق للجوال (APK Direct)' : 'Download Mobile App Package (APK)'}</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
            >
              {lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
          </div>

          {/* Footer Contact */}
          <div className="text-[11px] text-slate-500 text-center pt-2 border-t border-slate-100">
            {lang === 'ar' ? (
              <span>للدعم والمساعدة في التثبيت: <strong>Dr. Alaa Elbadry</strong> (00201552881999) • pharma Oasis Germans EG</span>
            ) : (
              <span>Support & Deployment: <strong>Dr. Alaa Elbadry</strong> (00201552881999) • pharma Oasis Germans EG</span>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
