import Modal from "@/shared/ui/Modal";
import { useRemoveMemberMutation } from "@/entities/club";

interface RemoveMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  clubId: number | string;
  memberName: string;
}

export default function RemoveMemberModal({
  isOpen,
  onClose,
  clubId,
  memberName,
}: RemoveMemberModalProps) {
  const removeMutation = useRemoveMemberMutation(clubId);

  const handleConfirm = () => {
    removeMutation.mutate(memberName);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="text-xl font-bold mb-4">멤버 강퇴</h3>
      <p className="text-gray-700 mb-6">{memberName}님을 강퇴하시겠습니까?</p>
      <div className="flex gap-3 justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          취소
        </button>
        <button
          onClick={handleConfirm}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          강퇴
        </button>
      </div>
    </Modal>
  );
}
