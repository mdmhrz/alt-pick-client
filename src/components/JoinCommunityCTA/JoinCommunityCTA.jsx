import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router";

const JoinCommunityCTA = () => {
    return (
        <section className="relative py-24 px-4 bg-gradient-to-br from-primary to-accent text-white overflow-hidden">
            {/* Floating bubbles decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white/10"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, Math.random() * 100 - 50],
                            x: [0, Math.random() * 40 - 20],
                            opacity: [0.8, 0.4, 0.8],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left side - Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2"
                    >
                        <div className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <FaLightbulb className="text-4xl text-yellow-500" />, bg: "bg-yellow-500/20" },
                                    { icon: <FaUsers className="text-4xl text-white" />, bg: "bg-blue-500/20" },
                                    { icon: <FaHeart className="text-4xl text-pink-400" />, bg: "bg-pink-500/20" },
                                    { icon: <AiOutlineProduct className="text-4xl text-blue-400" />, bg: "bg-accent/20" },
                                    // <div key="cta" className="col-span-2">
                                    //     <div className="h-full bg-white/10 rounded-xl p-4 flex items-center justify-center">
                                    //         <span className="text-lg font-medium">100K+ Happy Members</span>
                                    //     </div>
                                    // </div>
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`${item.bg || 'bg-white/10'} rounded-xl p-6 flex items-center justify-center aspect-square`}
                                    >
                                        {item.icon}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Join Our <span className="text-accent-content">Product Savvy</span> Community
                        </h2>

                        <p className="text-xl text-white/90 mb-8 max-w-lg">
                            Connect with like-minded shoppers who help each other find the perfect products without the buyer's remorse.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                "Get personalized product recommendations",
                                "Save money by discovering better alternatives",
                                "Share your expertise and help others",
                                "Access exclusive community deals"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="bg-white/20 p-1 rounded-full">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/register"
                                    className="btn btn-accent btn-lg shadow-lg"
                                >
                                    Join Now - It's Free
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    to="/about"
                                    className="btn btn-outline btn-lg border-white text-white hover:bg-white/10"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default JoinCommunityCTA;