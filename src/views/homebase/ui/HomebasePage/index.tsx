"use client";

import Header from "@/widgets/header/ui";
import Sidebar from "@/features/homebase/ui/Sidebar";
import Floor2Layout from "@/features/homebase/ui/Floor2";
import Floor3Layout from "@/features/homebase/ui/Floor3";
import Floor4Layout from "@/features/homebase/ui/Floor4";
import { useState } from "react";

export default function HomebasePage() {
  const [floor, setFloor] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [table, setTable] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      <div className="max-w-375 mx-auto px-10 py-9 flex gap-8">
        <Sidebar
          floor={floor}
          time={time}
          onFloor={setFloor}
          onTime={setTime}
        />
        {}
        <div className="flex-1 flex flex-col bg-white rounded-2xl p-6">
          {floor && time ? (
            <>
              <div className="flex gap-3 h-full">
                {floor === "2층" && (
                  <Floor2Layout
                    table={table}
                    onTable={setTable}
                  />
                )}
                {floor === "3층" && (
                  <Floor3Layout
                    table={table}
                    onTable={setTable}
                  />
                )}
                {floor === "4층" && (
                  <Floor4Layout
                    table={table}
                    onTable={setTable}
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
