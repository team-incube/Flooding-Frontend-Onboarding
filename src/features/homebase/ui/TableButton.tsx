"use client";

import React from "react";

interface TableButtonProps {
  name: string;
  seats: number;
  isSelected: boolean;
  onClick: () => void;
  flexClass?: string;
}

export default function TableButton({
  name,
  seats,
  isSelected,
  onClick,
  flexClass = "flex-1",
}: TableButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${flexClass} p-5 rounded-xl border flex flex-col items-start justify-start cursor-pointer ${
        isSelected
          ? "border-main-100 bg-blue-50"
          : "border-[#E0E4E9]"
      }`}
    >
      <p className="font-semibold mb-1 text-lg text-gray-700">
        {name}
      </p>
      <p className="text-sm text-[#999999]">최대 {seats}명</p>
    </button>
  );
}
