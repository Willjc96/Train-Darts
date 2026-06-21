import React, { useState } from "react";
import Dartboard, { type DartHit } from "../Dartboard/Dartboard";
import { MissButton, SubmitButton } from "../Dartboard/Dartboard.styles";
import { polarToCartesian } from "../Dartboard/DartboardSections";
import { CENTER } from "../Dartboard/constants";

import { TripleScoreContainer } from "../Dartboard/TripleScoreContainer";
import { getTotalScored, TARGET_TOTAL } from "../../utils/calculations";
import type { Turn } from "../../types/Turn";
import { supabase } from "../../lib/supabase";

interface ScoreInputProps {
  onSubmitScore: (score: number) => void;
  turns: Turn[];
}

// const SubmitButton = styled.button<{ numberOfDartsThrown: number }>`
//   background: green;
//   color: white;
//   border: none;
//   padding: 12px 24px;
//   border-radius: 8px;
//   font-size: 1.1rem;
//   font-weight: bold;
//   cursor: pointer;
//   margin-top: 1rem;
//   opacity: ${({ numberOfDartsThrown }) =>
//     numberOfDartsThrown === 3 ? 1 : 0.5};

//   transition: all 0.2s ease;

//   &:hover {
//     background: #d62828;
//     transform: translateY(-2px);
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

export default function ScoreInput({ onSubmitScore, turns }: ScoreInputProps) {
  const [darts, setDarts] = useState<DartHit[]>([]);
  const [lastTotal, setLastTotal] = useState(0);
  const [markers, setMarkers] = React.useState<{ x: number; y: number }[]>([]);
  const [maxScore, setMaxScore] = React.useState(false);
  const [incredibleScore, setIncredibleScore] = useState(false);
  const [greatScore, setGreatScore] = useState(false);
  const [goodScore, setGoodScore] = useState(false);
  const [lowScore, setLowScore] = useState(false);
  const [zeroScore, setZeroScore] = useState(false);
  const ANIMATION_DURATION = 2000;

  const handleHit = (hit: DartHit) => {
    // if (darts.length >= 3) return;

    // after 3 darts the 4th dart will replace the 1st
    // setDarts((prev) => [...prev.slice(-2), hit]);
    setDarts((prev) => {
      const next = [...prev, hit];
      return next.slice(-3);
    });
  };

  const handleSubmit = () => {
    const total = darts.reduce((s, d) => s + d.score, 0);
    setLastTotal(total);
    if (total === 180) setMaxScore(true);
    else if (total === 0) setZeroScore(true);
    else if (total < 30) setLowScore(true);
    else if (total < 100) setGoodScore(true);
    else if (total < 150) setGreatScore(true);
    else if (total < 180) setIncredibleScore(true);

    // duration of animation overlay
    setTimeout(() => {
      setMaxScore(false);
      setZeroScore(false);
      setIncredibleScore(false);
      setGreatScore(false);
      setGoodScore(false);
      setLowScore(false);
    }, ANIMATION_DURATION);

    onSubmitScore(total);

    setDarts([]);
    setMarkers([]);
  };

  async function undoTurn(id: string) {
    await supabase.from("turns").update({ is_undone: true }).eq("id", id);
  }

  const total = darts.reduce((sum, dart) => sum + dart.score, 0);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          marginBottom: "5px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            alignItems: "center",
            width: "25%",
          }}
        >
          <TripleScoreContainer darts={darts} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "280px",
              justifySelf: "center",
            }}
          >
            <SubmitButton
              type="button"
              disabled={darts.length < 3}
              numberOfDartsThrown={darts.length}
              onClick={handleSubmit}
            >
              Submit
            </SubmitButton>
            <MissButton
              type="button"
              onClick={() => {
                setMarkers((prev) => [
                  ...prev.slice(-2),
                  polarToCartesian(CENTER, CENTER, 360, Math.random() * 360),
                  // centerOfBoard, centerOfBoard, distanceFromCenter, randomAngle),
                ]);

                handleHit({
                  label: "MISS",
                  value: 0,
                  multiplier: 1,
                  score: 0,
                });
              }}
            >
              Miss
            </MissButton>
          </div>

          <div>Total: {total}</div>
        </div>
        <Dartboard
          onHit={handleHit}
          total={lastTotal}
          darts={darts}
          maxScore={maxScore}
          zeroScore={zeroScore}
          incredibleScore={incredibleScore}
          greatScore={greatScore}
          goodScore={goodScore}
          lowScore={lowScore}
          markers={markers}
          setMarkers={setMarkers}
          handleSubmit={handleSubmit}
        />
        <div style={{ display: "flex", flexDirection: "column", width: "25%" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "5px",
            }}
          >
            <div
              className="text-8xl font-black tracking-wider"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "0px",
                marginBottom: "100px",
                color: "white",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              {`${getTotalScored(turns).toLocaleString()} / ${TARGET_TOTAL.toLocaleString()}`}
            </div>
            {/* <div className="text-2xl mt-4 text-zinc-400">
              {`${remaining.toLocaleString()} remaining to reach goal`}
            </div> */}
          </div>
          <div className="space-y-4">
            <h3>Recent Scores</h3>
            {turns.slice(0, 10).map((turn) => (
              <div
                key={turn.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex justify-between items-center"
              >
                <div
                  style={{
                    justifyContent: "end",
                    display: "flex",
                    gap: "10px",
                    marginRight: "40%",
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
                      <span className="text-xs text-zinc-600 italic">
                        undone
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <SubmitButton
        type="button"
        disabled={darts.length < 3}
        numberOfDartsThrown={darts.length}
        onClick={handleSubmit}
      >
        Submit Score
      </SubmitButton> */}
    </>
  );
}
