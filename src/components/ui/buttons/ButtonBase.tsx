export enum BTN_TYPE {
  BUTTON = "button",
  RESET = "reset",
  SUBMIT = "submit",
}

export enum BTN_KIND {
  DEFAULT = "default",
  DANGER = "danger",
  WARNING = "warning",
  SUCCESS = "success",
  BLANK = "blank",
}

type TButtonProps = {
  children: any;
  onClick?: () => void;
  kind?: BTN_KIND;
  type?: BTN_TYPE;
};

export const ButtonBase = ({
  children,
  onClick = () => {},
  kind = BTN_KIND.DEFAULT,
  type = BTN_TYPE.BUTTON,
}: TButtonProps) => {
  const isDefault = kind === BTN_KIND.DEFAULT;
  const isDanger = kind === BTN_KIND.DANGER;
  const isWarning = kind === BTN_KIND.WARNING;
  const isSuccess = kind === BTN_KIND.SUCCESS;
  const isBlank = kind === BTN_KIND.BLANK;
  return (
    <>
      {isDefault && (
        <Default children={children} onClick={onClick} type={type} />
      )}
      {isDanger && <Danger children={children} onClick={onClick} type={type} />}
      {isWarning && (
        <Warning children={children} onClick={onClick} type={type} />
      )}
      {isSuccess && (
        <Success children={children} onClick={onClick} type={type} />
      )}
      {isBlank && <Blank children={children} onClick={onClick} type={type} />}
    </>
  );
};

const Default = ({ children, onClick, type }: TButtonProps) => (
  <button
    className={`text-blue-800 dark:text-blue-300 bg-blue-200 border-blue-200 hover:bg-blue-500 hover:text-white dark:bg-blue-900 dark:border-blue-900 dark:hover:bg-blue-900 w-auto px-3 py-2 m-2 text-base font-medium transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2`}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

const Danger = ({ children, onClick, type }: TButtonProps) => (
  <button
    className="text-red-800 dark:text-red-300 bg-red-200 border-red-200 hover:bg-red-500 hover:text-white dark:bg-red-900 dark:border-red-900 dark:hover:bg-red-900 w-auto px-3 py-2 m-2 text-base font-medium transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

const Warning = ({ children, onClick, type }: TButtonProps) => (
  <button
    className="text-yellow-800 dark:text-yellow-300 bg-yellow-200 border-yellow-200 hover:bg-yellow-500 hover:text-white dark:bg-yellow-900 dark:border-yellow-900 dark:hover:bg-yellow-900 w-auto px-3 py-2 m-2 text-base font-medium transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

const Success = ({ children, onClick, type }: TButtonProps) => (
  <button
    className="text-green-800 dark:text-green-300 bg-green-200 border-green-200 hover:bg-green-500 hover:text-white dark:bg-green-900 dark:border-green-900 dark:hover:bg-green-900 w-auto px-3 py-2 m-2 text-base font-medium transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

const Blank = ({ children, onClick, type }: TButtonProps) => (
  <button
    className="bg-white border-gray-200 hover:bg-gray-200 dark:bg-gray-900 dark:border-gray-900 hover:text-white dark:hover:bg-gray-900 w-auto px-3 py-2 m-2 text-base font-medium transition duration-500 ease-in-out transform rounded-lg focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);
