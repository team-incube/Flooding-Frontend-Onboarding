export const FLOORS = ["2층", "3층", "4층"];
export const CLASS_TIMES = ["8교시", "9교시", "10교시", "11교시"];

export const isValidFloor = (floor: string | null): boolean => {
  return FLOORS.includes(floor || "");
};

export const isValidClassTime = (classTime: string | null): boolean => {
  return CLASS_TIMES.includes(classTime || "");
};
