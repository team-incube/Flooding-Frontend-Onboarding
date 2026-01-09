"use client";

import { useState } from "react";
import MusicHeader from "./MusicHeader";
import MusicList from "./MusicList";
import MusicInput from "./MusicInput";
import { MusicSortType } from "../model/types";

export default function DormitoryMusicSection() {
    const [date, setDate] = useState<string>("");
    const [sort, setSort] = useState<MusicSortType>("latest");

    return (
        <div className="flex flex-col gap-6">
            <MusicHeader 
                onDateChange={(date) => setDate(date)}
                onSortChange={(sort) => setSort(sort)}
            />
            <MusicList date={date} sort={sort} />
            <MusicInput />
        </div>
    );
}