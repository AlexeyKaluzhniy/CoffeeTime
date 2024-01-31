import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { SignInUpLink } from '../../shared/components/SignInUpLink';
import { LoadingIndicator } from '../../shared/components/LoadingIndicator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchSessionId, selectRequestError, selectRequestStatus, selectSessionId } from '../../redux/auth/authReducer';
import { fonts } from '../../shared/styles/fonts';
import { colors } from '../../shared/styles/colors';
import { AuthProps } from '../../../componentTypes';

export function AuthForm({ navigation, url, buttonText }: AuthProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [stage, setStage] = useState<'email' | 'password'>('email');

    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(selectRequestStatus);
    const error = useSelector(selectRequestError);
    const sessionId = useSelector(selectSessionId);

    const handleNextStage = () => {
        if (stage === 'email') {
            email.length > 5 ? setStage('password') :
                handleError('Email должен состоять более, чем из 5 символов');
        } else {
            password.length >= 8 ? dispatch(fetchSessionId({ email, password, url })) :
                handleError('Пароль должен состоять не менее, чем из 8 символов');
        }
    };

    const handleError = (textError: string) => {
        Alert.alert(
            'Что-то пошло не так...',
            textError,
            [{ text: 'Ок' }]
        )
    }

    useEffect(() => {
        if (!loading && !error && sessionId) {
            navigation.replace('Drawer');
        } else if (!loading && error && stage !== 'email') {
            setStage('email');
            handleError(url === 'Register' ? 'Пользователь с таким email уже существует' : 'Пользователя с таким email не существует');
        }
    }, [loading, error, sessionId]);

    return (
        <>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={stage === 'email' ? 'e-mail' : 'пароль'}
                    placeholderTextColor='white'
                    value={stage === 'email' ? email : password}
                    onChangeText={text => {
                        if (stage === 'email') {
                            setEmail(text);
                        } else {
                            setPassword(text);
                        }
                    }}
                    secureTextEntry={stage === 'password'}
                />
                <Image source={require('../../../assets/icons/icon_pencil_edit.png')} style={{ width: 36, height: 36 }} />
            </View>
            {loading ? (
                <LoadingIndicator />
            ) : (
                <>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleNextStage}>
                        <Text style={styles.buttonText}>{stage === 'password' ? buttonText : 'далее'}</Text>
                    </TouchableOpacity>
                    <SignInUpLink handlePress={() => navigation.replace(url === 'Register' ? 'Login' : 'Register')} title={url === 'Register' ? 'Вход' : 'Регистрация'} />
                </>
            )}
        </>
    );
}

const styles = StyleSheet.create({
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
});