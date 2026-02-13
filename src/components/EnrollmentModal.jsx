import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, GraduationCap } from 'lucide-react';

const EnrollmentModal = ({ isOpen, onClose, courseTitle }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        interest: courseTitle || ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send data to backend
        console.log("Enrollment Data:", formData);
        setStep(2); // Move to success step
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-full transition-colors z-10"
                    >
                        <X size={20} />
                    </button>

                    <div className="p-8">
                        {step === 1 ? (
                            <>
                                <div className="text-center mb-6">
                                    <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                                        <GraduationCap className="h-8 w-8 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-neutral-800">Enroll in {courseTitle || 'Course'}</h3>
                                    <p className="text-neutral-500">Fill in your details to get started with your application.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                            placeholder="+1 (555) 000-0000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            className="w-full bg-secondary hover:bg-yellow-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]"
                                        >
                                            Submit Application
                                        </button>
                                    </div>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    type="spring"
                                    className="bg-green-100 p-4 rounded-full inline-block mb-4"
                                >
                                    <CheckCircle className="h-12 w-12 text-green-600" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-neutral-800 mb-2">Application Received!</h3>
                                <p className="text-neutral-500 mb-6">
                                    Thank you for enrolling in <strong>{courseTitle}</strong>. Our admissions team will contact you shortly at {formData.email}.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-lg transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default EnrollmentModal;
