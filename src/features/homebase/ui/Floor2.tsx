import React from "react";
import TableButton from "./TableButton";

interface Floor2Props {
  floor: string;
  classTime: string;
  table: string | null;
  onTable: (table: string) => void;
}

export default function Floor2({
  floor,
  classTime,
  table,
  onTable,
}: Floor2Props) {
  return (
    <>
      <div className="flex-1 flex flex-col gap-4">
        <TableButton
          name="Table 1"
          seats={6}
          isSelected={table === "Table 1"}
          floor={floor}
          classTime={classTime}
          onClick={() => onTable("Table 1")}
        />
      </div>
      <div className="w-8 bg-[#D1D8DE] rounded-lg"></div>
      <div className="flex-1 flex flex-col gap-4 h-full">
        <TableButton
          name="Table 2"
          seats={4}
          isSelected={table === "Table 2"}
          floor={floor}
          classTime={classTime}
          onClick={() => onTable("Table 2")}
        />
        <TableButton
          name="Table 3"
          seats={4}
          isSelected={table === "Table 3"}
          floor={floor}
          classTime={classTime}
          onClick={() => onTable("Table 3")}
        />
      </div>
    </>
  );
}
