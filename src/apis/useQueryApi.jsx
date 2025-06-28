import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';


const useJobApi = () => {

    const axiosSecure = useAxiosSecure();
    const queriesCreatedByPromise = (email) => {
        return axiosSecure.get(`/jobs/applications?email=${email}`).then(res => res.data)
    }
    return {
        queriesCreatedByPromise
    }
};

export default useJobApi;