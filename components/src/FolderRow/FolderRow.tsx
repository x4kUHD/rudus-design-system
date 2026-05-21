import { forwardRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { IconChevronDown, IconFolder } from "@tabler/icons-react";
import "./FolderRow.css";

export interface FolderRowProps extends HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  onToggle?: (collapsed: boolean) => void;
  icon?: ReactNode;
  selected?: boolean;
  onSelect?: () => void;
  children: ReactNode;
}

export const FolderRow = forwardRef<HTMLDivElement, FolderRowProps>(
  (
    {
      collapsed,
      defaultCollapsed = false,
      onToggle,
      icon,
      selected = false,
      onSelect,
      children,
      className,
      onClick,
      ...rest
    },
    ref
  ) => {
    const isControlled = collapsed !== undefined;
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const current = isControlled ? collapsed : internalCollapsed;

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const next = !current;
      if (!isControlled) setInternalCollapsed(next);
      onToggle?.(next);
      onSelect?.();
      onClick?.(e);
    };

    return (
      <div
        ref={ref}
        className={`rudus-folder-row ${selected ? "rudus-folder-row-selected" : ""} text-body${className ? ` ${className}` : ""}`}
        onClick={handleClick}
        role="button"
        aria-expanded={!current}
        {...rest}
      >
        <IconChevronDown
          size={16}
          stroke={1}
          className={`rudus-folder-chevron ${current ? "rudus-folder-collapsed" : ""}`}
        />
        <span className="rudus-folder-icon">
          {icon ?? <IconFolder size={16} stroke={1} />}
        </span>
        <span className="rudus-folder-label">{children}</span>
      </div>
    );
  }
);
FolderRow.displayName = "FolderRow";
