import { motion } from "framer-motion";
import { LongSidewaysFireEmoji, ReverseTrainEmoji } from "../Emojis";

type Props = {
  total: number;
};

export const IncredibleScoreAnimation = ({ total }: Props) => {
  return (
    <>
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
          width: "560px",
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
              top: "-3px",
              left: "-200px",
              fontSize: "8rem",
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
              position: "absolute",
              top: "-20px",
              fontSize: "4rem",
            }}
          >
            {ReverseTrainEmoji}
          </motion.div>
        </div>
      </div>
    </>
  );
};
