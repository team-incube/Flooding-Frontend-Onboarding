"use client";
import { useClubQuery } from "@/entities/club";

interface ClubDetailProps {
  id: number;
}

export default function ClubDetail({ id }: ClubDetailProps) {
  const { data: club } = useClubQuery(id);

  if (!club) {
    return <div>동아리를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{club.name}</h1>
      <p className="text-gray-600 mb-6">{club.description}</p>
      <div>
        <h2 className="text-xl font-semibold mb-2">멤버</h2>
        {club.members.length > 0 ? (
          <ul className="list-disc list-inside">
            {club.members.map((member: string, index: number) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">멤버가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
