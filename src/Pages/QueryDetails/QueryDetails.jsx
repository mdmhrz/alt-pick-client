import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import RecommendationCard from "../../components/RecommendationCard/RecommendationCard";

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
        fetch(`http://localhost:3000/recommendations/queryId/${id}`)
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
            const res = await fetch("http://localhost:3000/recommendations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newRecommendation),
            });

            if (res.ok) {
                await fetch(`http://localhost:3000/queries/increment/${query._id}`, {
                    method: "PATCH",
                });

                toast.success("Recommendation added");
                setFormData({ title: "", product: "", image: "", reason: "" });

                // ✅ FIXED HERE:
                fetch(`http://localhost:3000/recommendations/queryId/${id}`)
                    .then((r) => r.json())
                    .then(data => {
                        setRecommendations(data); // ✅ replaces the old state properly
                    });
            }
        } catch (error) {
            toast.error("Failed to add recommendation");
        }
    };

    if (!query) return <p className="text-center text-gray-400">Loading...</p>;

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-10">
            {/* Query & User Info */}
            <div className="bg-base-200 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src={query.userImage}
                        alt={query.name}
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h2 className="text-xl font-bold">{query.name}</h2>
                        <p className="text-sm text-gray-400">{query.userEmail}</p>
                    </div>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{query.queryTitle}</h3>
                <p className="text-gray-400 mb-2">
                    <span className="font-semibold">Product:</span> {query.productName} by {query.productBrand}
                </p>
                <img
                    src={query.productImageUrl}
                    alt={query.productName}
                    className="w-full max-h-64 object-cover rounded mb-3"
                />
                <p className="text-sm text-gray-300">{query.reason}</p>
            </div>

            {/* Add Recommendation */}
            <div className="bg-base-200 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-secondary">Add a Recommendation</h4>
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
                        required
                    />
                    <textarea
                        name="reason"
                        rows="4"
                        placeholder="Reason for recommendation"
                        value={formData.reason}
                        onChange={handleChange}
                        className="textarea textarea-bordered"
                        required
                    />
                    <button type="submit" className="btn btn-primary w-full">
                        Add Recommendation
                    </button>
                </form>
            </div>

            {/* All Recommendations */}
            <div className="bg-base-200 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold mb-4 text-secondary">
                    Recommendations ({recommendations.length})
                </h4>
                {recommendations.length === 0 ? (
                    <p className="text-sm text-gray-400">No recommendations yet.</p>
                ) : (
                    <div className="space-y-4 grid grid-cols-1 gap-4">
                        {recommendations.map((rec) => <RecommendationCard key={rec._id} rec={rec}></RecommendationCard>)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default QueryDetails;
