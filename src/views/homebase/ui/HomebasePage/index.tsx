"use client";

import Header from "@/widgets/header/ui";
import { useState } from "react";

const getTablesByFloor = (floor: string) => {
  const floorTables: { [key: string]: { name: string; seats: number }[] } = {
    "2층": [
      { name: "Table 1", seats: 6 },
      { name: "Table 2", seats: 4 },
      { name: "Table 3", seats: 4 },
    ],
    "3층": [
      { name: "Table 1", seats: 4 },
      { name: "Table 2", seats: 4 },
      { name: "Table 3", seats: 6 },
      { name: "Table 4", seats: 4 },
      { name: "Table 5", seats: 6 },
    ],
    "4층": [
      { name: "Table 1", seats: 4 },
      { name: "Table 2", seats: 4 },
      { name: "Table 3", seats: 6 },
      { name: "Table 4", seats: 4 },
    ],
  };
  return floorTables[floor] || [];
};

export default function HomebasePage() {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      <div className="max-w-375 mx-auto px-10 py-9 flex gap-8">
        <div className="w-80 bg-white rounded-2xl p-7 h-fit">
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-700 mb-5">층수</h3>
            <div className="space-y-5">
              <button
                onClick={() => setSelectedFloor("2층")}
                className={`w-full px-5 py-4 border rounded-lg text-md transition-colors text-left ${
                  selectedFloor === "2층"
                    ? "border-[#D1D8DE] bg-main-100 text-white"
                    : "border-[#D1D8DE] text-gray-700 hover:bg-gray-50"
                }`}
              >
                2층
              </button>
              <button
                onClick={() => setSelectedFloor("3층")}
                className={`w-full px-5 py-4 border rounded-lg text-md transition-colors text-left ${
                  selectedFloor === "3층"
                    ? "border-[#D1D8DE] bg-main-100 text-white"
                    : "border-[#D1D8DE] text-gray-700 hover:bg-gray-50"
                }`}
              >
                3층
              </button>
              <button
                onClick={() => setSelectedFloor("4층")}
                className={`w-full px-5 py-4 border rounded-lg text-md transition-colors text-left ${
                  selectedFloor === "4층"
                    ? "border-[#D1D8DE] bg-main-100 text-white"
                    : "border-[#D1D8DE] text-gray-700 hover:bg-gray-50"
                }`}
              >
                4층
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-6">교시</h3>
            <div className="grid grid-cols-2 gap-2">
              {["8교시", "9교시", "10교시", "11교시"].map((classTime) => (
                <button
                  key={classTime}
                  onClick={() => setSelectedClass(classTime)}
                  className={`px-5 py-4 border rounded-lg text-md transition-colors ${
                    selectedClass === classTime
                      ? "border-[#D1D8DE] bg-main-100 text-white"
                      : "border-[#D1D8DE] text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {classTime}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-white rounded-2xl p-6">
          {selectedFloor ? (
            <>
              <div className="grid grid-cols-2 gap-4 flex-1">
                {getTablesByFloor(selectedFloor).map((table) => (
                  <button
                    key={table.name}
                    onClick={() => setSelectedTable(table.name)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedTable === table.name
                        ? "border-main-100 bg-blue-50"
                        : "border-[#E0E4E9] hover:border-[#D1D8DE]"
                    }`}
                  >
                    <p className={`font-semibold mb-1 ${selectedTable === table.name ? "text-main-100" : "text-gray-700"}`}>
                      {table.name}
                    </p>
                    <p className="text-xs text-[#999999]">{table.seats}인 4명</p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-[#999999] text-sm">층수를 먼저 선택해주세요.</p>
            </div>
          )}
        </div>

        <div className="w-80 flex items-center justify-center bg-white rounded-2xl">
          <div className="text-center">
            {selectedFloor ? (
              <div>
                <p className="text-gray-700 text-lg font-semibold">{selectedFloor}</p>
                {selectedClass && <p className="text-[#666666] text-sm mt-2">{selectedClass}</p>}
                {selectedTable && <p className="text-[#666666] text-sm">{selectedTable}</p>}
              </div>
            ) : (
              <p className="text-[#999999] text-sm">층수를 선택해주세요.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
