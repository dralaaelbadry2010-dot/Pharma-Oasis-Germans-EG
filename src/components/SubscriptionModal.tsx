import React, { useState } from 'react';
import {
  CreditCard,
  Crown,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  Calendar,
  X,
  FileCheck,
  DollarSign,
  Gift
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserSubscription } from '../types';
import { calculateTrialDaysRemaining } from '../utils/storage';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  userState: UserSubscription;
  onActivateSubscription: () => void;
}

export const SubscriptionModal: React.FC<SubscriptionModalProps> = ({
  isOpen,
  onClose,
  userState,
  onActivateSubscription
}) => {
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('888');
  const [billingPlan, setBillingPlan] = useState<'monthly' | 'annual'>('monthly');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const trialDays = calculateTrialDaysRemaining(userState.trialEndsDate);

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      onActivateSubscription();

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2400);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-xl max-w-lg w-full overflow-hidden shadow-2xl text-right">
        
        {/* Modal Top Header */}
        <div className="bg-slate-50 p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center">
              <Crown className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">ترقية وتأكيد الاشتراك السريري</h3>
              <p className="text-xs text-slate-500 font-medium">1 دولار أمريكي شهرياً - الشهر الأول مجاني</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {isSuccess ? (
            <div className="py-6 text-center space-y-2.5">
              <CheckCircle2 className="h-12 w-12 text-emerald-600 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-slate-900">تم تفعيل الاشتراك بنجاح!</h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed font-medium">
                شكراً لانضمامك! تم تسجيل بريدك الإلكتروني لتلقي نشرة دواء اليوم والتنبيهات المخصصة.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitPayment} className="space-y-4">
              
              {/* Trial guarantee banner */}
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-start gap-2.5">
                <Gift className="h-4 w-4 text-blue-700 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-950 leading-relaxed font-medium">
                  <strong className="text-blue-900 block font-bold">عرض تجريبي مجاني 30 يوماً:</strong>
                  لن يتم خصم أي مبلغ اليوم ($0.00). سيبدأ احتساب 1$ شهرياً فقط بعد انتهاء الـ 30 يوماً الأولى.
                </div>
              </div>

              {/* Plan Picker */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setBillingPlan('monthly')}
                  className={`p-3 rounded-lg text-right border transition-all cursor-pointer ${
                    billingPlan === 'monthly'
                      ? 'bg-blue-50 border-blue-400 text-blue-950 font-bold shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-[11px] text-slate-500 block font-bold">اشتراك شهري:</span>
                  <div className="text-base font-black text-blue-700 font-mono mt-0.5">
                    1.00 $ <span className="text-xs font-normal text-slate-600">/ شهر</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setBillingPlan('annual')}
                  className={`p-3 rounded-lg text-right border transition-all cursor-pointer ${
                    billingPlan === 'annual'
                      ? 'bg-blue-50 border-blue-400 text-blue-950 font-bold shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-500 font-bold">اشتراك سنوي:</span>
                    <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-bold">وفر 17%</span>
                  </div>
                  <div className="text-base font-black text-blue-700 font-mono mt-0.5">
                    10.00 $ <span className="text-xs font-normal text-slate-600">/ سنة</span>
                  </div>
                </button>
              </div>

              {/* Card Inputs */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    رقم البطاقة الائتمانية / مدى / Visa:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={e => setCardNumber(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm font-mono font-medium focus:border-blue-600 focus:outline-none pr-3 pl-10"
                      required
                    />
                    <CreditCard className="h-4 w-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">تاريخ الانتهاء:</label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={e => setExpiry(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs font-mono font-medium focus:border-blue-600 focus:outline-none text-center"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">رمز الأمان (CVC):</label>
                    <input
                      type="password"
                      value={cvc}
                      onChange={e => setCvc(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-xs font-mono font-medium focus:border-blue-600 focus:outline-none text-center"
                      maxLength={4}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary & Security Note */}
              <div className="pt-2 text-xs text-slate-600 space-y-1 border-t border-slate-100 font-medium">
                <div className="flex justify-between text-slate-800">
                  <span>المبلغ المستحق اليوم:</span>
                  <span className="font-bold text-emerald-700 font-mono">0.00 $ (مجاناً للشهر الأول)</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>التجديد بعد 30 يوماً:</span>
                  <span className="font-mono">{billingPlan === 'monthly' ? '1.00 $ / شهرياً' : '10.00 $ / سنوياً'}</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                >
                  <Lock className="h-4 w-4" />
                  <span>{isProcessing ? 'جارٍ معالجة وتأكيد الاشتراك...' : 'تأكيد وبدء الشهر المجاني (0.00 $)'}</span>
                </button>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-slate-500 flex items-center justify-center gap-1 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                  تشفير آمن 256-bit SSL | يمكنك إلغاء الاشتراك في أي وقت بنقرة واحدة
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
