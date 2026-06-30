import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useRealtimeTurns } from "../hooks/useRealtimeTurns";
import { useTurnsStore } from "../store/useTurnsStore";
import ScoreInput from "../components/Public/ScoreInput";
import { TARGET_TOTAL } from "../utils/calculations";
import FinishPage from "../components/Public/FinishPage";
import JourneyMap from "../components/Progress/JourneyMap";
import DartboardHeader from "../components/Dartboard/DartboardHeader";
import LocalProgress from "../components/Progress/LocalProgress";

export default function AdminPage() {
  useRealtimeTurns();

  const turns = useTurnsStore((state) => state.turns);
  const totalScored = useTurnsStore((state) => state.totalScored);
  const percentProgress = (totalScored / TARGET_TOTAL) * 100;

  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  // const [error, setError] = useState("");
  const [, setError] = useState("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const parsed = Number(score);

    if (isNaN(parsed)) {
      setError("Enter a valid number");
      return;
    }

    if (parsed < 0 || parsed > 180) {
      setError("Score must be between 0 and 180");
      return;
    }

    setError("");

    await supabase.from("turns").insert({
      player_name: name || null,
      score: parsed,
    });

    setScore("");
    setName("");
  }

  // async function undoTurn(id: string) {
  //   await supabase.from("turns").update({ is_undone: true }).eq("id", id);
  // }
  async function undoTurn(id: string) {
    const { error } = await supabase
      .from("turns")
      .update({ is_undone: true })
      .eq("id", id);

    if (error) {
      setError(error.message);
    }
  }

  async function saveTurn(score: number) {
    const { error } = await supabase.from("turns").insert({
      player_name: name || null,
      score,
    });

    if (error) {
      setError(error.message);
      return;
    }

    setName("");
  }
  if (percentProgress === 100) return <FinishPage />;
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-3xl" style={{ display: "grid", gap: "5px" }}>
        <DartboardHeader />
        <JourneyMap total={totalScored} />
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <ScoreInput
            onSubmitScore={saveTurn}
            onUndoTurn={undoTurn}
            turns={turns}
            totalScored={totalScored}
          />
          <LocalProgress total={totalScored} />
          {/* <input
            type="number"
            placeholder="Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700 text-3xl"
          />

          {error && <div className="text-red-400">{error}</div>}

          <button
            type="submit"
            className="w-full bg-amber-400 text-black font-bold py-4 rounded-xl text-xl"
          >
            Add Score
          </button> */}
        </form>
      </div>
    </div>
  );
}
