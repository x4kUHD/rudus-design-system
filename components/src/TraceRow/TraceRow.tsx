import { ColorSwatch } from "../ColorSwatch/ColorSwatch";
import "./TraceRow.css";

export interface TraceRowProps {
  color?: string;
  label?: string;
  placeholder?: string;
  selected?: boolean;
  onSelect?: () => void;
}

export function TraceRow({
  color,
  label,
  placeholder = "Untitled",
  selected = false,
  onSelect,
}: TraceRowProps) {
  const isEmpty = !label;
  const display = isEmpty ? placeholder : label;

  return (
    <div
      className={`rudus-trace-row ${selected ? "rudus-trace-row-selected" : ""} text-body`}
      onClick={onSelect}
    >
      <ColorSwatch color={color} variant="default" />
      <span
        className={`rudus-trace-label ${isEmpty ? "rudus-trace-placeholder" : ""} text-body`}
      >
        {display}
      </span>
    </div>
  );
}
