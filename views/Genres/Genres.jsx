import Authenticated from '../layouts/Authenticated';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import tw from 'twrnc';
import useGenres from '../../hooks/useGenres';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

export default function GenresScreen({ navigation }) {
    const [data, status] = useGenres();
    const [isLoading, setIsLoading] = useState(true);
    
    return (
        <Authenticated>
            <Text style={tw`text-lg text-center pt-10 mb-10`}>
                Seleccione una categoría para jugar
            </Text>

            {status === 'loading' ? (
                <View>
                    <ActivityIndicator size="large" color="white" />
                    <Text style={tw`text-center`}>Cargando...</Text>
                </View>
            ) : null}
            {status === 'success' ? (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <PrimaryButton
                            title={item.name}
                            style="my-2 w-48% aspect-1 justify-center"
                            textStyle="text-center"
                            onPress={() =>
                                navigation.navigate('Game', {
                                    genre: item
                                })
                            }
                        />
                    )}
                    keyExtractor={(element) => element.id}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    numColumns={2}
                    columnWrapperStyle={tw`justify-between`}
                />
            ) : null}
        </Authenticated>
    );
}
