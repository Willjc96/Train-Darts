import { create } from "zustand";
import type { Turn } from "../types/Turn";

interface TurnsStore {
  turns: Turn[];
  totalScored: number;
  setTurns: (turns: Turn[]) => void;
  setTotalScored: (total: number) => void;
}

export const useTurnsStore = create<TurnsStore>((set) => ({
  turns: [],
  totalScored: 0,
  setTurns: (turns) => set({ turns }),
  setTotalScored: (totalScored) => set({ totalScored }),
}));
