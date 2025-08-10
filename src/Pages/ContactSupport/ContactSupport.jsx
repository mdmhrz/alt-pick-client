import React from "react";

const ContactSupport = () => {
    return (
        <div className="bg-base-300">
            <section className="w-11/12 mx-auto py-20">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-primary font-primary mb-6">
                            We're Here to Help
                        </h2>
                        <p className="text-xl text-secondary max-w-2xl mx-auto">
                            Whether you have questions about alternatives, need support, or want to provide feedback, our team is ready to assist you.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Form Section */}
                        <div className="lg:w-1/2">
                            <div className="card bg-base-200 shadow-xl">
                                <div className="card-body p-8">
                                    <h3 className="text-2xl font-bold text-primary mb-2">
                                        Send Us a Message
                                    </h3>
                                    <p className="text-secondary mb-6">
                                        We typically respond within 24 hours
                                    </p>

                                    <form className="space-y-6">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-secondary font-semibold">Your Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="input input-bordered w-full"
                                            />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-secondary font-semibold">Email Address</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="input input-bordered w-full"
                                            />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-secondary font-semibold">Subject</span>
                                            </label>
                                            <select className="select select-bordered w-full">
                                                <option disabled selected>What's this about?</option>
                                                <option>Product Alternative Request</option>
                                                <option>Account Support</option>
                                                <option>Feedback/Suggestions</option>
                                                <option>Partnership Inquiry</option>
                                                <option>Other</option>
                                            </select>
                                        </div>

                                        <div className="form-control flex flex-col">
                                            <label className="label">
                                                <span className="label-text text-secondary font-semibold">Your Message</span>
                                            </label>
                                            <textarea
                                                className="textarea textarea-bordered h-32 w-full"
                                                placeholder="How can we help you today?"
                                            ></textarea>
                                        </div>

                                        <div className="form-control mt-8">
                                            <button className="btn btn-primary w-full">
                                                Send Message
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Additional Contact Info */}
                        <div className="lg:w-1/2 space-y-8">
                            <div className="bg-base-200 rounded-box p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-primary mb-6">
                                    Other Ways to Reach Us
                                </h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-accent/10 p-3 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-primary">Email Support</h4>
                                            <p className="text-secondary">For general inquiries</p>
                                            <a href="mailto:support@altpick.com" className="text-accent hover:underline">support@altpick.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-accent/10 p-3 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-primary">Phone Support</h4>
                                            <p className="text-secondary">Monday-Friday, 9am-5pm EST</p>
                                            <a href="tel:+18005551234" className="text-accent hover:underline">+1 (800) 555-1234</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-accent/10 p-3 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-primary">Live Chat</h4>
                                            <p className="text-secondary">Instant help during business hours</p>
                                            <button className="btn btn-sm btn-accent mt-2">Start Chat</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-base-200 rounded-box p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-primary mb-4">
                                    Frequently Asked Questions
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        {
                                            question: "How do I request alternatives for a product?",
                                            answer: "Simply search for the product in our database or create a new request if it's not listed. Our community will suggest alternatives based on your needs (budget, features, sustainability, etc.)."
                                        },
                                        {
                                            question: "Can I suggest alternatives without being asked?",
                                            answer: "Absolutely! If you know of great alternatives for popular products, you can submit them through our 'Suggest an Alternative' feature. Our team verifies submissions before they go live."
                                        },
                                        {
                                            question: "How are alternative recommendations verified?",
                                            answer: "Every recommendation goes through community voting and our moderation team checks for accuracy. We prioritize first-hand experiences and remove promotional content."
                                        },
                                        {
                                            question: "Do you earn commissions on recommended products?",
                                            answer: "No, AltPick is completely ad-free and doesn't use affiliate links. Our recommendations are unbiased and based solely on community experiences."
                                        },
                                        {
                                            question: "What makes a good alternative recommendation?",
                                            answer: "Great recommendations compare key features, price points, and include personal experience. Mention why you prefer it and any trade-offs compared to the original product."
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="collapse collapse-plus">
                                            <input type="radio" name="faq-accordion" />
                                            <div className="collapse-title text-lg font-medium text-primary">
                                                {item.question}
                                            </div>
                                            <div className="collapse-content text-secondary">
                                                <p>{item.answer}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <a href="/faq" className="text-accent hover:underline mt-4 inline-block">View all FAQs →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSupport;