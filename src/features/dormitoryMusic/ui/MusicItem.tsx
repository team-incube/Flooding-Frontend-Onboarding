"use client";

import { Music } from "../model/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface Props {
    music: Music;
}

export default function MusicItem({ music }: Props) {
    const queryClient = useQueryClient();

    const likeMutation = useMutation({
        mutationFn: async () => {
        const res = await fetch(`http://localhost:3001/musics/${music.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            likes: music.liked ? Math.max(0, music.likes - 1) : music.likes + 1,
            liked: !music.liked,
            }),
        });
        return res.json();
        },
        onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["musicList"] });
        },
    });

    return (
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
        <div className="flex flex-col gap-1">
            <p className="font-semibold text-[18px] text-[#333]">{music.title}</p>
            <span className="text-[14px] text-gray-500">{music.artist}</span>
        </div>

        <button
            onClick={() => likeMutation.mutate()}
            disabled={likeMutation.isPending}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all
            ${
                music.liked
                ? "bg-red-100 text-red-500"
                : "bg-gray-50 hover:bg-[#FFEBEB] text-[#A7A7A7] hover:text-[#FF5E5E]"
            }`}
        >
            <span>{music.liked ? "❤️" : "🤍"}</span>
            <span className="font-bold">{music.likes}</span>
        </button>
        </div>
    );
}
