import { View, ImageBackground, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AppTitle } from "../../shared/components/AppTitle";
import { AuthForm } from "./AuthForm";
import { authStyles } from "../../shared/styles/authStyles";
import { AuthStackProps } from "../../../navigationTypes";

export function RegisterScreen({ navigation }: AuthStackProps) {
    return (
        <ImageBackground source={require('../../../assets/background/background.png')} style={authStyles.background}>
            <LinearGradient colors={['transparent', 'rgba(255, 255, 255, 0.6)']} style={authStyles.gradient} />
            <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.backButton}>
                <Image source={require('../../../assets/icons/icon_back.png')} />
            </TouchableOpacity>
            <AppTitle />
            <View style={styles.profilePhotoContainer}>
                <Image source={require('../../../assets/icons/user.png')} />
            </View>
            <AuthForm url='Register' buttonText='Зарегистрироваться' />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    profilePhotoContainer: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 120,
        marginTop: 60
    },
    backButton: {
        position: 'absolute',
        left: 20,
        top: 40,
    }
});