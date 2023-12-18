import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import tw from 'twrnc';
import { useState } from 'react';
import LinkButton from '../../components/LinkButton';
import PrimaryButton from '../../components/PrimaryButton';

export default function Score({ score, setIndex, setScore, fetchData }) {
    const handlePress = () => {
        setIndex(0);
        setScore(0);
        fetchData();
    };

    return (
        <View style={tw`h-full justify-center items-center`}>
            <Text style={tw`text-white text-3xl mb-5`}>
                Puntaje final: {score}
            </Text>

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
