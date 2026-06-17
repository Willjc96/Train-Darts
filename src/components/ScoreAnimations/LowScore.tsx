import { motion } from "framer-motion";
import { LowReverseTrainEmoji, SnailEmoji, TurtleEmoji } from "../Emojis";
type Props = {
  total: number;
};

export const LowScoreAnimation = ({ total }: Props) => {
  return (
    <div
      style={{
        height: "200px",
        gap: "30px",
        display: "flex",
        flexDirection: "column",
        width: "560px",
      }}
    >
      <motion.div
        initial={{ scale: 0.6 }}
        animate={{ scale: [1, 1.05, 1] }}
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {total}
      </motion.div>

      <div
        style={{
          position: "relative",
          height: "100px",
          overflow: "hidden",
        }}
      >
        {/* STATIC TRAIN */}
        <motion.div
          animate={{
            x: [0, 15, 0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          style={{
            position: "absolute",
            left: "-16px",
          }}
        >
          {LowReverseTrainEmoji}
        </motion.div>

        {/* SNAIL OR TURTLE OVERTAKING */}
        <motion.div
          initial={{ x: -0 }}
          animate={{ x: 650 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: "25px",
            fontSize: "4rem",
            scaleX: "-1",
          }}
        >
          {total % 2 == 0 ? SnailEmoji : TurtleEmoji}
        </motion.div>
      </div>
    </div>
  );
};
