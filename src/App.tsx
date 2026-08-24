import React, { useState, useEffect } from 'react';
import {
  Building2,
  Globe,
  Phone,
  MessageCircle,
  ExternalLink,
  Headphones,
  Smartphone
} from 'lucide-react';
import { Header } from './components/Header';
import { DailyDrugHero } from './components/DailyDrugHero';
import { InteractionChecker } from './components/InteractionChecker';
import { DosageCalculator } from './components/DosageCalculator';
import { SpecialtyAlertsFeed } from './components/SpecialtyAlertsFeed';
import { DrugDirectory } from './components/DrugDirectory';
import { EmailUpdatesView } from './components/EmailUpdatesView';
import { DailyCaseQuiz } from './components/DailyCaseQuiz';
import { SubscriptionModal } from './components/SubscriptionModal';
import { DrugDetailModal } from './components/DrugDetailModal';
import { MobileNavigation } from './components/MobileNavigation';
import { ApkDownloadModal } from './components/ApkDownloadModal';

import { INITIAL_DRUGS, INITIAL_INTERACTIONS } from './data/drugsData';
import { INITIAL_ALERTS } from './data/alertsData';
import { INITIAL_CASES } from './data/clinicalCasesData';
import {
  loadUserState,
  saveUserState,
  SPECIALTY_LABELS,
  calculateTrialDaysRemaining
} from './utils/storage';
import { Drug, UserSubscription, MedicalSpecialty } from './types';
import { Language, translations } from './utils/i18n';
import officialLogo from './assets/images/official_logo_1787610933915.jpg';

export default function App() {
  const [userState, setUserState] = useState<UserSubscription>(loadUserState);
  const [activeTab, setActiveTab] = useState<string>('daily');
  const [lang, setLang] = useState<Language>('ar');
  
  const [allDrugs] = useState<Drug[]>(INITIAL_DRUGS);
  const [allInteractions] = useState(INITIAL_INTERACTIONS);
  const [allAlerts] = useState(INITIAL_ALERTS);
  const [allCases] = useState(INITIAL_CASES);

  // Modals & Cross-linking states
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  const [selectedDrugForModal, setSelectedDrugForModal] = useState<Drug | null>(null);
  const [interactionInitialDrugs, setInteractionInitialDrugs] = useState<string[]>(['semaglutide', 'empagliflozin']);
  const [calculatorInitialDrug, setCalculatorInitialDrug] = useState<Drug | null>(null);

  const t = translations[lang];

  // Sync state to local storage
  useEffect(() => {
    saveUserState(userState);
  }, [userState]);

  // Adjust document direction when language toggles
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Featured drug of the day
  const featuredDrug = allDrugs.find(d => d.isFeaturedToday) || allDrugs[0];

  // Specialty handler
  const handleUpdateSpecialty = (specialty: MedicalSpecialty) => {
    setUserState(prev => ({
      ...prev,
      selectedSpecialty: specialty
    }));
  };

  // Bookmark toggle handler
  const handleToggleBookmark = (drugId: string) => {
    setUserState(prev => {
      const isSaved = prev.savedDrugs.includes(drugId);
      const newSaved = isSaved
        ? prev.savedDrugs.filter(id => id !== drugId)
        : [...prev.savedDrugs, drugId];
      return {
        ...prev,
        savedDrugs: newSaved
      };
    });
  };

  // Cross-link: Open Interaction checker with specific drug
  const handleCheckInteractionsWith = (drug: Drug) => {
    setInteractionInitialDrugs([drug.id]);
    setActiveTab('interactions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cross-link: Open Calculator for drug
  const handleOpenCalculatorsFor = (drug: Drug) => {
    setCalculatorInitialDrug(drug);
    setActiveTab('dosage');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Subscription upgrade
  const handleActivateSubscription = () => {
    setUserState(prev => ({
      ...prev,
      status: 'active'
    }));
  };

  // Subscription update
  const handleUpdateSubscription = (updated: Partial<UserSubscription>) => {
    setUserState(prev => ({
      ...prev,
      ...updated
    }));
  };

  const toggleLanguage = () => {
    setLang(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  const trialDays = calculateTrialDaysRemaining(userState.trialEndsDate);
  const unreadAlertCount = allAlerts.filter(a => a.priority === 'urgent').length;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      
      {/* 1. Header with Official Logo, Language Switcher, APK Button, and Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userState={userState}
        onUpdateSpecialty={handleUpdateSpecialty}
        onOpenSubscriptionModal={() => setIsSubscriptionModalOpen(true)}
        onOpenPreferencesModal={() => setActiveTab('subscription')}
        unreadAlertCount={unreadAlertCount}
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenApkModal={() => setIsApkModalOpen(true)}
      />

      {/* 2. Top Global High-Density Announcement Bar */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-2 text-xs shadow-xs">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-700 font-medium">
            <span className="inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            <span className="text-slate-500 uppercase text-[10px] font-bold tracking-wider">{t.specialtyLabel}</span>
            <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/80">
              {SPECIALTY_LABELS[userState.selectedSpecialty]?.[lang]}
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-slate-600 text-xs">
            <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              {t.firstMonthFree}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-[11px] text-slate-500 font-medium">{t.dollarPerMonth}</span>
            
            <button
              onClick={() => setIsApkModalOpen(true)}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 hover:text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 cursor-pointer"
            >
              <Smartphone className="h-3 w-3 text-blue-600" />
              <span>{lang === 'ar' ? 'تشغيل كتطبيق جوال (APK)' : 'Install as Standalone App'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Content Container */}
      <main className="flex-1 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-12 space-y-6">
        
        {/* Tab 1: Daily Drug Spotlight (دواء اليوم) */}
        {activeTab === 'daily' && (
          <DailyDrugHero
            drug={featuredDrug}
            userState={userState}
            onToggleBookmark={handleToggleBookmark}
            onCheckInteractionsWith={handleCheckInteractionsWith}
            onOpenCalculatorsFor={handleOpenCalculatorsFor}
            lang={lang}
          />
        )}

        {/* Tab 2: Interaction Checker (فاحص التفاعلات) */}
        {activeTab === 'interactions' && (
          <InteractionChecker
            allDrugs={allDrugs}
            allInteractions={allInteractions}
            initialSelectedDrugs={interactionInitialDrugs}
          />
        )}

        {/* Tab 3: Clinical Calculators (حاسبة الجرعات) */}
        {activeTab === 'dosage' && (
          <DosageCalculator
            allDrugs={allDrugs}
            initialDrug={calculatorInitialDrug}
          />
        )}

        {/* Tab 4: Specialty Alerts (التنبيهات السريرية) */}
        {activeTab === 'alerts' && (
          <SpecialtyAlertsFeed
            alerts={allAlerts}
            currentSpecialty={userState.selectedSpecialty}
            onSpecialtyChange={handleUpdateSpecialty}
          />
        )}

        {/* Tab 5: Drug Directory & Advanced Search (محرك البحث ودليل الأدوية الشامل) */}
        {activeTab === 'directory' && (
          <DrugDirectory
            drugs={allDrugs}
            interactions={allInteractions}
            userState={userState}
            onSelectDrug={drug => setSelectedDrugForModal(drug)}
            onToggleBookmark={handleToggleBookmark}
            onCheckInteractionsWith={handleCheckInteractionsWith}
            onOpenCalculatorsFor={handleOpenCalculatorsFor}
          />
        )}

        {/* Tab 6: Daily Case Quiz (حالة اليوم السريرية) */}
        {activeTab === 'quiz' && (
          <DailyCaseQuiz cases={allCases} />
        )}

        {/* Tab 7: Subscription & Email Updates (النشرة البريدية $1) */}
        {activeTab === 'subscription' && (
          <EmailUpdatesView
            userState={userState}
            onUpdateSubscription={handleUpdateSubscription}
            onOpenPaymentModal={() => setIsSubscriptionModalOpen(true)}
          />
        )}

      </main>

      {/* 4. Footer with Company Ownership & Support Contact */}
      <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-600 shrink-0 mb-16 lg:mb-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-100 text-center lg:text-right">
            
            {/* App & Company Info with Official Logo */}
            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <div className="h-7 w-7 rounded-lg bg-white p-0.5 border border-slate-200 shadow-xs flex items-center justify-center">
                  <img
                    src={officialLogo}
                    alt="Pharma Oasis"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="font-extrabold text-slate-900 text-sm">
                  pharma Oasis
                </span>
                <span className="text-slate-300">|</span>
                <span className="font-bold text-blue-900 flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 text-xs">
                  <Building2 className="h-3.5 w-3.5 text-blue-600" />
                  {lang === 'ar' ? 'ملك شركة pharma Oasis Germans EG' : 'Property of pharma Oasis Germans EG'}
                </span>
              </div>
              <p className="text-slate-500 text-xs">
                {lang === 'ar'
                  ? 'المنصة الإكلينيكية اليومية المعتمدة للأطباء والصيادلة وفرق التمريض.'
                  : 'Certified daily clinical reference platform for physicians, pharmacists and nursing teams.'}
              </p>
            </div>

            {/* Official Website & Support Contacts */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              
              {/* Website link */}
              <a
                href="https://www.pharmaoasisgermans.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 font-semibold transition-colors"
              >
                <Globe className="h-3.5 w-3.5 text-blue-600" />
                <span className="font-mono text-[11px] sm:text-xs">www.pharmaoasisgermans.com</span>
                <ExternalLink className="h-3 w-3 text-slate-400" />
              </a>

              {/* Support Contact */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">
                <Headphones className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-slate-600 font-medium">{lang === 'ar' ? 'الدعم:' : 'Support:'}</span>
                <span className="font-bold text-slate-900">Dr. Alaa Elbadry</span>
                <span className="text-slate-300">|</span>
                <a
                  href="tel:00201552881999"
                  className="font-mono font-bold text-blue-700 hover:underline flex items-center gap-1"
                  dir="ltr"
                  title="اتصال هاتفي"
                >
                  <Phone className="h-3 w-3" />
                  00201552881999
                </a>
                <a
                  href="https://wa.me/201552881999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 transition-colors p-0.5"
                  title="تواصل عبر واتساب"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                </a>
              </div>

            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-400 text-[11px]">
            <div>
              &copy; 2026 pharma Oasis Germans EG. {t.rightsReserved}.
            </div>
            <div className="font-medium text-slate-500">
              {lang === 'ar' ? 'الدعم الفني والاستفسارات الطبية:' : 'Technical & Clinical Inquiries:'} Dr. Alaa Elbadry (00201552881999)
            </div>
          </div>

        </div>
      </footer>

      {/* 5. Mobile Bottom Navigation */}
      <MobileNavigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        unreadAlertCount={unreadAlertCount}
        lang={lang}
      />

      {/* 6. Subscription Modal */}
      <SubscriptionModal
        isOpen={isSubscriptionModalOpen}
        onClose={() => setIsSubscriptionModalOpen(false)}
        userState={userState}
        onActivateSubscription={handleActivateSubscription}
      />

      {/* 7. Drug Detail Monograph Modal */}
      <DrugDetailModal
        drug={selectedDrugForModal}
        isOpen={!!selectedDrugForModal}
        onClose={() => setSelectedDrugForModal(null)}
        userState={userState}
        onToggleBookmark={handleToggleBookmark}
        onCheckInteractions={handleCheckInteractionsWith}
        onOpenCalculators={handleOpenCalculatorsFor}
      />

      {/* 8. Standalone APK / PWA Mobile Modal */}
      <ApkDownloadModal
        isOpen={isApkModalOpen}
        onClose={() => setIsApkModalOpen(false)}
        lang={lang}
      />

    </div>
  );
}
