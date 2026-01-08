import { useQuery } from "@tanstack/react-query";
import { fetchClubById } from "@/entities/club/api/clubApi";

export function useClubQuery(id: number) {
  return useQuery({
    queryKey: ["club", id],
    queryFn: () => fetchClubById(id),
  });
}
