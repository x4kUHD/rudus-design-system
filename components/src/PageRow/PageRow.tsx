import { useState } from "react";
import styles from "./PageRow.module.css";

export interface PageRowProps {
  pageNumber: number;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  selected?: boolean;
  onSelect?: () => void;
}

export function PageRow({
  pageNumber,
  value,
  defaultValue = "",
  onChange,
  selected = false,
  onSelect,
}: PageRowProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const current = isControlled ? value : internalValue;

  const update = (next: string) => {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  return (
    <div
      className={`${styles.row} ${selected ? styles.selected : ""} text-body`}
      onClick={onSelect}
    >
      <span className={styles.number}>{pageNumber}</span>
      <input
        type="text"
        className={`${styles.input} text-body`}
        value={current}
        onChange={(e) => update(e.target.value)}
        onFocus={onSelect}
      />
    </div>
  );
}
