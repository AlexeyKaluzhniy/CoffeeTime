import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackProps } from "../../../navigationTypes";
import { AppTitle } from "../../shared/components/AppTitle";
import { AuthForm } from "./AuthForm";
import { authStyles } from "../../shared/styles/authStyles";

export function LoginScreen({ navigation }: RootStackProps) {
    return (
        <ImageBackground source={require('../../../assets/background/фон.png')} style={authStyles.background}>
            <LinearGradient colors={['transparent', 'rgba(255, 255, 255, 0.6)']} style={authStyles.gradient} />
            <AppTitle />
            <View style={styles.inputContainer}>
                <AuthForm navigation={navigation} url='Authorization' buttonText='Войти' />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 189,
    }
});