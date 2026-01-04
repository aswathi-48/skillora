import { Link } from "react-router-dom"

export default function Courses() {
  return (
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold text-dark mb-10">
        Our Courses
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-10">
        {["Full Stack Development", "Data Analytics", "UI/UX Design"].map((c, i) => (
          <div key={i} className="bg-secondary p-6 shadow-sm rounded-xl">
            <h3 className="font-semibold text-dark mb-2">{c}</h3>
            <p className="text-sm text-gray-600">
              Industry-focused learning with hands-on projects.
            </p>
          </div>
        ))}
      </div>

      <Link
        to="/courses"
        className="inline-block bg-primary text-dark px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
      >
        View More Courses
      </Link>
    </section>
  )
}
