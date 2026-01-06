import React from "react";

interface FloorButtonProps {
  floor: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function FloorButton({
  floor,
  isSelected,
  onClick,
}: FloorButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-3 border rounded-lg text-base transition-colors text-left cursor-pointer ${
        isSelected
          ? "border-[#D1D8DE] bg-main-100 text-white"
          : "border-[#D1D8DE] text-gray-700 hover:bg-gray-50"
      }`}
    >
      {floor}
    </button>
  );
}
