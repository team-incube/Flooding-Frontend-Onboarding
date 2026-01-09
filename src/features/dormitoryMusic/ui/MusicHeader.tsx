"use client";

import { useState, useRef } from "react";
import { MusicSortType } from "../model/types";
import Warning from "@/shared/assets/icons/Warning";
import Music from "@/shared/assets/icons/Music";
import Clock from "@/shared/assets/icons/Clock";
import Dropdown from "@/shared/assets/icons/Dropdown";
import Entire from "@/shared/assets/icons/Entire";

interface Props {
    onDateChange: (date: string) => void;
    onSortChange: (sort: MusicSortType) => void;
}


export default function MusicHeader({ onDateChange, onSortChange }: Props){
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedSort, setSelectedSort] = useState<MusicSortType>("latest");
    
    const dateInputRef = useRef<HTMLInputElement>(null);

    const handleDateButtonClick = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker(); 
        }
    };

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <Music />
                <span className="font-semibold text-[24px]">기상음악 신청</span>
            </div>

            <div className="flex items-center gap-4">
                <button className="flex items-center justify-center gap-2">
                    <Warning />
                    <span className="text-[#A7A7A7] text-[20px]">공지사항</span>
                </button>

                <button 
                    onClick={handleDateButtonClick}
                    className="flex border border-[#5E7EF3] rounded-lg py-2 px-3 gap-3 items-center"
                >
                    <span className="text-[#5E7EF3]">
                        {selectedDate || "날짜"}
                    </span>
                    <Clock />
                    <input
                        ref={dateInputRef}
                        type="date"
                        className="absolute opacity-0 w-0 h-0" 
                        onChange={(e) => {
                            setSelectedDate(e.target.value);
                            onDateChange(e.target.value);
                        }}
                    />
                </button>

                <div className="relative">
                    <button
                        onClick={() => setIsSortOpen((prev) => !prev)}
                        className="flex justify-between w-[123px] border border-[#5E7EF3] rounded-lg py-2 px-3"
                    >
                        <span className="text-[#5E7EF3]">
                        {selectedSort === "latest"
                            ? "최신순"
                            : selectedSort === "popular"
                            ? "인기순"
                            : "오래된순"}
                        </span>
                        <Dropdown />
                    </button>

                    {isSortOpen && (
                        <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow">
                        {[
                            { label: "최신순", value: "latest" },
                            { label: "인기순", value: "popular" },
                            { label: "오래된순", value: "oldest" },
                        ].map((item) => (
                            <button
                            key={item.value}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100"
                            onClick={() => {
                                setSelectedSort(item.value as MusicSortType);
                                onSortChange(item.value as MusicSortType);
                                setIsSortOpen(false);
                            }}
                            >
                            {item.label}
                            </button>
                        ))}
                        </div>
                    )}
                </div>
                <button className="flex border border-[#5E7EF3] rounded-lg py-2 px-3 gap-3">
                    <span className="text-[#5E7EF3]">전체 보기</span>
                    <Entire />
                </button>
            </div>
        </div>
    )
}