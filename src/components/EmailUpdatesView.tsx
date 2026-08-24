import React, { useState } from 'react';
import {
  Mail,
  CheckCircle2,
  Crown,
  Sparkles,
  Send,
  Calendar,
  CreditCard,
  Check,
  ShieldCheck,
  Zap,
  Clock,
  Eye,
  Sliders,
  DollarSign,
  Gift
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserSubscription, MedicalSpecialty, MedicalRole } from '../types';
import { SPECIALTY_LABELS, calculateTrialDaysRemaining, ROLE_LABELS } from '../utils/storage';

interface EmailUpdatesViewProps {
  userState: UserSubscription;
  onUpdateSubscription: (updated: Partial<UserSubscription>) => void;
  onOpenPaymentModal: () => void;
}

export const EmailUpdatesView: React.FC<EmailUpdatesViewProps> = ({
  userState,
  onUpdateSubscription,
  onOpenPaymentModal
}) => {
  const [emailInput, setEmailInput] = useState(userState.email);
  const [fullNameInput, setFullNameInput] = useState(userState.fullName);
  const [frequency, setFrequency] = useState<'daily' | 'weekly'>(userState.frequency);
  const [specialty, setSpecialty] = useState<MedicalSpecialty>(userState.selectedSpecialty);
  const [role, setRole] = useState<MedicalRole>(userState.role);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [showEmailPreviewModal, setShowEmailPreviewModal] = useState(false);
  const [emailSentToast, setEmailSentToast] = useState(false);

  const trialDays = calculateTrialDaysRemaining(userState.trialEndsDate);

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateSubscription({
      email: emailInput,
      fullName: fullNameInput,
      frequency,
      selectedSpecialty: specialty,
      role
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleSendTestEmail = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    setEmailSentToast(true);
    setTimeout(() => setEmailSentToast(false), 4000);
  };

  return (
    <div className="space-y-4">
      
      {/* 1. Subscription Status & Pricing Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-xs relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
              <Gift className="h-3.5 w-3.5 text-blue-600" />
              <span>الشهر الأول مجاناً بالكامل (1st Month Free Trial)</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              النشرة الدوائية السريرية عبر البريد الإلكتروني
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
              احصل على ملخص يومي لدواء اليوم، تحديثات التفاعلات، وتنبيهات الأدوية المخصصة لتخصصك الطبي مباشرة إلى بريدك الإلكتروني.
            </p>
          </div>

          {/* Pricing Box */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 text-center shrink-0 min-w-[240px]">
            <span className="text-xs text-slate-500 font-bold block uppercase tracking-wider">قيمة الاشتراك بعد الشهر المجاني</span>
            <div className="text-3xl font-black text-slate-900 font-mono my-1 flex items-center justify-center gap-1">
              <span className="text-blue-700">1.00</span>
              <span className="text-xs font-semibold text-slate-500">دولار أمريكي / شهرياً</span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium block">
              (أقل من 3 سنتات يومياً لدعم قراراتك الطبية)
            </span>

            <div className="mt-3.5 pt-3 border-t border-slate-200">
              {userState.status === 'trial' ? (
                <div className="space-y-2">
                  <span className="text-xs text-amber-800 font-bold block">
                    ⏳ متبقٍ {trialDays} يوم في تجربتك المجانية
                  </span>
                  <button
                    onClick={onOpenPaymentModal}
                    className="w-full py-2 px-4 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-xs"
                  >
                    تفعيل أو تجديد الاشتراك ($1)
                  </button>
                </div>
              ) : (
                <div className="space-y-1 text-xs">
                  <span className="text-emerald-700 font-bold flex items-center justify-center gap-1">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> اشتراكك نشط
                  </span>
                  <span className="text-slate-500 text-[11px]">التجديد القادم: 1$ شهرياً</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Email Preferences & Settings Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        
        {/* Form Container */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-5 sm:p-6 space-y-4 shadow-xs">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sliders className="h-4 w-4 text-blue-600" />
              إعدادات وتخصيص النشرة البريدية:
            </h3>
            {savedSuccess && (
              <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                <Check className="h-4 w-4" /> تم الحفظ بنجاح
              </span>
            )}
          </div>

          <form onSubmit={handleSavePreferences} className="space-y-3.5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الاسم الكامل واللقب الطبي:
                </label>
                <input
                  type="text"
                  value={fullNameInput}
                  onChange={e => setFullNameInput(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none font-medium"
                  placeholder="د. علاء البدري"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  البريد الإلكتروني لاستلام التحديثات:
                </label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm focus:border-blue-600 focus:outline-none font-mono font-medium"
                  placeholder="doctor@hospital.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  الصفة والمهنة الطبية:
                </label>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value as MedicalRole)}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm focus:border-blue-600 focus:outline-none font-medium"
                >
                  {(Object.keys(ROLE_LABELS) as MedicalRole[]).map(r => (
                    <option key={r} value={r}>
                      {ROLE_LABELS[r].ar}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  التخصص الطبي الرئيسي للتنبيهات:
                </label>
                <select
                  value={specialty}
                  onChange={e => setSpecialty(e.target.value as MedicalSpecialty)}
                  className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm focus:border-blue-600 focus:outline-none font-medium"
                >
                  {(Object.keys(SPECIALTY_LABELS) as MedicalSpecialty[]).map(s => (
                    <option key={s} value={s}>
                      {SPECIALTY_LABELS[s].ar}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Frequency Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                تكرار إرسال النشرة البريدية:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFrequency('daily')}
                  className={`p-3 rounded-lg text-right border transition-all cursor-pointer ${
                    frequency === 'daily'
                      ? 'bg-blue-50 border-blue-300 text-blue-900 font-bold shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold text-xs">نشرة يومية صباحية (Daily Spotlight)</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    دواء اليوم + التنبيهات العاجلة فور صدورها
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setFrequency('weekly')}
                  className={`p-3 rounded-lg text-right border transition-all cursor-pointer ${
                    frequency === 'weekly'
                      ? 'bg-blue-50 border-blue-300 text-blue-900 font-bold shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold text-xs">ملخص أسبوعي مجمع (Weekly Digest)</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    حصاد 7 أدوية وأبرز التفاعلات السريرية
                  </div>
                </button>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="py-2 px-5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
              >
                حفظ التفضيلات
              </button>

              <button
                type="button"
                onClick={() => setShowEmailPreviewModal(true)}
                className="py-2 px-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="h-4 w-4 text-blue-600" />
                <span>معاينة نموذج النشرة البريدية</span>
              </button>
            </div>

          </form>
        </div>

        {/* Live Simulator & Feature Perks */}
        <div className="lg:col-span-5 space-y-3.5">
          
          {/* Email dispatch simulator box */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs">
              <Send className="h-4 w-4" />
              <span>تجربة إرسال نشرة بريدية فورية</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              انقر على الزر لإرسال عينة إلكترونية حية من نشرة دواء اليوم إلى عنوانك (<span className="font-mono text-blue-700 font-bold">{userState.email}</span>):
            </p>

            <button
              onClick={handleSendTestEmail}
              className="w-full py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
            >
              <Send className="h-4 w-4 text-blue-400" />
              <span>إرسال نشرة تجريبية الآن ✉️</span>
            </button>

            {emailSentToast && (
              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>تم إرسال نموذج النشرة السريرية إلى بريدك بنجاح!</span>
              </div>
            )}
          </div>

          {/* Value Perks List */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-2.5 shadow-xs">
            <span className="text-xs font-bold text-slate-800 block uppercase tracking-wider">
              ماذا تتضمن نشرتك البريدية المشتركة (1$/شهر)؟
            </span>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>ملخص دواء اليوم المركز (الجرعات، موانع الاستعمال، ونصائح الصرف السريري).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>تنبيهات فورية لسحب التشغيلات وتحذيرات الصندوق الأسود (FDA Boxed Warnings).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>جداول تفاعلات دوائية جديدة ومعتمدة من المجلات الطبية الرائدة.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <span>إمكانية إلغاء الاشتراك في أي وقت بنقرة واحدة بدون أي التزامات.</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Email Preview Modal */}
      {showEmailPreviewModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-5 sm:p-6 shadow-2xl text-right">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                <Mail className="h-5 w-5" />
                <span>معاينة النشرة البريدية اليومية | pharma Oasis Clinical Digest</span>
              </div>
              <button
                onClick={() => setShowEmailPreviewModal(false)}
                className="text-slate-400 hover:text-slate-700 font-bold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Rendered Email Template */}
            <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200 font-sans space-y-4 text-slate-800">
              
              <div className="border-b border-slate-200 pb-3">
                <div className="text-xs text-slate-500 font-medium">إلى: {userState.fullName} ({userState.email})</div>
                <div className="text-sm font-bold text-slate-900 mt-1">
                  الموضوع: 💊 pharma Oasis | دواء اليوم: سيماجلوتايد (Ozempic) + تنبيه تخديري عاجل
                </div>
              </div>

              <div className="space-y-3 text-xs leading-relaxed">
                <p>مرحباً {userState.fullName}،</p>
                <p>إليك ملخصك السريري الصباحي المخصص لتخصص <strong className="text-blue-700">{SPECIALTY_LABELS[userState.selectedSpecialty]?.ar}</strong>:</p>

                <div className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                  <div className="font-bold text-blue-700 text-sm mb-1">
                    🌟 دواء اليوم: Semaglutide (سيماجلوتايد - Ozempic / Wegovy)
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-700 mt-2">
                    <li><strong>الفئة:</strong> محفز مستقبلات GLP-1 خافض للسكر وحامي للقلب والكلى.</li>
                    <li><strong>الجرعة:</strong> 0.25 مجم تحت الجلد أسبوعياً لأول شهر، ثم 0.5 مجم.</li>
                    <li><strong>نصيحة الصيدلي:</strong> يؤخذ ريبيلسوس الفموي صباحاً على الريق مع 120 مل ماء فقط.</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-900">
                  <div className="font-bold text-red-800 text-xs mb-1">
                    🚨 تنبيه عاجل لسلامة المرضى:
                  </div>
                  <p className="text-slate-800 font-medium">
                    توصي جمعية التخدير (ASA) بإيقاف حقن GLP-1 أسبوعاً قبل العمليات الجراحية لتجنب استنشاق محتويات المعدة (Pulmonary Aspiration).
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 text-center font-medium space-y-1">
                <div>هذه الرسالة مرسلة لك بناءً على اشتراكك في منصة <strong>pharma Oasis</strong> - ملك شركة <strong>pharma Oasis Germans EG</strong> (1$/شهرياً بعد الشهر المجاني).</div>
                <div className="text-slate-400">الدعم الفني: Dr. Alaa Elbadry (00201552881999) | <a href="https://www.pharmaoasisgermans.com" target="_blank" rel="noreferrer" className="text-blue-600 underline">www.pharmaoasisgermans.com</a></div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowEmailPreviewModal(false)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs cursor-pointer"
              >
                إغلاق المعاينة
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
