import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Drawer } from "./DrawerNavigator";
import { RootStackParamList } from "../../navigationTypes";
import { AuthStack } from "./AuthStackNavigator";

const rootStack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
    return (
        <rootStack.Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
            <rootStack.Screen name='Auth' component={AuthStack} />
            <rootStack.Screen name="Drawer" component={Drawer} />
        </rootStack.Navigator>
    );
}