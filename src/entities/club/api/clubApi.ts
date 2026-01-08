import axios from "axios";
import type { ClubData } from "@/shared/types/club/type";

export async function fetchClubs() {
  const { data } = await axios.get<ClubData[]>("http://localhost:3001/clubs");
  return data;
}

export async function fetchClubById(id: number) {
  const { data } = await axios.get<ClubData>(
    `http://localhost:3001/clubs/${id}`
  );
  return data;
}

// 새 동아리 생성
export async function createClub(newClub: ClubData) {
  const { data } = await axios.post<ClubData>("http://localhost:3001/clubs", newClub);
  return data;
}