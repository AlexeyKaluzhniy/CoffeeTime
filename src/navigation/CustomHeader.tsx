import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { fonts } from '../shared/styles/fonts';

export function CustomHeader({ navigation }: NativeStackHeaderProps | DrawerHeaderProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Entypo name="menu" size={26} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>CoffeTime</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 8,
        paddingTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: 'relative'
    },
    icon: {
        position: 'absolute',
        left: 20,
        top: 37
    },
    title: {
        fontFamily: fonts.LobsterRegular,
        fontSize: 22,
        alignSelf: 'center'
    },
});