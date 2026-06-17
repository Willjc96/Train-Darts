import { motion } from "framer-motion";
import {
  GoodReverseTrainEmoji,
  Tree1Emoji,
  Tree2Emoji,
  Tree3Emoji,
  Tree4Emoji,
} from "../Emojis";

type Props = {
  total: number;
};

const environment1 = Tree1Emoji;
const environment2 = Tree2Emoji;
const environment3 = Tree3Emoji;
const environment4 = Tree4Emoji;
const environment5 = (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    <div style={{ display: "flex", flexDirection: "row" }}>
      {/* {CowEmoji} */}
      {Tree1Emoji}
    </div>
  </div>
);

const getEnvironment = (total: number) => {
  const value = Number(total.toString().slice(-1));
  if (value === 0) {
    return environment1;
  }
  if (value === 1) {
    return environment2;
  }
  if (value === 2) {
    return environment3;
  }
  if (value === 3) {
    return environment4;
  }
  if (value === 4) {
    return environment5;
  }
  return environment1;
};

// const environment5 = (
//   <div
//     style={{
//       display: "flex",
//       flexDirection: "row",
//       justifyContent: "space-between",
//     }}
//   >
//     <div style={{ display: "flex", flexDirection: "row" }}>
//       {CowEmoji}
//       {Tree1Emoji}
//     </div>
//   </div>
// );

// const getRandomEnvironment = (randomNumber: number) => {
//   if (randomNumber === 0) {
//     return environment1;
//   }
//   if (randomNumber === 1) {
//     return environment2;
//   }
//   if (randomNumber === 2) {
//     return environment3;
//   }
//   if (randomNumber === 3) {
//     return environment4;
//   }
// };
export const GoodScoreAnimation = ({ total }: Props) => {
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
          "radial-gradient(circle, rgba(0,0,0,0.45), rgba(0,0,0,0.9))",
      }}
    >
      {/* CONTENT WRAPPER */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
          marginBottom: "150px",
        }}
      >
        {/* SCORE (TOP, CLEAR, NO TRAIN OVERLAP) */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: 1,
            textShadow: [
              "0 0 10px rgba(255,255,255,0.2)",
              "0 0 25px rgba(255,255,255,0.5)",
              "0 0 10px rgba(255,255,255,0.2)",
            ],
          }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#fff",
            textShadow: "0 0 20px rgba(255,255,255,0.3)",
            letterSpacing: "2px",
          }}
        >
          {total}
        </motion.div>

        {/* TRAIN (BELOW SCORE, SEPARATED VISUALLY) */}
        <div
          style={{
            // overflow: "hidden",
            position: "relative",
          }}
        >
          <motion.div
            // initial={{ x: -100, scale: 0.8 }}
            // animate={{ x: [-10, 0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "3.5rem",
              filter: "drop-shadow(0 0 12px rgba(0,0,0,0.6))",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "560px",
                height: "100px",
                overflow: "hidden",
                top: "50px",
              }}
            >
              <motion.div
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                style={{
                  position: "absolute",
                  left: "0px",

                  fontSize: "4rem",
                }}
              >
                {GoodReverseTrainEmoji}
              </motion.div>
              <motion.div
                initial={{ x: 555 }}
                animate={{ x: -190 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  top: "5px",
                  fontSize: "4rem",
                }}
              >
                {getEnvironment(total)}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
