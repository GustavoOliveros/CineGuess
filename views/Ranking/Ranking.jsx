import { FlatList, ScrollView } from 'react-native';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import Authenticated from '../layouts/Authenticated';
import useRanking from '../../hooks/useRanking';
import PrimaryButton from '../components/PrimaryButton';
import { ArrowLeftIcon, ArrowRightIcon } from 'react-native-heroicons/solid';

export default function RankingScreen() {
    // const [data, status, setPage] = useRanking();

    const data = [
        {
            username: 'gusa05',
            score: 169
        },
        {
            username: 'gusa05',
            score: 169
        },
        {
            username: 'gusa05',
            score: 169
        },
        {
            username: 'gusa05',
            score: 169
        },
        {
            username: 'gusa05',
            score: 169
        }
    ];

    // const data = [];

    return (
        <Authenticated>
            <Text style={tw`text-center text-white text-xl mt-10 mb-10`}>
                Ranking General
            </Text>

            <ScrollView>
                <View style={tw`gap-4`}>
                    <View style={tw`flex-row justify-center gap-5 px-5`}>
                        <Text style={tw`w-[33%] text-center`}>Pos.</Text>
                        <Text style={tw`w-[33%] text-center`}>Usuario</Text>
                        <Text style={tw`w-[33%] text-center`}>Puntaje</Text>
                    </View>
                    {data
                        ? data.map((element, index) => (
                              <View
                                  style={tw`bg-zinc-900 rounded-lg p-5 flex-row justify-center gap-5`}
                                  key={index}
                              >
                                  <Text
                                      style={tw`w-[33%] text-center text-white font-bold`}
                                  >
                                      {index + 1}
                                  </Text>
                                  <Text style={tw`w-[33%] text-center`}>
                                      {element.username.slice(0, 8)}
                                      {element.username.length > 8
                                          ? '...'
                                          : null}
                                  </Text>
                                  <Text style={tw`w-[33%] text-center`}>
                                      {element.score}
                                  </Text>
                              </View>
                          ))
                        : null}

                    <View
                        style={tw`bg-zinc-700 rounded-lg p-5 flex-row justify-center gap-5`}
                    >
                        <Text
                            style={tw`w-[33%] text-center text-white font-bold`}
                        >
                            234
                        </Text>
                        <Text
                            style={tw`w-[33%] text-center text-white font-bold`}
                        >
                            pepe
                        </Text>
                        <Text
                            style={tw`w-[33%] text-center text-white font-bold`}
                        >
                            31
                        </Text>
                    </View>

                    <View style={tw`flex-row justify-between`}>
                        <PrimaryButton
                            style={`w-[48%] ${true ? 'border-zinc-500' : null}`}
                            title={<ArrowLeftIcon size={20} color={true ? 'gray' : 'white'} />}
                            disabled={true} 
                        />
                        <PrimaryButton
                            style="w-[48%]"
                            title={<ArrowRightIcon size={20} color="white" />}
                        />
                    </View>
                </View>
            </ScrollView>
        </Authenticated>
    );
}
