import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { DrawerHeaderProps } from '@react-navigation/drawer';

export function CustomHeaderDrawer({ navigation }: DrawerHeaderProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.openDrawer()}>
                <Entypo name="menu" size={26} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>CoffeTime</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 15,
        paddingTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    icon: {
        position: 'absolute',
        left: 10,
        top: 32
    },
    title: {
        fontFamily: 'lobsterRegular',
        fontSize: 22
    }
});