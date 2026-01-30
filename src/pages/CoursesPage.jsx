import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { fadeUp, stagger } from "../utils/animations";

export default function CoursesPage() {
  const courses = [
    "Full Stack Development","Data Analytics","UI/UX Design",
    "Python","Machine Learning","Digital Marketing",
    "Cloud Computing","Cyber Security","Mobile App Development"
  ];

  return (
    <PageWrapper>
      <section className="py-24 bg-secondary px-6 text-center">
        <motion.h2
          className="text-3xl font-bold mb-14"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          All Courses
        </motion.h2>

        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {courses.map((c, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-semibold mb-2">{c}</h3>
              <p className="text-sm text-gray-600">
                Hands-on, career-focused learning.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageWrapper>
  );
}
