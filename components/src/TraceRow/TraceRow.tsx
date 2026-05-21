import { forwardRef, type HTMLAttributes } from "react";
import { ColorSwatch } from "../ColorSwatch/ColorSwatch";
import "./TraceRow.css";

export interface TraceRowProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  label?: string;
  placeholder?: string;
  selected?: boolean;
  onSelect?: () => void;
}

export const TraceRow = forwardRef<HTMLDivElement, TraceRowProps>(
  (
    {
      color,
      label,
      placeholder = "Untitled",
      selected = false,
      onSelect,
      className,
      ...rest
    },
    ref,
  ) => {
    const isEmpty = !label;
    const display = isEmpty ? placeholder : label;

    return (
      <div
        ref={ref}
        className={`rudus-trace-row ${selected ? "rudus-trace-row-selected" : ""} text-body${className ? ` ${className}` : ""}`}
        onClick={onSelect}
        {...rest}
      >
        <ColorSwatch color={color} variant="default" />
        <span
          className={`rudus-trace-label ${isEmpty ? "rudus-trace-placeholder" : ""} text-body`}
        >
          {display}
        </span>
      </div>
    );
  },
);
TraceRow.displayName = "TraceRow";
