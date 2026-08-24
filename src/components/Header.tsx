import React, { useState } from 'react';
import {
  SlidersHorizontal,
  MailCheck,
  Check,
  Crown,
  Building2,
  Globe,
  Smartphone,
  Languages
} from 'lucide-react';
import { MedicalSpecialty, UserSubscription } from '../types';
import { SPECIALTY_LABELS, calculateTrialDaysRemaining } from '../utils/storage';
import officialLogo from '../assets/images/official_logo_1787610933915.jpg';
import { Language, translations } from '../utils/i18n';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userState: UserSubscription;
  onUpdateSpecialty: (specialty: MedicalSpecialty) => void;
  onOpenSubscriptionModal: () => void;
  onOpenPreferencesModal: () => void;
  unreadAlertCount: number;
  lang: Language;
  onToggleLang: () => void;
  onOpenApkModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  userState,
  onUpdateSpecialty,
  onOpenSubscriptionModal,
  unreadAlertCount,
  lang,
  onToggleLang,
  onOpenApkModal
}) => {
  const [isSpecialtyMenuOpen, setIsSpecialtyMenuOpen] = useState(false);
  const trialDays = calculateTrialDaysRemaining(userState.trialEndsDate);
  const t = translations[lang];

  const navItems = [
    { id: 'daily', label: t.navDailyDrug },
    { id: 'interactions', label: t.navInteractions },
    { id: 'dosage', label: t.navDosageCalc },
    { id: 'alerts', label: t.navAlerts, badge: unreadAlertCount > 0 ? unreadAlertCount : undefined },
    { id: 'directory', label: t.navDirectory },
    { id: 'quiz', label: t.navDailyCase },
    { id: 'subscription', label: t.navNewsletter }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b1329] text-white shadow-xl border-b border-slate-800">
      {/* German Engineering Micro Precision Accent */}
      <div className="german-flag-trim w-full shadow-xs" />
      
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Brand Title with Official Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('daily')}
            className="flex items-center gap-2.5 text-right cursor-pointer group"
          >
            {/* Official Tree Logo Container */}
            <div className="relative h-11 w-11 rounded-xl overflow-hidden shadow-lg border border-slate-700/80 bg-white p-0.5 ring-2 ring-blue-500/20 group-hover:ring-blue-400/50 transition-all flex items-center justify-center shrink-0">
              <img
                src={officialLogo}
                alt="Pharma Oasis Official Logo"
                className="h-full w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="flex flex-col text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <div className="flex items-center gap-1.5">
                <span className="font-black tracking-tight text-lg sm:text-xl text-white group-hover:text-blue-400 transition-colors whitespace-nowrap drop-shadow-sm">
                  pharma Oasis
                </span>
                <span className="text-amber-400 font-extrabold text-[10px] uppercase px-1.5 py-0.2 bg-amber-400/10 border border-amber-400/30 rounded">
                  Germans EG
                </span>
              </div>
              <span className="text-slate-400 font-medium text-[11px] -mt-0.5">
                {t.appSubtitle}
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-slate-900/80 p-1 rounded-xl border border-slate-800 shadow-inner" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-3 py-1.5 text-xs font-bold rounded-lg whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-blue-600 to-blue-700 text-white shadow-md border border-blue-400/30 transform -translate-y-0.5'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="inline-flex items-center justify-center px-1.5 py-0.2 text-[10px] font-black rounded-full bg-rose-500 text-white shadow-xs">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Language Toggle, Standalone APK, Specialty Filter & Subscription) */}
        <div className="flex items-center gap-2">
          
          {/* Language Switcher Button (عربي / English) */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold rounded-lg border border-slate-700 bg-slate-800 text-amber-300 hover:border-amber-400 hover:bg-slate-700 transition-all whitespace-nowrap shadow-xs cursor-pointer"
            title={lang === 'ar' ? 'Switch interface to English' : 'التحويل للغة العربية'}
          >
            <Languages className="h-3.5 w-3.5 text-amber-400" />
            <span className="font-mono text-[11px]">{t.switchLang}</span>
          </button>

          {/* Standalone Android App (APK / PWA) Button */}
          <button
            onClick={onOpenApkModal}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold rounded-lg border border-blue-500/40 bg-blue-950/60 text-blue-300 hover:bg-blue-900/80 transition-all whitespace-nowrap shadow-xs cursor-pointer"
            title="تثبيت التطبيق على جوال أندرويد ليعمل بدون متصفح"
          >
            <Smartphone className="h-3.5 w-3.5 text-blue-400" />
            <span className="font-semibold text-[11px]">APK / App</span>
          </button>

          {/* Specialty Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSpecialtyMenuOpen(!isSpecialtyMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-700 bg-slate-850 text-slate-200 hover:border-blue-500 hover:bg-slate-800 transition-all whitespace-nowrap shadow-sm cursor-pointer"
              title="تغيير التخصص الطبي للتنبيهات"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-blue-400" />
              <span className="hidden xl:inline text-slate-400 text-[11px]">{t.specialtyLabel}</span>
              <span className="font-bold text-blue-300 max-w-[90px] truncate text-[11px]">
                {SPECIALTY_LABELS[userState.selectedSpecialty]?.[lang] || t.allSpecialties}
              </span>
            </button>

            {isSpecialtyMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-20"
                  onClick={() => setIsSpecialtyMenuOpen(false)}
                />
                <div className="absolute left-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-2xl z-30 text-slate-900 ring-1 ring-black/5 card-3d" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                  <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                    <span>{t.customizeContent}</span>
                    <Building2 className="h-3.5 w-3.5 text-slate-400" />
                  </div>
                  <div className="mt-1 space-y-0.5 max-h-72 overflow-y-auto">
                    {(Object.keys(SPECIALTY_LABELS) as MedicalSpecialty[]).map((specKey) => {
                      const isSelected = userState.selectedSpecialty === specKey;
                      return (
                        <button
                          key={specKey}
                          onClick={() => {
                            onUpdateSpecialty(specKey);
                            setIsSpecialtyMenuOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg text-right transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-blue-50 text-blue-700 font-bold'
                              : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <span>{SPECIALTY_LABELS[specKey][lang]}</span>
                          {isSelected && <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Subscription / 1st Month Free Trial 3D Action Button */}
          <button
            onClick={onOpenSubscriptionModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg btn-3d-amber text-slate-950 transition-all whitespace-nowrap cursor-pointer"
          >
            {userState.status === 'trial' ? (
              <>
                <Crown className="h-3.5 w-3.5 text-slate-950" />
                <span className="hidden xs:inline font-black">{t.trialBadge}:</span>
                <span>{trialDays} {t.daysRemaining}</span>
              </>
            ) : (
              <>
                <MailCheck className="h-3.5 w-3.5 text-slate-950" />
                <span>{t.subscribedBadge}</span>
              </>
            )}
          </button>

        </div>
      </div>
    </header>
  );
};
