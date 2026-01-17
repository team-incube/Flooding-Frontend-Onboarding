import axios from "@/shared/api/axios";
import type { Music } from "@/features/dormitoryMusic/model/types";

export async function fetchMusics(sort: string) {
  let params: Record<string, string> = {};

  if (sort === "popular") params = { _sort: "-likes" };
  if (sort === "latest") params = { _sort: "id" };
  if (sort === "oldest") params = { _sort: "-id" };

  const { data } = await axios.get<Music[]>("/musics", { params });
  return data;
}

export async function toggleLike(music: Music) {
  const { data } = await axios.patch<Music>(`/musics/${music.id}`, {
    likes: music.liked ? Math.max(0, music.likes - 1) : music.likes + 1,
    liked: !music.liked,
  });
  return data;
}

export async function createMusic(title: string) {
  const { data } = await axios.post<Music>("/musics", {
    title,
    artist: "익명",
    likes: 0,
    liked: false,
  });
  return data;
}
