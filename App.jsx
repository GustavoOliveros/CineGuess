import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './views/Home/Home';
import GenresScreen from './views/Genres/Genres';
import HistoryScreen from './views/History/History';
import GameScreen from './views/Game/Game';
import RankingScreen from './views/Ranking/Ranking';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Inicio' }}
                />
                <Stack.Screen
                    name="Genres"
                    component={GenresScreen}
                    options={{ title: 'Categorías' }}
                />
                <Stack.Screen
                    name="History"
                    component={HistoryScreen}
                    options={{ title: 'Puntuación' }}
                />
                <Stack.Screen
                    name="Game"
                    component={GameScreen}
                    options={{ title: 'Partida en juego' }}
                />
                <Stack.Screen
                    name="Ranking"
                    component={RankingScreen}
                    options={{ title: 'Ranking' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}