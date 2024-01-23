import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux';
import { fetchCafeList, selectCafes } from '../../redux/cafe/cafeListReducer';
import { AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { Map } from '../Map';
import { CafeStackProps } from "../../../navigationTypes";
import { fonts } from "../../shared/styles/fonts";
import { CafeListCard } from "./CafeListCard";

export function CafeList({ navigation }: CafeStackProps) {
    const [isLeftActive, setIsLeftActive] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const sessionId = "af928e21-53a5-40e5-9d10-11892763b2c5";
    const data = useSelector(selectCafes);

    useEffect(() => {
        dispatch(fetchCafeList(sessionId));
    }, [dispatch]);

    const handleToggleMap = () => {
        if (!isLeftActive) {
            setIsLeftActive(!isLeftActive);
        }
    };

    const handleToggleList = () => {
        if (isLeftActive) {
            setIsLeftActive(!isLeftActive);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.toggleContainer}>
                <Image source={require('../../../assets/icons/icon_map_list.png')} style={{ zIndex: 1 }} />
                <Image source={require('../../../assets/icons/icon_switch_map.png')} style={!isLeftActive ? styles.activeIcon : { ...styles.activeIcon, left: 120 }} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleToggleMap} style={{ flex: 1 }} />
                    <TouchableOpacity onPress={handleToggleList} style={{ flex: 1 }} />
                </View>
            </View>
            {isLeftActive ? <Map /> : <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <CafeListCard cafe={item}>
                            <TouchableOpacity style={styles.details} onPress={() => navigation.navigate('CafeDetails', { sessionId: sessionId, cafeId: item.id })}>
                                <Text style={{ color: '#BFBFBF', fontFamily: fonts.SFUILight }}>подробнее</Text>
                                <Image source={require('../../../assets/icons/icon_read_more.png')} />
                            </TouchableOpacity>
                        </CafeListCard>
                    );
                }}
                style={{ backgroundColor: '#fff' }}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5
    },
    toggleContainer: {
        backgroundColor: '#fff',
        marginTop: 8,
        marginBottom: 15,
        justifyContent: 'center',
        position: 'relative',
        flexDirection: 'row'
    },
    activeIcon: {
        position: 'absolute',
        right: 120,
        top: 4,
        zIndex: 0
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        width: '35%',
        height: '100%',
        zIndex: 2,
    }
});