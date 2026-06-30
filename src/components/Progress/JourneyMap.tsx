// JourneyMap.tsx

import styled from "styled-components";
import { motion } from "framer-motion";
import { JOURNEY_STATIONS } from "./constants";
import { getJourneyProgress } from "./journeyHelpers";
import { SmallReverseTrainEmoji } from "../Emojis";

export const MAX_WIDTH = 1620;

const Wrapper = styled.div`
  position: relative;
  padding: 10px 50px 60px;
`;

const Line = styled.div`
  position: absolute;
  top: 52px;
  left: 40px;
  right: 40px;
  height: 6px;
  background: #3f3f46;
  border-radius: 999px;
  overflow: hidden;
`;

const FilledLine = styled.div<{ progress: number }>`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: #fbbf24;
  border-radius: inherit;
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

const Label = styled.div`
  font-size: 0.75rem;
`;

const TrainTrack = styled.div`
  position: absolute;
  top: 0;
  left: 40px;
  right: 40px;
`;

const Train = styled(motion.div)<{ progress: number }>`
  position: absolute;
  left: ${({ progress }) => progress}%;
  font-size: 3rem;
  transform: translateX(-50%);
`;

type Props = {
  total: number;
};

export default function JourneyMap({ total }: Props) {
  const { overallProgress } = getJourneyProgress(total);
  // const overallProgress = 10; //TODO
  const maxScore = JOURNEY_STATIONS[JOURNEY_STATIONS.length - 1].score;
  return (
    <Wrapper>
      <div>
        <Line>
          <FilledLine progress={overallProgress} />
        </Line>

        <TrainTrack>
          <Train
            progress={overallProgress}
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <SmallReverseTrainEmoji />
          </Train>
        </TrainTrack>
      </div>

      <Stations>
        {JOURNEY_STATIONS.map((station) => (
          <Station
            key={station.label}
            style={{
              position: "absolute",
              left: `${(station.score / maxScore) * 100}%`,
              transform: "translateX(-50%)",
              marginTop: "10px",
            }}
            unlocked={total >= station.score}
          >
            <div style={{ fontSize: "2rem" }}>{station.emoji}</div>
            <img
              src={station.icon?.KingsCrossLogo}
              alt={station.label}
              style={{
                width: 32,
                height: 32,
              }}
            />

            <Label>{station.label}</Label>
          </Station>
        ))}
      </Stations>
    </Wrapper>
  );
}
