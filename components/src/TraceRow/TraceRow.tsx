import { ColorSwatch } from "../ColorSwatch/ColorSwatch";
import styles from "./TraceRow.module.css";

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
      className={`${styles.row} ${selected ? styles.selected : ""} text-body`}
      onClick={onSelect}
    >
      <ColorSwatch color={color} variant="default" />
      <span
        className={`${styles.label} ${isEmpty ? styles.placeholder : ""} text-body`}
      >
        {display}
      </span>
    </div>
  );
}
