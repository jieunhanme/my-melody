import "./style.scss";

interface ButtonFlatProps {
  isActive?: boolean;
  title: string;
}

const ButtonFlat = ({ isActive, title }: ButtonFlatProps) => {
  return (
    <div className={`btn-flat-wrapper ${isActive ? "btn-flat-active" : ""}`}>
      <span>{title}</span>
    </div>
  );
};

export default ButtonFlat;
