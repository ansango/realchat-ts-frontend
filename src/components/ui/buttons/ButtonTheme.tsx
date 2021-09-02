
import useTheme, { THEME } from "../../../hooks/useTheme";
import { MoonIcon, SunIcon } from "../icons";
import { BTN_KIND, BTN_TYPE, ButtonBase } from "./ButtonBase";

const ButtonTheme = () => {
  const [colorTheme, setTheme] = useTheme();

  const onTheme = () => {
    setTheme(colorTheme);
  };
  return (
    <ButtonBase onClick={onTheme} kind={BTN_KIND.BLANK} type={BTN_TYPE.BUTTON}>
      {colorTheme === THEME.DARK ? (
        <MoonIcon size={20} className="text-blue-900" />
      ) : (
        <SunIcon size={20} className="text-blue-200" />
      )}
    </ButtonBase>
  );
};

export default ButtonTheme;
