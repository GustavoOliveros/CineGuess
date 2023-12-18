import { TouchableOpacity, Text } from 'react-native';
import tw from 'twrnc';

export default function PrimaryButton({ title, style = "",textStyle = "", ...props }) {
    return (
        <TouchableOpacity style={tw`border border-white rounded-lg p-5 items-center ${style}`} {...props}>
            <Text style={tw`text-lg ${textStyle}`}>{title}</Text>
        </TouchableOpacity>
    );
}
