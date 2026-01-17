"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchMusics } from "@/entities/music/api/musicApi";
import { Music } from "../model/types";
import MusicItem from "./MusicItem";

interface Props {
  date: string;
  sort: string;
}

export default function MusicList({ date, sort }: Props) {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<Music[]>({
    queryKey: ["musicList", date, sort],
    queryFn: () => fetchMusics(sort),
  });

  if (isLoading)
    return (
      <div className="h-[352px] flex items-center justify-center bg-white rounded-lg">
        데이터 로드 중...
      </div>
    );
  if (isError)
    return (
      <div className="h-[352px] flex items-center justify-center bg-white rounded-lg text-red-500">
        서버 연결 실패
      </div>
    );

  return (
    <div className="flex flex-col h-[352px] bg-white rounded-lg overflow-y-auto">
      {data.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-400">
          신청된 음악이 없습니다.
        </div>
      ) : (
        data.map((music) => <MusicItem key={music.id} music={music} />)
      )}
    </div>
  );
}
