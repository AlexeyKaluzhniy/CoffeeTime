import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorite from "../screens/Favorite";
import Map from "../screens/Map";
import CafeList from "../screens/CafeList";

const drawer = createDrawerNavigator();

export default function Drawer() {
    return (
        <drawer.Navigator screenOptions={{
            headerTitle: 'CoffeTime',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontFamily: 'lobsterRegular', fontSize: 22 },
        }}>
            <drawer.Screen name="Favorite" component={Favorite} />
            <drawer.Screen name="CafeList" component={CafeList} />
        </drawer.Navigator>
    );
}