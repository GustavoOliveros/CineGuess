import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzA1OTYzYjA4OWUwZjJkOGI1MzNjZTkwMjBkZjlmNCIsInN1YiI6IjYyY2UxMzVlZDc1YmQ2MDBjMTRlMjY2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.moP3Mbp3610Cv5GUbgLVUVOYl7KUMD_7iRHqWezNjP0'
    },
});

export const API_DEFAULT_PARAMS = {
    adult: 'false',
    language: 'es-MX'
}

export default axiosInstance;
