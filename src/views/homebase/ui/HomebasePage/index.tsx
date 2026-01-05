"use client";

import Header from "@/widgets/header/ui";
import { getTablesByFloor } from "@/features/homebase/lib/tableData";
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
                {selectedFloor === "2층" ? (
                  <>
                    <div className="flex-1 flex flex-col gap-4">
                      <button
                        onClick={() => setSelectedTable("Table 1")}
                        className={`flex-1 p-5 rounded-xl border-1 text-left h-full flex flex-col justify-start cursor-pointer ${
                          selectedTable === "Table 1"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9] "
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 1" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 1
                        </p>
                        <p className="text-sm text-[#999999]">최대 6명</p>
                      </button>
                    </div>
                    <div className="w-8 bg-[#D1D8DE] rounded-lg"></div>
                    <div className="flex-1 flex flex-col gap-4 h-full">
                      <button
                        onClick={() => setSelectedTable("Table 2")}
                        className={`flex-1 p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer ${
                          selectedTable === "Table 2"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#D1D8DE]"
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 2" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 2
                        </p>
                        <p className="text-sm text-[#999999]">최대 4명</p>
                      </button>
                      <button
                        onClick={() => setSelectedTable("Table 3")}
                        className={`flex-1 p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer ${
                          selectedTable === "Table 3"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9] "
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 3" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 3
                        </p>
                        <p className="text-sm text-[#999999]">최대 4명</p>
                      </button>
                    </div>
                  </>
                ) : selectedFloor === "3층" ? (
                  <div className="flex flex-col gap-4 h-full flex-1">
                    <div className="flex gap-3 flex-1 h-full">
                      <button
                        onClick={() => setSelectedTable("Table 1")}
                        className={`flex-1 p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer ${
                          selectedTable === "Table 1"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9] "
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 1" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 1
                        </p>
                        <p className="text-sm text-[#999999]">최대 4명</p>
                      </button>
                      <div className="w-8 bg-[#D1D8DE] rounded-lg"></div>
                      <button
                        onClick={() => setSelectedTable("Table 2")}
                        className={`flex-1 p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer cursor-pointer ${
                          selectedTable === "Table 2"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9] "
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 2" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 2
                        </p>
                        <p className="text-sm text-[#999999]">최대 4명</p>
                      </button>
                    </div>
                    <div className="flex gap-4 flex-1 h-full">
                      <button
                        onClick={() => setSelectedTable("Table 3")}
                        className={`flex-1 p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer cursor-pointer ${
                          selectedTable === "Table 3"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9]"
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 3" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 3
                        </p>
                        <p className="text-sm text-[#999999]">최대 6명</p>
                      </button>
                      <button
                        onClick={() => setSelectedTable("Table 4")}
                        className={`flex-1 p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer cursor-pointer ${
                          selectedTable === "Table 4"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9] "
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 4" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 4
                        </p>
                        <p className="text-sm text-[#999999]">최대 4명</p>
                      </button>
                      <button
                        onClick={() => setSelectedTable("Table 5")}
                        className={`flex-1 p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer cursor-pointer ${
                          selectedTable === "Table 5"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9] "
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 5" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 5
                        </p>
                        <p className="text-sm text-[#999999]">최대 6명</p>
                      </button>
                    </div>
                  </div>
                ) : selectedFloor === "4층" ? (
                  <div className="flex flex-col gap-4 h-full flex-1">
                    <div className="flex gap-3 flex-1 h-full">
                      <button
                        onClick={() => setSelectedTable("Table 1")}
                        className={`flex-1 p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer ${
                          selectedTable === "Table 1"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9]"
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 1" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 1
                        </p>
                        <p className="text-sm text-[#999999]">최대 4명</p>
                      </button>
                      <div className="w-8 bg-[#D1D8DE] rounded-lg"></div>
                      <button
                        onClick={() => setSelectedTable("Table 2")}
                        className={`flex-1 p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer cursor-pointer ${
                          selectedTable === "Table 2"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9] "
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 2" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 2
                        </p>
                        <p className="text-sm text-[#999999]">최대 4명</p>
                      </button>
                    </div>
                    <div className="flex gap-3 flex-1 h-full">
                      <button
                        onClick={() => setSelectedTable("Table 3")}
                        className={`flex-[1.2] p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer cursor-pointer ${
                          selectedTable === "Table 3"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9] "
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 3" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 3
                        </p>
                        <p className="text-sm text-[#999999]">최대 6명</p>
                      </button>
                      <button
                        onClick={() => setSelectedTable("Table 4")}
                        className={`flex-1 p-5 rounded-xl border-1 flex flex-col items-start justify-start cursor-pointer cursor-pointer ${
                          selectedTable === "Table 4"
                            ? "border-main-100 bg-blue-50"
                            : "border-[#E0E4E9] "
                        }`}
                      >
                        <p
                          className={`font-semibold mb-1 text-lg ${selectedTable === "Table 4" ? "text-gray-700" : "text-gray-700"}`}
                        >
                          Table 4
                        </p>
                        <p className="text-sm text-[#999999]">최대 4명</p>
                      </button>
                    </div>
                  </div>
                ) : (
                  getTablesByFloor(selectedFloor).map((table) => (
                    <button
                      key={table.name}
                      onClick={() => setSelectedTable(table.name)}
                      className={`flex-1 p-4 rounded-lg border-1 flex flex-col items-start justify-start cursor-pointer ${
                        selectedTable === table.name
                          ? "border-main-100 bg-blue-50"
                          : "border-[#E0E4E9] "
                      }`}
                    >
                      <p
                        className={`font-semibold mb-1 ${selectedTable === table.name ? "text-gray-700" : "text-gray-700"}`}
                      >
                        {table.name}
                      </p>
                      <p className="text-xs text-[#999999]">
                        최대 {table.seats}명
                      </p>
                    </button>
                  ))
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
