import styles from "./ColorSwatch.module.css";

export type ColorSwatchVariant = "default" | "border" | "disabled";

export interface ColorSwatchProps {
  color?: string;
  variant?: ColorSwatchVariant;
}

export function ColorSwatch({ color, variant = "default" }: ColorSwatchProps) {
  const variantClass =
    variant === "border"
      ? styles.border
      : variant === "disabled"
        ? styles.disabled
        : styles.default;

  const style = color
    ? variant === "border"
      ? { borderColor: color }
      : variant === "default"
        ? { backgroundColor: color }
        : undefined
    : undefined;

  return <div className={`${styles.swatch} ${variantClass}`} style={style} />;
}
