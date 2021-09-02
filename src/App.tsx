import { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Nav, Footer, ContainerApp } from "./components/ui";
import Routes from "./routes/Routes";
import { SocketProvider } from "./socket/SocketProvider";
import io from "socket.io-client";
const App = () => {
  useEffect(() => {
    const socket = io("/", {
      transports: ["websocket"],
    }).connect();
    socket.emit("joinRoom", { userName: "pepe", roomName: "a" });
    console.log(socket)
  }, []);

  return (
    <SocketProvider>
      <ContainerApp>
        <Router>
          <Nav />
          <Switch>
            <Routes />
          </Switch>
          <Footer />
          <div>Modal</div>
        </Router>
      </ContainerApp>
    </SocketProvider>
  );
};

export default App;
