import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/Login";
import { RegisterScreen } from "../screens/Register";
import { Drawer } from "./DrawerNavigator";
import { RootStackParamList } from "../../navigationTypes";

const rootStack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
    return (
        <rootStack.Navigator initialRouteName="Drawer" screenOptions={{ headerShown: false }}>
            <rootStack.Screen name='Login' component={LoginScreen} />
            <rootStack.Screen name="Register" component={RegisterScreen} />
            <rootStack.Screen name="Drawer" component={Drawer} />
        </rootStack.Navigator>
    );
}