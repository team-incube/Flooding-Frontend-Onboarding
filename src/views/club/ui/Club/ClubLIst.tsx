"use client";

import { useClubsQuery } from "@/entities/club";
import Header from "@/widgets/header/ui";
import Link from "next/link";
import type { ClubData } from "@/shared/types/club/type";

export default function ClubList() {
  const { data: clubs } = useClubsQuery();

  return (
    <div>
      <Header />
      <div>
        <p className="text-3xl font-bold">동아리</p>
      </div>
      <div>
        {clubs?.map((club: ClubData) => (
          <div key={club.id}>
            <p className="text-xl font-semibold">
              <Link href={`/clubs/${club.id}`}>{club.name}</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
