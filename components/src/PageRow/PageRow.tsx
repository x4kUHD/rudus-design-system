import { forwardRef, useState, type HTMLAttributes } from "react";
import "./PageRow.css";

export interface PageRowProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  pageNumber: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  selected?: boolean;
  onSelect?: () => void;
}

export const PageRow = forwardRef<HTMLDivElement, PageRowProps>(
  (
    {
      pageNumber,
      value,
      defaultValue = "",
      onChange,
      selected = false,
      onSelect,
      className,
      ...rest
    },
    ref
  ) => {
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue);
    const current = isControlled ? value : internalValue;

    const update = (next: string) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    };

    return (
      <div
        ref={ref}
        className={`rudus-page-row ${selected ? "rudus-page-row-selected" : ""} text-body${className ? ` ${className}` : ""}`}
        onClick={onSelect}
        {...rest}
      >
        <span className="rudus-page-number">{pageNumber}</span>
        <input
          type="text"
          className="rudus-page-input text-body"
          value={current}
          onChange={(e) => update(e.target.value)}
          onFocus={onSelect}
        />
      </div>
    );
  }
);
PageRow.displayName = "PageRow";
