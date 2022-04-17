import "./style.scss";

interface ButtonFlatProps {
  isActive: boolean;
  children: React.ReactChild;
}

const ButtonFlat = ({ isActive, children }: ButtonFlatProps) => {
  return (
    <div className={`btn-flat-wrapper ${isActive ? "btn-flat-active" : ""}`}>
      <span>{children}</span>
    </div>
  );
};

export default ButtonFlat;
