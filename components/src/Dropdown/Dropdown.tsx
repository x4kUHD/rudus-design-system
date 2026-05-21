import { IconChevronDown } from "@tabler/icons-react";
import "./Dropdown.css";

export type DropdownVariant = "panel" | "ribbon";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  variant?: DropdownVariant;
  value?: string;
  onChange?: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  disabled?: boolean;
}

export function Dropdown({
  variant = "panel",
  value,
  onChange,
  options,
  placeholder,
  disabled = false,
}: DropdownProps) {
  return (
    <div
      className={`rudus-dropdown rudus-dropdown-${variant} ${disabled ? "rudus-dropdown-disabled" : ""}`}
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
  );
}
