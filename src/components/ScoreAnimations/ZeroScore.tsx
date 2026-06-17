import { motion } from "framer-motion";
import { CowEmoji, ReverseCowEmoji, ZeroReverseTrainEmoji } from "../Emojis";
export const ZeroScoreAnimation = () => {
  return (
    <>
      <motion.div
        initial={{ scale: 0.6 }}
        animate={{ scale: [1, 1.05, 1] }}
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#fff",
        }}
      >
        {0}
      </motion.div>
      <div
        style={{
          position: "relative",
          width: "560px",
          height: "100px",
          overflow: "hidden",
          top: "-20px",
          borderRadius: "35px",
        }}
      >
        {/* STATIC TRAIN */}
        <div
          style={{
            position: "absolute",
            left: "-306px",
          }}
        >
          {ZeroReverseTrainEmoji}
        </div>
        {/* COWS */}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: "25px",
            fontSize: "3rem",
            left: "180px",
          }}
        >
          {ReverseCowEmoji}
          {CowEmoji}
          {CowEmoji}
          {ReverseCowEmoji}
          {ReverseCowEmoji}
          {ReverseCowEmoji}
          {ReverseCowEmoji}
        </div>
      </div>
    </>
  );
};
