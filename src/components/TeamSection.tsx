import React from "react";
import { ScoreButton } from "./ScoreButton";
import { ScoreDisplay } from "./ScoreDisplay";
import type { TeamSectionProps } from "../types";

export const TeamSection: React.FC<TeamSectionProps> = ({
  team,
  onScoreIncrement,
  onScoreDecrement,
  teamColor,
}) => {
  const sectionStyle = teamColor
    ? ({
        "--section-color": teamColor,
      } as React.CSSProperties)
    : {};

  return (
    <section className="team-section" style={sectionStyle}>
      <h2 className="team-name">{team.name}</h2>
      <ScoreDisplay score={team.score} teamName={team.name} />
      <div className="button-container">
        <ScoreButton onClick={onScoreIncrement} teamName={team.name} primary>
          +
        </ScoreButton>
        <ScoreButton
          onClick={onScoreDecrement}
          teamName={team.name}
          className="score-button--text"
        >
          subtract
        </ScoreButton>
      </div>
    </section>
  );
};
