import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Image } from 'react-native'
import { Favorite } from "../screens/Favorite/Favorite";
import { Drink } from "../screens/Drink/Drink";
import { CustomHeader } from "./CustomHeader";
import { fonts } from "../shared/styles/fonts";
import { useNavigation } from "@react-navigation/native";
import { FavoriteStackParamList, FavoriteStackProps } from "../../navigationTypes";

const favoriteStack = createNativeStackNavigator<FavoriteStackParamList>();

export function FavoriteStack() {
    const navigation = useNavigation<FavoriteStackProps['navigation']>();

    return (
        <favoriteStack.Navigator screenOptions={{
            animation: 'slide_from_right',
            headerLeft: () => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                        <Image source={require('../../assets/icons/icon_back.png')} />
                    </TouchableOpacity>);
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontFamily: fonts.LobsterRegular,
                fontSize: 22
            },
            title: 'CoffeTime',
            contentStyle: { backgroundColor: '#fff' },
        }}>
            <favoriteStack.Screen name='Favorite' component={Favorite} options={{ header: CustomHeader }} />
            <favoriteStack.Screen name='DrinkDetailsScreen' component={Drink} />
        </favoriteStack.Navigator>
    );
}