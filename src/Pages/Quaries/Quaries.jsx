import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import QueryCard from "../../components/QueryCard/QueryCard";

const Queries = () => {

    const [queries, setQueries] = useState([]);
    console.log(queries);

    useEffect(() => {
        // Fetch all queries from backend
        fetch("http://localhost:3000/queries")
            .then((res) => res.json())
            .then((data) => {
                const sorted = data.sort(
                    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
                );
                setQueries(sorted);
            })
            .catch((err) => console.error("Failed to load queries", err));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Explore All Product Queries</h2>

            {queries.length === 0 ? (
                <p className="text-center text-gray-400">No queries found.</p>
            ) : (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {queries.map((query) => <QueryCard key={query._id} query={query}></QueryCard>)}
                </div>
            )}
        </div>
    );
};

export default Queries;
