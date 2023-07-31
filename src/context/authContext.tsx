import React, { createContext, useState, FC } from 'react';

interface AuthContextData {
  token: string | null;
  setToken: (token: string | null) => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({
  token: null,
  setToken: () => {},
});

export const AuthProvider: FC<AuthProviderProps> = ({children }) => {
  const [token, setToken] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
