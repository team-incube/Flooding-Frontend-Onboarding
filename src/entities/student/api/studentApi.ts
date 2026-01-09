import axios from "axios";
import type { StudentData } from "@/shared/types/student/type";

export async function fetchStudents() {
  const { data } = await axios.get<StudentData[]>(
    "http://localhost:3001/students"
  );
  return data;
}
