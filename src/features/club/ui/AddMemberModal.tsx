import Modal from "@/shared/ui/Modal";
import { useState } from "react";
import { useStudentsQuery } from "@/entities/student";
import { useAddMemberMutation } from "@/entities/club";
import type { ClubData } from "@/shared/types/club/type";

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  club: ClubData;
}

export default function AddMemberModal({
  isOpen,
  onClose,
  club,
}: AddMemberModalProps) {
  const { data: students } = useStudentsQuery();
  const addMutation = useAddMemberMutation(club.id);
  const [selected, setSelected] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const available = students
    ? students.filter((student) => !club.members.includes(student.name))
    : [];

  const filtered = search
    ? available.filter(
        (student) =>
          student.name.toLowerCase().includes(search.toLowerCase()) ||
          student.id.includes(search)
      )
    : available;

  const handleSelect = (name: string) => {
    setSelected(name);
    setSearch(name);
    setError("");
  };

  const handleAdd = () => {
    if (!selected) {
      setError("학생을 선택해주세요.");
      return;
    }

    setError("");
    addMutation.mutate(selected, {
      onSuccess: () => {
        setSelected("");
        setSearch("");
        onClose();
      },
      onError: (error: Error) => {
        setError(error.message);
      },
    });
  };

  const handleClose = () => {
    setSelected("");
    setSearch("");
    setError("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <h3 className="text-xl font-bold mb-4">멤버 초대</h3>
      <div className="relative mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelected("");
            setError("");
          }}
          placeholder="학생 이름 또는 학번 검색"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        {search && filtered.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {filtered.map((student) => (
              <button
                key={student.id}
                onClick={() => handleSelect(student.name)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
              >
                <div className="font-medium">{student.name}</div>
                <div className="text-sm text-gray-500">{student.id}</div>
              </button>
            ))}
          </div>
        )}
        {search && filtered.length === 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-center text-gray-500">
            검색 결과가 없습니다
          </div>
        )}
      </div>
      {selected && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <span className="text-sm text-gray-600">선택된 학생: </span>
          <span className="font-medium text-blue-600">{selected}</span>
        </div>
      )}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}
      <div className="flex gap-3 justify-end">
        <button
          onClick={handleClose}
          className="px-4 py-2 text-gray-600 rounded-lg"
        >
          취소
        </button>
        <button
          onClick={handleAdd}
          disabled={!selected || addMutation.isPending}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {addMutation.isPending ? "초대 중..." : "초대"}
        </button>
      </div>
    </Modal>
  );
}
