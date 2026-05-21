import "./SubMeasurementRow.css";

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
      className={`rudus-sub-measurement-row ${selected ? "rudus-sub-measurement-row-selected" : ""} text-body`}
      onClick={onSelect}
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
