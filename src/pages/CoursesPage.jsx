export default function CoursesPage() {
  const courses = [
    "Full Stack Development", "Data Analytics", "UI/UX Design",
    "Python Programming", "Machine Learning", "Digital Marketing",
    "Cloud Computing", "Cyber Security", "Mobile App Development"
  ]

  return (
    <section className="py-20 bg-secondary px-6 text-center ">
      <h2 className="text-3xl font-bold text-dark mb-12">
        All Courses
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-dark mb-2">{course}</h3>
            <p className="text-sm text-gray-600">
              Hands-on, career-focused learning.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
