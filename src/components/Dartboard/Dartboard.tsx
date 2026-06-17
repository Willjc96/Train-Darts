import React, { type ReactNode } from "react";
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

type AnimationBackgroundProps = {
  children: ReactNode;
};

const AnimationBackground = ({ children }: AnimationBackgroundProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        zIndex: 55,
        borderRadius: "20rem",
        background:
          "radial-gradient(circle, rgba(0,0,0,0.85), rgba(0,0,0,0.9))",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          width: "560px",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};
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
  const scoreAnimationActive =
    maxScore ||
    zeroScore ||
    incredibleScore ||
    greatScore ||
    goodScore ||
    lowScore;
  const animation = maxScore ? (
    <MaxScoreAnimation />
  ) : zeroScore ? (
    <ZeroScoreAnimation />
  ) : incredibleScore ? (
    <IncredibleScoreAnimation total={total} />
  ) : greatScore ? (
    <GreatScoreAnimation total={total} />
  ) : goodScore ? (
    <GoodScoreAnimation total={total} />
  ) : lowScore ? (
    <LowScoreAnimation total={total} />
  ) : null;

  return (
    <>
      <div style={{ position: "relative", width: "700px" }}>
        {animation && <AnimationBackground>{animation}</AnimationBackground>}
        <motion.div
          animate={zeroScore ? { x: [-5, 5, -5, 5, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <Svg viewBox={`0 0 ${BOARD_SIZE} ${BOARD_SIZE}`}>
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
        {scoreAnimationActive && (
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
