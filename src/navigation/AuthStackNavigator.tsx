import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/Auth/Login";
import { RegisterScreen } from "../screens/Auth/Register";
import { AuthStackParamList } from "../../navigationTypes";

const authStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
    return (
        <authStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <authStack.Screen name='Login' component={LoginScreen} options={{ animation: 'slide_from_left' }} />
            <authStack.Screen name="Register" component={RegisterScreen} options={{ animation: 'slide_from_right' }} />
        </authStack.Navigator>
    );
}
