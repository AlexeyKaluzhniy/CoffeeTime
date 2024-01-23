import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type CafeStackParamList = {
    CafeListScreen: {};
    CafeDetailsScreen: {
        sessionId: string,
        cafeId: string
    };
    DrinkDetailsScreen: {
        sessionId: string,
        id: string
    };
};

export type CafeStackProps = NativeStackScreenProps<CafeStackParamList, 'CafeDetailsScreen'>;
export type DrinkDetailsProps = NativeStackScreenProps<CafeStackParamList, 'DrinkDetailsScreen'>;

export type RootStackParamList = {
    Login: {};
    Register: {};
    Drawer: {};
};

export type RootStackProps = NativeStackScreenProps<RootStackParamList>;

export type DrawerParamList = {
    Favorite: {};
    Cafes: {};
};

export type DrawerProps = DrawerScreenProps<DrawerParamList>;