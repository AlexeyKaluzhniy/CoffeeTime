import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/Auth/Login";
import { RegisterScreen } from "../screens/Auth/Register";
import { Drawer } from "./DrawerNavigator";
import { RootStackParamList } from "../../navigationTypes";

const rootStack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
    return (
        <rootStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <rootStack.Screen name='Login' component={LoginScreen} options={{ animation: 'slide_from_left' }} />
            <rootStack.Screen name="Register" component={RegisterScreen} options={{ animation: 'slide_from_right' }} />
            <rootStack.Screen name="Drawer" component={Drawer} />
        </rootStack.Navigator>
    );
}
