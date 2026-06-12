import { motion } from "framer-motion";
import { LowReverseTrainEmoji, ReverseTrainEmoji, SnailEmoji } from "../Emojis";
type Props = {
  total: number;
};

export const LowScoreAnimation = ({ total }: Props) => {
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
          position: "absolute",
          top: "37%",
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
            width: "520px",
            height: "100px",
            overflow: "hidden",
            left: "0px",
          }}
        >
          {/* STATIC TRAIN */}
          <div>
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
                top: "0px",
                fontSize: "4rem",
              }}
            >
              {LowReverseTrainEmoji}
            </motion.div>
          </div>

          {/* SNAIL OVERTAKING */}
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 550 }}
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
          >
            {SnailEmoji}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
