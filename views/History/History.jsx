import useScore from '../../hooks/useScore';
import Authenticated from '../layouts/Authenticated';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import {
    SparklesIcon,
    FaceSmileIcon,
    FaceFrownIcon
} from 'react-native-heroicons/solid';
import LinkButton from '../components/LinkButton';

export default function HistoryScreen({ navigation }) {
    const [globalScoreValue, status] = useScore();

    return (
        <Authenticated>
            <View style={tw`gap-5 mt-10 mx-2`}>
                <View style={tw`bg-zinc-900 rounded-lg p-5`}>
                {globalScoreValue && globalScoreValue > 0 ? (
                                <FaceSmileIcon size={50} color="white" style={tw`mx-auto mb-5`} />
                            ) : (
                                <FaceFrownIcon size={50} color="white" style={tw`mx-auto mb-5`} />
                            )}
                    <Text
                        style={tw`text-2xl text-center text-white  mb-5 font-bold`}
                    >
                        Puntaje global:
                    </Text>

                    {status === 'success' ? (
                        <Text
                            style={tw`text-5xl text-center text-white font-bold`}
                        >
                            {globalScoreValue}
                        </Text>
                    ) : null}
                    {status === 'error' ? (
                        <Text style={tw`text-2xl text-center text-white`}>
                            No pudimos obtener su puntaje
                        </Text>
                    ) : null}
                    {status === 'loading' ? (
                        <Text style={tw`text-2xl text-center text-white`}>
                            Guardando puntaje...
                        </Text>
                    ) : null}
                </View>

                <View style={tw`bg-zinc-900 rounded-lg p-5`}>
                    <SparklesIcon
                        size={50}
                        color="white"
                        style={tw`mx-auto mb-5`}
                    />
                    <Text style={tw`text-center text-white`}>
                        Próximamente:
                    </Text>
                    <Text style={tw`text-center`}>
                        Rankings, últimas partidas y mas.
                    </Text>
                </View>

                <LinkButton
                    screenName="Home"
                    title="Volver"
                />
            </View>
        </Authenticated>
    );
}
