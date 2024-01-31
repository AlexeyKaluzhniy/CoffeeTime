import { View, Text, StyleSheet, Image } from "react-native";
import { fonts } from "../shared/styles/fonts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCafes } from "../redux/cafe/cafeListReducer";
import { colors } from "../shared/styles/colors";
import { Cafe } from "../../componentTypes";

import * as Location from 'expo-location';
import MapView, { Marker } from "react-native-maps";
import customMapStyle from '../shared/styles/customMapStyle.json';

export function Map() {
    const [location, setLocation] = useState<Location.LocationObject>();
    const [cafe, setCafe] = useState<Cafe>();
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

    const handleMarkerSelect = (cafe: Cafe) => {
        if (location) {
            setCafe(cafe);
        }
    }

    const handleMapPress = () => {
        setCafe(undefined);
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
                onPress={handleMapPress}
            >
                <Marker
                    coordinate={{
                        latitude: location ? location.coords.latitude : 46.8427,
                        longitude: location ? location.coords.longitude : 29.629,
                    }}
                    image={require('../../assets/icons/icon_locating.png')}
                    title='Вы здесь'
                />
                {cafes && cafes.map(cafe => {
                    const [latitude, longitude] = cafe.coordinates.split(',').map(Number);
                    return (
                        <Marker
                            key={cafe.id}
                            coordinate={{ latitude, longitude }}
                            title={cafe.name}
                            pinColor={colors.PRIMARY}
                            onPress={() => handleMarkerSelect(cafe)}
                        />
                    );
                })}
            </MapView>
            <View style={styles.titleContainer}>
                {cafe ? (
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: cafe.images }} style={{ width: 120, height: 120 }} />
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.title}>{cafe.name}</Text>
                            <Text style={styles.address}>{cafe.address}</Text>
                        </View>
                    </View>
                ) :
                    <Text style={{ ...styles.title, alignSelf: 'center' }}>CoffeTime</Text>
                }
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
    title: {
        fontFamily: fonts.LobsterRegular,
        fontSize: 24,
        marginBottom: 10
    },
    titleContainer: {
        height: 120,
        justifyContent: 'center',
    },
    address: {
        fontFamily: fonts.SFUIRegular,
        fontSize: 14,
        color: colors.SECONDARY_TEXT
    },
    descriptionContainer: {
        justifyContent: 'center',
        width: '60%',
        marginLeft: 10
    }
});