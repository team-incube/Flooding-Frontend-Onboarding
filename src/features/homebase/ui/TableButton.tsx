"use client";

import React, { useState } from "react";
import { saveFloorSelection } from "@/features/homebase/actions/floorActions";

interface TableButtonProps {
  name: string;
  seats: number;
  isSelected: boolean;
  floor: string | null;
  classTime: string | null;
  onClick: () => void;
  flexClass?: string;
}

export default function TableButton({
  name,
  seats,
  isSelected,
  floor,
  classTime,
  onClick,
  flexClass = "flex-1",
}: TableButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);

      onClick();

      if (floor && classTime) {
        const validFloors = ["2층", "3층", "4층"];
        const validTimes = ["8교시", "9교시", "10교시", "11교시"];

        if (validFloors.includes(floor) && validTimes.includes(classTime)) {
          await saveFloorSelection(floor, classTime, name);
        }
      }
    } catch (err) {
      console.error("오류:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`${flexClass} p-5 rounded-xl border flex flex-col items-start justify-start cursor-pointer ${
        isSelected
          ? "border-main-100 bg-blue-50"
          : "border-[#E0E4E9]"
      } ${isLoading ? "opacity-50" : ""}`}
    >
      <p className="font-semibold mb-1 text-lg text-gray-700">
        {name}
      </p>
      <p className="text-sm text-[#999999]">최대 {seats}명</p>
    </button>
  );
}
