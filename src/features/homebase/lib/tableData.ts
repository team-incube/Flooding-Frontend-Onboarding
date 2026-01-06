export type Table = {
  name: string;
  seats: number;
};

export type FloorTables = {
  [key: string]: Table[];
};

export const FLOOR_TABLES: FloorTables = {
  "2층": [
    { name: "Table 1", seats: 6 },
    { name: "Table 2", seats: 4 },
    { name: "Table 3", seats: 4 },
  ],
  "3층": [
    { name: "Table 1", seats: 4 },
    { name: "Table 2", seats: 4 },
    { name: "Table 3", seats: 6 },
    { name: "Table 4", seats: 4 },
    { name: "Table 5", seats: 6 },
  ],
  "4층": [
    { name: "Table 1", seats: 4 },
    { name: "Table 2", seats: 4 },
    { name: "Table 3", seats: 6 },
    { name: "Table 4", seats: 4 },
  ],
};

export const getTablesByFloor = (floor: string): Table[] => {
  return FLOOR_TABLES[floor] || [];
};
