import React from "react";
import FloorButton from "./FloorButton";
import ClassTimeButton from "./ClassTimeButton";

const FLOORS = ["2층", "3층", "4층"];
const TIMES = ["8교시", "9교시", "10교시", "11교시"];

interface SidebarProps {
  floor: string | null;
  time: string | null;
  onFloor: (floor: string) => void;
  onTime: (time: string) => void;
}

export default function Sidebar({
  floor,
  time,
  onFloor,
  onTime,
}: SidebarProps) {
  return (
    <div className="w-80 bg-white rounded-2xl p-7 h-fit">
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-5">층수</h3>
        <div className="space-y-5">
          {FLOORS.map((f) => (
            <FloorButton
              key={f}
              floor={f}
              isSelected={floor === f}
              onClick={() => onFloor(f)}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-5">교시</h3>
        <div className="grid grid-cols-2 gap-5">
          {TIMES.map((t) => (
            <ClassTimeButton
              key={t}
              classTime={t}
              isSelected={time === t}
              onClick={() => onTime(t)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
