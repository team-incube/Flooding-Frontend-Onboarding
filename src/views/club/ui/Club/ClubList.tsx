"use client";

import { useState, useMemo } from "react";
import { useClubsQuery } from "@/entities/club";
import Header from "@/widgets/header/ui";
import Link from "next/link";
import type { ClubData } from "@/shared/types/club/type";
import CreateClubModal from "@/features/club/ui/CreateClubModal";

export default function ClubList() {
  const { data: clubs, refetch } = useClubsQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const clubList = useMemo(() => {
    if (!clubs) return [];
    return clubs.map((club) => ({
      ...club,
      id: club.id.toString(),
    }));
  }, [clubs]);

  const handleClubCreation = async () => {
    await refetch(); // 최신 목록 갱신
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-375 mx-auto px-10 py-9">
        <div className="bg-white rounded-2xl p-7">
          <h1 className="text-3xl font-bold mb-6">동아리</h1>
          
          <button
            onClick={openModal}
            className="mb-6 px-6 py-3 bg-[#1866E1] cursor-pointer text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            동아리 생성하기
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clubList?.map((club: ClubData) => (
              <Link
                key={club.id}
                href={`/clubs/${club.id}`}
                className="bg-gray-50 rounded-xl p-5"
              >
                <h2 className="text-xl font-semibold mb-2">{club.name}</h2>
                <p className="text-gray-800 text-sm line-clamp-2">
                  {club.description}
                </p>
                {club.category && (
                  <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {club.category}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <CreateClubModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSuccess={handleClubCreation}
      />
    </div>
  );
}
