import { useEffect, useState } from 'react';
import { axiosPlayersAPI } from '../config/axios/Axios';

export default function useRanking() {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState('loading');
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        try {
            const res = await axiosPlayersAPI.get('ranking', {params:{page:page}});
            setData(res.data.data);
            setStatus('success');
            console.log('suse')
        } catch (error) {
            console.error(error);
            setStatus('error');
        }

        console.log('hizo fetch play');
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    return [data, status, setPage];
}
