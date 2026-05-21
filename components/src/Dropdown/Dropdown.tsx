import { forwardRef, type HTMLAttributes } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import "./Dropdown.css";

export type DropdownVariant = "panel" | "ribbon";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  variant?: DropdownVariant;
  value?: string;
  onChange?: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  disabled?: boolean;
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      variant = "panel",
      value,
      onChange,
      options,
      placeholder,
      disabled = false,
      className,
      ...rest
    },
    ref
  ) => (
    <div
      ref={ref}
      className={`rudus-dropdown rudus-dropdown-${variant} ${disabled ? "rudus-dropdown-disabled" : ""}${className ? ` ${className}` : ""}`}
      {...rest}
    >
      <select
        className="rudus-dropdown-select text-body"
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <IconChevronDown
        size={16}
        stroke={1.5}
        className="rudus-dropdown-chevron"
        aria-hidden
      />
    </div>
  )
);
Dropdown.displayName = "Dropdown";
