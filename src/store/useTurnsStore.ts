import { create } from "zustand";
import type { Turn } from "../types/Turn";

interface TurnsStore {
  turns: Turn[];
  setTurns: (turns: Turn[]) => void;
}

export const useTurnsStore = create<TurnsStore>((set) => ({
  turns: [],
  setTurns: (turns) => set({ turns }),
}));
