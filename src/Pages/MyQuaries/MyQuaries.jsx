import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import queriesAnim from '../../assets/queries.json'
import Lottie from "lottie-react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { motion } from "motion/react";



const MyQueries = () => {
    const { user } = useAuth();
    // console.log(user.accessToken);
    const [userQueries, setUserQueries] = useState([]);
    const [selectedQuery, setSelectedQuery] = useState(null);
    // console.log(selectedQuery._id);
    const [formData, setFormData] = useState({
        productName: "",
        productBrand: "",
        productImageUrl: "",
        queryTitle: "",
        reason: ""
    });
    const navigate = useNavigate();

    const axiosSecure = useAxiosSecure();


    useEffect(() => {
        axiosSecure.get(`/queries/userEmail/${user.email}`)
            .then((res) => {
                const sorted = res.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
                setUserQueries(sorted);
            });
    }, [user.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#209187",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://alt-pick-server.vercel.app/queries/${id}`).then((res) => {
                    if (res.data.deletedCount) {
                        toast.success("Your query has been deleted.");
                        setUserQueries(userQueries.filter((query) => query._id !== id));
                    }
                });
            }
        });
    };

    const openEditModal = (query) => {
        setSelectedQuery(query);
        setFormData({
            productName: query.productName,
            productBrand: query.productBrand,
            productImageUrl: query.productImageUrl,
            queryTitle: query.queryTitle,
            reason: query.reason
        });
        document.getElementById('edit_modal').showModal();
    };

    const handleUpdate = () => {
        axios.put(`https://alt-pick-server.vercel.app/queries/${selectedQuery._id}`, formData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success("Query updated successfully.");
                    const updatedQueries = userQueries.map(q =>
                        q._id === selectedQuery._id ? { ...q, ...formData } : q
                    );
                    setUserQueries(updatedQueries);
                    document.getElementById('edit_modal').close();
                }
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="bg-base-300">
            <div className="max-w-7xl mx-auto px-4 py-20">
                {/* Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-cover bg-center rounded-xl shadow-md overflow-hidden mb-12"
                    style={{
                        backgroundImage:
                            "url('https://thumbs.dreamstime.com/b/handwriting-text-any-questions-question-concept-meaning-you-say-write-order-to-ask-demonstrating-something-picture-photo-164080259.jpg')",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 rounded-xl z-0"></div>

                    <div className="relative z-10 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between text-white">
                        <div className="mb-6 md:mb-0">
                            <h1 className="text-4xl font-extrabold mb-2">Your Recent Product Queries</h1>
                            <p className="text-white/90 text-sm mb-5 max-w-md">
                                Track, update, and manage your posted product-related questions here.
                            </p>
                            <Link to="/add-query">
                                <button className="btn btn-primary">Add New Query</button>
                            </Link>
                        </div>
                        <div className="w-40 md:w-60">
                            <Lottie animationData={queriesAnim} loop autoplay />
                        </div>
                    </div>
                </motion.div>

                {/* Empty State */}
                {userQueries.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-24"
                    >
                        <h2 className="text-2xl font-bold text-gray-500 mb-2">No queries found</h2>
                        <p className="text-gray-400 mb-4">Start by asking your first question.</p>
                        <Link to="/add-query">
                            <button className="btn btn-primary">Add New Query</button>
                        </Link>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, staggerChildren: 0.1 }}
                        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {userQueries.map((query) => (
                            <motion.div
                                key={query._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="bg-white border border-base-300 rounded-2xl p-5 shadow-lg hover:shadow-xl transition duration-300 flex flex-col justify-between"
                            >
                                {/* User Info */}
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={query.userImage}
                                        alt={query.name}
                                        className="w-10 h-10 rounded-full object-cover border"
                                    />
                                    <div>
                                        <h2 className="text-md font-semibold">{query.name}</h2>
                                        <p className="text-sm text-gray-400">{query.userEmail}</p>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="flex gap-4 mb-4">
                                    <img
                                        src={query.productImageUrl}
                                        alt={query.productName}
                                        className="w-24 h-24 object-cover rounded-lg border"
                                    />
                                    <div className="flex-1 space-y-1">
                                        <h3 className="text-lg font-bold text-primary">{query.queryTitle}</h3>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium">Product:</span> {query.productName} by {query.productBrand}
                                        </p>
                                        <p className="text-sm text-gray-600 line-clamp-2">{query.reason}</p>
                                    </div>
                                </div>

                                {/* Recommendation Count */}
                                <p className="text-xs text-gray-500 mb-3">
                                    <span className="font-semibold">Recommendations:</span> {query.recommendationCount}
                                </p>

                                {/* Action Buttons */}
                                <div className="mt-auto flex flex-wrap gap-2 justify-end">
                                    <button
                                        onClick={() => navigate(`/query-details/${query._id}`)}
                                        className="btn btn-sm btn-primary flex items-center gap-1"
                                    >
                                        <FaEye /> View
                                    </button>
                                    <button
                                        onClick={() => openEditModal(query)}
                                        className="btn btn-sm btn-secondary flex items-center gap-1"
                                    >
                                        <FaEdit /> Update
                                    </button>
                                    <button
                                        onClick={() => handleDelete(query._id)}
                                        className="btn btn-sm btn-error flex items-center gap-1"
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                )}

                {/* Update Modal */}
                <dialog id="edit_modal" className="modal">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="modal-box bg-base-100 rounded-xl border border-base-300 shadow-md"
                    >
                        <h3 className="text-xl font-bold text-primary mb-4">Update Query</h3>
                        <div className="space-y-3">
                            <input
                                name="productName"
                                value={formData.productName}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Product Name"
                            />
                            <input
                                name="productBrand"
                                value={formData.productBrand}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Product Brand"
                            />
                            <input
                                name="productImageUrl"
                                value={formData.productImageUrl}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Product Image URL"
                            />
                            <input
                                name="queryTitle"
                                value={formData.queryTitle}
                                onChange={handleInputChange}
                                className="input input-bordered w-full"
                                placeholder="Query Title"
                            />
                            <textarea
                                name="reason"
                                value={formData.reason}
                                onChange={handleInputChange}
                                className="textarea textarea-bordered w-full"
                                rows="4"
                                placeholder="Reason"
                            ></textarea>
                        </div>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                            <button onClick={handleUpdate} className="btn btn-primary">
                                Update
                            </button>
                        </div>
                    </motion.div>
                </dialog>
            </div>
        </div>
    );
};

export default MyQueries;
