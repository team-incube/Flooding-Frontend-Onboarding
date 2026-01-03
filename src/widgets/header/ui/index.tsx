"use client";

import Logo from "@/shared/assets/svg/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "기숙사", path: "/dormitory" },
    { label: "홈베이스", path: "/homebase" },
    { label: "동아리", path: "/club" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-[#ffffff] py-9">
      <div className="max-w-[1500px] mx-auto px-9 flex items-center justify-between">
        <Logo />
        
        <nav className="flex gap-8 flex-1 ml-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium transition ${
                isActive(item.path)
                  ? "text-gray-900 border-b-2 border-blue-600 pb-1"
                  : "text-gray-900 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-600">1117</span>
        </div>
      </div>
    </header>
  );
}