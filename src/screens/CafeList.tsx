import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux';
import { Entypo, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import { fetchList, selectCafes } from '../redux/cafeListSlice';
import { AppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import Map from './Map';

export default function CafeList() {
    const [isLeftActive, setIsLeftActive] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const sessionId = "1083c095-7431-459f-859f-ed57d76ac5fb";
    const data = useSelector(selectCafes);

    useEffect(() => {
        dispatch(fetchList(sessionId));
    }, [dispatch]);

    const handleToggleLeft = () => {
        if (!isLeftActive) {
            setIsLeftActive(!isLeftActive);
        }
    };

    const handleToggleRight = () => {
        if (isLeftActive) {
            setIsLeftActive(!isLeftActive);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.toggleContainer}>
                <View style={styles.toggle}>
                    <TouchableOpacity onPress={handleToggleLeft} style={isLeftActive ?
                        { ...styles.activeIcon, paddingLeft: 18, paddingRight: 18 } :
                        { marginLeft: 20 }}>
                        <MaterialCommunityIcons name="map-marker" size={24} color="#717171" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleToggleRight} style={!isLeftActive ? styles.activeIcon : { marginRight: 25 }}>
                        <Foundation name="list" size={24} color="#717171" />
                    </TouchableOpacity>
                </View>
            </View>
            {isLeftActive ? <Map /> : <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.cafeCard}>
                            <Image source={{ uri: item.images }} style={{ width: 125, height: 125 }} />
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={styles.itemTitle}>{item.name}</Text>
                                <Text style={{ color: '#717171', fontFamily: 'SFUILight' }}>мы находимся:</Text>
                                <Text style={{ color: '#717171', fontFamily: 'SFUIRegular', fontSize: 16 }}>{item.address}</Text>
                                <TouchableOpacity style={styles.details}>
                                    <Text style={{ color: '#BFBFBF', fontFamily: 'SFUILight' }}>подробнее</Text>
                                    <Entypo name="chevron-right" size={16} color="#BFBFBF" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
                style={{ marginTop: 8 }}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    cafeCard: {
        backgroundColor: '#fff',
        marginBottom: 8,
        height: 125,
        flexDirection: 'row',
        elevation: 2,
    },
    itemTitle: {
        marginVertical: 8,
        fontFamily: 'SFUILight',
        fontSize: 20,
        color: '#C8D9AF'
    },
    details: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5
    },
    toggleContainer: {
        backgroundColor: '#fff',
        paddingTop: 8,
        paddingBottom: 15,
        alignItems: 'center',
    },
    toggle: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 120,
        height: 31,
        borderRadius: 20,
        borderColor: '#717171',
    },
    activeIcon: {
        paddingHorizontal: 23,
        backgroundColor: '#C8D9AF',
        borderRadius: 20,
        margin: 2
    },
});