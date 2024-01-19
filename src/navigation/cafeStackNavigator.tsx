import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CafeList } from "../screens/Cafe/CafeList";
import { CafeDetails } from "../screens/Cafe/CafeDetails";
import { CafeStackParamList } from "../../types";
import { CustomHeaderStack } from "./customHeaderStack";

const cafeStack = createNativeStackNavigator<CafeStackParamList>();

export function CafeStack() {
    return (
        <cafeStack.Navigator screenOptions={{ header: CustomHeaderStack, animation: 'slide_from_right' }}>
            <cafeStack.Screen name='CafeList' component={CafeList} />
            <cafeStack.Screen name='CafeDetails' component={CafeDetails} />
        </cafeStack.Navigator>
    );
}