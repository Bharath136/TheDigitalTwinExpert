import React, { useState } from 'react';

// Default futuristic/tech images for wedges if none provided
const DEFAULT_WEDGE_IMAGES = [
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=600&auto=format&fit=crop',
];

// Map index 0-9 to specific angle brackets (startAngle, endAngle) in degrees (10 slices = 36 deg each)
const WEDGE_ANGLES = [
  [-126, -90],  // 0: Top-Left
  [-162, -126], // 1: Mid-Top-Left
  [162, 198],   // 2: Far-Left
  [126, 162],   // 3: Mid-Bot-Left
  [90, 126],    // 4: Bot-Left
  [-90, -54],   // 5: Top-Right
  [-54, -18],   // 6: Mid-Top-Right
  [-18, 18],    // 7: Far-Right
  [18, 54],     // 8: Mid-Bot-Right
  [54, 90]      // 9: Bot-Right
];

const getClipPath = (startDeg, endDeg) => {
  const startRad = (startDeg * Math.PI) / 180;
  const endRad = (endDeg * Math.PI) / 180;
  const x1 = 50 + 200 * Math.cos(startRad);
  const y1 = 50 + 200 * Math.sin(startRad);
  const x2 = 50 + 200 * Math.cos(endRad);
  const y2 = 50 + 200 * Math.sin(endRad);
  return `polygon(50% 50%, ${x1}% ${y1}%, ${x2}% ${y2}%)`;
};

const PlaceholderIcon = () => (
  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const CircularDiagram = ({ centerTitle, centerSubtitle, items }) => {
  const [hoveredId, setHoveredId] = useState(null);

  const displayItems = items.slice(0, 10);
  const leftItems = displayItems.slice(0, 5);
  const rightItems = displayItems.slice(5, 10);

  const getLineStyles = (isLeft, idx) => {
    // Create futuristic angled pointing lines based on vertical position
    if (isLeft) {
      if (idx === 0) return { width: 'clamp(50px, 8vw, 110px)', transform: 'rotate(28deg) translateY(-2px)', transformOrigin: 'left center' };
      if (idx === 1) return { width: 'clamp(30px, 5vw, 70px)', transform: 'rotate(12deg)', transformOrigin: 'left center' };
      if (idx === 2) return { width: 'clamp(20px, 3vw, 40px)', transform: 'rotate(0deg)', transformOrigin: 'left center' };
      if (idx === 3) return { width: 'clamp(30px, 5vw, 70px)', transform: 'rotate(-12deg)', transformOrigin: 'left center' };
      if (idx === 4) return { width: 'clamp(50px, 8vw, 110px)', transform: 'rotate(-28deg) translateY(2px)', transformOrigin: 'left center' };
    } else {
      if (idx === 0) return { width: 'clamp(50px, 8vw, 110px)', transform: 'rotate(-28deg) translateY(-2px)', transformOrigin: 'right center' };
      if (idx === 1) return { width: 'clamp(30px, 5vw, 70px)', transform: 'rotate(-12deg)', transformOrigin: 'right center' };
      if (idx === 2) return { width: 'clamp(20px, 3vw, 40px)', transform: 'rotate(0deg)', transformOrigin: 'right center' };
      if (idx === 3) return { width: 'clamp(30px, 5vw, 70px)', transform: 'rotate(12deg)', transformOrigin: 'right center' };
      if (idx === 4) return { width: 'clamp(50px, 8vw, 110px)', transform: 'rotate(28deg) translateY(2px)', transformOrigin: 'right center' };
    }
  };

  const LabelCard = ({ item, isLeft, index }) => {
    const isHovered = hoveredId === item.id;
    return (
      <div 
        className={`flex ${isLeft ? 'flex-row lg:flex-row-reverse text-left lg:text-right' : 'flex-row text-left'} items-center gap-3 lg:gap-4 group cursor-pointer transition-all duration-300 w-full relative z-10 ${isHovered ? 'lg:scale-105' : ''}`}
        onMouseEnter={() => setHoveredId(item.id)}
        onMouseLeave={() => setHoveredId(null)}
      >
        <div className={`relative z-20 flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] border transition-all duration-300
          ${isHovered ? 'border-blue-500 scale-110 shadow-[0_0_15px_rgba(59,130,246,0.4)]' : 'border-blue-100'}
        `}>
          {typeof item.icon === 'string' && item.icon.startsWith('http') ? (
            <img src={item.icon} alt="icon" className="w-5 h-5 object-contain relative z-20" />
          ) : (
            <div className="relative z-20"><PlaceholderIcon /></div>
          )}

          {/* Angled Connector Line anchored perfectly to icon center */}
          <div 
            className={`hidden lg:block absolute top-1/2 h-[1.5px] -z-10 transition-all duration-300
              ${isLeft ? 'left-full' : 'right-full'}
              ${isHovered ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]' : 'bg-blue-300 pointer-events-none opacity-60'}
            `}
            style={getLineStyles(isLeft, index)}
          >
             {/* Small node point at end of connecting line */}
             <div className={`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 ${isHovered ? 'bg-white shadow-[0_0_5px_#3b82f6]' : 'bg-blue-300'} ${isLeft ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`}></div>
          </div>
        </div>

        <div className={`flex flex-col flex-grow lg:flex-grow-0 lg:max-w-[240px] xl:max-w-xs transition-colors duration-300 ${isHovered ? 'text-blue-700' : 'text-slate-800'}`}>
          <h4 className="font-bold text-[14px] lg:text-[15px] leading-tight mb-1">{item.id + 1}. {item.title}</h4>
          <p className="text-[12px] lg:text-xs text-slate-500 leading-snug">{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full py-12 lg:py-20 bg-[url('/images/circuit-bg.svg')] bg-cover bg-center bg-blue-50/40 relative rounded-3xl my-8 overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-100/30 to-blue-50/50 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-4 relative z-10">
        
        {/* LEFT LABELS */}
        <div className="w-full lg:flex-1 flex flex-col gap-6 lg:gap-8 order-2 lg:order-1 items-end relative z-20">
          {leftItems.map((item, idx) => (
             <div key={item.id} className="w-full flex justify-end">
                <LabelCard item={item} isLeft={true} index={idx} />
             </div>
          ))}
        </div>

        {/* CENTER WHEEL */}
        <div className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:w-[500px] lg:max-w-none aspect-square relative order-1 lg:order-2 flex-shrink-0 mx-auto z-10">
          {/* Main wheel container */}
          <div className="absolute inset-0 rounded-full bg-white overflow-hidden shadow-[0_10px_40px_rgba(14,165,233,0.15)] ring-4 ring-offset-4 ring-offset-blue-50 ring-blue-100">
            {displayItems.map((item, index) => {
              const [startAngle, endAngle] = WEDGE_ANGLES[index] || [0, 0];
              const isHovered = hoveredId === item.id;
              
              return (
                <div 
                  key={item.id}
                  className="absolute inset-0 origin-center transition-all duration-500 ease-out"
                  style={{ 
                    clipPath: getClipPath(startAngle, endAngle),
                    zIndex: isHovered ? 10 : 5,
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <img 
                    src={item.image || DEFAULT_WEDGE_IMAGES[index % DEFAULT_WEDGE_IMAGES.length]} 
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700
                      ${isHovered ? 'scale-110 brightness-110 saturate-150' : 'scale-100 brightness-[0.85] saturate-[0.85] hover:saturate-100'}
                    `}
                  />
                  {/* Subtle highlight overlay */}
                  <div className={`absolute inset-0 bg-blue-500/20 mix-blend-overlay transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              );
            })}

            {/* Separator Lines to create gaps between wedges */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div 
                key={`sep-${i}`} 
                className="absolute top-1/2 left-1/2 w-[50%] h-[4px] bg-white origin-left z-20"
                style={{ transform: `translateY(-50%) rotate(${i * 36 - 90}deg)` }}
              >
                 {/* Glowing dot on the outer edge */}
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_3px_#3b82f6] z-30" />
              </div>
            ))}
          </div>

          {/* CENTER HUB */}
          <div className="absolute inset-0 m-auto w-[42%] h-[42%] rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-[6px] border-white overflow-hidden text-white z-30 transform transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Command Center"
            />
            {/* Dark gradient at the bottom so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-blue-900/60 to-transparent"></div>
            
            <div className="absolute bottom-4 inset-x-0 px-2 flex flex-col items-center justify-end text-center">
              <h3 className="font-bold text-[clamp(12px,1.5vw,18px)] leading-tight mb-0.5 max-w-[85%] mx-auto">{centerTitle}</h3>
              {centerSubtitle && <p className="text-[clamp(9px,1vw,12px)] text-blue-200 leading-tight font-medium hidden sm:block">{centerSubtitle}</p>}
            </div>
          </div>
        </div>

        {/* RIGHT LABELS */}
        <div className="w-full lg:flex-1 flex flex-col gap-6 lg:gap-8 order-3 mt-4 lg:mt-0 items-start relative z-20">
          {rightItems.map((item, idx) => (
             <div key={item.id} className="w-full flex justify-start">
                <LabelCard item={item} isLeft={false} index={idx} />
             </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const sampleCircularDiagramData = {
  centerTitle: 'Command Centers',
  centerSubtitle: 'Readiness & Intelligence',
  items: Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    title: `Feature Item ${i + 1}`,
    description: 'Data-driven insights to enhance real-time operational efficiency.',
    icon: `${i + 1}`,
  }))
};

export default CircularDiagram;
