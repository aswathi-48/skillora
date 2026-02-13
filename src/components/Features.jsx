import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Monitor, Globe, Shield } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <BookOpen className="h-8 w-8 text-secondary" />,
            title: "Expert Faculty",
            description: "Learn from industry experts and renowned academicians dedicated to your success."
        },
        {
            icon: <Monitor className="h-8 w-8 text-secondary" />,
            title: "Modern Labs",
            description: "State-of-the-art computer and science laboratories equipped with the latest technology."
        },
        {
            icon: <Globe className="h-8 w-8 text-secondary" />,
            title: "Global Curriculum",
            description: "International standard curriculum designed to meet global industry demands."
        },
        {
            icon: <Users className="h-8 w-8 text-secondary" />,
            title: "Small Class Sizes",
            description: "Personalized attention with optimal student-teacher ratio for better learning."
        },
        {
            icon: <Award className="h-8 w-8 text-secondary" />,
            title: "Scholarship Support",
            description: "Merit-based scholarships to support and encourage deserving students."
        },
        {
            icon: <Shield className="h-8 w-8 text-secondary" />,
            title: "Safe Campus",
            description: "24/7 security and a safe, inclusive environment for all students."
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="py-20 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-secondary font-semibold uppercase tracking-wide mb-2">Why Choose Us</h2>
                    <h3 className="text-4xl font-serif font-bold text-primary mb-4">Excellence in Every Detail</h3>
                    <p className="text-neutral-600">
                        We provide an environment where students can thrive academically, socially, and personally.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 group hover:-translate-y-2"
                        >
                            <div className="bg-primary/5 p-4 rounded-xl inline-block mb-6 group-hover:bg-primary/10 transition-colors">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-3">{feature.title}</h4>
                            <p className="text-neutral-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
