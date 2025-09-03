import type { Team } from '../types';

/**
 * Validates that a score is a valid non-negative integer
 */
export const isValidScore = (score: unknown): score is number => {
  return typeof score === 'number' && 
         Number.isInteger(score) && 
         score >= 0;
};

/**
 * Safely formats a score for display
 */
export const formatScore = (score: number): string => {
  return isValidScore(score) ? score.toString() : '0';
};

/**
 * Gets the winning team, or null if it's a tie
 */
export const getWinningTeam = (team1: Team, team2: Team): Team | null => {
  if (team1.score > team2.score) return team1;
  if (team2.score > team1.score) return team2;
  return null; // Tie
};

/**
 * Calculates the score difference between two teams
 */
export const getScoreDifference = (team1: Team, team2: Team): number => {
  return Math.abs(team1.score - team2.score);
};

/**
 * Checks if the game is a tie
 */
export const isTieGame = (team1: Team, team2: Team): boolean => {
  return team1.score === team2.score;
};

/**
 * Gets game status as a human-readable string
 */
export const getGameStatus = (team1: Team, team2: Team): string => {
  if (isTieGame(team1, team2)) {
    return team1.score === 0 ? 'Game not started' : 'Tie game';
  }
  
  const winner = getWinningTeam(team1, team2);
  const difference = getScoreDifference(team1, team2);
  
  return `${winner?.name} leading by ${difference}`;
};
