import React from 'react';
import { FaLeaf, FaLightbulb, FaShieldAlt, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

const WhyChooseUs = () => {
    return (
        <div className='bg-base-300'>
            <section className="py-16 w-11/12 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 px-6"
                >
                    <h2 className="text-3xl text-secondary font-bold mb-4">
                        Why Choose Our Platform
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Join thousands of conscious consumers making better choices every day
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                    {[ // data-based rendering for simplicity and scalability
                        {
                            icon: <FaUser className="text-white text-2xl" />,
                            title: "Community Driven",
                            color: "bg-blue-600",
                            text: "Powered by real experiences from thousands of users like you"
                        },
                        {
                            icon: <FaLeaf className="text-white text-2xl" />,
                            title: "Ethical Choices",
                            color: "bg-green-600",
                            text: "Find products that align with your values and ethical standards"
                        },
                        {
                            icon: <FaLightbulb className="text-white text-2xl" />,
                            title: "Informed Decisions",
                            color: "bg-purple-600",
                            text: "Access detailed information to make better purchasing choices"
                        },
                        {
                            icon: <FaShieldAlt className="text-white text-2xl" />,
                            title: "Consumer Power",
                            color: "bg-amber-600",
                            text: "Make your voice heard and influence corporate practices"
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 rounded-lg bg-base-100 transform transition-transform duration-500 hover:-translate-y-2 shadow-md"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={index}
                            viewport={{ once: true }}
                        >
                            <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>

    );
};

export default WhyChooseUs;
