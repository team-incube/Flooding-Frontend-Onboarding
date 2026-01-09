import { useQuery } from "@tanstack/react-query";
import { fetchStudents } from "@/entities/student/api/studentApi";

export function useStudentsQuery() {
  return useQuery({
    queryKey: ["students"],
    queryFn: fetchStudents,
  });
}
