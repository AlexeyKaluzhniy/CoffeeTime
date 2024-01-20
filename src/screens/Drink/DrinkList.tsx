import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Drink } from '../../../types';

export function DrinkList({ drinks }: { drinks: Drink[] }) {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={drinks}
                keyExtractor={item => item.cofeId}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                            <View style={{ height: 75 }}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.subtitle}>кофейный напиток</Text>
                            </View>
                            <Image source={{ uri: item.imagesPath }} style={{ width: 160, height: 120, alignSelf: 'center' }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
                                <View style={styles.price}>
                                    <Text style={styles.priceNumber}>{item.price}</Text>
                                    <Image source={require('../../../assets/icons/icon_ruble.png')} />
                                </View>
                                <View style={{ right: 8 }}>
                                    <Image source={item.favorite ? require('../../../assets/icons/icon_heart_active.png') :
                                        require('../../../assets/icons/icon_heart_gray.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                numColumns={2}
                style={{ marginTop: 8 }}
            />
        </View>
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
        fontFamily: 'SFUIRegular',
        fontSize: 16,
        color: '#717171',
        marginLeft: 8,
        marginTop: 8
    },
    subtitle: {
        color: '#717171',
        fontFamily: 'SFUIRegular',
        fontSize: 12,
        marginLeft: 8,
    },
    price: {
        left: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceNumber: {
        fontFamily: 'lobsterRegular',
        fontSize: 24,
        color: '#C8D9AF'
    }
});