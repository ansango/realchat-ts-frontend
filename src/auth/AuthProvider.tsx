import { createContext, useContext, useReducer } from "react";
import { IAuthState, IUser } from "./AuthModels";
import AuthReducer from "./AuthReducer";
import AuthTypes from "./AuthTypes";

const initialState: IAuthState = {
  user: null,
  logged: false,
  login: null,
  logout: null,
};

const AuthContext = createContext<Partial<IAuthState>>({});

const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    
  const login = ({ userName, roomName }: IUser) =>
      dispatch({ type: AuthTypes.login, payload: { userName, roomName } });
    
  const logout = () => dispatch({ type: AuthTypes.logout });
  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
