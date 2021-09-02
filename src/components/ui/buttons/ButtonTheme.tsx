import useTheme, { THEME } from "../../../hooks/useTheme";
import { MoonIcon, SunIcon } from "../icons";
import { BTN_TYPES, ButtonBase } from "./ButtonBase";

const ButtonTheme = () => {
  const [colorTheme, setTheme] = useTheme();

  const onTheme = () => {
    setTheme(colorTheme);
  };
  return (
    <ButtonBase onClick={onTheme} kind={BTN_TYPES.BLANK}>
      {colorTheme === THEME.DARK ? (
        <MoonIcon size={20} className="text-blue-900" />
      ) : (
        <SunIcon size={20} className="text-blue-200" />
      )}
    </ButtonBase>
  );
};

export default ButtonTheme;
