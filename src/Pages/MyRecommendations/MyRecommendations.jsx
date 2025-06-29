import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import MyRecommendationsList from "./MyRecommendationsList";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyRecommendations = () => {
    const { user } = useAuth();
    const [myRecommendations, setMyRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`http://localhost:3000/recommendations/recommenderEmail/${user.email}`)
                .then(res => setMyRecommendations(res.data))
                .catch(() => toast.error("Failed to load your recommendations"))
                .finally(() => setLoading(false));
        }
    }, [user?.email]);

    const handleDelete = async (rec) => {
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
                axios.delete(`http://localhost:3000/recommendations/${rec._id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            toast.success("Your recommendation has been deleted.");
                            setMyRecommendations(prev => prev.filter(item => item._id !== rec._id));
                        }
                    });
            }
        });
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
