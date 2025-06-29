import React, { useEffect, useState } from "react";
import { FaThLarge, FaTh, FaList, FaRegThumbsUp, FaSearch } from "react-icons/fa";
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

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-extrabold text-primary mb-3">
                        Discover Real Product Concerns
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm">
                        Explore what others are saying about their product experiences and make better choices based on real feedback and community-driven recommendations.
                    </p>
                </motion.div>

                {/* Controls */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                    {/* Total Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-gray-500"
                    >
                        Total Queries:{" "}
                        <span className="font-semibold text-primary">{filteredQueries.length}</span>
                    </motion.div>

                    {/* Search Input */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative w-full md:max-w-xl"
                    >
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search by product name..."
                            className="input input-bordered w-full pl-10 pr-4 py-2 rounded-full text-sm"
                        />
                        <FaSearch className="absolute top-2.5 left-3 text-gray-400 text-lg" />
                    </motion.div>

                    {/* Layout Toggle */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-2 items-center"
                    >
                        <span className="text-sm font-medium text-gray-600">Layout:</span>
                        {[1, 2, 3].map((col) => {
                            const Icon = col === 1 ? FaList : col === 2 ? FaThLarge : FaTh;
                            return (
                                <button
                                    key={col}
                                    onClick={() => setColumns(col)}
                                    className={`p-2 rounded-md border transition ${columns === col
                                        ? "bg-primary text-white border-primary"
                                        : "bg-base-200 text-gray-600 hover:bg-base-300"
                                        }`}
                                    title={`${col}-Column View`}
                                >
                                    <Icon />
                                </button>
                            );
                        })}
                    </motion.div>
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
                                className="bg-base-100 p-6 rounded-2xl border border-base-300 shadow-xl hover:shadow-2xl transition duration-300 flex flex-col justify-between"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary mb-1">
                                            {query.queryTitle}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium">Product:</span>{" "}
                                            {query.productName} by {query.productBrand}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary font-medium text-sm rounded-full">
                                        <FaRegThumbsUp className="text-base" />
                                        <span>{query.recommendationCount}</span>
                                    </div>
                                </div>

                                {/* Image */}
                                {!(columns === 1 && window.innerWidth >= 1024) && (
                                    <div className="h-48 rounded-xl overflow-hidden mb-4 border border-base-200">
                                        <img
                                            src={query.productImageUrl}
                                            alt={query.productName}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                {/* Date */}
                                <p className="text-xs text-gray-400 mb-4">
                                    Posted on:{" "}
                                    {new Date(query.timestamp).toLocaleDateString("en-GB", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </p>

                                {/* CTA */}
                                <div className="text-end">
                                    <Link to={`/query-details/${query._id}`}>
                                        <button className="btn btn-sm btn-primary rounded-full px-6">
                                            Recommend
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Static Related Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-24 text-center"
                >
                    <h3 className="text-2xl font-bold text-primary mb-4">Related Topics</h3>
                    <div className="flex flex-wrap gap-3 justify-center text-sm text-white">
                        {[
                            "Tech Alternatives",
                            "Eco-Friendly Products",
                            "Community Picks",
                            "User Reviews",
                            "Top Queries",
                            "Boycott Suggestions",
                        ].map((topic, i) => (
                            <span
                                key={i}
                                className="bg-primary/80 hover:bg-primary text-white px-4 py-1.5 rounded-full transition"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Queries;
