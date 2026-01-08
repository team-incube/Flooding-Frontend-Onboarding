import React from "react";
import TableButton from "./TableButton";

interface Floor4Props {
  table: string | null;
  onTable: (table: string) => void;
  disabledTables: string[];
}

export default function Floor4({
  table,
  onTable,
  disabledTables,
}: Floor4Props) {
  return (
    <div className="flex flex-col gap-4 h-full flex-1">
      <div className="flex gap-3 flex-1 h-full">
        <TableButton
          name="Table 1"
          seats={4}
          isSelected={table === "Table 1"}
          disabled={disabledTables.includes("Table 1")}
          onClick={() => onTable("Table 1")}
        />
        <div className="w-8 bg-[#D1D8DE] rounded-lg"></div>
        <TableButton
          name="Table 2"
          seats={4}
          isSelected={table === "Table 2"}
          disabled={disabledTables.includes("Table 2")}
          onClick={() => onTable("Table 2")}
        />
      </div>

      <div className="flex gap-3 flex-1 h-full">
        <TableButton
          name="Table 3"
          seats={6}
          isSelected={table === "Table 3"}
          disabled={disabledTables.includes("Table 3")}
          onClick={() => onTable("Table 3")}
          flexClass="flex-[1.2]"
        />
        <TableButton
          name="Table 4"
          seats={4}
          isSelected={table === "Table 4"}
          disabled={disabledTables.includes("Table 4")}
          onClick={() => onTable("Table 4")}
        />
      </div>
    </div>
  );
}
