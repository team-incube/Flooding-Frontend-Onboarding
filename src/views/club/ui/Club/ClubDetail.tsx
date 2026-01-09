"use client";
import { useClubQuery } from "@/entities/club";
import { AddMemberModal, RemoveMemberModal, MemberList } from "@/features/club";
import Header from "@/widgets/header/ui";
import Link from "next/link";
import Plus from "@/shared/assets/icons/Plus";
import { useState } from "react";

interface ClubDetailProps {
  id: number;
}

export default function ClubDetail({ id }: ClubDetailProps) {
  const { data: club } = useClubQuery(id);
  const [showAdd, setShowAdd] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [targetMember, setTargetMember] = useState("");

  const handleRemove = (name: string) => {
    setTargetMember(name);
    setShowDelete(true);
  };

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
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">멤버</h2>
              <button
                onClick={() => setShowAdd(true)}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                <Plus />
                <span>멤버 초대</span>
              </button>
            </div>
            <MemberList members={club.members} onRemoveMember={handleRemove} />
          </div>
        </div>
      </div>

      <AddMemberModal
        isOpen={showAdd}
        onClose={() => setShowAdd(false)}
        club={club}
      />

      <RemoveMemberModal
        isOpen={showDelete}
        onClose={() => {
          setShowDelete(false);
          setTargetMember("");
        }}
        clubId={club.id}
        memberName={targetMember}
      />
    </div>
  );
}
