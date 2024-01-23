import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CafeList } from "../screens/Cafe/CafeList";
import { CafeDetails } from "../screens/Cafe/CafeDetails";
import { CafeStackParamList } from "../../navigationTypes";
import { CustomHeader } from "./CustomHeader";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Drink } from "../screens/Drink/Drink";

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
                fontFamily: 'lobsterRegular',
                fontSize: 22
            },
            title: 'CoffeTime',
            contentStyle: {backgroundColor: '#fff'},
        }}>
            <cafeStack.Screen name='CafeList' component={CafeList} options={{ header: CustomHeader }} />
            <cafeStack.Screen name='CafeDetails' component={CafeDetails} />
            <cafeStack.Screen name='DrinkDetails' component={Drink} />
        </cafeStack.Navigator>
    );
}