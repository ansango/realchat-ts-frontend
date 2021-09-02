import { createContext, useContext, useEffect, useReducer } from "react";
import { ISocketState } from "./SocketModels";
import SocketReducer from "./SocketReducer";
import SocketTypes from "./SocketTypes";

const initialState: ISocketState = {
  socket: null,
  connected: false,
  connect: null,
  disconnect: null,
};

const SocketContext = createContext<Partial<ISocketState>>({});

const SocketProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(SocketReducer, initialState);

  const connect = () => dispatch({ type: SocketTypes.connect });

  useEffect(() => connect(), [dispatch]);

  return (
    <SocketContext.Provider value={{ ...state, connect }}>
      {children}
    </SocketContext.Provider>
  );
};

const useSocket = () => useContext(SocketContext);

export { SocketProvider, useSocket };
