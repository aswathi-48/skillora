import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, Star } from 'lucide-react';

const AppDownload = () => {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-white">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary text-sm font-bold mb-6">
                                NEW RELEASE
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Learning in Your Pocket <br />
                                <span className="text-secondary">Download Our App</span>
                            </h2>
                            <p className="text-neutral-300 text-lg mb-8 max-w-lg">
                                Access course materials, track your attendance, submit assignments, and stay updated with campus news - all from your smartphone.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 flex items-center transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
                                    <Download className="h-8 w-8 text-white mr-4" />
                                    <div className="text-left">
                                        <div className="text-xs text-neutral-300 uppercase">Download on the</div>
                                        <div className="text-xl font-bold text-white">App Store</div>
                                    </div>
                                </button>
                                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 flex items-center transition-all duration-300 hover:shadow-lg w-full sm:w-auto">
                                    <div className="h-8 w-8 mr-4 flex items-center justify-center bg-transparent">
                                        <Smartphone className="h-8 w-8 text-white" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-neutral-300 uppercase">Get it on</div>
                                        <div className="text-xl font-bold text-white">Google Play</div>
                                    </div>
                                </button>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <img
                                            key={i}
                                            src={`https://randomuser.me/api/portraits/thumb/men/${20 + i}.jpg`}
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-primary"
                                        />
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <div className="flex items-center text-yellow-400">
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                        <Star className="h-4 w-4 fill-current" />
                                    </div>
                                    <span className="text-neutral-300">Loved by 5000+ students</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        {/* Abstract shapes behind phone */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/30 rounded-full blur-2xl animate-pulse"></div>

                        <div className="relative z-10 bg-neutral-900 border-8 border-neutral-800 rounded-[3rem] shadow-2xl overflow-hidden h-[600px] w-[300px]">
                            {/* Phone top notch */}
                            <div className="absolute top-0 w-full h-8 flex justify-center z-20">
                                <div className="w-32 h-6 bg-neutral-800 rounded-b-2xl"></div>
                            </div>

                            {/* App Screen Content */}
                            <div className="w-full h-full bg-white relative overflow-hidden">
                                <div className="bg-primary h-40 rounded-b-[2.5rem] p-6 pt-12 flex justify-between items-start text-white">
                                    <div>
                                        <div className="text-sm opacity-80">Welcome back,</div>
                                        <div className="text-2xl font-serif font-bold">Alex Johnson</div>
                                    </div>
                                    <div className="bg-white/20 p-2 rounded-full">
                                        <Smartphone size={20} />
                                    </div>
                                </div>

                                <div className="p-6 -mt-10">
                                    <div className="bg-white p-4 rounded-xl shadow-lg mb-6 flex justify-between items-center">
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase">Attendance</div>
                                            <div className="text-2xl font-bold text-primary">87%</div>
                                        </div>
                                        <div className="h-12 w-12 rounded-full border-4 border-secondary flex items-center justify-center text-secondary font-bold">
                                            A
                                        </div>
                                    </div>

                                    <h4 className="font-bold text-gray-800 mb-4">Your Courses</h4>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                                <div className="h-10 w-10 bg-blue-100 rounded-lg mr-4"></div>
                                                <div>
                                                    <div className="font-semibold text-gray-800">Advanced React</div>
                                                    <div className="text-xs text-gray-500">2 hours left</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
