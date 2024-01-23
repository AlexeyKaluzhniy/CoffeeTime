import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { fonts } from '../../shared/styles/fonts';
import { colors } from '../../shared/styles/colors';
import { Drink } from '../../../componentTypes';

type Props = {
    drink: Drink;
    pressHandler: (id: string) => void;
}

export function DrinkCard({ drink, pressHandler }: Props) {
    return (
        <TouchableOpacity style={styles.card} onPress={() => pressHandler(drink.id)} activeOpacity={0.7}>
            <View style={{ height: 75 }}>
                <Text style={styles.title}>{drink.name}</Text>
                <Text style={styles.subtitle}>кофейный напиток</Text>
            </View>
            <Image source={{ uri: drink.imagesPath }} style={{ width: 160, height: 120, alignSelf: 'center' }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                <View style={styles.price}>
                    <Text style={styles.priceNumber}>{drink.price}</Text>
                    <Image source={require('../../../assets/icons/icon_ruble.png')} />
                </View>
                <View style={{ right: 8 }}>
                    <Image source={drink.favorite ? require('../../../assets/icons/icon_heart_active.png') :
                        require('../../../assets/icons/icon_heart_gray.png')} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        width: 168,
        height: 235,
        marginLeft: 8,
        backgroundColor: '#fff',
        elevation: 3,
        marginBottom: 10
    },
    title: {
        fontFamily: fonts.SFUIRegular,
        fontSize: 16,
        color: colors.SECONDARY_TEXT,
        marginLeft: 8,
        marginTop: 8
    },
    subtitle: {
        color: colors.SECONDARY_TEXT,
        fontFamily: fonts.SFUIRegular,
        fontSize: 12,
        marginLeft: 8,
    },
    price: {
        left: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceNumber: {
        fontFamily: fonts.LobsterRegular,
        fontSize: 24,
        color: colors.PRIMARY
    }
});
