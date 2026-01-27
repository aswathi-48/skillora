export default function Services() {
  return (
    <section id="services" className="py-28 bg-secondary px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-dark mb-4">
          Our Services
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          We offer end-to-end career-focused services designed to help learners
          gain industry-ready skills, confidence, and placement support.
        </p>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-dark mb-3">
              Skill Training
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Hands-on, industry-aligned training programs built around real-world
              projects and practical assignments.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• Latest IT & Non-IT technologies</li>
              <li>• Project-based learning</li>
              <li>• Beginner to advanced tracks</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-dark mb-3">
              Career Guidance
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Personalized mentoring and career road-mapping to help learners
              make informed decisions and stay industry-relevant.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• One-to-one mentoring</li>
              <li>• Career path planning</li>
              <li>• Resume & profile review</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-dark mb-3">
              Placement Support
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Dedicated placement assistance focused on improving interview
              performance and job readiness.
            </p>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• Mock interviews & assessments</li>
              <li>• Interview preparation sessions</li>
              <li>• Employer & recruiter connects</li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-2xl font-bold text-dark">10K+</h4>
            <p className="text-sm text-gray-600">Learners Trained</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-dark">95%</h4>
            <p className="text-sm text-gray-600">Placement Assistance Rate</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-dark">100+</h4>
            <p className="text-sm text-gray-600">Industry Mentors</p>
          </div>
        </div>
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
