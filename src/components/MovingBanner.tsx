import React from 'react';

const MovingBanner: React.FC = () => {
  return (
    <div className="bg-yellow-400 text-black py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap text-lg font-semibold">
        this is the demo, if u like it connect me on whatsapp -- 6376905585
      </div>
    </div>
  );
};

export default MovingBanner;