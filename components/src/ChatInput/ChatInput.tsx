import { useState, type KeyboardEvent } from "react";
import { IconSend2 } from "@tabler/icons-react";
import styles from "./ChatInput.module.css";

export interface ChatInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Ask the plan",
  disabled = false,
}: ChatInputProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState("");
  const current = isControlled ? value : internalValue;

  const update = (next: string) => {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  const submit = () => {
    const trimmed = current.trim();
    if (!trimmed || disabled) return;
    onSubmit?.(trimmed);
    if (!isControlled) setInternalValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const canSubmit = current.trim().length > 0 && !disabled;

  return (
    <div className={styles.container}>
      <textarea
        className={`${styles.textarea} text-body`}
        value={current}
        onChange={(e) => update(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        rows={1}
      />
      <button
        type="button"
        className={styles.sendButton}
        onClick={submit}
        disabled={!canSubmit}
        aria-label="Send"
      >
        <IconSend2 size={16} stroke={1} />
      </button>
    </div>
  );
}
