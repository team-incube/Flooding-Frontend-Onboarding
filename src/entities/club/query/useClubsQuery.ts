import { useQuery } from "@tanstack/react-query";
import { fetchClubs } from "@/entities/club/api/clubApi";

export function useClubsQuery() {
  return useQuery({
    queryKey: ["clubs"],
    queryFn: fetchClubs,
  });
}
