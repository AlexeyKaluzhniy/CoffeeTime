import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AppTitle } from "../shared/components/AppTitle";
import { useState } from "react";
import { fonts } from "../shared/styles/fonts";
import { colors } from "../shared/styles/colors";
import { RootStackProps } from "../../navigationTypes";
import { SignInUpLink } from "../shared/components/SignInUpLink";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchSessionId } from "../redux/auth/authReducer";

export function RegisterScreen({ navigation }: RootStackProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [stage, setStage] = useState('name');
    const dispatch = useDispatch<AppDispatch>();

    const handleNextStage = () => {
        if (stage === 'name') {
            setStage('email');
        } else if (stage === 'email') {
            setStage('password');
        } else {
            dispatch(fetchSessionId({ email, password, url: 'Register' }));
            navigation.replace('Drawer');
        }
    };

    return (
        <ImageBackground source={require('../../assets/background/фон.png')} style={styles.background}>
            <LinearGradient colors={['transparent', 'rgba(255, 255, 255, 0.6)']} style={styles.gradient} />
            <AppTitle />
            <View style={styles.profilePhotoContainer}>
                <Image source={require('../../assets/icons/user.png')} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={stage === 'name' ? 'имя' : (stage === 'email' ? 'example@example.com' : 'пароль')}
                    placeholderTextColor='white'
                    value={stage === 'name' ? name : (stage === 'email' ? email : password)}
                    onChangeText={text => {
                        if (stage === 'name') {
                            setName(text);
                        } else if (stage === 'email') {
                            setEmail(text);
                        } else {
                            setPassword(text);
                        }
                    }}
                />
                <Image source={require('../../assets/icons/icon_pencil_edit.png')} style={{ width: 36, height: 36 }} />
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleNextStage}>
                <Text style={styles.buttonText}>{stage === 'password' ? 'зарегистрироваться' : 'далее'}</Text>
            </TouchableOpacity>
            <SignInUpLink handlePress={() => navigation.replace('Login')} title='Войти' />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        width: 300,
        alignItems: 'center',
        backgroundColor: colors.PRIMARY,
        borderRadius: 100,
        marginTop: 140
    },
    buttonText: {
        color: '#fff',
        fontFamily: fonts.SFUIRegular,
        fontSize: 18,
        paddingVertical: 15
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
        fontFamily: fonts.SFUIRegular,
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