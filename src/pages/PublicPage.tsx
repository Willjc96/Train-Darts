import JourneyMap from "../components/Progress/JourneyMap";
import LocalProgress from "../components/Progress/LocalProgress";
import FinishPage from "../components/Public/FinishPage";
import TrainProgress from "../components/Public/TrainProgress";
// import TrainSubProgress from "../components/Public/TrainSubProgress";
import { useRealtimeTurns } from "../hooks/useRealtimeTurns";
import { useTurnsStore } from "../store/useTurnsStore";
import {
  getRemaining,
  getProgress,
  getTotalScored,
  TARGET_TOTAL,
} from "../utils/calculations";

export default function PublicPage() {
  useRealtimeTurns();

  const score = useTurnsStore((s) => s.turns);

  const percentProgress = getProgress(score);
  const remaining = getRemaining(score);

  console.log({ remaining, score });
  if (percentProgress === 100) return <FinishPage />;
  return (
    <div className="min-h-screen bg-zinc-950 text-amber-400 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Railway Darts Challenge</h1>

        <div className="text-center py-16">
          <div className="text-8xl font-black tracking-wider">
            {`${getTotalScored(score).toLocaleString()} / ${TARGET_TOTAL.toLocaleString()}`}
          </div>
          <div className="text-2xl mt-4 text-zinc-400">
            {`${remaining.toLocaleString()} remaining to reach goal`}
          </div>
          {/* <TrainProgress progress={percentProgress} /> */}
          {/* {TrainSubProgress({ progress: subProgress })} */}
          {/* <TrainSubProgress progress={progress} /> */}
          <JourneyMap total={getTotalScored(score)} />

          <LocalProgress total={getTotalScored(score)} />
          <div className="text-2xl mt-4 text-zinc-400">Recent Scores</div>
        </div>

        <div className="w-full h-6 bg-zinc-800 rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-amber-400"
            style={{ width: `${percentProgress}%` }}
          />
        </div>

        <div className="grid gap-4">
          {score.slice(0, 10).map((turn) => (
            <div
              key={turn.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex justify-between"
            >
              {/* <div>{turn.player_name || "Anonymous"}</div> */}

              <div className="font-bold text-xl">{turn.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
