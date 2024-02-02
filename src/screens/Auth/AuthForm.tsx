import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { LoadingIndicator } from '../../shared/components/LoadingIndicator';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchSessionId, selectRequestError, selectRequestStatus, selectSessionId, resetError } from '../../redux/authSlice';
import { fonts } from '../../shared/styles/fonts';
import { colors } from '../../shared/styles/colors';
import { AuthProps } from '../../../componentTypes';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackProps } from '../../../navigationTypes';

export function AuthForm({ url, buttonText }: AuthProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector(selectRequestStatus);
    const error = useSelector(selectRequestError);
    const sessionId = useSelector(selectSessionId);

    const navigation = useNavigation<RootStackProps['navigation']>();

    const handleAuth = () => {
        if (email.length <= 5) {
            handleError('Email должен содержать более 5 символов');
            return;
        }
        if (password.length < 8) {
            handleError('Пароль должен содержать не менее 8 символов');
            return;
        }
        dispatch(fetchSessionId({ email, password, url }));
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
        } else if (!loading && error) {
            handleError(url === 'Register' ? 'Пользователь с таким email уже существует' : 'Пользователя с таким email не существует');
            dispatch(resetError());
        }
    }, [loading, error, sessionId]);

    return (
        <>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainerRow}>
                    <TextInput
                        style={styles.input}
                        placeholder='e-mail'
                        placeholderTextColor='white'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        autoCapitalize='none'
                    />
                    <Image source={require('../../../assets/icons/icon_pencil_edit.png')} style={styles.iconPencil} />
                </View>
                <View style={styles.inputContainerRow}>
                    <TextInput
                        style={styles.input}
                        placeholder='пароль'
                        placeholderTextColor='white'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        autoCapitalize='none'
                        secureTextEntry={!visible}
                    />
                    <TouchableOpacity onPress={() => setVisible(!visible)}>
                        <Entypo name={visible ? 'eye' : 'eye-with-line'} size={24} color="white" style={styles.iconEye} />
                    </TouchableOpacity>
                </View>
            </View>
            {loading ? (
                <View style={styles.loadingIndicator}>
                    <LoadingIndicator />
                </View>
            ) : (
                <>
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleAuth}>
                        <Text style={styles.buttonText}>{buttonText}</Text>
                    </TouchableOpacity>
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
        marginTop: 135
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
        marginBottom: 5,
    },
    inputContainer: {
        marginTop: 40,
        paddingHorizontal: 15,
        alignItems: 'center',
        width: 245,
    },
    inputContainerRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.2789)',
        width: 240,
        marginBottom: 15
    },
    loadingIndicator: {
        height: 50,
        marginTop: 140
    },
    iconPencil: {
        width: 36,
        height: 36,
    },
    iconEye: {
        marginTop: 5
    }
});