
import React, { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS } from './constants.tsx';
import ProgressBar from './components/ProgressBar.tsx';
import OptionCard from './components/OptionCard.tsx';
import StorytellingScreen from './components/StorytellingScreen.tsx';
import AnalysisScreen from './components/AnalysisScreen.tsx';
import SalesPage from './components/SalesPage.tsx';

type AppState = 'quiz' | 'storytelling' | 'analysis' | 'sales';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [appState, setAppState] = useState<AppState>('quiz');

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  const handleNext = useCallback((answer: string) => {
    if (currentStep === QUIZ_QUESTIONS.length - 1) {
       setAppState('storytelling');
       return;
    }
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 300);
    }
  }, [currentStep]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  if (appState === 'sales') {
    return <SalesPage onBack={() => setAppState('quiz')} />;
  }

  if (appState === 'storytelling') {
    return <StorytellingScreen onComplete={() => setAppState('analysis')} />;
  }

  if (appState === 'analysis') {
    return <AnalysisScreen onComplete={() => setAppState('sales')} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[600px] bg-white rounded-[24px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden transition-all duration-300">
        <ProgressBar progress={currentQuestion.progress} />
        
        {currentStep > 0 && (
          <button 
            onClick={handleBack}
            className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all z-10"
            aria-label="Volver"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
        )}

        <div className="p-8 md:p-12 flex flex-col items-center">
          {currentQuestion.heroEmoji && (
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-full flex items-center justify-center text-5xl mb-6 shadow-inner border border-gray-100">
              {currentQuestion.heroEmoji}
            </div>
          )}

          <h1 className="text-2xl md:text-3xl font-black text-[#111827] text-center leading-tight mb-4 tracking-tight px-4">
            {currentQuestion.headline}
          </h1>

          {currentQuestion.alertText && (
            <div className="w-full mb-6 py-3 px-4 bg-red-100 border border-red-200 rounded-xl">
              <p className="text-red-800 font-bold text-sm text-center">
                {currentQuestion.alertText}
              </p>
            </div>
          )}

          {currentQuestion.subheadline && (
            <p className="text-base md:text-lg text-[#4B5563] text-center mb-8 font-medium">
              {currentQuestion.subheadline}
            </p>
          )}

          <div className="w-full">
            {(currentQuestion.type === 'binary' || currentQuestion.type === 'multiple-choice') && currentQuestion.options && (
              <div className={`w-full ${currentQuestion.id === 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'flex flex-col'}`}>
                {currentQuestion.options.map((opt) => (
                  <OptionCard
                    key={opt.id}
                    label={opt.label}
                    icon={opt.icon}
                    isHighlighted={opt.isHighlighted}
                    variant={opt.variant || (currentQuestion.type === 'binary' ? 'binary' : 'list')}
                    onClick={() => handleNext(opt.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
