'use client';

import { User } from '@/types/user';
import { ReactNode, createContext, useState } from 'react';

interface Login {
  isLogged: boolean;
  user?: User;
}

interface ILoginContext {
  login: Login;
  setLogin: React.Dispatch<React.SetStateAction<Login>>;
}

export const LoginContext = createContext<ILoginContext>({} as ILoginContext);

const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [login, setLogin] = useState<Login>({ isLogged: false });

  return (
    <LoginContext.Provider
      value={{
        login,
        setLogin,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
