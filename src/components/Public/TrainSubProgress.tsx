import styled from "styled-components";
import { ReverseTrainEmoji } from "../Emojis";

interface Props {
  progress: number;
}

const Wrapper = styled.div`
  position: relative;
  width: 1100px;
  padding: 4rem 0;
  justify-self: center;
`;

const Track = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 12px;
  background: #3f3f46;
  border-radius: 999px;
  transform: translateY(-50%);
`;

const FilledTrack = styled.div<{ progress: number }>`
  position: absolute;
  top: 50%;
  left: 0;
  height: 12px;
  background: #fbbf24;
  border-radius: 999px;
  transform: translateY(-50%);
  width: ${({ progress }) => Math.min(progress, 100)}%;
  transition: width 0.7s ease;
`;

// const Train = styled.div<{ progress: number }>`
//   position: absolute;
//   top: 50%;
//   left: calc(${({ progress }) => Math.min(progress, 100)}% - 40px);
//   transform: scale(-1, 1) translateY(-100%);
//   font-size: 4rem;
//   transition: left 0.7s ease;
// `;

const Train = styled.div<{ progress: number }>`
  position: absolute;
  top: 54%;
  left: calc(${({ progress }) => Math.min(progress, 100)}% - 10px);
  transform: translateY(-100%);
  font-size: 2rem;
  transition: left 0.7s ease;
`;

export default function TrainSubProgress({ progress }: Props) {
  return (
    <Wrapper>
      <Track />
      <FilledTrack progress={progress} />
      <Train progress={progress}>{ReverseTrainEmoji}</Train>
    </Wrapper>
  );
}
