import { motion } from "framer-motion";
import {
  GreatReverseTrainEmoji,
  ReverseWindEmoji,
  SidewaysFireEmoji,
} from "../Emojis";
type Props = {
  total: number;
};

export const GreatScoreAnimation = ({ total }: Props) => {
  return (
    <>
      {/* SCORE (TOP, CLEAR, NO TRAIN OVERLAP) */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0, y: -50 }}
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
      <motion.div
        initial={{ x: -100, scale: 0.8, y: -30 }}
        animate={{ x: [-20, 20, 0, -20] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "3.5rem",
          filter: "drop-shadow(0 0 12px rgba(0,0,0,0.6))",
        }}
      >
        <motion.span
          animate={{ x: [0, 10, 20] }}
          transition={{ repeat: Infinity, duration: 0.4 }}
        >
          {ReverseWindEmoji}
        </motion.span>

        <motion.span
          animate={{ x: [0, 15, 30] }}
          transition={{ repeat: Infinity, duration: 0.35 }}
        >
          {ReverseWindEmoji}
        </motion.span>

        <motion.span
          animate={{
            opacity: [1],
            scale: [1, 1.4, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
        >
          {SidewaysFireEmoji}
        </motion.span>
        {GreatReverseTrainEmoji}
      </motion.div>
    </>
  );
};
