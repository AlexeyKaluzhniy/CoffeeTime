import { createDrawerNavigator } from "@react-navigation/drawer";
import { Favorite } from "../screens/Favorite";
import { CafeStack } from "./cafeStackNavigator";
import { CustomHeader } from "./customHeader";

const drawer = createDrawerNavigator();

export function Drawer() {
    return (
        <drawer.Navigator>
            <drawer.Screen name="Cafes" component={CafeStack} options={{ headerShown: false }} />
            <drawer.Screen name="Favorite" component={Favorite} options={{ header: CustomHeader }} />
        </drawer.Navigator>
    );
}