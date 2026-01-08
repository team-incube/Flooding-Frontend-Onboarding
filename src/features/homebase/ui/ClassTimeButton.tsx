"use client";

import React from "react";

interface ClassTimeButtonProps {
  classTime: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function ClassTimeButton({
  classTime,
  isSelected,
  onClick,
}: ClassTimeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-3 border rounded-lg text-base transition-colors text-left cursor-pointer w-full ${
        isSelected
          ? "border-[#D1D8DE] bg-main-100 text-white"
          : "border-[#D1D8DE] text-gray-700 hover:bg-gray-50"
      }`}
    >
      {classTime}
    </button>
  );
}
