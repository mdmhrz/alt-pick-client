import React from "react";
import {
    FaShieldAlt,
    FaUserLock,
    FaDatabase,
    FaCookie,
    FaUserEdit,
    FaChild,
    FaEnvelope,
    FaChevronDown
} from "react-icons/fa";
import { Link } from "react-router";

const PrivacyPolicy = () => {
    const policySections = [
        {
            title: "Information We Collect",
            icon: <FaDatabase className="text-2xl text-accent" />,
            content: (
                <>
                    <p className="mb-4">We collect information to provide better services to our users:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Account Information:</strong> Name, email, and profile details when you register</li>
                        <li><strong>Content You Provide:</strong> Product requests, alternative suggestions, and community interactions</li>
                        <li><strong>Usage Data:</strong> How you interact with our platform and services</li>
                        <li><strong>Device Information:</strong> Browser type, IP address, and operating system for security purposes</li>
                    </ul>
                </>
            )
        },
        {
            title: "How We Use Your Information",
            icon: <FaUserEdit className="text-2xl text-accent" />,
            content: (
                <>
                    <p>Your information helps us:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Provide and improve our services</li>
                        <li>Personalize your experience</li>
                        <li>Monitor and analyze usage patterns</li>
                        <li>Develop new features and functionality</li>
                        <li>Protect against fraudulent activity</li>
                        <li>Communicate with you about updates</li>
                    </ul>
                </>
            )
        },
        {
            title: "Data Sharing & Disclosure",
            icon: <FaShieldAlt className="text-2xl text-accent" />,
            content: (
                <>
                    <p>We may share information in these limited circumstances:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>With Your Consent:</strong> When you direct us to share information</li>
                        <li><strong>Service Providers:</strong> Trusted partners who assist our operations (under strict confidentiality)</li>
                        <li><strong>Legal Requirements:</strong> When necessary to comply with laws or protect rights</li>
                        <li><strong>Business Transfers:</strong> In connection with mergers or acquisitions</li>
                    </ul>
                    <p className="mt-4">We <strong>never</strong> sell your personal data to third parties.</p>
                </>
            )
        },
        {
            title: "Cookies & Tracking",
            icon: <FaCookie className="text-2xl text-accent" />,
            content: (
                <>
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Authenticate users and prevent fraud</li>
                        <li>Remember your preferences</li>
                        <li>Analyze site traffic and usage patterns</li>
                        <li>Deliver personalized content</li>
                    </ul>
                    <div className="mt-4 p-4 bg-base-200 rounded-lg">
                        <p>You can control cookies through your browser settings, but some features may not function properly without them.</p>
                    </div>
                </>
            )
        },
        {
            title: "Children's Privacy",
            icon: <FaChild className="text-2xl text-accent" />,
            content: (
                <>
                    <p>Our services are not directed to children under 13:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>We do not knowingly collect personal information from children under 13</li>
                        <li>If we learn we've collected such information, we'll delete it immediately</li>
                        <li>Users must be at least 13 years old to create an account</li>
                    </ul>
                </>
            )
        },
        {
            title: "Your Rights & Choices",
            icon: <FaUserLock className="text-2xl text-accent" />,
            content: (
                <>
                    <p>You have control over your information:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li><strong>Access & Correction:</strong> View and update your account information</li>
                        <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                        <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
                        <li><strong>Data Portability:</strong> Request a copy of your data</li>
                    </ul>
                    <div className="mt-4 p-4 bg-base-200 rounded-lg">
                        <p>To exercise these rights, contact us at <a href="mailto:privacy@altpick.com" className="text-accent hover:underline">privacy@altpick.com</a></p>
                    </div>
                </>
            )
        },
        {
            title: "Data Security",
            icon: <FaShieldAlt className="text-2xl text-accent" />,
            content: (
                <>
                    <p>We implement robust security measures:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Encryption of sensitive data</li>
                        <li>Regular security audits</li>
                        <li>Access controls and authentication protocols</li>
                        <li>Employee training on data protection</li>
                    </ul>
                    <p className="mt-4">While we strive to protect your information, no system is 100% secure.</p>
                </>
            )
        },
        {
            title: "Policy Updates",
            icon: <FaEnvelope className="text-2xl text-accent" />,
            content: (
                <>
                    <p>We may update this policy periodically:</p>
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>Changes will be posted on this page with a new "Last Updated" date</li>
                        <li>Material changes will be communicated via email or platform notification</li>
                        <li>Continued use after changes constitutes acceptance of the new terms</li>
                    </ul>
                </>
            )
        }
    ];

    return (
        <div className="bg-gradient-to-b from-base-200 to-base-300 min-h-screen">
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-primary font-primary mb-4">
                            AltPick Privacy Policy
                        </h1>
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-px bg-primary/20 flex-1"></div>
                            <p className="text-lg text-secondary">
                                Last Updated: {new Date().toLocaleDateString()}
                            </p>
                            <div className="h-px bg-primary/20 flex-1"></div>
                        </div>
                        <p className="text-secondary max-w-3xl mx-auto">
                            We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information.
                        </p>
                    </div>

                    {/* Policy Sections */}
                    <div className="space-y-8">
                        {policySections.map((section, index) => (
                            <div
                                key={index}
                                className="bg-base-100 rounded-xl p-8 shadow-lg border-l-4 border-accent hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="bg-accent/10 p-3 rounded-full flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                                        {section.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-2xl font-bold text-primary mb-4">
                                                {section.title}
                                            </h2>
                                            <FaChevronDown className="text-accent transform group-hover:rotate-180 transition-transform" />
                                        </div>
                                        <div className="text-secondary space-y-4">
                                            {section.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <div className="mt-16 text-center bg-base-100 rounded-xl p-8 shadow-lg">
                        <div className="flex justify-center mb-6">
                            <div className="bg-accent/10 p-4 rounded-full">
                                <FaShieldAlt className="text-4xl text-accent" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-semibold text-primary mb-4">
                            Contact Our Privacy Team
                        </h3>
                        <p className="text-secondary max-w-2xl mx-auto mb-6">
                            If you have questions about this policy or your personal data:
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="mailto:privacy@altpick.com"
                                className="btn btn-accent"
                            >
                                Email Privacy Officer
                            </a>
                            <Link
                                to={`/support`}
                                className="btn btn-outline btn-primary"
                            >
                                Contact Form
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;