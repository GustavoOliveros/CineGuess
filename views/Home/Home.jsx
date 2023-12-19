import { View, Text, Image } from 'react-native';
import tw from 'twrnc';
import Authenticated from '../layouts/Authenticated';
import LinkButton from '../components/LinkButton';

export default function HomeScreen({ navigation }) {
    return (
        <Authenticated>
            <View style={tw`h-full justify-center items-center`}>
                <Image source={require('./../../img/logo.png')} style={tw`w-20 h-20 mb-5`} />

                <Text style={tw`text-6xl font-bold text-white`}>Cine • Guess</Text>
                <Text style={tw`text-lg mb-5`}>Versión 0.0.1</Text>

                <LinkButton title='Jugar' screenName='Genres' style="mb-5 bg-white w-full" textStyle='text-black' />
                <LinkButton title='Puntuación' screenName='History' style='w-full mb-5' />
                <LinkButton title='Ranking' screenName='Ranking' style='w-full' />

            </View>
            
        </Authenticated>
    );
}
