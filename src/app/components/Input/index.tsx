import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { Controller } from "react-hook-form";

interface InputProps {
  control: any;
  errors: any;
  message?: string;
  name: string;
  placeholder?: string;
  icon?: string;
  classIcon?: string;
  clickIcon?: () => void;
  type?: string;
  width?: string;
}

export default function Input(props: InputProps) {
  const {
    control,
    errors,
    message,
    name,
    placeholder,
    icon,
    clickIcon,
    classIcon,
    type = "text",
    width = "100%",
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: message }}
      render={({ field, fieldState }) => (
        <>
          <label
            htmlFor={field.name}
            className={classNames({ "p-error": errors[name] })}
          />
          <span
            className={`p-float-label ${classIcon}`}
            style={{ width: width }}
          >
            {icon && <i className={icon} onClick={clickIcon} />}
            <InputText
              type={type}
              placeholder={placeholder}
              id={field.name}
              style={{ width: "100%" }}
              value={field.value}
              className={classNames({ "p-invalid": fieldState.error })}
              onChange={(e) => field.onChange(e.target.value)}
            />
          </span>

          <small
            id={`${name}-help`}
            className={classNames({ "p-error": fieldState.error })}
          >
            {fieldState.error?.message}
          </small>
        </>
      )}
    />
  );
}
