import { motion } from "framer-motion";
import useReveal from "../utils/useReveal";

export default function Reveal({ children, delay = 0 }) {
  const { ref, isVisible } = useReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
