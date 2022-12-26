import React, { createContext, useEffect, useState } from 'react';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Faz login
  const authenticate = async (registration: String, password: String) => {
    const response = await LoginRequest(registration, password);
    const payload = { token: response.Authorization, user: response.data };
    console.log(payload)
    setUser(payload);
    setUserLocalStorage(payload);
  };

  // não é possivel utilizar esse cadastro pois o nome 'class' conflita
  // sendo necessario mudar o no me da variavel no banco 
  /* const signup = async (
    name: string,
    registration: string,
    clas: string,
    email: string,
    password: string,
  ) => {
    const response = await SignupRequest(
      name,
      password,
      email,
      clas,
      registration
    );

    return response.data;
  }; */

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
