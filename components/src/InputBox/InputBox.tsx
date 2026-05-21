import { useState } from "react";
import { IconExclamationCircle } from "@tabler/icons-react";
import styles from "./InputBox.module.css";

export interface InputBoxProps {
  value?: string | number;
  onChange?: (value: string) => void;
  unit?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export function InputBox({
  value,
  onChange,
  unit,
  placeholder,
  required = false,
  disabled = false,
}: InputBoxProps) {
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
      className={`${styles.container} ${isError ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
    >
      <div className={styles.valueContainer}>
        {isError && (
          <IconExclamationCircle
            size={16}
            stroke={1.5}
            className={styles.errorIcon}
          />
        )}
        <input
          type="text"
          className={`${styles.input} text-body`}
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
      {unit && <span className={`${styles.unit} text-body`}>{unit}</span>}
    </div>
  );
}
