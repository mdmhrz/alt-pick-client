import React from 'react';
import { FaClock, FaTrashAlt } from 'react-icons/fa';

const MyRecommendationsList = ({ rec, handleDelete }) => {
    return (
        <tr className="hover:bg-gray-50">
            <td>{rec.queryTitle}</td>
            <td className="font-medium">{rec.title}</td>
            <td>{rec.product}</td>
            <td className="text-sm text-gray-600">{rec.reason}</td>
            <td className="text-xs text-gray-500 flex items-center gap-1">
                <FaClock className="text-[10px]" />
                {new Date(rec.timestamp).toLocaleString()}
            </td>
            <td className="text-center">
                <button
                    title='Delete'
                    onClick={() => handleDelete(rec)}
                    className="btn btn-sm btn-error text-white"
                >
                    <FaTrashAlt />
                </button>
            </td>
        </tr>
    );
};

export default MyRecommendationsList;