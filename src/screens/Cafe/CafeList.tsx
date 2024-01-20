import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import { useDispatch } from 'react-redux';
import { fetchList, selectCafes } from '../../redux/cafeListSlice';
import { AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { Map } from '../Map';
import { CafeStackProps } from "../../../types";

export function CafeList({ navigation } : CafeStackProps) {
    const [isLeftActive, setIsLeftActive] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const sessionId = "92b51048-3e76-4279-8db7-90a598e7e15c";
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
                <ImageBackground source={require('../../../assets/icons/icon_map_list.png')} style={{ width: 130, height: 34, zIndex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity onPress={handleToggleLeft} style={{ flex: 1 }} />
                    <TouchableOpacity onPress={handleToggleRight} style={{ flex: 1 }} />
                </ImageBackground>
                <Image source={require('../../../assets/icons/icon_switch_map.png')} style={!isLeftActive ? styles.activeIcon : { ...styles.activeIcon, left: 120 }} />
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
                                <TouchableOpacity style={styles.details} onPress={() => navigation.navigate('CafeDetails', { sessionId: sessionId, cafeId: item.id })}>
                                    <Text style={{ color: '#BFBFBF', fontFamily: 'SFUILight' }}>подробнее</Text>
                                    <Image source={require('../../../assets/icons/icon_read_more.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
                style={{ backgroundColor: '#fff' }}
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
    activeIcon: {
        position: 'absolute',
        right: 120,
        top: 12,
        zIndex: 0
    },
});