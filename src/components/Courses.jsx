import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, stagger } from "../utils/animations";

export default function Courses() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <motion.h2
        className="text-3xl font-bold mb-12"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
      >
        Our Courses
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
      >
        {["Full Stack Development", "Data Analytics", "UI/UX Design"].map((c, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.03 }}
            className="bg-secondary p-6 rounded-xl shadow-sm"
          >
            <h3 className="font-semibold mb-2">{c}</h3>
            <p className="text-sm text-gray-600">
              Industry-focused learning with projects.
            </p>
          </motion.div>
        ))}
      </motion.div>

      <Link
        to="/courses"
        className="inline-block bg-primary px-8 py-3 rounded-full font-semibold"
      >
        View More Courses
      </Link>
    </section>
  );
}
