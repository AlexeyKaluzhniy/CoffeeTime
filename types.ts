import { DrawerScreenProps } from "@react-navigation/drawer"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type CafeList = {
    id: string,
    name: string,
    address: string,
    coordinates: string,
    description: string,
    images: string
}

export type CafeStackParamList = {
    CafeList: undefined,
    CafeDetails: {
        sessionId: string,
        cafeId: string
    }
}

export type CafeStackProps = NativeStackScreenProps<CafeStackParamList, 'CafeList' | 'CafeDetails'>;

export type RootStackParamList = {
    Login: undefined,
    Register: undefined,
    Drawer: undefined
}

export type RootStackProps = NativeStackScreenProps<RootStackParamList>;

type DrawerParamList = {
    Favorite: undefined,
    Cafes: undefined
}

export type DrawerProps = DrawerScreenProps<DrawerParamList>;