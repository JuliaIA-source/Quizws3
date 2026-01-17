
import React, { useState, useEffect } from 'react';

interface AnalysisScreenProps {
  onComplete: () => void;
}

const AnalysisScreen: React.FC<AnalysisScreenProps> = ({ onComplete }) => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVerified(true);
      setTimeout(onComplete, 2500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[500px] bg-white rounded-[32px] shadow-2xl p-12 text-center flex flex-col items-center transform transition-all duration-500">
        {!isVerified ? (
          <>
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-100 rounded-full"></div>
              <div className="absolute top-0 left-0 w-full h-full border-4 border-black border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="text-xl font-bold text-[#111827] animate-pulse">
              Verificando respuestas...
            </p>
          </>
        ) : (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-gray-100 text-black rounded-full flex items-center justify-center text-6xl mb-8 shadow-inner border-2 border-gray-200">
              ✅
            </div>
            <h2 className="text-3xl font-black text-black mb-4 tracking-tight">
              ¡Verificado!
            </h2>
            <p className="text-lg font-bold text-[#4B5563] leading-relaxed">
              Felicitaciones, tus respuestas muestran que estás calificado para ganar dinero con IA.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisScreen;
