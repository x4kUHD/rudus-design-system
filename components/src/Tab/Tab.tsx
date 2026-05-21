import type { MouseEvent, ReactNode } from "react";
import { IconX } from "@tabler/icons-react";
import styles from "./Tab.module.css";

export interface TabProps {
  active?: boolean;
  icon?: ReactNode;
  onClose?: () => void;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export function Tab({
  active = false,
  icon,
  onClose,
  onClick,
  disabled = false,
  children,
}: TabProps) {
  const handleClose = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    if (!disabled) onClose?.();
  };

  return (
    <button
      type="button"
      className={`${styles.tab} ${active ? styles.active : ""} text-body`}
      disabled={disabled}
      onClick={onClick}
      aria-pressed={active}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
      {onClose && (
        <span
          className={styles.close}
          onClick={handleClose}
          role="button"
          aria-label="Close tab"
        >
          <IconX size={14} stroke={1.5} />
        </span>
      )}
    </button>
  );
}
