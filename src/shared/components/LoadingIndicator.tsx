import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import { colors } from '../styles/colors'

export function LoadingIndicator() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ActivityIndicator size='large' color={colors.PRIMARY} />
        </View>
    )
}