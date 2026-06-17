// LocalProgress.tsx

import styled from "styled-components";
import { getJourneyProgress } from "./journeyHelpers";

const Card = styled.div`
  background: #18181b;
  border-radius: 16px;
  padding: 0 80px;
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

  return (
    <Card>
      <h3 style={{ marginTop: "0px", marginBottom: "10px" }}>
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
    </Card>
  );
}
