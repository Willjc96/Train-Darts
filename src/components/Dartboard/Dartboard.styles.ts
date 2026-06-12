import { motion } from "framer-motion";
import styled from "styled-components";

export const colours = {
  railBlack: "#111111",
  cream: "#F4ECD8",
  brass: "#dcb431",
  signalRed: "#C1121F",
  trackGrey: "#4B5563",
};

export const Svg = styled.svg`
  width: 100%;
  max-width: 700px;
  height: auto;
  display: block;
  justify-self: center;
`;

export const NumberLabel = styled.text`
  fill: #f4ecd8;
  font-size: 20px;
  font-weight: bold;
  text-anchor: middle;
  dominant-baseline: middle;
`;

export const DartMarker = styled(motion.circle)`
  fill: gold;
  stroke: black;
  stroke-width: 2;
`;

export const MissButton = styled.button`
  background: #c1121f;
  color: white;
  border: none;
  padding: 12px 41px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;

  transition: all 0.2s ease;

  &:hover {
    background: #d62828;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const Segment = styled.path`
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    filter: brightness(1.9);
  }
`;

export const CircleSegment = styled.circle`
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    filter: brightness(1.9);
  }
`;

export const SubmitButton = styled.button<{ numberOfDartsThrown: number }>`
  background: green;
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  opacity: ${({ numberOfDartsThrown }) =>
    numberOfDartsThrown === 3 ? 1 : 0.5};

  transition: all 0.2s ease;

  &:hover {
    background: #d62828;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;
