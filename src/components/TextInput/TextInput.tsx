import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import "./text-input.scss";

function TextInput<T extends FieldValues>(
  props: UseControllerProps<T> & { label: string }
) {
  const { field, fieldState } = useController(props);

  return (
    <div className="input-group">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        className={fieldState.invalid ? "invalid" : ""}
        type="text"
        id={props.label}
        {...field}
      />
    </div>
  );
}

export default TextInput;
