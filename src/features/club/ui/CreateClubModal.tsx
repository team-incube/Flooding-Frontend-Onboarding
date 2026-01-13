"use client";

import { useState } from "react";
import ClubImage from "./ClubImage";
import ClubChoice from "./ClubChoice";
import { ClubData, createClub } from "@/entities/club";

interface CreateClubModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (newClub: ClubData) => void;
}

export default function CreateClubModal({
  isOpen,
  onClose,
  onSuccess,
}: CreateClubModalProps) {
  const [image, setImage] = useState("/default-image.png");
  const [clubName, setClubName] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const [clubCategory, setClubCategory] = useState("");

  if (!isOpen) return null;

  const handleCreate = async () => {
    if (!clubName || !clubCategory || !clubDescription) {
      alert("모든 항목을 입력해주세요");
      return;
    }

    const newClub: ClubData = {
      id: Date.now().toString(),
      name: clubName,
      description: clubDescription,
      category: clubCategory,
      image,
      members: [],
    };

    try {
      const createdClub = await createClub(newClub);
      onSuccess(createdClub);
      setClubName("");
      setClubDescription("");
      onClose();
    } catch (err) {
      console.error("동아리 생성 오류: ", err);
      alert("동아리 생성에 실패했습니다 다시 시도해주세요");
    }
  }
  return (
    <div className="fixed inset-0 bg-black/40 flex flex-col justify-center items-center z-50">
      <form 
        className="flex flex-col bg-white p-8 rounded-2xl w-full max-w-md shadow-lg max-h-[80vh] overflow-y-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-2xl font-bold mb-2">동아리 생성</h2>
        <hr className="mb-4" />
        
        <div className="flex flex-col gap-4 overflow-y-auto max-h-[40vh]">
          <section className="flex flex-col">
            <span className="text-lg font-semibold mb-2">동아리 대표 사진</span>
            <ClubImage image={image} setImage={setImage} />
          </section>

          <section>
            <p className="text-lg font-semibold">동아리 이름</p>
            <input
              type="text"
              placeholder="동아리 이름을 입력해주세요"
              className="w-full p-3 rounded-lg outline-none bg-[#F4F4F4]"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
            />
          </section>

          <section>
            <ClubChoice setCategory={setClubCategory} />
          </section>

          <section>
            <p className="text-lg font-semibold">동아리 소개</p>
            <textarea
              placeholder="동아리 소개글을 입력해주세요"
              className="w-full bg-[#F4F4F4] p-3 rounded-lg outline-none min-h-[100px]"
              value={clubDescription}
              onChange={(e) => setClubDescription(e.target.value)}
            />
          </section>
        </div>

        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            type="button"
            className="border-2 border-[#F4F4F4] px-6 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleCreate}
            type="button"
            className="px-6 py-2 rounded-lg bg-[#1866E1] text-white cursor-pointer hover:bg-blue-700 transition-colors font-semibold"
          >
            생성하기
          </button>
        </div>
      </form>
    </div>
  );
}