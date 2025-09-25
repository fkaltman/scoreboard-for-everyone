import React from "react";
import type { ScoreButtonProps } from "../types";

const ScoreButton: React.FC<ScoreButtonProps> = ({
  onClick,
  disabled = false,
  "aria-label": ariaLabel,
  children = "+",
  primary = false,
  className,
}) => {

  const buttonClass = [
    "score-button",
    primary && "score-button--primary",
    className 
  ].filter(Boolean)
  .join(" ");
  

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || "Increment score"}
      type="button"
    >
      {children}
    </button>
  );
};

export { ScoreButton };


