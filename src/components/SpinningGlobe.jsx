import React from 'react';

export default function SpinningGlobe({ isBackground = false, className = '' }) {
  if (isBackground) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
        {/* Subtle Orbit Ring with Gold Satellite */}
        <div className="absolute inset-0 rounded-full border border-[#38bdf8]/40 animate-[spin_24s_linear_infinite]">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#edd315] shadow-xs flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping absolute" />
            <span className="w-1.5 h-1.5 rounded-full bg-white relative" />
          </div>
        </div>

        {/* Transparent 3D Earth Sphere Container */}
        <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden bg-transparent">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              {/* Spherical Clip Mask */}
              <clipPath id="earth-mask">
                <circle cx="100" cy="100" r="99" />
              </clipPath>
            </defs>

            {/* Continuous Rotating Continents Group (Transparent ocean base) */}
            <g clipPath="url(#earth-mask)">
              <g className="animate-spin-earth fill-[#38bdf8]">
                {/* First Set of World Continents */}
                <g transform="translate(0, 0)">
                  {/* North America */}
                  <path d="M 20,40 Q 40,25 55,40 Q 50,60 40,75 Q 30,85 25,60 Z" />
                  {/* South America */}
                  <path d="M 40,85 Q 55,95 50,125 Q 40,155 35,140 Q 30,115 40,85 Z" />
                  {/* Europe */}
                  <path d="M 85,35 Q 105,30 115,45 Q 100,60 90,55 Z" />
                  {/* Africa */}
                  <path d="M 90,65 Q 115,60 120,90 Q 115,130 100,140 Q 88,110 90,65 Z" />
                  {/* Asia */}
                  <path d="M 120,30 Q 165,25 170,55 Q 155,80 135,75 Q 120,60 120,30 Z" />
                  {/* Australia */}
                  <path d="M 145,115 Q 170,110 165,135 Q 145,145 145,115 Z" />
                </g>

                {/* Second Duplicate Set for Seamless 360 Looping */}
                <g transform="translate(180, 0)">
                  {/* North America */}
                  <path d="M 20,40 Q 40,25 55,40 Q 50,60 40,75 Q 30,85 25,60 Z" />
                  {/* South America */}
                  <path d="M 40,85 Q 55,95 50,125 Q 40,155 35,140 Q 30,115 40,85 Z" />
                  {/* Europe */}
                  <path d="M 85,35 Q 105,30 115,45 Q 100,60 90,55 Z" />
                  {/* Africa */}
                  <path d="M 90,65 Q 115,60 120,90 Q 115,130 100,140 Q 88,110 90,65 Z" />
                  {/* Asia */}
                  <path d="M 120,30 Q 165,25 170,55 Q 155,80 135,75 Q 120,60 120,30 Z" />
                  {/* Australia */}
                  <path d="M 145,115 Q 170,110 165,135 Q 145,145 145,115 Z" />
                </g>
              </g>

              {/* 3D Latitude and Longitude Grid Lines */}
              <g stroke="#38bdf8" strokeOpacity="0.4" strokeWidth="0.75" fill="none">
                <ellipse cx="100" cy="100" rx="90" ry="98" />
                <ellipse cx="100" cy="100" rx="60" ry="98" />
                <ellipse cx="100" cy="100" rx="25" ry="98" />
                <line x1="2" y1="100" x2="198" y2="100" />
                <ellipse cx="100" cy="100" rx="98" ry="50" />
                <ellipse cx="100" cy="100" rx="98" ry="75" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center select-none py-2 ${className}`}>
      {/* 3D Earth Sphere Container */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center">
        
        {/* Subtle Orbit Ring with Gold Satellite */}
        <div className="absolute inset-0 rounded-full border border-[#38bdf8]/40 animate-[spin_18s_linear_infinite]">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#edd315] shadow-xs flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white" />
          </div>
        </div>

        {/* The 3D Earth Sphere */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-md border border-[#085a78] bg-[#043649]">
          
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              {/* Spherical Clip Mask */}
              <clipPath id="earth-mask">
                <circle cx="100" cy="100" r="99" />
              </clipPath>

              {/* Realistic 3D Sphere Shading */}
              <radialGradient id="earth-lighting" cx="30%" cy="25%" r="75%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#0284c7" stopOpacity="0.1" />
                <stop offset="85%" stopColor="#043649" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#022430" stopOpacity="0.9" />
              </radialGradient>
            </defs>

            {/* Ocean Base Layer */}
            <circle cx="100" cy="100" r="99" fill="#043649" />

            {/* Continuous Rotating Continents Group */}
            <g clipPath="url(#earth-mask)">
              <g className="animate-spin-earth fill-[#38bdf8]">
                {/* First Set of World Continents */}
                <g transform="translate(0, 0)">
                  {/* North America */}
                  <path d="M 20,40 Q 40,25 55,40 Q 50,60 40,75 Q 30,85 25,60 Z" />
                  {/* South America */}
                  <path d="M 40,85 Q 55,95 50,125 Q 40,155 35,140 Q 30,115 40,85 Z" />
                  {/* Europe */}
                  <path d="M 85,35 Q 105,30 115,45 Q 100,60 90,55 Z" />
                  {/* Africa */}
                  <path d="M 90,65 Q 115,60 120,90 Q 115,130 100,140 Q 88,110 90,65 Z" />
                  {/* Asia */}
                  <path d="M 120,30 Q 165,25 170,55 Q 155,80 135,75 Q 120,60 120,30 Z" />
                  {/* Australia */}
                  <path d="M 145,115 Q 170,110 165,135 Q 145,145 145,115 Z" />
                </g>

                {/* Second Duplicate Set for Seamless 360 Looping */}
                <g transform="translate(180, 0)">
                  {/* North America */}
                  <path d="M 20,40 Q 40,25 55,40 Q 50,60 40,75 Q 30,85 25,60 Z" />
                  {/* South America */}
                  <path d="M 40,85 Q 55,95 50,125 Q 40,155 35,140 Q 30,115 40,85 Z" />
                  {/* Europe */}
                  <path d="M 85,35 Q 105,30 115,45 Q 100,60 90,55 Z" />
                  {/* Africa */}
                  <path d="M 90,65 Q 115,60 120,90 Q 115,130 100,140 Q 88,110 90,65 Z" />
                  {/* Asia */}
                  <path d="M 120,30 Q 165,25 170,55 Q 155,80 135,75 Q 120,60 120,30 Z" />
                  {/* Australia */}
                  <path d="M 145,115 Q 170,110 165,135 Q 145,145 145,115 Z" />
                </g>
              </g>

              {/* 3D Latitude and Longitude Grid Lines */}
              <g stroke="#ffffff" strokeOpacity="0.2" strokeWidth="0.75" fill="none">
                <ellipse cx="100" cy="100" rx="90" ry="98" />
                <ellipse cx="100" cy="100" rx="60" ry="98" />
                <ellipse cx="100" cy="100" rx="25" ry="98" />
                <line x1="2" y1="100" x2="198" y2="100" />
                <ellipse cx="100" cy="100" rx="98" ry="50" />
                <ellipse cx="100" cy="100" rx="98" ry="75" />
              </g>

              {/* Spherical Shadow / Highlight Overlay */}
              <circle cx="100" cy="100" r="99" fill="url(#earth-lighting)" />
            </g>
          </svg>
        </div>

      </div>

      {/* Clean Global Liquidity Micro-Badge */}
      <div className="mt-3 flex items-center gap-2 px-3 py-1 rounded-xs bg-[#05435A] border border-[#085a78] text-[11px] font-medium text-white shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-[#edd315]" />
        <span className="font-serif-display uppercase tracking-wider text-[10px]">Global In-Play Exchange • 24/7 Live</span>
      </div>
    </div>
  );
}
