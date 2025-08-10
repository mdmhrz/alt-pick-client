import { FaUser, FaRegClock, FaTag, FaIndustry } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./RecentQueryStyles.css";
import { use } from "react";

const RecentQuery = ({ queryPromise }) => {
    const queries = use(queryPromise);

    return (
        <div className="bg-base-300">
            <div className="py-20 px-4 w-11/12 mx-auto">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-primary">Explore Latest Product Queries</h2>
                    <p className="text-sm text-base-content mt-2 max-w-xl mx-auto">
                        Discover real-time queries from our community. Learn from others and share your own experience.
                    </p>
                </div>

                {/* Slider */}
                <div className="max-w-6xl mx-auto">
                    {queries.length === 0 ? (
                        <p className="text-center text-gray-500">No recent queries found.</p>
                    ) : (
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            loop={true}
                            centeredSlides={true}
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.2,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 2.8,
                                },
                            }}
                            className="recent-query-swiper"
                        >
                            {queries.map((query) => (
                                <SwiperSlide key={query._id} className="group transition-all duration-500 relative">
                                    <div className="relative bg-base-100 border border-base-300 p-4 sm:p-6 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-300 h-auto sm:h-[440px] group-[.swiper-slide-active]:scale-100 group-[.swiper-slide-active]:opacity-100 scale-95 opacity-50">

                                        {/* Query Title & Reason */}
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-secondary text-xl sm:text-2xl mb-2">
                                                {query.queryTitle}
                                            </h3>
                                            <p className="text-sm text-gray-600 line-clamp-3">{query.reason}</p>

                                            {/* Product Image */}
                                            {query.productImageUrl && (
                                                <img
                                                    src={query.productImageUrl}
                                                    alt={query.productName}
                                                    className="mt-4 w-full h-36 object-cover rounded-md border"
                                                />
                                            )}
                                        </div>

                                        {/* Product Info */}
                                        <div className="text-xs text-gray-400 pb-3 mb-4 border-b pt-3 space-y-1">
                                            <div className="flex justify-between text-[13px]">
                                                <p className="flex items-center gap-1">
                                                    <FaTag className="text-primary text-xs" /> {query.productName}
                                                </p>
                                                <p className="flex items-center gap-1">
                                                    <FaIndustry className="text-primary text-xs" /> {query.productBrand}
                                                </p>
                                            </div>
                                            <p className="flex items-center gap-1 text-[12px]">
                                                <FaRegClock className="text-primary text-xs" />
                                                Posted on: {new Date(query.timestamp).toLocaleDateString()}
                                            </p>
                                        </div>

                                        {/* User Info */}
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={query.userImage}
                                                alt={query.name}
                                                className="w-10 h-10 rounded-full object-cover border"
                                            />
                                            <div>
                                                <h4 className="font-semibold text-primary text-sm">{query.name}</h4>
                                                <p className="text-xs text-gray-400">{query.userEmail}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecentQuery;
