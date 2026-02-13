import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurStory = () => {
    return (
        <div className="min-h-screen bg-neutral-50 pt-20">
            {/* Hero Section of Story */}
            <div className="relative h-[400px] w-full bg-neutral-900 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                    alt="Our Story Background"
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-secondary font-bold uppercase tracking-widest mb-4"
                    >
                        Since 2021
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
                    >
                        Our Journey
                    </motion.h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="prose prose-lg mx-auto text-neutral-600"
                >
                    <p className="lead text-2xl font-serif text-primary italic mb-8">
                        "Education is not just about filling a bucket, but lighting a fire."
                    </p>

                    <p className="mb-6">
                        Founded over three decades ago, Skillora began with a simple yet ambitious vision: to create an institution where innovation meets tradition. What started as a small campus with just 50 students has now grown into a premier educational hub, nurturing thousands of minds every year.
                    </p>

                    <h3 className="text-2xl font-bold text-neutral-800 mt-12 mb-4">The Early Years</h3>
                    <p className="mb-6">
                        In the late 80s, our founder, Dr. Eleanor Vance, recognized a gap in the educational landscape. She believed in a holistic approach that valued character building as much as academic excellence. With limited resources but boundless determination, the groundwork for Skillora was laid.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                        <img
                            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Historic Campus"
                            className="rounded-2xl shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Modern Classroom"
                            className="rounded-2xl shadow-lg"
                        />
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-800 mt-8 mb-4">A Legacy of Excellence</h3>
                    <p className="mb-6">
                        Today, Skillora stands as a beacon of learning. We have consistently been ranked among the top institutions for our cutting-edge research facilities, diverse faculty, and inclusive environment. Our alumni network spans the globe, with leaders in technology, arts, and business.
                    </p>
                </motion.div>

                {/* Values Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    {[
                        { icon: Target, title: "Our Mission", text: "To empower students with knowledge and skills for a changing world." },
                        { icon: Award, title: "Our Vision", text: "To be a global leader in transformative education and research." },
                        { icon: Users, title: "Our Values", text: "Integrity, Innovation, Inclusivity, and Excellence." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 text-center">
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <item.icon className="h-8 w-8 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-neutral-800 mb-3">{item.title}</h4>
                            <p className="text-neutral-600">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/" className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                        <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OurStory;
