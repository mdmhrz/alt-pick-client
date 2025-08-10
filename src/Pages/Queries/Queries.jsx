import React, { useEffect, useState } from "react";
import { FaThLarge, FaTh, FaList, FaRegThumbsUp, FaSearch, FaFilter, FaClock, FaFire } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router";
import Loading from "../../components/Loading/Loading";
import { Helmet } from "react-helmet-async";

const Queries = () => {
    const [queries, setQueries] = useState([]);
    const [columns, setColumns] = useState(3);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState("newest"); // "newest", "oldest", "popular"

    useEffect(() => {
        fetch("https://alt-pick-server.vercel.app/queries")
            .then((res) => res.json())
            .then((data) => {
                const sorted = sortQueries(data, sortBy);
                setQueries(sorted);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load queries", err)
                setLoading(false);
            });
    }, [sortBy]);

    const sortQueries = (data, sortType) => {
        switch (sortType) {
            case "newest":
                return data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            case "oldest":
                return data.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
            case "popular":
                return data.sort((a, b) => b.recommendationCount - a.recommendationCount);
            default:
                return data;
        }
    };

    if (loading) return <Loading></Loading>;

    const getGridClass = () => {
        switch (columns) {
            case 1:
                return "grid-cols-1";
            case 2:
                return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2";
            case 3:
                return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
            case 4:
                return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
            default:
                return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
        }
    };

    // Filtered and sorted queries
    const filteredQueries = queries.filter((query) =>
        query.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        query.queryTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Helmet>
                <title>Queries | AltPick</title>
            </Helmet>
            <div className="bg-base-300 min-h-screen">
                <div className="w-11/12 mx-auto py-12 md:py-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-4">
                            Discover Real Product Concerns
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                            Explore authentic user experiences and make informed decisions based on community-driven feedback and recommendations.
                        </p>
                    </motion.div>

                    {/* Controls */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 p-4 bg-base-100 rounded-xl shadow-sm">
                        {/* Total Count */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-sm text-gray-600 bg-base-200 px-3 py-1.5 rounded-full"
                        >
                            Showing <span className="font-semibold text-primary">{filteredQueries.length}</span> {filteredQueries.length === 1 ? "query" : "queries"}
                        </motion.div>

                        {/* Search and Filters */}
                        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                            {/* Search Input */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="relative w-full md:w-64 lg:w-80"
                            >
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search queries or products..."
                                    className="input input-bordered w-full pl-10 pr-4 py-2 rounded-full text-sm focus:ring-2 focus:ring-primary/50"
                                />
                                <FaSearch className="absolute top-3 left-3 text-gray-400 text-lg" />
                            </motion.div>

                            {/* Sort Dropdown */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="dropdown dropdown-end"
                            >
                                <label tabIndex={0} className="btn btn-outline btn-sm rounded-full gap-2">
                                    <FaFilter className="text-sm" />
                                    <span>Sort</span>
                                </label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2">
                                    <li><a onClick={() => setSortBy("newest")} className={sortBy === "newest" ? "active" : ""}>
                                        <FaClock className="text-primary" /> Newest First
                                    </a></li>
                                    <li><a onClick={() => setSortBy("oldest")} className={sortBy === "oldest" ? "active" : ""}>
                                        <FaClock className="text-secondary" /> Oldest First
                                    </a></li>
                                    <li><a onClick={() => setSortBy("popular")} className={sortBy === "popular" ? "active" : ""}>
                                        <FaFire className="text-accent" /> Most Popular
                                    </a></li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Layout Toggle */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-2 items-center bg-base-200 p-1.5 rounded-full"
                        >
                            {[1, 2, 3, 4].map((col) => {
                                const Icon = col === 1 ? FaList : col === 2 ? FaThLarge : col === 3 ? FaTh : FaThLarge;
                                return (
                                    <button
                                        key={col}
                                        onClick={() => setColumns(col)}
                                        className={`p-2 rounded-full transition-all ${columns === col
                                            ? "bg-primary text-white shadow-md"
                                            : "text-gray-600 hover:bg-base-300"
                                            }`}
                                        title={`${col === 1 ? "List" : col + "-Column"} View`}
                                    >
                                        <Icon className="text-sm" />
                                    </button>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Query Cards */}
                    {filteredQueries.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20"
                        >
                            <div className="text-6xl mb-4 text-gray-300">😕</div>
                            <h3 className="text-xl font-medium text-gray-600 mb-2">No queries found</h3>
                            <p className="text-gray-500 max-w-md mx-auto">
                                {searchTerm ? "Try a different search term" : "It seems there are no queries available at the moment"}
                            </p>
                        </motion.div>
                    ) : (
                        <div className={`grid ${getGridClass()} gap-6`}>
                            {filteredQueries.map((query, index) => (
                                <motion.div
                                    key={query._id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
                                    viewport={{ once: true, margin: "50px" }}
                                    className="bg-base-100 p-5 rounded-xl border border-base-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col hover:-translate-y-1 hover:border-primary/30 group"
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors mb-1 line-clamp-2">
                                                {query.queryTitle}
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-1">
                                                <span className="font-medium">Product:</span>{" "}
                                                {query.productName} by {query.productBrand}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-1 px-2.5 py-1 bg-primary/10 text-primary font-medium text-xs rounded-full">
                                            <FaRegThumbsUp className="text-xs" />
                                            <span>{query.recommendationCount}</span>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    {!(columns === 1) && (
                                        <div className="h-48 rounded-lg overflow-hidden mb-4 border border-base-200 group-hover:border-primary/30 transition-colors">
                                            <img
                                                src={query.productImageUrl}
                                                alt={query.productName}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}

                                    {/* Meta Info */}
                                    <div className="mt-auto">
                                        <div className="flex justify-between items-center mb-4">
                                            <p className="text-xs text-gray-400">
                                                Posted:{" "}
                                                <span className="font-medium">
                                                    {new Date(query.timestamp).toLocaleDateString("en-GB", {
                                                        year: "numeric",
                                                        month: "short",
                                                        day: "numeric",
                                                    })}
                                                </span>
                                            </p>
                                            {query.category && (
                                                <span className="text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                                                    {query.category}
                                                </span>
                                            )}
                                        </div>

                                        {/* CTA */}
                                        <div className="text-center">
                                            <Link to={`/query-details/${query._id}`}>
                                                <button className="btn btn-sm btn-primary rounded-full px-6 w-full group-hover:bg-secondary group-hover:text-white transition-colors">
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Related Topics */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="mt-24 text-center"
                    >
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6">
                            Explore More Topics
                        </h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                { name: "Tech Alternatives", icon: "💻" },
                                { name: "Eco-Friendly", icon: "🌱" },
                                { name: "Community Picks", icon: "🏆" },
                                { name: "User Reviews", icon: "👥" },
                                { name: "Top Queries", icon: "🔥" },
                                { name: "Ethical Brands", icon: "✨" },
                            ].map((topic, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="cursor-pointer"
                                >
                                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm flex items-center gap-2">
                                        <span>{topic.icon}</span>
                                        {topic.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Queries;