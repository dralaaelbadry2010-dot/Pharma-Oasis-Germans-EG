import React from 'react';
import {
  Pill,
  ArrowRightLeft,
  Calculator,
  Bell,
  Mail,
  BookOpen
} from 'lucide-react';
import { Language, translations } from '../utils/i18n';

interface MobileNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  unreadAlertCount: number;
  lang: Language;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  activeTab,
  setActiveTab,
  unreadAlertCount,
  lang
}) => {
  const t = translations[lang];

  const items = [
    { id: 'daily', label: lang === 'ar' ? 'دواء اليوم' : 'Daily Drug', icon: Pill },
    { id: 'directory', label: lang === 'ar' ? 'البحث والدليل' : 'Directory', icon: BookOpen },
    { id: 'interactions', label: lang === 'ar' ? 'التفاعلات' : 'Interactions', icon: ArrowRightLeft },
    { id: 'dosage', label: lang === 'ar' ? 'الجرعات' : 'Dosage', icon: Calculator },
    { id: 'alerts', label: lang === 'ar' ? 'التنبيهات' : 'Alerts', icon: Bell, badge: unreadAlertCount > 0 ? unreadAlertCount : undefined }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xs border-t border-slate-200 px-2 py-1.5 shadow-lg">
      <div className="flex items-center justify-around" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {items.map(item => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors cursor-pointer min-w-[56px] ${
                isActive
                  ? 'text-blue-700 font-bold'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <div className="relative">
                <Icon className={`h-5 w-5 ${isActive ? 'text-blue-700 stroke-[2.5]' : 'text-slate-400'}`} />
                {item.badge && (
                  <span className="absolute -top-1 -right-2 h-4 min-w-[16px] px-1 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-[9px]">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="mt-1 tracking-tight truncate max-w-[64px]">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
