import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../../redux/store";
import { useSelector } from "react-redux";
import { Map } from '../Map';
import { CafeStackProps } from "../../../navigationTypes";
import { fonts } from "../../shared/styles/fonts";
import { CafeListCard } from "./CafeListCard";
import { fetchAllProducts } from "../../redux/favoriteReducer";
import { selectSessionId } from "../../redux/authSlice";
import { fetchCafeList, selectCafes } from "../../redux/cafeReducer";
import { EmptyScreen } from "../../shared/components/EmptyScreen";
import { globalStyles } from "../../shared/styles/globalStyles";
import { colors } from "../../shared/styles/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function CafeList({ navigation }: CafeStackProps) {
    const [isLeftActive, setIsLeftActive] = useState(false);
    const data = useSelector(selectCafes);
    const dispatch = useDispatch<AppDispatch>();
    const sessionId = useSelector(selectSessionId);

    useEffect(() => {
        if (sessionId) {
            dispatch(fetchCafeList(sessionId));
            dispatch(fetchAllProducts(sessionId));
        }
    }, [dispatch, sessionId]);

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
        <View style={globalStyles.container}>
            <View style={styles.switchContainer}>
                <TouchableOpacity style={!isLeftActive ? styles.switchButton : [styles.switchButton, styles.activeButton]} onPress={handleToggleMap} activeOpacity={1}>
                    <MaterialCommunityIcons name="map-marker" size={24} color={colors.SECONDARY_TEXT} />
                </TouchableOpacity>
                <TouchableOpacity style={isLeftActive ? styles.switchButton : [styles.switchButton, styles.activeButton]} onPress={handleToggleList} activeOpacity={1}>
                    <MaterialCommunityIcons name="menu" size={24} color={colors.SECONDARY_TEXT} />
                </TouchableOpacity>
            </View>
            {isLeftActive ? <Map /> : (data.length ? <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <CafeListCard cafe={item}>
                            <TouchableOpacity style={styles.details} onPress={() => navigation.navigate('CafeDetailsScreen', { sessionId, cafeId: item.id })}>
                                <Text style={styles.detailsButtonText}>подробнее</Text>
                                <Image source={require('../../../assets/icons/icon_read_more.png')} />
                            </TouchableOpacity>
                        </CafeListCard>
                    );
                }}
                style={{ backgroundColor: '#fff' }}
            /> :
                <EmptyScreen>
                    <Text style={globalStyles.emptyScreenText}>По вашему запросу ничего не найдено</Text>
                </EmptyScreen>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 5,
    },
    detailsButtonText: {
        color: '#BFBFBF',
        fontFamily: fonts.SFUILight,
        marginBottom: 3
    },
    switchContainer: {
        borderWidth: 1,
        borderRadius: 16,
        borderColor: colors.SECONDARY_TEXT,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        marginTop: 8,
        zIndex: 1,
        width: 128,
        height: 32
    },
    switchButton: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 3,
    },
    activeButton: {
        backgroundColor: colors.PRIMARY,
        borderRadius: 16,
    }
});