import { forwardRef, useState, type HTMLAttributes } from "react";
import { IconExclamationCircle } from "@tabler/icons-react";
import "./InputBox.css";

export interface InputBoxProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string | number;
  onChange?: (value: string) => void;
  unit?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export const InputBox = forwardRef<HTMLDivElement, InputBoxProps>(
  (
    {
      value,
      onChange,
      unit,
      placeholder,
      required = false,
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const current = isControlled ? String(value) : internalValue;

    const update = (next: string) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    };

    const isError = required && current === "" && !isFocused;

    return (
      <div
        ref={ref}
        className={`rudus-input-box ${isError ? "rudus-input-box-error" : ""} ${disabled ? "rudus-input-box-disabled" : ""}${className ? ` ${className}` : ""}`}
        {...rest}
      >
        <div className="rudus-input-box-value">
          {isError && (
            <IconExclamationCircle
              size={16}
              stroke={1.5}
              className="rudus-input-box-error-icon"
            />
          )}
          <input
            type="text"
            className="rudus-input-box-input text-body"
            value={current}
            onChange={(e) => update(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            aria-invalid={isError}
          />
        </div>
        {unit && <span className="rudus-input-box-unit text-body">{unit}</span>}
      </div>
    );
  }
);
InputBox.displayName = "InputBox";
