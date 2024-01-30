import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { fonts } from "../shared/styles/fonts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCafes } from "../redux/cafe/cafeListReducer";
import { colors } from "../shared/styles/colors";

import * as Location from 'expo-location';
import * as geolib from 'geolib';
import MapView, { Marker } from "react-native-maps";
import customMapStyle from '../shared/styles/customMapStyle.json';

export function Map() {
    const [location, setLocation] = useState<Location.LocationObject>();
    const [distance, setDistance] = useState(0);
    const cafes = useSelector(selectCafes);

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

    const handleMarkerSelect = (marker: { latitude: number, longitude: number }) => {
        if (location) {
            const distance = geolib.getDistance({ latitude: location.coords.latitude, longitude: location.coords.longitude }, marker);
            setDistance(distance);
        }
    }

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
                customMapStyle={customMapStyle}
                onPress={() => setDistance(0)}
            >
                <Marker
                    coordinate={{
                        latitude: location ? location.coords.latitude : 46.8427,
                        longitude: location ? location.coords.longitude : 29.629,
                    }}
                    image={require('../../assets/icons/icon_locating.png')}
                />
                {cafes && cafes.map(cafe => {
                    const [latitude, longitude] = cafe.coordinates.split(',').map(Number);
                    return (
                        <Marker
                            key={cafe.id}
                            coordinate={{ latitude: latitude, longitude: longitude }}
                            title={cafe.name}
                            description={cafe.address}
                            pinColor={colors.PRIMARY}
                            onPress={() => handleMarkerSelect({ latitude: latitude, longitude: longitude })}
                        />
                    );
                })}
            </MapView>
            <View style={styles.icons}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Image source={require('../../assets/icons/icon_sent.png')} style={{ left: 45 }} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                    <Image source={require('../../assets/icons/icon_search.png')} style={{ right: 45 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>CoffeTime</Text>
                <Text style={{ fontFamily: fonts.SFUILight, color: '#ADADAD', fontSize: 16 }}>{distance} м = {Math.round(distance / 120)} минут</Text>
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
        zIndex: 1
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