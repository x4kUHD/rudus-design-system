import type { MouseEvent } from "react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import "./LayerRow.css";

export interface LayerRowProps {
  label?: string;
  placeholder?: string;
  hidden?: boolean;
  onToggleHidden?: () => void;
  selected?: boolean;
  onSelect?: () => void;
}

export function LayerRow({
  label,
  placeholder = "Untitled",
  hidden = false,
  onToggleHidden,
  selected = false,
  onSelect,
}: LayerRowProps) {
  const isEmpty = !label;
  const display = isEmpty ? placeholder : label;

  const handleToggle = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onToggleHidden?.();
  };

  return (
    <div
      className={`rudus-layer-row ${selected ? "rudus-layer-row-selected" : ""} ${hidden ? "rudus-layer-hidden" : ""} text-body`}
      onClick={onSelect}
    >
      <span
        className={`rudus-layer-label ${isEmpty ? "rudus-layer-placeholder" : ""} text-body`}
      >
        {display}
      </span>
      <span
        className="rudus-layer-eye"
        onClick={handleToggle}
        role="button"
        aria-label={hidden ? "Show layer" : "Hide layer"}
        aria-pressed={hidden}
      >
        {hidden ? (
          <IconEyeClosed size={16} stroke={1} />
        ) : (
          <IconEye size={16} stroke={1} />
        )}
      </span>
    </div>
  );
}
