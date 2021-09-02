import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Footer, ContainerApp } from "./components/ui";
const App = () => {
  return (
    <ContainerApp>
      <Router>
        <Nav />
        <Switch>
          <Route path="/chat/:roomName/:userName">
            <div>Room</div>
          </Route>
          <Route path="/" exact>
            <div>Home</div>
          </Route>
        </Switch>
        <Footer />
        <div>Modal</div>
      </Router>
    </ContainerApp>
  );
};

export default App;
