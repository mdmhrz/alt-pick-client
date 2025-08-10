import React from "react";
import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router";

const JoinCommunityCTA = () => {
    return (
        <section className="relative py-20 px-4 bg-accent overflow-hidden text-white">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-[url('https://25913880.fs1.hubspotusercontent-eu1.net/hub/25913880/hubfs/blog_workplace.png?width=900&name=blog_workplace.png')] bg-cover opacity-10 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto text-center backdrop-blur-sm bg-white/10 p-10 rounded-3xl border border-white/20 shadow-2xl">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white"
                >
                    Join Our Helpful Community
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-lg max-w-2xl mx-auto text-white/90 mb-8"
                >
                    Track your product queries, receive helpful recommendations, and stay updated with the latest trends — all in one place.
                </motion.p>

                <div className="grid gap-2 justify-center mb-8 text-sm text-white">
                    {[
                        "Ask product questions & get real answers",
                        "Bookmark and track your queries",
                        "Get notified when someone recommends",
                    ].map((text, idx) => (
                        <p key={idx} className="flex items-center justify-center gap-2">
                            <FaCheckCircle className="text-primary" /> {text}
                        </p>
                    ))}
                </div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        to="/register"
                        className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
                    >
                        Sign Up Today
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default JoinCommunityCTA;