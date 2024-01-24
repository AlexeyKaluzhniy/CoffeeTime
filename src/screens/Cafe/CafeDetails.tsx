import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { CafeStackProps } from '../../../navigationTypes';
import { LinearGradient } from 'expo-linear-gradient';
import { CafeDrinkList } from '../Drink/CafeDrinkList';
import { fetchCafeDetails, selectCafeDetails } from '../../redux/cafe/cafeDetailsReducer';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { colors } from '../../shared/styles/colors';
import { fonts } from '../../shared/styles/fonts';
import { LoadingIndicator } from '../../shared/components/LoadingIndicator';

export function CafeDetails({ navigation, route }: CafeStackProps) {
    const dispatch = useDispatch<AppDispatch>();
    const details = useSelector(selectCafeDetails);
    const [isPressed, setIsPressed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handlePress = useCallback(() => {
        setIsPressed(prevState => !prevState);
    }, []);

    useEffect(() => {
        dispatch(fetchCafeDetails({ sessionId: route.params.sessionId, cafeId: route.params.cafeId }))
            .then(() => setIsLoading(false));
    }, [dispatch]);

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            {!isLoading && details ?
                (<View style={{ flex: 1 }}>
                    <ImageBackground source={{ uri: details.images }} style={{ width: '100%', height: 308, justifyContent: 'flex-end' }}>
                        <LinearGradient colors={['transparent', 'rgba(247, 236, 218, 0.8)']} style={styles.gradient} />
                        <View style={styles.infoContainer}>
                            <View>
                                <Text style={styles.title}>{details.name}</Text>
                                <Text style={styles.address}>{details.address}</Text>
                            </View>
                            <TouchableOpacity style={styles.switch} activeOpacity={0.9} onPress={handlePress}>
                                <Image source={require('../../../assets/icons/icon_switch_bg.png')} />
                                <Image source={require('../../../assets/icons/icon_swich_pin_active.png')} style={!isPressed ? styles.switchPin : { ...styles.switchPin, left: 18 }} />
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                    <CafeDrinkList sessionId={route.params!.sessionId} cafeId={details.id} navigation={navigation} />
                </View>) :
                (<LoadingIndicator />)}
        </View>
    )
}

const styles = StyleSheet.create({
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
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: '30%',
    },
    switch: {
        position: 'relative',
        alignSelf: 'flex-end',
        marginRight: 10,
    },
    switchPin: {
        position: 'absolute',
        top: 4,
        left: -2
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    }
});