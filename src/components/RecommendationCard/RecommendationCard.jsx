import React from 'react';
import { FaUserCircle, FaClock } from 'react-icons/fa';
import { motion } from 'motion/react'

const RecommendationCard = ({ rec }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 bg-base-100 p-5 rounded-xl border border-base-300 shadow-md hover:shadow-lg transition-all"
        >
            {/* Avatar */}
            <div className="flex-shrink-0">
                {rec.recommenderImage ? (
                    <img
                        src={rec.recommenderImage}
                        alt={rec.recommenderName}
                        className="w-12 h-12 rounded-full object-cover border border-base-300"
                    />
                ) : (
                    <FaUserCircle className="w-12 h-12 text-gray-400" />
                )}
            </div>

            {/* Comment Body */}
            <div className="flex-1">
                {/* Name & Time */}
                <div>
                    <p className="text-sm font-semibold text-primary">{rec.recommenderName}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
                        <FaClock className="text-[10px]" />
                        <span>{new Date(rec.timestamp).toLocaleString()}</span>
                    </div>
                </div>

                {/* Recommendation Content */}
                <div className="mt-3 space-y-2 text-sm leading-relaxed text-base-content">
                    <p>
                        <span className="font-medium">Title:</span> {rec.title}
                    </p>
                    <p>
                        <span className="font-medium">Recommended Product:</span> {rec.product}
                    </p>
                    <p>
                        <span className="font-medium">Reason:</span> {rec.reason}
                    </p>
                </div>

                {/* Optional Image */}
                {rec.image && (
                    <div className="mt-4">
                        <img
                            src={rec.image}
                            alt={rec.product}
                            className="w-full max-w-xs rounded-lg border border-base-200 shadow-sm"
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default RecommendationCard;
