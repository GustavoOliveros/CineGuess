import { View, Text } from 'react-native';
import tw from 'twrnc';
import Authenticated from '../layouts/Authenticated';
import LinkButton from '../components/LinkButton';
import PrimaryButton from '../components/PrimaryButton';

export default function HomeScreen({ navigation }) {
    return (
        <Authenticated>
            <View style={tw`h-full justify-center items-center`}>
                <Text style={tw`text-6xl font-bold text-white`}>Cine • Guess</Text>
                <Text style={tw`text-lg mb-5`}>Versión 0.0.1</Text>

                <LinkButton title='Jugar' screenName='Genres' style="mb-5 bg-white w-full" textStyle='text-black' />
                <LinkButton title='Puntuación' screenName='History' style='w-full' />
            </View>
            
        </Authenticated>
    );
}
