import React, { useEffect, useState } from "react";
import { FaThLarge, FaTh, FaList, FaRegThumbsUp } from "react-icons/fa";
import { motion } from "motion/react";
import { Link } from "react-router";

const Queries = () => {
    const [queries, setQueries] = useState([]);
    const [columns, setColumns] = useState(3);
    const [searchTerm, setSearchTerm] = useState(""); // 🔍 Search state

    useEffect(() => {
        fetch("http://localhost:3000/queries")
            .then((res) => res.json())
            .then((data) => {
                const sorted = data.sort(
                    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
                );
                setQueries(sorted);
            })
            .catch((err) => console.error("Failed to load queries", err));
    }, []);

    const getGridClass = () => {
        switch (columns) {
            case 1:
                return "grid-cols-1";
            case 2:
                return "grid-cols-1 sm:grid-cols-2";
            case 3:
                return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
            default:
                return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
        }
    };

    // Filtered Queries
    const filteredQueries = queries.filter((query) =>
        query.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className=" bg-base-300">
            <div className="w-11/12 max-w-7xl mx-auto px-4 py-20">
                {/* Header & Controls */}

                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary">
                        Discover Every Product Concern Shared by Real Users
                    </h2>
                    <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
                        Browse a growing list of product-related questions, posted by our community. See what's trending, explore user challenges, and find valuable recommendations.
                    </p>
                </div>


                {/* Layout Toggle */}

                <div className="flex justify-between gap-2 mb-6">
                    {/* 🔍 Search Input */}
                    <input
                        type="text"
                        placeholder="Search by product name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input input-bordered w-full md:max-w-xl text-sm"
                    />
                    <div className="flex gap-2 items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">Layout:</span>
                        <button
                            onClick={() => setColumns(1)}
                            className={`p-2 rounded-md border transition ${columns === 1 ? "bg-primary text-white border-primary" : "bg-base-200 text-gray-600 hover:bg-base-300"}`}
                            title="List View"
                        >
                            <FaList />
                        </button>
                        <button
                            onClick={() => setColumns(2)}
                            className={`p-2 rounded-md border transition ${columns === 2 ? "bg-primary text-white border-primary" : "bg-base-200 text-gray-600 hover:bg-base-300"}`}
                            title="2 Column Grid"
                        >
                            <FaThLarge />
                        </button>
                        <button
                            onClick={() => setColumns(3)}
                            className={`p-2 rounded-md border transition ${columns === 3 ? "bg-primary text-white border-primary" : "bg-base-200 text-gray-600 hover:bg-base-300"}`}
                            title="3 Column Grid"
                        >
                            <FaTh />
                        </button>
                    </div>


                </div>

                {/* Query Cards */}
                {filteredQueries.length === 0 ? (
                    <p className="text-center text-gray-400">No matching queries found.</p>
                ) : (
                    <div className={`grid ${getGridClass()} gap-6`}>
                        {filteredQueries.map((query, index) => (
                            <motion.div
                                key={query._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-white p-5 rounded-2xl border border-base-300 shadow hover:shadow-xl transition duration-300 flex flex-col justify-between"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary">{query.queryTitle}</h3>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium">Product:</span>{" "}
                                            {query.productName} by {query.productBrand}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-600 font-medium text-sm rounded-full">
                                        <FaRegThumbsUp className="text-base" />
                                        <span>{query.recommendationCount}</span>
                                    </div>
                                </div>

                                {/* Conditionally hide image on large + 1-column layout */}
                                {!(columns === 1 && window.innerWidth >= 1024) && (
                                    <div className="h-48 rounded-xl overflow-hidden mb-4 border border-base-200">
                                        <img
                                            src={query.productImageUrl}
                                            alt={query.productName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                <p className="text-xs text-gray-400 mb-4">
                                    Posted on:{" "}
                                    {new Date(query.timestamp).toLocaleDateString("en-GB", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </p>

                                <div className="text-end">
                                    <Link to={`/query-details/${query._id}`}>
                                        <button className="btn btn-sm btn-primary rounded-full px-6">Recommend</button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Queries;
