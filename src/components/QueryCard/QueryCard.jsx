import React from 'react';
import { Link } from 'react-router';

const QueryCard = ({ query }) => {
    return (
        <div
            key={query._id}
            className="bg-base-200 p-5 rounded-xl border border-slate-600 shadow-md hover:shadow-xl transition duration-300"
        >
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-lg font-bold text-primary">{query.queryTitle}</h3>
                    <p className="text-sm text-gray-400">
                        <span className="font-medium">Product:</span>{" "}
                        {query.productName} by {query.productBrand}
                    </p>
                </div>

                {/* Beautiful Recommendation Count Badge */}
                <div className="flex items-center gap-1 px-3 py-1 bg-accent/20 text-accent font-medium text-sm rounded-full">
                    <span className="text-base">👍</span>
                    <span>{query.recommendationCount}</span>
                </div>
            </div>

            {/* Image */}
            <div className="h-44 rounded-lg overflow-hidden mb-4 border border-base-300 shadow-sm">
                <img
                    src={query.productImageUrl}
                    alt={query.productName}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Timestamp */}
            <p className="text-xs text-gray-500 mb-4">
                Posted on:{" "}
                {new Date(query.timestamp).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                })}
            </p>

            {/* Recommend Button */}
            <div className="text-end">
                <Link to={`/query-details/${query._id}`}>
                    <button className="btn btn-sm btn-primary">Recommend</button>
                </Link>
            </div>
        </div>

    );
};

export default QueryCard;