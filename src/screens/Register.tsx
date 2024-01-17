import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppTitle from "../shared/components/appTitle";

export default function RegisterScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/background/фон.png')} style={styles.background}>
                <LinearGradient colors={['transparent', 'rgba(255, 255, 255, 0.6)']} style={styles.gradient} />
                <AppTitle />
                <View style={styles.profilePhotoContainer}>
                    <Image source={require('../../assets/profile/user.png')} style={styles.profilePhoto} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value="Анна Борисова"
                    />
                    <MaterialCommunityIcons name="pencil-outline" size={28} color="#fff" />
                </View>
                <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                    <Text style={styles.buttonText}>далее</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    background: {
        flex: 1,
        alignItems: 'center',

    },
    button: {
        width: 300,
        alignItems: 'center',
        backgroundColor: '#C8D9AF',
        borderRadius: 100,
        marginTop: 140
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'SFUIRegular',
        fontSize: 18,
        paddingVertical: 15
    },
    profilePhoto: {
        width: 135,
        height: 135,
    },
    profilePhotoContainer: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 120,
        marginTop: 60
    },
    input: {
        width: 215,
        fontSize: 18,
        fontFamily: 'SFUIRegular',
        color: '#fff',
        marginBottom: 5
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 60,
        paddingHorizontal: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2789)',
        width: 245,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: '30%',
    },
});