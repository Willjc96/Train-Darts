import { supabase } from "../lib/supabase";
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

export async function getNumberOfDartTurns() {
  const { count, error } = await supabase
    .from("turns")
    .select("*", { count: "exact", head: true })
    .eq("is_undone", false);

  if (error) {
    console.error(error);
    return;
  }
  return count || 0;
}

export async function getNumberOf180s() {
  const { count, error } = await supabase
    .from("turns")
    .select("*", { count: "exact", head: true })
    .eq("score", 180);

  if (error) {
    console.error(error);
    return;
  }
  return count || 0;
}

export async function getNumberOfMisses() {
  const { count, error } = await supabase
    .from("turns")
    .select("*", { count: "exact", head: true })
    .eq("score", 0)
    .eq("is_undone", false);

  if (error) {
    console.error(error);
    return;
  }
  return count || 0;
}

export async function getAverageScore() {
  const { data, error } = await supabase
    .from("turns")
    .select("score")
    .eq("is_undone", false);

  if (error) {
    console.error(error);
    return 0;
  }

  if (!data.length) return 0;

  const total = data.reduce((sum, row) => sum + row.score, 0);
  return total / data.length;
}
