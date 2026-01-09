"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function MusicInput() {
    const [title, setTitle] = useState("");
    const queryClient = useQueryClient();

    const addMusicMutation = useMutation({
        mutationFn: async (newTitle: string) => {
            const res = await fetch("http://localhost:3001/musics", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title: newTitle,
                    artist: "익명", 
                    likes: 0,
                }),
            });
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["musicList"] });
            setTitle("");
        },
    });

    return (
        <div className="flex gap-4 h-[56px]">
            <input
                type="text"
                placeholder="신청할 곡 제목을 입력해주세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-white rounded-lg text-[20px] px-3 focus:outline-none shadow-sm"
            />
            <button
                onClick={() => title && addMusicMutation.mutate(title)}
                disabled={addMusicMutation.isPending}
                className="bg-[#5E7EF3] text-white text-[20px] font-semibold w-[390px] rounded-lg hover:bg-[#4A6EE0] transition-colors"
            >
                {addMusicMutation.isPending ? "등록 중..." : "등록하기"}
            </button>
        </div>
    );
}