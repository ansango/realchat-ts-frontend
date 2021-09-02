type TFormInput = {
  type: string;
  placeholder: string;
  name: string;
  value: any;
  change: any;
};

const FormInput = ({ type, placeholder, name, value, change }: TFormInput) => {
  return (
    <input
      type={type}
      className="mx-2 block rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-800 dark:border-gray-900 dark:focus:bg-gray-100"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={change}
    />
  );
};

export default FormInput;
