import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useRealtimeTurns } from "../hooks/useRealtimeTurns";
import { useTurnsStore } from "../store/useTurnsStore";
import ScoreInput from "../components/Public/ScoreInput";

export default function AdminPage() {
  useRealtimeTurns();

  const turns = useTurnsStore((state) => state.turns);

  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const [error, setError] = useState("");

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

  async function undoTurn(id: string) {
    await supabase.from("turns").update({ is_undone: true }).eq("id", id);
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

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-3xl mx-auto">
        {/* <h1 className="text-4xl font-bold mb-8">Admin Controls</h1> */}

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <ScoreInput onSubmitScore={saveTurn} />
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

        <div className="space-y-4">
          <h3>Previous Scores</h3>
          {turns.slice(0, 10).map((turn) => (
            <div
              key={turn.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex justify-between items-center"
            >
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                  gap: "10px",
                }}
                className="flex items-center justify-between gap-3 rounded-lg bg-zinc-900/60 px-4 py-3 border border-zinc-800"
              >
                {/* Score */}
                <div className="flex items-baseline gap-2">
                  <div className="text-lg font-semibold text-white">
                    {turn.score}
                  </div>
                </div>

                {/* Status / action */}
                <div className="flex items-center gap-2">
                  {!turn.is_undone ? (
                    <button
                      onClick={() => undoTurn(turn.id)}
                      className="
                        text-xs font-medium
                        px-3 py-1.5
                        rounded-md
                        bg-red-500/10 text-red-400
                        border border-red-500/20
                        hover:bg-red-500/20 hover:text-red-300
                        active:scale-95
                        transition
                      "
                    >
                      Undo
                    </button>
                  ) : (
                    <span className="text-xs text-zinc-600 italic">undone</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
