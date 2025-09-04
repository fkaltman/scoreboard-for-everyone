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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (!disabled) {
      onClick();
    }
  };

  let buttonClass = "score-button";
  if (primary) {
    buttonClass += " score-button--primary";
  }
  if (className) {
    buttonClass = className;
  }

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      aria-label={ariaLabel || "Increment score"}
      type="button"
    >
      {children}
    </button>
  );
};

export default ScoreButton;
