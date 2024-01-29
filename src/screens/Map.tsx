import { View, Text, StyleSheet, Image } from "react-native";
import { fonts } from "../shared/styles/fonts";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";

import * as Location from 'expo-location';

export function Map() {
    const [location, setLocation] = useState<Location.LocationObject>();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <MapView
                style={{ width: '100%', height: '100%', flex: 1 }}
                region={{
                    latitude: location ? location.coords.latitude : 46.8427,
                    longitude: location ? location.coords.longitude : 29.629,
                    latitudeDelta: 0.003,
                    longitudeDelta: 0.003,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location ? location.coords.latitude : 46.8427,
                        longitude: location ? location.coords.longitude : 29.629,
                    }}
                    image={require('../../assets/icons/icon_locating.png')}
                />
            </MapView>
            <View style={styles.icons}>
                <Image source={require('../../assets/icons/icon_sent.png')} style={{ left: 45 }} />
                <Image source={require('../../assets/icons/icon_search.png')} style={{ right: 45 }} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CoffeTime</Text>
                <Text style={{ fontFamily: fonts.SFUILight, color: '#ADADAD', fontSize: 16 }}>900 м = 15 минут</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-end',
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 150,
        position: 'absolute',
        width: '100%',
    },
    title: {
        fontFamily: fonts.LobsterRegular,
        fontSize: 24,
        marginBottom: 10
    },
    titleContainer: {
        marginBottom: 45,
        marginLeft: 70,
        marginTop: 10
    }
});