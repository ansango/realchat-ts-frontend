import { useAuth } from "../../../auth/AuthProvider";
import useForm from "../../../hooks/useForm";
import { BTN_TYPE, ButtonBase } from "../buttons/ButtonBase";
import { FormInput } from "../forms";

const Chat = () => {
  const { user } = useAuth();

  const [formValues, handleInputChange] = useForm({
    text: "",
  });
  const { text } = formValues;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim().length !== 0) {
    }
  };
  return (
    <div
      className="flex p-4 justify-between flex-col bg-blue-50 dark:bg-gray-900 border dark:border-gray-700 rounded-lg"
      style={{ height: "800px" }}
    >
      <div className="w-full text-left">
        <h2 className="border-b border-blue-100 dark:border-gray-700 pb-4">
          {user?.userName}
          <span style={{ fontSize: "0.7rem" }}>in {user?.roomName}</span>
        </h2>
      </div>
      <div className="h-4/5 flex overflow-y-auto content-start w-full flex-col"></div>
      <form className="grid" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Enter your message"
          name="text"
          value={text}
          change={handleInputChange}
        />

        <ButtonBase type={BTN_TYPE.SUBMIT}>Send</ButtonBase>
      </form>
    </div>
  );
};

export default Chat;
