import { useCallback } from "react";
import "./style.scss";

interface ButtonTextProp {
  title: string;
  isActive?: boolean;
  onClick?: (value: any) => void;
}

const ButtonText = ({ onClick, isActive = false, title }: ButtonTextProp) => {
  const _onClick = useCallback(
    (value: any) => {
      if (!onClick) return;
      onClick && onClick(value);
    },
    [onClick]
  );

  return (
    <div
      className={isActive ? "btn-txt-wrapper active" : "btn-txt-wrapper"}
      onClick={_onClick}
    >
      {title}
    </div>
  );
};

export default ButtonText;
