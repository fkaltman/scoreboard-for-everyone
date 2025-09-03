import { useState, useCallback } from 'react';
import type { Team, ScoreAction } from '../types';

interface UseScoreboardReturn {
  tsunamiTeam: Team;
  opponentTeam: Team;
  updateTsunamiScore: (action: ScoreAction) => void;
  updateOpponentScore: (action: ScoreAction) => void;
  resetScores: () => void;
  getTotalGoals: () => number;
}

export const useScoreboard = (
  initialTsunamiScore: number = 0,
  initialOpponentScore: number = 0
): UseScoreboardReturn => {
  const [tsunamiTeam, setTsunamiTeam] = useState<Team>({
    name: "Tsunami",
    score: initialTsunamiScore,
    emoji: "🌊"
  });

  const [opponentTeam, setOpponentTeam] = useState<Team>({
    name: "Opponent", 
    score: initialOpponentScore,
    emoji: "⚽"
  });

  const updateTsunamiScore = useCallback((action: ScoreAction): void => {
    setTsunamiTeam((prevTeam: Team) => ({
      ...prevTeam,
      score: calculateNewScore(prevTeam.score, action)
    }));
  }, []);

  const updateOpponentScore = useCallback((action: ScoreAction): void => {
    setOpponentTeam((prevTeam: Team) => ({
      ...prevTeam,
      score: calculateNewScore(prevTeam.score, action)
    }));
  }, []);

  const resetScores = useCallback((): void => {
    setTsunamiTeam(prev => ({ ...prev, score: 0 }));
    setOpponentTeam(prev => ({ ...prev, score: 0 }));
  }, []);

  const getTotalGoals = useCallback((): number => {
    return tsunamiTeam.score + opponentTeam.score;
  }, [tsunamiTeam.score, opponentTeam.score]);

  return {
    tsunamiTeam,
    opponentTeam,
    updateTsunamiScore,
    updateOpponentScore,
    resetScores,
    getTotalGoals
  };
};

// Helper function with proper typing
const calculateNewScore = (currentScore: number, action: ScoreAction): number => {
  switch (action) {
    case 'increment':
      return currentScore + 1;
    case 'decrement':
      return Math.max(0, currentScore - 1);
    case 'reset':
      return 0;
    default:
      // This should never happen with proper typing, but TypeScript requires it
      return currentScore;
  }
};
