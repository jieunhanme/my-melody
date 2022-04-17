import { useCallback, useContext } from "react";
import { ThemeContext } from "../../../../contexts";
import { imgPath } from "../../../../utils";
import "./style.scss";

interface ButtonIconProps {
  types: Array<string>;
}

const ButtonIcon = ({ types }: ButtonIconProps) => {
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
    <>
      {types &&
        types.map((type, index) => {
          return (
            <div className="btn-wrapper" key={index}>
              <img src={IconPicker(type)} alt={type} />
            </div>
          );
        })}
    </>
  );
};

export default ButtonIcon;
