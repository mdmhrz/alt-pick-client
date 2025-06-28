import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Banner = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const sliderData = [
        {
            id: 1,
            title: "Find Better Alternatives",
            description:
                "Discover ethically produced and sustainable products recommended by our community",
            imageUrl:
                "https://readdy.ai/api/search-image?query=Diverse%20group%20of%20people%20discussing%20product%20alternatives%20in%20a%20modern%20bright%20office%20space%20with%20large%20windows%2C%20plants%2C%20and%20collaborative%20atmosphere%2C%20soft%20natural%20lighting%2C%20professional%20business%20setting%20with%20technology&width=1200&height=600&seq=13&orientation=landscape",
        },
        {
            id: 2,
            title: "Make Informed Choices",
            description:
                "Learn why others are seeking alternatives and make better purchasing decisions",
            imageUrl:
                "https://readdy.ai/api/search-image?query=Person%20comparing%20product%20labels%20and%20researching%20on%20tablet%20in%20a%20modern%20minimalist%20home%20setting%2C%20soft%20natural%20lighting%20through%20large%20windows%2C%20clean%20aesthetic%20with%20plants%2C%20thoughtful%20consumer%20decision%20making%20scene&width=1200&height=600&seq=14&orientation=landscape",
        },
        {
            id: 3,
            title: "Share Your Experience",
            description:
                "Help others by recommending better alternatives to problematic products",
            imageUrl:
                "https://readdy.ai/api/search-image?query=Person%20writing%20a%20product%20review%20on%20laptop%20in%20a%20cozy%20cafe%20with%20warm%20lighting%2C%20coffee%20cup%20nearby%2C%20other%20people%20in%20background%2C%20modern%20urban%20setting%20with%20plants%20and%20wooden%20elements%2C%20sharing%20knowledge%20concept&width=1200&height=600&seq=15&orientation=landscape",
        },
    ];

    useEffect(() => {
        // Auto-advance slider
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % sliderData.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [sliderData.length]);


    return (
        <div>
            <div className="relative min-h-[calc(100vh-64px)] overflow-hidden">
                {sliderData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10"></div>
                        <img
                            src={slide.imageUrl}
                            alt={slide.title}
                            className="w-full h-full object-cover object-top blur-[3px]"
                        />
                        <div className="absolute inset-0 flex items-center z-20">
                            <div className="w-11/12 mx-auto px-6">
                                <div className="lg:max-w-[70%]">
                                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl text-white mb-8">{slide.description}</p>
                                    <button
                                        onClick={() => setCurrentView("queries")}
                                        className="btn btn-primary"
                                    >
                                        Explore Queries
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slider Navigation */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center z-30">
                    <div className="flex space-x-2">
                        {sliderData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer whitespace-nowrap ${index === activeSlide ? "bg-white" : "bg-white/50"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;