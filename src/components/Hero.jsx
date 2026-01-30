import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center pt-44 pb-32 bg-gradient-to-r from-primary via-yellow-200 to-primary text-dark">

      {/* background blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />

      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6 relative z-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        Build Your Future
      </motion.h1>

      <motion.p
        className="mb-8 text-lg opacity-90 relative z-10"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
      >
        Learn skills that matter in the real world
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-dark px-12 py-4 rounded-full font-semibold text-lg hover:bg-secondary transition relative z-10"
      >
        Get Started
      </motion.button>
    </section>
  );
}
