import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrinkDetailsProps } from '../../../navigationTypes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchDrinkDetails, selectDrinkDetails } from '../../redux/drink/drinkDetailsReducer';
import { useSelector } from 'react-redux';
import { colors } from '../../shared/styles/colors';
import { fonts } from '../../shared/styles/fonts';
import { LoadingIndicator } from '../../shared/components/LoadingIndicator';
import { FavoriteButton } from '../../shared/components/FavoriteButton';

export function Drink({ route }: DrinkDetailsProps) {
    const dispatch = useDispatch<AppDispatch>();
    const details = useSelector(selectDrinkDetails);
    const [isLoading, setIsLoading] = useState(true);

    const getImageSource = (iconType: string) => {
        switch (iconType) {
            case 'milk':
                return require('../../../assets/icons/icon_milk.png');
            case 'coffe':
                return require('../../../assets/icons/icon_coffe.png');
            case 'pressure':
                return require('../../../assets/icons/icon_pressure.png');
            case 'temperature':
                return require('../../../assets/icons/icon_temperature.png');
            default:
                return require('../../../assets/icons/icon_water.png');
        }
    };

    useEffect(() => {
        dispatch(fetchDrinkDetails({ sessionId: route.params.sessionId, productId: route.params.id }))
            .then(() => setIsLoading(false));
    }, [dispatch]);

    return (
        <View style={{ flex: 1 }}>
            {!isLoading && details ?
                (<View style={{ flex: 1 }}>
                    <Image source={{ uri: details.imagesPath }} style={styles.image} />
                    <View style={styles.titleContainer}>
                        <Text style={styles.productTitle}>{details.productName}</Text>
                        <View style={styles.heart}>
                            <FavoriteButton productId={details.id} />
                        </View>
                    </View>
                    <View style={styles.attributes}>
                        {details.attribute.map(item => {
                            return (
                                <View key={item.id}>
                                    <Image source={getImageSource(item.iconType)} style={{ marginRight: 16, marginTop: 16 }} />
                                </View>
                            );
                        })}
                    </View>
                    <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                        <View style={styles.footer}>
                            <Text style={styles.price}>{details.price}</Text>
                            <Image source={require('../../../assets/icons/simvol_rub.png')} style={{ marginTop: 3, marginRight: 5 }} />
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonTitle}>заказать</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>) :
                (<LoadingIndicator />)}
        </View>
    )
}

const styles = StyleSheet.create({
    productTitle: {
        fontFamily: fonts.LobsterRegular,
        fontSize: 24,
    },
    titleContainer: {
        flexDirection: 'row',
        marginLeft: 22,
        marginTop: 35,
        width: 180
    },
    heart: {
        marginTop: 7,
        marginLeft: 8
    },
    price: {
        marginLeft: 20,
        fontFamily: fonts.SFUIRegular,
        fontSize: 28,
        color: colors.SECONDARY_TEXT,
    },
    button: {
        backgroundColor: colors.PRIMARY,
        marginLeft: 35,
    },
    buttonTitle: {
        paddingHorizontal: 60,
        paddingVertical: 8,
        color: '#fff',
        fontSize: 20,
        fontFamily: fonts.SFUIRegular
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: 'center'
    },
    attributes: {
        flexDirection: 'row',
        marginLeft: 22
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingTop: 18,
        paddingBottom: 24,
        borderTopWidth: 1,
        borderTopColor: '#EAEAEA',
        width: 332
    }
});