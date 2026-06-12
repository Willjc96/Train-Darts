// LocalProgress.tsx

import styled from "styled-components";
import { getJourneyProgress } from "./journeyHelpers";

const Card = styled.div`
  background: #18181b;
  padding: 1rem;
  border-radius: 16px;
`;

const Track = styled.div`
  height: 14px;
  background: #3f3f46;
  border-radius: 999px;
  overflow: hidden;
`;

const Fill = styled.div<{ progress: number }>`
  height: 100%;
  background: #fbbf24;
  width: ${({ progress }) => progress}%;
  transition: width 0.5s ease;
`;

type Props = {
  total: number;
};

export default function LocalProgress({ total }: Props) {
  const { currentStation, nextStation, localProgress } =
    getJourneyProgress(total);
  console.log({ total, localProgress }, nextStation.score);

  return (
    <Card>
      <h3>
        {currentStation.emoji} {currentStation.label}
        {" → "}
        {nextStation.emoji} {nextStation.label}
      </h3>

      <Track>
        <Fill progress={localProgress} />
      </Track>

      <p>
        {total.toLocaleString()} / {nextStation.score.toLocaleString()}
      </p>

      <p>{(nextStation.score - total).toLocaleString()} to next station</p>
    </Card>
  );
}
