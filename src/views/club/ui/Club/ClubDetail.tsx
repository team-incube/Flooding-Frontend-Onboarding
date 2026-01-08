"use client";
import { useClubQuery } from "@/entities/club";
import Header from "@/widgets/header/ui";
import Link from "next/link";

interface ClubDetailProps {
  id: number;
}

export default function ClubDetail({ id }: ClubDetailProps) {
  const { data: club } = useClubQuery(id);

  if (!club) {
    return <div>동아리를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-375 mx-auto px-10 py-9">
        <div className="bg-white rounded-2xl p-6">
          <div className="mb-4">
            <Link
              href="/club"
              className="text-gray-600 text-lg font-semibold mb-4 inline-block"
            >
              목록으로
            </Link>
          </div>
          <h1 className="text-3xl font-bold mb-4">{club.name}</h1>
          <div className="bg-gray-50 rounded-xl p-5 mb-6">
            <p className="text-gray-800">{club.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">멤버</h2>
            {club.members.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {club.members.map((member: string, index: number) => (
                  <div key={index} className="bg-gray-50 rounded-lg px-4 py-2">
                    <span className="text-gray-800">{member}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">멤버가 없습니다.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
