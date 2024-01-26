import { Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackProps } from "../../navigationTypes";
import { AppTitle } from "../shared/components/AppTitle";
import { fonts } from "../shared/styles/fonts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchSessionId } from "../redux/auth/loginReducer";

export function LoginScreen({ navigation }: RootStackProps) {
    const dispatch = useDispatch<AppDispatch>();

    const handleLogin = () => {
        dispatch(fetchSessionId({ email: 'kaluzhniy2017@yandex.ru', password: 'qwerty' }));
        navigation.replace('Drawer');
    }

    return (
        <ImageBackground source={require('../../assets/background/фон.png')} style={styles.background}>
            <LinearGradient colors={['transparent', 'rgba(255, 255, 255, 0.6)']} style={styles.gradient} />
            <AppTitle />
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleLogin}>
                <Image source={require('../../assets/icons/icon_facebook.png')} style={styles.icon} />
                <Text style={styles.buttonText}>Войти через Facebook</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        width: 300,
        height: 52,
        alignItems: 'center',
        backgroundColor: '#3B5998',
        borderRadius: 100,
        marginTop: 425
    },
    icon: {
        marginLeft: 37,
        marginRight: 16,
    },
    buttonText: {
        color: '#fff',
        fontFamily: fonts.SFUIRegular,
        fontSize: 18
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: '30%',
    },
});