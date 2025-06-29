import React, { useEffect, useState } from "react";
import { FaClock, FaBoxOpen, FaUserCircle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Loading from "../../components/Loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

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
        <>
            <Helmet>
                <title>Recommendation For Me | AltPick</title>
            </Helmet>
            <div className="max-w-6xl mx-auto p-6 mt-20">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-extrabold text-primary mb-6 text-center"
                >
                    Recommendations You Received
                </motion.h2>

                {recommendations.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center text-gray-400 py-16 bg-base-100 rounded-xl shadow-inner"
                    >
                        <p className="text-lg">No recommendations yet on your queries.</p>
                        <p className="text-sm mt-2">Once others start recommending products, you’ll see them here.</p>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="overflow-x-auto bg-base-100 rounded-xl shadow-xl border border-base-300"
                    >
                        <table className="table w-full text-sm min-w-[900px]">
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
                                {recommendations.map((rec, index) => (
                                    <motion.tr
                                        key={rec._id}
                                        className="hover:bg-base-200/60 transition-all duration-300 border-b border-base-300"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
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

                                        <td className="p-4 font-medium text-base-content">{rec.queryTitle}</td>
                                        <td className="p-4 text-base-content">{rec.title}</td>
                                        <td className="p-4 text-base-content">{rec.product}</td>

                                        <td className="p-4 text-gray-500 text-sm max-w-xs">
                                            <div title={rec.reason}>
                                                {rec.reason.length > 80 ? rec.reason.slice(0, 80) + '...' : rec.reason}
                                            </div>
                                        </td>

                                        <td className="p-4 text-xs text-gray-400">
                                            {new Date(rec.timestamp).toLocaleDateString()}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                )}
            </div>
        </>

    );
};

export default RecommendationsForMe;
