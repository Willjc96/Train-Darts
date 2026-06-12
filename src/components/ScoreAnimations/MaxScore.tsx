import { motion } from "framer-motion";

export const MaxScoreAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle, rgba(0,0,0,0.9), rgba(0,0,0,0.9))",
        zIndex: 50,
        pointerEvents: "none",
      }}
    >
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
        180 🎯
      </motion.div>
    </motion.div>
  );
};
