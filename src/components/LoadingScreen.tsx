import { useEffect, useState } from 'react';
import logoIcon from '@/assets/logo-icon.png';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [stage, setStage] = useState<'icon' | 'wordmark' | 'complete'>('icon');

  useEffect(() => {
    // Icon build and settle: 0-1200ms
    const wordmarkTimer = setTimeout(() => setStage('wordmark'), 1200);
    
    // Complete animation and exit: at 3000ms
    const completeTimer = setTimeout(() => {
      setStage('complete');
      setTimeout(onLoadingComplete, 500);
    }, 3000);

    return () => {
      clearTimeout(wordmarkTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ${
        stage === 'complete' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 45%, hsl(45 100% 96%), hsl(0 0% 100%) 60%)',
        transition: 'opacity 700ms cubic-bezier(0.4, 0.0, 0.2, 1)'
      }}
    >
      {/* Golden ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 45%, hsl(28 76% 56% / 0.08) 0%, transparent 50%)',
          animation: 'golden-breathe 3000ms ease-in-out infinite'
        }}
      />

      <div 
        className={`relative flex flex-col items-center transition-all duration-700 ${
          stage === 'complete' ? '-translate-y-24 scale-90' : 'translate-y-0 scale-100'
        }`}
      >
        {/* Icon - Geometric line drawing with golden shimmer */}
        <div 
          className="relative w-32 h-32 mb-8"
          style={{
            animation: stage !== 'icon' ? 'icon-settle 700ms cubic-bezier(0.34, 1.56, 0.64, 1) 0ms forwards' : 'none'
          }}
        >
          {/* Golden reflection layer */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 60% 40%, hsl(45 100% 70% / 0.2) 0%, transparent 60%)',
              animation: stage !== 'icon' ? 'golden-shimmer 800ms cubic-bezier(0.4, 0.0, 0.2, 1) 900ms forwards' : 'none',
              opacity: 0,
              mixBlendMode: 'overlay'
            }}
          />
          
          <img
            src={logoIcon}
            alt="OUSSAID Icon"
            className="w-full h-full object-contain relative"
            style={{
              animation: 'line-draw 900ms cubic-bezier(0.65, 0, 0.35, 1) 0ms forwards',
              filter: 'drop-shadow(0 0 20px hsl(182 54% 42% / 0))'
            }}
          />
        </div>

        {/* Wordmark - OUSSAID with elegant tracking */}
        {stage !== 'icon' && (
          <div
            className="text-6xl font-bold relative"
            style={{
              color: 'hsl(28 76% 56%)',
              animation: 'wordmark-elegant-rise 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 0ms forwards',
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              textShadow: '0 2px 12px hsl(28 76% 56% / 0.15)'
            }}
          >
            OUSSAID
          </div>
        )}

        {/* Subtitle - TOURISME */}
        {stage !== 'icon' && (
          <div
            className="text-base font-semibold tracking-[0.25em] mt-2"
            style={{
              color: 'hsl(182 54% 42%)',
              animation: 'subtitle-elegant-fade 400ms cubic-bezier(0.4, 0.0, 0.2, 1) 200ms forwards',
              fontFamily: 'Poppins, sans-serif',
              textTransform: 'uppercase',
              opacity: 0
            }}
          >
            TOURISME
          </div>
        )}

        {/* Final lockup elevation */}
        {stage === 'complete' && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              animation: 'lockup-elevate 400ms cubic-bezier(0.4, 0.0, 0.2, 1) 0ms forwards'
            }}
          />
        )}
      </div>

      {/* Reduced motion fallback */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
