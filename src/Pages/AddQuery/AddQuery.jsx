import React, { useContext, useState } from "react";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddQuery = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        productName: "",
        productBrand: "",
        imageUrl: "",
        queryTitle: "",
        reason: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("You must be logged in to submit a query.");
            return;
        }

        const fullQuery = {
            ...formData,
            userEmail: user.email,
            userName: user.displayName,
            userImage: user.photoURL,
            timestamp: new Date().toISOString(),
            recommendationCount: 0,
        };

        try {
            const res = await fetch("https://your-api-endpoint.com/queries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(fullQuery),
            });

            const data = await res.json();
            if (data.insertedId || res.ok) {
                toast.success("Query added successfully!");
                navigate("/myQueries");
            } else {
                throw new Error("Failed to add query.");
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong.");
        }
    };

    return (
        <div className="max-w-3xl mx-auto bg-base-200 p-8 rounded-xl shadow-md mt-8">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Add a New Product Query</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="label font-semibold">Product Name</label>
                    <input
                        type="text"
                        name="productName"
                        className="input input-bordered w-full"
                        required
                        value={formData.productName}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="label font-semibold">Product Brand</label>
                    <input
                        type="text"
                        name="productBrand"
                        className="input input-bordered w-full"
                        required
                        value={formData.productBrand}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="label font-semibold">Product Image URL</label>
                    <input
                        type="url"
                        name="imageUrl"
                        className="input input-bordered w-full"
                        required
                        value={formData.imageUrl}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="label font-semibold">Query Title</label>
                    <input
                        type="text"
                        name="queryTitle"
                        className="input input-bordered w-full"
                        required
                        placeholder="e.g. Is there any better product that gives me the same quality?"
                        value={formData.queryTitle}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="label font-semibold">Boycotting Reason Details</label>
                    <textarea
                        name="reason"
                        rows="4"
                        className="textarea textarea-bordered w-full"
                        required
                        value={formData.reason}
                        onChange={handleChange}
                    />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-4">
                        Add Query
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddQuery;
