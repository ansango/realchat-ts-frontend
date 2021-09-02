import SocketTypes from "./SocketTypes";

interface SocketState {
  socket: any;
  connected: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

const SocketReducer = (state: SocketState, { type, payload }: Action) => {
  switch (type) {
    case SocketTypes.connect:
      return { ...state, connected: true };
    case SocketTypes.disconnect:
      return { ...state, connected: false };
    default:
      return state;
  }
};

export default SocketReducer;
