import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type CafeStackParamList = {
    CafeListScreen: undefined;
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
    Auth: undefined;
    Drawer: undefined;
};

export type RootStackProps = NativeStackScreenProps<RootStackParamList>;

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
}

export type AuthStackProps = NativeStackScreenProps<AuthStackParamList>;

export type FavoriteStackParamList = {
    Favorite: undefined;
    DrinkDetailsScreen: CafeStackParamList['DrinkDetailsScreen'];
};

export type FavoriteStackProps = NativeStackScreenProps<FavoriteStackParamList, 'DrinkDetailsScreen'>;

export type DrawerParamList = {
    FavoriteStack: undefined;
    Cafes: undefined;
};

export type DrawerProps = DrawerScreenProps<DrawerParamList>;