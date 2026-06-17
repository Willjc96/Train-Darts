import React from "react";
import { motion } from "framer-motion";
import { IncredibleScoreAnimation } from "../ScoreAnimations/IncredibleScore";
import { GreatScoreAnimation } from "../ScoreAnimations/GreatScore";
import { GoodScoreAnimation } from "../ScoreAnimations/GoodScore";
import { MaxScoreAnimation } from "../ScoreAnimations/MaxScore";
import { ZeroScoreAnimation } from "../ScoreAnimations/ZeroScore";
import { Svg } from "./Dartboard.styles";
import { DartboardSections } from "./DartboardSections";
import { BOARD_SIZE } from "./constants";
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
  maxScore,
  zeroScore,
  incredibleScore,
  greatScore,
  goodScore,
  lowScore,
  markers,
  setMarkers,
}: DartboardProps) {
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
      <div style={{ position: "relative", width: "700px" }}>
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
      <div
        style={{
          display: "flex",
          width: "100%",
          position: "absolute",
          justifyContent: "center",
        }}
      >
        {scoreAnimationActive.some((animation) => animation) && (
          <svg
            style={{
              position: "absolute",
              width: "100%",
              maxWidth: "700px",
              height: "auto",
              display: "block",
              justifySelf: "center",
              zIndex: 9999,
            }}
            viewBox={`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`}
          >
            <DartboardOuterRing />
          </svg>
        )}
      </div>
    </>
  );
}
