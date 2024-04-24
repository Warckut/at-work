import "./text-input.scss";

interface TextInputParams {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput = ({ label, value, onChange }: TextInputParams) => {
  return (
    <div className="input-group">
      <label htmlFor={label}>{label}</label>
      <input type="text" id={label} value={value} onChange={onChange} />
    </div>
  );
};

export default TextInput;
