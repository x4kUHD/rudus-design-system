import styles from "./SubMeasurementRow.module.css";

export interface SubMeasurementRowProps {
  label?: string;
  placeholder?: string;
  value?: string;
  selected?: boolean;
  onSelect?: () => void;
}

export function SubMeasurementRow({
  label,
  placeholder = "Untitled",
  value,
  selected = false,
  onSelect,
}: SubMeasurementRowProps) {
  const isEmpty = !label;
  const display = isEmpty ? placeholder : label;

  return (
    <div
      className={`${styles.row} ${selected ? styles.selected : ""} text-body`}
      onClick={onSelect}
    >
      <span className={`${styles.label} ${isEmpty ? styles.placeholder : ""}`}>
        {display}
      </span>
      {value && <span className={styles.value}>{value}</span>}
    </div>
  );
}
