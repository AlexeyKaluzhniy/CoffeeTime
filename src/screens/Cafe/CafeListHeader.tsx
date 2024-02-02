import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useCallback, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { fonts } from '../../shared/styles/fonts';
import { colors } from '../../shared/styles/colors';
import { Cafe } from '../../../componentTypes';
import { globalStyles } from '../../shared/styles/globalStyles';

export function CafeListHeader({ cafe }: { cafe: Cafe }) {
    const [isPressed, setIsPressed] = useState(false);

    const handleFavoriteCafe = useCallback(() => {
        setIsPressed(prevState => !prevState);
    }, []);

    return (
        <ImageBackground source={{ uri: cafe.images }} style={[styles.imageContainer, globalStyles.headerListOffset]}>
            <LinearGradient colors={['transparent', 'rgba(247, 236, 218, 0.8)']} style={styles.gradient} />
            <View style={styles.infoContainer}>
                <View>
                    <Text style={styles.title}>{cafe.name}</Text>
                    <Text style={styles.address}>{cafe.address}</Text>
                </View>
                <TouchableOpacity style={styles.switch} activeOpacity={0.9} onPress={handleFavoriteCafe}>
                    <View style={isPressed ? { ...styles.switchPin, alignSelf: 'flex-end' } : styles.switchPin}>
                        <Image source={isPressed ? require('../../../assets/icons/icon_heart_active.png') : require('../../../assets/icons/icon_heart_gray.png')} />
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 308,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: fonts.LobsterRegular,
        fontSize: 28,
        color: colors.PRIMARY_TEXT,
        marginBottom: 5,
        marginLeft: 16,
    },
    address: {
        marginLeft: 16,
        color: colors.SECONDARY_TEXT,
        fontFamily: fonts.SFUIRegular,
        fontSize: 18,
        width: 200,
    },
    switch: {
        alignSelf: 'flex-end',
        marginRight: 10,
        borderWidth: 2,
        backgroundColor: '#fff',
        borderRadius: 16,
        borderColor: '#eee',
        width: 50,
    },
    switchPin: {
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#eee',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        paddingRight: 2,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: '30%',
    }
});