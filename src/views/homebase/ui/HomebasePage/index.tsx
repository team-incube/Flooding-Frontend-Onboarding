"use client";

import Header from "@/widgets/header/ui";
import { getTablesByFloor } from "@/features/homebase/lib/tableData";
import Floor2Layout from "@/features/homebase/ui/Floor2";
import Floor3Layout from "@/features/homebase/ui/Floor3";
import Floor4Layout from "@/features/homebase/ui/Floor4";
import { useState } from "react";

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
                className={`w-full px-4 py-3 border rounded-lg text-base transition-colors text-left cursor-pointer ${
                  selectedFloor === "2층"
                    ? "border-[#D1D8DE] bg-main-100 text-white"
                    : "border-[#D1D8DE] text-gray-700 hover:bg-gray-50"
                }`}
              >
                2층
              </button>
              <button
                onClick={() => setSelectedFloor("3층")}
                className={`w-full px-4 py-3 border rounded-lg text-base transition-colors text-left cursor-pointer ${
                  selectedFloor === "3층"
                    ? "border-[#D1D8DE] bg-main-100 text-white"
                    : "border-[#D1D8DE] text-gray-700 hover:bg-gray-50"
                }`}
              >
                3층
              </button>
              <button
                onClick={() => setSelectedFloor("4층")}
                className={`w-full px-4 py-3 border rounded-lg text-base transition-colors text-left cursor-pointer ${
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
            <h3 className="text-xl font-semibold text-gray-700 mb-5">교시</h3>
            <div className="grid grid-cols-2 gap-5">
              {["8교시", "9교시", "10교시", "11교시"].map((classTime) => (
                <button
                  key={classTime}
                  onClick={() => setSelectedClass(classTime)}
                  className={`px-4 py-3 border rounded-lg text-base transition-colors  text-left cursor-pointer ${
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
        {}
        <div className="flex-1 flex flex-col bg-white rounded-2xl p-6">
          {selectedFloor && selectedClass ? (
            <>
              <div className="flex gap-3 h-full">
                {selectedFloor === "2층" && (
                  <Floor2Layout
                    selectedTable={selectedTable}
                    setSelectedTable={setSelectedTable}
                  />
                )}
                {selectedFloor === "3층" && (
                  <Floor3Layout
                    selectedTable={selectedTable}
                    setSelectedTable={setSelectedTable}
                  />
                )}
                {selectedFloor === "4층" && (
                  <Floor4Layout
                    selectedTable={selectedTable}
                    setSelectedTable={setSelectedTable}
                  />
                )}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-700 text-lg font-bold">
                층수와 교시를 선택해주세요.
              </p>
            </div>
          )}
        </div>
        {}
        <div className="w-80 flex items-center justify-center bg-white rounded-2xl">
          <p className="text-gray-700 text-lg font-bold">
            테이블을 선택해주세요.
          </p>
        </div>
      </div>
    </div>
  );
}
