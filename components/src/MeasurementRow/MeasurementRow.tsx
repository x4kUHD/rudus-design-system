import { useState, type ReactNode } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { ColorSwatch } from "../ColorSwatch/ColorSwatch";
import "./MeasurementRow.css";

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
        className={`rudus-measurement-row ${selected ? "rudus-measurement-row-selected" : ""} text-body`}
        onClick={onSelect}
      >
        <span
          className={`rudus-measurement-chevron ${current ? "rudus-measurement-collapsed" : ""}`}
          onClick={handleChevron}
          role="button"
          aria-expanded={!current}
          aria-label={current ? "Expand" : "Collapse"}
        >
          <IconChevronDown size={16} stroke={1} />
        </span>
        <ColorSwatch color={color} variant="default" />
        <span
          className={`rudus-measurement-label ${isEmpty ? "rudus-measurement-placeholder" : ""}`}
        >
          {display}
        </span>
        {value && <span className="rudus-measurement-value">{value}</span>}
      </div>
      {!current && children}
    </>
  );
}
