import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import queriesAnim from '../../assets/queries.json'
import Lottie from "lottie-react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useEffect } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const MyQueries = () => {
    const { user } = useAuth();
    const [userQueries, setUserQueries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/queries/userEmail/${user.email}`)
            .then((res) => {
                console.log(res.data);
                const sorted = res.data.sort(
                    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
                );
                setUserQueries(sorted);
            });
    }, [])






    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#7E22CE",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            background: "#1A1A1A",
            color: "#fff",
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/queries/${id}`).then((res) => {
                    if (res.data.deletedCount) {
                        toast.success("Your query has been deleted.");
                        setUserQueries(userQueries.filter((query) => query._id !== id));
                    }
                });
            }
        });
    };


    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* 🔥 Top Banner */}
            <div
                className="bg-base-200 rounded-xl mb-8 shadow-md bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://thumbs.dreamstime.com/b/handwriting-text-any-questions-question-concept-meaning-you-say-write-order-to-ask-demonstrating-something-picture-photo-164080259.jpg')",
                }}
            >
                <div className="bg-base-200/80 p-8 rounded-xl flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-primary mb-2">Your Recent Product Queries</h1>
                        <p className="text-gray-400 text-sm mb-4">
                            Track, update, and manage your posted product-related questions here.
                        </p>
                        <Link to="/add-query">
                            <button className="btn btn-primary">Add New Query</button>
                        </Link>
                    </div>
                    <div>
                        <Lottie animationData={queriesAnim} className="w-30"></Lottie>
                    </div>
                </div>
            </div>


            {/* 🔍 Show Empty Message */}
            {userQueries.length === 0 ? (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-bold text-gray-200">No queries found</h2>
                    <p className="text-gray-400 mb-4">Start by asking your first question.</p>
                    <Link to="/add-query">
                        <button className="btn btn-primary">Add New Query</button>
                    </Link>
                </div>
            ) : (
                <>
                    {/* 📋 Query Cards */}
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {userQueries.map((query) => (
                            <div key={query._id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                                {/* Top Section */}
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
                                <div className="flex gap-4">
                                    <img
                                        src={query.productImageUrl}
                                        alt={query.productName}
                                        className="w-28 h-28 object-cover rounded-lg border"
                                    />
                                    <div className="flex-1 space-y-2">
                                        <h3 className="text-lg font-bold text-primary">{query.queryTitle}</h3>
                                        <p className="text-sm text-gray-500">
                                            <span className="font-medium">Product:</span> {query.productName} by {query.productBrand}
                                        </p>
                                        <p className="text-sm text-gray-600">{query.reason}</p>
                                        <p className="text-xs text-gray-400">
                                            <span className="font-semibold">Recommendations:</span> {query.recommendationCount}
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-4 flex gap-2">
                                    <button
                                        onClick={() => navigate(`/query-details/${query._id}`)}
                                        className="btn btn-sm btn-primary flex items-center gap-1"
                                    >
                                        <FaEye /> View Details
                                    </button>
                                    <button
                                        onClick={() => navigate(`/update-query/${query._id}`)}
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
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default MyQueries;
