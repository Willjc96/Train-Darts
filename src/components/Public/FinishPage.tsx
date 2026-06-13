import styled from "styled-components";
import Confetti from "react-confetti";
import { ReverseFullTrainEmoji } from "../Emojis";
import { motion } from "framer-motion";
import React from "react";

// const Wrapper = styled.div`
//   position: relative;
//   width: 100%;
//   padding: 4rem 0;
// `;

const CelebrationWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  background: linear-gradient(180deg, #09090b 0%, #18181b 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  text-align: center;
`;

// const Train = styled.div<{ progress: number }>`
//   position: absolute;
//   top: 50%;
//   left: calc(${({ progress }) => Math.min(progress, 100)}% - 40px);
//   transform: scale(-1, 1) translateY(-100%);
//   font-size: 4rem;
//   transition: left 0.7s ease;
//   filter: drop-shadow(0 0 20px gold);
// `;

const CongratulationsHeader = styled.h1`
  position: absolute;
  top: 20%;
  color: white;
`;

const CongratulationsSubHeader = styled.h2`
  position: absolute;
  top: 30%;
  color: white;
`;

const DIRECTIONS = [
  {
    start: { x: -4000, y: -400, rotate: 5.7 },
    end: { x: 4000, y: 400, rotate: 5.7 },
  },
  {
    start: { x: 5500, y: -400, rotate: 0 },
    end: { x: -4000, y: -400, rotate: 0 },
  },
  {
    start: { x: 500, y: -2000, rotate: 90 },
    end: { x: 500, y: 3000, rotate: 90 },
  },
  {
    start: { x: -4000, y: 100, rotate: 0 },
    end: { x: 5500, y: 100, rotate: 0 },
  },
  {
    start: { x: -400, y: 5500, rotate: -90 },
    end: { x: -400, y: -4000, rotate: -90 },
  },
  {
    start: { x: 600, y: 4000, rotate: -100 },
    end: { x: -800, y: -4000, rotate: -100 },
  },
  {
    start: { x: -5000, y: -200, rotate: 2 },
    end: { x: 5000, y: 300, rotate: 2 },
  },
  {
    start: { x: 5500, y: 100, rotate: 180 },
    end: { x: -4000, y: 100, rotate: 180 },
  },
  {
    start: { x: 100, y: 2500, rotate: -90 },
    end: { x: 100, y: -3000, rotate: -90 },
  },
  {
    start: { x: 5500, y: 700, rotate: -90 },
    end: { x: -4000, y: 700, rotate: -90 },
  },
  {
    start: { x: 800, y: -4000, rotate: -90 },
    end: { x: 800, y: 5500, rotate: -90 },
  },
  {
    start: { x: -4000, y: 200, rotate: 180 },
    end: { x: 5500, y: 200, rotate: 180 },
  },
  {
    start: { x: -800, y: 2500, rotate: -90 },
    end: { x: -800, y: -3000, rotate: -90 },
  },
];

function RandomTrain() {
  const [routeIndex, setRouteIndex] = React.useState(0);

  const route = React.useMemo(
    () => DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)],
    [routeIndex],
  );

  return (
    <motion.div
      key={routeIndex}
      initial={route.start}
      animate={route.end}
      transition={{
        duration: 2,
        ease: "linear",
      }}
      onAnimationComplete={() => {
        setRouteIndex((v) => v + 1);
      }}
      style={{ position: "absolute" }}
    >
      {ReverseFullTrainEmoji}
    </motion.div>
  );
}

// function RandomTrain() {
//   const [route, setRoute] = React.useState(
//     () => DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)],
//   );

//   return (
//     <motion.div
//       key={`${route.start.x}-${route.start.y}-${Math.random()}`}
//       initial={route.start}
//       animate={route.end}
//       transition={{
//         duration: 3,
//         ease: "linear",
//       }}
//       onAnimationComplete={() => {
//         setRoute(DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)]);
//       }}
//       style={{
//         position: "absolute",
//       }}
//     >
//       {ReverseFullTrainEmoji}
//     </motion.div>
//   );
// }

// export default function FinishPage() {
//   return (
//     <CelebrationWrapper>
//       <Confetti recycle numberOfPieces={400} />
//       <RandomTrain />
//     </CelebrationWrapper>
//   );
// }
export default function FinishPage() {
  return (
    // <Wrapper>
    <CelebrationWrapper>
      <Confetti recycle={true} numberOfPieces={400} />
      <CongratulationsHeader>CONGRATULATIONS</CongratulationsHeader>
      <CongratulationsSubHeader>
        You Have Reached Your Destination
      </CongratulationsSubHeader>

      {/* <motion.div
        initial={{ x: -300 }}
        animate={{ x: 5500 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "25px",
          fontSize: "4rem",
        }}
      > */}
      {/* {ReverseFullTrainEmoji} */}
      <RandomTrain />
      {/* </motion.div> */}
    </CelebrationWrapper>
    // </Wrapper>
  );
}
