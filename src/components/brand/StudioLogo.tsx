import React from "react";

interface StudioLogoProps {
  className?: string;
  variant?: "dark" | "light" | "accent";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function StudioLogo({
  className = "",
  variant = "dark",
  showTagline = false,
  size = "md",
}: StudioLogoProps) {
  // Luxury palette definition
  const colors = {
    dark: {
      mark: "#17191C",
      markAccent: "#3457E5",
      text: "#17191C",
      tagline: "#777872",
      border: "rgba(23, 25, 28, 0.15)",
    },
    light: {
      mark: "#F5F1E8",
      markAccent: "#F2D675",
      text: "#F5F1E8",
      tagline: "rgba(245, 241, 232, 0.6)",
      border: "rgba(245, 241, 232, 0.15)",
    },
    accent: {
      mark: "#3457E5",
      markAccent: "#F15A38",
      text: "#17191C",
      tagline: "#777872",
      border: "rgba(52, 87, 229, 0.2)",
    },
  }[variant];

  // Sizing definitions
  const sizeMap = {
    sm: { height: 28, iconSize: 22, textSize: "text-[14px]", tagSize: "text-[8.5px]" },
    md: { height: 34, iconSize: 26, textSize: "text-[17px]", tagSize: "text-[9px]" },
    lg: { height: 42, iconSize: 32, textSize: "text-[21px]", tagSize: "text-[10px]" },
    xl: { height: 54, iconSize: 42, textSize: "text-[27px]", tagSize: "text-[11px]" },
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-3 select-none group focus:outline-none ${className}`}
      aria-label="FORMA — Graphic Design & Branding Studio"
    >
      {/* Precision Geometric Monogram Symbol */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.03]"
        style={{ width: sizeMap.iconSize, height: sizeMap.iconSize }}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer Architectural Square Frame with Beveled Corner */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="2"
            stroke={colors.mark}
            strokeWidth="3.2"
          />
          {/* Inner Swiss Grid Structure: Diagonal Axis & Geometric Aperture */}
          <line
            x1="2"
            y1="38"
            x2="38"
            y2="2"
            stroke={colors.mark}
            strokeWidth="1.8"
            strokeOpacity="0.4"
          />
          {/* Top-Right Optical Aperture Circle */}
          <circle
            cx="26"
            cy="14"
            r="6"
            fill={colors.mark}
          />
          {/* Bottom-Left Precision Pivot */}
          <rect
            x="8"
            y="22"
            width="8"
            height="8"
            fill={colors.markAccent}
          />
        </svg>
      </div>

      {/* Typographic Wordmark & Studio Descriptor */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-display font-extrabold tracking-[0.24em] uppercase text-midnight-ink ${sizeMap.textSize} transition-colors`}
            style={{ color: colors.text }}
          >
            FORMA
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full inline-block mb-0.5"
            style={{ backgroundColor: colors.markAccent }}
          />
        </div>

        {showTagline && (
          <span
            className={`font-mono tracking-[0.2em] uppercase font-medium mt-1 text-muted-gray ${sizeMap.tagSize}`}
            style={{ color: colors.tagline }}
          >
            Studio &bull; Graphic Design
          </span>
        )}
      </div>
    </div>
  );
}

// Backward compatibility export
export { StudioLogo as GrowLogo };
