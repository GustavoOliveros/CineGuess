import { Text, View } from 'react-native';
import tw from 'twrnc';
import LinkButton from '../../components/LinkButton';
import PrimaryButton from '../../components/PrimaryButton';
import useScore from '../../../hooks/useScore';

export default function Score({ score, setIndex, setScore, fetchData }) {
    const [globalScoreValue, status] = useScore(score);

    const handlePress = () => {
        setIndex(0);
        setScore(0);
        fetchData();
    };

    return (
        <View style={tw`h-full justify-center items-center`}>
            <Text style={tw`text-white text-3xl`}>Puntaje final: {score}</Text>

            {status === 'success' ? (
                <Text style={tw`mb-5`}>Puntaje global: {globalScoreValue}</Text>
            ) : null}
            {status === 'error' ? (
                <Text style={tw`mb-5`}>No pudimos guardar su puntaje</Text>
            ) : null}
            {status === 'loading' ? (
                <Text style={tw`mb-5`}>Guardando puntaje...</Text>
            ) : null}

            <PrimaryButton
                title="Intentar nuevamente"
                onPress={handlePress}
                style="w-full mb-5 bg-white"
                textStyle="text-black"
            />

            <LinkButton
                title="Seleccionar otra categoría"
                screenName="Genres"
                style="w-full  "
            />
        </View>
    );
}
