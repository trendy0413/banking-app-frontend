interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  bankNumber: string;
  balance: number;
}

interface UserContextType {
  user: User | null | undefined;
  setUser: (user: User | null | undefined) => void;
  isLoading: boolean;
  error: string | null;
}
export type { User, UserContextType };
