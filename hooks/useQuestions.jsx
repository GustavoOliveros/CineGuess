import { useEffect, useState } from 'react';
import axiosInstance, { API_DEFAULT_PARAMS } from '../config/axios/Axios';

export default function useQuestions(genreId) {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState('loading');

    const processData = (data) => {
        const chunkSize = 4;
        const result = [];

        // combos de 5 pelis
        for (let i = 0; i < data.length; i += chunkSize) {
            const chunk = data.slice(i, i + chunkSize);

            let corrAnsIndex = Math.floor(Math.random() * chunk.length);

            let question = {
                question: '¿De qué película es esta imagen?',
                answers: chunk.map((el) => el.title),
                correctAns: chunk[corrAnsIndex].title,
                imageUrl: chunk[corrAnsIndex].backdrop_path
            };

            result.push(question);
        }

        return result;
    };

    const fetchData = async () => {
        const page = Math.floor(Math.random() * 50) + 1;

        setStatus('loading');

        // TODO: Revisar el agregado de parámetros a la request, usando axiosInstance
        try {
            const res = await axiosInstance.get('discover/movie', {
                params: {
                    ...API_DEFAULT_PARAMS,
                    with_genres: genreId,
                    page: page
                }
            });

            const data = res?.data?.results
                ?.map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);

            setData(data && processData(data));
            setStatus('success');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [data, status, fetchData];
}
