export type MusicSortType = "latest" | "popular" | "oldest";

export interface Music {
    id: number;
    title: string;
    artist: string;
    likes: number;
    liked?: boolean; 
}