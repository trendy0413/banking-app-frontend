"use client";

import Image from "next/image";
import Logo from "@/public/images/logo.png";
import { UserProfile } from "../ui/UserProfile";

export default function Header() {
  return (
    <header className="h-[92px] border-b flex items-center justify-between px-4 bg-white">
      <div className="flex items-center gap-2">
        <Image
          src={Logo}
          alt="Profile"
          className="rounded-full"
          width={48}
          height={48}
        />
        <h1 className="text-2xl font-bold text-violet-600">YourBank</h1>
      </div>
      <div className="flex items-center gap-4">
        <button aria-label="Notifications" className="i-lucide-bell w-5 h-5" />
        <UserProfile />
      </div>
    </header>
  );
}
