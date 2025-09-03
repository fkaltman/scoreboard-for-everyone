import { useState } from "react";
import "./App.css";

function App() {
  const [countTsunami, setCountTsunami] = useState(0);
  const [countOtherTeam, setCountOtherTeam] = useState(0);

  return (
    <>
      <h1>Tsunami</h1>
      <div className="scoreboard">
        <div className="team">
          <h2 className="team-name">Tsunami</h2>
          <div className="score-display">{countTsunami}</div>
          <button
            className="score-button"
            onClick={() => setCountTsunami((countTsunami) => countTsunami + 1)}
          >
            +
          </button>
        </div>

        <div className="vs-divider">VS</div>

        <div className="team">
          <h2 className="team-name">Opponent</h2>
          <div className="score-display">{countOtherTeam}</div>
          <button
            className="score-button"
            onClick={() =>
              setCountOtherTeam((countOtherTeam) => countOtherTeam + 1)
            }
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
