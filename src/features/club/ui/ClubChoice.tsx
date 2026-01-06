'use client';
import { useState } from "react";

const ClubChoice = () => {
  const [selectedClub, setSelectedClub] = useState<string>(' ');

  const handleClubChange = (value: string) => {
    setSelectedClub(value);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold">동아리 유형</h2>
      <div className="flex gap-2 my-1">
        <button
          type="button"
          className={`px-4 py-2 rounded-md cursor-pointer ${selectedClub === '전공동아리' ? 'bg-[#727DEB] text-white' : 'bg-[#F4F4F4]'}`}
          onClick={() => handleClubChange('전공동아리')}
        >
          전공동아리
        </button>

        <button
          type="button"
          className={`px-4 py-2 rounded-md cursor-pointer ${selectedClub === '자율동아리' ? 'bg-[#727DEB] text-white' : 'bg-[#F4F4F4]'}`}
          onClick={() => handleClubChange('자율동아리')}
        >
          자율동아리
        </button>

        <button
          type="button"
          className={`px-4 py-2 rounded-md cursor-pointer ${selectedClub === '취업동아리' ? 'bg-[#727DEB] text-white' : 'bg-[#F4F4F4]'}`}
          onClick={() => handleClubChange('취업동아리')}
        >
          취업동아리
        </button>
      </div>
      <p className="text-sm">유형: <span className="text-[#727DEB] font-semibold" >{selectedClub}</span></p>
    </div>
  );
};

export default ClubChoice;