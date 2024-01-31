import { StyleSheet } from "react-native";
import { screenHeight, screenWidth } from "../dimensions";

export const authStyles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 190,
        height: screenHeight
    },
});