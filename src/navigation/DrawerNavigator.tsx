import { createDrawerNavigator } from "@react-navigation/drawer";
import { CafeStack } from "./СafeStackNavigator";
import { DrawerParamList } from "../../navigationTypes";
import { FavoriteStack } from "./FavoriteStackNavigator";

const drawer = createDrawerNavigator<DrawerParamList>();

export function Drawer() {
    return (
        <drawer.Navigator screenOptions={{ headerShown: false }} >
            <drawer.Screen name="Cafes" component={CafeStack} options={{ title: 'Кафе' }} />
            <drawer.Screen name="FavoriteStack" component={FavoriteStack} options={{ title: 'Избранное' }} />
        </drawer.Navigator>
    );
}