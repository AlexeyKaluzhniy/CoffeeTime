import { createDrawerNavigator } from "@react-navigation/drawer";
import { Favorite } from "../screens/Favorite";
import { CafeStack } from "./CafeStackNavigator";
import { CustomHeader } from "./CustomHeader";
import { DrawerParamList } from "../../navigationTypes";

const drawer = createDrawerNavigator<DrawerParamList>();

export function Drawer() {
    return (
        <drawer.Navigator>
            <drawer.Screen name="Cafes" component={CafeStack} options={{ headerShown: false }} />
            <drawer.Screen name="Favorite" component={Favorite} options={{ header: CustomHeader }} />
        </drawer.Navigator>
    );
}
