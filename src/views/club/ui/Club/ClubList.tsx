"use client";

import { useClubsQuery } from "@/entities/club";
import Header from "@/widgets/header/ui";
import Link from "next/link";
import type { ClubData } from "@/shared/types/club/type";

export default function ClubList() {
  const { data: clubs } = useClubsQuery();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-375 mx-auto px-10 py-9">
        <div className="bg-white rounded-2xl p-7">
          <h1 className="text-3xl font-bold mb-6">동아리</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clubs?.map((club: ClubData) => (
              <Link
                key={club.id}
                href={`/clubs/${club.id}`}
                className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{club.name}</h2>
                <p className="text-gray-800 text-sm line-clamp-2">
                  {club.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
