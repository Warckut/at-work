import "./button.scss";

interface ButtonProps {
  name: string;
  onSubmit: () => void;
}

const Button = ({ name, onSubmit }: ButtonProps) => {
  return (
    <input
      className="btn"
      type="submit"
      onClick={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      value={name}
    />
  );
};

export default Button;
