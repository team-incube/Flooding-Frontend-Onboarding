import React from "react";
import TableButton from "./TableButton";

interface Floor3Props {
  floor: string;
  classTime: string;
  table: string | null;
  onTable: (table: string) => void;
}

export default function Floor3({
  floor,
  classTime,
  table,
  onTable,
}: Floor3Props) {
  return (
    <div className="flex flex-col gap-4 h-full flex-1">
      <div className="flex gap-3 flex-1 h-full">
        <TableButton
          name="Table 1"
          seats={4}
          isSelected={table === "Table 1"}
          floor={floor}
          classTime={classTime}
          onClick={() => onTable("Table 1")}
        />
        <div className="w-8 bg-[#D1D8DE] rounded-lg"></div>
        <TableButton
          name="Table 2"
          seats={4}
          isSelected={table === "Table 2"}
          floor={floor}
          classTime={classTime}
          onClick={() => onTable("Table 2")}
        />
      </div>
      <div className="flex gap-4 flex-1 h-full">
        <TableButton
          name="Table 3"
          seats={6}
          isSelected={table === "Table 3"}
          floor={floor}
          classTime={classTime}
          onClick={() => onTable("Table 3")}
        />
        <TableButton
          name="Table 4"
          seats={4}
          isSelected={table === "Table 4"}
          floor={floor}
          classTime={classTime}
          onClick={() => onTable("Table 4")}
        />
        <TableButton
          name="Table 5"
          seats={6}
          isSelected={table === "Table 5"}
          floor={floor}
          classTime={classTime}
          onClick={() => onTable("Table 5")}
        />
      </div>
    </div>
  );
}
