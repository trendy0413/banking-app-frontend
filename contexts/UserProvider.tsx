"use client";

import { ReactNode, useState } from "react";
import { UserContext } from "./UserContext";
import { User } from "@/types/user";

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: (user: User | null | undefined) => setUser(user),
        isLoading,
        error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
