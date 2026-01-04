import { useEffect, useRef, useState } from "react"
import aboutImg from "../../public/images/image.png"

function Counter({ end, label, start }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let current = 0
    const duration = 1500
    const increment = Math.ceil(end / (duration / 16))

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        current = end
        clearInterval(timer)
      }
      setCount(current)
    }, 16)

    return () => clearInterval(timer)
  }, [start, end])

  return (
    <div className="flex flex-col items-center justify-center px-6 ">
      <h3 className="text-4xl font-bold text-dark">
        {count}+
      </h3>
      <p className="text-sm text-gray-700 mt-1 font-medium">
        {label}
      </p>
    </div>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <img
          src={aboutImg}
          alt="Student"
          className="rounded-md shadow-md w-full max-h-[420px] object-cover"
        />

        <div>
          <p className="text-xs text-primary font-semibold uppercase mb-1">
            About Us
          </p>

          <h2 className="text-2xl font-bold text-dark mb-4">
            First Choice For Online Education Anywhere
          </h2>

          <p className="text-sm text-gray-600 mb-6">
            Skillora empowers learners with industry-ready skills and real-world knowledge.
          </p>

          <div className="border border-primary rounded-full py-6 px-4 flex justify-between text-center bg-secondary">
            <Counter end={10} label="Courses" start={startCount} />
            <Counter end={2000} label="Students" start={startCount} />
            <Counter end={1000} label="Placements" start={startCount} />
          </div>
        </div>

      </div>
    </section>
  )
}
