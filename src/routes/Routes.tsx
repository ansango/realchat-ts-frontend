import { Route } from "react-router-dom";
import { Home, Room } from "../components/screens";

interface IRoute {
  id: number;
  path: string;
  component: React.FC;
}

const routes: IRoute[] = [
  { id: 1, path: "/chat/:roomName/:userName", component: Room },
  { id: 2, path: "/", component: Home },
];

const Routes = () => {
  return (
    <>
      {routes.map((route) => (
        <Route
          exact
          path={route.path}
          component={route.component}
          key={route.id}
        />
      ))}
    </>
  );
};

export default Routes;
