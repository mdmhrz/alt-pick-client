import React from "react";
import image from './../../assets/frustrated-woman.jpg'

const AboutUs = () => {
    return (
        <section className="bg-base-100 py-20">
            <div className="w-11/12 mx-auto">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 ">
                    <div className="lg:w-1/2">
                        <h2 className="text-5xl font-bold text-primary mb-6 font-primary">
                            Our Story at <span className="text-accent">AltPick</span>
                        </h2>
                        <p className="text-lg text-secondary mb-8 leading-relaxed">
                            Born from the frustration of endless product searches, AltPick emerged as a solution to connect people who need alternatives with those who've discovered them. What started as a small community forum has grown into a thriving platform helping thousands make better purchasing decisions every day.
                        </p>
                        <div className="stats shadow bg-base-200">
                            <div className="stat">
                                <div className="stat-title text-primary">Community Members</div>
                                <div className="stat-value text-accent">250K+</div>
                                <div className="stat-desc">and growing daily</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title text-primary">Products Suggested</div>
                                <div className="stat-value text-accent">1.2M+</div>
                                <div className="stat-desc">real alternatives</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="">
                            <img
                                src={`${image}`}

                                alt="Community discussing alternatives"
                                className="rounded-xl shadow-2xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-8">
                        <h3 className="text-3xl font-bold text-primary relative inline-block">
                            Our Mission
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-accent mt-2"></span>
                        </h3>
                    </div>
                    <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
                        To empower consumers with collective knowledge, helping everyone find better products that match their needs, values, and budgets — without the corporate bias of traditional review platforms.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 mb-20 max-w-7xl mx-auto">
                    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
                        <figure className="px-10 pt-10">
                            <div className="mask mask-circle bg-accent/10 p-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className="card-title text-primary text-2xl mb-2">Ask & Discover</h3>
                            <p className="text-secondary">Post your product needs and get personalized alternative suggestions from real users.</p>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
                        <figure className="px-10 pt-10">
                            <div className="mask mask-circle bg-accent/10 p-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className="card-title text-primary text-2xl mb-2">Share Wisdom</h3>
                            <p className="text-secondary">Contribute your product knowledge to help others make informed decisions.</p>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-shadow">
                        <figure className="px-10 pt-10">
                            <div className="mask mask-circle bg-accent/10 p-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className="card-title text-primary text-2xl mb-2">Trust First</h3>
                            <p className="text-secondary">Real recommendations from real people - no paid promotions or fake reviews.</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="bg-base-200 rounded-3xl p-12 text-center">
                    <h3 className="text-3xl font-bold text-primary mb-4">The People Behind AltPick</h3>
                    <p className="text-secondary max-w-3xl mx-auto mb-12">
                        We're a diverse team of product enthusiasts, developers, and community builders who believe in the power of collective knowledge.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { name: "Alex Chen", role: "Founder", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" },
                            { name: "Samira Khan", role: "Community Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" },
                            { name: "Jamie Rivera", role: "Product Expert", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" },
                            { name: "Taylor Smith", role: "Developer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" }
                        ].map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="mask mask-squircle w-32 h-32 bg-accent/10 p-1 mb-4">
                                    <img src={member.img} alt={member.name} className="mask mask-squircle w-full h-full object-cover" />
                                </div>
                                <h4 className="text-lg font-semibold text-primary">{member.name}</h4>
                                <p className="text-secondary">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;