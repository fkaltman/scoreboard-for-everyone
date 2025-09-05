// Type definitions for the Scoreboard

export interface Team {
  name: string;
  score: number;
}

export interface TeamCustomization {
  name: string;
  color: string;
  backgroundColor: string;
}

export interface ScoreButtonProps {
  onClick: () => void;
  teamName?: string;
  disabled?: boolean;
  "aria-label"?: string;
  children?: React.ReactNode;
  primary?: boolean;
  className?: string;
}

export interface ScoreDisplayProps {
  score: number;
  teamName: string;
}

export interface TeamSectionProps {
  team: Team;
  onScoreIncrement: () => void;
  onScoreDecrement: () => void;
  teamColor?: string;
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
