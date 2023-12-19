import useScore from '../../hooks/useScore';
import Authenticated from '../layouts/Authenticated';
import { ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';
import {
    FaceSmileIcon,
    FaceFrownIcon,
    UserCircleIcon
} from 'react-native-heroicons/solid';
import PrimaryButton from '../components/PrimaryButton';

export default function HistoryScreen({ navigation }) {
    const [globalScoreValue, status] = useScore();

    const messages = ['Sos el GOAT', 'Matate gei'];

    return (
        <Authenticated>
            <ScrollView>
                <View style={tw`gap-5 mt-10 mx-2`}>
                    <View style={tw`bg-zinc-900 rounded-lg p-5`}>
                        <UserCircleIcon
                            size={50}
                            color="white"
                            style={tw`mx-auto mb-5`}
                        />
                        <Text
                            style={tw`text-xl text-center text-white  font-bold`}
                        >
                            Juanito.perez
                        </Text>
                    </View>

                    <View style={tw`flex-row justify-between`}>
                        <View style={tw`bg-zinc-900 rounded-lg p-5 w-[48%]`}>
                            <Text
                                style={tw`text-2xl text-center text-white  mb-5 font-bold`}
                            >
                                Ranking
                            </Text>

                            {status === 'success' ? (
                                <Text
                                    style={tw`text-5xl text-center text-white font-bold`}
                                >
                                    #1
                                </Text>
                            ) : null}
                            {status === 'error' ? (
                                <Text
                                    style={tw`text-2xl text-center text-white`}
                                >
                                    No pudimos obtener su ranking
                                </Text>
                            ) : null}
                            {status === 'loading' ? (
                                <Text
                                    style={tw`text-2xl text-center text-white`}
                                >
                                    Obteniendo ranking...
                                </Text>
                            ) : null}
                        </View>

                        <View style={tw`bg-zinc-900 rounded-lg p-5 w-[48%]`}>
                            <Text
                                style={tw`text-2xl text-center text-white  mb-5 font-bold`}
                            >
                                Puntaje
                            </Text>

                            {status === 'success' ? (
                                <Text
                                    style={tw`text-5xl text-center text-white font-bold`}
                                >
                                    {globalScoreValue}
                                </Text>
                            ) : null}
                            {status === 'error' ? (
                                <Text
                                    style={tw`text-2xl text-center text-white`}
                                >
                                    No pudimos obtener su puntaje
                                </Text>
                            ) : null}
                            {status === 'loading' ? (
                                <Text
                                    style={tw`text-2xl text-center text-white`}
                                >
                                    Obteniendo puntaje...
                                </Text>
                            ) : null}
                        </View>
                    </View>


                    <PrimaryButton title="Sincronizar con Google" onPress={() => alert('Para la próxima update <3')} />
                </View>
            </ScrollView>
        </Authenticated>
    );
}
