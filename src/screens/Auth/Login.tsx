import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AppTitle } from "../../shared/components/AppTitle";
import { AuthForm } from "./AuthForm";
import { authStyles } from "../../shared/styles/authStyles";
import { SignUpLink } from "../../shared/components/SignUpLink";
import { AuthStackProps } from "../../../navigationTypes";

export function LoginScreen({ navigation }: AuthStackProps) {
    return (
        <ImageBackground source={require('../../../assets/background/background.png')} style={authStyles.background}>
            <LinearGradient colors={['transparent', 'rgba(255, 255, 255, 0.6)']} style={authStyles.gradient} />
            <AppTitle />
            <View style={styles.inputContainer}>
                <AuthForm url='Authorization' buttonText='Войти' />
                <SignUpLink handlePress={() => navigation.replace('Register')} title="Регистрация" />
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