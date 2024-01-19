import { createDrawerNavigator } from "@react-navigation/drawer";
import { Favorite } from "../screens/Favorite";
import { CafeStack } from "./cafeStackNavigator";
import { CustomHeaderDrawer } from "./customHeaderDrawer";

const drawer = createDrawerNavigator();

export function Drawer() {
    return (
        <drawer.Navigator screenOptions={{ header: CustomHeaderDrawer }}>
            <drawer.Screen name="Favorite" component={Favorite} />
            <drawer.Screen name="Cafes" component={CafeStack} options={{ headerShown: false }} />
        </drawer.Navigator>
    );
}