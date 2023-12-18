import { useEffect, useState } from 'react';
import axiosInstance, { API_DEFAULT_PARAMS } from '../config/axios/Axios';

export default function useGenres() {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState('loading');

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(`genre/movie/list`, {
                params: {
                    ...API_DEFAULT_PARAMS
                }
            });
            setData(res.data.genres);
            setStatus('success');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }

        console.log('hizo fetch g');
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [data, status];
}
