import React, { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

  // Editable State
  const [proposalText, setProposalText] = useState("Every moment with you is a treasure. I want to keep this treasure my whole life.");
    const [noButtonText, setNoButtonText] = useState("No");

  const handleNoHover = () => {
    if (hasAccepted) return;
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 150 - 75;
    setNoButtonPos({ x, y });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-50 p-6 font-sans overflow-hidden">
      
      {!isOpen ? (
        /* --- ENVELOPE VIEW --- */
        <div className="flex flex-col items-center space-y-8 animate-pulse">
          <div className="text-6xl">❤️</div>
          <div 
            onClick={() => setIsOpen(true)}
            className="group cursor-pointer relative bg-white p-12 rounded-2xl shadow-xl border-2 border-rose-100 flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="text-5xl mb-4">💌</div>
            <p className="text-xl font-serif text-gray-700 uppercase tracking-widest">Open Me</p>
          </div>
        </div>
      ) : (
        /* --- CENTERED PROPOSAL VIEW --- */
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center relative transition-all duration-500">
          
          {hasAccepted ? (
            /* --- SUCCESS VIEW (Pure CSS Animation) --- */
            <div className="space-y-6 flex flex-col items-center py-10">
              <div className="relative">
                <div className="text-7xl animate-bounce">💖</div>
                {/* Floating mini hearts using CSS */}
                <div className="absolute top-0 animate-ping text-2xl">❤️</div>
              </div>
              <h2 className="text-3xl font-serif font-bold text-rose-600 italic">I can't wait!</h2>
              <p className="text-gray-600">You've made this the best Valentine's Day ever.</p>
              <button 
                onClick={() => setHasAccepted(false)} 
                className="mt-4 text-xs text-gray-400 underline uppercase tracking-widest"
              >
                Back to card
              </button>
            </div>
          ) : (
            /* --- QUESTION VIEW --- */
            <div className="flex flex-col items-center space-y-8">
              <div className="text-4xl">🌹</div>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
                Will you be my Valentine?
              </h1>

              {/* Editable Message Area */}
              <div className="group relative w-full">
                <textarea
                  value={proposalText}
                  onChange={(e) => setProposalText(e.target.value)}
                  className="w-full text-center text-gray-600 italic text-lg leading-relaxed bg-rose-50/50 border-none focus:ring-2 focus:ring-rose-200 rounded-xl p-4 resize-none outline-none"
                  rows={4}
                />
     
              </div>

              {/* Centered Button Container */}
              <div className="flex flex-col items-center justify-center w-full min-h-[200px] relative">
                
                {/* YES BUTTON */}
                <div className="group relative w-full max-w-xs mb-4">
                  <button 
                    onClick={() => setHasAccepted(true)}
                    className="w-full py-4 bg-rose-500 text-white rounded-full font-bold text-xl shadow-lg hover:bg-rose-600 transition-all flex items-center justify-center"
                  >
                    Yes! 💖                  </button>
                </div>

                {/* NO BUTTON (The Runaway) */}
                <div 
                  className="group relative"
                  style={{
                    transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`,
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <input
                    value={noButtonText}
                    onChange={(e) => setNoButtonText(e.target.value)}
                    onMouseEnter={handleNoHover}
                    className="px-8 py-2 bg-gray-100 text-gray-400 rounded-full font-semibold border border-gray-200 text-center outline-none w-32 cursor-default"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

     
    </div>
  );
};

export default App;