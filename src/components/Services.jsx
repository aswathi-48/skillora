export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary text-center px-6">
      <h2 className="text-3xl font-bold text-dark mb-10">
        Our Services
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          ["Skill Training", "Industry-focused courses designed for real careers."],
          ["Career Guidance", "Mentorship and roadmap for professional growth."],
          ["Placement Support", "Resume, interview, and job assistance."]
        ].map(([title, desc], i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-dark mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
