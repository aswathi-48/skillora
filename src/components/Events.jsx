import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Events = () => {
    const events = [
        {
            date: "15",
            month: "AUG",
            title: "Annual Science Exhibition",
            time: "10:00 AM - 4:00 PM",
            location: "Main Auditorium",
            image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            date: "22",
            month: "AUG",
            title: "Global Leadership Summit",
            time: "9:00 AM - 5:00 PM",
            location: "Conference Hall A",
            image: "https://images.unsplash.com/photo-1544531696-297afba28d4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        },
        {
            date: "05",
            month: "SEP",
            title: "Alumni Meet 2024",
            time: "6:00 PM Onwards",
            location: "Campus Grounds",
            image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-secondary font-semibold uppercase tracking-wide mb-2">Campus Life</h2>
                        <h3 className="text-4xl font-serif font-bold text-primary">Upcoming Events</h3>
                    </div>
                    <button className="hidden md:flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                        View All Events <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-center shadow-sm">
                                    <div className="text-sm font-bold text-secondary uppercase tracking-wider">{event.month}</div>
                                    <div className="text-2xl font-bold text-primary leading-none">{event.date}</div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors">
                                    {event.title}
                                </h4>
                                <div className="space-y-2 text-sm text-neutral-500">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-2" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        {event.location}
                                    </div>
                                </div>
                                <button className="mt-4 w-full py-2 bg-neutral-50 text-neutral-600 font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors">
                        View All Events <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Events;
