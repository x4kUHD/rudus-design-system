import { useState, type ReactNode } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { ColorSwatch } from "../ColorSwatch/ColorSwatch";
import styles from "./MeasurementRow.module.css";

export interface MeasurementRowProps {
  color?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  selected?: boolean;
  onSelect?: () => void;
  children?: ReactNode;
}

export function MeasurementRow({
  color,
  label,
  placeholder = "Untitled",
  value,
  collapsed,
  defaultCollapsed = true,
  onToggle,
  selected = false,
  onSelect,
  children,
}: MeasurementRowProps) {
  const isControlled = collapsed !== undefined;
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const current = isControlled ? collapsed : internalCollapsed;

  const isEmpty = !label;
  const display = isEmpty ? placeholder : label;

  const handleChevron = (e: React.MouseEvent) => {
    e.stopPropagation();
    const next = !current;
    if (!isControlled) setInternalCollapsed(next);
    onToggle?.(next);
    onSelect?.();
  };

  return (
    <>
      <div
        className={`${styles.row} ${selected ? styles.selected : ""} text-body`}
        onClick={onSelect}
      >
        <span
          className={`${styles.chevron} ${current ? styles.collapsed : ""}`}
          onClick={handleChevron}
          role="button"
          aria-expanded={!current}
          aria-label={current ? "Expand" : "Collapse"}
        >
          <IconChevronDown size={16} stroke={1} />
        </span>
        <ColorSwatch color={color} variant="default" />
        <span
          className={`${styles.label} ${isEmpty ? styles.placeholder : ""}`}
        >
          {display}
        </span>
        {value && <span className={styles.value}>{value}</span>}
      </div>
      {!current && children}
    </>
  );
}
