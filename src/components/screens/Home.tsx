import { Login } from "../ui";

const Home = () => {
  return (
    <div>
      <h1 className="capitalize py-20 text-2xl lg:text-4xl font-bold text-center">
        Welcome to roomers 🏠
      </h1>
      <Login />
    </div>
  );
};

export default Home;
