import axios from "@/shared/api/axios";

interface SaveData {
  floor: string;
  classTime: string;
  table: string;
}

export async function saveHomebaseData(data: SaveData) {
  const response = await axios.post("/homebases", {
    floor: data.floor,
    classTime: data.classTime,
    table: data.table,
    timestamp: new Date().toISOString(),
  });

  return response.data;
}
