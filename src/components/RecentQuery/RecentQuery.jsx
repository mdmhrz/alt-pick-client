import React from "react";

const RecentQuery = ({ queries = [] }) => {
    return (
        <div className="bg-base-100 p-4 rounded-xl shadow-md w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Recent Queries</h2>
            <div className="space-y-4">
                {queries.length === 0 ? (
                    <p className="text-gray-500">No recent queries found.</p>
                ) : (
                    queries.map((query) => (
                        <div
                            key={query.id}
                            className="bg-base-200 p-4 rounded-lg border border-base-300"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-medium text-secondary">
                                        {query.title}
                                    </h3>
                                    <p className="text-sm text-gray-400">{query.description}</p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Posted by: <span className="font-medium">{query.user}</span> · {query.time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default RecentQuery;
