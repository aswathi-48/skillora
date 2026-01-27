import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-28 bg-secondary px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-dark mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We offer end-to-end career-focused services designed to help learners
          gain industry-ready skills, confidence, and placement support.
        </motion.p>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Skill Training",
              desc:
                "Hands-on, industry-aligned training programs built around real-world projects and practical assignments.",
              points: [
                "Latest IT & Non-IT technologies",
                "Project-based learning",
                "Beginner to advanced tracks",
              ],
            },
            {
              title: "Career Guidance",
              desc:
                "Personalized mentoring and career road-mapping to help learners make informed decisions and stay industry-relevant.",
              points: [
                "One-to-one mentoring",
                "Career path planning",
                "Resume & profile review",
              ],
            },
            {
              title: "Placement Support",
              desc:
                "Dedicated placement assistance focused on improving interview performance and job readiness.",
              points: [
                "Mock interviews & assessments",
                "Interview preparation sessions",
                "Employer & recruiter connects",
              ],
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <h3 className="font-semibold text-dark mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {service.desc}
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                {service.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-20 grid sm:grid-cols-3 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            { value: "10K+", label: "Learners Trained" },
            { value: "95%", label: "Placement Assistance Rate" },
            { value: "100+", label: "Industry Mentors" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-3xl font-bold text-dark mb-1">
                {item.value}
              </h4>
              <p className="text-sm text-gray-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}


// import { useState } from "react";

// export default function Services() {
//   const [filter, setFilter] = useState("All");

//   const courses = [
//     {
//       title: "Full Stack Development",
//       category: "IT",
//       desc: "MERN stack with real-world projects",
//     },
//     {
//       title: "Python Data Science",
//       category: "IT",
//       desc: "Python, ML basics, and analytics",
//     },
//     {
//       title: "Digital Marketing",
//       category: "Non-IT",
//       desc: "SEO, Ads, content & branding",
//     },
//     {
//       title: "UI/UX Design",
//       category: "IT",
//       desc: "Design thinking, Figma & UX",
//     },
//     {
//       title: "Accounting & Tally",
//       category: "Non-IT",
//       desc: "GST, Tally Prime & compliance",
//     },
//     {
//       title: "Software Testing",
//       category: "IT",
//       desc: "Manual & automation testing",
//     },
//   ];

//   const filteredCourses =
//     filter === "All"
//       ? courses
//       : courses.filter((c) => c.category === filter);

//   return (
//     <section id="services" className="py-24 bg-secondary px-6">
//       {/* Services */}
//       <h2 className="text-3xl font-bold text-dark text-center mb-10">
//         Our Services
//       </h2>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-20">
//         {[
//           ["Skill Training", "Industry-focused courses designed for real careers."],
//           ["Career Guidance", "Mentorship and roadmap for professional growth."],
//           ["Placement Support", "Resume, interview, and job assistance."],
//         ].map(([title, desc], i) => (
//           <div
//             key={i}
//             className="
//               group bg-white p-6 rounded-xl shadow-sm text-center
//               transition-all duration-300 ease-out
//               hover:-translate-y-2 hover:shadow-lg
//             "
//           >
//             <h3 className="font-semibold text-dark mb-2 group-hover:text-primary transition">
//               {title}
//             </h3>
//             <p className="text-sm text-gray-600">{desc}</p>
//           </div>
//         ))}
//       </div>

//       {/* Courses Section */}
//       <div className="max-w-6xl mx-auto">
//         <h3 className="text-2xl font-bold text-dark text-center mb-6">
//           Our Courses
//         </h3>

//         {/* Filter Bar */}
//         <div className="flex justify-center gap-4 mb-10">
//           {["All", "IT", "Non-IT"].map((item) => (
//             <button
//               key={item}
//               onClick={() => setFilter(item)}
//               className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
//                 ${
//                   filter === item
//                     ? "bg-primary text-dark scale-105 shadow-md"
//                     : "bg-white text-gray-600 hover:bg-gray-100 hover:scale-105"
//                 }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Course Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {filteredCourses.map((course, i) => (
//             <div
//               key={i}
//               className="
//                 group relative bg-white p-6 rounded-xl shadow-sm
//                 transition-all duration-300 ease-out
//                 hover:-translate-y-2 hover:shadow-xl
//               "
//             >
//               {/* Top Accent Bar */}
//               <span className="
//                 absolute top-0 left-0 w-full h-1 rounded-t-xl
//                 bg-primary scale-x-0 origin-left
//                 transition-transform duration-300
//                 group-hover:scale-x-100
//               " />

//               <span className="text-xs font-semibold text-primary">
//                 {course.category}
//               </span>

//               <h4 className="mt-2 font-semibold text-dark group-hover:text-primary transition">
//                 {course.title}
//               </h4>

//               <p className="text-sm text-gray-600 mt-1">
//                 {course.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
