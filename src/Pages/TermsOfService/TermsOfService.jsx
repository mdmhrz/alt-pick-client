import React from "react";
import { FaBalanceScale, FaUserShield, FaFileContract, FaGavel, FaExclamationTriangle, FaShieldAlt, FaEdit, FaGlobeAmericas } from "react-icons/fa";

const TermsOfService = () => {
    const sections = [
        {
            title: "Acceptance of Terms",
            icon: <FaFileContract className="text-2xl text-accent" />,
            content: (
                <>
                    <p>
                        By accessing or using the AltPick platform ("Service"), you agree to be bound by these
                        Terms of Service ("Terms"). If you disagree with any part of the terms, you may not
                        access the Service.
                    </p>
                </>
            )
        },
        {
            title: "Description of Service",
            icon: <FaBalanceScale className="text-2xl text-accent" />,
            content: (
                <>
                    <p>AltPick is a community-driven platform that enables users to:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Request alternatives to products</li>
                        <li>Recommend alternative products based on personal experience</li>
                        <li>Discuss and compare product options</li>
                        <li>Vote on the quality of alternative suggestions</li>
                    </ul>
                </>
            )
        },
        {
            title: "User Responsibilities",
            icon: <FaUserShield className="text-2xl text-accent" />,
            content: (
                <>
                    <p>When using AltPick, you agree to:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Provide accurate, non-misleading information</li>
                        <li>Only recommend products you have personally used</li>
                        <li>Disclose any conflicts of interest or affiliations</li>
                        <li>Not engage in promotional or spam activities</li>
                        <li>Respect all intellectual property rights</li>
                    </ul>
                </>
            )
        },
        {
            title: "Content Policy",
            icon: <FaEdit className="text-2xl text-accent" />,
            content: (
                <>
                    <p>All user-generated content must comply with our community guidelines:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>No false or deceptive recommendations</li>
                        <li>No affiliate links or promotional content</li>
                        <li>No offensive, harmful, or illegal content</li>
                        <li>No personal attacks or harassment</li>
                    </ul>
                    <p className="mt-4">
                        AltPick reserves the right to remove any content that violates these policies.
                    </p>
                </>
            )
        },
        {
            title: "Disclaimer of Warranties",
            icon: <FaExclamationTriangle className="text-2xl text-accent" />,
            content: (
                <>
                    <p>The Service is provided "as is" without warranties of any kind. AltPick does not:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Guarantee the accuracy of recommendations</li>
                        <li>Endorse any particular product or alternative</li>
                        <li>Assume responsibility for purchasing decisions made based on our content</li>
                    </ul>
                </>
            )
        },
        {
            title: "Limitation of Liability",
            icon: <FaShieldAlt className="text-2xl text-accent" />,
            content: (
                <>
                    <p>AltPick shall not be liable for any indirect, incidental, special or consequential damages resulting from:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Use or inability to use the Service</li>
                        <li>Unauthorized access to or alteration of your transmissions</li>
                        <li>Any content posted by third parties</li>
                    </ul>
                </>
            )
        },
        {
            title: "Modifications to Terms",
            icon: <FaEdit className="text-2xl text-accent" />,
            content: (
                <p>
                    We reserve the right to modify these terms at any time. Continued use of the Service
                    after changes constitutes acceptance of the new terms. We will notify users of
                    significant changes through our platform or via email.
                </p>
            )
        },
        {
            title: "Governing Law",
            icon: <FaGavel className="text-2xl text-accent" />,
            content: (
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of [Your
                    Country/State], without regard to its conflict of law provisions.
                </p>
            )
        }
    ];

    return (
        <div className="bg-gradient-to-b from-base-200 to-base-300 min-h-screen">
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary font-primary mb-4">
                            AltPick Terms of Service
                        </h1>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px bg-primary/20 flex-1"></div>
                            <p className="text-lg text-secondary">
                                Last Updated: {new Date().toLocaleDateString()}
                            </p>
                            <div className="h-px bg-primary/20 flex-1"></div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className="bg-base-100 rounded-xl p-8 shadow-lg border-l-4 border-accent hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                                        {section.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                                            {index + 1}. {section.title}
                                        </h2>
                                        <div className="text-secondary space-y-4">
                                            {section.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-base-100 rounded-xl p-8 shadow-lg">
                        <div className="flex justify-center mb-6">
                            <FaGlobeAmericas className="text-4xl text-accent" />
                        </div>
                        <h3 className="text-2xl font-semibold text-primary mb-4">
                            Contact Us
                        </h3>
                        <p className="text-secondary max-w-2xl mx-auto">
                            For questions about these Terms, please contact our legal team at{" "}
                            <a
                                href="mailto:legal@altpick.com"
                                className="text-accent hover:underline font-medium"
                            >
                                legal@altpick.com
                            </a>. We typically respond within 2 business days.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;