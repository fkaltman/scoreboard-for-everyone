import React from "react";
import type { ScoreDisplayProps } from "../types";

const ScoreDisplay: React.FC<ScoreDisplayProps> = ({ score, teamName }) => {
  // Ensure score is always a valid number
  const displayScore: number =
    Number.isInteger(score) && score >= 0 ? score : 0;

  return (
    <div
      className="score-display"
      aria-label={`${teamName} score: ${displayScore}`}
      role="status"
      aria-live="polite"
    >
      {displayScore}
    </div>
  );
};

export { ScoreDisplay };
