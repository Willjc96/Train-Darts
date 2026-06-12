import { motion } from "framer-motion";
import { CowEmoji, ReverseCowEmoji, ZeroReverseTrainEmoji } from "../Emojis";
import { DartboardOuterRing } from "../Dartboard/DartboardOuterRing";
import { Svg } from "../Dartboard/Dartboard.styles";
import { BOARD_SIZE } from "../Dartboard/constants";
export const ZeroScoreAnimation = () => {
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
          "radial-gradient(circle, rgba(0,0,0,0.85), rgba(0,0,0,0.9))",
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
            width: "520px",
            height: "100px",
            overflow: "hidden",
            left: "0px",
            top: "-20px",
          }}
        >
          {/* STATIC TRAIN */}
          <div>
            <motion.div
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              style={{
                position: "absolute",
                left: "-306px",
                top: "0px",
                fontSize: "4rem",
              }}
            >
              {ZeroReverseTrainEmoji}
            </motion.div>
          </div>
          {/* COWS */}
          <motion.div
            initial={{ x: 180 }}
            animate={{ x: 550 }}
            transition={{
              duration: 2000000,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              top: "30px",
              fontSize: "3rem",
            }}
          >
            <div style={{ position: "relative", width: "100%" }}></div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              {ReverseCowEmoji}
              {CowEmoji}
              {CowEmoji}
              {ReverseCowEmoji}
              {ReverseCowEmoji}
              {ReverseCowEmoji}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
