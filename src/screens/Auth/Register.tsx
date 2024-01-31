import { View, ImageBackground, StyleSheet, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AppTitle } from "../../shared/components/AppTitle";
import { RootStackProps } from "../../../navigationTypes";
import { AuthForm } from "./AuthForm";
import { authStyles } from "../../shared/styles/authStyles";

export function RegisterScreen({ navigation }: RootStackProps) {
    return (
        <ImageBackground source={require('../../../assets/background/фон.png')} style={authStyles.background}>
            <LinearGradient colors={['transparent', 'rgba(255, 255, 255, 0.6)']} style={authStyles.gradient} />
            <AppTitle />
            <View style={styles.profilePhotoContainer}>
                <Image source={require('../../../assets/icons/user.png')} />
            </View>
            <AuthForm navigation={navigation} url='Register' buttonText='зарегистрироваться' />
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
});