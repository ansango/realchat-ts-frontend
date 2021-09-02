import ContainerTheme from "./ContainerTheme";

type ContainerProps = {
  children: React.ReactElement;
};

export const ContainerApp = ({ children }: ContainerProps) => {
  return (
    <ContainerTheme>
      <div className="min-h-screen flex flex-col max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </div>
    </ContainerTheme>
  );
};
