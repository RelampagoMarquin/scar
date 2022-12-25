export interface IUser {
  registration?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticate: (registration: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface IAuthProvider {
  children: JSX.Element;
}
