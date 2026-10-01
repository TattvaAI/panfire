import React, { useState, useEffect } from 'react';
import { Lock, ShieldAlert, ArrowLeft, Delete, KeyRound } from 'lucide-react';
import { usePortalStore } from '../../store/usePortalStore';

export const StaffPasscodeGate: React.FC = () => {
  const { authenticateStaff, setView } = usePortalStore();
  const [pin, setPin] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [isShaking, setIsShaking] = useState<boolean>(false);

  const handleKeyPress = (num: string) => {
    if (pin.length < 4) {
      setErrorMsg('');
      const newPin = pin + num;
      setPin(newPin);
      if (newPin.length === 4) {
        verifyPin(newPin);
      }
    }
  };

  const handleBackspace = () => {
    setErrorMsg('');
    setPin((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setErrorMsg('');
    setPin('');
  };

  const verifyPin = (code: string) => {
    const success = authenticateStaff(code);
    if (!success) {
      setIsShaking(true);
      setErrorMsg('Invalid PIN. Unauthorized access prevented.');
      setTimeout(() => {
        setPin('');
        setIsShaking(false);
      }, 600);
    }
  };

  // Allow physical keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (/^[0-9]$/.test(e.key)) {
        handleKeyPress(e.key);
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Escape') {
        setView('CUSTOMER');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pin]);

  return (
    <div className="min-h-screen bg-[#161412] text-[#F3ECDD] flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center space-y-6">
        
        {/* Terminal Header */}
        <div className="space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-[#C8371A]/20 border border-[#C8371A]/40 text-[#C8371A] flex items-center justify-center mx-auto shadow-lg shadow-[#C8371A]/10">
            <Lock className="w-7 h-7" />
          </div>
          <h2 className="font-sans text-xl sm:text-2xl font-black tracking-tight text-[#F3ECDD]">
            Kitchen Terminal Locked
          </h2>
          <p className="text-xs text-[#8A8378] max-w-xs leading-relaxed">
            Restricted to PanFire staff & managers. Enter 4-digit security PIN to unlock the live kitchen pass.
          </p>
        </div>

        {/* PIN Dot Indicators */}
        <div
          className={`flex items-center justify-center gap-4 py-3 transition-transform ${
            isShaking ? 'animate-bounce' : ''
          }`}
        >
          {[0, 1, 2, 3].map((idx) => {
            const isFilled = pin.length > idx;
            return (
              <div
                key={idx}
                className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                  isFilled
                    ? 'bg-[#C8371A] border-[#C8371A] scale-110 shadow-sm shadow-[#C8371A]'
                    : 'border-[#8A8378]/50 bg-transparent'
                }`}
              />
            );
          })}
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="flex items-center gap-1.5 text-xs text-[#C8371A] font-semibold bg-[#C8371A]/10 px-3 py-1.5 rounded-lg border border-[#C8371A]/30 animate-fade-in">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Keypad Grid (3x4) */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-[280px]">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
            <button
              key={digit}
              type="button"
              onClick={() => handleKeyPress(digit)}
              className="h-14 rounded-2xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-xl font-bold font-mono text-[#F3ECDD] flex items-center justify-center transition-all cursor-pointer shadow-xs select-none"
            >
              {digit}
            </button>
          ))}

          {/* Bottom Row */}
          <button
            type="button"
            onClick={handleClear}
            className="h-14 rounded-2xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-xs font-mono font-bold text-[#8A8378] hover:text-[#F3ECDD] flex items-center justify-center transition-all cursor-pointer select-none"
          >
            CLEAR
          </button>

          <button
            type="button"
            onClick={() => handleKeyPress('0')}
            className="h-14 rounded-2xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-xl font-bold font-mono text-[#F3ECDD] flex items-center justify-center transition-all cursor-pointer shadow-xs select-none"
          >
            0
          </button>

          <button
            type="button"
            onClick={handleBackspace}
            className="h-14 rounded-2xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-[#8A8378] hover:text-[#F3ECDD] flex items-center justify-center transition-all cursor-pointer select-none"
            title="Backspace"
          >
            <Delete className="w-5 h-5" />
          </button>
        </div>

        {/* PIN Hint & Exit button */}
        <div className="pt-2 space-y-3 w-full">
          <p className="text-[11px] text-[#8A8378] font-mono">
            Default Staff PIN: <span className="text-[#F3ECDD] font-bold">4500</span>
          </p>

          <button
            type="button"
            onClick={() => setView('CUSTOMER')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#8A8378] hover:text-[#F3ECDD] transition-colors cursor-pointer py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Public Website</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default StaffPasscodeGate;
