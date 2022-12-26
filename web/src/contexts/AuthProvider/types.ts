export interface IUser {
  user?: cacheUser;
  token?: string;
}

interface cacheUser{
  id: number;
  registration: string;
  class: string;
  email: string;
  name: string;
}

export interface IContext extends IUser {
  authenticate: (registration: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
