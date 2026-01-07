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
            ? "bg-black/12 bg-opacity-2 border-none cursor-not-allowed"
            : isSelected
              ? "border-main-100 bg-blue-50"
              : "border-[#E0E4E9] hover:bg-blue-50 cursor-pointer"
        }
      `}
    >
      <p
        className={`font-semibold mb-1 text-[20px] ${
          disabled ? "text-[#333D48] blur-[1px]" : ""
        }`}
      >
        {name}
      </p>
      <p
        className={`${disabled ? "text-[#919CAF] blur-[1px]" : "text-[#919CAF]"}`}
      >
        최대 {seats}명
      </p>

      {disabled && (
        <div
          className="
            absolute
            left-1/2 top-1/2
            -translate-x-1/2 -translate-y-1/2
            px-[18px] py-[7px]
            rounded-[22px]
            bg-[#333D48]
            text-white
            text-xs
            font-semibold
            pointer-events-none
          "
        >
          예약 마감
        </div>
      )}
    </button>
  );
}
