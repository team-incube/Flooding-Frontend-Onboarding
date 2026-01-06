"use client";

import Header from "@/widgets/header/ui";
import Sidebar from "@/features/homebase/ui/Sidebar";
import Floor2Layout from "@/features/homebase/ui/Floor2";
import Floor3Layout from "@/features/homebase/ui/Floor3";
import Floor4Layout from "@/features/homebase/ui/Floor4";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  isValidFloor,
  isValidClassTime,
} from "@/features/homebase/lib/constants";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export default function HomebasePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [floor, setFloor] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [table, setTable] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // URL 포맷 변환 함수
  const toUrlFormat = (
    floor: string | null,
    time: string | null,
    table: string | null
  ) => {
    return {
      floor: floor ? floor.replace("층", "") : null,
      time: time ? time.replace("교시", "") : null,
      table: table ? table.replace("Table ", "") : null,
    };
  };

  const fromUrlFormat = (
    floorNum: string | null,
    timeNum: string | null,
    tableNum: string | null
  ) => {
    return {
      floor: floorNum ? `${floorNum}층` : null,
      time: timeNum ? `${timeNum}교시` : null,
      table: tableNum ? `Table ${tableNum}` : null,
    };
  };

  // URL에서 초기값 로드
  useEffect(() => {
    const floorParam = searchParams.get("floor");
    const timeParam = searchParams.get("time");
    const tableParam = searchParams.get("table");

    const formatted = fromUrlFormat(floorParam, timeParam, tableParam);
    setFloor(formatted.floor);
    setTime(formatted.time);
    setTable(formatted.table);
    setIsLoaded(true);
  }, [searchParams]);

  // 층수 변경 (테이블 초기화)
  const handleFloorChange = (newFloor: string) => {
    setFloor(newFloor);
    setTable(null);
    updateUrl(newFloor, time, null);
  };

  // 교시 변경
  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
    updateUrl(floor, newTime, table);
  };

  // 테이블 저장 및 상태 변경
  const handleTableChange = async (newTable: string) => {
    setTable(newTable);
    updateUrl(floor, time, newTable);

    // 유효한 층수와 교시인 경우에만 저장
    if (isValidFloor(floor) && isValidClassTime(time)) {
      await saveTableSelection(floor, time, newTable);
    }
  };

  // 테이블 선택 저장 (Route Handler 호출)
  const saveTableSelection = async (
    floor: string,
    classTime: string,
    table: string
  ) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/homebase`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          floor,
          classTime,
          table,
        }),
      });

      if (!response.ok) {
        console.error("테이블 저장 실패:", response.statusText);
      }
    } catch (error) {
      console.error("테이블 저장 중 오류:", error);
    }
  };

  // URL 업데이트
  const updateUrl = (f: string | null, t: string | null, tb: string | null) => {
    const formatted = toUrlFormat(f, t, tb);
    const params = new URLSearchParams();
    if (formatted.floor) params.set("floor", formatted.floor);
    if (formatted.time) params.set("time", formatted.time);
    if (formatted.table) params.set("table", formatted.table);

    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : "/homebase");
  };

  if (!isLoaded) return null;
  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      <div className="max-w-375 mx-auto px-10 py-9 flex gap-8">
        <Sidebar
          floor={floor}
          time={time}
          onFloor={handleFloorChange}
          onTime={handleTimeChange}
        />
        {}
        <div className="flex-1 flex flex-col bg-white rounded-2xl p-6">
          {floor && time ? (
            <>
              <div className="flex gap-3 h-full">
                {floor === "2층" && (
                  <Floor2Layout table={table} onTable={handleTableChange} />
                )}
                {floor === "3층" && (
                  <Floor3Layout table={table} onTable={handleTableChange} />
                )}
                {floor === "4층" && (
                  <Floor4Layout table={table} onTable={handleTableChange} />
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
