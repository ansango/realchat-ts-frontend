import { useHistory } from "react-router-dom";
import { useAuth } from "../../../auth/AuthProvider";
import useForm from "../../../hooks/useForm";
import { BTN_TYPE, ButtonBase } from "../buttons/ButtonBase";
import { FormLabel, FormInput } from "../forms";

export const Login = () => {
  const router = useHistory();
  const { login } = useAuth();
  const [formValues, handleInputChange] = useForm({
    userName: "",
    roomName: "",
  });

  const { userName, roomName } = formValues;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (userName.trim().length === 0 || roomName.trim().length === 0) {
      alert("Please write a username and room to join us");
      return;
    }

    login({ userName, roomName });
    router.push(`/chat/${roomName}/${userName}`);
  };
  return (
    <form className="grid grid-cols-1 gap-2 lg:py-20" onSubmit={handleSubmit}>
      <FormLabel name="User name" />
      <FormInput
        type="text"
        placeholder="Enter your username"
        name="userName"
        value={userName}
        change={handleInputChange}
      />
      <FormLabel name="Room name" />
      <FormInput
        type="text"
        placeholder="Enter a Room's key"
        name="roomName"
        value={roomName}
        change={handleInputChange}
      />
      <ButtonBase type={BTN_TYPE.SUBMIT}>Submit</ButtonBase>
    </form>
  );
};

export default Login;
