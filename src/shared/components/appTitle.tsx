import { Text, View, StyleSheet } from 'react-native'

export function AppTitle() {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>CoffeTime</Text>
            <Text style={styles.subtitleText}>территория кофе</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 100,
    },
    titleText: {
        color: '#fff',
        fontSize: 64,
        fontFamily: 'lobsterRegular'
    },
    subtitleText: {
        color: '#fff',
        fontSize: 16,
        alignSelf: 'flex-end',
        fontFamily: 'SFUILight',
        bottom: 15,
        right: 15
    },
});