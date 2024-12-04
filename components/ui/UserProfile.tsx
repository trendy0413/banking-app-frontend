import Image from "next/image";
import Avatar from "@/public/images/avatar.png";
import { useUser } from "@/hooks/useUser";

export function UserProfile() {
  const { user } = useUser();
  return (
    <div className="flex items-center gap-2">
      <Image
        src={Avatar}
        alt="Profile"
        className="rounded-full"
        width={48}
        height={48}
      />
      <div className="text-md hidden md:block">
        <div>{user?.name}</div>
        <div className="text-gray-500 text-sm">{user?.email}</div>
      </div>
    </div>
  );
}
