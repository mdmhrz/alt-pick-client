import React from 'react';
import { FiEdit3, FiMessageCircle, FiThumbsUp, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        {
            icon: <FiEdit3 className="text-3xl" />,
            title: 'Post Your Query',
            description: 'Ask for alternatives by posting your product query in seconds.',
            color: 'bg-indigo-100',
            accent: 'text-indigo-600'
        },
        {
            icon: <FiMessageCircle className="text-3xl" />,
            title: 'Get Recommendations',
            description: 'Our community suggests vetted alternatives tailored to your needs.',
            color: 'bg-blue-100',
            accent: 'text-blue-600'
        },
        {
            icon: <FiThumbsUp className="text-3xl" />,
            title: 'Vote & Discuss',
            description: 'Collaborate with others to identify the best options available.',
            color: 'bg-green-100',
            accent: 'text-green-600'
        },
        {
            icon: <FiCheckCircle className="text-3xl" />,
            title: 'Choose the Best',
            description: 'Make confident purchase decisions with community insights.',
            color: 'bg-purple-100',
            accent: 'text-purple-600'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="bg-gradient-to-b from-base-100 to-base-200 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-bold text-primary font-primary mb-4"
                    >
                        How AltPick Works
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-secondary max-w-3xl mx-auto"
                    >
                        Discover better products through our simple 4-step community-powered process
                    </motion.p>
                </motion.div>

                <div className="relative">
                    {/* Timeline connector */}
                    <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-indigo-200 via-blue-200 to-green-200 rounded-full"></div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="relative"
                            >
                                <div className={`${step.color} ${step.accent} p-8 rounded-2xl shadow-lg h-full flex flex-col items-center text-center relative z-10 border border-base-300/50 hover:shadow-xl transition-all`}>
                                    <div className={`mb-6 p-4 rounded-full ${step.color.replace('100', '50')} border-2 ${step.accent.replace('text', 'border')}`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                                    <p className="text-secondary mb-6">{step.description}</p>
                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${step.color.replace('100', '200')} ${step.accent}`}>
                                        Step {index + 1}
                                    </span>
                                </div>
                                {/* Connector dots for mobile */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden flex justify-center my-4">
                                        <div className="h-4 w-4 rounded-full bg-primary/20"></div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute left-0 top-1/4 w-64 h-64 rounded-full bg-indigo-100/30 blur-3xl -z-10"></div>
                <div className="absolute right-0 bottom-0 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl -z-10"></div>
            </div>
        </section>
    );
};

export default HowItWorks;