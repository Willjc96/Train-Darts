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
    <div style={{ display: "flex", flexDirection: "row" }}>{Tree1Emoji}</div>
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

export const GoodScoreAnimation = ({ total }: Props) => {
  return (
    <div
      style={{
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "560px",
      }}
    >
      {/* SCORE (TOP, CLEAR, NO TRAIN OVERLAP) */}
      <motion.div
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
          height: "50px",
          alignContent: "center",
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
      <motion.div
        transition={{ repeat: Infinity, duration: 1.2 }}
        style={{
          filter: "drop-shadow(0 0 12px rgba(0,0,0,0.6))",
        }}
      >
        <div
          style={{
            width: "560px",
            height: "100px",
          }}
        >
          <div
            style={{
              position: "absolute",
            }}
          >
            {GoodReverseTrainEmoji}
          </div>
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
            }}
          >
            {getEnvironment(total)}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
