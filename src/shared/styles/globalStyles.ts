import { StyleSheet } from 'react-native';
import { fonts } from './fonts';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    emptyScreenText: {
        fontFamily: fonts.SFUIRegular,
        fontSize: 16,
        color: '#5E5E5E'
    },
    headerListOffset: {
        marginBottom: 10
    },
});