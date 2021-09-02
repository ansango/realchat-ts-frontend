import ContainerTheme from "./ContainerTheme";

type TContainer = {
  children: React.ReactElement;
};

export const ContainerApp = ({ children }: TContainer) => {
  return (
    <ContainerTheme>
      <div className="min-h-screen flex flex-col max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </div>
    </ContainerTheme>
  );
};
