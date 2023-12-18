import { View } from "react-native";
import tw from 'twrnc';

export default function Authenticated({children}){
    return (
        <View style={tw`h-full w-full p-2`}>
            { children }
        </View>
    );
}