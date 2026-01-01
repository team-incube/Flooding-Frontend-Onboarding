"use client";

import { useClubsQuery } from "@/entities/club";

export default function ClubList() {
  const { data: clubs } = useClubsQuery();

  return (
    <div>
      <div>
        <p className="text-3xl font-bold">동아리</p>
      </div>
      <div>
        {clubs?.map((club) => (
          <div key={club.id}>
            <h2>{club.name}</h2>
            <p>{club.description}</p>
            <p>{club.members}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
