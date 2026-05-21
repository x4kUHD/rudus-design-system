import { forwardRef, type HTMLAttributes } from "react";
import "./ColorSwatch.css";

export type ColorSwatchVariant = "default" | "border" | "disabled";

export interface ColorSwatchProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
  variant?: ColorSwatchVariant;
}

export const ColorSwatch = forwardRef<HTMLDivElement, ColorSwatchProps>(
  ({ color, variant = "default", className, style, ...rest }, ref) => {
    const computedStyle = color
      ? variant === "border"
        ? { borderColor: color }
        : variant === "default"
          ? { backgroundColor: color }
          : undefined
      : undefined;

    return (
      <div
        ref={ref}
        className={`rudus-swatch rudus-swatch-${variant}${className ? ` ${className}` : ""}`}
        style={{ ...computedStyle, ...style }}
        {...rest}
      />
    );
  }
);
ColorSwatch.displayName = "ColorSwatch";
