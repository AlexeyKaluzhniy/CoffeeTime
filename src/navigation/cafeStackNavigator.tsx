import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CafeList } from "../screens/Cafe/CafeList";
import { CafeDetails } from "../screens/Cafe/CafeDetails";
import { CafeStackParamList } from "../../types";
import { CustomHeader } from "./customHeader";
import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
        }}>
            <cafeStack.Screen name='CafeList' component={CafeList} options={{ header: CustomHeader }} />
            <cafeStack.Screen name='CafeDetails' component={CafeDetails} options={{

            }} />
        </cafeStack.Navigator>
    );
}