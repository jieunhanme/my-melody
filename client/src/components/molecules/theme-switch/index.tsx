import { useCallback, useContext } from "react";
import { ThemeContext } from "../../../contexts";
import "./style.scss";

import { ButtonIcon } from "../../atoms/buttons";

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClickSwitch = useCallback(() => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }, [setTheme, theme]);

  return (
    <div className="box-switch" onClick={onClickSwitch}>
      <ButtonIcon type={"theme"} />
    </div>
  );
};
export default ThemeSwitch;
