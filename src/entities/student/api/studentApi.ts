import axios from "@/shared/api/axios";
import type { StudentData } from "../model/types";

export async function fetchStudents() {
  const { data } = await axios.get<StudentData[]>("/students");
  return data;
}
