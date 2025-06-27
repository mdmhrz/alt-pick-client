import React from 'react';
import { FaLeaf, FaLightbulb, FaShieldAlt, FaUser } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-base-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">
                        Why Choose Our Platform
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Join thousands of conscious consumers making better choices every
                        day
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6 rounded-lg bg-base-100 transform transition-transform duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaUser className="fas fa-users text-white text-2xl"></FaUser>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Community Driven
                        </h3>
                        <p className="text-gray-600">
                            Powered by real experiences from thousands of users like you
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-base-100 transform transition-transform duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaLeaf className="fas fa-leaf text-white text-2xl"></FaLeaf>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Ethical Choices
                        </h3>
                        <p className="text-gray-600">
                            Find products that align with your values and ethical standards
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-base-100 transform transition-transform duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaLightbulb className="text-white text-2xl"></FaLightbulb>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Informed Decisions
                        </h3>
                        <p className="text-gray-600">
                            Access detailed information to make better purchasing choices
                        </p>
                    </div>

                    <div className="text-center p-6 rounded-lg bg-base-200 transform transition-transform duration-500 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaShieldAlt className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                            Consumer Power
                        </h3>
                        <p className="text-gray-600">
                            Make your voice heard and influence corporate practices
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;