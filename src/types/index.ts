// Type definitions for the Tsunami Scoreboard

export interface Team {
  name: string;
  score: number;
  emoji?: string;
}

export interface ScoreboardState {
  tsunamiTeam: Team;
  opponentTeam: Team;
}

export type ScoreAction = "increment" | "decrement" | "reset";

export interface ScoreButtonProps {
  onClick: () => void;
  disabled?: boolean;
  "aria-label"?: string;
}

export interface ScoreDisplayProps {
  score: number;
  teamName: string;
}

export interface TeamSectionProps {
  team: Team;
  onScoreChange: (action: ScoreAction) => void;
}

// Event handler types
export type ButtonClickHandler = (
  event: React.MouseEvent<HTMLButtonElement>
) => void;
export type ScoreUpdateHandler = (newScore: number) => void;

// Component props with strict typing
export interface AppProps {
  initialTsunamiScore?: number;
  initialOpponentScore?: number;
}
