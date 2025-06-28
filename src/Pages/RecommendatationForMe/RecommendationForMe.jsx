import React, { useEffect, useState } from "react";
import { FaClock, FaBoxOpen, FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";

const RecommendationsForMe = () => {
    const { user } = useAuth();
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/recommendations/creatorEmail/${user.email}`, {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`,
                }
            })
                .then((res) => res.json())
                .then((data) => setRecommendations(data))
                .catch(() => toast.error("Failed to load recommendations"))
                .finally(() => setLoading(false));
        }
    }, [user?.email]);

    if (loading) {
        return <Loading></Loading>;
    }

    console.log(recommendations);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-2xl font-bold text-primary mb-4">Recommendations For Me</h2>
            {recommendations.length === 0 ? (
                <p className="text-gray-500 text-center">No one has made any recommendations on your queries yet.</p>
            ) : (
                <div className="overflow-x-auto bg-base-200 rounded-lg shadow">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-base-content">
                                <th>Recommender</th>
                                <th>Query Title</th>
                                <th>Recommendation</th>
                                <th>Product</th>
                                <th>Reason</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recommendations.map((rec) => (
                                <tr key={rec._id} className="hover:bg-base-100 transition">
                                    <td className="flex items-center gap-2">
                                        {rec.recommenderImage ? (
                                            <img
                                                src={rec.recommenderImage}
                                                alt={rec.recommenderName}
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                        ) : (
                                            <FaUserCircle className="text-lg text-gray-400" />
                                        )}
                                        <span>{rec.recommenderName}</span>
                                    </td>
                                    <td className="font-medium">{rec.queryTitle}</td>
                                    <td>{rec.title}</td>
                                    <td className="flex items-center gap-2">
                                        <FaBoxOpen />
                                        {rec.product}
                                    </td>
                                    <td className="text-sm text-gray-600">{rec.reason}</td>
                                    <td className="text-xs text-gray-500 flex items-center gap-1">
                                        <FaClock className="text-[10px]" />
                                        {new Date(rec.timestamp).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default RecommendationsForMe;
