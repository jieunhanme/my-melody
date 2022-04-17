import { useCallback, useContext } from "react";
import { ThemeContext } from "../../../../contexts";
import { imgPath } from "../../../../utils";
import "./style.scss";

interface ButtonIconProps {
  type: string;
}

const ButtonIcon = ({ type }: ButtonIconProps) => {
  const { theme } = useContext(ThemeContext);

  const IconPicker = useCallback(
    (type: string) => {
      switch (type) {
        case "theme":
          return imgPath("ic-theme.svg", theme);
        default:
          return "";
      }
    },
    [theme]
  );

  return (
    <div className="btn-icon-wrapper">
      <img src={IconPicker(type)} alt={type} />
    </div>
  );
};

export default ButtonIcon;
