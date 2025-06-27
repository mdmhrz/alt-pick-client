import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router';
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <>

            <div className="min-h-screen bg-base-200 flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-lg text-center bg-base-100 p-10 rounded-xl shadow-lg border border-base-300"
                >
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                        className="text-6xl font-extrabold text-error drop-shadow-sm"
                    >
                        404
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-2xl font-bold text-base-content mt-4"
                    >
                        Page Not Found
                    </motion.h2>

                    <p className="text-base-content/70 mt-3">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>

                    <div className="mt-6">
                        <Link to="/" className="btn btn-primary btn-wide text-center">
                            <FaHome /> Back to Home
                        </Link>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default ErrorPage;