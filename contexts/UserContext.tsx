
import { UserContextType } from "@/types/user";
import { createContext } from "react";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);