import { motion } from "framer-motion";
import { LongSidewaysFireEmoji, ReverseTrainEmoji } from "../Emojis";

type Props = {
  total: number;
};

export const IncredibleScoreAnimation = ({ total }: Props) => {
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
        background:
          "radial-gradient(circle, rgba(0,0,0,0.45), rgba(0,0,0,0.9))",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <motion.div
          initial={{ scale: 0.6, y: -50 }}
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
            width: "555px",
            height: "100px",
            overflow: "hidden",
          }}
        >
          {/* FAST TRAIN MULTIPLE LAPS */}
          <div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 1000 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: "12px",
                left: "-200px",
                fontSize: "4rem",
              }}
            >
              {LongSidewaysFireEmoji}
            </motion.div>
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 1000 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                // width: 5,
                position: "absolute",
                top: "-20px",
                fontSize: "4rem",
              }}
            >
              {ReverseTrainEmoji}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
