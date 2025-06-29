import React, { useContext, useState } from "react";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const AddQuery = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        productName: "",
        productBrand: "",
        productImageUrl: "",
        queryTitle: "",
        reason: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const fullQuery = {
            ...formData,
            userEmail: user.email,
            name: user.displayName,
            userImage: user.photoURL,
            timestamp: new Date().toISOString(),
            recommendationCount: 0,
        };

        // console.log(fullQuery);

        axios.post('https://alt-pick-server.vercel.app/queries', { ...fullQuery })
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    toast.success("Query added successfully!");
                    navigate("/myQueries");
                } else {
                    toast.warn('Failed to add query')
                    // throw new Error("Failed to add query.");
                }
            })
            .catch(err => {
                console.log(err);
            })

    };

    return (
        <div className="max-w-3xl mx-auto bg-base-200 p-10 rounded-xl shadow-2xl mt-12 border border-base-300">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-primary mb-3">
                    Submit a Product Query
                </h2>
                <p className="text-gray-400 text-sm">
                    Share your concerns about a product and get community-driven alternatives.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Name */}
                <div>
                    <label className="label font-medium text-sm text-secondary">Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        value={formData.productName}
                        onChange={handleChange}
                    />
                </div>

                {/* Product Brand */}
                <div>
                    <label className="label font-medium text-sm text-secondary">Product Brand</label>
                    <input
                        type="text"
                        name="productBrand"
                        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        value={formData.productBrand}
                        onChange={handleChange}
                    />
                </div>

                {/* Product Image URL */}
                <div>
                    <label className="label font-medium text-sm text-secondary">Product Image URL</label>
                    <input
                        type="url"
                        name="productImageUrl"
                        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        value={formData.productImageUrl}
                        onChange={handleChange}
                    />
                </div>

                {/* Query Title */}
                <div>
                    <label className="label font-medium text-sm text-secondary">Query Title</label>
                    <input
                        type="text"
                        name="queryTitle"
                        className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        placeholder="e.g. Is there any better alternative with the same quality?"
                        value={formData.queryTitle}
                        onChange={handleChange}
                    />
                </div>

                {/* Reason */}
                <div>
                    <label className="label font-medium text-sm text-secondary">Boycotting Reason Details</label>
                    <textarea
                        name="reason"
                        rows="5"
                        className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        placeholder="Explain your reason in detail..."
                        value={formData.reason}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                    <button type="submit" className="btn btn-primary px-8 py-2 text-white text-base">
                        Add Query
                    </button>
                </div>
            </form>
        </div>

    );
};

export default AddQuery;
