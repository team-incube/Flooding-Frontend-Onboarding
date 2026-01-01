import axios from "axios";
import type { ClubData } from "@/shared/types/club/type";

export async function fetchClubs() {
  const { data } = await axios.get<ClubData[]>("http://localhost:3001/clubs");
  return data;
}
