import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { CafeList, CafeStackProps } from '../../../types';
import { LinearGradient } from 'expo-linear-gradient';

export function CafeDetails({ route }: CafeStackProps) {
    const [details, setDetails] = useState<CafeList>();
    const [isPressed, setIsPressed] = useState(false);

    useEffect(() => {
        try {
            const fetchDetails = async () => {
                const response = await fetch('http://cafe.prox2.dex-it.ru/api/Cafe/GetCafe', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=utf8',
                    },
                    body: JSON.stringify({ sessionId: route.params!.sessionId, cafeId: route.params!.cafeId })
                })
                if (!response.ok) {
                    console.log(response.status);
                    throw new Error('Something went wrong');
                }
                const responseJson = await response.json();
                setDetails(responseJson);
            }
            fetchDetails();
        }
        catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <View>
            <ScrollView>
                <ImageBackground source={{ uri: details?.images }} style={{ width: '100%', height: 308 }}>
                    <LinearGradient colors={['transparent', 'rgba(247, 236, 218, 0.8)']} style={styles.gradient} />
                    <Text style={styles.title}>{details?.name}</Text>
                    <Text style={styles.address}>{details?.address}</Text>
                    <TouchableOpacity style={styles.switch} activeOpacity={0.8} onPress={() => setIsPressed(!isPressed)}>
                        <Image source={require('../../../assets/icons/icon_switch_bg.png')} />
                        <Image source={require('../../../assets/icons/icon_swich_pin_active.png')} style={!isPressed ? styles.switchPin : { ...styles.switchPin, left: 18 }} />
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'lobsterRegular',
        fontSize: 28,
        color: '#474747',
        position: 'absolute',
        bottom: 60,
        left: 16
    },
    address: {
        position: 'absolute',
        bottom: 8,
        left: 16,
        color: '#717171',
        fontFamily: 'SFUIRegular',
        fontSize: 18,
        width: 200
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: '30%',
    },
    switch: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        bottom: 5
    },
    switchPin: {
        position: 'absolute',
        top: 4,
        left: -2
    }
});