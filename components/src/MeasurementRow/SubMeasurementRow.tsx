import { forwardRef, type HTMLAttributes } from "react";
import "./SubMeasurementRow.css";

export interface SubMeasurementRowProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  selected?: boolean;
  onSelect?: () => void;
}

export const SubMeasurementRow = forwardRef<HTMLDivElement, SubMeasurementRowProps>(
  (
    { label, placeholder = "Untitled", value, selected = false, onSelect, className, ...rest },
    ref
  ) => {
    const isEmpty = !label;
    const display = isEmpty ? placeholder : label;

    return (
      <div
        ref={ref}
        className={`rudus-sub-measurement-row ${selected ? "rudus-sub-measurement-row-selected" : ""} text-body${className ? ` ${className}` : ""}`}
        onClick={onSelect}
        {...rest}
      >
        <span
          className={`rudus-sub-measurement-label ${isEmpty ? "rudus-sub-measurement-placeholder" : ""}`}
        >
          {display}
        </span>
        {value && <span className="rudus-sub-measurement-value">{value}</span>}
      </div>
    );
  }
);
SubMeasurementRow.displayName = "SubMeasurementRow";
