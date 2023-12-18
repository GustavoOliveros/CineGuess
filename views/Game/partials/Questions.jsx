import {
    Text,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    ActivityIndicator
} from 'react-native';
import tw from 'twrnc';
import { useState } from 'react';
import { BASE_IMG } from '../../../config/main';
import PrimaryButton from '../../components/PrimaryButton';
import { ArrowRightIcon } from 'react-native-heroicons/solid';

export default function Questions({ index, setIndex, score, setScore, data }) {
    const [selectedValue, setSelectedValue] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const correctAns = data[index].correctAns;
    const ans = data[index].answers;
    const imgUrl = data[index].imageUrl;

    const handlePress = (answer) => {
        setSelectedValue(answer);

        if (answer === data[index].correctAns) {
            setScore((prev) => prev + 100);
        } else {
            setScore((prev) => prev - 100);
        }
    };

    const handleNext = () => {
        if (selectedValue !== null) {
            setIndex((prev) => prev + 1);
            setSelectedValue(null);
        }
    };

    return (
        <ScrollView>
            <View>
                <Text style={tw`text-2xl text-center text-white`}>
                    Puntuación: {score}
                </Text>
                <Text style={tw`text-sm text-center mb-5`}>
                    Pregunta {index + 1} de {data.length}
                </Text>
            </View>

            <View>
                <Image
                    style={tw`w-full aspect-video mb-5 ${
                        isLoading ? 'hidden' : null
                    }`}
                    source={{ uri: BASE_IMG + imgUrl }}
                    onLoadStart={() => setIsLoading(true)}
                    onLoadEnd={() => setIsLoading(false)}
                />
                <View
                    style={tw`w-full aspect-video bg-zinc-800 mb-5 justify-center ${
                        isLoading ? null : 'hidden'
                    }`}
                >
                    <ActivityIndicator size="large" color="white" />
                    <Text style={tw`text-center`}>Cargando...</Text>
                </View>
            </View>

            <View>
                <Text style={tw`text-xl mb-5 text-center text-white`}>
                    {data[index].question}
                </Text>
            </View>

            <View style={tw`w-full gap-4`}>
                {ans !== undefined &&
                    ans.map((element, index) => (
                        <TouchableOpacity
                            style={tw`border rounded-lg p-5 mx-4 ${
                                selectedValue === null
                                    ? 'border-white'
                                    : element === correctAns
                                    ? 'border-green-500'
                                    : 'border-red-500'
                            }`}
                            key={index}
                            onPress={() =>
                                selectedValue ?? handlePress(element)
                            }
                        >
                            <Text
                                style={tw`text-white text-center  ${
                                    selectedValue === element
                                        ? 'font-extrabold underline'
                                        : ''
                                }`}
                            >
                                {element}
                            </Text>
                        </TouchableOpacity>
                    ))}

                <PrimaryButton
                    title="Siguiente"
                    onPress={handleNext}
                    style={`mx-4 bg-white ${
                        selectedValue === null ? 'bg-transparent border-transparent' : ''
                    }`}
                    textStyle={`text-black font-bold text-sm ${
                        selectedValue === null ? 'text-transparent' : ''
                    }`}
                />
            </View>

            <View style={tw`mb-5 mt-20`}>
                <Text style={tw`text-sm text-center`}>
                    Derechos reservados, 2023.
                </Text>
            </View>
        </ScrollView>
    );
}
