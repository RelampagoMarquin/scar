import { createContext, useEffect, useState } from 'react';

import { IAuthProvider, IContext, IUser } from './types';
import {
  getUserLocalStorage,
  LoginRequest,
  setUserLocalStorage
} from './utils';

export const AuthContext = createContext<IContext>({} as IContext);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const users = getUserLocalStorage();

    if (users) {
      setUser(users);
    }
  }, []);

  // Faz login
  const authenticate = async (registration: String, password: String) => {
    const response = await LoginRequest(registration, password);
    const payload = { token: response.Authorization, user: response.data };
    setUser(payload);
    setUserLocalStorage(payload);
  };

  // Faz logout
  const logout = () => {
    setUser(null);
    setUserLocalStorage(null);
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
