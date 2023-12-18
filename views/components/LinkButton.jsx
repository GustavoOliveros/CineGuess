import { useNavigation } from '@react-navigation/native';
import PrimaryButton from './PrimaryButton';

export default function LinkButton({ title, style = "", textStyle = "", screenName, ...props }) {
    const navigation = useNavigation();

    return (
        <PrimaryButton
            title={title}
            onPress={() => navigation.navigate(screenName)}
            style={style}
            textStyle={textStyle}
            {...props}
        />
    );
}
