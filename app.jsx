import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkDependencies = () => {
      if (
        window.Header &&
        window.Hero &&
        window.About &&
        window.Skills &&
        window.Experience &&
        window.Portfolio &&
        window.Contact &&
        window.Footer
      ) {
        setIsReady(true);
      }
    };

    checkDependencies();
    const interval = setInterval(checkDependencies, 100);
    return () => clearInterval(interval);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-600 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
        </div>
        <p className="mt-6 text-gray-600 text-lg font-medium">Loading portfolio...</p>
        <p className="mt-2 text-gray-400 text-sm">Please wait while we prepare everything for you</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <window.Header />
      <main>
        <window.Hero />
        <window.About />
        <window.Skills />
        <window.Experience />
        <window.Portfolio />
        <window.Contact />
      </main>
      <window.Footer />
    </div>
  );
}

createRoot(document.getElementById('renderDiv')).render(<App />);