import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { motion } from 'motion/react'

import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";
import { Helmet } from "react-helmet-async";

const QueryDetails = () => {
    const query = useLoaderData()
    const { id } = useParams();
    // console.log(id);
    const { user } = useAuth();

    // const [query, setQuery] = useState(queryData);

    const [recommendations, setRecommendations] = useState([]);
    // console.log(recommendations);
    const [formData, setFormData] = useState({
        title: "",
        product: "",
        image: "",
        reason: "",
    });


    useEffect(() => {
        fetch(`https://alt-pick-server.vercel.app/recommendations/queryId/${id}`)
            .then((res) => res.json())
            .then(data => setRecommendations(data));
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRecommendationSubmit = async (e) => {
        e.preventDefault();
        if (!user) return toast.error("Please log in to recommend.");

        const newRecommendation = {
            ...formData,
            queryId: query._id,
            queryTitle: query.queryTitle,
            productName: query.productName,
            userEmail: query.userEmail,
            userName: query.name,
            recommenderEmail: user.email,
            recommenderName: user.displayName,
            timestamp: new Date().toISOString(),
        };

        try {
            const res = await fetch("https://alt-pick-server.vercel.app/recommendations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newRecommendation),
            });

            if (res.ok) {
                await fetch(`https://alt-pick-server.vercel.app/queries/increment/${query._id}`, {
                    method: "PATCH",
                });

                toast.success("Recommendation added");
                setFormData({ title: "", product: "", image: "", reason: "" });


                fetch(`https://alt-pick-server.vercel.app/recommendations/queryId/${id}`)
                    .then((r) => r.json())
                    .then(data => {
                        setRecommendations(data);
                    });
            }
        } catch (error) {
            toast.error("Failed to add recommendation");
        }
    };

    if (!query) return <p className="text-center text-gray-400">Loading...</p>;

    return (
        <>
            <Helmet>
                <title>Query Details of {query.productName}</title>
            </Helmet>
            <div className="bg-base-300 py-10">
                <div className="max-w-7xl w-11/12 mx-auto px-4 py-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                            Query Details & Recommendations
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                            View your product query in detail, add helpful recommendations, and explore suggestions made by others.
                        </p>
                    </motion.div>
                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* Left: Query Info + Form */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Query Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className="bg-gradient-to-br from-base-100 via-base-200 to-base-100 border border-base-200 rounded-xl p-6 shadow"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={query.userImage}
                                        alt={query.name}
                                        className="w-14 h-14 rounded-full object-cover border"
                                    />
                                    <div>
                                        <h2 className="text-lg font-bold">{query.name}</h2>
                                        <p className="text-sm text-gray-400">{query.userEmail}</p>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-semibold text-primary mb-2">{query.queryTitle}</h3>
                                <p className="text-gray-500 mb-4">
                                    <span className="font-medium">Product:</span> {query.productName} by {query.productBrand}
                                </p>

                                <img
                                    src={query.productImageUrl}
                                    alt={query.productName}
                                    className="w-full h-64 object-cover rounded-lg border border-base-200 mb-4"
                                />

                                <p className="text-sm text-base-content leading-relaxed">
                                    <span className="font-semibold">Reason:</span> {query.reason}
                                </p>
                            </motion.div>

                            {/* Add Recommendation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-base-100 border border-base-200 rounded-xl p-6 shadow"
                            >
                                <h4 className="text-xl font-bold text-secondary mb-4">Add a Recommendation</h4>
                                <form onSubmit={handleRecommendationSubmit} className="grid gap-4">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Recommendation Title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="product"
                                        placeholder="Recommended Product Name"
                                        value={formData.product}
                                        onChange={handleChange}
                                        className="input input-bordered w-full"
                                        required
                                    />
                                    <input
                                        type="url"
                                        name="image"
                                        placeholder="Recommended Product Image URL"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="input input-bordered w-full"

                                    />
                                    <textarea
                                        name="reason"
                                        rows="4"
                                        placeholder="Reason for recommendation"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        className="textarea textarea-bordered w-full"
                                        required
                                    />
                                    <button type="submit" className="btn btn-primary w-full">
                                        Add Recommendation
                                    </button>
                                </form>
                            </motion.div>
                        </div>

                        {/* Right: Recommendation Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-base-100 border border-base-200 rounded-xl p-6 shadow max-h-[90vh] overflow-y-auto"
                        >
                            <h4 className="text-xl font-bold text-secondary mb-4">
                                Recommendations ({recommendations.length})
                            </h4>

                            {recommendations.length === 0 ? (
                                <p className="text-sm text-gray-400">No recommendations yet.</p>
                            ) : (
                                <div className="space-y-4">
                                    {recommendations.map((rec) => (
                                        <RecommendationCard key={rec._id} rec={rec} />
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default QueryDetails;
