import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import queriesAnim from '../../assets/queries.json'
import Lottie from "lottie-react";

const MyQueries = ({ queries = [] }) => {
    const [userQueries, setUserQueries] = useState(
        queries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    );

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
                setUserQueries(userQueries.filter((query) => query.id !== id));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your query has been deleted.",
                    icon: "success",
                    background: "#1A1A1A",
                    color: "#fff",
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
                            <div
                                key={query.id}
                                className="bg-base-200 p-5 rounded-lg shadow-md border border-base-300"
                            >
                                <h3 className="text-xl font-semibold text-secondary mb-2">{query.title}</h3>
                                <p className="text-sm text-gray-400 mb-3">{query.description}</p>
                                <p className="text-xs text-gray-500 mb-4">
                                    Posted on:{" "}
                                    {new Date(query.timestamp).toLocaleString("en-GB", {
                                        dateStyle: "medium",
                                        timeStyle: "short",
                                    })}
                                </p>
                                <div className="flex justify-between items-center gap-2">
                                    <Link to={`/query/${query.id}`}>
                                        <button className="btn btn-sm btn-outline btn-accent">View Details</button>
                                    </Link>
                                    <Link to={`/update-query/${query.id}`}>
                                        <button className="btn btn-sm btn-outline btn-info">Update</button>
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(query.id)}
                                        className="btn btn-sm btn-outline btn-error"
                                    >
                                        Delete
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
