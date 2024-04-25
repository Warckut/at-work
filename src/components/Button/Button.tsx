import "./button.scss";

interface ButtonProps {
  name: string;
  onSubmit: () => void;
}

const Button = ({ name }: ButtonProps) => {
  return <input className="btn" type="submit" value={name} />;
};

export default Button;
