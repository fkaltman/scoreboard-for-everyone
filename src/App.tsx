import React from "react";
import type { AppProps } from "./types";
import { TeamSection } from "./components";
import { useScoreboard } from "./hooks";
import "./App.css";

const App: React.FC<AppProps> = ({
  initialTsunamiScore = 0,
  initialOpponentScore = 0,
}) => {
  const {
    tsunamiTeam,
    opponentTeam,
    updateTsunamiScore,
    updateOpponentScore,
    resetScores,
  } = useScoreboard(initialTsunamiScore, initialOpponentScore);

  return (
    <main role="main">
      <h1>Tsunami</h1>
      <div className="scoreboard" role="region" aria-label="Soccer scoreboard">
        <TeamSection team={tsunamiTeam} onScoreChange={updateTsunamiScore} />

        <div className="vs-divider" aria-hidden="true">
          VS
        </div>

        <TeamSection team={opponentTeam} onScoreChange={updateOpponentScore} />
      </div>

      <div className="reset-container">
        <button
          className="reset-button"
          onClick={resetScores}
          aria-label="Reset both team scores to zero"
          type="button"
        >
          Reset Game
        </button>
      </div>
    </main>
  );
};

export default App;
