import React, { useState } from "react";
import Dartboard, { type DartHit } from "../Dartboard/Dartboard";
import DartboardHeader from "../Dartboard/DartboardHeader";

import { TripleScoreContainer } from "../Dartboard/TripleScoreContainer";

interface ScoreInputProps {
  onSubmitScore: (score: number) => void;
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

export default function ScoreInput({ onSubmitScore }: ScoreInputProps) {
  const [darts, setDarts] = useState<DartHit[]>([]);
  const [lastTotal, setLastTotal] = useState(0);
  const [markers, setMarkers] = React.useState<{ x: number; y: number }[]>([]);
  const [maxScore, setMaxScore] = React.useState(false);
  const [incredibleScore, setIncredibleScore] = useState(false);
  const [greatScore, setGreatScore] = useState(false);
  const [goodScore, setGoodScore] = useState(false);
  const [lowScore, setLowScore] = useState(false);
  const [zeroScore, setZeroScore] = useState(false);

  const ANIMATION_DURATION = 4000;

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

  const total = darts.reduce((sum, dart) => sum + dart.score, 0);

  return (
    <>
      <DartboardHeader />
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

      <TripleScoreContainer darts={darts} />

      <div>Total: {total}</div>
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
