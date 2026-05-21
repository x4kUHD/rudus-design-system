import type { MouseEvent } from "react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import styles from "./LayerRow.module.css";

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
      className={`${styles.row} ${selected ? styles.selected : ""} ${hidden ? styles.hidden : ""} text-body`}
      onClick={onSelect}
    >
      <span
        className={`${styles.label} ${isEmpty ? styles.placeholder : ""} text-body`}
      >
        {display}
      </span>
      <span
        className={styles.eye}
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
