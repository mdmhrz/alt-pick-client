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

        axios.post('http://localhost:3000/queries', { ...fullQuery })
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
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#319990] to-[#18cdbb] p-10 rounded-3xl shadow-2xl mt-12 border border-white/10 backdrop-blur-md text-white">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold mb-3 drop-shadow-md">Submit a Product Query</h2>
                <p className="text-white/80 text-sm">
                    Share your concerns about a product and get community-driven alternatives.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Name */}
                <div>
                    <label className="label font-medium text-sm text-white/90">Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        placeholder="Enter product name"
                        className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                        required
                        value={formData.productName}
                        onChange={handleChange}
                    />
                </div>

                {/* Product Brand */}
                <div>
                    <label className="label font-medium text-sm text-white/90">Product Brand</label>
                    <input
                        type="text"
                        name="productBrand"
                        placeholder="Enter brand name"
                        className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                        required
                        value={formData.productBrand}
                        onChange={handleChange}
                    />
                </div>

                {/* Product Image URL */}
                <div>
                    <label className="label font-medium text-sm text-white/90">Product Image URL</label>
                    <input
                        type="url"
                        name="productImageUrl"
                        placeholder="Enter image URL"
                        className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                        required
                        value={formData.productImageUrl}
                        onChange={handleChange}
                    />
                </div>

                {/* Query Title */}
                <div>
                    <label className="label font-medium text-sm text-white/90">Query Title</label>
                    <input
                        type="text"
                        name="queryTitle"
                        placeholder="e.g. Is there any better alternative with the same quality?"
                        className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                        required
                        value={formData.queryTitle}
                        onChange={handleChange}
                    />
                </div>

                {/* Reason */}
                <div>
                    <label className="label font-medium text-sm text-white/90">Boycotting Reason Details</label>
                    <textarea
                        name="reason"
                        rows="5"
                        placeholder="Explain your reason in detail..."
                        className="textarea textarea-bordered w-full bg-white text-black placeholder-gray-500"
                        required
                        value={formData.reason}
                        onChange={handleChange}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                    <button type="submit" className="btn bg-white text-[#209187] hover:bg-gray-100 font-bold px-8 py-2 text-base rounded-full shadow-lg">
                        Add Query
                    </button>
                </div>
            </form>
        </div>


    );
};

export default AddQuery;
