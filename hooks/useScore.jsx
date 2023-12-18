import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useScore(score = null) {
    const [globalScoreValue, setGlobalScoreValue] = useState(0);
    const [status, setStatus] = useState('loading');

    const getGlobalScore = async () => {
        let value;
        try {
            value = await AsyncStorage.getItem('GLOBAL_SCORE');

            if (score === null) {
                setGlobalScoreValue(value || 0);
                setStatus('success');
            }
        } catch (error) {
            console.error(error);

            if (score === null) {
                setStatus('error');
            }
        }
        return value;
    };

    const setGlobalScore = async () => {
        try {
            const value = await getGlobalScore();

            const newValue = (
                (parseInt(value) || 0) + parseInt(score)
            ).toString();

            await AsyncStorage.setItem('GLOBAL_SCORE', newValue);

            setGlobalScoreValue(newValue);
            setStatus('success');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    useEffect(() => {
        if (score) {
            setGlobalScore();
        } else {
            getGlobalScore();
        }
    }, []);

    return [globalScoreValue, status];
}
