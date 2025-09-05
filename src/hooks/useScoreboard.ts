import { useState, useCallback } from "react";
import type { Team, TeamCustomization } from "../types";

export const useScoreboard = () => {
  const [homeTeam, setHomeTeam] = useState<Team>({
    name: "Home Team",
    score: 0,
  });

  const [opponentTeam, setOpponentTeam] = useState<Team>({
    name: "Opponent",
    score: 0,
  });

  const [teamCustomization, setTeamCustomization] = useState<TeamCustomization>(
    {
      name: "Home Team",
      color: "#00f5ff",
      backgroundColor: "#0f0f23",
    }
  );

  const incrementHomeScore = useCallback(() => {
    setHomeTeam((prev) => ({ ...prev, score: prev.score + 1 }));
  }, []);

  const incrementOpponentScore = useCallback(() => {
    setOpponentTeam((prev) => ({ ...prev, score: prev.score + 1 }));
  }, []);

  const decrementHomeScore = useCallback(() => {
    setHomeTeam((prev) => ({ ...prev, score: Math.max(0, prev.score - 1) }));
  }, []);

  const decrementOpponentScore = useCallback(() => {
    setOpponentTeam((prev) => ({
      ...prev,
      score: Math.max(0, prev.score - 1),
    }));
  }, []);

  const resetScores = useCallback(() => {
    setHomeTeam((prev) => ({ ...prev, score: 0 }));
    setOpponentTeam((prev) => ({ ...prev, score: 0 }));
  }, []);

  const updateTeamName = useCallback((name: string) => {
    setHomeTeam((prev) => ({ ...prev, name }));
    setTeamCustomization((prev) => ({ ...prev, name }));
  }, []);

  const updateTeamColor = useCallback((color: string) => {
    setTeamCustomization((prev) => ({ ...prev, color }));
  }, []);

  const updateBackgroundColor = useCallback((backgroundColor: string) => {
    setTeamCustomization((prev) => ({ ...prev, backgroundColor }));
  }, []);

  return {
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
  };
};
