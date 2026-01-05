import React from "react";
import TableButton from "./TableButton";

interface Floor4Props {
  selectedTable: string | null;
  setSelectedTable: (table: string) => void;
}

export default function Floor4({
  selectedTable,
  setSelectedTable,
}: Floor4Props) {
  return (
    <div className="flex flex-col gap-4 h-full flex-1">
      <div className="flex gap-3 flex-1 h-full">
        <TableButton
          name="Table 1"
          seats={4}
          isSelected={selectedTable === "Table 1"}
          onClick={() => setSelectedTable("Table 1")}
        />
        <div className="w-8 bg-[#D1D8DE] rounded-lg"></div>
        <TableButton
          name="Table 2"
          seats={4}
          isSelected={selectedTable === "Table 2"}
          onClick={() => setSelectedTable("Table 2")}
        />
      </div>
      <div className="flex gap-3 flex-1 h-full">
        <TableButton
          name="Table 3"
          seats={6}
          isSelected={selectedTable === "Table 3"}
          onClick={() => setSelectedTable("Table 3")}
          flexClass="flex-[1.2]"
        />
        <TableButton
          name="Table 4"
          seats={4}
          isSelected={selectedTable === "Table 4"}
          onClick={() => setSelectedTable("Table 4")}
        />
      </div>
    </div>
  );
}
