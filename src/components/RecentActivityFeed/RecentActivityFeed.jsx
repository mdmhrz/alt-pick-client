import React, { useState } from "react";
import { FaRegClock, FaRegCommentDots, FaChevronDown } from "react-icons/fa";
import { MdOutlineRecommend } from "react-icons/md";
import { formatDistanceToNow } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import { use } from "react";
import userImage from '../../assets/user.png'

const RecentActivityFeed = ({ activitiesPromise }) => {
    const activities = use(activitiesPromise);
    const [showAll, setShowAll] = useState(false);
    const displayedActivities = showAll ? activities : activities.slice(0, 6);

    return (
        <section className="bg-base-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-primary mb-3"
                    >
                        Community Recommendations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-secondary max-w-2xl mx-auto"
                    >
                        Recently suggested product alternatives by our community
                    </motion.p>
                </div>

                {/* Activity Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {displayedActivities.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -5 }}
                                className="bg-base-100 rounded-xl shadow-sm border border-base-300/30 hover:shadow-md transition-all overflow-hidden"
                            >
                                {/* Product Image Header */}
                                <div className="relative h-40 bg-base-200 overflow-hidden">
                                    <img
                                        src={item?.image || '/placeholder-product.jpg'}
                                        alt={item?.product}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-3 right-3 bg-accent text-white p-2 rounded-lg shadow-sm">
                                        <MdOutlineRecommend className="text-lg" />
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-semibold text-primary line-clamp-2">
                                            {item.product}
                                        </h3>
                                        <span className="flex items-center gap-1 text-xs text-secondary bg-base-200 px-2 py-1 rounded-full whitespace-nowrap">
                                            <FaRegClock className="text-primary/70" />
                                            {formatDistanceToNow(new Date(item.timestamp), { addSuffix: true })}
                                        </span>
                                    </div>

                                    <p className="text-sm text-secondary mb-4 line-clamp-2">
                                        Alternative to: <span className="font-medium">{item.productName}</span>
                                    </p>

                                    {/* Recommender Info */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-base-300/20">
                                        <img
                                            src={userImage}
                                            alt={item.recommenderName}
                                            className="w-8 h-8 rounded-full object-cover border-2 border-base-300"
                                        />
                                        <div>
                                            <p className="text-sm font-medium">By {item.recommenderName}</p>
                                            <p className="text-xs text-secondary flex items-center gap-1">
                                                <FaRegCommentDots className="text-primary/70" />
                                                {item.queryTitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                {activities.length > 6 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex justify-center mt-12"
                    >
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="btn btn-primary btn-outline gap-2 px-8"
                        >
                            {showAll ? 'Show Less' : 'View More Recommendations'}
                            <FaChevronDown className={`transition-transform ${showAll ? 'rotate-180' : ''}`} />
                        </button>
                    </motion.div>
                )}

                {/* Empty State */}
                {activities.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-center py-16"
                    >
                        <div className="bg-base-200/30 rounded-2xl p-8 max-w-md mx-auto border border-dashed border-base-300">
                            <h3 className="text-xl font-semibold text-primary mb-3">No recommendations yet</h3>
                            <p className="text-secondary mb-6">Be the first to suggest an alternative!</p>
                            <button className="btn btn-primary btn-sm">Suggest a Product</button>
                        </div>
                    </motion.div>
                )}
            </div>

            {activities.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="col-span-full text-center py-12"
                >
                    <div className="max-w-md mx-auto bg-base-200/50 rounded-2xl p-8 border-2 border-dashed border-base-300">
                        <div className="flex justify-center mb-5">
                            <div className="bg-primary/10 p-4 rounded-full">
                                <MdOutlineRecommend className="text-3xl text-primary" />
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">
                            No Recommendations Yet
                        </h3>
                        <p className="text-secondary mb-6">
                            Be the first to share your product knowledge with the community!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <button className="btn btn-primary">
                                Suggest an Alternative
                            </button>
                            <button className="btn btn-outline btn-primary">
                                Browse Products
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}



        </section>


    );
};

export default RecentActivityFeed;