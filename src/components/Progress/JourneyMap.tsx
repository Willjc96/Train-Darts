// JourneyMap.tsx

import styled from "styled-components";
import { motion } from "framer-motion";
import { JOURNEY_STATIONS } from "./constants";
import { getJourneyProgress } from "./journeyHelpers";
import { ReverseTrainEmoji } from "../Emojis";

const Wrapper = styled.div`
  position: relative;
  padding: 2rem 1rem 4rem;
`;

const Line = styled.div`
  position: absolute;
  top: 52px;
  left: 40px;
  right: 40px;
  height: 6px;
  background: #3f3f46;
  border-radius: 999px;
`;

const FilledLine = styled.div<{ progress: number }>`
  position: absolute;
  top: 52px;
  left: 40px;
  height: 6px;
  background: #fbbf24;
  border-radius: 999px;
  width: ${({ progress }) => progress}%;
`;

const Stations = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Station = styled.div<{ unlocked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  opacity: ${({ unlocked }) => (unlocked ? 1 : 0.35)};
`;
// const Station = styled.div<{ active: boolean; reached: boolean }>`
//   opacity: ${({ reached }) => (reached ? 1 : 0.3)};
//   filter: ${({ active }) => (active ? "drop-shadow(0 0 10px gold)" : "none")};
// `;

const Label = styled.div`
  margin-top: 0.5rem;
  font-size: 0.75rem;
`;

const Train = styled(motion.div)<{ progress: number }>`
  position: absolute;
  top: 0;
  left: ${({ progress }) => progress}%;
  transform: translateX(-50%);
  font-size: 3rem;
`;

type Props = {
  total: number;
};

export default function JourneyMap({ total }: Props) {
  const { currentIndex, overallProgress } = getJourneyProgress(total);
  const maxScore = JOURNEY_STATIONS[JOURNEY_STATIONS.length - 1].score;
  console.log(">>>", { overallProgress, total });
  return (
    <Wrapper>
      <Line />
      <FilledLine progress={overallProgress} />

      <Train
        progress={overallProgress}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
        }}
      >
        {ReverseTrainEmoji}
      </Train>

      <Stations>
        {JOURNEY_STATIONS.map((station) => (
          <Station
            key={station.label}
            style={{
              position: "absolute",
              left: `${(station.score / maxScore) * 100}%`,
              transform: "translateX(-50%)",
            }}
            unlocked={total >= station.score}
          >
            <div style={{ fontSize: "2rem" }}>{station.emoji}</div>

            <Label>{station.label}</Label>
          </Station>
        ))}
      </Stations>
    </Wrapper>
  );
}
