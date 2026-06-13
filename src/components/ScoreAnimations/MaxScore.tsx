import { motion } from "framer-motion";
import { ReverseFullTrainEmoji } from "../Emojis";

export const MaxScoreAnimation = () => {
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
        {/* <motion.div
          initial={{ scale: 0.6, y: -50 }}
          animate={{ scale: [1, 1.05, 1] }}
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          {180}
        </motion.div> */}
        <motion.div
          initial={{ y: -40, scale: 0.5 }}
          animate={{
            y: 0,
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 0.8, repeat: 5 }}
          style={{
            color: "gold",
            fontSize: "4rem",
            fontWeight: "bold",
            textShadow: "0 0 20px gold",
            letterSpacing: "2px",
          }}
        >
          180
        </motion.div>
        <div
          style={{
            position: "absolute",
            width: "510px",
            height: "450px",
            overflow: "hidden",
            top: "90px",
            borderRadius: "150px",
          }}
        >
          {/* FAST TRAIN MULTIPLE LAPS */}
          <div>
            <motion.div
              initial={{ x: -2000 }}
              animate={{ x: 0 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                // width: 5,
                position: "absolute",
                top: "290px",
                fontSize: "4rem",
              }}
            >
              {ReverseFullTrainEmoji}
            </motion.div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "480px",
            height: "1000px",
            overflow: "hidden",
            top: "150px",
            borderRadius: "120px",
          }}
        >
          {/* FAST TRAIN MULTIPLE LAPS */}
          <div>
            <motion.div
              initial={{ x: -100, y: -50 }}
              animate={{ x: -1500 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                // width: 5,
                position: "absolute",
                top: "40px",
                fontSize: "4rem",
              }}
            >
              {ReverseFullTrainEmoji}
            </motion.div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "95px",
            width: "555px",
            height: "510px",
            overflow: "hidden",
            borderRadius: "280px",
          }}
        >
          <div>
            <motion.div
              initial={{ y: 0, x: -2300 }}
              animate={{ y: 2000 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                // width: 5,
                height: "500px",
                rotate: "90deg",
                position: "absolute",
                top: "-20px",
                fontSize: "4rem",
              }}
            >
              {ReverseFullTrainEmoji}
            </motion.div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "105px",
            left: "400px",
            width: "355px",
            height: "490px",
            overflow: "hidden",
            borderRadius: "80px",
          }}
        >
          <div>
            <motion.div
              initial={{ y: 700, x: -2300 }}
              animate={{ y: -1000 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                // width: 5,
                height: "500px",
                rotate: "270deg",
                position: "absolute",
                top: "-20px",
                fontSize: "4rem",
                left: "30px",
              }}
            >
              {ReverseFullTrainEmoji}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
