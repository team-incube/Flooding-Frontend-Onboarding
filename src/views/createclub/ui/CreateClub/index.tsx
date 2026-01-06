'use client'

import { useState } from "react";
import ClubChoice from "@/features/club/ui/ClubChoice";
import ClubImage from "@/features/club/ui/ClubImage";

function CreateClub() {
  const [image, setImage] = useState("/default-image.png");

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center">
      <form className="flex flex-col bg-white p-8 rounded-2xl w-100 shadow-lg max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-2">동아리 생성</h2>
        <hr />
        <div className="flex flex-col gap-4 max-h-[40vh] overflow-y-auto">
          <section className="flex flex-col-reverse justfly-between">
            <div className="text-lg font-semibold mt-2" >동아리 대표 사진
              <ClubImage image={image} setImage={setImage}
              />
            </div>
          </section>

          <section>
            <p className="text-lg font-semibold">동아리 이름</p>
            <input
              type="text"
              placeholder="동아리 이름을 입력해주세요"
              className="w-full p-2 rounded-lg outline-none bg-[#F4F4F4]"
            />
          </section>

          <section>
            <ClubChoice />
          </section>

          <section>
            <p className="text-lg font-semibold ">동아리 소개</p>
            <textarea
              placeholder="동아리 소개글을 입력해주세요"
              className="w-full bg-[#F4F4F4] p-2 rounded-lg outline-none"
            />
          </section>

        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button className="border-2 border-[#F4F4F4] px-4 py-2 rounded-lg cursor-pointer">취소</button>
          <button className="px-4 py-2 border-2 border-[#727DEB] rounded-lg bg-[#727DEB] text-white cursor-pointer">생성하기</button>
        </div>
      </form>
    </div>
  );
}

export default CreateClub;