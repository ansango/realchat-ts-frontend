import { useAuth } from "../../auth/AuthProvider";

const Room = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="capitalize py-14 text-2xl lg:text-4xl font-bold">
        {user?.roomName} 🏠
      </h1>
    </div>
  );
};

export default Room;
