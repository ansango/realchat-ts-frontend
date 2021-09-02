const FormInput = ({ type, placeholder, name, value, change }: any) => {
  return (
    <input
      type={type}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={change}
    />
  );
};

export default FormInput;