import { Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import AppTitle from "../shared/components/appTitle";

export default function LoginScreen({ navigation }) {
    return (
        <ImageBackground source={require('../../assets/background/фон.png')} style={styles.background}>
            <LinearGradient colors={['transparent', 'rgba(255, 255, 255, 0.6)']} style={styles.gradient} />
                <AppTitle />
                <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {
                    navigation.replace('Drawer')
                }}>
                    <FontAwesome name="facebook" size={26} color="#fff" style={styles.icon} />
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
        alignItems: 'center',
        backgroundColor: '#3B5998',
        borderRadius: 100,
        marginTop: 425
    },
    icon: {
        marginLeft: 37,
        marginRight: 16,
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'SFUIRegular',
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