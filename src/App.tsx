import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Nav, Footer, ContainerApp } from "./components/ui";
import Routes from "./routes/Routes";
import { SocketProvider } from "./socket/SocketProvider";

const App = () => {
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
