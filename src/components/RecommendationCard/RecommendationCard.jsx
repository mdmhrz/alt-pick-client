import React from 'react';
import { FaUserCircle, FaClock } from 'react-icons/fa';

const RecommendationCard = ({ rec }) => {
    return (
        <div className="flex items-start gap-4 bg-base-100 p-5 rounded-xl border border-slate-700 shadow-sm hover:shadow transition-all">
            {/* Avatar */}
            <div className="flex-shrink-0">
                {rec.recommenderImage ? (
                    <img
                        src={rec.recommenderImage}
                        alt={rec.recommenderName}
                        className="w-12 h-12 rounded-full object-cover border border-base-300"
                    />
                ) : (
                    <FaUserCircle className="w-12 h-12" />
                )}
            </div>

            {/* Comment Body */}
            <div className="flex-1">
                {/* Name & Time */}
                <div>
                    <p className="text-sm font-semibold text-primary">{rec.recommenderName}</p>
                    <div className="flex items-center gap-1 text-xs mt-0.5">
                        <FaClock className="text-[10px]" />
                        <span>{new Date(rec.timestamp).toLocaleString()}</span>
                    </div>
                </div>

                {/* Recommendation Content */}
                <div className="mt-3 space-y-2 text-sm">
                    <p>
                        <span className="font-medium text-base-content">Title:</span> {rec.title}
                    </p>
                    <p>
                        <span className="font-medium text-base-content">Recommended Product:</span> {rec.product}
                    </p>
                    <p>
                        <span className="font-medium text-base-content">Reason:</span> {rec.reason}
                    </p>
                </div>

                {/* Optional Image */}
                {rec.image && (
                    <div className="mt-3">
                        <img
                            src={rec.image}
                            alt={rec.product}
                            className="w-full max-w-sm rounded-lg border border-base-200"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecommendationCard;
