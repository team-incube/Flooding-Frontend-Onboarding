import React from "react";
import TableButton from "./TableButton";

interface Floor3Props {
  selectedTable: string | null;
  setSelectedTable: (table: string) => void;
}

export default function Floor3({
  selectedTable,
  setSelectedTable,
}: Floor3Props) {
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
      <div className="flex gap-4 flex-1 h-full">
        <TableButton
          name="Table 3"
          seats={6}
          isSelected={selectedTable === "Table 3"}
          onClick={() => setSelectedTable("Table 3")}
        />
        <TableButton
          name="Table 4"
          seats={4}
          isSelected={selectedTable === "Table 4"}
          onClick={() => setSelectedTable("Table 4")}
        />
        <TableButton
          name="Table 5"
          seats={6}
          isSelected={selectedTable === "Table 5"}
          onClick={() => setSelectedTable("Table 5")}
        />
      </div>
    </div>
  );
}
