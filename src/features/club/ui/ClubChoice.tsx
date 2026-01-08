"use client";
import { useState } from "react";

export default function ClubChoice({ setCategory }: { setCategory: (v: string) => void }) {
  const [selected, setSelected] = useState<string>("");

  const handleClick = (value: string) => {
    setSelected(value);
    setCategory(value);
  };

  return (
    <div>
      <p className="font-semibold mb-1">동아리 유형</p>
      <div className="flex gap-2">
        {["전공동아리", "자율동아리", "취업동아리"].map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => handleClick(type)}
            className={`px-3 py-1 rounded cursor-pointer hover:bg-[#1866E1] hover:text-white transition-colors ${
              selected === type ? "bg-[#1866E1]  text-white" : "bg-gray-200"
            }`}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
