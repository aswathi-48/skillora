import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Students in library"
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8"
              />
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Modern classroom"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-xl border border-neutral-100 text-center w-40 h-40 flex flex-col justify-center items-center z-10">
              <span className="text-4xl font-bold text-secondary">5+</span>
              <span className="text-sm font-medium text-neutral-600">Years of<br />Excellence</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-secondary font-semibold uppercase tracking-wide mb-2">About Skillora</h2>
            <h3 className="text-4xl font-serif font-bold text-primary mb-6">Building a Legacy of Knowledge & Innovation</h3>
            <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
              At Skillora, we believe education is the catalyst for change. For over 5 years, we have been at the forefront of academic excellence, nurturing young minds to become global leaders. Our holistic approach combines rigorous academics with practical skill development.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "World-class infrastructure and laboratories",
                "Expert faculty with industry experience",
                "Focus on holistic development and soft skills",
                "Global university collaborations"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-secondary h-5 w-5 flex-shrink-0" />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/story" className="text-primary font-semibold hover:text-secondary transition-colors duration-300 flex items-center group">
              Read Our Story
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
