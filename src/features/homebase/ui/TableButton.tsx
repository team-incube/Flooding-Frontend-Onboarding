"use client";

interface TableButtonProps {
  name: string;
  seats: number;
  isSelected: boolean;
  disabled?: boolean;
  onClick: () => void;
  flexClass?: string;
}

export default function TableButton({
  name,
  seats,
  isSelected,
  disabled = false,
  onClick,
  flexClass = "flex-1",
}: TableButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        ${flexClass}
        relative
        p-5 rounded-xl border
        flex flex-col items-start justify-start
        transition
        ${
          disabled
            ? "bg-gray-200 border-gray-300 cursor-not-allowed"
            : isSelected
              ? "border-main-100 bg-blue-50"
              : "border-[#E0E4E9] hover:bg-blue-50 cursor-pointer"
        }
      `}
    >
      <p
        className={`font-semibold mb-1 text-lg ${
          disabled ? "text-gray-400" : "text-gray-700"
        }`}
      >
        {name}
      </p>
      <p className={`text-sm ${disabled ? "text-gray-400" : "text-[#999999]"}`}>
        최대 {seats}명
      </p>

      {disabled && (
        <div
          className="
            absolute
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            px-4 py-1
            rounded-full
            bg-blue-600
            text-white
            text-xs
            font-semibold
            pointer-events-none
          "
        >
          마감
        </div>
      )}
    </button>
  );
}
