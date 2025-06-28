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

const MyQueries = () => {
    const { user } = useAuth();
    console.log(user.accessToken);
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
        axios.put(`http://localhost:3000/queries/${selectedQuery._id}`, formData)
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
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="bg-base-200 rounded-xl mb-8 shadow-md bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://thumbs.dreamstime.com/b/handwriting-text-any-questions-question-concept-meaning-you-say-write-order-to-ask-demonstrating-something-picture-photo-164080259.jpg')"
                }}>
                <div className="bg-base-200/80 p-8 rounded-xl flex items-center justify-between">
                    <div>
                        <h1 className="text-4xl font-bold text-primary mb-2">Your Recent Product Queries</h1>
                        <p className="text-gray-400 text-sm mb-4">Track, update, and manage your posted product-related questions here.</p>
                        <Link to="/add-query"><button className="btn btn-primary">Add New Query</button></Link>
                    </div>
                    <Lottie animationData={queriesAnim} className="w-30"></Lottie>
                </div>
            </div>

            {userQueries.length === 0 ? (
                <div className="text-center py-16">
                    <h2 className="text-2xl font-bold text-gray-200">No queries found</h2>
                    <p className="text-gray-400 mb-4">Start by asking your first question.</p>
                    <Link to="/add-query"><button className="btn btn-primary">Add New Query</button></Link>
                </div>
            ) : (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {userQueries.map((query) => (
                        <div key={query._id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
                            <div className="flex items-center gap-3 mb-4">
                                <img src={query.userImage} alt={query.name} className="w-10 h-10 rounded-full object-cover border" />
                                <div>
                                    <h2 className="text-md font-semibold">{query.name}</h2>
                                    <p className="text-sm text-gray-400">{query.userEmail}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img src={query.productImageUrl} alt={query.productName} className="w-28 h-28 object-cover rounded-lg border" />
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-lg font-bold text-primary">{query.queryTitle}</h3>
                                    <p className="text-sm text-gray-500"><span className="font-medium">Product:</span> {query.productName} by {query.productBrand}</p>
                                    <p className="text-sm text-gray-600">{query.reason}</p>
                                    <p className="text-xs text-gray-400"><span className="font-semibold">Recommendations:</span> {query.recommendationCount}</p>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <button onClick={() => navigate(`/query-details/${query._id}`)} className="btn btn-sm btn-primary flex items-center gap-1">
                                    <FaEye /> View Details
                                </button>
                                <button onClick={() => openEditModal(query)} className="btn btn-sm btn-secondary flex items-center gap-1">
                                    <FaEdit /> Update
                                </button>
                                <button onClick={() => handleDelete(query._id)} className="btn btn-sm btn-error flex items-center gap-1">
                                    <FaTrash /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Update Modal */}
            <dialog id="edit_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4 text-primary">Update Query</h3>
                    <div className="space-y-3">
                        <input name="productName" value={formData.productName} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Product Name" />
                        <input name="productBrand" value={formData.productBrand} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Product Brand" />
                        <input name="productImageUrl" value={formData.productImageUrl} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Product Image URL" />
                        <input name="queryTitle" value={formData.queryTitle} onChange={handleInputChange} className="input input-bordered w-full" placeholder="Query Title" />
                        <textarea name="reason" value={formData.reason} onChange={handleInputChange} className="textarea textarea-bordered w-full" rows="4" placeholder="Reason"></textarea>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                        <button onClick={handleUpdate} className="btn btn-primary">Update</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyQueries;
