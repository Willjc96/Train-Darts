import React from "react";
import { motion } from "framer-motion";
import { IncredibleScoreAnimation } from "../ScoreAnimations/IncredibleScore";
import { GreatScoreAnimation } from "../ScoreAnimations/GreatScore";
import { GoodScoreAnimation } from "../ScoreAnimations/GoodScore";
import { MaxScoreAnimation } from "../ScoreAnimations/MaxScore";
import { ZeroScoreAnimation } from "../ScoreAnimations/ZeroScore";
import { MissButton, SubmitButton, Svg } from "./Dartboard.styles";
import { DartboardSections, polarToCartesian } from "./DartboardSections";
import { BOARD_SIZE, CENTER } from "./constants";
import { LowScoreAnimation } from "../ScoreAnimations/LowScore";
import { DartboardOuterRing } from "./DartboardOuterRing";

export type DartHit = {
  label: string;
  score: number;
  value: number;
  multiplier: 1 | 2 | 3;
};

interface DartboardProps {
  onHit: (hit: DartHit) => void;
  total: number;
  darts: DartHit[];
  maxScore: boolean;
  zeroScore: boolean;
  incredibleScore: boolean;
  greatScore: boolean;
  goodScore: boolean;
  lowScore: boolean;
  handleSubmit: () => void;
  markers: {
    x: number;
    y: number;
  }[];
  setMarkers: React.Dispatch<
    React.SetStateAction<
      {
        x: number;
        y: number;
      }[]
    >
  >;
}

export default function Dartboard({
  onHit,
  total,
  darts,
  maxScore,
  zeroScore,
  incredibleScore,
  greatScore,
  goodScore,
  lowScore,
  markers,
  setMarkers,
  handleSubmit,
}: DartboardProps) {
  // const total = darts.reduce((sum, dart) => sum + dart.score, 0);

  const scoreAnimationActive = [
    maxScore,
    zeroScore,
    incredibleScore,
    greatScore,
    goodScore,
    lowScore,
  ];
  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        {maxScore && <MaxScoreAnimation />}
        {zeroScore && <ZeroScoreAnimation />}
        {incredibleScore && <IncredibleScoreAnimation total={total} />}
        {greatScore && <GreatScoreAnimation total={total} />}
        {goodScore && <GoodScoreAnimation total={total} />}
        {lowScore && <LowScoreAnimation total={total} />}

        <motion.div
          animate={zeroScore ? { x: [-5, 5, -5, 5, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Svg viewBox={`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`}>
            {/* <circle
        cx={CENTER}
        cy={CENTER}
        r={335}
        fill="none"
        stroke="#C9A227"
        strokeWidth={12}
      /> */}
            <DartboardSections
              markers={markers}
              setMarkers={setMarkers}
              onHit={onHit}
            />
          </Svg>
        </motion.div>
      </div>
      {scoreAnimationActive.some((animation) => animation) && (
        <svg
          style={{
            position: "absolute",
            width: "100%",
            maxWidth: "700px",
            height: "auto",
            display: "block",
            justifySelf: "center",
            top: "66px",
            zIndex: 9999,
          }}
          viewBox={`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`}
        >
          <DartboardOuterRing />
        </svg>
      )}
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
              polarToCartesian(CENTER, CENTER, 380, Math.random() * 360),
            ]);

            onHit({
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
    </>
  );
}
