import "./style.scss";

interface ButtonTextProp {
  onClick?: (e: React.MouseEvent) => void;
  title: string;
}

const ButtonText = ({ onClick, title }: ButtonTextProp) => {
  return (
    <div className="btn-txt-wrapper" onClick={onClick}>
      {title}
    </div>
  );
};

export default ButtonText;
