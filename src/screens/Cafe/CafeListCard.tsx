import { StyleSheet, Text, View, Image, ViewProps } from 'react-native';
import React from 'react';
import { colors } from '../../shared/styles/colors';
import { fonts } from '../../shared/styles/fonts';
import { Cafe } from '../../../componentTypes';

export function CafeListCard({ children, cafe }: ViewProps & { cafe: Cafe }) {
    return (
        <View style={styles.cafeCard}>
            <Image source={{ uri: cafe.images }} style={{ width: 125, height: 125 }} />
            <View style={{ flex: 1, marginLeft: 15 }}>
                <Text style={styles.itemTitle}>{cafe.name}</Text>
                <Text style={{ color: colors.SECONDARY_TEXT, fontFamily: fonts.SFUILight }}>мы находимся:</Text>
                <Text style={styles.address}>{cafe.address}</Text>
                {children}
            </View>
        </View>
    )
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
        fontFamily: fonts.SFUILight,
        fontSize: 20,
        color: colors.PRIMARY
    },
    address: {
        color: colors.SECONDARY_TEXT,
        fontFamily: fonts.SFUIRegular,
        fontSize: 16
    }
});