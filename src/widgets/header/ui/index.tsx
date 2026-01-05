"use client";

import Logo from "@/shared/assets/svg/Logo";
import Profile from "@/shared/assets/icons/Profile";
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
    <header className="bg-[#ffffff] py-6">
      <div className="max-w-[1500px] mx-auto px-9 flex items-center justify-between">
        <Logo />

        <nav className="flex gap-5 flex-1 ml-20 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-xl font-medium transition ${
                isActive(item.path)
                  ? "text-gray-700 border-b-2 border-main-100"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 pt-2">
          <Profile />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium text-gray-700">0000 OO</p>
          </div>
        </div>
      </div>
    </header>
  );  
}
