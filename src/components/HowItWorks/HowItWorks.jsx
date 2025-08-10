import React from 'react';
import { FiEdit3, FiMessageCircle, FiThumbsUp, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading/SectionHeading';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            icon: <FiEdit3 className="text-3xl" />,
            title: 'Post Your Query',
            description: 'Ask for alternatives by posting your product query in seconds.',
            color: 'bg-indigo-600/10',
            accent: 'text-indigo-600'
        },
        {
            id: 2,
            icon: <FiMessageCircle className="text-3xl" />,
            title: 'Get Recommendations',
            description: 'Our community suggests vetted alternatives tailored to your needs.',
            color: 'bg-blue-600/10',
            accent: 'text-blue-600'
        },
        {
            id: 3,
            icon: <FiThumbsUp className="text-3xl" />,
            title: 'Vote & Discuss',
            description: 'Collaborate with others to identify the best options available.',
            color: 'bg-green-600/10',
            accent: 'text-green-600'
        },
        {
            id: 4,
            icon: <FiCheckCircle className="text-3xl" />,
            title: 'Choose the Best',
            description: 'Make confident purchase decisions with community insights.',
            color: 'bg-purple-600/10',
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
        <section className="bg-base-300 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <SectionHeading title={'How AltPick Works'} subtitle={'Discover better products through our simple 4-step community-powered process'}></SectionHeading>

                <div className="relative">


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
                                <p className='p-3 rounded-full w-10 h-10 bg-accent text-white absolute text-center flex items-center justify-center -top-5 left-0 right-0 z-20'>{index + 1}</p>
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