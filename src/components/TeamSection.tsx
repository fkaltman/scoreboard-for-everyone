import React from "react";
import type { TeamSectionProps } from "../types";
import ScoreButton from "./ScoreButton";
import ScoreDisplay from "./ScoreDisplay";

const TeamSection: React.FC<TeamSectionProps> = ({ team, onScoreChange }) => {
  const handleIncrement = (): void => {
    onScoreChange("increment");
  };

  const teamDisplayName: string = team.name;

  return (
    <div className="team">
      <h2 className="team-name">{teamDisplayName}</h2>
      <ScoreDisplay score={team.score} teamName={team.name} />
      <ScoreButton
        onClick={handleIncrement}
        aria-label={`Add goal for ${team.name}`}
      />
    </div>
  );
};

export default TeamSection;
