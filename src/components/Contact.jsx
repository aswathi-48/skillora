export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-white px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-dark text-center mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Contact Form */}
          <form className="bg-secondary p-8 rounded-xl shadow-sm space-y-5">
            <h3 className="text-xl font-semibold text-dark">
              Get in Touch
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border px-4 py-2 rounded-md"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border px-4 py-2 rounded-md"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              required
              className="w-full border px-4 py-2 rounded-md"
            />

            <button
              type="submit"
              className="bg-primary px-6 py-2 rounded-full font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-dark mb-1">📍 Address</h4>
              <p className="text-sm text-gray-600">
                Skillora Technologies,<br />
                Calicut, Kerala, India
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-dark mb-1">📞 Phone</h4>
              <p className="text-sm text-gray-600">
                +91 98765 43210
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-dark mb-1">✉️ Email</h4>
              <p className="text-sm text-gray-600">
                support@skillora.com
              </p>
            </div>

            {/* Google Map */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-sm">
              <iframe
                title="Skillora Location"
                src="https://www.google.com/maps?q=calicut%20kerala&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
