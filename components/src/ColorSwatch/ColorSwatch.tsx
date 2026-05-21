import "./ColorSwatch.css";

export type ColorSwatchVariant = "default" | "border" | "disabled";

export interface ColorSwatchProps {
  color?: string;
  variant?: ColorSwatchVariant;
}

export function ColorSwatch({ color, variant = "default" }: ColorSwatchProps) {
  const style = color
    ? variant === "border"
      ? { borderColor: color }
      : variant === "default"
        ? { backgroundColor: color }
        : undefined
    : undefined;

  return (
    <div
      className={`rudus-swatch rudus-swatch-${variant}`}
      style={style}
    />
  );
}
