import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import MyRecommendationsList from "./MyRecommendationsList";
import axios from "axios";

const MyRecommendations = () => {
    const { user } = useAuth();
    const [myRecommendations, setMyRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/recommendations/recommenderEmail/${user.email}`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                }
            })
                .then(res => res.json())
                .then(data => setMyRecommendations(data))
                .catch(() => toast.error("Failed to load your recommendations"))
                .finally(() => setLoading(false));
        }


    }, [user?.email]);

    const handleDelete = async (rec) => {
        const confirm = window.confirm("Are you sure you want to delete this recommendation?");
        if (!confirm) return;

        try {
            const res = await fetch(`http://localhost:3000/recommendations/${rec._id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                // Decrement recommendation count in associated query
                await fetch(`http://localhost:3000/queries/decrement/${rec.queryId}`, {
                    method: "PATCH",
                });

                setMyRecommendations(prev => prev.filter(item => item._id !== rec._id));
                toast.success("Recommendation deleted successfully");
            } else {
                toast.error("Failed to delete recommendation");
            }
        } catch (error) {
            toast.error("An error occurred while deleting");
        }
    };

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">My Recommendations</h2>
            {myRecommendations.length === 0 ? (
                <p className="text-gray-500 text-center">You haven't made any recommendations yet.</p>
            ) : (
                <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
                    <table className="table w-full">
                        <thead className="bg-gray-100">
                            <tr className="text-sm text-gray-700">
                                <th>Query</th>
                                <th>Title</th>
                                <th>Product</th>
                                <th>Reason</th>
                                <th>Date</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myRecommendations.map((rec) => <MyRecommendationsList key={rec._id} rec={rec} handleDelete={handleDelete}></MyRecommendationsList>)}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyRecommendations;
