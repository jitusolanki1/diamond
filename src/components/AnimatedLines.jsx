import React from 'react';

export default function AnimatedLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
      {/* Subtle Diamond Faceted Architectural Watermark Grid */}
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="exchange-facets" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 100 50 L 50 100 L 0 50 Z" fill="none" stroke="#e2e8f0" strokeWidth="0.75" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="#f1f5f9" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="1.5" fill="#d4af37" fillOpacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#exchange-facets)" />
      </svg>
    </div>
  );
}
