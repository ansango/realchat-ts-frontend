export interface IUser {
  userName: string;
  roomName: string;
}

export interface IAuthState {
  user: IUser | null;
  logged: boolean;
  login: any;
  logout: any;
}
