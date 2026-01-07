"use client";

import Header from "@/widgets/header/ui";
import Sidebar from "@/features/homebase/ui/Sidebar";
import Floor2Layout from "@/features/homebase/ui/Floor2";
import Floor3Layout from "@/features/homebase/ui/Floor3";
import Floor4Layout from "@/features/homebase/ui/Floor4";
import { useState, useEffect, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  fetchAppliedTables,
  saveTableSelection,
} from "@/features/homebase/actions/floorActions";
import { getTablesByFloor } from "@/features/homebase/lib/tableData";
import {
  isValidFloor,
  isValidClassTime,
} from "@/features/homebase/lib/constants";
import ApplicationBar from "@/features/homebase/ui/Applicationbar";

export default function HomebasePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleApplySuccess = (appliedTable: string) => {
    setDisabledTables((prev) =>
      prev.includes(appliedTable) ? prev : [...prev, appliedTable]
    );
    setShowApplicationBar(false);
  };

  const floor = useMemo(() => {
    const f = searchParams.get("floor");
    return f ? `${f}층` : null;
  }, [searchParams]);

  const time = useMemo(() => {
    const t = searchParams.get("time");
    return t ? `${t}교시` : null;
  }, [searchParams]);

  const table = useMemo(() => {
    const tb = searchParams.get("table");
    return tb ? `Table ${tb}` : null;
  }, [searchParams]);

  const [disabledTables, setDisabledTables] = useState<string[]>([]);
  const [showApplicationBar, setShowApplicationBar] = useState(false);

  // URL 업데이트
  const toUrlFormat = (
    floor: string | null,
    time: string | null,
    table: string | null
  ) => ({
    floor: floor ? floor.replace("층", "") : null,
    time: time ? time.replace("교시", "") : null,
    table: table ? table.replace("Table ", "") : null,
  });

  const updateUrl = (f: string | null, t: string | null, tb: string | null) => {
    const formatted = toUrlFormat(f, t, tb);
    const params = new URLSearchParams();
    if (formatted.floor) params.set("floor", formatted.floor);
    if (formatted.time) params.set("time", formatted.time);
    if (formatted.table) params.set("table", formatted.table);

    const queryString = params.toString();
    router.push(queryString ? `?${queryString}` : "/homebase");
  };

  const handleFloorChange = (newFloor: string) => {
    updateUrl(newFloor, time, null);
    setShowApplicationBar(false);
  };

  const handleTimeChange = (newTime: string) => {
    updateUrl(floor, newTime, table);
    setShowApplicationBar(false);
  };

  const handleTableChange = async (newTable: string) => {
    updateUrl(floor, time, newTable);
    setShowApplicationBar(true);

    if (floor && time && isValidFloor(floor) && isValidClassTime(time)) {
      await saveTableSelection(floor, time, newTable);
    }
  };

  useEffect(() => {
    if (!floor || !time) return;
    fetchAppliedTables(floor, time).then(setDisabledTables);
  }, [floor, time]);

  const maxPeople = useMemo(() => {
    if (!floor || !table) return 0;
    const tables = getTablesByFloor(floor);
    const found = tables.find((t) => t.name === table);
    return found?.seats ?? 0;
  }, [floor, table]);

  const handleCancelApplication = () => {
    setShowApplicationBar(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB]">
      <Header />
      <div className="min-h-[calc(100vh-118px)] flex items-center justify-center p-10">
        <div className="max-w-[1552px] w-full flex gap-8">
          <Sidebar
            floor={floor}
            time={time}
            onFloor={handleFloorChange}
            onTime={handleTimeChange}
          />
          <div className="flex-1 h-130 flex flex-col bg-white rounded-2xl p-6">
            {floor && time ? (
              <div className="flex gap-3 h-full">
                {floor === "2층" && (
                  <Floor2Layout
                    table={table}
                    onTable={handleTableChange}
                    disabledTables={disabledTables}
                  />
                )}
                {floor === "3층" && (
                  <Floor3Layout
                    table={table}
                    onTable={handleTableChange}
                    disabledTables={disabledTables}
                  />
                )}
                {floor === "4층" && (
                  <Floor4Layout
                    table={table}
                    onTable={handleTableChange}
                    disabledTables={disabledTables}
                  />
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-700 text-lg font-bold">
                  층수와 교시를 선택해주세요.
                </p>
              </div>
            )}
          </div>

          {showApplicationBar && floor && time && table ? (
            <ApplicationBar
              floor={floor}
              time={time}
              table={table}
              maxPeople={maxPeople}
              myName="1234 이름"
              onCancel={handleCancelApplication}
              onSuccess={() => handleApplySuccess(table)}
            />
          ) : (
            <div className="w-90 flex items-center justify-center bg-white rounded-2xl">
              <p className="text-gray-700 text-lg font-bold">
                테이블을 선택해주세요.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
