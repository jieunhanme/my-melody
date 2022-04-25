import { useCallback } from "react";
import "./style.scss";

interface ButtonTextProp {
  onClick?: (value: any) => void;
  title: string;
}

const ButtonText = ({ onClick, title }: ButtonTextProp) => {
  const _onClick = useCallback(
    (value: any) => {
      if (!onClick) return;
      onClick && onClick(value);
    },
    [onClick]
  );

  return (
    <div className="btn-txt-wrapper" onClick={_onClick}>
      {title}
    </div>
  );
};

export default ButtonText;
