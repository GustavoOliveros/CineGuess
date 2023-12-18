import { View, Text, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import Authenticated from '../layouts/Authenticated';
import Questions from './partials/Questions';
import Score from './partials/Score';
import useQuestions from '../../hooks/useQuestions';
import tw from 'twrnc';

export default function GameScreen({ route, navigation }) {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);

    const genre = route.params.genre;

    const [data, status, fetchData] = useQuestions(genre.id);

    return (
        <Authenticated>
            {status === 'loading' ? (
                <View style={tw`justify-center mt-10`}>
                    <ActivityIndicator color="white" size="large" />
                    <Text style={tw`text-2xl text-center`}>Cargando...</Text>
                </View>
            ) : null}
            {status === 'success' ? (
                data[index] !== undefined ? (
                    <Questions
                        index={index}
                        setIndex={setIndex}
                        score={score}
                        setScore={setScore}
                        data={data}
                    />
                ) : (
                    <Score
                        score={score}
                        setIndex={setIndex}
                        setScore={setScore}
                        fetchData={fetchData}
                    />
                )
            ) : null}
            {status === 'error' ? <Text>Ocurrió un error...</Text> : null}
        </Authenticated>
    );
}
