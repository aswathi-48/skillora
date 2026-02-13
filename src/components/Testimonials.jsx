import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-20 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-secondary font-semibold uppercase tracking-wide mb-2">Testimonials</h2>
                    <h3 className="text-4xl font-serif font-bold text-primary">Success Stories</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Sarah Jenkins",
                            role: "Computer Science Graduate",
                            image: "https://randomuser.me/api/portraits/women/44.jpg",
                            text: "Skillora provided me with the perfect blend of theoretical knowledge and practical exposure. The campus placement support is exceptional."
                        },
                        {
                            name: "Michael Chen",
                            role: "Parent of Architecture Student",
                            image: "https://randomuser.me/api/portraits/men/32.jpg",
                            text: "Sending my son to Skillora was the best decision. The faculty's dedication to student growth and the world-class infrastructure are truly commendable."
                        },
                        {
                            name: "Priya Patel",
                            role: "MBA Student",
                            image: "https://randomuser.me/api/portraits/women/68.jpg",
                            text: "The diverse community and global curriculum at Skillora have broadened my horizons. I feel confident and ready to take on the business world."
                        }
                    ].map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                            <div className="absolute top-8 right-8 text-neutral-200 text-6xl font-serif leading-none">"</div>
                            <p className="text-neutral-600 mb-6 relative z-10 italic">
                                {testimonial.text}
                            </p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-secondary"
                                />
                                <div>
                                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                                    <span className="text-xs text-neutral-500 uppercase">{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
