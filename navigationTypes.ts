import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type CafeStackParamList = {
    CafeList: undefined;
    CafeDetails: {
        sessionId: string,
        cafeId: string
    };
    DrinkDetails: {
        sessionId: string,
        id: string
    };
};

export type CafeStackProps = NativeStackScreenProps<CafeStackParamList, 'CafeDetails'>;
export type DrinkDetailsProps = NativeStackScreenProps<CafeStackParamList, 'DrinkDetails'>;

export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Drawer: undefined;
};

export type RootStackProps = NativeStackScreenProps<RootStackParamList>;

type DrawerParamList = {
    Favorite: undefined;
    Cafes: undefined;
};

export type DrawerProps = DrawerScreenProps<DrawerParamList>;