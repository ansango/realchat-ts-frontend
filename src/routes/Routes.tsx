import { Route } from "react-router-dom";
import { Home, Room } from "../components/screens";

interface IRoute {
  path: string;
  component: React.FC;
}

const routes: IRoute[] = [
  { path: "/chat/:roomName/:userName", component: Room },
  { path: "/", component: Home },
];

const Routes = () => {
  return (
    <>
      {routes.map((route) => (
        <Route exact path={route.path} component={route.component} />
      ))}
    </>
  );
};

export default Routes;
