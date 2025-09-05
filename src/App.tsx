import React, { useState, useEffect } from "react";
import { TeamSection } from "./components/TeamSection";
import { TeamSettings } from "./components/TeamSettings";
import { useScoreboard } from "./hooks/useScoreboard";
import "./App.css";

function App() {
  const {
    homeTeam,
    opponentTeam,
    teamCustomization,
    incrementHomeScore,
    incrementOpponentScore,
    decrementHomeScore,
    decrementOpponentScore,
    resetScores,
    updateTeamName,
    updateTeamColor,
    updateBackgroundColor,
  } = useScoreboard();

  const [showSettings, setShowSettings] = useState(false);

  // Apply dynamic background color
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--dynamic-bg-color",
      teamCustomization.backgroundColor
    );
    document.documentElement.style.setProperty(
      "--team-color",
      teamCustomization.color
    );
  }, [teamCustomization.backgroundColor, teamCustomization.color]);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">{teamCustomization.name}</h1>
      </header>

      <main className="scoreboard">
        <TeamSection
          team={{ ...homeTeam, name: "Home Team" }}
          onScoreIncrement={incrementHomeScore}
          onScoreDecrement={decrementHomeScore}
          teamColor={teamCustomization.color}
        />

        <div className="vs-divider">VS</div>

        <TeamSection
          team={{ ...opponentTeam, name: "Opponent" }}
          onScoreIncrement={incrementOpponentScore}
          onScoreDecrement={decrementOpponentScore}
        />
      </main>

      <footer className="app-footer">
        <div className="footer-buttons">
          <button
            onClick={resetScores}
            className="reset-button"
            aria-label="Reset all scores to zero"
          >
            Reset Scores
          </button>
          <button
            className="settings-button"
            onClick={() => setShowSettings(true)}
            aria-label="Open team settings"
          >
            ⚙️
          </button>
        </div>
      </footer>

      {showSettings && (
        <TeamSettings
          teamName={teamCustomization.name}
          teamColor={teamCustomization.color}
          backgroundColor={teamCustomization.backgroundColor}
          onTeamNameChange={updateTeamName}
          onTeamColorChange={updateTeamColor}
          onBackgroundColorChange={updateBackgroundColor}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

export default App;
