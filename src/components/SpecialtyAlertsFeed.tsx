import React, { useState, useMemo } from 'react';
import {
  Bell,
  AlertTriangle,
  Flame,
  ShieldAlert,
  FileText,
  Clock,
  ExternalLink,
  Filter,
  CheckCircle,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Volume2
} from 'lucide-react';
import { SpecialtyAlert, MedicalSpecialty } from '../types';
import { SPECIALTY_LABELS } from '../utils/storage';

interface SpecialtyAlertsFeedProps {
  alerts: SpecialtyAlert[];
  currentSpecialty: MedicalSpecialty;
  onSpecialtyChange: (specialty: MedicalSpecialty) => void;
}

export const SpecialtyAlertsFeed: React.FC<SpecialtyAlertsFeedProps> = ({
  alerts,
  currentSpecialty,
  onSpecialtyChange
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedAlertId, setExpandedAlertId] = useState<string | null>(alerts[0]?.id || null);
  const [priorityFilter, setPriorityFilter] = useState<'all' | 'urgent'>('all');

  const categories = [
    { id: 'all', label: 'كافة التنبيهات' },
    { id: 'black_box', label: 'تحذيرات الصندوق الأسود' },
    { id: 'recall', label: 'سحب وتشغيلات الأدوية' },
    { id: 'guideline', label: 'إرشادات وبروتوكولات' },
    { id: 'shortage', label: 'نقص الأدوية والبدائل' },
    { id: 'new_approval', label: 'موافقات دوائية حديثة' }
  ];

  const filteredAlerts = useMemo(() => {
    return alerts.filter(alert => {
      // Specialty filter
      const matchesSpecialty =
        currentSpecialty === 'all' ||
        alert.specialty === currentSpecialty ||
        alert.specialty === 'all';

      // Category filter
      const matchesCategory = selectedCategory === 'all' || alert.category === selectedCategory;

      // Priority filter
      const matchesPriority = priorityFilter === 'all' || alert.priority === 'urgent';

      return matchesSpecialty && matchesCategory && matchesPriority;
    });
  }, [alerts, currentSpecialty, selectedCategory, priorityFilter]);

  const toggleExpand = (id: string) => {
    setExpandedAlertId(expandedAlertId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      
      {/* Feed Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs sm:text-sm mb-1">
              <Bell className="h-4 w-4" />
              <span>نظام التنبيهات السريرية المخصص حسب التخصص (Clinical Alert Feed)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              تحديثات فورية حول سلامة وسحب الأدوية والبروتوكولات
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              تنبيهات معتمدة من هيئات الغذاء والدواء والجمعيات الطبية العالمية مفلترة حسب اهتمامك المهني.
            </p>
          </div>

          {/* Urgent filter toggle */}
          <button
            onClick={() => setPriorityFilter(priorityFilter === 'urgent' ? 'all' : 'urgent')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
              priorityFilter === 'urgent'
                ? 'bg-red-50 text-red-800 border-red-300 shadow-2xs'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
          >
            <Flame className={`h-4 w-4 ${priorityFilter === 'urgent' ? 'text-red-600' : 'text-slate-400'}`} />
            <span>{priorityFilter === 'urgent' ? 'عرض كافة التنبيهات' : 'التنبيهات العاجلة فقط'}</span>
          </button>
        </div>

        {/* Specialty Filter Pills */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <SlidersHorizontal className="h-3.5 w-3.5 text-blue-600" />
            <span>فلترة حسب تخصصك الطبي:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(SPECIALTY_LABELS) as MedicalSpecialty[]).map(specKey => {
              const isSelected = currentSpecialty === specKey;
              return (
                <button
                  key={specKey}
                  onClick={() => onSpecialtyChange(specKey)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 text-blue-700 border-blue-300 shadow-2xs font-bold'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {SPECIALTY_LABELS[specKey].ar}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {categories.map(cat => {
            const isCatActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors cursor-pointer ${
                  isCatActive
                    ? 'bg-slate-800 text-white font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Alerts Stream */}
      {filteredAlerts.length === 0 ? (
        <div className="p-8 rounded-xl bg-white border border-slate-200 text-center space-y-2 shadow-xs">
          <CheckCircle className="h-9 w-9 text-emerald-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            لا توجد تنبيهات جديدة في هذا التصنيف حالياً
          </h3>
          <p className="text-xs text-slate-500">
            أنت على اطلاع دائم بآخر المستجدات السريرية لهذا التخصص.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredAlerts.map(alert => {
            const isExpanded = expandedAlertId === alert.id;
            return (
              <div
                key={alert.id}
                className={`rounded-2xl transition-all overflow-hidden card-3d ${
                  alert.priority === 'urgent'
                    ? 'border-red-300 border-r-4 border-r-red-600 bg-red-50/20'
                    : 'border-slate-200'
                }`}
              >
                {/* Alert Item Header (Clickable) */}
                <div
                  onClick={() => toggleExpand(alert.id)}
                  className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-4 select-none"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        alert.priority === 'urgent'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-blue-50 text-blue-700'
                      }`}
                    >
                      {alert.priority === 'urgent' ? (
                        <ShieldAlert className="h-4 w-4" />
                      ) : (
                        <Bell className="h-4 w-4" />
                      )}
                    </div>

                    <div>
                      {/* Meta Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        {alert.priority === 'urgent' && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white uppercase tracking-wider">
                            عاجل جداً
                          </span>
                        )}
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200">
                          {SPECIALTY_LABELS[alert.specialty]?.ar || 'عام'}
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {alert.dateStr}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {alert.titleAr}
                      </h3>

                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                        {alert.summaryAr}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-slate-400 hover:text-slate-700 mt-1">
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-100 space-y-3 bg-slate-50/50">
                    
                    {/* Action Item Box */}
                    <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-200">
                      <span className="text-xs font-bold text-emerald-900 block mb-1">
                        الإجراء المطلوب من الممارس الصحي:
                      </span>
                      <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                        {alert.actionItemAr}
                      </p>
                    </div>

                    {/* Detailed text */}
                    <div className="text-xs text-slate-700 leading-relaxed space-y-1.5">
                      <span className="font-bold text-slate-900 block">التفاصيل والخلفية العلمية:</span>
                      <p className="bg-white p-3 rounded-lg border border-slate-200 text-slate-800">{alert.detailedTextAr}</p>
                    </div>

                    {/* Source & Reference */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px] text-slate-500">
                      <span>المصدر المعتمد: <strong className="text-slate-800">{alert.source}</strong></span>
                      <span className="font-mono text-slate-500">{alert.readTime}</span>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
