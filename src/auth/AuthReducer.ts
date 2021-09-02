import AuthTypes from "./AuthTypes";
interface Action {
  type: string;
  payload?: any;
}

interface AuthState {
  user: any;
  logged: boolean;
}

const AuthReducer = (state: AuthState, { type, payload }: Action) => {
  const { login, logout } = AuthTypes;
  switch (type) {
    case login:
      return { ...state, user: payload, logged: true };
    case logout:
      return { ...state, user: null, logged: false };
    default:
      return state;
  }
};

export default AuthReducer;
