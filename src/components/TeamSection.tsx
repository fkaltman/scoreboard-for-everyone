import React from "react";
import type { TeamSectionProps } from "../types";
import ScoreButton from "./ScoreButton";
import ScoreDisplay from "./ScoreDisplay";

const TeamSection: React.FC<TeamSectionProps> = ({ team, onScoreChange }) => {
  const handleIncrement = (): void => {
    onScoreChange("increment");
  };

  const handleDecrement = (): void => {
    onScoreChange("decrement");
  };

  const teamDisplayName: string = team.name;

  return (
    <div className="team">
      <h2 className="team-name">{teamDisplayName}</h2>
      <ScoreDisplay score={team.score} teamName={team.name} />
      <div className="button-container">
        <ScoreButton
          primary
          onClick={handleIncrement}
          aria-label={`Add a goal for ${team.name}`}
        >
          +
        </ScoreButton>
        <ScoreButton
          onClick={handleDecrement}
          aria-label={`Remove a goal for ${team.name}`}
          className="score-button--text"
        >
          subtract
        </ScoreButton>
      </div>
    </div>
  );
};

export default TeamSection;
