import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CafeList } from "../screens/Cafe/CafeList";
import { CafeDetails } from "../screens/Cafe/CafeDetails";
import { CafeStackParamList } from "../../navigationTypes";
import { CustomHeader } from "./CustomHeader";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Drink } from "../screens/Drink/Drink";
import { fonts } from "../shared/styles/fonts";

const cafeStack = createNativeStackNavigator<CafeStackParamList>();

export function CafeStack() {
    const navigation = useNavigation();

    return (
        <cafeStack.Navigator screenOptions={{
            animation: 'slide_from_right', headerLeft: () => {
                return (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
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
            <cafeStack.Screen name='CafeListScreen' component={CafeList} options={{ header: CustomHeader }} />
            <cafeStack.Screen name='CafeDetailsScreen' component={CafeDetails} />
            <cafeStack.Screen name='DrinkDetailsScreen' component={Drink} />
        </cafeStack.Navigator>
    );
}