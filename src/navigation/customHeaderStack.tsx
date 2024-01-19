import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';


export function CustomHeaderStack({ navigation }: NativeStackHeaderProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/icons/icon_back.png')} />
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