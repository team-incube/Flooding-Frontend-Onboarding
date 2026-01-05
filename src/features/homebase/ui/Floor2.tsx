import React from "react";
import TableButton from "./TableButton";

interface Floor2Props {
  selectedTable: string | null;
  setSelectedTable: (table: string) => void;
}

export default function Floor2({
  selectedTable,
  setSelectedTable,
}: Floor2Props) {
  return (
    <>
      <div className="flex-1 flex flex-col gap-4">
        <TableButton
          name="Table 1"
          seats={6}
          isSelected={selectedTable === "Table 1"}
          onClick={() => setSelectedTable("Table 1")}
        />
      </div>
      <div className="w-8 bg-[#D1D8DE] rounded-lg"></div>
      <div className="flex-1 flex flex-col gap-4 h-full">
        <TableButton
          name="Table 2"
          seats={4}
          isSelected={selectedTable === "Table 2"}
          onClick={() => setSelectedTable("Table 2")}
        />
        <TableButton
          name="Table 3"
          seats={4}
          isSelected={selectedTable === "Table 3"}
          onClick={() => setSelectedTable("Table 3")}
        />
      </div>
    </>
  );
}
