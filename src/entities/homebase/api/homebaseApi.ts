import axios from "axios";

interface SaveData {
  floor: string;
  classTime: string;
  table: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

export async function saveHomebaseData(data: SaveData) {
  const response = await axios.post(`${API_BASE_URL}/homebases`, {
    floor: data.floor,
    classTime: data.classTime,
    table: data.table,
    timestamp: new Date().toISOString(),
  });

  return response.data;
}
