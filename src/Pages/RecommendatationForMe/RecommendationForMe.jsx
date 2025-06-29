import React, { useEffect, useState } from "react";
import { FaClock, FaBoxOpen, FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RecommendationsForMe = () => {
    const { user } = useAuth();
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);
    const axioSecure = useAxiosSecure()

    useEffect(() => {
        if (user?.email) {
            axioSecure.get(`/recommendations/creatorEmail/${user.email}`)
                .then((res) => setRecommendations(res.data))
                .catch(() => toast.error("Failed to load recommendations"))
                .finally(() => setLoading(false));
        }
    }, [user?.email]);


    if (loading) {
        return <Loading></Loading>;
    }

    // console.log(recommendations);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">
                Recommendations You Received
            </h2>

            {recommendations.length === 0 ? (
                <div className="text-center text-gray-400 py-16 bg-base-100 rounded-xl shadow-inner">
                    <p className="text-lg">No recommendations yet on your queries.</p>
                    <p className="text-sm mt-2">Once others start recommending products, you’ll see them here.</p>
                </div>
            ) : (
                <div className="overflow-x-auto bg-base-100 rounded-2xl shadow-lg border border-base-300">
                    <table className="table w-full min-w-4xl overflow-x-auto text-sm">
                        <thead className="bg-base-300 text-base-content uppercase text-xs tracking-wider">
                            <tr>
                                <th className="p-4">Recommender</th>
                                <th className="p-4">Query Title</th>
                                <th className="p-4">Suggestion</th>
                                <th className="p-4">Product</th>
                                <th className="p-4">Reason</th>
                                <th className="p-4">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recommendations.map((rec) => (
                                <tr key={rec._id} className="hover:bg-base-200 transition">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            {rec.recommenderImage ? (
                                                <img
                                                    src={rec.recommenderImage}
                                                    alt={rec.recommenderName}
                                                    className="w-10 h-10 rounded-full object-cover border"
                                                />
                                            ) : (
                                                <FaUserCircle className="text-xl text-gray-400" />
                                            )}
                                            <div>
                                                <p className="font-semibold text-primary">{rec.recommenderName}</p>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="p-4 text-base font-medium text-base-content">
                                        {rec.queryTitle}
                                    </td>

                                    <td className="p-4 text-base-content">{rec.title}</td>

                                    <td className="p-4 flex items-center gap-2 text-base-content">
                                        {rec.product}
                                    </td>

                                    <td className="p-4 text-gray-500 text-sm max-w-xs">
                                        {rec.reason.length > 80
                                            ? rec.reason.slice(0, 80) + '...'
                                            : rec.reason}
                                    </td>

                                    <td className="p-4 text-xs text-gray-400">
                                        <div className="flex items-center gap-1">

                                            {new Date(rec.timestamp).toLocaleDateString()}
                                        </div>
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
