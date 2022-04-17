import "./style.scss";

const ButtonText = ({ children }: { children: React.ReactNode }) => {
  return <div className="btn-txt-wrapper">{children}</div>;
};

export default ButtonText;
