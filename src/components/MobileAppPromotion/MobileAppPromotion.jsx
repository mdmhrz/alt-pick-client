import React from 'react';
import { FaApple, FaGooglePlay, FaMobileAlt, FaBell, FaSearch, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MobileAppPromotion = () => {
    return (
        <section className="bg-gradient-to-br from-primary/5 to-base-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                                Coming Soon
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-primary mb-6">
                                AltPick <span className="text-accent">Mobile Experience</span>
                            </h2>
                            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
                                Get instant access to product alternatives, receive recommendations, and connect with our community - all from your pocket.
                            </p>

                            {/* App Features */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 max-w-lg mx-auto lg:mx-0">
                                {[
                                    { icon: <FaMobileAlt className="text-2xl" />, text: "Mobile-Optimized" },
                                    { icon: <FaBell className="text-2xl" />, text: "Push Notifications" },
                                    { icon: <FaSearch className="text-2xl" />, text: "Quick Search" },
                                    { icon: <FaComments className="text-2xl" />, text: "Real-time Chat" },
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        className="bg-base-100 p-4 rounded-xl shadow-sm flex flex-col items-center gap-2"
                                    >
                                        <div className="text-accent">{feature.icon}</div>
                                        <span className="text-sm font-medium">{feature.text}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Download Buttons */}
                            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#"
                                    className="flex items-center justify-center gap-3 px-6 py-4 bg-base-100 rounded-xl shadow-md hover:shadow-lg transition-all"
                                >
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                        <FaApple className="text-2xl text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-xs text-secondary">Download on the</span>
                                        <span className="block font-bold text-primary">App Store</span>
                                    </div>
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="#"
                                    className="flex items-center justify-center gap-3 px-6 py-4 bg-base-100 rounded-xl shadow-md hover:shadow-lg transition-all"
                                >
                                    <div className="bg-primary/10 p-2 rounded-lg">
                                        <FaGooglePlay className="text-2xl text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <span className="block text-xs text-secondary">Get it on</span>
                                        <span className="block font-bold text-primary">Google Play</span>
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Phone Mockup */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Phone Frame */}
                            <div className="relative mx-auto w-72 h-[500px] bg-base-100 rounded-[40px] border-8 border-base-300 shadow-2xl overflow-hidden">
                                {/* Screen Content */}
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-base-100 p-4">
                                    {/* App Header */}
                                    <div className="flex justify-between items-center mb-6">
                                        <span className="font-bold text-primary">AltPick</span>
                                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">v1.0</span>
                                    </div>

                                    {/* App Content */}
                                    <div className="space-y-4">
                                        <div className="bg-primary/5 rounded-lg p-3">
                                            <div className="h-3 w-3/4 bg-primary/20 rounded mb-2"></div>
                                            <div className="h-3 w-1/2 bg-primary/20 rounded"></div>
                                        </div>
                                        <div className="bg-primary/5 rounded-lg p-3">
                                            <div className="h-3 w-2/3 bg-primary/20 rounded mb-2"></div>
                                            <div className="h-3 w-1/2 bg-primary/20 rounded"></div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[1, 2, 3, 4].map((item) => (
                                                <div key={item} className="bg-primary/5 rounded-lg p-2 h-20 flex items-center justify-center">
                                                    <div className="text-primary/40">
                                                        <FaMobileAlt className="mx-auto mb-1" />
                                                        <div className="h-2 w-3/4 mx-auto bg-primary/20 rounded"></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Floating Action Button */}
                                    <div className="absolute bottom-6 right-6 w-14 h-14 bg-accent rounded-full shadow-lg flex items-center justify-center text-white">
                                        <FaSearch className="text-xl" />
                                    </div>
                                </div>

                                {/* Phone Notch */}
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-base-300 rounded-b-xl"></div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl"></div>
                            <div className="absolute -z-10 bottom-0 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobileAppPromotion;