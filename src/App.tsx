import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Nav, Footer, ContainerApp } from "./components/ui";
import Routes from "./routes/Routes";

const App = () => {
  return (
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
  );
};

export default App;
