import type { Turn } from "../types/Turn";

export const TARGET_TOTAL = 800101;

export function getValidTurns(turns: Turn[]) {
  return turns.filter((turn) => !turn.is_undone);
}

export function getTotalScored(turns: Turn[]) {
  return getValidTurns(turns).reduce((sum, turn) => {
    return sum + turn.score;
  }, 0);
}

// How much is left to reach 800101
export function getRemaining(turns: Turn[]) {
  return TARGET_TOTAL - getTotalScored(turns);
}

// Progress from 0 → 100%
export function getProgress(turns: Turn[]) {
  const scored = getTotalScored(turns);
  return (scored / TARGET_TOTAL) * 100;
}
