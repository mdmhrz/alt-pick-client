import React from 'react';
import footerAnim from '../../assets/footer.json'
import Lottie from 'lottie-react';

const Footer = () => {
    return (
        <footer className="relative text-base-100 px-6 py-16 overflow-hidden">
            {/* Background image with 20% opacity */}
            <div
                className="absolute inset-0 flex items-end justify-center  bg-cover bg-center opacity-100 pointer-events-none z-5"
                aria-hidden="true"
            >
                <Lottie animationData={footerAnim} loop={true} className="w-full opacity-5 z-50" ></Lottie>

            </div>
            <div
                className="absolute bg-black opacity-80 inset-0 flex items-end justify-center  bg-cover bg-center pointer-events-none z-4"
                aria-hidden="true"

            >


            </div>



            {/* Content overlay */}
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 z-10">
                {/* Brand Info */}
                <div>
                    <h2 className="text-2xl font-bold text-[#209187]">AltPick</h2>
                    <p className="mt-3 text-sm text-gray-300">
                        Empowering smart product decisions through community-driven recommendations.
                    </p>
                    <div className="mt-4 flex gap-4 text-lg text-gray-400">
                        <a href="#" className="hover:text-[#209187] transition"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#" className="hover:text-[#209187] transition"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#" className="hover:text-[#209187] transition"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="#" className="hover:text-[#209187] transition"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-4 text-white">Explore</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/" className="hover:text-[#209187]">Home</a></li>
                        <li><a href="/about" className="hover:text-[#209187]">About</a></li>
                        <li><a href="/queries" className="hover:text-[#209187]">Queries</a></li>
                        <li><a href="/recommendations" className="hover:text-[#209187]">Recommendations</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="font-semibold mb-4 text-white">Support</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li><a href="/faq" className="hover:text-[#209187]">FAQ</a></li>
                        <li><a href="/contact" className="hover:text-[#209187]">Contact</a></li>
                        <li><a href="/terms" className="hover:text-[#209187]">Terms of Service</a></li>
                        <li><a href="/privacy" className="hover:text-[#209187]">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="font-semibold mb-4 text-white">Stay Updated</h3>
                    <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter to get the latest updates.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="input input-bordered w-full rounded-l bg-white text-black placeholder-gray-500"
                        />
                        <button className="btn shadow-none bg-primary hover:bg-[#1b766c] border-none text-white rounded-l-none">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="relative border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500 z-10">
                © {new Date().getFullYear()} AltPick. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;