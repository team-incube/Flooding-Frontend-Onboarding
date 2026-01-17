import axios from "@/shared/api/axios";
import type { ClubData } from "../model/types";
import type { StudentData } from "../../student/model/types";

export async function fetchClubs() {
  const { data } = await axios.get<ClubData[]>("/clubs");
  return data;
}

export async function fetchClubById(id: number | string) {
  const { data } = await axios.get<ClubData>(`/clubs/${id}`);
  return data;
}

export async function createClub(newClub: ClubData) {
  const { data } = await axios.post<ClubData>("/clubs", newClub);
  return data;
}

export async function addMember(clubId: number | string, memberName: string) {
  const { data: students } = await axios.get<StudentData[]>("/students");

  const student = students.find((s) => s.name === memberName);
  if (!student) {
    throw new Error(`'${memberName}'은(는) 등록된 학생이 아닙니다.`);
  }

  const club = await fetchClubById(clubId);

  if (club.members.includes(memberName)) {
    throw new Error(`'${memberName}'은(는) 이미 동아리 멤버입니다.`);
  }

  const updatedClub = {
    ...club,
    id: Number(club.id),
    members: [...club.members, memberName],
  };
  const { data } = await axios.put<ClubData>(`/clubs/${clubId}`, updatedClub);
  return data;
}

export async function removeMember(
  clubId: number | string,
  memberName: string,
) {
  const club = await fetchClubById(clubId);
  const updatedClub = {
    ...club,
    id: Number(club.id),
    members: club.members.filter((member) => member !== memberName),
  };
  const { data } = await axios.put<ClubData>(`/clubs/${clubId}`, updatedClub);
  return data;
}
