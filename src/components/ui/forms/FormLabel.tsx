type TFormLabel = {
  name: string;
};

const FormLabel = ({ name }: TFormLabel) => {
  return <label className="text-gray-700 mx-2">{name}</label>;
};

export default FormLabel;
