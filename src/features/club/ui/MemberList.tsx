import Delete from "@/shared/assets/icons/Delete";

interface MemberListProps {
  members: string[];
  onRemoveMember: (memberName: string) => void;
}

export default function MemberList({
  members,
  onRemoveMember,
}: MemberListProps) {
  if (members.length === 0) {
    return <p className="text-gray-500">멤버가 없습니다.</p>;
  }

  return (
    <div className="flex flex-wrap gap-3">
      {members.map((member: string, index: number) => (
        <div
          key={index}
          className="bg-gray-50 rounded-lg px-4 py-2 flex items-center gap-2"
        >
          <span className="text-gray-800">{member}</span>
          <button
            onClick={() => onRemoveMember(member)}
            className="text-red-500"
            aria-label={`${member} 강퇴`}
          >
            <Delete />
          </button>
        </div>
      ))}
    </div>
  );
}
