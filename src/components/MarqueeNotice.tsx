import React from 'react';

export const MarqueeNotice: React.FC = () => {
  return (
    <div className="w-full bg-[#1a1817] text-[#fbf9f5] border-b border-[#2d2927] py-2 px-4 overflow-hidden select-none">
      <div className="flex items-center justify-between text-[10px] tracking-[0.22em] uppercase font-medium">
        <span className="hidden md:inline-block text-[#c5a880]">
          DISPATCH BULLETIN N° 88
        </span>
        <div className="flex-1 text-center truncate mx-4">
          <span className="text-[#fbf9f5]/90">
            SERIALIZED BATCH N° 049 CURRENTLY RESTRICTED TO 500 FLUID FLASKS
          </span>
          <span className="mx-3 text-[#767f6d]">•</span>
          <span className="text-[#c5a880]">
            COMPLIMENTARY COLD-CHAIN DISPATCH ACROSS ALL CONTINENTAL APOTHECARIES
          </span>
          <span className="mx-3 text-[#767f6d] hidden sm:inline">•</span>
          <span className="text-[#fbf9f5]/70 hidden sm:inline">
            SWISS ALPS &bull; OMAN &bull; ANATOLIA &bull; PROVENCE
          </span>
        </div>
        <span className="text-[9px] text-[#e7e1d8]/60 hidden lg:inline-block">
          HARVEST 2026 CERTIFIED
        </span>
      </div>
    </div>
  );
};
