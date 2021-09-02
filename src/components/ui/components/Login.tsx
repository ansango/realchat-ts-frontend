import { useHistory } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { BTN_TYPE, ButtonBase } from "../buttons/ButtonBase";
import { FormInput, FormLabel } from "../forms";

export const Login = () => {
  const router = useHistory();
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

    router.push(`/chat/${roomName}/${userName}`);
  };
  return (
    <form className="grid grid-cols-1 gap-2 lg:py-20" onSubmit={handleSubmit}>
      <input
        type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        placeholder="Type your username"
        name="userName"
        value={userName}
        onChange={handleInputChange}
      />
      <ButtonBase type={BTN_TYPE.SUBMIT}>Submit</ButtonBase>
    </form>
  );
};

export default Login;
