type ContainerProps = {
  children: React.ReactElement;
};
const ContainerTheme = ({ children }: ContainerProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-blue-900 dark:text-blue-200 ">
      {children}
    </div>
  );
};
export default ContainerTheme;
