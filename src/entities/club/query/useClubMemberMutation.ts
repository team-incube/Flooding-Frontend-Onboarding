import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMember, removeMember } from "@/entities/club/api/clubApi";

export function useAddMemberMutation(clubId: number | string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (memberName: string) => addMember(clubId, memberName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["club", clubId] });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
  });
}

export function useRemoveMemberMutation(clubId: number | string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (memberName: string) => removeMember(clubId, memberName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["club", clubId] });
      queryClient.invalidateQueries({ queryKey: ["clubs"] });
    },
  });
}
