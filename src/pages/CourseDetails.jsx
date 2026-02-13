import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Star, CheckCircle, ArrowLeft, BookOpen, Layers, Monitor, Award } from 'lucide-react';
import EnrollmentModal from '../components/EnrollmentModal';

// Mock Data for Course Details (In real app, fetch from API/ID)
const coursesData = {
    "mern-stack": {
        title: "MERN Stack Development",
        category: "Full Stack",
        description: "Master MongoDB, Express.js, React, and Node.js to build scalable and robust web applications. This comprehensive course covers everything from frontend design to backend API development and database management.",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "6 Months",
        level: "Beginner to Advanced",
        rating: 4.8,
        students: "1200+",
        modules: [
            "Introduction to Web Development (HTML/CSS/JS)",
            "Frontend Development with React.js",
            "State Management (Redux/Context API)",
            "Backend Development with Node.js & Express",
            "Database Design with MongoDB",
            "Authentication & Security",
            "Deployment & DevOps Basics"
        ],
        features: [
            "Live Projects & Case Studies",
            "1-on-1 Mentorship",
            "Job Placement Assistance",
            "Industry Recognized Certification"
        ]
    },
    "python-full-stack": {
        title: "Python Full Stack Development",
        category: "Full Stack",
        description: "Become a versatile developer by mastering Python for backend logic and modern frontend frameworks. Learn Django, Flask, and React to build powerful web solutions.",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "6 Months",
        level: "Intermediate",
        rating: 4.9,
        students: "950+",
        modules: [
            "Python Programming Fundamentals",
            "Advanced Python & Data Structures",
            "Web Frameworks: Django & Flask",
            "Frontend Basics (HTML/CSS/JS)",
            "Database Integration (SQL/NoSQL)",
            "RESTful API Development",
            "Cloud Deployment (AWS/Heroku)"
        ],
        features: [
            "Hands-on Coding Labs",
            "Real-world Project Portfolio",
            "Mock Interviews",
            "Lifetime Access to Material"
        ]
    },
    "flutter-development": {
        title: "Flutter App Development",
        category: "Mobile",
        description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Google's Flutter framework and Dart language.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "4 Months",
        level: "Beginner",
        rating: 4.7,
        students: "800+",
        modules: [
            "Dart Programming Basics",
            "Flutter Widgets & Layouts",
            "State Management (Provider/Bloc)",
            "Networking & API Integration",
            "Firebase Integration",
            "Animations & Motion UI",
            "Publishing to App Store & Play Store"
        ],
        features: [
            "Build 10+ Real Apps",
            "Cross-Platform Mastery",
            "UI/UX Design Principles",
            "Placement Support"
        ]
    },
    "data-science": {
        title: "Data Science & AI",
        category: "Data Science",
        description: "Dive deep into the world of data. Learn statistical analysis, machine learning algorithms, and data visualization techniques to derive actionable insights from complex datasets.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "8 Months",
        level: "Advanced",
        rating: 4.9,
        students: "1500+",
        modules: [
            "Python for Data Science",
            "Statistics & Probability",
            "Data Visualization (Matplotlib/Seaborn)",
            "Machine Learning Algorithms",
            "Deep Learning (TensorFlow/Keras)",
            "Natural Language Processing (NLP)",
            "Big Data Technologies"
        ],
        features: [
            "Capstone Projects",
            "Hackathons & Competitions",
            "Expert Guest Lectures",
            "IBM Certification Preparation"
        ]
    },
    "data-analytics": {
        title: "Data Analytics",
        category: "Data Science",
        description: "Learn to analyze raw data to find trends and answer questions. Master tools like Excel, SQL, Tableau, and PowerBI to become a sought-after data analyst.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        duration: "5 Months",
        level: "Beginner",
        rating: 4.6,
        students: "1100+",
        modules: [
            "Advanced Excel & Spreadsheets",
            "SQL for Data Analysis",
            "Data Visualization with Tableau",
            "PowerBI Dashboarding",
            "Python for Analytics",
            "Business Intelligence Concepts",
            "Predictive Analytics"
        ],
        features: [
            "Real Business Case Studies",
            "Portfolio Building",
            "Resume Workshops",
            "Certification"
        ]
    }
};

const CourseDetails = () => {
    const { id } = useParams();
    const course = coursesData[id];
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!course) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50">
                <h2 className="text-3xl font-bold text-neutral-800 mb-4">Course Not Found</h2>
                <p className="text-neutral-500 mb-8">The course you are looking for does not exist.</p>
                <Link to="/courses" className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors">
                    Back to Courses
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-neutral-50 min-h-screen pt-20">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full bg-neutral-900 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-secondary/90 text-white text-sm font-bold px-3 py-1 rounded w-fit mb-4"
                        >
                            {course.category}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
                        >
                            {course.title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center gap-6 text-neutral-300"
                        >
                            <div className="flex items-center"><Clock className="w-5 h-5 mr-2" /> {course.duration}</div>
                            <div className="flex items-center"><Layers className="w-5 h-5 mr-2" /> {course.level}</div>
                            <div className="flex items-center text-yellow-400"><Star className="w-5 h-5 mr-2 fill-current" /> {course.rating} ({course.students})</div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
                                <BookOpen className="mr-3 text-secondary" /> Course Overview
                            </h2>
                            <p className="text-neutral-600 leading-relaxed text-lg">
                                {course.description}
                            </p>
                        </section>

                        {/* Modules */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                                <Monitor className="mr-3 text-secondary" /> What You'll Learn
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {course.modules.map((mod, index) => (
                                    <div key={index} className="flex items-start p-3 bg-neutral-50 rounded-lg">
                                        <div className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                        <span className="text-neutral-700 font-medium">{mod}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Key Features */}
                        <section>
                            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
                                <Award className="mr-3 text-secondary" /> Key Features
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {course.features.map((feature, index) => (
                                    <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
                                        <CheckCircle className="text-green-500 w-6 h-6 mr-3" />
                                        <span className="font-semibold text-neutral-800">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / CTA */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-lg border border-neutral-100">
                            <h3 className="text-xl font-bold text-neutral-800 mb-6">Interested in this course?</h3>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full bg-secondary hover:bg-yellow-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] mb-4"
                            >
                                Enroll Now
                            </button>
                            <button className="w-full bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-700 font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02]">
                                Download Syllabus
                            </button>
                            <div className="mt-6 text-sm text-neutral-500 text-center">
                                Talk to our career counselor for free guidance.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <EnrollmentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                courseTitle={course.title}
            />
        </div>
    );
};

export default CourseDetails;
