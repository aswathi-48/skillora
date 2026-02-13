import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      id: "mern-stack",
      title: "MERN Stack Development",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "6 Months",
      rating: 4.8
    },
    {
      id: "python-full-stack",
      title: "Python Full Stack",
      category: "Full Stack",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "6 Months",
      rating: 4.9
    },
    {
      id: "flutter-development",
      title: "Flutter App Development",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "4 Months",
      rating: 4.7
    },
    {
      id: "data-science",
      title: "Data Science & AI",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "8 Months",
      rating: 4.9
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      duration: "5 Months",
      rating: 4.6
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-secondary font-semibold uppercase tracking-wide mb-2">Our Programs</h2>
            <h3 className="text-4xl font-serif font-bold text-primary">Shape Your Future</h3>
          </div>
          {/* View All button now links to the courses page (or same section if single page, but user asked for functionality) */}
          {/* Since we don't have a separate full courses list page yet, we keep it here or scroll to top */}
          <Link to="/courses" className="hidden md:flex items-center text-primary font-semibold hover:text-secondary transition-colors">
            View All Courses <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100 group hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                  {course.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  {course.title}
                </h4>
                <div className="flex justify-between items-center text-sm text-neutral-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> {course.duration}
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 mr-1 fill-current" /> {course.rating}
                  </div>
                </div>
                <div className="mt-auto">
                  <Link to={`/courses/${course.id}`} className="block w-full text-center py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300">
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/courses" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
            View All Courses <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
