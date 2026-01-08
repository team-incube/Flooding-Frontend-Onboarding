"use client";

import { useQuery } from "@tanstack/react-query";
import { Music } from "../model/types";
import MusicItem from "./MusicItem";

interface Props {
    date: string;
    sort: string;
}

export default function MusicList({ date, sort }: Props) {
    const { data = [], isLoading, isError } = useQuery<Music[]>({
    queryKey: ["musicList", sort], 
    queryFn: async () => {
        let url = `http://127.0.0.1:3001/musics`;
        
        if (sort === "popular") {
            url += `?_sort=-likes`; 
        } else if (sort === "latest") {
            url += `?_sort=-id`;
        } else if (sort === "oldest") {
            url += `?_sort=id`;
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error("데이터를 가져오는 데 실패했습니다.");
        return res.json();
    },
    });

    if (isLoading) return <div className="h-[352px] flex items-center justify-center bg-white rounded-lg">데이터 로드 중...</div>;
    if (isError) return <div className="h-[352px] flex items-center justify-center bg-white rounded-lg text-red-500">서버 연결 실패</div>;

    return (
        <div className="flex flex-col h-[352px] bg-white rounded-lg overflow-y-auto">
            {data.length === 0 ? (
                <div className="flex items-center justify-center h-full text-gray-400">신청된 음악이 없습니다.</div>
            ) : (
                data.map((music) => <MusicItem key={music.id} music={music} />)
            )}
        </div>
    );
}