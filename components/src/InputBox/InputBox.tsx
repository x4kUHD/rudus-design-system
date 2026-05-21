import { IconExclamationCircle } from "@tabler/icons-react";
import styles from "./InputBox.module.css";

export type InputBoxVariant = "default" | "error";

export interface InputBoxProps {
  value?: string | number;
  onChange?: (value: string) => void;
  unit?: string;
  placeholder?: string;
  variant?: InputBoxVariant;
  disabled?: boolean;
}

export function InputBox({
  value,
  onChange,
  unit,
  placeholder,
  variant = "default",
  disabled = false,
}: InputBoxProps) {
  const isError = variant === "error";

  return (
    <div
      className={`${styles.container} ${isError ? styles.error : ""} ${disabled ? styles.disabled : ""}`}
    >
      <div className={styles.valueContainer}>
        {isError ? (
          <IconExclamationCircle
            size={16}
            stroke={1.5}
            className={styles.errorIcon}
          />
        ) : (
          <input
            type="text"
            className={`${styles.input} text-body`}
            value={value ?? ""}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
          />
        )}
      </div>
      {unit && <span className={`${styles.unit} text-body`}>{unit}</span>}
    </div>
  );
}
