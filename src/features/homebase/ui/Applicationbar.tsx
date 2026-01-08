"use client";

import { useState, useEffect } from "react";
import {
  applyHomebase,
  fetchStudents,
  type Student,
} from "@/features/homebase/actions/floorActions";
import Delete from "@/shared/assets/icons/Delete";
import Plus from "@/shared/assets/icons/Plus";

interface ApplicationBarProps {
  floor: string;
  time: string;
  table: string;
  maxPeople: number;
  myName: string;
  onCancel: () => void;
  onSuccess: () => void;
}

export default function ApplicationBar({
  floor,
  time,
  table,
  maxPeople,
  myName,
  onCancel,
  onSuccess,
}: ApplicationBarProps) {
  const [members, setMembers] = useState<string[]>([myName]);
  const [inputs, setInputs] = useState<string[]>([]);
  const [reason, setReason] = useState("");
  const [students, setStudents] = useState<Student[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchStudents().then(setStudents);
  }, []);

  useEffect(() => {
    setMembers([myName]);
    setInputs(Array(maxPeople - 1).fill(""));
    setSearchValue("");
    setActiveIndex(null);
  }, [table, maxPeople, myName]);

  const currentCount = members.length;

  const handleInputChange = (idx: number, value: string) => {
    const next = [...inputs];
    next[idx] = value;
    setInputs(next);

    setSearchValue(value);
    setActiveIndex(idx);
  };

  const filteredStudents =
    activeIndex !== null && searchValue.trim()
      ? students.filter(
          (s) =>
            (s.name.includes(searchValue) || s.id.includes(searchValue)) &&
            !members.some((m) => m === `${s.id} ${s.name}`)
        )
      : [];

  const handleAddMember = (student: Student) => {
    if (members.length >= maxPeople) return;
    if (activeIndex === null) return;

    const memberLabel = `${student.id} ${student.name}`;

    setMembers((prev) => [...prev, memberLabel]);

    const next = [...inputs];
    next[activeIndex] = memberLabel;
    setInputs(next);

    setSearchValue("");
    setActiveIndex(null);
  };

  const handleRemoveMember = (name: string) => {
    setMembers((prev) => prev.filter((m) => m !== name));

    const idx = inputs.findIndex((v) => v === name);
    if (idx >= 0) {
      const next = [...inputs];
      next[idx] = "";
      setInputs(next);
    }
  };

  const handleSubmit = async () => {
    if (!reason.trim()) {
      alert("신청 사유를 입력해주세요.");
      return;
    }

    const result = await applyHomebase({
      floor,
      classTime: time,
      table,
      members,
      reason,
    });

    if (!result.success) {
      alert("신청에 실패했습니다.");
      return;
    }

    onSuccess();
  };

  return (
    <div className="w-90 h-130 bg-white rounded-2xl p-7 flex flex-col justify-between">
      <div>
        <div className="flex flex-col gap-2 mb-5">
          <h2 className="text-[20px] font-bold">{table}</h2>
          <p className="text-[#919CAF]">
            현재 {currentCount}명 / 최대 {maxPeople}명
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 w-[144px] h-[60px] rounded-[8px] bg-[#F8F9FB] text-[#333D48] font-medium">
              {myName}
            </div>

            {inputs.map((value, idx) => {
              const isRegistered = members.includes(value);

              return (
                <div key={idx} className="relative">
                  <input
                    value={value}
                    placeholder="학번 또는 이름"
                    onFocus={() => setActiveIndex(idx)}
                    onChange={(e) => handleInputChange(idx, e.target.value)}
                    disabled={isRegistered || members.length >= maxPeople}
                    className={`p-5 pr-3 border border-[#D1D8DE] rounded-[8px]
                      w-[144px] h-[60px] font-medium placeholder:text-[#919CAF]
                      focus:border-[#1866E1] focus:outline-none
                      ${
                        isRegistered
                          ? "bg-[#F8F9FB] text-[#333D48] border-none cursor-not-allowed"
                          : ""
                      }`}
                  />

                  {isRegistered && (
                    <button
                      type="button"
                      onClick={() => handleRemoveMember(value)}
                      className="absolute top-[20px] right-3"
                    >
                      <Delete />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {filteredStudents.length > 0 && (
            <div
              className="
                absolute left-0 top-full mt-2
                w-[304px]
                bg-[#F8F9FB]
                rounded-[8px]
                shadow-md
                max-h-[220px]
                overflow-y-auto
                z-20
              "
            >
              {filteredStudents.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center justify-between px-4 h-[44px]
                    cursor-pointer hover:bg-[#EEF3FF]"
                  onClick={() => handleAddMember(student)}
                >
                  <span className="font-medium text-[#333D48]">
                    {student.id} {student.name}
                  </span>
                  <Plus />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="신청 사유를 작성해주세요"
          className="border border-[#D1D8DE] rounded-[8px]
            px-4 py-2 font-medium w-[304px] h-[44px] focus:outline-none"
        />

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="font-semibold w-[92px] h-[52px]
              rounded-[8px] border border-[#D1D8DE]
              flex items-center justify-center"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            className="font-semibold w-30 h-[52px]
              bg-[#1866E1] text-white rounded-[8px]
              flex items-center justify-center"
          >
            신청하기
          </button>
        </div>
      </div>
    </div>
  );
}
