import { motion } from "framer-motion";
import { ReverseFullTrainEmoji } from "../Emojis";

const Train = ({
  initial,
  animate,
  style,
}: {
  initial: {
    x: number;
    y?: number;
  };
  animate: {
    x?: number;
    y?: number;
  };
  style?: React.CSSProperties;
}) => (
  <motion.div
    initial={initial}
    animate={animate}
    transition={{
      duration: 0.5,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      position: "absolute",
      fontSize: "4rem",
      ...style,
    }}
  >
    {ReverseFullTrainEmoji}
  </motion.div>
);

const trains = [
  {
    initial: { x: -2000 },
    animate: { x: 0 },
    style: { top: "320px" },
  },
  {
    initial: { x: -100, y: -50 },
    animate: { x: -1500 },
    style: { top: "100px" },
  },
  {
    initial: { y: 0, x: -2300 },
    animate: { y: 2000 },
    style: {
      height: "560px",
      rotate: "90deg",
      top: "-20px",
    },
  },
  {
    initial: { y: 700, x: -2300 },
    animate: { y: -1000 },
    style: {
      height: "520px",
      rotate: "270deg",
      top: "-20px",
      left: "120px",
    },
  },
];
export const MaxScoreAnimation = () => {
  return (
    <>
      <motion.div
        initial={{ y: -40, scale: 0.5 }}
        animate={{ y: 0, scale: [1, 1.3, 1] }}
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
          width: "560px",
          height: "560px",
          borderRadius: "20rem",
          position: "absolute",
          top: "70px",
          overflow: "hidden",
        }}
      >
        {trains.map((train, index) => (
          <Train key={index} {...train} />
        ))}
      </div>
    </>
  );
};
