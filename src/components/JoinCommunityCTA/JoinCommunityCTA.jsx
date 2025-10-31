import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaHeart, FaRegSmile, FaRegStar, FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "react-router";

const JoinCommunityCTA = () => {
    return (
        <section className="relative py-20 px-4 bg-base-200 dark:bg-base-100 overflow-hidden">
            {/* Abstract background pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-10 dark:opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
            </div>

            {/* Floating shapes decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => {
                    const colors = [
                        "from-primary to-primary/30",
                        "from-secondary to-secondary/30",
                        "from-accent to-accent/30",
                        "from-info to-info/30",
                        "from-success to-success/30",
                        "from-warning to-warning/30",
                        "from-error to-error/30"
                    ];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];

                    return (
                        <motion.div
                            key={i}
                            className={`absolute rounded-full bg-gradient-to-br ${randomColor} opacity-20 dark:opacity-30`}
                            style={{
                                width: Math.random() * 200 + 100,
                                height: Math.random() * 200 + 100,
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                filter: "blur(40px)"
                            }}
                            animate={{
                                y: [0, Math.random() * 100 - 50],
                                x: [0, Math.random() * 100 - 50],
                                opacity: [0.2, 0.4, 0.2],
                            }}
                            transition={{
                                duration: Math.random() * 15 + 15,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        />
                    );
                })}
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left side - Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">
                            <FaUsers className="text-sm" />
                            <span className="text-sm font-medium">Join 100K+ Members</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-base-content">
                            Discover <span className="text-primary">Better Products</span> Together
                        </h2>

                        <p className="text-lg text-base-content/80 mb-8 max-w-lg">
                            Be part of a community that helps each other find quality products while avoiding buyer's remorse.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                { text: "Get personalized recommendations", icon: <FaRegStar className="text-primary" /> },
                                { text: "Save money with better alternatives", icon: <FaRegSmile className="text-secondary" /> },
                                { text: "Share your expertise with others", icon: <FaLightbulb className="text-accent" /> },
                                { text: "Access exclusive community deals", icon: <FaRegCheckCircle className="text-info" /> }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-base-content">
                                    <div className="bg-base-100 dark:bg-base-200 p-2 rounded-lg shadow-sm">
                                        {item.icon}
                                    </div>
                                    <span className="text-base">{item.text}</span>
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
                                    className="btn btn-primary btn-lg shadow-lg hover:shadow-primary/30"
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
                                    className="btn btn-outline btn-lg border-base-content/20 hover:border-base-content/40 text-base-content hover:bg-base-content/5"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Card Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                {
                                    icon: <FaLightbulb className="text-3xl text-yellow-500" />,
                                    bg: "bg-yellow-500/10 dark:bg-yellow-500/20",
                                    title: "Smart Choices",
                                    desc: "Find better alternatives"
                                },
                                {
                                    icon: <FaUsers className="text-3xl text-blue-500" />,
                                    bg: "bg-blue-500/10 dark:bg-blue-500/20",
                                    title: "Community",
                                    desc: "50K+ members"
                                },
                                {
                                    icon: <FaHeart className="text-3xl text-pink-500" />,
                                    bg: "bg-pink-500/10 dark:bg-pink-500/20",
                                    title: "Trusted",
                                    desc: "Verified reviews"
                                },
                                {
                                    icon: <AiOutlineProduct className="text-3xl text-green-500" />,
                                    bg: "bg-green-500/10 dark:bg-green-500/20",
                                    title: "Products",
                                    desc: "1000+ categories"
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className={`${item.bg} p-6 rounded-xl border border-base-content/10 dark:border-base-content/20 flex flex-col items-center text-center gap-3 backdrop-blur-sm`}
                                >
                                    <div className="p-3 rounded-lg bg-white dark:bg-base-200">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-semibold text-base-content">{item.title}</h3>
                                    <p className="text-sm text-base-content/60">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default JoinCommunityCTA;